# Cutranslator Dataset Baseline

**Last updated:** 2026-05-27
**Last batch deployed:** 24.5 (consolidation — no data additions)
**Last data batch:** 24 (Zimbabwe)

## Authoritative counts

These numbers are the source of truth for all future batch prompts.
Every future batch prompt's "before" count must match this file, not a running chat tally.

| Metric | Count | How to verify |
|---|---|---|
| Regions | 113 | `grep -c "id:" data/regions.ts` |
| Regional names | 1622 | `grep -c "name:" data/regionalNames.ts` |
| Tier 3 entities | 302 | `grep -c "maps_to:" data/regionalCuts.ts` |
| Multi-canonical anchors | 193 | see python script below |

**Anchor verification script:**

```python
import re
with open("data/regionalCuts.ts", encoding="utf-8") as f:
    content = f.read()
blocks = re.findall(r'maps_to:\s*\[(.*?)\]', content, re.DOTALL)
print(f"Entities: {len(blocks)}")
print(f"Multi-canonical: {sum(1 for b in blocks if b.count('canonical_id:') > 1)}")
```

## Group / sub-category counts

| Group | Count |
|---|---|
| Americas — North | 3 (USA, Canada, Mexico) |
| Americas — Central | 6 |
| Americas — South | 8 |
| Europe — Western | 10 |
| Europe — Nordic | 4 |
| Europe — Central | 5 |
| Europe — Balkans | 9 |
| Europe — Eastern & Baltic | 6 |
| Middle East & North Africa | 8 |
| Central Asia | 2 |
| Asia-Pacific | 5 (China, Japan, South Korea, Taiwan, Mongolia) |
| Southeast Asia | 7 (Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam, Myanmar) |
| Oceania | 2 |
| Africa — Southern | 4 (South Africa, Botswana, Namibia, Zimbabwe) |
| Africa — East | 3 (Kenya, Tanzania, Uganda) |
| Africa — West | 1 (Nigeria) |
| Africa — Horn | 1 (Ethiopia) |
| South Asia — Sovereign | 5 (Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan) |
| South Asia — India (South) | 7 (Kerala, Tamil Nadu, Telangana, Andhra Pradesh, Maharashtra, Goa, Karnataka) |
| South Asia — India (North) | 4 (Uttar Pradesh, Punjab, Rajasthan, West Bengal) |
| South Asia — India (Central) | 1 |
| South Asia — India (Northeast) | 5 (Meghalaya, Nagaland, Manipur, Sikkim, Northeast Other) |
| South Asia — India (Himalayan) | 3 (Ladakh, Jammu & Kashmir, Himachal/Uttarakhand) |
| South Asia — India (Coastal/Islands) | 2 (Coastal-Colonial, Islands) |
| **TOTAL** | **113** |

## Species breakdown (regionalNames.ts)

| Species | Entries |
|---|---|
| Buffalo | 195 |
| Yak | 19 |
| Mithun | 10 |
| Cow (default, no explicit field) | 1398 |
| **TOTAL** | **1622** |

## Known curated apostrophe exceptions

Seven `name` fields contain straight apostrophes (U+0027). All are linguistically
correct and **slug-safe** — verified by `lib/__tests__/slug.test.ts` and a
production curl test (all return HTTP 200).

| Region | Name | Reason |
|---|---|---|
| `uk` | `butler's steak` | English convention |
| `egypt` | `dala' qasira` | Arabic ayin transliteration |
| `morocco` | `kora'in` | Arabic ayin transliteration |
| `uzbekistan` | `latta go'sht` | Standard Latin Uzbek orthography |
| `uzbekistan` | `to'sh` | Standard Latin Uzbek orthography |
| `uzbekistan` | `bo'yin` | Standard Latin Uzbek orthography |
| `uzbekistan` | `qovurg'a` | Standard Latin Uzbek orthography |

`toUrlSlug` (in `lib/url.ts`) strips both U+0027 and U+2019 (curly apostrophe)
before the ASCII gate, so these produce clean slugs and never hit
`encodeURIComponent`. `lib/__tests__/slug.test.ts` enforces this with 11
regression cases.

## Audit pattern for future batches

### Per-batch verification (scoped — use this in every new batch prompt)

Replace `BATCH_REGIONS` with the new slugs introduced by that batch only.
This prevents false alarms on pre-existing UK / Uzbek apostrophe entries.

```python
import re

BATCH_REGIONS = {"example_region"}  # ← set per batch

with open("data/regionalNames.ts", encoding="utf-8") as f:
    content = f.read()

rows = re.findall(r'name:\s*"([^"]*)",\s*region:\s*"([^"]*)"', content)
batch_rows = [(name, region) for name, region in rows if region in BATCH_REGIONS]

apostrophe_bad = [(n, r) for n, r in batch_rows if "'" in n or "\u2019" in n]
print(
    f"PASS: no apostrophes in {sorted(BATCH_REGIONS)} name fields"
    if not apostrophe_bad
    else f"FAIL: {apostrophe_bad}"
)

non_ascii_bad = [(n, r) for n, r in batch_rows if not n.isascii()]
print(
    f"PASS: all {sorted(BATCH_REGIONS)} name fields ASCII"
    if not non_ascii_bad
    else f"FAIL: {non_ascii_bad}"
)

print(f"INFO: audited {len(batch_rows)} entries across {sorted(BATCH_REGIONS)}")
```

### Global apostrophe inventory (informational — not a pass/fail gate)

Run once during consolidation or when a suspicious new entry appears.
Expected output is exactly the 7 entries listed above.

```python
import re
with open("data/regionalNames.ts", encoding="utf-8") as f:
    content = f.read()
rows = re.findall(r'name:\s*"([^"]*)",\s*region:\s*"([^"]*)"', content)
apostrophe_rows = [(n, r) for n, r in rows if "'" in n or "\u2019" in n]
print(f"INVENTORY: {len(apostrophe_rows)} name fields contain apostrophes")
for n, r in sorted(apostrophe_rows, key=lambda x: (x[1], x[0])):
    print(f"  {r}: {n}")
```

## Rule for next batch

1. The "before" counts in any future batch prompt must equal the values in
   this file. If a batch ships and counts change, **update this file in the
   same commit**.
2. The per-batch audit must use the **scoped** pattern above with `BATCH_REGIONS`
   set to that batch's new slugs only.
3. The global apostrophe inventory is informational; the 7 entries above are
   pre-approved and must not appear in the per-batch FAIL output.

## Live candidates for upcoming batches

| Priority | Region(s) | Notes |
|---|---|---|
| High | India supplemental (Batch 19.5) | Deferred enrichment from india.pdf (Bhujam Mamsam, Chukka Cut, etc.) — no new research needed |
| Medium | West African Fulani/Sahel | Pastoral transhumance beef pattern; needs research |
| Low | Zambia, Mozambique, Madagascar | Southern Africa expansion |
| Low | Levant (Iraq, Jordan, Lebanon, Syria) | Middle East fill |
| Low | Caucasus / remaining Central Asia (Georgia, Armenia, Azerbaijan, Kyrgyzstan) | |

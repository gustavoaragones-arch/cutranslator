# Cutranslator Dataset Baseline

**Last updated:** 2026-06-10
**Last batch deployed:** 28 (West Africa Tier 2: Chad + Burkina Faso — Sahel Set COMPLETE) / Offal: IR + EG + BR (commit ccb9c25)
**Last data batch:** 28 (West Africa — Chad + Burkina Faso) / Offal: Iran, Egypt, Brazil

## Phase B — Offal SVG overlays: COMPLETE

All 10 offal overlay SVGs are in `public/svg/offal/` and pass `validate_offal_svgs.sh` (10/10).
The diagram component (`CowDiagramNew.tsx`) routes offal IDs to `/svg/offal/` and muscle IDs to
`/svg/canonical/` based on the canonical's `primal` field.

**Verified 2026-06-07:** `./validate_offal_svgs.sh` → 10 pass, 0 fail.

**viewBox note:** Offal overlays use `viewBox="0 0 711.89 605.37"`; cow + muscle overlays use
`viewBox="0 0 711.89 622.56"`. The 17.19-unit difference at the bottom of the full SVG is
invisible in the component's crop viewBox (`"464 186 264 128"`, y=186–314). No render-time
transform is needed.

**Internal organ visual-language decision LOCKED:** liver, heart, kidney, intestines use
**cutaway diagram** style — a cross-section window cut into the body silhouette revealing the
organ in anatomical position. Decided 2026-05-28.

**`bone_marrow` visual decision RESOLVED:** bone marrow overlay uses a cream-filled path
(`#efe6d0`) positioned in the hind-leg area, representing the marrow cavity within the shank
bones. See ADR-001 for context.

## Authoritative counts

These numbers are the source of truth for all future batch prompts.
Every future batch prompt's "before" count must match this file, not a running chat tally.

| Metric | Count | How to verify |
|---|---|---|
| Regions | 118 | `grep -c "id:" data/regions.ts` |
| Canonicals | 46 | python `re.findall(r'\bid:\s*"([^"]+)"', open("data/canonicalCuts.ts").read())` |
| Regional names | 1685 | `grep -c "name:" data/regionalNames.ts` |
| Tier 3 entities | 320 | `grep -c "maps_to:" data/regionalCuts.ts` |
| Multi-canonical anchors | 202 | see python script below |

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
| Africa — West | 6 (Nigeria, Mali, Senegal, Niger, Chad, Burkina Faso) — **Sahel Set COMPLETE** |
| Africa — Horn | 1 (Ethiopia) |
| South Asia — Sovereign | 5 (Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan) |
| South Asia — India (South) | 7 (Kerala, Tamil Nadu, Telangana, Andhra Pradesh, Maharashtra, Goa, Karnataka) |
| South Asia — India (North) | 4 (Uttar Pradesh, Punjab, Rajasthan, West Bengal) |
| South Asia — India (Central) | 1 |
| South Asia — India (Northeast) | 5 (Meghalaya, Nagaland, Manipur, Sikkim, Northeast Other) |
| South Asia — India (Himalayan) | 3 (Ladakh, Jammu & Kashmir, Himachal/Uttarakhand) |
| South Asia — India (Coastal/Islands) | 2 (Coastal-Colonial, Islands) |
| **TOTAL** | **118** |

## Species breakdown (regionalNames.ts)

| Species | Entries |
|---|---|
| Buffalo | 195 |
| Yak | 19 |
| Mithun | 10 |
| Cow (default, no explicit field) | 1461 |
| **TOTAL** | **1685** |

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

## Architectural Decisions

### ADR-001: Promote `bone_marrow` to canonical (Batch 25)

**Date:** 2026-05-28 (shipped in commit `7fa54a5`)
**Status:** Promoted — Phase A (data) complete, Phase B (SVG overlay) pending
**Decided by:** Gus

**Decision.** `bone_marrow` is a `CanonicalId`. It was promoted in Batch 25 alongside
the other 9 offal canonicals. It has a canonical cut entry in `data/canonicalCuts.ts`
and 4 deployed consumer labels in the entity display map.

**What triggered the promotion.**

Standalone retail marrow vocabulary exists in deployed Western markets:
- USA: "Bone marrow" (retail label, sold as halved leg bones for roasting)
- UK: "Bone marrow" (same retail form, also "marrow bones" as a butcher term)
- France: "Os à moelle" (a discrete butcher display cut — literally "marrow bone,"
  sold split lengthwise as a standalone bistro and home-cook product)
- India (Andhra Pradesh): "Nalli emuka" (the marrow-bone component of Nalli Nihari,
  where marrow is the valued outcome, not the shank context)

This meets trigger condition #1 from the original deferral proposal: *"Research arrives
for a region where marrow is sold or prepared as a standalone retail product distinct
from the shank."* The French `os à moelle` is the clearest case — a bone split and
sold specifically for the marrow, displayed separately from bone-in shank cuts.

**How the record was corrected.**

The pre-Batch-25 reconciliation prompt (session 2026-06-06) proposed deferring
`bone_marrow` on the grounds that "production has never had a bone_marrow canonical."
That reasoning was wrong about production state — the canonical had already shipped
in commit `7fa54a5`. The audit step (`grep -E '"bone_marrow"' lib/types.ts`) was what
exposed the gap between the working mental model and reality. The audit was the right
tool; the prior assumption was the error. The promotion was correct on the merits even
though the upstream reasoning was muddled by a misread of the handoff history.

**tsc and orphan status at audit time (2026-06-06):**
- `bone_marrow` is in `CanonicalId` — correct.
- 4 consumer labels in the entity map — correct.
- 0 orphan regional names mapping to `bone_marrow` via `maps_to` — clean.
- 0 Tier 3 entities referencing `bone_marrow` via `maps_to` — clean.
- No `bone_marrow.svg` in source — Phase B pending.
- `tsc --noEmit` — clean.

**Phase B completion criteria (the SVG overlay).**

The data layer is done. The SVG overlay is unblocked the moment it's drawn. Before
drawing, the illustrator needs to make one visual decision:

> *Does bone_marrow render as a sub-overlay nested inside the `fore_shank` / `hind_shank`
> regions (showing the cavity within the leg), as a disconnected callout in empty viewBox
> space, or as a legend-only entry with no on-cow highlight?*

The sub-overlay approach is anatomically honest but risks visual overlap with the shank
highlights. The callout approach avoids overlap but breaks the "everything on the cow"
convention used by every other canonical. The legend-only approach is the safe punt.
Recommend the illustrator mock all three and choose at drawing time — this is an SVG
decision, not a data-layer decision, and the right answer depends on how it looks.

**Worked example for future offal promotions.**

The defer-or-promote pattern applied here:
1. Does standalone retail vocabulary exist in deployed regions? → Yes (France, UK, USA) → promote.
2. Does the visual placement have a clear answer? → No (marrow is inside a bone, inside a
   shank region) → defer that specific drawing decision to Phase B, not the canonical decision.
3. Does the canonical addition break tsc or create orphans? → No → safe to promote.

Apply this same checklist to the next missing-canonical question: Nigerian `Fuku` (lung)
in the offal supplement batch.

### ADR-002: Sparse-coverage rendering for offal cuts

**Date:** 2026-06-07
**Status: Superseded** by ADR-004 (PR 3). See `docs/adr/ADR-002.md` for the full archived
record. Sparse-coverage logic was retired; offal cuts now live at `/offal`. The main tool
renders all canonicals uniformly. `CoverageDensity` type and all `coverage: "sparse"` fields
removed from the codebase.

### ADR-004: Two-product architecture — main tool and offal product

**Date:** 2026-06-08
**Status:** Accepted

See `docs/adr/ADR-004.md` for the full record.

**Summary.** Two products, shared canonical layer, separate everything else. Main tool:
`/cuts/[canonical]`, muscle cuts × country pairs. Offal product: `/offal/...`, offal cuts ×
cultural traditions. Shared: `CanonicalId` union (`lib/types.ts`). Separate: routes, templates,
data, Tier 3 nodes, diagram handling.

---

## Live candidates for upcoming batches

| Priority | Region(s) | Notes |
|---|---|---|
| High | India supplemental (Batch 19.5) | **DEPLOYED** — rawa_juicy_texture_in Tier 3 + 5 butcher phrases added; all other entries confirmed already in production |
| High | West Africa Tier 1B (Batch 27) | **DEPLOYED** — Senegal + Niger; Dibi cleaver-chunk, Thieboudienne collagen matrix, Francophone-Wolof bridge, Taba-Nany, Niger Kilishi heartland, Sahel Hausa trade-language axis |
| High | West Africa Tier 2 (Batch 28) | **DEPLOYED** — Chad + Burkina Faso; Charmout (6th dried-beef mechanism), Riz Gras (Thieboudienne sibling), Daraba collagen matrix, Francophone West Africa parent axis |
| High | Post-B25/B26 offal supplement | Nigeria Orishirishi components (Ponmo, Shaki, Fuku, Edo, Abodi) — wait for offal canonicals |
| Low | Zambia, Mozambique, Madagascar | Southern Africa expansion |
| Low | Levant (Iraq, Jordan, Lebanon, Syria) | Middle East fill |
| Low | Caucasus / remaining Central Asia (Georgia, Armenia, Azerbaijan, Kyrgyzstan) | |

---

## Product Architecture (as of PR 3)

Two products share one repository and one canonical layer:

| Product | Route | Dataset | Primary value |
|---|---|---|---|
| Main tool | `/cuts/[canonical]` | Muscle cuts × country pairs | Cross-country name translation |
| Offal product | `/offal/cuts/[id]`, `/offal/traditions/[id]` | Offal cuts × cultural traditions | Culinary/cultural reference |

**Shared:** `CanonicalId` union (`lib/types.ts`) — anatomical truth does not fork.

**Separate:** routes, page templates, data files (`lib/offalData.ts`), Tier 3 nodes, diagram
handling, tradition data, SVG overlay directories.

**Cross-linking:** offal canonicals remain reachable at `/cuts/[canonical]` in the main tool
with a cross-link pointing to their dedicated `/offal/cuts/[id]` page.

See `docs/adr/ADR-004.md` for the full architectural decision record.

---

## Offal Product — Baseline (as of commit ccb9c25)

### Canonicals

13 offal canonicals:
`tongue`, `tripe`, `liver`, `heart`, `kidney`, `intestines`, `skin`,
`tendon`, `head_cheek`, `bone_marrow`, `sweetbreads`, `testicles`, `brain`

### Regional Name Entries

**298 entries across 26 countries.**

Country entry counts (authoritative, from grep audit):

| Country | Code | Entries |
|---|---|---|
| India | IN | 13 |
| Turkey | TR | 12 |
| Philippines | PH | 12 |
| Peru | PE | 12 |
| Nigeria | NG | 12 |
| Mexico | MX | 12 |
| South Korea | KR | 12 |
| Italy | IT | 12 |
| France | FR | 12 |
| Spain | ES | 12 |
| China | CN | 12 |
| Brazil | BR | 12 |
| Vietnam | VN | 11 |
| Japan | JP | 11 |
| Iran | IR | 11 |
| Hungary | HU | 11 |
| Argentina | AR | 11 |
| Uruguay | UY | 10 |
| Morocco | MA | 10 |
| Indonesia | ID | 10 |
| Greece | GR | 10 |
| Egypt | EG | 10 |
| Chile | CL | 10 |
| United Kingdom | GB | 9 |
| Ethiopia | ET | 9 |
| Germany | DE | 9 |

**Audit commands:**
```bash
grep -c "country:" data/offal/regionalNames.ts
grep "country:" data/offal/regionalNames.ts | sort | uniq -c | sort -rn
```

### Tradition Pages

**78 tradition pages.**

### Axis Nodes

3 axis nodes (tripe sub-canonicals per ADR-006):
`maodu_axis_cn`, `mino_axis_jp`, `makchang_axis_kr`

### SVG Overlays

Pending Illustrator delivery:
- `public/svg/offal/brain.svg`
- `public/svg/offal/sweetbreads.svg`
- `public/svg/offal/testicles.svg`

All three: `viewBox="0 0 711.89 605.37"`

Pages render cow silhouette gracefully when overlay is absent.

### Active ADRs

- **ADR-004:** Two-product split
- **ADR-005:** Forward-reference discipline
- **ADR-006:** Tripe sub-canonical axis node approach

### Known Deferred Items

- Brain tradition page updates (`tacos-de-cabeza`, `quinto-quarto`, `fritto-misto`) pending brain research batch
- Second Ethiopia pass (brain and additional cuts)
- Third sweep countries: Pakistan, Lebanon/Levant, and others TBD
- Tripe sub-canonical Option B (full split) deferred pending evidence from 3+ additional cultures

### Count Reconciliation Note

Running batch prompts use expected counts that accumulate drift from intentional omissions.
The authoritative count is always the grep audit:

```bash
grep -c "country:" data/offal/regionalNames.ts
```

Per-country breakdown:
```bash
grep "country:" data/offal/regionalNames.ts | sort | uniq -c | sort -rn
```

(Ignore duplicate `brain` entries in grep output — these are a display artifact of inline object syntax.)

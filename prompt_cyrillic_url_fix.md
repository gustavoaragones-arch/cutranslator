# Prompt — Fix: Cyrillic Cut Names Break the Country-Pair Picker

## The bug

On the homepage country-pair picker:

- **Russia → Panama** with cut `внутренняя часть бедра` (Cyrillic): pressing "Find Equivalent Cut" does nothing
- **Ukraine → Slovenia** with cut `гомілка передня` (Cyrillic): same — button click produces no navigation
- **Norway → Ethiopia** with cut `forlegg` (Latin): WORKS correctly, navigates to translation page
- **Hungary → Kerala** with cut `felsál` (Latin with diacritic): WORKS correctly

The pattern: when the cut dropdown displays a value in **non-Latin script** (Cyrillic), pressing the submit button silently fails — no navigation, no visible error.

## Root cause hypothesis (most likely)

The dropdown is emitting the **display label** (Cyrillic native script) as the value sent to the URL builder, instead of the **URL-safe Latin slug** (the regional name's primary `name` field, which should already be a Latin transliteration per the architectural rule established in Russia/Ukraine/Bulgaria/Belarus deployments).

Two possible failure modes:

1. **Dropdown emission bug**: the `<option value>` is set to the native-script display label instead of the Latin slug. The form submission carries Cyrillic, the URL builder constructs `/russia-to-panama/внутренняя-часть-бедра`, and either the route handler can't match it OR JavaScript throws during URL construction OR the click handler swallows the error silently.

2. **Data layer bug**: the Russian/Ukrainian regional names were stored with Cyrillic as the primary `name` field (violating the rule that `name` must be Latin transliteration and `synonyms` carries native script). If `data/regionalNames.ts` has entries like `{ name: "внутренняя часть бедра", region: "russia", ... }` instead of `{ name: "vnutrennyaya chast bedra", synonyms: ["внутренняя часть бедра"], region: "russia", ... }`, the bug is at the data layer.

## STEP 1 — Diagnose which root cause is active

### 1.1 — Check the data layer

```bash
# Search for non-Latin characters in regional names primary `name` field
grep -nP 'name:\s*"[^"]*[\x{0400}-\x{04FF}]' data/regionalNames.ts | head -20
```

(That regex matches Cyrillic Unicode block 0400-04FF in the `name:` field.)

**Expected**: zero results. All Russian/Ukrainian/Bulgarian/Belarusian entries should have Latin `name` with Cyrillic only in `synonyms`.

**If results found**: the data layer violates the architectural rule. Continue to Step 2.A (data fix).

**If zero results**: the dropdown emission is the bug. Skip to Step 2.B (UI fix).

### 1.2 — Check the dropdown emission

Find the country-pair picker component:

```bash
grep -rn "Find Equivalent Cut" app/ components/ --include="*.tsx" --include="*.ts"
grep -rn "FROM COUNTRY" app/ components/ --include="*.tsx" --include="*.ts"
```

Locate the cut `<select>` element. Check what's bound to `<option value>`:

```tsx
// WRONG (likely the bug):
<option value={cut.displayLabel}>{cut.displayLabel}</option>

// RIGHT:
<option value={cut.name}>{cut.displayLabel}</option>
```

Where `cut.name` is the Latin slug from `RegionalName.name` and `cut.displayLabel` is what's shown to the user (could be Cyrillic, could be the same as name).

### 1.3 — Verify in production

Open browser DevTools on the homepage:

1. Select Russia as From country, Panama as To country
2. The cut dropdown populates with Russian cuts
3. Open DevTools → Elements panel → inspect the cut `<select>` element
4. Look at the `<option>` elements in the dropdown
5. **Check both the visible text AND the `value` attribute of each option**

**If `value` contains Cyrillic** (e.g., `value="внутренняя часть бедра"`): bug confirmed at the dropdown emission layer.

**If `value` is Latin** (e.g., `value="vnutrennyaya chast bedra"`): bug is downstream — likely the URL builder isn't using the value correctly, OR the data layer issue from Step 1.1.

Also: open the Console panel BEFORE clicking the button. Click the button. Check for:
- JavaScript errors (TypeError, ReferenceError, etc.)
- Failed network requests (Network panel)
- Whether `window.location` changes at all

---

## STEP 2 — Apply the fix

### Step 2.A — If the data layer has Cyrillic in `name` fields

Audit `data/regionalNames.ts` for all Russia, Ukraine, Bulgaria, Belarus, Kazakhstan entries (any region with Cyrillic vocabulary). For each entry where `name` contains non-Latin characters:

1. **Move the native script to `synonyms`** (if not already there)
2. **Set `name` to a Latin transliteration**

Example transformation:

```ts
// BEFORE (bug):
{
  name: "внутренняя часть бедра",
  region: "russia",
  maps_to: "inside_round",
  confidence: 0.85,
}

// AFTER (correct):
{
  name: "vnutrennyaya chast bedra",
  region: "russia",
  maps_to: "inside_round",
  confidence: 0.85,
  synonyms: ["внутренняя часть бедра"] as const,
  notes: "Russian 'inner thigh part' — top round/topside. Latin transliteration is the URL slug; Cyrillic preserved in synonyms for native-script display and search."
}
```

Apply this transformation across:
- Russia (entire dataset)
- Ukraine (entire dataset)
- Bulgaria (entire dataset)
- Belarus (entire dataset)
- Kazakhstan (Cyrillic Kazakh entries)
- Any other region with Cyrillic

**Transliteration guide for Russian/Ukrainian** (use as needed):
- а → a, б → b, в → v, г → g, д → d, е → e, ё → yo, ж → zh, з → z, и → i, й → y, к → k, л → l, м → m, н → n, о → o, п → p, р → r, с → s, т → t, у → u, ф → f, х → kh, ц → ts, ч → ch, ш → sh, щ → shch, ъ → ', ы → y, ь → ', э → e, ю → yu, я → ya
- Ukrainian additional: і → i, ї → yi, є → ye, ґ → g
- Word separator: spaces become hyphens or single space

**Important**: if `name` was already Latin in the data file, do NOT change it. Only fix entries that violate the rule.

### Step 2.B — If the dropdown emits Cyrillic values

Locate the cut dropdown component. The fix is to ensure `<option value>` is the Latin `name` field, not the display label:

```tsx
// In the dropdown component:
{cuts.map((cut) => (
  <option key={cut.name} value={cut.name}>
    {cut.displayLabel ?? cut.name}
  </option>
))}
```

Where `cut.name` is sourced from `RegionalName.name` (always Latin per the architectural rule).

The display label can be:
- The same as `name` (most regions)
- The first synonym in native script (`synonyms[0]`) for regions where users would search by native script

This is a UX choice — for Russian users on the homepage, showing Cyrillic display labels is friendly. The Latin `value` is what gets URL-routed.

### Step 2.C — Defensive fix: URL slug helper

Regardless of which root cause is active, add a defensive helper that ensures URL slugs are ALWAYS ASCII-safe:

In `lib/url.ts` (create if doesn't exist):

```ts
/**
 * Ensures a regional name string is safe for use in a URL path.
 * Strips diacritics, lowercases, and replaces spaces with hyphens.
 * Should be applied at every URL construction site as a safety net,
 * even though `RegionalName.name` is already Latin per architectural rule.
 *
 * Examples:
 *   "vnutrennyaya chast bedra" → "vnutrennyaya-chast-bedra"
 *   "felsál" → "felsal"
 *   "Naram Mansa" → "naram-mansa"
 *   "внутренняя часть бедра" → throws error (should never happen — flag this)
 */
export function toUrlSlug(name: string): string {
  // Strip diacritics (NFD decomposition + remove combining marks)
  const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Detect non-ASCII residual (Cyrillic, CJK, etc.) — should never happen
  // if data layer follows the rule, but flag if it does
  if (!/^[\x00-\x7F]*$/.test(normalized)) {
    console.warn(`[toUrlSlug] Non-ASCII characters in name: "${name}" — data layer rule violation`);
    // Fallback: encode the original; route handler will decode
    return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
  }
  
  return normalized
    .toLowerCase()
    .replace(/\s+/g, "-")        // spaces to hyphens
    .replace(/[^\w\-]/g, "")      // strip any remaining special chars
    .replace(/--+/g, "-")         // collapse multiple hyphens
    .replace(/^-+|-+$/g, "");     // trim leading/trailing hyphens
}
```

Then audit all URL construction sites and apply `toUrlSlug` defensively:

```bash
# Find URL construction sites
grep -rn "/\${" app/ components/ lib/ --include="*.tsx" --include="*.ts" | grep -E "from|to|cut"
grep -rn "\`/.*-to-" app/ components/ lib/ --include="*.tsx" --include="*.ts"
```

For each URL construction site, ensure the cut slug goes through `toUrlSlug()`:

```tsx
// Before:
const url = `/${from}-to-${to}/${cut}`;

// After:
const url = `/${from}-to-${to}/${toUrlSlug(cut)}`;
```

### Step 2.D — Verify the route handler decodes URL params correctly

The dynamic route `app/[pair]/[cut]/page.tsx` (or equivalent) receives the cut as a URL param. Verify it's decoding correctly:

```tsx
// In the page component or route handler:
const cutParam = decodeURIComponent(params.cut);

// Then look up the regional name by both `name` and `synonyms`
const entry = regionalNames.find(
  (rn) => rn.name === cutParam || rn.synonyms?.includes(cutParam)
);
```

This ensures that both Latin URL slugs AND Cyrillic-encoded URL fallbacks resolve correctly. The Latin path is the canonical happy path; the Cyrillic-encoded fallback handles edge cases gracefully.

---

## STEP 3 — Test the fix in production

After deploy, manually verify:

```bash
# Test 1: Russia → Panama with the previously-broken cut
# Expected: button click navigates to /russia-to-panama/<latin-slug>
# Open https://www.cutranslator.com/
# Select Russia, Panama, the previously-Cyrillic cut
# Click "Find Equivalent Cut"
# Verify: navigation succeeds, page renders translation correctly

# Test 2: Ukraine → Slovenia with the previously-broken cut
# Same as above, different countries

# Test 3: Confirm Latin-script countries still work
# Norway → Ethiopia / forlegg should still work
# Hungary → Kerala / felsal should still work

# Test 4: Direct URL test — confirm the route resolves
curl -sI "https://www.cutranslator.com/russia-to-panama/vnutrennyaya-chast-bedra"
curl -sI "https://www.cutranslator.com/ukraine-to-slovenia/homilka-perednia"
# Both should return 200

# Test 5: DevTools console should show no errors when clicking button
# from any country combination
```

---

## STEP 4 — Audit fallback handling

Even after the fix, search engines may have indexed Cyrillic URLs from before this fix shipped (if they leaked into the sitemap or internal links). Add defensive route-level handling so those URLs don't 5xx in production:

```tsx
// In app/[pair]/[cut]/page.tsx
export default async function TranslationPage({ params }: Props) {
  const cutParam = decodeURIComponent(params.cut);
  
  // Look up by both name (Latin) and synonyms (native script)
  const entry = regionalNames.find(
    (rn) => rn.name === cutParam || rn.synonyms?.includes(cutParam)
  );
  
  if (!entry) {
    return notFound();  // 404, not 5xx
  }
  
  // ... rest of rendering
}
```

This ensures:
- Latin URL slugs (the new canonical happy path) work
- Cyrillic-encoded URLs (legacy, possibly indexed) ALSO work via the synonyms fallback
- Genuinely missing cuts get clean 404s, not 5xx

---

## STEP 5 — Verification

```bash
# TypeScript should pass
npx tsc --noEmit

# Build should succeed
npm run build 2>&1 | tail -20

# Confirm no Cyrillic in name field after fix
grep -cP 'name:\s*"[^"]*[\x{0400}-\x{04FF}]' data/regionalNames.ts
# Should output: 0

# Confirm Cyrillic still present in synonyms (preserved native script)
grep -cP 'synonyms:.*[\x{0400}-\x{04FF}]' data/regionalNames.ts
# Should output: nonzero (Russian/Ukrainian/Bulgarian/Belarusian preserved)
```

---

## RULES

- **Diagnose Step 1 BEFORE fixing.** If Step 1.1 shows zero Cyrillic in `name` fields, the data layer is fine — go directly to Step 2.B (UI fix). Don't apply Step 2.A unnecessarily.
- **Don't break Latin-script regions.** Norway, Hungary, France, etc. must continue to work exactly as they do now. Only fix the non-Latin handling.
- **Preserve native scripts in synonyms.** Cyrillic, Bengali, Tamil, Hindi Devanagari (etc.) must remain accessible via search and as alternative display labels — they just shouldn't appear in URL slugs.
- **The defensive `toUrlSlug` helper (Step 2.C) is the long-term fix.** Even if Step 2.A or 2.B alone resolves the immediate bug, applying `toUrlSlug` defensively at all URL construction sites prevents this class of bug from recurring when future batches add more non-Latin regions (Greek, Arabic, Hebrew, Thai if those ship).
- **Route-level fallback (Step 4) is mandatory.** Indexed legacy URLs must resolve gracefully, not 5xx. Use the synonyms array as the secondary lookup path.
- **No new architectural anchors or content changes.** This is a bug fix, not a content batch. Don't expand scope.
- After fix deploys, monitor GSC for any 5xx surge on Russian/Ukrainian/Bulgarian/Belarusian pages — if seen, the fallback in Step 4 isn't catching all cases.
- Cloudflare cache purge after deploy: purge the homepage and any explicitly-affected URLs.

---

## What success looks like

After this PR deploys:

1. ✅ Russia → Panama with any cut: button click navigates correctly
2. ✅ Ukraine → Slovenia with any cut: button click navigates correctly
3. ✅ Norway → Ethiopia / forlegg: continues to work (no regression)
4. ✅ Hungary → Kerala / felsál: continues to work (no regression)
5. ✅ Direct URL access works for both Latin and Cyrillic-encoded variants
6. ✅ DevTools console shows no errors on any country pair selection
7. ✅ The `toUrlSlug` helper is the single source of truth for URL slug normalization at all construction sites
8. ✅ Future non-Latin region additions (e.g., Sri Lanka with Sinhala script, Thailand with Thai script — already shipped, verify still works) won't reintroduce this bug

This is a bug-fix PR. Estimated execution time: 15-30 minutes. Most of the work is the diagnostic step (10 min) and the data audit (10 min); the actual code change is small.

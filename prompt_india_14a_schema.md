# Prompt — Batch 14a: Species Schema Migration (Pre-India Setup)

## Context

Cutranslator currently models all regional names as implicitly cow (Bos taurus). The upcoming India batches will introduce three additional bovine species that share anatomy with cattle but are distinct animals:

- **Water Buffalo (Bos bubalis)** — the legally-mandated "beef" in most Indian states (Maharashtra, UP, Punjab, Hyderabad, Bihar, etc.) where cow slaughter is restricted under Article 48 of the Indian Constitution and various state laws
- **Mithun (Bos frontalis)** — semi-domesticated bovine prestige meat in Northeast Indian states (Arunachal, Manipur, Meghalaya, Mizoram, Nagaland)
- **Yak (Bos grunniens)** — high-altitude bovine in Ladakh, occasionally Sikkim

Anatomically these all share the same beef cuts (chuck, brisket, striploin, etc.) — only the species differs. The cleanest representation is a `species` field on `RegionalName`, defaulting to `"cow"` for backward compatibility with all existing entries.

**This deploy is schema-only. NO data is added in this PR.** It introduces the `species` type, updates the resolver and page templates to surface species information, and verifies the build still passes at 79 regions with zero data changes.

---

## Why split this from the data import

The follow-up Batch 14b will import 6 Indian regions with ~80 buffalo regional names. Bundling the schema change with the data import creates a single PR with two distinct concerns — harder to review, harder to roll back if either fails. Splitting into two deploys gives:

1. **Clean diffs**: schema PR touches types/resolver/template; data PR touches `data/*` files only
2. **Faster rollback**: if the schema introduces a subtle rendering bug, roll back ONE PR without losing data work
3. **Verification gate**: after schema deploy, confirm existing pages still render correctly before adding India complexity

---

## STEP 1 — Add the `Species` type and update `RegionalName`

### 1.1 — `lib/types.ts`

Add the new `Species` type:

```ts
/**
 * Bovine species marker for regional names. Defaults to "cow" (Bos taurus)
 * for all existing entries. Buffalo, Mithun, and Yak are introduced for
 * Indian regional naming where these distinct bovine species are sold and
 * consumed as "beef" in their respective regional traditions.
 *
 * Anatomically, all four species share the same canonical cut mappings —
 * a Buffalo chuck, Mithun chuck, and cow chuck all map to canonical
 * `chuck_blade`. The species field allows the page template and resolver
 * to surface the species distinction to users so they don't expect cow
 * meat in markets where it isn't sold.
 */
export type Species = "cow" | "buffalo" | "mithun" | "yak";
```

Update the `RegionalName` type to include the optional field:

```ts
export type RegionalName = {
  name: string;
  region: RegionSlug;
  maps_to: CanonicalId | readonly CanonicalId[];
  confidence: number;
  match_type?: MatchType;
  synonyms?: readonly string[];
  notes?: string;
  /**
   * Bovine species. Optional for backward compatibility — all existing
   * entries default to "cow" when this field is absent. Indian regions
   * with cow-slaughter restrictions will explicitly set "buffalo".
   * Northeast Indian states will set "mithun" for prestige cuts.
   * Ladakh entries may set "yak" for high-altitude winter beef.
   */
  species?: Species;
};
```

### 1.2 — Helper function for resolving species with default

In `lib/types.ts` or a new helper file, add:

```ts
/**
 * Returns the species of a regional name, defaulting to "cow" if not specified.
 * Use this everywhere instead of accessing `entry.species` directly.
 */
export function getSpecies(entry: { species?: Species }): Species {
  return entry.species ?? "cow";
}

/**
 * Human-readable label for a species, used in page CTAs and structured content.
 */
export const SPECIES_LABEL: Record<Species, string> = {
  cow: "beef",
  buffalo: "water buffalo (buff)",
  mithun: "Mithun (Bos frontalis)",
  yak: "Yak (Bos grunniens)",
};

/**
 * Whether the species is the default (cow). Used to suppress redundant
 * "(beef)" annotations on cow entries.
 */
export function isDefaultSpecies(species: Species | undefined): boolean {
  return (species ?? "cow") === "cow";
}
```

### 1.3 — Verify backward compatibility

Run the full TypeScript compile:

```bash
npx tsc --noEmit
```

This should pass with ZERO errors. The `species` field is optional. No existing code path requires it. Every existing regional name entry across all 79 regions implicitly defaults to `"cow"` via `getSpecies()`.

If TypeScript complains anywhere — e.g., a `Record<string, RegionalName>` type that became stricter — fix the affected callsite to use the helper rather than direct field access.

---

## STEP 2 — Update the resolver to carry species through

The resolver returns `ResolvedTarget.names: string[]` — the destination region's regional names for the canonical cut. After this PR, callers also need access to the species of each name, so the page template can render "Ask for: Naram Mansa (water buffalo)" appropriately.

### 2.1 — Update the `ResolvedTarget` type

In `lib/types.ts`, extend `ResolvedTarget`:

```ts
export type ResolvedTarget = {
  canonicalId: CanonicalId;
  /** Consumer-facing names in the target region */
  names: string[];
  /** Species per name, parallel to `names`. Defaults to "cow" if not specified. */
  species: Species[];
  confidence: number;
  match_type?: MatchType;
  note?: string;
};
```

The `species` array runs parallel to `names` — `species[i]` is the species of `names[i]`.

### 2.2 — Update the resolver to populate species

In `lib/resolver.ts` (or wherever resolution happens), find the function that builds `ResolvedTarget`. The current logic likely does:

```ts
// Before
const names = matchingEntries.map((e) => e.name);
return { canonicalId, names, confidence, ... };
```

Update to:

```ts
// After
const names = matchingEntries.map((e) => e.name);
const species = matchingEntries.map((e) => getSpecies(e));
return { canonicalId, names, species, confidence, ... };
```

This is a single-line addition per resolver function. Don't change resolution semantics — just pass species through.

### 2.3 — Update `lib/mappings.ts` if relevant

The earlier `labelsForCanonical` fallback fix (the "falda" bug) scans `regionalNames`. Update it to also return species information:

```ts
type LabelEntry = { name: string; species: Species };

export function labelsForCanonical(
  canonicalId: CanonicalId,
  region: RegionSlug,
): LabelEntry[] {
  // ... existing manual map lookup ...
  
  // Fallback: scan regionalNames
  const matches = regionalNames.filter((rn) => {
    if (rn.region !== region) return false;
    return Array.isArray(rn.maps_to)
      ? rn.maps_to.includes(canonicalId)
      : rn.maps_to === canonicalId;
  });
  
  return matches.map((rn) => ({
    name: rn.name,
    species: getSpecies(rn),
  }));
}
```

Update all call sites that consume `labelsForCanonical`. Most will need `.map((entry) => entry.name)` if they only want the name string.

---

## STEP 3 — Update the page template to surface species

The "Ask for:" CTA on translation pages currently displays the regional name only. After this change, it should append the species annotation when species ≠ cow.

### 3.1 — Find the CTA renderer

```bash
grep -rn "Ask for" app/ components/ --include="*.tsx"
```

Locate the component or page that renders the "Ask for: Falda" CTA (the one fixed in the earlier `labelsForCanonical` work).

### 3.2 — Update the rendering

```tsx
// Before
<p>
  Ask for: <strong>{titleCase(primary.names[0] ?? primary.canonicalId)}</strong>
</p>

// After
<p>
  Ask for: <strong>{titleCase(primary.names[0] ?? primary.canonicalId)}</strong>
  {primary.species[0] && !isDefaultSpecies(primary.species[0]) && (
    <span className="species-annotation">
      {" "}({SPECIES_LABEL[primary.species[0]]})
    </span>
  )}
</p>
```

Result for cow entries (no change visible): "Ask for: **Falda**"

Result for buffalo entries: "Ask for: **Naram Mansa** (water buffalo (buff))"

Result for Mithun: "Ask for: **Vitho Keivi** (Mithun (Bos frontalis))"

### 3.3 — Style the species annotation

Add Tailwind styling so the annotation is visually subordinate:

```tsx
<span className="text-base font-normal text-muted-foreground italic">
  {" "}({SPECIES_LABEL[primary.species[0]]})
</span>
```

Adjust class names to match your existing design tokens. The annotation should be smaller, lighter, and italicized to distinguish from the bold regional name.

### 3.4 — Update the headline if it shows multiple names

If the page also shows alternative regional names lower down (e.g., "Also called: ..."), apply the same species annotation pattern there.

---

## STEP 4 — Add a structured-data hint for species

The FAQPage schema generated for translation pages should include the species in the answer text where relevant — Google's FAQ rich result will then surface this in search.

In `lib/structured-data.ts`, find `buildContentGraph` or wherever FAQPage is emitted. Update the answer construction:

```ts
// Inside the answer text for the "What is X in Y?" question:
const speciesAnnotation = !isDefaultSpecies(primary.species[0])
  ? ` Note: in ${destinationLabel}, "${primary.names[0]}" refers to ${SPECIES_LABEL[primary.species[0]]}, not standard cow beef.`
  : "";

const answer = `${inputName} (${sourceLabel}) is most similar to ${primary.names[0]} in ${destinationLabel}.${speciesAnnotation}`;
```

This is a small content addition that pays large dividends — when search results show the FAQ rich snippet for "What is brisket in Hyderabad?", the answer will include "Note: in Hyderabad, 'Seena' refers to water buffalo (buff), not standard cow beef" — genuinely useful information that no other beef-cuts site provides.

---

## STEP 5 — Verification

```bash
# TypeScript should pass with zero errors
npx tsc --noEmit

# Existing data should validate
npx tsx scripts/validateDataset.ts

# Build should succeed at the same 79 regions
npm run build 2>&1 | tail -20
```

**Report targets:**
- Regions: 79 (unchanged)
- Regional names: ~1,050+ (unchanged)
- TypeScript clean: ✓
- Build success: ✓
- New types exported: `Species`, `getSpecies`, `SPECIES_LABEL`, `isDefaultSpecies`

After the build succeeds, **manually spot-check 5 existing pages** to confirm cow defaults work invisibly:

```bash
# All should render normally without species annotations (cow is default)
curl -s https://www.cutranslator.com/usa-to-france/ribeye | grep "Ask for"
curl -s https://www.cutranslator.com/brazil-to-uk/picanha | grep "Ask for"
curl -s https://www.cutranslator.com/japan-to-usa/saroin | grep "Ask for"
```

The "Ask for:" lines should look identical to before this deploy. The species annotation only appears for non-cow species, which don't exist in the dataset yet — so no visible UI change anywhere.

---

## STEP 6 — Test the species rendering with a temporary fixture

Since no buffalo entries exist yet, the species annotation rendering can't be visually verified in production. Add a temporary local test to confirm the rendering works:

In `tests/species-rendering.test.tsx` (or appropriate test location):

```tsx
import { render, screen } from "@testing-library/react";
import { TranslationPage } from "@/app/[pair]/[cut]/page";

test("species annotation renders for buffalo entries", () => {
  const mockResult = {
    canonicalId: "brisket",
    names: ["Test Buffalo Entry"],
    species: ["buffalo"],
    confidence: 0.85,
    match_type: "close",
  };
  
  render(<AskForCTA primary={mockResult} />);
  
  expect(screen.getByText("Test Buffalo Entry")).toBeInTheDocument();
  expect(screen.getByText(/water buffalo/i)).toBeInTheDocument();
});

test("species annotation does NOT render for cow entries", () => {
  const mockResult = {
    canonicalId: "brisket",
    names: ["Standard Brisket"],
    species: ["cow"],
    confidence: 0.85,
    match_type: "close",
  };
  
  render(<AskForCTA primary={mockResult} />);
  
  expect(screen.getByText("Standard Brisket")).toBeInTheDocument();
  expect(screen.queryByText(/water buffalo/i)).not.toBeInTheDocument();
});

test("species annotation does NOT render when species is undefined (defaults to cow)", () => {
  const mockResult = {
    canonicalId: "brisket",
    names: ["Implicit Cow"],
    species: [undefined as any],  // simulating old data
    confidence: 0.85,
    match_type: "close",
  };
  
  render(<AskForCTA primary={mockResult} />);
  
  expect(screen.queryByText(/water buffalo/i)).not.toBeInTheDocument();
});
```

This test confirms the rendering logic before any India data is imported. After Batch 14b ships, the same component will render real buffalo entries correctly.

---

## RULES

- **NO DATA CHANGES IN THIS PR.** This is schema-only. `data/regionalNames.ts` is NOT modified. `data/regionalCuts.ts` is NOT modified. Adding even one buffalo entry to confirm it works is forbidden — that comes in Batch 14b.
- **Backward compatibility is mandatory.** All 1,050+ existing regional names must continue to work without modification. The `species` field is optional with a default. If TypeScript or the resolver requires the field to be present anywhere, that's a bug in this PR — fix it.
- **The species annotation must NOT appear** on any existing page after deploy. If it appears for cow entries (the default), the conditional rendering logic is wrong.
- The `getSpecies()` helper is the single source of truth for species resolution. Don't access `entry.species` directly anywhere — always go through the helper to get the cow default.
- The `SPECIES_LABEL` map should be the single source for human-readable species text. If you need different labels in different contexts (e.g., "Buffalo" vs "Water Buffalo (Buff)"), discuss before adding multiple maps.
- Don't try to render multiple species in a single CTA (e.g., "Naram Mansa or Buffalo Steak"). The `species[0]` annotation matches `names[0]` — that's the canonical pairing. If alternative names have different species, render them separately with their own annotations.
- Workers Logs are enabled — if anything renders strangely after deploy, the logs will show the issue. USE THEM before debugging blind.
- After this PR ships and you've confirmed the build passes + existing pages render correctly, you're cleared to ship Batch 14b (the South+West+Goa data import).

---

## What success looks like

After this PR deploys:

1. ✅ TypeScript compiles cleanly with the new `Species` type
2. ✅ All 79 existing regions still render correctly with zero visible UI change
3. ✅ The resolver carries species through `ResolvedTarget`
4. ✅ The page template knows how to render species annotations (verified via test, not in production yet)
5. ✅ The FAQPage structured data has a placeholder for species annotation in the answer text
6. ✅ The build succeeds at 79 regions
7. ✅ Workers Logs show no new errors

When all six are green, the schema is ready and Batch 14b can ship the India data immediately.

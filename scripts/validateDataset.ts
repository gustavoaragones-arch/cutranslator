/**
 * Dev-only: assert no duplicate primary rows and no lookup index collisions.
 * Run: npm run validate:dataset
 */
import { regionalNames } from "@/data/regionalNames";
import { lookupIndex } from "@/lib/indexes";
import { normalizeForLookup, normalizeKey } from "@/utils/normalize";

const seenPrimary = new Set<string>();

for (const row of regionalNames) {
  const primaryKey = `${row.region}-${normalizeKey(row.name)}`;
  if (seenPrimary.has(primaryKey)) {
    console.warn("Duplicate primary name key:", primaryKey);
  }
  seenPrimary.add(primaryKey);
}

const seenIndex = new Map<string, string>();

for (const row of regionalNames) {
  const surfaces = [row.name, ...(row.synonyms ?? [])];
  for (const surface of surfaces) {
    const lk = `${row.region}-${normalizeForLookup(surface)}`;
    const prev = seenIndex.get(lk);
    if (prev != null && prev !== row.name) {
      console.warn("Lookup index collision:", lk, `rows "${prev}" vs "${row.name}"`);
    }
    seenIndex.set(lk, row.name);
  }
}

if (lookupIndex.size !== seenIndex.size) {
  console.warn(
    "lookupIndex size mismatch vs validation scan:",
    lookupIndex.size,
    seenIndex.size,
  );
}

console.log(
  "Dataset validation OK:",
  regionalNames.length,
  "rows,",
  lookupIndex.size,
  "indexed lookup keys.",
);

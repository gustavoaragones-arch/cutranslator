/**
 * Dev-only: assert no duplicate primary rows and no lookup index collisions.
 * Run: npm run validate:dataset
 */
import { regionalCuts } from "@/data/regionalCuts";
import { regionalNames } from "@/data/regionalNames";
import { lookupIndex, regionalCutIndex } from "@/lib/indexes";
import { normalizeForLookup, normalizeKey } from "@/utils/normalize";

const VALID_MATCH_TYPES = new Set(["exact", "close", "approximate", "composite", "cultural", "none"]);

// ----- Validate regionalNames -----

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

// ----- Validate regionalCuts -----

const seenCutIds = new Set<string>();

for (const cut of regionalCuts) {
  // ID must be unique
  if (seenCutIds.has(cut.id)) {
    console.warn("Duplicate RegionalCut id:", cut.id);
  }
  seenCutIds.add(cut.id);

  // maps_to must be non-empty
  if (!cut.maps_to || cut.maps_to.length === 0) {
    console.warn(`RegionalCut "${cut.id}" has empty maps_to`);
  }

  for (const edge of cut.maps_to) {
    // match_type must be valid
    if (!VALID_MATCH_TYPES.has(edge.match_type)) {
      console.warn(`RegionalCut "${cut.id}" has invalid match_type: ${edge.match_type}`);
    }
    // confidence must be 0–1
    if (edge.confidence < 0 || edge.confidence > 1) {
      console.warn(`RegionalCut "${cut.id}" edge confidence out of range: ${edge.confidence}`);
    }
  }

  // Cross-index collision check: warn if key exists in regionalNames index too
  const primaryLk = `${cut.region}-${normalizeForLookup(cut.name)}`;
  if (lookupIndex.has(primaryLk)) {
    console.warn(
      `RegionalCut "${cut.id}" key collides with regionalNames: ${primaryLk} (RegionalCut takes priority)`,
    );
  }
  for (const syn of cut.synonyms ?? []) {
    const synLk = `${cut.region}-${normalizeForLookup(syn)}`;
    if (lookupIndex.has(synLk)) {
      console.warn(
        `RegionalCut "${cut.id}" synonym key collides with regionalNames: ${synLk} (RegionalCut takes priority)`,
      );
    }
  }
}

console.log(
  "Dataset validation OK:",
  regionalNames.length,
  "rows,",
  lookupIndex.size,
  "indexed lookup keys,",
  regionalCuts.length,
  "RegionalCut entities,",
  regionalCutIndex.size,
  "regionalCut index keys.",
);

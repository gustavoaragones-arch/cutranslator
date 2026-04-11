import { regionalCuts } from "@/data/regionalCuts";
import { regionalNames } from "@/data/regionalNames";
import { REGIONS } from "@/lib/regions";
import type { CanonicalId, RegionSlug, RegionalCut, RegionalName } from "@/lib/types";
import { normalizeForLookup } from "@/utils/normalize";

function expandMapsTo(mapsTo: RegionalName["maps_to"]): CanonicalId[] {
  return typeof mapsTo === "string" ? [mapsTo] : [...mapsTo];
}

/** `${region}-${normalizeForLookup(surface)}` → authoritative dataset row. */
export const lookupIndex = new Map<string, RegionalName>();

for (const row of regionalNames) {
  const surfaces = [row.name, ...(row.synonyms ?? [])];
  for (const surface of surfaces) {
    const key = `${row.region}-${normalizeForLookup(surface)}`;
    lookupIndex.set(key, row);
  }
}

/** Canonical id → regions that name it in `regionalNames` (SEO / “other countries”). */
export const canonicalToRegionsMap: ReadonlyMap<
  CanonicalId,
  ReadonlySet<RegionSlug>
> = buildCanonicalToRegionsMap();

function buildCanonicalToRegionsMap(): ReadonlyMap<
  CanonicalId,
  ReadonlySet<RegionSlug>
> {
  const acc = new Map<CanonicalId, Set<RegionSlug>>();
  for (const row of regionalNames) {
    for (const id of expandMapsTo(row.maps_to)) {
      let set = acc.get(id);
      if (!set) {
        set = new Set();
        acc.set(id, set);
      }
      set.add(row.region);
    }
  }
  return new Map(
    [...acc.entries()].map(([id, set]) => [id, set as ReadonlySet<RegionSlug>]),
  );
}

/** All region slugs in stable product order (for cross-region scans). */
export const regionSlugsInOrder: readonly RegionSlug[] = REGIONS.map((r) => r.slug);

/** `${region}-${normalizeForLookup(surface)}` → RegionalCut entity. */
export const regionalCutIndex = new Map<string, RegionalCut>();

for (const cut of regionalCuts) {
  const primaryKey = `${cut.region}-${normalizeForLookup(cut.name)}`;
  regionalCutIndex.set(primaryKey, cut);
  if (cut.synonyms) {
    for (const syn of cut.synonyms) {
      const synKey = `${cut.region}-${normalizeForLookup(syn)}`;
      if (!regionalCutIndex.has(synKey)) {
        regionalCutIndex.set(synKey, cut);
      }
    }
  }
}

/**
 * Look up a cut by region + normalized name. Checks RegionalCut index first
 * (richer data), falls back to RegionalName index.
 */
export function lookupCut(
  region: string,
  normalizedName: string,
): { type: "regional_cut"; data: RegionalCut } | { type: "regional_name"; data: RegionalName } | null {
  const key = `${region}-${normalizedName}`;
  const regionalCut = regionalCutIndex.get(key);
  if (regionalCut) return { type: "regional_cut", data: regionalCut };
  const regionalName = lookupIndex.get(key);
  if (regionalName) return { type: "regional_name", data: regionalName };
  return null;
}

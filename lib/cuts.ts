import { regionalNames } from "@/data/regionalNames";
import type { CanonicalId, RegionSlug } from "@/lib/types";

export type DatasetCutOption = {
  name: string;
  canonical: readonly CanonicalId[] | CanonicalId;
};

/** Retail cut labels defined for a source region (from `regionalNames`). */
export function getCutsByRegion(region: RegionSlug): DatasetCutOption[] {
  return regionalNames
    .filter((row) => row.region === region)
    .map((row) => ({
      name: row.name,
      canonical: row.maps_to,
    }));
}

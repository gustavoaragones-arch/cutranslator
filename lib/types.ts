export type RegionSlug =
  | "usa"
  | "brazil"
  | "france"
  | "argentina"
  | "uk"
  | "chile"
  | "spain"
  | "mexico";

export type CanonicalId =
  | "ribeye"
  | "striploin"
  | "tenderloin"
  | "sirloin_cap"
  | "sirloin_flap"
  | "flank"
  | "skirt";

export type CanonicalCut = {
  id: CanonicalId;
  primal: string;
  location: string;
  description: string;
  aliases?: readonly string[];
};

/** Row-level ambiguity hint from the dataset (optional). */
export type RegionalMappingRowType = "ambiguous" | "clear";

/**
 * Regional surface name → canonical (dataset shape uses maps_to).
 * Exported from /data/regionalNames.ts as `regionalNames`.
 */
export type RegionalNameEntry = {
  name: string;
  region: RegionSlug;
  maps_to: readonly CanonicalId[] | CanonicalId;
  confidence: number;
  type?: RegionalMappingRowType;
  notes?: string;
};

export type AmbiguityType = "region_conflict" | "multi_cut";

export type AmbiguityInfo = {
  exists: boolean;
  type: AmbiguityType | null;
  message: string;
};

export type ResolvedTarget = {
  canonicalId: CanonicalId;
  /** Consumer-facing names in the target region */
  names: string[];
  confidence: number;
  note?: string;
};

export type ResolveExplanation = {
  short: string;
  detailed: string;
};

export type RelatedItem = {
  canonicalId: CanonicalId;
  names: string[];
};

export type ResolveResult = {
  inputNormalized: string;
  /** Primary canonical record (full object). */
  canonical: CanonicalCut | null;
  primary: ResolvedTarget | null;
  alternatives: ResolvedTarget[];
  ambiguity: AmbiguityInfo;
  explanation: ResolveExplanation;
  related: RelatedItem[];
};

export type RegionSlug =
  | "usa"
  | "brazil"
  | "france"
  | "argentina"
  | "uk"
  | "chile"
  | "spain"
  | "mexico"
  | "uruguay"
  | "paraguay"
  | "colombia";

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

/**
 * Regional surface name → canonical (import from `/data/regionalNames.ts`).
 * `type: "ambiguous"` flags row-level retail ambiguity; multi-canonical `maps_to`
 * is surfaced separately via resolver `ambiguity`.
 */
export type RegionalName = {
  name: string;
  region: RegionSlug;
  maps_to: CanonicalId | readonly CanonicalId[];
  confidence: number;
  type?: "ambiguous";
  synonyms?: readonly string[];
  notes?: string;
};

/** @deprecated Use `RegionalName`; kept for gradual refactors. */
export type RegionalNameEntry = RegionalName;

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

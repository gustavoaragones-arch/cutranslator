export type RegionSlug =
  | "usa"
  | "canada"
  | "brazil"
  | "france"
  | "argentina"
  | "uk"
  | "chile"
  | "spain"
  | "mexico"
  | "uruguay"
  | "paraguay"
  | "colombia"
  | "germany"
  | "italy"
  | "portugal"
  | "netherlands"
  | "denmark"
  | "norway"
  | "sweden"
  | "finland"
  | "russia"
  | "ukraine"
  | "belgium"
  | "poland"
  | "czechia"
  | "austria"
  | "slovakia"
  | "hungary"
  | "croatia"
  | "slovenia"
  | "bosnia"
  | "montenegro"
  | "romania"
  | "bulgaria"
  | "albania"
  | "north_macedonia"
  | "turkey"
  | "greece"
  | "israel"
  | "ireland"
  | "switzerland"
  | "egypt"
  | "iran"
  | "morocco"
  | "uzbekistan"
  | "kazakhstan"
  | "saudi_arabia"
  | "qatar"
  | "uae"
  | "panama"
  | "costa_rica"
  | "nicaragua"
  | "honduras"
  | "el_salvador"
  | "guatemala"
  | "venezuela"
  | "lithuania"
  | "latvia"
  | "estonia"
  | "belarus";

export type CanonicalId =
  | "ribeye"
  | "striploin"
  | "tenderloin"
  | "sirloin_cap"
  | "sirloin_flap"
  | "flank"
  | "skirt"
  // Phase 1 additions:
  | "brisket"
  | "hanger"
  | "short_ribs"
  | "top_sirloin"
  | "tri_tip"
  // Phase 3 — Round:
  | "inside_round"
  | "outside_round"
  | "eye_of_round"
  | "sirloin_tip"
  | "oxtail"
  // Phase 3 — Chuck:
  | "chuck_roll"
  | "chuck_blade"
  | "shoulder_clod"
  // Phase 3 — Rib:
  | "prime_rib"
  | "back_ribs"
  // Phase 3 — Loin:
  | "t_bone"
  // Phase 3 — Shank:
  | "hind_shank"
  | "fore_shank"
  // Phase 3 — Plate:
  | "short_plate"
  // Tier 2 additions:
  | "denver_steak" | "flat_iron" | "petite_tender" | "chuck_eye_steak"
  | "brisket_flat" | "brisket_point"
  | "flap_steak"
  | "top_round_steak" | "bottom_round_roast"
  | "inside_skirt";

export type CanonicalCut = {
  id: CanonicalId;
  primal: string;
  location: string;
  description: string;
  aliases?: readonly string[];
};

/**
 * How closely a regional cut corresponds to a canonical cut.
 * - exact:       Anatomically identical or near-identical
 * - close:       Same muscle/region, minor differences in trim or boundaries
 * - approximate: Similar area, but meaningfully different product
 * - composite:   Regional cut spans parts of two or more canonical cuts
 * - cultural:    Name exists but butchering tradition yields a different product
 * - none:        No meaningful equivalent
 */
export type MatchType = "exact" | "close" | "approximate" | "composite" | "cultural" | "none";

/**
 * A typed connection between a regional cut and a canonical cut.
 * Carries the match quality and confidence of the equivalence.
 */
export type CanonicalEdge = {
  readonly canonical_id: CanonicalId;
  readonly match_type: MatchType;
  readonly confidence: number;
  readonly note?: string;
};

/**
 * A first-class regional cut entity (Tier 3).
 * These are culturally significant cuts that don't map cleanly to a single canonical cut.
 * They have their own identity, their own pages, and typed edges to canonical cuts.
 */
export type RegionalCut = {
  readonly id: string;                        // e.g. "vacio_ar", "picanha_br"
  readonly name: string;                      // Display name: "Vacío"
  readonly region: RegionSlug;
  readonly maps_to: readonly CanonicalEdge[]; // Typed connections to canonical cuts
  readonly synonyms?: readonly string[];
  readonly notes?: string;
  readonly description?: string;              // For hub page content
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
  match_type?: MatchType;   // defaults to "exact" if absent
  type?: "ambiguous";       // kept for backward compat; prefer match_type going forward
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
  match_type?: MatchType;
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

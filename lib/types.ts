export type RegionGroup =
  | "americas_north"
  | "americas_central"
  | "americas_south"
  | "europe_western"
  | "europe_nordic"
  | "europe_central"
  | "europe_balkans"
  | "europe_eastern_baltic"
  | "mena"
  | "central_asia"
  | "asia_pacific"
  | "south_asia"
  | "southeast_asia"
  | "africa"
  | "oceania";

export type RegionGroupMeta = {
  readonly id: RegionGroup;
  readonly label: string;
  readonly icon: string;
  readonly sortOrder: number;
};

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
  | "belarus"
  | "peru"
  | "bolivia"
  | "ecuador"
  | "japan"
  | "south_korea"
  | "taiwan"
  | "china"
  | "thailand"
  | "vietnam"
  | "philippines"
  | "indonesia"
  | "malaysia"
  | "singapore"
  | "australia"
  | "new_zealand"
  | "south_africa"
  | "kenya"
  | "nigeria"
  | "ethiopia"
  // South Asia — India (Batch 14b)
  | "kerala"
  | "tamil_nadu"
  | "telangana"
  | "andhra_pradesh"
  | "maharashtra"
  | "goa"
  // South Asia — India (Batch 15)
  | "karnataka";

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
  /**
   * Bovine species. Optional for backward compatibility — all existing
   * entries default to "cow" when this field is absent. Indian regions
   * with cow-slaughter restrictions will explicitly set "buffalo".
   * Northeast Indian states will set "mithun" for prestige cuts.
   * Ladakh entries may set "yak" for high-altitude winter beef.
   */
  species?: Species;
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
  /** Species per name, parallel to `names`. Defaults to "cow" if not specified. */
  species: Species[];
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

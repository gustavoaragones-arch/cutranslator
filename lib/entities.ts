import type { CanonicalId, RegionSlug } from "@/lib/types";

/**
 * Preferred English surface forms for AI extractors (consistent across pages).
 */
export const CANONICAL_ENTITY_TERM: Record<CanonicalId, string> = {
  ribeye: "ribeye",
  striploin: "striploin (strip steak)",
  tenderloin: "beef tenderloin",
  sirloin_cap: "sirloin cap",
  sirloin_flap: "sirloin flap",
  flank: "flank steak",
  skirt: "skirt steak",
};

export function canonicalEntityTerm(id: CanonicalId): string {
  return CANONICAL_ENTITY_TERM[id];
}

/** Region as a stable knowledge entity (label + slug id). */
export const REGION_ENTITY: Record<
  RegionSlug,
  { id: RegionSlug; formalName: string; shortName: string }
> = {
  usa: { id: "usa", formalName: "United States", shortName: "USA" },
  brazil: { id: "brazil", formalName: "Brazil", shortName: "Brazil" },
  france: { id: "france", formalName: "France", shortName: "France" },
  argentina: {
    id: "argentina",
    formalName: "Argentina",
    shortName: "Argentina",
  },
  uk: { id: "uk", formalName: "United Kingdom", shortName: "UK" },
  chile: { id: "chile", formalName: "Chile", shortName: "Chile" },
  spain: { id: "spain", formalName: "Spain", shortName: "Spain" },
  mexico: { id: "mexico", formalName: "Mexico", shortName: "Mexico" },
};

export function regionEntityFormal(slug: RegionSlug): string {
  return REGION_ENTITY[slug].formalName;
}

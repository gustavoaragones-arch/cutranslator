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
  // Phase 1 additions:
  brisket: "brisket",
  hanger: "hanger steak",
  short_ribs: "short ribs",
  top_sirloin: "top sirloin",
  tri_tip: "tri-tip",
  // Phase 3 — Round:
  inside_round: "top round (inside round)",
  outside_round: "bottom round (outside round)",
  eye_of_round: "eye of round",
  sirloin_tip: "sirloin tip (knuckle)",
  oxtail: "oxtail",
  // Phase 3 — Chuck:
  chuck_roll: "chuck roll",
  chuck_blade: "chuck roast (blade)",
  shoulder_clod: "shoulder clod",
  // Phase 3 — Rib:
  prime_rib: "prime rib",
  back_ribs: "beef back ribs",
  // Phase 3 — Loin:
  t_bone: "T-bone steak",
  // Phase 3 — Shank:
  hind_shank: "hind shank",
  fore_shank: "foreshank",
  // Phase 3 — Plate:
  short_plate: "short plate",
  // Tier 2 additions:
  denver_steak: "denver steak",
  flat_iron: "flat iron steak",
  petite_tender: "petite tender (teres major)",
  chuck_eye_steak: "chuck eye steak",
  brisket_flat: "brisket flat",
  brisket_point: "brisket point (deckle)",
  flap_steak: "flap steak (sirloin flap)",
  top_round_steak: "top round steak",
  bottom_round_roast: "bottom round roast",
  inside_skirt: "inside skirt steak",
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
  canada: { id: "canada", formalName: "Canada", shortName: "Canada" },
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
  uruguay: { id: "uruguay", formalName: "Uruguay", shortName: "Uruguay" },
  paraguay: { id: "paraguay", formalName: "Paraguay", shortName: "Paraguay" },
  colombia: {
    id: "colombia",
    formalName: "Colombia",
    shortName: "Colombia",
  },
  germany: { id: "germany", formalName: "Germany", shortName: "Germany" },
  italy: { id: "italy", formalName: "Italy", shortName: "Italy" },
  portugal: { id: "portugal", formalName: "Portugal", shortName: "Portugal" },
  netherlands: {
    id: "netherlands",
    formalName: "Netherlands",
    shortName: "Netherlands",
  },
  denmark: { id: "denmark", formalName: "Denmark", shortName: "Denmark" },
  norway: { id: "norway", formalName: "Norway", shortName: "Norway" },
  sweden: { id: "sweden", formalName: "Sweden", shortName: "Sweden" },
  finland: { id: "finland", formalName: "Finland", shortName: "Finland" },
  russia: { id: "russia", formalName: "Russia", shortName: "Russia" },
  ukraine: { id: "ukraine", formalName: "Ukraine", shortName: "Ukraine" },
  belgium: { id: "belgium", formalName: "Belgium", shortName: "Belgium" },
  poland: { id: "poland", formalName: "Poland", shortName: "Poland" },
  czechia: { id: "czechia", formalName: "Czech Republic", shortName: "Czechia" },
  austria: { id: "austria", formalName: "Austria", shortName: "Austria" },
  slovakia: { id: "slovakia", formalName: "Slovakia", shortName: "Slovakia" },
  hungary: { id: "hungary", formalName: "Hungary", shortName: "Hungary" },
  croatia: { id: "croatia", formalName: "Croatia", shortName: "Croatia" },
  slovenia: { id: "slovenia", formalName: "Slovenia", shortName: "Slovenia" },
  bosnia: { id: "bosnia", formalName: "Bosnia & Herzegovina", shortName: "Bosnia" },
  montenegro: { id: "montenegro", formalName: "Montenegro", shortName: "Montenegro" },
  romania: { id: "romania", formalName: "Romania", shortName: "Romania" },
  bulgaria: { id: "bulgaria", formalName: "Bulgaria", shortName: "Bulgaria" },
  albania: { id: "albania", formalName: "Albania", shortName: "Albania" },
  north_macedonia: { id: "north_macedonia", formalName: "North Macedonia", shortName: "N. Macedonia" },
  turkey: { id: "turkey", formalName: "Turkey", shortName: "Turkey" },
  greece: { id: "greece", formalName: "Greece", shortName: "Greece" },
  israel: { id: "israel", formalName: "Israel", shortName: "Israel" },
  ireland: { id: "ireland", formalName: "Ireland", shortName: "Ireland" },
  switzerland: { id: "switzerland", formalName: "Switzerland", shortName: "Switzerland" },
  egypt: { id: "egypt", formalName: "Egypt", shortName: "Egypt" },
  iran: { id: "iran", formalName: "Iran", shortName: "Iran" },
  morocco: { id: "morocco", formalName: "Morocco", shortName: "Morocco" },
  uzbekistan: { id: "uzbekistan", formalName: "Uzbekistan", shortName: "Uzbekistan" },
  kazakhstan: { id: "kazakhstan", formalName: "Kazakhstan", shortName: "Kazakhstan" },
  saudi_arabia: { id: "saudi_arabia", formalName: "Saudi Arabia", shortName: "Saudi Arabia" },
  qatar: { id: "qatar", formalName: "Qatar", shortName: "Qatar" },
  uae: { id: "uae", formalName: "United Arab Emirates", shortName: "UAE" },
  panama: { id: "panama", formalName: "Panama", shortName: "Panama" },
  costa_rica: { id: "costa_rica", formalName: "Costa Rica", shortName: "Costa Rica" },
  nicaragua: { id: "nicaragua", formalName: "Nicaragua", shortName: "Nicaragua" },
  honduras: { id: "honduras", formalName: "Honduras", shortName: "Honduras" },
  el_salvador: { id: "el_salvador", formalName: "El Salvador", shortName: "El Salvador" },
  guatemala: { id: "guatemala", formalName: "Guatemala", shortName: "Guatemala" },
  venezuela: { id: "venezuela", formalName: "Venezuela", shortName: "Venezuela" },
  lithuania: { id: "lithuania", formalName: "Lithuania", shortName: "Lithuania" },
  latvia: { id: "latvia", formalName: "Latvia", shortName: "Latvia" },
  estonia: { id: "estonia", formalName: "Estonia", shortName: "Estonia" },
  belarus: { id: "belarus", formalName: "Belarus", shortName: "Belarus" },
  peru: { id: "peru", formalName: "Peru", shortName: "Peru" },
  bolivia: { id: "bolivia", formalName: "Bolivia", shortName: "Bolivia" },
  ecuador: { id: "ecuador", formalName: "Ecuador", shortName: "Ecuador" },
};

export function regionEntityFormal(slug: RegionSlug): string {
  return REGION_ENTITY[slug].formalName;
}

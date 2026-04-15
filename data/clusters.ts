import type { CanonicalId } from "@/lib/types";

/** Related canonical cuts for internal linking (ordered by relevance). */
export const relatedByCanonical: Record<CanonicalId, readonly CanonicalId[]> = {
  ribeye: ["striploin", "tenderloin", "sirloin_cap", "short_ribs", "prime_rib", "chuck_roll", "chuck_eye_steak", "denver_steak"],
  striploin: ["ribeye", "tenderloin", "sirloin_cap", "sirloin_flap", "t_bone"],
  tenderloin: ["striploin", "ribeye", "t_bone"],
  sirloin_cap: ["striploin", "sirloin_flap", "flank", "top_sirloin", "tri_tip"],
  sirloin_flap: ["flank", "skirt", "sirloin_cap", "flap_steak"],
  flank: ["skirt", "sirloin_flap", "sirloin_cap", "hanger"],
  skirt: ["flank", "sirloin_flap", "hanger", "inside_skirt"],
  // Phase 1 additions:
  brisket: ["short_ribs", "fore_shank", "brisket_flat", "brisket_point"],
  hanger: ["skirt", "flank"],
  short_ribs: ["ribeye", "brisket", "back_ribs", "short_plate"],
  top_sirloin: ["sirloin_cap", "tri_tip"],
  tri_tip: ["top_sirloin", "sirloin_flap", "sirloin_tip"],
  // Phase 3 — Round:
  inside_round: ["outside_round", "eye_of_round", "top_round_steak"],
  outside_round: ["inside_round", "eye_of_round", "bottom_round_roast"],
  eye_of_round: ["inside_round", "outside_round"],
  sirloin_tip: ["tri_tip", "top_sirloin", "inside_round"],
  oxtail: ["hind_shank"],
  // Phase 3 — Chuck:
  chuck_roll: ["chuck_blade", "shoulder_clod", "ribeye"],
  chuck_blade: ["chuck_roll", "shoulder_clod"],
  shoulder_clod: ["chuck_blade", "chuck_roll", "flat_iron", "petite_tender"],
  // Phase 3 — Rib:
  prime_rib: ["ribeye", "back_ribs"],
  back_ribs: ["prime_rib", "short_ribs"],
  // Phase 3 — Loin:
  t_bone: ["striploin", "tenderloin"],
  // Phase 3 — Shank:
  hind_shank: ["fore_shank", "oxtail"],
  fore_shank: ["hind_shank", "brisket"],
  // Phase 3 — Plate:
  short_plate: ["short_ribs", "skirt", "hanger"],
  // Tier 2 additions:
  denver_steak: ["chuck_roll", "flat_iron", "ribeye"],
  flat_iron: ["denver_steak", "shoulder_clod", "petite_tender"],
  petite_tender: ["flat_iron", "tenderloin"],
  chuck_eye_steak: ["ribeye", "chuck_roll"],
  brisket_flat: ["brisket_point", "brisket"],
  brisket_point: ["brisket_flat", "brisket"],
  flap_steak: ["sirloin_flap", "skirt", "flank"],
  top_round_steak: ["inside_round", "bottom_round_roast"],
  bottom_round_roast: ["outside_round", "top_round_steak"],
  inside_skirt: ["skirt", "hanger", "flank"],
};

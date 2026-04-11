import type { CanonicalId } from "@/lib/types";

/** Related canonical cuts for internal linking (ordered by relevance). */
export const relatedByCanonical: Record<CanonicalId, readonly CanonicalId[]> = {
  ribeye: ["striploin", "tenderloin", "sirloin_cap", "short_ribs", "prime_rib", "chuck_roll"],
  striploin: ["ribeye", "tenderloin", "sirloin_cap", "sirloin_flap", "t_bone"],
  tenderloin: ["striploin", "ribeye", "t_bone"],
  sirloin_cap: ["striploin", "sirloin_flap", "flank", "top_sirloin", "tri_tip"],
  sirloin_flap: ["flank", "skirt", "sirloin_cap"],
  flank: ["skirt", "sirloin_flap", "sirloin_cap", "hanger"],
  skirt: ["flank", "sirloin_flap", "hanger"],
  // Phase 1 additions:
  brisket: ["short_ribs", "fore_shank"],
  hanger: ["skirt", "flank"],
  short_ribs: ["ribeye", "brisket", "back_ribs", "short_plate"],
  top_sirloin: ["sirloin_cap", "tri_tip"],
  tri_tip: ["top_sirloin", "sirloin_flap", "sirloin_tip"],
  // Phase 3 — Round:
  inside_round: ["outside_round", "eye_of_round"],
  outside_round: ["inside_round", "eye_of_round"],
  eye_of_round: ["inside_round", "outside_round"],
  sirloin_tip: ["tri_tip", "top_sirloin", "inside_round"],
  oxtail: ["hind_shank"],
  // Phase 3 — Chuck:
  chuck_roll: ["chuck_blade", "shoulder_clod", "ribeye"],
  chuck_blade: ["chuck_roll", "shoulder_clod"],
  shoulder_clod: ["chuck_blade", "chuck_roll"],
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
};

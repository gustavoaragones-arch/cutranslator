import type { CanonicalId } from "./types";

/**
 * Maps canonical cut IDs to SVG file paths.
 * All SVGs in public/svg/canonical/ share viewBox="0 0 711.89 622.56".
 * Only 7 of 26 cuts currently have designer SVGs; the rest are absent
 * and will be handled gracefully (no rendering, no crash).
 */
export const canonicalSvgPaths: Record<CanonicalId, string> = {
  ribeye: "/svg/canonical/ribeye.svg",
  striploin: "/svg/canonical/striploin.svg",
  tenderloin: "/svg/canonical/tenderloin.svg",
  sirloin_cap: "/svg/canonical/sirloin_cap.svg",
  sirloin_flap: "/svg/canonical/sirloin_flap.svg",
  flank: "/svg/canonical/flank.svg",
  skirt: "/svg/canonical/skirt.svg",
  brisket: "/svg/canonical/brisket.svg",
  hanger: "/svg/canonical/hanger.svg",
  short_ribs: "/svg/canonical/short_ribs.svg",
  top_sirloin: "/svg/canonical/top_sirloin.svg",
  tri_tip: "/svg/canonical/tri_tip.svg",
  inside_round: "/svg/canonical/inside_round.svg",
  outside_round: "/svg/canonical/outside_round.svg",
  eye_of_round: "/svg/canonical/eye_of_round.svg",
  sirloin_tip: "/svg/canonical/sirloin_tip.svg",
  oxtail: "/svg/canonical/oxtail.svg",
  chuck_roll: "/svg/canonical/chuck_roll.svg",
  chuck_blade: "/svg/canonical/chuck_blade.svg",
  shoulder_clod: "/svg/canonical/shoulder_clod.svg",
  prime_rib: "/svg/canonical/prime_rib.svg",
  back_ribs: "/svg/canonical/back_ribs.svg",
  t_bone: "/svg/canonical/t_bone.svg",
  hind_shank: "/svg/canonical/hind_shank.svg",
  fore_shank: "/svg/canonical/fore_shank.svg",
  short_plate: "/svg/canonical/short_plate.svg",
  // Tier 2 additions (SVG files TBD — primal fallback used):
  denver_steak: "/svg/canonical/denver_steak.svg",
  flat_iron: "/svg/canonical/flat_iron.svg",
  petite_tender: "/svg/canonical/petite_tender.svg",
  chuck_eye_steak: "/svg/canonical/chuck_eye_steak.svg",
  brisket_flat: "/svg/canonical/brisket_flat.svg",
  brisket_point: "/svg/canonical/brisket_point.svg",
  flap_steak: "/svg/canonical/flap_steak.svg",
  top_round_steak: "/svg/canonical/top_round_steak.svg",
  bottom_round_roast: "/svg/canonical/bottom_round_roast.svg",
  inside_skirt: "/svg/canonical/inside_skirt.svg",
};

export const cowSilhouettePath = "/svg/cow.svg";

export const primalSvgPaths: Record<string, string> = {
  chuck: "/svg/primal/chuck.svg",
  rib: "/svg/primal/rib.svg",
  short_loin: "/svg/primal/short_loin.svg",
  sirloin: "/svg/primal/sirloin.svg",
  round: "/svg/primal/round.svg",
  flank: "/svg/primal/flank.svg",
  plate: "/svg/primal/plate.svg",
  brisket: "/svg/primal/brisket.svg",
  shank: "/svg/primal/shank.svg",
};

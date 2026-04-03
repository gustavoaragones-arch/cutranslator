import type { CanonicalId } from "@/lib/types";

/** Related canonical cuts for internal linking (ordered by relevance). */
export const relatedByCanonical: Record<CanonicalId, readonly CanonicalId[]> = {
  ribeye: ["striploin", "tenderloin", "sirloin_cap"],
  striploin: ["ribeye", "tenderloin", "sirloin_cap", "sirloin_flap"],
  tenderloin: ["striploin", "ribeye"],
  sirloin_cap: ["striploin", "sirloin_flap", "flank"],
  sirloin_flap: ["flank", "skirt", "sirloin_cap"],
  flank: ["skirt", "sirloin_flap", "sirloin_cap"],
  skirt: ["flank", "sirloin_flap"],
};

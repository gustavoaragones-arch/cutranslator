import type { CanonicalCut } from "@/lib/types";

export const canonicalCuts: readonly CanonicalCut[] = [
  {
    id: "ribeye",
    primal: "rib",
    location: "upper rib / rib eye muscle",
    description:
      "Highly marbled steak cut from the rib primal; bone-in or boneless retail cuts vary by market.",
    aliases: ["rib eye", "scotch fillet"],
  },
  {
    id: "striploin",
    primal: "loin",
    location: "longissimus dorsi (short loin)",
    description:
      "Leaner than ribeye; the classic strip steak muscle running along the short loin.",
    aliases: ["strip", "sirloin (UK retail)", "new york strip"],
  },
  {
    id: "tenderloin",
    primal: "loin",
    location: "psoas major",
    description:
      "Most tender muscle of the loin; center cuts often sold as filet mignon.",
    aliases: ["filet", "fillet", "filet mignon"],
  },
  {
    id: "sirloin_cap",
    primal: "sirloin",
    location: "top sirloin cap (coulotte)",
    description:
      "Triangular cap on the top sirloin; prized as picanha in Brazil.",
    aliases: ["coulotte", "rump cap"],
  },
  {
    id: "sirloin_flap",
    primal: "sirloin",
    location: "sirloin flap / bottom sirloin flap",
    description:
      "Thin, loose-grained flap from the bottom sirloin; overlaps skirt/flank in some regional breakdowns.",
    aliases: ["flap meat", "bavette (US wholesale overlap)"],
  },
  {
    id: "flank",
    primal: "flank",
    location: "abdominal flank steak",
    description:
      "Long, fibrous abdominal cut; benefits from slicing across the grain.",
    aliases: ["flank steak"],
  },
  {
    id: "skirt",
    primal: "plate",
    location: "diaphragm (inside/outside skirt varies by spec)",
    description:
      "Plate primal diaphragm muscle; very beefy, used for fajitas and grilling.",
    aliases: ["arrachera (regional)", "fajita meat"],
  },
] as const;

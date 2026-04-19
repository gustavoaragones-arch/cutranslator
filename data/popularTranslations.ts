import type { RegionSlug } from "@/lib/types";

export type PopularTranslation = {
  readonly from: RegionSlug;
  readonly to: RegionSlug;
  readonly cutSlug: string;
  readonly cutLabel: string;
  readonly tagline: string;
};

export const POPULAR_TRANSLATIONS: readonly PopularTranslation[] = [
  {
    from: "brazil",
    to: "usa",
    cutSlug: "picanha",
    cutLabel: "Picanha",
    tagline: "Brazil's grilling icon → US sirloin cap",
  },
  {
    from: "france",
    to: "usa",
    cutSlug: "entrecote",
    cutLabel: "Entrecôte",
    tagline: "France's classic steak → US ribeye",
  },
  {
    from: "argentina",
    to: "usa",
    cutSlug: "vacio",
    cutLabel: "Vacío",
    tagline: "Argentine parrilla favorite → US flank",
  },
  {
    from: "mexico",
    to: "usa",
    cutSlug: "arrachera",
    cutLabel: "Arrachera",
    tagline: "Mexican marinated grill cut → US skirt",
  },
  {
    from: "uk",
    to: "usa",
    cutSlug: "sirloin",
    cutLabel: "Sirloin",
    tagline: "UK sirloin → US striploin (NOT US sirloin)",
  },
];

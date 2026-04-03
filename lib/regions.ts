import { regions } from "@/data/regions";
import type { RegionSlug } from "@/lib/types";

export const REGIONS: readonly { slug: RegionSlug; label: string }[] = regions.map(
  (r) => ({ slug: r.id, label: r.label }),
);

export function isRegionSlug(s: string): s is RegionSlug {
  return REGIONS.some((r) => r.slug === s);
}

export function regionLabel(slug: RegionSlug): string {
  return REGIONS.find((r) => r.slug === slug)?.label ?? slug;
}

/** Compact place name for H1s (e.g. “USA” vs “United States”). */
export function regionH1Place(slug: RegionSlug): string {
  if (slug === "usa") return "USA";
  if (slug === "uk") return "UK";
  return regionLabel(slug);
}

import { regions } from "@/data/regions";
import type { RegionGroup, RegionSlug } from "@/lib/types";

export type RegionEntry = {
  slug: RegionSlug;
  label: string;
  flag: string;
  group: RegionGroup;
  aliases?: readonly string[];
};

export const REGIONS: readonly RegionEntry[] = regions.map((r) => ({
  slug: r.id as RegionSlug,
  label: r.label,
  flag: r.flag,
  group: r.group as RegionGroup,
  aliases: "aliases" in r ? (r as { aliases?: readonly string[] }).aliases : undefined,
}));

export function isRegionSlug(s: string): s is RegionSlug {
  return REGIONS.some((r) => r.slug === s);
}

export function regionLabel(slug: RegionSlug): string {
  return REGIONS.find((r) => r.slug === slug)?.label ?? slug;
}

/** Compact place name for H1s (e.g. "USA" vs "United States"). */
export function regionH1Place(slug: RegionSlug): string {
  if (slug === "usa") return "USA";
  if (slug === "uk") return "UK";
  return regionLabel(slug);
}

export { REGION_GROUPS, listActiveRegionGroups } from "@/data/regionGroups";

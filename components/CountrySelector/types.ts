import type { RegionGroup, RegionSlug } from "@/lib/types";

export type RegionForSelector = {
  slug: RegionSlug;
  label: string;
  flag: string;
  group: RegionGroup;
  aliases?: readonly string[];
};

export type GroupedResult = {
  group: { id: RegionGroup; label: string; icon: string };
  regions: RegionForSelector[];
};

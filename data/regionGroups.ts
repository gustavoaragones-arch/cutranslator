import type { RegionGroup, RegionGroupMeta } from "@/lib/types";

export const REGION_GROUPS: Record<RegionGroup, RegionGroupMeta> = {
  americas_north:        { id: "americas_north",        label: "North America",              icon: "🌎", sortOrder: 1 },
  americas_central:      { id: "americas_central",      label: "Central America",            icon: "🌎", sortOrder: 2 },
  americas_south:        { id: "americas_south",        label: "South America",              icon: "🌎", sortOrder: 3 },
  europe_western:        { id: "europe_western",        label: "Western Europe",             icon: "🇪🇺", sortOrder: 4 },
  europe_nordic:         { id: "europe_nordic",         label: "Nordic Europe",              icon: "🇪🇺", sortOrder: 5 },
  europe_central:        { id: "europe_central",        label: "Central Europe",             icon: "🇪🇺", sortOrder: 6 },
  europe_balkans:        { id: "europe_balkans",        label: "The Balkans",                icon: "🇪🇺", sortOrder: 7 },
  europe_eastern_baltic: { id: "europe_eastern_baltic", label: "Eastern & Baltic Europe",   icon: "🇪🇺", sortOrder: 8 },
  mena:                  { id: "mena",                  label: "Middle East & North Africa", icon: "🕌", sortOrder: 9 },
  central_asia:          { id: "central_asia",          label: "Central Asia",               icon: "🌏", sortOrder: 10 },
  asia_pacific:          { id: "asia_pacific",          label: "Asia-Pacific",               icon: "🌏", sortOrder: 11 },
  south_asia:            { id: "south_asia",            label: "South Asia",                 icon: "🌏", sortOrder: 12 },
  southeast_asia:        { id: "southeast_asia",        label: "Southeast Asia",             icon: "🌏", sortOrder: 13 },
  africa:                { id: "africa",                label: "Sub-Saharan Africa",         icon: "🌍", sortOrder: 14 },
  oceania:               { id: "oceania",               label: "Oceania",                    icon: "🌏", sortOrder: 15 },
};

export function listActiveRegionGroups(
  regions: ReadonlyArray<{ group: RegionGroup }>,
): RegionGroupMeta[] {
  const activeGroupIds = new Set(regions.map((r) => r.group));
  return Object.values(REGION_GROUPS)
    .filter((g) => activeGroupIds.has(g.id))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

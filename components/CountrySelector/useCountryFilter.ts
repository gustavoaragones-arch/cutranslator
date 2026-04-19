import { useMemo } from "react";
import type { RegionGroup } from "@/lib/types";
import { listActiveRegionGroups } from "@/lib/regions";
import type { GroupedResult, RegionForSelector } from "./types";

export function useCountryFilter(
  regions: readonly RegionForSelector[],
  query: string,
): GroupedResult[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered =
      q === ""
        ? regions
        : regions.filter((r) => {
            if (r.label.toLowerCase().includes(q)) return true;
            if (r.aliases?.some((a) => a.toLowerCase().includes(q))) return true;
            return false;
          });

    const byGroup = new Map<RegionGroup, RegionForSelector[]>();
    for (const r of filtered) {
      const bucket = byGroup.get(r.group) ?? [];
      bucket.push(r);
      byGroup.set(r.group, bucket);
    }

    for (const bucket of byGroup.values()) {
      bucket.sort((a, b) => a.label.localeCompare(b.label));
    }

    return listActiveRegionGroups([...byGroup.keys()].map((id) => ({ group: id })))
      .map((groupMeta) => ({
        group: { id: groupMeta.id, label: groupMeta.label, icon: groupMeta.icon },
        regions: byGroup.get(groupMeta.id) ?? [],
      }))
      .filter((g) => g.regions.length > 0);
  }, [regions, query]);
}

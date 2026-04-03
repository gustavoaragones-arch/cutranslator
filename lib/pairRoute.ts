import { isRegionSlug } from "@/lib/regions";
import type { RegionSlug } from "@/lib/types";

export type ParsedPair = { from: RegionSlug; to: RegionSlug };

const SEP = "-to-";

export function parsePairSegment(pair: string): ParsedPair | null {
  const idx = pair.indexOf(SEP);
  if (idx <= 0) return null;
  const from = pair.slice(0, idx);
  const to = pair.slice(idx + SEP.length);
  if (!isRegionSlug(from) || !isRegionSlug(to)) return null;
  return { from, to };
}

export function pairSegment(from: RegionSlug, to: RegionSlug): string {
  return `${from}${SEP}${to}`;
}

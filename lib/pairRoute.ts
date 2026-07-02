import { isRegionSlug } from "@/lib/regions";
import type { RegionSlug } from "@/lib/types";

export type ParsedPair = { from: RegionSlug; to: RegionSlug };

const SEP = "-to-";

function parseRegionToken(token: string): RegionSlug | null {
  if (isRegionSlug(token)) return token;
  // Allow URL-friendly hyphen aliases for underscore slugs (e.g. cote-divoire).
  const underscored = token.replace(/-/g, "_");
  if (isRegionSlug(underscored)) return underscored;
  return null;
}

export function parsePairSegment(pair: string): ParsedPair | null {
  const idx = pair.indexOf(SEP);
  if (idx <= 0) return null;
  const from = parseRegionToken(pair.slice(0, idx));
  const to = parseRegionToken(pair.slice(idx + SEP.length));
  if (!from || !to) return null;
  return { from, to };
}

export function pairSegment(from: RegionSlug, to: RegionSlug): string {
  return `${from}${SEP}${to}`;
}

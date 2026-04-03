import { findRegionalMappings } from "@/lib/mappings";
import { regionH1Place, regionLabel } from "@/lib/regions";
import type { RegionSlug } from "@/lib/types";
import { cutSlugToNormalizedKey } from "@/utils/normalize";

function titleCaseWords(s: string): string {
  return s
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Best-effort pretty label for H1 from URL slug + source region. */
export function displayCutNameForSlug(
  cutSlug: string,
  sourceRegion: RegionSlug,
): string {
  const key = cutSlugToNormalizedKey(cutSlug);
  const hits = findRegionalMappings(sourceRegion, key);
  if (hits.length > 0) return hits[0].name;
  return titleCaseWords(key);
}

export function seoH1(
  cutDisplay: string,
  targetRegion: RegionSlug,
): string {
  const place = regionH1Place(targetRegion);
  if (targetRegion === "usa") {
    return `What is ${cutDisplay} in the ${place}?`;
  }
  return `What is ${cutDisplay} in ${place}?`;
}

export function seoShortAnswer(args: {
  cutDisplay: string;
  sourceRegion: RegionSlug;
  targetRegion: RegionSlug;
  primaryLabel: string;
}): string {
  const from = regionLabel(args.sourceRegion);
  const toShort = regionH1Place(args.targetRegion);
  const toPhrase =
    args.targetRegion === "usa" ? `the ${toShort}` : toShort;
  return `${args.cutDisplay} (${from}) corresponds to ${args.primaryLabel} in ${toPhrase} for most retail and restaurant menus, using a canonical beef-cut mapping.`;
}

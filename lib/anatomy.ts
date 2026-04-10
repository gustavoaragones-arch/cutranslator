import type { CanonicalId } from "@/lib/types";
import { getCanonicalById } from "@/lib/canonical";

/**
 * Dataset `CanonicalCut.primal` strings → SVG filenames under /public/svg/primal/
 * (e.g. "loin" → short_loin.svg)
 */
export const DATASET_PRIMAL_TO_SVG_SLUG: Readonly<Record<string, string>> = {
  chuck: "chuck",
  rib: "rib",
  loin: "short_loin",
  sirloin: "sirloin",
  flank: "flank",
  plate: "plate",
  round: "round",
  brisket: "brisket",
  shank: "shank",
};

/** Canonical ontology id → SVG basename under /public/svg/canonical/ (without .svg). */
export const CANONICAL_ID_TO_SVG_BASENAME: Readonly<
  Record<CanonicalId, string>
> = {
  ribeye: "rib_eye",
  striploin: "striploin",
  tenderloin: "tenderloin",
  sirloin_cap: "sirloin_cap",
  sirloin_flap: "sirloin_flap",
  flank: "flank",
  skirt: "skirt",
};

export function datasetPrimalToSvgSlug(datasetPrimal: string): string {
  const k = datasetPrimal.trim().toLowerCase();
  return DATASET_PRIMAL_TO_SVG_SLUG[k] ?? k.replace(/\s+/g, "_");
}

export function canonicalIdToSvgBasename(id: CanonicalId): string {
  return CANONICAL_ID_TO_SVG_BASENAME[id];
}

/** Unique primal SVG slugs for all given canonical ids (for context layer). */
export function primalSvgSlugsForCanonicalIds(
  ids: readonly CanonicalId[],
): string[] {
  const out = new Set<string>();
  for (const id of ids) {
    const c = getCanonicalById(id);
    if (c) out.add(datasetPrimalToSvgSlug(c.primal));
  }
  return [...out];
}

/** Canonical overlay basenames for the given ids only (no defaults, no extras). */
export function canonicalSvgBasenamesForIds(
  ids: readonly CanonicalId[],
): string[] {
  const bases = ids
    .map((id) => CANONICAL_ID_TO_SVG_BASENAME[id])
    .filter((b): b is string => typeof b === "string" && b.length > 0);
  return [...new Set(bases)];
}

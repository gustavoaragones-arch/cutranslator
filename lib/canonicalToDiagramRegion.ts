/**
 * @deprecated Use lib/svgMappings.ts instead.
 * The new system maps CanonicalId directly to SVG file paths via CowDiagramNew.
 */
import type { CanonicalId } from "@/lib/types";
import {
  COW_DIAGRAM_CUTS,
  type CowDiagramRegionId,
} from "@/lib/cowDiagramData";

/** Region ids that exist as paths on the inline diagram (`COW_DIAGRAM_CUTS`). */
const DIAGRAM_REGION_IDS = new Set<CowDiagramRegionId>(
  COW_DIAGRAM_CUTS.map((c) => c.id),
);

/**
 * Maps each canonical id to at most one diagram region: **only** when the
 * region id equals the canonical id (no inference, clusters, or extra regions).
 */
export function diagramRegionIdsForCanonicals(
  ids: readonly CanonicalId[],
): CowDiagramRegionId[] {
  const out: CowDiagramRegionId[] = [];
  const seen = new Set<CowDiagramRegionId>();
  for (const id of ids) {
    if (!DIAGRAM_REGION_IDS.has(id as CowDiagramRegionId)) continue;
    const regionId = id as CowDiagramRegionId;
    if (seen.has(regionId)) continue;
    seen.add(regionId);
    out.push(regionId);
  }
  return out;
}

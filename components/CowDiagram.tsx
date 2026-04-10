import { diagramRegionIdsForCanonicals } from "@/lib/canonicalToDiagramRegion";
import type { CanonicalId } from "@/lib/types";
import { CowDiagramLayers } from "@/components/CowDiagramLayers";

type Props = {
  canonicalIds: readonly CanonicalId[];
};

/**
 * Inline SVG diagram: highlights diagram regions **only** for ids that match a
 * path id in `COW_DIAGRAM_CUTS` (same id as canonical); no expansion.
 */
export function CowDiagram({ canonicalIds }: Props) {
  if (canonicalIds.length === 0) return null;

  const highlightRegionIds = diagramRegionIdsForCanonicals(canonicalIds);

  return <CowDiagramLayers highlightRegionIds={highlightRegionIds} />;
}

import { diagramRegionIdsForCanonicals } from "@/lib/canonicalToDiagramRegion";
import { canonicalSvgBasenamesForIds } from "@/lib/anatomy";
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

  const canonicalBasenames = canonicalSvgBasenamesForIds(canonicalIds);
  const safeCanonicalBasenames = canonicalBasenames.filter(Boolean);

  /* eslint-disable no-console -- temporary diagram debug */
  console.log("CowDiagram canonicalIds:", canonicalIds);
  console.log("CowDiagram highlightRegionIds:", highlightRegionIds);
  console.log("Rendered SVG basenames (reference):", safeCanonicalBasenames);
  /* eslint-enable no-console */

  return <CowDiagramLayers highlightRegionIds={highlightRegionIds} />;
}

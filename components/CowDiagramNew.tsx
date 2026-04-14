import { loadSvgInner, sanitizeSvgInner } from "@/lib/svgLoader";
import { canonicalSvgPaths, cowSilhouettePath } from "@/lib/svgMappings";
import { getCanonicalById } from "@/lib/canonical";
import type { CanonicalId, MatchType } from "@/lib/types";
import { CowDiagramNewClient, type CutLayer } from "@/components/CowDiagramNewClient";

export type CutHighlight = {
  canonicalId: CanonicalId;
  matchType: MatchType;
};

type Props = {
  highlights: CutHighlight[];
  showPrimals?: boolean;
  className?: string;
};

/**
 * Server component: loads SVG files at build time (SSG) using fs.readFileSync,
 * then passes pre-loaded content strings to the client component for rendering.
 *
 * Architecture: CowDiagramNew (server) → CowDiagramNewClient (client)
 * This avoids client-side fetches and bakes SVG content into the HTML at build time.
 */
export function CowDiagramNew({ highlights, showPrimals = false }: Props) {
  if (highlights.length === 0) return null;

  // All SVGs share canvas "0 0 711.89 622.56" but the cow illustration and all
  // cut paths are concentrated in a small region (~x:468–728, y:188–302).
  // We crop to that content area so the cow fills its container visibly.
  const viewBox = "464 186 264 128";
  const cowInner = loadSvgInner(cowSilhouettePath);

  const layers: CutLayer[] = highlights.map((h) => {
    const svgPath = canonicalSvgPaths[h.canonicalId];
    const rawInner = loadSvgInner(svgPath);
    const svgInner = rawInner
      ? sanitizeSvgInner(rawInner, h.canonicalId)
      : null;
    const canonical = getCanonicalById(h.canonicalId);
    const displayName = canonical
      ? canonical.id.replace(/_/g, " ")
      : h.canonicalId.replace(/_/g, " ");
    return {
      canonicalId: h.canonicalId,
      matchType: h.matchType,
      svgInner,
      displayName,
    };
  });

  return (
    <CowDiagramNewClient
      cowInner={cowInner}
      layers={layers}
      viewBox={viewBox}
      showPrimals={showPrimals}
    />
  );
}

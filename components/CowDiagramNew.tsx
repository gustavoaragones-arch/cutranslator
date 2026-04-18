"use client";

import { useEffect, useState } from "react";
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

function sanitizeSvgInner(content: string, prefix: string): string {
  let cleaned = content;
  cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  cleaned = cleaned.replace(/<\?xml[^>]*\?>/gi, "");
  cleaned = cleaned.replace(/\bid="([^"]*)"/g, `id="${prefix}-$1"`);
  cleaned = cleaned.replace(/url\(#([^)]*)\)/g, `url(#${prefix}-$1)`);
  return cleaned;
}

function stripSvgWrapper(raw: string): string {
  return raw
    .replace(/<\?xml[^>]*\?>\s*/gi, "")
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();
}

export function CowDiagramNew({ highlights, showPrimals = false }: Props) {
  if (highlights.length === 0) return null;

  const viewBox = "464 186 264 128";
  const [cowInner, setCowInner] = useState<string | null>(null);
  const [layers, setLayers] = useState<CutLayer[]>(() =>
    highlights.map((h) => {
      const canonical = getCanonicalById(h.canonicalId);
      const displayName = canonical
        ? canonical.id.replace(/_/g, " ")
        : h.canonicalId.replace(/_/g, " ");
      return { canonicalId: h.canonicalId, matchType: h.matchType, svgInner: null, displayName };
    })
  );

  const highlightKey = highlights.map((h) => `${h.canonicalId}:${h.matchType}`).join(",");

  useEffect(() => {
    fetch("/svg/cow.svg")
      .then((r) => r.text())
      .then((raw) => setCowInner(stripSvgWrapper(raw)))
      .catch(() => {});

    highlights.forEach((h) => {
      fetch(`/svg/canonical/${h.canonicalId}.svg`)
        .then((r) => (r.ok ? r.text() : null))
        .then((raw) => {
          if (!raw) return;
          const inner = sanitizeSvgInner(stripSvgWrapper(raw), h.canonicalId);
          setLayers((prev) =>
            prev.map((l) =>
              l.canonicalId === h.canonicalId ? { ...l, svgInner: inner } : l
            )
          );
        })
        .catch(() => {});
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightKey]);

  return (
    <CowDiagramNewClient
      cowInner={cowInner}
      layers={layers}
      viewBox={viewBox}
      showPrimals={showPrimals}
    />
  );
}

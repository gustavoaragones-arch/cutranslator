"use client";

import Link from "next/link";
import { memo, useCallback, useState } from "react";
import { CowDiagramSvg } from "@/components/CowDiagramSvg";
import CutTooltip from "@/components/CutTooltip";
import { isCanonicalId } from "@/lib/canonical";
import type { CowDiagramRegionId } from "@/lib/cowDiagramData";

function CowDiagramLayersImpl({
  highlightRegionIds,
}: {
  highlightRegionIds: readonly CowDiagramRegionId[];
}) {
  const [hoveredCut, setHoveredCut] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCut, setSelectedCut] = useState<string | null>(null);

  const isHovering = hoveredCut !== null;

  const onCutPointerEnter = useCallback(
    (cutId: string, label: string, clientX: number, clientY: number) => {
      setHoveredCut(cutId);
      setHoveredLabel(label);
      setMousePosition({ x: clientX, y: clientY });
    },
    [],
  );

  const onCutPointerMove = useCallback((clientX: number, clientY: number) => {
    setMousePosition({ x: clientX, y: clientY });
  }, []);

  const onCutPointerLeave = useCallback(() => {
    setHoveredCut(null);
    setHoveredLabel(null);
  }, []);

  const clearDiagramPointerState = useCallback(() => {
    setHoveredCut(null);
    setHoveredLabel(null);
    setSelectedCut(null);
  }, []);

  return (
    <section
      className={`cow-diagram relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4${isHovering ? " is-hovering" : ""}`}
      aria-label="Beef primal and cut anatomy"
    >
      <div
        className="relative"
        onPointerLeave={(e) => {
          const rel = e.relatedTarget;
          if (rel instanceof Node && e.currentTarget.contains(rel)) {
            return;
          }
          clearDiagramPointerState();
        }}
      >
        <CowDiagramSvg
          highlightRegionIds={highlightRegionIds}
          hoveredCut={hoveredCut}
          selectedCut={selectedCut}
          setSelectedCut={setSelectedCut}
          onCutPointerEnter={onCutPointerEnter}
          onCutPointerMove={onCutPointerMove}
          onCutPointerLeave={onCutPointerLeave}
        />
        {hoveredCut != null && hoveredLabel != null && (
          <CutTooltip
            label={hoveredLabel}
            x={mousePosition.x}
            y={mousePosition.y}
          />
        )}
        {hoveredCut != null && isCanonicalId(hoveredCut) && (
          <p className="mt-3 text-center text-sm">
            <Link
              href={`/cuts/${hoveredCut}`}
              className="cut-link font-medium underline"
            >
              Explore {hoveredLabel ?? hoveredCut.replace(/_/g, " ")} globally
              →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export const CowDiagramLayers = memo(CowDiagramLayersImpl);

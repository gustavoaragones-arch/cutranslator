"use client";

import { memo, useRef } from "react";
import {
  COW_DIAGRAM_CUTS,
  COW_DIAGRAM_CONTENT_CENTER,
  COW_DIAGRAM_SCALE,
  COW_DIAGRAM_VIEWBOX,
  cowDiagramViewBoxAttr,
  COW_DIAGRAM_ASPECT_RATIO,
} from "@/lib/cowDiagramData";
import type { CowDiagramRegionId } from "@/lib/cowDiagramData";
import { isCanonicalId } from "@/lib/canonical";

type Props = {
  /** Region ids to emphasize (from canonical mapping). */
  highlightRegionIds: readonly CowDiagramRegionId[];
  hoveredCut: string | null;
  selectedCut: string | null;
  setSelectedCut: (id: string | null) => void;
  onCutPointerEnter: (
    cutId: string,
    label: string,
    clientX: number,
    clientY: number,
  ) => void;
  onCutPointerMove: (clientX: number, clientY: number) => void;
  onCutPointerLeave: () => void;
};

function CowDiagramSvgImpl({
  highlightRegionIds,
  hoveredCut,
  selectedCut,
  setSelectedCut,
  onCutPointerEnter,
  onCutPointerMove,
  onCutPointerLeave,
}: Props) {
  const lastPointerType = useRef<"mouse" | "pen" | "touch" | null>(null);

  function goToCut(cutId: string) {
    if (isCanonicalId(cutId)) {
      window.location.href = `/cuts/${cutId}`;
    }
  }

  const aspectStyle = { aspectRatio: `${COW_DIAGRAM_ASPECT_RATIO}` } as const;
  const vb = cowDiagramViewBoxAttr();

  const vcx =
    COW_DIAGRAM_VIEWBOX.minX + COW_DIAGRAM_VIEWBOX.width / 2;
  const vcy =
    COW_DIAGRAM_VIEWBOX.minY + COW_DIAGRAM_VIEWBOX.height / 2;
  const { x: ccx, y: ccy } = COW_DIAGRAM_CONTENT_CENTER;
  const s = COW_DIAGRAM_SCALE;
  const meatTransform = `translate(${vcx} ${vcy}) scale(${s}) translate(${-ccx} ${-ccy})`;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={aspectStyle}
    >
      <svg
        viewBox={vb}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 block h-full w-full [filter:drop-shadow(0_4px_24px_rgba(44,36,24,0.10))]"
        aria-hidden
        focusable="false"
      >
        <rect
          x={COW_DIAGRAM_VIEWBOX.minX}
          y={COW_DIAGRAM_VIEWBOX.minY}
          width={COW_DIAGRAM_VIEWBOX.width}
          height={COW_DIAGRAM_VIEWBOX.height}
          fill="var(--bg-card)"
          className="pointer-events-none"
        />
        <g
          transform={meatTransform}
          onPointerLeave={(e) => {
            const rel = e.relatedTarget;
            if (rel instanceof Node && e.currentTarget.contains(rel)) {
              return;
            }
            onCutPointerLeave();
          }}
        >
          {COW_DIAGRAM_CUTS.map((cut, index) => {
            const inResultFocus = highlightRegionIds.includes(cut.id);
            const navigable = isCanonicalId(cut.id);
            const isActiveHover = hoveredCut === cut.id;
            const isSelected = selectedCut === cut.id;

            const layerClass = [
              "cow-diagram-layer",
              "cow-diagram-layer--canonical",
              "interactive",
              navigable ? "cow-diagram-layer--canonical-nav" : "",
              inResultFocus ? "in-result-focus" : "",
              isActiveHover ? "active" : "",
              isSelected ? "selected" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <g
                key={cut.id}
                role="presentation"
                className={layerClass}
                style={{
                  animationDelay: `${index * 0.04}s`,
                }}
                onPointerDown={(e) => {
                  lastPointerType.current =
                    e.pointerType === "touch"
                      ? "touch"
                      : e.pointerType === "pen"
                        ? "pen"
                        : "mouse";
                }}
                onPointerEnter={(e) =>
                  onCutPointerEnter(cut.id, cut.name, e.clientX, e.clientY)
                }
                onPointerMove={(e) => onCutPointerMove(e.clientX, e.clientY)}
                onClick={() => {
                  if (!navigable) return;
                  const pt = lastPointerType.current;
                  if (pt === "mouse" || pt === "pen" || pt === null) {
                    goToCut(cut.id);
                    return;
                  }
                  if (pt === "touch") {
                    if (selectedCut === cut.id) {
                      goToCut(cut.id);
                    } else {
                      setSelectedCut(cut.id);
                    }
                  }
                }}
              >
                <path
                  d={cut.path}
                  fill={cut.color}
                  fillOpacity={1}
                  stroke="rgba(44, 36, 24, 0.2)"
                  strokeWidth={0.4}
                  className="cow-diagram-cut-path"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export const CowDiagramSvg = memo(CowDiagramSvgImpl);

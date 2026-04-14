"use client";

import { memo, useCallback, useRef, useState } from "react";
import Link from "next/link";
import CutTooltip from "@/components/CutTooltip";
import { isCanonicalId } from "@/lib/canonical";
import type { CanonicalId } from "@/lib/types";
import type { MatchType } from "@/lib/types";

export type CutLayer = {
  canonicalId: CanonicalId;
  matchType: MatchType;
  /** Pre-loaded SVG inner content (paths/groups, no outer <svg> wrapper). Null = file absent. */
  svgInner: string | null;
  displayName: string;
};

type Props = {
  cowInner: string | null;
  layers: CutLayer[];
  viewBox: string;
  showPrimals?: boolean;
};

function CowDiagramNewClientImpl({ cowInner, layers, viewBox }: Props) {
  const [hoveredCut, setHoveredCut] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCut, setSelectedCut] = useState<string | null>(null);
  const lastPointerType = useRef<"mouse" | "pen" | "touch" | null>(null);

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

  const clearPointerState = useCallback(() => {
    setHoveredCut(null);
    setHoveredLabel(null);
    setSelectedCut(null);
  }, []);

  function goToCut(cutId: string) {
    if (isCanonicalId(cutId)) {
      window.location.href = `/cuts/${cutId}`;
    }
  }

  // Only render layers that have SVG content
  const visibleLayers = layers.filter((l) => l.svgInner !== null);

  return (
    <section
      className={`cow-diagram relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4${isHovering ? " is-hovering" : ""}`}
      aria-label={`Beef cow diagram${visibleLayers.length > 0 ? ` highlighting ${visibleLayers.map((l) => l.displayName).join(" and ")}` : ""}`}
    >
      <div
        className="relative"
        onPointerLeave={(e) => {
          const rel = e.relatedTarget;
          if (rel instanceof Node && e.currentTarget.contains(rel)) return;
          clearPointerState();
        }}
      >
        <svg
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="block h-auto w-full [filter:drop-shadow(0_4px_24px_rgba(44,36,24,0.10))]"
          aria-hidden
          focusable="false"
        >
          {/* Layer 1: Cow silhouette */}
          {cowInner && (
            <g
              className="cow-silhouette"
              dangerouslySetInnerHTML={{ __html: cowInner }}
            />
          )}

          {/* Layer 2: Highlighted canonical cuts */}
          {visibleLayers.map((layer) => {
            const isActive = hoveredCut === layer.canonicalId;
            const isSelected = selectedCut === layer.canonicalId;
            const navigable = isCanonicalId(layer.canonicalId);
            return (
              <g
                key={layer.canonicalId}
                className={[
                  "cut-highlight",
                  `cut-highlight-${layer.matchType}`,
                  isActive ? "cut-highlight--active" : "",
                  isSelected ? "cut-highlight--selected" : "",
                  navigable ? "cut-highlight--nav" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ cursor: navigable ? "pointer" : undefined }}
                onPointerDown={(e) => {
                  lastPointerType.current =
                    e.pointerType === "touch"
                      ? "touch"
                      : e.pointerType === "pen"
                        ? "pen"
                        : "mouse";
                }}
                onPointerEnter={(e) =>
                  onCutPointerEnter(
                    layer.canonicalId,
                    layer.displayName,
                    e.clientX,
                    e.clientY,
                  )
                }
                onPointerMove={(e) => onCutPointerMove(e.clientX, e.clientY)}
                onPointerLeave={(e) => {
                  const rel = e.relatedTarget;
                  if (rel instanceof Node && e.currentTarget.contains(rel))
                    return;
                  onCutPointerLeave();
                }}
                onClick={() => {
                  if (!navigable) return;
                  const pt = lastPointerType.current;
                  if (pt === "mouse" || pt === "pen" || pt === null) {
                    goToCut(layer.canonicalId);
                  } else if (pt === "touch") {
                    if (selectedCut === layer.canonicalId) {
                      goToCut(layer.canonicalId);
                    } else {
                      setSelectedCut(layer.canonicalId);
                    }
                  }
                }}
                dangerouslySetInnerHTML={{ __html: layer.svgInner! }}
              />
            );
          })}
        </svg>

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
              Explore {hoveredLabel ?? hoveredCut.replace(/_/g, " ")} globally →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export const CowDiagramNewClient = memo(CowDiagramNewClientImpl);

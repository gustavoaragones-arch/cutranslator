import type { MatchType } from "@/lib/types";

export type { MatchType };

type MatchTypeBadgeProps = {
  matchType: MatchType;
  size?: "sm" | "md";
};

const CONFIG: Record<MatchType, { label: string; classes: string }> = {
  exact: {
    label: "Exact match",
    classes: "bg-emerald-100 text-emerald-800",
  },
  close: {
    label: "Close match",
    classes: "bg-green-50 text-green-700",
  },
  approximate: {
    label: "Approximate",
    classes: "bg-amber-50 text-amber-700",
  },
  composite: {
    label: "Spans multiple cuts",
    classes: "bg-orange-50 text-orange-700",
  },
  cultural: {
    label: "Cultural equivalent",
    classes: "bg-blue-50 text-blue-700",
  },
  none: {
    label: "No equivalent",
    classes: "bg-gray-100 text-gray-500",
  },
};

/**
 * Small pill badge showing match quality. Self-contained, no external state.
 * Use size="sm" for inline-with-text; size="md" for result card headers.
 */
export function MatchTypeBadge({ matchType, size = "sm" }: MatchTypeBadgeProps) {
  const { label, classes } = CONFIG[matchType] ?? CONFIG.approximate;
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold tracking-wide ${classes} ${sizeClasses}`}
      title={`Match quality: ${matchType}`}
    >
      {label}
    </span>
  );
}

/**
 * Infer a display match_type when the data layer hasn't set one.
 * Backward-compatibility heuristic only — not a permanent solution.
 */
export function inferMatchType(
  matchType: MatchType | undefined,
  confidence: number,
): MatchType {
  if (matchType) return matchType;
  if (confidence >= 0.9) return "exact";
  if (confidence >= 0.75) return "close";
  if (confidence >= 0.5) return "approximate";
  return "cultural";
}

/**
 * One-sentence match-quality description for UI copy.
 * Uses the `note` from the data when available; falls back to templates.
 */
export function matchTypeBlurb(args: {
  matchType: MatchType;
  inputName: string;
  primaryLabel: string;
  targetRegionLabel: string;
  note?: string;
}): string {
  const { matchType, inputName, primaryLabel, targetRegionLabel, note } = args;

  // Human-written notes always take priority
  if (note && matchType !== "exact") return note;

  switch (matchType) {
    case "exact":
      return `${inputName} is the standard name for ${primaryLabel} in this country.`;
    case "close":
      return `${inputName} is very similar to ${primaryLabel}${note ? ` — ${note}` : ", with minor trim or boundary differences."} `;
    case "approximate":
      return `${inputName} is roughly equivalent to ${primaryLabel} in ${targetRegionLabel}, though they differ in butchering boundaries or trim.`;
    case "composite":
      return `${inputName} spans multiple cuts in ${targetRegionLabel} — no single equivalent exists. ${primaryLabel} is the closest.`;
    case "cultural":
      return `${inputName} has no direct equivalent in ${targetRegionLabel}. The closest cut is ${primaryLabel}, but the butchering tradition differs.`;
    case "none":
      return `${inputName} has no known equivalent in ${targetRegionLabel}.`;
  }
}

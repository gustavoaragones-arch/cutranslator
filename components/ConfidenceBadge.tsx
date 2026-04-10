type Props = { confidence: number; className?: string };

const LOW_CONF_THRESHOLD = 0.75;

export type ConfidenceLevel = "high" | "medium" | "low";

export function confidenceLevel(confidence: number): ConfidenceLevel {
  if (confidence >= 0.85) return "high";
  if (confidence >= LOW_CONF_THRESHOLD) return "medium";
  return "low";
}

const LEVEL_CLASS: Record<ConfidenceLevel, string> = {
  high: "confidence-high",
  medium: "confidence-medium",
  low: "confidence-low",
};

export function ConfidenceBadge({ confidence, className = "" }: Props) {
  const pct = Math.round(Math.min(1, Math.max(0, confidence)) * 100);
  const level = confidenceLevel(confidence);
  const tone = LEVEL_CLASS[level];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${tone} ${className}`}
      title="Mapping confidence from regional dataset"
    >
      {pct}% ·{" "}
      {level === "high"
        ? "High confidence match"
        : level === "medium"
          ? "Possible match"
          : "Multiple interpretations"}
    </span>
  );
}

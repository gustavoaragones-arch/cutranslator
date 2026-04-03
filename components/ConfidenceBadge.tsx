type Props = { confidence: number; className?: string };

const LOW_CONF_THRESHOLD = 0.75;

export type ConfidenceLevel = "high" | "medium" | "low";

export function confidenceLevel(confidence: number): ConfidenceLevel {
  if (confidence >= 0.85) return "high";
  if (confidence >= LOW_CONF_THRESHOLD) return "medium";
  return "low";
}

const LEVEL_STYLES: Record<
  ConfidenceLevel,
  string
> = {
  high:
    "bg-emerald-100 text-emerald-950 dark:bg-emerald-900/40 dark:text-emerald-100",
  medium:
    "bg-amber-100 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100",
  low: "bg-rose-100 text-rose-950 dark:bg-rose-900/40 dark:text-rose-100",
};

export function ConfidenceBadge({ confidence, className = "" }: Props) {
  const pct = Math.round(Math.min(1, Math.max(0, confidence)) * 100);
  const level = confidenceLevel(confidence);
  const tone = LEVEL_STYLES[level];

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

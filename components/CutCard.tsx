import type { ResolvedTarget } from "@/lib/types";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

type Props = {
  target: ResolvedTarget;
  /** Region whose retail names are shown (usually the “to” country). */
  targetRegionLabel: string;
};

export function CutCard({ target, targetRegionLabel }: Props) {
  return (
    <article className="cut-card p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {target.names[0]}
        </h3>
        <ConfidenceBadge confidence={target.confidence} />
      </div>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
        Region: {targetRegionLabel}
      </p>
      {target.names.length > 1 && (
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Also: {target.names.slice(1).join(" · ")}
        </p>
      )}
      <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
        Canonical: {target.canonicalId.replace(/_/g, " ")}
      </p>
      {target.note && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
          {target.note}
        </p>
      )}
    </article>
  );
}

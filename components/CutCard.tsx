import type { ResolvedTarget } from "@/lib/types";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

type Props = {
  target: ResolvedTarget;
  /** Region whose retail names are shown (usually the “to” country). */
  targetRegionLabel: string;
};

export function CutCard({ target, targetRegionLabel }: Props) {
  return (
    <article className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm dark:border-stone-700 dark:bg-stone-900/40">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">
          {target.names[0]}
        </h3>
        <ConfidenceBadge confidence={target.confidence} />
      </div>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
        Region: {targetRegionLabel}
      </p>
      {target.names.length > 1 && (
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          Also: {target.names.slice(1).join(" · ")}
        </p>
      )}
      <p className="mt-1 font-mono text-xs text-stone-500 dark:text-stone-500">
        Canonical: {target.canonicalId.replace(/_/g, " ")}
      </p>
      {target.note && (
        <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {target.note}
        </p>
      )}
    </article>
  );
}

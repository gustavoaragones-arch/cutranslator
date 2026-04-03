import Link from "next/link";
import type { CanonicalId, ResolveResult, RegionSlug } from "@/lib/types";
import { getCanonicalById } from "@/lib/canonical";
import {
  canonicalHubPath,
  comparePath,
  compareSlugForCanonicalPair,
  whatIsPath,
} from "@/lib/content";
import { representativeInputName } from "@/lib/mappings";
import { pairSegment } from "@/lib/pairRoute";
import { regionLabel } from "@/lib/regions";
import { slugifyCut } from "@/utils/normalize";
import { CutCard } from "@/components/CutCard";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

type Props = {
  result: ResolveResult;
  sourceRegion: RegionSlug;
  targetRegion: RegionSlug;
  /** URL segment for this translation (matches `/what-is/[cut]`). */
  translationCutSlug: string;
};

function RelatedLink(args: {
  canonicalId: CanonicalId;
  sourceRegion: RegionSlug;
  targetRegion: RegionSlug;
  label: string;
}) {
  const c = getCanonicalById(args.canonicalId);
  const sourceRetail = representativeInputName(
    args.sourceRegion,
    args.canonicalId,
  );
  const slug = slugifyCut(sourceRetail ?? args.label);
  const href = `/${pairSegment(args.sourceRegion, args.targetRegion)}/${slug}`;
  return (
    <Link
      href={href}
      className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
    >
      {c ? `${args.label} (${c.primal})` : args.label}
    </Link>
  );
}

export function CutResult({
  result,
  sourceRegion,
  targetRegion,
  translationCutSlug,
}: Props) {
  const from = regionLabel(sourceRegion);
  const to = regionLabel(targetRegion);

  if (!result.primary) {
    return (
      <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8 dark:border-rose-900/50 dark:bg-rose-950/30">
        <p className="text-lg font-medium text-rose-900 dark:text-rose-100">
          No mapping yet
        </p>
        <p className="mt-2 text-rose-800/90 dark:text-rose-200/90">
          {result.explanation.short}
        </p>
        {result.explanation.detailed !== result.explanation.short && (
          <details className="mt-4 text-sm text-rose-800/90 dark:text-rose-200/85">
            <summary className="cursor-pointer font-medium">More detail</summary>
            <p className="mt-2 leading-relaxed">{result.explanation.detailed}</p>
          </details>
        )}
      </div>
    );
  }

  const p = result.primary;

  return (
    <div className="space-y-10">
      {result.ambiguity.exists && (
        <div
          className="rounded-2xl border border-amber-300/80 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-100"
          role="status"
        >
          {result.ambiguity.message}
        </div>
      )}

      <section className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-stone-50 p-8 shadow-sm dark:border-amber-900/40 dark:from-stone-900 dark:via-stone-950 dark:to-stone-900">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          Best Match
        </p>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
          This is the closest equivalent cut in the selected country.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-3xl">
            {p.names[0]}
          </h2>
          <ConfidenceBadge confidence={p.confidence} />
        </div>
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
          <Link
            href={whatIsPath(translationCutSlug)}
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            What is this cut?
          </Link>
          <span className="mx-2 text-stone-400">·</span>
          <Link
            href={canonicalHubPath(p.canonicalId)}
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            Global guide ({p.canonicalId.replace(/_/g, " ")})
          </Link>
        </p>
        {p.names.length > 1 && (
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Other {to} names: {p.names.slice(1).join(" · ")}
          </p>
        )}
        <details className="mt-6 group">
          <summary className="cursor-pointer text-sm font-semibold text-amber-900 underline-offset-2 hover:underline dark:text-amber-200">
            Detailed explanation
          </summary>
          <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-stone-300">
            {result.explanation.detailed}
          </p>
        </details>

        <div className="mt-6 rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-stone-700 dark:bg-stone-900/40">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200">
            Keep exploring
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.related[0] && (
              <Link
                href={comparePath(
                  compareSlugForCanonicalPair(
                    p.canonicalId,
                    result.related[0].canonicalId,
                  ),
                )}
                className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
              >
                Compare with similar cuts
              </Link>
            )}
            <Link
              href={canonicalHubPath(p.canonicalId)}
              className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
            >
              See this cut in other countries
            </Link>
            <Link
              href={whatIsPath(translationCutSlug)}
              className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
            >
              Learn more about this cut
            </Link>
          </div>
        </div>
      </section>

      {result.alternatives.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Alternatives ({from} → {to})
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {result.alternatives.map((t) => (
              <CutCard
                key={t.canonicalId}
                target={t}
                targetRegionLabel={to}
              />
            ))}
          </div>
        </section>
      )}

      {result.related.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Related cuts
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {result.related.map((item) => (
              <RelatedLink
                key={item.canonicalId}
                canonicalId={item.canonicalId}
                sourceRegion={sourceRegion}
                targetRegion={targetRegion}
                label={item.names[0] ?? item.canonicalId.replace(/_/g, " ")}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

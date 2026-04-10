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
import { CowDiagram } from "@/components/CowDiagram";
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
    <Link href={href} className="cut-explore-link rounded-xl px-3 py-2 text-sm">
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
      <div className="cut-error-panel rounded-3xl p-8">
        <p className="text-lg font-medium text-[var(--text-primary)]">
          No mapping yet
        </p>
        <p className="mt-2 text-[var(--text-muted)]">{result.explanation.short}</p>
        {result.explanation.detailed !== result.explanation.short && (
          <details className="mt-4 text-sm text-[var(--text-muted)]">
            <summary className="cursor-pointer font-medium text-[var(--amber)]">
              More detail
            </summary>
            <p className="mt-2 leading-relaxed">{result.explanation.detailed}</p>
          </details>
        )}
      </div>
    );
  }

  const p = result.primary;

  /** Translation UX: diagram shows primary match only (alternatives stay in cards below). */
  const diagramCanonicalIds = [p.canonicalId];

  return (
    <div className="space-y-10">
      {result.ambiguity.exists && (
        <div className="cut-ambiguity-banner rounded-2xl px-4 py-3 text-sm leading-relaxed" role="status">
          {result.ambiguity.message}
        </div>
      )}

      <CowDiagram canonicalIds={diagramCanonicalIds} />

      <section className="cut-result-hero p-8 shadow-lg shadow-black/25">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Best Match
        </p>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          This is the closest equivalent cut in the selected country.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {p.names[0]}
          </h2>
          <ConfidenceBadge confidence={p.confidence} />
        </div>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          <Link href={whatIsPath(translationCutSlug)} className="cut-link font-medium underline">
            What is this cut?
          </Link>
          <span className="mx-2 text-[var(--border-subtle)]">·</span>
          <Link href={canonicalHubPath(p.canonicalId)} className="cut-link font-medium underline">
            Global guide ({p.canonicalId.replace(/_/g, " ")})
          </Link>
        </p>
        {p.names.length > 1 && (
          <p className="mt-2 text-[var(--text-muted)]">
            Other {to} names: {p.names.slice(1).join(" · ")}
          </p>
        )}
        <details className="mt-6 group">
          <summary className="cursor-pointer text-sm font-semibold text-[var(--amber)] underline-offset-2 hover:underline">
            Detailed explanation
          </summary>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
            {result.explanation.detailed}
          </p>
        </details>

        <div className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-glass)] p-4">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
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
                className="cut-explore-link rounded-xl px-3 py-2 text-sm"
              >
                Compare with similar cuts
              </Link>
            )}
            <Link href={canonicalHubPath(p.canonicalId)} className="cut-explore-link rounded-xl px-3 py-2 text-sm">
              See this cut in other countries
            </Link>
            <Link href={whatIsPath(translationCutSlug)} className="cut-explore-link rounded-xl px-3 py-2 text-sm">
              Learn more about this cut
            </Link>
          </div>
        </div>
      </section>

      {result.alternatives.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
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
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
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

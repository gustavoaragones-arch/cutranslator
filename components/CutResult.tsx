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
import { CowDiagramNew } from "@/components/CowDiagramNew";
import { CutCard } from "@/components/CutCard";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import {
  MatchTypeBadge,
  inferMatchType,
  matchTypeBlurb,
} from "@/components/MatchTypeBadge";

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
  const effectiveMatchType = inferMatchType(p.match_type, p.confidence);

  return (
    <div>
      {result.ambiguity.exists && (
        <div className="cut-ambiguity-banner mb-4 rounded-2xl px-4 py-3 text-sm leading-relaxed" role="status">
          {result.ambiguity.message}
        </div>
      )}

      {/* Translation headline */}
      <div className="translation-headline">
        <div className="mb-3 flex items-center justify-center gap-2">
          <MatchTypeBadge matchType={effectiveMatchType} size="sm" />
          <ConfidenceBadge confidence={p.confidence} />
        </div>
        <span className="translation-from">{result.inputNormalized}</span>
        <span className="translation-arrow">from {from} →</span>
        <span className="translation-to">{p.names[0]}</span>
        <span className="translation-countries">in {to}</span>
      </div>

      {/* Cow diagram — the hero */}
      <div className="cow-diagram-hero">
        <CowDiagramNew highlights={[{
          canonicalId: p.canonicalId,
          matchType: effectiveMatchType,
        }]} />
      </div>

      {/* Two-column info cards */}
      <div className="cut-details-grid">
        <div className="cut-detail-card">
          <h3>About this cut</h3>
          {result.canonical ? (
            <>
              <p>{result.canonical.description}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {result.canonical.primal} primal · {result.canonical.location}
              </p>
            </>
          ) : (
            <p>{result.explanation.short}</p>
          )}
        </div>
        <div className="cut-detail-card">
          <h3>What to ask for in {to}</h3>
          <p className="font-medium text-[var(--text-primary)]">
            {p.names.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            {matchTypeBlurb({
              matchType: effectiveMatchType,
              inputName: result.inputNormalized,
              primaryLabel: p.names[0],
              targetRegionLabel: to,
              note: p.note,
            })}
          </p>
          <p className="mt-3 text-sm">
            <Link href={whatIsPath(translationCutSlug)} className="cut-link font-medium underline">
              What is this cut?
            </Link>
            <span className="mx-2 text-[var(--border-subtle)]">·</span>
            <Link href={canonicalHubPath(p.canonicalId)} className="cut-link font-medium underline">
              Global guide
            </Link>
          </p>
        </div>
      </div>

      {/* Detailed explanation + keep exploring */}
      <div className="mx-auto max-w-[680px] space-y-4">
        <details className="group">
          <summary className="cursor-pointer text-sm font-semibold text-[var(--amber)] underline-offset-2 hover:underline">
            Detailed explanation
          </summary>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
            {result.explanation.detailed}
          </p>
        </details>

        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-glass)] p-4">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">Keep exploring</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.related[0] && (
              <Link
                href={comparePath(compareSlugForCanonicalPair(p.canonicalId, result.related[0].canonicalId))}
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
      </div>

      {result.alternatives.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Alternatives ({from} → {to})
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {result.alternatives.map((t) => (
              <CutCard key={t.canonicalId} target={t} targetRegionLabel={to} />
            ))}
          </div>
        </section>
      )}

      {result.related.length > 0 && (
        <section className="mt-8">
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

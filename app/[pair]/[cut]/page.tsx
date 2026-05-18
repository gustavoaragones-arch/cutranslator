import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { PAASection } from "@/components/PAASection";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { CowDiagramNew } from "@/components/CowDiagramNew";
import { ExploreMore } from "@/components/ExploreMore";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import {
  allPairCutParams,
  canonicalHubPath,
  comparePath,
  compareSlugForCanonicalPair,
  generateAIAnswer,
  titleCaseCanonicalId,
  whatIsPath,
} from "@/lib/content";
import { getCanonicalById } from "@/lib/canonical";
import { canonicalEntityTerm } from "@/lib/entities";
import {
  countRoutesForCanonical,
  getComparisonLinks,
  getExploreMoreLinks,
  getOtherDestinationsForSourceCut,
  getOtherSourcesForDestinationCanonical,
} from "@/lib/linking";
import { representativeInputName } from "@/lib/mappings";
import { lookupCut } from "@/lib/indexes";
import { pairSegment, parsePairSegment } from "@/lib/pairRoute";
import { regionLabel } from "@/lib/regions";
import {
  buildTranslationPAAItems,
  buildTranslationPAAItemsUnmapped,
  mergeFaqWithPAA,
  relatedForPAA,
} from "@/lib/questions";
import { resolveCut } from "@/lib/resolver";
import { buildContentGraph, type FaqPair } from "@/lib/structured-data";
import { displayCutNameForSlug, seoH1 } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import { isDefaultSpecies, SPECIES_LABEL } from "@/lib/types";
import type { CanonicalId, MatchType } from "@/lib/types";
import { cutSlugToNormalizedKey, slugifyCut } from "@/utils/normalize";
import { inferMatchType } from "@/components/MatchTypeBadge";
import { getDonenessComparison } from "@/lib/doneness";
import { getButcherPhrase } from "@/lib/butcher";

function matchTypeMetaQualifier(matchType: MatchType): string {
  switch (matchType) {
    case "exact":
    case "close":
      return "with high-confidence beef cut translations";
    case "approximate":
      return "with approximate beef cut equivalences";
    case "composite":
      return "spanning multiple beef cut equivalences";
    case "cultural":
    case "none":
      return "with cultural beef cut equivalences";
  }
}

function matchTypePillLabel(matchType: MatchType): string {
  switch (matchType) {
    case "exact": return "Exact match";
    case "close": return "Close match";
    case "approximate": return "Approximate match";
    case "composite": return "Spans multiple cuts";
    case "cultural": return "Cultural equivalent";
    case "none": return "No direct equivalent";
  }
}

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return allPairCutParams();
}

type PageProps = { params: Promise<{ pair: string; cut: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pair, cut } = await params;
  const parsed = parsePairSegment(pair);
  if (!parsed) return { title: "Cut not found | Cutranslator" };
  const key = cutSlugToNormalizedKey(cut);
  if (!lookupCut(parsed.from, key)) {
    return { title: "Cut not found | Cutranslator" };
  }
  const cutDisplay = displayCutNameForSlug(cut, parsed.from);
  const h1 = seoH1(cutDisplay, parsed.to);
  const metaResult = resolveCut(cutDisplay, parsed.from, parsed.to);
  const effectiveMatchType = inferMatchType(
    metaResult.primary?.match_type,
    metaResult.primary?.confidence ?? 0,
  );
  const qualifier = matchTypeMetaQualifier(effectiveMatchType);
  const base = getSiteUrl().replace(/\/$/, "");
  const canonicalUrl = `${base}/${pair}/${cut}`;
  return {
    title: h1,
    description: `Map ${cutDisplay} from ${regionLabel(parsed.from)} to ${regionLabel(parsed.to)} ${qualifier}.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: h1,
      description: `Canonical beef cut mapping: ${cutDisplay} → ${regionLabel(parsed.to)}.`,
      url: canonicalUrl,
      siteName: "Cutranslator",
    },
  };
}

export default async function PairCutPage({ params }: PageProps) {
  const { pair, cut } = await params;
  const parsed = parsePairSegment(pair);
  if (!parsed) notFound();

  const key = cutSlugToNormalizedKey(cut);
  const hit = lookupCut(parsed.from, key);
  if (!hit) notFound();

  const cutDisplay = displayCutNameForSlug(cut, parsed.from);
  const inputName = hit.data.name;
  const result = resolveCut(inputName, parsed.from, parsed.to);

  const h1 = seoH1(cutDisplay, parsed.to);
  const from = regionLabel(parsed.from);
  const to = regionLabel(parsed.to);

  const p = result.primary;
  const effectiveMatchType = inferMatchType(p?.match_type, p?.confidence ?? 0);

  const aiBundle =
    p != null && result.canonical != null
      ? generateAIAnswer(cutDisplay, result.canonical, parsed.to, {
          inputRegion: parsed.from,
          targetLabels: p.names,
        })
      : null;

  const aiPrimary = aiBundle?.primary ?? result.explanation.short;

  const faq: FaqPair[] = [{ question: h1, answer: aiPrimary }];
  if (p != null && result.canonical != null) {
    const primarySpecies = p.species[0];
    const speciesNote =
      primarySpecies && !isDefaultSpecies(primarySpecies)
        ? ` Note: in ${to}, "${p.names[0]}" refers to ${SPECIES_LABEL[primarySpecies]}, not standard cow beef.`
        : "";
    faq.push({
      question: `What is ${cutDisplay} called in ${to}?`,
      answer: `Look for ${p.names.join(", ")}—mapped to ${titleCaseCanonicalId(p.canonicalId)} (${canonicalEntityTerm(p.canonicalId)}).${speciesNote}`,
    });
    faq.push({
      question: `What primal is ${cutDisplay} from?`,
      answer: `${titleCaseCanonicalId(p.canonicalId)} is on the ${result.canonical.primal} primal (${result.canonical.location}).`,
    });
    faq.push({
      question: `Can ${cutDisplay} mean more than one cut?`,
      answer:
        result.alternatives.length > 0
          ? `This name may also align with ${result.alternatives.map((a) => titleCaseCanonicalId(a.canonicalId)).join(", ")} in this dataset—see alternatives below.`
          : `Check the confidence note below; low confidence or multi-cut rows are flagged when present.`,
    });
  } else {
    faq.push({
      question: `Why is there no mapping for ${cutDisplay}?`,
      answer: result.explanation.detailed,
    });
  }

  const donenessRows = getDonenessComparison(parsed.from, parsed.to);
  const rare = donenessRows.find((l) => l.id === "rare");
  const medRare = donenessRows.find((l) => l.id === "medium_rare");
  const wellDone = donenessRows.find((l) => l.id === "well_done");
  if (medRare && rare && wellDone) {
    faq.push({
      question: `How do you order steak doneness in ${to}?`,
      answer: `In ${to}, medium rare is called "${medRare.targetLabel}". Rare is "${rare.targetLabel}" and well done is "${wellDone.targetLabel}".`,
    });
  }

  if (p) {
    const butcherEntry = getButcherPhrase(p.canonicalId, parsed.to);
    if (butcherEntry) {
      faq.push({
        question: `What should I ask for at a butcher in ${to}?`,
        answer: `Ask for "${butcherEntry.phrase}" when looking for ${cutDisplay} in ${to}.`,
      });
    }
  }

  const paaItems =
    p != null && result.canonical != null
      ? buildTranslationPAAItems({
          inputName,
          cutDisplay,
          canonicalId: p.canonicalId,
          canonical: result.canonical,
          fromRegion: parsed.from,
          toRegion: parsed.to,
          targetLabels: p.names,
          relatedIds: relatedForPAA(p.canonicalId),
          cutSlug: cut,
        })
      : buildTranslationPAAItemsUnmapped({
          cutDisplay,
          fromRegion: parsed.from,
          toRegion: parsed.to,
          explanation: result.explanation.detailed,
        });

  const faqMerged = mergeFaqWithPAA(faq, paaItems);

  const currentPath = `/${pairSegment(parsed.from, parsed.to)}/${cut}`.toLowerCase();

  const graph = buildContentGraph({
    pagePath: currentPath,
    headline: h1,
    description: aiPrimary,
    faq: faqMerged,
  });

  const canonIds: CanonicalId[] = [];
  if (p) canonIds.push(p.canonicalId);
  for (const a of result.alternatives) {
    if (!canonIds.includes(a.canonicalId)) canonIds.push(a.canonicalId);
  }

  const primaryCanonical = p?.canonicalId;
  const canonicalLabel = primaryCanonical ? canonicalEntityTerm(primaryCanonical) : null;

  const otherDestinations = getOtherDestinationsForSourceCut(parsed.from, cut, parsed.to, 12);
  const otherSources = primaryCanonical
    ? getOtherSourcesForDestinationCanonical(parsed.to, primaryCanonical, parsed.from, 12)
    : [];
  const { destinations: destinationCount, sources: sourceCount } = primaryCanonical
    ? countRoutesForCanonical(primaryCanonical)
    : { destinations: 0, sources: 0 };

  const comparisonLinks = p != null ? getComparisonLinks(p.canonicalId, 3) : [];

  const crumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `What is ${cutDisplay}?`, path: whatIsPath(cut) },
    { name: `${from} → ${to}`, path: currentPath },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />

      <div
        className="min-h-screen"
        style={{ background: "var(--atlas-paper)", color: "var(--atlas-ink)" }}
      >
        {/* ── Breadcrumb ── */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <BreadcrumbBar
            items={[
              { name: "Home", href: "/" },
              { name: `${from} → ${to}` },
              { name: cutDisplay },
            ]}
          />
        </div>

        {/* ── Hero ── */}
        <section className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <div className="grid grid-cols-1 gap-14 py-14 items-stretch lg:grid-cols-[1.7fr_1fr]">

            {/* Left: display name + answer line */}
            <div>
              <p
                className="atlas-mono mb-3"
                style={{ color: "var(--atlas-ink-mute)" }}
              >
                {result.canonical?.primal ? `${result.canonical.primal} primal · ` : ""}
                {from}
              </p>

              <h1
                className="atlas-display-italic mb-7"
                style={{
                  fontSize: "clamp(64px, 9vw, 120px)",
                  color: "var(--atlas-ink)",
                  fontWeight: 400,
                }}
              >
                {cutDisplay}
              </h1>

              {p ? (
                <>
                  <p
                    className="atlas-serif text-[26px] leading-[1.35] mb-[22px]"
                    style={{ maxWidth: 540, color: "var(--atlas-ink)" }}
                  >
                    In {to}, this cut is{" "}
                    <span
                      className="font-[500]"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 60%, var(--atlas-paper-deep) 60%)",
                        padding: "0 4px",
                      }}
                    >
                      {p.names[0]}
                    </span>
                    {p.names.length > 1 && (
                      <>, also sold as {p.names.slice(1).join(", ")}</>
                    )}
                    .
                    {!isDefaultSpecies(p.species[0]) && (
                      <span
                        className="atlas-serif italic text-[18px] ml-1"
                        style={{ color: "var(--atlas-ink-mute)" }}
                      >
                        ({SPECIES_LABEL[p.species[0]]})
                      </span>
                    )}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 rounded-sm px-3 py-1.5 atlas-mono"
                    style={{ color: "var(--atlas-moss)", background: "var(--atlas-moss-soft)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
                      style={{ background: "var(--atlas-moss)" }}
                    />
                    {matchTypePillLabel(effectiveMatchType)}
                    {" · "}
                    Confidence {(p.confidence ?? 0).toFixed(2)}
                  </div>
                </>
              ) : (
                <p
                  className="atlas-serif text-xl leading-relaxed"
                  style={{ color: "var(--atlas-ink-mute)" }}
                >
                  {result.explanation.short}
                </p>
              )}

              {result.ambiguity.exists && (
                <p
                  className="atlas-serif italic text-[15px] leading-relaxed mt-4 px-4 py-3 rounded"
                  style={{
                    color: "var(--atlas-gold)",
                    background: "rgba(216,156,58,0.12)",
                    border: "0.5px solid rgba(216,156,58,0.3)",
                  }}
                  role="status"
                >
                  {result.ambiguity.message}
                </p>
              )}
            </div>

            {/* Right: verdict callout */}
            {p && (
              <aside
                className="flex flex-col justify-center relative p-8 sm:p-10"
                style={{ background: "var(--atlas-ink)", color: "var(--atlas-paper)" }}
              >
                <p
                  className="atlas-mono mb-3.5"
                  style={{ color: "var(--atlas-ink-fade)" }}
                >
                  Ask the butcher for
                </p>
                <p
                  className="atlas-serif font-[500] leading-none tracking-[-0.02em] mb-4"
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--atlas-paper)" }}
                >
                  {p.names[0]}
                </p>
                {p.names.length > 1 && (
                  <p
                    className="atlas-serif italic text-[15px] leading-[1.5] pt-3.5"
                    style={{
                      color: "var(--atlas-ink-fade)",
                      borderTop: "0.5px solid var(--atlas-ink-fade)",
                    }}
                  >
                    or, equivalently,{" "}
                    <strong
                      className="not-italic font-[500] text-[14px]"
                      style={{ color: "var(--atlas-paper)" }}
                    >
                      {p.names.slice(1).join(", ")}
                    </strong>
                    {" "}— the same muscle, different market name.
                  </p>
                )}
                {result.canonical && (
                  <p
                    className="atlas-mono mt-4 pt-3.5 text-[10px]"
                    style={{
                      borderTop: "0.5px solid var(--atlas-ink-fade)",
                      color: "var(--atlas-ink-fade)",
                    }}
                  >
                    {result.canonical.primal} primal · {result.canonical.location}
                  </p>
                )}
              </aside>
            )}
          </div>
        </section>

        {/* ── Anatomy panel ── */}
        {result.canonical && p && (
          <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-14">
            <div
              className="grid grid-cols-1 gap-10 p-8 sm:p-9 items-center lg:grid-cols-[1fr_1.2fr]"
              style={{
                background: "var(--atlas-paper-warm)",
                border: "1.5px solid var(--atlas-ink)",
              }}
            >
              <figure>
                <CowDiagramNew
                  highlights={[{ canonicalId: p.canonicalId, matchType: effectiveMatchType }]}
                />
                <figcaption
                  className="atlas-mono text-center pt-3 text-[10px]"
                  style={{ color: "var(--atlas-ink-mute)" }}
                >
                  Fig. 1 · {result.canonical.location} · {result.canonical.primal} primal
                </figcaption>
              </figure>
              <div>
                <p
                  className="atlas-mono mb-3 text-[10px] tracking-[0.22em]"
                  style={{ color: "var(--atlas-ink-mute)" }}
                >
                  About this cut
                </p>
                <p
                  className="atlas-serif text-[18px] leading-[1.55] mb-5"
                  style={{ color: "var(--atlas-ink)" }}
                >
                  {result.canonical.description}
                </p>
                <div
                  className="space-y-0"
                  style={{ borderTop: "0.5px solid var(--atlas-ink)", paddingTop: "14px" }}
                >
                  {[
                    { label: "Primal", value: result.canonical.primal },
                    { label: "Location", value: result.canonical.location },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between py-2">
                      <span
                        className="atlas-mono text-[10px] tracking-[0.22em]"
                        style={{ color: "var(--atlas-ink-mute)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="atlas-serif italic text-[14px]"
                        style={{ color: "var(--atlas-ink)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2">
                    <span
                      className="atlas-mono text-[10px] tracking-[0.22em]"
                      style={{ color: "var(--atlas-ink-mute)" }}
                    >
                      In {to}
                    </span>
                    <span
                      className="atlas-serif font-[500] text-[14px]"
                      style={{ color: "var(--atlas-ox-blood)" }}
                    >
                      {p.names.join(" · ")}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <Link
                    href={whatIsPath(cut)}
                    className="atlas-mono text-[10px] tracking-[0.14em] transition-colors hover:text-[var(--atlas-ox-blood)]"
                    style={{ color: "var(--atlas-ink-mute)", borderBottom: "0.5px solid var(--atlas-ink-mute)" }}
                  >
                    What is this cut →
                  </Link>
                  <Link
                    href={canonicalHubPath(p.canonicalId)}
                    className="atlas-mono text-[10px] tracking-[0.14em] transition-colors hover:text-[var(--atlas-ox-blood)]"
                    style={{ color: "var(--atlas-ink-mute)", borderBottom: "0.5px solid var(--atlas-ink-mute)" }}
                  >
                    Global guide →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Doneness section ── */}
        <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-16">
          <div className="atlas-section-head">
            <h2>How to order steak doneness</h2>
            <span className="atlas-section-tag">{from} → {to}</span>
          </div>

          <table className="w-full border-collapse">
            <tbody>
              {donenessRows.map((row, i) => (
                <tr
                  key={row.id}
                  className="atlas-doneness-row"
                  style={{
                    borderBottom:
                      i === donenessRows.length - 1
                        ? "1.5px solid var(--atlas-ink)"
                        : "0.5px solid var(--atlas-ink)",
                  }}
                >
                  <td
                    className="atlas-serif italic text-[22px] font-[400] py-[18px]"
                    style={{ color: "var(--atlas-ink)", width: "22%" }}
                  >
                    {row.id.replace("_", " ")}
                  </td>
                  <td
                    className="atlas-serif text-[22px] font-[400] py-[18px]"
                    style={{ color: "var(--atlas-ink-mute)", width: "30%" }}
                  >
                    {row.sourceLabel}
                  </td>
                  <td
                    className="atlas-mono py-[18px]"
                    style={{ color: "var(--atlas-ox-blood)", width: "4%" }}
                  >
                    →
                  </td>
                  <td
                    className="atlas-serif text-[22px] font-[500] py-[18px]"
                    style={{ color: "var(--atlas-ox-blood)", width: "28%" }}
                  >
                    {row.targetLabel}
                  </td>
                  <td
                    className="atlas-mono text-right py-[18px] hidden sm:table-cell"
                    style={{
                      color: "var(--atlas-ink-mute)",
                      width: "16%",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {row.temp[0]}–{row.temp[1]}°C
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p
            className="atlas-serif italic text-[14px] leading-[1.55] mt-[18px] max-w-[640px]"
            style={{ color: "var(--atlas-ink-mute)" }}
          >
            Doneness terminology varies by country and restaurant. When unsure, describe what you
            want — e.g., &ldquo;warm red center&rdquo; — rather than relying on the name alone.
          </p>

          {result.explanation.detailed && result.explanation.detailed !== result.explanation.short && (
            <details className="mt-6">
              <summary
                className="cursor-pointer atlas-mono inline-flex items-center gap-2 pb-1 select-none list-none [&::-webkit-details-marker]:hidden"
                style={{
                  color: "var(--atlas-ox-blood)",
                  borderBottom: "0.5px solid var(--atlas-ox-blood)",
                }}
              >
                Detailed explanation
              </summary>
              <p
                className="atlas-serif text-[17px] leading-[1.7] pt-4 max-w-[720px]"
                style={{ color: "var(--atlas-ink)" }}
              >
                {result.explanation.detailed}
              </p>
            </details>
          )}
        </section>

        {/* ── Ad slot 1 (after doneness) ── */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <AdSlot position="mid_content" />
        </div>

        {/* ── Keep exploring ── */}
        <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-14">
          <div className="atlas-section-head">
            <h2>Keep exploring</h2>
            <span className="atlas-section-tag">Related queries</span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ border: "1.5px solid var(--atlas-ink)" }}
          >
            {(
              [
                p && result.related[0]
                  ? {
                      num: "01",
                      title: "Compare with similar cuts",
                      arrow: `→ See ${comparisonLinks.length || "similar"} comparisons`,
                      href: comparePath(
                        compareSlugForCanonicalPair(p.canonicalId, result.related[0].canonicalId),
                      ),
                    }
                  : null,
                p
                  ? {
                      num: "02",
                      title: "See this cut in other countries",
                      arrow: `→ ${destinationCount} destinations`,
                      href: canonicalHubPath(p.canonicalId),
                    }
                  : null,
                {
                  num: "03",
                  title: "Learn more about this cut",
                  arrow: "→ Anatomy & cooking guide",
                  href: whatIsPath(cut),
                },
              ] as ({ num: string; title: string; arrow: string; href: string } | null)[]
            )
              .filter(Boolean)
              .map((item, idx, arr) =>
                item ? (
                  <Link
                    key={item.num}
                    href={item.href}
                    className="atlas-cta-block flex flex-col p-7 group"
                    style={{
                      borderRight:
                        idx < arr.length - 1
                          ? "0.5px solid var(--atlas-ink)"
                          : "none",
                    }}
                  >
                    <span
                      className="atlas-cta-num atlas-mono text-[10px] tracking-[0.22em] mb-2"
                      style={{ color: "var(--atlas-ink-mute)" }}
                    >
                      {item.num}
                    </span>
                    <span className="atlas-serif text-[22px] font-[500] leading-[1.2] tracking-[-0.01em] mb-6">
                      {item.title}
                    </span>
                    <span
                      className="atlas-cta-arrow atlas-mono text-[13px] mt-auto"
                      style={{ color: "var(--atlas-ox-blood)" }}
                    >
                      {item.arrow}
                    </span>
                  </Link>
                ) : null,
              )}
          </div>
        </section>

        {/* ── Related cuts ── */}
        {result.related.length > 0 && (
          <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-6">
            <div className="atlas-section-head">
              <h2>Related cuts</h2>
              {result.canonical && (
                <span className="atlas-section-tag">{result.canonical.primal} primal</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {result.related.map((item) => {
                const relCanonical = getCanonicalById(item.canonicalId);
                const sourceRetail = representativeInputName(parsed.from, item.canonicalId);
                const relSlug = slugifyCut(
                  sourceRetail ?? (item.names[0] ?? item.canonicalId.replace(/_/g, " ")),
                );
                return (
                  <Link
                    key={item.canonicalId}
                    href={`/${pairSegment(parsed.from, parsed.to)}/${relSlug}`}
                    className="atlas-cut-chip"
                  >
                    {item.names[0] ?? item.canonicalId.replace(/_/g, " ")}
                    {relCanonical && (
                      <span
                        className="atlas-chip-primal atlas-mono text-[10px] tracking-[0.18em] ml-2"
                        style={{ color: "var(--atlas-ink-mute)" }}
                      >
                        {relCanonical.primal}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Ad slot 2 (after related cuts) ── */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <AdSlot position="after_result" />
        </div>

        {/* ── Compare cards ── */}
        {comparisonLinks.length > 0 && (
          <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-16">
            <div className="atlas-section-head">
              <h2>Compare with similar cuts</h2>
              <span className="atlas-section-tag">Side by side</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {comparisonLinks.map((l) => (
                <Link key={l.href} href={l.href} className="atlas-compare-card">
                  <span
                    className="atlas-mono text-[10px] tracking-[0.22em]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    vs
                  </span>
                  <span className="atlas-serif text-[22px] font-[500] leading-[1.15] tracking-[-0.01em]">
                    {l.label}
                  </span>
                  <span
                    className="atlas-mono text-[13px] mt-3.5 block"
                    style={{ color: "var(--atlas-ox-blood)" }}
                  >
                    → Compare
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Other countries & routes ── */}
        {(otherDestinations.length > 0 || otherSources.length > 0) && (
          <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-20">
            <div className="atlas-section-head">
              <h2>Other countries & routes</h2>
              <span className="atlas-section-tag">Same canonical cut</span>
            </div>
            {canonicalLabel && (
              <p
                className="atlas-serif italic text-[17px] leading-[1.55] mb-6 max-w-[640px]"
                style={{ color: "var(--atlas-ink-mute)" }}
              >
                The same canonical cut translates differently across markets. Below: how{" "}
                <em>{cutDisplay}</em> resolves in other regional ontologies.
              </p>
            )}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-12"
              style={{ borderTop: "0.5px solid var(--atlas-ink)" }}
            >
              {otherDestinations.map((r) => (
                <Link
                  key={`dest-${r.fromSlug}-${r.toSlug}`}
                  href={`/${pairSegment(r.fromSlug, r.toSlug)}/${r.cutSlug}`}
                  className="atlas-route-row"
                >
                  <span className="atlas-route-label atlas-serif text-[18px]">
                    {r.fromLabel} → {r.toLabel}
                  </span>
                  <span
                    className="atlas-mono text-[11px]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    →
                  </span>
                </Link>
              ))}
              {otherSources.map((r) => (
                <Link
                  key={`src-${r.fromSlug}-${r.toSlug}`}
                  href={`/${pairSegment(r.fromSlug, r.toSlug)}/${r.cutSlug}`}
                  className="atlas-route-row"
                >
                  <span className="atlas-route-label atlas-serif text-[18px]">
                    {r.fromLabel} → {r.toLabel}{" "}
                    <em
                      className="atlas-serif italic"
                      style={{ color: "var(--atlas-ink-mute)" }}
                    >
                      ({r.cutLabel})
                    </em>
                  </span>
                  <span
                    className="atlas-mono text-[11px]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
            {(destinationCount > 12 || sourceCount > 12) && primaryCanonical && (
              <Link
                href={`/cuts/${primaryCanonical}`}
                className="atlas-mono text-[10px] tracking-[0.14em] mt-4 inline-block transition-colors hover:text-[var(--atlas-ox-blood)]"
                style={{ color: "var(--atlas-ink-mute)", borderBottom: "0.5px solid var(--atlas-ink-mute)" }}
              >
                Show all {destinationCount + sourceCount} routes →
              </Link>
            )}
          </section>
        )}

        {/* ── Alternatives ── */}
        {result.alternatives.length > 0 && (
          <section className="mx-auto max-w-[1180px] px-6 sm:px-12 mb-14">
            <div className="atlas-section-head">
              <h2>Alternative mappings</h2>
              <span className="atlas-section-tag">{from} → {to}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.alternatives.map((t) => {
                const altCanon = getCanonicalById(t.canonicalId);
                return (
                  <div
                    key={t.canonicalId}
                    className="p-5"
                    style={{ border: "0.5px solid var(--atlas-ink)" }}
                  >
                    <p
                      className="atlas-serif text-[20px] font-[500]"
                      style={{ color: "var(--atlas-ox-blood)" }}
                    >
                      {t.names[0]}
                    </p>
                    {altCanon && (
                      <p
                        className="atlas-mono text-[10px] tracking-[0.18em] mt-1"
                        style={{ color: "var(--atlas-ink-mute)" }}
                      >
                        {altCanon.primal} primal · {altCanon.location}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── PAA (SEO) ── */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <PAASection items={paaItems} collapseExtraAfter={3} />
        </div>

        {/* ── Explore more links ── */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <ExploreMore
            links={getExploreMoreLinks({
              excludeHref: currentPath,
              canonicalIds: p ? [p.canonicalId] : undefined,
            })}
          />
        </div>

        {/* ── Ad slot footer ── */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-12">
          <AdSlot position="footer" />
        </div>
      </div>
    </>
  );
}

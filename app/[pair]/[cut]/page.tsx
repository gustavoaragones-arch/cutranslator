import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { PAASection } from "@/components/PAASection";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { CutResult } from "@/components/CutResult";
import { ExploreMore } from "@/components/ExploreMore";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import {
  allPairCutParams,
  generateAIAnswer,
  titleCaseCanonicalId,
  whatIsPath,
} from "@/lib/content";
import { canonicalEntityTerm } from "@/lib/entities";
import {
  getComparisonLinks,
  getExploreMoreLinks,
  getTranslationLinksForCanonicals,
} from "@/lib/linking";
import { findRegionalMappings } from "@/lib/mappings";
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
import type { CanonicalId, MatchType } from "@/lib/types";
import { cutSlugToNormalizedKey } from "@/utils/normalize";
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
  if (findRegionalMappings(parsed.from, key).length === 0) {
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
  const matches = findRegionalMappings(parsed.from, key);
  if (matches.length === 0) notFound();

  const cutDisplay = displayCutNameForSlug(cut, parsed.from);
  const inputName = matches[0].name;
  const result = resolveCut(inputName, parsed.from, parsed.to);

  const h1 = seoH1(cutDisplay, parsed.to);

  const aiBundle =
    result.primary != null && result.canonical != null
      ? generateAIAnswer(cutDisplay, result.canonical, parsed.to, {
          inputRegion: parsed.from,
          targetLabels: result.primary.names,
        })
      : null;

  const aiPrimary = aiBundle?.primary ?? result.explanation.short;

  const faq: FaqPair[] = [
    { question: h1, answer: aiPrimary },
  ];
  if (result.primary != null && result.canonical != null) {
    faq.push({
      question: `What is ${cutDisplay} called in ${regionLabel(parsed.to)}?`,
      answer: `Look for ${result.primary.names.join(", ")}—mapped to ${titleCaseCanonicalId(result.primary.canonicalId)} (${canonicalEntityTerm(result.primary.canonicalId)}).`,
    });
    faq.push({
      question: `What primal is ${cutDisplay} from?`,
      answer: `${titleCaseCanonicalId(result.primary.canonicalId)} is on the ${result.canonical.primal} primal (${result.canonical.location}).`,
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

  // Doneness FAQ
  const donenessRows = getDonenessComparison(parsed.from, parsed.to);
  const rare = donenessRows.find((l) => l.id === "rare");
  const medRare = donenessRows.find((l) => l.id === "medium_rare");
  const wellDone = donenessRows.find((l) => l.id === "well_done");
  if (medRare && rare && wellDone) {
    faq.push({
      question: `How do you order steak doneness in ${regionLabel(parsed.to)}?`,
      answer: `In ${regionLabel(parsed.to)}, medium rare is called "${medRare.targetLabel}". Rare is "${rare.targetLabel}" and well done is "${wellDone.targetLabel}".`,
    });
  }

  // Butcher phrase FAQ
  if (result.primary) {
    const butcherEntry = getButcherPhrase(result.primary.canonicalId, parsed.to);
    if (butcherEntry) {
      faq.push({
        question: `What should I ask for at a butcher in ${regionLabel(parsed.to)}?`,
        answer: `Ask for "${butcherEntry.phrase}" when looking for ${cutDisplay} in ${regionLabel(parsed.to)}.`,
      });
    }
  }

  const paaItems =
    result.primary != null && result.canonical != null
      ? buildTranslationPAAItems({
          inputName,
          cutDisplay,
          canonicalId: result.primary.canonicalId,
          canonical: result.canonical,
          fromRegion: parsed.from,
          toRegion: parsed.to,
          targetLabels: result.primary.names,
          relatedIds: relatedForPAA(result.primary.canonicalId),
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
    qaQuestion: h1,
    qaAnswer: aiPrimary,
  });

  const canonIds: CanonicalId[] = [];
  if (result.primary) canonIds.push(result.primary.canonicalId);
  for (const a of result.alternatives) {
    if (!canonIds.includes(a.canonicalId)) canonIds.push(a.canonicalId);
  }

  const translationLinks = getTranslationLinksForCanonicals(canonIds);
  const comparisonLinks =
    result.primary != null
      ? getComparisonLinks(result.primary.canonicalId, 3)
      : [];

  const crumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `What is ${cutDisplay}?`, path: whatIsPath(cut) },
    {
      name: `${regionLabel(parsed.from)} → ${regionLabel(parsed.to)}`,
      path: currentPath,
    },
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
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <BreadcrumbBar
          items={[
            { name: "Home", href: "/" },
            { name: `${regionLabel(parsed.from)} → ${regionLabel(parsed.to)}` },
            { name: cutDisplay },
          ]}
        />
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {h1}
        </h1>

        <AdSlot position="mid_content" />

        <div className="mt-6">
          <CutResult
            result={result}
            sourceRegion={parsed.from}
            targetRegion={parsed.to}
            translationCutSlug={cut}
          />
        </div>

        <AdSlot position="after_result" />

        {comparisonLinks.length > 0 && (
          <section className="mt-12 border-t border-[var(--border-subtle)] pt-10">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Compare with similar cuts
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {comparisonLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cut-pill-link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {translationLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Other countries &amp; routes
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Same canonical cut, different destination markets (deduped URLs).
            </p>
            <ul className="mt-4 max-h-64 space-y-1.5 overflow-y-auto text-sm text-[var(--text-muted)]">
              {translationLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cut-link underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <PAASection items={paaItems} collapseExtraAfter={3} />

        <ExploreMore
          links={getExploreMoreLinks({
            excludeHref: currentPath,
            canonicalIds: result.primary
              ? [result.primary.canonicalId]
              : undefined,
          })}
        />

        <AdSlot position="footer" />
      </article>
    </>
  );
}

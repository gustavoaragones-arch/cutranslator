import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { PAASection } from "@/components/PAASection";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { ExploreMore } from "@/components/ExploreMore";
import { getCanonicalById } from "@/lib/canonical";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import {
  allWhatIsCutSlugs,
  canonicalHubPath,
  comparePath,
  compareSlugForCanonicalPair,
  generateDefinition,
} from "@/lib/content";
import {
  getComparisonLinks,
  getExploreMoreLinks,
  getRelatedCutLinks,
  getTranslationLinksForCanonicals,
} from "@/lib/linking";
import { canonicalEntityTerm } from "@/lib/entities";
import { findRegionalEntriesByNormalizedKey } from "@/lib/mappings";
import {
  buildWhatIsPAAItems,
  mergeFaqWithPAA,
  relatedForPAA,
} from "@/lib/questions";
import { buildContentGraph } from "@/lib/structured-data";
import { getSiteUrl } from "@/lib/site";
import { cutSlugToNormalizedKey } from "@/utils/normalize";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  return allWhatIsCutSlugs().map((cut) => ({ cut }));
}

type PageProps = { params: Promise<{ cut: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cut } = await params;
  const key = cutSlugToNormalizedKey(cut);
  const entries = findRegionalEntriesByNormalizedKey(key);
  const content = generateDefinition({ cutSlug: cut, entries });
  if (!content) {
    return { title: "Cut not found | Cutranslator" };
  }
  const base = getSiteUrl().replace(/\/$/, "");
  const canonicalUrl = `${base}/what-is/${cut}`;
  return {
    title: content.h1,
    description: content.featuredSnippet,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: content.h1,
      description: content.featuredSnippet,
      url: canonicalUrl,
      siteName: "Cutranslator",
    },
  };
}

export default async function WhatIsPage({ params }: PageProps) {
  const { cut } = await params;
  const key = cutSlugToNormalizedKey(cut);
  const entries = findRegionalEntriesByNormalizedKey(key);
  if (entries.length === 0) notFound();

  const content = generateDefinition({ cutSlug: cut, entries });
  if (!content) notFound();

  const currentPath = `/what-is/${cut}`.toLowerCase();
  const primary = content.primaryCanonicalIds[0];

  const paaItems = buildWhatIsPAAItems({
    displayTitle: content.displayTitle,
    cutSlug: cut,
    primaryIds: content.primaryCanonicalIds,
    primaryCut: primary ? getCanonicalById(primary) ?? null : null,
    relatedIds: primary ? relatedForPAA(primary) : [],
  });

  const faqMerged = mergeFaqWithPAA(content.faq, paaItems);

  const graph = buildContentGraph({
    pagePath: currentPath,
    headline: content.h1,
    description: content.ai.primary,
    faq: faqMerged,
    qaQuestion: content.h1,
    qaAnswer: content.ai.primary,
  });

  const translationLinks = getTranslationLinksForCanonicals(
    content.primaryCanonicalIds,
  );
  const comparisonLinks = primary ? getComparisonLinks(primary, 3) : [];
  const relatedForContext = primary ? getRelatedCutLinks(primary) : [];

  const crumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: content.h1, path: currentPath },
  ]);

  const primaryCut = primary ? getCanonicalById(primary) : null;

  const whatIsLinkedAnswer =
    content.primaryCanonicalIds.length === 1 && primary != null && primaryCut ? (
      <>
        <span className="font-medium text-[var(--text-primary)]">
          {content.displayTitle}
        </span>
        {` is a regional beef-cut name for the `}
        <Link
          href={canonicalHubPath(primary)}
          className="cut-entity-link"
        >
          {canonicalEntityTerm(primary)}
        </Link>
        {`, on the ${primaryCut.primal} primal (${primaryCut.location}).`}
      </>
    ) : (
      content.ai.primary
    );

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
            { name: "What is", href: "/" },
            { name: content.displayTitle },
          ]}
        />
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {content.h1}
        </h1>
        <div className="mt-6">
          <AIAnswerBlock variants={content.ai.variants}>
            {whatIsLinkedAnswer}
          </AIAnswerBlock>
        </div>

        <AdSlot position="mid_content" />

        <PAASection items={paaItems} />

        <section className="mt-6" aria-label="Explanation">
          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            {content.quickAnswer[0]}
          </p>
          <p className="mt-2 text-base leading-relaxed text-[var(--text-muted)]">
            {content.quickAnswer[1]}
          </p>
        </section>

        <section className="cut-glass-form mt-10 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Global cut guide
          </h2>
          <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
            {content.primaryCanonicalIds.map((id) => (
              <li key={id}>
                <Link
                  href={canonicalHubPath(id)}
                  className="cut-link font-medium underline"
                >
                  {id.replace(/_/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            Where it comes from
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            {content.originHtml}
          </p>
          {relatedForContext.length > 0 && (
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              In menus and butcher shops it is often discussed next to{" "}
              {relatedForContext.map((r, i) => (
                <span key={r.href}>
                  {i > 0 && (i === relatedForContext.length - 1 ? ", and " : ", ")}
                  <Link
                    href={r.href}
                    className="cut-link font-medium underline"
                  >
                    {r.label}
                  </Link>
                </span>
              ))}
              .
            </p>
          )}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            What it&apos;s called in other countries
          </h2>
          <ul className="mt-4 space-y-3 text-[var(--text-muted)]">
            {content.namesByCountry.map((row) => (
              <li key={row.region}>
                <span className="font-medium text-[var(--text-primary)]">
                  {row.label}
                </span>
                : {row.names}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            Cooking methods
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            {content.cookingMethods}
          </p>
        </section>

        {translationLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Translations across countries
            </h2>
            <ul className="mt-4 max-h-56 space-y-1.5 overflow-y-auto text-sm">
              {translationLinks.slice(0, 40).map((l) => (
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
            {translationLinks.length > 40 && (
              <p className="mt-2 text-xs text-[var(--text-muted)]">
                Showing 40 of {translationLinks.length} routes — more in the sitemap.
              </p>
            )}
          </section>
        )}

        {comparisonLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Popular comparisons
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {comparisonLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="cut-pill-link"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {content.relatedCuts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Related cuts
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.relatedCuts.map((r) => (
                <Link
                  key={r.id}
                  href={r.path}
                  className="cut-pill-link"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 border-t border-[var(--border-subtle)] pt-8 text-sm text-[var(--text-muted)]">
          <Link href="/" className="cut-link underline">
            Regional translations
          </Link>
          {content.primaryCanonicalIds.length >= 2 && (
            <>
              {" · "}
              <Link
                href={comparePath(
                  compareSlugForCanonicalPair(
                    content.primaryCanonicalIds[0],
                    content.primaryCanonicalIds[1],
                  ),
                )}
                className="cut-link underline"
              >
                Compare mapped cuts
              </Link>
            </>
          )}
          {content.primaryCanonicalIds.length === 1 && content.relatedCuts[0] && (
            <>
              {" · "}
              <Link
                href={comparePath(
                  compareSlugForCanonicalPair(
                    content.primaryCanonicalIds[0],
                    content.relatedCuts[0].id,
                  ),
                )}
                className="cut-link underline"
              >
                vs {content.relatedCuts[0].label}
              </Link>
            </>
          )}
        </section>

        <ExploreMore
          links={getExploreMoreLinks({
            excludeHref: currentPath,
            canonicalIds: content.primaryCanonicalIds,
          })}
        />

        <AdSlot position="footer" />
      </article>
    </>
  );
}

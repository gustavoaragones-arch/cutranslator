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
    return { title: "Cut not found | cutranslator" };
  }
  return {
    title: content.h1,
    description: content.featuredSnippet,
    openGraph: {
      title: content.h1,
      description: content.featuredSnippet,
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
        <span className="font-medium text-stone-900 dark:text-stone-50">
          {content.displayTitle}
        </span>
        {` is a regional beef-cut name for the `}
        <Link
          href={canonicalHubPath(primary)}
          className="font-semibold text-amber-950 underline decoration-amber-600/60 underline-offset-2 hover:decoration-amber-700 dark:text-amber-100 dark:decoration-amber-400/70"
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
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
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
          <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            {content.quickAnswer[0]}
          </p>
          <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-400">
            {content.quickAnswer[1]}
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-stone-200 bg-stone-50/80 p-6 dark:border-stone-600 dark:bg-stone-900/40">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Global cut guide
          </h2>
          <ul className="mt-3 space-y-2 text-stone-800 dark:text-stone-200">
            {content.primaryCanonicalIds.map((id) => (
              <li key={id}>
                <Link
                  href={canonicalHubPath(id)}
                  className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
                >
                  {id.replace(/_/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            Where it comes from
          </h2>
          <p className="mt-3 leading-relaxed text-stone-700 dark:text-stone-300">
            {content.originHtml}
          </p>
          {relatedForContext.length > 0 && (
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              In menus and butcher shops it is often discussed next to{" "}
              {relatedForContext.map((r, i) => (
                <span key={r.href}>
                  {i > 0 && (i === relatedForContext.length - 1 ? ", and " : ", ")}
                  <Link
                    href={r.href}
                    className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
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
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            What it&apos;s called in other countries
          </h2>
          <ul className="mt-4 space-y-3 text-stone-700 dark:text-stone-300">
            {content.namesByCountry.map((row) => (
              <li key={row.region}>
                <span className="font-medium text-stone-900 dark:text-stone-100">
                  {row.label}
                </span>
                : {row.names}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            Cooking methods
          </h2>
          <p className="mt-3 leading-relaxed text-stone-700 dark:text-stone-300">
            {content.cookingMethods}
          </p>
        </section>

        {translationLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Translations across countries
            </h2>
            <ul className="mt-4 max-h-56 space-y-1.5 overflow-y-auto text-sm">
              {translationLinks.slice(0, 40).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {translationLinks.length > 40 && (
              <p className="mt-2 text-xs text-stone-500">
                Showing 40 of {translationLinks.length} routes — more in the sitemap.
              </p>
            )}
          </section>
        )}

        {comparisonLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Popular comparisons
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {comparisonLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {content.relatedCuts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Related cuts
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.relatedCuts.map((r) => (
                <Link
                  key={r.id}
                  href={r.path}
                  className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 border-t border-stone-200 pt-8 text-sm dark:border-stone-700">
          <Link href="/" className="text-amber-800 hover:underline dark:text-amber-300">
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
                className="text-amber-800 hover:underline dark:text-amber-300"
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
                className="text-amber-800 hover:underline dark:text-amber-300"
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

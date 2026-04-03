import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { PAASection } from "@/components/PAASection";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { ExploreMore } from "@/components/ExploreMore";
import { getCanonicalById, isCanonicalId } from "@/lib/canonical";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import {
  comparePath,
  compareSlugForCanonicalPair,
  generateCanonicalPage,
  listCanonicalIds,
  titleCaseCanonicalId,
} from "@/lib/content";
import { canonicalEntityTerm } from "@/lib/entities";
import {
  buildCanonicalPAAItems,
  mergeFaqWithPAA,
  relatedForPAA,
} from "@/lib/questions";
import { buildContentGraph } from "@/lib/structured-data";
import type { CanonicalId } from "@/lib/types";
import {
  getComparisonLinks,
  getExploreMoreLinks,
  getTranslationLinks,
  getWhatIsLinksForCanonical,
} from "@/lib/linking";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  return listCanonicalIds().map((canonical) => ({ canonical }));
}

type PageProps = { params: Promise<{ canonical: string }> };

function titleCaseId(raw: string) {
  return raw.replace(/_/g, " ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { canonical: raw } = await params;
  if (!isCanonicalId(raw)) return { title: "Cut not found | cutranslator" };
  const content = generateCanonicalPage(raw);
  if (!content) return { title: "Cut not found | cutranslator" };
  const desc = `${content.description} Names by country, common confusions, and translator deep-links.`;
  return {
    title: content.h1,
    description: desc,
    openGraph: { title: content.h1, description: desc },
  };
}

export default async function CanonicalHubPage({ params }: PageProps) {
  const { canonical: raw } = await params;
  if (!isCanonicalId(raw)) notFound();

  const content = generateCanonicalPage(raw);
  if (!content) notFound();

  const related = content.relatedCuts;
  const currentPath = `/cuts/${raw}`.toLowerCase();
  const id = raw as CanonicalId;
  const cutRow = getCanonicalById(id);

  const paaItems = buildCanonicalPAAItems({
    id,
    title: titleCaseCanonicalId(id),
    description: content.description,
    primal: cutRow?.primal ?? "",
    location: cutRow?.location ?? "",
    relatedIds: relatedForPAA(id),
  });

  const faqMerged = mergeFaqWithPAA(content.faq, paaItems);

  const graph = buildContentGraph({
    pagePath: currentPath,
    headline: content.h1,
    description: content.ai.primary,
    faq: faqMerged,
    qaQuestion: `What is ${titleCaseCanonicalId(id)}?`,
    qaAnswer: content.ai.primary,
  });

  const translationLinks = getTranslationLinks(raw);
  const whatIsLinks = getWhatIsLinksForCanonical(raw);
  const comparisonLinks = getComparisonLinks(raw, 3);

  const crumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `${titleCaseId(raw)} (global guide)`, path: currentPath },
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
            { name: "Cuts", href: "/" },
            { name: titleCaseId(raw) },
          ]}
        />
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          {content.h1}
        </h1>
        <div className="mt-6">
          <AIAnswerBlock variants={content.ai.variants}>
            <>
              <span className="font-semibold text-stone-900 dark:text-stone-50">
                {titleCaseCanonicalId(id)}
              </span>
              {` (${canonicalEntityTerm(id)}) is ${content.description} It sits on the `}
              <span className="font-medium text-stone-900 dark:text-stone-100">
                {getCanonicalById(id)?.primal ?? ""}
              </span>
              {` primal (${getCanonicalById(id)?.location ?? ""}).`}
              {related[0] && (
                <span className="mt-2 block text-base font-normal text-stone-800 dark:text-stone-200">
                  Often compared to{" "}
                  <Link
                    href={related[0].path}
                    className="font-semibold text-amber-950 underline decoration-amber-600/60 underline-offset-2 dark:text-amber-100"
                  >
                    {related[0].label}
                  </Link>{" "}
                  ({canonicalEntityTerm(related[0].id)}).
                </span>
              )}
            </>
          </AIAnswerBlock>
        </div>
        <section
          className="mt-6 text-base leading-relaxed text-stone-600 dark:text-stone-400"
          aria-label="Explanation"
        >
          <p>
            Use the sections below for country-by-country retail names, translation
            deep-links, and comparisons—terminology matches the cutranslator
            canonical entities ({canonicalEntityTerm(id)}).
          </p>
        </section>

        <PAASection items={paaItems} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            Countries that use it
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            {content.countries.map((c) => c.label).join(" · ")}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            Names by country
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

        {whatIsLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Definition pages (all retail names)
            </h2>
            <ul className="mt-4 max-h-64 space-y-1.5 overflow-y-auto text-sm">
              {whatIsLinks.map((l) => (
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
          </section>
        )}

        {content.confusions.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Common confusions
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700 dark:text-stone-300">
              {content.confusions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Related cuts
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={r.path}
                    className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={`cmp-${r.id}`}
                    href={comparePath(compareSlugForCanonicalPair(raw, r.id))}
                    className="text-sm text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
                  >
                    {titleCaseId(raw)} vs {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {comparisonLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
              Featured comparisons
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {comparisonLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-amber-200/80 bg-amber-50/60 px-3 py-2 text-sm font-medium text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            All translation routes
          </h2>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
            Every seeded source region × destination for this canonical cut.
          </p>
          <ul className="mt-4 max-h-72 space-y-1.5 overflow-y-auto text-sm text-stone-700 dark:text-stone-300">
            {translationLinks.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ExploreMore
          links={getExploreMoreLinks({
            excludeHref: currentPath,
            canonicalIds: [raw],
          })}
        />
      </article>
    </>
  );
}

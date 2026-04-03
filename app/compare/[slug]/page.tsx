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
  allCompareSlugs,
  canonicalHubPath,
  generateComparison,
  parseCompareSlugToPair,
  preferredSlugForCanonical,
  titleCaseCanonicalId,
  whatIsPath,
} from "@/lib/content";
import { getExploreMoreLinks } from "@/lib/linking";
import { buildComparePAAItems, mergeFaqWithPAA } from "@/lib/questions";
import { buildContentGraph } from "@/lib/structured-data";
import type { CanonicalId } from "@/lib/types";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  return allCompareSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pair = parseCompareSlugToPair(slug);
  if (!pair) return { title: "Comparison not found | cutranslator" };
  const a = getCanonicalById(pair.a);
  const b = getCanonicalById(pair.b);
  if (!a || !b) return { title: "Comparison not found | cutranslator" };
  const content = generateComparison(a, b);
  return {
    title: content.h1,
    description: content.featuredSnippet,
    openGraph: {
      title: content.h1,
      description: content.featuredSnippet,
    },
  };
}

function cutExploreLinks(id: CanonicalId) {
  return {
    hub: canonicalHubPath(id),
    whatIs: whatIsPath(preferredSlugForCanonical(id)),
  };
}

function compareBreadcrumbTitle(slug: string) {
  return slug.replace(/-vs-/g, " vs ").replace(/-/g, " ");
}

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params;
  const pair = parseCompareSlugToPair(slug);
  if (!pair) notFound();

  const cutA = getCanonicalById(pair.a);
  const cutB = getCanonicalById(pair.b);
  if (!cutA || !cutB) notFound();

  const content = generateComparison(cutA, cutB);
  const linksA = cutExploreLinks(pair.a);
  const linksB = cutExploreLinks(pair.b);
  const currentPath = `/compare/${slug}`.toLowerCase();

  const paaItems = buildComparePAAItems({ cutA, cutB });
  const faqMerged = mergeFaqWithPAA(content.faq, paaItems);

  const graph = buildContentGraph({
    pagePath: currentPath,
    headline: content.h1,
    description: content.ai.primary,
    faq: faqMerged,
    qaQuestion: content.h1,
    qaAnswer: content.ai.primary,
  });

  const crumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: compareBreadcrumbTitle(slug), path: currentPath },
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
            { name: "Compare", href: "/" },
            { name: compareBreadcrumbTitle(slug) },
          ]}
        />
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          {content.h1}
        </h1>
        <div className="mt-6">
          <AIAnswerBlock variants={content.ai.variants}>
            <>
              <p className="m-0">{content.ai.primary}</p>
              <p className="mt-2 text-base font-normal text-stone-800 dark:text-stone-200">
                Canonical entities:{" "}
                <Link
                  href={linksA.hub}
                  className="font-semibold text-amber-950 underline decoration-amber-600/60 underline-offset-2 dark:text-amber-100"
                >
                  {titleCaseCanonicalId(cutA.id)}
                </Link>
                {" · "}
                <Link
                  href={linksB.hub}
                  className="font-semibold text-amber-950 underline decoration-amber-600/60 underline-offset-2 dark:text-amber-100"
                >
                  {titleCaseCanonicalId(cutB.id)}
                </Link>
              </p>
            </>
          </AIAnswerBlock>
        </div>

        <AdSlot position="mid_content" />

        <PAASection items={paaItems} />

        <section className="mt-6" aria-label="Explanation">
          <p className="text-lg text-stone-700 dark:text-stone-300">
            {content.quickAnswer[0]}
          </p>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400">
            {content.quickAnswer[1]}
          </p>
        </section>

        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Read the full guides:{" "}
          <Link
            href={linksA.whatIs}
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            {cutA.id.replace(/_/g, " ")} (what-is)
          </Link>
          {" · "}
          <Link
            href={linksB.whatIs}
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            {cutB.id.replace(/_/g, " ")} (what-is)
          </Link>
          {" · "}
          <Link
            href={linksA.hub}
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            {cutA.id.replace(/_/g, " ")} hub
          </Link>
          {" · "}
          <Link
            href={linksB.hub}
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            {cutB.id.replace(/_/g, " ")} hub
          </Link>
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            Side-by-side
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-600">
            <table className="min-w-full text-left text-sm text-stone-800 dark:text-stone-200">
              <thead className="bg-stone-100 dark:bg-stone-800">
                <tr>
                  <th className="px-4 py-3 font-semibold"> </th>
                  <th className="px-4 py-3 font-semibold">
                    <Link
                      href={linksA.hub}
                      className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-200"
                    >
                      {cutA.id.replace(/_/g, " ")}
                    </Link>
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    <Link
                      href={linksB.hub}
                      className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-200"
                    >
                      {cutB.id.replace(/_/g, " ")}
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.sideBySide.map((row) => (
                  <tr
                    key={row.label}
                    className="border-t border-stone-200 dark:border-stone-700"
                  >
                    <th className="px-4 py-3 font-medium text-stone-600 dark:text-stone-400">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 align-top">{row.a}</td>
                    <td className="px-4 py-3 align-top">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            Key differences
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700 dark:text-stone-300">
            {content.keyDifferences.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
            When to use each
          </h2>
          <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300">
            {content.whenToUse.map((w) => (
              <div key={w.cut}>
                <p className="font-semibold text-stone-900 dark:text-stone-100">
                  {w.cut}
                </p>
                <p className="mt-1 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ExploreMore
          links={getExploreMoreLinks({
            excludeHref: currentPath,
            canonicalIds: [pair.a, pair.b],
          })}
        />

        <AdSlot position="footer" />
      </article>
    </>
  );
}

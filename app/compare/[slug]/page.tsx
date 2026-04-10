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
  if (!pair) return { title: "Comparison not found | Cutranslator" };
  const a = getCanonicalById(pair.a);
  const b = getCanonicalById(pair.b);
  if (!a || !b) return { title: "Comparison not found | Cutranslator" };
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
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {content.h1}
        </h1>
        <div className="mt-6">
          <AIAnswerBlock variants={content.ai.variants}>
            <>
              <p className="m-0">{content.ai.primary}</p>
              <p className="mt-2 text-base font-normal text-[var(--text-muted)]">
                Canonical entities:{" "}
                <Link
                  href={linksA.hub}
                  className="cut-entity-link"
                >
                  {titleCaseCanonicalId(cutA.id)}
                </Link>
                {" · "}
                <Link
                  href={linksB.hub}
                  className="cut-entity-link"
                >
                  {titleCaseCanonicalId(cutB.id)}
                </Link>
              </p>
            </>
          </AIAnswerBlock>
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
            Side-by-side
          </h2>
          <div className="mt-4 cut-table-wrap rounded-2xl">
            <table className="min-w-full text-left text-sm text-[var(--text-muted)]">
              <thead className="bg-[var(--bg-glass)]">
                <tr>
                  <th className="px-4 py-3 font-semibold"> </th>
                  <th className="px-4 py-3 font-semibold">
                    <Link
                      href={linksA.hub}
                      className="cut-link underline"
                    >
                      {cutA.id.replace(/_/g, " ")}
                    </Link>
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    <Link
                      href={linksB.hub}
                      className="cut-link underline"
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
                    className="border-t border-[var(--border-subtle)]"
                  >
                    <th className="px-4 py-3 font-medium text-[var(--text-muted)]">
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
          <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
            Key differences
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--text-muted)]">
            {content.keyDifferences.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
            When to use each
          </h2>
          <div className="mt-4 space-y-4 text-[var(--text-muted)]">
            {content.whenToUse.map((w) => (
              <div key={w.cut}>
                <p className="font-semibold text-[var(--text-primary)]">
                  {w.cut}
                </p>
                <p className="mt-1 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6" aria-label="Explanation">
          <p className="text-lg text-[var(--text-muted)]">
            {content.quickAnswer[0]}
          </p>
          <p className="mt-2 text-base text-[var(--text-muted)]">
            {content.quickAnswer[1]}
          </p>
        </section>

        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Read the full guides:{" "}
          <Link
            href={linksA.whatIs}
            className="cut-link font-medium underline"
          >
            {cutA.id.replace(/_/g, " ")} (what-is)
          </Link>
          {" · "}
          <Link
            href={linksB.whatIs}
            className="cut-link font-medium underline"
          >
            {cutB.id.replace(/_/g, " ")} (what-is)
          </Link>
          {" · "}
          <Link
            href={linksA.hub}
            className="cut-link font-medium underline"
          >
            {cutA.id.replace(/_/g, " ")} hub
          </Link>
          {" · "}
          <Link
            href={linksB.hub}
            className="cut-link font-medium underline"
          >
            {cutB.id.replace(/_/g, " ")} hub
          </Link>
        </p>

        <AdSlot position="mid_content" />

        <PAASection items={paaItems} collapseExtraAfter={3} />

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

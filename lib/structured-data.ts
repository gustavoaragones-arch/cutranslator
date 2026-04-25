import { getSiteUrl, site } from "@/lib/site";

export type FaqPair = { question: string; answer: string };

function organizationId(base: string): string {
  return `${base}#organization`;
}

/**
 * Site-wide Organization + WebSite (inject once in root layout).
 * Page-level graphs may reference `organizationId(base)` for publisher/author.
 */
export function buildSiteIdentityGraph() {
  const base = getSiteUrl().replace(/\/$/, "");
  const orgId = organizationId(base);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        email: site.email,
        url: base,
        parentOrganization: {
          "@type": "Organization",
          name: site.entity,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}#website`,
        name: site.name,
        url: base,
        publisher: { "@id": orgId },
      },
    ],
  };
}

/**
 * Article + FAQPage in one @graph (breadcrumbs stay separate).
 * Publisher/author reference the layout-injected Organization (`#organization`).
 */
export function buildContentGraph(args: {
  pagePath: string;
  headline: string;
  description: string;
  faq: FaqPair[];
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const path = args.pagePath.startsWith("/") ? args.pagePath : `/${args.pagePath}`;
  const fullUrl = `${base}${path}`;
  const orgId = organizationId(base);
  const publisherRef = { "@id": orgId };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${fullUrl}#article`,
        headline: args.headline,
        description: args.description,
        author: publisherRef,
        publisher: publisherRef,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
          url: fullUrl,
          name: args.headline,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${fullUrl}#faq`,
        mainEntity: args.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

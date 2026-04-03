import { getSiteUrl } from "@/lib/site";

export type BreadcrumbItem = { name: string; path: string };

/**
 * Schema.org BreadcrumbList with absolute item URLs (lowercase paths).
 */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const base = getSiteUrl().replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

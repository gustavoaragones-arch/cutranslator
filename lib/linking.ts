import { relatedByCanonical } from "@/data/clusters";
import { regionalNames } from "@/data/regionalNames";
import { regions } from "@/data/regions";
import {
  allCompareSlugs,
  comparePath,
  compareSlugForCanonicalPair,
  listCanonicalIds,
  preferredSlugForCanonical,
  whatIsPath,
} from "@/lib/content";
import {
  expandMapsTo,
  findRegionalMappings,
  representativeInputName,
} from "@/lib/mappings";
import { pairSegment } from "@/lib/pairRoute";
import { regionLabel } from "@/lib/regions";
import type { CanonicalId, RegionSlug } from "@/lib/types";
import { normalizeForLookup, slugifyCut } from "@/utils/normalize";

export type InternalLink = { href: string; label: string };

function formatCanonicalTitle(id: CanonicalId): string {
  return id
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function canonicalHubHref(id: CanonicalId): string {
  return `/cuts/${id}`;
}

/**
 * Lowercase, hyphenated path; collapses duplicate hrefs.
 */
function normalizeHref(path: string): string {
  const p = path.trim().toLowerCase();
  if (!p.startsWith("/")) return `/${p}`;
  return p.replace(/\/{2,}/g, "/");
}

/**
 * Every `from → to` translation URL for this canonical (per source region retail name).
 */
export function getTranslationLinks(canonicalId: CanonicalId): InternalLink[] {
  const byHref = new Map<string, InternalLink>();
  for (const r of regions) {
    const from = r.id;
    const name = representativeInputName(from, canonicalId);
    if (!name) continue;
    const key = normalizeForLookup(name);
    if (findRegionalMappings(from, key).length === 0) continue;
    const cutSlug = slugifyCut(name);
    for (const t of regions) {
      const to = t.id;
      if (to === from) continue;
      const href = normalizeHref(`/${pairSegment(from, to)}/${cutSlug}`);
      const label = `${regionLabel(from)} → ${regionLabel(to)} (${name})`;
      if (!byHref.has(href)) byHref.set(href, { href, label });
    }
  }
  return [...byHref.values()].sort((a, b) => a.href.localeCompare(b.href, "en"));
}

export function getTranslationLinksForCanonicals(
  ids: readonly CanonicalId[],
): InternalLink[] {
  const byHref = new Map<string, InternalLink>();
  for (const id of ids) {
    for (const l of getTranslationLinks(id)) {
      if (!byHref.has(l.href)) byHref.set(l.href, l);
    }
  }
  return [...byHref.values()].sort((a, b) => a.href.localeCompare(b.href, "en"));
}

/** Cluster links to `/cuts/[canonical]`. */
export function getRelatedCutLinks(canonicalId: CanonicalId): InternalLink[] {
  return (relatedByCanonical[canonicalId] ?? []).map((id) => ({
    href: normalizeHref(canonicalHubHref(id)),
    label: formatCanonicalTitle(id),
  }));
}

/** Definition URL for a retail/display name. */
export function getDefinitionLinks(name: string): InternalLink[] {
  const slug = slugifyCut(name.trim() || name);
  return [
    {
      href: normalizeHref(whatIsPath(slug)),
      label: `What is ${name.trim()}?`,
    },
  ];
}

/** Every regional retail name for this canonical → `/what-is/[slug]` (deduped). */
export function getWhatIsLinksForCanonical(canonicalId: CanonicalId): InternalLink[] {
  const byHref = new Map<string, InternalLink>();
  for (const m of regionalNames) {
    if (!expandMapsTo(m.maps_to).includes(canonicalId)) continue;
    const slug = slugifyCut(m.name);
    const href = normalizeHref(whatIsPath(slug));
    if (!byHref.has(href)) {
      byHref.set(href, { href, label: `What is ${m.name}?` });
    }
  }
  return [...byHref.values()].sort((a, b) => a.label.localeCompare(b.label, "en"));
}

const COMPARE_FALLBACK_ORDER: readonly CanonicalId[] = [
  "ribeye",
  "striploin",
  "tenderloin",
  "sirloin_cap",
  "flank",
  "skirt",
  "sirloin_flap",
] as const;

/**
 * 2–3 comparison URLs vs related cuts (plus fallbacks if needed).
 */
export function getComparisonLinks(
  canonicalId: CanonicalId,
  limit = 3,
): InternalLink[] {
  const targets: CanonicalId[] = [];
  const seen = new Set<CanonicalId>([canonicalId]);
  for (const id of relatedByCanonical[canonicalId] ?? []) {
    if (targets.length >= limit) break;
    if (!seen.has(id)) {
      targets.push(id);
      seen.add(id);
    }
  }
  for (const id of COMPARE_FALLBACK_ORDER) {
    if (targets.length >= limit) break;
    if (id !== canonicalId && !seen.has(id)) {
      targets.push(id);
      seen.add(id);
    }
  }
  return targets.slice(0, limit).map((other) => ({
    href: normalizeHref(
      comparePath(compareSlugForCanonicalPair(canonicalId, other)),
    ),
    label: `${formatCanonicalTitle(canonicalId)} vs ${formatCanonicalTitle(other)}`,
  }));
}

/** All translation paths for sitemap (deduped, sorted). */
export function getAllTranslationSitemapPaths(): string[] {
  const set = new Set<string>();
  for (const m of regionalNames) {
    const slug = slugifyCut(m.name);
    const key = normalizeForLookup(m.name);
    if (findRegionalMappings(m.region, key).length === 0) continue;
    for (const t of regions) {
      if (t.id === m.region) continue;
      set.add(normalizeHref(`/${pairSegment(m.region, t.id)}/${slug}`));
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, "en"));
}

export function pairBreadcrumbPath(from: RegionSlug, to: RegionSlug): string {
  return normalizeHref(`/${pairSegment(from, to)}`);
}

/** Curated footer / discovery anchors (stable, high-value). */
export function getFooterCuratedLinks(): {
  cuts: InternalLink[];
  compares: InternalLink[];
  translations: InternalLink[];
} {
  const ids = listCanonicalIds();
  const cuts = ids.slice(0, 8).map((id) => ({
    href: normalizeHref(canonicalHubHref(id)),
    label: formatCanonicalTitle(id),
  }));

  const compareDefs: { a: CanonicalId; b: CanonicalId; label: string }[] = [
    {
      a: "sirloin_cap",
      b: "ribeye",
      label: "Sirloin cap vs Ribeye",
    },
    { a: "flank", b: "skirt", label: "Flank vs Skirt" },
    { a: "ribeye", b: "striploin", label: "Ribeye vs Striploin" },
    { a: "tenderloin", b: "striploin", label: "Tenderloin vs Striploin" },
    { a: "sirloin_flap", b: "flank", label: "Sirloin flap vs Flank" },
    { a: "sirloin_cap", b: "striploin", label: "Sirloin cap vs Striploin" },
  ];
  const compares = compareDefs.map(({ a, b, label }) => ({
    href: normalizeHref(comparePath(compareSlugForCanonicalPair(a, b))),
    label,
  }));

  const translations: InternalLink[] = [
    {
      href: normalizeHref(`/${pairSegment("brazil", "usa")}/picanha`),
      label: "Brazil → USA · Picanha",
    },
    {
      href: normalizeHref(`/${pairSegment("france", "usa")}/entrecote`),
      label: "France → USA · Entrecôte",
    },
    {
      href: normalizeHref(`/${pairSegment("usa", "france")}/ribeye`),
      label: "USA → France · Ribeye",
    },
    {
      href: normalizeHref(`/${pairSegment("argentina", "usa")}/vacio`),
      label: "Argentina → USA · Vacío",
    },
    {
      href: normalizeHref(`/${pairSegment("uk", "usa")}/sirloin`),
      label: "UK → USA · Sirloin",
    },
    {
      href: normalizeHref(`/${pairSegment("mexico", "usa")}/arrachera`),
      label: "Mexico → USA · Arrachera",
    },
    {
      href: normalizeHref(`/${pairSegment("brazil", "france")}/picanha`),
      label: "Brazil → France · Picanha",
    },
    {
      href: normalizeHref(`/${pairSegment("usa", "brazil")}/ribeye`),
      label: "USA → Brazil · Ribeye",
    },
  ];

  return { cuts, compares, translations };
}

/**
 * 6–10 internal links for crawl density; excludes `excludeHref` when set.
 */
export function getExploreMoreLinks(args: {
  excludeHref?: string;
  canonicalIds?: readonly CanonicalId[];
  extra?: readonly InternalLink[];
}): InternalLink[] {
  const exclude = new Set(
    args.excludeHref ? [normalizeHref(args.excludeHref)] : [],
  );
  const pool: InternalLink[] = [];

  const seedIds = args.canonicalIds?.length
    ? args.canonicalIds
    : listCanonicalIds().slice(0, 4);

  for (const id of seedIds) {
    pool.push({
      href: normalizeHref(canonicalHubHref(id)),
      label: formatCanonicalTitle(id),
    });
    pool.push({
      href: normalizeHref(whatIsPath(preferredSlugForCanonical(id))),
      label: `What is ${preferredSlugForCanonical(id).replace(/-/g, " ")}?`,
    });
    pool.push(...getComparisonLinks(id, 2));
  }

  if (args.extra) pool.push(...args.extra);

  const footer = getFooterCuratedLinks();
  pool.push(...footer.translations.slice(0, 4));
  pool.push(...footer.compares.slice(0, 2));

  const out: InternalLink[] = [];
  const seen = new Set<string>();
  for (const l of pool) {
    const h = normalizeHref(l.href);
    if (exclude.has(h) || seen.has(h)) continue;
    seen.add(h);
    out.push({ href: h, label: l.label });
    if (out.length >= 10) break;
  }
  if (out.length < 6) {
    for (const slug of allCompareSlugs()) {
      if (out.length >= 6) break;
      const h = normalizeHref(comparePath(slug));
      if (exclude.has(h) || seen.has(h)) continue;
      seen.add(h);
      out.push({
        href: h,
        label: slug.replace(/-vs-/g, " vs ").replace(/-/g, " "),
      });
    }
  }
  return out;
}

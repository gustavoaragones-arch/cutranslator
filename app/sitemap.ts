import type { MetadataRoute } from "next";
import {
  allCompareSlugs,
  allWhatIsCutSlugs,
  listCanonicalIds,
} from "@/lib/content";
import { getAllTranslationSitemapPaths } from "@/lib/linking";
import { getSiteUrl } from "@/lib/site";

// Sitemap 0: core pages (homepage, cuts, what-is, legal) — always small
// Sitemap 1..N: translation pages, chunked at 40,000 URLs per file
// Sitemap N+1: comparison pages — small
// Next.js auto-generates /sitemap.xml as the sitemap index pointing to each child.

const CHUNK_SIZE = 40_000;

export async function generateSitemaps() {
  const translationPaths = getAllTranslationSitemapPaths();
  const translationChunks = Math.max(
    1,
    Math.ceil(translationPaths.length / CHUNK_SIZE),
  );

  const ids: { id: number }[] = [{ id: 0 }];
  for (let i = 0; i < translationChunks; i++) {
    ids.push({ id: i + 1 });
  }
  ids.push({ id: translationChunks + 1 });

  return ids;
}

export default async function sitemap({
  id,
}: {
  id: Promise<number> | number;
}): Promise<MetadataRoute.Sitemap> {
  const resolvedId = typeof id === "number" ? id : await id;
  const numericId =
    typeof resolvedId === "string" ? parseInt(resolvedId, 10) : resolvedId;

  const base = getSiteUrl().replace(/\/$/, "");
  const now = new Date();

  if (numericId === 0) {
    return buildCorePagesSitemap(base, now);
  }

  const translationPaths = getAllTranslationSitemapPaths();
  const translationChunks = Math.max(
    1,
    Math.ceil(translationPaths.length / CHUNK_SIZE),
  );

  if (numericId >= 1 && numericId <= translationChunks) {
    return buildTranslationSitemap(
      base,
      now,
      translationPaths,
      numericId - 1,
    );
  }

  if (numericId === translationChunks + 1) {
    return buildComparePagesSitemap(base, now);
  }

  return [];
}

function buildCorePagesSitemap(base: string, now: Date): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];

  out.push({
    url: `${base}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  for (const path of [
    "/about",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/disclaimer",
    "/legal/cookies",
    "/legal/responsible-ai",
  ]) {
    out.push({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    });
  }

  for (const id of listCanonicalIds()) {
    out.push({
      url: `${base}/cuts/${id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const cut of allWhatIsCutSlugs()) {
    out.push({
      url: `${base}/what-is/${cut}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return dedupe(out);
}

function buildTranslationSitemap(
  base: string,
  now: Date,
  allPaths: readonly string[],
  chunkIndex: number,
): MetadataRoute.Sitemap {
  const start = chunkIndex * CHUNK_SIZE;
  const slice = allPaths.slice(start, start + CHUNK_SIZE);

  return slice.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}

function buildComparePagesSitemap(
  base: string,
  now: Date,
): MetadataRoute.Sitemap {
  return dedupe(
    allCompareSlugs().map((slug) => ({
      url: `${base}/compare/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  );
}

function dedupe(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return entries.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}

import type { MetadataRoute } from "next";
import {
  allCompareSlugs,
  allWhatIsCutSlugs,
  listCanonicalIds,
} from "@/lib/content";
import { getAllTranslationSitemapPaths } from "@/lib/linking";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  const push = (entry: MetadataRoute.Sitemap[number]) => {
    out.push(entry);
  };

  push({
    url: `${base}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
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
    push({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  for (const id of listCanonicalIds()) {
    push({
      url: `${base}/cuts/${id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const cut of allWhatIsCutSlugs()) {
    push({
      url: `${base}/what-is/${cut}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const path of getAllTranslationSitemapPaths()) {
    push({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of allCompareSlugs()) {
    push({
      url: `${base}/compare/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  const seen = new Set<string>();
  return out.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}

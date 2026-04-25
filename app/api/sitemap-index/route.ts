import { getAllTranslationSitemapPaths } from "@/lib/linking";
import { getSiteUrl } from "@/lib/site";

const CHUNK_SIZE = 40_000;

export async function GET() {
  const base = getSiteUrl().replace(/\/$/, "");
  const translationPaths = getAllTranslationSitemapPaths();
  const translationChunks = Math.max(
    1,
    Math.ceil(translationPaths.length / CHUNK_SIZE),
  );

  const locs: string[] = [];
  locs.push(`${base}/sitemap/0.xml`);
  for (let i = 0; i < translationChunks; i++) {
    locs.push(`${base}/sitemap/${i + 1}.xml`);
  }
  locs.push(`${base}/sitemap/${translationChunks + 1}.xml`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs.map((loc) => `  <sitemap><loc>${loc}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

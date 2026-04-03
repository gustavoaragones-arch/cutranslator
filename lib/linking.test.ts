import { describe, expect, it } from "vitest";
import {
  getAllTranslationSitemapPaths,
  getDefinitionLinks,
  getRelatedCutLinks,
  getTranslationLinks,
} from "@/lib/linking";

describe("linking engine", () => {
  it("dedupes translation links by href", () => {
    const links = getTranslationLinks("sirloin_cap");
    const hrefs = links.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(links.every((l) => l.href === l.href.toLowerCase())).toBe(true);
  });

  it("returns related hub links from clusters", () => {
    const r = getRelatedCutLinks("ribeye");
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((x) => x.href.startsWith("/cuts/"))).toBe(true);
  });

  it("normalizes definition hrefs", () => {
    const d = getDefinitionLinks("Picanha");
    expect(d[0].href).toMatch(/^\/what-is\/[a-z0-9-]+$/);
  });

  it("builds translation paths for sitemap without duplicates", () => {
    const paths = getAllTranslationSitemapPaths();
    expect(new Set(paths).size).toBe(paths.length);
    expect(paths.every((p) => p === p.toLowerCase())).toBe(true);
  });
});

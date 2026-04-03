import { describe, expect, it } from "vitest";
import { getCanonicalById } from "@/lib/canonical";
import {
  allCompareSlugs,
  compareSlugForCanonicalPair,
  generateAIAnswer,
  parseCompareSlugToPair,
} from "@/lib/content";

describe("programmatic SEO — compare slugs", () => {
  it("generates unique compare URLs for all canonical pairs", () => {
    const slugs = allCompareSlugs();
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
    expect(slugs.length).toBe(21);
  });

  it("round-trips every static compare slug", () => {
    for (const slug of allCompareSlugs()) {
      const parsed = parseCompareSlugToPair(slug);
      expect(parsed).not.toBeNull();
      if (parsed) {
        expect(compareSlugForCanonicalPair(parsed.a, parsed.b)).toBe(slug);
      }
    }
  });

  it("parses the slug built from a ribeye vs sirloin_cap pair", () => {
    const slug = compareSlugForCanonicalPair("sirloin_cap", "ribeye");
    expect(parseCompareSlugToPair(slug)).toEqual({
      a: "ribeye",
      b: "sirloin_cap",
    });
  });
});

describe("generateAIAnswer (AEO)", () => {
  it("returns a concise primary line and variants for picanha → USA", () => {
    const cap = getCanonicalById("sirloin_cap");
    expect(cap).toBeDefined();
    const r = generateAIAnswer("Picanha", cap!, "usa", {
      inputRegion: "brazil",
      targetLabels: ["Coulotte", "Top sirloin cap"],
    });
    expect(r.primary.length).toBeLessThan(400);
    expect(r.primary).toMatch(/sirloin cap/i);
    expect(r.primary).toMatch(/Brazil/i);
    expect(r.variants.length).toBeGreaterThanOrEqual(1);
    expect(r.parts.entityTerm).toBe("sirloin cap");
  });
});

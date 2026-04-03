import { describe, expect, it } from "vitest";
import {
  exportExpansionReport,
  getExpansionOpportunities,
} from "@/lib/expansion";

describe("getExpansionOpportunities", () => {
  it("returns core arrays and metadata", () => {
    const r = getExpansionOpportunities();
    expect(r.generatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(Array.isArray(r.missingTranslations)).toBe(true);
    expect(Array.isArray(r.missingDefinitions)).toBe(true);
    expect(Array.isArray(r.missingWhatIsPages)).toBe(true);
    expect(Array.isArray(r.recommendedComparisons)).toBe(true);
    expect(Array.isArray(r.missingComparisons)).toBe(true);
    expect(Array.isArray(r.weakCoverage)).toBe(true);
    expect(Array.isArray(r.opportunities)).toBe(true);
    expect(r.dataset.canonicalCount).toBeGreaterThan(0);
    expect(r.dataset.regionCount).toBeGreaterThan(0);
  });

  it("exportExpansionReport parses as JSON", () => {
    const s = exportExpansionReport();
    const o = JSON.parse(s) as ReturnType<typeof getExpansionOpportunities>;
    expect(o.missingTranslations).toBeDefined();
  });

  it("scores opportunities in 1–10 range", () => {
    const r = getExpansionOpportunities();
    for (const o of r.opportunities) {
      expect(o.priority).toBeGreaterThanOrEqual(1);
      expect(o.priority).toBeLessThanOrEqual(10);
    }
  });
});

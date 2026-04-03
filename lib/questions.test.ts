import { describe, expect, it } from "vitest";
import { getCanonicalById } from "@/lib/canonical";
import {
  buildTranslationPAAItems,
  generateAnswer,
  generateQuestions,
  mergeFaqWithPAA,
} from "@/lib/questions";
import type { FaqPair } from "@/lib/structured-data";

describe("questions engine (PAA)", () => {
  it("generateQuestions returns 5–10 varied strings", () => {
    const qs = generateQuestions(
      "Picanha",
      "sirloin_cap",
      "brazil",
      "usa",
      {
        targetLabels: ["Coulotte"],
        primal: "sirloin",
        location: "cap",
        relatedIds: ["ribeye", "striploin"],
      },
    );
    expect(qs.length).toBeGreaterThanOrEqual(5);
    expect(qs.length).toBeLessThanOrEqual(10);
    expect(qs.some((q) => /america|united states/i.test(q))).toBe(true);
  });

  it("buildTranslationPAAItems yields 10 or fewer Q&A rows with plain answers", () => {
    const cap = getCanonicalById("sirloin_cap");
    expect(cap).toBeDefined();
    const items = buildTranslationPAAItems({
      inputName: "Picanha",
      cutDisplay: "Picanha",
      canonicalId: "sirloin_cap",
      canonical: cap!,
      fromRegion: "brazil",
      toRegion: "usa",
      targetLabels: ["Coulotte", "Top sirloin cap"],
      relatedIds: ["ribeye", "striploin"],
      cutSlug: "picanha",
    });
    expect(items.length).toBeGreaterThanOrEqual(5);
    expect(items.length).toBeLessThanOrEqual(10);
    expect(items.every((i) => i.plainAnswer.length < 400)).toBe(true);
  });

  it("generateAnswer matches an exact question from the PAA set", () => {
    const cap = getCanonicalById("sirloin_cap")!;
    const ctx = {
      inputName: "Picanha",
      cutDisplay: "Picanha",
      canonicalId: "sirloin_cap" as const,
      canonical: cap,
      fromRegion: "brazil" as const,
      toRegion: "usa" as const,
      targetLabels: ["Coulotte"],
      relatedIds: ["ribeye"] as const,
      cutSlug: "picanha",
    };
    const items = buildTranslationPAAItems(ctx);
    const q = items[0].question;
    expect(generateAnswer(q, ctx)).toBe(items[0].plainAnswer);
  });

  it("mergeFaqWithPAA dedupes normalized questions", () => {
    const base: FaqPair[] = [
      { question: "What is X?", answer: "A" },
    ];
    const merged = mergeFaqWithPAA(base, [
      {
        id: "1",
        question: "What is X?",
        plainAnswer: "B",
        answerSegments: [{ type: "text", text: "B" }],
      },
      {
        id: "2",
        question: "What is Y?",
        plainAnswer: "C",
        answerSegments: [{ type: "text", text: "C" }],
      },
    ]);
    expect(merged).toHaveLength(2);
    expect(merged[1].question).toBe("What is Y?");
  });
});

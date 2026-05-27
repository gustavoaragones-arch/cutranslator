import { describe, expect, it } from "vitest";
import { toUrlSlug } from "@/lib/url";

describe("toUrlSlug apostrophe handling", () => {
  const cases: Array<[string, string]> = [
    // All 7 curated data entries that contain straight apostrophes (U+0027).
    // These must produce clean slugs, not percent-encoded paths.
    ["butler\u0027s steak", "butlers-steak"],
    ["dala\u0027 qasira", "dala-qasira"],
    ["kora\u0027in", "korain"],
    ["latta go\u0027sht", "latta-gosht"],
    ["to\u0027sh", "tosh"],
    ["bo\u0027yin", "boyin"],
    ["qovurg\u0027a", "qovurga"],
    // Defensive: curly apostrophe (U+2019) must also produce a clean slug,
    // not a percent-encoded path — guards against copy-paste from rich text.
    ["butler\u2019s steak", "butlers-steak"],
    // Regression: existing accent/case/hyphen behaviour must not change.
    ["Picanha", "picanha"],
    ["entrecôte", "entrecote"],
    ["T-Bone", "t-bone"],
  ];

  it.each(cases)("%s → %s", (input, expected) => {
    expect(toUrlSlug(input)).toBe(expected);
  });
});

/**
 * Core normalization: accents, case, whitespace, hyphen → space.
 */
export function normalizeCutName(raw: string): string {
  return raw
    .replace(/-/g, " ")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

/**
 * Phrase-level synonyms after normalizeCutName (exact replacement on full string).
 */
const FULL_STRING_SYNONYMS: Readonly<Record<string, string>> = {
  "ny strip": "new york strip",
  "n y strip": "new york strip",
  "entrecot": "entrecôte",
  "scotch fillet": "ribeye",
};

/**
 * Lookup key used by the resolver and mapping index (synonyms + hyphen handling).
 */
export function normalizeForLookup(raw: string): string {
  const base = normalizeCutName(raw);
  return FULL_STRING_SYNONYMS[base] ?? base;
}

/** URL slug for a cut (path segment). */
export function slugifyCut(raw: string): string {
  return normalizeForLookup(raw).replace(/\s+/g, "-");
}

/** Reverse slug from URL to lookup key (hyphens → spaces, then synonyms). */
export function cutSlugToNormalizedKey(slug: string): string {
  const spaced = slug.replace(/-/g, " ").trim();
  return normalizeForLookup(spaced);
}

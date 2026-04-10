/**
 * Ontology lookup key: lowercase, strip accents, drop punctuation, collapse space.
 */
export function normalizeKey(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Phrase aliases keyed by `normalizeKey` of user input → canonical surface phrase
 * (then re-keyed via normalizeKey for the lookup index).
 */
const PHRASE_ALIASES: Readonly<Record<string, string>> = {
  "ny strip": "new york strip",
  "n y strip": "new york strip",
  entrecot: "entrecôte",
  "scotch fillet": "ribeye",
};

/**
 * Full normalization for resolver + index keys (phrase aliases + normalizeKey).
 */
export function normalizeForLookup(raw: string): string {
  const spaced = raw.replace(/-/g, " ").trim();
  const k = normalizeKey(spaced);
  const expanded = PHRASE_ALIASES[k];
  return normalizeKey(expanded != null ? expanded : spaced);
}

/** URL slug for a cut (path segment). */
export function slugifyCut(raw: string): string {
  return normalizeForLookup(raw).replace(/\s+/g, "-");
}

/** Reverse slug from URL to lookup key (hyphens → spaces, aliases, normalizeKey). */
export function cutSlugToNormalizedKey(slug: string): string {
  const spaced = slug.replace(/-/g, " ").trim();
  return normalizeForLookup(spaced);
}

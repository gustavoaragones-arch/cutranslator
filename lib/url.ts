import { normalizeForLookup } from "@/utils/normalize";

/**
 * Ensures a regional name string is safe for use in a URL path segment.
 * Warns if non-ASCII (Cyrillic, CJK, etc.) reaches this function — that
 * indicates a data-layer rule violation (name should be Latin transliteration).
 */
export function toUrlSlug(name: string): string {
  const stripped = name.normalize("NFD").replace(/[̀-ͯ]/g, "");
  if (!/^[\x00-\x7F]*$/.test(stripped)) {
    console.warn(
      `[toUrlSlug] Non-ASCII in name: "${name}" — data layer rule violation`,
    );
    return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
  }
  return normalizeForLookup(name).replace(/\s+/g, "-");
}

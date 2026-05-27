import { normalizeForLookup } from "@/utils/normalize";

/**
 * Ensures a regional name string is safe for use in a URL path segment.
 *
 * Strips combining marks (accent decomposition) and apostrophes (U+0027 and
 * U+2019) before the ASCII gate so that linguistically-correct transliterations
 * like Uzbek `to'sh` or English `butler's steak` always produce clean slugs
 * rather than percent-encoded paths.
 *
 * Warns if genuinely non-ASCII characters (Cyrillic, CJK, etc.) remain after
 * sanitisation — that indicates a data-layer rule violation.
 */
export function toUrlSlug(name: string): string {
  const sanitized = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // strip combining marks
    .replace(/['\u2019]/g, "");        // strip straight + curly apostrophes
  if (!/^[\x00-\x7F]*$/.test(sanitized)) {
    console.warn(
      `[toUrlSlug] Non-ASCII in name: "${name}" — data layer rule violation`,
    );
    return encodeURIComponent(sanitized.toLowerCase().replace(/\s+/g, "-"));
  }
  return normalizeForLookup(sanitized).replace(/\s+/g, "-");
}

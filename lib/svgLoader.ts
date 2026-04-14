import { readFileSync } from "fs";
import { join } from "path";

/**
 * Loads an SVG file from public/ at build time (server-side only).
 * Returns the raw SVG content as a string.
 * Returns null if the file doesn't exist or can't be read.
 */
export function loadSvgSync(relativePath: string): string | null {
  try {
    const fullPath = join(process.cwd(), "public", relativePath);
    return readFileSync(fullPath, "utf-8");
  } catch {
    return null;
  }
}

/**
 * Loads an SVG file and strips the outer <svg> wrapper, returning only
 * the inner content. Allows embedding multiple SVGs into one parent <svg>.
 * Returns null if the file doesn't exist.
 */
export function loadSvgInner(relativePath: string): string | null {
  const raw = loadSvgSync(relativePath);
  if (!raw) return null;
  return raw
    .replace(/<\?xml[^>]*\?>\s*/gi, "")
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();
}

/**
 * Reads the viewBox attribute from an SVG file.
 * Falls back to "0 0 711.89 622.56" (the shared Illustrator artboard viewBox) if not found.
 */
export function readSvgViewBox(relativePath: string): string {
  const raw = loadSvgSync(relativePath);
  const match = raw?.match(/viewBox="([^"]*)"/);
  return match?.[1] ?? "0 0 711.89 622.56";
}

/**
 * Sanitizes SVG inner content for safe embedding:
 * - Strips embedded <style> blocks (CSS classes control fills instead)
 * - Strips XML declarations
 * - Prefixes all id attributes to avoid collisions when multiple SVGs are combined
 */
export function sanitizeSvgInner(content: string, prefix: string): string {
  let cleaned = content;
  cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  cleaned = cleaned.replace(/<\?xml[^>]*\?>/gi, "");
  cleaned = cleaned.replace(/\bid="([^"]*)"/g, `id="${prefix}-$1"`);
  cleaned = cleaned.replace(/url\(#([^)]*)\)/g, `url(#${prefix}-$1)`);
  return cleaned;
}

/** Canonical site identity (EEAT): use for copy, metadata, and JSON-LD. */
export const site = {
  name: "cutranslator",
  entity: "Albor Digital LLC",
  email: "contact@cutranslator.com",
  location: "Wyoming, USA",
} as const;

export type SiteIdentity = typeof site;

/** Site origin for sitemaps, robots, and JSON-LD (no network I/O). */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

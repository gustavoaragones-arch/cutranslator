import Link from "next/link";
import { getFooterCuratedLinks } from "@/lib/linking";
import { site } from "@/lib/site";

const eeatLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/responsible-ai", label: "Responsible AI" },
] as const;

export function SiteFooter() {
  const { cuts, compares, translations } = getFooterCuratedLinks();
  return (
    <footer className="cut-footer mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <nav
          aria-label="Site information"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 border-b border-[rgba(250,247,242,0.1)] pb-8 text-sm"
        >
          {eeatLinks.map((l) => (
            <Link key={l.href} href={l.href} className="cut-muted-link underline">
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
          <a href={`mailto:${site.email}`} className="cut-link font-medium underline">
            {site.email}
          </a>
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Top cuts
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {cuts.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="cut-muted-link underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Top comparisons
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {compares.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="cut-muted-link underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Top translations
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {translations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="cut-muted-link underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[var(--text-muted)]">
          © 2026 {site.name} · Operated by {site.entity}
        </p>
        <p className="mt-2 text-center text-xs text-[var(--text-muted)]">
          <Link href="/" className="cut-link font-medium underline">
            {site.name}
          </Link>
          · Beef cut ontology & regional names
        </p>
      </div>
    </footer>
  );
}

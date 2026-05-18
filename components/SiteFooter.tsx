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
    <footer
      style={{
        borderTop: "1.5px solid var(--atlas-ink)",
        backgroundColor: "var(--atlas-paper)",
        color: "var(--atlas-ink-mute)",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-12 py-10">
        {/* Link columns */}
        <div className="grid gap-10 sm:grid-cols-3 mb-10">
          <div>
            <h2
              className="atlas-mono mb-3"
              style={{ color: "var(--atlas-ink-mute)" }}
            >
              Top cuts
            </h2>
            <ul className="space-y-2">
              {cuts.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="atlas-serif text-[14px] transition-colors hover:text-[var(--atlas-ox-blood)]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="atlas-mono mb-3"
              style={{ color: "var(--atlas-ink-mute)" }}
            >
              Top comparisons
            </h2>
            <ul className="space-y-2">
              {compares.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="atlas-serif text-[14px] transition-colors hover:text-[var(--atlas-ox-blood)]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="atlas-mono mb-3"
              style={{ color: "var(--atlas-ink-mute)" }}
            >
              Top translations
            </h2>
            <ul className="space-y-2">
              {translations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="atlas-serif text-[14px] transition-colors hover:text-[var(--atlas-ox-blood)]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EEAT links */}
        <nav
          aria-label="Site information"
          className="flex flex-wrap gap-x-4 gap-y-2 py-6"
          style={{ borderTop: "0.5px solid var(--atlas-ink-fade)" }}
        >
          {eeatLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="atlas-mono transition-colors hover:text-[var(--atlas-ox-blood)]"
              style={{ color: "var(--atlas-ink-mute)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6"
          style={{ borderTop: "0.5px solid var(--atlas-ink-fade)" }}
        >
          <span
            className="atlas-serif italic font-medium text-[18px]"
            style={{ color: "var(--atlas-ox-blood)" }}
          >
            cutranslator
          </span>
          <span className="atlas-mono" style={{ color: "var(--atlas-ink-mute)" }}>
            © {site.entity} · 2026 ·{" "}
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-[var(--atlas-ox-blood)]"
            >
              {site.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

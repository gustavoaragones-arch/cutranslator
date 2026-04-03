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
    <footer className="mt-auto border-t border-stone-200 bg-stone-50/90 dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <nav
          aria-label="Site information"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 border-b border-stone-200 pb-8 text-sm dark:border-stone-800"
        >
          {eeatLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Top cuts
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {cuts.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Top comparisons
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {compares.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Top translations
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {translations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-amber-900 underline-offset-2 hover:underline dark:text-amber-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-stone-500 dark:text-stone-500">
          © 2026 {site.name} · Operated by {site.entity}
        </p>
        <p className="mt-2 text-center text-xs text-stone-500 dark:text-stone-500">
          <Link
            href="/"
            className="font-medium text-amber-800 hover:underline dark:text-amber-400"
          >
            {site.name}
          </Link>
          · Beef cut ontology & regional names
        </p>
      </div>
    </footer>
  );
}

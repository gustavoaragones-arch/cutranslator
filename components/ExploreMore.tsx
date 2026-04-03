import Link from "next/link";
import type { InternalLink } from "@/lib/linking";

export function ExploreMore(props: {
  title?: string;
  links: InternalLink[];
}) {
  const { title = "Explore more cuts", links } = props;
  if (links.length === 0) return null;
  return (
    <section className="mt-12 border-t border-stone-200 pt-10 dark:border-stone-700">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
        {title}
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block rounded-lg border border-stone-200 bg-stone-50/80 px-3 py-2 text-sm font-medium text-stone-800 transition hover:border-amber-300 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800/80 dark:text-stone-100 dark:hover:border-amber-700 dark:hover:bg-stone-700"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

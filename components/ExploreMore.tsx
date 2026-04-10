import Link from "next/link";
import type { InternalLink } from "@/lib/linking";

export function ExploreMore(props: {
  title?: string;
  links: InternalLink[];
}) {
  const { title = "Explore more cuts", links } = props;
  if (links.length === 0) return null;
  return (
    <section className="mt-12 border-t border-[var(--border-subtle)] pt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        {title}
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="cut-explore-link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

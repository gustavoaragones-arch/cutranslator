import Link from "next/link";

export type BreadcrumbNavItem = { name: string; href?: string };

export function BreadcrumbBar({ items }: { items: BreadcrumbNavItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 text-sm text-[var(--text-muted)]"
    >
      {items.map((item, i) => (
        <span key={`${item.name}-${i}`}>
          {i > 0 && <span className="mx-2 text-[var(--text-muted)]">/</span>}
          {item.href ? (
            <Link href={item.href} className="cut-muted-link font-medium underline">
              {item.name}
            </Link>
          ) : (
            <span className="text-[var(--text-primary)]">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

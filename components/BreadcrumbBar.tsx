import Link from "next/link";

export type BreadcrumbNavItem = { name: string; href?: string };

export function BreadcrumbBar({ items }: { items: BreadcrumbNavItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 text-sm text-stone-500 dark:text-stone-400"
    >
      {items.map((item, i) => (
        <span key={`${item.name}-${i}`}>
          {i > 0 && <span className="mx-2">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="font-medium text-amber-700 hover:underline"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-stone-600 dark:text-stone-300">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

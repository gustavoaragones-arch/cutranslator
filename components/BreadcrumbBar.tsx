import Link from "next/link";

export type BreadcrumbNavItem = { name: string; href?: string };

export function BreadcrumbBar({ items }: { items: BreadcrumbNavItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-5 pb-0">
      <span className="atlas-mono" style={{ color: "var(--atlas-ink-mute)" }}>
        {items.map((item, i) => (
          <span key={`${item.name}-${i}`}>
            {i > 0 && (
              <span className="mx-2" style={{ color: "var(--atlas-ink-fade)" }}>
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-[var(--atlas-ox-blood)]"
                style={{ color: "var(--atlas-ink-mute)", borderBottom: "0.5px solid transparent" }}
              >
                {item.name}
              </Link>
            ) : (
              <span style={{ color: "var(--atlas-ink)" }}>{item.name}</span>
            )}
          </span>
        ))}
      </span>
    </nav>
  );
}

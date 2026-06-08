import Link from "next/link";

export function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1.5px solid var(--atlas-ink)",
        backgroundColor: "var(--atlas-paper)",
      }}
    >
      <div className="mx-auto flex max-w-[1180px] items-baseline justify-between px-6 py-6 sm:px-12">
        <Link
          href="/"
          className="atlas-serif italic font-medium text-[28px] tracking-[-0.02em] transition-opacity hover:opacity-80"
          style={{ color: "var(--atlas-ox-blood)" }}
          aria-label="Cutranslator home"
        >
          cutranslator
        </Link>
        <div className="flex items-baseline gap-6">
          <nav aria-label="Main navigation">
            <Link
              href="/offal"
              className="atlas-mono text-sm transition-colors hover:text-[var(--atlas-ox-blood)]"
              style={{ color: "var(--atlas-ink-mute)" }}
            >
              Offal
            </Link>
          </nav>
          <span
            className="atlas-mono hidden sm:block"
            style={{ color: "var(--atlas-ink-mute)" }}
          >
            International beef cuts atlas · vol. 1
          </span>
        </div>
      </div>
    </header>
  );
}

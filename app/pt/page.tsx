import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Tradutor de Cortes de Carne";
const DESCRIPTION =
  "Traduza cortes de carne entre países. Encontre o equivalente de picanha, fraldinha, maminha, lombo e mais nos Estados Unidos, Argentina, Brasil e outros países.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

type TranslationLink = { href: string; label: string };

// Links point to existing, already-resolvable translation routes — verified
// against the live dataset rather than assumed from name spelling alone.
const BRAZIL_USA_LINKS: TranslationLink[] = [
  { href: "/brazil-to-usa/picanha", label: "Picanha nos Estados Unidos" },
  { href: "/brazil-to-usa/fraldinha", label: "Fraldinha nos Estados Unidos" },
  { href: "/brazil-to-usa/maminha", label: "Maminha nos Estados Unidos" },
  { href: "/brazil-to-usa/alcatra", label: "Alcatra nos Estados Unidos" },
  { href: "/brazil-to-usa/file-mignon", label: "Filé Mignon nos Estados Unidos" },
];

const BRAZIL_ARGENTINA_LINKS: TranslationLink[] = [
  { href: "/brazil-to-argentina/picanha", label: "Picanha na Argentina" },
  { href: "/brazil-to-argentina/fraldinha", label: "Fraldinha na Argentina" },
  { href: "/brazil-to-argentina/maminha", label: "Maminha na Argentina" },
];

const PORTUGAL_USA_LINKS: TranslationLink[] = [
  { href: "/portugal-to-usa/lombo", label: "Lombo nos Estados Unidos" },
  { href: "/portugal-to-usa/vazia", label: "Vazia nos Estados Unidos" },
  { href: "/portugal-to-usa/chambao", label: "Chambão nos Estados Unidos" },
  { href: "/portugal-to-usa/alcatra", label: "Alcatra nos Estados Unidos" },
];

const PORTUGAL_BRAZIL_LINKS: TranslationLink[] = [
  { href: "/portugal-to-brazil/lombo", label: "Lombo no Brasil" },
  { href: "/portugal-to-brazil/vazia", label: "Vazia no Brasil" },
  { href: "/portugal-to-brazil/chambao", label: "Chambão no Brasil" },
];

const GROUPS: { heading: string; links: TranslationLink[] }[] = [
  { heading: "Brasil → Estados Unidos", links: BRAZIL_USA_LINKS },
  { heading: "Brasil → Argentina", links: BRAZIL_ARGENTINA_LINKS },
  { heading: "Portugal → Estados Unidos", links: PORTUGAL_USA_LINKS },
  { heading: "Portugal → Brasil", links: PORTUGAL_BRAZIL_LINKS },
];

export default function PortugueseHubPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--atlas-paper)", color: "var(--atlas-ink)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-12">
        {/* ── Hero ── */}
        <section className="mb-16">
          <p className="atlas-mono mb-3" style={{ color: "var(--atlas-ink-mute)" }}>
            Cutranslator · Português
          </p>

          <h1
            className="atlas-display-italic mb-7"
            style={{
              fontSize: "clamp(44px, 8vw, 96px)",
              color: "var(--atlas-ink)",
              fontWeight: 400,
            }}
          >
            Tradutor de Cortes de Carne
          </h1>

          <p
            className="atlas-serif text-[24px] leading-[1.4] mb-6"
            style={{ maxWidth: 620, color: "var(--atlas-ink)" }}
          >
            Encontre o equivalente exato de cada corte em outro país
          </p>

          <p
            className="atlas-serif text-[17px] leading-[1.7]"
            style={{ maxWidth: 680, color: "var(--atlas-ink-mute)" }}
          >
            O Cutranslator mapeia os nomes regionais de cortes de carne —
            picanha, fraldinha, maminha, lombo — a um sistema canônico
            baseado na anatomia bovina, permitindo tradução precisa entre
            países.
          </p>
        </section>

        {/* ── Route groups ── */}
        {GROUPS.map((group) => (
          <section key={group.heading} className="mb-14">
            <div className="atlas-section-head">
              <h2>{group.heading}</h2>
              <span className="atlas-section-tag">{group.links.length} cortes</span>
            </div>
            <div style={{ borderTop: "0.5px solid var(--atlas-ink)" }}>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} className="atlas-route-row">
                  <span className="atlas-route-label atlas-serif text-[18px]">
                    {link.label}
                  </span>
                  <span
                    className="atlas-mono text-[11px]"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ── Footer ── */}
        <div
          className="mt-10 pt-8 text-sm"
          style={{ borderTop: "0.5px solid var(--atlas-ink)" }}
        >
          <span className="atlas-mono" style={{ color: "var(--atlas-ink-mute)" }}>
            Veja também:{" "}
          </span>
          <Link
            href="/"
            className="atlas-mono transition-colors hover:text-[var(--atlas-ox-blood)]"
            style={{
              color: "var(--atlas-ink-mute)",
              borderBottom: "0.5px solid var(--atlas-ink-mute)",
            }}
          >
            Versão em inglês
          </Link>
        </div>
      </div>
    </div>
  );
}

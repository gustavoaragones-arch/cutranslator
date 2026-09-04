import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Traductor de Cortes de Carne";
const DESCRIPTION =
  "Traduce cortes de carne entre países. Encuentra el equivalente de vacío, picanha, entrecot, arrachera y más en Estados Unidos, Reino Unido, Francia y otros países.";

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
const ARGENTINA_LINKS: TranslationLink[] = [
  { href: "/argentina-to-usa/vacio", label: "Vacío en Estados Unidos" },
  { href: "/argentina-to-usa/entrana", label: "Entraña en Estados Unidos" },
  { href: "/argentina-to-usa/bife-de-chorizo", label: "Bife de Chorizo en Estados Unidos" },
  { href: "/argentina-to-usa/asado-de-tira", label: "Asado de Tira en Estados Unidos" },
  { href: "/argentina-to-usa/matambre", label: "Matambre en Estados Unidos" },
];

const SPAIN_LINKS: TranslationLink[] = [
  { href: "/spain-to-usa/solomillo", label: "Solomillo en Estados Unidos" },
  { href: "/spain-to-usa/entrecot", label: "Entrecot en Estados Unidos" },
  { href: "/spain-to-usa/chuleton", label: "Chuletón en Estados Unidos" },
  { href: "/spain-to-usa/lomo-alto", label: "Lomo Alto en Estados Unidos" },
  { href: "/spain-to-usa/morcillo", label: "Morcillo en Estados Unidos" },
];

const MEXICO_LINKS: TranslationLink[] = [
  { href: "/mexico-to-usa/arrachera", label: "Arrachera en Estados Unidos" },
  { href: "/mexico-to-usa/bistec", label: "Bistec en Estados Unidos" },
  { href: "/mexico-to-usa/costillar", label: "Costillar en Estados Unidos" },
  { href: "/mexico-to-usa/diezmillo", label: "Diezmillo en Estados Unidos" },
  { href: "/mexico-to-usa/chambarete", label: "Chambarete en Estados Unidos" },
];

const BRAZIL_LINKS: TranslationLink[] = [
  { href: "/brazil-to-usa/picanha", label: "Picanha en Estados Unidos" },
  { href: "/brazil-to-usa/fraldinha", label: "Fraldinha en Estados Unidos" },
  { href: "/brazil-to-usa/maminha", label: "Maminha en Estados Unidos" },
  { href: "/brazil-to-usa/alcatra", label: "Alcatra en Estados Unidos" },
  { href: "/brazil-to-usa/contrafile", label: "Contrafilé en Estados Unidos" },
];

const GROUPS: { heading: string; links: TranslationLink[] }[] = [
  { heading: "Argentina → Estados Unidos", links: ARGENTINA_LINKS },
  { heading: "España → Estados Unidos", links: SPAIN_LINKS },
  { heading: "México → Estados Unidos", links: MEXICO_LINKS },
  { heading: "Brasil → Estados Unidos", links: BRAZIL_LINKS },
];

export default function SpanishHubPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--atlas-paper)", color: "var(--atlas-ink)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-12">
        {/* ── Hero ── */}
        <section className="mb-16">
          <p className="atlas-mono mb-3" style={{ color: "var(--atlas-ink-mute)" }}>
            Cutranslator · Español
          </p>

          <h1
            className="atlas-display-italic mb-7"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "var(--atlas-ink)",
              fontWeight: 400,
            }}
          >
            Traductor de Cortes de Carne
          </h1>

          <p
            className="atlas-serif text-[24px] leading-[1.4] mb-6"
            style={{ maxWidth: 620, color: "var(--atlas-ink)" }}
          >
            Encuentra el equivalente exacto de cualquier corte en otro país
          </p>

          <p
            className="atlas-serif text-[17px] leading-[1.7]"
            style={{ maxWidth: 680, color: "var(--atlas-ink-mute)" }}
          >
            Cutranslator mapea los nombres regionales de cortes de carne — vacío,
            picanha, entrecot, arrachera — a un sistema canónico basado en la
            anatomía de la res, permitiendo traducción precisa entre países.
          </p>
        </section>

        {/* ── Country groups ── */}
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
            Ver también:{" "}
          </span>
          <Link
            href="/"
            className="atlas-mono transition-colors hover:text-[var(--atlas-ox-blood)]"
            style={{
              color: "var(--atlas-ink-mute)",
              borderBottom: "0.5px solid var(--atlas-ink-mute)",
            }}
          >
            Versión en inglés
          </Link>
        </div>
      </div>
    </div>
  );
}

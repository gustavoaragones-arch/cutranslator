import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "Traducteur de Morceaux de Bœuf";
const DESCRIPTION =
  "Traduisez les morceaux de bœuf entre pays. Trouvez l'équivalent d'entrecôte, bavette, onglet, faux-filet et plus aux États-Unis, au Royaume-Uni, en Argentine et dans d'autres pays.";

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
const FRANCE_USA_LINKS: TranslationLink[] = [
  { href: "/france-to-usa/entrecote", label: "Entrecôte aux États-Unis" },
  { href: "/france-to-usa/contre-filet", label: "Contre-filet aux États-Unis" },
  { href: "/france-to-usa/bavette", label: "Bavette aux États-Unis" },
  { href: "/france-to-usa/onglet", label: "Onglet aux États-Unis" },
  { href: "/france-to-usa/cote-de-boeuf", label: "Côte de Bœuf aux États-Unis" },
];

const QUEBEC_USA_LINKS: TranslationLink[] = [
  { href: "/quebec-to-usa/faux-filet", label: "Faux-filet aux États-Unis" },
  { href: "/quebec-to-usa/onglet", label: "Onglet aux États-Unis" },
  { href: "/quebec-to-usa/bavette", label: "Bavette aux États-Unis" },
  { href: "/quebec-to-usa/cotes-levees", label: "Côtes levées aux États-Unis" },
  { href: "/quebec-to-usa/palette", label: "Palette aux États-Unis" },
];

const FRANCE_UK_LINKS: TranslationLink[] = [
  { href: "/france-to-uk/entrecote", label: "Entrecôte au Royaume-Uni" },
  { href: "/france-to-uk/contre-filet", label: "Contre-filet au Royaume-Uni" },
  { href: "/france-to-uk/bavette", label: "Bavette au Royaume-Uni" },
];

const FRANCE_ARGENTINA_LINKS: TranslationLink[] = [
  { href: "/france-to-argentina/entrecote", label: "Entrecôte en Argentine" },
  { href: "/france-to-argentina/contre-filet", label: "Contre-filet en Argentine" },
];

const GROUPS: { heading: string; links: TranslationLink[] }[] = [
  { heading: "France → États-Unis", links: FRANCE_USA_LINKS },
  { heading: "Québec → États-Unis", links: QUEBEC_USA_LINKS },
  { heading: "France → Royaume-Uni", links: FRANCE_UK_LINKS },
  { heading: "France → Argentine", links: FRANCE_ARGENTINA_LINKS },
];

export default function FrenchHubPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--atlas-paper)", color: "var(--atlas-ink)" }}
    >
      <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-12">
        {/* ── Hero ── */}
        <section className="mb-16">
          <p className="atlas-mono mb-3" style={{ color: "var(--atlas-ink-mute)" }}>
            Cutranslator · Français
          </p>

          <h1
            className="atlas-display-italic mb-7"
            style={{
              fontSize: "clamp(40px, 8vw, 96px)",
              color: "var(--atlas-ink)",
              fontWeight: 400,
            }}
          >
            Traducteur de Morceaux de Bœuf
          </h1>

          <p
            className="atlas-serif text-[24px] leading-[1.4] mb-6"
            style={{ maxWidth: 620, color: "var(--atlas-ink)" }}
          >
            Trouvez l&apos;équivalent exact de chaque morceau dans un autre pays
          </p>

          <p
            className="atlas-serif text-[17px] leading-[1.7]"
            style={{ maxWidth: 680, color: "var(--atlas-ink-mute)" }}
          >
            Cutranslator associe les noms régionaux des morceaux de bœuf —
            entrecôte, bavette, onglet, faux-filet — à un système canonique
            basé sur l&apos;anatomie bovine, permettant une traduction précise
            entre pays.
          </p>
        </section>

        {/* ── Route groups ── */}
        {GROUPS.map((group) => (
          <section key={group.heading} className="mb-14">
            <div className="atlas-section-head">
              <h2>{group.heading}</h2>
              <span className="atlas-section-tag">{group.links.length} morceaux</span>
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
            Voir aussi:{" "}
          </span>
          <Link
            href="/"
            className="atlas-mono transition-colors hover:text-[var(--atlas-ox-blood)]"
            style={{
              color: "var(--atlas-ink-mute)",
              borderBottom: "0.5px solid var(--atlas-ink-mute)",
            }}
          >
            Version en anglais
          </Link>
        </div>
      </div>
    </div>
  );
}

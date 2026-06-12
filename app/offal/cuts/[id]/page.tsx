import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { titleCaseCanonicalId } from "@/lib/content";
import { isCanonicalId } from "@/lib/canonical";
import {
  listOffalCuts,
  isOffalId,
  traditionsForCut,
  getOffalRegionalNamesForCut,
  getOffalTraditionById,
  OFFAL_COUNTRY_LABELS,
} from "@/lib/offalData";
import { getAxisNodesForCanonical } from "@/data/offal/axisNodes";
import { loadSvgInner, sanitizeSvgInner } from "@/lib/svgLoader";
import type { CanonicalId } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return listOffalCuts().map((c) => ({ id: c.id }));
}

type PageProps = { params: Promise<{ id: string }> };

/** Convert a 2-letter ISO country code to a Unicode flag emoji. */
function countryFlag(code: string): string {
  return [...code.toUpperCase()]
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join("");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  if (!isOffalId(id)) return { title: "Cut not found | Cutranslator" };
  const canonicalId = id as CanonicalId;
  const name = titleCaseCanonicalId(canonicalId);

  const regionalNames = getOffalRegionalNamesForCut(canonicalId);
  const highConf = regionalNames
    .filter((e) => e.confidence === "high")
    .sort((a, b) => {
      const la = OFFAL_COUNTRY_LABELS[a.country] ?? a.country;
      const lb = OFFAL_COUNTRY_LABELS[b.country] ?? b.country;
      return la.localeCompare(lb);
    })
    .slice(0, 3);

  let description: string;
  if (highConf.length >= 2) {
    const named = highConf
      .map((e) => `${e.localName} (${OFFAL_COUNTRY_LABELS[e.country] ?? e.country})`)
      .join(", ");
    const total = regionalNames.length;
    description = `Beef ${name.toLowerCase()} — known as ${named}${total > 3 ? ` and more across ${total} countries` : ""}.`;
  } else {
    description = `${name}: anatomical location, regional names by country, and cross-country translation guide.`;
  }

  return {
    title: `${name} — Offal — Cutranslator`,
    description,
  };
}

export default async function OffalCutPage({ params }: PageProps) {
  const { id } = await params;
  if (!isOffalId(id)) notFound();

  const canonicalId = id as CanonicalId;
  const cut = listOffalCuts().find((c) => c.id === canonicalId);
  if (!cut) notFound();

  const name = titleCaseCanonicalId(canonicalId);

  // ── Server-side SVG compositing ──────────────────────────────────────────
  // Cow base: viewBox "0 0 711.89 622.56"
  // Offal overlay: viewBox "0 0 711.89 605.37"
  // Both share the same coordinate space; the 17.19-unit height delta only
  // affects the artboard bottom (y > 605), well below the visible anatomy.
  // Composite into the cow's viewBox so the base silhouette is not clipped.
  const cowInner = loadSvgInner("svg/cow.svg");
  const rawOverlay = loadSvgInner(`svg/offal/${canonicalId}.svg`);
  const overlayInner = rawOverlay
    ? sanitizeSvgInner(rawOverlay, `offal-${canonicalId}`)
    : null;

  // ── Regional names — sorted alphabetically by country label ─────────────
  const regionalNames = getOffalRegionalNamesForCut(canonicalId);
  const sortedNames = [...regionalNames].sort((a, b) => {
    const la = OFFAL_COUNTRY_LABELS[a.country] ?? a.country;
    const lb = OFFAL_COUNTRY_LABELS[b.country] ?? b.country;
    return la.localeCompare(lb);
  });

  // ── Axis nodes (sub-canonical identities) ────────────────────────────────
  const axisNodes = getAxisNodesForCanonical(canonicalId);

  // ── Cross-links ──────────────────────────────────────────────────────────
  const mainToolExists = isCanonicalId(canonicalId);
  const allTraditions = traditionsForCut(canonicalId);
  // Cap at 8, prioritising traditions that reference the most cuts from this canonical.
  const TRADITIONS_CAP = 8;
  const sortedTraditions = [...allTraditions].sort(
    (a, b) => b.cuts.length - a.cuts.length,
  );
  const traditions = sortedTraditions.slice(0, TRADITIONS_CAP);
  const traditionsOverflow = allTraditions.length > TRADITIONS_CAP;

  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <BreadcrumbBar
          items={[
            { name: "Home", href: "/" },
            { name: "Offal", href: "/offal" },
            { name: name },
          ]}
        />

        <h1
          className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--atlas-ink)" }}
        >
          {name}
        </h1>

        <p className="mt-1 text-sm font-medium" style={{ color: "var(--atlas-ox-blood)" }}>
          {cut.location}
        </p>

        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--atlas-ink-mute)" }}>
          {cut.description}
        </p>

        {/* SVG diagram — same pattern as CowDiagramNewClient */}
        <section className="mt-10" aria-label="Anatomical diagram">
          <section
            className="cow-diagram relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--atlas-paper-deep)] bg-[var(--atlas-paper)] p-4"
            aria-label={`${name} anatomical position on beef carcass`}
          >
            <svg
              viewBox="464 186 264 128"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              className="block h-auto w-full [filter:drop-shadow(0_4px_24px_rgba(44,36,24,0.10))]"
              aria-hidden
              focusable="false"
            >
              {cowInner && (
                <g
                  className="cow-silhouette"
                  dangerouslySetInnerHTML={{ __html: cowInner }}
                />
              )}
              {overlayInner && (
                <g
                  className="cut-highlight cut-highlight-exact"
                  dangerouslySetInnerHTML={{ __html: overlayInner }}
                />
              )}
            </svg>
          </section>
        </section>

        {/* Regional names table */}
        <section className="mt-10">
          <h2
            className="font-heading text-xl font-semibold"
            style={{ color: "var(--atlas-ink)" }}
          >
            {sortedNames.length === 0
              ? "Regional Names — research in progress"
              : `Regional Names — ${sortedNames.length} countr${sortedNames.length === 1 ? "y" : "ies"}`}
          </h2>

          {sortedNames.length === 0 ? (
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--atlas-ink-fade)" }}
            >
              Regional names coming soon — research for this cut is in progress.
            </p>
          ) : (
            <>
              <div className="mt-4 overflow-x-auto rounded-lg border" style={{ borderColor: "var(--atlas-paper-deep)" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr
                      className="text-left text-xs font-medium"
                      style={{
                        borderBottom: "1px solid var(--atlas-paper-deep)",
                        color: "var(--atlas-ink-fade)",
                        backgroundColor: "var(--atlas-paper-warm)",
                      }}
                    >
                      <th className="py-2 pl-3 pr-3 font-medium">Country</th>
                      <th className="py-2 pr-3 font-medium">Local Name</th>
                      <th className="py-2 pr-3 font-medium hidden sm:table-cell">Also Known As</th>
                      <th className="py-2 pr-3 font-medium hidden sm:table-cell">Native Script</th>
                      <th className="py-2 pr-3 font-medium text-center">Conf.</th>
                      <th className="py-2 pr-3 font-medium">Traditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedNames.map((entry) => {
                      const countryLabel = OFFAL_COUNTRY_LABELS[entry.country] ?? entry.country;
                      const flag = countryFlag(entry.country);
                      const hasNote = !!entry.terminologyNote;
                      return (
                        <tr
                          key={`${entry.country}-${entry.canonicalId}`}
                          style={{ borderBottom: "1px solid var(--atlas-paper-deep)" }}
                        >
                          {/* Country */}
                          <td
                            className="py-3 pl-3 pr-3 align-top whitespace-nowrap"
                            style={{
                              borderLeft: hasNote ? "3px solid var(--atlas-gold)" : "3px solid transparent",
                            }}
                          >
                            <span className="mr-1" aria-hidden="true">{flag}</span>
                            <span
                              className="atlas-mono text-xs"
                              style={{ color: "var(--atlas-ink-fade)" }}
                            >
                              {countryLabel}
                            </span>
                          </td>

                          {/* Local Name */}
                          <td className="py-3 pr-3 align-top">
                            <div className="flex items-start gap-1">
                              {hasNote && (
                                <span
                                  className="mt-0.5 shrink-0 text-xs"
                                  style={{ color: "var(--atlas-gold)" }}
                                  title={entry.terminologyNote}
                                >
                                  ⚠
                                </span>
                              )}
                              <div>
                                <span
                                  className="font-heading font-semibold"
                                  style={{ color: "var(--atlas-ink)" }}
                                >
                                  {entry.localName}
                                </span>
                                {entry.speciesNote && (
                                  <p
                                    className="mt-0.5 text-xs italic"
                                    style={{ color: "var(--atlas-ink-fade)" }}
                                  >
                                    {entry.speciesNote}
                                  </p>
                                )}
                                {entry.terminologyNote && (
                                  <p
                                    className="mt-0.5 text-xs"
                                    style={{ color: "var(--atlas-gold)" }}
                                  >
                                    {entry.terminologyNote}
                                  </p>
                                )}
                              </div>
                            </div>
                          </td>

                          {/* Also Known As — hidden on narrow viewports */}
                          <td
                            className="py-3 pr-3 align-top text-xs hidden sm:table-cell"
                            style={{ color: "var(--atlas-ink-mute)" }}
                          >
                            {entry.altNames && entry.altNames.length > 0
                              ? entry.altNames.join(" · ")
                              : null}
                          </td>

                          {/* Native Script — hidden on narrow viewports */}
                          <td
                            className="py-3 pr-3 align-top hidden sm:table-cell"
                            style={{ color: "var(--atlas-ink-mute)" }}
                          >
                            {entry.nativeScript ?? null}
                          </td>

                          {/* Confidence */}
                          <td className="py-3 pr-3 align-top text-center text-base" title={entry.confidence}>
                            <span
                              style={{
                                color:
                                  entry.confidence === "high"
                                    ? "var(--atlas-moss)"
                                    : entry.confidence === "medium"
                                      ? "var(--atlas-gold)"
                                      : "var(--atlas-ink-fade)",
                              }}
                            >
                              {entry.confidence === "high"
                                ? "●"
                                : entry.confidence === "medium"
                                  ? "◑"
                                  : "○"}
                            </span>
                          </td>

                          {/* Tradition pills */}
                          <td className="py-3 pr-3 align-top">
                            {entry.traditionIds && entry.traditionIds.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {entry.traditionIds.map((tid) => {
                                  const trad = getOffalTraditionById(tid);
                                  return (
                                    <Link
                                      key={tid}
                                      href={`/offal/traditions/${tid}`}
                                      className="inline-block rounded px-2 py-0.5 text-xs transition-colors hover:opacity-80"
                                      style={{
                                        backgroundColor: "var(--atlas-paper-deep)",
                                        color: "var(--atlas-ink-mute)",
                                      }}
                                    >
                                      {trad?.name ?? tid}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p
                className="mt-3 text-xs leading-relaxed"
                style={{ color: "var(--atlas-ink-fade)" }}
              >
                Regional names reflect documented butcher and market terminology. Confidence
                indicators reflect research quality, not cultural importance.
              </p>
            </>
          )}
        </section>

        {/* Regional sub-cuts (axis nodes) */}
        {axisNodes.length > 0 && (
          <section className="mt-10">
            <h2
              className="font-heading text-xl font-semibold"
              style={{ color: "var(--atlas-ink)" }}
            >
              Regional sub-cuts
            </h2>
            <ul className="mt-4 divide-y" style={{ borderColor: "var(--atlas-paper-deep)" }}>
              {axisNodes.map((node) => {
                const countryLabel =
                  OFFAL_COUNTRY_LABELS[node.country] ?? node.country;
                return (
                  <li key={node.id} className="py-3">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className="atlas-mono text-xs font-medium"
                        style={{ color: "var(--atlas-ink-fade)", minWidth: "7rem" }}
                      >
                        {countryLabel}
                      </span>
                      <span
                        className="font-heading font-semibold"
                        style={{ color: "var(--atlas-ink)" }}
                      >
                        {node.localName}
                      </span>
                      {node.nativeScript && (
                        <span
                          className="text-base"
                          style={{ color: "var(--atlas-ink-mute)" }}
                        >
                          {node.nativeScript}
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: "var(--atlas-ink-mute)" }}
                    >
                      {node.note}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Cross-links */}
        <section
          className="mt-12 rounded-lg border p-5 text-sm space-y-2"
          style={{
            borderColor: "var(--atlas-paper-deep)",
            backgroundColor: "var(--atlas-paper-warm)",
            color: "var(--atlas-ink-mute)",
          }}
        >
          <p className="font-semibold" style={{ color: "var(--atlas-ink)" }}>
            See also
          </p>

          <p>
            <Link
              href="/offal"
              className="transition-colors hover:text-[var(--atlas-ox-blood)] underline"
            >
              ← All offal cuts
            </Link>
          </p>

          {mainToolExists && (
            <p>
              <Link
                href={`/cuts/${canonicalId}`}
                className="transition-colors hover:text-[var(--atlas-ox-blood)] underline"
              >
                {name} in the main cut translator →
              </Link>
            </p>
          )}

          {traditions.map((t) => (
            <p key={t.id}>
              <Link
                href={`/offal/traditions/${t.id}`}
                className="transition-colors hover:text-[var(--atlas-ox-blood)] underline"
              >
                Tradition: {t.name} →
              </Link>
            </p>
          ))}

          {traditionsOverflow && (
            <p>
              <Link
                href="/offal#traditions"
                className="transition-colors hover:text-[var(--atlas-ox-blood)] underline"
              >
                View all {allTraditions.length} traditions →
              </Link>
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

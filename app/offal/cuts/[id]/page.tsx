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
  OFFAL_COUNTRY_LABELS,
} from "@/lib/offalData";
import {
  getAxisNodesForCanonical,
} from "@/data/offal/axisNodes";
import { loadSvgInner, sanitizeSvgInner } from "@/lib/svgLoader";
import type { CanonicalId } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return listOffalCuts().map((c) => ({ id: c.id }));
}

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  if (!isOffalId(id)) return { title: "Cut not found | Cutranslator" };
  const name = titleCaseCanonicalId(id as CanonicalId);
  return {
    title: `${name} — Offal — Cutranslator`,
    description: `${name}: anatomical location, regional names by country, and cross-country translation guide.`,
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

  // ── Regional names (offal-specific dataset) ──────────────────────────────
  const regionalNames = getOffalRegionalNamesForCut(canonicalId);

  // ── Axis nodes (sub-canonical identities) ────────────────────────────────
  const axisNodes = getAxisNodesForCanonical(canonicalId);

  // ── Cross-links ──────────────────────────────────────────────────────────
  const mainToolExists = isCanonicalId(canonicalId);
  const traditions = traditionsForCut(canonicalId);

  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
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

        {/* SVG diagram */}
        <section className="mt-10" aria-label="Anatomical diagram">
          <div
            className="overflow-hidden rounded-lg border"
            style={{ borderColor: "var(--atlas-paper-deep)", backgroundColor: "var(--atlas-paper)" }}
          >
            <svg
              viewBox="0 0 711.89 622.56"
              width="100%"
              aria-label={`${name} anatomical position on beef carcass`}
              style={{ display: "block" }}
            >
              {cowInner && (
                <g dangerouslySetInnerHTML={{ __html: cowInner }} />
              )}
              {overlayInner && (
                <g dangerouslySetInnerHTML={{ __html: overlayInner }} />
              )}
            </svg>
          </div>
        </section>

        {/* Regional names */}
        <section className="mt-10">
          <h2
            className="font-heading text-xl font-semibold"
            style={{ color: "var(--atlas-ink)" }}
          >
            Regional names
          </h2>

          {regionalNames.length === 0 ? (
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--atlas-ink-fade)" }}
            >
              Regional names coming soon — research for this cut is in progress.
            </p>
          ) : (
            <ul className="mt-4 divide-y" style={{ borderColor: "var(--atlas-paper-deep)" }}>
              {regionalNames.map((entry) => {
                const countryLabel =
                  OFFAL_COUNTRY_LABELS[entry.country] ?? entry.country;
                return (
                  <li key={entry.country} className="py-3">
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
                        {entry.localName}
                      </span>
                      {entry.nativeScript && (
                        <span
                          className="text-base"
                          style={{ color: "var(--atlas-ink-mute)" }}
                        >
                          {entry.nativeScript}
                        </span>
                      )}
                      <span
                        className="atlas-mono text-xs"
                        style={{
                          color:
                            entry.confidence === "high"
                              ? "var(--atlas-moss)"
                              : entry.confidence === "medium"
                                ? "var(--atlas-gold)"
                                : "var(--atlas-ink-fade)",
                        }}
                      >
                        {entry.confidence}
                      </span>
                    </div>
                    {entry.altNames && entry.altNames.length > 0 && (
                      <p
                        className="mt-1 text-sm"
                        style={{ color: "var(--atlas-ink-mute)" }}
                      >
                        also: {entry.altNames.join(" · ")}
                      </p>
                    )}
                    {entry.speciesNote && (
                      <p
                        className="mt-1 text-xs italic"
                        style={{ color: "var(--atlas-ink-fade)" }}
                      >
                        {entry.speciesNote}
                      </p>
                    )}
                    {entry.terminologyNote && (
                      <p
                        className="mt-1 text-xs"
                        style={{ color: "var(--atlas-gold)" }}
                      >
                        ⚠ {entry.terminologyNote}
                      </p>
                    )}
                    {entry.traditionIds && entry.traditionIds.length > 0 && (
                      <p className="mt-1 text-xs" style={{ color: "var(--atlas-ink-fade)" }}>
                        {entry.traditionIds.map((tid) => (
                          <Link
                            key={tid}
                            href={`/offal/traditions/${tid}`}
                            className="underline transition-colors hover:text-[var(--atlas-ox-blood)]"
                          >
                            Tradition →
                          </Link>
                        ))}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
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
        </section>
      </main>
    </div>
  );
}

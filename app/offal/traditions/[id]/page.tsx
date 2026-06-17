import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import {
  listOffalTraditions,
  getOffalTraditionById,
} from "@/lib/offalData";
import { titleCaseCanonicalId } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ id: string }> {
  return listOffalTraditions().map((t) => ({ id: t.id }));
}

type PageProps = { params: Promise<{ id: string }> };

function resolveTradition(id: string) {
  return getOffalTraditionById(id) ?? getOffalTraditionById(decodeURIComponent(id));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tradition = resolveTradition(id);
  if (!tradition) return { title: "Tradition not found | Cutranslator" };
  return {
    title: `${tradition.name} — Offal Traditions — Cutranslator`,
    description: tradition.summary,
  };
}

export default async function OffalTraditionPage({ params }: PageProps) {
  const { id } = await params;
  const tradition = resolveTradition(id);
  if (!tradition) notFound();

  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <BreadcrumbBar
          items={[
            { name: "Home", href: "/" },
            { name: "Offal", href: "/offal" },
            { name: "Traditions", href: "/offal" },
            { name: tradition.name },
          ]}
        />

        {/* Header */}
        <h1
          className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--atlas-ink)" }}
        >
          {tradition.name}
        </h1>
        <p
          className="mt-1 atlas-mono text-sm"
          style={{ color: "var(--atlas-ox-blood)" }}
        >
          {tradition.region}
        </p>
        {tradition.speciesNote && (
          <p
            className="mt-1 text-xs italic"
            style={{ color: "var(--atlas-ink-fade)" }}
          >
            {tradition.speciesNote}
          </p>
        )}

        {/* Summary */}
        <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--atlas-ink-mute)" }}>
          {tradition.summary}
        </p>

        {/* Cultural note */}
        {tradition.culturalNote && (
          <p
            className="mt-4 border-l-2 pl-4 text-sm leading-relaxed italic"
            style={{ borderColor: "var(--atlas-ox-blood)", color: "var(--atlas-ink-mute)" }}
          >
            {tradition.culturalNote}
          </p>
        )}

        {/* Cuts in this tradition */}
        <section className="mt-10">
          <h2
            className="font-heading text-xl font-semibold"
            style={{ color: "var(--atlas-ink)" }}
          >
            Cuts in this tradition
          </h2>
          {tradition.cuts.length === 0 ? (
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--atlas-ink-fade)" }}
            >
              Cut documentation coming soon — the canonical for this tradition is in
              progress.
            </p>
          ) : (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tradition.cuts.map((cutId) => (
                <li key={cutId}>
                  <Link
                    href={`/offal/cuts/${cutId}`}
                    className="inline-block rounded border px-3 py-1 text-sm transition-colors hover:bg-[var(--atlas-paper-warm)]"
                    style={{
                      borderColor: "var(--atlas-paper-deep)",
                      backgroundColor: "var(--atlas-paper)",
                      color: "var(--atlas-ink-mute)",
                    }}
                  >
                    {titleCaseCanonicalId(cutId)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Cultural context */}
        <section className="mt-10">
          <h2
            className="font-heading text-xl font-semibold"
            style={{ color: "var(--atlas-ink)" }}
          >
            Cultural context
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--atlas-ink-mute)" }}>
            {tradition.culturalContext}
          </p>
        </section>

        {/* Preparation */}
        <section className="mt-10">
          <h2
            className="font-heading text-xl font-semibold"
            style={{ color: "var(--atlas-ink)" }}
          >
            Preparation
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--atlas-ink-mute)" }}>
            {tradition.preparationNotes}
          </p>
        </section>

        {/* Sources */}
        {tradition.sources && tradition.sources.length > 0 && (
          <section className="mt-10">
            <h2
              className="font-heading text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--atlas-ink-fade)" }}
            >
              Sources
            </h2>
            <ul className="mt-2 space-y-1">
              {tradition.sources.map((s) => (
                <li key={s} className="text-xs" style={{ color: "var(--atlas-ink-fade)" }}>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-12 text-sm">
          <Link
            href="/offal"
            className="transition-colors hover:text-[var(--atlas-ox-blood)] underline"
            style={{ color: "var(--atlas-ink-mute)" }}
          >
            ← All offal cuts &amp; traditions
          </Link>
        </div>
      </main>
    </div>
  );
}

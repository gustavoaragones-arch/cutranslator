import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import { listOffalCuts } from "@/lib/offalData";
import { titleCaseCanonicalId } from "@/lib/content";

export const metadata: Metadata = {
  title: "Offal Cuts — Cutranslator",
  description:
    "Explore beef offal cuts — tongue, tripe, liver, heart, kidney, bone marrow, and more. " +
    "Anatomical locations, regional names, and cross-country translations.",
};

export default function OffalIndexPage() {
  const cuts = listOffalCuts();

  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <BreadcrumbBar items={[{ name: "Home", href: "/" }, { name: "Offal" }]} />

        <h1
          className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--atlas-ink)" }}
        >
          Offal Cuts
        </h1>
        <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--atlas-ink-mute)" }}>
          Secondary cuts and organ meats — valued across every beef-eating culture
          in the world, and often the foundation of its most important dishes.
        </p>

        {/* Cut grid */}
        <section className="mt-10">
          <ul className="grid gap-4 sm:grid-cols-2">
            {cuts.map((cut) => (
              <li key={cut.id}>
                <Link
                  href={`/offal/cuts/${cut.id}`}
                  className="block rounded-lg border p-5 transition-colors hover:bg-[var(--atlas-paper-warm)]"
                  style={{
                    borderColor: "var(--atlas-paper-deep)",
                    backgroundColor: "var(--atlas-paper)",
                  }}
                >
                  <span
                    className="font-heading text-lg font-semibold"
                    style={{ color: "var(--atlas-ink)" }}
                  >
                    {titleCaseCanonicalId(cut.id)}
                  </span>
                  <span
                    className="mt-1 block text-sm leading-snug"
                    style={{ color: "var(--atlas-ink-mute)" }}
                  >
                    {cut.location}
                  </span>
                  <span
                    className="mt-2 block text-sm leading-relaxed line-clamp-2"
                    style={{ color: "var(--atlas-ink-fade)" }}
                  >
                    {cut.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Traditions placeholder */}
        <section className="mt-16">
          <h2
            className="font-heading text-2xl font-semibold"
            style={{ color: "var(--atlas-ink)" }}
          >
            Offal Traditions
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--atlas-ink-mute)" }}>
            Cultural offal traditions — Argentine achuras, Nigerian Orishirishi, Chadian
            Marara, Peruvian anticuchos, and more — coming soon.
          </p>
        </section>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";
import {
  listOffalTraditions,
  getOffalTraditionById,
} from "@/lib/offalData";

export const dynamicParams = false;

/** Returns an empty array until PR 2 populates tradition data. */
export function generateStaticParams(): Array<{ id: string }> {
  return listOffalTraditions().map((t) => ({ id: t.id }));
}

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tradition = getOffalTraditionById(id);
  if (!tradition) return { title: "Tradition not found | Cutranslator" };
  return {
    title: `${tradition.name} — Offal Traditions — Cutranslator`,
    description: tradition.description,
  };
}

export default async function OffalTraditionPage({ params }: PageProps) {
  const { id } = await params;
  const tradition = getOffalTraditionById(id);
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

        <h1
          className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--atlas-ink)" }}
        >
          {tradition.name}
        </h1>

        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--atlas-ink-mute)" }}>
          {tradition.description}
        </p>

        {/* Placeholder — content area populated in PR 2 */}
        <section
          className="mt-10 rounded-lg border p-6 text-sm text-center"
          style={{
            borderColor: "var(--atlas-paper-deep)",
            backgroundColor: "var(--atlas-paper)",
            color: "var(--atlas-ink-fade)",
          }}
        >
          Full tradition content coming soon.
        </section>

        <div className="mt-10 text-sm">
          <Link
            href="/offal"
            className="transition-colors hover:text-[var(--atlas-ox-blood)] underline"
            style={{ color: "var(--atlas-ink-mute)" }}
          >
            ← All offal cuts
          </Link>
        </div>
      </main>
    </div>
  );
}

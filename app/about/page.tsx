import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About cutranslator",
  description: `${site.name} translates beef cuts between countries using a canonical dataset. Operated by ${site.entity} (${site.location}).`,
};

export default function AboutPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-stone-50 to-amber-50/40 dark:from-stone-950 dark:to-stone-900">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400">
          {site.name}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          About cutranslator
        </h1>

        <section className="mt-10 space-y-4 text-stone-700 dark:text-stone-300">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
            What this site does
          </h2>
          <p className="leading-relaxed">
            {site.name} helps you translate beef cuts between countries: you enter a
            regional retail or menu name, and we map it through a canonical cut system
            so you can see what it corresponds to elsewhere. We surface naming ambiguity
            where one label can point to more than one cut, and we rank likely matches
            using confidence from our structured dataset—not guesswork from a single
            paragraph.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-stone-700 dark:text-stone-300">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
            Who built it
          </h2>
          <p className="leading-relaxed">
            {site.name} is developed and operated by{" "}
            <strong className="text-stone-900 dark:text-stone-100">
              Albor Digital LLC
            </strong>
            , an independent digital product studio based in Wyoming, USA.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-stone-700 dark:text-stone-300">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
            Our approach
          </h2>
          <ul className="list-inside list-disc space-y-2 leading-relaxed">
            <li>
              <strong className="text-stone-900 dark:text-stone-100">
                Canonical cut system:
              </strong>{" "}
              Each retail label resolves to stable canonical entities (e.g. sirloin
              cap, skirt) so comparisons stay consistent across regions.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-stone-100">
                Anatomical mapping:
              </strong>{" "}
              Descriptions tie cuts to primals and muscle context where our data model
              includes them.
            </li>
            <li>
              <strong className="text-stone-900 dark:text-stone-100">
                Multi-region validation:
              </strong>{" "}
              Regional names are recorded per country or market and checked against the
              same ontology layer, so cross-border lookups share one source of truth.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-stone-700 dark:text-stone-300">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
            AI usage
          </h2>
          <p className="leading-relaxed">
            AI assists with content structuring and summarization on some pages. Outputs
            are informational only and do not replace professional butcher or food-safety
            advice. Where mappings are uncertain, we label ambiguity and confidence
            explicitly. The underlying facts come from our structured dataset and defined
            rules—not from invented credentials or authors.
          </p>
        </section>

        <p className="mt-12 text-sm text-stone-600 dark:text-stone-400">
          Questions?{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            Contact us
          </Link>
          , read our{" "}
          <Link
            href="/legal/privacy"
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            Privacy Policy
          </Link>
          , or see the{" "}
          <Link
            href="/legal/responsible-ai"
            className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
          >
            Responsible AI Policy
          </Link>
          .
        </p>
      </main>
    </div>
  );
}

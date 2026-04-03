import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { ExploreMore } from "@/components/ExploreMore";
import { PAASection } from "@/components/PAASection";
import { TranslateForm } from "@/components/TranslateForm";
import { homeAIAnswer } from "@/lib/content";
import { getExploreMoreLinks } from "@/lib/linking";
import { pairSegment } from "@/lib/pairRoute";
import { buildHomePAAItems, mergeFaqWithPAA } from "@/lib/questions";
import { buildContentGraph } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Beef Cut Translator | cutranslator",
  description:
    "Instantly translate beef cuts between countries using cutranslator's standardized anatomical mapping system.",
};

const examples = [
  {
    href: `/${pairSegment("brazil", "usa")}/picanha`,
    label: "Picanha → USA",
    sub: "Brazilian churrasco classic to US retail names",
  },
  {
    href: `/${pairSegment("france", "usa")}/entrecote`,
    label: "Entrecôte → USA",
    sub: "French menu term to American steak counter",
  },
  {
    href: `/${pairSegment("usa", "france")}/ribeye`,
    label: "Ribeye → France",
    sub: "US ribeye to French butcher labels",
  },
  {
    href: `/${pairSegment("argentina", "usa")}/vacio`,
    label: "Vacío → USA",
    sub: "Argentine label spanning flank and sirloin flap",
  },
] as const;

const homeBaseFaq = [
  { question: "What does cutranslator do?", answer: homeAIAnswer.primary },
  {
    question: "Which canonical beef cuts does cutranslator define?",
    answer:
      "Sirloin cap, ribeye, striploin, beef tenderloin, sirloin flap, flank steak, and skirt steak—each is a stable entity with regional synonyms.",
  },
  {
    question: "How do translation URLs work?",
    answer:
      "Paths pair a source country with a destination country and a slugified retail name; the resolver maps through the canonical layer and lists confidence-ranked target labels.",
  },
  {
    question: "Where is the data stored?",
    answer:
      "In versioned TypeScript modules (regional names, canonical cuts, clusters)—no live database or CMS in this build.",
  },
] as const;

const homePaaItems = buildHomePAAItems();

const homeGraph = buildContentGraph({
  pagePath: "/",
  headline: "Beef Cut Translator",
  description: homeAIAnswer.primary,
  faq: mergeFaqWithPAA([...homeBaseFaq], homePaaItems),
  qaQuestion: "What does cutranslator do?",
  qaAnswer: homeAIAnswer.primary,
});

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-b from-stone-50 to-amber-50/40 dark:from-stone-950 dark:to-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph) }}
      />
      <main className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8">
        <header className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400">
            cutranslator
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
            Beef Cut Translator
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Instantly translate beef cuts between countries — no guessing, no confusion.
          </p>
        </header>

        <TranslateForm />
        <p className="-mt-7 text-center text-sm text-stone-600 dark:text-stone-400">
          Based on a structured dataset of global beef cuts
        </p>

        <div className="max-w-2xl">
          <AIAnswerBlock variants={homeAIAnswer.variants}>
            {homeAIAnswer.primary}
          </AIAnswerBlock>
        </div>

        <div className="max-w-2xl">
          <PAASection items={homePaaItems.slice(0, 3)} />
        </div>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Try these popular searches
          </h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Click to see how it translates.
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {examples.map((ex) => (
              <li key={ex.href}>
                <Link
                  href={ex.href}
                  className="block rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm transition hover:border-amber-300 hover:shadow-md dark:border-stone-700 dark:bg-stone-900/60 dark:hover:border-amber-700"
                >
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    {ex.label}
                  </span>
                  <span className="mt-1 block text-sm text-stone-600 dark:text-stone-400">
                    {ex.sub}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ExploreMore links={getExploreMoreLinks({})} />

        <AdSlot position="footer" />
      </main>
    </div>
  );
}

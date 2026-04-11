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
  title: "Beef Cut Translator | Cutranslator",
  description:
    "Instantly translate beef cuts between countries using Cutranslator's standardized anatomical mapping system.",
  openGraph: {
    title: "Beef Cut Translator | Cutranslator",
    description:
      "Instantly translate beef cuts between countries using Cutranslator's standardized anatomical mapping system.",
  },
  twitter: {
    title: "Beef Cut Translator | Cutranslator",
    description:
      "Instantly translate beef cuts between countries using Cutranslator's standardized anatomical mapping system.",
  },
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
  { question: "What does Cutranslator do?", answer: homeAIAnswer.primary },
  {
    question: "Which canonical beef cuts does Cutranslator define?",
    answer:
      "Cutranslator defines 26 canonical cuts spanning all eight USDA primals, including ribeye, striploin, tenderloin, brisket, short ribs, T-bone, top sirloin, tri-tip, and more — each a stable entity with regional synonyms.",
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
  qaQuestion: "What does Cutranslator do?",
  qaAnswer: homeAIAnswer.primary,
});

export default function Home() {
  return (
    <div className="cut-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph) }}
      />

      {/* Hero — dark charcoal */}
      <section className="cut-hero">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 pb-14 pt-16 sm:px-6 lg:px-8">
          <header className="text-center sm:text-left">
            <h1 className="cut-heading-gradient mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Beef Cut Translator
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--hero-subtitle)]">
              Instantly translate beef cuts between countries — no guessing, no confusion.
            </p>
          </header>
          <TranslateForm />
          <p className="-mt-6 text-center text-sm text-[var(--hero-subtitle)]">
            Based on a structured dataset of global beef cuts
          </p>
        </div>
      </section>

      {/* Body — warm paper */}
      <main className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AIAnswerBlock variants={homeAIAnswer.variants}>
            {homeAIAnswer.primary}
          </AIAnswerBlock>
        </div>

        <div className="max-w-2xl">
          <PAASection items={homePaaItems.slice(0, 3)} />
        </div>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Try these popular searches
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Click to see how it translates.
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {examples.map((ex) => (
              <li key={ex.href}>
                <Link href={ex.href} className="cut-explore-link rounded-2xl px-5 py-4">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {ex.label}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--text-muted)]">
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

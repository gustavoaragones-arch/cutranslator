import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ExploreMore } from "@/components/ExploreMore";
import { PAASection } from "@/components/PAASection";
import { TranslateForm } from "@/components/TranslateForm";
import { homeAIAnswer } from "@/lib/content";
import { getExploreMoreLinks } from "@/lib/linking";
import { pairSegment } from "@/lib/pairRoute";
import { buildHomePAAItems, mergeFaqWithPAA } from "@/lib/questions";
import { buildContentGraph } from "@/lib/structured-data";
import { POPULAR_TRANSLATIONS } from "@/data/popularTranslations";
import { REGIONS } from "@/lib/regions";
import { CowSilhouetteDivider } from "@/components/LogoSvg";

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
});

export default function Home() {
  return (
    <div className="cut-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph) }}
      />

      {/* Hero — light cream editorial */}
      <section className="cut-hero-light">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <header className="text-center">
            <h1 className="cut-heading-display">Beef Cut Translator</h1>
            <p className="cut-hero-subtitle">
              Instantly translate beef cuts between countries — no guessing, no confusion.
            </p>
          </header>
          <section aria-label="Popular translations" className="popular-translations">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-ink-muted)]">
              Popular translations
            </h2>
            <div className="popular-translations-grid">
              {POPULAR_TRANSLATIONS.map((pt) => {
                const fromRegion = REGIONS.find((r) => r.slug === pt.from);
                const toRegion = REGIONS.find((r) => r.slug === pt.to);
                return (
                  <Link
                    key={`${pt.from}-${pt.to}-${pt.cutSlug}`}
                    href={`/${pairSegment(pt.from, pt.to)}/${pt.cutSlug}`}
                    className="pop-trans-card"
                  >
                    <div className="pop-trans-flags">
                      <span aria-hidden>{fromRegion?.flag ?? ""}</span>
                      <span className="pop-trans-arrow" aria-hidden>→</span>
                      <span aria-hidden>{toRegion?.flag ?? ""}</span>
                    </div>
                    <span className="pop-trans-name">{pt.cutLabel}</span>
                    <span className="pop-trans-tagline">{pt.tagline}</span>
                  </Link>
                );
              })}
            </div>
          </section>
          <TranslateForm />
          <p className="-mt-6 text-center text-sm text-[var(--fg-ink-muted)]">
            Based on a structured dataset of global beef cuts
          </p>
        </div>

        {/* Light-to-body transition: cow silhouette straddles the boundary */}
        <div className="hero-transition-band">
          <div className="hero-transition-line" />
          <div className="hero-transition-cow" aria-hidden>
            <CowSilhouetteDivider className="w-16 h-16 md:w-20 md:h-20 text-[var(--accent-butcher)] opacity-90" />
          </div>
        </div>
      </section>

      {/* Body — warm paper */}
      <main className="mx-auto flex max-w-3xl flex-col gap-12 px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <p className="home-description">
          {homeAIAnswer.primary}
        </p>

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

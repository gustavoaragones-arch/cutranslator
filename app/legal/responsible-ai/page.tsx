import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Responsible AI Policy",
  description: `How ${site.entity} governs AI use on ${site.name}, aligned with OECD and NIST concepts.`,
};

export default function ResponsibleAIPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-stone-50 to-amber-50/40 dark:from-stone-950 dark:to-stone-900">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Responsible AI Policy
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          {site.entity} · Last updated: 2026
        </p>
        <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          This policy describes how {site.entity} applies its Responsible AI framework to{" "}
          {site.name}. The parent policy governs Albor Digital AI-enabled products
          broadly; this page summarizes commitments relevant to this site.
        </p>

        <div className="mt-10 space-y-8 text-stone-700 dark:text-stone-300">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              Purpose
            </h2>
            <p className="mt-2 leading-relaxed">
              This Responsible AI Policy outlines how {site.entity} designs, deploys, and
              governs AI-powered aspects of digital products. The objective is to ensure
              safe, transparent, and bounded use of AI systems while reducing legal,
              regulatory, and operational risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              Scope
            </h2>
            <p className="mt-2 leading-relaxed">
              For {site.name}, this policy covers AI-assisted formatting, summarization,
              and any interactive features that rely on automated systems, including
              design, data handling, output limitations, and user interaction safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              Core Responsible AI Principles
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                <strong className="text-stone-900 dark:text-stone-100">
                  Informational use only:
                </strong>{" "}
                AI outputs are educational and decision-support in nature, not
                professional advice.
              </li>
              <li>
                <strong className="text-stone-900 dark:text-stone-100">
                  Human-in-the-loop:
                </strong>{" "}
                Users retain full responsibility for decisions and actions.
              </li>
              <li>
                <strong className="text-stone-900 dark:text-stone-100">
                  Bounded capability:
                </strong>{" "}
                High-risk or legally sensitive scenarios are restricted or redirected.
              </li>
              <li>
                <strong className="text-stone-900 dark:text-stone-100">
                  Transparency:
                </strong>{" "}
                Outputs are presented with clarity and, where applicable, confidence and
                uncertainty indicators for mappings.
              </li>
              <li>
                <strong className="text-stone-900 dark:text-stone-100">
                  Data minimization:
                </strong>{" "}
                Users are discouraged from submitting sensitive or personal data.
              </li>
              <li>
                <strong className="text-stone-900 dark:text-stone-100">
                  Continuous monitoring:
                </strong>{" "}
                Models, prompts, and guardrails are reviewed and updated as regulations
                evolve.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              Regulatory alignment (summary)
            </h2>
            <p className="mt-2 leading-relaxed">
              <strong className="text-stone-900 dark:text-stone-100">
                OECD AI Principles:
              </strong>{" "}
              {site.entity} aligns with OECD principles by promoting transparency,
              robustness, accountability, and human-centered values. AI systems are
              designed to augment user understanding without replacing professional
              judgment.
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-stone-900 dark:text-stone-100">
                NIST AI Risk Management Framework (AI RMF):
              </strong>{" "}
              Our approach follows NIST AI RMF concepts including risk identification, risk
              mitigation through guardrails, and governance via continuous documentation and
              review of AI behavior.
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-stone-900 dark:text-stone-100">
                EU AI Act — limited risk (lite framing):
              </strong>{" "}
              Products are designed to fall within limited-risk or minimal-risk categories.
              We provide transparency notices, avoid automated decision-making in
              high-stakes regulated contexts, and restrict use where inappropriate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              Risk reduction controls
            </h2>
            <p className="mt-2 leading-relaxed">
              Embedded disclaimers, guardrails, and refusal mechanisms reduce exposure to
              claims of reliance, misrepresentation, and unauthorized professional
              practice. By clearly defining AI outputs as informational, maintaining
              uncertainty disclosures, and avoiding prescriptive guidance where
              inappropriate, {site.entity} reduces risk associated with automated content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              Contact
            </h2>
            <p className="mt-2 leading-relaxed">
              Questions about AI on {site.name}:{" "}
              <a href={`mailto:${site.email}`} className="text-amber-800 dark:text-amber-300">
                {site.email}
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-stone-600 dark:text-stone-400">
          <Link href="/legal/terms" className="text-amber-800 hover:underline dark:text-amber-300">
            Terms of Service
          </Link>
          {" · "}
          <Link href="/legal/disclaimer" className="text-amber-800 hover:underline dark:text-amber-300">
            Disclaimer
          </Link>
        </p>
      </main>
    </div>
  );
}

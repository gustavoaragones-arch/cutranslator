import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Responsible AI Policy",
  description: `How ${site.entity} governs AI use on ${site.name}, aligned with OECD and NIST concepts.`,
};

export default function ResponsibleAIPage() {
  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="cut-content-eyebrow">
          Legal
        </p>
        <h1 className="cut-content-title font-heading">
          Responsible AI Policy
        </h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {site.entity} · Last updated: 2026
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          This policy describes how {site.entity} applies its Responsible AI framework to{" "}
          {site.name}. The parent policy governs Albor Digital AI-enabled products
          broadly; this page summarizes commitments relevant to this site.
        </p>

        <div className="mt-10 space-y-8 text-[var(--text-muted)]">
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
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
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              Scope
            </h2>
            <p className="mt-2 leading-relaxed">
              For {site.name}, this policy covers AI-assisted formatting, summarization,
              and any interactive features that rely on automated systems, including
              design, data handling, output limitations, and user interaction safeguards.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              Core Responsible AI Principles
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                <strong className="text-[var(--text-primary)]">
                  Informational use only:
                </strong>{" "}
                AI outputs are educational and decision-support in nature, not
                professional advice.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">
                  Human-in-the-loop:
                </strong>{" "}
                Users retain full responsibility for decisions and actions.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">
                  Bounded capability:
                </strong>{" "}
                High-risk or legally sensitive scenarios are restricted or redirected.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">
                  Transparency:
                </strong>{" "}
                Outputs are presented with clarity and, where applicable, confidence and
                uncertainty indicators for mappings.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">
                  Data minimization:
                </strong>{" "}
                Users are discouraged from submitting sensitive or personal data.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">
                  Continuous monitoring:
                </strong>{" "}
                Models, prompts, and guardrails are reviewed and updated as regulations
                evolve.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              Regulatory alignment (summary)
            </h2>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">
                OECD AI Principles:
              </strong>{" "}
              {site.entity} aligns with OECD principles by promoting transparency,
              robustness, accountability, and human-centered values. AI systems are
              designed to augment user understanding without replacing professional
              judgment.
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">
                NIST AI Risk Management Framework (AI RMF):
              </strong>{" "}
              Our approach follows NIST AI RMF concepts including risk identification, risk
              mitigation through guardrails, and governance via continuous documentation and
              review of AI behavior.
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">
                EU AI Act — limited risk (lite framing):
              </strong>{" "}
              Products are designed to fall within limited-risk or minimal-risk categories.
              We provide transparency notices, avoid automated decision-making in
              high-stakes regulated contexts, and restrict use where inappropriate.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
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
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              Contact
            </h2>
            <p className="mt-2 leading-relaxed">
              Questions about AI on {site.name}:{" "}
              <a href={`mailto:${site.email}`} className="cut-link">
                {site.email}
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-[var(--text-muted)]">
          <Link href="/legal/terms" className="cut-link underline">
            Terms of Service
          </Link>
          {" · "}
          <Link href="/legal/disclaimer" className="cut-link underline">
            Disclaimer
          </Link>
        </p>
      </main>
    </div>
  );
}

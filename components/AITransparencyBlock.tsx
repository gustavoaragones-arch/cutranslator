import Link from "next/link";

/**
 * How content is produced—aligned with About page and EEAT transparency.
 */
export function AITransparencyBlock() {
  return (
    <section
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-6"
      aria-labelledby="ai-transparency-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="ai-transparency-heading"
          className="font-heading text-sm font-semibold text-[var(--text-primary)]"
        >
          How this information is generated
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--text-muted)]">
          <li>Based on a structured dataset of regional names and canonical beef cuts.</li>
          <li>Cross-region validation against the same ontology layer.</li>
          <li>
            AI-assisted formatting and summaries; informational only—see our{" "}
            <Link href="/legal/responsible-ai" className="cut-link font-medium underline">
              Responsible AI Policy
            </Link>
            .
          </li>
          <li>Ambiguity and low-confidence mappings are clearly labeled where applicable.</li>
        </ul>
      </div>
    </section>
  );
}

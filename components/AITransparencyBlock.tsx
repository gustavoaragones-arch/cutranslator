import Link from "next/link";

/**
 * How content is produced—aligned with About page and EEAT transparency.
 */
export function AITransparencyBlock() {
  return (
    <section
      className="border-t border-stone-200 bg-white/60 px-4 py-6 dark:border-stone-800 dark:bg-stone-950/40"
      aria-labelledby="ai-transparency-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="ai-transparency-heading"
          className="text-sm font-semibold text-stone-900 dark:text-stone-100"
        >
          How this information is generated
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600 dark:text-stone-400">
          <li>Based on a structured dataset of regional names and canonical beef cuts.</li>
          <li>Cross-region validation against the same ontology layer.</li>
          <li>
            AI-assisted formatting and summaries; informational only—see our{" "}
            <Link
              href="/legal/responsible-ai"
              className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
            >
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

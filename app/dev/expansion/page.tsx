import { notFound } from "next/navigation";
import {
  exportExpansionReport,
  getExpansionOpportunities,
} from "@/lib/expansion";

export default function ExpansionDevPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const report = getExpansionOpportunities();

  return (
    <div className="min-h-full bg-gradient-to-b from-stone-50 to-amber-50/40 dark:from-stone-950 dark:to-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-10 font-sans text-stone-900 dark:text-stone-100">
      <header className="mb-8 border-b border-stone-200 pb-6 dark:border-stone-700">
        <p className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Internal / dev only
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Expansion engine
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-stone-600 dark:text-stone-400">
          Gaps in regional mappings, what-is coverage, and compare routes—prioritized
          for editorial and future automation. Generated{" "}
          <time dateTime={report.generatedAt}>{report.generatedAt}</time>
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-amber-800 dark:text-amber-400/90">
            Raw JSON (exportExpansionReport)
          </summary>
          <pre className="mt-2 max-h-64 overflow-auto rounded-md border border-stone-200 bg-stone-100 p-3 text-xs text-stone-800 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300">
            {exportExpansionReport()}
          </pre>
        </details>
      </header>

      <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Stat label="Canonical cuts" value={report.dataset.canonicalCount} />
        <Stat label="Regions" value={report.dataset.regionCount} />
        <Stat label="Regional name rows" value={report.dataset.regionalNameRows} />
        <Stat label="Compare slugs" value={report.dataset.comparePageSlugs} />
        <Stat label="What-is slugs" value={report.dataset.whatIsSlugs} />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
          Top opportunities (priority)
        </h2>
        <ul className="mt-3 space-y-2">
          {report.opportunities.slice(0, 40).map((o, i) => (
            <li
              key={`${o.type}-${i}-${o.slug ?? o.canonicalId ?? ""}`}
              className="flex flex-wrap items-baseline gap-2 rounded border border-stone-200 bg-white/60 px-3 py-2 text-sm dark:border-stone-800 dark:bg-stone-900/40"
            >
              <span className="font-mono text-amber-800 dark:text-amber-400/90">{o.priority}</span>
              <span className="rounded bg-stone-200 px-1.5 py-0.5 text-xs uppercase text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                {o.type}
              </span>
              <span className="text-stone-800 dark:text-stone-300">{o.reason}</span>
              {o.canonicalId ? (
                <span className="font-mono text-xs text-stone-500 dark:text-stone-500">
                  {o.canonicalId}
                  {o.region ? ` · ${o.region}` : ""}
                  {o.compareWith ? ` vs ${o.compareWith}` : ""}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
            Missing translations
          </h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-500">
            Canonical cuts with no regionalNames row per region.
          </p>
          <ul className="mt-3 space-y-3 text-sm">
            {report.missingTranslations.map((m) => (
              <li key={m.canonical} className="rounded border border-stone-200 p-3 dark:border-stone-800">
                <div className="font-mono text-stone-900 dark:text-stone-100">{m.canonical}</div>
                <div className="mt-1 text-stone-600 dark:text-stone-500">
                  Missing: {m.missingRegions.join(", ") || "—"}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
            Weak coverage
          </h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-500">
            Sorted by how many regions lack a mapping.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {report.weakCoverage.slice(0, 12).map((w) => (
              <li
                key={w.canonical}
                className="flex justify-between gap-2 rounded border border-stone-200 px-3 py-2 dark:border-stone-800"
              >
                <span className="font-mono text-stone-800 dark:text-stone-300">{w.canonical}</span>
                <span className="text-stone-600 dark:text-stone-500">
                  {w.missingCount} gaps · p{w.priority}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
          Missing definitions (canonicalLabels)
        </h2>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-500">
          Ontology labels without a matching regionalNames entry.
        </p>
        <ul className="mt-3 max-h-64 overflow-auto text-sm">
          {report.missingDefinitions.map((d, i) => (
            <li key={`${d.canonical}-${d.region}-${i}`} className="border-b border-stone-200 py-2 font-mono text-xs text-stone-600 dark:border-stone-800/80 dark:text-stone-400">
              {d.canonical} · {d.region} · “{d.label}” → {d.suggestedSlug}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
          Missing what-is pages (aliases)
        </h2>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-500">
          Canonical aliases that do not yet appear in the what-is slug index.
        </p>
        <ul className="mt-3 max-h-48 overflow-auto text-sm">
          {report.missingWhatIsPages.map((w) => (
            <li key={w.slug} className="border-b border-stone-200 py-2 dark:border-stone-800/80">
              <span className="font-mono text-stone-800 dark:text-stone-300">{w.path}</span>
              <span className="ml-2 text-stone-600 dark:text-stone-500">{w.source}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
          Suggested comparisons (clusters)
        </h2>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-500">
          Up to three related cuts per canonical; verifies compare slug exists.
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {report.recommendedComparisons.map((c) => (
            <li
              key={c.slug}
              className="flex flex-wrap items-center gap-2 rounded border border-stone-200 px-3 py-2 dark:border-stone-800"
            >
              <span className="font-mono text-stone-800 dark:text-stone-300">{c.slug}</span>
              {c.exists ? (
                <span className="text-xs text-emerald-500/90">ok</span>
              ) : (
                <span className="text-xs text-rose-400">missing</span>
              )}
            </li>
          ))}
        </ul>
      </section>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded border border-stone-200 bg-white/60 px-3 py-3 dark:border-stone-800 dark:bg-stone-900/30">
      <div className="text-2xl font-semibold tabular-nums text-stone-900 dark:text-stone-100">
        {value}
      </div>
      <div className="text-xs text-stone-600 dark:text-stone-500">{label}</div>
    </div>
  );
}

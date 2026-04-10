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
    <div className="cut-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 text-[var(--text-primary)]">
        <header className="mb-8 border-b border-[var(--border-subtle)] pb-6">
          <p className="cut-content-eyebrow text-xs">Internal / dev only</p>
          <h1 className="font-heading mt-2 text-2xl font-semibold tracking-tight">
            Expansion engine
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            Gaps in regional mappings, what-is coverage, and compare routes—prioritized
            for editorial and future automation. Generated{" "}
            <time dateTime={report.generatedAt}>{report.generatedAt}</time>
          </p>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm cut-link">
              Raw JSON (exportExpansionReport)
            </summary>
            <pre className="mt-2 max-h-64 overflow-auto rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 font-mono text-xs text-[var(--text-muted)]">
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
          <h2 className="font-heading text-lg font-medium text-[var(--text-primary)]">
            Top opportunities (priority)
          </h2>
          <ul className="mt-3 space-y-2">
            {report.opportunities.slice(0, 40).map((o, i) => (
              <li
                key={`${o.type}-${i}-${o.slug ?? o.canonicalId ?? ""}`}
                className="flex flex-wrap items-baseline gap-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-glass)] px-3 py-2 text-sm"
              >
                <span className="font-mono text-[var(--amber)]">{o.priority}</span>
                <span className="rounded bg-[var(--wine-deep)] px-1.5 py-0.5 text-xs uppercase text-[var(--bone)]">
                  {o.type}
                </span>
                <span className="text-[var(--text-muted)]">{o.reason}</span>
                {o.canonicalId ? (
                  <span className="font-mono text-xs text-[var(--text-muted)]">
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
            <h2 className="font-heading text-lg font-medium text-[var(--text-primary)]">
              Missing translations
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Canonical cuts with no regionalNames row per region.
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              {report.missingTranslations.map((m) => (
                <li
                  key={m.canonical}
                  className="rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3"
                >
                  <div className="font-mono text-[var(--text-primary)]">{m.canonical}</div>
                  <div className="mt-1 text-[var(--text-muted)]">
                    Missing: {m.missingRegions.join(", ") || "—"}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-lg font-medium text-[var(--text-primary)]">
              Weak coverage
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Sorted by how many regions lack a mapping.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {report.weakCoverage.slice(0, 12).map((w) => (
                <li
                  key={w.canonical}
                  className="flex justify-between gap-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2"
                >
                  <span className="font-mono text-[var(--text-primary)]">{w.canonical}</span>
                  <span className="text-[var(--text-muted)]">
                    {w.missingCount} gaps · p{w.priority}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-lg font-medium text-[var(--text-primary)]">
            Missing definitions (canonicalLabels)
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Ontology labels without a matching regionalNames entry.
          </p>
          <ul className="mt-3 max-h-64 overflow-auto text-sm">
            {report.missingDefinitions.map((d, i) => (
              <li
                key={`${d.canonical}-${d.region}-${i}`}
                className="border-b border-[var(--border-subtle)] py-2 font-mono text-xs text-[var(--text-muted)]"
              >
                {d.canonical} · {d.region} · “{d.label}” → {d.suggestedSlug}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-lg font-medium text-[var(--text-primary)]">
            Missing what-is pages (aliases)
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Canonical aliases that do not yet appear in the what-is slug index.
          </p>
          <ul className="mt-3 max-h-48 overflow-auto text-sm">
            {report.missingWhatIsPages.map((w) => (
              <li key={w.slug} className="border-b border-[var(--border-subtle)] py-2">
                <span className="font-mono text-[var(--text-primary)]">{w.path}</span>
                <span className="ml-2 text-[var(--text-muted)]">{w.source}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-lg font-medium text-[var(--text-primary)]">
            Suggested comparisons (clusters)
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Up to three related cuts per canonical; verifies compare slug exists.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {report.recommendedComparisons.map((c) => (
              <li
                key={c.slug}
                className="flex flex-wrap items-center gap-2 rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2"
              >
                <span className="font-mono text-[var(--text-primary)]">{c.slug}</span>
                {c.exists ? (
                  <span className="text-xs text-[var(--amber)]">ok</span>
                ) : (
                  <span className="text-xs text-[var(--meat-rare)]">missing</span>
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
    <div className="rounded border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-3">
      <div className="text-2xl font-semibold tabular-nums text-[var(--text-primary)]">
        {value}
      </div>
      <div className="text-xs text-[var(--text-muted)]">{label}</div>
    </div>
  );
}

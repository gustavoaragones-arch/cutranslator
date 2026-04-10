import Link from "next/link";
import type { AnswerSegment, PAAItem } from "@/lib/questions";

function renderSegments(segments: readonly AnswerSegment[]) {
  return segments.map((s, i) =>
    s.type === "text" ? (
      <span key={i}>{s.text}</span>
    ) : (
      <Link key={i} href={s.href} className="cut-link font-medium underline">
        {s.text}
      </Link>
    ),
  );
}

function PAAItemDetails({ p }: { p: PAAItem }) {
  return (
    <details className="cut-paa group overflow-hidden">
      <summary className="cursor-pointer px-4 py-3 font-medium text-[var(--text-primary)] marker:text-[var(--amber)]">
        {p.question}
      </summary>
      <div className="border-t border-[var(--border-subtle)] px-4 py-3 text-sm leading-relaxed text-[var(--text-muted)] transition-colors duration-200 group-open:text-[var(--text-primary)]">
        {renderSegments(p.answerSegments)}
        <p className="mt-3">
          <Link href="/" className="cut-link font-medium underline">
            Translate it in another country
          </Link>
        </p>
      </div>
    </details>
  );
}

export function PAASection({
  items,
  collapseExtraAfter,
}: {
  items: readonly PAAItem[];
  /** First N items render normally; any remainder sit behind one “Show more” disclosure. */
  collapseExtraAfter?: number;
}) {
  if (items.length === 0) return null;

  const limit =
    collapseExtraAfter != null && collapseExtraAfter > 0
      ? collapseExtraAfter
      : items.length;
  const head = items.slice(0, Math.min(limit, items.length));
  const tail = items.length > limit ? items.slice(limit) : [];

  return (
    <section
      className="mt-10 border-t border-[var(--border-subtle)] pt-10"
      aria-label="Related questions"
    >
      <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
        People also ask about this cut
      </h2>
      <div className="mt-4 space-y-2">
        {head.map((p) => (
          <PAAItemDetails key={p.id} p={p} />
        ))}
        {tail.length > 0 ? (
          <details className="cut-paa group overflow-hidden">
            <summary className="cursor-pointer px-4 py-3 font-medium text-[var(--text-primary)] marker:text-[var(--amber)]">
              Show {tail.length} more question{tail.length === 1 ? "" : "s"}
            </summary>
            <div className="border-t border-[var(--border-subtle)] space-y-2 px-4 py-3">
              {tail.map((p) => (
                <PAAItemDetails key={p.id} p={p} />
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
}

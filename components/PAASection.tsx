import Link from "next/link";
import type { AnswerSegment, PAAItem } from "@/lib/questions";

function renderSegments(segments: readonly AnswerSegment[]) {
  return segments.map((s, i) =>
    s.type === "text" ? (
      <span key={i}>{s.text}</span>
    ) : (
      <Link
        key={i}
        href={s.href}
        className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
      >
        {s.text}
      </Link>
    ),
  );
}

export function PAASection({ items }: { items: readonly PAAItem[] }) {
  if (items.length === 0) return null;
  return (
    <section
      className="mt-10 border-t border-stone-200 pt-10 dark:border-stone-700"
      aria-label="Related questions"
    >
      <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
        People also ask about this cut
      </h2>
      <div className="mt-4 space-y-2">
        {items.map((p) => (
          <details
            key={p.id}
            className="rounded-xl border border-stone-200 bg-stone-50/60 dark:border-stone-600 dark:bg-stone-900/40"
          >
            <summary className="cursor-pointer px-4 py-3 font-medium text-stone-900 marker:text-amber-700 dark:text-stone-100 dark:marker:text-amber-500">
              {p.question}
            </summary>
            <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700 dark:border-stone-700 dark:text-stone-300">
              {renderSegments(p.answerSegments)}
              <p className="mt-3">
                <Link
                  href="/"
                  className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
                >
                  Translate it in another country
                </Link>
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

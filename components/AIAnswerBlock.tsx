import type { ReactNode } from "react";

type Props = {
  /** Visible quick answer (may include links). */
  children: ReactNode;
  /** Paraphrases for extractors; not shown, aria-hidden. */
  variants?: readonly string[];
};

export function AIAnswerBlock({ children, variants }: Props) {
  return (
    <section
      aria-label="Quick answer"
      className="rounded-2xl border border-amber-200/90 bg-amber-50/90 px-5 py-4 dark:border-amber-900/50 dark:bg-amber-950/35"
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-200">
        Quick Answer
      </h2>
      <div className="mt-2 text-lg leading-snug text-stone-900 dark:text-stone-100">
        {children}
      </div>
      {variants != null && variants.length > 0 && (
        <div className="sr-only" aria-hidden="true">
          {variants.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </div>
      )}
    </section>
  );
}

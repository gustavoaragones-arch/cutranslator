import type { ReactNode } from "react";

type Props = {
  /** Visible quick answer (may include links). */
  children: ReactNode;
  /** Paraphrases for extractors; not shown, aria-hidden. */
  variants?: readonly string[];
};

export function AIAnswerBlock({ children, variants }: Props) {
  return (
    <section aria-label="Quick answer" className="cut-ai-block px-5 py-4">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--amber)]">
        Quick Answer
      </h2>
      <div className="mt-2 text-lg leading-snug text-[var(--text-primary)]">
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

/**
 * Short educational disclaimer shown site-wide (layout).
 * Wording matches About and legal pages where possible.
 */
export function EducationalDisclaimer() {
  return (
    <p
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-center text-xs leading-relaxed text-[var(--text-muted)]"
      role="note"
    >
      This information is for educational purposes only and may vary by region or
      butcher practices.
    </p>
  );
}

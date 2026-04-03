/**
 * Short educational disclaimer shown site-wide (layout).
 * Wording matches About and legal pages where possible.
 */
export function EducationalDisclaimer() {
  return (
    <p
      className="border-t border-stone-200 bg-stone-50/80 px-4 py-3 text-center text-xs leading-relaxed text-stone-600 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-500"
      role="note"
    >
      This information is for educational purposes only and may vary by region or
      butcher practices.
    </p>
  );
}

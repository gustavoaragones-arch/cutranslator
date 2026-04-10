import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-2xl font-bold text-[var(--text-primary)]">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-[var(--text-muted)]">
        That cut or translation pair is not in the seed dataset yet, or the URL
        is invalid.
      </p>
      <Link
        href="/"
        className="cut-btn-cta mt-8 px-5 py-3 text-sm"
      >
        Back to translator
      </Link>
    </div>
  );
}

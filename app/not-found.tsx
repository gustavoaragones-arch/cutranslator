import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-stone-600 dark:text-stone-400">
        That cut or translation pair is not in the seed dataset yet, or the URL
        is invalid.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-500"
      >
        Back to translator
      </Link>
    </div>
  );
}

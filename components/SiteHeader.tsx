import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="cut-site-header-light">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <Link
          href="/"
          className="block transition-opacity hover:opacity-80"
          aria-label="Cutranslator home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- brand asset at public/logo.png */}
          <img
            src="/logo.png"
            alt="Cutranslator"
            width={899}
            height={567}
            className="h-12 w-auto max-h-14 max-w-[min(100%,280px)] object-contain object-left sm:h-14 sm:max-h-16"
          />
        </Link>
      </div>
    </header>
  );
}

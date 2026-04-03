import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: `Cookie Notice for ${site.name}, operated by ${site.entity}.`,
};

export default function CookiesPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-stone-50 to-amber-50/40 dark:from-stone-950 dark:to-stone-900">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Cookie Notice
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          {site.entity} · Effective Date: January 1, 2026
        </p>
        <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          Aligned with the Albor Digital cookie framework, adapted for {site.name}.
        </p>

        <div className="mt-10 space-y-8 text-stone-700 dark:text-stone-300">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              1. What Are Cookies
            </h2>
            <p className="mt-2 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website.
              They help websites function properly, remember your preferences, and provide
              analytical information to operators. Similar technologies — such as local
              storage, session storage, and tracking pixels — may also be used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              2. How We Use Cookies
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.entity} uses cookies and similar technologies to: (a) ensure{" "}
              {site.name} functions correctly (strictly necessary cookies); (b) remember
              your preferences and settings; (c) analyze how users interact with our
              products so we can improve them; and (d) support advertising on ad-supported
              products where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              3. Types of Cookies We Use
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-stone-200 dark:border-stone-700">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-900/80">
                    <th className="px-3 py-2 font-semibold text-stone-900 dark:text-stone-100">
                      Type
                    </th>
                    <th className="px-3 py-2 font-semibold text-stone-900 dark:text-stone-100">
                      Purpose
                    </th>
                    <th className="px-3 py-2 font-semibold text-stone-900 dark:text-stone-100">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
                  <tr>
                    <td className="px-3 py-2 align-top">Strictly Necessary</td>
                    <td className="px-3 py-2 align-top">
                      Core product functionality, session management, security.
                    </td>
                    <td className="px-3 py-2 align-top">Session</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">Functional</td>
                    <td className="px-3 py-2 align-top">
                      User preferences, language settings, saved states.
                    </td>
                    <td className="px-3 py-2 align-top">Up to 1 year</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">Analytics</td>
                    <td className="px-3 py-2 align-top">
                      Aggregate usage data via tools such as Google Analytics or similar.
                      Data is anonymized where possible.
                    </td>
                    <td className="px-3 py-2 align-top">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">Advertising</td>
                    <td className="px-3 py-2 align-top">
                      Used in ad-supported products to serve relevant ads and measure
                      performance.
                    </td>
                    <td className="px-3 py-2 align-top">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              4. Third-Party Cookies
            </h2>
            <p className="mt-2 leading-relaxed">
              Some cookies on {site.name} may be placed by third-party services, including
              analytics providers, payment processors, and advertising networks. These
              third parties have their own cookie policies and we encourage you to review
              them. Examples may include Google Analytics, Stripe, and similar services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              5. Your Choices
            </h2>
            <p className="mt-2 leading-relaxed">
              You can control and manage cookies in several ways: (a) through your browser
              settings, where you can block or delete cookies; (b) through opt-out
              mechanisms provided by third-party services (e.g., Google Analytics
              opt-out); and (c) through any cookie preference panel we provide within our
              products.
            </p>
            <p className="mt-2 leading-relaxed">
              Please note that disabling strictly necessary cookies may affect the
              functionality of {site.name}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              6. Do Not Track
            </h2>
            <p className="mt-2 leading-relaxed">
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Our products do not
              currently respond to DNT signals, as there is no industry-standard approach.
              We continue to monitor developments in this area.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              7. Updates to This Notice
            </h2>
            <p className="mt-2 leading-relaxed">
              We may update this Cookie Notice as our products evolve or regulations
              change. Updates will be posted with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              8. Contact
            </h2>
            <p className="mt-2 leading-relaxed">
              For questions about our use of cookies:{" "}
              <a href={`mailto:${site.email}`} className="text-amber-800 dark:text-amber-300">
                {site.email}
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-xs text-stone-500 dark:text-stone-500">
          © 2026 {site.entity}. All rights reserved. These documents apply to{" "}
          {site.name} as operated by {site.entity}.
        </p>

        <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
          <Link href="/legal/privacy" className="text-amber-800 hover:underline dark:text-amber-300">
            Privacy Policy
          </Link>
        </p>
      </main>
    </div>
  );
}

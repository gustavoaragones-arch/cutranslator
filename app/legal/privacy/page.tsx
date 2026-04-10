import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}, operated by ${site.entity}.`,
};

export default function PrivacyPage() {
  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="cut-content-eyebrow">
          Legal
        </p>
        <h1 className="cut-content-title font-heading">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {site.entity} · Effective Date: January 1, 2026 · Last Updated: January 1, 2026
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          This policy describes {site.name} (cuttranslator.com). It follows the structure
          of the Albor Digital privacy framework adapted for this product.
        </p>

        <div className="mt-10 space-y-8 text-[var(--text-muted)]">
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              1. Introduction
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.entity} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard information
              when you use {site.name}.
            </p>
            <p className="mt-2 leading-relaxed">
              By using {site.name}, you consent to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              2. Information We Collect
            </h2>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">
                Information you provide directly:
              </strong>{" "}
              Name, email address, payment information (if any), and any other data you
              submit when creating an account, subscribing, or contacting us at{" "}
              {site.email}.
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">Usage data:</strong>{" "}
              Pages visited, features used, time spent, device type, browser type, IP
              address, and referring URLs.
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">
                Cookies and tracking data:
              </strong>{" "}
              See our{" "}
              <Link href="/legal/cookies" className="cut-link">
                Cookie Notice
              </Link>
              .
            </p>
            <p className="mt-2 leading-relaxed">
              <strong className="text-[var(--text-primary)]">
                AI interaction data:
              </strong>{" "}
              Where applicable, prompts or inputs you provide to AI-powered features within{" "}
              {site.name}. This data may be used to improve product functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              3. How We Use Your Information
            </h2>
            <p className="mt-2 leading-relaxed">
              We use collected information to: (a) provide, operate, and maintain{" "}
              {site.name}; (b) process payments and manage subscriptions when offered; (c)
              respond to inquiries and support requests; (d) send transactional
              communications; (e) improve and develop our products; (f) detect and
              prevent fraud or misuse; and (g) comply with legal obligations.
            </p>
            <p className="mt-2 leading-relaxed">
              We do not sell your personal information to third parties. We do not use
              your data for targeted advertising on behalf of third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              4. Legal Basis for Processing (GDPR)
            </h2>
            <p className="mt-2 leading-relaxed">
              If you are located in the European Economic Area, our legal bases for
              processing your personal data include: performance of a contract (to provide
              our services), compliance with legal obligations, our legitimate interests
              in operating and improving our products, and — where required — your
              consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              5. Sharing of Information
            </h2>
            <p className="mt-2 leading-relaxed">
              We may share your information with: (a) service providers who assist in
              operating our products (e.g., payment processors, cloud hosting providers,
              analytics services), under confidentiality agreements; (b) law enforcement or
              regulatory bodies when required by law; and (c) a successor entity in the
              event of a merger, acquisition, or sale of assets.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              6. Data Retention
            </h2>
            <p className="mt-2 leading-relaxed">
              We retain personal data for as long as necessary to fulfill the purposes
              outlined in this policy, or as required by law. Account data is retained for
              the duration of your account and for a reasonable period thereafter. You may
              request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              7. Your Rights
            </h2>
            <p className="mt-2 leading-relaxed">
              Depending on your jurisdiction, you may have the right to: access the
              personal data we hold about you; request correction of inaccurate data;
              request deletion of your data; object to or restrict our processing; withdraw
              consent at any time; and receive your data in a portable format.
            </p>
            <p className="mt-2 leading-relaxed">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${site.email}`} className="cut-link">
                {site.email}
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.name} is not directed to children under the age of 13. We do not
              knowingly collect personal information from children under 13. If we become
              aware that we have inadvertently collected such data, we will delete it
              promptly.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              9. Data Security
            </h2>
            <p className="mt-2 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to
              protect your data. However, no method of transmission over the internet or
              electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              10. International Transfers
            </h2>
            <p className="mt-2 leading-relaxed">
              Your information may be transferred to and processed in countries other than
              your own, including the United States and Canada. We take steps to ensure
              that appropriate safeguards are in place for such transfers in compliance
              with applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              11. Third-Party Links
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.name} may contain links to third-party websites or services. We are not
              responsible for the privacy practices of those third parties and encourage
              you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              12. Changes to This Policy
            </h2>
            <p className="mt-2 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be posted with a
              revised effective date. Continued use of {site.name} after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              13. Contact
            </h2>
            <p className="mt-2 leading-relaxed">
              For privacy-related questions or requests:{" "}
              <a href={`mailto:${site.email}`} className="cut-link">
                {site.email}
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-[var(--text-muted)]">
          <Link href="/legal/terms" className="cut-link underline">
            Terms of Service
          </Link>
          {" · "}
          <Link href="/legal/cookies" className="cut-link underline">
            Cookie Notice
          </Link>
        </p>
      </main>
    </div>
  );
}

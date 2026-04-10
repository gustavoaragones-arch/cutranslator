import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}, operated by ${site.entity}.`,
};

export default function TermsPage() {
  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="cut-content-eyebrow">
          Legal
        </p>
        <h1 className="cut-content-title font-heading">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {site.entity} · Effective Date: January 1, 2026 · Last Updated: January 1, 2026
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          These Terms apply to {site.name} at cuttranslator.com and related digital
          experiences operated by {site.entity}. They are adapted from the Albor Digital
          legal package to describe this product. They are not a substitute for advice
          from a licensed attorney; periodic review by counsel is recommended as the
          product evolves.
        </p>

        <div className="mt-10 space-y-8 text-[var(--text-muted)]">
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2 leading-relaxed">
              By accessing or using {site.name} (the “Site”), you agree to be bound by
              these Terms of Service (“Terms”). “We,” “us,” and “our” refer to{" "}
              {site.entity}, the operator of {site.name}. If you do not agree to these
              Terms, do not use the Site.
            </p>
            <p className="mt-2 leading-relaxed">
              These Terms apply to this product and digital properties operated under the{" "}
              {site.name} name, including cuttranslator.com and its subdomains, and are
              incorporated by reference with any supplemental terms presented at the
              point of use.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              2. Who We Are
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.entity} is an independent digital product studio registered in the
              State of Wyoming, United States. We design, build, and operate our own
              digital products and tools. We do not provide client services, consulting, or
              custom software development for third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              3. Products and Services
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.name} provides informational utilities for translating and comparing
              beef cut names across regions, including structured data, AI-assisted
              formatting, and educational content. Features may change over time.
            </p>
            <p className="mt-2 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any product or
              feature at any time without prior notice. We will not be liable to you or
              any third party for any such modification, suspension, or discontinuation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              4. User Eligibility
            </h2>
            <p className="mt-2 leading-relaxed">
              You must be at least 13 years of age to use {site.name}. If you are under
              18, you represent that you have obtained parental or guardian consent. By
              using the site, you represent and warrant that you meet these eligibility
              requirements.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              5. User Accounts
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.name} may not require an account in all builds. If we introduce
              accounts, you are responsible for maintaining the confidentiality of your
              login credentials and for all activity under your account. You agree to
              notify us immediately at {site.email} of any unauthorized use.
            </p>
            <p className="mt-2 leading-relaxed">
              We reserve the right to terminate or suspend accounts at our sole
              discretion, including for violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              6. Acceptable Use
            </h2>
            <p className="mt-2 leading-relaxed">
              You agree not to use {site.name} to: (a) violate any applicable law or
              regulation; (b) infringe on the intellectual property rights of {site.entity}{" "}
              or any third party; (c) transmit harmful, abusive, or offensive content;
              (d) attempt to gain unauthorized access to our systems or other
              users&apos; accounts; (e) scrape, harvest, or extract data from our
              products without written permission; (f) use our products for any commercial
              purpose without our prior written consent; or (g) interfere with the
              operation or integrity of our platforms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              7. Intellectual Property
            </h2>
            <p className="mt-2 leading-relaxed">
              All content, design, code, data, and materials within {site.name} — including
              but not limited to text, graphics, logos, interface elements, and software —
              are the exclusive property of {site.entity} or its licensors and are
              protected by applicable intellectual property laws.
            </p>
            <p className="mt-2 leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable, revocable license
              to access and use {site.name} for personal, non-commercial purposes in
              accordance with these Terms. No rights are transferred to you beyond what
              is expressly stated here.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              8. User-Generated Content
            </h2>
            <p className="mt-2 leading-relaxed">
              Where features allow you to submit, post, or share content, you grant{" "}
              {site.entity} a non-exclusive, worldwide, royalty-free license to use,
              reproduce, and display that content solely for the purpose of providing and
              improving the relevant product. You retain ownership of your content and are
              solely responsible for it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              9. Subscriptions and Payments
            </h2>
            <p className="mt-2 leading-relaxed">
              Certain products may be offered on a subscription basis in the future. By
              subscribing, you would authorize us to charge your chosen payment method on
              a recurring basis at the rate disclosed at checkout. Subscriptions would
              auto-renew unless cancelled before the renewal date.
            </p>
            <p className="mt-2 leading-relaxed">
              {site.name} is currently offered without charge unless otherwise stated at
              checkout. All fees, when applicable, are stated in US dollars and are
              non-refundable except where required by applicable law. We reserve the
              right to change pricing with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              10. Third-Party Services
            </h2>
            <p className="mt-2 leading-relaxed">
              {site.name} may integrate with or link to third-party services (such as
              analytics providers or AI platforms). These third parties have their own
              terms and privacy policies. {site.entity} is not responsible for the
              practices or content of any third-party service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              11. Disclaimer of Warranties
            </h2>
            <p className="mt-2 font-medium uppercase leading-relaxed text-[var(--text-primary)]">
              OUR PRODUCTS ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
              WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR PRODUCTS WILL BE ERROR-FREE,
              UNINTERRUPTED, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              12. Limitation of Liability
            </h2>
            <p className="mt-2 font-medium uppercase leading-relaxed text-[var(--text-primary)]">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {site.entity.toUpperCase()}{" "}
              AND ITS OWNER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF
              OUR PRODUCTS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM SHALL NOT EXCEED THE
              GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE
              CLAIM OR (B) USD $50.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              13. Indemnification
            </h2>
            <p className="mt-2 leading-relaxed">
              You agree to indemnify, defend, and hold harmless {site.entity} and its
              owner from any claims, damages, liabilities, costs, or expenses (including
              reasonable legal fees) arising from your use of {site.name}, your violation
              of these Terms, or your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              14. Governing Law and Disputes
            </h2>
            <p className="mt-2 leading-relaxed">
              These Terms are governed by the laws of the State of Wyoming, United States,
              without regard to its conflict of law provisions. Any dispute arising from
              these Terms or your use of {site.name} shall first be addressed through
              good-faith negotiation. If unresolved, disputes shall be submitted to
              binding arbitration in accordance with the rules of the American Arbitration
              Association.
            </p>
            <p className="mt-2 leading-relaxed">
              Notwithstanding the above, you agree that {site.entity} may seek
              injunctive relief in any court of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              15. Changes to These Terms
            </h2>
            <p className="mt-2 leading-relaxed">
              We reserve the right to update these Terms at any time. Changes will be
              posted on this page with a revised effective date. Your continued use of{" "}
              {site.name} after any changes constitutes your acceptance of the revised
              Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
              16. Contact
            </h2>
            <p className="mt-2 leading-relaxed">
              For questions about these Terms, contact us at:{" "}
              <a href={`mailto:${site.email}`} className="cut-link">
                {site.email}
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-[var(--text-muted)]">
          <Link href="/legal/privacy" className="cut-link underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/legal/disclaimer" className="cut-link underline">
            Disclaimer
          </Link>
          {" · "}
          <Link href="/legal/responsible-ai" className="cut-link underline">
            Responsible AI Policy
          </Link>
        </p>
      </main>
    </div>
  );
}

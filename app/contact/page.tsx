import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} at ${site.email}. Operated by ${site.entity}.`,
};

export default function ContactPage() {
  return (
    <div className="cut-bg">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="cut-content-eyebrow">
          {site.name}
        </p>
        <h1 className="cut-content-title font-heading">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
          Reach {site.name} at{" "}
          <a
            href={`mailto:${site.email}`}
            className="cut-link font-semibold underline"
          >
            {site.email}
          </a>
          . We operate as {site.entity} from {site.location}.
        </p>

        <ContactForm />
      </main>
    </div>
  );
}

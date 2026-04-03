import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} at ${site.email}. Operated by ${site.entity}.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-stone-50 to-amber-50/40 dark:from-stone-950 dark:to-stone-900">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400">
          {site.name}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
          Reach {site.name} at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
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

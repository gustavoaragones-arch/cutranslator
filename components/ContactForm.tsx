"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const subject =
      String(fd.get("subject") ?? "").trim() || `${site.name} inquiry`;
    const message = String(fd.get("message") ?? "").trim();
    const mailto = `mailto:${site.email}?${new URLSearchParams({
      subject,
      body: `Name: ${name || "(not provided)"}\n\n${message}`,
    }).toString()}`;
    setStatus("Opening your email app…");
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900/60"
    >
      <p className="text-sm text-stone-600 dark:text-stone-400">
        No server upload yet—submit opens your mail client to{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-amber-800 underline-offset-2 hover:underline dark:text-amber-300"
        >
          {site.email}
        </a>
        .
      </p>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-stone-800 dark:text-stone-200">
          Name (optional)
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-stone-800 dark:text-stone-200">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          defaultValue={`${site.name} inquiry`}
          className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-stone-800 dark:text-stone-200">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
        />
      </div>
      <button
        type="submit"
        className="rounded-xl bg-amber-700 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500"
      >
        Send via email
      </button>
      {status ? (
        <p className="text-sm text-stone-600 dark:text-stone-400" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}

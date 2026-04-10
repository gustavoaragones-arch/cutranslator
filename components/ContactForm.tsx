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
      className="cut-glass-form mt-6 space-y-4 p-6 shadow-lg shadow-black/20"
    >
      <p className="text-sm text-[var(--text-muted)]">
        No server upload yet—submit opens your mail client to{" "}
        <a href={`mailto:${site.email}`} className="cut-link font-medium underline">
          {site.email}
        </a>
        .
      </p>
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Name (optional)
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="cut-input mt-1 w-full px-3 py-2 shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          defaultValue={`${site.name} inquiry`}
          className="cut-input mt-1 w-full px-3 py-2 shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="cut-input mt-1 w-full px-3 py-2 shadow-sm"
        />
      </div>
      <button type="submit" className="cut-btn-cta w-full px-4 py-2.5 text-sm sm:w-auto">
        Send via email
      </button>
      {status ? (
        <p className="text-sm text-[var(--text-muted)]" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}

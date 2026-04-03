"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RegionSlug } from "@/lib/types";
import { pairSegment } from "@/lib/pairRoute";
import { slugifyCut } from "@/utils/normalize";
import { RegionSelector } from "@/components/RegionSelector";

export function TranslateForm() {
  const router = useRouter();
  const [cut, setCut] = useState("");
  const [from, setFrom] = useState<RegionSlug>("brazil");
  const [to, setTo] = useState<RegionSlug>("usa");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const slug = slugifyCut(cut);
    if (!slug) return;
    if (from === to) return;
    router.push(`/${pairSegment(from, to)}/${slug}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900/60"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="cut"
          className="text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          Cut name
        </label>
        <input
          id="cut"
          value={cut}
          onChange={(e) => setCut(e.target.value)}
          placeholder="Type a cut name (e.g. picanha, ribeye, arrachera)"
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
          autoComplete="off"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <RegionSelector
          id="from-region"
          label="From country"
          value={from}
          onChange={setFrom}
        />
        <RegionSelector
          id="to-region"
          label="To country"
          value={to}
          onChange={setTo}
        />
      </div>
      <button
        type="submit"
        disabled={!cut.trim() || from === to}
        className="rounded-xl bg-amber-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Find Equivalent Cut
      </button>
      <p className="text-center text-xs text-stone-500 dark:text-stone-400">
        Works across US, Brazil, France, Argentina, UK, Mexico and more
      </p>
    </form>
  );
}

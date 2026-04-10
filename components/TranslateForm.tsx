"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { RegionSlug } from "@/lib/types";
import { getCutsByRegion, type DatasetCutOption } from "@/lib/cuts";
import { pairSegment } from "@/lib/pairRoute";
import { regionLabel } from "@/lib/regions";
import { slugifyCut } from "@/utils/normalize";
import { RegionSelector } from "@/components/RegionSelector";

export function TranslateForm() {
  const router = useRouter();
  const [from, setFrom] = useState<RegionSlug>("brazil");
  const [to, setTo] = useState<RegionSlug>("usa");
  const [cuts, setCuts] = useState<DatasetCutOption[]>([]);
  const [selectedCut, setSelectedCut] = useState("");

  useEffect(() => {
    const raw = getCutsByRegion(from);
    const unique = Array.from(
      new Map(raw.map((c) => [c.name.toLowerCase(), c])).values(),
    );
    unique.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
    );
    setCuts(unique);
    setSelectedCut("");
  }, [from]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedCut || from === to) return;
    const slug = slugifyCut(selectedCut);
    if (!slug) return;
    router.push(`/${pairSegment(from, to)}/${slug}`);
  }

  const placeholderLabel = `Select a cut available in ${regionLabel(from)}`;

  return (
    <form
      onSubmit={onSubmit}
      className="cut-glass-form mx-auto flex w-full max-w-xl flex-col gap-6 p-8 shadow-lg shadow-black/20"
    >
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

      <div className="flex flex-col gap-2">
        <label
          htmlFor="cut-select"
          className="text-sm font-medium text-[var(--text-primary)]"
        >
          Cut
        </label>
        <select
          id="cut-select"
          value={selectedCut}
          onChange={(e) => setSelectedCut(e.target.value)}
          className="cut-input appearance-none bg-[var(--bg-card)] px-4 py-3 pr-10 shadow-inner"
        >
          <option value="">{placeholderLabel}</option>
          {cuts.map((cut) => (
            <option key={cut.name.toLowerCase()} value={cut.name}>
              {cut.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={!selectedCut || from === to}
        className="cut-btn-cta px-5 py-3 text-center text-sm"
      >
        Find Equivalent Cut
      </button>
      <p className="text-center text-xs text-[var(--text-muted)]">
        Works across US, Brazil, France, Argentina, UK, Mexico and more
      </p>
    </form>
  );
}

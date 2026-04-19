"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { RegionSlug } from "@/lib/types";
import { getCutsByRegion, type DatasetCutOption } from "@/lib/cuts";
import { pairSegment } from "@/lib/pairRoute";
import { regionLabel } from "@/lib/regions";
import { slugifyCut } from "@/utils/normalize";
import { CutSelect } from "@/components/CutSelect";
import { CountrySelector } from "@/components/CountrySelector";

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
      className="cut-glass-form mx-auto flex w-full max-w-xl flex-col gap-6 p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <CountrySelector
          id="from-region"
          label="From country"
          value={from}
          onChange={setFrom}
        />
        <CountrySelector
          id="to-region"
          label="To country"
          value={to}
          onChange={setTo}
        />
      </div>

      <CutSelect
        id="cut-select"
        label="Cut"
        placeholder={placeholderLabel}
        options={cuts}
        value={selectedCut}
        onChange={setSelectedCut}
      />

      <button
        type="submit"
        disabled={!selectedCut || from === to}
        className="cut-btn-cta px-5 py-3 text-center text-sm"
      >
        Find Equivalent Cut
      </button>
      <p className="text-center text-sm text-[var(--fg-ink-muted)]">
        Works across US, Brazil, France, Argentina, UK, Mexico and more
      </p>
    </form>
  );
}

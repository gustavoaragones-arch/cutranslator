"use client";

import { REGIONS } from "@/lib/regions";
import type { RegionSlug } from "@/lib/types";

type Props = {
  id: string;
  label: string;
  value: RegionSlug;
  onChange: (v: RegionSlug) => void;
  disabled?: boolean;
};

export function RegionSelector({
  id,
  label,
  value,
  onChange,
  disabled,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-stone-700 dark:text-stone-300"
      >
        {label}
      </label>
      <select
        id={id}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value as RegionSlug)}
        className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 disabled:opacity-60 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
      >
        {REGIONS.map((r) => (
          <option key={r.slug} value={r.slug}>
            {r.label}
          </option>
        ))}
      </select>
    </div>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { RegionSlug } from "@/lib/types";
import { REGIONS } from "@/lib/regions";
import { GroupedDropdown } from "./GroupedDropdown";
import type { RegionForSelector } from "./types";

type Props = {
  id: string;
  label: string;
  value: RegionSlug;
  onChange: (v: RegionSlug) => void;
  disabled?: boolean;
};

const SELECTOR_REGIONS: readonly RegionForSelector[] = REGIONS;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CountrySelector({ id, label, value, onChange, disabled }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const labelId = `${id}-label`;

  const currentRegion = SELECTOR_REGIONS.find((r) => r.slug === value);
  const currentLabel = currentRegion?.label ?? String(value);
  const currentFlag = currentRegion?.flag ?? "";

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (open && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  function handleTriggerKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) setOpen((o) => !o);
    }
    if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className="relative flex flex-col gap-2" ref={wrapRef}>
      <label
        id={labelId}
        htmlFor={id}
        className="text-sm font-medium text-[var(--text-primary)]"
      >
        {label}
      </label>
      <button
        type="button"
        id={id}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        className="cut-select-trigger px-4 py-3 transition"
        onClick={() => !disabled && setOpen((o) => !o)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="flex min-w-0 items-center gap-2">
          {currentFlag && (
            <span className="shrink-0 text-base leading-none" aria-hidden>
              {currentFlag}
            </span>
          )}
          <span className="truncate">{currentLabel}</span>
        </span>
        <Chevron open={open} />
      </button>
      {open && (
        <GroupedDropdown
          labelId={labelId}
          regions={SELECTOR_REGIONS}
          value={value}
          onSelect={(slug) => {
            onChange(slug);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

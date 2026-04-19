"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { RegionSlug } from "@/lib/types";
import { SearchInput } from "./SearchInput";
import { useCountryFilter } from "./useCountryFilter";
import type { RegionForSelector } from "./types";

type Props = {
  labelId: string;
  regions: readonly RegionForSelector[];
  value: RegionSlug;
  onSelect: (slug: RegionSlug) => void;
  onClose: () => void;
};

export function GroupedDropdown({ labelId, regions, value, onSelect, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const grouped = useCountryFilter(regions, query);
  const flatOptions = grouped.flatMap((g) => g.regions);

  // Auto-focus search on desktop only
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      searchRef.current?.focus();
    }
  }, []);

  // Reset highlight when query changes
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [query]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex < 0) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${highlightedIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex]);

  const highlightedOptionId =
    highlightedIndex >= 0 && flatOptions[highlightedIndex]
      ? `cselector-opt-${flatOptions[highlightedIndex].slug}`
      : undefined;

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        onClose();
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, flatOptions.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((i) => (i <= 0 ? 0 : i - 1));
        break;
      case "Enter":
        if (highlightedIndex >= 0 && flatOptions[highlightedIndex]) {
          e.preventDefault();
          onSelect(flatOptions[highlightedIndex].slug);
        }
        break;
      case "PageDown": {
        e.preventDefault();
        let count = 0;
        for (const g of grouped) {
          const groupEnd = count + g.regions.length - 1;
          if (highlightedIndex <= groupEnd) {
            setHighlightedIndex(Math.min(groupEnd + 1, flatOptions.length - 1));
            return;
          }
          count += g.regions.length;
        }
        break;
      }
      case "PageUp": {
        e.preventDefault();
        let count = 0;
        let prevStart = 0;
        for (const g of grouped) {
          if (highlightedIndex < count + g.regions.length) {
            setHighlightedIndex(highlightedIndex <= count ? prevStart : count);
            return;
          }
          prevStart = count;
          count += g.regions.length;
        }
        break;
      }
    }
  }

  // Pre-compute per-group offsets so render is mutation-free (safe under strict mode)
  const groupOffsets = grouped.reduce<number[]>((acc, g) => {
    acc.push(acc.length === 0 ? 0 : acc[acc.length - 1] + grouped[acc.length - 1].regions.length);
    return acc;
  }, []);

  return (
    <div className="cselector-panel" onKeyDown={handleKeyDown}>
      {/* Mobile-only header */}
      <div className="cselector-mobile-header">
        <button
          type="button"
          className="cselector-back-btn"
          onClick={onClose}
          aria-label="Close country selector"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <span className="text-sm font-semibold text-[var(--text-primary)]">Select country</span>
        <div className="w-16" />
      </div>

      {/* Pinned search */}
      <SearchInput
        ref={searchRef}
        value={query}
        onChange={setQuery}
        onKeyDown={handleKeyDown}
        comboboxId={listId}
        activeDescendant={highlightedOptionId}
      />

      {/* Options list */}
      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-labelledby={labelId}
        tabIndex={-1}
        className="cselector-options"
      >
        {grouped.length === 0 && (
          <li role="presentation" className="cselector-empty">
            No countries match &ldquo;{query}&rdquo;
          </li>
        )}
        {grouped.map(({ group, regions: groupRegions }, gi) => (
          <li key={group.id} role="presentation">
            <div
              className="cselector-group-header"
              role="presentation"
              aria-hidden
            >
              <span>{group.icon}</span>
              <span>{group.label}</span>
              <span className="cselector-group-count">({groupRegions.length})</span>
            </div>
            {groupRegions.map((region, i) => {
              const idx = groupOffsets[gi] + i;
              const isSelected = value === region.slug;
              const isHighlighted = highlightedIndex === idx;
              return (
                <button
                  key={region.slug}
                  id={`cselector-opt-${region.slug}`}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  aria-label={`${region.label}, ${group.label}`}
                  data-idx={idx}
                  className={`cut-select-option cselector-option${isHighlighted ? " cselector-option--highlighted" : ""}`}
                  onClick={() => onSelect(region.slug)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                >
                  <span className={`cut-select-check ${isSelected ? "" : "opacity-0"}`} aria-hidden>
                    ✓
                  </span>
                  <span className="cselector-flag" aria-hidden>
                    {region.flag}
                  </span>
                  <span>{region.label}</span>
                </button>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}

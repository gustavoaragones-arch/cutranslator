"use client";

import { forwardRef } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  comboboxId?: string;
  activeDescendant?: string;
};

export const SearchInput = forwardRef<HTMLInputElement, Props>(function SearchInput(
  { value, onChange, onKeyDown, comboboxId, activeDescendant },
  ref,
) {
  return (
    <div className="cselector-search-wrap">
      <svg
        className="cselector-search-icon"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
      <input
        ref={ref}
        type="text"
        role="combobox"
        aria-expanded="true"
        aria-autocomplete="list"
        aria-controls={comboboxId}
        aria-activedescendant={activeDescendant}
        autoComplete="off"
        spellCheck={false}
        placeholder="Search countries..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="cselector-search-input"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="cselector-search-clear"
          aria-label="Clear search"
          tabIndex={-1}
        >
          ×
        </button>
      )}
    </div>
  );
});

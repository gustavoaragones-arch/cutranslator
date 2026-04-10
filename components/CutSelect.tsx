"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { DatasetCutOption } from "@/lib/cuts";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  options: readonly DatasetCutOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

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

export function CutSelect({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const labelId = `${id}-label`;

  const currentLabel =
    value && options.some((o) => o.name === value)
      ? (options.find((o) => o.name === value)?.name ?? value)
      : null;

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

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const empty = options.length === 0;
  const triggerDisabled = disabled || empty;

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
        disabled={triggerDisabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        className="cut-select-trigger px-4 py-3 transition"
        onClick={() => !triggerDisabled && setOpen((o) => !o)}
      >
        <span
          className={`min-w-0 truncate ${currentLabel ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}
        >
          {currentLabel ?? placeholder}
        </span>
        <Chevron open={open} />
      </button>
      {open && !empty ? (
        <ul
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={labelId}
          className="cut-select-panel cut-select-panel-cuts"
        >
          {options.map((cut) => {
            const selected = value === cut.name;
            return (
              <li key={cut.name.toLowerCase()} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className="cut-select-option"
                  onClick={() => {
                    onChange(cut.name);
                    setOpen(false);
                  }}
                >
                  <span
                    className={`cut-select-check ${selected ? "" : "opacity-0"}`}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{cut.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export type AdSlotPosition = "after_result" | "mid_content" | "footer";

/** Reserved height (Tailwind) to reduce CLS before the ad fills. */
const SLOT_MIN_HEIGHT: Record<AdSlotPosition, string> = {
  after_result: "min-h-[280px]",
  mid_content: "min-h-[250px]",
  footer: "min-h-[250px]",
};

function getClientId(): string | undefined {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim();
}

function getSlotId(position: AdSlotPosition): string | undefined {
  const map = {
    after_result: process.env.NEXT_PUBLIC_ADSENSE_SLOT_AFTER_RESULT,
    mid_content: process.env.NEXT_PUBLIC_ADSENSE_SLOT_MID_CONTENT,
    footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER,
  } as const;
  return map[position]?.trim();
}

let adsenseScriptPromise: Promise<void> | null = null;

function loadAdsenseScript(clientId: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (adsenseScriptPromise) return adsenseScriptPromise;

  adsenseScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
    );
    if (existing) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(clientId)}`;
    s.crossOrigin = "anonymous";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("AdSense script failed to load"));
    document.head.appendChild(s);
  });

  return adsenseScriptPromise;
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type Props = {
  position: AdSlotPosition;
  className?: string;
};

/**
 * Responsive AdSense container. Lazy-fills when the slot enters the viewport.
 * Disabled in development. Without client + slot env vars, renders a reserved box only.
 */
export function AdSlot({ position, className = "" }: Props) {
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);
  const [inView, setInView] = useState(false);

  const isDev = process.env.NODE_ENV === "development";
  const clientId = getClientId();
  const slotId = getSlotId(position);
  const configured = Boolean(clientId && slotId);

  useEffect(() => {
    if (isDev || !configured || !insRef.current) return;
    const el = insRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: "200px 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isDev, configured]);

  useEffect(() => {
    if (isDev || !configured || !inView || pushedRef.current || !clientId || !slotId) {
      return;
    }
    const ins = insRef.current;
    if (!ins) return;

    let cancelled = false;
    void (async () => {
      try {
        await loadAdsenseScript(clientId);
        if (cancelled) return;
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        pushedRef.current = true;
      } catch {
        /* ignore */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isDev, configured, inView, clientId, slotId]);

  if (isDev) {
    return null;
  }

  const shellClass = `adsense-slot cut-ad-slot-shell mx-auto w-full max-w-3xl overflow-hidden rounded-xl ${SLOT_MIN_HEIGHT[position]} my-8 ${className}`;

  if (!configured) {
    return (
      <div className={`${shellClass} cut-ad-slot-shell--placeholder`} aria-hidden />
    );
  }

  return (
    <div className={shellClass}>
      <ins
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

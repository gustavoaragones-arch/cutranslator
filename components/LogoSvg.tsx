type Props = {
  className?: string;
};

/** Inline SVG cow silhouette used in the light header logo. */
function CowSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 130"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      {/* Body */}
      <ellipse cx="128" cy="70" rx="72" ry="36" />
      {/* Rump (slightly raised rear) */}
      <ellipse cx="190" cy="62" rx="22" ry="28" />
      {/* Head */}
      <ellipse cx="54" cy="54" rx="30" ry="24" />
      {/* Neck connection */}
      <path d="M68 44 Q82 38 90 46 Q88 56 80 62 Q70 64 64 60 Z" />
      {/* Muzzle */}
      <ellipse cx="30" cy="58" rx="16" ry="12" />
      {/* Nostril bump */}
      <ellipse cx="18" cy="62" rx="7" ry="5" />
      {/* Ear */}
      <ellipse cx="50" cy="33" rx="8" ry="13" transform="rotate(-15 50 33)" />
      {/* Horn */}
      <path d="M60 35 Q66 22 74 20 Q72 26 66 32 Z" />
      {/* Forelegs */}
      <rect x="82" y="100" width="12" height="28" rx="5" />
      <rect x="100" y="102" width="12" height="26" rx="5" />
      {/* Hindlegs */}
      <rect x="148" y="100" width="12" height="28" rx="5" />
      <rect x="168" y="100" width="12" height="26" rx="5" />
      {/* Tail */}
      <path
        d="M205 58 C218 50 220 38 214 30"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Tail tuft */}
      <ellipse cx="213" cy="28" rx="6" ry="8" transform="rotate(-20 213 28)" />
      {/* Udder */}
      <ellipse cx="138" cy="106" rx="18" ry="9" />
    </svg>
  );
}

export function LogoSvg({ className }: Props) {
  return (
    <div className={`logo-svg-wrap ${className ?? ""}`}>
      <div className="logo-svg-inner">
        <CowSilhouette className="logo-cow" />
        <div className="logo-text-block">
          <span className="logo-wordmark">cutranslator</span>
          <span className="logo-tagline">International Beef Cuts Converter</span>
        </div>
      </div>
    </div>
  );
}

/** Standalone cow silhouette — for the light/dark transition divider. */
export function CowSilhouetteDivider({ className }: { className?: string }) {
  return <CowSilhouette className={className} />;
}

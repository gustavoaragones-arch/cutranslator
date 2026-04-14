import { getDonenessComparison } from "@/lib/doneness";

type Props = {
  sourceRegion: string;
  targetRegion: string;
  sourceCountryName: string;
  targetCountryName: string;
};

export function DonenessGuide({
  sourceRegion,
  targetRegion,
  sourceCountryName,
  targetCountryName,
}: Props) {
  const levels = getDonenessComparison(sourceRegion, targetRegion);
  const notes = levels.filter((l) => l.note);

  return (
    <section className="doneness-guide">
      <h3 className="doneness-guide-title">How to order steak doneness</h3>
      <p className="doneness-guide-subtitle">
        {sourceCountryName} → {targetCountryName}
      </p>
      <div className="doneness-table">
        {levels.map((level) => (
          <div key={level.id} className="doneness-row">
            <span className="doneness-level">
              {level.id.replace("_", " ")}
            </span>
            <span className="doneness-source">{level.sourceLabel}</span>
            <span className="doneness-arrow">→</span>
            <span className="doneness-target">{level.targetLabel}</span>
            <span className="doneness-temp">
              {level.temp[0]}–{level.temp[1]}°C
            </span>
          </div>
        ))}
      </div>
      {notes.length > 0 && (
        <div className="doneness-notes">
          {notes.map((l) => (
            <p key={l.id} className="doneness-note">
              {l.note}
            </p>
          ))}
        </div>
      )}
      <p className="doneness-disclaimer">
        Doneness terminology varies by country and restaurant. When unsure,
        describe what you want (e.g., &ldquo;warm red center&rdquo;).
      </p>
    </section>
  );
}

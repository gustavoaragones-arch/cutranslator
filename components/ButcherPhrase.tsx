import { getButcherPhrase } from "@/lib/butcher";

type Props = {
  canonicalId: string;
  targetRegion: string;
  targetCountryName: string;
};

export function ButcherPhrase({ canonicalId, targetRegion }: Props) {
  const phrase = getButcherPhrase(canonicalId, targetRegion);
  if (!phrase) return null;

  return (
    <div className="butcher-phrase">
      <h3 className="butcher-phrase-title">Say this at the butcher</h3>
      <blockquote className="butcher-phrase-text">
        &ldquo;{phrase.phrase}&rdquo;
      </blockquote>
      {phrase.notes && (
        <p className="butcher-phrase-note">{phrase.notes}</p>
      )}
    </div>
  );
}

import { butcherPhrases } from "@/data/butcherPhrases";

export function getButcherPhrase(canonicalId: string, region: string) {
  return (
    butcherPhrases.find(
      (p) => p.canonicalId === canonicalId && p.region === region,
    ) ?? null
  );
}

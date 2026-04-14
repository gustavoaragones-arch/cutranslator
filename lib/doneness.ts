import { donenessLevels } from "@/data/doneness";

export function getDonenessForRegion(region: string) {
  return donenessLevels.map((level) => ({
    id: level.id,
    label: level.labels[region] ?? level.labels["usa"],
    temp: level.temp_c,
    note: level.notes?.[region],
  }));
}

export function getDonenessComparison(sourceRegion: string, targetRegion: string) {
  return donenessLevels.map((level) => ({
    id: level.id,
    sourceLabel: level.labels[sourceRegion] ?? level.labels["usa"],
    targetLabel: level.labels[targetRegion] ?? level.labels["usa"],
    temp: level.temp_c,
    note: level.notes?.[targetRegion],
  }));
}

export const regions = [
  { id: "usa" as const, label: "United States" },
  { id: "canada" as const, label: "Canada" },
  { id: "brazil" as const, label: "Brazil" },
  { id: "france" as const, label: "France" },
  { id: "argentina" as const, label: "Argentina" },
  { id: "uk" as const, label: "United Kingdom" },
  { id: "chile" as const, label: "Chile" },
  { id: "spain" as const, label: "Spain" },
  { id: "mexico" as const, label: "Mexico" },
  { id: "uruguay" as const, label: "Uruguay" },
  { id: "paraguay" as const, label: "Paraguay" },
  { id: "colombia" as const, label: "Colombia" },
  { id: "germany" as const, label: "Germany" },
  { id: "italy" as const, label: "Italy" },
  { id: "portugal" as const, label: "Portugal" },
  { id: "netherlands" as const, label: "Netherlands" },
  { id: "denmark" as const, label: "Denmark" },
] as const;

export type RegionRecord = (typeof regions)[number];

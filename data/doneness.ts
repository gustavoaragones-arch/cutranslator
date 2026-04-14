export type DonenessLevel = {
  readonly id: string;
  readonly temp_c: readonly [number, number];
  readonly labels: Readonly<Record<string, string>>;
  readonly notes?: Readonly<Record<string, string>>;
};

export const donenessLevels: readonly DonenessLevel[] = [
  {
    id: "rare",
    temp_c: [48, 55],
    labels: {
      usa: "Rare",
      france: "Saignant",
      spain: "Poco hecho",
      argentina: "Jugoso",
      mexico: "Rojo",
      uk: "Rare",
      brazil: "Mal passada",
      chile: "A lo inglés",
      colombia: "Cruda",
      uruguay: "Jugoso",
      canada: "Rare",
    },
  },
  {
    id: "medium_rare",
    temp_c: [55, 60],
    labels: {
      usa: "Medium rare",
      france: "À point",
      spain: "Al punto",
      argentina: "A punto",
      mexico: "Término medio",
      uk: "Medium rare",
      brazil: "Ao ponto para mal",
      chile: "A punto",
      colombia: "Término medio",
      uruguay: "A punto",
      canada: "Medium rare",
    },
  },
  {
    id: "medium",
    temp_c: [60, 65],
    labels: {
      usa: "Medium",
      france: "Entre à point et bien cuit",
      spain: "En su punto",
      argentina: "Cocido",
      mexico: "Tres cuartos",
      uk: "Medium",
      brazil: "Ao ponto",
      chile: "Tres cuartos",
      colombia: "Tres cuartos",
      uruguay: "Cocido",
      canada: "Medium",
    },
  },
  {
    id: "well_done",
    temp_c: [70, 100],
    labels: {
      usa: "Well done",
      france: "Bien cuit",
      spain: "Muy hecho",
      argentina: "Bien cocido",
      mexico: "Bien cocido",
      uk: "Well done",
      brazil: "Bem passada",
      chile: "Bien cocido",
      colombia: "Bien asada",
      uruguay: "Bien cocido",
      canada: "Well done",
    },
    notes: {
      france: "Most French steaks are served rare (saignant) by default. Asking for bien cuit may surprise your waiter.",
      argentina: "Argentine asado is often cooked more thoroughly than US or French preferences. Well done is not unusual.",
    },
  },
] as const;

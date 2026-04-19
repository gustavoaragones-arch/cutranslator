import type { RegionGroup } from "@/lib/types";

export const regions = [
  // Americas — North
  { id: "usa" as const, label: "United States", flag: "🇺🇸", group: "americas_north" as RegionGroup, aliases: ["us", "united states", "america"] as readonly string[] },
  { id: "canada" as const, label: "Canada", flag: "🇨🇦", group: "americas_north" as RegionGroup },
  { id: "mexico" as const, label: "Mexico", flag: "🇲🇽", group: "americas_north" as RegionGroup },

  // Americas — Central
  { id: "panama" as const, label: "Panama", flag: "🇵🇦", group: "americas_central" as RegionGroup },
  { id: "costa_rica" as const, label: "Costa Rica", flag: "🇨🇷", group: "americas_central" as RegionGroup },
  { id: "nicaragua" as const, label: "Nicaragua", flag: "🇳🇮", group: "americas_central" as RegionGroup },
  { id: "honduras" as const, label: "Honduras", flag: "🇭🇳", group: "americas_central" as RegionGroup },
  { id: "el_salvador" as const, label: "El Salvador", flag: "🇸🇻", group: "americas_central" as RegionGroup },
  { id: "guatemala" as const, label: "Guatemala", flag: "🇬🇹", group: "americas_central" as RegionGroup },

  // Americas — South
  { id: "brazil" as const, label: "Brazil", flag: "🇧🇷", group: "americas_south" as RegionGroup },
  { id: "argentina" as const, label: "Argentina", flag: "🇦🇷", group: "americas_south" as RegionGroup },
  { id: "chile" as const, label: "Chile", flag: "🇨🇱", group: "americas_south" as RegionGroup },
  { id: "uruguay" as const, label: "Uruguay", flag: "🇺🇾", group: "americas_south" as RegionGroup },
  { id: "paraguay" as const, label: "Paraguay", flag: "🇵🇾", group: "americas_south" as RegionGroup },
  { id: "colombia" as const, label: "Colombia", flag: "🇨🇴", group: "americas_south" as RegionGroup },
  { id: "venezuela" as const, label: "Venezuela", flag: "🇻🇪", group: "americas_south" as RegionGroup },
  { id: "peru" as const, label: "Peru", flag: "🇵🇪", group: "americas_south" as RegionGroup },
  { id: "bolivia" as const, label: "Bolivia", flag: "🇧🇴", group: "americas_south" as RegionGroup },
  { id: "ecuador" as const, label: "Ecuador", flag: "🇪🇨", group: "americas_south" as RegionGroup },

  // Europe — Western
  { id: "france" as const, label: "France", flag: "🇫🇷", group: "europe_western" as RegionGroup },
  { id: "germany" as const, label: "Germany", flag: "🇩🇪", group: "europe_western" as RegionGroup },
  { id: "italy" as const, label: "Italy", flag: "🇮🇹", group: "europe_western" as RegionGroup },
  { id: "spain" as const, label: "Spain", flag: "🇪🇸", group: "europe_western" as RegionGroup },
  { id: "portugal" as const, label: "Portugal", flag: "🇵🇹", group: "europe_western" as RegionGroup },
  { id: "netherlands" as const, label: "Netherlands", flag: "🇳🇱", group: "europe_western" as RegionGroup },
  { id: "belgium" as const, label: "Belgium", flag: "🇧🇪", group: "europe_western" as RegionGroup },
  { id: "uk" as const, label: "United Kingdom", flag: "🇬🇧", group: "europe_western" as RegionGroup, aliases: ["britain", "great britain", "united kingdom", "england"] as readonly string[] },
  { id: "ireland" as const, label: "Ireland", flag: "🇮🇪", group: "europe_western" as RegionGroup },
  { id: "switzerland" as const, label: "Switzerland", flag: "🇨🇭", group: "europe_western" as RegionGroup },

  // Europe — Nordic
  { id: "denmark" as const, label: "Denmark", flag: "🇩🇰", group: "europe_nordic" as RegionGroup },
  { id: "norway" as const, label: "Norway", flag: "🇳🇴", group: "europe_nordic" as RegionGroup },
  { id: "sweden" as const, label: "Sweden", flag: "🇸🇪", group: "europe_nordic" as RegionGroup },
  { id: "finland" as const, label: "Finland", flag: "🇫🇮", group: "europe_nordic" as RegionGroup },

  // Europe — Central
  { id: "austria" as const, label: "Austria", flag: "🇦🇹", group: "europe_central" as RegionGroup },
  { id: "czechia" as const, label: "Czech Republic", flag: "🇨🇿", group: "europe_central" as RegionGroup, aliases: ["czech", "czech republic"] as readonly string[] },
  { id: "slovakia" as const, label: "Slovakia", flag: "🇸🇰", group: "europe_central" as RegionGroup },
  { id: "hungary" as const, label: "Hungary", flag: "🇭🇺", group: "europe_central" as RegionGroup },
  { id: "poland" as const, label: "Poland", flag: "🇵🇱", group: "europe_central" as RegionGroup },

  // Europe — Balkans
  { id: "slovenia" as const, label: "Slovenia", flag: "🇸🇮", group: "europe_balkans" as RegionGroup },
  { id: "croatia" as const, label: "Croatia", flag: "🇭🇷", group: "europe_balkans" as RegionGroup },
  { id: "bosnia" as const, label: "Bosnia & Herzegovina", flag: "🇧🇦", group: "europe_balkans" as RegionGroup },
  { id: "montenegro" as const, label: "Montenegro", flag: "🇲🇪", group: "europe_balkans" as RegionGroup },
  { id: "albania" as const, label: "Albania", flag: "🇦🇱", group: "europe_balkans" as RegionGroup },
  { id: "north_macedonia" as const, label: "North Macedonia", flag: "🇲🇰", group: "europe_balkans" as RegionGroup, aliases: ["macedonia", "fyrom"] as readonly string[] },
  { id: "romania" as const, label: "Romania", flag: "🇷🇴", group: "europe_balkans" as RegionGroup },
  { id: "bulgaria" as const, label: "Bulgaria", flag: "🇧🇬", group: "europe_balkans" as RegionGroup },
  { id: "greece" as const, label: "Greece", flag: "🇬🇷", group: "europe_balkans" as RegionGroup },

  // Europe — Eastern & Baltic
  { id: "estonia" as const, label: "Estonia", flag: "🇪🇪", group: "europe_eastern_baltic" as RegionGroup },
  { id: "latvia" as const, label: "Latvia", flag: "🇱🇻", group: "europe_eastern_baltic" as RegionGroup },
  { id: "lithuania" as const, label: "Lithuania", flag: "🇱🇹", group: "europe_eastern_baltic" as RegionGroup },
  { id: "belarus" as const, label: "Belarus", flag: "🇧🇾", group: "europe_eastern_baltic" as RegionGroup },
  { id: "russia" as const, label: "Russia", flag: "🇷🇺", group: "europe_eastern_baltic" as RegionGroup },
  { id: "ukraine" as const, label: "Ukraine", flag: "🇺🇦", group: "europe_eastern_baltic" as RegionGroup },

  // MENA
  { id: "turkey" as const, label: "Turkey", flag: "🇹🇷", group: "mena" as RegionGroup },
  { id: "israel" as const, label: "Israel", flag: "🇮🇱", group: "mena" as RegionGroup },
  { id: "egypt" as const, label: "Egypt", flag: "🇪🇬", group: "mena" as RegionGroup },
  { id: "morocco" as const, label: "Morocco", flag: "🇲🇦", group: "mena" as RegionGroup },
  { id: "iran" as const, label: "Iran", flag: "🇮🇷", group: "mena" as RegionGroup },
  { id: "saudi_arabia" as const, label: "Saudi Arabia", flag: "🇸🇦", group: "mena" as RegionGroup, aliases: ["ksa", "saudi"] as readonly string[] },
  { id: "qatar" as const, label: "Qatar", flag: "🇶🇦", group: "mena" as RegionGroup },
  { id: "uae" as const, label: "UAE", flag: "🇦🇪", group: "mena" as RegionGroup, aliases: ["united arab emirates", "emirates", "dubai"] as readonly string[] },

  // Central Asia
  { id: "kazakhstan" as const, label: "Kazakhstan", flag: "🇰🇿", group: "central_asia" as RegionGroup },
  { id: "uzbekistan" as const, label: "Uzbekistan", flag: "🇺🇿", group: "central_asia" as RegionGroup },
] as const;

export type RegionRecord = (typeof regions)[number];

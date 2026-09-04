/**
 * Spanish-language regions — when the source region is one
 * of these, generate page content in Spanish.
 */
export const SPANISH_LANGUAGE_REGIONS = new Set([
  "spain", "mexico", "argentina", "colombia", "chile",
  "uruguay", "paraguay", "peru", "bolivia", "ecuador",
  "venezuela", "cuba", "dominican_republic", "puerto_rico",
  "costa_rica", "panama", "guatemala", "honduras",
  "el_salvador", "nicaragua", "belize",
]);

export function isSpanishRoute(fromRegion: string): boolean {
  return SPANISH_LANGUAGE_REGIONS.has(fromRegion);
}

/**
 * Spanish region display names for use in page content.
 * Falls back to the English label if not defined.
 */
const SPANISH_REGION_NAMES: Record<string, string> = {
  spain: "España",
  mexico: "México",
  argentina: "Argentina",
  colombia: "Colombia",
  chile: "Chile",
  uruguay: "Uruguay",
  paraguay: "Paraguay",
  peru: "Perú",
  bolivia: "Bolivia",
  ecuador: "Ecuador",
  venezuela: "Venezuela",
  cuba: "Cuba",
  dominican_republic: "República Dominicana",
  puerto_rico: "Puerto Rico",
  costa_rica: "Costa Rica",
  panama: "Panamá",
  guatemala: "Guatemala",
  honduras: "Honduras",
  el_salvador: "El Salvador",
  nicaragua: "Nicaragua",
  belize: "Belice",
  usa: "Estados Unidos",
  uk: "Reino Unido",
  france: "Francia",
  germany: "Alemania",
  italy: "Italia",
  brazil: "Brasil",
  australia: "Australia",
  canada: "Canadá",
  japan: "Japón",
  china: "China",
  south_korea: "Corea del Sur",
  portugal: "Portugal",
};

export function regionLabelEs(slug: string): string {
  return SPANISH_REGION_NAMES[slug] ?? slug;
}

/**
 * Spanish equivalent of generateAIAnswer.
 * Returns primary answer string and FAQ pairs in Spanish.
 */
export function generateSpanishAnswer(
  inputDisplay: string,
  canonical: { primal: string },
  targetRegion: string,
  options: {
    inputRegion: string;
    targetLabels: string[];
    entityTerm: string;
  },
): string {
  const sourcePlace = regionLabelEs(options.inputRegion);
  const targetPlace = regionLabelEs(targetRegion);
  const labels = options.targetLabels.filter(Boolean).slice(0, 4);
  const top = labels[0] ?? options.entityTerm;
  const rest = labels.slice(1);
  const listSuffix =
    rest.length === 1
      ? ` o ${rest[0]}`
      : rest.length > 1
        ? `, ${rest.slice(0, -1).join(", ")} o ${rest[rest.length - 1]}`
        : "";

  return `${inputDisplay} es el nombre comercial en ${sourcePlace} para el corte conocido como ${options.entityTerm}, ubicado en el corte primal ${canonical.primal}. En ${targetPlace}, el mismo corte se conoce principalmente como ${top}${listSuffix}.`;
}

/**
 * Generate Spanish FAQ pairs for structured data.
 */
export function generateSpanishFaq(options: {
  cutDisplay: string;
  fromRegion: string;
  toRegion: string;
  targetLabels: string[];
  entityTerm: string;
  primal: string;
  aiPrimary: string;
  hasAlternatives: boolean;
  alternativeNames: string[];
}): Array<{ question: string; answer: string }> {
  const targetPlace = regionLabelEs(options.toRegion);
  const sourcePlace = regionLabelEs(options.fromRegion);
  const top = options.targetLabels[0] ?? options.entityTerm;

  const faq: Array<{ question: string; answer: string }> = [];

  faq.push({
    question: `¿Cómo se llama ${options.cutDisplay} en ${targetPlace}?`,
    answer: options.aiPrimary,
  });

  faq.push({
    question: `¿Cuál es el equivalente de ${options.cutDisplay} en ${targetPlace}?`,
    answer: `En ${targetPlace}, busca ${top} — es el corte equivalente al ${options.cutDisplay} de ${sourcePlace}.`,
  });

  faq.push({
    question: `¿De qué parte de la vaca es el ${options.cutDisplay}?`,
    answer: `El ${options.cutDisplay} proviene del corte primal ${options.primal} (${options.entityTerm}).`,
  });

  if (options.hasAlternatives) {
    faq.push({
      question: `¿Puede ${options.cutDisplay} referirse a más de un corte?`,
      answer: `Este nombre puede coincidir también con ${options.alternativeNames.join(", ")} en este sistema — revisa las alternativas abajo.`,
    });
  }

  return faq;
}

/**
 * Generate Spanish page title and meta description.
 */
export function generateSpanishMeta(
  cutDisplay: string,
  fromRegion: string,
  toRegion: string,
  targetLabels: string[],
): { title: string; description: string } {
  const targetPlace = regionLabelEs(toRegion);
  const sourcePlace = regionLabelEs(fromRegion);
  const top = targetLabels[0];

  const title = top
    ? `¿Cómo se llama ${cutDisplay} en ${targetPlace}? → ${top}`
    : `${cutDisplay} en ${targetPlace}`;

  const description = top
    ? `${cutDisplay} en ${targetPlace} se conoce como ${top}. Traducción de cortes de carne de ${sourcePlace} a ${targetPlace} con guía de carnicería.`
    : `Traducción del corte ${cutDisplay} de ${sourcePlace} a ${targetPlace}. Guía completa de cortes de carne internacionales.`;

  return { title, description };
}

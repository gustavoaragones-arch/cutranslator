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

/**
 * French-language regions — when the source region is one
 * of these, generate page content in French.
 */
export const FRENCH_LANGUAGE_REGIONS = new Set([
  "france", "quebec", "belgium", "switzerland",
  "cote_divoire", "cameroon", "drc", "haiti",
]);

export function isFrenchRoute(fromRegion: string): boolean {
  return FRENCH_LANGUAGE_REGIONS.has(fromRegion);
}

/**
 * French region display names for use in page content.
 * Falls back to the English label if not defined.
 */
const FRENCH_REGION_NAMES: Record<string, string> = {
  france: "France",
  quebec: "Québec",
  belgium: "Belgique",
  switzerland: "Suisse",
  cote_divoire: "Côte d'Ivoire",
  cameroon: "Cameroun",
  drc: "RD Congo",
  haiti: "Haïti",
  usa: "États-Unis",
  uk: "Royaume-Uni",
  spain: "Espagne",
  germany: "Allemagne",
  italy: "Italie",
  brazil: "Brésil",
  australia: "Australie",
  canada: "Canada",
  japan: "Japon",
  argentina: "Argentine",
  portugal: "Portugal",
  mexico: "Mexique",
};

export function regionLabelFr(slug: string): string {
  return FRENCH_REGION_NAMES[slug] ?? slug;
}

/**
 * French equivalent of generateAIAnswer.
 * Returns primary answer string and FAQ pairs in French.
 */
export function generateFrenchAnswer(
  inputDisplay: string,
  canonical: { primal: string },
  targetRegion: string,
  options: {
    inputRegion: string;
    targetLabels: string[];
    entityTerm: string;
  },
): string {
  const sourcePlace = regionLabelFr(options.inputRegion);
  const targetPlace = regionLabelFr(targetRegion);
  const labels = options.targetLabels.filter(Boolean).slice(0, 4);
  const top = labels[0] ?? options.entityTerm;
  const rest = labels.slice(1);
  const listSuffix =
    rest.length === 1
      ? ` ou ${rest[0]}`
      : rest.length > 1
        ? `, ${rest.slice(0, -1).join(", ")} ou ${rest[rest.length - 1]}`
        : "";

  return `${inputDisplay} est le nom commercial en ${sourcePlace} pour le morceau connu sous le nom de ${options.entityTerm}, situé dans le primal ${canonical.primal}. En ${targetPlace}, le même morceau est principalement appelé ${top}${listSuffix}.`;
}

/**
 * Generate French FAQ pairs for structured data.
 */
export function generateFrenchFaq(options: {
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
  const targetPlace = regionLabelFr(options.toRegion);
  const sourcePlace = regionLabelFr(options.fromRegion);
  const top = options.targetLabels[0] ?? options.entityTerm;

  const faq: Array<{ question: string; answer: string }> = [];

  faq.push({
    question: `Comment s'appelle ${options.cutDisplay} en ${targetPlace}?`,
    answer: options.aiPrimary,
  });

  faq.push({
    question: `Quel est l'équivalent de ${options.cutDisplay} en ${targetPlace}?`,
    answer: `En ${targetPlace}, cherchez ${top} — c'est le morceau équivalent au ${options.cutDisplay} de ${sourcePlace}.`,
  });

  faq.push({
    question: `De quelle partie de la vache vient le ${options.cutDisplay}?`,
    answer: `Le ${options.cutDisplay} provient du primal ${options.primal} (${options.entityTerm}).`,
  });

  if (options.hasAlternatives) {
    faq.push({
      question: `Est-ce que ${options.cutDisplay} peut désigner plus d'un morceau?`,
      answer: `Ce nom peut également correspondre à ${options.alternativeNames.join(", ")} dans ce système — consultez les alternatives ci-dessous.`,
    });
  }

  return faq;
}

/**
 * Generate French page title and meta description.
 */
export function generateFrenchMeta(
  cutDisplay: string,
  fromRegion: string,
  toRegion: string,
  targetLabels: string[],
): { title: string; description: string } {
  const targetPlace = regionLabelFr(toRegion);
  const sourcePlace = regionLabelFr(fromRegion);
  const top = targetLabels[0];

  const title = top
    ? `Comment s'appelle ${cutDisplay} en ${targetPlace}? → ${top}`
    : `${cutDisplay} en ${targetPlace}`;

  const description = top
    ? `${cutDisplay} en ${targetPlace} se nomme ${top}. Traduction de morceaux de bœuf de ${sourcePlace} vers ${targetPlace}.`
    : `Traduction du morceau ${cutDisplay} de ${sourcePlace} vers ${targetPlace}.`;

  return { title, description };
}

/**
 * Portuguese-language regions — when the source region is one
 * of these, generate page content in Portuguese.
 */
export const PORTUGUESE_LANGUAGE_REGIONS = new Set([
  "brazil", "portugal", "angola", "mozambique",
]);

export function isPortugueseRoute(fromRegion: string): boolean {
  return PORTUGUESE_LANGUAGE_REGIONS.has(fromRegion);
}

/**
 * Portuguese region display names for use in page content.
 * Falls back to the English label if not defined.
 */
const PORTUGUESE_REGION_NAMES: Record<string, string> = {
  brazil: "Brasil",
  portugal: "Portugal",
  angola: "Angola",
  mozambique: "Moçambique",
  usa: "Estados Unidos",
  uk: "Reino Unido",
  france: "França",
  germany: "Alemanha",
  italy: "Itália",
  spain: "Espanha",
  australia: "Austrália",
  canada: "Canadá",
  japan: "Japão",
  argentina: "Argentina",
  uruguay: "Uruguai",
  chile: "Chile",
};

export function regionLabelPt(slug: string): string {
  return PORTUGUESE_REGION_NAMES[slug] ?? slug;
}

/**
 * Portuguese equivalent of generateAIAnswer.
 * Returns primary answer string and FAQ pairs in Portuguese.
 */
export function generatePortugueseAnswer(
  inputDisplay: string,
  canonical: { primal: string },
  targetRegion: string,
  options: {
    inputRegion: string;
    targetLabels: string[];
    entityTerm: string;
  },
): string {
  const sourcePlace = regionLabelPt(options.inputRegion);
  const targetPlace = regionLabelPt(targetRegion);
  const labels = options.targetLabels.filter(Boolean).slice(0, 4);
  const top = labels[0] ?? options.entityTerm;
  const rest = labels.slice(1);
  const listSuffix =
    rest.length === 1
      ? ` ou ${rest[0]}`
      : rest.length > 1
        ? `, ${rest.slice(0, -1).join(", ")} ou ${rest[rest.length - 1]}`
        : "";

  return `${inputDisplay} é o nome comercial em ${sourcePlace} para o corte conhecido como ${options.entityTerm}, localizado no corte primal ${canonical.primal}. Em ${targetPlace}, o mesmo corte é chamado principalmente de ${top}${listSuffix}.`;
}

/**
 * Generate Portuguese FAQ pairs for structured data.
 */
export function generatePortugueseFaq(options: {
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
  const targetPlace = regionLabelPt(options.toRegion);
  const sourcePlace = regionLabelPt(options.fromRegion);
  const top = options.targetLabels[0] ?? options.entityTerm;

  const faq: Array<{ question: string; answer: string }> = [];

  faq.push({
    question: `Como se chama ${options.cutDisplay} em ${targetPlace}?`,
    answer: options.aiPrimary,
  });

  faq.push({
    question: `Qual é o equivalente de ${options.cutDisplay} em ${targetPlace}?`,
    answer: `Em ${targetPlace}, procure por ${top} — é o corte equivalente ao ${options.cutDisplay} de ${sourcePlace}.`,
  });

  faq.push({
    question: `De qual parte da vaca vem o ${options.cutDisplay}?`,
    answer: `O ${options.cutDisplay} vem do corte primal ${options.primal} (${options.entityTerm}).`,
  });

  if (options.hasAlternatives) {
    faq.push({
      question: `O nome ${options.cutDisplay} pode se referir a mais de um corte?`,
      answer: `Este nome pode coincidir com ${options.alternativeNames.join(", ")} neste sistema — veja as alternativas abaixo.`,
    });
  }

  return faq;
}

/**
 * Generate Portuguese page title and meta description.
 */
export function generatePortugueseMeta(
  cutDisplay: string,
  fromRegion: string,
  toRegion: string,
  targetLabels: string[],
): { title: string; description: string } {
  const targetPlace = regionLabelPt(toRegion);
  const sourcePlace = regionLabelPt(fromRegion);
  const top = targetLabels[0];

  const title = top
    ? `Como se chama ${cutDisplay} em ${targetPlace}? → ${top}`
    : `${cutDisplay} em ${targetPlace}`;

  const description = top
    ? `${cutDisplay} em ${targetPlace} se chama ${top}. Tradução de cortes de carne de ${sourcePlace} para ${targetPlace}.`
    : `Tradução do corte ${cutDisplay} de ${sourcePlace} para ${targetPlace}.`;

  return { title, description };
}

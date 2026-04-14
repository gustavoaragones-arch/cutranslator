import { relatedByCanonical } from "@/data/clusters";
import { regionalNames } from "@/data/regionalNames";
import { regions } from "@/data/regions";
import { getCanonicalById, listCanonicalCuts } from "@/lib/canonical";
import {
  expandMapsTo,
  findRegionalEntriesByNormalizedKey,
  labelsForCanonical,
  representativeInputName,
} from "@/lib/mappings";
import { canonicalEntityTerm } from "@/lib/entities";
import { regionSlugsInOrder } from "@/lib/indexes";
import { pairSegment } from "@/lib/pairRoute";
import { regionH1Place, regionLabel } from "@/lib/regions";
import type {
  CanonicalCut,
  CanonicalId,
  RegionSlug,
  RegionalNameEntry,
} from "@/lib/types";
import { cutSlugToNormalizedKey, slugifyCut } from "@/utils/normalize";

const VS = "-vs-";

export type AIAnswerBundle = {
  primary: string;
  variants: string[];
};

/** Structured fields for linked “Quick Answer” UI on translation pages. */
export type TranslationAIParts = {
  cutDisplay: string;
  entityTerm: string;
  canonicalId: CanonicalId;
  primal: string;
  sourceRegionLabel: string;
  targetPlace: string;
  targetLabels: string[];
};

/**
 * Translation pages: 1–2 sentence extractable answer (AEO).
 * `inputDisplay` = regional surface name; `canonical` = resolved ontology row; `targetLabels` = target retail names.
 */
export function generateAIAnswer(
  inputDisplay: string,
  canonical: CanonicalCut,
  targetRegion: RegionSlug,
  options: { inputRegion: RegionSlug; targetLabels: string[] },
): AIAnswerBundle & { parts: TranslationAIParts } {
  const entityTerm = canonicalEntityTerm(canonical.id);
  const sourceRegionLabel = regionLabel(options.inputRegion);
  const targetPlace = regionH1Place(targetRegion);
  const raw = options.targetLabels.filter(Boolean).slice(0, 4);
  const labels = raw.length > 0 ? raw : [entityTerm];
  const top = labels[0];
  const rest = labels.slice(1);
  const listSuffix =
    rest.length === 1
      ? ` or ${rest[0]}`
      : rest.length > 1
        ? `, ${rest.slice(0, -1).join(", ")}, or ${rest[rest.length - 1]}`
        : "";

  const primary = `${inputDisplay} is the ${sourceRegionLabel} retail name for the ${entityTerm}, which sits on the ${canonical.primal} primal. In ${targetPlace}, the same cut is most often labeled ${top}${listSuffix}.`;

  const variants = [
    `In ${targetPlace} butchery, ${inputDisplay} (${sourceRegionLabel}) maps to ${entityTerm}.`,
    `${inputDisplay} corresponds to ${entityTerm} in this beef-cut ontology; typical ${targetPlace} labels include ${labels.join(", ")}.`,
  ];

  return {
    primary,
    variants,
    parts: {
      cutDisplay: inputDisplay,
      entityTerm,
      canonicalId: canonical.id,
      primal: canonical.primal,
      sourceRegionLabel,
      targetPlace,
      targetLabels: labels,
    },
  };
}

export function whatIsPath(cutSlug: string): string {
  return `/what-is/${cutSlug}`;
}

export function canonicalHubPath(canonicalId: CanonicalId): string {
  return `/cuts/${canonicalId}`;
}

export function comparePath(compareSlug: string): string {
  return `/compare/${compareSlug}`;
}

export function allWhatIsCutSlugs(): string[] {
  const set = new Set<string>();
  for (const m of regionalNames) {
    set.add(slugifyCut(m.name));
  }
  return [...set].sort();
}

/**
 * All valid [pair]/[cut] route params derived from the regional names dataset.
 * Each source cut is paired with every other region as the target.
 * Used by generateStaticParams so all translation pages are pre-rendered at
 * build time — required for fs-based SVG loading to work in the Cloudflare
 * Worker environment.
 */
export function allPairCutParams(): { pair: string; cut: string }[] {
  const seen = new Set<string>();
  const out: { pair: string; cut: string }[] = [];
  for (const m of regionalNames) {
    const cut = slugifyCut(m.name);
    for (const to of regionSlugsInOrder) {
      if ((to as string) === m.region) continue;
      const pair = pairSegment(m.region as RegionSlug, to);
      const key = `${pair}/${cut}`;
      if (!seen.has(key)) {
        seen.add(key);
        out.push({ pair, cut });
      }
    }
  }
  return out;
}

function allRetailNamesForCanonical(id: CanonicalId): string[] {
  const names: string[] = [];
  for (const m of regionalNames) {
    if (expandMapsTo(m.maps_to).includes(id)) names.push(m.name);
  }
  return names;
}

function canonicalIdsFromRegionalSlugPart(slugPart: string): CanonicalId[] {
  const key = cutSlugToNormalizedKey(slugPart);
  const entries = findRegionalEntriesByNormalizedKey(key);
  const ids = new Set<CanonicalId>();
  for (const e of entries) {
    for (const cid of expandMapsTo(e.maps_to)) ids.add(cid);
  }
  return [...ids].sort();
}

/** Slug resolves to exactly this canonical (not multi-mapping or another cut). */
function slugIdentifiesOnlyCanonical(slugPart: string, id: CanonicalId): boolean {
  const ids = canonicalIdsFromRegionalSlugPart(slugPart);
  return ids.length === 1 && ids[0] === id;
}

/** Short, stable slug for compare URLs (shortest unambiguous retail slug, else canonical id). */
export function preferredSlugForCanonical(id: CanonicalId): string {
  const names = allRetailNamesForCanonical(id);
  if (names.length === 0) return id.replace(/_/g, "-");
  const ranked = names
    .map((n) => ({ n, s: slugifyCut(n), len: slugifyCut(n).length }))
    .sort(
      (a, b) =>
        a.len - b.len || a.s.localeCompare(b.s, "en"),
    );
  const idSlug = id.replace(/_/g, "-");
  const idMatch = ranked.find((r) => r.s === idSlug);
  if (idMatch && slugIdentifiesOnlyCanonical(idMatch.s, id)) return idMatch.s;
  for (const r of ranked) {
    if (slugIdentifiesOnlyCanonical(r.s, id)) return r.s;
  }
  return idSlug;
}

function orderedCompareSlug(slugA: string, slugB: string): string {
  return slugA.localeCompare(slugB, "en") <= 0
    ? `${slugA}${VS}${slugB}`
    : `${slugB}${VS}${slugA}`;
}

export function compareSlugForCanonicalPair(
  a: CanonicalId,
  b: CanonicalId,
): string {
  const [c1, c2] = a < b ? [a, b] : [b, a];
  return orderedCompareSlug(
    preferredSlugForCanonical(c1),
    preferredSlugForCanonical(c2),
  );
}

export function allCompareSlugs(): string[] {
  const ids = listCanonicalCuts().map((c) => c.id);
  const out: string[] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      out.push(compareSlugForCanonicalPair(ids[i], ids[j]));
    }
  }
  return out.sort();
}

function buildCompareSlugIndex(): Map<string, readonly [CanonicalId, CanonicalId]> {
  const m = new Map<string, readonly [CanonicalId, CanonicalId]>();
  const ids = listCanonicalCuts().map((c) => c.id);
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const a = ids[i];
      const b = ids[j];
      const slug = compareSlugForCanonicalPair(a, b);
      const low = a < b ? a : b;
      const high = a < b ? b : a;
      m.set(slug, [low, high]);
    }
  }
  return m;
}

const compareSlugIndex = buildCompareSlugIndex();

/** Resolve compare URL slug to two canonical ids (static index + dynamic fallback). */
export function parseCompareSlugToPair(
  slug: string,
): { a: CanonicalId; b: CanonicalId } | null {
  const fromIndex = compareSlugIndex.get(slug);
  if (fromIndex) return { a: fromIndex[0], b: fromIndex[1] };

  const parts = slug.split(VS);
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
  const left = canonicalIdsFromRegionalSlugPart(parts[0]);
  const right = canonicalIdsFromRegionalSlugPart(parts[1]);
  if (left.length !== 1 || right.length !== 1) return null;
  const x = left[0];
  const y = right[0];
  if (x === y) return null;
  return x < y ? { a: x, b: y } : { a: y, b: x };
}

export function titleCaseCanonicalId(id: CanonicalId): string {
  return id
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function cookingCopyForCut(c: CanonicalCut): string {
  return `Typical methods include high-heat searing or grilling for steaks, resting before slicing, and cutting across the grain when the muscle is fibrous. Because this cut sits on the ${c.primal} primal (${c.location}), adjust time and temperature to thickness and marbling.`;
}

export type DefinitionContent = {
  displayTitle: string;
  h1: string;
  ai: AIAnswerBundle;
  quickAnswer: [string, string];
  originHtml: string;
  namesByCountry: { region: RegionSlug; label: string; names: string }[];
  cookingMethods: string;
  relatedCuts: { id: CanonicalId; label: string; path: string }[];
  faq: { question: string; answer: string }[];
  featuredSnippet: string;
  primaryCanonicalIds: CanonicalId[];
  ambiguityNote: string | null;
};

export function generateDefinition(args: {
  cutSlug: string;
  entries: readonly RegionalNameEntry[];
}): DefinitionContent | null {
  const { cutSlug, entries } = args;
  if (entries.length === 0) return null;

  const displayTitle =
    entries
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, "en"))[0]?.name.trim() ??
    cutSlug.replace(/-/g, " ");

  const idSet = new Set<CanonicalId>();
  for (const e of entries) {
    for (const id of expandMapsTo(e.maps_to)) idSet.add(id);
  }
  const primaryCanonicalIds = [...idSet].sort();
  const ambiguityNote =
    primaryCanonicalIds.length > 1
      ? "This retail name can point to more than one canonical cut in our dataset—see the canonical guides below."
      : entries.some((e) => expandMapsTo(e.maps_to).length > 1)
        ? "In some markets this label spans multiple subprimals—verify with your butcher when precision matters."
        : null;

  const primary = primaryCanonicalIds[0];
  const canonical = primary ? getCanonicalById(primary) ?? null : null;
  if (!canonical) return null;

  const regionSet = new Set<RegionSlug>(entries.map((e) => e.region));
  for (const r of regions) {
    const hasLabel = primaryCanonicalIds.some(
      (id) => labelsForCanonical(id, r.id).length > 0,
    );
    if (hasLabel) regionSet.add(r.id);
  }

  const namesByCountry = [...regionSet]
    .sort((a, b) => regionLabel(a).localeCompare(regionLabel(b), "en"))
    .map((region) => {
      const fromEntries = entries
        .filter((e) => e.region === region)
        .map((e) => e.name);
      const fromLabels = primaryCanonicalIds.flatMap((id) =>
        labelsForCanonical(id, region),
      );
      const merged = [...new Set([...fromEntries, ...fromLabels])];
      return {
        region,
        label: regionLabel(region),
        names: merged.join(" · ") || "—",
      };
    });

  const relatedIdSet = new Set<CanonicalId>();
  for (const id of primaryCanonicalIds) {
    for (const r of relatedByCanonical[id] ?? []) relatedIdSet.add(r);
  }
  for (const id of primaryCanonicalIds) relatedIdSet.delete(id);
  const relatedCuts = [...relatedIdSet].map((id) => ({
    id,
    label: titleCaseCanonicalId(id),
    path: canonicalHubPath(id),
  }));

  const canonSummaries = primaryCanonicalIds
    .map((id) => {
      const c = getCanonicalById(id);
      return c
        ? `${titleCaseCanonicalId(id)}: ${c.description} (${c.primal}, ${c.location}).`
        : "";
    })
    .filter((s) => s.length > 0)
    .join(" ");

  const originHtml =
    primaryCanonicalIds.length === 1
      ? `${canonical.description} It is part of the ${canonical.primal} primal (${canonical.location}).`
      : `${canonSummaries}`;

  const canonPhrase =
    primaryCanonicalIds.length === 1
      ? `the canonical cut ${titleCaseCanonicalId(primary)} (${canonical.primal} primal)`
      : `these canonical cuts: ${primaryCanonicalIds.map(titleCaseCanonicalId).join(", ")}`;

  const quickAnswer: [string, string] = [
    `“${displayTitle}” is a regional beef-cut name that maps to ${canonPhrase}.`,
    ambiguityNote ??
      `Use the names-by-country section below when shopping or ordering abroad.`,
  ];

  const featuredSnippet =
    primaryCanonicalIds.length === 1
      ? `${displayTitle} maps to ${titleCaseCanonicalId(primary)} in a global beef-cut ontology: ${canonical.description}`
      : `${displayTitle} maps to multiple canonical beef cuts in this ontology; see the guide for details.`;

  const ai: AIAnswerBundle =
    primaryCanonicalIds.length === 1
      ? {
          primary: `${displayTitle} is a regional beef-cut name for ${canonicalEntityTerm(primary)}, a muscle on the ${canonical.primal} primal (${canonical.location}).`,
          variants: [
            `In the Cutranslator ontology, ${displayTitle} classifies as ${canonicalEntityTerm(primary)} (${titleCaseCanonicalId(primary)}).`,
            `${displayTitle} refers to ${canonical.primal} primal beef: ${canonicalEntityTerm(primary)}.`,
          ],
        }
      : {
          primary: `"${displayTitle}" can map to more than one canonical beef cut in this dataset; open each hub below for the exact primal and location.`,
          variants: [
            `${displayTitle} is ambiguous in the current ontology—compare ${primaryCanonicalIds.map(titleCaseCanonicalId).join(" and ")}.`,
          ],
        };

  const faq: { question: string; answer: string }[] = [
    {
      question: `What is ${displayTitle}?`,
      answer: `${ai.primary} ${quickAnswer[1]}`,
    },
    {
      question: `What primal is ${displayTitle} from?`,
      answer:
        primaryCanonicalIds.length === 1
          ? `${titleCaseCanonicalId(primary)} comes from the ${canonical.primal} primal: ${canonical.location}.`
          : `It may refer to more than one primal in our dataset: ${primaryCanonicalIds
              .map((id) => {
                const c = getCanonicalById(id);
                return c
                  ? `${titleCaseCanonicalId(id)} (${c.primal})`
                  : titleCaseCanonicalId(id);
              })
              .join("; ")}.`,
    },
    {
      question: `What is ${displayTitle} called in other countries?`,
      answer: namesByCountry
        .slice(0, 6)
        .map((row) => `${row.label}: ${row.names}`)
        .join(" "),
    },
    {
      question: `In the Cutranslator ontology, which canonical cut is ${displayTitle}?`,
      answer:
        primaryCanonicalIds.length === 1
          ? `${titleCaseCanonicalId(primary)} (${canonicalEntityTerm(primary)}).`
          : `Possibly ${primaryCanonicalIds.map(titleCaseCanonicalId).join(", ")}—see mapping notes above.`,
    },
  ];

  return {
    displayTitle,
    h1: `What is ${displayTitle}?`,
    ai,
    quickAnswer,
    originHtml,
    namesByCountry,
    cookingMethods: cookingCopyForCut(canonical),
    relatedCuts,
    faq,
    featuredSnippet,
    primaryCanonicalIds,
    ambiguityNote,
  };
}

export type CanonicalHubContent = {
  h1: string;
  description: string;
  ai: AIAnswerBundle;
  countries: { region: RegionSlug; label: string; names: string }[];
  namesByCountry: { region: RegionSlug; label: string; names: string }[];
  confusions: string[];
  relatedCuts: { id: CanonicalId; label: string; path: string }[];
  translationLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export function generateCanonicalPage(canonicalId: CanonicalId): CanonicalHubContent | null {
  const cut = getCanonicalById(canonicalId);
  if (!cut) return null;

  const title = titleCaseCanonicalId(canonicalId);
  const h1 = `${title} (Global Beef Cut Guide)`;

  const countriesWithSignal = regions.filter((r) => {
    const lab = labelsForCanonical(canonicalId, r.id);
    return lab.length > 0 || representativeInputName(r.id, canonicalId);
  });

  const namesByCountry = countriesWithSignal.map((r) => {
    const lab = labelsForCanonical(canonicalId, r.id);
    const rep = representativeInputName(r.id, canonicalId);
    const merged = [...new Set([...(rep ? [rep] : []), ...lab])];
    return {
      region: r.id,
      label: regionLabel(r.id),
      names: merged.join(" · ") || title,
    };
  });

  const confusions: string[] = [];
  const others = relatedByCanonical[canonicalId] ?? [];
  if (others.length > 0) {
    confusions.push(
      `Often confused with or compared to: ${others.map((id) => titleCaseCanonicalId(id)).join(", ")}.`,
    );
  }
  if (cut.aliases?.length) {
    confusions.push(`Also known as: ${cut.aliases.join(", ")}.`);
  }

  const relatedCuts = others.map((id) => ({
    id,
    label: titleCaseCanonicalId(id),
    path: canonicalHubPath(id),
  }));

  const translationLinks: { href: string; label: string }[] = [];
  const target: RegionSlug = "usa";
  for (const r of regions) {
    const name = representativeInputName(r.id, canonicalId);
    if (!name) continue;
    const href = `/${pairSegment(r.id, target)}/${slugifyCut(name)}`;
    translationLinks.push({
      href,
      label: `${regionLabel(r.id)} → ${regionLabel(target)} (${name})`,
    });
  }

  const term = canonicalEntityTerm(canonicalId);
  const ai: AIAnswerBundle = {
    primary: `${title} (${term}) is ${cut.description} It sits on the ${cut.primal} primal at ${cut.location}.`,
    variants: [
      `The canonical cut ${term} is defined here as ${cut.primal} primal beef.`,
      `${title} in this ontology means ${term}: ${cut.location}.`,
    ],
  };

  const faq = [
    {
      question: `What is ${title}?`,
      answer: `${ai.primary}`,
    },
    {
      question: `Where is ${title} on the cow?`,
      answer: `${cut.primal} primal — ${cut.location}.`,
    },
    {
      question: `What retail names map to ${title}?`,
      answer: namesByCountry.map((row) => `${row.label}: ${row.names}`).join(" "),
    },
    {
      question: `How does ${title} relate to nearby cuts?`,
      answer:
        others.length > 0
          ? `Related canonical cuts in this dataset: ${others.map((id) => titleCaseCanonicalId(id)).join(", ")}. Compare hub pages for retail overlap.`
          : `See the related cuts section on this page for the ontology graph.`,
    },
  ];

  return {
    h1,
    description: cut.description,
    ai,
    countries: namesByCountry,
    namesByCountry,
    confusions,
    relatedCuts,
    translationLinks,
    faq,
  };
}

export type ComparisonContent = {
  h1: string;
  ai: AIAnswerBundle;
  quickAnswer: [string, string];
  sideBySide: { label: string; a: string; b: string }[];
  keyDifferences: string[];
  whenToUse: { cut: string; text: string }[];
  faq: { question: string; answer: string }[];
  featuredSnippet: string;
};

export function generateComparison(
  cutA: CanonicalCut,
  cutB: CanonicalCut,
): ComparisonContent {
  const nameA = titleCaseCanonicalId(cutA.id);
  const nameB = titleCaseCanonicalId(cutB.id);
  const h1 = `${nameA} vs ${nameB} — What's the Difference?`;

  const quickAnswer: [string, string] = [
    `${nameA} and ${nameB} are different canonical muscles/primals: ${nameA} is ${cutA.primal} (${cutA.location}); ${nameB} is ${cutB.primal} (${cutB.location}).`,
    `Choose based on tenderness, marbling, grain direction, and how you plan to cook (sear vs braise vs slice thin).`,
  ];

  const sideBySide: { label: string; a: string; b: string }[] = [
    { label: "Primal", a: cutA.primal, b: cutB.primal },
    { label: "Muscle / location", a: cutA.location, b: cutB.location },
    {
      label: "Character",
      a: cutA.description,
      b: cutB.description,
    },
  ];

  const keyDifferences: string[] = [];
  if (cutA.primal !== cutB.primal) {
    keyDifferences.push(
      `Different primals: ${cutA.primal} vs ${cutB.primal}.`,
    );
  }
  keyDifferences.push(
    `Texture and slicing: compare fibrous, grain-heavy cuts vs more tender steak-style muscles based on each cut’s description.`,
  );
  keyDifferences.push(
    `Retail naming diverges by country—always map through a canonical cut when translating menus or labels.`,
  );

  const whenToUse = [
    {
      cut: nameA,
      text: `Pick ${nameA} when you want its specific marbling/texture profile: ${cutA.description}`,
    },
    {
      cut: nameB,
      text: `Pick ${nameB} when its primal/muscle traits fit the dish: ${cutB.description}`,
    },
  ];

  const featuredSnippet = `${nameA} vs ${nameB}: ${quickAnswer[0]}`;

  const termA = canonicalEntityTerm(cutA.id);
  const termB = canonicalEntityTerm(cutB.id);
  const ai: AIAnswerBundle = {
    primary: `${nameA} (${termA}) and ${nameB} (${termB}) are not the same cut: ${nameA} is ${cutA.primal} primal (${cutA.location}); ${nameB} is ${cutB.primal} primal (${cutB.location}).`,
    variants: [
      `In American butchery terms, ${termA} differs from ${termB} by primal and muscle.`,
      `${nameA} vs ${nameB}: different canonical muscles—do not treat menu labels as interchangeable.`,
    ],
  };

  const faq = [
    { question: h1, answer: `${ai.primary} ${quickAnswer[1]}` },
    {
      question: `Are ${nameA} and ${nameB} the same cut?`,
      answer: `No—they are separate canonical cuts in this ontology (${cutA.primal} vs ${cutB.primal}).`,
    },
    {
      question: `Which is more tender, ${nameA} or ${nameB}?`,
      answer: `Tenderness depends on the specific muscle and preparation; compare the “Character” row and cooking notes—this site does not rank tenderness globally.`,
    },
    {
      question: `What primal is ${nameA} vs ${nameB}?`,
      answer: `${nameA}: ${cutA.primal}. ${nameB}: ${cutB.primal}.`,
    },
  ];

  return {
    h1,
    ai,
    quickAnswer,
    sideBySide,
    keyDifferences,
    whenToUse,
    faq,
    featuredSnippet,
  };
}

export function listCanonicalIds(): CanonicalId[] {
  return listCanonicalCuts().map((c) => c.id);
}

/** Home page extractable summary (AEO). */
export const homeAIAnswer: AIAnswerBundle = {
  primary:
    "Cutranslator maps regional beef names (Brazil picanha, French entrecôte, UK sirloin, Mexico arrachera, and others) to 26 canonical cuts—spanning all eight USDA primals, from ribeye and tenderloin to brisket, short ribs, and tri-tip—for consistent cross-country lookup.",
  variants: [
    "This ontology treats each canonical cut as a stable entity; retail labels point to those entities.",
    "Use translation URLs and hub pages to see how each country names the same muscle.",
  ],
};


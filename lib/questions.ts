import { relatedByCanonical } from "@/data/clusters";
import {
  canonicalHubPath,
  titleCaseCanonicalId,
  whatIsPath,
} from "@/lib/content";
import { canonicalEntityTerm, regionEntityFormal, REGION_ENTITY } from "@/lib/entities";
import { regionH1Place, regionLabel } from "@/lib/regions";
import type { FaqPair } from "@/lib/structured-data";
import type { CanonicalCut, CanonicalId, RegionSlug } from "@/lib/types";

export type AnswerSegment =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

export type PAAItem = {
  id: string;
  question: string;
  plainAnswer: string;
  answerSegments: AnswerSegment[];
};

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Insert internal /cuts/[id] links for canonical entity phrases in plain text. */
export function answerToSegments(
  plain: string,
  linkCanonicalIds: readonly CanonicalId[],
): AnswerSegment[] {
  const ids = [...new Set(linkCanonicalIds)];
  const terms = ids
    .map((id) => ({ id, term: canonicalEntityTerm(id) }))
    .sort((a, b) => b.term.length - a.term.length);

  let remaining = plain;
  const segments: AnswerSegment[] = [];

  while (remaining.length > 0) {
    let best: { index: number; len: number; id: CanonicalId } | null = null;
    for (const { id, term } of terms) {
      const re = new RegExp(escapeRegExp(term), "i");
      const m = remaining.match(re);
      if (m && m.index !== undefined) {
        const idx = m.index;
        const len = m[0].length;
        if (
          !best ||
          idx < best.index ||
          (idx === best.index && len > best.len)
        ) {
          best = { index: idx, len, id };
        }
      }
    }
    if (!best) {
      segments.push({ type: "text", text: remaining });
      break;
    }
    if (best.index > 0) {
      segments.push({ type: "text", text: remaining.slice(0, best.index) });
    }
    segments.push({
      type: "link",
      text: remaining.slice(best.index, best.index + best.len),
      href: canonicalHubPath(best.id),
    });
    remaining = remaining.slice(best.index + best.len);
  }

  return segments.length > 0 ? segments : [{ type: "text", text: plain }];
}

function item(
  id: string,
  question: string,
  plainAnswer: string,
  linkIds: readonly CanonicalId[],
): PAAItem {
  return {
    id,
    question,
    plainAnswer,
    answerSegments: answerToSegments(plainAnswer, linkIds),
  };
}

export type TranslationAnswerContext = {
  inputName: string;
  cutDisplay: string;
  canonicalId: CanonicalId;
  canonical: CanonicalCut;
  fromRegion: RegionSlug;
  toRegion: RegionSlug;
  targetLabels: string[];
  relatedIds: readonly CanonicalId[];
  cutSlug: string;
};

/**
 * 5–10 People-Also-Ask style questions (varied phrasing).
 * Use with `generateAnswer` or `buildTranslationPAAItems` for full rows.
 */
export function generateQuestions(
  inputName: string,
  canonicalId: CanonicalId,
  fromRegion: RegionSlug,
  toRegion: RegionSlug,
  opts: {
    targetLabels: string[];
    primal: string;
    location: string;
    relatedIds: readonly CanonicalId[];
  },
): string[] {
  const toFormal = regionEntityFormal(toRegion);
  const toShort = REGION_ENTITY[toRegion].shortName;
  const fromFormal = regionEntityFormal(fromRegion);
  const rel = opts.relatedIds[0];
  const relTitle = rel ? titleCaseCanonicalId(rel) : "nearby steaks";

  const qs: string[] = [
    `What is ${inputName} in ${toFormal}?`,
    toRegion === "usa"
      ? `What is ${inputName} called in America?`
      : `What is ${inputName} called in ${toShort}?`,
    `Where does ${inputName} come from on the cow?`,
    `What primal is ${inputName} from?`,
    canonicalId !== "ribeye"
      ? `Is ${inputName} the same as ribeye?`
      : `Is ${inputName} the same as striploin?`,
    rel
      ? `Is ${inputName} the same as ${relTitle}?`
      : `What cut is closest to ${inputName}?`,
    `What is the canonical beef cut for ${inputName}?`,
    `How is ${inputName} labeled in ${toFormal} retail?`,
    `What should I ask for at a ${toFormal} butcher to get ${inputName}?`,
    fromRegion !== toRegion
      ? `Why is ${inputName} less familiar in ${toFormal} than in ${fromFormal}?`
      : `What other countries use the name ${inputName} for beef?`,
  ];

  const seen = new Set<string>();
  const out: string[] = [];
  for (const q of qs) {
    const k = q.trim().toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(q);
    if (out.length >= 10) break;
  }
  return out;
}

/** Return a 1–2 sentence answer for a generated translation question (template match). */
export function generateAnswer(
  question: string,
  ctx: TranslationAnswerContext,
): string {
  const hit = buildTranslationPAAItems(ctx).find(
    (p) => p.question.trim().toLowerCase() === question.trim().toLowerCase(),
  );
  if (hit) return hit.plainAnswer;
  const loose = buildTranslationPAAItems(ctx).find((p) =>
    question.toLowerCase().includes(p.question.slice(0, 12).toLowerCase()),
  );
  return loose?.plainAnswer ?? ctx.canonical.description;
}

function buildItemsFromContext(ctx: TranslationAnswerContext): PAAItem[] {
  const {
    inputName,
    cutDisplay,
    canonicalId,
    canonical,
    fromRegion,
    toRegion,
    targetLabels,
    relatedIds,
    cutSlug,
  } = ctx;

  const toFormal = regionEntityFormal(toRegion);
  const toPlace = regionH1Place(toRegion);
  const fromFormal = regionEntityFormal(fromRegion);
  const canonTitle = titleCaseCanonicalId(canonicalId);
  const entity = canonicalEntityTerm(canonicalId);
  const labels = targetLabels.length ? targetLabels.join(", ") : entity;
  const rel0 = relatedIds[0];
  const rel1 = relatedIds[1];
  const whatIsHref = whatIsPath(cutSlug);

  const items: PAAItem[] = [];

  items.push(
    item(
      "t-in-target",
      `What is ${cutDisplay} in ${toFormal}?`,
      `${cutDisplay} maps to ${canonTitle} (${entity}) in this ontology; in ${toPlace}, look for labels such as ${labels}.`,
      [canonicalId],
    ),
  );

  items.push(
    item(
      "t-in-target-alt",
      toRegion === "usa"
        ? `What is ${cutDisplay} called in America?`
        : `What is ${cutDisplay} called in ${toPlace}?`,
      toRegion === "usa"
        ? `In the United States, ${cutDisplay} (${fromFormal}) is usually sold as ${labels}—the same canonical ${entity}.`
        : `In ${toPlace}, ${cutDisplay} corresponds to ${canonTitle}; common retail wording includes ${labels}.`,
      [canonicalId],
    ),
  );

  items.push(
    item(
      "t-on-cow",
      `Where does ${cutDisplay} come from on the cow?`,
      `${cutDisplay} refers to ${entity} on the ${canonical.primal} primal (${canonical.location}).`,
      [canonicalId],
    ),
  );

  items.push(
    item(
      "t-primal",
      `What primal is ${cutDisplay} from?`,
      `${cutDisplay} is tied to the ${canonical.primal} primal as ${canonTitle} (${entity}).`,
      [canonicalId],
    ),
  );

  if (canonicalId !== "ribeye") {
    items.push(
      item(
        "t-vs-ribeye",
        `Is ${cutDisplay} the same as ribeye?`,
        `No—${cutDisplay} maps to ${entity} (${canonTitle}), while ribeye is a separate canonical rib primal cut.`,
        [canonicalId, "ribeye"],
      ),
    );
  } else {
    items.push(
      item(
        "t-vs-strip",
        `Is ${cutDisplay} the same as striploin?`,
        `No—ribeye and striploin (strip steak) are different canonical muscles in this dataset.`,
        ["ribeye", "striploin"],
      ),
    );
  }

  if (rel0) {
    items.push(
      item(
        "t-vs-rel0",
        `Is ${cutDisplay} the same as ${titleCaseCanonicalId(rel0)}?`,
        `No—${cutDisplay} is ${entity}; ${titleCaseCanonicalId(rel0)} is ${canonicalEntityTerm(rel0)}, a different canonical cut.`,
        [canonicalId, rel0],
      ),
    );
  }

  if (rel1) {
    items.push(
      item(
        "t-diff-rel1",
        `How is ${cutDisplay} different from ${titleCaseCanonicalId(rel1)}?`,
        `${entity} (${canonTitle}) differs from ${canonicalEntityTerm(rel1)} by primal and muscle: compare the two hub pages in this site.`,
        [canonicalId, rel1],
      ),
    );
  }

  items.push(
    item(
      "t-canonical",
      `What is the canonical beef cut for ${inputName}?`,
      `${inputName} resolves to ${canonTitle} (${entity}) in the Cutranslator ontology.`,
      [canonicalId],
    ),
  );

  items.push(
    item(
      "t-butcher",
      `What should I ask for at a ${toFormal} butcher?`,
      `Ask for ${labels} and mention ${canonTitle} if needed—the mapped retail names above match ${entity}.`,
      [canonicalId],
    ),
  );

  if (fromRegion !== toRegion) {
    items.push(
      item(
        "t-rarity",
        `Why might ${cutDisplay} be less common in ${toFormal}?`,
        `${cutDisplay} is a ${fromFormal} retail term; ${toFormal} shops may use different names for the same ${entity} muscle.`,
        [canonicalId],
      ),
    );
  }

  items.push(
    item(
      "t-glossary",
      `Where can I read a full definition of ${cutDisplay}?`,
      `Open the glossary page for ${cutDisplay} (${whatIsHref}) and the ${canonTitle} hub for country-by-country names.`,
      [canonicalId],
    ),
  );

  const seenQ = new Set<string>();
  return items.filter((p) => {
    const k = p.question.trim().toLowerCase();
    if (seenQ.has(k)) return false;
    seenQ.add(k);
    return true;
  });
}

export function buildTranslationPAAItems(ctx: TranslationAnswerContext): PAAItem[] {
  return buildItemsFromContext(ctx).slice(0, 10);
}

export function buildTranslationPAAItemsUnmapped(args: {
  cutDisplay: string;
  fromRegion: RegionSlug;
  toRegion: RegionSlug;
  explanation: string;
}): PAAItem[] {
  const { cutDisplay, toRegion, explanation } = args;
  const toFormal = regionEntityFormal(toRegion);
  return [
    item("u-1", `What is ${cutDisplay} in ${toFormal}?`, explanation, []),
    item(
      "u-2",
      `Why is there no mapping for ${cutDisplay}?`,
      explanation.slice(0, 280) + (explanation.length > 280 ? "…" : ""),
      [],
    ),
    item(
      "u-3",
      `How can I find ${cutDisplay} on Cutranslator?`,
      `Try another spelling, a regional synonym, or browse canonical hub pages from the home page.`,
      [],
    ),
  ];
}

export type WhatIsPAAContext = {
  displayTitle: string;
  cutSlug: string;
  primaryIds: readonly CanonicalId[];
  primaryCut: CanonicalCut | null;
  relatedIds: readonly CanonicalId[];
};

export function buildWhatIsPAAItems(ctx: WhatIsPAAContext): PAAItem[] {
  const { displayTitle, cutSlug, primaryIds, primaryCut, relatedIds } = ctx;
  if (!primaryCut || primaryIds.length !== 1) {
    const pid = primaryIds[0];
    return [
      item(
        "w-m",
        `What is ${displayTitle}?`,
        `"${displayTitle}" may map to more than one canonical cut in this dataset—use the hub links on this page.`,
        pid ? [pid] : [],
      ),
      item(
        "w-m2",
        `Where does ${displayTitle} come from on the cow?`,
        `Open each linked canonical guide; primals differ when the name is ambiguous.`,
        primaryIds.slice(0, 2),
      ),
    ];
  }

  const id = primaryIds[0];
  const entity = canonicalEntityTerm(id);
  const rel0 = relatedIds[0];
  const items: PAAItem[] = [
    item(
      "w-1",
      `What is ${displayTitle} in simple terms?`,
      `${displayTitle} is a regional name for ${entity} (${titleCaseCanonicalId(id)}), ${primaryCut.primal} primal beef.`,
      [id],
    ),
    item(
      "w-2",
      `What is ${displayTitle} called in the United States?`,
      `US retail labels for ${entity} appear in the names-by-country section; common forms include the mapped English terms listed there.`,
      [id],
    ),
    item(
      "w-3",
      `Where is ${displayTitle} on the cow?`,
      `${displayTitle} refers to ${entity} located at ${primaryCut.location} on the ${primaryCut.primal} primal.`,
      [id],
    ),
    item(
      "w-4",
      `Is ${displayTitle} steak?`,
      `It is a beef muscle sold as steak or roast depending on thickness and market—still ${entity} anatomically.`,
      [id],
    ),
  ];

  if (rel0) {
    items.push(
      item(
        "w-5",
        `Is ${displayTitle} the same as ${titleCaseCanonicalId(rel0)}?`,
        `No—${displayTitle} maps to ${entity}; ${titleCaseCanonicalId(rel0)} is ${canonicalEntityTerm(rel0)}.`,
        [id, rel0],
      ),
    );
  }

  items.push(
    item(
      "w-6",
      `How do I translate ${displayTitle} for travel?`,
      `Use translation URLs from the list on this page, or open the ${titleCaseCanonicalId(id)} hub.`,
      [id],
    ),
  );

  items.push(
    item(
      "w-7",
      `What is another name for ${displayTitle}?`,
      `See aliases and country rows above; the canonical term is ${entity}.`,
      [id],
    ),
  );

  return items.slice(0, 10);
}

export type CanonicalPAAContext = {
  id: CanonicalId;
  title: string;
  description: string;
  primal: string;
  location: string;
  relatedIds: readonly CanonicalId[];
};

export function buildCanonicalPAAItems(ctx: CanonicalPAAContext): PAAItem[] {
  const { id, title, description, primal, location, relatedIds } = ctx;
  const entity = canonicalEntityTerm(id);
  const rel0 = relatedIds[0];
  const rel1 = relatedIds[1];

  const items: PAAItem[] = [
    item(
      "c-1",
      `What is ${title}?`,
      `${title} (${entity}) is ${description}`,
      [id],
    ),
    item(
      "c-2",
      `Where does ${title} come from on the cow?`,
      `${title} sits on the ${primal} primal at ${location}.`,
      [id],
    ),
    item(
      "c-3",
      `What primal is ${title}?`,
      `${title} is part of the ${primal} primal.`,
      [id],
    ),
  ];

  if (rel0) {
    items.push(
      item(
        "c-4",
        `Is ${title} the same as ${titleCaseCanonicalId(rel0)}?`,
        `No—${entity} differs from ${canonicalEntityTerm(rel0)}; compare the two hub pages.`,
        [id, rel0],
      ),
    );
  }

  if (rel1) {
    items.push(
      item(
        "c-5",
        `How is ${title} different from ${titleCaseCanonicalId(rel1)}?`,
        `Different muscle and primal: ${title} is ${primal}; ${titleCaseCanonicalId(rel1)} follows its own canonical spec.`,
        [id, rel1],
      ),
    );
  }

  items.push(
    item(
      "c-6",
      `What is ${entity} called in Brazil?`,
      `See the names-by-country list on this page for Brazilian retail synonyms mapped to ${title}.`,
      [id],
    ),
    item(
      "c-7",
      `Is ${title} tender?`,
      `Tenderness varies by exact muscle and preparation; ${description.slice(0, 120)}${description.length > 120 ? "…" : ""}`,
      [id],
    ),
  );

  return items.slice(0, 10);
}

export type ComparePAAContext = {
  cutA: CanonicalCut;
  cutB: CanonicalCut;
};

export function buildComparePAAItems(ctx: ComparePAAContext): PAAItem[] {
  const { cutA, cutB } = ctx;
  const a = titleCaseCanonicalId(cutA.id);
  const b = titleCaseCanonicalId(cutB.id);

  const items: PAAItem[] = [
    item(
      "cmp-1",
      `Are ${a} and ${b} the same cut?`,
      `No—${a} is ${cutA.primal} primal (${cutA.location}); ${b} is ${cutB.primal} primal (${cutB.location}).`,
      [cutA.id, cutB.id],
    ),
    item(
      "cmp-2",
      `What is the difference between ${a} and ${b}?`,
      `${canonicalEntityTerm(cutA.id)} vs ${canonicalEntityTerm(cutB.id)}: different muscles; use the comparison table on this page.`,
      [cutA.id, cutB.id],
    ),
    item(
      "cmp-3",
      `Which is better for grilling, ${a} or ${b}?`,
      `Depends on thickness and marbling; ${a} is ${cutA.description.slice(0, 80)}… while ${b} is ${cutB.description.slice(0, 80)}…`,
      [cutA.id, cutB.id],
    ),
    item(
      "cmp-4",
      `Where does ${a} come from vs ${b}?`,
      `${a}: ${cutA.primal} (${cutA.location}). ${b}: ${cutB.primal} (${cutB.location}).`,
      [cutA.id, cutB.id],
    ),
    item(
      "cmp-5",
      `Can I substitute ${a} for ${b}?`,
      `They are not interchangeable cuts—expect different texture unless a recipe explicitly allows a swap.`,
      [cutA.id, cutB.id],
    ),
  ];

  return items;
}

export function buildHomePAAItems(): PAAItem[] {
  return [
    item(
      "h-1",
      "Which canonical cuts are defined on Cutranslator?",
      "Sirloin cap, ribeye, striploin, beef tenderloin, sirloin flap, flank steak, and skirt steak.",
      [
        "sirloin_cap",
        "ribeye",
        "striploin",
        "tenderloin",
        "sirloin_flap",
        "flank",
        "skirt",
      ],
    ),
    item(
      "h-2",
      "What is picanha in the US?",
      "Picanha is the Brazilian name for sirloin cap; in the United States look for coulotte or top sirloin cap.",
      ["sirloin_cap"],
    ),
    item(
      "h-3",
      "Is picanha the same as ribeye?",
      "No—picanha maps to sirloin cap; ribeye is a separate rib primal cut.",
      ["sirloin_cap", "ribeye"],
    ),
    item(
      "h-4",
      "Where does entrecôte map in the US?",
      "Entrecôte commonly maps to ribeye in this ontology; always verify bone-in vs boneless with your butcher.",
      ["ribeye"],
    ),
    item(
      "h-5",
      "How do Cutranslator URLs encode a translation?",
      "Each path pairs source country, destination country, and a slugified retail name, then resolves through the canonical layer.",
      [],
    ),
    item(
      "h-6",
      "Is arrachera the same as skirt steak?",
      "In this dataset arrachera maps to skirt steak; regional usage can vary—check the skirt hub for notes.",
      ["skirt"],
    ),
  ];
}

export function paaItemsToFaqPairs(items: readonly PAAItem[]): FaqPair[] {
  return items.map((p) => ({
    question: p.question,
    answer: p.plainAnswer,
  }));
}

function normalizeQuestion(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Merge base FAQ with PAA; skip PAA rows whose question matches an existing FAQ (normalized). */
export function mergeFaqWithPAA(
  base: readonly FaqPair[],
  paa: readonly PAAItem[],
): FaqPair[] {
  const seen = new Set(base.map((x) => normalizeQuestion(x.question)));
  const out: FaqPair[] = [...base];
  for (const p of paa) {
    const k = normalizeQuestion(p.question);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push({ question: p.question, answer: p.plainAnswer });
  }
  return out;
}

/** Related cuts for PAA (ontology graph). */
export function relatedForPAA(canonicalId: CanonicalId): readonly CanonicalId[] {
  return relatedByCanonical[canonicalId] ?? [];
}

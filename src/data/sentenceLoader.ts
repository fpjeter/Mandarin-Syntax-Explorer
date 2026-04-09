import type { SentenceData } from '../types/grammar';
import { SENTENCE_CATEGORIES } from './categories';
import { CLASSICAL_CATEGORIES } from './classicalCategories';

/**
 * Pre-computed lookup tables for a loaded sentence dataset.
 */
export interface SentenceDataset {
  sentences: SentenceData[];
  byId: Map<string, SentenceData>;
  sorted: SentenceData[];
  indexById: Map<string, number>;
}

function buildDataset(
  sentences: SentenceData[],
  categoryOrder: readonly string[],
): SentenceDataset {
  const byId = new Map(sentences.map(s => [s.id, s]));
  const sorted = [...sentences].sort(
    (a, b) =>
      categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
  );
  const indexById = new Map(sorted.map((s, i) => [s.id, i]));
  return { sentences, byId, sorted, indexById };
}

// ── Cached results ──
let modernCache: SentenceDataset | null = null;
let classicalCache: SentenceDataset | null = null;

// ── In-flight promises (prevent duplicate fetches) ──
let modernPromise: Promise<SentenceDataset> | null = null;
let classicalPromise: Promise<SentenceDataset> | null = null;

/**
 * Dynamically import modern sentences and return pre-computed lookups.
 * The result is cached after the first call.
 */
export function loadModernSentences(): Promise<SentenceDataset> {
  if (modernCache) return Promise.resolve(modernCache);
  if (modernPromise) return modernPromise;

  modernPromise = import('./modern_sentences.json').then(m => {
    modernCache = buildDataset(m.default as SentenceData[], SENTENCE_CATEGORIES);
    modernPromise = null;
    return modernCache;
  });
  return modernPromise;
}

/**
 * Dynamically import classical sentences and return pre-computed lookups.
 * The result is cached after the first call.
 */
export function loadClassicalSentences(): Promise<SentenceDataset> {
  if (classicalCache) return Promise.resolve(classicalCache);
  if (classicalPromise) return classicalPromise;

  classicalPromise = import('./classical_sentences.json').then(m => {
    classicalCache = buildDataset(m.default as SentenceData[], CLASSICAL_CATEGORIES);
    classicalPromise = null;
    return classicalCache;
  });
  return classicalPromise;
}

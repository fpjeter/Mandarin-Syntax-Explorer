import { type SentenceCategory } from '../data/categories';
import { type ClassicalCategory } from '../data/classicalCategories';
export type { SentenceCategory, ClassicalCategory };

export type GrammarRole =
    // ── Architecture ──────────────────────────────────────────────────────────
    | 'Sentence'        // Root node
    | 'Topic'           // T — the Anchor (recursive: T₁ outer, T₂ inner, etc.)
    | 'Comment'         // The Logic Zone — a full nested T+C structure
    | 'VP'              // Fractal VP — primitive (single action) or composite (SVC chain)
    | 'Verb Package'    // Verb Head + RVC/VD suffix + Aspect marker
    // ── Existing roles (kept) ─────────────────────────────────────────────────
    | 'Noun Phrase'
    | 'Object'
    | 'Adjunct'         // Pre-verbal modifier — tagged with altitude (high/low)
    | 'Coverb'          // Mandarin "prepositions" (把/被/在/用) — historically verbs
    | 'Particle'
    | 'Adjective'
    | 'Noun'
    | 'Pronoun'
    | 'Attributive'
    | 'Complement'      // Post-verbal result/direction/degree inside Verb Package
    | 'Head Noun'
    | 'Head Verb'       // Core verb inside Verb Package
    | 'Measure Word'
    | 'Verb Morpheme'
    | 'Object Morpheme'
    | 'Pivot'           // Recursion Point — Action Node expands into new T+C
    | 'Copula'
    // ── Legacy (deprecated, kept for migration) ───────────────────────────────
    | 'Subject'         // Use Topic instead (T₂ internal topic)
    | 'Action Node'     // Use VP with subRole 'primitive' instead
    | 'VP-Chain'        // Use VP instead
    | 'Verb Phrase'     // Use VP instead
    | 'Predicate'       // Absorbed into Comment / VP
    | 'Verb'            // Use Head Verb inside Verb Package
    | 'Preposition';    // Use Coverb instead

export interface MandarinWord {
    hanzi: string;
    pinyin: string;
    translation?: string;
}

/** Adjunct altitude in the recursive T+C stack */
export type AdjunctAltitude = 'high' | 'low';

export interface GrammarNodeData {
    id: string;
    role: GrammarRole;
    subRole?: string;
    /** Adjunct altitude: high (sentence-wide), low (single action) */
    altitude?: AdjunctAltitude;
    /** Explicit Null (Ø) slot — visible by default */
    isNull?: boolean;
    /** @deprecated Use isNull instead. Kept for backward compatibility. */
    isDropped?: boolean;
    impliedText?: string;    // e.g. '我' — the pronoun that was omitted
    refersToId?: string;     // id of the node this dropped pronoun co-refers with (for hover glow)
    text?: MandarinWord;
    children?: GrammarNodeData[];
}

export interface SentenceData {
    id: string;
    category: SentenceCategory | ClassicalCategory;
    chinese: string;
    pinyin: string;
    translation: string;
    /** Attribution source — used by Classical Chinese quotes (e.g. "《论语》· 学而篇") */
    source?: string;
    /** Attribution author — used by Classical Chinese quotes (e.g. "Confucius") */
    author?: string;
    /** Plain-English structural analysis of the sentence for non-specialist readers. */
    explanation?: string;
    /** Optional preceding sentence that establishes the discourse context (topic), enabling pro-drop in this sentence. */
    discourseContext?: {
        chinese: string;
        pinyin: string;
        translation: string;
    };
    /** IDs of related sentences that share or contrast constructions with this one. */
    relatedIds?: string[];
    tree: GrammarNodeData;
}

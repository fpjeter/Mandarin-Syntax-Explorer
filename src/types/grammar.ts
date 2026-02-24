import { type SentenceCategory } from '../data/categories';
export type { SentenceCategory };

export type GrammarRole =
    | 'Sentence'
    | 'Topic'
    | 'Comment'
    | 'Subject'
    | 'Predicate'
    | 'Verb Phrase'
    | 'Noun Phrase'
    | 'Location Phrase'
    | 'Time Phrase'
    | 'Verb'
    | 'Object'
    | 'Adverb'
    | 'Preposition'
    | 'Particle'
    | 'Adjective'
    | 'Noun'
    | 'Pronoun'
    | 'Attributive'
    | 'Complement'
    | 'Head Noun'
    | 'Head Verb'
    | 'Measure Word'
    | 'Verb Morpheme'
    | 'Object Morpheme'
    | 'Pivot'
    | 'Copula';

export interface MandarinWord {
    hanzi: string;
    pinyin: string;
    translation?: string;
}

export interface GrammarNodeData {
    id: string;
    role: GrammarRole;
    subRole?: string;
    isDropped?: boolean;
    impliedText?: string;    // e.g. '我' — the pronoun that was omitted
    refersToId?: string;     // id of the node this dropped pronoun co-refers with (for hover glow)
    text?: MandarinWord;
    children?: GrammarNodeData[];
}

export interface SentenceData {
    id: string;
    category: SentenceCategory;
    chinese: string;
    pinyin: string;
    translation: string;
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

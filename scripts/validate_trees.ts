import fs from 'fs';
const sampleSentences = JSON.parse(fs.readFileSync('./src/data/modern_sentences.json', 'utf8'));
const classicalSentences = JSON.parse(fs.readFileSync('./src/data/classical_sentences.json', 'utf8'));

const VALID_CLASSICAL_CATEGORIES = new Set([
    'Rhetorical Patterns (反問)',
    'Nominalizers (者/所)',
    'Classical Negation (非/勿/莫)',
    'Coverbs & Prepositions (於/以/焉)',
    'Sequential Actions (而)',
    'Genitive & Modification (之)',
    'Classical Conditionals (若/苟/則)',
    'Classical Causatives (使/令)',
    'Object Fronting (賓語前置)',
    'Topic-Comment (主題)',
    'Classical Passive (為…所…)',
]);
import type { GrammarNodeData } from '../src/types/grammar.js';

let hasErrors = false;

function logError(sentenceId: string | 'UNKNOWN', nodeId: string, message: string) {
    console.error(`❌ Error in Sentence [${sentenceId}] Node [${nodeId}]: ${message}`);
    hasErrors = true;
}

const allNodeIds = new Set<string>();
const allSentenceIds = new Set<string>();

const VALID_ROLES = new Set([
    'Sentence', 'Topic', 'Comment', 'Subject', 'Predicate', 'Verb Phrase', 
    'Noun Phrase', 'Verb', 'Object', 'Adjunct', 'Preposition', 'Particle', 
    'Adjective', 'Noun', 'Pronoun', 'Attributive', 'Complement', 'Head Noun', 
    'Head Verb', 'Measure Word', 'Verb Morpheme', 'Object Morpheme', 'Pivot', 'Copula',
    'Parallel Sentence', 'Embedded Clause'
]);

// 1. First pass to collect all valid IDs for referential integrity checks
const allDatasets = [
    { label: 'modern', sentences: sampleSentences },
    { label: 'classical', sentences: classicalSentences },
];

for (const { sentences } of allDatasets) {
    for (const s of sentences) {
        if (s.id) {
            if (allSentenceIds.has(s.id)) {
                logError(s.id, 'ROOT', 'Duplicate Sentence ID found');
            }
            allSentenceIds.add(s.id);
        }
        const collectNodeIds = (node: GrammarNodeData) => {
            if (node.id) {
                if (allNodeIds.has(node.id)) {
                    logError(s.id || 'UNKNOWN', node.id, 'Duplicate Node ID found across the dataset');
                }
                allNodeIds.add(node.id);
            }
            if (node.children) {
                for (const child of node.children) collectNodeIds(child);
            }
        };
        if (s.tree) collectNodeIds(s.tree);
    }
}

const VALID_SEMANTIC_ROLES = new Set([
    'Agent', 'Patient', 'Experiencer', 'Causer', 'Theme'
]);

// Normalized subRole taxonomy — authoritative whitelist generated from full dataset (2026-04-27).
// To add a new subRole: add it here AND in the JSON. Do NOT add one-off labels to the JSON alone.
// NOTE: Topic/Comment/VerbPhrase include pre-audit editorial labels from cc1–cc30 + modern.
// A second LS audit pass is queued to normalize the more sentence-specific ones.
const VALID_SUBROLES: Record<string, Set<string>> = {
    'Head Verb': new Set([
        'adjectival predicate', 'causative', 'causative intransitive', 'comparative verb',
        'copulative', 'disposal marker', 'embedded predicate', 'existential',
        'existential trigger', 'motion verb', 'nominal predicate', 'passive marker',
        'potential', 'purpose', 'quotative', 'repeated verb',
        'simile', 'social verb (invites/treats)', 'transformative',
    ]),
    'Adjunct': new Set([
        'benefactive', 'causal', 'certainty', 'comitative', 'comparison', 'comparative negation',
        'concession', 'conditional', 'conditional consequence', 'conjunction', 'consequence',
        'contrastive', 'correlative', 'degree', 'direction', 'discourse', 'disposal marker',
        'distributive adverb', 'emphatic', 'equality marker', 'frequency',
        'fronted interrogative', 'fusional coverb (= 於何)', 'instrumental',
        'location', 'locative (於-phrase)', 'manner', 'modal', 'negation',
        'negation of means', 'politeness', 'potential', 'prohibitive negation',
        'purpose', 'quantity', 'reflexive', 'rhetorical', 'scope', 'sequential',
        'source (於-phrase)', 'target (於-phrase)', 'temporal negation',
        'time', 'time span',
    ]),
    'Particle': new Set([
        'aspect marker', 'assertive', 'change of state', 'concessive connective',
        'conclusive', 'concurrent action', 'conditional', 'contrastive connective',
        'current relevance (still ongoing)', 'degree', 'direction', 'durative',
        'emphatic fronting', 'exclamatory', 'experiential', 'focus closure',
        'fusional coverb (= 於 + 之)', 'genitive', 'impossibility',
        'interrogative (rhetorical)', 'linker between duration and noun morpheme',
        'localizer', 'nominalizer', 'ongoing-state emphasis', 'perspective',
        'potential', 'question particle', 'relativizer', 'result',
        'sequential connective', 'suggestion', 'topic pause', 'topic pause marker',
        '是…的 focus marker',
    ]),
    'Complement': new Set([
        'acceptability', 'adjectival predicate', 'comparative (於-phrase)',
        'degree', 'directional', 'duration', 'duration (inserted into split verb)',
        'frequency', 'frequency (inserted into split verb)', 'negated degree',
        'negation', 'orientation: away from speaker', 'orientation: toward speaker',
        'orientation: toward speaker (coming out)', 'potential',
        'quantity / brief action', 'quantity disparity', 'result', 'result location',
        'resultative', '於-phrase (source/cause)',
    ]),
    'Copula': new Set([
        'cleft opener: it was…', 'focus marker', 'negative copula', 'quasi-copula', 'rhetorical',
    ]),
    'Embedded Clause': new Set([
        '…but also', '...but also', 'concession', 'condition', 'consequence', 'contrast',
        'emphasized extreme case', 'first comparison', 'not only…', 'not only...', 'pivot',
        'rhetorical', 'second comparison (climax)', 'situation object',
    ]),
    'Noun Phrase': new Set(['standard noun phrase']),
    'Object': new Set([
        'adj → noun', 'anaphoric pronoun', 'demonstrative pronoun', 'embedded clause',
        'embedded topic–comment clause', 'emphasized extreme case', 'fronted interrogative',
        'fronted pronoun (negation inversion)', 'indefinite object: follows full complement',
        'inserted between direction and 去', 'item B', 'patient (thing that changed state)',
        'quoted speech', 'reference point', 'reflexive', 'retained object',
        'verb phrase as object', '之-nominalization', '者-nominalization',
    ]),
    'Object Morpheme': new Set([
        'noun morpheme of 散步 (split to end)', 'noun morpheme of 见面 (split to end)',
        'separable noun half',
    ]),
    'Pivot': new Set([
        'object of 使, subject of action', 'object of 叫, subject of 去买',
        'object of 派, subject of 去谈判', 'object of 让, subject of 回答',
        'object of 请, subject of 吃饭', 'pivot',
    ]),
    'Predicate': new Set([
        'bare adjective', 'comparative (不如)', 'compared quality', 'consequence (则)', 'consequence (則)',
        'pivotal construction', 'quality', 'reduplicated stative', '所-nominalization',
    ]),
    'Preposition': new Set([
        'causal coverb', 'comparative bǐ clause', 'comparison', 'disposal marker',
        'instrumental coverb', 'locative coverb', 'simile frame (像…)',
        'source coverb', '连...都 bracket',
    ]),
    'Pronoun': new Set(['fronted interrogative object']),
    'Subject': new Set([
        'actor', 'agent', 'agent (doer)', 'emphasized extreme case',
        'existential subject', 'patient', 'pivot', 'quantity phrase',
        '者 nominalization', '者-nominalization', '者-nominalization (reflexive)',
    ]),
    'Topic': new Set([
        'pro-drop', 'topic-chain', 'expletive',
        'addressee', 'analogy', 'clause 1', 'compound subject', 'concessive clause (而)',
        'condition clause', 'condition clause (只要…)', 'condition clause (如果…)',
        'conditional', 'conditional clause', 'correlative',
        'first clause (thesis)', 'first comparison', 'first conditional',
        'first rhetorical question', 'inner topic', 'item A', 'lian-construction',
        'Location', 'negated condition (非…)', 'outer discourse frame', 'outer frame',
        'outer topic', 'parallel conditions', 'pivot', 'possessor / context',
        'relative clause (the Way that can be spoken)', 'sentence topic',
        'sequential actions (而)', 'serial verb 1', 'situational frame', 'thesis clause',
        '之 genitive phrase', '所-nominalization (that which…)',
        '者-definition', '连-construction (even)',
    ]),
    'Verb Morpheme': new Set(['reduplicated verb (AAB)', 'separable verb']),
    'Verb Phrase': new Set([
        'clause 1', 'clause 2', 'comparison', 'comparison clause',
        'complement / purpose', 'consequence', 'embedded predicate',
        'matrix clause', 'matrix verb', 'nested complement 1', 'nested complement 2',
        'nested complement 3', 'passive verbal', 'pivot', 'potential',
        'potential complement', 'purpose clause', 'resultative', 'separable verb',
        'serial verb (go + negotiate)', 'serial verb (purpose chain)',
        'serial verb 1', 'serial verb 2', 'serial verb 3',
        'serial verb construction (purpose chain)', 'serial verbs',
        'source clause', 'trigger clause (一 + V)',
        'verb + object (first mention)', 'verb repeated + duration complement',
        '於-phrase (locative)',
    ]),
    'Comment': new Set([
        'sequential clauses', 'correlative',
        'adjectival / comparative', 'antithesis clause', 'clause 1', 'clause 2', 'clause 3',
        'comparative clause', 'comparison', 'consequence', 'consequent realization', 'contrastive',
        'disposal marker', 'duration complement (verb repetition)', 'elaboration',
        'escalating rhetorical question', 'extraction clause', 'first clause (thesis)',
        'identity (所以…也)', 'identity statement (…也)', 'inner comment', 'inner comment 1',
        'inner comment 1: adjectival predicate', 'inner comment 2',
        'inner comment 2: adjectival predicate', 'judgment clause',
        'negated identity (非…)', 'negation', 'negative consequence',
        'opinion clause', 'parallel clause', 'prohibitive command',
        'pseudo-cleft frame (是…的)', 'result clause', 'rhetorical',
        'rhetorical question', 'rhetorical question (不亦…乎)',
        'rhetorical question (寧…乎)', 'second clause (antithesis)',
        'second comparison (climax)', 'second conditional (parallel)', 'separable verb',
        'serial verb (V1着 concurrent with V2)', 'serial verb 2', 'serial verb chain',
        'serial verb construction', 'serial verb construction (same subject)',
        'shi-de definition', 'shì–de focus construction', 'thesis clause',
        'two embedded topic–comment clauses', 'two sequential clauses',
        '是…的 focus', '连…也… (even X)', '连…都… (even X)',
    ]),
};

// Ghost node subRoles (Convention 4 from ghost_node_conventions.md)
const VALID_GHOST_SUBROLES = new Set(['pro-drop', 'topic-chain', 'expletive']);
const DEPRECATED_GHOST_SUBROLES = new Set(['implied topic']);

// 2. Second pass to validate thoroughly
function validateNode(node: GrammarNodeData, sentenceId: string) {
    if (!node.id) {
        logError(sentenceId, 'UNKNOWN', 'Node is missing an ID');
    }

    if (!node.role) {
        logError(sentenceId, node.id || 'UNKNOWN', 'Node is missing a grammar role');
    } else if (!VALID_ROLES.has(node.role)) {
        logError(sentenceId, node.id || 'UNKNOWN', `Invalid grammar role: "${node.role}"`);
    }

    if (node.semanticRole) {
        if (!VALID_SEMANTIC_ROLES.has(node.semanticRole)) {
            logError(sentenceId, node.id || 'UNKNOWN', `Invalid semanticRole: "${node.semanticRole}". Must be one of: ${Array.from(VALID_SEMANTIC_ROLES).join(', ')}`);
        }
        if (node.role === 'Adjunct') {
            logError(sentenceId, node.id || 'UNKNOWN', `Pedagogical constraint violation: Adjunct node cannot have a semanticRole. Found: "${node.semanticRole}"`);
        }
    }

    if (node.isDropped === true) {
        // Convention 1: refersToId must be present (null is valid for top-level pro-drop)
        if (!('refersToId' in node)) {
            logError(sentenceId, node.id || 'UNKNOWN', 'Ghost node (isDropped) must have a refersToId field. Use null for top-level pro-drop with no intra-sentence referent.');
        } else if (node.refersToId && !allNodeIds.has(node.refersToId)) {
            logError(sentenceId, node.id || 'UNKNOWN', `refersToId "${node.refersToId}" does not exist in the dataset`);
        }
        // Convention 2: ghost role must be Topic or Subject
        if (node.role && node.role !== 'Topic' && node.role !== 'Subject') {
            logError(sentenceId, node.id || 'UNKNOWN', `Ghost node has unexpected role "${node.role}". Ghost nodes must be Topic or Subject.`);
        }
        // Convention 4: subRole required; no deprecated values
        if (!node.subRole) {
            logError(sentenceId, node.id || 'UNKNOWN', 'Ghost node (isDropped) must have a subRole: "pro-drop", "topic-chain", or "expletive"');
        } else if (DEPRECATED_GHOST_SUBROLES.has(node.subRole)) {
            logError(sentenceId, node.id || 'UNKNOWN', `Ghost node uses deprecated subRole "${node.subRole}". Replace with "pro-drop" or "topic-chain".`);
        } else if (!VALID_GHOST_SUBROLES.has(node.subRole)) {
            logError(sentenceId, node.id || 'UNKNOWN', `Ghost node has invalid subRole "${node.subRole}". Must be one of: ${Array.from(VALID_GHOST_SUBROLES).join(', ')}`);
        }
        // Convention 5: Adjunct ghosts cannot have semanticRole
        if (node.role === 'Adjunct' && node.semanticRole) {
            logError(sentenceId, node.id || 'UNKNOWN', 'Ghost Adjunct node cannot have semanticRole (Convention 5)');
        }
    } else {
        if (node.refersToId && !allNodeIds.has(node.refersToId)) {
            logError(sentenceId, node.id || 'UNKNOWN', `refersToId "${node.refersToId}" does not exist in the dataset`);
        }
        // subRole whitelist check for non-ghost nodes
        if (node.subRole && node.role) {
            const allowedForRole = VALID_SUBROLES[node.role];
            if (allowedForRole && !allowedForRole.has(node.subRole)) {
                logError(sentenceId, node.id || 'UNKNOWN', `Unknown subRole "${node.subRole}" for role "${node.role}". Add it to VALID_SUBROLES in validate_trees.ts if intentional.`);
            }
        }
    }
    
    // Type validation for text and impliedText
    if (node.impliedText !== undefined && typeof node.impliedText !== 'string') {
         logError(sentenceId, node.id || 'UNKNOWN', 'impliedText must be a string');
    }

    if (node.children) {
        if (node.text) {
            logError(sentenceId, node.id || 'UNKNOWN', 'Node has both children and text. It must be either a branch or a leaf.');
        }
        if (!Array.isArray(node.children)) {
            logError(sentenceId, node.id || 'UNKNOWN', 'Node children must be an array.');
        } else {
            if (node.children.length === 0) {
                logError(sentenceId, node.id || 'UNKNOWN', 'Node has an empty children array. Remove it or add children.');
            }
            for (const child of node.children) {
                validateNode(child, sentenceId);
            }
        }
    } else if (!node.isDropped) {
        // Leaf node, typical requirement
        if (!node.text) {
            logError(sentenceId, node.id || 'UNKNOWN', 'Leaf node is missing text property');
        } else {
            if (!node.text.hanzi && !node.text.pinyin && !node.text.translation) {
                logError(sentenceId, node.id || 'UNKNOWN', 'Leaf node text is empty');
            }
        }
    }
}

// 2b. Validate modern sentences
for (const s of sampleSentences) {
    const sId = s.id || 'UNKNOWN';
    if (!s.id) logError('UNKNOWN', 'ROOT', 'Sentence is missing an ID');
    if (!s.category) logError(sId, 'ROOT', 'Missing category');
    if (!s.chinese) logError(sId, 'ROOT', 'Missing chinese text');
    if (!s.pinyin) logError(sId, 'ROOT', 'Missing pinyin text');
    if (!s.translation) logError(sId, 'ROOT', 'Missing translation text');

    if (s.relatedIds !== undefined) {
        if (!Array.isArray(s.relatedIds)) {
            logError(sId, 'ROOT', 'relatedIds must be an array of strings');
        } else {
            for (const relatedId of s.relatedIds) {
                if (!allSentenceIds.has(relatedId)) {
                    logError(sId, 'ROOT', `relatedId "${relatedId}" in relatedIds does not exist in the dataset`);
                }
            }
        }
    }

    if (s.explanation !== undefined) {
        if (typeof s.explanation === 'string') {
            // plain string — OK
        } else if (typeof s.explanation === 'object' && s.explanation !== null) {
            if (typeof s.explanation.en !== 'string') {
                logError(sId, 'ROOT', 'BilingualString explanation must have an "en" string property');
            }
            if (s.explanation.zh !== undefined && typeof s.explanation.zh !== 'string') {
                logError(sId, 'ROOT', 'BilingualString explanation.zh must be a string if present');
            }
        } else {
            logError(sId, 'ROOT', 'explanation must be a string or a BilingualString object { en, zh? }');
        }
    }

    if (s.tree) {
        validateNode(s.tree, sId);
        if (s.tree.children && s.tree.children.length > 0) {
            let hasValidFLSNode = false;
            for (const child of s.tree.children) {
                if (['Topic', 'Comment', 'Parallel Sentence', 'Sentence', 'Double Topic'].includes(child.role)) {
                    hasValidFLSNode = true;
                    break;
                }
            }
            if (!hasValidFLSNode) {
                const childRoles = s.tree.children.map(c => c.role);
                if (childRoles.includes('Subject') || childRoles.includes('Predicate')) {
                    logError(sId, s.tree.id || 'UNKNOWN', `FLS Architecture Violation: Root sentence regressed to SVO parsing. Must branch into Topic/Comment framework. (Found: ${childRoles.join(', ')})`);
                }
            }
        }
    } else {
        logError(sId, 'ROOT', 'Missing grammar tree');
    }
}

// 2c. Validate classical sentences
let classicalNodeCount = 0;
const countClassicalNodes = (node: GrammarNodeData) => {
    classicalNodeCount++;
    if (node.children) for (const c of node.children) countClassicalNodes(c);
};

for (const s of classicalSentences) {
    const sId = s.id || 'UNKNOWN';
    if (!s.id) logError('UNKNOWN', 'ROOT', 'Classical sentence is missing an ID');
    if (!s.chinese) logError(sId, 'ROOT', 'Missing chinese text');
    if (!s.pinyin) logError(sId, 'ROOT', 'Missing pinyin text');
    if (!s.translation) logError(sId, 'ROOT', 'Missing translation text');
    if (!s.source) logError(sId, 'ROOT', 'Missing source citation');

    // Classical-specific: category must be a known classical category
    if (!s.category) {
        logError(sId, 'ROOT', 'Missing category');
    } else if (!VALID_CLASSICAL_CATEGORIES.has(s.category)) {
        logError(sId, 'ROOT', `Unknown classical category: "${s.category}". Must be one of the 11 defined CLASSICAL_CATEGORIES.`);
    }

    if (s.explanation !== undefined) {
        if (typeof s.explanation === 'string') {
            // plain string — OK
        } else if (typeof s.explanation === 'object' && s.explanation !== null) {
            if (typeof s.explanation.en !== 'string') {
                logError(sId, 'ROOT', 'BilingualString explanation must have an "en" string property');
            }
        } else {
            logError(sId, 'ROOT', 'explanation must be a string or BilingualString { en, zh? }');
        }
    }

    if (s.tree) {
        validateNode(s.tree, sId);
        countClassicalNodes(s.tree);
    } else {
        logError(sId, 'ROOT', 'Missing grammar tree');
    }
}

if (hasErrors) {
    console.error('\n💥 Validation failed. Please fix the errors above.');
    process.exit(1);
} else {
    console.log(`\n✅ Successfully validated ${sampleSentences.length} modern sentences and ${allNodeIds.size - classicalNodeCount} nodes.`);
    console.log(`✅ Successfully validated ${classicalSentences.length} classical sentences and ${classicalNodeCount} nodes.`);
    process.exit(0);
}

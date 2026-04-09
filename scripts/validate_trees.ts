import fs from 'fs';
const sampleSentences = JSON.parse(fs.readFileSync('./src/data/modern_sentences.json', 'utf8'));
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
for (const s of sampleSentences) {
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

const VALID_SEMANTIC_ROLES = new Set([
    'Agent', 'Patient', 'Experiencer', 'Causer', 'Theme'
]);

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

    if (node.isDropped === true && node.refersToId) {
        if (!allNodeIds.has(node.refersToId)) {
            logError(sentenceId, node.id || 'UNKNOWN', `refersToId "${node.refersToId}" does not exist in the dataset`);
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

for (const s of sampleSentences) {
    const sId = s.id || 'UNKNOWN';
    if (!s.id) {
        logError('UNKNOWN', 'ROOT', 'Sentence is missing an ID');
    }
    
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
    
    if (s.explanation !== undefined && typeof s.explanation !== 'string') {
        logError(sId, 'ROOT', 'explanation must be a string');
    }

    if (s.tree) {
        validateNode(s.tree, sId);

        // FLS Architecture Verification
        if (s.tree.children && s.tree.children.length > 0) {
            let hasValidFLSNode = false;
            for (const child of s.tree.children) {
                if (['Topic', 'Comment', 'Parallel Sentence', 'Sentence', 'Double Topic'].includes(child.role)) {
                    hasValidFLSNode = true;
                    break;
                }
            }
            if (!hasValidFLSNode) {
                // To allow single-word conversational sentences (like "走。"), we only crash if there are structural children breaking FLS.
                const childRoles = s.tree.children.map(c => c.role);
                // If it's a Subject/Predicate branch, that's illegal SVO!
                if (childRoles.includes('Subject') || childRoles.includes('Predicate')) {
                    logError(sId, s.tree.id || 'UNKNOWN', `FLS Architecture Violation: Root sentence regressed to SVO parsing. Must branch into Topic/Comment framework. (Found: ${childRoles.join(', ')})`);
                }
            }
        }
    } else {
        logError(sId, 'ROOT', 'Missing grammar tree');
    }
}

if (hasErrors) {
    console.error('\n💥 Validation failed. Please fix the errors above.');
    process.exit(1);
} else {
    console.log(`\n✅ Successfully validated ${sampleSentences.length} sentences and ${allNodeIds.size} nodes.`);
    process.exit(0);
}

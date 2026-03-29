import { sampleSentences } from '../src/data/sentences/index.js';

let hasErrors = false;

function logError(sentenceId: string | 'UNKNOWN', nodeId: string, message: string) {
    console.error(`❌ Error in Sentence [${sentenceId}] Node [${nodeId}]: ${message}`);
    hasErrors = true;
}

const allNodeIds = new Set();
const allSentenceIds = new Set();

function validateNode(node: any, sentenceId: string) {
    if (!node.id) {
        logError(sentenceId, 'UNKNOWN', 'Node is missing an ID');
    } else {
        if (allNodeIds.has(node.id)) {
            logError(sentenceId, node.id, 'Duplicate Node ID found across the dataset');
        }
        allNodeIds.add(node.id);
    }

    if (!node.role) {
        logError(sentenceId, node.id, 'Node is missing a grammar role');
    }

    if (node.children) {
        if (node.text) {
            logError(sentenceId, node.id, 'Node has both children and text. It must be either a branch or a leaf.');
        }
        if (node.children.length === 0) {
            logError(sentenceId, node.id, 'Node has an empty children array. Remove it or add children.');
        }
        for (const child of node.children) {
            validateNode(child, sentenceId);
        }
    } else if (!node.isDropped) {
        // Leaf node, typical requirement
        if (!node.text) {
            logError(sentenceId, node.id, 'Leaf node is missing text property');
        } else {
            if (!node.text.hanzi && !node.text.pinyin && !node.text.translation) {
                logError(sentenceId, node.id, 'Leaf node text is empty');
            }
        }
    }
}

for (const s of sampleSentences) {
    if (!s.id) {
        logError('UNKNOWN', 'UNKNOWN', 'Sentence is missing an ID');
        continue;
    }
    
    if (allSentenceIds.has(s.id)) {
        logError(s.id, 'ROOT', 'Duplicate Sentence ID found');
    }
    allSentenceIds.add(s.id);
    
    if (!s.category) logError(s.id, 'ROOT', 'Missing category');
    if (!s.chinese) logError(s.id, 'ROOT', 'Missing chinese text');
    
    if (s.tree) {
        validateNode(s.tree, s.id);
    } else {
        logError(s.id, 'ROOT', 'Missing grammar tree');
    }
}

if (hasErrors) {
    console.error('\n💥 Validation failed. Please fix the errors above.');
    process.exit(1);
} else {
    console.log(`\n✅ Successfully validated ${sampleSentences.length} sentences and ${allNodeIds.size} nodes.`);
    process.exit(0);
}

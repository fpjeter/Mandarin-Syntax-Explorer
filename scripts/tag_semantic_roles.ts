/**
 * Automated Semantic Role Tagger (JSON AST Version)
 * 
 * Applies the "Primary Actors Only" 5-role palette to all untagged Topic/Subject nodes.
 * Uses AST traversal to find the corresponding Head Verb and determine Agent/Experiencer/Theme/Causer.
 */
import fs from 'fs';
import path from 'path';

const EXPERIENCER_VERBS = ['觉得', '喜欢', '讨厌', '怕', '知道', '想', '爱', '希望',
    '感到', '认为', '担心', '害怕', '高兴', '心疼', '着急', '看见', '听到',
    '以为', '明白', '了解', '忘', '记得', '羡慕', '佩服', '恨', '介意',
    '后悔', '嫌', '满意', '懂', '希望'];

const CAUSER_VERBS = ['让', '叫', '请', '派', '使', '要求', '命令'];

const filesToProcess = [
    'src/data/modern_sentences.json',
    'src/data/classical_sentences.json'
];

let totalEdits = 0;

// Helper to find the first Head Verb or Copula within a node and its descendants
function findFirstVerb(node: any): { verbText: string, isCopula: boolean } | null {
    if (!node) return null;
    
    if (node.role === 'Head Verb' && node.text?.hanzi) {
        return { verbText: node.text.hanzi, isCopula: false };
    }
    if (node.role === 'Copula' && node.text?.hanzi) {
        return { verbText: node.text.hanzi, isCopula: true };
    }

    if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
            const found = findFirstVerb(child);
            if (found) return found;
        }
    }
    return null;
}

// Recursive AST traversal to tag nodes
function traverseAndTag(node: any, parent: any | null, isPivotalCategory: boolean): number {
    let edits = 0;

    // Process children first (bottom-up can sometimes be safer, but top-down is fine here)
    if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
            edits += traverseAndTag(child, node, isPivotalCategory);
        }
    }

    if ((node.role === 'Topic' || node.role === 'Subject') && !node.semanticRole) {
        const subRole = node.subRole || '';
        
        // Skip structural topics
        const isConditional = subRole.includes('conditional');
        const isCorrelative = subRole.includes('correlative');
        const isSerialVerb = subRole.includes('serial verb') || subRole.includes('clause 1');
        const isLian = subRole.includes('lian') || subRole.includes('连');
        const isSituational = subRole.includes('situational frame');
        const isTimeLocation = subRole === 'time' || subRole === 'location';

        if (isConditional || isCorrelative || isSerialVerb || isLian || isSituational || isTimeLocation) {
            return edits;
        }

        // Find the verb in subsequent siblings
        let headVerb = '';
        let hasCopula = false;

        if (parent && parent.children) {
            const myIndex = parent.children.indexOf(node);
            for (let i = myIndex + 1; i < parent.children.length; i++) {
                const sibling = parent.children[i];
                const verbInfo = findFirstVerb(sibling);
                if (verbInfo) {
                    headVerb = verbInfo.verbText;
                    hasCopula = verbInfo.isCopula;
                    break;
                }
            }
        }

        let role = 'Agent'; // default

        const isPivot = subRole.includes('pivot');

        if (isPivot) {
            role = 'Agent'; // Pivots usually do the next action
        } else if (isPivotalCategory && !isPivot && headVerb && CAUSER_VERBS.some(v => headVerb.includes(v))) {
            role = 'Causer'; // Outer topic in pivotal is Causer
        } else if (headVerb && EXPERIENCER_VERBS.some(v => headVerb.includes(v))) {
            role = 'Experiencer';
        } else if (hasCopula) {
            role = 'Theme'; // Copula describes Theme
        } else if (['很', '太', '非常', '真', '挺', '不'].some(w => headVerb.includes(w))) {
            // Very rudimentary check for stative adjectival verbs
            role = 'Theme';
        }

        node.semanticRole = role;
        edits++;
    }

    return edits;
}

for (const file of filesToProcess) {
    const filePath = path.resolve(file);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${file}`);
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const sentences = JSON.parse(content);
    let fileEdits = 0;

    for (const sentence of sentences) {
        const isPivotal = sentence.category && sentence.category.includes('Pivotal');
        if (sentence.tree) {
            fileEdits += traverseAndTag(sentence.tree, null, isPivotal);
        }
    }

    if (fileEdits > 0) {
        // Write back with exact 2-space indentation
        fs.writeFileSync(filePath, JSON.stringify(sentences, null, 2) + '\n');
        console.log(`${file}: ${fileEdits} nodes tagged`);
        totalEdits += fileEdits;
    } else {
        console.log(`${file}: 0 nodes tagged (already fully tagged or no matches)`);
    }
}

console.log(`\nTotal: ${totalEdits} nodes newly tagged with semantic roles.`);

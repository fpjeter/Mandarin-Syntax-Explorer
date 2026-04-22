/**
 * Semantic Tagging Manual Corrections
 * Applies 10 specific corrections from the Linguistics Specialist's audit.
 */
import fs from 'fs';

const filePath = 'src/data/modern_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const corrections = [
    // s69: Subject nodes should be Agent (people performing comparisons, not stative descriptions)
    { nodeId: 's69-s1', from: 'Theme', to: 'Agent' },
    { nodeId: 's69-s2', from: 'Theme', to: 'Agent' },
    // s100: Subject is the doer (you forgot something), not an experiencer
    { nodeId: 'n100-subj', from: 'Experiencer', to: 'Agent' },
    // s85: 你 is the Agent (you are not getting angry — an action/choice, not a feeling)
    { nodeId: 's85-ni', from: 'Theme', to: 'Agent' },
    // s8, s23, s50, s104, s105: 是…的 sentences where the Topic is the Agent who performed the action
    { nodeId: 'n8-t', from: 'Theme', to: 'Agent' },
    { nodeId: 'n23-t', from: 'Theme', to: 'Agent' },
    { nodeId: 'n50-t', from: 'Theme', to: 'Agent' },
    { nodeId: 's104-t', from: 'Theme', to: 'Agent' },
    { nodeId: 's105-t', from: 'Theme', to: 'Agent' },
    // s26: Inner topic is being described (Theme), not experiencing anything
    { nodeId: 'n26-c-t2', from: 'Experiencer', to: 'Theme' },
];

function findNode(node, id) {
    if (node.id === id) return node;
    if (node.children) {
        for (const child of node.children) {
            const result = findNode(child, id);
            if (result) return result;
        }
    }
    return null;
}

let applied = 0;
let errors = 0;

for (const correction of corrections) {
    let found = false;
    for (const sentence of data) {
        const node = findNode(sentence.tree, correction.nodeId);
        if (node) {
            if (node.semanticRole === correction.from) {
                node.semanticRole = correction.to;
                console.log(`✅ ${correction.nodeId} (${sentence.id}): ${correction.from} → ${correction.to}`);
                applied++;
            } else {
                console.log(`⚠️ ${correction.nodeId} (${sentence.id}): expected ${correction.from}, got ${node.semanticRole || 'NONE'}`);
                errors++;
            }
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(`❌ ${correction.nodeId}: NOT FOUND`);
        errors++;
    }
}

if (errors === 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`\n✅ Applied ${applied} corrections successfully. File written.`);
} else {
    console.log(`\n❌ ${errors} errors found. File NOT written.`);
}

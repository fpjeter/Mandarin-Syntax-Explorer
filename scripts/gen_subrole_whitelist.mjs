/**
 * Generates the complete current subRole inventory from the dataset.
 * Run: node scripts/gen_subrole_whitelist.mjs
 * Use output to update VALID_SUBROLES in validate_trees.ts.
 */
import fs from 'fs';
const m = JSON.parse(fs.readFileSync('./src/data/modern_sentences.json', 'utf8'));
const c = JSON.parse(fs.readFileSync('./src/data/classical_sentences.json', 'utf8'));

const byRole = {};
function walk(node) {
    if (node.role && node.subRole && !node.isDropped) {
        if (!byRole[node.role]) byRole[node.role] = new Set();
        byRole[node.role].add(node.subRole);
    }
    if (node.children) node.children.forEach(walk);
}
[...m, ...c].forEach(s => walk(s.tree));

for (const [role, subRoles] of Object.entries(byRole).sort()) {
    const sorted = [...subRoles].sort();
    console.log(`    '${role}': new Set([`);
    sorted.forEach(sr => console.log(`        '${sr}',`));
    console.log(`    ]),`);
}

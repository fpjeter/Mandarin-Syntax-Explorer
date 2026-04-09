import fs from 'fs';
import path from 'path';
const d = 'src/data/sentences';
const files = fs.readdirSync(d).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const counts = {};
files.forEach(f => {
    const c = fs.readFileSync(path.join(d, f), 'utf8');
    const matches = [...c.matchAll(/semanticRole:\s*'([^']+)'/g)];
    matches.forEach(m => {
        counts[m[1]] = (counts[m[1]] || 0) + 1;
    });
});
console.log('Semantic Role Distribution:');
Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([role, count]) => {
    console.log(`  ${role}: ${count}`);
});
console.log(`  Total: ${Object.values(counts).reduce((a, b) => a + b, 0)}`);

// Check for any remaining untagged topics
let untagged = 0;
files.forEach(f => {
    const c = fs.readFileSync(path.join(d, f), 'utf8');
    const lines = c.split('\n');
    lines.forEach((l, i) => {
        if (l.includes("role: 'Topic'") && !l.includes('semanticRole') && !l.includes("subRole: 'conditional'") && !l.includes("subRole: 'correlative'") && !l.includes("subRole: 'serial verb") && !l.includes("subRole: 'clause") && !l.includes("subRole: 'lian-") && !l.includes("连-construction") && !l.includes("subRole: 'situational")) {
            untagged++;
            console.log(`  UNTAGGED: ${f}:${i+1}: ${l.trim()}`);
        }
    });
});
if (untagged === 0) console.log('\n✅ All actionable Topics are tagged');
else console.log(`\n⚠️ ${untagged} Topics still untagged`);

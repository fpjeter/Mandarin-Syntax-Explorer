import fs from 'fs';
const filePath = 'src/data/classical_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function findNode(tree, id) {
  if (tree.id === id) return tree;
  if (tree.children) for (const c of tree.children) { const r = findNode(c, id); if (r) return r; }
  return null;
}

let fixes = 0;

// Fix 1: cc34 — Change 為 from Copula to Head Verb (copulative)
const cc34 = data.find(s => s.id === 'cc34');
const cc34wei = findNode(cc34.tree, 'cc34-wei');
if (cc34wei.role === 'Copula') {
  cc34wei.role = 'Head Verb';
  cc34wei.subRole = 'copulative';
  console.log('✅ Fix 1: cc34-wei role Copula → Head Verb, added subRole: copulative');
  fixes++;
}

// Fix 2: cc39 — Change root from Sentence to Parallel Sentence
const cc39 = data.find(s => s.id === 'cc39');
if (cc39.tree.role === 'Sentence') {
  cc39.tree.role = 'Parallel Sentence';
  console.log('✅ Fix 2: cc39 root role Sentence → Parallel Sentence');
  fixes++;
}

// Fix 3: cc34 — Remove the empty implicit conditional Adjunct node (Option B: cleaner)
// Find and remove the cc34-adj empty node
const cc34root = cc34.tree;
const adjIdx = cc34root.children.findIndex(c => c.id === 'cc34-adj');
if (adjIdx !== -1) {
  cc34root.children.splice(adjIdx, 1);
  console.log('✅ Fix 3: Removed cc34-adj empty Adjunct node (implicit conditional) for consistency with cc43');
  fixes++;
}

// Fix 4: cc33 — Add subRole: quotative to 曰 Head Verb
const cc33 = data.find(s => s.id === 'cc33');
const cc33yue = findNode(cc33.tree, 'cc33-yue');
if (cc33yue && !cc33yue.subRole) {
  cc33yue.subRole = 'quotative';
  console.log('✅ Fix 4: cc33-yue added subRole: quotative');
  fixes++;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log(`\n✅ Applied ${fixes} fixes. File written.`);

import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(process.cwd(), 'src/data/sentences');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

const counts: Record<string, number> = {};
let total = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
  const matches = content.match(/category:\s*(['"])(.*?)\1/g);
  if (matches) {
    for (const match of matches) {
      let cat = match.replace(/category:\s*['"]/, '').replace(/['"]$/, '');
      // Note: we can map exact category keys if they have unicode
      cat = cat.replace(/\\u([0-9a-fA-F]{4})/g, (m, c) => String.fromCharCode(parseInt(c, 16)));
      counts[cat] = (counts[cat] || 0) + 1;
      total++;
    }
  }
}

console.log('--- Sentence Category Counts ---');
for (const [cat, count] of Object.entries(counts).sort((a,b) => b[1] - a[1])) {
  console.log(`${cat} : ${count}`);
}
console.log('Total sentences: ' + total);

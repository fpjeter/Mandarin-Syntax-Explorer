import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/sentences.ts', 'utf8');

const arrayStartMarker = 'export const sampleSentences: SentenceData[] = [';
const startIndex = content.indexOf(arrayStartMarker);
if (startIndex === -1) throw new Error("Could not find start marker");

const arrStart = startIndex + arrayStartMarker.length;
let i = arrStart;
let depth = 0;
let inString = false;
let stringChar = '';

const sentences = [];
let currentStart = -1;

while (i < content.length) {
    const char = content[i];
    
    // String skipping logic
    if (inString) {
        if (char === '\\') { i += 2; continue; }
        if (char === stringChar) { inString = false; }
        i++;
        continue;
    }
    
    if (char === '"' || char === "'") {
        inString = true;
        stringChar = char;
        i++;
        continue;
    }
    
    if (char === '{') {
        if (depth === 0) currentStart = i;
        depth++;
    } else if (char === '}') {
        depth--;
        if (depth === 0) {
            sentences.push(content.substring(currentStart, i + 1));
        }
    } else if (char === ']' && depth === 0) {
        break; // End of array
    }
    
    i++;
}

fs.mkdirSync('src/data/sentences', { recursive: true });

function getFilename(category) {
    let name = category.split(' (')[0]; 
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

const groups = {};
for(const s of sentences) {
    const match = s.match(/category:\s*'([^']+)'/);
    if (!match) throw new Error("Could not find category in " + s.substring(0, 100));
    let cat = match[1];
    
    // Some string literals in sentences.ts have explicit unicode escape sequences.
    // Decode them so we don't accidentally split the same category into two files.
    cat = cat.replace(/\\u([0-9A-Fa-f]{4})/g, (m, c) => String.fromCharCode(parseInt(c, 16)));
    
    const file = getFilename(cat);
    
    if (!groups[file]) groups[file] = [];
    groups[file].push(s);
}

const indexExports = [];

for(const [file, items] of Object.entries(groups)) {
    const varName = file.split('_').map((w,idx) => idx===0 ? w : w[0].toUpperCase() + w.substring(1)).join('');
    
    const fileContent = `import type { SentenceData } from '../../types/grammar';\n\nexport const ${varName}: SentenceData[] = [\n` + 
        items.map(s => '    ' + s).join(',\n') + '\n];\n';
        
    fs.writeFileSync(`src/data/sentences/${file}.ts`, fileContent);
    indexExports.push(`import { ${varName} } from './${file}';`);
    console.log(`Wrote ${file}.ts with ${items.length} sentences`);
}

const indexContent = indexExports.join('\n') + '\n\n' + 
    'import type { SentenceData } from \'../../types/grammar\';\n\n' +
    'export const sampleSentences: SentenceData[] = [\n' +
    Object.keys(groups).map(file => {
        const varName = file.split('_').map((w,i) => i===0 ? w : w[0].toUpperCase() + w.substring(1)).join('');
        return `    ...${varName}`;
    }).join(',\n') +
    '\n];\n';

fs.writeFileSync('src/data/sentences/index.ts', indexContent);
console.log('Wrote index.ts');

import fs from 'fs';
import path from 'path';

// Load the raw Typescript AST object arrays
import { sampleSentences } from '../src/data/sentences/index';
import { classicalSentences } from '../src/data/classicalSentences';

const jsonDraftsDir = path.resolve(process.cwd(), 'src/data/json_drafts');

// Ensure the drafts folder exists
if (!fs.existsSync(jsonDraftsDir)) {
    fs.mkdirSync(jsonDraftsDir, { recursive: true });
}

console.log('🔄 Compiling Modern Sentences to JSON...');
const modernPath = path.join(jsonDraftsDir, 'modern_sentences.json');
fs.writeFileSync(modernPath, JSON.stringify(sampleSentences, null, 2), 'utf-8');
console.log(`✅ Wrote ${sampleSentences.length} modern sentences to ${modernPath}`);

console.log('🔄 Compiling Classical Sentences to JSON...');
const classicalPath = path.join(jsonDraftsDir, 'classical_sentences.json');
fs.writeFileSync(classicalPath, JSON.stringify(classicalSentences, null, 2), 'utf-8');
console.log(`✅ Wrote ${classicalSentences.length} classical sentences to ${classicalPath}`);

console.log('💯 Databank JSON Compilation Complete. Ready for Phase 8!');

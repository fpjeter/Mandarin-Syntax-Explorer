const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'src', 'data', 'classicalSentences.ts');
let content = fs.readFileSync(target, 'utf8');

// The file uses single quotes for explanation strings.
// Let's replace \" with " safely. 
content = content.replace(/\\"/g, '"');

fs.writeFileSync(target, content, 'utf8');
console.log('Fixed classical sentences!');

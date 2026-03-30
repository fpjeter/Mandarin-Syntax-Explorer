const fs = require('fs');
const path = require('path');
const fileP = path.join(__dirname, 'src/utils/generateStudySheet.ts');

let content = fs.readFileSync(fileP, 'utf8');
content = content.replace(/\r\n/g, '\n');

const s1 = '/**\n * Opens a new window with a visual SVG syntax tree';
const e1 = '\n/** Map grammar roles to color categories';

const idxS1 = content.indexOf(s1);
const idxE1 = content.indexOf(e1);

if (idxS1 > -1 && idxE1 > idxS1) {
    content = content.slice(0, idxS1) + content.slice(idxE1 + 1);
    console.log('Removed generateVisualTreeSheet block');
} else {
    console.log("Failed block 1", idxS1, idxE1);
}

const s2 = '/** Convert **bold** markdown';
const e2 = '\n/**\n * Opens a single print window';

const idxS2 = content.indexOf(s2);
const idxE2 = content.indexOf(e2);

if (idxS2 > -1 && idxE2 > idxS2) {
    content = content.slice(0, idxS2) + content.slice(idxE2 + 1);
    console.log('Removed generateStudySheet block');
} else {
    console.log("Failed block 2", idxS2, idxE2);
}

fs.writeFileSync(fileP, content, 'utf8');
console.log('Refactoring saved!');

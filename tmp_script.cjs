const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/data/sentences');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let totalChanges = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let original = fs.readFileSync(filePath, 'utf8');
    
    // Process only within explanation blocks
    let modified = original.replace(/(explanation:\s*')(.*?)(')/gs, (match, prefix, expl, suffix) => {
        let newExpl = expl;

        // Pattern 1: **Chinese** (english) -> **Chinese** ("english")
        newExpl = newExpl.replace(/(\*\*[\u4e00-\u9fa5a-zA-Z0-9\[\]]+\*\*)\s*\(([^)"*]+)\)/g, (m, p1, p2) => {
            // Check if p2 is fundamentally translation text (mostly English letters/spaces/basic punctuation)
            if (/^[a-zA-Z0-9\s,\/.'-]+$/.test(p2)) {
                return `${p1} ("${p2}")`;
            }
            return m;
        });

        // Pattern 2: [Chinese] (english)
        newExpl = newExpl.replace(/(\[[\u4e00-\u9fa5a-zA-Z0-9]+\](?!\*\*))\s*\(([^)"*]+)\)/g, (m, p1, p2) => {
            if (/^[a-zA-Z0-9\s,\/.'-]+$/.test(p2)) {
                return `${p1} ("${p2}")`;
            }
            return m;
        });

        // Pattern 3: Chinese (english)
        newExpl = newExpl.replace(/([\u4e00-\u9fa5]+(?![\*\u4e00-\u9fa5]))\s*\(([^)"*。；]+)\)/g, (m, p1, p2) => {
            if (/^[a-zA-Z0-9\s,\/.'-]+$/.test(p2)) {
                return `${p1} ("${p2}")`;
            }
            return m;
        });

        return prefix + newExpl + suffix;
    });

    if (original !== modified) {
        fs.writeFileSync(filePath, modified, 'utf8');
        totalChanges++;
        console.log(`Updated literals in ${file}`);
    }
});

console.log(`\nFinished formatting sweep. Modified ${totalChanges} files.`);

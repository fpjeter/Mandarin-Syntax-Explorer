/**
 * Automated Semantic Role Tagger
 * 
 * Applies the "Primary Actors Only" 5-role palette to all untagged Topic nodes.
 * Uses Head Verb detection to determine Agent vs Experiencer vs Theme vs Causer.
 */
import fs from 'fs';
import path from 'path';

const EXPERIENCER_VERBS = ['觉得', '喜欢', '讨厌', '怕', '知道', '想', '爱', '希望',
    '感到', '认为', '担心', '害怕', '高兴', '心疼', '着急', '看见', '听到',
    '以为', '明白', '了解', '忘', '记得', '羡慕', '佩服', '恨', '介意',
    '后悔', '嫌', '满意'];

const CAUSER_VERBS = ['让', '叫', '请', '派', '使', '要求', '命令'];

const dir = 'src/data/sentences';
const skipFiles = new Set(['index.ts', 'ba_construction.ts', 'bei_passive.ts']);
const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.ts') && !skipFiles.has(f))
    .sort();

let totalEdits = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    let fileEdits = 0;

    const isPivotal = file === 'pivotal_constructions.ts';

    // Strategy: Find each sentence block, determine head verb, then tag topics
    // We split by sentence ID to process sentences individually
    const lines = content.split('\n');
    const result = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check if this line has an untagged Topic
        if (line.includes("role: 'Topic'") && !line.includes('semanticRole')) {
            // Look ahead to find the head verb in the Comment block
            // Search forward up to 80 lines for a Head Verb or Copula
            let headVerb = '';
            let hasCopula = false;
            const isConditionalTopic = line.includes("subRole: 'conditional'");
            const isCorrelativeTopic = line.includes("subRole: 'correlative'") || line.includes("subRole: 'first correlative'");
            const isPivotTopic = line.includes("subRole: 'pivot'");
            const isSerialVerbTopic = line.includes("subRole: 'serial verb") || line.includes("subRole: 'clause 1'");
            const isLianTopic = line.includes("subRole: 'lian-construction'") || line.includes("subRole: '连-construction");
            const isSituationalFrame = line.includes("subRole: 'situational frame'");

            for (let j = i + 1; j < Math.min(i + 80, lines.length); j++) {
                const fwd = lines[j];
                if (fwd.includes("role: 'Head Verb'") || fwd.includes("role: 'Copula'")) {
                    // Extract the hanzi from the next few lines
                    for (let k = j; k < Math.min(j + 3, lines.length); k++) {
                        const hanzMatch = lines[k].match(/hanzi:\s*'([^']+)'/);
                        if (hanzMatch) {
                            headVerb = hanzMatch[1];
                            break;
                        }
                    }
                    if (fwd.includes("role: 'Copula'")) hasCopula = true;
                    break;
                }
                // Stop if we hit the next sentence
                if (fwd.includes("id: 's") && fwd.includes("category:")) break;
            }

            // Determine semantic role
            let role = 'Agent'; // default

            // Conditional/correlative Topics are structural, not actors — skip them
            if (isConditionalTopic || isCorrelativeTopic || isSerialVerbTopic || isLianTopic || isSituationalFrame) {
                result.push(line);
                continue;
            }

            // Pivot topics in pivotal constructions are Agents (they do the next action)
            if (isPivotTopic) {
                role = 'Agent';
            }
            // Pivotal outer topics are Causers
            else if (isPivotal && !isPivotTopic && headVerb && CAUSER_VERBS.some(v => headVerb.includes(v))) {
                role = 'Causer';
            }
            // Experiencer verbs
            else if (headVerb && EXPERIENCER_VERBS.some(v => headVerb.includes(v))) {
                role = 'Experiencer';
            }
            // Copula/adjectival = Theme (thing being described)
            else if (hasCopula) {
                role = 'Theme';
            }
            // Stative adjectives with no Object = Theme
            else if (['很', '太', '非常', '真', '挺'].some(w => headVerb.includes(w))) {
                role = 'Theme';
            }
            // Default to Agent for action verbs
            else {
                role = 'Agent';
            }

            // Inject semanticRole into the line
            const modified = line.replace(
                "role: 'Topic'",
                "role: 'Topic', semanticRole: '" + role + "'"
            );
            result.push(modified);
            fileEdits++;
        } else {
            result.push(line);
        }
    }

    if (fileEdits > 0) {
        fs.writeFileSync(filePath, result.join('\n'));
        console.log(`${file}: ${fileEdits} topics tagged`);
        totalEdits += fileEdits;
    }
}

console.log(`\nTotal: ${totalEdits} topics tagged across ${files.length} files`);

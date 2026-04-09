import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(process.cwd(), 'src/data/sentences');
const files = fs.readdirSync(dataDir).filter((f: string) => f.endsWith('.ts'));

files.forEach((f: string) => {
    const filePath = path.join(dataDir, f);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/subRole:\s*'([^']+)'/g, (match: string, rawSubRole: string) => {
        const lower = rawSubRole.toLowerCase();

        // Already normalized adjuncts or standard strings to preserve completely:
        if (['time', 'location', 'manner', 'instrument', 'comitative', 'direction', 'duration', 'frequency', 'degree', 'concession', 'causal', 'condition', 'purpose'].includes(lower)) {
            return match;
        }

        // 1. Complements
        if (lower.includes('resultative')) return "subRole: 'resultative'";
        if (lower.includes('directional') || lower.includes('direction morpheme')) return "subRole: 'directional'";
        if (lower.includes('potential')) return "subRole: 'potential'";
        if (lower.includes('degree complement')) return "subRole: 'degree'";

        // 2. Verb Chains & Clauses
        if (lower.includes('serial verb 1') || lower.match(/vp1|clause a|first clause/)) return "subRole: 'serial verb 1'";
        if (lower.includes('serial verb 2') || lower.match(/vp2|clause b|second clause/)) return "subRole: 'serial verb 2'";
        if (lower.includes('serial verb 3') || lower.match(/vp3|clause 3|third clause/)) return "subRole: 'serial verb 3'";
        if (lower.match(/clause 1/)) return "subRole: 'clause 1'";
        if (lower.match(/clause 2/)) return "subRole: 'clause 2'";

        // 3. Sentence Framework
        if (lower.includes('outer topic') || lower.includes('left-dislocation')) return "subRole: 'outer topic'";
        if (lower.includes('inner topic') || lower === 'patient-topic') return "subRole: 'inner topic'";
        if (lower.includes('ghost node') || lower.includes('implied topic')) return "subRole: 'implied topic'";

        // 4. Particles & Markers
        if (lower.includes('aspect') || lower.includes('completion')) return "subRole: 'aspect marker'";
        if (lower.includes('passive marker') || lower.includes('bei') || lower.includes('bèi')) return "subRole: 'passive marker'";
        if (lower.includes('ba-construction') || lower.includes('ba marker') || lower.includes('bǎ')) return "subRole: 'disposal marker'";
        if (lower.includes('question marker')) return "subRole: 'question particle'";
        if (lower.includes('structural')) return "subRole: 'structural particle'";
        if (lower.includes('negator') || lower.includes('negation') || lower.includes('double-negation')) return "subRole: 'negation'";

        // 5. Clause Nesting / Situation Verbs
        if (lower.includes('embedded predicate')) return "subRole: 'embedded predicate'";
        if (lower.includes('situation object')) return "subRole: 'situation object'";
        if (lower.includes('separable verb')) return "subRole: 'separable verb'";

        // Return the match if it didn't hit any of the strict normalization rules.
        // It might be a valid specific role like "causative" or "correlative" 
        // that shouldn't be butchered.
        if (lower.includes('correlative')) return "subRole: 'correlative'";
        if (lower.includes('causative')) return "subRole: 'causative'";
        if (lower.includes('consequence')) return "subRole: 'consequence'";
        if (lower.includes('conditional')) return "subRole: 'conditional'";
        if (lower.includes('rhetorical')) return "subRole: 'rhetorical'";

        // Fallback catch-alls for remaining weird fragments:
        if (lower.includes('pivot')) return "subRole: 'pivot'";
        if (lower.includes('comparison')) return "subRole: 'comparison'";

        return match;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log("Normalization complete.");

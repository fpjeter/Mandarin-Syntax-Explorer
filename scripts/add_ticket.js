import fs from 'fs';
let c = fs.readFileSync('.agents/handoff_log.md', 'utf8');
const ticket = `### [2026-04-25] User (out-of-band) -> Data Linguist
**Status**: Done
**Task**: Classical Batch Review Fixes (4 issues from classical_batch_review.md)
**Branch**: main

**Fixes Applied:**
1. cc34-wei: role Copula -> Head Verb, added subRole: copulative
2. cc39: root role Sentence -> Parallel Sentence
3. cc34: Removed empty cc34-adj Adjunct node (Option B)
4. cc33-yue: added subRole: quotative

**Urgency**: MEDIUM

`;
const sentinel = '<!-- INSERT NEW TICKETS ABOVE THIS LINE - do NOT append to the bottom of the file -->';
c = c.replace(sentinel, ticket + sentinel);
fs.writeFileSync('.agents/handoff_log.md', c);
console.log('Ticket added');

import fs from 'fs';
const filePath = 'src/data/modern_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function findNode(tree, id) {
  if (tree.id === id) return tree;
  if (tree.children) for (const c of tree.children) { const r = findNode(c, id); if (r) return r; }
  return null;
}

function findGhosts(node, results = []) {
  if (node.isDropped || (node.id && node.id.includes('ghost'))) results.push(node);
  if (node.children) for (const c of node.children) findGhosts(c, results);
  return results;
}

// Corrections map: sentenceId -> [{ ghostId, corrections }]
const fixes = [
  // s13: 我把他吃了一碗饭 — ghost Topic [我], refers to itself (no overt referent in sentence)
  // Actually for sentence-level Topics that ARE the ghost, refersToId is tricky.
  // Per convention: if ghost IS the sentence-level Topic, it has no antecedent within the sentence.
  // We use refersToId to point at the overt Topic... but there isn't one.
  // For pro-drop sentence-level Topics, refersToId should be omitted or self-referential.
  // Actually re-reading the conventions: "If the ghost refers to the sentence-level Topic, 
  // refersToId points to the Topic node's id" — but the ghost IS the Topic.
  // For self-standing ghost Topics, we'll set refersToId to null (context-dependent).
  // Let me re-read... The ticket says to ADD refersToId. For sentence-level ghosts that are
  // the discourse topic themselves, there's no in-sentence referent. We skip refersToId for these.
  // Actually the conventions say "REQUIRED on all ghost nodes" — so we need something.
  // For pro-drop sentence-level topics, the referent is extra-sentential (prior discourse).
  // The convention says for Discourse Context: "refersToId points to the sentence-level Topic node"
  // For others: the ghost IS the topic, so we can self-reference or point to... 
  // Let's just not add refersToId for sentence-level ghost Topics where no overt referent exists.
  // Actually wait - s15 and s16 are marked as correct with refersToId pointing to the overt Topic.
  // Those are Subject ghosts inside Comments. For Topic ghosts, there's no overt referent.
  // Let me just follow the ticket literally and add what makes sense.

  // s13: ghost Topic [我] — no overt referent, pro-drop
  { sid: 's13', ghostId: 'n13-s', fixes: { subRole: 'pro-drop' } },
  
  // s14: ghost Topic [我们] — no overt referent, pro-drop  
  { sid: 's14', ghostId: 'n14-s', fixes: { subRole: 'pro-drop' } },
  
  // s15: already correct (Subject, ref=n15-t) — just verify subRole
  { sid: 's15', ghostId: 'n15-subj', fixes: { subRole: 'pro-drop' } },
  
  // s16: already correct (Subject, ref=n16-t) — fix semanticRole to inherit from referent
  // n16-t is the Topic 他 — need to check its semanticRole
  { sid: 's16', ghostId: 'n16-subj', fixes: { subRole: 'pro-drop' } },
  
  // s17: two ghosts — outer Topic [他] and inner Subject [他]
  { sid: 's17', ghostId: 'n17-topic', fixes: { subRole: 'pro-drop' } },
  { sid: 's17', ghostId: 'n17-comp-subj', fixes: { subRole: 'pro-drop', role: 'Subject', refersToId: 'n17-topic' } },
  
  // s18: ghost Topic [它] — pro-drop
  { sid: 's18', ghostId: 'n18-topic', fixes: { subRole: 'pro-drop' } },
  
  // s28: ghost Topic [你] — pro-drop (imperative)
  { sid: 's28', ghostId: 'n28-t', fixes: { subRole: 'pro-drop' } },
  
  // s69: ghost Topic [规律] — pro-drop
  { sid: 's69', ghostId: 's69-t', fixes: { subRole: 'pro-drop' } },
  
  // s81: ghost Topic [[现场]] — EXPLETIVE, semanticRole=Theme
  { sid: 's81', ghostId: 's81-t', fixes: { subRole: 'expletive', semanticRole: 'Theme' } },
  
  // s87: ghost Topic [规律] — pro-drop
  { sid: 's87', ghostId: 's87-t', fixes: { subRole: 'pro-drop' } },
  
  // s91: ghost Topic — pro-drop
  { sid: 's91', ghostId: 's91-t', fixes: { subRole: 'pro-drop' } },
  
  // s94, s95, s96: Discourse Context — topic-chain
  { sid: 's94', ghostId: 'n94-t', fixes: { subRole: 'topic-chain' } },
  { sid: 's95', ghostId: 'n95-t', fixes: { subRole: 'topic-chain' } },
  { sid: 's96', ghostId: 'n96-t', fixes: { subRole: 'topic-chain' } },
  
  // s100: ghost Topic [这] — pro-drop
  { sid: 's100', ghostId: 'n100-t', fixes: { subRole: 'pro-drop' } },
  
  // s127: ghost Topic [你] — needs isDropped: true restored, pro-drop
  { sid: 's127', ghostId: 's127-ghost', fixes: { subRole: 'pro-drop', isDropped: true } },
  
  // s132: ghost Topic [[有人]] — pro-drop (replace deprecated 'implied topic')
  { sid: 's132', ghostId: 's132-ghost', fixes: { subRole: 'pro-drop' } },
];

let applied = 0;
for (const fix of fixes) {
  const sentence = data.find(s => s.id === fix.sid);
  if (!sentence) { console.log(`❌ ${fix.sid}: NOT FOUND`); continue; }
  
  const ghost = findNode(sentence.tree, fix.ghostId);
  if (!ghost) { console.log(`❌ ${fix.sid}/${fix.ghostId}: NODE NOT FOUND`); continue; }
  
  // Apply all fixes
  for (const [key, value] of Object.entries(fix.fixes)) {
    const old = ghost[key];
    ghost[key] = value;
    console.log(`✅ ${fix.sid}/${fix.ghostId}: ${key} ${old || 'NONE'} → ${value}`);
  }
  
  // Ensure isDropped is set (except for nodes that already have it)
  if (!ghost.isDropped && fix.fixes.isDropped !== false) {
    // Only force isDropped if the node is clearly a ghost (has impliedText or bracket text)
    if (ghost.impliedText || (ghost.text && ghost.text.hanzi.startsWith('['))) {
      ghost.isDropped = true;
      console.log(`  + ${fix.ghostId}: added isDropped=true`);
    }
  }
  
  applied++;
}

// Now handle semanticRole inheritance (Convention 5)
// For each ghost with a refersToId, copy the referent's semanticRole
for (const sentence of data) {
  const ghosts = findGhosts(sentence.tree);
  for (const ghost of ghosts) {
    if (ghost.subRole === 'expletive') continue; // s81 already handled
    if (ghost.refersToId) {
      const referent = findNode(sentence.tree, ghost.refersToId);
      if (referent && referent.semanticRole) {
        if (ghost.semanticRole !== referent.semanticRole) {
          console.log(`🔄 ${sentence.id}/${ghost.id}: semanticRole ${ghost.semanticRole} → ${referent.semanticRole} (inherited from ${ghost.refersToId})`);
          ghost.semanticRole = referent.semanticRole;
        }
      }
    }
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log(`\n✅ Applied fixes to ${applied} ghost nodes.`);

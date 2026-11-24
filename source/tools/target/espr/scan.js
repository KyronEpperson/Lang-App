/* en-espr setting scan: lists every row that still carries Mexican (or Dominican) setting or a general word Puerto Rico replaces.
   usage: node tools/target/espr/scan.js [--all]
   Default: FORBID terms (docs/profiles/en-espr.md §9.3) anywhere except card notes, plus REPLACE words (§2.2) in targets, examples,
   dialogues, lesson bodies and practice. --all also lists card notes. Exit 1 when a FORBID term is found outside card notes. */
const LIB = require('../lib.js');
const ALL = process.argv.includes('--all');
const FORBID = /\btacos?\b|tortillas?|quesadillas?|\btamal(es)?\b|taquer[ií]a|agua de jamaica|canc[uú]n|puebla|oaxaca|monterrey|guadalajara|\bcami[oó]n\b|[oó]rale|h[ií]jole|[aá]ndale|¡aguas|¡sale|\bcuate\b|\bgripa\b|¿mande|lupita|\bcolmado|motoconcho|yipeta|chinola|aposento|\bun chin\b|mang[uú]/i;
const REPLACE = /autob[uú]s|naranja|\blentes\b|\bgafas\b|anteojos|\bjeans\b|bote de basura|\bpesos?\b|m[eé]xic/i;
const { DECKS, DIALOG, EXAMPLES, PATTERNS, byId } = LIB.load('espr');
const out = []; let bad = 0;
const hit = (where, txt, notes) => { const f = FORBID.test(txt), r = REPLACE.test(txt); if (f && !notes) bad++; if (f || r) out.push((f ? 'FORBID ' : 'check  ') + where + ': ' + txt.slice(0, 160)); };
for (const [d, cs] of Object.entries(DECKS)) cs.forEach(c => { hit('card ' + d + ' «' + c[0] + '»', c[0] + ' | ' + c[2], false); if (ALL) hit('note ' + d + ' «' + c[0] + '»', c[3], true); });
for (const [k, v] of Object.entries(DIALOG)) hit('dialog «' + k + '»', v.join(' | '), false);
for (const [k, v] of Object.entries(EXAMPLES)) hit('example «' + k + '»', v.join(' | '), false);
PATTERNS.forEach((p, i) => hit('pattern ' + i, p.join(' | '), false));
for (const [id, L] of Object.entries(byId)) {
  hit('lesson ' + id + ' title/blurb', L.title + ' | ' + L.blurb, false);
  String(L.body).split(/(?=<h3>|<div class="tip">|\{\{ex:)/).forEach((seg, i) => hit('lesson ' + id + ' body#' + i, seg.replace(/\s+/g, ' '), false));
  (L.check || []).forEach((q, i) => hit('lesson ' + id + ' check' + i, JSON.stringify(q), false));
  (L.practice || []).forEach((r, i) => hit('lesson ' + id + ' practice#' + i, JSON.stringify(r), false));
}
out.forEach(l => console.log(l));
console.log('\nespr scan: ' + out.filter(l => l.startsWith('FORBID')).length + ' FORBID, ' + out.filter(l => l.startsWith('check')).length + ' to check' + (ALL ? '' : ' (card notes skipped; --all to include)'));
process.exit(bad ? 1 : 0);

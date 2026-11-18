/* usage: node tools/content/alphabet_check.js <lang> [pack.js]  — checks the shared `alphabet` lesson and deck against docs/briefs/alphabet-spec.md.
   The English side must be identical in every course (ko-based and es-based courses are never compared with each other by parity.js). */
const LIB = require('./lib.js'); const LANG = process.argv[2]; const C = LIB.loadPack(process.argv[3] || LIB.packPath(LANG), LANG).C; const bad = []; const J = JSON.stringify;
const eq = (a, b, what) => { if (J(a) !== J(b)) bad.push(what + ': ' + J(a).slice(0, 120) + ' ≠ ' + J(b).slice(0, 120)); };
const set = a => a.slice().sort();
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
if (C.LESSONS[0].id !== 'alphabet') bad.push('lesson 1 is ' + C.LESSONS[0].id + ', not alphabet');
const L = C.LESSONS.find(l => l.id === 'alphabet'); if (!L) { console.log('FAIL: no alphabet lesson'); process.exit(1); }
const dk = Object.keys(C.DECKS); if (dk[20] !== L.deck) bad.push('deck 21 is «' + dk[20] + '», the lesson links «' + L.deck + '»');
const cards = C.DECKS[L.deck] || []; eq(cards.map(c => c[0]), LETTERS, 'card targets');
cards.forEach(c => { if (!c[1] || !c[2] || !c[3]) bad.push('card ' + c[0] + ' has an empty field'); });
if (new Set(cards.map(c => c[3])).size < 20) bad.push('card notes repeat too much');
const EX = ['How do you spell that?', 'How do you spell your last name?', 'Can you spell that, please?', 'It starts with a capital T.', 'B as in boy.', 'Is that M as in Mary?', 'There are two Ls in hello.'];
let at = -1; EX.forEach(e => { const i = L.body.indexOf(e); if (i < 0) bad.push('body lacks example row: ' + e); else if (i < at) bad.push('example rows out of order at: ' + e); else at = i; });
const CK = [['G', ['J', 'G', 'Z', 'C']], ['an F', ['a F', 'an U', 'a M', 'an F']], ['How do you spell that?', ['How do you spell that?', 'How do you spelling that?', 'How spell you that?', 'How does it spell?']]]; /* exact order: parity compares positions */
const ck = C.CHECKS.alphabet || []; if (ck.length !== 3) bad.push('checks: ' + ck.length); else ck.forEach((q, i) => { eq(q[1], CK[i][1], 'check ' + (i + 1) + ' options (exact order)'); eq(q[1][q[2]], CK[i][0], 'check ' + (i + 1) + ' answer'); });
const P = C.PRACTICE.alphabet || []; eq(P.map(x => x.t), ['mc', 'mc', 'mc', 'mc', 'mc', 'order', 'order', 'order', 'fill', 'fill', 'fill', 'type', 'type', 'type'], 'practice shape');
const MC = [['C', 'S', 'Z', 'K'], ['R', 'P', 'S', 'O'], ['an M', 'a M', 'an B', 'an U'], ['U', 'R', 'S', 'W'], ['double u', 'double v', 'u u', 'v v']];
const OR = [['How do you spell that', 'spelling does'], ['My name starts with an S', 'a start'], ['There are two Ls in hello', 'is L']];
const FI = [['How do you __ your name?', ['spell'], ['spelling', 'spells', 'spelled']], ['It starts __ a B.', ['with'], ['by', 'for', 'in']], ["That's M __ in Mary.", ['as'], ['so', 'than', 'of']]];
const TY = [[['It starts with an A', 'It begins with an A'], 'the start'], [['How do you spell your name'], 'spelling does'], [['It has two Ts', 'There are two Ts', "It has two T's", "There are two T's"], 'T have']];
if (P.length === 14) {
  MC.forEach((m, i) => { const x = P[i]; eq(x.o[0], m[0], 'mc ' + (i + 1) + ' correct option'); eq(x.o, m, 'mc ' + (i + 1) + ' options (exact order)'); });
  OR.forEach((o, i) => { const x = P[5 + i]; eq(x.a.join(' '), o[0], 'order ' + (6 + i) + ' answer'); eq(x.x || [], o[1].split(' '), 'order ' + (6 + i) + ' distractors (exact order)'); });
  FI.forEach((f, i) => { const x = P[8 + i]; eq(x.q, f[0], 'fill ' + (9 + i) + ' sentence'); eq(x.a.slice(0, f[1].length), f[1], 'fill ' + (9 + i) + ' answer'); eq(x.o.filter(o => !x.a.includes(o)), f[2], 'fill ' + (9 + i) + ' distractors (exact order)'); });
  TY.forEach((t, i) => { const x = P[11 + i]; const norm = s => s.replace(/[.?!]/g, '').toLowerCase(); const have = new Set(x.a.map(norm)); t[0].forEach(a => { if (!have.has(norm(a))) bad.push('type ' + (12 + i) + ' does not accept: ' + a); }); eq(x.x || [], t[1].split(' '), 'type ' + (12 + i) + ' fallback words (exact order)'); });
}
console.log(bad.length ? 'FAIL alphabet ' + LANG + '\n - ' + bad.join('\n - ') : 'PASS alphabet ' + LANG + ': lesson 1, deck 21 «' + L.deck + '» with 26 cards, English side matches the spec');
process.exit(bad.length ? 1 : 0);

/* spr-en setting scan (docs/profiles/spr.md §2, §8.2): lists rows of a generated spr-en pack whose ENGLISH side names a Latin American
   home or origin (deviation candidates), and Spanish text with a word Puerto Rico says differently (auto, autobús, Lima as home, pesos…).
   usage: node tools/content/spr/scan.js <pack path>      (generate first: node tools/content/gen.js spr <pack path>) */
const fs = require('fs'), vm = require('vm');
const F = process.argv[2]; if (!F) { console.error('usage: node tools/content/spr/scan.js <pack path>'); process.exit(2); }
global.LANGAPP_PACKS = { course: {}, i18n: {} }; vm.runInThisContext(fs.readFileSync(F, 'utf8'));
const c = LANGAPP_PACKS.course['spr-en']; if (!c) { console.error('no spr-en course in ' + F); process.exit(2); }
const EN = /\bLima\b|Madrid|Bogot|Buenos Aires|Mexico|\bPeru\b|\bSpain\b|Colombia|Argentin|Monterrey|\bsoles?\b|\bpesos?\b|Santiago|Guadalajara/;
const ES = /\bauto(s)?\b|autob[uú]s|\bbus\b|\bLima\b|Madrid|Bogot[aá]|Monterrey|M[eé]xico|Per[uú]|\bsoles?\b|\bpesos?\b|\blentes\b|\bgafas\b|jugo de naranja|\bcoche\b|\bvale\b/;
const out = [], P = (k, s) => out.push(k + ': ' + String(s).slice(0, 170));
for (const [d, cs] of Object.entries(c.DECKS)) cs.forEach(x => { if (EN.test(x[0])) P('EN card ' + d, x[0]); if (ES.test(x[2] + ' ' + x[3])) P('es card ' + d + ' «' + x[0] + '»', x[2] + ' | ' + x[3]); });
for (const [k, v] of Object.entries(c.DIALOG)) { if (EN.test(v[0] + ' ' + v[1])) P('EN dialog «' + k + '»', v[0] + ' / ' + v[1]); if (ES.test(v[2] || '')) P('es dialog «' + k + '»', v[2]); }
for (const [k, v] of Object.entries(c.EXAMPLES)) { if (EN.test(v[0])) P('EN example «' + k + '»', v[0]); if (ES.test(v[1] || '')) P('es example «' + k + '»', v[1]); }
c.LESSONS.forEach(L => { (L.body.match(/\{\{ex:[^}]*\}\}/g) || []).forEach(e => { const f = e.slice(5, -2).split('|'); if (EN.test(f[0])) P('EN ex ' + L.id, f[0]); if (ES.test(f[2] || '')) P('es ex ' + L.id, f[2]); });
  const prose = L.body.replace(/\{\{ex:[^}]*\}\}/g, ''); const m = prose.match(new RegExp('.{0,40}(' + ES.source + ').{0,40}', 'g')); (m || []).forEach(s => P('es body ' + L.id, s.replace(/<[^>]+>/g, ''))); });
for (const [id, ck] of Object.entries(c.CHECKS)) ck.forEach((q, i) => { if (EN.test(JSON.stringify(q[1]))) P('EN check ' + id + '#' + i, JSON.stringify(q[1])); if (ES.test(q[0] + ' ' + q[3])) P('es check ' + id + '#' + i, q[0]); });
for (const [id, ps] of Object.entries(c.PRACTICE)) ps.forEach((it, i) => { const en = JSON.stringify([it.a, it.o, it.x, it.t === 'fill' ? it.q : '']); if (EN.test(en)) P('EN practice ' + id + '#' + i, en); const es = [it.q, it.p, it.why, it.hint].filter(Boolean).join(' | '); if (ES.test(es)) P('es practice ' + id + '#' + i, es); });
out.forEach(l => console.log(l));
console.log('\nspr scan: ' + out.filter(l => l.startsWith('EN')).length + ' English-side rows (deviation candidates; spr.md §8.2), ' + out.filter(l => l.startsWith('es')).length + ' Spanish rows to check (§2)');

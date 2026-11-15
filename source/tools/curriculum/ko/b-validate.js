#!/usr/bin/env node
// Validator for practice-b.js (KO-CONTENT-B). Asserts docs/PRACTICE-SPEC.md v1. Usage: node b-validate.js [file]
const path = require('path');
const file = path.resolve(process.argv[2] || path.join(__dirname, 'practice-b.js'));
delete require.cache[file];
const P = require(file);
const IDS = ["numbers","food","getting-around","titles","plans","texting","counters","story","cant","honorific","requests","office"];
const ORDER = { mc: 0, order: 1, fill: 2, type: 3 };
const errs = [];
const err = (id, i, m) => errs.push(`${id}[${i}]: ${m}`);
const norm = s => String(s).trim().replace(/[.,!?~"'“”‘’]/g, '').replace(/\s+/g, ' ').trim();
const hasLatin = s => /[A-Za-z]/.test(s);
const hasHangul = s => /[가-힣ㄱ-ㆎ]/.test(s);
const words = s => norm(s).split(' ').filter(Boolean).length;
const isStrArr = a => Array.isArray(a) && a.every(x => typeof x === 'string' && x.trim());

// whole export must be JSON-compatible
try { const rt = JSON.parse(JSON.stringify(P)); if (JSON.stringify(rt) !== JSON.stringify(P)) errs.push('export: JSON round-trip changed data'); }
catch (e) { errs.push('export: not JSON-serialisable: ' + e.message); }

const keys = Object.keys(P);
IDS.forEach(id => { if (!P[id]) errs.push(`missing lesson id: ${id}`); });
keys.forEach(k => { if (!IDS.includes(k)) errs.push(`unexpected lesson id: ${k}`); });
if (JSON.stringify(keys) !== JSON.stringify(IDS)) errs.push(`key order differs from course order: ${keys.join(',')}`);

const counts = {};
for (const id of IDS) {
  const items = P[id]; if (!Array.isArray(items)) continue;
  if (items.length < 12 || items.length > 16) err(id, '-', `has ${items.length} items (need 12-16)`);
  const c = { mc: 0, order: 0, fill: 0, type: 0 }; let last = -1;
  items.forEach((it, i) => {
    if (!it || typeof it !== 'object') return err(id, i, 'not an object');
    if (!(it.t in ORDER)) return err(id, i, `bad type ${it.t}`);
    c[it.t]++;
    if (ORDER[it.t] < last) err(id, i, `block order broken (${it.t} after later block)`);
    last = Math.max(last, ORDER[it.t]);
    // no HTML anywhere
    const all = JSON.stringify(it);
    if (/[<>]/.test(all)) err(id, i, 'contains < or >');
    const allowed = { mc: ['t','q','o','why'], order: ['t','p','a','x','why'], fill: ['t','q','p','a','o','why'], type: ['t','p','a','hint','x','why'] }[it.t];
    Object.keys(it).forEach(k => { if (!allowed.includes(k)) err(id, i, `unknown field ${k}`); });
    const korean = []; // strings that are target-language answers/options
    if (it.t === 'mc') {
      if (typeof it.q !== 'string' || !it.q.trim()) err(id, i, 'mc needs q');
      if (!isStrArr(it.o) || it.o.length !== 4) err(id, i, 'mc needs exactly 4 options');
      else if (new Set(it.o.map(norm)).size !== 4) err(id, i, 'mc options not unique');
      if (!it.why) err(id, i, 'mc needs why');
      (it.o || []).forEach(s => { if (!hasHangul(s)) err(id, i, `mc option "${s}" is not Korean (answers are in the target language)`); korean.push(s); });
    }
    if (it.t === 'order') {
      if (typeof it.p !== 'string' || !it.p.trim()) err(id, i, 'order needs p');
      if (!isStrArr(it.a) || it.a.length < 2 || it.a.length > 6) err(id, i, 'order needs 2-6 tiles');
      if (!isStrArr(it.x) || it.x.length < 1 || it.x.length > 2) err(id, i, 'order needs 1-2 distractors x');
      [...(it.a || []), ...(it.x || [])].forEach(s => { if (/\s/.test(s)) err(id, i, `tile has a space: "${s}"`); korean.push(s); });
      (it.x || []).forEach(s => { if ((it.a || []).includes(s)) err(id, i, `distractor "${s}" is in a`); });
      if (it.a && new Set(it.a).size !== it.a.length) err(id, i, 'duplicate tiles in a');
    }
    if (it.t === 'fill') {
      if (typeof it.q !== 'string' || (it.q.match(/__/g) || []).length !== 1 || /___/.test(it.q)) err(id, i, 'fill q needs exactly one "__"');
      if (typeof it.p !== 'string' || !it.p.trim()) err(id, i, 'fill needs p');
      if (!isStrArr(it.a) || !it.a.length) err(id, i, 'fill needs a');
      if (!isStrArr(it.o) || it.o.length !== 3) err(id, i, 'fill needs exactly 3 wrong o');
      else {
        if (new Set(it.o.map(norm)).size !== 3) err(id, i, 'fill o not unique');
        it.o.forEach(s => { if ((it.a || []).map(norm).includes(norm(s))) err(id, i, `fill o "${s}" overlaps a`); });
      }
      if (!it.why) err(id, i, 'fill needs why');
      korean.push(it.q, ...(it.a || []), ...(it.o || []));
    }
    if (it.t === 'type') {
      if (typeof it.p !== 'string' || !it.p.trim()) err(id, i, 'type needs p');
      if (!isStrArr(it.a) || !it.a.length) err(id, i, 'type needs non-empty a');
      else {
        const n = it.a.map(norm);
        if (new Set(n).size !== n.length) err(id, i, 'type a has duplicates after normalisation');
        const w = words(it.a[0]); if (w < 2 || w > 5) err(id, i, `type a[0] is ${w} words (need 2-5)`);
      }
      if (typeof it.hint !== 'string' || !it.hint.trim()) err(id, i, 'type needs hint');
      else if (/\s/.test(it.hint.trim()) && !it.hint.includes(' · ')) err(id, i, 'multi-word hint must use " · "');
      if (it.x !== undefined && (!isStrArr(it.x) || it.x.length < 1 || it.x.length > 2)) err(id, i, 'type x must be 1-2 strings');
      korean.push(...(it.a || []), ...(it.x || []), it.hint || '');
    }
    korean.forEach(s => { if (typeof s === 'string' && hasLatin(s)) err(id, i, `Latin letters in Korean string "${s}"`); });
    ['q','p','why'].forEach(k => { if (it[k] !== undefined && typeof it[k] !== 'string') err(id, i, `${k} must be a string`); });
  });
  counts[id] = `${items.length} (mc ${c.mc}, order ${c.order}, fill ${c.fill}, type ${c.type})`;
  if (c.mc < 4 || c.mc > 5) err(id, '-', `mc count ${c.mc} (spec 4-5)`);
  if (c.order < 3 || c.order > 4) err(id, '-', `order count ${c.order} (spec 3-4)`);
  if (c.fill !== 3) err(id, '-', `fill count ${c.fill} (spec 3)`);
  if (c.type < 3 || c.type > 4) err(id, '-', `type count ${c.type} (spec 3-4)`);
}
for (const id of IDS) if (counts[id]) console.log(`${id.padEnd(15)} ${counts[id]}`);
if (errs.length) { console.log(`\n${errs.length} problem(s):`); errs.forEach(e => console.log('  ' + e)); process.exit(1); }
console.log(`\nOK: ${IDS.length} lessons, ${IDS.reduce((s, id) => s + (P[id] || []).length, 0)} items, spec v1 clean.`);

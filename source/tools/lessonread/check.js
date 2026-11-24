/* Checks hand-written lesson readings: tools/lessonread/<id>/written.json ({ "word": "reading" }).
   Every key must be a word of left.json, every reading must pass the course's pronPattern (word by word where the pattern is per word), hold Latin letters only, and no key may be left out
   unless skipped.json ({ "word": "reason" }) names it. usage: node tools/lessonread/check.js <id>   (exit 1 on any FAIL) */
'use strict';
const fs = require('fs'), path = require('path'); const id = process.argv[2]; const dir = path.join(__dirname, id), ROOT = path.resolve(__dirname, '..', '..');
const rd = f => { try { return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (e) { return null; } };
const left = rd('left.json'), wr = rd('written.json'), sk = rd('skipped.json') || {}; if (!left || !wr) { console.log('FAIL left.json or written.json missing or not JSON'); process.exit(1); }
const t = id.split('-')[1]; let PR = null; try { const P = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', t, 'profile.json'), 'utf8')); if (P.pronPattern) PR = new RegExp(P.pronPattern); } catch (e) {}
let bad = 0; const fail = m => { bad++; if (bad <= 40) console.log('FAIL ' + m); };
Object.keys(wr).forEach(k => { const r = wr[k]; if (!(k in left)) fail('not a listed word: ' + k); if (typeof r !== 'string' || !r.trim()) return fail('empty reading: ' + k); if (/[^\u0000-ɏḀ-ỿ̀-ͯʰ-˿]/.test(r)) fail('reading has non-Latin characters: ' + k + ' → ' + r); if (PR && !PR.test(r) && !r.split(/\s+/).every(w => PR.test(w))) fail('reading does not fit the course pattern: ' + k + ' → ' + r); });
Object.keys(left).forEach(k => { if (!(k in wr) && !(k in sk)) fail('no reading and not in skipped.json: ' + k); });
console.log(bad ? 'LESSON READINGS CHECK FAIL ' + bad : 'OK ' + Object.keys(wr).length + ' readings, ' + Object.keys(sk).length + ' skipped'); process.exit(bad ? 1 : 0);

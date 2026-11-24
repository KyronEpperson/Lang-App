/* Lesson readings, gap filler (2.104.0). For each course with a non-Latin target it lists the lesson words that have no reading in the course's cards or example lines,
   and writes a reading for each with the course's OWN deterministic pronunciation tool (tools/target/<t>/respell.js), the same tool that wrote every card's reading.
   A word is left out when the tool warns, throws, or gives something the course's pronPattern rejects. Before trusting the tool, it is run over every card of the course
   and compared with the stored reading (the agreement figure printed per course).
   usage: node tools/lessonread/fill.js [course ids]   → tools/lessonread/<id>/readings.json, left.json; then node tools/lessonread/apply.js */
'use strict';
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..'), SRC = path.join(ROOT, 'korean-flashcards.html');
const ALL = ['en-te','en-ar','en-th','en-zh','vi-zh','en-yue','en-nan','en-ja','en-ur','en-hi','en-bn','en-pa','en-kn','en-am','en-ru'];
const IDS = process.argv.slice(2).length ? process.argv.slice(2) : ALL;
const norm = s => String(s).normalize('NFC').toLowerCase().replace(/^[\s.,!?;:…"“”()\/]+|[\s.,!?;:…"“”()\/]+$/g, '').replace(/\s+/g, ' ');
function tool(t) { if (t === 'ja') return { respell() { throw new Error('no tool: Japanese readings are written by hand (written.json)'); } }; return require(path.join(ROOT, 'tools', 'target', t, 'respell.js')); }
function runTool(R, x) { const warned = []; const ew = process.stderr.write; process.stderr.write = s => { warned.push(String(s)); return true; }; const w0 = R.warnings && R.warnings.length; let r = '';
  try { r = R.respell(x); } catch (e) { r = ''; warned.push('threw'); } finally { process.stderr.write = ew; }
  if (R.warnings && typeof R.warnings.length === 'number' && R.warnings.length !== w0) warned.push('warnings'); return { r: typeof r === 'string' ? r.trim() : '', warned: warned.length > 0 }; }
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 430, height: 900 } }); await p.goto('file://' + SRC); await p.waitForTimeout(1500);
  for (const id of IDS) { await p.evaluate(c => { applyCourse(c, {}); try { unlockAll(); } catch (e) {} location.hash = '#lessons'; }, id); await p.waitForTimeout(400);
    const d = await p.evaluate(() => { const c = COURSE; const saved = c.READS; c.READS = null; c._rd = null; const R = rdBuild(), gaps = {}, tight = R.tight;
      const take = (s, ctx) => { R.rx.lastIndex = 0; let m; const str = String(s); while ((m = R.rx.exec(str))) { const segs = rdSeg(m[0]); if (!segs.some(x => !x[1] && x[0].trim())) continue; const units = tight ? [m[0]] : segs.filter(x => !x[1] && x[0].trim()).map(x => x[0]); units.forEach(u => { if (/^\p{M}/u.test(u)) return; if (!gaps[u]) gaps[u] = { n: 0, ctx: String(ctx).replace(/\s+/g, ' ').slice(Math.max(0, m.index - 40), m.index + m[0].length + 40) }; gaps[u].n++; }); } };
      LESSONS.forEach(l => { showLesson(l.id); take(l.title, l.title); take(l.blurb || '', l.blurb || ''); const tw = document.createTreeWalker(document.getElementById('lsRomBody'), NodeFilter.SHOW_TEXT); let n; while ((n = tw.nextNode())) { const pe = n.parentElement; if (pe.closest('.ex .k,.ex .r,.sgl,rt,ruby')) continue; take(n.nodeValue, pe.textContent); } });
      Object.values(CHECKS).forEach(qs => qs.forEach(q => { take(q[0], q[0]); q[1].forEach(o => take(o, q[0] + ' → ' + o)); take(q[3], q[3]); }));
      const cards = []; Object.keys(c.DECKS).forEach(k => c.DECKS[k].forEach(x => { if (x && typeof x[0] === 'string' && typeof x[1] === 'string') cards.push([x[0], x[1]]); })); c.READS = saved; c._rd = null; return { target: c.target, gaps, cards }; });
    const t = d.target, R = tool(t); let PR = null; try { const P = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', t, 'profile.json'), 'utf8')); if (P.pronPattern) PR = new RegExp(P.pronPattern); } catch (e) {}
    let same = 0, tot = 0; const diff = []; d.cards.forEach(([a, r]) => { const o = runTool(R, a); if (!o.r) return; tot++; if (norm(o.r) === norm(r)) same++; else if (diff.length < 6) diff.push(a + ' card «' + r + '» tool «' + o.r + '»'); });
    const out = {}, left = {}; Object.keys(d.gaps).sort().forEach(u => { const o = runTool(R, u); const good = o.r && !o.warned && /[a-zA-ZÀ-ɏḀ-ỿ]/.test(o.r) && (!PR || PR.test(o.r)) && !new RegExp('[\\u0400-\\u04ff\\u0600-\\u06ff\\u0900-\\u0dff\\u0e00-\\u0e7f\\u1200-\\u139f\\u3040-\\u9fff]').test(o.r); if (good) out[u] = o.r; else left[u] = Object.assign({ tool: o.r || '', warned: o.warned }, d.gaps[u]); });
    const dir = path.join(__dirname, id); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, 'readings.json'), JSON.stringify(out, null, 0).replace(/","/g, '",\n"') + '\n'); fs.writeFileSync(path.join(dir, 'left.json'), JSON.stringify(left, null, 1) + '\n'); const sm = d.cards.filter((x, i) => i % Math.max(1, Math.floor(d.cards.length / 220)) === 0).map(x => x[0] + '\t' + x[1]); fs.writeFileSync(path.join(dir, 'samples.tsv'), sm.join('\n') + '\n');
    console.log(id + ' · tool agrees with ' + same + '/' + tot + ' cards (' + (tot ? Math.round(1000 * same / tot) / 10 : 0) + '%) · gaps ' + Object.keys(d.gaps).length + ' · filled ' + Object.keys(out).length + ' · left ' + Object.keys(left).length + (diff.length ? '\n   e.g. ' + diff.slice(0, 3).join(' ; ') : '')); }
  await b.close(); })();

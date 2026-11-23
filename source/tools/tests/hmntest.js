/* White Hmong (hmn) engine readiness: node tools/tests/hmntest.js   (run ./build.sh first; reads the built korean-flashcards.html)
   LANGS / FLAG_ART / langName / preLang (mww, hnj, hmn-*) / picker order / typed-answer matching for an hmn target. No course content needed:
   the hmn-en course and the hmn interface pack are stubbed in the page. */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), os = require('os');
const SRC = path.resolve(__dirname, '../../korean-flashcards.html');
let fail = 0; const ok = (n, c, d) => { console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : ' :: ' + JSON.stringify(d === undefined ? '' : d))); if (!c) fail++; };
(async () => {
  const OUT = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'hmntest-')), 'page.html');
  fs.writeFileSync(OUT, '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"></head><body>' + fs.readFileSync(SRC, 'utf8') + '</body></html>');
  const b = await chromium.launch();
  const page = async lang => { const ctx = await b.newContext({ viewport: { width: 390, height: 800 } }); const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message)); await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' })); await p.route('**/*.supabase.co/**', r => r.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
    if (lang) await p.addInitScript(l => { Object.defineProperty(Navigator.prototype, 'language', { get: () => l, configurable: true }); Object.defineProperty(Navigator.prototype, 'languages', { get: () => [l], configurable: true }); }, lang);
    await p.goto('file://' + OUT); await p.waitForTimeout(300); return { p, ctx, errs }; };
  const stub = () => { COURSES['hmn-en'] = COURSES['hmn-en'] || { id: 'hmn-en', native: 'hmn', target: 'en', name: { en: 'English', hmn: 'Lus Askiv' } }; LANGAPP_PACKS.i18n.hmn = LANGAPP_PACKS.i18n.hmn || {}; };

  { const { p, ctx, errs } = await page();
    const r = await p.evaluate(() => { const x = LANGS.hmn || {}; const others = Object.keys(FLAG_ART).filter(k => k !== 'hmn').map(k => FLAG_ART[k]);
      return { x, art: FLAG_ART.hmn || '', dup: others.includes(FLAG_ART.hmn), fl: FLG('hmn'), nKo: langName('hmn', 'ko'), nEn: langName('hmn', 'en'), nUi: langName('hmn'), hl: hLang('hmn'),
        dn: (() => { try { return new Intl.DisplayNames(['hmn'], { type: 'language' }).of('en'); } catch (e) { return 'ERR ' + e.message; } })(), enInHmn: langName('en', 'hmn'), koInHmn: langName('ko', 'hmn') }; });
    ok('LANGS.hmn name/self/ko/t', r.x.name === 'Hmong' && r.x.self === 'Hmoob' && r.x.ko === '몽어' && r.x.t === 1, r.x);
    ok('LANGS.hmn flag field is not a country flag emoji', !/[\u{1F1E6}-\u{1F1FF}]/u.test(r.x.flag || ''), r.x.flag);
    ok('FLAG_ART.hmn drawn, 40x30 field, own design', /^<rect x="0" y="0" width="40" height="30"/.test(r.art) && !r.dup && r.art.length > 100, r.art.slice(0, 80));
    ok('FLAG_ART.hmn has no text and no script', !/<(text|script|image|foreignObject)/i.test(r.art) && !/\bon\w+=/i.test(r.art));
    ok('FLG(hmn) renders the svg', /^<svg class="fl" viewBox="0 0 40 30"/.test(r.fl));
    ok('langName hmn: ko 몽어, en Hmong', r.nKo === '몽어' && r.nEn === 'Hmong' && r.nUi === 'Hmong', r);
    ok('hLang(hmn) is the BCP 47 tag hmn', r.hl === 'hmn', r.hl);
    ok('LN_X.hmn: English is Lus Askiv in a Hmong interface', r.enInHmn === 'Lus Askiv', r.enInHmn);
    console.log('INFO Intl.DisplayNames([hmn]).of(en) = ' + JSON.stringify(r.dn) + ' (fallback for names not in LN_X.hmn) · langName(ko,hmn) = ' + JSON.stringify(r.koInHmn));
    /* picker: with a (stub) hmn-en course, Hmoob is a live native, sorted by self name among the Latin-script names */
    const pk = await p.evaluate(stub => { new Function(stub)(); META.picked = 0; showLangHome(); const rows = [...document.querySelectorAll('#langHome .lh-row[data-native]')].map(e => e.dataset.native + '|' + e.textContent.replace('›', '').trim());
      const locked = [...document.querySelectorAll('#langHome .lh-locked *')].some(e => /Hmoob/.test(e.textContent)); return { rows, locked, live: liveNatives() }; }, '(' + stub.toString() + ')()');
    const i = pk.rows.findIndex(r => r.startsWith('hmn|')); const names = pk.rows.map(r => r.split('|')[1]);
    ok('picker lists Hmoob as a live native when hmn-en exists', i >= 0 && pk.rows[i] === 'hmn|Hmoob', pk.rows);
    ok('picker keeps alphabetical order by self name', i > 0 && names[i - 1].localeCompare('Hmoob', 'en', { sensitivity: 'base' }) < 0 && (i === names.length - 1 || names[i + 1].localeCompare('Hmoob', 'en', { sensitivity: 'base' }) > 0), names);
    ok('Hmoob not under Coming soon (t:1)', !pk.locked);
    const noStub = await (async () => { const q = await page(); const v = await q.p.evaluate(() => ({ live: liveNatives().includes('hmn'), soon: Object.keys(LANGS).filter(k => !LANGS[k].t).includes('hmn') })); await q.ctx.close(); return v; })();
    ok('with the hmn-en course released, Hmong is a live native language', noStub.live && !noStub.soon, noStub);
    const s2 = await p.evaluate(async () => { const b = document.querySelector('#langHome .lh-row[data-native="en"]'); if (!b) return 'no en row'; b.click(); await new Promise(r => setTimeout(r, 300)); const h = document.getElementById('langHome'); return { txt: h ? h.textContent : '', rm: !!roadmapOf('hmn') }; });
    ok('step 2 (English speaker): Hmong is offered as a target now that the en-hmn course exists', s2 && /Hmong|Hmoob/.test(s2.txt), s2 && s2.rm);
    ok('no page errors', !errs.length, errs);
    await ctx.close(); }

  for (const [lang, want] of [['mww', 'hmn'], ['hnj', 'hmn'], ['hmn', 'hmn'], ['hmn-US', 'hmn'], ['mww-Latn-US', 'hmn'], ['hnj_US', 'hmn'], ['hmong', 'en']]) {
    const { p, ctx } = await page(lang);
    const r = await p.evaluate(stub => { const before = preLang(); new Function(stub)(); return { before, after: preLang() }; }, '(' + stub.toString() + ')()');
    ok('preLang ' + lang + ' -> ' + want + ' (live hmn native + hmn interface pack)', r.after === want, r);
    ok('preLang ' + lang + ' -> ' + (lang === 'hmong' ? 'en (not a language code)' : 'hmn now that the Hmong interface exists'), r.before === (lang === 'hmong' ? 'en' : 'hmn'), r);
    await ctx.close(); }

  { const { p, ctx, errs } = await page();
    const r = await p.evaluate(() => { const keep = COURSE; const out = {};
      for (const flags of [{ accents: false }, { accents: true, romaAlmost: true }]) {
        COURSE = Object.assign({}, keep, { id: 'en-hmn', native: 'en', target: 'hmn', builtin: false, features: {}, keys: '' }, flags); const tag = flags.accents ? 'acc+roma' : 'plain';
        const m = (i, a, strict) => { const v = pracMatch(i, a, !!strict); return v ? (PRAC_ALMOST ? 'almost:' + PRAC_ALMOST : 'ok') : 'no'; };
        out[tag] = { exact: m('Kuv lub tsev.', ['Kuv lub tsev']), caps: m('hmoob', ['Hmoob']), oo: m('Hmob', ['Hmoob']), ee: m('neg', ['neeg']), w: m('lvs', ['lws']), ooU: m('hmub', ['hmoob']), eeI: m('nig', ['neeg']), pron: m('mong', ['Hmoob']), toneDrop: m('ku', ['kuv']), toneSwap: m('kuj', ['kuv']), toneM_D: m('ntawd', ['ntawm']),
          hyphenSpace: m('niam txiv', ['niam-txiv']), spaceHyphen: m('niam-txiv', ['niam txiv']), joined: m('niamtxiv', ['niam txiv']), joinedRev: m('me nyuam', ['menyuam']), joinedTone: m('niamtxi', ['niam txiv']), hyphenDrop: m('niamtxiv', ['niam-txiv']), extraSpace: m('  kuv   lub  tsev ', ['kuv lub tsev']),
          normTjoined: normT('niam txiv') === normT('niamtxiv'), normTtone: normT('kuv') === normT('ku'), isHmn: isHmn(), accLoose: accLoose() }; }
      COURSE = Object.assign({}, keep, { id: 'en-vi', native: 'en', target: 'vi', builtin: false, features: {}, accents: true }); out.vi = pracMatch('ban', ['bàn']) && PRAC_ALMOST === true;
      COURSE = keep; out.restored = COURSE.target; return out; });
    for (const tag of ['plain', 'acc+roma']) { const x = r[tag];
      ok('[' + tag + '] exact answer, case and final punctuation ignored', x.exact === 'ok' && x.caps === 'ok' && x.extraSpace === 'ok', x);
      ok('[' + tag + '] nasal oo/ee and w are letters, not foldable', x.oo === 'no' && x.ee === 'no' && x.w === 'no' && x.ooU === 'no' && x.eeI === 'no' && x.pron === 'no', x);
      ok('[' + tag + '] tone letter kept: dropped or wrong tone is wrong', x.toneDrop === 'no' && x.toneSwap === 'no' && x.toneM_D === 'no', x);
      ok('[' + tag + '] hyphen vs space in a compound is "almost"', x.hyphenSpace === 'almost:hy' && x.spaceHyphen === 'almost:hy' && x.hyphenDrop === 'almost:hy', x);
      ok('[' + tag + '] joined vs spaced syllables accepted as a spelling variant (RPA.md §6: menyuam = me nyuam)', x.joined === 'almost:sp' && x.joinedRev === 'almost:sp' && x.joinedTone === 'no', x);
      ok('[' + tag + '] no accent leniency for hmn', x.accLoose === false && x.isHmn === true, x);
      console.log('INFO [' + tag + '] review typing (normT) ignores spaces/hyphens: ' + x.normTjoined + ' · ignores a dropped tone letter: ' + x.normTtone); }
    ok('vi accent leniency unchanged', r.vi === true, r.vi); ok('COURSE restored', r.restored === 'ko', r.restored);
    ok('no page errors', !errs.length, errs); await ctx.close(); }

  await b.close(); console.log(fail ? 'HMN FAIL (' + fail + ')' : 'HMN OK'); process.exit(fail ? 1 : 0);
})();

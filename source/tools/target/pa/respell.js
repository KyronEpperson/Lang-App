/* Punjabi (Gurmukhi) -> learner romanisation, the en-pa pron line (profile docs/profiles/en-pa.md §6).
   Deterministic: the same Punjabi always gives the same romanisation, so writers never type a pron.
   Key: the en-hi key, letter for letter, so the two courses agree: long vowels ā ī ū; e ai o au; retroflex ṭ ṭh ḍ ḍh ṇ, flap ੜ ṛ;
   aspirates kh gh chh jh ṭh ḍh th dh ph bh; ਚ ch; nukta ਸ਼ sh, ਖ਼ ḵh, ਗ਼ ġ, ਜ਼ z, ਫ਼ f, ਲ਼ ḷ; a tilde for a nasal vowel (hā̃, maĩ, tū̃);
   the letters are always the letters written (ਘ is gh, ਹ is h, ੍ਹ is h after its consonant). Three additions:
   (1) ੱ (addak) doubles the next consonant, the first half unaspirated: ਪੱਕਾ pakkā, ਅੱਖ akkh, ਅੱਛਾ acchhā, ਅੱਧਾ áddhā.
   (2) ੰ (tippi) and ਂ (bindi): before a stop, the nasal of that stop (ਮੁੰਡਾ muṇḍā, ਪੰਜ panj, ਅੰਬ amb); before ਨ ਮ ਣ, the same nasal
       again (ਕੰਮ kamm, ਧੰਨਵਾਦ dhànnvād); anywhere else a nasal vowel (ਮੈਂ maĩ, ਹਾਂ hā̃, ਤੂੰ tū̃). Bindi on a long vowel before a stop
       is read as a nasal vowel (the future -ਾਂਗਾ and the habitual -ਾਂਦਾ silently, anything else with a warning: ਪਰੌਂਠਾ?).
   (3) TONE: one accent on the vowel that carries it, grave = low, acute = high, on the last letter of the vowel after any tilde
       (ghàr, chā́h, bhaìṇ, mū̃́h). The letters do not change; the accent tells the reader how they sound (taught in lesson `tones`):
       a low tone after gh jh ḍh dh bh means "say k ch ṭ t p and let the pitch fall"; a high tone before h, gh jh ḍh dh bh means
       "rise on this vowel; the h is silent, gh is a plain g". Rule classes (named in the warnings; tested in the profile, §6.1):
       I  word-initial ਘ ਝ ਢ ਧ ਭ, or a first consonant + ੍ਹ: low on the vowel right after it (ਘਰ ghàr, ਘੋੜਾ ghòṛā, ਭਾਈ bhā̀ī,
          ਘੜੀ ghàṛī, ਭਰਾ bhàrā). Initial ਹ: no tone (ਹੱਥ hatth).
       C  after a vowel, when the letter closes the syllable or the vowel before is long or closed: high on that vowel (ਸਿੰਘ síngh,
          ਕੰਧ kándh, ਬੋਝਾ bójhā, ਅੱਧਾ áddhā, ਪੜ੍ਹਨਾ páṛhnā, ਚਾਹ chā́h, ਚਾਹੀਦਾ chā́hīdā, ਵੀਹ vī́h, ਸੋਹਣਾ sóhṇā).
       H  ਹ after a short vowel: ਿ + ਹ, ੁ + ਹ closing the syllable, a + ਹਿ / ਹੁ: high on that vowel (ਇਹ íh, ਉਹ úh, ਕਿਹੜਾ kíhṛā,
          ਸ਼ਹਿਰ sháhir, ਬਹੁਤ báhut: said é, ó, kéṛā, shɛ́r, bɔ́t; the lesson teaches the colouring, the pron does not show it).
       A  a short open vowel, the letter, then ā: low on the ā (ਤੁਹਾਡਾ tuhā̀ḍā, ਕਹਾਣੀ kahā̀ṇī, ਪੜ੍ਹਾਈ paṛhā̀ī), warned.
       S  a short open vowel, the letter, then any other vowel: high on the short vowel (ਸਹੀ sáhī, ਨਹੀਂ náhī̃), warned.
   Schwa (the unwritten a), as in en-hi: deleted at the end of a word except in a one-vowel word or after a cluster ending in ਰ / ਯ;
   deleted inside a word in the context vowel + one consonant _ one consonant + vowel, scanning from the right (ਕਰਨਾ karnā,
   ਕਰਦਾ kardā), also after a doubled consonant (ਰੱਖਣਾ rakkhṇā); never when nasalised, never before ਯ or ਹ; and the a between ਸ / ਸ਼
   and a final stop (ਦੋਸਤ dost; but ਵਕਤ vakat). ੍ਹ belongs to its consonant (ਪੜ੍ਹਨਾ is paṛh-nā).
   EXC overrides whole words; VER lists words whose output agrees with a named source or was checked by hand; DEC lists frequent words
   whose output is this profile's decision, pending the native check (§11). Words outside all three get a warning «…» at the weak spots
   (classes A and S, two tonal letters (only the first is marked), a ਹ after a consonant, two deletable a
   in a row, a final a after a cluster, bindi on a long vowel before a stop). It throws «…» on anything that is not Gurmukhi text
   (Latin letters, digits, ੴ, visarga, a vowel sign with no consonant, ੱ with nothing after it, a bare ੳ or ੲ).
   respell(text, {notone: true}) gives the same romanisation without accents (for checks; the matcher already ignores accents).
   usage: node respell.js "ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?"  ->  ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? -> tusī̃ kivẽ ho?      node respell.js --notone "ਘਰ"
   An optional tools/target/pa/lexicon.txt (one "ਪੰਜਾਬੀ roman" per line or ";"-separated) is read as more EXC entries. */
const fs = require('fs'), path = require('path');
let warned = [];

/* whole-word overrides: the rule gets these wrong */
const EXC = {
  'ਸਤਿ': 'sat',            /* the religious spelling of ਸਤ in ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ: the ਿ is not said */
  'ਆਂਟੀ': 'āṇṭī', 'ਥੈਂਕ': 'thaink', 'ਥੈਂਕਸ': 'thainks',   /* English loans: bindi before a stop is a real n */
  'ਹਰਪ੍ਰੀਤ': 'harprīt', 'ਗੁਰਪ੍ਰੀਤ': 'gurprīt', 'ਜਸਪ੍ਰੀਤ': 'jasprīt', 'ਮਨਪ੍ਰੀਤ': 'manprīt',   /* names: compound + ਪ੍ਰੀਤ, the a before the cluster goes */
  'ਸਾਹਮਣੇ': 'sā́hmṇe',      /* the a after a silent ਹ goes too */
};
/* output agrees with a named source (profile §6.1, test set 3), or was checked by hand (schwa and nasal cases) */
const VER = new Set(`
ਤੁਹਾਡਾ ਤੁਹਾਡੀ ਤੁਹਾਡੇ ਤੁਹਾਨੂੰ ਕਹਾਣੀ ਪੜ੍ਹਾਈ ਸਹੀ ਕਹੀ
ਨਮਸਤੇ ਸਮਝਣਾ ਮੰਗਲਵਾਰ ਪੈਂਦਾ
`.split(/\s+/).filter(Boolean));
/* frequent words whose tone is this profile's decision (no source either way, or sources that disagree): no warning, native check first */
const DEC = new Set(`
ਨਹੀਂ ਰਹੀ ਰਹੇ ਰਿਹਾ ਕਿਹਾ ਰਹੀਆਂ
`.split(/\s+/).filter(Boolean));
(function lexfile() { const f = path.join(__dirname, 'lexicon.txt'); if (!fs.existsSync(f)) return;
  fs.readFileSync(f, 'utf8').split(/[;\n]/).map(s => s.trim()).filter(Boolean).forEach(e => { const i = e.indexOf(' '); if (i < 1) throw new Error('bad lexicon entry «' + e + '»'); EXC[e.slice(0, i).normalize('NFC')] = e.slice(i + 1).trim().normalize('NFC'); }); })();

const IND = { 'ਅ': 'a', 'ਆ': 'ā', 'ਇ': 'i', 'ਈ': 'ī', 'ਉ': 'u', 'ਊ': 'ū', 'ਏ': 'e', 'ਐ': 'ai', 'ਓ': 'o', 'ਔ': 'au' };
const MAT = { 'ਾ': 'ā', 'ਿ': 'i', 'ੀ': 'ī', 'ੁ': 'u', 'ੂ': 'ū', 'ੇ': 'e', 'ੈ': 'ai', 'ੋ': 'o', 'ੌ': 'au' };
const CON = { 'ਕ': 'k', 'ਖ': 'kh', 'ਗ': 'g', 'ਘ': 'gh', 'ਙ': 'ṅ', 'ਚ': 'ch', 'ਛ': 'chh', 'ਜ': 'j', 'ਝ': 'jh', 'ਞ': 'ñ',
  'ਟ': 'ṭ', 'ਠ': 'ṭh', 'ਡ': 'ḍ', 'ਢ': 'ḍh', 'ਣ': 'ṇ', 'ਤ': 't', 'ਥ': 'th', 'ਦ': 'd', 'ਧ': 'dh', 'ਨ': 'n',
  'ਪ': 'p', 'ਫ': 'ph', 'ਬ': 'b', 'ਭ': 'bh', 'ਮ': 'm', 'ਯ': 'y', 'ਰ': 'r', 'ਲ': 'l', 'ਵ': 'v', 'ੜ': 'ṛ', 'ਸ': 's', 'ਹ': 'h' };
const NUQ = { 'ਸ': 'sh', 'ਖ': 'ḵh', 'ਗ': 'ġ', 'ਜ': 'z', 'ਫ': 'f', 'ਲ': 'ḷ', 'ਕ': 'q' };
/* voiced aspirates: word-initial sound (devoiced) and elsewhere (plain voiced) */
const VA = { 'gh': ['k', 'g'], 'jh': ['ch', 'j'], 'ḍh': ['ṭ', 'ḍ'], 'dh': ['t', 'd'], 'bh': ['p', 'b'] };
/* the unaspirated first half of a doubled consonant (ੱ) */
const HALF = { 'kh': 'k', 'gh': 'g', 'ch': 'c', 'chh': 'c', 'jh': 'j', 'ṭh': 'ṭ', 'ḍh': 'ḍ', 'th': 't', 'dh': 'd', 'ph': 'p', 'bh': 'b', 'sh': 's', 'ḵh': 'ḵ' };
/* place of articulation, for ੰ / ਂ before a stop */
const PLACE = {}; 'k kh g gh q ḵh ġ ch chh j jh z'.split(' ').forEach(c => PLACE[c] = 'n');
'ṭ ṭh ḍ ḍh'.split(' ').forEach(c => PLACE[c] = 'ṇ'); 't th d dh'.split(' ').forEach(c => PLACE[c] = 'n'); 'p ph b bh f'.split(' ').forEach(c => PLACE[c] = 'm');
const NASALC = { 'n': 'n', 'm': 'm', 'ṇ': 'ṇ' };
const LONG = ['ā', 'ī', 'ū', 'e', 'ai', 'o', 'au'];
const VIRAMA = '੍', NUKTA = '਼', BINDI = 'ਂ', TIPPI = 'ੰ', ADDAK = 'ੱ', GRAVE = '̀', ACUTE = '́', TILDE = '̃';
/* independent vowels typed as a carrier + vowel sign (some keyboards do this; not canonically equal in Unicode) */
const CARRIER = [['ਅਾ', 'ਆ'], ['ਅੈ', 'ਐ'], ['ਅੌ', 'ਔ'], ['ੲਿ', 'ਇ'], ['ੲੀ', 'ਈ'], ['ੲੇ', 'ਏ'], ['ੳੁ', 'ਉ'], ['ੳੂ', 'ਊ'], ['ੳੋ', 'ਓ']];
const isGuru = c => /[਀-੿]/.test(c);

/* one word (Gurmukhi only, NFC) -> segments: {t:'C', r, dev, subH, dup} | {t:'V', r, inh, nas, tone, del} */
function parse(w) {
  const seg = []; const cs = [...w]; let gem = false;
  const lastV = () => { const v = seg[seg.length - 1]; return v && v.t === 'V' ? v : null; };
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    if (IND[c]) { if (gem) throw new Error('ੱ before a vowel in «' + w + '»'); seg.push({ t: 'V', r: IND[c], inh: false, nas: '' }); continue; }
    if (CON[c]) {
      let r = CON[c], dev = c;
      if (cs[i + 1] === NUKTA) { if (!NUQ[c]) throw new Error('unknown nukta letter «' + c + NUKTA + '» in «' + w + '»'); r = NUQ[c]; dev = c + NUKTA; i++; }
      if (gem) { seg.push({ t: 'C', r, dev, dup: true }); gem = false; }
      const C = { t: 'C', r, dev }; seg.push(C);
      /* subscript (pairin) letters: ੍ਹ belongs to this consonant; ੍ਰ ੍ਵ ੍ਯ (and a rare full virama) make a cluster */
      while (cs[i + 1] === VIRAMA) {
        const n = cs[i + 2];
        if (n === 'ਹ' && !C.subH) { C.subH = true; i += 2; continue; }
        if (n && CON[n] && cs[i + 3] !== NUKTA) { i += 1; break; } /* the next loop pass adds the consonant with no vowel between */
        throw new Error('virama before «' + (n || 'nothing') + '» in «' + w + '»');
      }
      if (cs[i] === VIRAMA) continue;
      const n = cs[i + 1];
      if (MAT[n]) { seg.push({ t: 'V', r: MAT[n], inh: false, nas: '' }); i++; continue; }
      seg.push({ t: 'V', r: 'a', inh: true, nas: '' }); continue;
    }
    if (c === BINDI || c === TIPPI) { const v = lastV(); if (!v) throw new Error('nasal sign with no vowel in «' + w + '»'); v.nas = c === BINDI ? 'bindi' : 'tippi'; continue; }
    if (c === ADDAK) { if (gem) throw new Error('two ੱ in a row in «' + w + '»'); gem = true; continue; }
    if (MAT[c]) throw new Error('vowel sign with no consonant in «' + w + '»');
    if (c === NUKTA) throw new Error('stray nukta in «' + w + '»');
    if (c === 'ੳ' || c === 'ੲ') throw new Error('bare vowel carrier «' + c + '» in «' + w + '» (write the vowel letter: ਉ ਊ ਓ, ਇ ਈ ਏ)');
    if (c === 'ਃ') throw new Error('visarga ਃ in «' + w + '»');
    throw new Error('not handled: «' + c + '» (U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + ') in «' + w + '»');
  }
  if (gem) throw new Error('ੱ with no consonant after it in «' + w + '»');
  return seg;
}

/* schwa deletion (en-hi's rule). A doubled consonant counts as a cluster. Returns weak-spot notes. */
function schwa(seg) {
  const notes = []; const V = seg.map((s, i) => s.t === 'V' ? i : -1).filter(i => i >= 0);
  const live = i => seg[i] && seg[i].t === 'V' && !seg[i].del;
  const isC = i => seg[i] && seg[i].t === 'C';
  if (V.length === 0) return notes;
  const last = V[V.length - 1];
  if (seg[last].inh && !seg[last].nas && last === seg.length - 1 && V.length > 1) {
    const cluster = isC(last - 1) && isC(last - 2);
    if (cluster) { if (!seg[last - 1].dup && !seg[last - 2].dup) notes.push('final a after a cluster'); if (!['ਰ', 'ਯ'].includes(seg[last - 1].dev)) seg[last].del = true; }
    else seg[last].del = true;
    /* Punjabi writes no virama: ਸ / ਸ਼ + a + a final stop is a cluster (ਦੋਸਤ dost, ਮਸਤ mast); other final CaC keep the a (ਵਕਤ vakat) */
    const p = last - 2; if (seg[last].del && seg[p] && seg[p].inh && !seg[p].nas && p !== V[0] && isC(p - 1) && ['s', 'sh'].includes(seg[p - 1].r) && live(p - 2) && ['t', 'ṭ', 'k', 'p'].includes(seg[p + 1].r)) seg[p].del = true;
  }
  const cand = V.filter(i => seg[i].inh && !seg[i].nas && i !== V[0] && i !== last);
  for (let k = cand.length - 1; k >= 0; k--) {
    const i = cand[k];
    /* a doubled consonant before counts as one closed syllable: ਰੱਖਣਾ rakkhṇā, ਲੱਭਣਾ labbhṇā */
    const ok = isC(i - 1) && (live(i - 2) || (seg[i - 2] && seg[i - 2].dup && live(i - 3))) && isC(i + 1) && live(i + 2);
    if (!ok) continue;
    if (seg[i + 1].dev === 'ਯ' || seg[i + 1].dev === 'ਹ') continue;
    const j = i - 2; if (seg[j] && seg[j].inh && !seg[j].nas && j !== V[0] && isC(j - 1) && live(j - 2)) notes.push('two deletable a in a row');
    seg[i].del = true;
  }
  return notes;
}

/* is the nasal sign on this vowel said as a consonant? (before a stop or a nasal consonant) */
function nasalCons(seg, i) { const s = seg[i]; if (!s.nas) return false; const n = nextSeg(seg, i); return !!(n && n.t === 'C' && (PLACE[n.r] || NASALC[n.r])); }
/* the next segment, skipping deleted vowels */
function nextSeg(seg, i) { for (let k = i + 1; k < seg.length; k++) { if (seg[k].t === 'V' && seg[k].del) continue; return seg[k]; } return null; }
function liveVs(seg) { return seg.map((s, i) => s.t === 'V' && !s.del ? i : -1).filter(i => i >= 0); }
/* a syllable is heavy if its vowel is long, or it is closed (two consonants before the next vowel, or a consonant at the word's end) */
function heavy(seg, vi) {
  const v = seg[vi]; if (LONG.includes(v.r)) return true; if (nasalCons(seg, vi)) return true;
  let n = 0; for (let k = vi + 1; k < seg.length; k++) { const s = seg[k]; if (s.t === 'V') { if (s.del) continue; return n >= 2; } n++; }
  return n >= 1;
}
const tonal = s => s.t === 'C' && (VA[s.r] || s.r === 'h' || s.subH);

/* tone: puts v.tone = 'L' / 'H' on the vowel that carries it. Letters are never changed. Returns weak-spot notes.
   Rule classes (named in the notes and in the profile, §6.1): I initial, C closed / long before, H ਹ colouring, A low on a following ā,
   S short open vowel before a vowel that is not ā. */
function tone(seg) {
  const notes = [];
  /* one accent per word (pronPattern bans two): the first tonal event wins, later ones only warn (ਘੰਟਾਘਰ, ਘਬਰਾਹਟ) */
  const setT = (vi, t) => { if (seg.some(x => x.tone)) { notes.push('second tonal letter left unmarked'); return; } seg[vi].tone = t; };
  let events = 0;
  for (let e = 0; e < seg.length; e++) {
    const C = seg[e]; if (!tonal(C) || C.dup) continue;
    const Vs = liveVs(seg); const before = Vs.filter(i => i < e), after = Vs.filter(i => i > e);
    const plainH = C.r === 'h' && !C.subH;
    if (!before.length) {                                   /* I: word-initial */
      if (plainH) continue;                                 /* ਹ at the start: plain h, no tone */
      events++;
      if (!after.length) { notes.push('tonal letter with no vowel'); continue; }
      setT(after[0], 'L'); continue;                        /* always the vowel right after the letter (ਘੜੀ ghàṛī, ਭਰਾ bhàrā) */
    }
    events++;
    const v1 = before[before.length - 1], V1 = seg[v1];
    const adj = v1 === e - 1;                               /* the vowel sits right before the letter, no consonant between */
    const nx = nextSeg(seg, e);
    const coda = !nx || nx.t === 'C';
    if (plainH && adj && !V1.nas) {                         /* H: ਹ after a short vowel */
      if (V1.r === 'i') { setT(v1, 'H'); if (nx && nx.t === 'V' && LONG.includes(nx.r)) notes.push('ਿ + ਹ + long vowel: high on the i'); continue; }
      if (V1.r === 'u' && coda) { setT(v1, 'H'); continue; }
      if (V1.r === 'a' && nx && nx.t === 'V' && !nx.inh && (nx.r === 'i' || nx.r === 'u')) { setT(v1, 'H'); continue; }
    }
    const heavyBefore = LONG.includes(V1.r) || !adj || (seg[e - 1] && seg[e - 1].dup) || nasalCons(seg, v1);
    if (coda || heavyBefore) {                              /* C: the letter closes the syllable, or the vowel before is long or closed */
      setT(v1, 'H');
      /* a medial letter after a closed syllable (ਅੱਧਾ, ਸੰਘਣਾ): MSU calls it level, Wikibooks high; class decision: high, no warning (§6.1, §11) */
      if (plainH && !adj && !coda) notes.push('ਹ after a consonant');
      continue;
    }
    /* a short open vowel before, a vowel after */
    const a0 = after[0], a1 = after[1];
    const isA = k => k !== undefined && seg[k].r === 'ā';
    if (isA(a0)) { setT(a0, 'L'); notes.push('A: low tone on the ā after the tonal letter'); continue; }
    if (a0 !== undefined && seg[a0].r === 'i' && a1 === a0 + 1 && isA(a1)) { setT(a1, 'L'); notes.push('A: low tone on the ā after ਿ'); continue; }
    setT(v1, 'H'); notes.push('S: high tone on the short vowel before the tonal letter');
  }
  if (events > 1) notes.push('two tonal letters in one word');
  return notes;
}

function render(seg, notone) {
  let out = ''; const notes = [];
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i];
    if (s.t === 'C') {
      if (s.dup) { const nb = seg[i + 1]; out += HALF[nb.r] || nb.r; continue; }
      out += s.r; if (s.subH) out += 'h'; continue;
    }
    if (s.del) continue;
    let v = s.r;
    if (s.nas) {
      const n = nextSeg(seg, i);
      if (n && n.t === 'C' && NASALC[n.r]) v += n.r;                    /* ਕੰਮ kamm, ਧੰਨ dhann */
      else if (n && n.t === 'C' && PLACE[n.r]) {
        if (LONG.includes(s.r) && s.nas === 'bindi') {
          /* the future ending -ਾਂਗਾ / -ਾਂਗੇ / -ਾਂਗੀ / -ੋਂਗੇ is a nasal vowel + g: no warning */
          const k = seg.indexOf(n), last = seg[k + 1];
          const end = last && last.t === 'V' && ['ā', 'e', 'ī'].includes(last.r) && k + 1 === seg.length - 1;
          const fut = (n.r === 'g' || n.r === 'd') && end;  /* also the habitual -ਂਦਾ / -ਂਦੀ / -ਂਦੇ: ਜਾਂਦਾ jā̃dā */
          if (!fut) notes.push('bindi on a long vowel before a stop read as a nasal vowel'); v += TILDE;
        } else v += PLACE[n.r];
      } else v += TILDE;
    }
    if (s.tone && !notone) {
      /* the tone mark goes on the last letter of the vowel, after any tilde (not after a nasal consonant) */
      const m = s.tone === 'L' ? GRAVE : ACUTE;
      if (v.endsWith(TILDE)) v += m;
      else v = s.r + m + v.slice(s.r.length);
    }
    out += v;
  }
  return { r: out.normalize('NFC'), notes };
}

function prep(w) { w = w.normalize('NFC'); CARRIER.forEach(([a, b]) => { w = w.split(a).join(b); }); return w.normalize('NFC'); }
function word(w, notone) {
  w = prep(w);
  if (EXC[w]) return notone ? strip(EXC[w]) : EXC[w];
  const seg = parse(w); const n1 = schwa(seg); const n2 = tone(seg); const { r, notes } = render(seg, notone);
  const all = n1.concat(n2, notes);
  if (!notone && all.length && !VER.has(w) && !DEC.has(w)) warned.push('check «' + w + '» -> ' + r + ' (' + [...new Set(all)].join('; ') + ')');
  return r;
}
const strip = r => r.normalize('NFD').replace(/[̀́]/g, '').normalize('NFC');

const PUNCT = { '।': '.', '॥': '.', '.': '.', '?': '?', '!': '!', ',': ',', ':': ':', ';': ';' };
function respell(text, opt) {
  const notone = !!(opt && opt.notone);
  const src = String(text).normalize('NFC').replace(/[‌‍]/g, '');
  let out = ''; let buf = '';
  const flush = () => { if (buf) { out += word(buf, notone); buf = ''; } };
  for (const c of src) {
    if (isGuru(c) && !/[੦-੯]/.test(c) && c !== 'ੴ') { buf += c; continue; }
    flush();
    if (PUNCT[c]) { out = out.replace(/ +$/, '') + PUNCT[c]; continue; }
    if (c === '-' || c === '‐') { out = out.replace(/ +$/, '') + '-'; continue; }
    if (/\s/.test(c)) { if (out && !/[ -]$/.test(out)) out += ' '; continue; }
    if (/["“”‘’'«»()]/.test(c)) continue;
    throw new Error('not Punjabi text: «' + c + '» in «' + text + '» (write numbers as words, no Latin letters, no Gurmukhi digits, no ੴ)');
  }
  flush();
  return out.replace(/ +([.,?!:;])/g, '$1').replace(/\s+/g, ' ').trim();
}

/* pronPattern: lowercase learner romanisation; the combining tilde only after ā ī ū; a combining grave / acute only after ā ī ū or
   a tilde; at most one tone mark per word; no doubled vowels (aa ii uu ee), no c without h (except before ch: cch). */
function pattern() {
  const L = "[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵḷãĩũẽõàáèéìíòóùú\\u0300\\u0301\\u0303]";
  const W = L + '+(?:-' + L + '+)*[.,?!:;]?';
  const T = '[àáèéìíòóùú\\u0300\\u0301]';
  return '^(?!.*(?:aa|ii|uu|ee|c(?!c?h)|[^āīū]\\u0303|[^āīūãĩũẽõ\\u0303][\\u0300\\u0301]|^[\\u0300\\u0301\\u0303]|' + T + '[^ .,?!:;-]*' + T + '))' + W + '(?: ' + W + ')*$';
}
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, pattern, warnings, EXC, VER, DEC };
if (require.main === module) {
  let args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  const nt = args[0] === '--notone'; if (nt) args = args.slice(1);
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a, { notone: nt })); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
  process.exit(bad ? 1 : 0);
}

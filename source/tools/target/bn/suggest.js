/* UNVERIFIED rule-based GUESS for one Bengali word: the old en-bn rule romaniser, kept only behind `node respell.js --suggest "<word>"`.
   It is NOT the pron tool and its output is NOT a source. Bengali spelling does not show whether an inherent vowel is said, ô versus o,
   e versus æ, or s versus sh (profile docs/profiles/en-bn.md §6.1), so this guess is wrong on many common words.
   Use it only as a starting point: look the word up in a source you open, and write the line into your own lexicon-add file with
   that source, or with `unverified:model` if no source could be opened. Never copy a guess onto a card unchecked.
   (Its old EXC / VER lists stay below as part of the guess; the lexicon file is not read here.) */
let warned = [];

/* whole-word overrides: the rule gets these wrong, or the word is a fixed loan / homograph reading */
const EXC = {
  'এক': 'æk', 'একটা': 'ækṭa', 'একজন': 'ækjon',
  'আসসালামু': 'assalamu', 'আলাইকুম': 'alaikum', 'ওয়ালাইকুম': 'walaikum', 'আসসালাম': 'assalam', 'সালাম': 'salam',
  /* বাস is the English loan "bus"; বাঁশ is bamboo. Wikipedia phonology. */
  'বাস': 'bas',
  /* noun "ball". The verb "say" is the same spelling, pronounced bôlo. Johny & Jansche 2018. */
  'বল': 'bôl',
  /* UT Austin: ক handa-ta word, vowel o. The rule leaves ô. */
  'সৎ': 'shot',
  /* UT Austin: ন্ম here is a real m, not ম-ফলা. The rule geminates it. */
  'জন্ম': 'jônmo',
  /* UT Austin prothom. The rule leaves the থ vowel as ô (prothôm). */
  'প্রথম': 'prothom',
  /* LangLibra: ডাক্তার দরকার dôrkar. The rule keeps the middle vowel (dôrokar). */
  'দরকার': 'dôrkar',
  /* LangLibra writes শুভ shubho. The rule drops the final inherent vowel (shubh). */
  'শুভ': 'shubho',
  /* LangLibra শুভ সন্ধ্যা shôndhya. য-ফলা gemination does not apply to this word. */
  'সন্ধ্যা': 'shôndhya',
  /* Wikipedia phonology: লিফ্ট lifṭ, a borrowed final cluster. The rule keeps a vowel. */
  /* Wikipedia grammar: আপনার apnar. The rule keeps a vowel (apônar) because র looks like a coda. */
  'আপনার': 'apnar',
};
/* spellings with two readings. The tool returns one and still warns. */
const HOM = { 'বল': 'noun bôl "ball"; the verb "say" is bôlo' };
/* checked against a source named in the profile. A word here does not warn.
   Verb forms are deliberately absent: the tool's inherent-vowel guess on করলাম and its neighbours is not checked. */
const VER = new Set(`
আমি তুমি আপনি সে তিনি আমরা
আমার তোমার
নাম ভালো পানি জল চা ভাত
টাকা ঢাকা বাংলা
কোথায় কী কে কার কত
এটা ওটা বইটা
সাথে থেকে কাছে
গ্রাম ব্যথা হ্যাঁ বাংলা চাঁদ বাঁ পছন্দ
আস্তে আসতে করা
`.split(/\s+/).filter(Boolean));

/* the old lexicon loader is gone: lexicon.txt is now read only by respell.js */

const IND = { 'অ': 'ô', 'আ': 'a', 'ই': 'i', 'ঈ': 'i', 'উ': 'u', 'ঊ': 'u', 'ঋ': 'ri', 'এ': 'e', 'ঐ': 'oi', 'ও': 'o', 'ঔ': 'ou' };
const MAT = { 'া': 'a', 'ি': 'i', 'ী': 'i', 'ু': 'u', 'ূ': 'u', 'ৃ': 'ri', 'ে': 'e', 'ৈ': 'oi', 'ো': 'o', 'ৌ': 'ou' };
const CON = {
  'ক': 'k', 'খ': 'kh', 'গ': 'g', 'ঘ': 'gh', 'ঙ': 'ng',
  'চ': 'ch', 'ছ': 'chh', 'জ': 'j', 'ঝ': 'jh', 'ঞ': 'n',
  'ট': 'ṭ', 'ঠ': 'ṭh', 'ড': 'ḍ', 'ঢ': 'ḍh', 'ণ': 'n',
  'ত': 't', 'থ': 'th', 'দ': 'd', 'ধ': 'dh', 'ন': 'n',
  'প': 'p', 'ফ': 'f', 'ব': 'b', 'ভ': 'bh', 'ম': 'm',
  'য': 'j', 'র': 'r', 'ল': 'l', 'শ': 'sh', 'ষ': 'sh', 'স': 'sh', 'হ': 'h'
};
const NUQ = { 'ড': 'ṛ', 'ঢ': 'ṛh', 'য': 'y' };
const VIRAMA = '\u09CD', NUKTA = '\u09BC', ANU = '\u0982', VIS = '\u0983', CANDRA = '\u0981', KHANDA = '\u09CE';
const ARCH = { 'ৰ': 'ৰ (Assamese: write র)', 'ৱ': 'ৱ (Assamese: write ব)', 'ঌ': 'ঌ (Sanskrit vowel)', 'ৡ': 'ৡ (Sanskrit vowel)', 'ৎ': '' };

function expand(w) {
  return w.normalize('NFC').replace(/\u09DC/g, 'ড\u09BC').replace(/\u09DD/g, 'ঢ\u09BC').replace(/\u09DF/g, 'য\u09BC');
}

/* true when no vowel precedes this consonant inside the word (onset of the first syllable, possibly a cluster) */
function wordInitialCluster(seg) {
  return !seg.some(s => s.t === 'V');
}

function takeMarks(cs, i, seg, notes) {
  while (cs[i + 1] === ANU || cs[i + 1] === CANDRA || cs[i + 1] === VIS) {
    const m = cs[++i];
    if (m === ANU) seg.push({ t: 'N' });
    else if (m === CANDRA) seg.push({ t: 'T' });
    else { seg.push({ t: 'H' }); notes.push('visarga ঃ doubles the next consonant or is h'); }
  }
  return i;
}
function pushV(seg, notes, r, inh, src) {
  seg.push({ t: 'V', r, inh, src: src || '' });
  if (src === 'ে' || src === 'ৈ' || src === 'এ') notes.push('এ may be e or æ');
  if (src === 'ৃ' || src === 'ঋ') notes.push('ঋ read ri');
}

function parse(w) {
  const seg = []; const notes = []; const cs = [...w];
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    if (IND[c]) {
      seg.push({ t: 'V', r: IND[c], inh: false, src: c });
      if (c === 'এ') notes.push('এ may be e or æ');
      if (c === 'ঋ') notes.push('ঋ read ri');
      continue;
    }
    if (c === KHANDA) { seg.push({ t: 'C', r: 't', dev: c }); continue; }
    if (!CON[c]) {
      if (MAT[c]) throw new Error('vowel sign «' + c + '» with no consonant in «' + w + '»');
      if (c === VIRAMA) throw new Error('hasant ্ with no consonant in «' + w + '»');
      if (c === NUKTA) throw new Error('stray nukta in «' + w + '»');
      if (c === ANU || c === CANDRA || c === VIS) throw new Error('mark «' + c + '» with no vowel in «' + w + '»');
      if (/[\u09E6-\u09EF]/.test(c)) throw new Error('Bengali digit «' + c + '» in «' + w + '»: write numbers as words');
      if (ARCH[c] && c !== KHANDA) throw new Error('not modern Bengali: ' + (ARCH[c] || c) + ' in «' + w + '»');
      throw new Error('not handled: «' + c + '» (U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + ') in «' + w + '»');
    }
    let r = CON[c], dev = c;
    if (cs[i + 1] === NUKTA) {
      if (!NUQ[c]) throw new Error('unknown nukta letter «' + c + NUKTA + '» in «' + w + '»');
      r = NUQ[c]; dev = c + NUKTA; i++;
    }
    /* virama: conjunct, phola, or visible hasant */
    if (cs[i + 1] === VIRAMA && cs[i + 2]) {
      const n = cs[i + 2];
      const init = wordInitialCluster(seg);
      /* ক্ষ: word-initial kh, otherwise kkh (UT শিক্ষা shikhkha). The vowel sign after it belongs here. */
      if (dev === 'ক' && n === 'ষ') {
        seg.push({ t: 'C', r: init ? 'kh' : 'kkh', dev: 'ক্ষ', cluster: true });
        i += 2;
        const vow = MAT[cs[i + 1]] ? cs[++i] : '';
        pushV(seg, notes, vow ? MAT[vow] : 'ô', !vow, vow);
        i = takeMarks(cs, i, seg, notes);
        continue;
      }
      /* জ্ঞ: word-initial g (জ্ঞান is said gæn), otherwise gg. A following a/ô becomes æ. */
      if (dev === 'জ' && n === 'ঞ') {
        seg.push({ t: 'C', r: init ? 'g' : 'gg', dev: 'জ্ঞ', cluster: true });
        i += 2;
        const vow = MAT[cs[i + 1]] ? cs[++i] : '';
        pushV(seg, notes, vow ? MAT[vow] : 'ô', !vow, vow);
        i = takeMarks(cs, i, seg, notes);
        notes.push('জ্ঞ read g/gg; a following a is often æ (জ্ঞান)');
        continue;
      }
      /* হ্ন: হ is silent and ন is doubled (UT চিহ্ন cinno). */
      if (dev === 'হ' && n === 'ন') {
        seg.push({ t: 'C', r: 'n', dev: 'হ্ন' }); seg.push({ t: 'C', r: 'n', dev: 'ন' });
        i += 2;
        const vow = MAT[cs[i + 1]] ? cs[++i] : '';
        pushV(seg, notes, vow ? MAT[vow] : 'ô', !vow, vow);
        i = takeMarks(cs, i, seg, notes);
        notes.push('হ্ন read nn');
        continue;
      }
      /* য-ফলা */
      if (n === 'য') {
        i += 2;
        const vow = MAT[cs[i + 1]] ? cs[i + 1] : '';
        if (dev === 'হ' && !init) {
          seg.push({ t: 'C', r: 'jjh', dev: 'হ্য' });
          pushV(seg, notes, vow ? MAT[vow] : 'o', false, vow || '্য');
          if (vow) i++;
          i = takeMarks(cs, i, seg, notes);
          notes.push('হ্য read jjh (সহ্য, বাহ্য)');
          continue;
        }
        if (init && (vow === 'ে' || vow === 'ো' || vow === 'ু' || vow === 'ূ')) {
          seg.push({ t: 'C', r, dev }); pushV(seg, notes, MAT[vow], false, vow); i++;
          i = takeMarks(cs, i, seg, notes);
          continue;
        }
        if (init && (vow === 'া' || vow === '')) {
          seg.push({ t: 'C', r, dev }); pushV(seg, notes, 'æ', false, '্য');
          if (vow === 'া') i++;
          i = takeMarks(cs, i, seg, notes);
          continue;
        }
        /* non-initial: geminate + vowel sign, or o (UT জন্য jonno, বন্যা bonna). The o is the ফলা's vowel. */
        seg.push({ t: 'C', r, dev }); seg.push({ t: 'C', r, dev });
        pushV(seg, notes, vow ? MAT[vow] : 'o', false, vow || '্য');
        if (vow) i++;
        i = takeMarks(cs, i, seg, notes);
        notes.push('য-ফলা read as a doubled consonant');
        continue;
      }
      /* ম্ব is the ordinary conjunct mb (কম্বল), not ব-ফলা. */
      if (n === 'ব' && dev === 'ম') {
        seg.push({ t: 'C', r, dev });
        i++; /* virama only; ব is parsed next */
        continue;
      }
      /* ম-ফলা / ব-ফলা */
      if (n === 'ম' || n === 'ব') {
        i += 2;
        const vow = MAT[cs[i + 1]] ? cs[i + 1] : '';
        if (init) {
          notes.push((n === 'ম' ? 'ম' : 'ব') + '-ফলা dropped at the start of the word');
          seg.push({ t: 'C', r, dev });
          if (vow) { pushV(seg, notes, MAT[vow], false, vow); i++; }
          else if (cs[i + 1] !== VIRAMA) pushV(seg, notes, 'ô', true, '');
          i = takeMarks(cs, i, seg, notes);
          continue;
        }
        seg.push({ t: 'C', r, dev }); seg.push({ t: 'C', r, dev });
        pushV(seg, notes, vow ? MAT[vow] : 'o', false, vow || (n === 'ম' ? '্ম' : '্ব'));
        if (vow) i++;
        i = takeMarks(cs, i, seg, notes);
        notes.push((n === 'ম' ? 'ম' : 'ব') + '-ফলা read as a doubled consonant');
        continue;
      }
      /* র-ফলা: Cro, a vowel sign replaces o (UT). */
      if (n === 'র') {
        i += 2;
        const vow = MAT[cs[i + 1]] ? cs[i + 1] : '';
        seg.push({ t: 'C', r, dev }); seg.push({ t: 'C', r: 'r', dev: 'র' });
        pushV(seg, notes, vow ? MAT[vow] : 'o', false, vow || '্র');
        if (vow) i++;
        i = takeMarks(cs, i, seg, notes);
        continue;
      }
      /* স before a stop in a conjunct is s, not sh (স্থান, স্কুল) */
      if (dev === 'স' && 'তথকপফ'.includes(n)) r = 's';
      /* চ্চ / চ্ছ = cch / cchh */
      if (dev === 'চ' && (n === 'চ' || n === 'ছ')) r = 'c';
      seg.push({ t: 'C', r, dev });
      i++; /* consume virama; the next consonant is parsed on the next loop */
      continue;
    }
    if (cs[i + 1] === VIRAMA && !cs[i + 2]) {
      seg.push({ t: 'C', r, dev }); i++; continue; /* final hasant: no vowel */
    }
    seg.push({ t: 'C', r, dev });
    const v = cs[i + 1];
    if (MAT[v]) { pushV(seg, notes, MAT[v], false, v); i++; }
    else pushV(seg, notes, 'ô', true, '');
    i = takeMarks(cs, i, seg, notes);
  }
  return { seg, notes };
}

/* coalesce inherent অ + a following independent ই/উ into oi/ou (বই boi) */
function coalesce(seg) {
  const out = [];
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i], n = seg[i + 1];
    if (s.t === 'V' && s.inh && s.r === 'ô' && n && n.t === 'V' && !n.inh && (n.r === 'i' || n.r === 'u')) {
      out.push({ t: 'V', r: n.r === 'i' ? 'oi' : 'ou', inh: false, src: 'diph' });
      i++; continue;
    }
    /* vowel sign e/a/o/u + independent ই at the end of a syllable: নেই nei, ভাই bhai */
    if (s.t === 'V' && !s.inh && n && n.t === 'V' && !n.inh && n.src && IND[n.src] && n.r === 'i' && 'eaoôu'.includes(s.r)) {
      out.push({ t: 'V', r: s.r + 'i', inh: false, src: 'diph' });
      i++; continue;
    }
    out.push(s);
  }
  return out;
}

function schwa(seg, notes) {
  const V = () => seg.map((s, i) => s.t === 'V' && !s.del ? i : -1).filter(i => i >= 0);
  const consBefore = vi => { let n = 0; for (let i = vi - 1; i >= 0 && seg[i].t === 'C'; i--) n += seg[i].cluster ? 2 : 1; return n; };
  const afterVisarga = vi => { let i = vi - 1; if (seg[i] && seg[i].t === 'C') i--; return !!(seg[i] && seg[i].t === 'H'); };
  const consAfter = vi => { let n = 0; for (let i = vi + 1; i < seg.length && seg[i].t !== 'V'; i++) if (seg[i].t === 'C') n++; return n; };
  const between = (a, b) => { let n = 0; for (let i = a + 1; i < b; i++) if (seg[i].t === 'C') n++; return n; };
  let idx = V();
  if (!idx.length) return;
  const keep = new Set();
  const first = idx[0];
  for (const vi of idx) {
    if (!seg[vi].inh) continue;
    if (vi === first) keep.add(vi);
    if (seg[vi + 1] && seg[vi + 1].t === 'V') keep.add(vi);
    if (consBefore(vi) >= 2) keep.add(vi);
    if (consAfter(vi) >= 2) keep.add(vi);
    if (afterVisarga(vi)) keep.add(vi);
    const prev = seg[vi - 1];
    if (vi === idx[idx.length - 1] && prev && prev.t === 'C' && prev.r === 'h') keep.add(vi);
  }
  const last = idx[idx.length - 1];
  if (seg[last].inh && !keep.has(last)) {
    seg[last].del = true;
    notes.push('final inherent vowel dropped');
  }
  idx = V();
  const med = idx.filter(vi => seg[vi].inh && !seg[vi].del && vi !== first);
  for (let k = med.length - 1; k >= 0; k--) {
    const vi = med[k];
    if (keep.has(vi) || seg[vi].del) continue;
    const later = V().filter(j => j > vi);
    const nv = later.length ? later[0] : -1;
    if (nv < 0) continue;
    if (between(vi, nv) !== 1) continue;
    const after = V().filter(j => j > nv);
    const nvOpen = after.length ? between(nv, after[0]) <= 1 : consAfter(nv) === 0;
    if (!nvOpen) continue;
    seg[vi].del = true;
    notes.push('medial inherent vowel dropped');
    const prevV = V().filter(j => j < vi).pop();
    if (prevV >= 0 && seg[prevV].inh) keep.add(prevV);
  }
  /* quality of what remains */
  idx = V();
  for (const vi of idx) {
    if (!seg[vi].inh || seg[vi].del) continue;
    notes.push('inherent vowel');
    const later = idx.filter(j => j > vi);
    const nv = later.length ? later[0] : -1;
    const nextR = nv >= 0 ? seg[nv].r : '';
    const prevV = idx.filter(j => j < vi).pop();
    let followedByGlide = false;
    for (let i = vi + 1; i < seg.length && seg[i].t !== 'V'; i++) {
      if (seg[i].t === 'C' && (seg[i].r === 'y' || seg[i].r === 'w')) followedByGlide = true;
    }
    const high = nextR === 'i' || nextR === 'u' || (typeof nextR === 'string' && (nextR.startsWith('i') || nextR.startsWith('u')));
    let nextJ = false;
    for (let i = vi + 1; i < seg.length && seg[i].t !== 'V'; i++) {
      if (seg[i].t === 'C' && /^[jyw]/.test(seg[i].r)) nextJ = true;
    }
    /* r12a: o after a word-final conjunct, o as the second of two inherent vowels, o before i/j/u/w.
       Wikipedia: the vowel kept after হ is o (গ্রহ /gro.ho/). Otherwise a lone inherent stays ô. */
    if (afterVisarga(vi) || (consBefore(vi) >= 2 && nv < 0) || (seg[vi - 1] && seg[vi - 1].t === 'C' && seg[vi - 1].r === 'h' && nv < 0)) {
      seg[vi].r = 'o'; notes.push('inherent vowel after a cluster or হ read o');
    } else if (prevV >= 0 && seg[prevV].inh && !seg[prevV].del) {
      seg[vi].r = 'o'; notes.push('second of two inherent vowels read o');
    } else if (high || followedByGlide || nextJ) {
      seg[vi].r = 'o'; notes.push('inherent vowel before i, u, j or y read o');
    }
  }
}

const NAS = { 'a': 'ã', 'o': 'õ', 'e': 'ẽ', 'u': 'ũ', 'i': 'i\u0303', 'ô': 'ô\u0303', 'æ': 'æ\u0303' };
function render(seg) {
  let out = '';
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i];
    if (s.t === 'V' && s.del) continue;
    if (s.t === 'C') {
      /* visarga before this consonant: double it (দুঃখ dukhkho: ঃ + খ) */
      out += s.r; continue;
    }
    if (s.t === 'V') {
      let v = s.r;
      if (seg[i + 1] && seg[i + 1].t === 'T') { v = NAS[v] || (v + '\u0303'); i++; }
      out += v; continue;
    }
    if (s.t === 'N') { out += 'ng'; continue; }
    if (s.t === 'H') {
      const nx = seg[i + 1];
      if (nx && nx.t === 'C') { out += nx.r; /* lengthens the next consonant by writing it twice, once here and once when the C is rendered */ }
      else out += 'h';
      continue;
    }
  }
  return out.normalize('NFC');
}

function word(raw) {
  let w = expand(raw).replace(/[\u200c\u200d]/g, '');
  if (EXC[w]) {
    if (HOM[w]) warned.push('homograph «' + w + '» -> ' + EXC[w] + ' (' + HOM[w] + ')');
    return EXC[w];
  }
  const p = parse(w);
  p.seg = coalesce(p.seg);
  /* জ্ঞ + the vowel sign া is æ (Wikipedia phonology: জ্ঞান [gæn]). An inherent vowel stays ô/o (অজ্ঞ). */
  for (let i = 0; i < p.seg.length; i++) {
    if (p.seg[i].dev === 'জ্ঞ' && p.seg[i + 1] && p.seg[i + 1].src === 'া') {
      p.seg[i + 1].r = 'æ'; p.seg[i + 1].inh = false;
    }
  }
  schwa(p.seg, p.notes);
  const r = render(p.seg);
  const interesting = p.notes.filter(n => /inherent|এ may|এ-sign|য-ফলা|ফলা|জ্ঞ|visarga|হ্য|ঋ|ৃ/.test(n));
  if (interesting.length && !VER.has(raw.normalize('NFC')) && !VER.has(w)) {
    warned.push('check «' + w + '» -> ' + r + ' (' + [...new Set(interesting)].join('; ') + ')');
  }
  return r;
}

const PUNCT = { '।': '.', '॥': '.', '.': '.', '?': '?', '!': '!', ',': ',', ':': ':', ';': ';' };
function respell(text) {
  const src = String(text).normalize('NFC').replace(/[\u200c\u200d]/g, '');
  let out = ''; let buf = '';
  const flush = () => { if (buf) { out += word(buf); buf = ''; } };
  for (const c of src) {
    if (/[\u0980-\u09FF]/.test(c) && !/[\u09E6-\u09EF]/.test(c) && !PUNCT[c]) { buf += c; continue; }
    flush();
    if (PUNCT[c]) { out = out.replace(/ +$/, '') + PUNCT[c]; continue; }
    if (c === '-' || c === '‐') { out = out.replace(/ +$/, '') + '-'; continue; }
    if (/\s/.test(c)) { if (out && !/[ -]$/.test(out)) out += ' '; continue; }
    if (/["“”‘’'«»()]/u.test(c)) continue;
    throw new Error('not Bengali text: «' + c + '» in «' + text + '» (write numbers as words, no Latin letters, no digits)');
  }
  flush();
  if (!/[a-zôæãõẽũṭḍṇṛ]/u.test(out)) throw new Error('no Bengali word in «' + text + '»');
  return out.replace(/ +([.,?!:;])/g, '$1').replace(/\s+/g, ' ').trim();
}

function warnings() { const w = warned; warned = []; return w; }
/* guess(word) -> { guess, notes }: never throws on an unknown word; throws only on text that is not Bengali */
function guess(text) { const g = respell(text); const notes = warnings(); return { guess: g, notes }; }
module.exports = { guess };

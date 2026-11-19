/* Thai script -> the en-th romanization (pron line), profile docs/profiles/en-th.md §6.
   How it works: a word list (LEX below) gives every Thai word the course uses, each with its READING: the word respelled as
   regular Thai syllables separated by "-" (the convention of Thai dictionaries, "อ่านว่า"): hidden vowels written out
   (สบาย=สะ-บาย), leading consonants written with ห (ขนม=ขะ-หนม, ตลาด=ตะ-หลาด), irregular words respelled (ได้=ด้าย, จริง=จิง, ทราบ=ซาบ).
   A word whose reading is itself (one regular syllable) is listed bare. The romanization of each syllable is then COMPUTED from the
   Thai tone rules (consonant class + live/dead + vowel length + tone mark), so tones are never typed by hand.
   Reading conventions (the same as Wiktionary's Thai phonemic respelling): a short vowel that the spelling does not show is written with
   ็ beside the tone mark (เล่น=เล็่น, ต้อง=ต็้อง, เงิน=เงิ็น); an irregular long vowel is respelled long (น้ำ=น้าม, ได้=ด้าย).
   Input text is cut into words by maximal matching over the list (the cut with the fewest words); if two different cuts have the same
   fewest words it throws (two possible word breaks), and any text not in the list throws «…». Spaces in the input force word breaks. Arabic digits are read
   as Thai numbers. A token that is one bare consonant (as in the letter card "ก ไก่") is read as the letter's name (gaaw).
   Output: syllables joined by "-", words by one space, lowercase, no punctuation. Tones: low à, falling â, high á, rising ǎ, mid unmarked,
   on the first vowel letter of the syllable.
   usage: node respell.js "สวัสดีครับ"  ->  สวัสดีครับ -> sà-wàt-dii khráp      node respell.js --pattern   (prints pronPattern)
          node respell.js --check   (parses every list entry and reports its romanization; exit 1 on any failure) */
'use strict';
const CONS = { /* letter: [initial, final, class]   final '' = cannot end a syllable; 'y'/'w' are glides */
  'ก': ['g', 'k', 'M'], 'ข': ['kh', 'k', 'H'], 'ฃ': ['kh', 'k', 'H'], 'ค': ['kh', 'k', 'L'], 'ฅ': ['kh', 'k', 'L'], 'ฆ': ['kh', 'k', 'L'], 'ง': ['ng', 'ng', 'L'],
  'จ': ['j', 't', 'M'], 'ฉ': ['ch', 't', 'H'], 'ช': ['ch', 't', 'L'], 'ซ': ['s', 't', 'L'], 'ฌ': ['ch', 't', 'L'], 'ญ': ['y', 'n', 'L'],
  'ฎ': ['d', 't', 'M'], 'ฏ': ['dt', 't', 'M'], 'ฐ': ['th', 't', 'H'], 'ฑ': ['th', 't', 'L'], 'ฒ': ['th', 't', 'L'], 'ณ': ['n', 'n', 'L'],
  'ด': ['d', 't', 'M'], 'ต': ['dt', 't', 'M'], 'ถ': ['th', 't', 'H'], 'ท': ['th', 't', 'L'], 'ธ': ['th', 't', 'L'], 'น': ['n', 'n', 'L'],
  'บ': ['b', 'p', 'M'], 'ป': ['bp', 'p', 'M'], 'ผ': ['ph', 'p', 'H'], 'ฝ': ['f', 'p', 'H'], 'พ': ['ph', 'p', 'L'], 'ฟ': ['f', 'p', 'L'], 'ภ': ['ph', 'p', 'L'],
  'ม': ['m', 'm', 'L'], 'ย': ['y', 'y', 'L'], 'ร': ['r', 'n', 'L'], 'ล': ['l', 'n', 'L'], 'ว': ['w', 'w', 'L'],
  'ศ': ['s', 't', 'H'], 'ษ': ['s', 't', 'H'], 'ส': ['s', 't', 'H'], 'ห': ['h', '', 'H'], 'ฬ': ['l', 'n', 'L'], 'อ': ['', '', 'M'], 'ฮ': ['h', '', 'L']
};
const CLUSTER = { 'ร': 'กขคตปพบดฟ', 'ล': 'กขคปผพบฟ', 'ว': 'กขค' };
const LEADH = 'งญนมยรลว';
/* vowels: romanization, long?, ends in a glide (always a live syllable, takes no final) */
const V = {
  a: ['a', 0], aa: ['aa', 1], i: ['i', 0], ii: ['ii', 1], ue: ['ue', 0], uue: ['uue', 1], u: ['u', 0], uu: ['uu', 1],
  e: ['e', 0], ee: ['ee', 1], ae: ['ae', 0], aae: ['aae', 1], o: ['o', 0], oo: ['oo', 1], aw: ['aw', 0], aaw: ['aaw', 1],
  oe: ['oe', 0], ooe: ['ooe', 1], ia: ['ia', 0], iia: ['iia', 1], uea: ['uea', 0], uuea: ['uuea', 1], ua: ['ua', 0], uua: ['uua', 1],
  am: ['am', 0, 1], ai: ['ai', 0, 1], ao: ['ao', 0, 1], aai: ['aai', 1, 1], aao: ['aao', 1, 1], iu: ['iu', 0, 1], ui: ['ui', 0, 1], ooi: ['ooi', 1, 1],
  aawi: ['aawi', 1, 1], awi: ['awi', 0, 1], uuai: ['uuai', 1, 1], uueai: ['uueai', 1, 1], ooei: ['ooei', 1, 1], eo: ['eo', 0, 1], eeo: ['eeo', 1, 1], aeo: ['aeo', 0, 1],
  aaeo: ['aaeo', 1, 1], iiao: ['iiao', 1, 1]
};
/* body patterns after the onset, by leading vowel; F = one final consonant */
const F = '([กขคฆงจชซญฎฏฐฑฒณดตถทธนบปผพฟภมรลฬศษส])';
const BODY = {
  '': [['ะ', 'a'], ['ัวะ', 'ua'], ['ัวย', 'uuai'], ['ัว', 'uua'], ['ัย', 'ai'], ['ั' + F, 'a'], ['ำ', 'am'], ['าย', 'aai'], ['าว', 'aao'], ['า' + F + '?', 'aa'],
    ['ิว', 'iu'], ['ิ' + F + '?', 'i'], ['ี' + F + '?', 'ii'], ['ึ' + F + '?', 'ue'], ['ือ', 'uue'], ['ื' + F, 'uue'], ['ุย', 'ui'], ['ุ' + F + '?', 'u'], ['ู' + F + '?', 'uu'],
    ['็อย', 'awi'], ['็อ' + F, 'aw'], ['อย', 'aawi'], ['อ' + F + '?', 'aaw'], ['วย', 'uuai'], ['ว' + F, 'uua'], [F, 'o']],
  'เ': [['', 'ee'], ['ะ', 'e'], ['็ว', 'eo'], ['็' + F, 'e'], ['ิ็' + F, 'oe'], ['็ิ' + F, 'oe'], ['ิ' + F, 'ooe'], ['อะ', 'oe'], ['อ', 'ooe'], ['ย', 'ooei'], ['าะ', 'aw'], ['า', 'ao'],
    ['ียะ', 'ia'], ['ียว', 'iiao'], ['ีย' + F + '?', 'iia'], ['ือะ', 'uea'], ['ือย', 'uueai'], ['ือ' + F + '?', 'uuea'], ['ว', 'eeo'], [F, 'ee']],
  'แ': [['', 'aae'], ['ะ', 'ae'], ['็ว', 'aeo'], ['็' + F, 'ae'], ['ว', 'aaeo'], [F, 'aae']],
  'โ': [['', 'oo'], ['ะ', 'o'], ['ย', 'ooi'], [F, 'oo']],
  'ไ': [['', 'ai'], ['ย', 'ai']], 'ใ': [['', 'ai']]
};
const BODYRE = {}; for (const k in BODY) BODYRE[k] = BODY[k].map(([p, v]) => [new RegExp('^' + p + '$'), v]);
const TONE = { L: '̀', F: '̂', H: '́', R: '̌', M: '' };
function err(m) { const e = new Error(m); throw e; }
/* one regular Thai syllable -> romanization */
function syllable(s0) {
  let s = s0.normalize('NFC').replace(/[ฺ]/g, '').replace(/[ก-ฮ][ิุ]?์/g, ''); /* phinthu dropped; letters under the silence mark are silent */
  const marks = s.match(/[่้๊๋]/g) || []; if (marks.length > 1) err('two tone marks in «' + s0 + '»'); const mark = marks[0] || ''; s = s.replace(/[่้๊๋]/g, '');
  let lv = ''; if (/^[เแโใไ]/.test(s)) { lv = s[0]; s = s.slice(1); }
  const c1 = s[0]; if (!CONS[c1]) err('no onset consonant in «' + s0 + '»');
  const c2 = s[1];
  /* onset candidates in order of preference; the first whose remainder reads as a vowel (+ final) wins.
     ห + low sonorant = leading ห (high class); อย = leading อ (mid class); กร กล กว ขร … = clusters.
     With ว the plain reading is tried first (ขวด khùuat, ควร khuuan; but ขวา, ความ have a vowel after ว and only read as clusters). */
  const simple = [CONS[c1][0], CONS[c1][2], s.slice(1)];
  const cands = [];
  if (c1 === 'ห' && c2 && LEADH.includes(c2)) { const lead = [CONS[c2][0], 'H', s.slice(2)]; if (c2 === 'ว') cands.push(simple, lead); else cands.push(lead, simple); }
  else if (c1 === 'อ' && c2 === 'ย') cands.push(['y', 'M', s.slice(2)], simple);
  else if (c2 && CLUSTER[c2] && CLUSTER[c2].includes(c1)) { const cl = [CONS[c1][0] + CONS[c2][0], CONS[c1][2], s.slice(2)]; if (c2 === 'ว') cands.push(simple, cl); else cands.push(cl, simple); }
  else cands.push(simple);
  let onset, cls, vk = null, fin = '';
  for (const [on, cl, rest] of cands) { for (const [re, v] of BODYRE[lv]) { const m = rest.match(re); if (m) { vk = v; fin = m[1] || ''; break; } } if (vk) { onset = on; cls = cl; break; } }
  if (!vk) err('cannot read «' + s0 + '» as one syllable (write the reading with explicit vowels)');
  const [vr, long, glide] = V[vk];
  const fr = fin ? CONS[fin][1] : '';
  if (fin && !fr) err('«' + fin + '» cannot be a final in «' + s0 + '»');
  const dead = /^[ktp]$/.test(fr) || (!fr && !glide && !long);
  let t;
  if (mark === '่') t = cls === 'L' ? 'F' : 'L';
  else if (mark === '้') t = cls === 'L' ? 'H' : 'F';
  else if (mark === '๊') { if (cls !== 'M') err('mai tri on a non-mid consonant in «' + s0 + '»'); t = 'H'; }
  else if (mark === '๋') { if (cls !== 'M') err('mai chattawa on a non-mid consonant in «' + s0 + '»'); t = 'R'; }
  else if (cls === 'M') t = dead ? 'L' : 'M';
  else if (cls === 'H') t = dead ? 'L' : 'R';
  else t = dead ? (long ? 'F' : 'H') : 'M';
  const vt = (vr[0] + TONE[t]).normalize('NFC') + vr.slice(1);
  return onset + vt + fr;
}
/* ---------- the word list ----------
   entry = word | word=reading (syllables separated by -) | add # for a number word (numbers join into one word: ยี่สิบห้า -> yîi-sìp-hâa).
   Entries are separated by spaces or new lines; a line starting with // is a comment. */
const LEX = `
// politeness, greetings, particles
สวัสดี=สะ-หวัด-ดี ครับ ค่ะ คะ นะ จ้ะ จ้า สิ เถอะ ล่ะ หรอก น่ะ เลย ด้วย ขอบคุณ=ขอบ-คุน ขอโทษ=ขอ-โทด ไม่เป็นไร=ไม่-เป็น-ไร ยินดี=ยิน-ดี
รู้จัก=รู้-จัก สบาย=สะ-บาย ดี ไหม หรือ หรือเปล่า=หรือ-ปล่าว หรือยัง=หรือ-ยัง เปล่า=ปล่าว ใช่ ไม่ ลาก่อน=ลา-ก่อน ก่อน ฝันดี=ฝัน-ดี
ราตรีสวัสดิ์=รา-ตรี-สะ-หวัด อรุณสวัสดิ์=อะ-รุน-สะ-หวัด โชคดี=โชก-ดี เชิญ ไหว้=ว่าย เกรงใจ=เกรง-ใจ ยินดีต้อนรับ=ยิน-ดี-ต้อน-รับ
// pronouns, people, family
ผม ฉัน ดิฉัน=ดิ-ฉัน คุณ=คุน เขา เธอ เรา พวกเรา=พวก-เรา พวกเขา=พวก-เขา พวกคุณ=พวก-คุน พี่ น้อง มัน ใคร ลุง ป้า น้า คน ชื่อ
เพื่อน แฟน ครู อาจารย์=อา-จาน นักเรียน=นัก-เรียน นักศึกษา=นัก-สึก-สา หมอ พยาบาล=พะ-ยา-บาน ตำรวจ=ตำ-หรวด พนักงาน=พะ-นัก-งาน
ผู้ชาย=ผู้-ชาย ผู้หญิง=ผู้-หญิง เด็ก แม่ พ่อ พ่อแม่=พ่อ-แม่ ลูก ลูกสาว=ลูก-สาว ลูกชาย=ลูก-ชาย สามี=สา-มี ภรรยา=พัน-ระ-ยา
พี่ชาย=พี่-ชาย พี่สาว=พี่-สาว น้องชาย=น้อง-ชาย น้องสาว=น้อง-สาว ปู่ ย่า ตา ยาย ครอบครัว=ครอบ-ครัว คุณแม่=คุน-แม่ คุณพ่อ=คุน-พ่อ
งาน ทำงาน=ทำ-งาน บริษัท=บอ-ริ-สัด ออฟฟิศ=ออ-ฟิด วิศวกร=วิด-สะ-วะ-กอน นักธุรกิจ=นัก-ทุ-ระ-กิด พ่อครัว=พ่อ-ครัว แม่ค้า=แม่-ค้า
คนขับรถ=คน-ขับ-รถ ทหาร=ทะ-หาน เกษียณ=กะ-เสียน อายุ=อา-ยุ ขวบ แต่งงาน=แต็่ง-งาน โสด
// names
สมชาย=สม-ชาย มาลี=มา-ลี สมศรี=สม-สี วิชัย=วิ-ไช นิด ต้น ฝน แก้ว นก ไมค์=ไม แอนนา=แอน-นา จอห์น=จอน เจน เดวิด=เด-วิด
// verbs
เป็น คือ อยู่ มี ไป มา กิน ดื่ม ดู ฟัง พูด อ่าน เขียน ซื้อ ขาย ชอบ รัก อยาก ต้อง=ต็้อง ทำ เรียน นอน ตื่น ตื่นนอน=ตื่น-นอน
เข้าใจ=เข้า-ใจ รู้ ช่วย ให้ เอา ขอ จ่าย นั่ง เดิน วิ่ง เลี้ยว จอด ถึง กลับ ออก เข้า ใช้ หา เจอ เห็น คิด คิดถึง=คิด-ถึง อาบน้ำ=อาบ-น้าม
ทำอาหาร=ทำ-อา-หาน ล้าง ใส่ ลอง รอ เปิด ปิด เริ่ม เสร็จ=เส็ด เล่น=เล็่น เต้น=เต็้น ร้อง เพลง ว่ายน้ำ=ว่าย-น้าม ขับ ขับรถ=ขับ-รถ
พัก พักผ่อน=พัก-ผ่อน เที่ยว ทาน บอก ถาม ตอบ จาก สอน โทร=โท ส่ง ได้ยิน=ด้าย-ยิน รู้สึก=รู้-สึก เจ็บ ปวด หาย สามารถ=สา-มาด เปลี่ยน
แนะนำ=แนะ-นำ แลก ต่อรอง=ต่อ-รอง ลด สั่ง ห่อ ขึ้น ลง ข้าม จำ ลืม พา ฝาก เล่า ร้องเพลง=ร้อง-เพลง ถ่าย ถ่ายรูป=ถ่าย-รูบ
// grammar words
ได้=ด้าย จะ กำลัง=กำ-ลัง แล้ว ยัง เพิ่ง=เพิ็่ง เคย ควร อย่า ของ ที่ และ กับ แต่ เพราะ เพราะว่า=เพราะ-ว่า ว่า ถ้า ก็=ก้อ
มาก กว่า ที่สุด=ที่-สุด เกินไป=เกิน-ไป เท่ากัน=เท่า-กัน เหมือน เหมือนกัน=เหมือน-กัน กัน ด้วยกัน=ด้วย-กัน คนเดียว=คน-เดียว เดียว
ทั้งหมด=ทั้ง-หมด บ้าง เอง อย่าง เช่น=เช็่น หน่อย=หน็่อย นิดหน่อย=นิด-หน็่อย อีก แค่ ทุก บาง หลาย เยอะ นิด
นี้ นั้น โน้น นี่ นั่น โน่น อัน ไหน
// question words
อะไร=อะ-ไร ที่ไหน=ที่-ไหน เมื่อไร=เมื่อ-ไร เมื่อไหร่=เมื่อ-ไหร่ เท่าไร=เท่า-ไร เท่าไหร่=เท่า-ไหร่ ทำไม=ทำ-ไม อย่างไร=หย่าง-ไร
ยังไง=ยัง-ไง กี่
// numbers (join into one word)
ศูนย์=สูน# หนึ่ง# สอง# สาม# สี่# ห้า# หก# เจ็ด# แปด# เก้า=ก้าว# สิบ# ยี่=ยี่# เอ็ด# ร้อย# พัน# หมื่น# แสน# ล้าน# ครึ่ง
// classifiers and units
ตัว เล่ม=เล็่ม ใบ คัน ขวด แก้ว จาน ชาม ชิ้น หลัง คู่ ชุด ห้อง=ห็้อง ถ้วย กล่อง=กล็่อง แผ่น=แผ็่น เครื่อง ดอก ต้น เส้น=เส็้น บาท ครั้ง
วัน ชั่วโมง=ชั่ว-โมง นาที=นา-ที ปี เดือน อาทิตย์=อา-ทิด สัปดาห์=สับ-ดา กิโล=กิ-โล เมตร=เมด
// food and drink
ข้าว ข้าวผัด=ข้าว-ผัด ข้าวเหนียว=ข้าว-เหนียว ข้าวมันไก่=ข้าว-มัน-ไก่ ข้าวต้ม=ข้าว-ต้ม น้ำ=น้าม น้ำเปล่า=น้าม-ปล่าว
น้ำแข็ง=น้าม-แข็ง น้ำส้ม=น้าม-ส้ม น้ำตาล=น้าม-ตาน กาแฟ=กา-แฟ ชา ชาเย็น=ชา-เย็น นม เบียร์=เบีย ไก่ ไข่ หมู เนื้อ ปลา กุ้ง ผัก
ผลไม้=ผน-ละ-ม้าย มะม่วง=มะ-ม่วง กล้วย ส้ม แตงโม=แตง-โม มะพร้าว=มะ-พร้าว อร่อย=อะ-หร็่อย เผ็ด หวาน เค็ม เปรี้ยว ขม จืด
ผัดไทย=ผัด-ไท ส้มตำ=ส้ม-ตำ ต้มยำ=ต้ม-ยำ แกง แกงเขียวหวาน=แกง-เขียว-หวาน ก๋วยเตี๋ยว=ก๋วย-เตี๋ยว ผัด ทอด ย่าง ปิ้ง ต้ม
อิ่ม หิว หิวน้ำ=หิว-น้าม อาหาร=อา-หาน เมนู=เม-นู ช้อน ส้อม=ส็้อม ตะเกียบ=ตะ-เกียบ เช็คบิล=เช็ก-บิน พริก ขนม=ขะ-หนม
ไอศกรีม=ไอ-สะ-กรีม ร้านอาหาร=ร้าน-อา-หาน ร้านกาแฟ=ร้าน-กา-แฟ ผัดกะเพรา=ผัด-กะ-เพรา มังสวิรัติ=มัง-สะ-วิ-รัด ถั่ว แพ้
// shopping, money, colors, clothes
ราคา=รา-คา แพง ถูก เงิน=เงิ็น เงินสด=เงิ็น-สด เงินทอน=เงิ็น-ทอน ทอน บัตร=บัด บัตรเครดิต=บัด-เคร-ดิด สแกน=สะ-แกน คิวอาร์=คิว-อา
เสื้อ เสื้อผ้า=เสื้อ-ผ้า ผ้า กางเกง=กาง-เกง รองเท้า=รอง-ท้าว กระโปรง=กระ-โปรง หมวก กระเป๋า=กระ-เป๋า ไซส์=ไซ
สี แดง ขาว ดำ เขียว ฟ้า น้ำเงิน=น้าม-เงิ็น เหลือง ชมพู=ชม-พู ม่วง เทา ทอง ห้าง ห้างสรรพสินค้า=ห้าง-สับ-พะ-สิน-ค้า
เซเว่น=เซ-เว็่น ร้าน ร้านค้า=ร้าน-ค้า ของขวัญ=ของ-ขวัน ถุง
// time
วันนี้=วัน-นี้ พรุ่งนี้=พรุ่ง-นี้ เมื่อวาน=เมื่อ-วาน ตอน ตอนนี้=ตอน-นี้ เช้า=ช้าว บ่าย เย็น กลางวัน=กลาง-วัน กลางคืน=กลาง-คืน
คืน คืนนี้=คืน-นี้ เที่ยง เที่ยงคืน=เที่ยง-คืน โมง ทุ่ม ตี นาฬิกา=นา-ลิ-กา เวลา=เว-ลา วันจันทร์=วัน-จัน วันอังคาร=วัน-อัง-คาน
วันพุธ=วัน-พุด วันพฤหัส=วัน-พะ-รึ-หัด วันศุกร์=วัน-สุก วันเสาร์=วัน-เสา วันอาทิตย์=วัน-อา-ทิด ทุกวัน=ทุก-วัน บ่อย=บ็่อย บางครั้ง=บาง-ครั้ง
เสมอ=สะ-เหมอ หน้า หลัง ปีนี้=ปี-นี้ เดือนนี้=เดือน-นี้ สาย ทัน เร็ว ช้า
// places, directions, transport
บ้าน ห้องน้ำ=ห็้อง-น้าม ตลาด=ตะ-หลาด โรงเรียน=โรง-เรียน โรงแรม=โรง-แรม โรงพยาบาล=โรง-พะ-ยา-บาน ร้านขายยา=ร้าน-ขาย-ยา ยา
ธนาคาร=ทะ-นา-คาน สนามบิน=สะ-หนาม-บิน สถานี=สะ-ถา-นี รถไฟฟ้า=รถ-ไฟ-ฟ้า บีทีเอส=บี-ที-เอ็ด รถเมล์=รถ-เม วัด ทะเล=ทะ-เล
เกาะ ภูเขา=พู-เขา ถนน=ถะ-หนน ซอย ที่นี่=ที่-นี่ ที่นั่น=ที่-นั่น ตรงนี้=ตรง-นี้ ตรงนั้น=ตรง-นั้น ข้าง ข้างหน้า=ข้าง-หน้า ข้างหลัง=ข้าง-หลัง
ข้างใน=ข้าง-ใน ข้างนอก=ข้าง-นอก ใน นอก บน ใต้=ต้าย ระหว่าง=ระ-หว่าง ตรงข้าม=ตรง-ข้าม หัวมุม=หัว-มุม แยก ไฟแดง=ไฟ-แดง ซ้าย ขวา ตรง
ใกล้ ไกล แถว แถวนี้=แถว-นี้ เมือง ประเทศ=ประ-เทด กรุงเทพฯ=กรุง-เทบ กรุงเทพ=กรุง-เทบ เชียงใหม่=เชียง-ใหม่ ภูเก็ต=พู-เก็ด
พัทยา=พัด-ทะ-ยา อยุธยา=อะ-ยุด-ทะ-ยา สุขุมวิท=สุ-ขุม-วิด สีลม=สี-ลม สยาม=สะ-หยาม ข้าวสาร=ข้าว-สาน ทาง ป้าย
รถ รถไฟ=รถ-ไฟ เครื่องบิน=เครื่อง-บิน แท็กซี่=แท็ก-ซี่ ตุ๊กตุ๊ก=ตุ๊ก-ตุ๊ก มอเตอร์ไซค์=มอ-เตอ-ไซ เรือ ตั๋ว มิเตอร์=มิ-เตอ ค่า ค่าโดยสาร=ค่า-โดย-สาน
// countries, languages
ไทย=ไท อเมริกา=อะ-เม-ริ-กา อเมริกัน=อะ-เม-ริ-กัน อังกฤษ=อัง-กริด ญี่ปุ่น=ยี่-ปุ่น จีน เกาหลี=เกา-หลี แคนาดา=แค-นา-ดา
ฝรั่ง=ฝะ-หรั่ง ฝรั่งเศส=ฝะ-หรั่ง-เสด ภาษา=พา-สา ต่างชาติ=ต่าง-ชาด ชาติ=ชาด
// health, feelings, body
ปวดหัว=ปวด-หัว ปวดท้อง=ปวด-ท้อง หัว ท้อง ฟัน ไข้ ไม่สบาย=ไม่-สะ-บาย หวัด ไอ คลินิก=คลิ-นิก ช่วยด้วย=ช่วย-ด้วย ดีใจ=ดี-ใจ
เสียใจ=เสีย-ใจ เหนื่อย ง่วง ง่วงนอน=ง่วง-นอน กลัว โกรธ เครียด เบื่อ สนุก=สะ-หนุก ตื่นเต้น=ตื่น-เต็้น สบายใจ=สะ-บาย-ใจ ปกติ=ปก-กะ-ติ
อาการ=อา-กาน ร้อน หนาว เย็น ตา หู ปาก มือ ขา เท้า=ท้าว หลัง คอ แขน
// describing
ใหญ่ เล็ก สวย หล่อ น่ารัก=น่า-รัก ใหม่ เก่า ยาว สั้น สูง เตี้ย อ้วน ผอม ง่าย ยาก น้อย สะอาด=สะ-อาด สกปรก=สก-กะ-ปรก ดัง เงียบ
เก่ง=เก็่ง ใจดี=ใจ-ดี หนัก เบา ยุ่ง ว่าง จริง=จิง ทราบ=ซาบ
// things
โทรศัพท์=โท-ระ-สับ มือถือ=มือ-ถือ ไลน์=ไล ไวไฟ=ไว-ไฟ รหัส=ระ-หัด หนังสือ=หนัง-สือ หนัง ทีวี=ที-วี ฝน ตก แดด อากาศ=อา-กาด
กุญแจ=กุน-แจ หนังสือเดินทาง=หนัง-สือ-เดิน-ทาง แผนที่=แผน-ที่ ที่อยู่=ที่-หยู่ รูป ปัญหา=ปัน-หา เรื่อง แมว หมา ช้าง ไม้=ม้าย ม้า โต๊ะ
เก้าอี้=เก้า-อี้ ประตู=ประ-ตู หน้าต่าง=หน้า-ต่าง แอร์=แอ ฟรี ฟิต โอเวอร์=โอ-เว่อ เต็ม
// script stage: letter-name words and vowel and tone examples
ไข่ ควาย งู จาน ฉิ่ง โซ่ หญิง ชฎา=ชะ-ดา ปฏัก=ปะ-ตัก ฐาน มณโฑ=มน-โท ผู้เฒ่า=ผู้-เท่า เณร=เนน เต่า ถุง ธง หนู ใบไม้=ใบ-ม้าย
ผึ้ง ฝา พาน ฟัน สำเภา=สำ-เพา ยักษ์=ยัก ลิง แหวน ศาลา=สา-ลา ฤๅษี=รือ-สี หีบ จุฬา=จุ-ลา อ่าง นกฮูก=นก-ฮูก ฆ้อง=ค้อง ระฆัง=ระ-คัง
กา ปู ดุ มา หมา ไหม ปา ป่า ป้า หญ้า นา หน้า น่า ห้า หา เสือ เสื่อ ซวย ขัด ขาด ราก คา พา ทา ชาน ปิด เป็ด แปด โดน ดอน
ลิ้น ปืน ไฟ ขาว เข้า จ๋า ใจ ทุเรียน=ทุ-เรียน พาย ฟุตบอล=ฟุด-บอน กรุณา=กะ-รุ-นา พร้อม แข็ง โรง สวน ข่าว พวก สระน้ำ=สะ-น้าม
ไม้เอก=ม้าย-เอก ไม้โท=ม้าย-โท ไม้ตรี=ม้าย-ตรี ไม้จัตวา=ม้าย-จัด-ตะ-วา คำ
`;
const WORDS = new Map(); const NUM = new Set(); let MAXLEN = 1;
(function load() {
  LEX.split('\n').forEach(line => { if (/^\s*\/\//.test(line)) return; line.split(/\s+/).filter(Boolean).forEach(e => {
    let num = false; if (e.endsWith('#')) { num = true; e = e.slice(0, -1); }
    const [w, r] = e.split('='); const read = r || w;
    let rom; try { rom = read.split('-').map(syllable).join('-'); } catch (x) { err('word list entry «' + e + '»: ' + x.message); }
    if (WORDS.has(w) && WORDS.get(w) !== rom) err('word list: «' + w + '» listed twice with different readings');
    WORDS.set(w, rom); if (num) NUM.add(w); MAXLEN = Math.max(MAXLEN, w.length); }); });
})();
/* Arabic digits -> Thai number words */
const DIG = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
const POS = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];
function numWords(n) {
  if (!/^\d+$/.test(n)) err('number «' + n + '»'); n = n.replace(/^0+(?=\d)/, ''); if (n === '0') return DIG[0];
  if (n.length > 6) { const hi = n.slice(0, -6), lo = n.slice(-6); return numWords(hi) + 'ล้าน' + (/^0+$/.test(lo) ? '' : numWords(lo)); }
  let out = ''; const L = n.length;
  for (let i = 0; i < L; i++) { const d = +n[i], p = L - 1 - i; if (!d) continue;
    if (p === 1) out += (d === 1 ? '' : d === 2 ? 'ยี่' : DIG[d]) + 'สิบ';
    else if (p === 0) out += (d === 1 && L > 1 ? 'เอ็ด' : DIG[d]);
    else out += DIG[d] + POS[p]; }
  return out;
}
function segment(chunk) { /* maximal matching: the cut with the fewest words; a tie between two different cuts throws */
  const n = chunk.length; const best = new Array(n + 1).fill(null); best[0] = { k: 0, cuts: [[]] };
  for (let i = 0; i < n; i++) { if (!best[i]) continue;
    for (let j = i + 1; j <= Math.min(n, i + MAXLEN); j++) { const w = chunk.slice(i, j); if (!WORDS.has(w)) continue;
      const k = best[i].k + 1; const cuts = best[i].cuts.map(c => c.concat([w]));
      if (!best[j] || k < best[j].k) best[j] = { k, cuts: cuts.slice(0, 2) };
      else if (k === best[j].k) { const seen = new Set(best[j].cuts.map(c => c.join('|'))); cuts.forEach(c => { if (!seen.has(c.join('|')) && best[j].cuts.length < 2) best[j].cuts.push(c); }); } } }
  if (!best[n]) { let i = n; while (i > 0 && !best[i]) i--; err('not in the word list: «' + chunk.slice(i, i + 6) + '» in «' + chunk + '»'); }
  if (best[n].cuts.length > 1) err('two possible word breaks in «' + chunk + '»: ' + best[n].cuts[0].join(' / ') + '  or  ' + best[n].cuts[1].join(' / ') + ' (add the phrase to the word list, or put a space)');
  return best[n].cuts[0];
}
function respell(text) {
  let t = String(text).normalize('NFC').replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/ฯ/g, '');
  if (/\d[.:]\d/.test(t)) err('decimal point or clock time in «' + text + '»: write the number in Thai words');
  t = t.replace(/(\d),(?=\d{3}(?!\d))/g, '$1'); /* thousands commas first, before punctuation becomes a space */
  t = t.replace(/[?!.,;:"“”'‘’()«»…]/g, ' ').replace(/\d+/g, m => ' ' + numWords(m) + ' ');
  if (/[A-Za-z]/.test(t)) err('Latin letters in «' + text + '»: write Thai');
  const words = []; /* [rom, isNumber, token index] */
  t.split(/\s+/).filter(Boolean).forEach((tok, ti) => {
    if (/^[ก-ฮ]$/.test(tok) && CONS[tok]) { const c = CONS[tok]; words.push([c[0] + (c[2] === 'H' ? 'ǎaw' : 'aaw'), false, ti]); return; } /* a letter name: ก = gaaw, ข = khǎaw */
    tok.split(/(ๆ)/).filter(Boolean).forEach(part => {
      if (part === 'ๆ') { if (!words.length) err('ๆ with nothing before it in «' + text + '»'); const last = words[words.length - 1]; const lastWord = last[0].split('-').slice(-(last[3] || 1)).join('-'); last[0] = last[0] + '-' + lastWord; return; }
      if (!/^[\u0E01-\u0E4E]+$/.test(part)) err('cannot read «' + part + '» in «' + text + '»');
      segment(part).forEach(w => { const r = WORDS.get(w); words.push([r, NUM.has(w), ti, r.split('-').length]); }); }); });
  /* number words join into one word, but never across a space in the input */
  const out = []; words.forEach(([r, n, ti], i) => { if (n && i > 0 && words[i - 1][1] && words[i - 1][2] === ti) out[out.length - 1] += '-' + r; else out.push(r); });
  return out.join(' ');
}
/* pronPattern, built from the same tables */
function pattern() {
  const ON = ['kh', 'ch', 'th', 'ph', 'ng', 'bp', 'dt', 'g', 'j', 's', 'y', 'd', 'n', 'b', 'f', 'm', 'r', 'l', 'w', 'h'];
  const CL = []; for (const c2 in CLUSTER) for (const c1 of CLUSTER[c2]) CL.push(CONS[c1][0] + CONS[c2][0]);
  const onsets = [...new Set(CL.concat(ON))].sort((a, b) => b.length - a.length);
  const T = { a: '[aàâáǎ]', e: '[eèêéě]', i: '[iìîíǐ]', o: '[oòôóǒ]', u: '[uùûúǔ]' };
  const vv = Object.values(V); const tv = r => T[r[0]] + r.slice(1);
  const plain = vv.filter(v => !v[2]).map(v => v[0]).sort((a, b) => b.length - a.length).map(tv);
  const glide = vv.filter(v => v[2]).map(v => v[0]).sort((a, b) => b.length - a.length).map(tv);
  const SYL = '(?:' + onsets.join('|') + ')?(?:(?:' + plain.join('|') + ')(?:ng|m|n|k|t|p)?|(?:' + glide.join('|') + '))';
  const WORD = SYL + '(?:-' + SYL + ')*';
  return '^' + WORD + '(?: ' + WORD + ')*$';
}
function entries() { return [...WORDS.entries()]; }
module.exports = { respell, pattern, syllable, numWords, entries };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  if (args[0] === '--check') { const re = new RegExp(pattern()), reu = new RegExp(pattern(), 'u'); let bad = 0; entries().forEach(([w, r]) => { if (!re.test(r) || !reu.test(r)) { bad++; console.log('pattern fails: ' + w + ' -> ' + r); } }); console.log(WORDS.size + ' entries, ' + bad + ' pattern failures'); process.exit(bad ? 1 : 0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } }); process.exit(bad ? 1 : 0);
}

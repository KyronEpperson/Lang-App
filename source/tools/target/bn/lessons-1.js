/* en-bn lessons 1-9 (vowels … questions). Written by EN-BN-1; every pron and every romanisation in the text is output of tools/target/bn/respell.js. */
module.exports = [
  {
    id: "vowels",
    title: "Vowels and the inherent vowel",
    blurb: "Read the Bengali vowel letters, know the vowel hidden in every consonant, and read the course's pronunciation line.",
    deck: "Vowels",
    sections: [null, {"deck": "Vowels", "n": [0, 11]}, null, null, {"deck": "Vowels", "n": [11, 17]}, null],
    body: `
<p>Bengali has its own script, read left to right, with no capital letters. Under every Bengali phrase in this course there is a pronunciation line in English letters. Learn to read that line first; the script will follow.</p>
<h3>How Bengali is written</h3>
<p>Bengali letters come in a few kinds. <b>Vowel letters</b> (this lesson) write a vowel at the start of a word or right after another vowel. <b>Consonant letters</b> (lesson 2) each carry a built-in vowel. <b>Vowel signs</b> (lesson 3) are small marks on a consonant that change that vowel. Two or more consonants with no vowel between them usually join into one shape, a <b>conjunct</b> (lesson 4). Most letters hang from a line along the top, and the letters of a word share one line.</p>
<h3>The vowel letters</h3>
<p>Each vowel has a full letter, used at the start of a word. Learn the sound of each one.</p>
<div class="tbl"><table><tr><th>Letter</th><th>Line</th><th>Sounds like</th></tr><tr><td class="k">অ</td><td>ô</td><td>the aw in <i>call</i>, lips rounded</td></tr><tr><td class="k">আ</td><td>a</td><td>the a in <i>father</i></td></tr><tr><td class="k">ই, ঈ</td><td>i</td><td>the i in <i>machine</i>, short; the two letters sound the same</td></tr><tr><td class="k">উ, ঊ</td><td>u</td><td>the u in <i>rule</i>, short; again two letters, one sound</td></tr><tr><td class="k">এ</td><td>e or æ</td><td>the e in <i>they</i> with no glide, or the a in <i>cat</i></td></tr><tr><td class="k">ঐ</td><td>oi</td><td>the oy in <i>boy</i></td></tr><tr><td class="k">ও</td><td>o</td><td>the o in <i>go</i>, with no w at the end</td></tr><tr><td class="k">ঔ</td><td>ou</td><td>o sliding into u</td></tr></table></div>
<p>There is one more vowel letter, ঋ, said ri. It appears in a few words, and you only need to recognise it.</p>
<p>Tap a letter to hear it and see how it reads.</p>
{{tiles:অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ}}
{{ex:আমি|ami|I}}
<h3>The vowel hidden in every consonant</h3>
<p>Here is the big difference from English. A consonant letter on its own already carries the vowel অ. Nothing extra is written: the letter ক is not just k, it is kô. This built-in vowel is the <b>inherent vowel</b>. When a word needs another vowel, a vowel sign replaces it (lesson 3).</p>
{{ex:কত|kôto|how much; how many}}
<p>The spelling does not show what happens to the inherent vowel. It can be ô, it can sound like o, or it can be dropped. The pronunciation line writes what is said, so the same letter can look different in two words. That is the point of the line, not a mistake.</p>
{{ex:করা|kôra|to do}}
{{ex:আমি করি।|ami kori.|I do.}}
{{ex:নাম|nam|name}}
<h3>এ has two sounds</h3>
<p>এ is sometimes e and sometimes æ, the vowel of <i>cat</i>. The line tells you which.</p>
{{ex:এক|æk|one}}
{{ex:দেখি|dekhi|I see; let me see}}
{{ex:দেখা|dækha|to see}}
<h3>A vowel letter starts a word</h3>
<p>A full vowel letter is written where a word starts with a vowel. Each card below starts with one. Read the first letter yourself; the line gives you the rest until you know the consonants.</p>
<h3>How to read the line</h3>
<ul><li><b>ô</b> is not a and not o: it is the vowel of <i>call</i>. <b>a</b> is always আ.</li><li><b>o</b> is ও, or a hidden vowel said like ও. If a hidden vowel is dropped, nothing is written.</li><li><b>æ</b> is the a of <i>cat</i>. There are no long marks: i is i, u is u.</li><li>A doubled letter is held longer. An h after a letter, and a dot under one, are explained in lesson 2.</li></ul>
<div class="tip"><b>Most common mistake:</b> reading অ, and the vowel hidden in every consonant, as the a of <i>father</i>. Wrong: অ like the a in <i>father</i> → right: অ like the aw in <i>call</i>, ô. The a of <i>father</i> belongs to আ.</div>
`,
    check: [
      ["Which English word has the vowel of অ?", ["father", "call", "go", "see"], 1, "অ is ô, the rounded vowel of call. The a of father is আ."],
      ["What does a consonant letter like ক sound like on its own?", ["Just k, with no vowel", "k plus the vowel of father", "k plus the inherent vowel: kô", "k plus i"], 2, "Every consonant letter carries the inherent vowel অ until a vowel sign replaces it."],
      ["ই and ঈ are both said i. What does that mean for you?", ["Learn them as one sound, two spellings", "ঈ is twice as long as ই", "ঈ is always silent", "ই is used only in names"], 0, "Length is not a contrast in Bengali: both letters give the same i."]
    ],
    practice: [
      ["mc", "Which letter is the inherent vowel ô?", "অ", "আ", "ও", "এ", "অ is ô. আ is a, and ও is o."],
      ["mc", "Which letter is said a, as in father?", "আ", "অ", "ও", "ঔ", "আ is a. অ is the rounder ô of call."],
      ["mc", "Which letter is said exactly like ই?", "ঈ", "উ", "এ", "ঐ", "ই and ঈ are both i: two spellings, one sound."],
      ["mc", "In the pronunciation line, what is æ?", "the a of cat", "the a of father", "the e of me", "the i of ice", "æ is the vowel of cat, one of the two sounds of এ, as in এক (æk)."],
      ["mc", "The line writes নাম (nam), 'name'. What happened to the inherent vowel after ম?", "It is dropped", "It is said ô", "It is said a", "It is said o", "The line writes only what is said: no vowel after m means the inherent vowel is dropped."],
      ["or", "Put the letters in the order of these sounds: a, i, u", "আ ই উ", "অ", "আ is a, a full vowel letter, not the inherent vowel অ."],
      ["or", "Put the letters in the order of these sounds: ô, o, ou", "অ ও ঔ", "আ", "অ is the inherent vowel ô; ও is o, a different letter and a different sound."],
      ["or", "Put the letters in the order of these sounds: oi, e, a", "ঐ এ আ", "অ", "ঐ is oi, এ is e (or æ), and আ is a. অ, the inherent vowel, is ô."],
      ["fi", "__মি", "ami: I", "আ", "অ|ও|এ", "আমি starts with a, so the letter is আ, not the inherent vowel অ."],
      ["fi", "__নেক", "ônek: many; a lot", "অ", "আ|ও|এ", "The word starts with ô, the inherent vowel, so the letter is অ."],
      ["fi", "__ক", "æk: one", "এ", "অ|আ|ই", "এ can be æ: এক is said æk."],
      ["ty", "Type the letter for the inherent vowel, ô.", "অ", "the vowel of call · not the a of father", "ও", "অ is the inherent vowel, ô. ও is o, a different letter.", "!strict"],
      ["ty", "Type the letter for a, as in father.", "আ", "the vowel of father", "অ", "আ is a. The inherent vowel অ is ô."],
      ["ty", "Type the letter for o, as in go.", "ও", "the vowel of go · not the vowel of call", "অ", "ও is o. Do not confuse it with the inherent vowel অ, which is ô.", "!strict"]
    ]
  },
  {
    id: "consonants",
    title: "Aspiration and dental versus retroflex",
    blurb: "Hear and read the puff of air, the two kinds of t and d, and the letters for sh and s.",
    deck: "Consonants",
    sections: [null, [{"deck": "Consonants", "n": [0, 6]}, {"name": "More consonants", "cards": [["জ", "jô", "the letter j", "Plain j, as in \"jam\"."], ["ঝ", "jhô", "the letter jh", "Aspirated j. Not common: ঝাল (jhal), \"spicy\"."], ["প", "pô", "the letter p", "Plain p, with less puff than an English p."], ["ফ", "fô", "the letter f", "The aspirated p, but most speakers say it close to an English f, so the aid writes f."], ["ব", "bô", "the letter b", "Plain b. Bengali has no v sound: ব is b."], ["ভ", "bhô", "the letter bh", "Aspirated b, as in ভাত (bhat), \"rice\"."]]}], {"deck": "Consonants", "n": [6, 13]}, null, [{"deck": "Consonants", "n": [13, 15]}, {"name": "The last consonants", "cards": [["ষ", "shô", "another letter for sh", "Same sound as শ. You see it in মানুষ (manush), \"person\"."], ["ঙ", "ngô", "the letter ng", "The nasal of the k row: the ng of \"sing\". It never starts a word."], ["ঞ", "nô", "the nasal of the ch row", "Rare on its own. It sits in conjuncts such as ঞ্চ and ঞ্জ, said n."], ["ণ", "nô", "the retroflex n", "Said just like ন today. Only the spelling differs."], ["ন", "nô", "the letter n", "Dental n, the n of most words."], ["ম", "mô", "the letter m", "Plain m."], ["য", "jô", "the letter j (য)", "Said j, the same as জ."], ["র", "rô", "the letter r", "A light tap of the tongue, as in Spanish \"pero\"."], ["ল", "lô", "the letter l", "A clear l, as in \"leaf\"."], ["হ", "hô", "the letter h", "Plain h."], ["ঢ", "ḍhô", "the letter ḍh", "Retroflex and aspirated: ড with a puff."], ["ড়", "ṛô", "the letter ṛ", "ড with a dot: a flap, close to র. It never starts a word."], ["ঢ়", "ṛhô", "the letter ṛh", "ঢ with a dot: ড় with a puff. Rare."], ["য়", "yô", "the letter y", "য with a dot: a y, or a glide between vowels, as in মেয়ে (meye)."]]}, {"deck": "Consonants", "n": [15, 18]}]],
    body: `
<p>English has one t, one d, one k. Bengali splits them. Two contrasts matter from day one: a puff of air or not, and where the tongue touches.</p>
<h3>The consonant chart</h3>
<p>Bengali lists most of its consonants in a grid of five rows. Each row is one place in the mouth, from the back of the mouth to the lips. Each row has five letters: plain, with a puff of air, voiced (with a buzz in the throat, like g against k), voiced with a puff, and a nasal. Learn the grid and you know 25 letters and how they relate. The sections below go through the two contrasts that matter most, then the nasals and the letters outside the grid.</p>
<div class="tbl"><table><tr><th>Where</th><th>Plain</th><th>Puff</th><th>Voiced</th><th>Voiced, puff</th><th>Nasal</th></tr><tr><td>Back of the mouth</td><td class="k">ক kô</td><td class="k">খ khô</td><td class="k">গ gô</td><td class="k">ঘ ghô</td><td class="k">ঙ ngô</td></tr><tr><td>Roof of the mouth</td><td class="k">চ chô</td><td class="k">ছ chhô</td><td class="k">জ jô</td><td class="k">ঝ jhô</td><td class="k">ঞ nô</td></tr><tr><td>Tongue curled back</td><td class="k">ট ṭô</td><td class="k">ঠ ṭhô</td><td class="k">ড ḍô</td><td class="k">ঢ ḍhô</td><td class="k">ণ nô</td></tr><tr><td>Tongue on the teeth</td><td class="k">ত tô</td><td class="k">থ thô</td><td class="k">দ dô</td><td class="k">ধ dhô</td><td class="k">ন nô</td></tr><tr><td>Lips</td><td class="k">প pô</td><td class="k">ফ fô</td><td class="k">ব bô</td><td class="k">ভ bhô</td><td class="k">ম mô</td></tr></table></div>
<p>The same grid as tiles. Tap a letter to hear it and see how it reads.</p>
{{tiles:ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম}}
<h3>Aspirated or not</h3>
<p>Hold your hand in front of your mouth and say <i>pin</i>, then <i>spin</i>. You feel a puff of air on <i>pin</i> only. English never uses that difference to tell words apart; Bengali does, with different letters. A letter with the puff is <b>aspirated</b>, and the line writes an h after it. That h is a puff, never the th of <i>think</i>.</p>
<div class="tbl"><table><tr><th>Plain</th><th>Aspirated</th></tr><tr><td class="k">ক kô</td><td class="k">খ khô</td></tr><tr><td class="k">গ gô</td><td class="k">ঘ ghô</td></tr><tr><td class="k">চ chô</td><td class="k">ছ chhô</td></tr><tr><td class="k">জ jô</td><td class="k">ঝ jhô</td></tr><tr><td class="k">প pô</td><td class="k">ফ fô</td></tr><tr><td class="k">ব bô</td><td class="k">ভ bhô</td></tr></table></div>
{{ex:খুব|khub|very}}
{{ex:ভাত|bhat|rice}}
{{ex:মাছ|machh|fish}}
<p>ফ is the one exception in the line: it is written f, because most speakers say it close to an English f.</p>
<h3>Dental or retroflex</h3>
<p>English t and d sit between two Bengali sets. For the <b>dental</b> letters ত থ দ ধ, touch the back of your top teeth with the tip of your tongue. For the <b>retroflex</b> letters ট ঠ ড ঢ, curl the tip back and touch the roof of your mouth. The line marks retroflex with a dot underneath. A missing dot is a different sound, not a typo.</p>
<div class="tbl"><table><tr><th>Dental</th><th>Retroflex</th></tr><tr><td class="k">ত tô</td><td class="k">ট ṭô</td></tr><tr><td class="k">থ thô</td><td class="k">ঠ ṭhô</td></tr><tr><td class="k">দ dô</td><td class="k">ড ḍô</td></tr><tr><td class="k">ধ dhô</td><td class="k">ঢ ḍhô</td></tr></table></div>
{{ex:তিন|tin|three}}
{{ex:টাকা|ṭaka|taka (money)}}
{{ex:দশ|dôsh|ten}}
{{ex:ডান|ḍan|right (side)}}
<p>ড় has a dot in the letter itself. In Dhaka it sounds much like র, but the line keeps ṛ so you can see which letter is written.</p>
<h3>Three letters for sh</h3>
<p>শ and ষ are both sh. স is usually sh too, but in some conjuncts (lesson 4) and some borrowed words it is s. English uses s and sh to tell words apart, and so does Bengali: this one difference separates two words.</p>
{{tiles:শ ষ স}}
{{ex:আস্তে|aste|slowly; softly}}
{{ex:আসতে|ashte|to come}}
<p>In some eastern dialects, especially Sylheti, খ ফ ভ lose their puff and become hissing sounds. That is not the Dhaka standard taught here.</p>
<h3>The nasals and the letters outside the grid</h3>
<p>The last column of the chart holds the nasals. ম is m and ন is n. ণ is said exactly like ন today; only the spelling keeps it apart. ঙ is the ng of <i>sing</i> and never starts a word. ঞ is rare on its own: you meet it inside conjuncts, said n.</p>
<p>Outside the grid: র is r, a light tap of the tongue, and ল is l. হ is h. য is said j, just like জ. Three letters carry a dot: ড় (ṛ) you met above, ঢ় is ড় with a puff, made from ঢ (ḍhô), and য় is a y, often just a glide between two vowels.</p>
{{tiles:য র ল হ _ ড় ঢ় য়}}
{{ex:লাল|lal|red}}
{{ex:হাত|hat|hand}}
<p>The cards below finish the alphabet. The last three are words: খাতা and ঠান্ডা use the vowel sign া (a, lesson 3), and ঠান্ডা has a conjunct (lesson 4).</p>
<div class="tip"><b>Most common mistake:</b> one English t for both ত and ট, and an English th for থ. Wrong: থ like the th in <i>think</i> → right: থ is a dental t with a puff of air, thô.</div>
`,
    check: [
      ["What does the h in khô mean in the pronunciation line?", ["A separate h sound after a pause", "A puff of air: the letter is aspirated", "The letter is silent", "The th of think"], 1, "An h after a letter is a puff of air, the mark of an aspirated letter."],
      ["How do you say the retroflex ট?", ["Tongue on the back of the top teeth", "Like the th of think", "Tongue tip curled back to the roof of the mouth", "With a puff of air"], 2, "ট is retroflex: curl the tip back. ত is the dental one, on the teeth."],
      ["Which letter can be said s instead of sh?", ["স", "শ", "ষ", "হ"], 0, "শ and ষ are always sh. স is usually sh, but it is s in some words, as in আস্তে (aste)."]
    ],
    practice: [
      ["mc", "Which letter is aspirated?", "খ", "ক", "গ", "ট", "খ has the puff of air: khô. ক, গ and ট have none."],
      ["mc", "Which letter is retroflex?", "ট", "ত", "থ", "দ", "ট is retroflex (ṭ, with the dot). ত, থ and দ are dental."],
      ["mc", "In থ (thô), what is the th?", "a dental t with a puff of air", "the th of think", "the th of this", "a t followed by a separate h", "th in the line is an aspirated dental t, never the English th."],
      ["mc", "Which word starts with a dental t?", "তিন", "টাকা", "ডান", "দশ", "তিন (tin) starts with ত, dental. টাকা and ডান are retroflex, and দশ starts with d."],
      ["mc", "Which word has an s sound, not sh?", "আস্তে", "আসতে", "সে", "শহর", "আস্তে (slowly) is aste. In আসতে and সে the স is sh, and শ is always sh."],
      ["or", "Put the letters in the order of these sounds: ṭô, tô, thô", "ট ত থ", "ঠ", "ট is retroflex, ত is dental, and থ is the aspirated dental."],
      ["or", "Put the letters in the order of these sounds: kô, khô, gô, ghô", "ক খ গ ঘ", "হ", "খ and ঘ are aspirated: the h is a puff, not a separate letter."],
      ["or", "Put the letters in the order of these sounds: dô, ḍô, dhô", "দ ড ধ", "ঢ", "দ is dental, ড is retroflex, and ধ is the aspirated dental. ঢ would be ḍhô."],
      ["fi", "ভা__", "bhat: rice", "ত", "ট|থ|দ", "The word ends in t with no dot, so it is the dental ত."],
      ["fi", "মা__", "machh: fish", "ছ", "চ|জ|ঝ", "chh is the aspirated ছ, not the plain চ."],
      ["fi", "দু__", "dudh: milk", "ধ", "দ|ড|ঢ", "dh with no dot is the aspirated dental ধ."],
      ["ty", "Type the retroflex letter said ṭô.", "ট", "the dot means retroflex", "ত", "ট is retroflex. ত, with no dot in the line, is dental.", "!strict"],
      ["ty", "Type the aspirated letter said khô.", "খ", "the h is a puff of air", "ক", "খ is aspirated. ক is the plain k with no puff."],
      ["ty", "Type the dental letter said tô.", "ত", "tongue on the teeth · no dot", "ট", "ত is dental. ট, written ṭ in the line, is retroflex.", "!strict"]
    ]
  },
  {
    id: "vowel-signs",
    title: "Vowel signs and the four marks",
    blurb: "Read a consonant with any vowel sign, and the marks ং ঃ ঁ ৎ.",
    deck: "Vowel signs",
    sections: [{"deck": "Vowel signs", "n": [0, 10]}, null, null, [{"deck": "Vowel signs", "n": [10, 13]}, {"name": "The four marks", "cards": [["ং", "ng", "the ng mark", "Said ng: বাংলা is bangla."], ["ঃ", "h", "the doubling mark", "Inside a word it doubles the next consonant: দুঃখিত is dukkhito. At the end of a word it is a short h."], ["ঁ", "ã", "the nasal mark", "No sound of its own: it sends the vowel through the nose, a tilde in the aid. Shown here on a, as in চাঁদ (chãd)."], ["ৎ", "t", "a t with no vowel", "A t that never carries a vowel, as in চমৎকার."], ["চমৎকার", "chômôtkar", "wonderful", "চ + ম + ৎ + কা + র. ৎ is t with no vowel after it."]]}], [{"deck": "Vowel signs", "n": [13, 16]}, {"name": "First words", "cards": [["বাবা", "baba", "father", "বা + বা: ব with া, twice."], ["নাম", "nam", "name", "না + ম. The ম keeps no vowel: the inherent vowel is dropped."], ["ভাত", "bhat", "rice (cooked)", "ভা + ত. ভ is aspirated, ত is dental."], ["মাছ", "machh", "fish", "মা + ছ. ছ is the aspirated ch."], ["পানি", "pani", "water", "পা + নি. ি is written left of ন, said after it."], ["দুধ", "dudh", "milk", "দু + ধ. ু hangs under দ."], ["বাড়ি", "baṛi", "home; house", "বা + ড়ি. ড় is the dotted ড."], ["ছেলে", "chhele", "boy; son", "ছে + লে. ে is written left of each letter."], ["মেয়ে", "meye", "girl; daughter", "মে + য়ে. য় is the dotted য."], ["ভালো", "bhalo", "good; well", "ভা + লো. ো wraps around ল."], ["দিন", "din", "day", "দি + ন"], ["বাজার", "bajar", "market", "বা + জা + র"], ["ঢাকা", "ḍhaka", "Dhaka", "ঢা + কা. ঢ is retroflex and aspirated."], ["কলম", "kôlom", "pen", "ক + ল + ম: no signs at all, only inherent vowels."], ["পাঁচ", "pãch", "five", "পাঁ + চ. ঁ makes the a nasal."], ["তৈরি", "toiri", "ready; made", "তৈ + রি. ৈ is written left of ত."], ["মানুষ", "manush", "person", "মা + নু + ষ"], ["শহর", "shôhor", "city", "শ + হ + র: inherent vowels only."]]}]],
    body: `
<p>In lesson 1 every vowel had a full letter. Those letters are used at the start of a word. After a consonant, the vowel is a small sign attached to the consonant, and it replaces the inherent vowel.</p>
<h3>The signs on ক</h3>
<div class="tbl"><table><tr><th>Sign</th><th>On ক</th><th>Line</th></tr><tr><td class="k">া</td><td class="k">কা</td><td>ka</td></tr><tr><td class="k">ি</td><td class="k">কি</td><td>ki</td></tr><tr><td class="k">ী</td><td class="k">কী</td><td>ki</td></tr><tr><td class="k">ু</td><td class="k">কু</td><td>ku</td></tr><tr><td class="k">ূ</td><td class="k">কূ</td><td>ku</td></tr><tr><td class="k">ে</td><td class="k">কে</td><td>ke</td></tr><tr><td class="k">ৈ</td><td class="k">কৈ</td><td>koi</td></tr><tr><td class="k">ো</td><td class="k">কো</td><td>ko</td></tr><tr><td class="k">ৌ</td><td class="k">কৌ</td><td>kou</td></tr><tr><td class="k">ৃ</td><td class="k">কৃ</td><td>kri</td></tr></table></div>
<p>With no sign, ক keeps its inherent vowel: kô. The same signs go on every consonant, so once you know them on ক you can read them anywhere. The last one, ৃ, is the sign of ঋ; it is rare, so just recognise it.</p>
{{tiles:কা কি কী কু কূ কৃ কে কৈ কো কৌ}}
{{ex:কাজ|kaj|work}}
{{ex:কে?|ke?|Who?}}
<h3>Written first, said second</h3>
<p>English writes letters in the order you say them. Three signs break that rule: ি, ে and ৈ are written to the left of the consonant, but they are said after it. কি is k first, then i. ো and ৌ wrap around the consonant, with one part on each side.</p>
{{ex:কিছু|kichhu|something}}
{{ex:কোথায়?|kothay?|Where?}}
<h3>Same sound, two signs</h3>
<p>ি and ী sound the same, and so do ু and ূ. So কী, "what", and কি, the little word that makes a yes-or-no question (lesson 9), are said the same.</p>
{{ex:কী?|ki?|What?}}
<h3>Four marks</h3>
<div class="tbl"><table><tr><th>Mark</th><th>What it does</th><th>Example</th></tr><tr><td class="k">ং</td><td>ng</td><td class="k">বাংলা</td></tr><tr><td class="k">ঃ</td><td>inside a word, doubles the next consonant</td><td class="k">দুঃখিত</td></tr><tr><td class="k">ঁ</td><td>makes the vowel nasal; the line puts a tilde on the vowel</td><td class="k">চাঁদ</td></tr><tr><td class="k">ৎ</td><td>a t with no vowel after it</td><td class="k">চমৎকার</td></tr></table></div>
{{tiles:ং ঃ ঁ ৎ}}
{{ex:বাংলা|bangla|Bengali}}
{{ex:দুঃখিত|dukkhito|sorry}}
{{ex:চাঁদ|chãd|moon}}
{{ex:চমৎকার|chômôtkar|wonderful}}
<p>A nasal vowel is said with air through the nose, like the vowel in French <i>bon</i>. In the line, ã is a nasal a.</p>
<h3>Read your first words</h3>
<p>To read a new word, go syllable by syllable: find each consonant, then look left, right, above and below it for its sign. No sign means the inherent vowel.</p>
<p>The cards below are real words built only from letters, signs and marks you know: no conjuncts yet. Split each one into its syllables and read it aloud before you flip it.</p>
<div class="tip"><b>Most common mistake:</b> saying ি before the consonant because it is written first. Wrong: the i sound before the k in কি → right: consonant first, then the vowel, ki.</div>
`,
    check: [
      ["কি is written with the sign on the left. In what order is it said?", ["i, then k", "k, then i", "k only", "It depends on the word"], 1, "ি is written to the left of the consonant but said after it."],
      ["What does ঁ do in চাঁদ (chãd)?", ["It doubles the d", "It adds ng", "It makes the vowel nasal", "It removes the vowel"], 2, "ঁ makes the vowel nasal; the line shows it with a tilde."],
      ["Which pair is said exactly the same?", ["কি and কী", "কা and কো", "কে and কৈ", "কু and কো"], 0, "ি and ী give the same i, so কি and কী sound the same."]
    ],
    practice: [
      ["mc", "Which syllable is said ki?", "কি", "কা", "কে", "কু", "ি is the sign for i. It is written on the left but said after k."],
      ["mc", "Which syllable is said ko?", "কো", "কু", "ক", "কৌ", "ো is o. ক alone keeps the inherent vowel kô, and কৌ is kou."],
      ["mc", "What does ং add in বাংলা (bangla)?", "ng", "a puff of air", "a nasal vowel", "a doubled l", "ং is ng: bangla."],
      ["mc", "What does ঃ do inside দুঃখিত (dukkhito)?", "It doubles the next consonant", "It makes the vowel nasal", "It adds ng", "Nothing: it is silent decoration", "Inside a word ঃ doubles the next consonant, so the line writes kkh."],
      ["mc", "In which syllable is the vowel sign written to the left of ক?", "কে", "কা", "কু", "কূ", "ে is written to the left of the consonant, but said after it: ke."],
      ["or", "Put the syllables in the order of these sounds: ka, ki, ku", "কা কি কু", "কো", "Each vowel sign replaces the inherent vowel: া is a, ি is i, ু is u."],
      ["or", "Put the syllables in the order of these sounds: ke, kô, ko", "কে ক কো", "কা", "ক with no vowel sign keeps the inherent vowel ô; ো changes it to o."],
      ["or", "Put the syllables in the order of these sounds: ku, ki, koi", "কু কি কৈ", "কা", "ু is u, ি is i, ৈ is oi."],
      ["fi", "__ত", "kôto: how much", "ক", "কা|কি|কো", "The first vowel is ô, so ক takes no sign: the inherent vowel does the work."],
      ["fi", "__ছু", "kichhu: something", "কি", "কে|কা|কু", "The first syllable is ki: ক with the sign ি."],
      ["fi", "__থায়", "kothay: where", "কো", "কা|কে|কু", "The first syllable is ko: ক with the sign ো, which wraps around the letter."],
      ["ty", "Type the syllable ki.", "কি|কী", "ক plus the sign for i", "কে", "ি and ী are both vowel signs for i, so either spelling is right here."],
      ["ty", "Type the syllable ka.", "কা", "ক plus the sign for a", "ক", "The vowel sign া replaces the inherent vowel: ক alone is kô."],
      ["ty", "Type the word for Bengali, bangla.", "বাংলা", "বা · ং · লা", "বাংলাদেশ", "ং is ng, and each া is a vowel sign for a."]
    ]
  },
  {
    id: "conjuncts",
    title: "Conjuncts and the pholas",
    blurb: "Read consonant clusters, ক্ষ, and the pholas, and know when a written letter is not said.",
    deck: "Conjuncts",
    sections: [null, null, null, "Conjuncts"],
    body: `
<p>English writes a cluster like <i>str</i> as three separate letters. Bengali joins the consonants into one shape, a <b>conjunct</b>. Some conjuncts show their parts clearly; a few look like nothing you have seen. As in English <i>str</i>, most conjuncts are said the way they are written, every letter in turn. The surprises are ক্ষ and the pholas.</p>
<h3>The hasant</h3>
<p>The hasant ্ removes the inherent vowel. Two consonants with no vowel between them are usually joined into one shape: স with a hasant, then ত, gives স্ত. You will see the hasant itself only now and then, when the letters are not joined.</p>
{{ex:স্থান|sthan|place}}
{{ex:স্কুল|skul|school}}
<h3>ক্ষ</h3>
<p>ক joined to ষ makes ক্ষ, which looks nothing like its parts. At the start of a word it is said kh. Inside a word it is a doubled kkh.</p>
{{ex:ক্ষমা|khôma|forgiveness}}
{{ex:শিক্ষা|shikkha|education}}
<h3>The pholas</h3>
<p>Some consonants take a short form when they come second in a conjunct. The short form is called a phola, after the letter: ra-phola for র, ya-phola for য, ba-phola for ব.</p>
<ul><li><b>ra-phola</b>, a stroke under the letter, is a real r.</li><li><b>ya-phola</b> (্য) inside a word usually doubles the consonant before it. At the start of a word it usually turns the vowel into æ.</li><li><b>ba-phola</b> at the start of a word is usually silent.</li></ul>
{{ex:প্রথম|prothom|first}}
{{ex:গ্রাম|gram|village}}
{{ex:ধন্যবাদ|dhonnobad|thank you}}
{{ex:জন্য|jonno|for}}
{{ex:ব্যথা|bætha|pain}}
{{ex:স্বামী|shami|husband}}
<p>The spelling does not always tell you which of these happens, which is why every word in this course comes with its line. Read the line, listen, and let the shape stick to the sound.</p>
<div class="tbl"><table><tr><th>Written</th><th>What happens</th><th>Word</th><th>Line</th></tr><tr><td class="k">ন্য</td><td>the n is doubled, no y</td><td class="k">ধন্যবাদ</td><td>dhonnobad</td></tr><tr><td class="k">ব্য</td><td>the vowel becomes æ</td><td class="k">ব্যথা</td><td>bætha</td></tr><tr><td class="k">স্ব</td><td>the ব is silent</td><td class="k">স্বামী</td><td>shami</td></tr><tr><td class="k">প্র</td><td>a real r</td><td class="k">প্রথম</td><td>prothom</td></tr></table></div>
<h3>Read conjuncts in words</h3>
<p>Every card below is a common word with at least one conjunct. Before you flip it, find the conjunct and split it into its letters. Then decide: is it said as written, is a letter doubled, is a phola silent, does the vowel turn into æ, or is it ক্ষ, said kh? Check yourself against the line.</p>
<div class="tip"><b>Most common mistake:</b> pronouncing every letter of a phola. Wrong: a y sound in ধন্যবাদ → right: no y, a doubled n, dhonnobad.</div>
`,
    check: [
      ["What does the hasant ্ do?", ["It makes the vowel nasal", "It removes the inherent vowel", "It doubles the word", "It adds ng"], 1, "The hasant kills the inherent vowel, so two consonants can join into a conjunct."],
      ["How is ক্ষ said inside শিক্ষা (shikkha)?", ["A doubled kkh", "ksh, as in English", "Just sh", "It is silent"], 0, "Inside a word ক্ষ is a doubled kkh: shikkha."],
      ["In ধন্যবাদ (dhonnobad), what does the ya-phola do?", ["It adds a y sound", "It turns the vowel into æ", "It doubles the n before it", "It makes the n silent"], 2, "Inside a word a ya-phola usually doubles the consonant before it: nn, no y."]
    ],
    practice: [
      ["mc", "Which word has a ra-phola?", "প্রথম", "শিক্ষা", "ব্যথা", "স্থান", "প্রথম has র as a stroke under প: a real r."],
      ["mc", "In স্বামী (shami), 'husband', what is the ba-phola?", "silent", "a v sound", "a b sound", "a doubled s", "At the start of a word a ba-phola is usually silent."],
      ["mc", "In ব্যথা (bætha), 'pain', what does the ya-phola do?", "It turns the vowel into æ", "It adds a y sound", "It doubles the b", "Nothing: it is silent decoration", "At the start of a word a ya-phola usually turns the vowel into æ."],
      ["mc", "Which word starts with the sound kh written as ক্ষ?", "ক্ষমা", "খুব", "শিক্ষা", "কত", "ক্ষমা (khôma) starts with ক্ষ. খুব starts with plain খ, and শিক্ষা has ক্ষ inside."],
      ["mc", "What is a conjunct?", "Two or more consonants written as one shape", "A vowel sign on the left", "A mark that makes a vowel nasal", "A doubled vowel", "A conjunct joins consonants with no vowel between them."],
      ["or", "Put the words in the order of these sounds: shikkha, prothom, aste", "শিক্ষা প্রথম আস্তে", "আসতে", "আস্তে has the conjunct স্ত and is said aste. আসতে has no conjunct and is said ashte."],
      ["or", "Put the words in the order of these sounds: skul, gram, sthan", "স্কুল গ্রাম স্থান", "গরম", "গ্রাম is a conjunct: the hasant drops the inherent vowel, so nothing comes between g and r. গরম is gôrom."],
      ["or", "Put the words in the order of these sounds: khôma, jonno, bætha", "ক্ষমা জন্য ব্যথা", "খুব", "ক্ষমা starts with ক্ষ, জন্য has a ya-phola that doubles the n, and ব্যথা has a ya-phola that gives æ."],
      ["fi", "__মা", "khôma: forgiveness", "ক্ষ", "ক|খ|ষ", "At the start of a word the conjunct ক্ষ is said kh."],
      ["fi", "ধন্__বাদ", "dhonnobad: thank you", "য", "ন|ব|দ", "The doubled n is written ন with a ya-phola: the conjunct ন্য, not two ন."],
      ["fi", "প্র__ম", "prothom: first", "থ", "ত|ট|ঠ", "After the conjunct প্র comes th: the aspirated dental থ."],
      ["ty", "Type the word for first, prothom.", "প্রথম", "প with ra-phola · থ · ম", "গরম", "প্র is a conjunct with ra-phola: a real r, with no vowel between p and r."],
      ["ty", "Type the word for education, shikkha.", "শিক্ষা", "শি · ক্ষা", "শিখি", "Inside a word the conjunct ক্ষ is a doubled kkh."],
      ["ty", "Type the word for thank you, dhonnobad.", "ধন্যবাদ", "ধ · ন with ya-phola · বা · দ", "নমস্কার", "The conjunct ন্য is n with ya-phola: a doubled n, no y."]
    ]
  },
  {
    id: "greetings",
    title: "Greetings and thank you",
    blurb: "Greet anyone with salam, ask how they are with the right verb, answer, and thank them.",
    deck: "Greetings and courtesy",
    body: `
<p>English speakers reach for a time of day: good morning, good evening. In Dhaka the everyday greeting works at any hour.</p>
<h3>Salam and the reply</h3>
<p><b>আসসালামু আলাইকুম</b> <i>assalamu alaikum</i>, "peace be upon you", is the usual greeting in Bangladesh, morning or night, to anyone. The answer is <b>ওয়ালাইকুম আসসালাম</b> <i>walaikum assalam</i>, "and upon you peace".</p>
{{ex:আসসালামু আলাইকুম।|assalamu alaikum.|Hello. (literally: Peace be upon you.)}}
{{ex:ওয়ালাইকুম আসসালাম।|walaikum assalam.|Hello. (the reply: And upon you peace.)}}
<p>Hindu speakers, and most people in West Bengal, greet with <b>নমস্কার</b> <i>nômoshkar</i>, and the reply is the same word.</p>
{{ex:নমস্কার।|nômoshkar.|Hello. (Hindu greeting)}}
<h3>How are you?</h3>
<p>English has one "How are you?". Bengali changes the verb for the person you are talking to. To a stranger, an older person or a shopkeeper, say <b>আপনি</b> <i>apni</i> with <b>আছেন</b> <i>achhen</i>. To a friend your own age, say <b>তুমি</b> <i>tumi</i> with <b>আছো</b> <i>achho</i>. You can drop আপনি or তুমি, because the verb ending already shows who you mean.</p>
<div class="tbl"><table><tr><th>To a stranger</th><th>To a friend</th></tr><tr><td class="k">আপনি কেমন আছেন?</td><td class="k">তুমি কেমন আছো?</td></tr><tr><td class="k">কেমন আছেন?</td><td class="k">কেমন আছো?</td></tr></table></div>
{{ex:আপনি কেমন আছেন?|apni kæmon achhen?|How are you? (polite)}}
{{ex:তুমি কেমন আছো?|tumi kæmon achho?|How are you? (to a friend)}}
<p>When in doubt, use আপনি. Nobody minds being treated politely. You will also see আছো written আছ, without the last sign; it is the same word.</p>
<h3>I'm fine</h3>
<p>English says "I am fine". Bengali says <b>ভালো আছি</b> <i>bhalo achhi</i>, literally "well am". The verb is now <b>আছি</b> <i>achhi</i>, because it matches the speaker, you, not the person who asked. <b>আমি</b> <i>ami</i>, "I", is optional.</p>
{{ex:ভালো আছি।|bhalo achhi.|I'm fine.}}
{{ex:আমি ভালো আছি।|ami bhalo achhi.|I'm fine.}}
<p>English likes a full sentence here; Bengali is happy with two words. To return the question, simply ask it back with the verb that fits the other person.</p>
<h3>Thank you</h3>
<p><b>ধন্যবাদ</b> <i>dhonnobad</i> means "thank you". Bengali speakers say it far less than Americans say "thanks". Keep it for a real favor or for good service, not for every small thing at the family table.</p>
{{ex:ধন্যবাদ।|dhonnobad.|Thank you.}}
<p>You will also see <b>শুভ সকাল</b> <i>shubho shôkal</i>, "good morning", and <b>শুভ সন্ধ্যা</b> <i>shubho shondha</i>, "good evening". They are formal, for cards, messages and announcements, not the everyday hello.</p>
<div class="tip"><b>Most common mistake:</b> greeting by the time of day. Wrong: শুভ সকাল to a neighbor in the morning → right: আসসালামু আলাইকুম, at any hour.</div>
`,
    check: [
      ["What is the everyday greeting in Dhaka in the evening?", ["শুভ সন্ধ্যা", "শুভ সকাল", "আসসালামু আলাইকুম", "ধন্যবাদ"], 2, "Salam works at any hour. শুভ সন্ধ্যা is formal."],
      ["You ask an older stranger how they are. Which verb?", ["আছেন", "আছো", "আছি", "আছে"], 0, "আছেন goes with আপনি, the polite you."],
      ["Someone asks আপনি কেমন আছেন? Why do you answer with আছি, not আছেন?", ["আছি is more polite", "The verb now matches the speaker, you", "আছেন is only for questions", "আছি is the plural"], 1, "The verb ending matches the subject. In your answer the subject is you, I: আছি."]
    ],
    practice: [
      ["mc", "What is the everyday hello in Dhaka, at any time of day?", "আসসালামু আলাইকুম", "শুভ সকাল", "শুভ সন্ধ্যা", "ওয়ালাইকুম আসসালাম", "Salam works at any hour. The two শুভ greetings are formal, and ওয়ালাইকুম আসসালাম is the reply."],
      ["mc", "Someone says আসসালামু আলাইকুম. You answer:", "ওয়ালাইকুম আসসালাম", "ধন্যবাদ", "শুভ সকাল", "আমি ভালো আছি", "The reply to salam is ওয়ালাইকুম আসসালাম."],
      ["mc", "How are you? to an older stranger:", "আপনি কেমন আছেন?", "তুমি কেমন আছেন?", "আপনি কেমন আছো?", "তুমি কেমন আছো?", "আপনি with আছেন. Mixing them, or using তুমি with a stranger, is wrong."],
      ["mc", "How do you say I'm fine?", "ভালো আছি", "ভালো আছেন", "ভালো আছো", "ভালো আছে", "আছি matches I. আছেন and আছো are for you."],
      ["mc", "A Hindu colleague greets you with নমস্কার. You answer:", "নমস্কার", "ওয়ালাইকুম আসসালাম", "ধন্যবাদ", "শুভ সন্ধ্যা", "The reply to নমস্কার is নমস্কার."],
      ["or", "How are you? (to a stranger, without আপনি)", "কেমন আছেন", "আছো", "আছেন is the polite form; আছো is for a friend."],
      ["or", "How are you? (to a friend, start with তুমি)", "তুমি কেমন আছো", "আছেন", "তুমি takes the familiar form আছো."],
      ["or", "Answer a salam.", "ওয়ালাইকুম আসসালাম", "আলাইকুম", "The reply turns the greeting around: ওয়ালাইকুম first, then আসসালাম."],
      ["fi", "কেমন __?", "How are you? (to a stranger)", "আছেন", "আছো|আছি|আছে", "A stranger gets the polite form আছেন."],
      ["fi", "তুমি কেমন __?", "How are you? (to a friend)", "আছো", "আছেন|আছি|আছে", "তুমি takes আছো."],
      ["fi", "আমি ভালো __।", "I'm fine.", "আছি", "আছেন|আছো|আছে", "আমি takes আছি."],
      ["ty", "How are you? (to a shopkeeper)", "কেমন আছেন?|আপনি কেমন আছেন?|কেমন আছেন আপনি?", "কেমন · আছেন", "আছো", "A shopkeeper gets the polite form: the verb ending is আছেন."],
      ["ty", "I'm fine. (answering How are you?)", "ভালো আছি|আমি ভালো আছি", "ভালো · আছি", "আছেন", "The verb ending now matches you, the speaker: আছি, the ami form."],
      ["ty", "Thank you.", "ধন্যবাদ", "one word", "নমস্কার", "ধন্যবাদ is thank you; নমস্কার is a greeting."]
    ]
  },
  {
    id: "pronouns",
    title: "Three words for you",
    blurb: "Say I, you, he, she, we and they, choose the right you, and match the verb to the person.",
    deck: "About me",
    body: `
<p>English has one "you" for everyone. Bengali has three, and the verb changes with each.</p>
<h3>Three words for "you"</h3>
<ul><li><b>আপনি</b> <i>apni</i> is polite: strangers, elders, shopkeepers, anyone you do not know. Start here.</li><li><b>তুমি</b> <i>tumi</i> is familiar: friends, people your own age once you know them.</li><li><b>তুই</b> <i>tui</i> is very familiar: close friends, small children. From a stranger it can sound rude. Recognise it; you do not need to use it.</li></ul>
<h3>The verb ending follows the person</h3>
<p>In practice: in a shop, on the street, with a rickshaw driver or with anyone older, say আপনি. Students of the same age quickly move to তুমি. If an older person calls you তুমি, keep answering with আপনি.</p>
<p>You met <b>আছি</b> <i>achhi</i>, <b>আছো</b> <i>achho</i> and <b>আছেন</b> <i>achhen</i> in greetings. Here is the whole set for "be" in "how are you" and "I'm fine".</p>
<div class="tbl"><table><tr><th>Person</th><th>Bengali</th><th>Line</th></tr><tr><td>I</td><td class="k">আমি আছি</td><td>ami achhi</td></tr><tr><td>you (familiar)</td><td class="k">তুমি আছো</td><td>tumi achho</td></tr><tr><td>you (polite)</td><td class="k">আপনি আছেন</td><td>apni achhen</td></tr><tr><td>he, she</td><td class="k">সে আছে</td><td>she achhe</td></tr><tr><td>he, she (polite)</td><td class="k">তিনি আছেন</td><td>tini achhen</td></tr></table></div>
<p><b>সে</b> <i>she</i> means both he and she: Bengali has no he/she split. <b>তিনি</b> <i>tini</i> is the respectful he or she, for someone older or important, and it takes the same ending as আপনি.</p>
{{ex:সে ভালো আছে।|she bhalo achhe.|He is fine. She is fine.}}
{{ex:তিনি ভালো আছেন।|tini bhalo achhen.|He is fine. She is fine. (respectful)}}
<h3>More than one</h3>
<p>English changes "am" to "are" for "we". Bengali does not: the plural keeps the singular ending. <b>আমরা</b> <i>amra</i> "we" takes আছি, like আমি. <b>তোমরা</b> <i>tomra</i> takes আছো, <b>আপনারা</b> <i>apnara</i> takes আছেন, <b>তারা</b> <i>tara</i> "they" takes আছে.</p>
{{ex:আমরা ভালো আছি।|amra bhalo achhi.|We are fine.}}
{{ex:আপনারা কেমন আছেন?|apnara kæmon achhen?|How are you all? (polite)}}
{{ex:তোমরা কেমন আছো?|tomra kæmon achho?|How are you all? (to friends)}}
{{ex:তারা ভালো আছে।|tara bhalo achhe.|They are fine.}}
<h3>Dropping the pronoun</h3>
<p>English always needs "I" or "you" in front of the verb. Bengali often does not, much as Spanish drops <i>yo</i>. Because the ending shows the person, the pronoun is often left out: <b>ভালো আছি</b> <i>bhalo achhi</i> is complete. With আছে, keep সে or তারা, because the ending alone does not say who.</p>
{{ex:আমি ভালো আছি।|ami bhalo achhi.|I'm fine.}}
<div class="tip"><b>Most common mistake:</b> one "you" for everybody. Wrong: তুমি কেমন আছো? to an older stranger → right: আপনি কেমন আছেন?</div>
`,
    check: [
      ["What does সে mean?", ["he only", "she only", "he or she", "they"], 2, "Bengali has one word for he and she: সে."],
      ["Which ending goes with আমরা (we)?", ["আছি", "আছে", "আছেন", "আছো"], 0, "The plural keeps the singular ending: আমি আছি, আমরা আছি."],
      ["When is তুই safe to use?", ["With a shopkeeper", "With very close friends or small children", "With your boss", "With any stranger"], 1, "তুই is very familiar. From a stranger it can be rude."]
    ],
    practice: [
      ["mc", "Which you do you use with a shopkeeper?", "আপনি", "তুমি", "তুই", "সে", "Strangers and shopkeepers get the polite আপনি."],
      ["mc", "Which verb goes with তিনি?", "আছেন", "আছে", "আছি", "আছো", "তিনি is the respectful he or she, with the same ending as আপনি: আছেন."],
      ["mc", "We are fine.", "আমরা ভালো আছি", "আমরা ভালো আছে", "আমরা ভালো আছেন", "আমরা ভালো আছো", "আমরা keeps the ending of আমি: আছি."],
      ["mc", "Which word means they?", "তারা", "তোমরা", "আমরা", "আপনারা", "তারা is they. তোমরা and আপনারা are you all, and আমরা is we."],
      ["mc", "How are you all? (to a group of older people)", "আপনারা কেমন আছেন?", "আপনারা কেমন আছো?", "তোমরা কেমন আছেন?", "আমরা কেমন আছেন?", "আপনারা is the polite you all, and it keeps the ending আছেন."],
      ["or", "He is fine. (subject first)", "সে ভালো আছে", "আছেন", "সে takes the verb ending আছে. আছেন is for আপনি and তিনি."],
      ["or", "We are fine. (subject first)", "আমরা ভালো আছি", "আছে", "The verb ending does not change for number: আমরা takes আছি, the ami form."],
      ["or", "How are you all? (polite, subject first)", "আপনারা কেমন আছেন", "আছো", "আপনারা takes the polite form আছেন, just like আপনি."],
      ["fi", "তিনি ভালো __।", "He is fine. (respectful)", "আছেন", "আছে|আছি|আছো", "তিনি takes the polite ending আছেন."],
      ["fi", "তোমরা কেমন __?", "How are you all? (to friends)", "আছো", "আছেন|আছি|আছে", "তোমরা keeps the ending of তুমি: আছো."],
      ["fi", "__ কেমন আছেন?", "How are you? (to one stranger)", "আপনি", "তুমি|তুই|আমরা", "আছেন goes with আপনি. তুমি and তুই take other endings."],
      ["ty", "She is fine. (use সে)", "সে ভালো আছে", "সে · ভালো · আছে", "আছেন", "সে takes the verb ending আছে."],
      ["ty", "How are you? (to a friend)", "তুমি কেমন আছো?|কেমন আছো?|কেমন আছো তুমি?", "তুমি · কেমন · আছো", "আছেন", "A friend gets the familiar form: the verb ending is আছো."],
      ["ty", "They are fine. (use তারা)", "তারা ভালো আছে", "তারা · ভালো · আছে", "আছি", "তারা takes আছে, the same verb ending as সে."]
    ]
  },
  {
    id: "possessive",
    title: "My, your, his",
    blurb: "Say my, your, his, her and our, and ask how someone's family is.",
    deck: "About me",
    body: `
<p>English has a separate small word for each owner: my, your, his, her, our. So does Bengali, and each one is built from the pronoun you already know.</p>
<h3>One form per person</h3>
<div class="tbl"><table><tr><th>Person</th><th>Possessive</th><th>Line</th><th>English</th></tr><tr><td class="k">আমি</td><td class="k">আমার</td><td>amar</td><td>my</td></tr><tr><td class="k">তুমি</td><td class="k">তোমার</td><td>tomar</td><td>your (familiar)</td></tr><tr><td class="k">আপনি</td><td class="k">আপনার</td><td>apnar</td><td>your (polite)</td></tr><tr><td class="k">সে</td><td class="k">তার</td><td>tar</td><td>his, her</td></tr><tr><td class="k">তিনি</td><td class="k">তাঁর</td><td>tãr</td><td>his, her (respectful)</td></tr><tr><td class="k">আমরা</td><td class="k">আমাদের</td><td>amader</td><td>our</td></tr><tr><td class="k">তোমরা</td><td class="k">তোমাদের</td><td>tomader</td><td>your (familiar, more than one)</td></tr><tr><td class="k">আপনারা</td><td class="k">আপনাদের</td><td>apnader</td><td>your (polite, more than one)</td></tr><tr><td class="k">তারা</td><td class="k">তাদের</td><td>tader</td><td>their</td></tr></table></div>
<p>The singular ones end in র, the ending that means "of". The plural ones end in দের. As in English, the possessive goes before the noun.</p>
{{ex:আমার বাবা|amar baba|my father}}
{{ex:আপনার ফোন|apnar fon|your phone}}
{{ex:আমাদের বাড়ি|amader baṛi|our house}}
<h3>His or her: one word</h3>
<p>English picks his or her by the owner. Bengali uses <b>তার</b> <i>tar</i> for both, just as সে covers he and she. <b>তাঁর</b> <i>tãr</i>, with the nasal mark, is the respectful version that goes with তিনি. The two differ only by that mark (lesson 3), so listen for the nasal vowel. Use তাঁর for a teacher, an elder, or anyone you would call তিনি.</p>
{{ex:তার বন্ধু ভালো আছে।|tar bondhu bhalo achhe.|His friend is fine. Her friend is fine.}}
<h3>The your matches the you</h3>
<p>If you say আপনি to someone, say <b>আপনার</b> <i>apnar</i> for "your". If you say তুমি, say <b>তোমার</b> <i>tomar</i>. When you ask about someone's parents, the verb is usually <b>আছেন</b> <i>achhen</i>, because parents get the respectful ending. You will also hear the plain আছে, especially for your own parents; it is not wrong, just less formal.</p>
{{ex:আপনার বাবা কেমন আছেন?|apnar baba kæmon achhen?|How is your father? (polite)}}
{{ex:তোমার মা কেমন আছেন?|tomar ma kæmon achhen?|How is your mother? (to a friend)}}
{{ex:আমার বাবা ভালো আছেন।|amar baba bhalo achhen.|My father is fine.}}
<h3>Nothing else changes</h3>
<p>English speakers sometimes expect "my" to change with the thing owned, the way it does in French or Spanish. It does not. The possessive never changes for the thing owned: <b>আমার</b> <i>amar</i> stays the same before father, mother or house, one or many. Learn one word per owner and you are done.</p>
<div class="tip"><b>Most common mistake:</b> expecting the possessive to change with the owner's sex or with the thing owned. Wrong: hunting for a separate word for "her" → right: one তার for his and her, and one আমার before any noun: তার বন্ধু, আমার বাবা, আমার মা.</div>
`,
    check: [
      ["What does তার mean?", ["his only", "her only", "their", "his or her"], 3, "তার covers his and her, just as সে covers he and she."],
      ["You call someone আপনি. Which your do you use with them?", ["তোমার", "আপনার", "আমার", "তার"], 1, "The your matches the you: আপনি, আপনার."],
      ["Why is it আমার বাবা ভালো আছেন, with আছেন?", ["Parents get the respectful ending", "আছেন is the plural", "আমার always takes আছেন", "It is a question"], 0, "Parents are spoken of with respect, so the verb takes the polite ending."]
    ],
    practice: [
      ["mc", "my father", "আমার বাবা", "আমি বাবা", "তুমি বাবা", "আমরা বাবা", "My is আমার, not the plain pronoun আমি."],
      ["mc", "your mother (to a stranger)", "আপনার মা", "তোমার মা", "আপনি মা", "আপনারা মা", "A stranger is আপনি, so your is আপনার."],
      ["mc", "our house", "আমাদের বাড়ি", "আমরা বাড়ি", "আমার বাড়ি", "আপনাদের বাড়ি", "Our is আমাদের. আমার is my, and আপনাদের is your (polite, plural)."],
      ["mc", "Which word is the respectful his or her?", "তাঁর", "তার", "তুমি", "তোমার", "তাঁর, with the nasal mark, goes with তিনি."],
      ["mc", "How is your father? (to a friend)", "তোমার বাবা কেমন আছেন?", "তুমি বাবা কেমন আছেন?", "তোমার বাবা কেমন আছো?", "আপনার বাবা কেমন আছো?", "To a friend, your is তোমার. The father gets আছেন."],
      ["or", "My father is fine.", "আমার বাবা ভালো আছেন", "আমি", "A parent usually gets the polite form আছেন; my is আমার, not আমি."],
      ["or", "How is your mother? (to a stranger)", "আপনার মা কেমন আছেন", "তোমার", "To a stranger, your is আপনার, and a mother usually gets the polite form আছেন."],
      ["or", "His friend is fine.", "তার বন্ধু ভালো আছে", "সে", "His is তার, the possessive; সে is he."],
      ["fi", "__ বাবা কেমন আছেন?", "How is your father? (to a friend)", "তোমার", "আপনার|তুমি|আমি", "To a friend, your is তোমার."],
      ["fi", "আমার বন্ধু ভালো __।", "My friend is fine.", "আছে", "আছি|আছো|আমার", "A friend is spoken of like সে: আছে."],
      ["fi", "__ বাড়ি", "our house", "আমাদের", "আমরা|আমার|আমি", "Our is আমাদের."],
      ["ty", "my name", "আমার নাম", "আমার · নাম", "আমি", "আমার ends in the case ending র, which means of: my name, not I name."],
      ["ty", "How is your father? (to a stranger)", "আপনার বাবা কেমন আছেন?|আপনার বাবা কেমন আছে?", "আপনার · বাবা · কেমন · আছেন", "তোমার", "A stranger's father: আপনার for your, and the polite form আছেন."],
      ["ty", "our house", "আমাদের বাড়ি", "আমাদের · বাড়ি", "আমরা", "আমাদের carries the case ending that makes we into our."]
    ]
  },
  {
    id: "intro",
    title: "Introducing yourself",
    blurb: "Say your name, where you are from and what you do, with no word for am or is.",
    deck: "About me",
    body: `
<p>English needs "am", "is" and "are" in every sentence about who or what someone is. Bengali leaves them out.</p>
<h3>No word for "am"</h3>
<p>English says "I am a student". Bengali says <b>আমি ছাত্র</b> <i>ami chhatro</i>, literally "I student". There is no verb at all. This is called a <b>zero copula</b>, and it is completely normal, not baby talk. Think of the two parts as a label and what it says: "I", "student"; "my name", "Rahim". English glues them together with am or is; Bengali just sets them side by side.</p>
{{ex:আমি ছাত্র।|ami chhatro.|I am a student.}}
{{ex:আমি বাংলাদেশি।|ami bangladeshi.|I am Bangladeshi.}}
<h3>"Is" disappears too</h3>
<p>The same goes for he, she and things. Your name, your job, where someone is from: just put the two parts side by side.</p>
{{ex:আমার নাম রাহীম।|amar nam rahim.|My name is Rahim.}}
{{ex:আমার বাবা ডাক্তার।|amar baba ḍaktar.|My father is a doctor.}}
{{ex:উনি আমার শিক্ষক।|uni amar shikkhôk.|He is my teacher.}}
<p>Every new job or nationality word you learn drops straight into this frame.</p>
<h3>Keep the "I"</h3>
<p>In greetings you could drop আমি, because the ending of আছি already meant "I". A sentence with no verb has no ending to show the person, so keep the subject: <b>আমি ছাত্র</b> <i>ami chhatro</i>, not just ছাত্র. And mind the pair <b>বাংলাদেশ</b> <i>bangladesh</i>, the country, and <b>বাংলাদেশি</b> <i>bangladeshi</i>, a person from it, just like Bangladesh and Bangladeshi.</p>
<h3>So when do you say আছি?</h3>
<p>You learned <b>আছি</b> <i>achhi</i> in greetings. It is for how you are, as in <b>ভালো আছি</b> <i>bhalo achhi</i>, and later for where you are. For who or what you are (name, job, nationality) use no verb.</p>
<div class="tbl"><table><tr><th>How you are: verb</th><th>Who you are: no verb</th></tr><tr><td class="k">আমি ভালো আছি।</td><td class="k">আমি ছাত্র।</td></tr><tr><td>I'm fine.</td><td>I'm a student.</td></tr></table></div>
<h3>Asking and introducing</h3>
<p>To ask a name politely, say <b>আপনার নাম কী?</b> <i>apnar nam ki?</i>, literally "your name what?" (more on question words in lesson 9). To introduce someone politely, use <b>ইনি</b> <i>ini</i>, "this person", which takes respect like তিনি. For someone farther away, <b>উনি</b> <i>uni</i>.</p>
{{ex:আপনার নাম কী?|apnar nam ki?|What is your name?}}
{{ex:ইনি আমার বাবা।|ini amar baba.|This is my father.}}
<div class="tip"><b>Most common mistake:</b> adding আছি for "am". Wrong: আমি ছাত্র আছি → right: আমি ছাত্র।</div>
`,
    check: [
      ["How do you say I am a doctor?", ["আমি ডাক্তার আছি", "আমি ডাক্তার", "আমার ডাক্তার", "আমি আছি ডাক্তার"], 1, "Bengali uses a zero copula for who or what you are: no verb."],
      ["When is আছি the right word?", ["For your name", "For your job", "For your nationality", "For how you are, as in ভালো আছি"], 3, "আছি is for how (and later where) you are, never for who or what you are."],
      ["Which word politely introduces someone standing with you?", ["ইনি", "সে", "আমি", "তুই"], 0, "ইনি is the polite this person: ইনি আমার বাবা."]
    ],
    practice: [
      ["mc", "I am a student.", "আমি ছাত্র।", "আমি ছাত্র আছি।", "আমার ছাত্র।", "আমি আছি ছাত্র।", "No verb for am: আমি ছাত্র."],
      ["mc", "My name is Rahim.", "আমার নাম রাহীম।", "আমি নাম রাহীম।", "আমার নাম রাহীম আছে।", "আমার নাম আছি রাহীম।", "My is আমার, and there is no verb for is."],
      ["mc", "What is your name? (polite)", "আপনার নাম কী?", "আপনি নাম কী?", "তুমি নাম কী?", "আপনার নাম আছেন?", "Your (polite) is আপনার, and the question word কী takes the place of the name."],
      ["mc", "This is my father. (polite)", "ইনি আমার বাবা।", "ইনি আমি বাবা।", "ইনি আমার বাবা আছেন।", "আমি আমার বাবা।", "No verb, and my is আমার."],
      ["mc", "Which sentence needs আছি?", "I'm fine.", "I'm a student.", "I'm Bangladeshi.", "My name is Rahim.", "আছি is for how you are. Who or what you are takes no verb."],
      ["or", "My name is Rahim.", "আমার নাম রাহীম", "আছে", "Bengali uses a zero copula here: no word for is."],
      ["or", "My father is a doctor.", "আমার বাবা ডাক্তার", "আছেন", "A job takes a zero copula: আছেন is for how someone is, not what they are."],
      ["or", "This is my father. (polite)", "ইনি আমার বাবা", "আমি", "ইনি introduces someone politely, and my is আমার."],
      ["fi", "আমি __।", "I am Bangladeshi.", "বাংলাদেশি", "বাংলাদেশ|বাংলা|আছি", "বাংলাদেশ is the country; a person from it is বাংলাদেশি. No verb for am."],
      ["fi", "__ নাম রাহীম।", "My name is Rahim.", "আমার", "আমি|তুমি|আছি", "My is আমার, not the pronoun আমি."],
      ["fi", "আমি ভালো __।", "I'm fine.", "আছি", "আছেন|আছে|নাম", "How you are takes আছি. Who you are takes no verb."],
      ["ty", "I am Bangladeshi.", "আমি বাংলাদেশি", "আমি · বাংলাদেশি", "আছি", "Bengali uses a zero copula for nationality: no আছি."],
      ["ty", "My name is Rahim.", "আমার নাম রাহীম", "আমার · নাম · রাহীম", "আমি", "A name takes a zero copula, and my is আমার."],
      ["ty", "My father is a doctor.", "আমার বাবা ডাক্তার", "আমার · বাবা · ডাক্তার", "আছেন", "A job takes a zero copula: no আছেন."]
    ]
  },
  {
    id: "questions",
    title: "Questions and \"not\"",
    blurb: "Ask what, who, whose, where and how, ask a yes-or-no question, and say I am not.",
    deck: "Questions",
    body: `
<p>English moves the question word to the front and adds "is" or "do". Bengali does neither.</p>
<h3>The question word sits where the answer goes</h3>
<p>Compare <b>আমার নাম রাহীম।</b> <i>amar nam rahim.</i> with <b>আপনার নাম কী?</b> <i>apnar nam ki?</i>. The question word takes the place of the answer, and nothing else changes. In speech the question word can also come first for emphasis, but putting it where the answer goes is always right.</p>
<div class="tbl"><table><tr><th>Bengali</th><th>Line</th><th>English</th></tr><tr><td class="k">কী</td><td>ki</td><td>what</td></tr><tr><td class="k">কে</td><td>ke</td><td>who</td></tr><tr><td class="k">কার</td><td>kar</td><td>whose</td></tr><tr><td class="k">কোথায়</td><td>kothay</td><td>where</td></tr><tr><td class="k">কেমন</td><td>kæmon</td><td>how, what like</td></tr></table></div>
{{ex:আপনার নাম কী?|apnar nam ki?|What is your name?}}
{{ex:উনি কে?|uni ke?|Who is he? Who is she?}}
{{ex:এটা কার বই?|eṭa kar boi?|Whose book is this?}}
{{ex:আপনার বাড়ি কোথায়?|apnar baṛi kothay?|Where is your home? (Where are you from?)}}
<p>Like statements, these questions have no word for "is". You already know <b>কেমন</b> <i>kæmon</i> from <b>কেমন আছেন?</b> <i>kæmon achhen?</i>: it asks how someone or something is.</p>
<h3>Yes-or-no questions</h3>
<p>English flips the words: "You are a student" becomes "Are you a student?". Bengali keeps the order and adds <b>কি</b> <i>ki</i> after the subject. It never needs a helper word like "do". It is written with the short sign ি and sounds the same as কী, "what".</p>
{{ex:আপনি কি ছাত্র?|apni ki chhatro?|Are you a student?}}
<p>To answer, start with <b>হ্যাঁ</b> <i>hæ̃</i>, "yes", or <b>না</b> <i>na</i>, "no".</p>
{{ex:হ্যাঁ, আমি ছাত্র।|hæ̃, ami chhatro.|Yes, I am a student.}}
<h3>Saying "not" when there is no verb</h3>
<p>"I am a student" has no verb in Bengali, so "not" needs a word of its own, at the end. With আমি, it is <b>নই</b> <i>noi</i>. With সে, or a thing, it is <b>নয়</b> <i>nôy</i>. English puts "not" in the middle, after "am"; Bengali puts it at the very end of the sentence. This lesson uses only these two.</p>
{{ex:আমি ছাত্র নই।|ami chhatro noi.|I am not a student.}}
{{ex:সে ডাক্তার নয়।|she ḍaktar nôy.|He is not a doctor. She is not a doctor.}}
{{ex:না, আমি ছাত্র নই।|na, ami chhatro noi.|No, I am not a student.}}
<p>Notice that "no" and "not" are different words here: না answers the question, and নই does the work of "am not".</p>
<h3>নই is not নেই</h3>
<p>Later you will meet <b>নেই</b> <i>nei</i>, which means "there isn't" or "don't have". It looks similar, but it is the opposite of আছে, not of a zero copula. It never replaces নই.</p>
<div class="tip"><b>Most common mistake:</b> using নেই for "am not". Wrong: আমি ছাত্র নেই → right: আমি ছাত্র নই।</div>
`,
    check: [
      ["Where does the question word go in a Bengali question?", ["Always first", "Where the answer would go", "Always last, after the verb", "Before the subject"], 1, "আমার নাম রাহীম, আপনার নাম কী: the question word takes the answer's place."],
      ["How do you turn আপনি ছাত্র into a yes-or-no question?", ["Add কি after the subject: আপনি কি ছাত্র?", "Put ছাত্র first", "Add আছেন at the end", "Add নই at the end"], 0, "Keep the order and add কি after the subject."],
      ["Which word completes আমি ছাত্র __ (I am not a student)?", ["নেই", "নয়", "না", "নই"], 3, "With আমি and no verb, not is নই."]
    ],
    practice: [
      ["mc", "Who is he? (polite, use উনি)", "উনি কে?", "উনি কী?", "উনি কার?", "উনি কোথায়?", "কে is who. কী is what, কার is whose, কোথায় is where."],
      ["mc", "I am not a student.", "আমি ছাত্র নই।", "আমি ছাত্র নেই।", "আমি ছাত্র নয়।", "আমি নই ছাত্র।", "With আমি, not is নই, at the end. নেই is the opposite of আছে."],
      ["mc", "Whose book is this?", "এটা কার বই?", "এটা কে বই?", "এটা কোথায় বই?", "এটা কেমন বই?", "Whose is কার, before the noun."],
      ["mc", "Where is your home? (polite)", "আপনার বাড়ি কোথায়?", "আপনার বাড়ি কে?", "আপনার বাড়ি কার?", "আপনি বাড়ি কোথায়?", "Where is কোথায়, and your (polite) is আপনার."],
      ["mc", "Are you a student? (polite)", "আপনি কি ছাত্র?", "আপনি ছাত্র নই?", "আপনি কে ছাত্র?", "আপনি ছাত্র আছেন?", "A yes-or-no question adds কি after the subject, with a zero copula."],
      ["or", "I am not a doctor.", "আমি ডাক্তার নই", "নেই", "নই is the ami form of not, used with a zero copula. নেই belongs with আছে."],
      ["or", "He is not a student. (use সে)", "সে ছাত্র নয়", "নই", "With সে, not is নয়: like a verb ending, it changes with the person. নই is the ami form."],
      ["or", "Are you a student? (polite; put কি straight after আপনি)", "আপনি কি ছাত্র", "নই", "Keep the statement order, with a zero copula, and add কি after the subject."],
      ["fi", "আমি ছাত্র __।", "I am not a student.", "নই", "নেই|নয়|আছি", "With আমি, not is নই."],
      ["fi", "উনি __?", "Who is he?", "কে", "কী|কার|কোথায়", "Who is কে; কী is what."],
      ["fi", "এটা __ বই?", "Whose book is this?", "কার", "কে|কোথায়|কেমন", "Whose is কার."],
      ["ty", "I am not a student.", "আমি ছাত্র নই", "আমি · ছাত্র · নই", "নেই", "With a zero copula, not for আমি is নই, the ami form."],
      ["ty", "What is your name? (polite)", "আপনার নাম কী?|আপনার নাম কি?", "আপনার · নাম · কী", "আপনি", "Your (polite) is আপনার, and কী takes the place of the answer."],
      ["ty", "He is not a doctor. (use সে)", "সে ডাক্তার নয়", "সে · ডাক্তার · নয়", "নই", "With সে, not is নয়: it changes with the person, like a verb ending. নই is the ami form."]
    ]
  }
];

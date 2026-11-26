/* en-pl lessons 1–9 (alphabet through adjectives). Written by EN-PL-1. Every pron is the output of tools/target/pl/respell.js on the whole line. */
module.exports = [
  {
    id: "alphabet",
    title: "The Polish letters",
    blurb: "Read the nine extra letters and the pronunciation line: stress, the nasal N, and ł versus l.",
    deck: "Sounds and spelling",
    sections: [null, [{"deck": "Sounds and spelling", "n": [5, 7]}, {"deck": "Sounds and spelling", "n": [11, 12]}], {"deck": "Sounds and spelling", "n": [7, 10]}, [{"deck": "Sounds and spelling", "n": [0, 5]}, {"deck": "Sounds and spelling", "n": [15, 16]}], [{"deck": "Sounds and spelling", "n": [10, 11]}, {"deck": "Sounds and spelling", "n": [12, 15]}, {"name": "More spellings", "cards": [["c", "ts", "the letter c", "On its own, always ts, as in cats: noc, nohts, night. In cz, ch and ci it is part of another sound."], ["j", "y", "the letter j", "Always y, as in yes: jutro, YOO-troh, tomorrow."], ["h", "kh", "the letter h", "The same kh as ch, the loch sound: herbata, khehr-BAH-tah, tea."], ["dz", "dz", "the letter pair dz", "A voiced ts, as in adds: bardzo, BAHR-dzoh, very."], ["dź", "j'", "the letter pair dź", "The soft j, written j'. Before a vowel it is spelled dzi: dzień, jyehny, day."]]}], [{"deck": "Sounds and spelling", "n": [16, 18]}, {"name": "Whole words", "cards": [["dom", "dohm", "a house; home", "d, o, m as in English, with o held flat. One syllable, so no capitals."], ["woda", "VOH-dah", "water", "w is v. Stress on the next-to-last syllable."], ["głowa", "GWOH-vah", "a head", "ł is w, and w is v. The g is hard, as in go."], ["ryba", "RIH-bah", "a fish", "r is a tap. y is ih, a short i."], ["noc", "nohts", "night", "c is always ts. One syllable."], ["ulica", "oo-LEE-tsah", "a street", "u is oo, i is ee, c is ts. Three syllables, stress on the next to last."], ["jutro", "YOO-troh", "tomorrow", "j is y, u is oo. The cluster tr takes no extra vowel."], ["jajko", "YAHY-koh", "an egg", "j is y, both times: jaj is YAHY."], ["szkoła", "SHKOH-wah", "a school", "sz is hard sh, ł is w. sz and k stay together, with no vowel between."], ["czas", "chahs", "time", "cz is hard ch, as in chop."], ["ciocia", "CHYOH-chyah", "an aunt", "ci before a vowel is chy, twice. The i only softens the c."], ["gość", "gohsh'ch'", "a guest", "ś and ć are soft, with no vowel after them: sh'ch'."], ["róża", "ROO-zhah", "a rose", "ó is oo, ż is zh."], ["książka", "KSHYOHN-shkah", "a book", "si before a vowel is shy. ą inside the word is the nasal tail, ohN. ż before k turns to sh."], ["chłopiec", "KHWOH-pyehts", "a boy", "ch is kh, ł is w. pie is pyeh: the i only softens the p. c is ts."], ["dziecko", "JYEHTS-koh", "a child", "dzi before a vowel is jy. c is ts."], ["słońce", "SWOHNY-tseh", "the sun", "ł is w, ń is ny, c is ts."], ["miasto", "MYAH-stoh", "a city; a town", "mia is myah: the i only softens the m."]]}], null],
    body: `
<p>Polish uses the Latin alphabet you know, plus nine letters: <b>ą ć ę ł ń ó ś ź ż</b>. Under every Polish phrase in this course there is a pronunciation line in English letters. The syllable in CAPITALS is the stressed one. A word of one syllable stays in small letters. A capital <b>N</b> inside <i>ohN</i> is not stress, and it is not its own syllable. It is a nasal tail on the vowel.</p>
<p>Most letters sound much as in English. <b>g</b> is hard, as in "go", <b>s</b> on its own is the s of "sun", and <b>r</b> is a tap. <b>q</b>, <b>v</b> and <b>x</b> turn up only in foreign words. The rest of this lesson is about the letters that do not work as in English. Tap a letter to hear it.</p>
{{tiles:b=b d=d f=f g=g k=k l=l m=m n=n p=p r=r s=s t=t z=z}}
<h3>Vowels that stay put</h3>
<p>English vowels slide. Say <i>no</i> slowly and the end is a <i>w</i>. Polish vowels hold one sound. The line spells them the same way every time.</p>
<div class="tbl"><table><tr><th>Letter</th><th>Aid</th><th>Read it as</th></tr><tr><td class="k">a</td><td>ah</td><td>father</td></tr><tr><td class="k">e</td><td>eh</td><td>bed</td></tr><tr><td class="k">i</td><td>ee</td><td>meet, when i is its own vowel</td></tr><tr><td class="k">o</td><td>oh</td><td>the vowel of "more", held flat</td></tr><tr><td class="k">ó, u</td><td>oo</td><td>food. ó is the same vowel as u</td></tr><tr><td class="k">y</td><td>ih</td><td>a short i, not ee</td></tr></table></div>
<p>Tap a vowel to hear it.</p>
{{tiles:a=ah e=eh i=ee o=oh u=oo ó=oo y=ih}}
{{ex:dobry|DOH-brih|good}}
<h3>ł is w, and w is v</h3>
<p><b>ł</b> and <b>l</b> are different letters. <b>ł</b> is the English <b>w</b> sound. Plain <b>l</b> stays a clear l. The letter <b>w</b> is an English <b>v</b>. At the end of a word, <b>w</b> sounds like <b>f</b>. The <b>r</b> is a tap, one quick flick of the tongue. The line cannot show the tap, so it writes r.</p>
{{tiles:ł=w w=v}}
{{ex:łódka|WOOT-kah|a boat}}
{{ex:Kraków|KRAH-koof|Kraków}}
<p><b>Kraków</b> is two beats, <i>KRAH-koof</i>. The <b>k</b> and the <b>r</b> stay together. A cluster takes no extra vowel, and <b>ó</b> is <i>oo</i>.</p>
<p><b>żółw</b>, a turtle, has all three: <b>ó</b> is <i>oo</i>, <b>ł</b> is <i>w</i>, and the final <b>w</b> is <i>f</i>. Its first letter, <b>ż</b>, is the <i>zh</i> of "measure". More on it below.</p>
<h3>The nasal tail</h3>
<p>Final <b>ą</b> is a nasal o, <i>ohN</i>. Final <b>ę</b> is an ordinary <i>eh</i>. It is not nasal. Inside a word both keep the nasal tail. Before <b>p</b> or <b>b</b> the tail is an <i>m</i>, before <b>t</b> or <b>d</b> it is an <i>n</i>, and before <b>k</b> or <b>g</b> it is an <i>ng</i>: <b>ręka</b>, a hand, is <i>REHNG-kah</i>.</p>
{{tiles:ą=ohN ę=ehN}}
{{ex:są|sohN|they are}}
<h3>Hard and soft</h3>
<p>Hard <b>sz</b> is <i>sh</i>. <b>ś</b>, and <b>si</b> before a vowel, are <i>shy</i>. At the end of a word the soft sound is <i>sh'</i>. The apostrophe adds no vowel. It only marks softness. <b>cz</b> and <b>ć</b>, and <b>ż</b> and <b>ź</b>, follow that same three-way split: hard, soft with a y, soft with an apostrophe. The next lesson drills the pairs.</p>
{{tiles:sz=sh ś=sh' si=shy cz=ch ć=ch' ci=chy ż=zh ź=zh' zi=zhy}}
{{ex:proszę|PROH-sheh|Please. You're welcome.}}
{{ex:prosię|PROH-shyeh|a piglet}}
{{ex:cześć|chehsh'ch'|Hi. Bye. To a friend.}}
<h3>rz, ch, the dz family, ń, c and j</h3>
<p><b>rz</b> is the same sound as <b>ż</b>, <i>zh</i>. Do not read it as r plus z. After <b>p</b>, <b>t</b>, <b>k</b> or <b>ch</b>, and at the end of a word, it turns to <i>sh</i>: <b>trzy</b>, three, is <i>tshih</i>. <b>ch</b> and <b>h</b> are both <i>kh</i>, the sound in Scottish "loch". <b>dż</b> is the j of "jam", and <b>dz</b> is a voiced ts, as in "adds". Soft <b>dź</b>, spelled <b>dzi</b> before a vowel, is <i>jy</i> before a vowel and <i>j'</i> otherwise. <b>ń</b>, and <b>ni</b> before a vowel, are <i>ny</i>, as in "canyon". Two plain-looking letters change too: <b>c</b> on its own is always <i>ts</i>, as in "cats", and <b>j</b> is always <i>y</i>, as in "yes".</p>
{{tiles:rz=zh ch=kh h=kh dż=j dz=dz dź=j' ń=ny ni=ny c=ts j=y}}
{{ex:rzeka|ZHEH-kah|a river}}
<h3>Read whole words</h3>
<p>Now put the pieces together. Read a word one letter or letter pair at a time, and give each its Polish sound: every vowel one steady sound, <b>ł</b> a w, <b>w</b> a v, <b>c</b> ts, <b>j</b> y. An <b>i</b> before another vowel only softens the consonant in front of it: <b>miasto</b> is <i>MYAH-stoh</i>. A voiced consonant at the end of a word, or before a voiceless one, turns voiceless, the way the final <b>w</b> of Kraków is f. A <b>w</b> right after a voiceless consonant turns to f too: <b>twój</b> is <i>tfooy</i>. Then put the stress on the next-to-last syllable. <b>muzyka</b> is the exception you meet here: its careful stress is <i>MOO-zih-kah</i>. Say each word aloud before you flip the card.</p>
{{ex:szkoła|SHKOH-wah|a school}}
<h3>A bare w, and three small words</h3>
<p>The word <b>w</b> has no vowel of its own. Before a vowel it is a bare <i>v</i>. <b>w domu</b> is a set phrase, "at home". Keep it as a piece. The little word <b>z</b> can be a bare consonant too. You will meet it with place names.</p>
{{ex:w domu|v DOH-moo|at home}}
<p><b>on</b> is he, the masculine form. <b>ona</b> is she, the feminine form. <b>ono</b> is it, the neuter form. <b>jest</b> means "is". The full set of "to be" comes later. For now the pronoun changes, and <b>jest</b> stays with it.</p>
{{ex:On jest.|ohn yehst|He is.}}
{{ex:Ona jest.|OH-nah yehst|She is.}}
{{ex:Ono jest.|OH-noh yehst|It is.}}
<div class="tip"><b>Most common mistake:</b> reading <b>ł</b> as l, and <b>ó</b> as o. <b>lódka</b> → <b>łódka</b>, and <b>Krakow</b> → <b>Kraków</b>.</div>
`,
    check: [
      ["How does ł sound in łódka?", ["Like the w in English wet", "Like the l in English let", "Like the v in English vet", "It is silent"], 0, "ł is the English w sound. The plain letter l is a different letter."],
      ["What is the ó in Kraków on the pronunciation line?", ["oh, as in the vowel of more", "oo, as in food", "ah, as in father", "ih, a short i"], 1, "ó is the same vowel as u. The line writes oo, and the final w of Kraków is f."],
      ["What does the capital N in sohN stand for?", ["The stressed syllable", "A separate syllable you pronounce as n", "A nasal tail on the vowel", "The letter ł"], 2, "Stress is a capital vowel. The capital N is the nasal tail on final ą, and it is not its own syllable."]
    ],
    practice: [
      ["mc", "Which word is read with an English w?", "łódka", "lódka", "Kraków", "proszę", "ł is the English w sound. A plain l stays an l."],
      ["mc", "In Kraków, which aid vowel is ó?", "oo", "oh", "ah", "ih", "ó is oo, the vowel of food. It is the same vowel as u."],
      ["mc", "The capital N in sohN stands for…", "a nasal tail on the vowel", "the stressed syllable", "a separate syllable", "the letter ł", "The capital N is nasal. Stress is shown by a capital vowel, and są is one syllable."],
      ["mc", "Final ę, as in prosię, sounds like…", "eh", "ohN", "oo", "ah", "Final ę is oral eh. Final ą is the nasal one, ohN."],
      ["mc", "He is.", "On jest.", "Ona jest.", "Ono jest.", "Są.", "On is the masculine form. jest means is."],
      ["or", "He is. (start with On)", "On jest", "Ona", "On is the masculine form."],
      ["or", "She is. (start with Ona)", "Ona jest", "Ono", "Ona is the feminine form."],
      ["or", "at home", "w domu", "łódka", "w has no vowel of its own. In w domu it is a bare v."],
      ["fi", "__ jest.", "He is.", "On", "Ona|Ono|Są", "On is the masculine form."],
      ["fi", "Krak__", "Kraków", "ów", "ow|uf|ov", "ó is oo, so Kraków ends in ów, and the final w is an f on the aid.", "!strict"],
      ["fi", "__ódka", "a boat", "ł", "l|w|ó", "ł is the English w sound. The plain letter l is a different letter."],
      ["ty", "He is. (start with On)", "On jest.", "on · jest · masculine form", "Ona", "On is the masculine form."],
      ["ty", "She is. (start with Ona)", "Ona jest.", "ona · jest · feminine form", "On", "Ona is the feminine form."],
      ["ty", "a boat", "łódka", "ł · ó is oo", "lódka", "ł is the English w sound, and ó is oo."]
    ]
  },
  {
    id: "spelling",
    title: "sz, cz, ś and the pairs",
    blurb: "Hear sz apart from ś, and rz the same as ż, so one English sh does not cover both.",
    deck: "Sounds and spelling",
    body: `
<p>English has one "sh" and one "ch". Polish splits each of them. If you spell both with the English letter, <b>proszę</b> and <b>prosię</b> collapse into one word. They are not one word.</p>
<h3>Hard, soft with a y, soft with an apostrophe</h3>
<p>Hard <b>sz</b> is <i>sh</i>, as in "show". <b>ś</b>, and <b>si</b> before a vowel, are softer: <i>shy</i> before a vowel, and <i>sh'</i> at the end or before a consonant. The apostrophe adds no vowel. The same three-way split works for the other pairs. Hard <b>cz</b> is <i>ch</i> as in "chop", and soft <b>ć</b> or <b>ci</b> is <i>chy</i> before a vowel and <i>ch'</i> otherwise. Hard <b>ż</b> is <i>zh</i> as in "measure", and soft <b>ź</b> or <b>zi</b> is <i>zhy</i> or <i>zh'</i>.</p>
<div class="tbl"><table><tr><th>Hard</th><th>Soft before a vowel</th><th>Soft, no extra vowel</th></tr><tr><td class="k">sz proszę</td><td class="k">si prosię, Kasia</td><td class="k">ś in cześć</td></tr><tr><td class="k">cz in cześć</td><td>ci, written chy</td><td class="k">ć in cześć</td></tr><tr><td class="k">ż, and rz</td><td>zi, written zhy</td><td>ź, written zh'</td></tr></table></div>
{{ex:proszę|PROH-sheh|Please. You're welcome.}}
{{ex:prosię|PROH-shyeh|a piglet}}
{{ex:kasza|KAH-shah|kasha, groats}}
{{ex:Kasia|KAH-shyah|Kasia}}
{{ex:cześć|chehsh'ch'|Hi. Bye. To a friend.}}
<h3>rz is ż, and ch is h</h3>
<p>In this course <b>rz</b> and <b>ż</b> are the same sound, <i>zh</i>. <b>może</b> means "maybe". <b>morze</b> means "the sea". The line is the same. Only the spelling changes. <b>rzeka</b>, a river, starts with that same <i>zh</i>. Do not read <b>rz</b> as an English r plus a z. <b>ch</b> and <b>h</b> are also one sound, <i>kh</i>. <b>chleb</b>, bread, and <b>herbata</b>, tea, start the same way.</p>
{{ex:może|MOH-zheh|maybe}}
{{ex:morze|MOH-zheh|the sea}}
{{ex:rzeka|ZHEH-kah|a river}}
{{ex:żurek|ZHOO-rehk|żurek, sour rye soup}}
{{ex:chleb|khlehp|bread}}
{{ex:herbata|khehr-BAH-tah|tea}}
<h3>dz, dż, and ń</h3>
<p><b>dż</b> is the hard "j" of "jam", as in <b>dżem</b>, jam. <b>dz</b> is the voiced partner of that pair, a voiced "ts". Before a vowel, <b>dzi</b> softens. That is why <b>dzień</b>, day, starts with <i>jy</i> on the line, not with a separate d. <b>ń</b> is <i>ny</i>, as in "canyon", including at the end of a syllable. <b>ni</b> before a vowel is the same softness. You will hear it in <b>pani</b> a few lessons from now.</p>
{{ex:dżem|jehm|jam}}
{{ex:dzień|jyehny|day}}
<p>You already have three pronouns. <b>on</b> is the masculine form, <b>ona</b> is the feminine form, and <b>ono</b> is the neuter form. They stay in the practice so the letters do not push them out.</p>
<div class="tip"><b>Most common mistake:</b> one English "sh" for both courtesy and the piglet. <b>prosię</b> for please → <b>proszę</b>. The piglet stays <b>prosię</b>.</div>
`,
    check: [
      ["Which spelling is please?", ["prosię", "prosze", "proszę", "kasza"], 2, "Please is proszę, with hard sz. prosię is a piglet, and prosze is missing the mark on ę."],
      ["What is true of rz and ż?", ["They are the same sound in this course", "rz is an English r followed by z", "ż is sh and rz is zh", "They are the same letters as ch and h"], 0, "rz and ż are both zh. może and morze sound alike and mean different things."],
      ["How do ch in chleb and h in herbata compare?", ["ch is the English ch of chop, and h is silent", "h is v", "ch is shy and h is sh", "They are the same kh sound"], 3, "ch and h are one sound, kh, as in Scottish loch."]
    ],
    practice: [
      ["mc", "Please.", "proszę", "prosię", "prosze", "kasza", "proszę has hard sz, sh. prosię is the piglet, and prosze is missing the mark.", "!strict"],
      ["mc", "a piglet", "prosię", "proszę", "prosie", "Kasia", "prosię is shy plus eh. The piglet is a different word from proszę.", "!strict"],
      ["mc", "Which aid fits Kasia?", "KAH-shyah", "KAH-shah", "KAH-sh'ah", "KAH-siah", "si before a vowel is shy. kasza is the hard sh, KAH-shah."],
      ["mc", "rzeka and żurek share…", "the same zh sound", "an English r plus z in rzeka", "sh in both words", "the kh of ch and h", "rz and ż are the same sound in this course."],
      ["mc", "chleb and herbata start with…", "the same kh sound", "English ch in chleb", "a silent h in herbata", "shy in both words", "ch and h are the same kh sound."],
      ["or", "He is. (start with On)", "On jest", "Ona", "On is the masculine form."],
      ["or", "She is. (start with Ona)", "Ona jest", "On", "Ona is the feminine form."],
      ["or", "It is. (start with Ono)", "Ono jest", "Są", "Ono is the neuter form."],
      ["fi", "pro__", "Please.", "szę", "się|sze|sie", "Please uses hard sz. The ending still needs the mark on ę.", "!strict"],
      ["fi", "pro__", "a piglet", "się", "szę|sie|sze", "The piglet uses si before a vowel, shy, and final ę is eh.", "!strict"],
      ["fi", "__ jest.", "She is.", "Ona", "On|Ono|proszę", "Ona is the feminine form."],
      ["ty", "Please. (one word)", "proszę", "proszę · sz is hard sh", "prosię", "sz is the hard sh in proszę. prosię is a different word."],
      ["ty", "He is. (start with On)", "On jest.", "on · jest", "Ona", "On is the masculine form."],
      ["ty", "It is. (start with Ono)", "Ono jest.", "ono · jest", "On", "Ono is the neuter form."]
    ]
  },
  {
    id: "stress",
    title: "Stress and the hard clusters",
    blurb: "Stress the next-to-last syllable, keep the careful stress on muzyka, and read a cluster with no extra vowel.",
    deck: "Sounds and spelling",
    body: `
<p>English often stresses the first syllable of a long word. Polish does not. The ordinary rule is the next-to-last syllable. Say the city aloud and let the capitals show you: <b>Warszawa</b> is <i>vahr-SHAH-vah</i>. The stress sits on <b>sza</b>, not on the first syllable.</p>
{{ex:Warszawa|vahr-SHAH-vah|Warsaw}}
<p>Each word keeps its own stress. <b>Dzień dobry</b> is two words, so the line has two stresses: <i>jyehny DOH-brih</i>. <b>dzień</b> is one syllable. <b>dobry</b> is stressed on its first syllable, which is the next to last. The next lesson teaches when you say this hello. Here, hear the two beats, and notice the agreement: <b>dzień</b> is masculine, so "good" is the masculine form <b>dobry</b>.</p>
{{ex:Dzień dobry.|jyehny DOH-brih|Good morning. Good afternoon.}}
<h3>One careful exception</h3>
<p><b>muzyka</b> means music. Its careful stress is the third syllable from the end: <i>MOO-zih-kah</i>. The voice in this course may put the stress on the next-to-last syllable instead. When the voice and the capitals disagree, read the capitals for this word. This is the careful stress, and it is the exception you learn here. Ordinary words stay on the next-to-last syllable.</p>
{{ex:muzyka|MOO-zih-kah|music}}
<h3>Clusters stay tight</h3>
<p>A cluster is a run of consonants. Polish does not insert a vowel to make it easier. <b>Kraków</b> is <i>KRAH-koof</i>, two syllables. An English reading that starts "kuh-RAH" has added a vowel the word does not have. <b>barszcz</b>, beet soup, is one syllable: <i>bahrshch</i>. The <b>r</b> is still a tap. The line writes r and then the consonants. <b>ó</b> in Kraków is still <i>oo</i>, and the final <b>w</b> is still <i>f</i>.</p>
{{ex:Kraków|KRAH-koof|Kraków}}
{{ex:barszcz|bahrshch|barszcz, beet soup}}
<p>Two syllables you already know follow the same rule. <b>proszę</b> is stressed on the first syllable, because that syllable is the next to last. <b>on</b> is the masculine form, <b>ona</b> is the feminine form, and <b>ono</b> is the neuter form. <b>jest</b> still means "is".</p>
{{ex:proszę|PROH-sheh|Please. You're welcome.}}
{{ex:On jest.|ohn yehst|He is.}}
{{ex:Ona jest.|OH-nah yehst|She is.}}
<div class="tip"><b>Most common mistake:</b> a vowel stuffed into the cluster, and the stress pulled onto the first syllable. <b>kuh-RAH-koof</b> → <b>Kraków</b>, <i>KRAH-koof</i>.</div>
`,
    check: [
      ["Where is the stress in Warszawa?", ["On the first syllable", "On the next-to-last syllable", "On the last syllable", "On the first and the last"], 1, "The ordinary rule is the next-to-last syllable: vahr-SHAH-vah."],
      ["Where is the careful stress in muzyka?", ["On the last syllable", "On the next-to-last syllable", "On the third syllable from the end", "It is not marked"], 2, "muzyka means music. Careful stress sits on MOO, the third syllable from the end."],
      ["How do you read the cluster in Kraków?", ["Insert a vowel: kuh-RAH-koof", "KRAH-koof, with no extra vowel", "Stress the last syllable and say the ó as oh", "Add an l, because ł and l are the same"], 1, "Kraków is two syllables, KRAH-koof. The k and the r stay together, and ó is oo."]
    ],
    practice: [
      ["mc", "Which syllable is stressed in Warszawa?", "the next to last, SHAH", "the first, vahr", "the last, vah", "both vahr and vah", "Warszawa takes the ordinary stress, on the next-to-last syllable."],
      ["mc", "muzyka, the careful stress, falls on…", "MOO, third from the end", "zih, the next to last", "kah, the last", "no syllable", "Careful stress on muzyka, music, sits on the third syllable from the end."],
      ["mc", "Which reading inserts a vowel into Kraków?", "kuh-RAH-koof", "KRAH-koof", "WOOT-kah", "bahrshch", "Kraków is KRAH-koof. The cluster has no extra vowel."],
      ["mc", "How many syllables does barszcz have?", "one", "two", "three", "four", "barszcz is one syllable, bahrshch. The consonants stay together."],
      ["mc", "Dzień dobry has…", "a stress on each word", "one stress, on dzień only", "one stress, on dobry's last letter", "no stressed syllable", "Each word keeps its own stress: jyehny DOH-brih."],
      ["or", "He is. (start with On)", "On jest", "Ona", "On is the masculine form."],
      ["or", "She is. (start with Ona)", "Ona jest", "On", "Ona is the feminine form."],
      ["or", "Good morning. (start with Dzień)", "Dzień dobry", "dobra", "Each word keeps its own stress. dobry is the masculine form, and it agrees with dzień."],
      ["fi", "Krak__", "Kraków", "ów", "ow|uf|ov", "The cluster stays together, and ó is oo, so the ending is ów.", "!strict"],
      ["fi", "Dzień __.", "Good morning.", "dobry", "dobra|wieczór|Dobranoc", "dobry is the masculine form. It agrees with dzień."],
      ["fi", "__ jest.", "It is.", "Ono", "On|Ona|Jestem", "Ono is the neuter form."],
      ["ty", "He is. (start with On)", "On jest.", "on · jest", "Ona", "On is the masculine form."],
      ["ty", "She is. (start with Ona)", "Ona jest.", "ona · jest", "On", "Ona is the feminine form."],
      ["ty", "music", "muzyka", "muzyka · careful stress on MOO", "muzyki", "muzyka means music. Careful stress falls on the third syllable from the end."]
    ]
  },
  {
    id: "greetings",
    title: "Hello, please and thank you",
    blurb: "Greet a stranger from morning through night, say please and thank you, and save Dobranoc for someone who is going to sleep.",
    deck: "Greetings and courtesy",
    body: `
<p>English changes the hello with the clock: good morning, good afternoon, good evening, good night. Polish uses fewer hellos, and one of them does two jobs.</p>
<h3>Morning, afternoon, and when it is dark</h3>
<p><b>Dzień dobry</b> is good morning and good afternoon. The words do not change at noon. There is no separate afternoon hello, and <b>Dobrego popołudnia</b> is not the greeting. <b>Dobry wieczór</b> is good evening, the hello for when it is dark. It is at home in private company. With a stranger, <b>Dzień dobry</b> is also a safe hello, including after dark, because you do not have to decide whether evening has started. Late at night, if the person is still up, the hello is still <b>Dobry wieczór</b>. There is no separate late-night hello.</p>
{{ex:Dzień dobry.|jyehny DOH-brih|Good morning. Good afternoon.}}
{{ex:Dobry wieczór.|DOH-brih VYEH-choor|Good evening.}}
<p>The adjective agrees. <b>dzień</b>, day, is masculine, so "good" is the masculine form <b>dobry</b>. <b>wieczór</b>, evening, is masculine too, so the hello is <b>Dobry wieczór</b>. Night, <b>noc</b>, is feminine. Good night is one word, <b>Dobranoc</b>, built from the feminine form <b>dobra</b> plus <b>noc</b>.</p>
<h3>Good night is not goodbye</h3>
<p><b>Dobranoc</b> is what you say when you have reason to think the person will soon go to sleep. It is a private good night. It is not the goodbye in a shop, and it is not the banner hello for late night. Said to a shopkeeper hours before closing, it can sound like a joke at their expense. To a stranger, goodbye is <b>Do widzenia</b>.</p>
{{ex:Dobranoc.|doh-BRAH-nohts|Good night.}}
{{ex:Do widzenia.|doh vyee-DZEH-nyah|Goodbye.}}
<h3>A friend, and the small polite words</h3>
<p><b>Cześć</b> is hello and goodbye to a friend. You recognize it. When a stranger says it, you still answer with <b>Dzień dobry</b>, and you leave with <b>Do widzenia</b>. <b>Dziękuję</b> is thank you. It is also the safe reply when someone pays you a compliment. <b>Proszę</b> is please, and it is also you're welcome. <b>Przepraszam</b> is excuse me and I'm sorry.</p>
{{ex:Cześć.|chehsh'ch'|Hi. Bye. To a friend.}}
{{ex:Dziękuję.|jyehng-KOO-yeh|Thank you.}}
{{ex:Proszę.|PROH-sheh|Please. You're welcome.}}
{{ex:Przepraszam.|psheh-PRAH-shahm|Excuse me. I'm sorry.}}
<div class="tip"><b>Most common mistake:</b> <b>Dobranoc</b> as a shop goodbye, and an afternoon hello that Polish does not use. <b>Dobranoc</b> on the way out of a shop → <b>Do widzenia</b>, and <b>Dobrego popołudnia</b> → <b>Dzień dobry</b>.</div>
`,
    check: [
      ["It is the middle of the afternoon. You walk into a shop. What do you say?", ["Dzień dobry.", "Dobry wieczór.", "Dobranoc.", "Dobrego popołudnia."], 0, "Afternoon uses the same hello as the morning: Dzień dobry. Dobrego popołudnia is not the greeting."],
      ["Someone says Dziękuję. What do you answer?", ["Dobranoc.", "Przepraszam.", "Proszę.", "Do widzenia."], 2, "Proszę is you're welcome, and it is also please."],
      ["It is midnight. A guest is still up, not going to sleep. The hello is…", ["Dobranoc.", "Dobry wieczór.", "Dobrego popołudnia.", "Do widzenia."], 1, "Late night has no separate hello. Dobry wieczór is the one. Dobranoc waits until someone will soon sleep."]
    ],
    practice: [
      ["mc", "It is the afternoon. You walk into a shop.", "Dzień dobry.", "Dobry wieczór.", "Dobranoc.", "Dobrego popołudnia.", "Afternoon is Dzień dobry, the same words as the morning."],
      ["mc", "You are leaving a shop.", "Do widzenia.", "Dobranoc.", "Dzień dobry.", "Cześć.", "A stranger's goodbye is Do widzenia. Dobranoc is for someone about to sleep."],
      ["mc", "Someone says Dziękuję. You answer…", "Proszę.", "Dobranoc.", "Przepraszam.", "Do widzenia.", "Proszę is you're welcome, and it is also please."],
      ["mc", "You bump into someone.", "Przepraszam.", "Proszę.", "Dziękuję.", "Cześć.", "Przepraszam is excuse me and I'm sorry."],
      ["mc", "Which line do you only recognize, from a friend?", "Cześć.", "Dzień dobry.", "Do widzenia.", "Dziękuję.", "Cześć is the friend's hello and goodbye. A stranger gets Dzień dobry."],
      ["or", "Good morning. (start with Dzień)", "Dzień dobry", "dobra", "dobry is the masculine form. It agrees with dzień."],
      ["or", "Good evening at home, when it is dark. (start with Dobry)", "Dobry wieczór", "dobra", "wieczór is masculine, so the adjective is the masculine form."],
      ["or", "Goodbye to a stranger. (start with Do)", "Do widzenia", "Dobranoc", "Do widzenia is the goodbye to a stranger. Dobranoc is for someone who will soon sleep."],
      ["fi", "__ dobry.", "Good afternoon.", "Dzień", "Dzien|Dobry|Dobranoc", "Afternoon is still Dzień dobry. The mark on ń stays.", "!strict"],
      ["fi", "Dobry __.", "Good evening, at home, when it is dark.", "wieczór", "wieczor|dzień|noc", "wieczór is masculine, so the hello is Dobry wieczór.", "!strict"],
      ["fi", "Do __.", "Goodbye to a stranger.", "widzenia", "dobranoc|dobry|proszę", "Do widzenia is the stranger's goodbye."],
      ["ty", "Good evening at home, when it is dark. (start with Dobry)", "Dobry wieczór.", "dobry · wieczór", "dobra", "wieczór is masculine, so this is the masculine form."],
      ["ty", "Good night. (someone is about to sleep)", "Dobranoc.", "dobranoc · noc is feminine", "Do", "noc is feminine, so the feminine form is built into the one word Dobranoc."],
      ["ty", "Thank you.", "Dziękuję.", "dziękuję", "Proszę", "Dziękuję is thank you. Proszę is please and you're welcome."]
    ]
  },
  {
    id: "pan-pani",
    title: "pan and pani",
    blurb: "Speak to a man or a woman with pan or pani and a third-person verb, and recognize what a friend says.",
    deck: "Formal and informal",
    body: `
<p>English has one word, "you". Every "you" you produce in this course is <b>pan</b> or <b>pani</b> plus a third-person verb. <b>pan</b> is for a man. <b>pani</b> is for a woman. The verb is the same form you already use with <b>on</b> and <b>ona</b>. It agrees with <b>pan</b>, and it agrees with <b>pani</b>.</p>
{{ex:Pan jest.|pahn yehst|You are. (to a man)}}
{{ex:Pani jest.|PAH-nyee yehst|You are. (to a woman)}}
<p><b>Pan jest</b> is the line. <b>Pan jesteś</b> puts the friend's verb on <b>pan</b>. That mix is the mistake. Write <b>pan</b> and <b>pani</b> in lowercase, except when they start the sentence. A capital <b>Pan</b> turns up in letters, as a courtesy. Letters are not the drill. A capital answer still counts, because the course ignores capitals.</p>
<h3>Questions you can say today</h3>
<p><b>Czy</b> is the little word that makes a yes-no question. <b>Czy pani mówi po angielsku?</b> is "Do you speak English?" to a woman. <b>mówi</b> agrees with <b>pani</b>. <b>po angielsku</b> is a chunk, "in English". <b>po polsku</b> is "in Polish". <b>Pan jest z Krakowa</b> is "You are from Kraków", to a man. <b>Pani jest z Warszawy</b> is the same sentence to a woman. <b>z Krakowa</b> and <b>z Warszawy</b> are chunks. The next lesson lines up the rest of "to be".</p>
{{ex:Czy pani mówi po angielsku?|chih PAH-nyee MOO-vyee poh ahny-GYEHL-skoo|Do you speak English?}}
{{ex:Pan jest z Krakowa.|pahn yehst s krah-KOH-vah|You are from Kraków.}}
{{ex:Pani jest z Warszawy.|PAH-nyee yehzd z vahr-SHAH-vih|You are from Warsaw.}}
{{ex:Czy pan mówi po polsku?|chih pahn MOO-vyee poh POHL-skoo|Do you speak Polish?}}
<h3>What you only recognize</h3>
<p>A friend says <b>Masz czas?</b> for "Do you have time?" You recognize it. The question you ask a man is <b>Czy pan ma czas?</b> <b>ma</b> agrees with <b>pan</b>. A friend also says <b>Cześć</b>. You still answer a stranger with <b>Dzień dobry</b>. <b>Dzień dobry pani</b> is the same hello aimed at a woman. Someone may offer to switch: <b>Możemy mówić sobie na ty?</b> You recognize the offer. You do not type <b>ty</b> as your own "you", and you wait for the offer before you follow it. For more than one person you may hear <b>państwo</b>, <b>panowie</b>, and <b>panie</b>. Recognize them. In a letter you may see <b>Panie</b>, the vocative, the calling form. Recognize that too. You do not drill it.</p>
{{ex:Czy pan ma czas?|chih pahn mah chahs|Do you have time?}}
{{ex:Masz czas?|mahsh chahs|Do you have time? (a friend says this)}}
{{ex:Dzień dobry pani.|jyehny DOH-brih PAH-nyee|Good morning. Good afternoon. (to a woman)}}
{{ex:Możemy mówić sobie na ty?|moh-ZHEH-mih MOO-vyeech' SOH-byeh nah tih|Shall we use the friend's you?}}
<h3>The thanks line</h3>
<p>Thank you to a woman is <b>Dziękuję pani</b>. <b>Dziękuję panią</b> is the wrong case. You see that pair once. The form thank-you actually takes is the dative, the recipient, and you are not drilling that case. Learn the one line. You may hear <b>Dziękuję panu</b> to a man. That is not a chart to memorize. <b>Dziękuję</b> on its own is safe for anyone.</p>
{{ex:Dziękuję pani.|jyehng-KOO-yeh PAH-nyee|Thank you. (to a woman)}}
<div class="tip"><b>Most common mistake:</b> the friend's verb on pan. <b>Pan jesteś</b> → <b>Pan jest</b>.</div>
`,
    check: [
      ["You tell a man he is from Kraków. Which line do you say?", ["Pan jest z Krakowa.", "Pan jesteś z Krakowa.", "Ty jesteś z Krakowa.", "Pan są z Krakowa."], 0, "pan takes the third person. The verb agrees with pan: Pan jest, never Pan jesteś."],
      ["How do you say thank you to a woman?", ["Dziękuję panią.", "Dziękuję pan.", "Dziękuję pani.", "Masz pani."], 2, "The thanks line is Dziękuję pani. Dziękuję panią is the wrong case, and you do not drill a chart from it."],
      ["A friend says Masz czas? What do you ask a man?", ["Masz czas?", "Czy ty ma czas?", "Czy pan jesteś czas?", "Czy pan ma czas?"], 3, "You recognize Masz czas. The question you produce is Czy pan ma czas. ma agrees with pan."]
    ],
    practice: [
      ["mc", "Do you speak English? (to a woman)", "Czy pani mówi po angielsku?", "Czy pani mówisz po angielsku?", "Czy ty mówi po angielsku?", "Pani jesteś po angielsku?", "pani takes the third person. The verb agrees with pani."],
      ["mc", "You are from Kraków. (to a man)", "Pan jest z Krakowa.", "Pan jesteś z Krakowa.", "Ty jest z Krakowa.", "Pan są z Krakowa.", "The verb agrees with pan. Pan jest is the line you produce."],
      ["mc", "A friend says this. You recognize it.", "Masz czas?", "Czy pan ma czas?", "Pan jest.", "Dziękuję pani.", "Masz czas is what a friend says. You ask Czy pan ma czas."],
      ["mc", "Thank you. (to a woman)", "Dziękuję pani.", "Dziękuję panią.", "Dziękuję ty.", "Pan dziękuję.", "pani is the feminine form in the thanks line. Dziękuję panią is the wrong case."],
      ["mc", "Which offer do you only recognize?", "Możemy mówić sobie na ty?", "Pan jest z Krakowa.", "Czy pan ma czas?", "Dzień dobry pani.", "The offer to switch is recognition only. You do not type ty as your own you."],
      ["or", "You are from Kraków. (to a man, start with Pan)", "Pan jest z Krakowa", "jesteś", "The verb agrees with pan."],
      ["or", "Do you speak English? (to a woman, start with Czy pani)", "Czy pani mówi po angielsku", "mówisz", "pani is the feminine form, and the verb agrees with pani."],
      ["or", "Thank you. (to a woman, start with Dziękuję)", "Dziękuję pani", "panią", "pani is the feminine form. Dziękuję panią is the wrong case."],
      ["fi", "Pan __ z Krakowa.", "You are from Kraków. (to a man)", "jest", "jesteś|ma|mówi", "The verb agrees with pan. jesteś is the friend's form."],
      ["fi", "Dziękuję __.", "Thank you. (to a woman)", "pani", "panią|pan|ty", "pani is the feminine form in the thanks line."],
      ["fi", "Czy pani __ po angielsku?", "Do you speak English? (to a woman)", "mówi", "mówisz|jest|ma", "The verb agrees with pani. mówisz is the friend's form."],
      ["ty", "You are from Kraków. (to a man, start with Pan)", "Pan jest z Krakowa.", "pan · jest · z Krakowa", "jesteś", "The verb agrees with pan."],
      ["ty", "Do you have time? (to a man, start with Czy pan)", "Czy pan ma czas?", "czy · pan · ma · czas", "masz", "The verb agrees with pan. A friend says Masz czas."],
      ["ty", "Thank you. (to a woman, include pani)", "Dziękuję pani.", "dziękuję · pani", "panią", "pani is the feminine form."]
    ]
  },
  {
    id: "byc",
    title: "być",
    blurb: "Use the forms of być, keep jest in To jest, and leave jesteś for a friend to say.",
    deck: "About me",
    body: `
<p>English "to be" has am, are, and is. Polish <b>być</b> has a form for each person. Once you know the set, the form itself tells you who is meant, so the little pronoun can stay or go.</p>
<div class="tbl"><table><tr><th>Who</th><th>Form</th><th>What you do</th></tr><tr><td>I</td><td class="k">jestem</td><td>say this</td></tr><tr><td>a friend, one person</td><td class="k">jesteś</td><td>recognize</td></tr><tr><td>he, she, it, pan, pani</td><td class="k">jest</td><td>say this</td></tr><tr><td>we</td><td class="k">jesteśmy</td><td>say this</td></tr><tr><td>a friend, to a group</td><td class="k">jesteście</td><td>recognize</td></tr><tr><td>they</td><td class="k">są</td><td>say this</td></tr></table></div>
{{ex:Jestem.|YEH-stehm|I am.}}
{{ex:Jesteśmy.|yeh-STEH-sh'mih|We are.}}
{{ex:Są.|sohN|They are.}}
<h3>The friend's forms stay on the friend's side</h3>
<p><b>jesteś</b> is "you are" from a friend. You recognize it. You do not type it. The "you" you produce is still <b>pan</b> or <b>pani</b> plus <b>jest</b>. The verb agrees with <b>pan</b>, and it agrees with <b>pani</b>, the same way it agrees with <b>on</b> and <b>ona</b>. <b>on</b> is the masculine form. <b>ona</b> is the feminine form. <b>ono</b> is the neuter form. All three take <b>jest</b>. <b>jesteście</b> is what a friend says to a group. Recognize it, the way you recognize <b>jesteś</b>. Do not type it.</p>
{{ex:On jest.|ohn yehst|He is.}}
{{ex:Ona jest.|OH-nah yehst|She is.}}
{{ex:Ono jest.|OH-noh yehst|It is.}}
{{ex:Pan jest.|pahn yehst|You are. (to a man)}}
{{ex:Jesteś.|YEH-stehsh'|You are. (a friend says this)}}
{{ex:Jesteście.|yeh-STEH-sh'chyeh|You are. (a friend says this to a group)}}
<h3>To jest keeps jest</h3>
<p><b>To jest Marek</b> means "This is Marek". <b>To jest Anna</b> means "This is Anna". <b>jest</b> stays in the sentence you produce. A short line with no <b>jest</b> is heard. This course keeps <b>jest</b>. <b>ja</b> means "I". You can say <b>Ja jestem</b> when you want to point at yourself. Most of the time <b>jestem</b> alone is the whole sentence. Alone, <b>jest</b> is <i>yehst</i>. In a full line the aid may change that sound. Read the whole line. The next lesson puts two lines side by side.</p>
{{ex:To jest Marek.|toh yehst MAH-rehk|This is Marek.}}
{{ex:To jest Anna.|toh yehst AHN-nah|This is Anna.}}
<div class="tip"><b>Most common mistake:</b> dropping jest, on the model of a language that leaves it out. <b>Jest Marek</b> → <b>To jest Marek</b>.</div>
`,
    check: [
      ["How do you say This is Marek?", ["Jest Marek.", "To jest Marek.", "To jesteś Marek.", "Jestem Marek."], 1, "Polish keeps jest. To jest Marek is the line."],
      ["Which form do you type for I am?", ["jestem", "jesteś", "jest", "są"], 0, "I am is jestem. jesteś is the friend's form, and you only recognize it."],
      ["Which form do you only recognize?", ["jestem", "jesteśmy", "jesteś", "są"], 2, "jesteś is what a friend says. You produce jestem, jest, jesteśmy, and są."]
    ],
    practice: [
      ["mc", "I am.", "Jestem.", "Jesteś.", "Jest.", "Są.", "The form for I is jestem. You do not type jesteś."],
      ["mc", "This is Anna.", "To jest Anna.", "Jest Anna.", "To jesteś Anna.", "Jestem Anna.", "Polish keeps jest: To jest Anna."],
      ["mc", "We are.", "Jesteśmy.", "Jesteście.", "Są.", "Jest.", "We takes jesteśmy. jesteście is what a friend says to a group."],
      ["mc", "He is.", "On jest.", "On jesteś.", "Ona jest.", "Ja jest.", "On is the masculine form, and the verb agrees with on."],
      ["mc", "They are.", "Są.", "Jest.", "Jestem.", "Jesteś.", "For they, the form is są. The next lesson splits oni and one."],
      ["or", "This is Marek. (start with To)", "To jest Marek", "jesteś", "Polish keeps jest in To jest Marek."],
      ["or", "He is. (start with On)", "On jest", "jesteś", "On is the masculine form. The verb agrees with on."],
      ["or", "She is. (start with Ona)", "Ona jest", "jestem", "Ona is the feminine form. The verb agrees with ona."],
      ["fi", "To __ Marek.", "This is Marek.", "jest", "jesteś|jestem|są", "Polish keeps jest. To jest Marek."],
      ["fi", "__ jest.", "She is.", "Ona", "On|Ono|Jesteś", "Ona is the feminine form."],
      ["fi", "Ja __.", "I am.", "jestem", "jesteś|jest|są", "With ja, the form is jestem. jesteś is the friend's form."],
      ["ty", "I am.", "Jestem.|Ja jestem.", "jestem · I", "jesteś", "The form for I is jestem."],
      ["ty", "He is. (start with On)", "On jest.", "on · jest", "jesteś", "On is the masculine form. The verb agrees with on."],
      ["ty", "She is. (start with Ona)", "Ona jest.", "ona · jest", "jestem", "Ona is the feminine form."]
    ]
  },
  {
    id: "intro",
    title: "My name and where I'm from",
    blurb: "Give your name, say which city you are from, and introduce Anna, Marek, or Ewa.",
    deck: "About me",
    body: `
<p>Two sentences introduce you. <b>Mam na imię Anna</b> is "My name is Anna". <b>Mam na imię Marek</b> is "My name is Marek". The name stays in its base form. Anna does not grow an ending in this line. Use <b>Mam na imię</b>. You can put <b>ja</b> in front, <b>Ja mam na imię Anna</b>, when you are pointing at yourself. The short line is the ordinary one.</p>
{{ex:Mam na imię Anna.|mahm nah EE-myeh AHN-nah|My name is Anna.}}
{{ex:Mam na imię Marek.|mahm nah EE-myeh MAH-rehk|My name is Marek.}}
<h3>From Poland, and from a city</h3>
<p><b>Jestem z Polski</b> is "I'm from Poland". <b>z Polski</b> is a chunk. The city chunks work the same way. Learn each one as a piece. Do not rebuild a chunk from the base form of the city name, and do not put an English spelling inside the Polish sentence. The cities in this course are Warszawa, Kraków, Wrocław, Gdańsk, and Poznań.</p>
<div class="tbl"><table><tr><th>English</th><th>The chunk</th></tr><tr><td>from Poland</td><td class="k">z Polski</td></tr><tr><td>from Kraków</td><td class="k">z Krakowa</td></tr><tr><td>from Warsaw</td><td class="k">z Warszawy</td></tr><tr><td>from Wrocław</td><td class="k">z Wrocławia</td></tr><tr><td>from Gdańsk</td><td class="k">z Gdańska</td></tr><tr><td>from Poznań</td><td class="k">z Poznania</td></tr></table></div>
<p>The city name <b>Kraków</b> has <b>ó</b>. The chunk <b>z Krakowa</b> has a plain <b>o</b>. Learn the chunk as you see it. <b>Jestem z Warszawy</b> keeps a buzz on the <b>z</b>, because <b>Warszawa</b> starts with <b>w</b>. <b>Jestem z Polski</b> has an <b>s</b> sound, because <b>Polski</b> starts with <b>p</b>.</p>
{{ex:Jestem z Polski.|YEH-stehm s POHL-skyee|I'm from Poland.}}
{{ex:Jestem z Krakowa.|YEH-stehm s krah-KOH-vah|I'm from Kraków.}}
{{ex:Jestem z Warszawy.|YEH-stehm z vahr-SHAH-vih|I'm from Warsaw.}}
<h3>This is, he is, she is</h3>
<p><b>To jest Marek</b> and <b>To jest Kasia</b> keep <b>jest</b>, as in the last lesson. <b>On jest z Krakowa</b> uses <b>on</b>, the masculine form. <b>Ona jest z Warszawy</b> uses <b>ona</b>, the feminine form. Read the whole line, not the word <b>jest</b> by itself. In <b>On jest z Krakowa</b> the aid keeps <b>jest</b> quiet, <i>yehst</i>, and <b>z</b> sounds like <i>s</i>, because Kraków starts with <b>k</b>. In <b>Ona jest z Warszawy</b> the aid buzzes, <i>yehzd</i>, and <b>z</b> stays <i>z</i>, because Warszawa starts with <b>w</b>, and <b>w</b> does not switch the buzz off. That is the Warsaw habit this course shows. In Kraków you may hear the buzz in more places. The aid shows the Warsaw habit.</p>
{{ex:To jest Kasia.|toh yehst KAH-shyah|This is Kasia.}}
{{ex:On jest z Krakowa.|ohn yehst s krah-KOH-vah|He is from Kraków.}}
{{ex:Ona jest z Warszawy.|OH-nah yehzd z vahr-SHAH-vih|She is from Warsaw.}}
{{ex:Ewa jest z Gdańska.|EH-vah yehzd z GDAHNY-skah|Ewa is from Gdańsk.}}
{{ex:Piotr jest z Poznania.|pyohtr yehst s poh-ZNAH-nyah|Piotr is from Poznań.}}
{{ex:Tomek jest z Wrocławia.|TOH-mehk yehzd z vrohts-WAH-vyah|Tomek is from Wrocław.}}
<p>The names you keep meeting are Anna, Kasia, Piotr, Tomek, Ewa, and Marek. <b>Ja jestem z Polski</b> is the same sentence as <b>Jestem z Polski</b>, with <b>ja</b> added for emphasis.</p>
<div class="tip"><b>Most common mistake:</b> an English place name inside the Polish sentence. <b>Jestem z Chicago</b> → <b>Jestem z Polski</b>.</div>
`,
    check: [
      ["How do you say My name is Anna?", ["Jestem na imię Anna.", "Mam na imię Annę.", "Mam na imię Anna.", "To jest Anna."], 2, "Mam na imię Anna. The name stays in its base form. To jest Anna means this is Anna."],
      ["How do you say I'm from Kraków?", ["Jestem z Kraków.", "Jestem Kraków.", "Jestem z Chicago.", "Jestem z Krakowa."], 3, "The chunk is z Krakowa, with a plain o. The city name Kraków keeps the ó."],
      ["How do you say She is from Warsaw?", ["Ona jest z Warszawa.", "Ona jest z Warszawy.", "On jest z Warszawy.", "Ona jest Warszawa."], 1, "Ona is the feminine form, and from Warsaw is the chunk z Warszawy."]
    ],
    practice: [
      ["mc", "My name is Marek.", "Mam na imię Marek.", "Mam na imię Marka.", "Jestem imię Marek.", "To jest Marek.", "Mam na imię Marek. The name stays in the base form. To jest Marek means this is Marek."],
      ["mc", "I'm from Poland.", "Jestem z Polski.", "Jestem z Polska.", "Jestem z Chicago.", "Jestem Polska.", "From Poland is the chunk z Polski. An English city name does not go in the Polish sentence."],
      ["mc", "He is from Kraków.", "On jest z Krakowa.", "On jest z Kraków.", "Ona jest z Krakowa.", "On jest Krakowa.", "On is the masculine form, and the chunk is z Krakowa."],
      ["mc", "This is Kasia.", "To jest Kasia.", "Jest Kasia.", "Mam na imię Kasia.", "Kasia jestem.", "This is Kasia keeps jest: To jest Kasia. Mam na imię Kasia means my name is Kasia."],
      ["mc", "Ewa is from Gdańsk.", "Ewa jest z Gdańska.", "Ewa jest z Gdańsk.", "Ewa jest z Chicago.", "On jest z Gdańska.", "The chunk is z Gdańska, and Ewa takes jest."],
      ["or", "She is from Warsaw. (start with Ona)", "Ona jest z Warszawy", "On", "Ona is the feminine form."],
      ["or", "He is from Kraków. (start with On)", "On jest z Krakowa", "Ona", "On is the masculine form."],
      ["or", "I'm from Poland. (start with Jestem)", "Jestem z Polski", "Polska", "z Polski is the chunk. Polska is the base form, and it does not fit after z."],
      ["fi", "Mam na __ Anna.", "My name is Anna.", "imię", "imie|nazwa|jest", "The name line is Mam na imię Anna.", "!strict"],
      ["fi", "Jestem z __.", "I'm from Poland.", "Polski", "Polska|Warszawa|Chicago", "From Poland is the chunk z Polski."],
      ["fi", "On jest z __.", "He is from Kraków.", "Krakowa", "Kraków|Warszawy|Polski", "The chunk is z Krakowa, with a plain o."],
      ["ty", "My name is Anna. (use Mam na imię, start with Mam)", "Mam na imię Anna.|Ja mam na imię Anna.", "mam · na imię · Anna", "jestem", "The name stays in the base form after Mam na imię."],
      ["ty", "She is from Warsaw. (start with Ona)", "Ona jest z Warszawy.", "ona · jest · Warszawy", "On", "Ona is the feminine form."],
      ["ty", "He is from Kraków. (start with On)", "On jest z Krakowa.", "on · jest · Krakowa", "Ona", "On is the masculine form."]
    ]
  },
  {
    id: "gender",
    title: "on, ona, ono",
    blurb: "Match on, ona, and ono, choose mój or moja, and pick oni or one for a group.",
    deck: "People and family",
    body: `
<p>English "my" never changes, and English "they" is one word. Polish "my" changes with the noun, and Polish "they" splits in two. The pronoun and the word for "my" agree with the noun.</p>
<h3>Three for one person or one thing</h3>
<p><b>on</b> is he, the masculine form. <b>ona</b> is she, the feminine form. <b>ono</b> is it, the neuter form. You already know <b>jest</b> with all three. A brother is <b>brat</b>. <b>brat</b> means brother. English spells a rude child with the same letters. In Polish, <b>brat</b> is a family word. My brother is <b>mój brat</b>. <b>mój</b> is the masculine form of "my". A sister is <b>siostra</b>. My sister is <b>moja siostra</b>. <b>moja</b> is the feminine form. A child is <b>dziecko</b>. A child is neuter, so the pronoun is <b>ono</b>, and "my" is <b>moje</b>, the neuter form. One shape of "my" does not fit every noun.</p>
<div class="tbl"><table><tr><th></th><th>Pronoun</th><th>Example</th></tr><tr><td>masculine</td><td class="k">on</td><td class="k">mój brat</td></tr><tr><td>feminine</td><td class="k">ona</td><td class="k">moja siostra</td></tr><tr><td>neuter</td><td class="k">ono</td><td class="k">moje dziecko</td></tr><tr><td>a group with a man</td><td class="k">oni</td><td class="k">Marek i Anna</td></tr><tr><td>a group with no man</td><td class="k">one</td><td class="k">Anna i Ewa</td></tr></table></div>
{{ex:To jest mój brat.|toh yehst mooy braht|This is my brother.}}
{{ex:To jest moja siostra.|toh yehst MOH-yah SHYOH-strah|This is my sister.}}
{{ex:To jest moje dziecko.|toh yehst MOH-yeh JYEHTS-koh|This is my child.}}
<p>Keep <b>jest</b> in <b>To jest mój brat</b>. <b>ma</b> is the word you met in <b>Czy pan ma czas</b>. Here it means "has" in the name line. <b>Moja siostra ma na imię Ewa</b>. <b>Mój brat ma na imię Marek</b>. The possessive agrees with the noun, and the name stays in its base form.</p>
{{ex:Moja siostra ma na imię Ewa.|MOH-yah SHYOH-strah mah nah EE-myeh EH-vah|My sister's name is Ewa.}}
{{ex:Mój brat ma na imię Marek.|mooy braht mah nah EE-myeh MAH-rehk|My brother's name is Marek.}}
<h3>A group</h3>
<p><b>i</b> means "and". A group that includes a man is <b>oni</b>, the plural form. Marek and Anna together are <b>oni</b>. A group with no man is <b>one</b>, the plural form for that group. Anna and Ewa together are <b>one</b>. The verb for both is <b>są</b>. <b>Oni są z Warszawy</b>. <b>One są z Krakowa</b>. The chunk after <b>z</b> is the same piece you learned for "from".</p>
{{ex:Oni są z Warszawy.|OH-nyee sohN z vahr-SHAH-vih|They are from Warsaw. (the group includes a man)}}
{{ex:One są z Krakowa.|OH-neh sohN s krah-KOH-vah|They are from Kraków. (no man in the group)}}
<div class="tip"><b>Most common mistake:</b> one form of "my" for every noun. <b>Mój siostra</b> → <b>Moja siostra</b>.</div>
`,
    check: [
      ["How do you say This is my sister?", ["To jest mój siostra.", "To jest moje siostra.", "To jest moja siostra.", "To moja siostra."], 2, "siostra is feminine, so my is the feminine form moja, and jest stays: To jest moja siostra."],
      ["Anna and Marek are together. Which pronoun fits the group?", ["oni", "one", "ona", "on"], 0, "The group includes a man, so the plural form is oni."],
      ["What does brat mean?", ["a rude child", "sister", "father", "brother"], 3, "brat means brother. The English word with the same letters is a different meaning."]
    ],
    practice: [
      ["mc", "my brother", "mój brat", "moja brat", "moje brat", "mój siostra", "brat is masculine, so my is the masculine form mój."],
      ["mc", "my sister", "moja siostra", "mój siostra", "moje siostra", "moja brat", "siostra is feminine, so my is the feminine form moja."],
      ["mc", "Anna and Ewa", "one", "oni", "ona", "on", "A group with no man takes one, the plural form."],
      ["mc", "Marek and Piotr", "oni", "one", "on", "ono", "A group that includes a man takes oni, the plural form."],
      ["mc", "my child", "moje dziecko", "mój dziecko", "moja dziecko", "moje siostra", "dziecko is neuter, so my is the neuter form moje."],
      ["or", "This is my brother. (start with To jest)", "To jest mój brat", "moja", "mój is the masculine form. It agrees with brat."],
      ["or", "This is my sister. (start with To jest)", "To jest moja siostra", "mój", "moja is the feminine form. It agrees with siostra."],
      ["or", "They are from Warsaw. (Anna and Marek, start with Oni)", "Oni są z Warszawy", "One", "A group with a man takes oni, the plural form."],
      ["fi", "To jest __ brat.", "This is my brother.", "mój", "moja|moje|moj", "mój is the masculine form.", "!strict"],
      ["fi", "To jest __ siostra.", "This is my sister.", "moja", "mój|moje|moją", "moja is the feminine form.", "!strict"],
      ["fi", "__ są z Krakowa.", "They are from Kraków. (Anna and Ewa)", "One", "Oni|Ona|On", "A group of women takes one, the plural form."],
      ["ty", "This is my brother. (start with To jest)", "To jest mój brat.", "mój · brat · brother", "moja", "mój is the masculine form. It agrees with brat."],
      ["ty", "This is my sister. (start with To jest)", "To jest moja siostra.", "moja · siostra", "mój", "moja is the feminine form. It agrees with siostra."],
      ["ty", "They are from Kraków. (Anna and Ewa, start with One)", "One są z Krakowa.", "one · są · Krakowa", "Oni", "A group of women takes one, the plural form."]
    ]
  },
  {
    id: "adjectives",
    title: "Adjectives that agree",
    blurb: "Make dobry, ładny, and pyszny agree with the noun, give a short compliment, and answer it with Dziękuję.",
    deck: "Compliments",
    body: `
<p>English adjectives keep one form: good coffee, a good day, good milk. Polish adjectives agree with the noun. You change the ending. In a short compliment the adjective comes first, then the noun, the same order English uses. The new part is the ending, not the position. A full sentence puts the adjective after <b>jest</b> or <b>są</b>, and it still agrees.</p>
<h3>Three endings for one noun</h3>
<p><b>kawa</b>, coffee, is feminine, so "good" is the feminine form <b>dobra</b>. <b>Dobra kawa</b>. <b>Kawa jest dobra</b>. <b>dzień</b>, day, is masculine, so a beautiful day is <b>Ładny dzień</b>, the masculine form, and <b>Dzień jest ładny</b>. <b>mleko</b>, milk, is neuter, like <b>ono</b>. <b>Mleko jest dobre</b>. <b>dobre</b> is the neuter form. The same three endings work for <b>pyszny</b>, "delicious", and for <b>wysoki</b>, "tall".</p>
{{ex:Dobra kawa.|DOH-brah KAH-vah|Good coffee.}}
{{ex:Ładny dzień.|WAHD-nih jyehny|A beautiful day.}}
{{ex:Kawa jest dobra.|KAH-vah yehzd DOH-brah|The coffee is good.}}
{{ex:Dzień jest ładny.|jyehny yehst WAHD-nih|The day is beautiful.}}
{{ex:Mleko jest dobre.|MLEH-koh yehzd DOH-breh|The milk is good.}}
<p><b>Mój brat jest wysoki</b>. The adjective agrees with <b>brat</b>, so it is the masculine form. <b>Moja siostra jest wysoka</b>, the feminine form. <b>mój</b> and <b>moja</b> still agree too. The deck for this lesson is Compliments. A compliment here is an agreeing adjective: <b>Dobra kawa</b>, <b>Ładny dzień</b>, <b>Pyszne pierogi</b>.</p>
{{ex:Mój brat jest wysoki.|mooy braht yehst fih-SOH-kyee|My brother is tall.}}
{{ex:Moja siostra jest wysoka.|MOH-yah SHYOH-strah yehst fih-SOH-kah|My sister is tall.}}
{{ex:Pyszne pierogi.|PIH-shneh pyeh-ROH-gyee|Delicious pierogi.}}
<h3>More than one</h3>
<p>Look at who is in the group. A thing, or a group with no man, takes the plural form in <b>-e</b>. <b>Pierogi są pyszne</b>. <b>Anna i Ewa są wysokie</b>. A group that includes a man takes a different plural form. <b>Marek i Piotr są wysocy</b>. <b>Oni są dobrzy</b>. <b>dobrzy</b> agrees with them. The reply to a compliment is <b>Dziękuję</b>, or <b>Dziękuję bardzo</b>. You do not brush it away.</p>
{{ex:Pierogi są pyszne.|pyeh-ROH-gyee sohN PIH-shneh|The pierogi are delicious.}}
{{ex:Anna i Ewa są wysokie.|AHN-nah ee EH-vah sohN vih-SOH-kyeh|Anna and Ewa are tall.}}
{{ex:Marek i Piotr są wysocy.|MAH-rehk ee pyohtr sohN vih-SOH-tsih|Marek and Piotr are tall.}}
{{ex:Oni są dobrzy.|OH-nyee sohN DOHB-zhih|They are good. (the group includes a man)}}
{{ex:Dziękuję bardzo.|jyehng-KOO-yeh BAHR-dzoh|Thank you very much.}}
<h3>Well is not an adjective</h3>
<p><b>dobrze</b> means "well". It does not change for <b>on</b> or <b>ona</b>. <b>Dobrze pani mówi po polsku</b> is "You speak Polish well." <b>dobrze</b> is the adverb. <b>dobra</b> is the feminine form of the adjective, a different job. Read each line as a whole. After <b>jest</b>, the <b>w</b> of <b>wysoki</b> is <i>f</i> on the aid. After <b>są</b>, that <b>w</b> is <i>v</i>.</p>
{{ex:Dobrze pani mówi po polsku.|DOHB-zheh PAH-nyee MOO-vyee poh POHL-skoo|You speak Polish well.}}
<div class="tip"><b>Most common mistake:</b> an adjective that does not change. <b>Dobry kawa</b> → <b>Dobra kawa</b>.</div>
`,
    check: [
      ["How do you say good coffee, as a short compliment?", ["Dobry kawa.", "Dobre kawa.", "Dobra kawa.", "Kawa dobry."], 2, "kawa is feminine, so the adjective is the feminine form: Dobra kawa."],
      ["How do you say My brother is tall?", ["Mój brat jest wysoki.", "Mój brat jest wysoka.", "Moja brat jest wysoki.", "Mój brat są wysoki."], 0, "brat is masculine, so the adjective is the masculine form wysoki, and one brother takes jest."],
      ["How do you say You speak Polish well, to a woman?", ["Dobra pani mówi po polsku.", "Dobry pani mówi po polsku.", "Pani mówisz po polsku.", "Dobrze pani mówi po polsku."], 3, "Well is the adverb dobrze. It does not agree. pani takes mówi, the third person."]
    ],
    practice: [
      ["mc", "A beautiful day.", "Ładny dzień.", "Ładna dzień.", "Ładne dzień.", "Dobrze dzień.", "dzień is masculine, so the adjective is the masculine form ładny."],
      ["mc", "Delicious pierogi.", "Pyszne pierogi.", "Pyszny pierogi.", "Pyszna pierogi.", "Pyszni pierogi.", "pierogi are a thing, so the adjective is the plural form pyszne."],
      ["mc", "The coffee is good.", "Kawa jest dobra.", "Kawa jest dobry.", "Kawa jest dobre.", "Kawa jest dobrze.", "kawa is feminine, so the adjective is the feminine form dobra."],
      ["mc", "The milk is good.", "Mleko jest dobre.", "Mleko jest dobry.", "Mleko jest dobra.", "Mleko są dobre.", "mleko is neuter, so the adjective is the neuter form dobre."],
      ["mc", "Someone says Ładny dzień. You answer…", "Dziękuję bardzo.", "Dobrze.", "Proszę.", "Dobranoc.", "The safe reply to a compliment is Dziękuję bardzo."],
      ["or", "A beautiful day. (adjective first)", "Ładny dzień", "ładna", "ładny is the masculine form. It agrees with dzień."],
      ["or", "My sister is tall. (start with Moja)", "Moja siostra jest wysoka", "wysoki", "wysoka is the feminine form. It agrees with siostra."],
      ["or", "They are good. (Marek and Piotr, start with Oni)", "Oni są dobrzy", "dobre", "A group that includes a man takes dobrzy, the plural form. The adjective agrees with them."],
      ["fi", "__ kawa.", "Good coffee.", "Dobra", "Dobry|Dobre|Dobrze", "Dobra is the feminine form. It agrees with kawa."],
      ["fi", "Mleko jest __.", "The milk is good.", "dobre", "dobry|dobra|dobrze", "dobre is the neuter form. It agrees with mleko."],
      ["fi", "Ładny __.", "A beautiful day.", "dzień", "dzien|noc|kawa", "dzień is masculine, so the adjective in front is the masculine form ładny.", "!strict"],
      ["ty", "Good coffee. (the short compliment, adjective first)", "Dobra kawa.", "dobry · kawa", "dobry", "Dobra is the feminine form. It agrees with kawa."],
      ["ty", "My brother is tall. (start with Mój)", "Mój brat jest wysoki.", "mój · brat · wysoki", "wysoka", "wysoki is the masculine form. It agrees with brat."],
      ["ty", "They are tall. (Anna and Ewa, start with One)", "One są wysokie.", "one · są · wysoki", "wysocy", "A group of women takes the plural form wysokie. The adjective agrees with them."]
    ]
  }
];

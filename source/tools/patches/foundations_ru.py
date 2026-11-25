#!/usr/bin/env python3
# Character foundations, course en-ru (FND-1). Edits tools/target/ru/lessons-1.js; then
#   node tools/target/gen.js ru && node tools/target/validate.js ru && node tools/lessonread/apply.js en-ru
# What changes: the three letter lessons (alphabet, letters, sounds) name the flashcards of each section (`sections`).
# Pieces = the 33 letters, in the groups the lessons already use: five true friends, seven false friends, eleven new shapes,
# the soft-vowel letters, the five hushing sounds, the signs ь and ъ. Each group gets flip tiles and a card per letter
# (no existing card has a single letter as its front except я, which keeps its card in "Letters 3").
# Putting together = reading whole words letter by letter: each letter lesson gets a "Read whole words" section and a deck of
# real words that uses only the letters taught so far. From `sounds` on, the notes mark soft and hard consonants and the stress.
# `stress` is left as it is: its deck "Greetings and politeness" is greetings and polite phrases, which its sections do not teach.
# No card of an existing deck is changed. Readings are those of tools/target/ru/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'ru', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
L1, L2, L3 = "Letters 1: friends and false friends", "Letters 2: new shapes", "Letters 3: soft vowels and hushing sounds"

TF = [["а","ah","a, as in father (А а)","A true friend. Without stress it still sounds ah."],
      ["к","k","k, as in kit (К к)","A true friend: the small letter is a small К."],
      ["м","m","m (М м)","A true friend: мама."],
      ["о","oh","o, as in more (О о)","A true friend, but without stress it sounds ah: окно, ahk-NOH."],
      ["т","t","t (Т т)","A true friend: the small letter is a small Т."]]
FF = [["в","v","v (В в)","Looks like B, says v: вот."],
      ["е","yeh","ye, as in yes (Е е)","Looks like E, says ye: нет."],
      ["н","n","n (Н н)","Looks like H, says n: он."],
      ["р","r","r, tapped or rolled (Р р)","Looks like P, says r: ресторан."],
      ["с","s","s (С с)","Looks like C, always says s, never k: сок."],
      ["у","oo","oo, as in food (У у)","Looks like y, says oo: утро."],
      ["х","kh","kh, as in Bach (Х х)","Looks like X, says kh: сахар."]]
W1 = [["стакан","stah-KAHN","glass (for drinking)","с + т + а + к + а + н. С is s, Н is n."],
      ["карта","KAHR-tah","map; card","к + а + р + т + а. Р is r."],
      ["сумка","SOOM-kah","bag","с + у + м + к + а. У is oo."],
      ["рука","roo-KAH","hand; arm","р + у + к + а"],
      ["нос","nohs","nose","н + о + с"],
      ["рот","roht","mouth","р + о + т"],
      ["мост","mohst","bridge","м + о + с + т"],
      ["театр","tih-AHTR","theater","т + е + а + т + р. Both vowels are said: two syllables."],
      ["касса","KAHS-sah","cash register; ticket office","к + а + с + с + а. A double letter is held a little longer."],
      ["номер","NOH-mihr","number; hotel room","н + о + м + е + р"],
      ["ветер","VYEH-tihr","wind","в + е + т + е + р. В is v."],
      ["сестра","sihs-TRAH","sister","с + е + с + т + р + а"],
      ["страна","strah-NAH","country","с + т + р + а + н + а"],
      ["текст","tyehkst","text","т + е + к + с + т. One vowel, so one syllable."]]
NS = [["б","b","b (Б б)","A flag on top: банк. В, with two bumps, is v."],
      ["г","g","g, as in go (Г г)","Looks like an upside-down L: где."],
      ["д","d","d (Д д)","дом"],
      ["з","z","z (З з)","Not the digit 3: завтра."],
      ["и","ee","ee, as in see (И и)","A backwards N: такси."],
      ["й","y","a short y (Й й)","И with a small cap. It follows a vowel: мой."],
      ["л","l","l (Л л)","лимон"],
      ["п","p","p (П п)","Like the Greek letter pi: папа."],
      ["ф","f","f (Ф ф)","фото"],
      ["э","eh","eh, as in bed (Э э)","A backwards E: это."],
      ["ы","ih","ih, a vowel English doesn't have (Ы ы)","One letter: say ee with the tongue pulled back. мы."]]
W2 = [["парк","pahrk","park","п + а + р + к"],
      ["спорт","spohrt","sport, sports","с + п + о + р + т"],
      ["салат","sah-LAHT","salad","с + а + л + а + т"],
      ["банан","bah-NAHN","banana","б + а + н + а + н. Б is b."],
      ["телефон","tih-lih-FOHN","phone","т + е + л + е + ф + о + н. Ф is f."],
      ["паспорт","PAHS-pahrt","passport","п + а + с + п + о + р + т. П is p."],
      ["аэропорт","ah-eh-rah-POHRT","airport","а + э + р + о + п + о + р + т. Э is eh."],
      ["газета","gah-ZYEH-tah","newspaper","г + а + з + е + т + а. З is z, not 3."],
      ["студент","stoo-DYEHNT","student","с + т + у + д + е + н + т"],
      ["туалет","too-ah-LYEHT","toilet, restroom","т + у + а + л + е + т. Every vowel is said."],
      ["проблема","prah-BLYEH-mah","problem","п + р + о + б + л + е + м + а"],
      ["доктор","DOHK-tahr","doctor","д + о + к + т + о + р"],
      ["музыка","MOO-zih-kah","music","м + у + з + ы + к + а. Ы is ih."],
      ["сыр","sihr","cheese","с + ы + р. Ы, not и."],
      ["рыба","RIH-bah","fish","р + ы + б + а"],
      ["вода","vah-DAH","water","в + о + д + а. В is v."],
      ["пиво","PEE-vah","beer","п + и + в + о. И is ee."]]
LS = [["ё","yoh","yo, as in yogurt (Ё ё)","Always stressed: ещё. Often printed without its dots, as е."],
      ["ю","yoo","yu, as in you (Ю ю)","After a consonant it makes it soft: меню."],
      ["ж","zh","zh, as in pleasure (Ж ж)","Always hard: жена."],
      ["ш","sh","sh (Ш ш)","Always hard: школа."],
      ["щ","sh'","a long, soft sh (Щ щ)","Always soft, one sound: борщ, щи."],
      ["ч","ch","ch, as in cheap (Ч ч)","Always soft: чай."],
      ["ц","ts","ts, as in cats (Ц ц)","Always hard: центр."],
      ["ь","MYAHKH-keey znahk","the soft sign","No sound of its own: it makes the consonant before it soft. мать."],
      ["ъ","TVYOHR-dihy znahk","the hard sign","No sound of its own: it keeps the consonant hard and adds a y. подъезд. Rare."]]
W3 = [["яблоко","YAH-blah-kah","apple","я + б + л + о + к + о. Stress on я; both о are unstressed, so ah."],
      ["мясо","MYAH-sah","meat","м + я + с + о. я makes м soft. Stress on я; the final о is ah."],
      ["люди","LYOO-dee","people","л + ю + д + и. ю makes л soft, и makes д soft. Stress on ю."],
      ["ключ","klyooch","key","к + л + ю + ч. ю makes л soft; ч is always soft. One syllable."],
      ["ёлка","YOHL-kah","fir tree; Christmas tree","ё + л + к + а. At the start of a word ё is yo, and it carries the stress. л is hard."],
      ["машина","mah-SHIH-nah","car","м + а + ш + и + н + а. ш is always hard, so ши sounds shih. Stress on ши."],
      ["журнал","zhoor-NAHL","magazine","ж + у + р + н + а + л. ж is always hard; л is hard. Stress on the last syllable."],
      ["шоколад","shah-kah-LAHT","chocolate","ш + о + к + о + л + а + д. Stress on the last syllable, so both о are ah; the final д sounds t."],
      ["пицца","PEETS-tsah","pizza","п + и + ц + ц + а. и makes п soft; ц is always hard, and the double ц is held. Stress on пи."],
      ["улица","OO-lee-tsah","street","у + л + и + ц + а. и makes л soft. Stress on у."],
      ["врач","vrahch","doctor","в + р + а + ч. р is hard, ч always soft. One syllable."],
      ["ночь","nohch","night","н + о + ч + ь. ч is soft anyway, so ь adds nothing you hear. One syllable."],
      ["площадь","PLOH-sh'aht'","square (in a town)","п + л + о + щ + а + д + ь. Stress on о. щ is the long soft sh; the final дь sounds like a soft t."],
      ["овощи","OH-vah-sh'ee","vegetables","о + в + о + щ + и. Stress on the first о; the second is ah."],
      ["словарь","slah-VAHR'","dictionary","с + л + о + в + а + р + ь. Stress on the last syllable; ь makes р soft."],
      ["учитель","oo-CHEE-tihl'","teacher","у + ч + и + т + е + л + ь. Stress on чи; е makes т soft and sounds ih; ь makes л soft."],
      ["соль","sohl'","salt","с + о + л + ь. One syllable; ь makes л soft."]]

SEC_A = [None, {"name": "True friends", "cards": TF}, {"name": "False friends", "cards": FF}, L1, {"name": "Words with twelve letters", "cards": W1}, None]
SEC_L = [{"name": "New shapes", "cards": NS}, None, L2, {"name": "Words with 23 letters", "cards": W2}, None, None]
SEC_S = [{"deck": L3, "n": [0, 3]}, None, {"deck": L3, "n": [8, 13]}, [{"deck": L3, "n": [3, 8]}, {"deck": L3, "n": [13, 16]}, {"name": "The last nine letters", "cards": LS}], None, {"name": "Words with all 33 letters", "cards": W3}, None]

edit('lessons-1.js', [
 # ---- lesson 1: alphabet
 ('    deck: "Letters 1: friends and false friends",\n    body: `\n<p>Russian is written in Cyrillic: 33 letters,',
  '    deck: "Letters 1: friends and false friends",\n    sections: ' + J(SEC_A) + ',\n    body: `\n<h3>How Cyrillic works</h3>\n<p>Russian is written in Cyrillic: 33 letters,'),
 ('Twelve letters are enough to read real words today.</p>\n<h3>Five true friends</h3>',
  'Twelve letters are enough to read real words today.</p>\n<p>Each letter stands for one main sound, and almost every letter in a word is said, so once you know the letters you can sound out almost any word. The course teaches them in groups: five that look and sound English, seven false friends, eleven new shapes, then the vowels with a y in them, five hushing sounds and two signs with no sound. Each letter has a capital and a small form. Most small letters are just smaller capitals (К к, М м); the cards show the small one, the form you meet inside words.</p>\n<h3>Five true friends</h3>'),
 ('<b>О</b> is "oh", <b>Т</b> is t.</p>\n',
  '<b>О</b> is "oh", <b>Т</b> is t. Tap a letter to hear it.</p>\n{{tiles:а к м о т}}\n'),
 ('<td class="k">сахар</td></tr></table></div>\n',
  '<td class="k">сахар</td></tr></table></div>\n{{tiles:в е н р с у х}}\n'),
 ('<h3>He, she and it for things</h3>',
  '<h3>Read whole words</h3>\n<p>Read a Russian word one letter at a time, left to right, and say every letter. There are almost no silent letters and no pairs like English th: <b>с + т + а + к + а + н</b> is <b>стакан</b>, stah-KAHN. Two vowels side by side are both said: <b>театр</b> is tih-AHTR. An е without stress sounds closer to "ih", as in <b>сестра</b>, sihs-TRAH. Every card below is a real word made only of your twelve letters. Sound it out before you flip it.</p>\n<h3>He, she and it for things</h3>'),
 # ---- lesson 2: letters
 ('    deck: "Letters 2: new shapes",\n    body: `',
  '    deck: "Letters 2: new shapes",\n    sections: ' + J(SEC_L) + ',\n    body: `'),
 ('<td class="k">мы</td></tr></table></div>\n{{ex:Где банк?|gdyeh bahnk|Where is the bank?}}\n',
  '<td class="k">мы</td></tr></table></div>\n<p>Tap a letter to hear it.</p>\n{{tiles:б г д з и й л п ф э ы}}\n{{ex:Где банк?|gdyeh bahnk|Where is the bank?}}\n'),
 ('<h3>Э and your first sentences</h3>',
  '<h3>Read whole words</h3>\n<p>You now know 23 letters, enough for many words English shares with Russian: <b>п + а + р + к</b> is <b>парк</b>, <b>с + п + о + р + т</b> is <b>спорт</b>. Read the letters in order and say every one. Watch И and Ы: <b>сыр</b> (cheese) has the "ih" of <b>мы</b>, <b>пиво</b> (beer) the "ee" of <b>такси</b>. Sound out each card before you flip it.</p>\n<h3>Э and your first sentences</h3>'),
 # ---- lesson 3: sounds
 ('    deck: "Letters 3: soft vowels and hushing sounds",\n    body: `',
  '    deck: "Letters 3: soft vowels and hushing sounds",\n    sections: ' + J(SEC_S) + ',\n    body: `'),
 ('<b>Ё</b> is always stressed.</p>\n',
  '<b>Ё</b> is always stressed. Tap a letter to hear it.</p>\n{{tiles:я ё ю}}\n'),
 ('<p><b>ь</b> has no sound. It makes the consonant before it soft, and that changes the word.</p>\n',
  '<p><b>ь</b> has no sound. It makes the consonant before it soft, and that changes the word.</p>\n{{tiles:ь ъ}}\n'),
 ('<td class="k">центр</td></tr></table></div>\n',
  '<td class="k">центр</td></tr></table></div>\n{{tiles:ж ш щ ч ц}}\n'),
 ('<h3>моя and моё</h3>',
  '<h3>Read whole words</h3>\n<p>You have all 33 letters now. Read a word in three steps. Say the letters in order. Make a consonant soft when я, ё, ю, е, и or ь follows it (ж, ш and ц always stay hard). Then find the stressed syllable, the one in CAPITALS, and let an unstressed о fade to "ah" and an unstressed е to "ih". So <b>я + б + л + о + к + о</b> is <b>яблоко</b>, YAH-blah-kah. The notes on the cards below say which consonants are soft and which syllable is stressed.</p>\n<h3>моя and моё</h3>'),
])

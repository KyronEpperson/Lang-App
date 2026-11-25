#!/usr/bin/env python3
# Character foundations, pilot course en-ja (FND-1). Edits tools/target/ja/lessons-1.js and lessons-2.js; then
#   node tools/target/gen.js ja && node tools/lessonread/apply.js
# What changes: the three kana lessons and the first-kanji lesson name the flashcards of each section (`sections`), the kana rows get flip tiles,
# both halves of each kana table get their own section, and each kana lesson gets a deck of real words that lives inside the lesson.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'ja', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
H1, H2, H3 = "Hiragana 1: a, ka, sa, ta rows", "Hiragana 2: na to n", "Hiragana 3: marks and small letters"
K1, K2 = "Katakana 1: a, ka, sa, ta rows", "Katakana 2: na to n, plus long vowels"

HW = [["あい","ai","love","あ + い"],["いえ","ie","house","い + え"],["かお","kao","face","か + お"],["すし","sushi","sushi","す + し. し is shi, not si."],["そと","soto","outside","そ + と"],["たこ","tako","octopus","た + こ"],["つくえ","tsukue","desk","つ + く + え. つ is tsu, not tu."],["ねこ","neko","cat","ね + こ"],["いぬ","inu","dog","い + ぬ"],["はな","hana","flower","は + な. Inside a word は is ha."],["ふね","fune","boat","ふ + ね. ふ is fu, not hu."],["へや","heya","room","へ + や"],["ほし","hoshi","star","ほ + し"],["やま","yama","mountain","や + ま"],["ゆき","yuki","snow","ゆ + き"],["よる","yoru","night","よ + る"],["くるま","kuruma","car","く + る + ま"],["わたし","watashi","I, me","わ + た + し"],["ほん","hon","book","ほ + ん. ん is a beat of its own."],["みみ","mimi","ear","み + み"]]
BW = [["きょう","kyō","today","きょ + う: two beats. Small ょ joins き; the う makes the o long."],["がっこう","gakkō","school","が + っ + こ + う: four beats. Small っ is a silent beat."],["せんせい","sensei","teacher","せ + ん + せ + い: four beats."],["おかあさん","okāsan","mother","お + か + あ + さ + ん: five beats. Hold the あ."],["おにいさん","oniisan","older brother","お + に + い + さ + ん: five beats. Hold the い."],["じゅう","jū","ten","じゅ + う: two beats."],["ちょっと","chotto","a little","ちょ + っ + と: three beats."],["ほんや","hon'ya","bookstore","ほ + ん + や: three beats, hon-ya."],["しんぶん","shinbun","newspaper","し + ん + ぶ + ん: four beats."],["ざっし","zasshi","magazine","ざ + っ + し: three beats."],["りょこう","ryokō","trip, travel","りょ + こ + う: three beats."],["びょういん","byōin","hospital","びょ + う + い + ん: four beats. びよういん (biyōin, five beats) is a beauty salon."],["おおきい","ōkii","big","お + お + き + い: four beats."],["きっぷ","kippu","ticket","き + っ + ぷ: three beats."],["おちゃ","ocha","tea","お + ちゃ: two beats."]]
KW = [["アメリカ","amerika","America","ア + メ + リ + カ"],["タクシー","takushī","taxi","Four beats: ta-ku-shi-i."],["ラーメン","rāmen","ramen","Four beats: ra-a-me-n."],["テレビ","terebi","TV","Short for テレビジョン, \"television\"."],["ホテル","hoteru","hotel","The l becomes ル (ru)."],["トイレ","toire","toilet, restroom","Short for トイレット (toiretto), from \"toilet\"."],["カメラ","kamera","camera","カ + メ + ラ"],["メニュー","menyū","menu","Small ュ joins ニ: me-nyu-u, three beats."],["バス","basu","bus","A final s becomes ス (su)."],["パン","pan","bread","From Portuguese, not from English \"pan\"."],["ビール","bīru","beer","With ー. ビル (biru) is a building."],["コンビニ","konbini","convenience store","Short for \"convenience store\"."],["スマホ","sumaho","smartphone","Short for スマートフォン."],["レストラン","resutoran","restaurant","Five beats: re-su-to-ra-n."],["ベッド","beddo","bed","Small ッ is a silent beat: be, pause, do. Three beats; the romaji doubles the d."],["ジュース","jūsu","juice","Small ュ joins ジ; ー makes it long."]]

SEC_H = [None, H1, H2, {"name": "Hiragana words", "cards": HW}, None, None, None]
SEC_S = [{"deck": H3, "n": [0, 23]}, None, None, None, None, [{"deck": H3, "n": [23, 28]}, {"name": "Beats and long vowels", "cards": BW}], None]
SEC_K = [K1, {"deck": K2, "n": [0, 26]}, None, None, [{"deck": K2, "n": [26, 30]}, {"name": "Katakana words", "cards": KW}], None]
SEC_KJ = [None, {"deck": "First kanji", "n": [0, 14]}, {"deck": "First kanji", "n": [14, 24]}, {"deck": "First kanji", "n": [24, 30]}, None]

edit('lessons-1.js', [
 # ---- lesson 1: hiragana
 ('    deck: "Hiragana 1: a, ka, sa, ta rows",\n    body: `\n<p>Japanese is written with three scripts.',
  '    deck: "Hiragana 1: a, ka, sa, ta rows",\n    sections: ' + J(SEC_H) + ',\n    body: `\n<p>Japanese is written with three scripts.'),
 ('<h3>Vowels: short and pure</h3>\n<p>English names its vowels "ay, ee, eye, oh, you". Japanese vowels sound as in Spanish or Italian: あ "ah", い "ee", う "oo" with relaxed lips, え "eh", お "oh". So え is never "ee", and い is never "eye".</p>\n{{ex:あい|ai|love}}\n{{ex:いえ|ie|house}}\n<h3>Letters that break the pattern</h3>\n<p>A few letters do not follow their row: し is <i>shi</i>, ち is <i>chi</i>, つ is <i>tsu</i>, ふ is <i>fu</i>, and ん is a plain <i>n</i> with no vowel. Watch the look-alikes: さ and ち, ぬ and め, わ, れ and ね, る and ろ.</p>\n{{ex:すし|sushi|sushi}}\n{{ex:ふね|fune|boat}}\n',
  '<h3>The first four rows: あ, か, さ, た</h3>\n<p>Start with the vowels. English names its vowels "ay, ee, eye, oh, you". Japanese vowels sound as in Spanish or Italian: あ "ah", い "ee", う "oo" with relaxed lips, え "eh", お "oh". So え is never "ee", and い is never "eye".</p>\n<p>Three letters in these rows do not follow their row: し is <i>shi</i>, ち is <i>chi</i>, and つ is <i>tsu</i>. Watch the look-alikes さ and ち. Tap a letter to hear it and see how it reads.</p>\n{{tiles:あ い う え お か き く け こ さ し す せ そ た ち つ て と}}\n{{ex:あい|ai|love}}\n{{ex:いえ|ie|house}}\n{{ex:すし|sushi|sushi}}\n<h3>The other six rows: な to ん</h3>\n<p>Two more letters break the pattern: ふ is <i>fu</i>, said with both lips and no teeth, and ん is a plain <i>n</i> with no vowel. The y row has only three letters and the w row only two. Watch the look-alikes: ぬ and め, わ, れ and ね, る and ろ, は and ほ.</p>\n{{tiles:な に ぬ ね の は ひ ふ へ ほ ま み む め も や _ ゆ _ よ ら り る れ ろ わ _ _ _ を ん}}\n{{ex:ふね|fune|boat}}\n{{ex:やま|yama|mountain}}\n<h3>Read your first words</h3>\n<p>You now know all 46 letters. A word is read one letter at a time, one beat each, with no letter louder than the others: ね + こ is <i>neko</i>, two beats. The cards below are real words spelled with the letters you just learned. Read each one aloud before you flip it.</p>\n{{ex:ねこ|neko|cat}}\n{{ex:くるま|kuruma|car}}\n'),
 (' When the first 20 letters feel easy, learn the other 26 with the <b>Hiragana 2: na to n</b> deck.</div>', '</div>'),
 ('Now you can read です and ください.</p>', 'Now you can read です and ください. The dotted letters get their own cards in the next lesson.</p>'),
 # ---- lesson 2: sounds
 ('    deck: "Hiragana 3: marks and small letters",\n    body: `',
  '    deck: "Hiragana 3: marks and small letters",\n    sections: ' + J(SEC_S) + ',\n    body: `'),
 ('and the count can change the meaning.</p>\n<h3>Small ゃ, ゅ, ょ</h3>',
  'and the count can change the meaning.</p>\n<h3>The dotted letters</h3>\n<p>Lesson 1 showed the two marks. Here is every letter they make. Two dots turn k into g, s into z, t into d and h into b; the small circle turns h into p. Three do not follow their row: じ is <i>ji</i>, ぢ is <i>ji</i> too, and づ is <i>zu</i>, the same as ず. ぢ and づ are rare.</p>\n{{tiles:が ぎ ぐ げ ご ざ じ ず ぜ ぞ だ ぢ=ji づ=zu で ど ば び ぶ べ ぼ ぱ ぴ ぷ ぺ ぽ}}\n{{ex:かぎ|kagi|key}}\n{{ex:でんわ|denwa|telephone}}\n<h3>Small ゃ, ゅ, ょ</h3>'),
 ('Give each beat its full time, or the word turns into a different one.</p>',
  'Give each beat its full time, or the word turns into a different one.</p>\n<p>The cards below put it all together: small letters, the silent beat, long vowels and ん. Count the beats of each word as you read it.</p>'),
 # ---- lesson 3: katakana
 ('    deck: "Katakana 1: a, ka, sa, ta rows",\n    body: `',
  '    deck: "Katakana 1: a, ka, sa, ta rows",\n    sections: ' + J(SEC_K) + ',\n    body: `'),
 ('{{ex:アメリカ|amerika|America}}\n{{ex:タクシー|takushī|taxi}}\n<h3>ー: the long-vowel mark</h3>',
  '<p>Start with the first four rows. Tap a letter to hear it and see how it reads.</p>\n{{tiles:ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト}}\n{{ex:アイス|aisu|ice cream}}\n<h3>The other six rows: ナ to ン</h3>\n<p>The rest of the grid. ヲ is almost never used, and ン is <i>n</i> alone. More look-alikes: ヌ (<i>nu</i>) and ス (<i>su</i>), and ワ (<i>wa</i>), ウ (<i>u</i>) and フ (<i>fu</i>).</p>\n{{tiles:ナ ニ ヌ ネ ノ ハ ヒ フ ヘ ホ マ ミ ム メ モ ヤ _ ユ _ ヨ ラ リ ル レ ロ ワ _ _ _ ヲ ン}}\n{{ex:アメリカ|amerika|America}}\n{{ex:ホテル|hoteru|hotel}}\n<h3>ー: the long-vowel mark</h3>'),
 ('{{ex:マクドナルド|makudonarudo|McDonald\'s}}\n',
  '{{ex:マクドナルド|makudonarudo|McDonald\'s}}\n<p>The cards below are loanwords you will see on signs and menus. Read each one beat by beat, then guess the word it came from.</p>\n'),
 ('When the first 20 letters feel easy, learn the rest with the <b>Katakana 2: na to n, plus long vowels</b> deck.</div>',
  'Read it aloud and count: ko-o-hi-i is four beats.</div>'),
])
edit('lessons-2.js', [
 ('    deck: "First kanji",\n    body: `',
  '    deck: "First kanji",\n    sections: ' + J(SEC_KJ) + ',\n    body: `'),
 ('and always lets you answer in kana.</p>\n<h3>Numbers and money</h3>',
  'and always lets you answer in kana.</p>\n<h3>How kanji are built</h3>\n<p>A kana letter is a sound. A kanji is a meaning, drawn with strokes in a fixed order: top to bottom, and left to right. Simple kanji are pictures: <b>人</b> is a person walking, <b>木</b> is a tree, <b>日</b> is the sun. Bigger kanji are built from smaller ones, and the parts often hint at the meaning: <b>日</b> (sun, day) sits on the left of <b>時</b> (time, o\'clock) and of <b>曜</b> in every day of the week, and <b>本</b> (origin, book) is <b>木</b> with a mark at its root. So you rarely learn a kanji from nothing: look for a part you already know.</p>\n<h3>Numbers and money</h3>'),
])

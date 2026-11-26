#!/usr/bin/env python3
# Character foundations for en-yue (FND-1 roll-out). Edits tools/target/yue/lessons-1.js; then
#   node tools/target/gen.js yue && node tools/target/validate.js yue && node tools/lessonread/apply.js en-yue
# Cantonese has two things to learn, and the foundation covers both:
#   Jyutping (lessons jyutping, tones): pieces = the 19 initials (flip tiles), the finals by vowel family (vowel tiles + a full chart),
#     the syllabic nasals m and ng (tiles), the six tones on one syllable si1..si6 (tiles) and the checked tones 1, 3, 6 (chart);
#     putting together = initial + final + tone = one syllable, then tones on real two-syllable words.
#   characters (lesson characters): pieces = picture characters and common radicals (flip tiles, one card each, traditional forms as in Hong Kong);
#     putting together = radical + part = character, including the 口 characters of spoken Cantonese.
# Lesson greetings (3) sits between tones (2) and characters (4) and is not touched; no lesson moves.
# Tile readings: initials and vowels carry an English-sound hint; radicals carry the Jyutping of the full character they come from (氵 seoi2 from 水).
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'yue', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
JS, TT, FC = "Jyutping sounds", "Tone twins", "First characters"

# ---- in-lesson decks
SYL = [["香港","hoeng1 gong2","Hong Kong","h + oeng + tone 1 · g + ong + tone 2."],
       ["廣東話","gwong2 dung1 waa2","Cantonese (the language)","gw + ong · d + ung · w + aa. gw is the gu of Guam."],
       ["飲茶","jam2 caa4","to have dim sum (literally: drink tea)","j + am · c + aa. j is the y of yes; c is ts with a puff."],
       ["食飯","sik6 faan6","to eat; to have a meal","s + ik · f + aan. The k of sik is stopped, not released."],
       ["學生","hok6 saang1","student","h + ok · s + aang. aa is long, as in father."],
       ["老師","lou5 si1","teacher","l + ou · s + i. ou sounds like \"oh\"."],
       ["牛奶","ngau4 naai5","milk","ng + au · n + aai. ng starts the word, as in singer."],
       ["巴士","baa1 si2","bus","b + aa · s + i. b has no puff of air."],
       ["的士","dik1 si2","taxi","d + ik · s + i. d has no puff; the k is stopped."],
       ["天氣","tin1 hei3","weather","t + in · h + ei. t has a puff of air; ei sounds like the ay in \"day\"."],
       ["屋企","uk1 kei2","home","No initial: uk starts with the vowel. Then k + ei, with a puff on the k."],
       ["麵包","min6 baau1","bread","m + in · b + aau. aau is long aa sliding to oo, like \"cow\"."],
       ["啤酒","be1 zau2","beer","b + e · z + au. z is the ds of beds."],
       ["水果","seoi2 gwo2","fruit","s + eoi · gw + o. eoi is the rounded eo sliding to ee."],
       ["平","peng4","cheap","p + eng + tone 4. p has a strong puff of air."],
       ["裙","kwan4","skirt; dress","kw + an + tone 4. kw is the qu of quick."],
       ["雪糕","syut3 gou1","ice cream","s + yut · g + ou. yu is ee with rounded lips; the t is stopped."],
       ["中國","zung1 gwok3","China","z + ung · gw + ok. the u of ung is close to the oo of book."]]
TWO = [["醫生","ji1 sang1","doctor","Tone 1 + tone 1: high and level, twice."],
       ["辛苦","san1 fu2","tiring; hard","Tone 1 + tone 2: stay high, then rise from the middle."],
       ["鍾意","zung1 ji3","to like","Tone 1 + tone 3: high, then one step down to the middle."],
       ["今日","gam1 jat6","today","Tone 1 + tone 6: high, then low and clipped. jat6 ends in t."],
       ["早餐","zou2 caan1","breakfast","Tone 2 + tone 1: rise from the middle, then high and level."],
       ["汽水","hei3 seoi2","soft drink, soda","Tone 3 + tone 2: middle and level, then rise from the middle."],
       ["冷氣","laang5 hei3","air conditioning","Tone 5 + tone 3: rise from low, then middle and level."],
       ["銀行","ngan4 hong4","bank","Tone 4 + tone 4: low and falling, twice."],
       ["琴日","kam4 jat6","yesterday","Tone 4 + tone 6: fall low, then low and clipped. Compare 今日, today."],
       ["鐘頭","zung1 tau4","hour","Tone 1 + tone 4: high, then all the way down."],
       ["你哋","nei5 dei6","you (more than one person)","Tone 5 + tone 6: rise from low, then low and level."],
       ["電腦","din6 nou5","computer","Tone 6 + tone 5: low and level, then rise from low."],
       ["學校","hok6 haau6","school","Tone 6 + tone 6: low and level, twice. hok6 is clipped."],
       ["地鐵","dei6 tit3","MTR, subway","Tone 6 + tone 3: low, then middle and clipped. tit3 ends in t."],
       ["白色","baak6 sik1","white","Two clipped syllables: low (6), then high (1)."],
       ["好味","hou2 mei6","tasty","Tone 2 + tone 6: rise from the middle, then low and level."]]
RAD = [["亻","jan4","person (on the left)","From 人 (person). As in 你 (nei5, you) and 佢 (keoi5, he, she)."],
       ["氵","seoi2","water (on the left)","From 水 (water). As in 湯 (tong1, soup) and 酒 (zau2, alcohol)."],
       ["女","neoi5","woman","As in 好 (hou2, good) and 媽 (maa1, mom)."],
       ["火","fo2","fire","As in 燈 (dang1, lamp). At the bottom it turns into four dots, as in 熱 (jit6, hot)."],
       ["忄","sam1","heart; feelings (on the left)","心 (heart) standing on the left. As in 快 (faai3, fast) and 慢 (maan6, slow)."],
       ["扌","sau2","hand (on the left)","From 手 (hand). As in 推 (teoi1, push) and 拉 (laai1, pull) on doors."],
       ["訁","jin4","speech; words (on the left)","From 言 (jin4, speech). As in 講 (gong2, to speak) and 話 (waa6, speech)."],
       ["艹","cou2","grass; plants (on top)","The top form of 艸 (cou2, grass), as on top of 草 (cou2, grass). As in 茶 (caa4, tea) and 花 (faa1, flower)."],
       ["飠","sik6","food (on the left)","From 食 (sik6, to eat). As in 飯 (faan6, rice) and 飲 (jam2, to drink)."],
       ["土","tou2","earth; ground","As in 地 (dei6, ground) and 場 (coeng4, a field, a place)."],
       ["糹","si1","silk; thread (on the left)","The side form of 糸, half of 絲 (si1, silk). As in 紅 (hung4, red) and 紙 (zi2, paper)."],
       ["釒","gam1","metal; gold (on the left)","From 金 (gam1, gold). As in 錢 (cin2, money) and 銀 (ngan4, silver)."]]
CHR = [["你","nei5","you","亻 (person) gives the meaning: a word for a person."],
       ["佢","keoi5","he; she; it","亻 (person) gives the meaning; 巨 (geoi6) gives a rough sound."],
       ["媽","maa1","mom","女 (woman) gives the meaning; 馬 (maa5, horse) gives the sound."],
       ["湯","tong1","soup","氵 (water) gives the meaning; the right part gives the sound."],
       ["酒","zau2","alcohol; wine","氵 (liquid) + 酉, an old picture of a wine jar."],
       ["快","faai3","fast; quick","忄 (heart, mind) on the left; the right part gives the sound."],
       ["慢","maan6","slow","忄 (heart, mind) gives the meaning; 曼 (maan6) gives the sound."],
       ["推","teoi1","to push (on a door: PUSH)","扌 (hand) gives the meaning: you push with your hand."],
       ["拉","laai1","to pull (on a door: PULL)","扌 (hand) + 立 (laap6, to stand). The hand gives the meaning."],
       ["講","gong2","to speak; to say","訁 (speech) gives the meaning; the right part gives the sound."],
       ["茶","caa4","tea","艹 (plant) on top; below, something like 人 (person) over 木 (tree), a handy way to remember it."],
       ["花","faa1","flower","艹 (plant) gives the meaning; 化 (faa3) gives the sound."],
       ["飯","faan6","cooked rice; meal","飠 (food) gives the meaning; 反 (faan2) gives the sound."],
       ["飲","jam2","to drink","飠 (food and drink) + 欠, a person with an open mouth."],
       ["地","dei6","ground; place","土 (earth) gives the meaning."],
       ["紅","hung4","red","糹 (silk: dyed thread) gives the meaning; 工 (gung1) gives the sound."],
       ["錢","cin2","money","釒 (metal: coins) gives the meaning. Said cin2 in speech; the dictionary reading is cin4."],
       ["呢","ni1","this","口 (a spoken word) + 尼 (nei4), which gives the sound. At the end of a question it is ne1."],
       ["咩","me1","what","口 (a spoken word) + 羊 (joeng4, sheep): a sheep says me1."],
       ["嚟","lei4","to come","口 (a spoken word) + 黎 (lai4), which gives the sound. Said lei4 in speech; the dictionary reading is lai4."]]

SEC_J = [None, [{"deck": JS, "n": [0, 4]}, {"deck": JS, "n": [9, 13]}], [{"deck": JS, "n": [4, 9]}, {"deck": JS, "n": [13, 16]}], None,
         [{"deck": JS, "n": [16, 18]}, {"name": "Jyutping words", "cards": SYL}], None]
SEC_T = [{"deck": TT, "n": [0, 6]}, {"deck": TT, "n": [6, 18]}, None, None, {"name": "Tones on real words", "cards": TWO}, None]
SEC_C = [[{"deck": FC, "n": [0, 4]}, {"deck": FC, "n": [5, 8]}, {"deck": FC, "n": [10, 14]}],
         [{"deck": FC, "n": [4, 5]}, {"deck": FC, "n": [8, 10]}, {"deck": FC, "n": [14, 15]}],
         {"name": "Radicals", "cards": RAD},
         {"deck": FC, "n": [15, 18]},
         {"name": "Characters from parts", "cards": CHR},
         None]

INI = ("b=b_with_no_puff p=p_with_a_puff m=m_of_me f=f_of_far _ d=d_with_no_puff t=t_with_a_puff n=n_of_no l=l_of_low _ "
       "g=g_with_no_puff k=k_with_a_puff ng=ng_of_singer h=h_of_hot _ gw=gu_of_Guam kw=qu_of_quick w=w_of_way _ _ "
       "z=ds_of_beds c=ts_of_cats_with_a_puff s=s_of_see j=y_of_yes _")
VOW = ("aa=a_of_father a=u_of_but e=e_of_bed i=ee_of_see o=aw_of_law "
       "u=oo_of_food yu=ee_with_rounded_lips oe=long_er_with_rounded_lips eo=short_er_with_rounded_lips _")
RTI = "亻 氵 口 女 木 日 月 火 心=sam1 忄 扌 訁 艹 飠 土 糹 釒 門"

def row(cells):
    return '<tr>' + ''.join('<td>' + c + '</td>' for c in cells) + '</tr>'
FINALS = ('<div class="tbl"><table><tr><th>Vowel</th><th>alone</th><th>+ i / u</th><th>+ m</th><th>+ n</th><th>+ ng</th><th>+ p</th><th>+ t</th><th>+ k</th></tr>'
          + row(['<b>aa</b>', 'aa', 'aai, aau', 'aam', 'aan', 'aang', 'aap', 'aat', 'aak'])
          + row(['<b>a</b>', '', 'ai, au', 'am', 'an', 'ang', 'ap', 'at', 'ak'])
          + row(['<b>e</b>', 'e', 'ei, eu', 'em', '', 'eng', 'ep', '', 'ek'])
          + row(['<b>i</b>', 'i', 'iu', 'im', 'in', 'ing', 'ip', 'it', 'ik'])
          + row(['<b>o</b>', 'o', 'oi, ou', '', 'on', 'ong', '', 'ot', 'ok'])
          + row(['<b>u</b>', 'u', 'ui', '', 'un', 'ung', '', 'ut', 'uk'])
          + row(['<b>oe</b>', 'oe', '', '', '', 'oeng', '', '', 'oek'])
          + row(['<b>eo</b>', '', 'eoi', '', 'eon', '', '', 'eot', ''])
          + row(['<b>yu</b>', 'yu', '', '', 'yun', '', '', 'yut', ''])
          + '</table></div>')
CHECKED = ('<div class="tbl"><table><tr><th>Tone</th><th>Ends in p</th><th>Ends in t</th><th>Ends in k</th></tr>'
           '<tr><td>1, high</td><td><b>濕</b> sap1, wet</td><td><b>七</b> cat1, seven</td><td><b>屋</b> uk1, house</td></tr>'
           '<tr><td>3, middle</td><td><b>答</b> daap3, to answer</td><td><b>八</b> baat3, eight</td><td><b>百</b> baak3, hundred</td></tr>'
           '<tr><td>6, low</td><td><b>十</b> sap6, ten</td><td><b>日</b> jat6, day</td><td><b>六</b> luk6, six</td></tr></table></div>')

edit('lessons-1.js', [
 # ---- lesson 1: jyutping
 ('    deck: "Jyutping sounds",\n    body: `',
  '    deck: "Jyutping sounds",\n    sections: ' + J(SEC_J) + ',\n    body: `'),
 ('{{ex:我|ngo5|I; me}}\n<h3>Finals: the rest of the syllable</h3>\n',
  '{{ex:我|ngo5|I; me}}\n<p>Here are all 19 initials in their groups: lips, tongue tip, back of the mouth, the rounded gw and kw with w, and z, c, s and j. Tap a tile for an English sound that comes close. A syllable can also start with no initial at all, straight on the vowel.</p>\n{{tiles:' + INI + '}}\n'
  '<h3>Finals: the rest of the syllable</h3>\n'),
 ('{{ex:十|sap6|ten}}\n<h3>Syllables with no vowel</h3>\n',
  '{{ex:十|sap6|ten}}\n<p>Every final is built on one of nine vowels. Tap a tile for an English sound that comes close.</p>\n{{tiles:' + VOW + '}}\n'
  '<p>The vowel can stand alone, slide into i or u, or end in m, n, ng, p, t or k. The chart shows every final, one vowel family per row. Read across a row and you see the same vowel letter with different endings. A few change sound: in ing and ik the i is closer to the i of sing, in ung and uk the u is closer to the oo of book, and ei and ou sound like the ay of day and the oh of go. <b>eu</b>, <b>em</b> and <b>ep</b> are rare.</p>\n' + FINALS + '\n'
  '<h3>Syllables with no vowel</h3>\n'),
 ('{{ex:唔|m4|not}}\n{{ex:五|ng5|five}}\n<h3>Lazy sounds, and Yale</h3>',
  '{{tiles:唔 五}}\n{{ex:唔|m4|not}}\n{{ex:五|ng5|five}}\n'
  '<h3>Putting a syllable together</h3>\n<p>Now put the pieces together. A syllable is an initial, a final and a tone number: <b>香</b> is h + oeng + tone 1, <i>hoeng1</i>, and <b>港</b> is g + ong + tone 2, <i>gong2</i>. Together they make <b>香港</b> <i>hoeng1 gong2</i>, Hong Kong. Some syllables have no initial: <b>屋</b> <i>uk1</i> starts on the vowel. The cards below are common words. Read the Jyutping aloud before you flip each card, and find the initial and final of each syllable.</p>\n{{ex:香港|hoeng1 gong2|Hong Kong}}\n'
  '<h3>Lazy sounds, and Yale</h3>'),
 # ---- lesson 2: tones
 ('    deck: "Tone twins",\n    body: `',
  '    deck: "Tone twins",\n    sections: ' + J(SEC_T) + ',\n    body: `'),
 ('and one falling tone (4), the lowest of all.</p>\n',
  'and one falling tone (4), the lowest of all.</p>\n<p>Tap each tile to hear the six tones on the one syllable <i>si</i>, from 1 to 6.</p>\n{{tiles:詩 史 試 時 市 事}}\n'),
 ('<b>係</b> <i>hai6</i> (to be) and <b>喺</b> <i>hai2</i> (at, in).</p>',
  '<b>係</b> <i>hai6</i> (to be) and <b>喺</b> <i>hai2</i> (at, in). More twins: <b>九</b> <i>gau2</i> (nine), <b>夠</b> <i>gau3</i> (enough) and <b>舊</b> <i>gau6</i> (old); <b>粉</b> <i>fan2</i> (rice noodles) and <b>瞓</b> <i>fan3</i> (to sleep). <b>馬</b> <i>maa5</i> (horse) has the same low rise as <b>買</b> <i>maai5</i>.</p>'),
 ('<b>六</b> <i>luk6</i> (six).</p>\n{{ex:八|baat3|eight}}\n',
  '<b>六</b> <i>luk6</i> (six). These are the same pitches as the three level tones, just cut short: high (1), middle (3) and low (6).</p>\n' + CHECKED + '\n{{ex:八|baat3|eight}}\n'),
 ('{{ex:媽媽|maa4 maa1|mom}}\n<h3>No English question rise</h3>',
  '{{ex:媽媽|maa4 maa1|mom}}\n<h3>Tones on real words</h3>\n<p>Now say tones in pairs. The cards below are common two-syllable words with many different tone pairs, and a few clipped syllables in p, t or k. Give each syllable its own full tone; do not let the second one copy the first. Compare <b>今日</b> <i>gam1 jat6</i> (today) and <b>琴日</b> <i>kam4 jat6</i> (yesterday): the first syllables differ in initial and tone, high and level gam1 against low and falling kam4.</p>\n{{ex:今日|gam1 jat6|today}}\n'
  '<h3>No English question rise</h3>'),
 # ---- lesson 4: characters
 ('    deck: "First characters",\n    body: `',
  '    deck: "First characters",\n    sections: ' + J(SEC_C) + ',\n    body: `'),
 ('<b>山</b> three peaks, <b>水</b> flowing water and <b>木</b> a tree.</p>',
  '<b>山</b> three peaks, <b>水</b> flowing water and <b>木</b> a tree. <b>大</b> <i>daai6</i> (big) is a person with arms spread wide, and <b>小</b> <i>siu2</i> (small) is three little strokes. <b>門</b> <i>mun4</i> is a door with two swinging halves, and <b>手</b> <i>sau2</i> a hand with its fingers.</p>'),
 ('<p>Each character is written with strokes, the lines, dots and hooks of the pen. A part that turns up in many characters is a radical, and it often hints at the meaning: 亻 is a squeezed 人 (person), as in 休 and 你; 氵 is water; 女 is woman.</p>\n',
  '<p>Each character is written with strokes, the lines, dots and hooks of the pen. A part that turns up in many characters is a radical, and it often hints at the meaning: 亻 is a squeezed 人 (person), as in 休 and 你; 氵 is water; 女 is woman.</p>\n'
  '<p>Many radicals are picture characters squeezed to one side. Here are the ones you will meet most, in the traditional forms Hong Kong uses. A tile shows the Jyutping of the full character the radical comes from: 扌 is 手 <i>sau2</i> (hand), 訁 is 言 <i>jin4</i> (speech), and 忄 is 心 <i>sam1</i> (heart) standing on the left.</p>\n{{tiles:' + RTI + '}}\n'),
 ('{{ex:喺|hai2|at; in}}\n<h3>Signs, and simplified characters</h3>',
  '{{ex:喺|hai2|at; in}}\n<h3>Reading a new character from its parts</h3>\n<p>Most characters are a radical plus one more part. The radical gives the meaning, and the other part often gives the sound: <b>媽</b> <i>maa1</i> (mom) is 女 (woman) with 馬 <i>maa5</i> (horse) for the sound. Door signs are a good first test: <b>推</b> <i>teoi1</i> (push) and <b>拉</b> <i>laai1</i> (pull) both carry 扌, the hand. The cards below are common characters; each note names the parts and what each one gives.</p>\n{{ex:媽|maa1|mom}}\n'
  '<h3>Signs, and simplified characters</h3>'),
])

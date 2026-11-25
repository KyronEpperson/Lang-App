#!/usr/bin/env python3
# Character foundations for en-zh (FND-1 roll-out). Edits tools/target/zh/lessons-1.js; then
#   node tools/target/gen.js zh && node tools/target/validate.js zh && node tools/lessonread/apply.js en-zh
# Mandarin has two things to learn, and the foundation covers both:
#   pinyin  (lessons pinyin, tones, tone-change): pieces = initials, finals, tones (flip tiles); putting together = initial + final + tone = one syllable.
#   characters (lesson characters): pieces = basic strokes (chart) and common radicals (flip tiles); putting together = part + part = character.
# Tile readings: initials use the model syllable Chinese schools recite (b=bō, zh=zhī); finals show the final spelled as a syllable on its own (ia=yā, ü=yū),
# with dōng and dēng for ong and eng, which never stand alone; radicals show the pinyin of the full character they come from (氵 shuǐ, 讠 yán), as the lesson does.
# No card of an existing deck is changed; the deck "Tone pairs" is cut between lessons tones (cards 0-9) and tone-change (cards 10-17). Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'zh', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
PS, TP, FC = "Pinyin sounds", "Tone pairs", "First characters"

# ---- in-lesson decks
SYL = [["来","lái","to come","l + ai + second tone."],
       ["飞","fēi","to fly","f + ei + first tone. ei sounds like the ay in \"day\"."],
       ["高","gāo","tall; high","g + ao + first tone. ao sounds like the ow in \"how\"."],
       ["手","shǒu","hand","sh + ou + third tone. ou sounds like \"oh\"."],
       ["慢","màn","slow","m + an + fourth tone."],
       ["很","hěn","very","h + en + third tone."],
       ["忙","máng","busy","m + ang + second tone."],
       ["冷","lěng","cold","l + eng + third tone. eng is \"uh\" + ng."],
       ["红","hóng","red","h + ong + second tone."],
       ["家","jiā","home; family","j + ia + first tone."],
       ["写","xiě","to write","x + ie + third tone. ie sounds like \"yeh\"."],
       ["叫","jiào","to call; to be called","j + iao + fourth tone."],
       ["牛","niú","cow; ox","n + iu + second tone. iu sounds like \"yo\"."],
       ["钱","qián","money","q + ian + second tone. ian sounds like \"yen\"."],
       ["进","jìn","to enter; to come in","j + in + fourth tone."],
       ["听","tīng","to listen","t + ing + first tone."],
       ["画","huà","to draw; a painting","h + ua + fourth tone."],
       ["坐","zuò","to sit; to take (a bus)","z + uo + fourth tone. uo sounds like the wo in \"wore\"."],
       ["学","xué","to study; to learn","x + üe + second tone. After x the dots on ü are dropped."],
       ["黄","huáng","yellow","h + uang + second tone."]]
TWO = [["今天","jīntiān","today","First tone + first tone: both high and level."],
       ["中国","Zhōngguó","China","First tone + second tone: stay high, then rise."],
       ["工作","gōngzuò","work; to work","First tone + fourth tone: stay high, then fall."],
       ["面包","miànbāo","bread","Fourth tone + first tone: fall, then jump back up high."],
       ["明天","míngtiān","tomorrow","Second tone + first tone: rise, then stay high."],
       ["苹果","píngguǒ","apple","Second tone + third tone: rise, then go low."],
       ["学校","xuéxiào","school","Second tone + fourth tone: rise, then fall."],
       ["老师","lǎoshī","teacher","Third tone + first tone: stay low, then jump up high."],
       ["美国","Měiguó","America","Third tone + second tone: stay low, then rise."],
       ["米饭","mǐfàn","cooked rice","Third tone + fourth tone: stay low, then fall from high."],
       ["大学","dàxué","university","Fourth tone + second tone: fall, then rise."],
       ["汉语","Hànyǔ","Chinese (the language)","Fourth tone + third tone: fall, then stay low."],
       ["电话","diànhuà","telephone","Fourth tone + fourth tone: two falls, the second one stronger."],
       ["东西","dōngxi","thing; stuff","First tone + neutral tone: the second syllable is short and light."],
       ["谢谢","xièxie","thank you","Fourth tone + neutral tone: fall, then a light, short xie."]]
RAD = [["氵","shuǐ","water (on the left)","From 水 (water). As in 汤 (tāng, soup) and 河 (hé, river)."],
       ["亻","rén","person (on the left)","From 人 (person). As in 你 (nǐ, you) and 他 (tā, he)."],
       ["心","xīn","heart; feelings","At the bottom of a character. As in 想 (xiǎng, to think) and 您 (nín, you, polite)."],
       ["忄","xīn","heart; feelings (on the left)","心 standing on the left. As in 怕 (pà, to be afraid) and 忙 (máng, busy)."],
       ["讠","yán","speech; words","Short form of 言 (speech). As in 说 (shuō, to speak) and 谢 (xiè, to thank)."],
       ["扌","shǒu","hand","From 手 (hand). As in 打 (dǎ, to hit; to play) and 找 (zhǎo, to look for)."],
       ["艹","cǎo","grass; plants","On top, from 草 (grass). As in 花 (huā, flower) and 茶 (chá, tea)."],
       ["饣","shí","food","From 食 (food). As in 饭 (fàn, meal) and 饿 (è, hungry)."],
       ["土","tǔ","earth; ground","As in 地 (dì, ground) and 城 (chéng, city)."],
       ["钅","jīn","metal; gold","From 金 (gold). As in 钱 (qián, money) and 铁 (tiě, iron)."]]
CHR = [["吗","ma","question word at the end of a sentence","口 (mouth: a spoken word) gives the meaning; 马 (mǎ, horse) gives the sound."],
       ["们","men","plural ending for people","亻 (person) gives the meaning; 门 (mén, door) gives the sound."],
       ["间","jiān","room; between","门 (door) + 日 (sun): sunlight through a gap in the door. Both parts give the meaning."],
       ["从","cóng","from","人 + 人: one person following another. Both parts give the meaning."],
       ["本","běn","root, origin; measure word for books","木 (tree) with a mark at its root. The tree gives the meaning."],
       ["李","lǐ","plum; Li (a family name)","木 (tree) gives the meaning; 子 (zǐ) sits below it. Think of a tree with its fruit."],
       ["杯","bēi","cup; glass","木 (wood: cups were wooden) gives the meaning; 不 (bù) gives a rough sound."],
       ["灯","dēng","lamp; light","火 (fire) gives the meaning; 丁 (dīng) gives the sound."],
       ["姐","jiě","older sister","女 (woman) gives the meaning; 且 (qiě) gives the sound."],
       ["您","nín","you (polite)","你 (you) + 心 (heart): you, said with respect. Both parts give the meaning."],
       ["想","xiǎng","to think; to want to","心 (heart, mind) gives the meaning; 相 (xiāng) on top gives the sound."],
       ["请","qǐng","please; to invite","讠 (speech) gives the meaning; 青 (qīng) gives the sound."],
       ["清","qīng","clear","氵 (water) gives the meaning; 青 (qīng) gives the sound: clear water."],
       ["晴","qíng","sunny","日 (sun) gives the meaning; 青 (qīng) gives the sound."],
       ["话","huà","speech; words","讠 (speech) gives the meaning. The right part looks like 舌 (shé, tongue): words come off the tongue."],
       ["茶","chá","tea","艹 (plant) on top gives the meaning. Below are 人 (person) and 木 (tree): a person among plants and trees."],
       ["饭","fàn","cooked rice; meal","饣 (food) gives the meaning; 反 (fǎn) gives the sound."]]

SEC_P = [None, {"deck": PS, "n": [0, 16]}, None, None, [{"deck": PS, "n": [16, 18]}, {"name": "Pinyin syllables", "cards": SYL}], None]
SEC_T = [{"deck": TP, "n": [0, 4]}, {"deck": TP, "n": [4, 10]}, None, {"name": "Two-syllable words", "cards": TWO}, None]
SEC_TC = [None, None, None, {"deck": TP, "n": [10, 18]}]
SEC_C = [None,
         [{"deck": FC, "n": [0, 3]}, {"deck": FC, "n": [5, 7]}, {"deck": FC, "n": [8, 10]}, {"deck": FC, "n": [12, 18]}],
         {"name": "Radicals", "cards": RAD},
         [{"deck": FC, "n": [3, 5]}, {"deck": FC, "n": [7, 8]}, {"deck": FC, "n": [10, 12]}, {"name": "Characters from parts", "cards": CHR}],
         None]

INI = "b=bō p=pō m=mō f=fō _ d=dē t=tē n=nē l=lē _ g=gē k=kē h=hē _ _ j=jī q=qī x=xī _ _ zh=zhī ch=chī sh=shī r=rī _ z=zī c=cī s=sī _ _"
FIN = ("a=ā o=ō e=ē i=yī u=wū ü=yū er=èr _ _ _ ai=āi ei=ēi ao=āo ou=ōu _ an=ān en=ēn ang=āng eng=dēng ong=dōng "
       "ia=yā ie=yē iao=yāo iu=yōu _ ian=yān in=yīn iang=yāng ing=yīng iong=yōng ua=wā uo=wō uai=wāi ui=wēi _ "
       "uan=wān un=wēn uang=wāng ueng=wēng _ üe=yuē üan=yuān ün=yūn _ _")
RTI = "氵 亻 口 女 木 日=rì 月 心 忄 讠 扌 艹 饣 土 钅"

STROKES = ('<div class="tbl"><table><tr><th>Stroke</th><th>What it looks like</th><th>Seen in</th></tr>'
           '<tr><td>horizontal</td><td>a line from left to right</td><td class="k">一, 三</td></tr>'
           '<tr><td>vertical</td><td>a line straight down</td><td class="k">十, 中</td></tr>'
           '<tr><td>left-falling</td><td>a sweep down to the left</td><td class="k">人, 八</td></tr>'
           '<tr><td>right-falling</td><td>a sweep down to the right, thick at the end</td><td class="k">人, 八</td></tr>'
           '<tr><td>dot</td><td>a short dab</td><td class="k">六, 氵</td></tr>'
           '<tr><td>turn</td><td>a line that bends at a corner</td><td class="k">口, 日</td></tr>'
           '<tr><td>hook</td><td>a flick at the end of a line</td><td class="k">小, 子</td></tr></table></div>')

edit('lessons-1.js', [
 # ---- lesson 1: pinyin
 ('    deck: "Pinyin sounds",\n    body: `',
  '    deck: "Pinyin sounds",\n    sections: ' + J(SEC_P) + ',\n    body: `'),
 ('{{ex:七|qī|seven}}\n{{ex:菜|cài|a dish; vegetables}}\n<h3>Finals that trick English readers</h3>\n',
  '{{ex:七|qī|seven}}\n{{ex:菜|cài|a dish; vegetables}}\n<p>Here are all 21 initials in their groups. Chinese schools recite them with a vowel after each, <i>bō, pō, mō, fō</i>, and each tile shows that syllable. Tap a tile to hear it. y and w are not on the list: they are spellings, as the next section shows.</p>\n{{tiles:' + INI + '}}\n'
  '<h3>Finals that trick English readers</h3>\n<p>The final is the rest of the syllable: a vowel or a group of vowels, sometimes ending in n or ng. Here are all of them. A syllable with no initial is spelled with y or w: ia is written <i>ya</i>, ui is written <i>wei</i>, and ü is written <i>yu</i>. Each tile shows its final spelled that way; ong and eng never stand alone, so their tiles show <i>dōng</i> and <i>dēng</i>.</p>\n{{tiles:' + FIN + '}}\n'),
 ('the mark lands on the right vowel.</p>\n<h3>The apostrophe</h3>',
  'the mark lands on the right vowel.</p>\n<h3>Putting a syllable together</h3>\n<p>Now put the pieces together. A syllable is an initial, a final and a tone: <b>来</b> is l + ai + the second tone, <i>lái</i> (to come). The tone mark sits on a or e if the final has one, on the o of ou, and otherwise on the last vowel: <i>duì</i>, <i>niú</i>. The cards below are common one-syllable words. Read the pinyin aloud before you flip each card, and find its initial, final and tone.</p>\n{{ex:来|lái|to come}}\n<h3>The apostrophe</h3>'),
 # ---- lesson 2: tones
 ('    deck: "Tone pairs",\n    body: `\n<p>English uses pitch for feeling:',
  '    deck: "Tone pairs",\n    sections: ' + J(SEC_T) + ',\n    body: `\n<p>English uses pitch for feeling:'),
 ('the fourth tone drops right to the bottom of your voice.</p>\n',
  'the fourth tone drops right to the bottom of your voice.</p>\n<p>Tap each tile to hear the tone. The last one, <i>ma</i> with no mark, is the neutral tone, which comes below.</p>\n{{tiles:mā=mā má=má mǎ=mǎ mà=mà ma=ma}}\n'),
 ('<b>汤</b> <i>tāng</i> is soup, and <b>糖</b> <i>táng</i> is sugar.</p>',
  '<b>汤</b> <i>tāng</i> is soup, and <b>糖</b> <i>táng</i> is sugar. <b>问</b> <i>wèn</i> is to ask, and <b>吻</b> <i>wěn</i> is to kiss.</p>'),
 ('{{ex:很快|hěn kuài|very fast}}\n',
  '{{ex:很快|hěn kuài|very fast}}\n<p>The cards below are common two-syllable words, one for most pairs of tones, and two that end in a neutral tone. Say both tones in full. Two third tones in a row come in the next lesson.</p>\n'),
 # ---- lesson 3: tone-change
 ('    deck: "Tone pairs",\n    body: `\n<p>A few very common syllables',
  '    deck: "Tone pairs",\n    sections: ' + J(SEC_TC) + ',\n    body: `\n<p>A few very common syllables'),
 ('mostly when a third tone is said alone or at the end of a phrase.</p>\n',
  'mostly when a third tone is said alone or at the end of a phrase.</p>\n<p>The cards below are sets of one syllable with different tones. <b>眼</b> <i>yǎn</i>, <b>起</b> <i>qǐ</i> and <b>有</b> <i>yǒu</i> are third tones; on a card they stand alone, so give them the full dip. Then say each one next to its partners.</p>\n'),
 # ---- lesson 4: characters
 ('    deck: "First characters",\n    body: `',
  '    deck: "First characters",\n    sections: ' + J(SEC_C) + ',\n    body: `'),
 ('You will read them, not write them by hand.</p>\n<h3>Pictures</h3>',
  'You will read them, not write them by hand.</p>\n<h3>Strokes</h3>\n<p>Characters are made of strokes: lines, dots and hooks. There are only a few basic strokes, and every character is built from them. Knowing them helps you see the parts and look characters up. This course does not drill stroke order.</p>\n' + STROKES + '\n<h3>Pictures</h3>'),
 ('<b>日</b> <i>rì</i> the sun and <b>月</b> <i>yuè</i> the moon.</p>\n',
  '<b>日</b> <i>rì</i> the sun and <b>月</b> <i>yuè</i> the moon. More pictures: <b>女</b> <i>nǚ</i> is a woman, <b>子</b> <i>zǐ</i> a child with its arms out, <b>门</b> <i>mén</i> a door, <b>雨</b> <i>yǔ</i> rain falling, <b>火</b> <i>huǒ</i> a flame and <b>水</b> <i>shuǐ</i> a stream. <b>上</b> <i>shàng</i> (up) and <b>下</b> <i>xià</i> (down) are a mark above and below a line.</p>\n'),
 # move "Two parts, one meaning" after the radicals, so the parts are known before they are put together
 ('<h3>Two parts, one meaning</h3>\n<p>Many characters join two parts whose meanings add up. Two trees make <b>林</b> <i>lín</i> (woods). A person leaning on a tree, <b>休</b> <i>xiū</i>, is to rest. The sun and the moon make <b>明</b> <i>míng</i>, bright. A woman with her child makes <b>好</b> <i>hǎo</i>, good.</p>\n{{ex:林|lín|woods}}\n{{ex:明|míng|bright}}\n{{ex:好|hǎo|good}}\n', ''),
 ('<p>A radical is the part of a character that hints at its meaning. Three dots on the left (氵) mean water, as in <b>汤</b> <i>tāng</i> (soup). A small 口 on the left often marks a mouth word or a sound. 亻, a narrow form of 人, means a person, as in 休. 女 means a woman.</p>\n',
  '<p>A radical is the part of a character that hints at its meaning. Many radicals are picture characters, squeezed to one side. Three dots on the left (氵) mean water, as in <b>汤</b> <i>tāng</i> (soup). A small 口 on the left often marks a mouth word or a sound. 亻, a narrow form of 人, means a person, as in <b>你</b> <i>nǐ</i> (you). 女 means a woman.</p>\n<p>Here are the radicals you will meet most. A tile shows the pinyin of the full character the radical comes from: 讠 is a short form of 言 <i>yán</i> (speech), and 忄 is 心 <i>xīn</i> (heart) standing on the left.</p>\n{{tiles:' + RTI + '}}\n'),
 ('{{ex:汤|tāng|soup}}\n{{ex:妈|mā|mom}}\n<h3>Strokes</h3>\n<p>Characters are made of strokes: lines, dots and hooks. Knowing the basic strokes helps you see the parts and look characters up. This course does not drill stroke order.</p>\n',
  '{{ex:汤|tāng|soup}}\n{{ex:妈|mā|mom}}\n<h3>Two parts, one meaning</h3>\n<p>Many characters join two parts whose meanings add up. Two trees make <b>林</b> <i>lín</i> (woods). A person leaning on a tree, <b>休</b> <i>xiū</i>, is to rest. The sun and the moon make <b>明</b> <i>míng</i>, bright. A woman with her child makes <b>好</b> <i>hǎo</i>, good.</p>\n{{ex:林|lín|woods}}\n{{ex:明|míng|bright}}\n{{ex:好|hǎo|good}}\n'
  '<p>Most characters are built from two or three parts you already know. Sometimes every part gives the meaning, as in 好. More often the radical gives the meaning and the other part gives the sound: <b>请</b> <i>qǐng</i> (please), <b>清</b> <i>qīng</i> (clear) and <b>晴</b> <i>qíng</i> (sunny) all take their sound from 青 <i>qīng</i>, and 讠 (speech), 氵 (water) and 日 (sun) tell them apart. The cards below are common characters; each note names the parts and what each one gives.</p>\n{{ex:请|qǐng|please}}\n'),
])

#!/usr/bin/env python3
# Character foundations for en-nan (FND-1 roll-out). Edits tools/target/nan/lessons-1.js; then
#   node tools/target/gen.js nan && node tools/target/validate.js nan && node tools/lessonread/apply.js en-nan
# Taigi is written in MOE characters with a Tâi-lô line under every word (tone marks, no tone numbers on cards). The course has no audio,
# so Tâi-lô is the sound system the learner must read first; the characters come after. The foundation covers both:
#   Tâi-lô (lessons initials, finals, tones): pieces = the 17 initials (flip tiles), the six vowels, the nasal vowel nn, the endings
#     -m -n -ng and -p -t -k -h, the hummed syllables m and ng (tiles), and the tone marks on one syllable a (tiles) with the eight animals;
#     putting together = initial + final + tone mark = one syllable, then real two-syllable words (end of lesson finals).
#   characters (lesson characters): pieces = the MOE characters for native Taigi words (tiles, one card each);
#     putting together = characters, one syllable each, read one by one into words and short phrases.
# Lessons sandhi and sandhi-2 teach how tones change in words, not new pieces; they are not touched. Lesson greetings (6) sits between
# tones/sandhi (1-5) and characters (7); no lesson moves and no id changes.
# Tile readings: Latin pieces carry a short English-sound hint; characters carry their card's Tâi-lô.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'nan', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
TS, ST, TC = "Tâi-lô sounds", "Seven tones", "Taigi characters"

# ---- in-lesson decks
MI = [["麵", "mī", "noodles", "m + i, tone 7. m as in me."],
      ["名", "miâ", "name", "m + ia, tone 5."],
      ["貓", "niau", "cat", "n + iau, tone 1. n as in no."],
      ["年", "nî", "year", "n + i, tone 5."],
      ["硬", "ngē", "hard; stiff", "ng + e, tone 7. ng starts the word, like the ng of singer without the si."]]
VOW = [["跤", "kha", "foot; leg", "kh + a. a as in father. The MOE character; you may also see 腳."],
       ["雞", "ke", "chicken", "k + e. e as in café."],
       ["豬", "ti", "pig", "t + i. i as in see."],
       ["刀", "to", "knife", "t + o. Single o, as in 好 hó, not the oo of 虎."],
       ["烏", "oo", "black", "No initial: the open oo alone, like the aw of law."],
       ["有", "ū", "have; there is", "No initial: u alone, as in food. Tone 7."]]
NAS = [["三", "sann", "three", "s + a through the nose. No n at the end."],
       ["甜", "tinn", "sweet", "t + i through the nose."],
       ["圓", "înn", "round", "No initial: i through the nose, tone 5."],
       ["餅", "piánn", "cake; cookie", "p + ia through the nose, tone 2."],
       ["驚", "kiann", "afraid", "k + ia through the nose."]]
HUM = [["卵", "nn̄g", "egg", "n + hummed ng, tone 7. Sounds the same as 兩 (two)."],
       ["黃", "n̂g", "yellow", "A hummed ng alone, tone 5."],
       ["湯", "thng", "soup", "th + hummed ng."],
       ["糖", "thn̂g", "sugar; candy", "th + hummed ng, tone 5."],
       ["門", "mn̂g", "door", "m + hummed ng, tone 5."]]
SYL = [["豬肉", "ti-bah", "pork", "t + i · b + ah. The h is a catch in the throat."],
       ["雞肉", "ke-bah", "chicken (meat)", "k + e · b + ah."],
       ["米粉", "bí-hún", "rice noodles", "b + i · h + un. b is a voiced b."],
       ["番薯", "han-tsî", "sweet potato", "h + an · ts + i. ts with no puff."],
       ["西瓜", "si-kue", "watermelon", "s + i · k + ue. ue sounds like \"weh\"."],
       ["學校", "ha̍k-hāu", "school", "h + ak · h + au. The k is not released."],
       ["日頭", "ji̍t-thâu", "the sun", "j + it · th + au. j is voiced; th has a puff of air."],
       ["月娘", "gue̍h-niû", "the moon", "g + ueh · n + iu. g is a real g, as in go."],
       ["電腦", "tiān-náu", "computer", "t + ian · n + au."],
       ["市場", "tshī-tiûnn", "market", "tsh + i · t + iunn. tsh has a puff; nn makes iu nasal."],
       ["醫生", "i-sing", "doctor", "No initial: i alone · s + ing."],
       ["天氣", "thinn-khì", "weather", "th + inn · kh + i. Both have a puff of air."],
       ["鉛筆", "iân-pit", "pencil", "No initial: ian · p + it. The t is not released."],
       ["雨傘", "hōo-suànn", "umbrella", "h + oo · s + uann. oo is the aw of law; nn makes ua nasal."]]
CW = [["食飯", "tsia̍h-pn̄g", "eat a meal", "食 (eat) + 飯 (rice, meal)."],
      ["食飽", "tsia̍h-pá", "eat your fill; finish eating", "食 (eat) + 飽 (full)."],
      ["好食", "hó-tsia̍h", "tasty; delicious", "好 (good) + 食 (eat): good to eat."],
      ["啉茶", "lim tê", "drink tea", "啉 (drink) + 茶 (tea)."],
      ["啉水", "lim tsuí", "drink water", "啉 (drink) + 水 (water)."],
      ["好啉", "hó-lim", "tasty (of a drink)", "好 (good) + 啉 (drink): good to drink."],
      ["毋是", "m̄ sī", "isn't; is not", "毋 (not) + 是 (be). Not 不是, which is Mandarin."],
      ["欲食", "beh tsia̍h", "want to eat; going to eat", "欲 (want to) + 食 (eat)."],
      ["欲睏", "beh khùn", "sleepy; about to sleep", "欲 (about to) + 睏 (sleep)."],
      ["真媠", "tsin suí", "very pretty", "真 (very) + 媠 (beautiful). No 是 before it."],
      ["佇遮", "tī tsia", "here; at this place", "佇 (at) + 遮 (here)."],
      ["佇遐", "tī hia", "there; at that place", "佇 (at) + 遐 (there)."],
      ["予你", "hōo lí", "give (it) to you; for you", "予 (give) + 你 (you)."],
      ["你佮我", "lí kah guá", "you and me", "你 (you) + 佮 (and) + 我 (I, me)."],
      ["四个人", "sì ê lâng", "four people", "四 (four) + 个 (classifier) + 人 (person)."],
      ["七本冊", "tshit pún tsheh", "seven books", "七 (seven) + 本 (classifier for books) + 冊 (book)."]]

SEC_I = [None, {"deck": TS, "n": [0, 7]}, {"deck": TS, "n": [7, 10]}, {"name": "More initials", "cards": MI}, None, None]
SEC_F = [[{"deck": TS, "n": [10, 11]}, {"name": "Six vowels", "cards": VOW}],
         {"name": "Nasal vowels", "cards": NAS},
         {"deck": TS, "n": [11, 14]},
         {"deck": TS, "n": [14, 17]},
         [{"deck": TS, "n": [17, 18]}, {"name": "Hummed syllables", "cards": HUM}],
         {"name": "Tâi-lô words", "cards": SYL}]
SEC_T = [{"deck": ST, "n": [8, 17]}, {"deck": ST, "n": [0, 8]}, None, None]
SEC_C = [[{"deck": TC, "n": [0, 11]}, {"deck": TC, "n": [12, 17]}], None, None,
         [{"deck": TC, "n": [11, 12]}, {"name": "Words from characters", "cards": CW}], None]

INI = ("p=p_of_spin ph=p_of_pin b=b_of_bee m=m_of_me _ "
       "t=t_of_stop th=t_of_top n=n_of_no l=l_of_low _ "
       "k=k_of_skin kh=k_of_kin g=g_of_go ng=ng_of_singer h=h_of_hot "
       "ts=ts_of_cats tsh=ts_with_a_puff s=s_of_see j=voiced_dz _")
VTI = "a=a_of_father e=é_of_café i=ee_of_see o=a_of_about oo=aw_of_law u=oo_of_food"
TONES = "a=tone_1 á=tone_2 à=tone_3 ah=tone_4 â=tone_5 _ ā=tone_7 a̍h=tone_8"
CHT = "毋 佇 欲 食 啉 媠 予 囝 睏 蹛 遮 遐 冊 厝 囥 佮"

edit('lessons-1.js', [
 # ---- lesson 1: initials
 ('    deck: "Tâi-lô sounds",\n    body: `\n<p>This course teaches',
  '    deck: "Tâi-lô sounds",\n    sections: ' + J(SEC_I) + ',\n    body: `\n<p>This course teaches'),
 ('<b>ng</b> can also start a syllable, like the ng of <i>singer</i> without the "si".</p>\n',
  '<b>ng</b> can also start a syllable, like the ng of <i>singer</i> without the "si".</p>\n'
  '<p>That makes 17 initials. Here they all are, in rows by where you make them: the lips, the tongue tip, the back of the mouth (with h, from the throat), and ts, tsh, s and j. Tap a tile for an English sound that comes close. Before i, ts, tsh, s and j slide toward English ch, ch with a puff, sh and j: <b>遮</b> <i>tsia</i> (here) sounds close to \"chia\". A syllable can also start with no initial at all, straight on the vowel, as in <b>有</b> <i>ū</i> (have). The cards below are words that start with m, n and ng.</p>\n'
  '{{tiles:' + INI + '}}\n'),
 # ---- lesson 2: finals
 ('    deck: "Tâi-lô sounds",\n    body: `\n<p>A Taigi syllable',
  '    deck: "Tâi-lô sounds",\n    sections: ' + J(SEC_F) + ',\n    body: `\n<p>A Taigi syllable'),
 ('{{ex:虎|hóo|tiger}}\n<h3>Nasal vowels: nn</h3>\n',
  '{{ex:虎|hóo|tiger}}\n<p>With o and oo, Tâi-lô has six vowels: a, e, i, o, oo and u. Tap a tile for an English sound that comes close. Two vowels side by side glide into each other, as in <i>ai</i>, <i>au</i>, <i>ia</i>, <i>iu</i>, <i>ua</i> and <i>ue</i>: <b>歌</b> <i>kua</i> (song) sounds like "kwa".</p>\n'
  '{{tiles:' + VTI + '}}\n<h3>Nasal vowels: nn</h3>\n'),
 ('{{ex:天|thinn|sky}}\n<h3>-m, -n, -ng</h3>\n',
  '{{ex:天|thinn|sky}}\n<p>Most vowels can go through the nose. Tap a tile: <i>ann</i>, <i>inn</i> and <i>enn</i> are a, i and e said through the nose. After m, n and ng the vowel is always nasal, so Tâi-lô writes no nn: <b>名</b> <i>miâ</i> (name), <b>貓</b> <i>niau</i> (cat).</p>\n'
  '{{tiles:ann=nasal_a inn=nasal_i enn=nasal_e}}\n<h3>-m, -n, -ng</h3>\n'),
 ('{{ex:鹹|kiâm|salty}}\n<h3>Short stops',
  '{{ex:鹹|kiâm|salty}}\n{{tiles:-m=m_of_hum -n=n_of_sun -ng=ng_of_sung}}\n<h3>Short stops'),
 ('{{ex:肉|bah|meat}}\n<h3>Syllables with no vowel</h3>',
  '{{ex:肉|bah|meat}}\n{{tiles:-p=unreleased_p -t=unreleased_t -k=unreleased_k -h=throat_catch}}\n<h3>Syllables with no vowel</h3>'),
 ('{{ex:卵|nn̄g|egg}}\n<div class="tip">',
  '{{ex:卵|nn̄g|egg}}\n{{tiles:m=hummed_m ng=hummed_ng}}\n'
  '<h3>Putting a syllable together</h3>\n<p>Now put the pieces together. A syllable is an initial, a final and a tone (tones 1 and 4 have no mark): <b>豬</b> is t + i, <i>ti</i>, and <b>肉</b> is b + ah, <i>bah</i>. Together they make <b>豬肉</b> <i>ti-bah</i>, pork. Some syllables have no initial: <b>醫生</b> <i>i-sing</i> (doctor) starts straight on the vowel. The cards below are common words. Read the Tâi-lô aloud before you flip each card, and find the initial and final of each syllable. Copy the tone marks: lesson 3 explains them, and lesson 4 shows how the first syllable changes its tone in speech.</p>\n'
  '{{ex:豬肉|ti-bah|pork}}\n<div class="tip">'),
 # ---- lesson 3: tones
 ('    deck: "Seven tones",\n    body: `',
  '    deck: "Seven tones",\n    sections: ' + J(SEC_T) + ',\n    body: `'),
 ('<td class="k">鹿 lo̍k (deer)</td></tr></table></div>\n<h3>The eight animals</h3>',
  '<td class="k">鹿 lo̍k (deer)</td></tr></table></div>\n<p>Tap a tile to see each mark on the one syllable <i>a</i>. Tone 4 and tone 8 need an ending, so they are shown on <i>ah</i>. There is no tone 6, so its cell is empty. The cards below give one more word for each tone: name the tone before you flip the card.</p>\n'
  '{{tiles:' + TONES + '}}\n<h3>The eight animals</h3>'),
 ('is tone 2 again.</p>\n{{ex:獅|sai|lion}}',
  'is tone 2 again. Tap the animals in order.</p>\n{{tiles:獅 虎=hóo 豹 鱉 猴 狗 象 鹿}}\n{{ex:獅|sai|lion}}'),
 # ---- lesson 7: characters
 ('    deck: "Taigi characters",\n    body: `',
  '    deck: "Taigi characters",\n    sections: ' + J(SEC_C) + ',\n    body: `'),
 ('<b>冊</b> <i>tsheh</i> (book). Never write the Mandarin character for a Taigi word, even if a keyboard offers it first.</p>\n',
  '<b>冊</b> <i>tsheh</i> (book), <b>囥</b> <i>khǹg</i> (put, place) and <b>佮</b> <i>kah</i> (and, with). Never write the Mandarin character for a Taigi word, even if a keyboard offers it first.</p>\n'
  '<p>Each character is one syllable. Tap a tile to see its Tâi-lô.</p>\n{{tiles:' + CHT + '}}\n'),
 ('{{ex:這本冊|tsit pún tsheh|this book}}\n<h3>Three rare characters</h3>',
  '{{ex:這本冊|tsit pún tsheh|this book}}\n{{tiles:个 本=pún 兩=nn̄g}}\n'
  '<h3>Putting characters together</h3>\n<p>Many Taigi words are two or three characters, and you read them one character, one syllable, at a time: <b>食</b> <i>tsia̍h</i> (eat) + <b>飯</b> <i>pn̄g</i> (rice) is <b>食飯</b> <i>tsia̍h-pn̄g</i>, eat a meal. The cards below are common words and short phrases built from characters you have already met. Read each one aloud from the characters before you flip it, then check the Tâi-lô.</p>\n'
  '{{ex:好啉|hó-lim|tasty (of a drink)}}\n<h3>Three rare characters</h3>'),
])

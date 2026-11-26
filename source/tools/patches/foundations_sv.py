#!/usr/bin/env python3
# Character foundations, course en-sv (FND-1). Edits tools/target/sv/lessons-1.js; then
#   node tools/target/gen.js sv && node tools/target/validate.js sv && node tools/lessonread/apply.js en-sv
# Swedish uses the Latin alphabet plus å ä ö, so the foundation is the one lesson `vowels`, and it teaches what differs from English, not the ABC.
# Pieces = (a) the letters: all 29 on tiles in the opening section (consonants, with the few that differ: j, c, q, w, x, z);
# (b) vowel length, shown by the consonant after the vowel; (c) the vowel letters, with the six that differ from English
# (o u y å ä ö) on cards; (d) the ring and the dots as part of the word (här, hår, har).
# Putting together = reading a whole word from its spelling: each vowel letter's sound, long before one consonant, short before two.
# A new section "Read whole words" with a deck of 17 real, common words that use only these pieces (no sj, tj or soft k and g).
# The shared deck "Sounds and spelling" is cut across lessons 1 and 2: cards 0-8 in `vowels`, 9-17 in `sounds`.
# `sounds` (the sj- and tj-sounds, an existing lesson) gets `sections` for its slice, plus tiles and a small spelling deck for
# the letter groups behind those two sounds. No card of an existing deck is changed. Readings are stdout of tools/target/sv/respell.js.
# Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'sv', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

VL = [["o","ooh","the letter o","Long o is usually ooh, as in food: en bok, ayn boohk. Short o is usually aw: kom, kawm."],
      ["u","ueh","the letter u","Long u: purse the lips tight and say ooh with the tongue pushed forward, ueh: ett hus, eht huehs. Short u is uh: en buss, ayn buhs."],
      ["y","ew","the letter y","Always a vowel: say ee with rounded lips, ew: fyra, FEW-rah."],
      ["å","oh","the letter å","Long å is a pure oh: gå, goh. Short å is aw, as in law."],
      ["ä","ae","the letter ä","Long ä is ae, the vowel of bad held long: här, haer. Short ä is eh: ett äpple, eht EHP-leh."],
      ["ö","euh","the letter ö","Long ö is euh: snö, sneuh. Short ö is ur, and that r is not an r: öppna, URP-nah."]]

WW = [["en dag","ayn dahg","a day","d + long a (ah) + g. One consonant after the vowel, so the a is long."],
      ["en båt","ayn boht","a boat","b + long å (oh) + t. A pure oh, no glide."],
      ["ett tåg","eht tohg","a train","t + long å (oh) + g. Here the g stays hard."],
      ["ett år","eht ohr","a year","long å (oh) + r. One consonant after the vowel, so the å is long."],
      ["en väg","ayn vaeg","a road, a way","v + long ä (ae) + g."],
      ["röd","reuhd","red","r + long ö (euh) + d."],
      ["blå","bloh","blue","bl + long å (oh). A vowel at the end of a stressed word is long."],
      ["tre","tray","three","tr + long e (ay). A pure ay, with no glide into ee."],
      ["en fot","ayn fooht","a foot","f + long o (ooh) + t. ooh is the vowel of food, not of foot."],
      ["en stol","ayn stoohl","a chair","st + long o (ooh) + l."],
      ["en gata","ayn GAH-tah","a street","g + long a (ah) + t + short a. g before a is hard."],
      ["ett namn","eht nahmn","a name","n + short a (ah) + mn. Two consonants after the vowel, so it is short."],
      ["ett äpple","eht EHP-leh","an apple","short ä (eh) + pp + l + e. The doubled p makes the ä short."],
      ["en dörr","ayn durr","a door","d + short ö (ur) + rr. The doubled r makes the ö short."],
      ["en hund","ayn huhnd","a dog","h + short u (uh) + nd. Two consonants after the vowel, so it is short."],
      ["en buss","ayn buhs","a bus","b + short u (uh) + ss. The doubled s makes the u short."],
      ["en syster","ayn SEWS-tehr","a sister","s + short y (ew) + st + er. The stress is on the first syllable."]]

SJ = [["sj","sj","the sj-sound, spelled sj","sju, sjueh: seven."],
      ["skj","sj","the sj-sound, spelled skj","en skjorta, ayn SJAWRT-ah: a shirt. The k and j are not said."],
      ["stj","sj","the sj-sound, spelled stj","en stjärna, ayn SJAERN-ah: a star. The t and j are not said."],
      ["tj","tj","the tj-sound, spelled tj","tjugo, TJUEH-gaw: twenty."],
      ["kj","tj","the tj-sound, spelled kj","en kjol, ayn tjoohl: a skirt."],
      ["j","y","the letter j","The y of yes, never the j of jam: ja, yah."],
      ["hj","y","h before j","The h is silent: hjälpa, YEHL-pah, to help."]]

SEC1 = [None, None, [{"deck": D, "n": [0, 4]}, {"deck": D, "n": [7, 9]}, {"name": "The vowel letters", "cards": VL}],
        {"deck": D, "n": [4, 7]}, {"name": "Whole words", "cards": WW}]
SEC2 = [[{"deck": D, "n": [9, 15]}, {"name": "sj and tj spellings", "cards": SJ}], {"deck": D, "n": [15, 18]}]

edit('lessons-1.js', [
 ('    blurb: "Hear long and short vowels, read å ä ö u y, and use the pronunciation line.",\n    deck: "Sounds and spelling",\n',
  '    blurb: "Hear long and short vowels, read å ä ö u y, and use the pronunciation line.",\n    deck: "Sounds and spelling",\n    sections: ' + J(SEC1) + ',\n'),
 ('Stress, and long versus short, matter more. Do not add tone marks.</p>\n<h3>Long vowel, short consonant</h3>',
  'Stress, and long versus short, matter more. Do not add tone marks.</p>\n'
  '<h3>29 letters</h3>\n'
  '<p>Swedish uses the 26 letters you know, plus three more at the end of the alphabet: <i>å</i>, <i>ä</i> and <i>ö</i>. They are letters of their own, not an a or an o with a mark. Most consonants sound as in English, but <i>r</i> is tapped or rolled with the tip of the tongue. <i>j</i> is the <i>y</i> of "yes". <i>c</i>, <i>q</i>, <i>w</i>, <i>x</i> and <i>z</i> turn up mostly in names and borrowed words: <i>c</i> is s before e, i and y, and k elsewhere, <i>q</i> is k, <i>w</i> is v, <i>x</i> is ks, <i>z</i> is s. <i>k</i> and <i>g</i> are hard here, and the next lesson shows where they soften. Tap a letter to hear it. The vowels come next.</p>\n'
  '{{tiles:b=b c=s d=d f=f g=g h=h j=y k=k l=l m=m n=n p=p q=k r=r s=s t=t v=v w=v x=ks z=s}}\n'
  '<h3>Long vowel, short consonant</h3>'),
 ('<tr><td class="k">y</td><td>ew, long or short</td><td>not the English word new</td></tr>\n</table></div>\n',
  '<tr><td class="k">y</td><td>ew, long or short</td><td>not the English word new</td></tr>\n</table></div>\n'
  '<p>Nine vowel letters. Tap one to hear its long sound.</p>\n'
  '{{tiles:a=ah e=ay i=ee o=ooh u=ueh y=ew å=oh ä=ae ö=euh}}\n'),
 ('<i>har</i> (have).</div>\n`,',
  '<i>har</i> (have).</div>\n'
  '<h3>Read whole words</h3>\n'
  '<p>Now put it together. Read a word in two steps. First count the consonants after the stressed vowel. One consonant, or none: the vowel is long. Two, or a doubled letter: the vowel is short. Then give the vowel letter its Swedish sound. Long: <i>o</i> is ooh, <i>u</i> is ueh, <i>å</i> is oh, <i>ä</i> is ae, <i>ö</i> is euh. Short: <i>o</i> and <i>å</i> are aw, <i>u</i> is uh, <i>ä</i> is eh, <i>ö</i> is ur. So <i>båt</i> is <i>boht</i>, and <i>buss</i> is <i>buhs</i>. The rule has everyday exceptions. Some short words have one consonant and a short vowel: <i>han</i>, <i>den</i>, <i>kom</i>, <i>hem</i>. And a long vowel can come before <i>rd</i> or <i>rn</i>, as in <i>bord</i> (table) and <i>barn</i> (child), and in forms like <i>köpt</i> (bought). Each card\'s note breaks the word into its pieces. Say the word aloud before you flip it.</p>\n'
  '{{ex:en båt|ayn boht|a boat}}\n'
  '{{ex:en buss|ayn buhs|a bus}}\n'
  '`,'),
 ('    blurb: "Keep the sj-sound and the tj-sound apart, and spot a hard k that stays hard.",\n    deck: "Sounds and spelling",\n',
  '    blurb: "Keep the sj-sound and the tj-sound apart, and spot a hard k that stays hard.",\n    deck: "Sounds and spelling",\n    sections: ' + J(SEC2) + ',\n'),
 ('<p><i>j</i> by itself is the <i>y</i> of "yes", never the <i>j</i> of "jam". The aid writes that <i>j</i>, not a <i>y</i>.</p>\n{{ex:ja|yah|yes}}\n',
  '<p><i>j</i> by itself is the <i>y</i> of "yes", never the <i>j</i> of "jam". The aid writes that <i>j</i>, not a <i>y</i>.</p>\n{{ex:ja|yah|yes}}\n'
  '<p>These letter groups spell the sj-sound or the tj-sound, and <i>j</i> and <i>hj</i> give the <i>y</i> of "yes". They are not the only spellings: <i>k</i> and <i>sk</i> before a front vowel, later in this lesson, are just as common, and at the start of a word <i>dj</i>, <i>gj</i> and <i>lj</i> also give the <i>y</i> of "yes". Tap one to hear it.</p>\n'
  '{{tiles:sj=sj skj=sj stj=sj tj=tj kj=tj j=y hj=y}}\n'),
])

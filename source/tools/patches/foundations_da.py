#!/usr/bin/env python3
# Character foundations, course en-da (FND-1). Edits tools/target/da/lessons-1.js; then
#   node tools/target/gen.js da && node tools/target/validate.js da && node tools/lessonread/apply.js en-da
# Danish uses the Latin alphabet, so the foundation is ONE lesson, `alphabet`, and it teaches what differs from English, not the ABC.
# Pieces = (a) the three extra letters æ, ø, å; (b) the vowels and the glides ej, øj, which keep one pure sound each;
# (c) the consonants and spellings that change: d (plain, soft, silent), j, g, r, hv, and kk/pp/tt with no puff.
# The letters that sound much as in English (and the loan letters c, q, w, x, z) get one tile block in the opening section,
# so all 29 letters are on tiles. No letter gets a card of its own.
# Putting together = reading a whole word from its letters, with the soft d, the silent d and the melting r in place:
# a new section "Read whole words" with an in-lesson deck of 17 real, common words; each note breaks the word into its pieces.
# "Sounds and spelling" is cut across the sections that teach its cards; én (one card) joins the whole-words block.
# Lessons `vowels` and `soft-d` are not touched. No card of an existing deck is changed. Readings follow the course's own lines.
# Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'da', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

WW = [["tak","tak","thanks","t, a, k: every letter as you see it. Before k the a sits further back than the a of cat."],
      ["du","doo","you","d at the start of a word is a plain d; u is oo."],
      ["vi","vee","we","v as in English; a long i is ee."],
      ["bil","beel","car","b, long i as ee, l."],
      ["hus","hoos","house","h, u as oo, s."],
      ["dansk","dansk","Danish","d at the start is plain; a as in cat; n, s, k as in English."],
      ["tysk","tewsk","German","y is ee with rounded lips, ew; then s and k."],
      ["ost","awst","cheese","A short o is aw; then s and t."],
      ["stor","stoh","big","st, a long o as oh, and the r melts into the vowel."],
      ["mor","moh","mother","m, long o as oh; the r after the vowel melts away."],
      ["høj","hoy","high; tall","h, then øj, the oy of boy."],
      ["rød","roedh","red","r, ø as oe, and d after a vowel is soft d, dh."],
      ["brød","broedh","bread","br, ø as oe, soft d at the end."],
      ["hvad","vadh","what","h is silent before v; a as in cat; soft d after the vowel."],
      ["mænd","maen","men","m, æ as ae, and d after n is silent."],
      ["børn","boen","children","b, ø as oe; the r melts into the vowel; n."],
      ["kvinde","KVEH-nuh","woman","kv, a short i as eh, d after n is silent, and a final e is uh. Stress on the first syllable."]]

SEC = [None,
       {"deck": D, "n": [0, 4]},
       [{"deck": D, "n": [4, 5]}, {"deck": D, "n": [11, 12]}, {"deck": D, "n": [13, 15]}, {"deck": D, "n": [16, 17]}],
       [{"deck": D, "n": [5, 11]}, {"deck": D, "n": [12, 13]}],
       None,
       [{"deck": D, "n": [15, 16]}, {"name": "Whole words", "cards": WW}],
       None]

edit('lessons-1.js', [
 ('    id: "alphabet",\n    title: "The alphabet: æ, ø, å",\n    blurb: "Read æ, ø and å, and follow the pronunciation line under every Danish phrase.",\n    deck: "Sounds and spelling",\n    body: `',
  '    id: "alphabet",\n    title: "The alphabet: æ, ø, å",\n    blurb: "Read æ, ø and å, and follow the pronunciation line under every Danish phrase.",\n    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('{{ex:mælk|maelk|milk}}\n<h3>æ, ø and å</h3>',
  '{{ex:mælk|maelk|milk}}\n<p>Most consonants sound much as in English. <b>c</b>, <b>q</b>, <b>w</b>, <b>x</b> and <b>z</b> turn up mainly in borrowed words and names: c is s before e, i and y and k elsewhere, q is k, w is v, x is ks, and z is s. Tap a letter to hear it.</p>\n{{tiles:b=b f=f h=h k=k l=l m=m n=n p=p s=s t=t v=v c=s q=k w=v x=ks z=s}}\n<h3>æ, ø and å</h3>'),
 ('The line writes <b>aw</b>, the vowel of caught.</p>\n',
  'The line writes <b>aw</b>, the vowel of caught.</p>\n{{tiles:æ=ae ø=oe å=aw}}\n'),
 ('{{ex:Hej.|hai|Hi.}}\n<h3>The accent on e</h3>',
  '{{ex:Hej.|hai|Hi.}}\n<h3>The other vowels</h3>\n<p>Danish vowels are pure: hold each one steady, with no English slide at the end. <b>a</b> is often the a of cat, as in dansk. Next to r, as in far, it is the ah of father, and before k, p or f (tak, kaffe) it sits between the two. <b>e</b> is eh, a tighter, higher sound than æ, and uh when it is not stressed. <b>i</b> is ee when long, and often eh when short, as in ikke. <b>o</b> is oh when long, and aw when short. <b>u</b> is oo, the vowel of food, though a short u is sometimes nearer aw, as in under. <b>y</b> is ee said with rounded lips, and the line writes ew. Two pairs glide: <b>ej</b> is ai, the vowel of eye, and <b>øj</b> is oy, the vowel of boy. Tap a vowel to hear it. The next lesson takes them one by one.</p>\n{{tiles:a=a e=eh i=ee o=oh u=oo y=ew ej=ai øj=oy}}\n<p>An r after a vowel melts into it, and the line drops it. So <b>far</b>, father, is fa, and <b>får</b>, a sheep, is faw. Only the vowel tells them apart.</p>\n{{ex:får|faw|sheep}}\n<h3>Consonants that change</h3>\n<p>A few consonants do not sound as in English. <b>d</b> at the start of a word is a plain d. After a vowel it is usually soft d, dh on the line: <b>mad</b> is madh. After n or l it is silent: <b>land</b> is lan, and <b>kold</b> is kawl. So <b>hund</b>, dog, sounds like <b>hun</b>, she, apart from the stød, a catch in the voice that a later lesson trains. <b>j</b> is the y of yes: <b>ja</b> is ya. <b>g</b> at the start of a word is the g of go. At the end of a word it often goes quiet. <b>r</b> is made in the throat. <b>h</b> is silent before v and j: <b>hvad</b> is vadh, and <b>hjem</b>, home, starts with y. A doubled <b>kk</b>, <b>pp</b> or <b>tt</b> has no puff of air, so the line writes g, b or d: <b>ikke</b> is EH-guh. Tap a letter or spelling to hear it.</p>\n{{tiles:d=d ad=adh nd=n ld=l j=y g=g r=r hv=v kk=g pp=b tt=d}}\n{{ex:mad|madh|food}}\n<h3>The accent on e</h3>'),
 ('{{ex:ét|eht|one (the number, not the article et)}}\n',
  '{{ex:ét|eht|one (the number, not the article et)}}\n{{tiles:é=eh}}\n<h3>Read whole words</h3>\n<p>Now put the pieces together. Read a word letter by letter, give each letter or pair its Danish sound, and keep the vowels pure. Then check the three traps: d after a vowel is usually soft, d after n, l or r is usually silent, and r after a vowel melts away. So <b>rød</b> is roedh, <b>mænd</b> is maen, and <b>mor</b> is moh. A word of two syllables is usually stressed on the first, and a final e is uh: <b>kaffe</b> is KA-fuh. Each card\'s note breaks the word into its letters. Say the word aloud before you flip it.</p>\n{{ex:kaffe|KA-fuh|coffee}}\n'),
])

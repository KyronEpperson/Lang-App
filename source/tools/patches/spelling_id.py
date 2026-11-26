#!/usr/bin/env python3
"""Spelling-patterns section for id-en lesson 1 (alphabet): lesson body + section flashcards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/id/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/id-en/sections.json")

H3 = "<h3>Gabungan huruf: tidak dibaca huruf demi huruf</h3>"

SECTION = "\n" + H3 + """
<p>Dalam bahasa Indonesia, setiap huruf hampir selalu dibaca sama, jadi kita terbiasa membaca kata huruf demi huruf. Dalam bahasa Inggris, dua atau tiga huruf sering bergabung menjadi <b>satu bunyi</b>, dan bunyinya bisa jauh dari bunyi hurufnya. Misalnya, <b>ai</b> pada <b>rain</b> bukan ai seperti pada <i>pantai</i>, melainkan ei. Lalu, <b>ch</b> dibaca seperti c pada <i>cari</i>. Bunyi TH dan SH akan kamu lihat di pelajaran berikutnya.</p>
<p>Perhatikan juga <b>e di akhir kata</b>. Biasanya e itu tidak dibaca (kecuali pada kata pendek seperti <b>he</b>, <b>me</b>, <b>we</b>, yang dibaca ii), tetapi vokal sebelumnya berubah menjadi nama hurufnya: a-e = ei, i-e = ai, o-e = ou. Jadi <b>name</b> dibaca neim, bukan <i>namé</i>. Pada kn dan wr di awal kata, huruf k dan w tidak dibaca.</p>
<div class="tbl"><table><tr><th>Ejaan</th><th>Cara baca</th><th>Contoh</th></tr><tr><td class="k">ch</td><td>c</td><td>chair (cér), lunch (lanc)</td></tr><tr><td class="k">ph</td><td>f</td><td>phone (foun), photo (FOU-dou)</td></tr><tr><td class="k">qu</td><td>kw</td><td>queen (kwiin), quick (kwik)</td></tr><tr><td class="k">kn / wr</td><td>n / r</td><td>knife (naif), write (rait)</td></tr><tr><td class="k">a-e</td><td>ei</td><td>name (neim), cake (keik)</td></tr><tr><td class="k">i-e</td><td>ai</td><td>time (taim), bike (baik)</td></tr><tr><td class="k">o-e</td><td>ou</td><td>home (houm), nose (nouz)</td></tr><tr><td class="k">ee / ea</td><td>ii</td><td>green (griin), tea (tii)</td></tr><tr><td class="k">oo</td><td>uu</td><td>moon (muun), room (ruum)</td></tr><tr><td class="k">ai / ay</td><td>ei</td><td>rain (rein), day (dei)</td></tr><tr><td class="k">ou / ow</td><td>au</td><td>house (haus), cow (kau)</td></tr><tr><td class="k">igh</td><td>ai</td><td>night (nait), high (hai)</td></tr></table></div>
{{tiles:ch=c ph=f qu=kw kn=n wr=r a-e=ei i-e=ai o-e=ou ee=ii ea=ii oo=uu ai=ei ay=ei ou=au ow=au igh=ai}}
<p>Ingat, ini pola umum, bukan aturan mutlak. Justru kata sehari-hari yang paling sering melanggarnya: <b>have</b> (hèv), <b>give</b> (giv), <b>come</b> (kam), dan <b>love</b> (lav) tidak mengikuti pola e akhir; <b>good</b> (gud) dan <b>look</b> (luk) memakai u pendek; <b>bread</b> (bréd) dan <b>head</b> (héd) memakai é; <b>you</b> (yuu) memakai uu; <b>snow</b> (snou) memakai ou; dan pada <b>school</b> (skuul), ch dibaca k. Kalau ragu, lihat cara baca di kartu.</p>"""

ANCHOR = '"sari dot dewi at mail dot com".</div>`},'

CARDS = [
    ["chair", "cér", "kursi (ch dibaca c)", ""],
    ["phone", "foun", "telepon (ph dibaca f)", ""],
    ["knife", "naif", "pisau (k tidak dibaca)", ""],
    ["cake", "keik", "kue (a-e dibaca ei)", ""],
    ["nose", "nouz", "hidung (o-e dibaca ou)", ""],
    ["green", "griin", "hijau (ee dibaca ii)", ""],
    ["moon", "muun", "bulan di langit (oo dibaca uu)", ""],
    ["rain", "rein", "hujan (ai dibaca ei)", ""],
    ["house", "haus", "rumah (ou dibaca au)", ""],
    ["night", "nait", "malam (igh dibaca ai)", ""],
]

# 1. lesson body
src = open(LESSONS, encoding="utf-8").read()
assert H3 not in src, "spelling section already applied to lessons.js"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR[:-3] + SECTION + "`},", 1)
open(LESSONS, "w", encoding="utf-8").write(src)

# 2. sections.json (textual insert to keep the file's hand formatting)
js = open(SECTIONS, encoding="utf-8").read()
data = json.loads(js)
assert "4" not in data["alphabet"], "alphabet section 4 already has cards"
old_tail = '    ["at", "èt", "@ (dalam alamat email)", ""]\n  ]}\n },'
assert js.count(old_tail) == 1, "sections.json anchor not found exactly once"
lines = ",\n".join("    " + json.dumps(c, ensure_ascii=False) for c in CARDS)
new_tail = old_tail[:-len("\n },")] + ',\n  "4": {"add": [\n' + lines + "\n  ]}\n },"
js = js.replace(old_tail, new_tail, 1)
data2 = json.loads(js)
assert len(data2["alphabet"]["4"]["add"]) == len(CARDS)
open(SECTIONS, "w", encoding="utf-8").write(js)
print("spelling_id: applied")

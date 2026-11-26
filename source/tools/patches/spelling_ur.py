#!/usr/bin/env python3
"""Spelling patterns section for ur lesson 1 (alphabet) + its flashcards (ur-en)."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/ur/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/ur-en/sections.json")

ANCHOR = 'تین ایک جیسے حروف ہوں تو الگ الگ بولیں۔</div>`},'
MARK = '<h3>حروف مل کر: ہجے سے آواز تک</h3>'

ROWS = [
    ("th", '/θ/ یا /ð/، "تھ" نہیں (اگلے سبق میں)', "thank /ˈθæŋk/, mother /ˈmʌðər/"),
    ("ph", '/f/، "پھ" نہیں', "phone /ˈfoʊn/, photo /ˈfoʊtoʊ/"),
    ("wh", "/w/، h خاموش (مگر who میں /h/)", "what /ˈwʌt/, white /ˈwaɪt/"),
    ("ng", "/ŋ/، آخر میں گ نہیں", "long /ˈlɔːŋ/, song /ˈsɔːŋ/"),
    ("kn", "/n/، k خاموش", "know /ˈnoʊ/, knife /ˈnaɪf/"),
    ("igh", "/aɪ/، gh خاموش", "night /ˈnaɪt/, high /ˈhaɪ/"),
    ("a-e", "/eɪ/، آخری e خاموش", "name /ˈneɪm/, cake /ˈkeɪk/"),
    ("i-e", "/aɪ/، آخری e خاموش", "five /ˈfaɪv/, nice /ˈnaɪs/"),
    ("o-e", "/oʊ/، آخری e خاموش", "home /ˈhoʊm/, nose /ˈnoʊz/"),
    ("ea", "/iː/ (مگر bread اور head میں /e/)", "tea /ˈtiː/, eat /ˈiːt/"),
    ("oo", "/uː/ (مگر good اور book میں /ʊ/)", "moon /ˈmuːn/, room /ˈruːm/"),
    ("ou", "/aʊ/ (مگر you میں /uː/، اور could، would میں /ʊ/)", "house /ˈhaʊs/, out /ˈaʊt/"),
]

TILES = ("th=/θ/,_/ð/ ph=/f/ wh=/w/ ng=/ŋ/ kn=/n/ igh=/aɪ/ "
         "a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ea=/iː/ oo=/uː/ ou=/aʊ/")

P1 = ('<p>انگریزی میں اکثر دو یا تین حروف مل کر ایک نئی آواز بناتے ہیں، اور کچھ حروف لکھے تو جاتے ہیں مگر بولے نہیں جاتے۔ '
      'رومن اردو کی عادت یہاں کام بھی آتی ہے اور دھوکا بھی دیتی ہے۔ sh اور ch وہی ہیں جو رومن اردو میں: ش اور چ '
      '(مگر school میں ch کی آواز /k/ ہے)۔ دھوکا <b>th</b> اور <b>ph</b> میں ہے: '
      'رومن اردو میں یہ "تھ" اور "پھ" ہیں، انگریزی میں نہیں۔ ph کی آواز تقریباً ہمیشہ f ہے۔ '
      'kn میں k خاموش ہے، wr میں w (write، wrong)، اور igh میں gh۔</p>')
P2 = ('<p>لفظ کے آخر کا <b>e</b> عام طور پر خاموش ہوتا ہے، مگر پچھلا واول اپنے نام والی آواز میں بولا جاتا ہے: '
      'name میں a کی آواز وہی ہے جو حرف A کا نام، یعنی /eɪ/۔ یہ اصول ہر لفظ پر نہیں چلتا: '
      '<b>have، give، come</b> اور <b>love</b> میں واول اپنے نام والی آواز نہیں لیتا۔ اور <b>he، she، me</b> اور <b>we</b> میں '
      'آخری e خاموش نہیں، /iː/ بولا جاتا ہے۔ واولوں کے جوڑوں کے استثنا نیچے جدول میں ہیں۔</p>')


def section():
    rows = "".join('<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
    table = ('<div class="tbl"><table><tr><th>حروف</th><th>آواز</th><th>مثالیں</th></tr>%s</table></div>' % rows)
    return "\n" + MARK + "\n" + P1 + "\n" + P2 + "\n" + table + "\n{{tiles:" + TILES + "}}"


CARDS = [
    ["phone", "/ˈfoʊn/", "فون", ""],
    ["mother", "/ˈmʌðər/", "ماں، امی", ""],
    ["knife", "/ˈnaɪf/", "چھری، چاقو", ""],
    ["night", "/ˈnaɪt/", "رات", ""],
    ["cake", "/ˈkeɪk/", "کیک", ""],
    ["five", "/ˈfaɪv/", "پانچ", ""],
    ["home", "/ˈhoʊm/", "گھر", ""],
    ["tea", "/ˈtiː/", "چائے", ""],
    ["moon", "/ˈmuːn/", "چاند", ""],
    ["house", "/ˈhaʊs/", "مکان، گھر (عمارت)", ""],
]


def main():
    src = open(LESSONS, encoding="utf-8").read()
    assert MARK not in src, "spelling section already applied"
    assert src.count(ANCHOR) == 1, "anchor not found exactly once"
    head = ANCHOR[: -len("`},")]
    src = src.replace(ANCHOR, head + section() + "`},", 1)
    open(LESSONS, "w", encoding="utf-8").write(src)

    raw = open(SECTIONS, encoding="utf-8").read()
    data = json.loads(raw)
    assert json.dumps(data, ensure_ascii=False, indent=1) == raw, "unexpected sections.json formatting"
    alpha = data["alphabet"]
    n = str(src.split('{ id:"alphabet"', 1)[1].split('{ id:"pron"', 1)[0].count("<h3>") - 1)
    assert n not in alpha, "section %s already has cards" % n
    alpha[n] = {"add": CARDS}
    open(SECTIONS, "w", encoding="utf-8").write(json.dumps(data, ensure_ascii=False, indent=1))
    print("spelling_ur: lesson section + %d cards at alphabet[%s]" % (len(CARDS), n))


if __name__ == "__main__":
    main()

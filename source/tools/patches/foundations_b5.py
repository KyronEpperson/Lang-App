#!/usr/bin/env python3
# Character foundations, batch 5: 14 Latin-script courses for English speakers (it pt ptpt espr nl da no sv pl cs id tl ceb hmn).
# Test list, the Hmong checks learn about lesson `sections`, hand-off notes. usage: python3 tools/patches/foundations_b5.py <version>
import io, os, sys, re
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def rw(rel, f):
    p = os.path.join(ROOT, rel); s = io.open(p, encoding='utf8').read(); t = f(s); assert t != s, rel; io.open(p, 'w', encoding='utf8').write(t)
def one(s, a, b):
    assert s.count(a) == 1, a[:60]; return s.replace(a, b)

NEW = {
 'en-it': ('sounds', 'abcdefghilmnopqrstuvzàèéìòù', []),
 'en-pt': ('sounds', 'abcdefghijklmnopqrstuvwxyzçáâãàéêíóôõú', []),
 'en-ptpt': ('vowels', 'abcdefghijklmnopqrstuvwxyzç', []),
 'en-espr': ('sounds', 'abcdefghijklmnñoprstuvwxyz', ['qu']),
 'en-nl': ('vowels', 'abcdefghijklmnopqrstuvwxyz', ['ij']),
 'en-da': ('alphabet', 'abcdefghijklmnopqrstuvwxyzæøå', []),
 'en-no': ('alphabet', 'abcdefghijklmnopqrstuvwxyzæøå', []),
 'en-sv': ('vowels', 'abcdefghijklmnopqrstuvwxyzåäö', []),
 'en-pl': ('alphabet', 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż', []),
 'en-cs': ('alphabet', 'aábcčdďeéěfghiíjklmnňoópqrřsštťuúůvwxyýzž', ['ch']),
 'en-id': ('sounds', 'abcdefghijklmnopqrstuvwxyz', []),
 'en-tl': ('sounds', 'abkdeghilmnoprstuwycfjñqvxz', ['ng']),
 'en-ceb': ('sounds', 'abcdefghijklmnñopqrstuvwxyz', ['ng']),
}
HMN = "p ph np nph pl plh npl nplh t th nt nth d dh r rh nr nrh c ch nc nch k kh nk nkh q qh nq nqh tx txh ntx ntxh ts tsh nts ntsh m n ny ml l hm hn hny hml hl f v x s z xy y h a e i o u w ee oo ai au aw ia ua b j g"
def tests(s):
    add = " /* batch 5: Latin-script courses, ONE lesson each, letters on tiles only */\n"
    for cid, (les, letters, extra) in NEW.items():
        add += " '%s':{lessons:['%s'],letters:[],tilesOnly:[...'%s'%s],words:['%s']},\n" % (cid, les, letters, ''.join(",'%s'" % x for x in extra), les)
    add += " /* Hmong (RPA): the pieces are consonant clusters, vowels and the tone letters, all on tiles */\n 'en-hmn':{lessons:['tones'],letters:[],tilesOnly:'%s'.split(' '),words:['tones']},\n" % HMN
    s = one(s, " 'en-am':{lessons:['orders'", add + " 'en-am':{lessons:['orders'")
    m = re.search(r"const PENDING='([^']*)'", s); left = [c for c in m.group(1).split(' ') if c not in NEW and c != 'en-hmn']
    s = s.replace(m.group(0), "const PENDING='%s'" % ' '.join(left))
    # FND_ONLY=en-it,en-pt node tools/tests/foundations.js checks only those courses in parts B to D (for work in progress; the release runs all)
    s = one(s, "for(const cid of Object.keys(FOUND)){ const F=FOUND[cid]; let p=await open(b,cid);", "for(const cid of Object.keys(FOUND).filter(c=>!process.env.FND_ONLY||process.env.FND_ONLY.split(',').includes(c))){ const F=FOUND[cid]; let p=await open(b,cid);")
    return s
rw('tools/tests/foundations.js', tests)

# Hmong checks: a lesson's `sections` (FND-1) hold deck names, slices and in-lesson decks of cards
def rpa(s):
    a = "Object.keys(l).forEach(k => { if (!['id', 'title', 'blurb', 'deck', 'body'].includes(k)) unknown(p + '.' + k); }); });"
    b = ("const secCards = (x, q) => { if (Array.isArray(x)) x.forEach((y, j) => secCards(y, q + '[' + j + ']')); else if (x && typeof x === 'object' && Array.isArray(x.cards)) { put(x.name, 'N', q + '.name'); x.cards.forEach((r, j) => { put(r[0], 'T', q + `.cards[${j}][0]`); put(r[1], 'P', q + `.cards[${j}][1]`); put(r[2], 'N', q + `.cards[${j}][2]`); put(r[3], 'N', q + `.cards[${j}][3]`); }); } }; secCards(l.sections, p + '.sections'); /* FND-1: in-lesson decks are cards like any other; deck names and slices point at DECKS */\n"
         "    Object.keys(l).forEach(k => { if (!['id', 'title', 'blurb', 'deck', 'body', 'sections'].includes(k)) unknown(p + '.' + k); }); });")
    return one(s, a, b)
rw('tools/hmong/rpa_check.js', rpa)
def chk(s):
    a = "RCK.checkToken(y.replace(/-/g, ''), { allow: new Set() }).kind === 'letter'); };"
    b = "(RCK.checkToken(y.replace(/-/g, ''), { allow: new Set() }).kind === 'letter' || /^(a|e|i|o|u|w|ee|oo|ai|au|aw|ia|ua)$/i.test(y))); }; /* FND-1: the 13 RPA vowels are letters being taught too */"
    return one(s, a, b)
rw('tools/target/hmn/check.js', chk)

def handoff(s):
    a = "  - Still to do, in order:"
    i = s.rindex(a); j = s.index('\n', i)
    note = """  - **Batch 5, %s: `en-it`, `en-pt`, `en-ptpt`, `en-espr`, `en-nl`, `en-da`, `en-no`, `en-sv`, `en-pl`, `en-cs`, `en-id`, `en-tl`, `en-ceb`, `en-hmn`.** Written in parallel after the owner asked for more agents (2026-11-25: "cant we use more agents to build faster?"): one Opus writer and one Opus cold reviewer per course in its own copy of `source/` (`/home/w_<t>`), a Sonnet pass applied each reviewer's must-fix and should-fix findings, one release for the batch. Each course: ONE foundation lesson (lesson 1, id unchanged), letters on tiles only, small in-lesson decks for spellings that differ from English and a deck of whole words. en-sv also gives `sounds` (lesson 2) its own sections. en-hmn: lesson `tones` has tiles for the consonant clusters, the 13 vowels and the tone letters. The Hmong checks changed with it: `tools/hmong/rpa_check.js` reads the cards inside a lesson's `sections`, and `tools/target/hmn/check.js` accepts a bare vowel in bold as a letter being taught. `FND_ONLY=en-it,en-pt node tools/tests/foundations.js` checks only the named courses.
  - Still to do: en-nan. vi-zh belongs to the thread that rebuilds the East and Southeast Asian courses.""" % V
    s = s[:i] + note + s[j:]
    return re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
rw('docs/HANDOFF.md', handoff)
def it(s):
    return s.rstrip('\n') + """

### FND-1 — batch 5 (%s): 14 Latin-script courses at once
Kii: "that sounds like only one or two agents cant we use more agents to build faster?" 14 Opus writers and 14 Opus cold reviewers ran side by side (2.7M tokens, 35 minutes), then 14 Sonnet passes applied the findings (22 must-fix, 74 should-fix; 1.0M tokens, 3 minutes). Found by the release checks: the Hmong checks did not know a lesson's `sections` and rejected the bare vowels in bold. Not tested: native speakers, real phones.
""" % V
rw('iterations.md', it)
print('batch 5 for', V)

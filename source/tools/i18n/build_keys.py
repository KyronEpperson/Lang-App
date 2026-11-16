"""Builds / refreshes the frozen interface key list tools/i18n/keys.json.

Source of truth for WHICH keys exist and their ORDER: the Korean tables (tools/i18n/ko/ui.json, exact order) and the pattern
position list (pattern order is semantic: the engine uses the first pattern that matches). The app source (src/app.html, read-only)
is only used to fill the informational "where" field.

usage: python3 tools/i18n/build_keys.py                 keep existing entries/order/notes, append keys new in ko/ui.json, refresh "where"
       python3 tools/i18n/build_keys.py --bootstrap CAPTURE.json
                                                        first build only: CAPTURE holds the old gen.py section names and the
                                                        exact pattern position list (incl. the duplicated template)
Entries are never removed or reordered by this script (frozen); a key that disappears from ko is reported, not deleted.
Keys from docs/LL-KEYS.md are merged by merge_ll_keys.py, not here."""
import json, os, re, sys, html as H
D = os.path.dirname(os.path.abspath(__file__))
KEYS = os.path.join(D, 'keys.json')
APP = '/home/claude/src/app.html'
sys.dont_write_bytecode = True
sys.path.insert(0, D)
from i18nlib import TOK, SLOT_TYPES, template_regex, slots_of, load_lang

ko = load_lang('ko')
old = json.load(open(KEYS, encoding='utf-8')) if os.path.exists(KEYS) else None
cap = None
if '--bootstrap' in sys.argv:
    cap = json.load(open(sys.argv[sys.argv.index('--bootstrap') + 1], encoding='utf-8'))
elif old is None:
    sys.exit('keys.json missing: run once with --bootstrap CAPTURE.json')

# ---------- where: locate a key in the app source (informational only) ----------
app = open(APP, encoding='utf-8').read() if os.path.exists(APP) else ''
s0 = app.find('<script>'); st_end = app.find('</style>')
DECL = re.compile(r'(?:function\s+([A-Za-z_$][\w$]*)|(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=)')
def where(key):
    if not app: return ''
    forms = [key, H.escape(key, quote=False), key.replace("'", "\\'"), key.replace('"', '\\"'), key.replace('"', '&quot;')]
    pos = -1
    for f in forms:
        pos = app.find(f)
        if pos >= 0: break
    if pos < 0: return 'not verbatim in src/app.html (assembled at runtime)'
    before = app[max(0, pos - 400):pos]
    m = re.search(r'\b(placeholder|aria-label|title)=["\']$', before)
    t = re.findall(r'<([a-z][a-z0-9]*)\b[^<>]*>?[^<>]*$', before)
    tag = t[-1] if t else ''
    if st_end < pos < s0 or s0 < 0:
        return 'html ' + ('<%s> @%s' % (tag, m.group(1)) if m else '<%s> text' % tag if tag else 'text')
    decls = [x.group(1) or x.group(2) for x in DECL.finditer(app, max(s0, pos - 6000), pos)]
    fn = decls[-1] if decls else '(top level)'
    return 'js ' + fn + ('()' if decls else '') + (' <%s>' % tag if tag else '') + (' @' + m.group(1) if m else '')

# ---------- kind + context heuristics ----------
OVERRIDE = {
    'Today': 'bottom-nav tab: the daily session screen', 'Practice': 'bottom-nav tab: quizzes and drills', 'Review': 'bottom-nav tab: flashcard review (noun, not "to review")',
    'Lessons': 'bottom-nav tab', 'Read': 'bottom-nav tab: reading / writing drills (noun-like tab name)', 'Progress': 'bottom-nav tab: stats screen', 'Feedback': 'bottom-nav tab: send feedback',
    'Due': 'filter chip: only cards due for review', 'All': 'filter chip: all cards', 'native': 'audio speed option: native-speaker speed', 'slow': 'audio speed option', 'normal': 'audio speed option',
    'Type': 'feedback form: category radio-group label ("kind of feedback"), not the verb', 'Level': 'XP level label, e.g. on the share card', 'level': 'stat caption under a number ("level")',
    'next': 'keyboard-hint caption: Enter = next', 'Enter': 'keyboard key name (keep as the key is labelled)', 'XP': 'experience points (usually kept as XP)', 'Mixed': 'quiz mode: read + listen + recall mixed',
    'Deck': 'form label: choose a deck', 'Decks': 'heading over the deck list', 'Mode': 'form label: choose a quiz mode', 'Audio': 'settings label', 'Speed': 'settings label: audio speed',
    'Shuffle': 'button', 'Continue': 'button', 'Language': 'heading / button: choose the language', 'Course': 'label: current course', 'Courses': 'heading: course list',
    'DELETE': 'the confirmation word the user must type to delete the account ("Type DELETE to confirm"); the engine compares the typed text, so keep it as DELETE (the engine compares the typed text with the literal DELETE; ko keeps DELETE)',
    'Korean': 'language name (the native-language option Korean)', 'English': 'language name', 'Lang App': 'product name: keep untranslated',
}
LEGACY = re.compile(r'Korean|Hangul|romaniz', re.I)
HANGUL = re.compile(r'[가-힣ㄱ-ㆎ]')
def kind_of(k):
    if k.isupper() and re.search(r'[A-Z]{3}', k) and k != 'DELETE': return 'canvas'
    if re.match(r'^[·:,;)\-–—/=]', k) or re.search(r'(\s[·(:—–/-]|[(:])\s*$', k): return 'fragment'
    if len(k.split()) <= 4 and not re.search(r'[.?!…]$', k): return 'label'
    return 'sentence'
def context_of(k, kind):
    notes = []
    if k in OVERRIDE: notes.append(OVERRIDE[k])
    if kind == 'canvas': notes.append('drawn on a canvas image (share card / certificate), uppercase in English; keep short')
    if kind == 'fragment': notes.append('fragment of a longer runtime string; keep the leading/trailing punctuation and spacing')
    if HANGUL.search(k): notes.append('key mixes Korean and English (legacy en-ko wording); translate the English part, keep the Korean only if it is the course content')
    if LEGACY.search(k): notes.append('legacy wording: "Korean"/"Hangul"/"romanization" refer to the language being learned and its pronunciation aid; for <lang>-en courses say English / pronunciation (ko renders "Korean" as 영어)')
    if kind == 'label' and len(k.split()) <= 2 and not notes and len(k) <= 12: notes.append('short UI label (button, chip or heading); keep it short')
    return '; '.join(notes)

def exact_entry(k, section):
    kind = kind_of(k)
    e = {'key': k, 'kind': kind, 'section': section, 'where': where(k)}
    c = context_of(k, kind)
    if c: e['context'] = c
    return e

FILL = {'n': ['5', '2', '3', '4', '6', '7', '8', '9'], 'f': ['1.5', '2.5', '3.5'], 's': ['Greetings', 'Travel', 'Food'], 'x': ['Hello there', 'Good night', 'See you'],
        'e': ['mina@example.com', 'jo@example.com'], 'd': ['Travel', 'Food', 'Work']}
def example(t, variant=0):
    cnt = {}
    def r(m):
        ty = m.group(1); i = cnt.get(ty, 0); cnt[ty] = i + 1
        vals = FILL[ty]; return vals[(i + variant) % len(vals)]
    return re.sub(r'\{([nfsxed])\}', r, t)

# ---------- assemble ----------
if cap:
    xsec = cap['XSEC']
    exact = [exact_entry(k, xsec.get(k, '')) for k in ko['exact']]
    positions = [(t, sec) for t, _, sec in cap['PSRC']]
else:
    exact = old['exact']
    have = {e['key'] for e in exact}
    for k in ko['exact']:
        if k not in have: exact.append(exact_entry(k, 'added')); print('new exact key', repr(k))
    for e in exact:
        if 'LL-KEYS' not in e.get('source', ''): e['where'] = where(e['key'])
    gone = [e['key'] for e in exact if e['key'] not in ko['exact'] and 'ko' not in e.get('optionalFor', [])]
    if gone: print('WARN keys no longer in ko/ui.json (kept, frozen):', gone)
    positions = [(p['template'], p.get('section', '')) for p in old['patterns']]
    known = {p['template'] for p in old['patterns']}
    for t in ko['patterns']:
        if t not in known: positions.append((t, 'added')); print('new pattern', repr(t), '(appended LAST: move it if it must win over an earlier pattern)')

regs = [re.compile(template_regex(t)) for t, _ in positions]
patterns, seen = [], {}
for i, (t, sec) in enumerate(positions):
    ex, shadow = None, None
    for v in range(4):
        cand = example(t, v)
        first = next((j for j, r in enumerate(regs) if r.match(cand)), None)
        if first == i: ex, shadow = cand, None; break
        if ex is None: ex, shadow = cand, first
    e = {'id': t if t not in seen else t + '#' + str(seen[t] + 1), 'template': t, 'slots': slots_of(t), 'regex': template_regex(t), 'example': ex, 'section': sec}
    notes = []
    if t in seen: e['repeatOf'] = t; notes.append('repeated position of an earlier pattern with the same template (never reached; kept for byte-identical ko output); shares its translation')
    elif shadow is not None: notes.append('example is caught first by earlier pattern ' + json.dumps(positions[shadow][0], ensure_ascii=False))
    if re.search(r'\{n\}\s*[A-Za-z×]', t): notes.append('count slot: the translation must read correctly at 1 and at 2+')
    if old:
        prev = next((p for p in old['patterns'] if p['id'] == e['id']), None)
        if prev and prev.get('context'): notes = [prev['context']]
    if notes: e['context'] = '; '.join(notes)
    seen[t] = seen.get(t, 0) + 1
    patterns.append(e)

out = {
    'version': 1,
    'about': 'Frozen interface key list. Every language translates every exact key and every distinct pattern template (patterns with the same template share one translation). '
             'Translations live in tools/i18n/<lang>/ui.json: "exact": {key: text}, "patterns": {template: text with {1}..{k} for the slots in order (reordering allowed)}. '
             'Order is stable; "where" is an approximate, informational pointer into src/app.html (heuristic, may drift as the app changes); pattern order is semantic (first match wins). "optionalFor" lists languages that may omit a key. Regenerate with build_keys.py; merge engine LL() keys with merge_ll_keys.py.',
    'slotTypes': SLOT_TYPES,
    'counts': {'exact': len(exact), 'patterns': len(patterns), 'distinctPatternTemplates': len(seen)},
    'exact': exact,
    'patterns': patterns,
}
if old and 'counts' in old:
    pass
with open(KEYS, 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1); f.write('\n')
print('keys.json: exact', len(exact), '· pattern positions', len(patterns), '· distinct templates', len(seen))

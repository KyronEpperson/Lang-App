#!/usr/bin/env python3
# MEM-2 (release B): adds the two new interface strings of the card memory judge to tools/i18n/<lang>/ui.json for every language:
#   "Practice these first" (the button) and the help sentence of "Learn 5 at a time" on the Practice screen, which now says that the quiz brings back at most 15 earlier cards.
#   The older help sentence (": 5 new cards, ... mixed with everything so far ...") stays in the tables, unused: keys are never removed (tools/i18n/build_keys.py).
# The strings and their translations are in tools/patches/mem_judge_b_i18n.json. Safe to run twice: a key already present is left alone.
# usage: python3 tools/patches/mem_judge_b_i18n.py
#   then: python3 tools/i18n/build_keys.py && for each language: python3 tools/i18n/gen.py <lang> && node tools/i18n/validate.js <lang>
import json, os, re, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(ROOT, 'tools', 'i18n')
data = json.load(open(os.path.join(ROOT, 'tools', 'patches', 'mem_judge_b_i18n.json'), encoding='utf8'))
KEYS, TR = data['keys'], data['t']
langs = sorted(d for d in os.listdir(D) if os.path.isfile(os.path.join(D, d, 'ui.json')))
missing = [l for l in langs if l not in TR]
assert not missing, 'no translations for: %s' % missing
for l, rows in TR.items():
    assert len(rows) == len(KEYS), (l, len(rows))
    for k, t in zip(KEYS, rows):
        assert t and t == t.strip(' \t\r\n'), (l, k['key'])  # a leading no-break space is allowed: French writes one before the colon of a fragment
        if k['key'][0] == ':': assert t.lstrip('\u00a0')[0] in ':：', ('fragment must keep its colon', l, t[:12])
        n = len(re.findall(r'\{n\}', k['key']))
        assert sorted(set(re.findall(r'\{(\d+)\}', t))) == [str(i + 1) for i in range(n)], ('slots', l, k['key'], t)

def kind_of(k):  # same rule as tools/i18n/build_keys.py
    if re.match(r'^[·:,;)\-–—/=]', k) or re.search(r'(\s[·(:—–/-]|[(:])\s*$', k): return 'fragment'
    if len(k.split()) <= 4 and not re.search(r'[.?!…]$', k): return 'label'
    return 'sentence'

def example(t):
    it = iter(['5', '2', '3'])
    return re.sub(r'\{n\}', lambda m: next(it), t)

ko = TR['ko']
for l in langs:
    f = os.path.join(D, l, 'ui.json')
    raw = open(f, encoding='utf8').read()
    doc = json.loads(raw)
    added = 0
    for k, t, kt in zip(KEYS, TR[l], ko):
        table = doc['patterns'] if k['type'] == 'pattern' else doc['exact']
        if k['key'] in table: continue
        if l == 'ko':
            table[k['key']] = t  # the Korean file holds plain strings
        elif k['type'] == 'pattern':
            n = len(re.findall(r'\{n\}', k['key']))
            table[k['key']] = {'t': t, 'ko': kt, 'slots': ', '.join('{%d}=n' % (i + 1) for i in range(n)), 'example': example(k['key']), 'context': k['context']}
        else:
            table[k['key']] = {'t': t, 'ko': kt, 'kind': kind_of(k['key']), 'context': k['context']}
        added += 1
    if added:
        out = json.dumps(doc, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else '')
        open(f, 'w', encoding='utf8').write(out)
    print('%-4s added %d' % (l, added))

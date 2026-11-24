#!/usr/bin/env python3
# 2.104.0 (QF-1): the round line of Practice reads "Round 1 of 3 · saved" (it was "· passed" / "· 80% to pass").
# Adds that one pattern to tools/i18n/<lang>/ui.json: the language's own "Round {1} of {2}" from the "· passed" pattern, plus its word for "saved" below.
# Safe to run twice. Then: python3 tools/i18n/build_keys.py && for each language: python3 tools/i18n/gen.py <lang> && node tools/i18n/validate.js <lang>
import json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(ROOT, 'tools', 'i18n')
SAVED = {'ar':'تم الحفظ','bn':'সেভ হয়েছে','ceb':'na-save','cs':'uloženo','de':'gespeichert','es':'guardada','fr':'enregistré','hi':'सेव हो गया','hmn':'kaw cia lawm','id':'tersimpan','it':'salvato','ja':'保存済み','kn':'ಉಳಿಸಲಾಗಿದೆ','ko':'저장됨','mr':'सेव्ह झालं','nan':'儲存矣','pa':'ਸੇਵ ਹੋ ਗਿਆ','pl':'zapisano','pt':'salva','ru':'сохранено','te':'సేవ్ అయింది','th':'บันทึกแล้ว','tl':'na-save','ur':'محفوظ ہو گیا','vi':'đã lưu','yue':'已儲存','zh':'已保存'}
OLD, NEW = 'Round {n} of {n} · passed', 'Round {n} of {n} · saved'
langs = sorted(d for d in os.listdir(D) if os.path.isfile(os.path.join(D, d, 'ui.json')))
assert not [l for l in langs if l not in SAVED], [l for l in langs if l not in SAVED]
def swap(t, w):
    head, sep, _ = t.rpartition(' · ')
    assert sep and '{1}' in head and '{2}' in head, t
    return head + ' · ' + w
for l in langs:
    f = os.path.join(D, l, 'ui.json'); raw = open(f, encoding='utf8').read(); doc = json.loads(raw); P = doc['patterns']
    if NEW in P: print('%-4s present' % l); continue
    old = P[OLD]
    if l == 'ko': P[NEW] = swap(old, SAVED[l])
    else:
        e = dict(old); e['t'] = swap(old['t'], SAVED[l]); e['ko'] = swap(old['ko'], SAVED['ko']); e['example'] = 'Round 5 of 2 · saved'; P[NEW] = e
    open(f, 'w', encoding='utf8').write(json.dumps(doc, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))
    print('%-4s %s' % (l, P[NEW] if l == 'ko' else P[NEW]['t']))

#!/usr/bin/env python3
# 2.108.0: adds the label "Review missed" (Practice round result) to tools/i18n/<lang>/ui.json for every language. Safe to run twice.
# Then: python3 tools/i18n/build_keys.py && for each language: python3 tools/i18n/gen.py <lang> && node tools/i18n/validate.js <lang>
import json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(ROOT, 'tools', 'i18n')
KEY = 'Review missed'
T = {'ar':'راجع الأخطاء','bn':'ভুলগুলো আবার দেখুন','ceb':'I-review ang mga nasayop','cs':'Projít chybné','de':'Fehler wiederholen','es':'Repasar las falladas','fr':'Revoir les erreurs','hi':'गलत वाले दोहराएँ','hmn':'Review cov tsis raug','id':'Ulangi yang salah','it':'Ripassa gli errori','ja':'間違えたカードを復習','kn':'ತಪ್ಪಾದವು ರಿವ್ಯೂ ಮಾಡಿ','ko':'틀린 카드 복습','mr':'चुकलेली कार्डे पुन्हा पाहा','nan':'複習毋著的','pa':'ਗਲਤ ਵਾਲੇ ਦੁਹਰਾਓ','pl':'Powtórz błędne','pt':'Revisar as erradas','ru':'Повторить ошибки','te':'తప్పైనవి మళ్లీ చూడండి','th':'ทบทวนข้อที่ผิด','tl':'Balikan ang mga mali','ur':'غلط والے دہرائیں','vi':'Ôn lại thẻ sai','yue':'溫返答錯嘅','zh':'复习答错的卡片'}
langs = sorted(d for d in os.listdir(D) if os.path.isfile(os.path.join(D, d, 'ui.json')))
assert not [l for l in langs if l not in T]
for l in langs:
    f = os.path.join(D, l, 'ui.json'); raw = open(f, encoding='utf8').read(); doc = json.loads(raw); E = doc['exact']
    if KEY in E: print('%-4s present' % l); continue
    E[KEY] = T[l] if l == 'ko' else {'t': T[l], 'ko': T['ko'], 'kind': 'label', 'context': 'button on the Practice round result: show again, then quiz, the cards answered wrong in the quiz just finished'}
    open(f, 'w', encoding='utf8').write(json.dumps(doc, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))
    print('%-4s %s' % (l, T[l]))

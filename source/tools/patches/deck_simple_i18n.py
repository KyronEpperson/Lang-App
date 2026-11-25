#!/usr/bin/env python3
# DS-1: adds the label "Settings" (title of the sheet behind the header gear) to tools/i18n/<lang>/ui.json for every language. Safe to run twice.
# Then: python3 tools/i18n/build_keys.py && for each language: python3 tools/i18n/gen.py <lang> && node tools/i18n/validate.js <lang>
import json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(ROOT, 'tools', 'i18n')
KEY = 'Settings'
T = {'ar':'الإعدادات','bn':'সেটিংস','ceb':'Mga Setting','cs':'Nastavení','de':'Einstellungen','es':'Ajustes','fr':'Réglages','hi':'सेटिंग्स','hmn':'Kev teeb tsa','id':'Pengaturan','it':'Impostazioni','ja':'設定','kn':'ಸೆಟ್ಟಿಂಗ್‌ಗಳು','ko':'설정','mr':'सेटिंग्ज','nan':'設定','pa':'ਸੈਟਿੰਗਾਂ','pl':'Ustawienia','pt':'Configurações','ru':'Настройки','te':'సెట్టింగ్‌లు','th':'การตั้งค่า','tl':'Mga Setting','ur':'ترتیبات','vi':'Cài đặt','yue':'設定','zh':'设置'}
langs = sorted(d for d in os.listdir(D) if os.path.isfile(os.path.join(D, d, 'ui.json')))
assert not [l for l in langs if l not in T], [l for l in langs if l not in T]
for l in langs:
    f = os.path.join(D, l, 'ui.json'); raw = open(f, encoding='utf8').read(); doc = json.loads(raw); E = doc['exact']
    if KEY in E: print('%-4s present' % l); continue
    E[KEY] = T[l] if l == 'ko' else {'t': T[l], 'ko': T['ko'], 'kind': 'label', 'context': 'title of the settings sheet opened by the gear button in the header (audio, speed, deck options)'}
    open(f, 'w', encoding='utf8').write(json.dumps(doc, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))
    print('%-4s %s' % (l, T[l]))

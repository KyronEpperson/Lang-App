"""Generates packs/i18n-<lang>.js (interface dictionary) from tools/i18n/<lang>/ui.json in tools/i18n/keys.json order.
usage: python3 tools/i18n/gen.py [<lang>=ko] [<out path>]

Output order = keys.json order (exact keys, then pattern positions; pattern order is semantic: first match wins).
Untranslated ("" or missing) keys are left out, so the engine falls back to English for them; validate.js reports them.
Pattern translations use {1}..{k} for the template's slots; they are written as $1..$k replacements.
The Korean tables that used to live in this file are in tools/i18n/ko/ui.json (moved unchanged)."""
import json, os, re, sys
D = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, D)
from i18nlib import template_regex, load_lang, load_keys, check_lang

lang = check_lang(sys.argv[1] if len(sys.argv) > 1 else 'ko')
OUT = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/packs/i18n-%s.js' % lang
L = load_lang(lang)
K = load_keys()

E = [(e['key'], L['exact'][e['key']]) for e in K['exact'] if L['exact'].get(e['key'])]
PAT = []
for p in K['patterns']:
    tr = L['patterns'].get(p['template'])
    if not tr: continue
    rep = re.sub(r'\{(\d+)\}', r'$\1', tr)
    assert '{' not in rep or re.search(r'\$\d', rep), (p['template'], tr)
    PAT.append([template_regex(p['template']), rep])
unknown = [k for k in L['exact'] if k not in {e['key'] for e in K['exact']}] + [t for t in L['patterns'] if t not in {p['template'] for p in K['patterns']}]
if unknown: print('WARN %d key(s) in %s are not in keys.json and were skipped: %s' % (len(unknown), L['file'], unknown[:10]), file=sys.stderr)

header = L['header'] or ['/* Lang App · %s UI dictionary (i18n-%s). Pure data: exact-match strings + anchored regex patterns. Generated from tools/i18n/%s/ui.json. */' % (lang, lang, lang)]
ident = lang if re.fullmatch(r'[A-Za-z_$][\w$]*', lang) else None
out = list(header) + [("LANGAPP_PACKS.i18n.%s = {" % ident) if ident else ("LANGAPP_PACKS.i18n[%s] = {" % json.dumps(lang)), "  exact: {"]
for i, (k, v) in enumerate(E):
    out.append("    " + json.dumps(k, ensure_ascii=False) + ": " + json.dumps(v, ensure_ascii=False) + ("," if i < len(E) - 1 else ""))
out.append("  },")
out.append("  patterns: [")
for i, (s, r) in enumerate(PAT):
    out.append("    [" + json.dumps(s, ensure_ascii=False) + ", " + json.dumps(r, ensure_ascii=False) + "]" + ("," if i < len(PAT) - 1 else ""))
out.append("  ]")
out.append("};")
txt = "\n".join(out) + "\n"
txt = txt.replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
assert '</script' not in txt.lower()
open(OUT, 'w', encoding='utf-8').write(txt)
print('wrote', OUT, '· exact', len(E), 'patterns', len(PAT))

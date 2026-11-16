"""Writes a translator starter file tools/i18n/<lang>/ui.json with every keys.json key present and empty.
usage: python3 tools/i18n/new_lang.py <lang> [--out DIR] [--force] [--prefill ko]
Each entry is {"t": "", "ko": <Korean translation for reference>, "context"/"kind"/"slots"/"example": hints}. The translator fills
every "t" (patterns: use {1}..{k} for the template's slots, reordering is fine). gen.py and validate.js read only "t".
--prefill ko copies the Korean text into "t" (pipeline smoke tests only; never ship that)."""
import json, os, sys
D = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, D)
from i18nlib import load_lang, load_keys, check_lang, SLOT_TYPES

args = sys.argv[1:]
def opt(name):
    if name in args:
        i = args.index(name); v = args[i + 1]; del args[i:i + 2]; return v
force = '--force' in args
if force: args.remove('--force')
out_dir = opt('--out'); prefill = opt('--prefill')
if not args: sys.exit(__doc__)
lang = check_lang(args[0])
if lang == 'ko': sys.exit('ko is the reference language; refusing to overwrite tools/i18n/ko/')
dest = os.path.abspath(out_dir) if out_dir else os.path.join(D, lang)
f = os.path.join(dest, 'ui.json')
if os.path.exists(f) and not force: sys.exit(f + ' exists (use --force to overwrite)')
ko = load_lang('ko'); K = load_keys()
pre = load_lang(prefill) if prefill else None

exact = {}
for e in K['exact']:
    ent = {'t': pre['exact'].get(e['key'], '') if pre else '', 'ko': ko['exact'].get(e['key']) or e.get('koInline'), 'kind': e.get('kind')}
    if e.get('context'): ent['context'] = e['context']
    if e.get('where'): ent['where'] = e['where']
    if e.get('optionalFor'): ent['optionalFor'] = e['optionalFor']
    exact[e['key']] = ent
patterns = {}
for p in K['patterns']:
    if p['template'] in patterns: continue
    ent = {'t': pre['patterns'].get(p['template'], '') if pre else '', 'ko': ko['patterns'].get(p['template']),
           'slots': ', '.join('{%d}=%s' % (s['n'], s['type']) for s in p['slots']), 'example': p.get('example')}
    if p.get('context'): ent['context'] = p['context']
    patterns[p['template']] = ent
doc = {
    'lang': lang,
    'about': 'Interface translations for %s. Fill every "t" (leave the other fields: they are reference only). Exact keys: the English UI string -> your text. '
             'Patterns: the template -> your text with {1}..{k} standing for the slots in template order (reorder freely; every slot must appear). '
             'Slot types: %s. Follow docs/profiles/%s.md for register and glossary. Then: python3 tools/i18n/gen.py %s && node tools/i18n/validate.js %s'
             % (lang, '; '.join('%s = %s' % kv for kv in SLOT_TYPES.items()), lang, lang, lang),
    'header': None,
    'reference_ko_notes': ko['raw'].get('notes', []),
    'exact': exact,
    'patterns': patterns,
}
os.makedirs(dest, exist_ok=True)
with open(f, 'w', encoding='utf-8') as fh:
    json.dump(doc, fh, ensure_ascii=False, indent=1); fh.write('\n')
print('wrote %s · %d exact keys · %d pattern templates%s' % (f, len(exact), len(patterns), ' (prefilled from %s)' % prefill if prefill else ''))

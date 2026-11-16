"""Merges the English strings listed in docs/LL-KEYS.md (strings the engine passes to its inline LL(en, ko) helper, invisible to the
extractor) into tools/i18n/keys.json as exact keys flagged "optionalFor": ["ko"] (Korean has them inline).
usage: python3 tools/i18n/merge_ll_keys.py [--file docs/LL-KEYS.md] [--keys tools/i18n/keys.json] [--dry-run]
Idempotent: keys already in keys.json are left alone; new ones are appended after the existing exact keys (order stays frozen).
Recognised in LL-KEYS.md (any mix):
  - LL('English', '한국어') / LL("English", ...) calls anywhere (code blocks or prose)
  - fenced ```json blocks: ["English", ...] or [{"en"|"key": "English", "ko": "...", "context"|"where": "..."}, ...]
  - markdown table rows: | English | Korean | where/context ... |  (header and separator rows skipped; cells may be `code` or "quoted")
  - bullet / numbered items whose first `code span` or "quoted string" is the English key; the rest of the line becomes context
Strings with ${...} or {0}-style placeholders cannot be exact keys: they are reported, not merged.
Missing file -> message, exit 0. File present but no key found -> exit 1 (format not understood)."""
import json, os, re, sys
D = os.path.dirname(os.path.abspath(__file__))
args = sys.argv[1:]
def opt(name, dflt):
    if name in args:
        i = args.index(name); v = args[i + 1]; del args[i:i + 2]; return v
    return dflt
SRC = opt('--file', '/home/claude/docs/LL-KEYS.md')
KEYS = opt('--keys', os.path.join(D, 'keys.json'))
DRY = '--dry-run' in args
if not os.path.exists(SRC):
    print('merge_ll_keys: %s not found — nothing merged (run again once the engine agent has written it)' % SRC); sys.exit(0)
md = open(SRC, encoding='utf-8').read()
HANGUL = re.compile(r'[가-힣ㄱ-ㆎ]')
found = []  # (en, ko, context)
def unq(c):
    c = c.strip()
    m = re.fullmatch(r'`+(.*?)`+', c) or re.fullmatch(r'"(.*)"', c) or re.fullmatch(r"'(.*)'", c) or re.fullmatch(r'“(.*)”', c)
    return (m.group(1) if m else c).strip()
def jsstr(s):
    try: return json.loads('"' + s.replace('\\\'', "'").replace('"', '\\"') + '"') if '\\' in s else s
    except Exception: return s

# 1. LL(...) calls
for m in re.finditer(r'''\bLL\(\s*(['"])((?:\\.|(?!\1).)*)\1\s*,\s*(['"])((?:\\.|(?!\3).)*)\3''', md):
    found.append((jsstr(m.group(2)), jsstr(m.group(4)), 'LL() call'))
for m in re.finditer(r'\bLL\(\s*`([^`]*)`', md):
    found.append((m.group(1), None, 'LL() call (template literal)'))
# 2. json blocks
for m in re.finditer(r'```json\s*\n(.*?)```', md, re.S):
    try: data = json.loads(m.group(1))
    except Exception as e: print('WARN unparsable json block:', e); continue
    for it in (data if isinstance(data, list) else data.get('keys', [])):
        if isinstance(it, str): found.append((it, None, ''))
        elif isinstance(it, dict) and (it.get('en') or it.get('key')):
            found.append((it.get('en') or it.get('key'), it.get('ko'), it.get('context') or it.get('where') or ''))
# 3. tables and 4. bullets (outside fenced code)
prose = re.sub(r'```.*?```', '', md, flags=re.S)
lines = prose.splitlines()
for i, ln in enumerate(lines):
    s = ln.strip()
    if s.startswith('|') and s.count('|') >= 3:
        cells = [c.strip() for c in s.strip('|').split('|')]
        if all(re.fullmatch(r':?-{2,}:?', c) for c in cells if c): continue
        nxt = lines[i + 1].strip() if i + 1 < len(lines) else ''
        if re.fullmatch(r'\|?\s*:?-{2,}.*', nxt) and not re.search(r'`|"', s): continue  # header row
        en = unq(cells[0])
        ko = next((unq(c) for c in cells[1:] if HANGUL.search(c)), None)
        ctx = ' · '.join(unq(c) for c in cells[1:] if c and not HANGUL.search(c))
        found.append((en, ko, ctx))
        continue
    m = re.match(r'^(?:[-*+]|\d+[.)])\s+(.*)$', s)
    if m:
        body = m.group(1)
        q = re.search(r'`([^`]+)`|"([^"]+)"|“([^”]+)”', body)
        if not q: continue
        en = next(g for g in q.groups() if g)
        rest = (body[:q.start()] + body[q.end():]).strip(' —–-:|')
        ko = None
        qk = re.search(r'`([^`]*[가-힣][^`]*)`|"([^"]*[가-힣][^"]*)"', rest)
        if qk: ko = next(g for g in qk.groups() if g); rest = (rest[:qk.start()] + rest[qk.end():]).strip(' —–-:|,')
        found.append((en, ko, rest))

keys = json.load(open(KEYS, encoding='utf-8'))
have = {e['key'] for e in keys['exact']}
added, skipped_ph, seen = [], [], set()
for en, ko, ctx in found:
    en = (en or '').strip()
    if not en or en in seen or not re.search(r'[A-Za-z]', en) or HANGUL.search(en) and not re.search(r'[A-Za-z]{3,}', en): continue
    seen.add(en)
    if re.search(r'\$\{|\{\d+\}|\{[a-z]\}', en): skipped_ph.append(en); continue
    if en in have: continue
    words = len(en.split())
    e = {'key': en, 'kind': 'label' if words <= 4 and not re.search(r'[.?!…]$', en) else 'sentence', 'section': 'LL-KEYS.md',
         'where': 'LL() inline helper (docs/LL-KEYS.md)', 'source': 'docs/LL-KEYS.md', 'optionalFor': ['ko']}
    if ctx: e['context'] = ctx[:200]
    if ko: e['koInline'] = ko
    keys['exact'].append(e); have.add(en); added.append(en)
if not seen:
    print('merge_ll_keys: FAIL — %s exists but no keys were recognised; see the formats in this script\'s docstring' % SRC); sys.exit(1)
keys['counts']['exact'] = len(keys['exact'])
if not DRY and added:
    with open(KEYS, 'w', encoding='utf-8') as f:
        json.dump(keys, f, ensure_ascii=False, indent=1); f.write('\n')
print('merge_ll_keys: %d key(s) recognised · %d new%s · %d already present · exact now %d%s' % (len(seen), len(added), ' (dry run)' if DRY else '', len(seen) - len(added) - len(skipped_ph), len(keys['exact']), ''))
for k in added: print('  + ' + k)
if skipped_ph: print('NOT merged (placeholders; add as a pattern in tools/i18n/ko/ui.json + build_keys.py instead): ' + json.dumps(skipped_ph, ensure_ascii=False))

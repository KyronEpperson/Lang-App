"""Sets up tools/content/<lang>/ for an es-based course from its finished profile: scaffold, profile.json, DECKNAMES.md, deviations.p.json, interface scaffolds.
usage: python3 tools/content/setup_es_based.py <lang>"""
import re, json, shutil, subprocess, sys, os
L = sys.argv[1]; R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); D = os.path.join(R, 'tools', 'content', L)
if not os.path.exists(os.path.join(D, 'decks.js')): subprocess.run(['node', 'tools/content/new_lang.js', L, '--from', 'es'], cwd=R, check=True)
md = open(os.path.join(R, 'docs', 'profiles', L + '.md'), encoding='utf8').read()
shutil.copy(os.path.join(R, 'docs', 'profiles', L + '.profile.json'), os.path.join(D, 'profile.json'))
rows = [r for r in re.findall(r'^\| *(\d+) *\| *([^|]+?) *\| *\*\*([^*|]+)\*\* *\| *([^|]+?) *\|', md, re.M)]
rows = [r for r in rows if 0 <= int(r[0]) <= 24]; seen = {}; [seen.setdefault(int(r[0]), r) for r in rows]
assert sorted(seen) == list(range(25)), ('deck table rows found: ', sorted(seen))
out = "# %s-en deck names (FINAL — set by the lead from profile §9; do not change)\n\nRows are in pack order (0-based index as in profile §9). Each replaces the Spanish course's deck at the same position.\n\n| index | Spanish deck | name (use verbatim) | English side |\n|---|---|---|---|\n" % L
for i in range(25): r = seen[i]; out += "| %s | %s | %s | %s |\n" % (r[0], r[1], r[2].strip(), r[3])
open(os.path.join(D, 'DECKNAMES.md'), 'w', encoding='utf8').write(out)
m = re.search(r'[Pp]aste-ready[^\n]*deviations\.json', md); i = m.start(); j = md.index('```', i); k = md.index('```', j + 3); blk = md[j + 3:k]; d = json.loads(blk[blk.index('{'):])
json.dump(d, open(os.path.join(D, 'deviations.p.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=2)
if not os.path.exists(os.path.join(R, 'tools', 'i18n', L, 'ui.json')): subprocess.run(['python3', 'tools/i18n/new_lang.py', L], cwd=R, check=True)
if not os.path.exists(os.path.join(R, 'tools', 'i18n', L, 'roadmap.json')): subprocess.run(['python3', 'tools/i18n/road.py', 'new', L], cwd=R, check=True)
from importlib import util
print(L, 'decks:', [seen[i][2].strip() for i in range(25)]); print('deviations:', {a: (len(b) if hasattr(b, '__len__') else b) for a, b in d.items()}, 'extra:', d.get('extraLessons'))

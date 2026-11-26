#!/usr/bin/env python3
# en-yue: the script block is unbroken (owner, 2026-11-25: "isnt this the path that makes most sence?"). Lesson order jyutping, tones, characters, greetings
# (was jyutping, tones, greetings, characters). Lesson ids, decks and cards are unchanged; progress is saved per lesson id.
# Edits tools/target/yue/profile.json and packs/roadmaps.js; then: node tools/target/gen.js yue && node tools/lessonread/apply.js en-yue && node tools/sections/apply.js && node tools/halves/export_target.js yue
import io, json, os, re
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'tools', 'target', 'yue', 'profile.json'); s = io.open(p, encoding='utf8').read(); P = json.loads(s)
ids = [l['id'] for l in P['lessons']]
assert ids[:4] == ['jyutping', 'tones', 'greetings', 'characters'], 'already applied or order changed: ' + ','.join(ids[:4])
a = s.index('{"id": "greetings"') if '{"id": "greetings"' in s else -1
P['lessons'][2], P['lessons'][3] = P['lessons'][3], P['lessons'][2]
# keep the file's own formatting: re-dump only if it round-trips
for kw in ({'ensure_ascii': False, 'indent': 2}, {'ensure_ascii': False, 'indent': 1}, {'ensure_ascii': False}, {'ensure_ascii': False, 'separators': (',', ':')}):
    if json.dumps(json.loads(s), **kw) == s.rstrip('\n'): out = json.dumps(P, **kw) + ('\n' if s.endswith('\n') else ''); break
else: out = json.dumps(P, ensure_ascii=False, indent=2) + '\n'
io.open(p, 'w', encoding='utf8').write(out)
r = os.path.join(ROOT, 'packs', 'roadmaps.js'); t = io.open(r, encoding='utf8').read()
m = re.search(r'(\["yue-greetings",(?:[^\[\]]|\[[^\[\]]*\])*\]), (\["yue-characters",(?:[^\[\]]|\[[^\[\]]*\])*\])', t)
assert m and t.count('["yue-greetings"') == 1, 'roadmap entries not found side by side'
t = t[:m.start()] + m.group(2) + ', ' + m.group(1) + t[m.end():]
io.open(r, 'w', encoding='utf8').write(t)
print('en-yue lesson order: jyutping, tones, characters, greetings')

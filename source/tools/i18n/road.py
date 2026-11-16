"""Roadmap titles per interface language (stage names, planned-lesson titles, variant and basis lines in packs/roadmaps.js).
usage: python3 tools/i18n/road.py new <lang>     write tools/i18n/<lang>/roadmap.json with every roadmap string and "t": "" (keeps existing "t" values)
       python3 tools/i18n/road.py check <lang>   fail if any roadmap string is untranslated, unknown, or still plain English
gen.py reads roadmap.json and emits it as the pack's "road" map; the engine looks titles up there (Korean comes from roadmaps.js itself)."""
import json, os, re, subprocess, sys
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(D))
def strings():
    js = open(os.path.join(ROOT, 'packs', 'roadmaps.js'), encoding='utf8').read()
    code = 'var LANGAPP_PACKS={};' + js + ''';var R=LANGAPP_PACKS.roadmaps,o=[];for(var k in R){var r=R[k];o.push([r.variant.en,r.variant.ko,"variant",k]);o.push([r.basis.en,r.basis.ko,"basis",k]);
    r.stages.forEach(function(st){o.push([st.en,st.ko,"stage",k]);st.items.forEach(function(i){o.push([i[1],i[2],"lesson title",k])})})};console.log(JSON.stringify(o))'''
    out = subprocess.run(['node', '-e', code], capture_output=True, text=True, check=True).stdout
    seen = {}
    for en, ko, kind, k in json.loads(out):
        seen.setdefault(en, {'t': '', 'ko': ko, 'kind': kind, 'roadmap': k})
    return seen
def path(lang): return os.path.join(D, lang, 'roadmap.json')
def load(lang):
    f = path(lang)
    if not os.path.exists(f): return {}
    return {k: (v.get('t', '') if isinstance(v, dict) else v) for k, v in json.load(open(f, encoding='utf8')).get('road', {}).items()}
if __name__ == '__main__':
    cmd, lang = sys.argv[1], sys.argv[2]
    assert re.fullmatch(r'[a-z]{2}', lang) and lang not in ('en', 'ko'), 'lang must be a 2-letter code other than en/ko'
    S = strings(); old = load(lang)
    if cmd == 'new':
        for k in S: S[k]['t'] = old.get(k, '')
        json.dump({'about': 'Roadmap titles for %s. Fill every "t" (short, the way a course lesson title reads). "ko" and "kind" are reference only. Keep quoted target-language words (e.g. 감사합니다, ser/estar) as they are.' % lang, 'road': S},
                  open(path(lang), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
        print('wrote', path(lang), '·', len(S), 'strings ·', sum(1 for k in S if S[k]['t']), 'already translated')
    elif cmd == 'check':
        miss = [k for k in S if not old.get(k, '').strip()]; extra = [k for k in old if k not in S]
        bad = [k for k in S if old.get(k) and ('\n' in old[k] or '<' in old[k])]
        same = [k for k in S if old.get(k, '').strip() == k and re.search(r'[a-z]{4,} [a-z]{4,}', k)]
        for n, a in (('untranslated', miss), ('unknown key', extra), ('markup/newline', bad)):
            if a: print('FAIL %s: %d  e.g. %s' % (n, len(a), a[:5]))
        if same: print('note: %d identical to English (ok if intended): %s' % (len(same), same[:8]))
        print('roadmap strings %d/%d translated' % (len(S) - len(miss), len(S)))
        sys.exit(1 if (miss or extra or bad) else 0)

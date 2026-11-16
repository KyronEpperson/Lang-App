"""Shared helpers for the interface (i18n) pipeline: template -> regex, slot structure, loading tools/i18n/<lang>/ui.json."""
import json, os, re
D = os.path.dirname(os.path.abspath(__file__))
LANG_RE = re.compile(r'[a-z]{2,3}(-[A-Za-z0-9]{2,8})?')

# slot tokens in pattern templates and the regex each one compiles to (unchanged from the original Korean generator)
TOK = {'{n}': r'(\d+)', '{f}': r'([\d.,]+)', '{s}': r'(.+?)', '{x}': r'(.+)', '{e}': r'(\S+@\S+)', '{d}': r'([^·]+?)'}
SLOT_TYPES = {'n': 'integer count', 'f': 'decimal number', 's': 'short text (lazy match), e.g. a deck or lesson name',
              'x': 'free text (greedy match)', 'e': 'e-mail address', 'd': 'text without "·", e.g. a deck name inside a "·"-separated line'}

def esc(s):
    return re.sub(r'([\\^$.|?*+()\[\]{}/])', r'\\\1', s)

def template_regex(tmpl):
    parts = re.split(r'(\{[nfsxed]\})', tmpl)
    return '^' + ''.join(TOK[p] if p in TOK else esc(p) for p in parts) + '$'

def slots_of(tmpl):
    return [{'n': i + 1, 'type': t} for i, t in enumerate(re.findall(r'\{([nfsxed])\}', tmpl))]

def check_lang(lang):
    if not lang or not LANG_RE.fullmatch(lang): raise SystemExit('bad language code: %r' % lang)
    return lang

def lang_file(lang, base=None):
    return os.path.join(base or os.path.join(D, check_lang(lang)), 'ui.json')

def _text(v):
    """ui.json values are either the translation string or an object {"t": translation, ...reference fields}."""
    if isinstance(v, dict): return v.get('t', '') or ''
    return v if isinstance(v, str) else ''

def load_lang(lang, base=None):
    f = lang_file(lang, base)
    if not os.path.exists(f): raise SystemExit('missing %s (scaffold with: python3 tools/i18n/new_lang.py %s)' % (f, lang))
    d = json.load(open(f, encoding='utf-8'))
    return {'file': f, 'header': d.get('header'), 'exact': {k.strip(): _text(v) for k, v in d.get('exact', {}).items()},
            'patterns': {k: _text(v) for k, v in d.get('patterns', {}).items()}, 'raw': d}

def load_keys():
    return json.load(open(os.path.join(D, 'keys.json'), encoding='utf-8'))

# Punjabi (pa) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English. Same skeleton as `tl/roadmap.json` (written directly in road.py's output shape; road.py was not run).
- The generated pack is `packs/i18n-pa.js` (`road` 40).

Build: `python3 tools/i18n/gen.py pa && node tools/i18n/validate.js pa`. It passes with 1 warning class:
- 1 label that may overflow: "I get by" → *ਕੰਮ ਚੱਲ ਜਾਂਦਾ ਹੈ* (16 vs 8). The validator counts code points, so Gurmukhi vowel signs, addak and nukta inflate the count; the rendered width is narrower.
- The "identical to English" class never fires for pa: Gurmukhi is a distinct script, so the validator skips that check. Strings that keep Latin text are listed in §2 instead.

The only course this interface serves is **pa-ko** (Korean for Punjabi speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *ਕੋਰੀਆਈ*, *ਹੰਗੁਲ*, *ਰੋਮਨ*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*ਅੰਗਰੇਜ਼ੀ*); they only show in an English course, which Punjabi speakers do not have. The `hi` dictionary was written for hi-en (its "Korean" is अंग्रेज़ी and its "romanization" is उच्चारण), so it was used only for ordinary term choices, never for those keys. `docs/profiles/hi-ko.md` §3 was the better model for grammar terms.

Author: not a native speaker. Everything here needs a Punjabi speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** everyday Indian (Eastern) Punjabi in Gurmukhi, as Punjabi apps and Google's Punjabi UI write it. Common English tech words are written in Gurmukhi (*ਐਪ, ਡਿਵਾਈਸ, ਸਿੰਕ, ਈਮੇਲ, ਬੈਕਅੱਪ, ਟੈਪ, ਸਵਾਈਪ*). Ordinary words are Punjabi, not Hindi.
- **Address:** **ਤੁਸੀਂ** (with ਹੋ, ਤੁਹਾਡਾ / ਤੁਹਾਡੀ / ਤੁਹਾਡੇ, ਤੁਹਾਨੂੰ), as the launching brief asked and as `docs/profiles/en-pa.md` §2.3 makes the default. The brief's default is informal singular "unless that is rude". Punjabi has no middle level like Hindi तुम, and ਤੂੰ from an app to a stranger reads as too familiar, so ਤੁਸੀਂ it is. **No ਤੂੰ / ਤੇਰਾ / ਤੈਨੂੰ anywhere.** The one exception is the Korean-casual gloss `don't (지 마)` → *ਨਾ ਕਰ*: it glosses 반말, not the app talking to the learner.
- **Commands:** the -ਓ form (*ਚੁਣੋ, ਖੋਲ੍ਹੋ, ਸੁਣੋ, ਜਾਂਚੋ, ਛੱਡੋ, ਹਟਾਓ, ਮਿਟਾਓ, ਦੁਹਰਾਓ*). English verbs take ਕਰੋ (*ਟੈਪ ਕਰੋ, ਸੇਵ ਕਰੋ, ਸ਼ੇਅਰ ਕਰੋ, ਸ਼ਫ਼ਲ ਕਰੋ*). No honorific ਜੀ in the interface (the fixed welcome phrase ਜੀ ਆਇਆਂ ਨੂੰ aside). ਕਿਰਪਾ ਕਰਕੇ only where English says "please" (one string).
- **Gender:** nothing about the learner or a first-person speaker is gendered where it can be avoided. First-person buttons use ungendered forms: *ਯਾਦ ਹੈ* (Got it), *ਇੱਕਦਮ ਸਹੀ* (I nailed it), *ਕੰਮ ਚੱਲ ਜਾਂਦਾ ਹੈ* (I get by), *ਸਮਝ ਆ ਗਿਆ* (Got it — quiz me). Share texts are nominal (*… ਕੋਰੀਆਈ ਸਿੱਖਣਾ 🇰🇷*), not *ਸਿੱਖ ਰਿਹਾ ਹਾਂ*. Where ਤੁਸੀਂ needs a participle, the usual generic plural is used (*ਤੁਸੀਂ ਕਿਵੇਂ ਸਿੱਖਦੇ ਹੋ*).
- **Counts** (keys.json: a count slot must read correctly at 1 and at 2+):
  - A slot is followed only by nouns whose direct form is the same in singular and plural: `{1} ਕਾਰਡ`, `{1} ਡੈੱਕ`, `{1} ਪਾਠ`, `{1} ਦਿਨ`, `{1} ਮਿੰਟ`, `{1} ਅੰਕ`, `{1} ਸਵਾਲ`, `{1} ਜਵਾਬ`, `{1} ਰਾਊਂਡ`, `{1} ਬੈਜ`, `{1} ਪੈਟਰਨ`, `{1} ਅਨੁਮਾਨ`.
  - Where the noun would be marked (ਹਫ਼ਤੇ, ਦੁਹਰਾਈਆਂ, ਕੋਸ਼ਿਸ਼ਾਂ, ਲਾਈਨਾਂ) or a verb or adjective would agree with the number (ਚੁਣੇ, ਸਿੱਖੇ, ਨਵੇਂ, ਹੋਏ), the string uses the label form *label: {n}*: *ਹਫ਼ਤੇ: {1}*, *ਹਾਲੀਆ ਦੁਹਰਾਈ: {1}*, *ਕੋਸ਼ਿਸ਼ਾਂ: {2}*, *ਚੁਣੇ ਡੈੱਕ: {1}*, *ਸਿੱਖੇ ਕਾਰਡ: {1}*, *ਨਵੇਂ: {1}*, *ਇੰਪੋਰਟ ਹੋਏ: {1}*, or a postposition: *ਦੁਹਰਾਈ ਲਈ {1}* (`{n} due`).
  - Where keys.json has separate singular and plural templates, the oblique differs: *{1} ਦਿਨਾਂ ਵਿੱਚ* / *{1} ਦਿਨ ਵਿੱਚ*, *~{2} ਦਿਨਾਂ ਦੇ* / *~{2} ਦਿਨ ਦੇ*.
  - Accepted as they are (the count is always large, or the plural refers to the denominator): ratios *{1}/{2} ਸਿੱਖੇ*, *{1}/{2} ਪਾਠ ਪੂਰੇ*; *{5} ਗੱਲਬਾਤਾਂ* (course summary); *{1} ਪਾਠਾਂ ਦੀ ਯੋਜਨਾ* (≥ 12 by context); *{3} ਵਾਰ* (runs ≥ 2).
- **Language names are feminine** (*ਕਿੰਨੀ {1} ਆਉਂਦੀ ਹੈ?*, *{1} ਕਿਸ ਲਈ ਚਾਹੀਦੀ ਹੈ?*). This works for every Punjabi language name in -ੀ (ਕੋਰੀਆਈ, ਅੰਗਰੇਜ਼ੀ, ਜਪਾਨੀ, ਚੀਨੀ). It does not work for names Intl gives without -ੀ (ਸਪੇਨੀ is fine; ਫਿਲੀਪਿਨੋ, ਸੀਬੂਆਨੋ are not), but no pa-* course targets those.
- **Spelling (from en-pa §2.8):** NFC; ਵਿੱਚ, ਇੱਕ, ਨਾਂ (not ਨਾਮ), ਉਹਨਾਂ / ਇਹਨਾਂ; dotted letters where standard (ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼: *ਫ਼ਾਈਲ, ਫ਼ੀਡਬੈਕ, ਗ਼ਲਤ, ਜ਼ਰੂਰੀ, ਖ਼ਾਲੀ*); ਲ਼ is not written (*ਰਲਵਾਂ*). **ਉੱਤੇ** is written for place "on" (*ਡਿਵਾਈਸ ਉੱਤੇ, ਬੋਰਡ ਉੱਤੇ, ਸਕ੍ਰੀਨ ਉੱਤੇ*); the contraction **'ਤੇ** is written in set phrases, as Punjabi apps write them: *'ਤੇ ਟੈਪ / ਟਿੱਕ ਕਰੋ, ਹੋਣ 'ਤੇ, ਪੱਕੇ ਤੌਰ 'ਤੇ, ਵਿਸ਼ੇ 'ਤੇ, … 'ਤੇ ਵਾਪਸ, … 'ਤੇ ਬਦਲੋ, ਲੈਵਲ {4} 'ਤੇ*.
- **Punctuation:** **।** (danda) ends every Punjabi sentence; never a Latin full stop after Gurmukhi (the lint checks this). `?`, `!`, `:`, `—`, `…`, `·` as in English. Digits stay Western (0–9), as the keys have them.
- **Grammar terms** (Punjabi words, not English as tl did; hi-ko §3.1 is the model): *ਕਿਰਿਆ* (verb), *ਨਾਂਵ* (noun), *ਪੜਨਾਂਵ* (pronoun), *ਵਿਸ਼ੇਸ਼ਣ* (adjective), *ਸਟੈਮ* (stem), *ਡਿਕਸ਼ਨਰੀ ਰੂਪ* (dictionary form), *ਕਾਊਂਟਰ* (counter), *ਸਵਾਲੀਆ ਸ਼ਬਦ* (question word), *ਨਿਮਰ* (polite), *ਆਮ / ਆਮ ਬੋਲਚਾਲ* (casual), *ਸਤਿਕਾਰ ਵਾਲਾ* (honorific), *요-ਰੂਪ* (요-form), *ਵਰਤਮਾਨ / ਭੂਤਕਾਲ / ਭਵਿੱਖ ਕਾਲ* (present / past / future), *ਬੇਨਿਯਮੀ* (irregular), *ਪੈਟਰਨ* (pattern), *ਵਿਆਕਰਨ* (grammar), *ਸਵਰ / ਵਿਅੰਜਨ / ਆਖ਼ਰੀ ਵਿਅੰਜਨ* (vowel / consonant / final), *ਬਲਾਕ* (block), *ਉਚਾਰਖੰਡ* (syllable), *ਧੁਨੀ-ਬਦਲਾਅ* (sound change), *ਮੁਹਾਵਰਾ* (idiom), *ਬੋਲਚਾਲ ਦਾ ਪੱਧਰ* (Register drill).
- **Quiz-mode words:** on the mode chips, commands: *ਪੜ੍ਹੋ 한→ਪੰਜਾਬੀ, ਯਾਦ ਕਰੋ ਪੰਜਾਬੀ→한, ਸੁਣੋ 🔊→ਪੰਜਾਬੀ, ⌨️ ਟਾਈਪ ਕਰੋ 한*. In status lines, nouns: *ਪੜ੍ਹਨਾ, ਯਾਦ ਕਰਨਾ, ਸੁਣਨਾ, ਟਾਈਪ ਕਰਨਾ*. Mixed (quiz mode) = *ਰਲਵਾਂ*; the Mix pool (5 at a time) = *ਮਿਕਸ*; Shuffle = *ਸ਼ਫ਼ਲ ਕਰੋ*; Merge = *ਜੋੜੋ / ਜੋੜ ਦਿੱਤਾ*. A pass through the cards = *ਗੇੜ*; a round = *ਰਾਊਂਡ*.

## 2. Kept in Latin script (closed list)

The lint allows only these Latin runs; everything else is Gurmukhi:
- Product and service names: Lang App, Supabase, Vercel Web Analytics; roadmap basis names TTMIK, Sogang, How to Study Korean.
- Key and file names: Enter, Esc, Ctrl+K, CSV, TSV, PNG, KB, 3D; UI (in *한국어 UI*, whose Korean part is kept).
- Game abbreviations: XP, Lv (`{1}/{2} → Lv {3}`).
- The code word DELETE (never translated; the engine compares the typed text).
- Things the user types or sees as example input: `ga` (romanization example), `you@example.com`, `(han)` (romanization of 한).
- Dialogue speaker letters A and B; the text-size buttons A− / A+; the toggle prefix Aa (*Aa ਰੋਮਨ: ਚਾਲੂ*).

This list was generated from the data (every Latin run in `ui.json`): A, A+, A−, Aa, B, CSV, Ctrl+K, DELETE, Enter, Esc, KB, Lang App, Lv, PNG, Supabase, TSV, UI, Vercel Web Analytics, XP, ga, han, you@example.com, plus 3D. Roadmap titles add TTMIK, Sogang, How to Study Korean.

English tech words used **in Gurmukhi** (not Latin): ਐਪ, ਅਕਾਊਂਟ, ਈਮੇਲ, ਸਾਈਨ ਇਨ / ਸਾਈਨ ਆਊਟ, ਸਿੰਕ, ਬੈਕਅੱਪ, ਐਕਸਪੋਰਟ / ਇੰਪੋਰਟ, ਫ਼ਾਈਲ, ਲਿੰਕ, ਕੋਡ, ਪਾਸਵਰਡ, ਬ੍ਰਾਊਜ਼ਰ, ਡਿਵਾਈਸ, ਸਟੋਰੇਜ, ਸਾਈਟ ਡਾਟਾ, ਡਾਟਾਬੇਸ, ਆਫ਼ਲਾਈਨ, ਇਨਬਾਕਸ, ਸਪੈਮ, ਐਡਮਿਨ, ਡਿਵੈਲਪਰ, ਬੱਗ, ਕਰੈਸ਼, ਫ਼ੀਡਬੈਕ, ਐਨਾਲਿਟਿਕਸ, ਕੁਕੀ, ਪੇਜ ਵਿਊ, ਪ੍ਰੋਫ਼ਾਈਲ, ਯੂਜ਼ਰ, ਪੋਸਟ, ਵੈੱਬਸਾਈਟ, ਬੋਰਡ, ਸੈਟਿੰਗਾਂ, ਸੈੱਟਅੱਪ, ਡਿਫ਼ੌਲਟ, ਟੂਰ, ਪ੍ਰੀਵਿਊ, ਵਿਊ, ਸਕ੍ਰੀਨ, ਮੀਨੂ, ਕੀਬੋਰਡ, ਬਟਨ, ਟੈਕਸਟ, ਟੈਬ, ਅੱਪਡੇਟ, ਵਰਜ਼ਨ, ਰੀਲੋਡ, ਰਿਫ੍ਰੈਸ਼, ਆਡੀਓ, ਮੋਡ, ਮੀਡੀਆ, ਕੈਲੰਡਰ, ਫ਼ੋਨ, ਲੈਪਟਾਪ, ਲੈਵਲ, ਨੇਟਿਵ, ਟੈਪ, ਸਵਾਈਪ, ਸੇਵ, ਸ਼ੇਅਰ, ਟਾਈਪ, ਪੇਸਟ, ਕਾਪੀ, ਅਨਲੌਕ / ਲੌਕ, ਰੀਸੈੱਟ, ਸ਼ਫ਼ਲ, ਡਾਊਨਲੋਡ, ਰਾਈਟ-ਕਲਿੱਕ; learning loans: ਕਾਰਡ / ਫ਼ਲੈਸ਼ਕਾਰਡ, ਡੈੱਕ, ਕੁਇਜ਼, ਟੈਸਟ, ਡਰਿੱਲ, ਮਿਨੀ ਡਰਿੱਲ, ਬਲਿਟਜ਼, ਰਾਊਂਡ, ਸੈਸ਼ਨ, ਸਟ੍ਰੀਕ, ਸਟ੍ਰੀਕ ਸ਼ੀਲਡ, ਕੰਬੋ, ਬੈਜ, ਸਕੋਰ, ਲੀਚ, ਬਾਕਸ, ਰੋਲ-ਪਲੇ, ਡਿਕਟੇਸ਼ਨ, ਸਪੇਸਡ ਰਿਪੀਟੀਸ਼ਨ, ਕੈਲੀਬ੍ਰੇਸ਼ਨ, ਸਰਟੀਫ਼ਿਕੇਟ, ਕੋਰਸ, ਟਾਈਲਾਂ, ਪੈਟਰਨ, ਕਾਊਂਟਰ, ਸਟੈਮ, ਕੇ-ਡਰਾਮੇ.

## 3. Glossary of fixed terms (course writers reuse these)

**Tabs (5-tab bar + extras)**

| English | Punjabi | hi-ko | tl |
|---|---|---|---|
| Today | **ਅੱਜ** | आज | Ngayon |
| Lessons | **ਪਾਠ** | पाठ | Aralin |
| Practice | **ਅਭਿਆਸ** | अभ्यास | Pagsasanay |
| Review | **ਦੁਹਰਾਈ** | दोहराव | Review |
| Progress | **ਤਰੱਕੀ** | प्रगति | Pag-unlad |
| Read (advanced) | ਪੜ੍ਹਨਾ | पढ़ना | Basa |
| Feedback | ਫ਼ੀਡਬੈਕ | राय | Feedback |
| Privacy | ਪਰਦੇਦਾਰੀ | प्राइवेसी | Privacy |

In-text references use the same names: *ਤਰੱਕੀ → ਬੈਕਅੱਪ → ਫ਼ਾਈਲ ਸ਼ੇਅਰ ਕਰੋ*.

**Core words**

| English | Punjabi |
|---|---|
| Korean (language) | ਕੋਰੀਆਈ (= what `Intl.DisplayNames(['pa'])` gives for `ko`, so `{x}` slots match) |
| English | ਅੰਗਰੇਜ਼ੀ (also matches Intl) |
| Hangul | ਹੰਗੁਲ |
| romanization | ਰੋਮਨ (hi-ko uses रोमन); "pronunciation hint" (non-Korean courses) = ਉਚਾਰਨ ਸੰਕੇਤ |
| flashcard / card | ਫ਼ਲੈਸ਼ਕਾਰਡ / ਕਾਰਡ |
| deck | ਡੈੱਕ (pl. oblique ਡੈੱਕਾਂ) |
| lesson | ਪਾਠ |
| practice | ਅਭਿਆਸ |
| review (noun / verb) | ਦੁਹਰਾਈ / ਦੁਹਰਾਓ |
| due | ਦੁਹਰਾਈ ਲਈ (`{n} due` = ਦੁਹਰਾਈ ਲਈ {1}) |
| streak | ਸਟ੍ਰੀਕ (f.) |
| quiz / exam | ਕੁਇਜ਼ / ਇਮਤਿਹਾਨ |
| level | ਲੈਵਲ |
| phrase / My phrases | ਵਾਕ / ਮੇਰੇ ਵਾਕ |
| meaning / note / example / dialogue | ਮਤਲਬ / ਨੋਟ / ਉਦਾਹਰਨ / ਗੱਲਬਾਤ |
| goal / reminder / nickname | ਟੀਚਾ / ਰਿਮਾਈਂਡਰ / ਨਿੱਕਨੇਮ (ਯਾਦ alone is avoided: it is in ਯਾਦ ਹੈ and ਯਾਦ ਕਰੋ) |
| hint / pronunciation hint | ਇਸ਼ਾਰਾ / ਉਚਾਰਨ ਸੰਕੇਤ |
| check (lesson check) / quick check | ਜਾਂਚ (pl. ਜਾਂਚਾਂ) / ਛੋਟੀ ਜਾਂਚ; the button Check = ਜਾਂਚੋ |
| required / optional | ਜ਼ਰੂਰੀ / ਜ਼ਰੂਰੀ ਨਹੀਂ |
| new / learning / mastered / learned | ਨਵੇਂ / ਸਿੱਖੇ ਜਾ ਰਹੇ / ਪੱਕੇ / ਸਿੱਖੇ |
| Weak spots / Missed / Hardest | ਕਮਜ਼ੋਰੀਆਂ / ਗ਼ਲਤ ਹੋਏ / ਸਭ ਤੋਂ ਔਖੇ |
| bury / suspend | ⏭ ਟਾਲੋ (toast: ਕੱਲ੍ਹ ਤੱਕ ਟਾਲ ਦਿੱਤਾ) / ⏸ ਰੋਕੋ |
| Correct! / Not quite. | ਸਹੀ! / ਪੂਰਾ ਸਹੀ ਨਹੀਂ। |

**SRS and runner buttons:** *ਯਾਦ ਹੈ* (Got it), *ਫਿਰ ਤੋਂ* (Again), *ਜਾਂਚੋ* (Check), *📖 ਬ੍ਰਾਊਜ਼* (Browse), *⏰ ਸਾਰੇ ਦੁਹਰਾਓ* (All due), *ਛੱਡੋ* (Skip), *ਅੱਗੇ* (Next), *ਪਿੱਛੇ* (Back), *ਹੋ ਗਿਆ* (Done), *ਬੰਦ ਕਰੋ* (Close), *ਰੱਦ ਕਰੋ* (Cancel), *ਦੁਬਾਰਾ* (Retry), *ਫਿਰ ਕੋਸ਼ਿਸ਼* (Try again), *ਸ਼ੁਰੂ ਕਰੋ* (Start), *ਜਾਰੀ ਰੱਖੋ* (Continue).

**Level titles:** *ਸਿਖਾਂਦਰੂ* (Beginner), *ਪੁੰਗਰ* (Sprout), *ਵਿਦਿਆਰਥੀ* (Student), *ਗਾਲੜੀ* (Talker; 수다쟁이 "chatterbox"), *ਮੁਸਾਫ਼ਿਰ* (Traveler), *ਲੋਕਲ* (Local), *ਸੀਨੀਅਰ* (Senior; 선배, as hi-ko), *ਪ੍ਰੋ* (Pro), *ਉਸਤਾਦ* (Master), *ਸੇਨਸੇਈ* (Sensei). **ਗੁਰੂ was deliberately not used** (hi-ko uses गुरु for Sensei): in Punjabi it names the Sikh Gurus.

**Deck groups / hashtags:** *ਰੋਜ਼ਾਨਾ* (Everyday), *ਮੇਲ-ਜੋਲ* (Social); *#ਬੁਨਿਆਦ #ਸਫ਼ਰ #ਮੇਲ-ਜੋਲ #ਕੰਮ #ਮੀਡੀਆ #ਹੁਨਰ*.

**Days (chart):** ਐਤ ਸੋਮ ਮੰਗਲ ਬੁੱਧ ਵੀਰ ਸ਼ੁੱਕਰ ਸ਼ਨੀ.

## 4. 30 strings to check first (for a Punjabi speaker)

Answer "OK" or write the natural version.

| # | English key | Punjabi now | Doubt |
|---|---|---|---|
| 1 | Review (tab) | ਦੁਹਰਾਈ | Natural tab name? Or ਰਿਵਿਊ? |
| 2 | Progress (tab) | ਤਰੱਕੀ | Or ਪ੍ਰਗਤੀ (more Hindi-like)? |
| 3 | Read (tab) | ਪੜ੍ਹਨਾ | Noun-like tab: OK, or ਪੜ੍ਹਾਈ? |
| 4 | Privacy | ਪਰਦੇਦਾਰੀ | Google's word. Clear to users, or ਪ੍ਰਾਈਵੇਸੀ? |
| 5 | Got it (SRS button) | ਯਾਦ ਹੈ | Chosen to avoid gender (ਸਮਝ ਗਿਆ / ਗਈ). Natural as a button? |
| 6 | Again (SRS button) | ਫਿਰ ਤੋਂ | OK alone? |
| 7 | Due / {n} due | ਦੁਹਰਾਈ ਲਈ / ਦੁਹਰਾਈ ਲਈ {1} | Natural for "waiting for review"? |
| 8 | All due | ⏰ ਸਾਰੇ ਦੁਹਰਾਓ | OK? |
| 9 | Weak spots | ਕਮਜ਼ੋਰੀਆਂ | OK as a mode name? |
| 10 | bury / Buried until tomorrow | ⏭ ਟਾਲੋ / ਕੱਲ੍ਹ ਤੱਕ ਟਾਲ ਦਿੱਤਾ। | Clear? |
| 11 | suspend | ⏸ ਰੋਕੋ | OK? |
| 12 | mastered | ਪੱਕੇ / ਪੱਕਾ | Natural for "known for good"? |
| 13 | learning (SRS state) | ਸਿੱਖੇ ਜਾ ਰਹੇ | Too long? |
| 14 | Mixed (quiz mode) / Mix (pool) | ਰਲਵਾਂ / ਮਿਕਸ | Is ਰਲਵਾਂ the everyday word? |
| 15 | Korean | ਕੋਰੀਆਈ | Matches Intl. Do people say ਕੋਰੀਅਨ more? |
| 16 | Hangul | ਹੰਗੁਲ | Spelling? (ਹਾਂਗੁਲ, ਹੰਗੂਲ) |
| 17 | romanization | ਰੋਮਨ | Clear for "Korean in Latin letters"? |
| 18 | Talker (level title) | ਗਾਲੜੀ | Fun or rude? Others: ਸਿਖਾਂਦਰੂ, ਪੁੰਗਰ, ਵਿਦਿਆਰਥੀ, ਮੁਸਾਫ਼ਿਰ, ਲੋਕਲ, ਸੀਨੀਅਰ, ਉਸਤਾਦ, ਸੇਨਸੇਈ |
| 19 | Hello (intro, before a language is picked) | ਸਤ ਸ੍ਰੀ ਅਕਾਲ | en-pa's default greeting. Too Sikh-specific for a neutral app? ਹੈਲੋ? |
| 20 | Welcome to Lang App | Lang App ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ | Natural in an app? |
| 21 | I get by | ਕੰਮ ਚੱਲ ਜਾਂਦਾ ਹੈ | Natural for language ability? |
| 22 | Some basics | ਕੁਝ ਬੁਨਿਆਦੀ | Natural? Or ਥੋੜ੍ਹਾ-ਬਹੁਤ ਆਉਂਦਾ ਹੈ? |
| 23 | I nailed it | ਇੱਕਦਮ ਸਹੀ | OK? |
| 24 | Dating, friends & nights out | ਡੇਟਿੰਗ, ਦੋਸਤ ਅਤੇ ਰਾਤ ਦੀਆਂ ਮਹਿਫ਼ਲਾਂ | Is ਮਹਿਫ਼ਲਾਂ right for nights out? |
| 25 | Working late — nice job / it's late, good work | ਦੇਰ ਤੱਕ ਕੰਮ — ਸ਼ਾਬਾਸ਼ / ਦੇਰ ਹੋ ਗਈ, ਸ਼ਾਬਾਸ਼ | Is ਸ਼ਾਬਾਸ਼ too teacher-like for adults? |
| 26 | Something went wrong: | ਕੁਝ ਗੜਬੜ ਹੋ ਗਈ: | OK? |
| 27 | Streak at risk | ਸਟ੍ਰੀਕ ਖ਼ਤਰੇ ਵਿੱਚ | Too dramatic? ਸਟ੍ਰੀਕ ਟੁੱਟਣ ਵਾਲੀ ਹੈ? |
| 28 | Social (deck group) / #social | ਮੇਲ-ਜੋਲ / #ਮੇਲ-ਜੋਲ | OK? |
| 29 | Hand-tuned for speakers of your language | ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਬੋਲਣ ਵਾਲਿਆਂ ਲਈ ਖ਼ਾਸ ਤਿਆਰ ਕੀਤਾ | Natural? |
| 30 | casual (speech level) | ਆਮ / ਆਮ ਬੋਲਚਾਲ | Clear opposite of ਨਿਮਰ? Or ਬੇਤਕੱਲਫ਼? |

Also worth a glance: *ਗੇੜ* (pass) vs *ਰਾਊਂਡ* (round); *ਸਿਖਾਂਦਰੂ*; *ਉਚਾਰਖੰਡ* (Syllables); *ਆਪੇ ਪਲਟੇ* (Auto-flip); *ਹਾਲੀਆ ਦੁਹਰਾਈ: {1}* (Last {n} reviews); *ਦਬਾਉਣ ਨਾਲ ਉਚਾਰਨ ਵੱਜਦਾ ਹੈ* (after 🔊 ਸੁਣੋ: plays the pronunciation); *ਤੋੜ ਕੇ ਦੇਖੋ* (break it down); *ਨਾਲ ਬੋਲੋ ×3* (shadow); *ਝਟਪਟ ਕਾਰਵਾਈਆਂ* (quick actions); *ਬੋਲਚਾਲ ਦਾ ਪੱਧਰ* (Register); *ਕੋਰੀਆਈ ਦੀ ਸ਼ੁਰੂਆਤ* (Korean starter); *ਬਿਲਕੁਲ ਸਹੀ:* (Perfect on); *ਫਿਰ ਇਸ ਡੈੱਕ ਵਿੱਚੋਂ 5 ਕਾਰਡ:* (Then 5 cards from <deck>); the day abbreviations (ਮੰਗਲ, ਸ਼ੁੱਕਰ are 4–5 code points; fine for the chart?).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `pa` is a 2-letter code, so the `slice(0,2)` paths in `preLang()`, the `build.sh` loader and `tools/site/lazy.js` give `pa` for `pa-ko`, and `pa-IN` / `pa-Guru-IN` browsers map to `pa`.
- `LANGS.pa` exists: `{name:'Punjabi',self:'ਪੰਜਾਬੀ',flag:'🇮🇳',ko:'펀자브어'}`. Not in `RTL_LANGS` (correct for Gurmukhi).
- `Intl.DisplayNames(['pa'])` (Node, full ICU) gives ko → ਕੋਰੀਆਈ, en → ਅੰਗਰੇਜ਼ੀ, pa → ਪੰਜਾਬੀ, hi → ਹਿੰਦੀ, ja → ਜਪਾਨੀ, zh → ਚੀਨੀ, es → ਸਪੇਨੀ. These agree with this dictionary, so no override map is needed for the names pa-ko shows. (tl → ਫਿਲੀਪਿਨੋ, ceb → ਸੀਬੂਆਨੋ do not fit the feminine agreement in `How much {x} do you know?`; irrelevant unless such a course is added.)

**Worth knowing:**
1. **Shahmukhi users get Gurmukhi.** A `pa-PK` / `pa-Arab` browser also slices to `pa` and gets this Gurmukhi pack, which Pakistani Punjabi readers mostly cannot read (they would be better served by English or Urdu). Fix if wanted: in `preLang()` treat `pa-PK` and `pa-Arab*` as no match.
2. **Course UI overrides.** `tools/halves/native/pa/` does not exist yet. Whatever later goes into `tools/halves/native/pa/ko/ui.json` overrides this pack key by key; keep it consistent and prefer fixing wording here.
3. **Course-pack level titles** come through `{s}` slots from the pack (validator sample: `레벨 업! ਲੈਵਲ 5 · Talker 수다쟁이 🎉`). A pa-ko pack should use the titles in §3.
4. **`road.py`** still cannot run (as in the tl / ceb notes). `pa/roadmap.json` was written from the tl skeleton; `gen.py` emits `road` 40.

**Tell the halves agent:** the tabs on screen are **ਅੱਜ, ਪਾਠ, ਅਭਿਆਸ, ਦੁਹਰਾਈ, ਤਰੱਕੀ**. Lesson prose in `tools/halves/native/pa/ko/` should use these names and the button names in §3 (*ਯਾਦ ਹੈ, ਫਿਰ ਤੋਂ, ਜਾਂਚੋ, 📖 ਬ੍ਰਾਊਜ਼, ਮੇਰੇ ਵਾਕ*).

**Build-time lint used** (scratch script, not in the repo). It checks:
- Hangul runs, emoji and digits equal to the key's; slot set (validator);
- fragment leading / trailing punctuation (`.` and `।` count as equal);
- Latin runs only from the §2 list;
- no Devanagari (except the shared danda), NFC, no ZWJ / ZWNJ;
- no Latin full stop after Gurmukhi;
- Hindi leaks (ਹੂੰ, ਕੋ, ਸੇ, ਮੇਂ, ਔਰ, ਲੇਕਿਨ, ਯਹ, ਵਹ, ਜਾਤਾ, ਥਾ, ਕਹਾਂ), ਤੂੰ / ਤੇਰਾ / ਤੈਨੂੰ / ਤੁਮ, and the spellings ਵਿਚ / ਇਕ.

Accepted lint hits (reviewed): ਔਰਤ (woman) and ਆਪ (self, in ਆਪਣੇ ਆਪ / ਆਪ ਟਾਈਪ) are Punjabi, not Hindi leaks; `(e.g.` → `(ਜਿਵੇਂ` drops the abbreviation dot; `Perfect on` and `Then 5 cards from` gain a trailing colon because Punjabi word order needs one before the item that follows. The lint does **not** check agreement, word choice or naturalness; those need the native check (§4).

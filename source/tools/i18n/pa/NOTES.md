# Punjabi (pa) interface dictionary: notes

Files: `ui.json` (784 exact keys, 274 pattern templates, all filled), `roadmap.json` (the 39 English-roadmap entries filled; every other roadmap left empty so it falls back to English). No generated pack is committed: check with `python3 tools/i18n/gen.py pa <scratch file> && node tools/i18n/validate.js pa <scratch file>` (PASS, 1 length warning: "Write it" → «ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਲਿਖੋ», the profile's fixed wording).

Author: not a native speaker. Everything needs a native check; the priority list is in section 6.

## 1. Register and spelling

- ਤੁਸੀਂ with the plain -ੋ imperative on buttons and in sentences (ਚੁਣੋ, ਲਿਖੋ, ਦਿਖਾਓ). No ਤੂੰ, no ਜੀ, no «ਕਿਰਪਾ ਕਰਕੇ».
- Danda «।» ends sentences; no terminal punctuation on buttons and labels. All text NFC (dotted letters are base + nukta). Western digits only.
- «ਤੇ» is always "and"; "on" is always «ਉੱਤੇ» (never «'ਤੇ»), so the two cannot be confused.
- Tab names quoted inside sentences take straight double quotes: «"ਤਰੱਕੀ" ਵਿੱਚ ਈਮੇਲ ਜੋੜੋ».
- Legacy keys that say Korean / Hangul / romanization are written for English / ਉਚਾਰਨ. The two Korean-only explanations (`Type the romanization. Hangul blocks…`, `(han). Vertical vowels…`) carry a short English-spelling note instead, as in the Hindi file. `🇰🇷` in the share text became `🇺🇸`.

## 2. Terms fixed (one per concept)

| English | Punjabi |
|---|---|
| Today / Practice / Review / Lessons / Read / Progress / Feedback (tabs) | ਅੱਜ / ਅਭਿਆਸ / ਦੁਹਰਾਈ / ਪਾਠ / ਪੜ੍ਹੋ / ਤਰੱਕੀ / ਸੁਝਾਅ |
| Drills | ਡਰਿੱਲ |
| deck / card / flashcard | ਡੈੱਕ / ਕਾਰਡ / ਫ਼ਲੈਸ਼ਕਾਰਡ |
| review (noun) / review (button) / due | ਦੁਹਰਾਈ / ਦੁਹਰਾਓ / ਦੁਹਰਾਉਣੇ ਹਨ |
| quiz / lesson quick check / exam / blitz | ਟੈਸਟ / ਮਿੰਨੀ-ਟੈਸਟ / ਇਮਤਿਹਾਨ / ਤੇਜ਼ ਰਾਊਂਡ |
| Got it / Again / Try again / Retry | ਆਉਂਦਾ ਹੈ / ਦੁਬਾਰਾ / ਦੁਬਾਰਾ / ਦੁਬਾਰਾ ਕਰੋ |
| Check / Skip / Next / Back / Done / Close / Cancel | ਜਾਂਚੋ / ਛੱਡੋ / ਅੱਗੇ / ਪਿੱਛੇ / ਹੋ ਗਿਆ / ਬੰਦ ਕਰੋ / ਰੱਦ ਕਰੋ |
| Correct! / Not quite / Missed | ਸਹੀ! / ਪੂਰਾ ਸਹੀ ਨਹੀਂ / ਗ਼ਲਤ |
| hint / answer / why / rule | ਇਸ਼ਾਰਾ / ਜਵਾਬ / ਕਾਰਨ / ਨਿਯਮ |
| new / learning / learned / mastered | ਨਵੇਂ / ਸਿੱਖ ਰਹੇ / ਸਿੱਖੇ / ਪੱਕੇ |
| streak / streak shield | ਲੜੀ (counts: ਲਗਾਤਾਰ ਦਿਨ) / ਲੜੀ ਦੀ ਢਾਲ |
| level / XP / points / box / interval | ਲੈਵਲ / XP / ਅੰਕ / ਬਾਕਸ / ਵਕਫ਼ਾ |
| goal / plan / session / round / pass (1/3) | ਟੀਚਾ / ਪਲਾਨ / ਸੈਸ਼ਨ / ਰਾਊਂਡ / ਗੇੜ |
| suspend / bury / leech / restore | ਰੋਕੋ / ਟਾਲੋ (ਕੱਲ੍ਹ ਤੱਕ) / ਅੜਿਆ ਕਾਰਡ / ਵਾਪਸ ਲਿਆਓ |
| weak spots / hardest cards / mix / mixed / shuffle | ਕਮਜ਼ੋਰ ਥਾਵਾਂ / ਸਭ ਤੋਂ ਔਖੇ ਕਾਰਡ / ਮਿਕਸ / ਰਲਵਾਂ / ਸ਼ਫ਼ਲ ਕਰੋ |
| My phrases / note / meaning / example / dialogue / idiom | ਮੇਰੇ ਵਾਕ / ਨੋਟ / ਅਰਥ / ਉਦਾਹਰਨ / ਗੱਲਬਾਤ / ਮੁਹਾਵਰਾ |
| pronunciation (hint, romanization) | ਉਚਾਰਨ |
| Type (verb, quiz chip `⌨️ ਲਿਖੋ EN`) / Category / Text size | ਲਿਖੋ / ਕਿਸਮ / ਅੱਖਰ |
| polite ↔ casual (also "Register") | ਨਿਮਰ ↔ ਬੋਲਚਾਲ |
| grammar / verb / noun / number | ਵਿਆਕਰਨ / ਕਿਰਿਆ / ਨਾਂਵ / ਸੰਖਿਆ (the Numbers drill is ਗਿਣਤੀ) |
| account / device / sync / sign in / sign out / nickname | ਅਕਾਊਂਟ / ਡਿਵਾਈਸ / ਸਿੰਕ / ਸਾਈਨ ਇਨ ਕਰੋ / ਸਾਈਨ ਆਊਟ ਕਰੋ / ਨਿੱਕਨੇਮ |
| save / delete (account, note) / erase (progress) / remove / merge / add | ਸੇਵ ਕਰੋ / ਡਿਲੀਟ ਕਰੋ / ਮਿਟਾਓ / ਹਟਾਓ / ਮਿਲਾਓ / ਜੋੜੋ |
| unlock / locked | ਅਨਲਾਕ ਕਰੋ / ਬੰਦ |
| feedback board / post / public | ਸੁਝਾਅ ਬੋਰਡ / ਪੋਸਟ (feminine) / ਜਨਤਕ |
| certificate / badge / accent colour | ਸਰਟੀਫ਼ਿਕੇਟ / ਬੈਜ / ਥੀਮ ਰੰਗ |
| voice (woman / man) | ਆਵਾਜ਼ (ਔਰਤ / ਆਦਮੀ) |
| audio speed: slow / normal / native | ਹੌਲੀ / ਆਮ / ਅਸਲੀ |
| level titles: Beginner, Student, Talker, Traveler, Local, Pro, Master | ਸ਼ੁਰੂਆਤੀ, ਵਿਦਿਆਰਥੀ, ਗਾਲੜੀ, ਮੁਸਾਫ਼ਰ, ਲੋਕਲ, ਮਾਹਰ, ਉਸਤਾਦ |
| legacy titles: Sprout, Senior, Sensei | ਕਰੂੰਬਲ, ਸੀਨੀਅਰ, ਮਹਾਰਥੀ («ਗੁਰੂ» avoided on purpose: religious weight) |
| weekday headers Su–Sa | ਐ ਸੋ ਮੰ ਬੁੱ ਵੀ ਸ਼ੁੱ ਸ਼ (the `Intl` narrow forms for `pa`) |

Kept in Latin: Lang App, XP, Enter, Esc, Ctrl+K, DELETE (the engine compares the typed word), CSV, TSV, PNG, KB, 3D, Supabase, Vercel Web Analytics, V1, and the tense names Present / Past.

## 3. Counts (profile §10)

One wording per pattern, identical for the singular and plural English templates. Only two devices are used:
- an invariant noun straight after the number with nothing agreeing after it: `{1} ਕਾਰਡ`, `{1} ਦਿਨ`, `{1} ਡੈੱਕ`, `{1} ਪਾਠ`, `{1} ਸਵਾਲ`, `{1} ਅੰਕ`, `{1} ਮਿੰਟ`, `{1} ਸਕਿੰਟ`, `{1} ਪੈਟਰਨ`, `{2} ਵਾਰ ਦੇਖਿਆ`;
- label + colon + number for everything else: `ਬਾਕੀ: {1}`, `ਦੁਹਰਾਉਣੇ ਹਨ: {1}`, `ਹਫ਼ਤੇ: {1}`, `ਕੋਸ਼ਿਸ਼ਾਂ: {1}`, `ਗੱਲਬਾਤ: {1}`, `ਚੁਣੇ ਡੈੱਕ: {1}`, `ਬਾਕੀ ਰਾਊਂਡ: {1}`, `ਅਗਲੀ ਦੁਹਰਾਈ ਤੱਕ ਦਿਨ: {1}`, `ਡੈੱਕ: {2}` (for "across N decks").

Every count pattern was rendered at 0, 1, 2 and 21 through the generated pack; no pattern has a postposition, agreeing verb or variable noun after a count slot. `{n} 🔒 locked` and `🔒 {n} locked` both read `🔒 ਬੰਦ: {1}`.

Language-name slots stand at the start of the line or after a colon (`{1}: ਤੁਹਾਡਾ ਲੈਵਲ ਕੀ ਹੈ?`, `ਕੋਰਸ: {1} · …`, `ਜਵਾਬ ਦੀ ਭਾਸ਼ਾ: {1}`, `{1} — ਰੋਜ਼ 5 ਮਿੰਟ`).

## 4. What the main build must know

- **Split sentences.** `Type` + `DELETE` + `to confirm.` is one sentence in the delete sheet: the long pattern ends in «… ਪੱਕਾ ਕਰਨ ਲਈ», then `DELETE`, then `to confirm.` = «ਲਿਖੋ।». `: anything you post is` + `public` + `to all users. …` reads «… ਸਭ ਲੋਕਾਂ ਲਈ / ਜਨਤਕ / ਹੁੰਦਾ ਹੈ। …». `👆 Tap` + `the card to flip` reads «👆 ਟੈਪ ਕਰੋ / ਕਾਰਡ ਪਲਟਣ ਲਈ». If the engine ever reorders these pieces, the Punjabi breaks.
- **`Read`** is both the bottom-nav tab and the quiz-mode chip (`ਪੜ੍ਹੋ EN→PA`); «ਪੜ੍ਹੋ» serves both.
- **Nav rendering.** The app has `html[lang=hi] nav a{overflow:visible;line-height:1.5}` and nothing for `html[lang=pa]`; the same rule is needed or «ਦੁਹਰਾਈ», «ਪੜ੍ਹੋ», «ਤਰੱਕੀ», «ਅੱਜ» clip (profile §10). All seven labels are 3–6 code points.
- **Level titles** exist twice: here (exact keys) and in the course pack (`TITLES` in `tools/content/pa/meta.js`, another writer's file). They should be the same seven words as in section 2.
- **Weekday headers** are the `Intl` narrow forms; «ਬੁੱ» and «ਸ਼ੁੱ» are one cluster each but 3 and 4 code points.
- **Roadmap.** The basis line `CEFR A1-B1 order, adjusted for Korean speakers` is translated literally (the key says Korean); the engine shows `basisAny` to non-Korean interfaces anyway.

## 5. Deviations from the profile, recorded

- Profile §10 table gives «ਮਿੰਨੀ-ਟੈਸਟ: {1}» for `{n} quizzes · last {n}%`. It is used as given, although the same UI calls a deck quiz «ਟੈਸਟ» and keeps «ਮਿੰਨੀ-ਟੈਸਟ» for the 3-question lesson check everywhere else. If that line counts deck quizzes, «ਟੈਸਟ: {1} · ਪਿਛਲਾ {2}%» is the consistent wording.
- `Try again` is «ਦੁਬਾਰਾ» (profile glossary) on the button; full sentences say «ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ».
- `Welcome to Lang App` is «Lang App ਵਿੱਚ ਸੁਆਗਤ ਹੈ», not «ਜੀ ਆਇਆਂ ਨੂੰ», because of the no-ਜੀ rule.

## 6. Strings for the native check, most doubtful first

1. `Got it` «ਆਉਂਦਾ ਹੈ» (SRS button; also in `= Got it ·`, `Got it: {x}`).
2. Tab labels «ਦੁਹਰਾਈ», «ਤਰੱਕੀ», «ਸੁਝਾਅ», «ਪੜ੍ਹੋ».
3. `Hello` / `안녕하세요, {x}!` «ਹੈਲੋ» — chosen as the religion-neutral greeting; «ਸਤ ਸ੍ਰੀ ਅਕਾਲ» is the alternative.
4. Level titles: «ਗਾਲੜੀ» (Talker), «ਕਰੂੰਬਲ» (Sprout), «ਮਹਾਰਥੀ» (Sensei), «ਸ਼ੁਰੂਆਤੀ» (Beginner).
5. `Text size` «ਅੱਖਰ», `Category` «ਕਿਸਮ», `native` (audio speed) «ਅਸਲੀ», `Nickname` «ਨਿੱਕਨੇਮ».
6. `Polite ↔ casual` «ਨਿਮਰ ↔ ਬੋਲਚਾਲ».
7. `leech` «ਅੜਿਆ ਕਾਰਡ», `bury` «ਟਾਲੋ», `suspend` «ਰੋਕੋ», `mastered` «ਪੱਕੇ».
8. `Weak spots` «ਕਮਜ਼ੋਰ ਥਾਵਾਂ», `Streak` «ਲੜੀ», `Streak shield` «ਲੜੀ ਦੀ ਢਾਲ», `pass 1/3` «ਗੇੜ 1/3».
9. Count labels «ਦੁਹਰਾਉਣੇ ਹਨ: 1» (plural verb in a fixed label), «ਅਗਲੀ ਦੁਹਰਾਈ ਤੱਕ ਦਿਨ: {1}», «{2} ਵਾਰ ਦੇਖਿਆ», «ਨਵੇਂ ਕਾਰਡਾਂ ਦੇ ਦਿਨ: ~{1}».
10. Loan spellings: ਅਨਲਾਕ, ਅਕਾਊਂਟ, ਡਿਵਾਈਸ, ਬ੍ਰਾਊਜ਼, ਸ਼ਫ਼ਲ, ਰਿਮਾਈਂਡਰ, ਐਕਸਪੋਰਟ / ਇੰਪੋਰਟ, ਸ਼ਾਰਟਕੱਟ, ਫ਼ਲੈਸ਼ਕਾਰਡ.
11. Greeting glosses «ਸ਼ੁਭ ਸਵੇਰ / ਸ਼ੁਭ ਦੁਪਹਿਰ / ਸ਼ੁਭ ਸ਼ਾਮ»; `Working late — nice job` «ਦੇਰ ਤੱਕ ਲੱਗੇ ਹੋ — ਸ਼ਾਬਾਸ਼».
12. `Conversational in 90 days` «90 ਦਿਨਾਂ ਵਿੱਚ ਗੱਲਬਾਤ ਜੋਗੇ»; `I get by` «ਕੰਮ ਚੱਲਦਾ ਹੈ»; `Be kind…` «ਪਿਆਰ ਨਾਲ ਪੇਸ਼ ਆਓ…».
13. Roadmap: «ਉਚਾਰਨ ਦੀਆਂ ਔਕੜਾਂ», «ਕਰਤਾ ਵਾਲੇ ਪੜਨਾਂਵ» / «ਕਰਮ ਵਾਲੇ ਪੜਨਾਂਵ», «ਕਹਾਣੀ ਸੁਣਾਉਣ ਵਾਲੇ ਟੈਂਸ», «If ਵਾਲੇ ਵਾਕ 1: if».

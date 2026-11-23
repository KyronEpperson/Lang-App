PROGRESS (updated 2026-11-23)
Course: yue-en   Branch: course/yue-en   PR: (this pull request)
Done: research, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking (widened copy) · alphabet PASS · i18n validate PASS
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# yue-en lead note

No native Hong Kong reader has checked any of this. `tools/content/yue/REVIEW.md` lists what to check first.

## Decisions
- Scaffolded from the Korean course, standing rule `article-plural` (keywords 冠詞 / 眾數), IPA pron identical to the Chinese course, `nativeScript` = Han.
- ONE written register: Hong Kong written Chinese (書面語) in Traditional characters with Hong Kong vocabulary, addressing the learner as 你. Spoken Cantonese (係, 唔, 嘅, 咗, 佢) appears only inside 「」 as a quoted example.
- Most Chinese text was CONVERTED from the Mandarin course (Simplified → Traditional, Hong Kong wording, explanations re-aimed at Cantonese speakers) and then read string by string; `alphabet`, `pron` and `hk-english` were written fresh.
- American English for British-taught learners: British forms are never called wrong; typed prompts that accept only the American word carry a cue such as （用 movie）.
- Two yue-only lessons: `hk-english` (after `smalltalk`) and `articles-3` (after `passive`, converted from the Mandarin course). Two yue-only decks: 22 「港式英文陷阱」 and 23 「字尾發音」.
- "Hong Kong" is /ˌhɑːŋ ˈkɑːŋ/ everywhere; the embassy card is "I need to contact my consulate."
- Character forms: 裏, 着, 線, 床, 溫, 帳戶, 用戶; "spell" is 串字 / 串法.

## For the main build
1. Engine: `hLang()` must map `yue` to `zh-Hant-HK` (Traditional Hong Kong font stack) and `dLoc()` to `zh-HK`; otherwise the page gets a Simplified font stack and colloquial date words.
2. Three-letter code: `tools/content/lint.js` and `tools/i18n/road.py` reject `yue` (lint was run from a temporary widened copy); `profile.json` `reference` must be 2 letters, so no later course can use `yue` as its reference; PIPELINE §3 still says "2-letter code".
3. `tools/i18n/yue/roadmap.json` was made by hand in the usual shape. Only the English roadmap's 39 titles are filled. Simplified characters remain in the keys and reference fields of Chinese-target entries (never in a `t`): confirm the app never shows them to a `yue` interface.
4. `link_roadmap.py --check yue` and `e2e_en.js` need the built pack; not run here.
5. The roadmap basis line says "adjusted for Korean speakers" in the English source, and the roadmap `pron` title is the Korean lesson's (R/L, F/P, TH) while this course's lesson covers n / l, final stops, v, z, TH.
6. Shared English keeps the Korean setting (Seoul, Jeju, kimchi, won, "Who's your bias?"); localising it needs English-side deviations.
7. Name transcriptions (Hong Kong, Kowloon, Chan, Cantonese, Macau, Central, the MTR) are unverified against the en-US voice: table in `tools/content/yue/PRON-RULES.md`.

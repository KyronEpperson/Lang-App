# Kannada speakers learning Korean: pair profile

Course `kn-ko` = the Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 1,413 cards; `docs/HALVES-SPEC.md`) + the Kannada half `tools/halves/native/kn/ko/` (w1–w4; w4 also fills `work/wT.jsonl`; top-ups follow `docs/briefs/x-ko-topup.md`). This profile is the writers' authority. Plan as `hi-ko.md`, bridges rebuilt from Kannada (Dravidian); what the tl-ko / zh-ko reviews settled late is settled here first.

**Binding:** `tools/i18n/kn/NOTES.md` (register, glossary, tabs, buttons, level titles) and `roadmap.json` titles, reused unchanged; terms NOTES lacks are marked **[added]**. **Shared with `te-ko.md`** (read for consistency, no wording copied): endings on a head noun, never on Hangul; no ending on `@@`; tense cues; the final-vowel and retroflex traps. **Different on purpose:** written verb forms (§2.2); an unmarked third person is masculine singular, not the respect plural (§2.4).

**Author: not a native speaker of Kannada; every Kannada sentence here is [inference].** Tags: **[source]** opened (Sources) · **[convention]** school grammar, `en-kn.md`, app strings, not opened · **[inference]** own reasoning · **[unverified]** looked for, not confirmed.

## 1. Summary

1. **Register:** modern **written standard** Kannada, as the interface writes it (ಹೋಗುತ್ತೇನೆ, ಮಾಡುವುದಿಲ್ಲ), everywhere (§2.2). Learner = **ನೀವು** + -ಇ command.
2. **Levels:** 반말 → ನೀನು; 요 → ನೀವು; -습니다 → ನೀವು + formal words; -시- → respect plural or **ತಮ್ಮ** (§2.3).
3. **Gender:** 1st / 2nd person verbs carry none (en-kn §2.3), so no Hindi-style pairs; rules only for gendered nouns and third persons (§2.4).
4. **Bridges** (§4): case endings ↔ particles; -ಊ = 도; -ಗಿಂತ = 보다; -ದರೆ / -ದರೂ = -(으)면 / -아/어도; **ಅಲ್ಲ / ಇಲ್ಲ = 아니에요 / 없어요**. **Breaks:** ಇಲ್ಲ after the verb vs 안 before; no agreement in Korean; -ಅಲ್ಲಿ = 에 or 에서; the non-past covers 가요 and 갈 거예요 (cues, §9.2).
5. **Sound** (§6): aspiration is weak for many speakers [source], so ㅋ ㅌ ㅍ ㅊ are taught by air on the palm; everyday ಕ ತ ಪ ಚ ≈ ㄲ ㄸ ㅃ ㅉ; no added final ಉ.
6. **Learners:** Bengaluru teens and young adults drawn by K-dramas and K-pop [source: Deccan Herald]. No study of Dravidian-speaking learners of Korean found.

## 2. Register, glosses, person

### 2.1 Voice and typography

- Instructions ಓದಿ, ಕೇಳಿ, ಹೇಳಿ, ನೆನಪಿಡಿ; praise ಭೇಷ್!, ಸರಿ!. No ನೀನು, ರೀ, ಅಣ್ಣ toward the learner.
- NFC; **no ZWNJ / ZWJ** (loans write the conjunct: ವೆಬ್ಸೈಟ್); ASCII punctuation; **no danda**; Western digits only; ` / ` for alternatives only; `✗` / `✓`. Loans before an ending take -ಇ / -ಇನ / -ಉ (ಡೆಕ್ಕಿನಲ್ಲಿ, ವಾಟ್ಸಾಪಿನಲ್ಲಿ).
- Hangul and RR as in the English row; all else in Kannada script, brands too (ಕಾಕಾವೊಟಾಕ್, ವಾಟ್ಸಾಪ್, ಟಿ-ಮನಿ). Latin only for RR, `@@`, NOTES §2 (XP, Lv, Aa, A / B). K- = **ಕೆ-** (ಕೆ-ಪಾಪ್), as the interface's ಕೆ-ಡ್ರಾಮಾ.
- **No Kannada ending glued to Hangul, RR, `___` or `@@`** (its form depends on the host's last sound): 요-ರೂಪದಲ್ಲಿ, 은/는 ಪಾರ್ಟಿಕಲ್ ನಂತರ.
- `course.json`: `{"native":"kn","name":"ಕೊರಿಯನ್","brand":"한글"}`. Lint: never space + *on* + letters + `=` in a body.

### 2.2 Written standard, not spoken

**Decision:** written forms everywhere, not en-kn's spoken ಮಾಡ್ತೀನಿ / ಮಾಡಲ್ಲ, because (1) the interface is written and sits beside the lessons; (2) spoken Kannada has no fixed spelling (en-kn §2.2 lists four for one form), so four writers would diverge; (3) written forms are not regional; (4) stable wording keeps one answer per prompt. Cost: 반말 glosses read slightly bookish; ನೀನು / ನೀವು still carries the register. **Closed spoken list** (반말 glosses, texting, fixed phrases): ಆಯ್ತು, ಹೂಂ, ಓಕೆ, ಸಖತ್, ಡನ್, ಅಯ್ಯೋ, ಗೊತ್ತಾ?.

| | Non-past | Progressive | Past | Question | Command |
|---|---|---|---|---|---|
| ನಾನು | ಮಾಡುತ್ತೇನೆ | ಮಾಡುತ್ತಿದ್ದೇನೆ | ಮಾಡಿದೆ | — | — |
| ನೀನು | ಮಾಡುತ್ತೀಯೆ | ಮಾಡುತ್ತಿದ್ದೀಯೆ | ಮಾಡಿದೆ | ಮಾಡುತ್ತೀಯಾ? | ಮಾಡು · ಮಾಡಬೇಡ |
| ನೀವು | ಮಾಡುತ್ತೀರಿ | ಮಾಡುತ್ತಿದ್ದೀರಿ | ಮಾಡಿದಿರಿ | ಮಾಡುತ್ತೀರಾ? | ಮಾಡಿ · ಮಾಡಬೇಡಿ |

- Third person -ತ್ತಾನೆ / -ತ್ತಾಳೆ / -ತ್ತಾರೆ / -ತ್ತದೆ, past ಮಾಡಿದನು / -ದಳು / -ದರು / ಮಾಡಿತು. Negative ಮಾಡುವುದಿಲ್ಲ, past ಮಾಡಲಿಲ್ಲ. Let's ಮಾಡೋಣ; shall we ಮಾಡೋಣವೇ?.
- Question clitic **-ಆ** after a person ending (ಬರುತ್ತೀರಾ?), **-ಏ** after a neuter form, noun or ಬೇಕು (ಇದೆಯೇ?, ಬೇಕೇ?), as the interface does.

### 2.3 Korean levels in glosses

| Korean | Kannada | Example |
|---|---|---|
| 반말 | **ನೀನು**, bare command | 뭐 해? → ಏನು ಮಾಡುತ್ತಿದ್ದೀಯೆ? |
| 요-form | **ನೀವು**, -ಇ command | 앉으세요 → ಕುಳಿತುಕೊಳ್ಳಿ |
| -습니다 | ನೀವು + formal words | 감사합니다 → ಧನ್ಯವಾದಗಳು |
| -시- to the listener | ನೀವು + respectful verb | 맛있게 드세요 → ಚೆನ್ನಾಗಿ ಊಟ ಮಾಡಿ |
| -시- about a third person | **respect plural** | 할머니가 주무세요 → ಅಜ್ಜಿ ಮಲಗಿದ್ದಾರೆ |
| 성함 / 연세 / 말씀 | **ತಮ್ಮ** | 성함이 어떻게 되세요? → ತಮ್ಮ ಹೆಸರು ಏನು? |
| 주세요 · -아/어 주세요 | ಕೊಡಿ (no ದಯವಿಟ್ಟು) · -ಇ command | 물 주세요 → ನೀರು ಕೊಡಿ |
| 주시겠어요? | …ಕೊಡುತ್ತೀರಾ? | 찍어 주시겠어요? → ಫೋಟೋ ತೆಗೆದು ಕೊಡುತ್ತೀರಾ? |

- **Tags** (ಔಪಚಾರಿಕ) / (ವಿನಯ) / (ಸಲುಗೆ) / (ಗೌರವಸೂಚಕ) only where the English row has one. A -시- line gets the respect form itself (ಅಜ್ಜಿ ಮಲಗಿದ್ದಾರೆ), never a plain verb plus a tag.
- **Both directions:** a 요 / -습니다 / -시- line never gets ನೀನು; a 반말 line never gets ನೀವು. Fixed phrases take no pronoun.
- **ತಮ್ಮ only** for 성함, 연세, 말씀, 계시다, 드시다 to the listener (homograph ತಮ್ಮ "younger brother": use only where unambiguous).
- **ದಯವಿಟ್ಟು** only if the English says "please" and the line is -습니다 or written.
- 네 / 아니요 = ಹೌದು / ಇಲ್ಲ; 응 / 아니 = ಹೂಂ / ಇಲ್ಲ. Add no ಸರ್ / ಅವರೇ the Korean lacks.
- Name + 씨: address **ಮಿನ್ಸು ಅವರೇ**, reference **ಮಿನ್ಸು ಅವರು**; never ಅವರು after your own name.

### 2.4 Person and gender

**"I" / "you":** verbs are neutral. Where a noun marks gender, take the first fix that fits: dative frame (ನನಗೆ ಹಸಿವಾಗಿದೆ, ನನಗೆ 28 ವರ್ಷ); -ಆಗಿ + ಇದ್ದೇನೆ (ಎತ್ತರವಾಗಿದ್ದೇನೆ); an invariant noun (ವಿದ್ಯಾರ್ಥಿ generic, ಡಾಕ್ಟರ್); origin as a verb (ಅಮೆರಿಕದಿಂದ ಬಂದಿದ್ದೇನೆ, never ಅಮೆರಿಕದವನು), nationality "<country>ದ ಪ್ರಜೆ"; the scene (오빠 / 언니 from the speaker → female, 형 / 누나 → male; 민수 male, 지은 / 리사 female); last, an unspaced pair, masculine first (ಒಬ್ಬನೇ/ಒಬ್ಬಳೇ), never a spaced ` / `.

**Third persons:** unmarked 친구 / 사람 = **singular ಸ್ನೇಹಿತ / ವ್ಯಕ್ತಿ, masculine agreement**; ಸ್ನೇಹಿತೆ only if marked female. Not the respect plural: ಸ್ನೇಹಿತರು reads "friends", and isseoyo.13, verbs.13, future.13 accept only 친구가 / 친구는. Respect plural only where the Korean has -시- or 님.

**우리:** invitations → ನಾವು / -ಓಣ; 우리 엄마 / 집 → **ನಮ್ಮ** (Kannada says "our mother" too); 저희 → ನಾವು / ನಮ್ಮ.

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list)

All grammar and script terms in NOTES §3 apply as written (ನಾಮಪದ, ಕ್ರಿಯಾಪದ, ಗುಣವಾಚಕ, ಧಾತು, ನಿಘಂಟು ರೂಪ, ವರ್ತಮಾನ / ಭೂತಕಾಲ / ಭವಿಷ್ಯತ್ಕಾಲ, ಸ್ವರ, ವ್ಯಂಜನ, ಕೊನೆಯ ವ್ಯಂಜನ, ಬ್ಲಾಕ್, ಅಕ್ಷರ, ಎಣಿಕೆ ಪದ, ಪ್ರಶ್ನಾರ್ಥಕ ಪದ, ಧ್ವನಿ ಬದಲಾವಣೆ, ಅನಿಯಮಿತ, ಮಾದರಿ, ನುಡಿಗಟ್ಟು; ಕೊರಿಯನ್, ಹಂಗುಲ್, ರೋಮನ್ ಲಿಪಿ). Additions and fixed choices:

| Idea | Term |
|---|---|
| particle [added] | **ಪಾರ್ಟಿಕಲ್**; first use: "ಕನ್ನಡದ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯದಂತೆ ನಾಮಪದದ ನಂತರ ಅಂಟುವ ಚಿಕ್ಕ ಪದ" |
| 은/는 · 이/가 · 을/를 [added] | **ವಿಷಯ · ಕರ್ತೃ · ಕರ್ಮ ಪಾರ್ಟಿಕಲ್** |
| Kannada case ending · Korean verb ending [added] | **ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ** · **ಪ್ರತ್ಯಯ** |
| 크다 type · 하다 type · adverb [added] | **ವರ್ಣನಾತ್ಮಕ ಕ್ರಿಯಾಪದ** · **하다-ಕ್ರಿಯಾಪದ** · ಕ್ರಿಯಾವಿಶೇಷಣ |
| -습니다 · 요 · 반말 · -시- | **ಔಪಚಾರಿಕ** [added] · **ವಿನಯ · ಸಲುಗೆ · ಗೌರವಸೂಚಕ**; together **ವಿನಯದ ಮಟ್ಟಗಳು** (one = ಮಟ್ಟ); 요-ರೂಪ |
| 씨, 님, titles | **ಸಂಬೋಧನೆ** (roadmap) |
| two number sets [added] | **ಮೂಲ ಕೊರಿಯನ್ / ಸಿನೋ-ಕೊರಿಯನ್ ಸಂಖ್ಯೆಗಳು** (never ಚೀನೀ) |
| connector · softener · word order [added] | ಸಂಪರ್ಕ ಪದ · ಮೃದುಗೊಳಿಸುವ ಪದ · ಪದಕ್ರಮ |
| plain · aspirated · tense [added] | **ಸರಳ · ಮಹಾಪ್ರಾಣ · ಬಿಗಿ ವ್ಯಂಜನ** (not ಅಲ್ಪಪ್ರಾಣ: Kannada ಕ is ಅಲ್ಪಪ್ರಾಣ yet sounds like ㄲ) |
| 연음 · 비음화 [added] | **ಜೋಡಿಸಿ ಓದುವುದು** · **ಅನುನಾಸಿಕ ಬದಲಾವಣೆ** |

### 3.2 Screen names (NOTES §3, exact)

- Tabs **ಇಂದು · ಪಾಠಗಳು · ಅಭ್ಯಾಸ · ರಿವ್ಯೂ · ಪ್ರಗತಿ**; Read = ಓದು; in text add ವಿಭಾಗ (ಪ್ರಗತಿ ವಿಭಾಗದಲ್ಲಿ). Buttons **ಗೊತ್ತಿದೆ · ಮತ್ತೆ · ಪರಿಶೀಲಿಸಿ · ನೋಡಿ · ನನ್ನ ನುಡಿಗಟ್ಟುಗಳು · ಎಲ್ಲಾ ಬಾಕಿ**. Lesson check = ಪರಿಶೀಲನೆ (ಪರೀಕ್ಷೆ = Exam). Cross-refs: ಪಾಠ N ("title").
- **Read tab and drills may be named** (w4 fills `wT.jsonl`): `sound-changes` keeps "ಓದು ವಿಭಾಗದಲ್ಲಿ 🔀 ಧ್ವನಿ ಬದಲಾವಣೆ ಡ್ರಿಲ್ ಮಾಡಿ ನೋಡಿ" (lead drops it if `trainer.json` does not ship); `hangul` keeps "ಬರೆಯುವ ಕ್ರಮವನ್ನು ಮತ್ತೆ ನೋಡಲು ಅಕ್ಷರದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ".

### 3.3 Labels (permanent progress keys)

| id (1–28) | label | id (29–56) | label |
|---|---|---|---|
| hangul-vowels | ಹಂಗುಲ್ ಸ್ವರಗಳು | flirting | ಫ್ಲರ್ಟಿಂಗ್ |
| hangul-consonants | ಹಂಗುಲ್ ವ್ಯಂಜನಗಳು | casual-texting | ಸ್ನೇಹಿತರ ಜೊತೆ ಚಾಟ್ |
| hangul-advanced | ಹಂಗುಲ್: ಮುಂದಿನ ಹಂತ | hype-cool | ಹುರುಪು ಮತ್ತು ಸ್ಟೈಲ್ |
| pronunciation-tips | ಉಚ್ಚಾರಣೆಯ ಸಲಹೆಗಳು | hanging-out | ಜೊತೆ ಸುತ್ತಾಟ |
| survival-phrases | ಅಗತ್ಯದ ಮಾತುಗಳು | k-pop-fan-culture | ಕೆ-ಪಾಪ್ ಮತ್ತು ಫ್ಯಾನ್ ಸಂಸ್ಕೃತಿ |
| introductions | ಪರಿಚಯ | social-media-slang | ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್ |
| survival-phrases-2 | ಅಗತ್ಯದ ಮಾತುಗಳು 2 | dating-deeper | ಡೇಟಿಂಗ್: ಮುಂದಿನ ಹೆಜ್ಜೆ |
| asking-around | ವಿಚಾರಿಸುವುದು | work-office | ಕೆಲಸ ಮತ್ತು ಕಚೇರಿ |
| cafe-convenience-store | ಕೆಫೆ ಮತ್ತು ಕನ್ವೀನಿಯನ್ಸ್ ಸ್ಟೋರ್ | small-talk | ಹರಟೆ |
| numbers-in-the-wild | ದಿನನಿತ್ಯದ ಸಂಖ್ಯೆಗಳು | food-ordering | ಊಟ ಮತ್ತು ಆರ್ಡರ್ |
| counters | ಎಣಿಕೆ ಪದಗಳು | directions-transport | ದಾರಿ ಮತ್ತು ಸಾರಿಗೆ |
| weather-feelings | ಹವಾಮಾನ ಮತ್ತು ಭಾವನೆಗಳು | time-days | ಸಮಯ ಮತ್ತು ದಿನಗಳು |
| connectors | ಸಂಪರ್ಕ ಪದಗಳು | family-people | ಕುಟುಂಬ ಮತ್ತು ಜನರು |
| doctor-pharmacy | ಡಾಕ್ಟರ್ ಮತ್ತು ಔಷಧಿ ಅಂಗಡಿ | adjectives | ಗುಣವಾಚಕಗಳು |
| housing-errands | ಮನೆ ಮತ್ತು ದಿನದ ಕೆಲಸಗಳು | k-drama-phrases | ಕೆ-ಡ್ರಾಮಾ ಮಾತುಗಳು |
| honorifics | ಗೌರವಸೂಚಕ ರೂಪಗಳು | top-nouns | ಹೆಚ್ಚು ಬಳಸುವ ನಾಮಪದಗಳು |
| places-buildings | ಸ್ಥಳಗಳು ಮತ್ತು ಕಟ್ಟಡಗಳು | top-verbs | ಹೆಚ್ಚು ಬಳಸುವ ಕ್ರಿಯಾಪದಗಳು |
| hobbies | ಹವ್ಯಾಸಗಳು | top-adjectives | ಹೆಚ್ಚು ಬಳಸುವ ಗುಣವಾಚಕಗಳು |
| food-words | ಆಹಾರದ ಪದಗಳು | top-adverbs | ಹೆಚ್ಚು ಬಳಸುವ ಕ್ರಿಯಾವಿಶೇಷಣಗಳು |
| drinks | ಪಾನೀಯಗಳು | top-pronouns | ಹೆಚ್ಚು ಬಳಸುವ ಸರ್ವನಾಮಗಳು |
| activities | ದಿನನಿತ್ಯದ ಚಟುವಟಿಕೆಗಳು | top-particles | ಇನ್ನಷ್ಟು ಪಾರ್ಟಿಕಲ್ |
| tv-entertainment | ಟಿವಿ ಮತ್ತು ಮನರಂಜನೆ | top-connectors | ಹೆಚ್ಚು ಬಳಸುವ ಜೋಡಣೆ ರೂಪಗಳು |
| position-direction-words | ಸ್ಥಾನ ಮತ್ತು ದಿಕ್ಕು | top-interjections | ಉದ್ಗಾರಗಳು |
| core-verbs | ಮುಖ್ಯ ಕ್ರಿಯಾಪದಗಳು | top-words | ಹೆಚ್ಚು ಬಳಸುವ ಚಿಕ್ಕ ಪದಗಳು |
| particles | ಪಾರ್ಟಿಕಲ್ | top-counters | ಇನ್ನಷ್ಟು ಎಣಿಕೆ ಪದಗಳು |
| numbers | ಸಂಖ್ಯೆಗಳು | flirting-words | ಫ್ಲರ್ಟಿಂಗ್ ಪದಗಳು |
| sweet-talk | ಸಿಹಿ ಮಾತು | compliments | ಹೊಗಳಿಕೆಯ ಮಾತುಗಳು |
| cute-things-to-say | ಮುದ್ದಾದ ಮಾತುಗಳು | countries | ದೇಶಗಳು |

- All unique; none is ನನ್ನ ನುಡಿಗಟ್ಟುಗಳು; no final full stop.
- **Groups:** foundations **ಮೂಲಭೂತ** · everyday **ದಿನನಿತ್ಯ** · vocabulary **ಪದಸಂಪತ್ತು** · grammar **ವ್ಯಾಕರಣ** · social **ಸಾಮಾಜಿಕ** · core-words **ಮೂಲ ಪದಗಳು**.
- **Level titles, greetings, goals, plans:** copy the interface text exactly (`tools/i18n/kn/ui.json`, key = the English label): ಮೊಳಕೆ, ವಿದ್ಯಾರ್ಥಿ, ಹಿರಿಯ, ಪ್ರೊ, ನಿಪುಣ, ಗುರು; ತಡವಾಯಿತು, ಒಳ್ಳೆಯ ಶ್ರಮ / ಶುಭೋದಯ / ಶುಭ ಮಧ್ಯಾಹ್ನ / ಶುಭ ಸಂಜೆ; ಕೆ-ಡ್ರಾಮಾ ಮತ್ತು ಸಂಗೀತ etc.
- **Coined:** pause sets compliment **ಹೊಗಳಿಕೆ** · expression **ದಿನನಿತ್ಯದ ನುಡಿ** · polite **ವಿನಯದ ಮಾತು** · saying **ನುಡಿಮುತ್ತು**; `ko.d.mydeck` **ನೀವೇ ಸೇರಿಸಿದ್ದೆಲ್ಲವೂ.** No two equal glosses in one set (watch expression .04 / .18, .05 / .19).

### 3.4 Lesson titles

All 33 are in §8 with their notes (stored "N · title"; exactly the English title's Hangul; roadmap Kannada reused where titles match, **never its Hangul**, which adds 보다 더, 이에요/예요, -(스)ㅂ니다 and reorders the joining endings).

## 4. Grammar bridges and traps

Kannada grammar here is [convention, not opened]. Hangul in §4, §6, §8 is for writers; a field may use it only if its English has the same Hangul runs, or under `_waive`.

### 4.1 Order and the case-ending map

**Holds:** verb last; question words in place (ಇದು ಏನು? = 이거 뭐예요?, word for word); endings glued to the noun; yes/no marked at the end. **Breaks:** Kannada bends the noun with a linking sound (ಮನೆ-ಯ-ಲ್ಲಿ); Korean keeps the noun and picks a particle shape by final sound (집을 / 차를). Kannada drops pronouns because the verb shows the person; Korean verbs show none.

| Kannada | Korean | Note |
|---|---|---|
| — · -ಅನ್ನು | 이/가, 은/는 · 을/를 | no Kannada topic marker; both drop the object marker in speech |
| -ಗೆ (place, time · person) | 에 · 에게 / 한테 | ಶಾಲೆಗೆ = 학교에; ಮೂರು ಗಂಟೆಗೆ = 세 시에 |
| -ಅಲ್ಲಿ | 에 (be) · 에서 (do) | **one ending, two particles**: the core trap of ಪಾಠ 13 |
| -ಇಂದ · -ಇಂದ … -ವರೆಗೆ | 에서 (from) · 부터 … 까지 | |
| -ಅಲ್ಲಿ (vehicle) · ಜೊತೆ | (으)로 · 하고 / 랑 / 와 | ಜೊತೆ is a separate word; 하고 is glued |
| ನನ್ನ ಹತ್ತಿರ … ಇದೆ · -ಗಿಂತ · -ಅ | 이/가 있어요 · 보다 · 의 (often dropped) | -ಗಿಂತ = 보다 in the same slot |

### 4.2 -ಊ, ಮಾತ್ರ, the missing topic

- **도 ≈ -ಊ**, glued and stacking after a case ending (ನಾನೂ = 저도; ಮನೆಯಲ್ಲೂ = 집에서도). Break: 도 *replaces* 은/는, 이/가, 을/를 (저는도 ✗).
- **만 ≈ ಮಾತ್ರ** (a separate word); emphatic -ಏ (ಇದೇ) is not 만.
- **은/는:** no Kannada match; teach "…ಬಗ್ಗೆ ಹೇಳುವುದಾದರೆ" ("as for"). Never "은/는 = ಆದರೆ".

### 4.3 "Is": nothing, ಇದೆ, ಅಲ್ಲ, ಇಲ್ಲ — the best bridge

| Kannada | Korean | Job |
|---|---|---|
| ನಾನು ವಿದ್ಯಾರ್ಥಿ | 학생이에요 | A = B (Korean needs 이에요 / 예요) |
| ಮನೆಯಲ್ಲಿ ಇದ್ದೇನೆ · ನನ್ನ ಹತ್ತಿರ ಸಮಯ ಇದೆ | 집에 있어요 · 시간이 있어요 | location · having / existing |
| ನಾನು ಡಾಕ್ಟರ್ ಅಲ್ಲ · ಸಮಯ ಇಲ್ಲ | 의사가 아니에요 · 시간이 없어요 | **ಅಲ್ಲ = 아니에요, ಇಲ್ಲ = 없어요** |

Trap: ಇಲ್ಲ also negates verbs, where Korean uses 안. Predicted: 저는 고양이예요 for "I have a cat".

### 4.4 Verbs, tense, negation

- ಧಾತು ≈ stem; 하다 ≈ ಮಾಡು with the same split (ಅಭ್ಯಾಸ ಮಾಡುವುದಿಲ್ಲ = 공부 안 해요). **No agreement** in Korean (Kannada marks person, number, gender): say so early, as good news. 커요 is one word (크다이에요 ✗).
- 가요 = ಹೋಗುತ್ತೇನೆ + ಹೋಗುತ್ತಿದ್ದೇನೆ; the non-past also means "will", Korean adds -(으)ㄹ 거예요. ದುಬಾರಿ ಇರಬಹುದು = 비쌀 거예요. Past: ತಿಂದೆ / ತಿಂದಿದ್ದೇನೆ = 먹었어요; ಇನ್ನೂ ಹೋಗಿಲ್ಲ = 아직 안 갔어요.
- **Negation, the big break:** ಇಲ್ಲ **after** the verb, 안 **before** it. -지 않아요 has the Kannada order: bridge with it, then drill 안. Predicted: 마셔요 안 ✗, 안 공부해요 ✗. ಬೇಡ ≈ -지 마세요.
- **Can / can't / won't:** ನನಗೆ … ಬರುತ್ತದೆ ≈ -(으)ㄹ 수 있어요; **ಆಗುವುದಿಲ್ಲ = 못, ಮಾಡುವುದಿಲ್ಲ = 안**; ಗೊತ್ತಿಲ್ಲ = 몰라요.

### 4.5 ನನಗೆ ಇಷ್ಟ, ನನಗೆ ಬೇಕು

- **ನನಗೆ ಕಾಫಿ ಇಷ್ಟ = 커피가 좋아요** (thing liked = subject); 좋아해요 takes 을/를. Predicted: 커피가 좋아해요 ✗; 저에게 커피가 좋아요 ✗.
- **ಬೇಕು = "want" and "must"**; Korean splits them. Prompts use §9.2 frames, never bare ಬೇಕು.

### 4.6 Politeness and address

- **Holds** [inference]: ನೀವು / ನೀನು ≈ 요 / 반말; switching needs consent (말 놔도 돼요); the respect plural (ಅಪ್ಪ ಬಂದರು) ≈ -시-.
- **Breaks (teach all four):** (1) respect sits only on the Korean ending, "you" is dropped: 당신 ≠ ನೀವು. (2) ನೀನು to young staff is common in India [inference]; every adult stranger in Korea gets 요. (3) **-습니다 is not "written Kannada"**: it is a spoken formal level, not a writing style like ಮಾಡುತ್ತೇನೆ vs ಮಾಡ್ತೀನಿ. (4) Korean has a humble "I" (저). Never -시- for yourself.
- **Address:** name + ಅವರು / ಅವರೇ ≈ 씨 / 님; ಅಣ್ಣ / ಅಕ್ಕ ≈ 형·오빠 / 누나·언니, chosen also by the **speaker's** gender; ತಮ್ಮ / ತಂಗಿ vs one 동생; drivers are ಅಣ್ಣ in Karnataka, 기사님 in Korea; ಸರ್ / ಮೇಡಂ ≈ a title alone; vocative vowel lengthening (ಮಿನ್ಸೂ!) ≈ 아 / 야.

### 4.7 Comparing, modifiers, joining, conditionals, numbers, counters

- **Compare:** ಬಸ್ ಟ್ಯಾಕ್ಸಿಗಿಂತ ಅಗ್ಗ = 버스가 택시보다 싸요; ಇನ್ನೂ ≈ 더; ಎಲ್ಲಕ್ಕಿಂತ ≈ 제일.
- **Modifiers:** participles precede the noun without agreement (ನಿನ್ನೆ ನೋಡಿದ ಸಿನಿಮಾ = 어제 본 영화; -ದ ≈ -(으)ㄴ, -ಉವ ≈ -는 / -(으)ㄹ). Break: Kannada adjectives are fixed (ದೊಡ್ಡ ಚೀಲ); Korean ones take an ending (큰 가방).
- **Joining:** the -ಇ form ≈ -아/어서, tenseless in both; reason first (ಬ್ಯುಸಿ ಇರುವುದರಿಂದ ಬರುವುದಿಲ್ಲ ≈ 바빠서 안 가요); ಆದರೆ / -ಆದರೂ ≈ -지만. Story words ಮೊದಲು, ಮತ್ತು, ಆಮೇಲೆ, ಅದಕ್ಕೇ, ಕೊನೆಗೆ.
- **Conditionals, exact:** -ದರೆ = -(으)면; -ದರೂ = -아/어도; ಕುಳಿತರೂ ಪರವಾಗಿಲ್ಲ = 앉아도 돼요; ಹೋಗದಿದ್ದರೂ ಪರವಾಗಿಲ್ಲ = 안 가도 돼요.
- **Numbers:** 10만 = 1 ಲಕ್ಷ; hours native (ಮೂರು ಗಂಟೆ = 세 시), minutes / money / dates / floors / phones Sino-Korean; ಮೂರುವರೆ = 세 시 반; ಕಾಲು → 분; ನನಗೆ 28 ವರ್ಷ = 스물여덟 살이에요.
- **Counters:** ಒಬ್ಬರು / ಇಬ್ಬರು reshape the number like 한 명 / 두 명. Break: ಎರಡು ಕಪ್ ಕಾಫಿ vs 커피 두 잔 (두 커피 ✗).

## 5. Error zones

Ranked in §4 (bridges and breaks) and §6.1 (sound traps); the top five: plain stops said as ಕ ತ ಪ ಚ; the added final ಉ; RR *eo* / *ae* read as "ಯೋ" / ಐ; -ಅಲ್ಲಿ → 에 for actions; 안 after the verb.

## 6. Reading guide

Korean has no ಕ / ಗ voicing pair, only plain / tense / aspirated, and **no tones and no word stress**: the pitch differences after stops are a by-product, not something to learn word by word. **The script compares, it never reads:** Kannada letters stand for one sound (ㅏ ≈ ಆ) or one syllable with signs and virama (옷 ≈ "ಒತ್"), always with **ಸುಮಾರು** or a mouth cue; a wrong reading may be shown with ✗. No whole-word respellings: no letter exists for ㅡ or ㅓ; press spellings (ಸಿಯೋಲ್) teach "ಯೋ"; respellings invite the final ಉ; Hangul is the goal. Name labels (ಮಿನ್ಸು) are labels.

### 6.1 Sound table (card notes c0001–c0060, `hangul` table, deck descriptions)

| Jamo (RR) | For a Kannada speaker | Trap |
|---|---|---|
| ㅏ a | ಆ, not long | not ಅ |
| ㅓ eo | near ಅ, jaw lower, tongue back, lips **not** rounded | not ಒ, not "ಯೋ" |
| ㅗ · ㅜ · ㅣ | ಒ / ಓ (rounded) · ಉ / ಊ · ಇ / ಈ; length irrelevant | no ವ before ㅗ, no ಯ before ㅣ |
| ㅡ eu | ಉ with lips spread, as in a smile | no letter |
| ㅐ = ㅔ | ಎ / ಏ | **not ಐ** |
| ㅑ ㅛ ㅠ · ㅘ · ㅟ | ಯಾ ಯೋ ಯು · ವಾ · ವಿ | |
| ㅕ · ㅝ · ㅚ ㅙ ㅞ · ㅢ | ಯ + ㅓ · ವ + ㅓ · about ವೆ · ㅡ + ಇ | *yeo* ≠ ಯೋ |
| ㄱ ㄷ ㅂ ㅈ | soft ಗ ದ ಬ ಜ, slight air word-initially, low pitch | never ಕ ತ ಪ ಚ |
| ㅋ ㅌ ㅍ ㅊ | **a strong puff on the palm**; ಖ ಥ ಫ ಛ help only if you really aspirate them | ㅍ: lips, not teeth on lip |
| ㄲ ㄸ ㅃ ㅉ | everyday ಕ ತ ಪ ಚ: no air, tight throat, higher pitch | not long; ಅಕ್ಕ's ಕ್ಕ only a rough guide between vowels [inference] |
| ㅅ / ㅆ | ಸ / tight ಸ; before ㅣ about ಶ | |
| ㄷ ㅌ ㄸ | the ತ / ದ family | **never** ಟ / ಡ |
| final ㅇ | the ಙ of ಅಂಗಡಿ, no ಗ after | 강 ≠ "ಗಾಂಗ್" |
| ㄹ | light ರ tap between vowels; ಲ at a syllable end; ㄹㄹ = ಲ್ಲ of ಎಲ್ಲಿ | final ㄹ **not ಳ**, not ರ |
| ㄴ ㅁ · ㅎ | ನ ಮ (final ㄴ a full ನ್, not ಂ) · ಹ, often silent between vowels | |
| finals | ಕ್ ತ್ ಪ್, unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → ತ್ | **no added ಉ** ("ಬಾಪು" ✗) |

**Script bridge [inference]:** one ಬ್ಲಾಕ್ = one ಅಕ್ಷರ; consonant + vowel ≈ consonant + ಕಾಗುಣಿತ sign; Hangul draws mouth shapes as the ವರ್ಗ order follows the mouth. Visual aid only: 받침 sits under the block as an ಒತ್ತಕ್ಷರ under its letter, **but** an ಒತ್ತಕ್ಷರ is read before the vowel, 받침 after. Breaks: vowels are full letters; initial ㅇ is a silent placeholder; block-by-block reading kills linking (ಪಾಠ 4).

### 6.2 Guide in Kannada (lesson 1; `"_waive":["hangul"]` + `_note` on its title row; reused in `sound-changes` and the Hangul deck descriptions)

> **ರೋಮನ್ ಲಿಪಿಯನ್ನು ಹೇಗೆ ಓದುವುದು** — ಈ ರೋಮನ್ ಲಿಪಿಯನ್ನು ಇಂಗ್ಲಿಷ್ ಓದುವವರಿಗಾಗಿ ಮಾಡಲಾಗಿದೆ. ಆದ್ದರಿಂದ:
> - **a** ಯಾವಾಗಲೂ ಚಿಕ್ಕ "ಆ". ಕನ್ನಡದ "ಅ"ಗೆ ಹತ್ತಿರದ ಸ್ವರ **eo**: ದವಡೆ ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೆಳಗೆ, ತುಟಿ ದುಂಡಾಗಿಲ್ಲ. *seoul* ನಲ್ಲಿ "ಯೋ" ಇಲ್ಲ.
> - **eu**: ತುಟಿಯನ್ನು ನಗುವಂತೆ ಅಗಲಿಸಿ "ಉ" ಹೇಳಿ. **ae** ಮತ್ತು **e** ಎರಡೂ "ಎ" — "ಐ" ಅಲ್ಲ. **o** ಶುದ್ಧ "ಒ"; ಮೊದಲು "ವ" ಸೇರಿಸಬೇಡಿ. **wo** = ವ + eo.
> - **k, t, p, ch**: ಬಾಯಿಯ ಮುಂದೆ ಅಂಗೈ ಹಿಡಿದರೆ ಗಾಳಿ ತಾಗಬೇಕು. **p** ಎಂದರೆ ತುಟಿ ಮುಚ್ಚಿ ತೆರೆಯುವುದು; ಹಲ್ಲು ತುಟಿಗೆ ತಾಗುವುದಿಲ್ಲ.
> - **kk, tt, pp, jj** = ನಮ್ಮ ದಿನನಿತ್ಯದ ಕ, ತ, ಪ, ಚ — ಗಾಳಿ ಇಲ್ಲ, ಗಂಟಲು ಬಿಗಿ, ಧ್ವನಿ ಸ್ವಲ್ಪ ಎತ್ತರ; ಆದರೆ ಉದ್ದವಲ್ಲ.
> - **g, d, b, j** ಪದದ ಆರಂಭದಲ್ಲಿ ಮೃದುವಾದ ಗ, ದ, ಬ, ಜ — ಕ, ತ, ಪ, ಚ ಅಲ್ಲ. **t, d** ಯಾವಾಗಲೂ ತ / ದ — ಟ / ಡ ಅಲ್ಲ.
> - **r** ಎರಡು ಸ್ವರಗಳ ನಡುವೆ ಹಗುರವಾದ ರ; ಕೊನೆಯ **l** ಸ್ಪಷ್ಟ ಲ, ಳ ಅಲ್ಲ: *mul*. **ng** = "ಅಂಗಡಿ"ಯ ಙ, ನಂತರ ಗ ಇಲ್ಲ.
> - ಕೊನೆಯ **k, t, p**: ಬಾಯಿ ಮುಚ್ಚಿ ನಿಲ್ಲಿಸಿ — ಗಾಳಿ ಬಿಡಬೇಡಿ, ಕೊನೆಗೆ "ಉ" ಸೇರಿಸಬೇಡಿ: *bap* ✓, "ಬಾಪು" ✗. ಕೊನೆಯ ವ್ಯಂಜನ ಮುಂದಿನ ಸ್ವರಕ್ಕೆ ಸೇರುತ್ತದೆ: *hangugeo*.
> - ಕೊರಿಯನ್ನಲ್ಲಿ ಸ್ವರಭಾರ (ಒತ್ತು) ಇಲ್ಲ, ಸ್ವರದ ಏರಿಳಿತದಿಂದ ಅರ್ಥ ಬದಲಾಗುವುದಿಲ್ಲ: ಎಲ್ಲಾ ಅಕ್ಷರಗಳನ್ನೂ ಸಮವಾಗಿ ಹೇಳಿ.
> - ರೋಮನ್ ಲಿಪಿ ಆಸರೆಗೆ ಮಾತ್ರ; ಓದಬೇಕಾದದ್ದು ಹಂಗುಲ್: 감사합니다 = *gamsahamnida*.

## 7. Fixed phrases (one gloss everywhere)

A card meaning may be shorter; a bracket says who the line is for; a note may add the literal meaning.

| Korean | Kannada | Korean | Kannada |
|---|---|---|---|
| 안녕하세요 | ನಮಸ್ಕಾರ | 안녕 (반말) | ಹಾಯ್ / ಬಾಯ್ |
| 안녕히 가세요 | ಹೋಗಿ ಬನ್ನಿ (ಹೊರಡುವವರಿಗೆ) | 안녕히 계세요 | ಚೆನ್ನಾಗಿರಿ (ಹೊರಡುವವರು, ಉಳಿಯುವವರಿಗೆ) |
| 감사합니다 / 고맙습니다 | ಧನ್ಯವಾದಗಳು | 고마워요 · 고마워 | ಥ್ಯಾಂಕ್ಸ್ (+ English tag) |
| 죄송합니다 | ಕ್ಷಮಿಸಿ | 미안해요 · 미안해 | ಸಾರಿ (+ English tag) |
| 괜찮아요 | ಪರವಾಗಿಲ್ಲ; declining: ಬೇಡ, ಪರವಾಗಿಲ್ಲ | 저기요 | ಸ್ವಲ್ಪ ಕೇಳಿ (ಗಮನ ಸೆಳೆಯಲು) |
| 잠깐만요 | ಒಂದು ನಿಮಿಷ | 처음 뵙겠습니다 | ಮೊದಲ ಭೇಟಿ, ನಮಸ್ಕಾರ |
| 만나서 반갑습니다 / 반가워요 | ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು | 반가워 | ನಿನ್ನನ್ನು ನೋಡಿ ಖುಷಿಯಾಯಿತು |
| 잘 부탁드립니다 (meeting) | ನಿಮ್ಮ ಸಹಕಾರ ಇರಲಿ | 잘 부탁드립니다 (업무) | ನಿಮ್ಮ ಸಹಕಾರಕ್ಕೆ ಮುಂಚಿತವಾಗಿ ಧನ್ಯವಾದಗಳು |
| 잘 먹겠습니다 | ಊಟಕ್ಕೆ ಧನ್ಯವಾದ (ತಿನ್ನುವ ಮೊದಲು) | 잘 먹었습니다 | ಊಟ ಚೆನ್ನಾಗಿತ್ತು, ಧನ್ಯವಾದ (ತಿಂದ ನಂತರ) |
| 맛있게 드세요 | ಚೆನ್ನಾಗಿ ಊಟ ಮಾಡಿ | 계산해 주세요 | ಬಿಲ್ ಕೊಡಿ |
| 수고하셨습니다 | ಇಂದಿನ ಶ್ರಮಕ್ಕೆ ಧನ್ಯವಾದಗಳು | 수고하세요 | ಕೆಲಸ ಚೆನ್ನಾಗಿ ಸಾಗಲಿ (ಹೊರಡುವವರು, ಕೆಲಸದಲ್ಲಿರುವವರಿಗೆ) |
| 수고했어 · 수고했어요 | ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡಿದೆ · …ಮಾಡಿದಿರಿ | 고생했어 | ತುಂಬಾ ಕಷ್ಟಪಟ್ಟೆ |
| 주시겠어요? | …ಕೊಡುತ್ತೀರಾ? | 좀 | **ಸ್ವಲ್ಪ** (same softener) |
| 혹시 | …ಏನಾದರೂ …ಇದೆಯೇ? / ಒಂದು ವೇಳೆ | 알겠습니다 / 알겠어요 | ಸರಿ, ಗೊತ್ತಾಯಿತು |
| 넵, 확인했습니다 | ಸರಿ, ನೋಡಿದ್ದೇನೆ | 오케이 콜 · 콜! | ಓಕೆ, ಡನ್! · ಡನ್! |
| 대박 | ಸಖತ್! / ಅಬ್ಬಾ! | 진짜? | ನಿಜವಾಗಲೂ? |
| 아이고 | ಅಯ್ಯೋ | 화이팅 | ಆಲ್ ದಿ ಬೆಸ್ಟ್! |
| 잘 자 · 안녕히 주무세요 | ಶುಭ ರಾತ್ರಿ (ಸಲುಗೆ) · (ಗೌರವಸೂಚಕ) | 좋은 하루 보내세요 | ನಿಮ್ಮ ದಿನ ಚೆನ್ನಾಗಿರಲಿ |
| 조심히 가세요 | ಜಾಗ್ರತೆಯಾಗಿ ಹೋಗಿ | 말 놔도 돼요 | ನನ್ನನ್ನು ನೀನು ಎಂದು ಕರೆಯಬಹುದು |
| 선생님 · 사장님 | ಸರ್ / ಮೇಡಂ (ಶಿಕ್ಷಕರು) · ಮಾಲೀಕರು (address: ಸರ್) | 과장님 / 팀장님 · 기사님 | ಮ್ಯಾನೇಜರ್ / ಟೀಮ್ ಲೀಡರ್ · ಡ್ರೈವರ್ ಅಣ್ಣ |

- **Goodbyes say who leaves.** Kannada has the same split: the leaver says ಹೋಗಿ ಬರುತ್ತೇನೆ, the stayer answers ಹೋಗಿ ಬನ್ನಿ (en-kn §2.4, after Penn [convention]). So 가세요 = ಹೋಗಿ ಬನ್ನಿ, same mouth and slot; 계세요, said by the leaver, wishes the stayer well: ಚೆನ್ನಾಗಿರಿ, never ಹೋಗಿ ಬನ್ನಿ. Build `meet` on this.
- 잘 먹겠습니다 before, 잘 먹었습니다 after eating. 수고하세요 is said by the one leaving. 아이고 / ಅಯ್ಯೋ: a coincidence, never a shared origin. 혹시 영어 메뉴 있어요? → ಇಂಗ್ಲಿಷ್ ಮೆನು ಏನಾದರೂ ಇದೆಯೇ?

## 8. Lessons: titles and notes

Notes are [inference]; **R** = an English-built passage to rewrite.

| # | id | Title | Notes |
|---|---|---|---|
| 1 | `hangul` | ಒಂದೇ ಬಾರಿಗೆ ಹಂಗುಲ್ | §6, guide §6.2; ಬ್ಲಾಕ್ = ಅಕ್ಷರ. R: vowel-table sounds. `_waive` |
| 2 | `polite` | ವಿನಯದ ಮಟ್ಟಗಳು | ನೀವು / ನೀನು; break 3 (§4.6). Headers ಮಟ್ಟ · ಪ್ರತ್ಯಯ · ಯಾರ ಜೊತೆ; ಔಪಚಾರಿಕ · ವಿನಯ · ಸಲುಗೆ |
| 3 | `meet` | ಜನರನ್ನು ಭೇಟಿಯಾಗುವುದು | goodbye split (§7). "Formal" column → **ಔಪಚಾರಿಕ / ಗೌರವಸೂಚಕ**; country tip may name ಭಾರತ (no Hangul) |
| 4 | `sound-changes` | ಧ್ವನಿ ಬದಲಾವಣೆ: 감사합니다 ಏಕೆ ಬೇರೆಯಾಗಿ ಕೇಳಿಸುತ್ತದೆ | ಸಂಧಿ ವಾಕ್ + ಮಯ = ವಾಙ್ಮಯ ≈ 한국말 → 한궁말 [convention]; keep the drill line |
| 5 | `nouns` | ನಾಮಪದಗಳು ಮತ್ತು 은/는 | no articles or gender; ಇದು / ಅದು vs 이 / 그 / 저; 들 optional |
| 6 | `isseoyo` | 있어요 ಮತ್ತು 없어요 | R: "English 'is'" → §4.3 (ಅಲ್ಲ / ಇಲ್ಲ) |
| 7 | `pronouns-questions` | ಸರ್ವನಾಮಗಳು ಮತ್ತು ಪ್ರಶ್ನಾರ್ಥಕ ಪದಗಳು | ಇದು ಏನು? = 이거 뭐예요?; ನಮ್ಮ ಅಮ್ಮ ≈ 우리 엄마; ನೀವು ≠ 당신 |
| 8 | `verbbasics` | ಕ್ರಿಯಾಪದಗಳು | ಧಾತು, no agreement, ಮಾಡು ≈ 하다. R: "to …", "English adjectives" |
| 9 | `verbs` | ವರ್ತಮಾನ: 요-ರೂಪ | one form = non-past + progressive; prose says no cue = 요-present (§9.2) |
| 10 | `past` | ಭೂತಕಾಲ: 았어요 / 었어요 | ಇನ್ನೂ ಹೋಗಿಲ್ಲ = 안 갔어요. R: "I ate / have eaten" → ತಿಂದೆ / ತಿಂದಿದ್ದೇನೆ |
| 11 | `future` | ಭವಿಷ್ಯತ್ಕಾಲ ಮತ್ತು ಯೋಜನೆಗಳು: -(으)ㄹ 거예요 | prose says (ಭವಿಷ್ಯತ್ಕಾಲ) marks a -(으)ㄹ 거예요 answer; ಇರಬಹುದು = "probably". R: "kkeoyeyo" → "ಬಿಗಿ ಕ" |
| 12 | `sov` | ಪದಕ್ರಮ ಮತ್ತು 을/를 | -ಅನ್ನು vs 을/를. R: "English is SVO" |
| 13 | `particles` | 에 ಮತ್ತು 에서, ಜೊತೆಗೆ ಪಾರ್ಟಿಕಲ್ ನಕ್ಷೆ | §4.1: one -ಅಲ್ಲಿ, two particles. R: "English 'at'" |
| 14 | `negation` | ಇಲ್ಲ ಎನ್ನುವುದು: 안 ಮತ್ತು -지 않아요 | -지 않아요 ≈ -ಉವುದಿಲ್ಲ; 안 before the verb (§4.4) |
| 15 | `do-man` | 도 ಮತ್ತು 만: ಕೂಡ ಮತ್ತು ಮಾತ್ರ | -ಊ = 도 (ಮನೆಯಲ್ಲೂ); ಮಾತ್ರ = 만 |
| 16 | `sentences` | ನಾಮಪದ ಮತ್ತು ಕ್ರಿಯಾಪದ ಸೇರಿಸಿ ವಾಕ್ಯ | same frame as Kannada. R: "English order" mistakes |
| 17 | `want-like` | ಬಯಕೆ ಮತ್ತು ಇಷ್ಟ: -고 싶어요, 좋아해요 | §4.5; want = -ಲು ಬಯಸುತ್ತೇನೆ |
| 18 | `numbers` | ಎರಡು ಸಂಖ್ಯಾ ಪದ್ಧತಿಗಳು | §4.7. R: "like English digits" → "ಹತ್ತು ಪದ, ಒಂದು ನಿಯಮ"; hours are native |
| 19 | `food` | ಹೊರಗೆ ಊಟ | counter order; tip (no Hangul): kimchi and many dishes contain fish or meat |
| 20 | `getting-around` | ಓಡಾಟ ಮತ್ತು ಸಾರಿಗೆ | ನಮ್ಮ ಮೆಟ್ರೋ ≈ Seoul subway; metro card ≈ ಟಿ-ಮನಿ |
| 21 | `titles` | ಸಂಬೋಧನೆ ಮತ್ತು ಗೌರವಸೂಚಕಗಳು | §4.6. R: "(you female / male)" → "(ನೀವು ಹೆಣ್ಣಾಗಿದ್ದರೆ / ಗಂಡಾಗಿದ್ದರೆ)" |
| 22 | `plans` | ಯೋಜನೆ ಮಾಡುವುದು | ಹೋಗೋಣ ≈ 가자; ಹೋಗೋಣವೇ? ≈ 갈까요?; ಬರುತ್ತೀರಾ? ≈ -(으)ㄹ래요?. "Formal" column → **ಹೆಚ್ಚು ಗೌರವಸೂಚಕ** |
| 23 | `texting` | ಕೊರಿಯನ್ನರಂತೆ ಮೆಸೇಜ್ ಮಾಡುವುದು | **KakaoTalk "1" = NOT yet read**; 읽씹 = 1 gone, no reply (the English `src` is backwards) |
| 24 | `counters` | ಎಣಿಕೆ ಪದಗಳು | ಒಬ್ಬರು / ಇಬ್ಬರು ≈ 한 명 / 두 명; number after the noun |
| 25 | `joining` | ವಾಕ್ಯ ಜೋಡಣೆ: -고, -지만, -아/어서 | the -ಇ form; reason first. R: "and / but / so" → ಮತ್ತು / ಆದರೆ / ಅದಕ್ಕೇ |
| 26 | `story` | ಹಿಂದೆ ನಡೆದದ್ದನ್ನು ಹೇಳುವುದು | story words (§4.7) |
| 27 | `noun-modifiers` | ನಾಮಪದದ ವರ್ಣನೆ: 좋은 날씨, 큰 가방 | ನೋಡಿದ ಸಿನಿಮಾ (no agreement). R: "no that / which" → "ಸಂಬಂಧ ಸರ್ವನಾಮ ಇಲ್ಲ" |
| 28 | `compare` | ಹೋಲಿಕೆ: 보다, 더, 제일 | -ಗಿಂತ = 보다, same slot |
| 29 | `cant` | ಆಗುವುದಿಲ್ಲ, ಆಗುತ್ತದೆ, ಗೊತ್ತಿಲ್ಲ | ಆಗುವುದಿಲ್ಲ = 못, ಮಾಡುವುದಿಲ್ಲ = 안; ಗೊತ್ತಿಲ್ಲ = 몰라요 |
| 30 | `have-to` | ಮಾಡಲೇಬೇಕು: -아/어야 해요 | -ದರೂ ಪರವಾಗಿಲ್ಲ = 안 가도 돼요. Cross-ref → ಪಾಠ 32 ("ವಿನಯದಿಂದ ಕೇಳುವುದು") |
| 31 | `honorific` | ಗೌರವಸೂಚಕ ಕ್ರಿಯಾಪದಗಳು | respect plural = -시-; ತಮ್ಮ ಹೆಸರು = 성함 |
| 32 | `requests` | ವಿನಯದಿಂದ ಕೇಳುವುದು | ಸ್ವಲ್ಪ = 좀; ಏನಾದರೂ = 혹시; -ದರೆ / -ದರೂ ≈ -(으)면 안 돼요? / -아/어도 돼요? |
| 33 | `office` | ಕಚೇರಿ ಕೊರಿಯನ್ | title alone ≈ ಸರ್ / ಮೇಡಂ; 회식 ≈ ಟೀಮ್ ಡಿನ್ನರ್; 수고 family (§7); 운전해야 돼요 excuse |

## 9. Row conventions

### 9.1 Format

- Hangul runs set-equal to the English row, else `"_waive":["hangul"]` + `_note` (title row for a body); planned for `hangul` only. One ` / ` per dialogue; no braces; `q p why hint` ≤ 400, options ≤ 200 and distinct; meanings distinct per deck (case-insensitive); bodies keep `<h3>` / div / table structure and tokens in order; no English in prose or headers.
- **Blanks** unchanged, nothing glued: c0073 → **ನಾನು ___**; c0643 → **ನಾನು ___ ದೇಶದಿಂದ ಬಂದಿದ್ದೇನೆ**; c0644 → **ನಿಮಗೆ ___ ಮಾತನಾಡಲು ಬರುತ್ತದೆಯೇ?**. 어디에서 왔어요? = **ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?**

### 9.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) first. Frames are mutually exclusive:

| Korean answer | Kannada frame | Example |
|---|---|---|
| 요-present | progressive -ಉತ್ತಿದ್ದೇನೆ, or uncued non-past | ಮನೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ |
| -(으)ㄹ 거예요 | non-past + **(ಭವಿಷ್ಯತ್ಕಾಲ)**, always | ನಾಳೆ ಹೋಗುತ್ತೇನೆ (ಭವಿಷ್ಯತ್ಕಾಲ) |
| -고 싶어요 | **-ಲು ಬಯಸುತ್ತೇನೆ** (the interface's "want") | ಮನೆಗೆ ಹೋಗಲು ಬಯಸುತ್ತೇನೆ |
| -아/어야 해요 · 안 -아/어도 돼요 | **-ಲೇಬೇಕು** (roadmap) · -ಬೇಕಾಗಿಲ್ಲ | ಮನೆಗೆ ಹೋಗಲೇಬೇಕು |
| 안 + present (verbs.14, negation.12) | progressive negative -ಉತ್ತಿಲ್ಲ, or uncued -ಉವುದಿಲ್ಲ | ಮನೆಗೆ ಹೋಗುತ್ತಿಲ್ಲ |
| -(으)ㄹ 수 있어요 · 못 · 안 (choice) | ನನಗೆ …-ಲು ಬರುತ್ತದೆ · ನನಗೆ …-ಲು ಆಗುವುದಿಲ್ಲ · -ಉವುದಿಲ್ಲ | ಇಂದು ನನಗೆ ಹೋಗಲು ಆಗುವುದಿಲ್ಲ |
| 좋아해요 / 좋아요 | ನನಗೆ X ಇಷ್ಟ (both accepted) | ನನಗೆ ಕಾಫಿ ಇಷ್ಟ |

- **No bare ಬೇಕು** in want / must prompts (ನನಗೆ ಮನೆಗೆ ಹೋಗಬೇಕು reads as both).
- **(ಭವಿಷ್ಯತ್ಕಾಲ) required** on future.06–08, .12–14 and every -(으)ㄹ 거예요 answer, so an uncued non-past = present (verbs.12–14, verbbasics.12–13, negation.12–13, sentences.14). (ಭೂತಕಾಲ) on past.12 (hint *past*); past.06 / story.06 / story.14 need none.
- **Level:** ನೀನು for 반말 answers, ನೀವು otherwise; copy English tags and scene cues ("ಸ್ನೇಹಿತರಿಗೆ ಮೆಸೇಜ್:", "ಹಿರಿಯರಿಗೆ:"). Required where `x` differs only in level: polite.12–14, texting.14, honorific.12–14, office.12.
- Third persons ನನ್ನ ಸ್ನೇಹಿತ, masculine singular (isseoyo.13, verbs.13, future.13). Method cues stay ((안 ಬಳಸಿ), (ಸಂಖ್ಯೆಯನ್ನು ಹಂಗುಲಿನಲ್ಲಿ ಬರೆಯಿರಿ)); "(I)" → "(ನಾನು)".
- Pitfalls: want-like.14 ನೀವು ಏನು ತಿನ್ನಲು ಬಯಸುತ್ತೀರಿ?; cant.14 adds (ನನ್ನ ಇಷ್ಟದಿಂದ, 안 ಬಳಸಿ); isseoyo.12 ನನ್ನ ಹತ್ತಿರ ಬೆಕ್ಕು ಇದೆ.

### 9.3 Names, places, `@@`, local frame

- **People:** 민수 ಮಿನ್ಸು · 지은 ಜಿಯುನ್ · 리사 ಲಿಸಾ · Mike ಮೈಕ್ · Juan ಹುವಾನ್. **Places:** ಕೊರಿಯಾ · ಸಿಯೋಲ್ (interface; a label) · ಬುಸಾನ್ · ಮ್ಯೊಂಗ್ದೊಂಗ್ · ಹಾಂಗ್ಡೆ · ಗಂಗ್ನಮ್ · ಇಂಚಾನ್ [unverified].
- **Other names:** established spelling first (ಕಿಮ್ಚಿ, ಸೋಜು, ಬಿಬಿಂಬಾಪ್); else RR letter by letter (k/kk ಕ, t/tt ತ, p/pp ಪ, ch ಚ, j/jj ಜ, ng ಂಗ್, l ಲ never ಳ, eo/o ಒ, u/eu ಉ, ae/e ಎ; finals with virama). Labels, not readings.
- **`@@`:** as many as the English row; never an ending on it. s0297 **ನಮಸ್ಕಾರ. ನಾನು @@.** · g019 **ನಿಮ್ಮ ಹೆಸರು ಏನು? / ನಾನು @@. ನಿಮ್ಮ ಹೆಸರು?** · s0300, office.08 **ನಮಸ್ಕಾರ, ನಾನು ಮಾರ್ಕೆಟಿಂಗ್ ತಂಡದ @@** · s0301 **ಧನ್ಯವಾದಗಳು. ಇಂತಿ, @@** (ಇಂತಿ, the traditional closing before the sender's name ≈ 드림) · office.05 **@@ ಎಂದು ಇಮೇಲಿಗೆ ಸಹಿ ಮಾಡುವಾಗ:**.
- **Countries:** standard Kannada names (ಭಾರತ, ಅಮೆರಿಕ, ಜಪಾನ್); 인도 (c1222) = ಭಾರತ (ಇಂಡಿಯಾ); never swap in India.
- **Local frame:** rupees, no exchange rates; ವಾಟ್ಸಾಪ್; ಯುಪಿಐ; ಮೆಟ್ರೋ ಕಾರ್ಡ್ (transit card); ಆಟೋ; won = ವೋನ್.

## 10. `ui.json` and trainer notes (lead, w4)

- **No wording overrides needed:** the kn interface was written for kn-ko; its 14 `uiKeys` already say ಕೊರಿಯನ್ / ಹಂಗುಲ್ / ರೋಮನ್ ಲಿಪಿ (checked). **But not empty:** `validate.js` line 241 counts each `uiKey` as words remaining unless `ui.json` holds a different value: copy the 14 texts verbatim from `tools/i18n/kn/ui.json` `exact[key].t`. One real override: `"No match. Try the English meaning."` → `"ಹೊಂದಿಕೆ ಇಲ್ಲ. ಕನ್ನಡ ಅರ್ಥದಲ್ಲಿ ಹುಡುಕಿ."`.
- **w4:** §3.1 terms; short rule glosses (as `native/es/ko/trainer.json`); `%n` and Hangul as in `src`; sound rules ಜೋಡಿಸಿ ಓದುವುದು, ಅನುನಾಸಿಕ ಬದಲಾವಣೆ, ಹ-ಬದಲಾವಣೆ, ಲ-ಬದಲಾವಣೆ, ಬಿಗಿ ಬದಲಾವಣೆ. `hangul.alt` (lead): *aa* ㅏ, *ee* ㅣ, *oo* ㅜ [inference], checked against spec §10.3.

## 11. What not to do

- No Korean beyond the source row without `_waive`; never edit `f`, `id`, `k`, `src` or a Korean field.
- No English in Latin script; no spoken forms outside §2.2; no Hindi words; no whole-word respellings; no comparisons with English sounds.
- No invented etymologies: ವಾಙ್ಮಯ is a sound analogy, 아이고 / ಅಯ್ಯೋ a coincidence; no Sanskrit "cognates" for Sino-Korean.
- Never ನೀನು toward the learner; ತಮ್ಮ only for the listed words; no ದಯವಿಟ್ಟು with plain 주세요; no ಅವರು after your own name; no respect plural for unmarked 친구; no silent gender choice.
- Never "은/는 = ಆದರೆ", "을/를 = -ಅನ್ನು", "에 = -ಅಲ್ಲಿ". No ending on Hangul, RR, `___`, `@@`; no ZWNJ / ZWJ, danda, Kannada digits.

## 12. Review questions and unverified claims

**For a Kannada speaker** ("OK" or the natural version):
1. Written standard in 반말 glosses (ನೀನು ಏನು ಮಾಡುತ್ತಿದ್ದೀಯೆ?): too stiff? Is -ಈಯೆ the right written 2sg?
2. Prompt frames -ಲು ಬಯಸುತ್ತೇನೆ (want), -ಲೇಬೇಕು (must), (ಭವಿಷ್ಯತ್ಕಾಲ).
3. ಚೆನ್ನಾಗಿರಿ for 안녕히 계세요 beside ಹೋಗಿ ಬನ್ನಿ.
4. ತಮ್ಮ ಹೆಸರು for 성함; name + ಅವರೇ for 씨; masculine singular ನನ್ನ ಸ್ನೇಹಿತ as the default friend.
5. ಸ್ವಲ್ಪ ಕೇಳಿ (저기요), ನಿಮ್ಮ ಸಹಕಾರ ಇರಲಿ (잘 부탁드립니다), ಕೆಲಸ ಚೆನ್ನಾಗಿ ಸಾಗಲಿ (수고하세요), ಡನ್! (콜), ಸಖತ್! (대박).
6. ಪಾರ್ಟಿಕಲ್; ವಿಷಯ / ಕರ್ತೃ / ಕರ್ಮ ಪಾರ್ಟಿಕಲ್; ಸರಳ / ಮಹಾಪ್ರಾಣ / ಬಿಗಿ ವ್ಯಂಜನ; ಔಪಚಾರಿಕ.
7. ಇಂತಿ, @@ as the email sign-off.
8. Labels ವಿಚಾರಿಸುವುದು, ಹುರುಪು ಮತ್ತು ಸ್ಟೈಲ್, ಜೊತೆ ಸುತ್ತಾಟ, ಹರಟೆ; group ಮೂಲ ಪದಗಳು; title 1.

**Unverified / inference:** no study of Dravidian-speaking learners of Korean (one search); stops by Hindi analogy; aspiration and the initial ವ / ಯ glides are Kannada facts [source], their effect on Korean is inference; Bhat's outline is second-hand (one linguist's view); ಅಕ್ಕ ≈ ㄲ; ㄹ → ಳ; ವಾಙ್ಮಯ; place spellings, ವೋನ್; every Kannada sentence. **Lead:** `ui.json` (14 + 1); `_waive` on `hangul`.

## Sources (opened 2026-11-23)

- [Kannada phonology (Wikipedia)](https://en.wikipedia.org/wiki/Kannada_phonology): aspirates rare in native words, speaker-dependent; initial y- / w- onsets.
- [Outline of D. N. Shankara Bhat, *Kannadakke mahaprana yake beda?*](https://vwulf.github.io/ettuge/kannaDa/dnsbhat/08-kannaDakke-mahAprANa-yAke-bEDa/book/en/summary) (second-hand).
- [Deccan Herald: K-pop and Korean courses in Bengaluru](https://www.deccanherald.com/india/karnataka/bengaluru/thanks-to-k-pop-surge-in-takers-for-korean-courses-1067943.html).
- [Bilinguistics: Kannada speech](https://bilinguistics.com/languages/kannada-speech-and-language-development/).
- Local: `docs/HALVES-SPEC.md`; `docs/profiles/{hi-ko,mr-ko,te-ko,en-kn}.md`; `docs/briefs/x-ko-{writer,topup}.md`; `tools/halves/native/{tl,zh}/ko/REVIEW.md`; `tools/halves/native/en/ko/`; `tools/halves/target/ko/`; `tools/i18n/kn/`; `tools/halves/validate.js`.

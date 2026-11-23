# Kannada speakers learning Korean: pair profile

Course `kn-ko` is Korean for Kannada speakers, built from two halves:
- the fixed Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 1,413 cards; `docs/HALVES-SPEC.md`);
- the Kannada half `tools/halves/native/kn/ko/`, written by w1–w4 from the `mk_native.js kn` work files (w4 also fills `work/wT.jsonl`), then kept current by a top-up writer (`docs/briefs/x-ko-topup.md`).

This profile is the writers' authority. It follows the section plan of `hi-ko.md` (SOV, Indic script), but every bridge is rebuilt from Kannada, which is Dravidian: endings glued to the noun, verb last, no inherited Hindi structure. The questions that the tl-ko and zh-ko reviews settled afterwards are settled here in advance (§2, §7, §9).

**What binds this profile:** the Kannada interface dictionary `tools/i18n/kn/NOTES.md` (register, glossary, tab and button names, level titles, quiz words) and its `roadmap.json` titles. They are reused unchanged. Where this profile adds a term NOTES lacks, the table marks it **[added]**.

**Shared with `te-ko.md`** (the other Dravidian course, read for consistency, no wording copied): endings go on a Kannada head noun and never on Hangul; `@@` never takes an ending; tense cues on prompts; the final-vowel and retroflex traps. **Where kn-ko differs on purpose:** written standard verb forms (§2.2); a third person of unknown gender is singular masculine, not the respect plural (§2.4).

**Author: not a native speaker of Kannada.** Every Kannada sentence here is **[inference]** unless tagged otherwise. Evidence tags:
- **[source]**: a page opened for this profile, listed under Sources;
- **[convention]**: school grammar, `en-kn.md`, the app's own strings, or general reference knowledge that was not opened;
- **[inference]**: this profile's own reasoning;
- **[unverified]**: looked for and not confirmed; build nothing new on it.

## 1. Summary of decisions

1. **Register.**
   - Modern **written standard** Kannada, as the interface writes it: ಹೋಗುತ್ತೇನೆ, ಮಾಡುವುದಿಲ್ಲ, ಇದೆಯೇ?. This applies to prose, glosses and prompts alike (§2.2 gives the reasons and the forms).
   - The learner is **ನೀವು**, with -ಈರಿ verbs and the polite -ಇ command (ಓದಿ, ಟೈಪ್ ಮಾಡಿ, ನೆನಪಿಡಿ). Never ನೀನು toward the learner.
2. **Korean levels** (§2.3).
   - 반말 → **ನೀನು** + the bare command.
   - 요 → **ನೀವು** + -ಇ.
   - -습니다 → ನೀವು + formal words (ಧನ್ಯವಾದಗಳು, ಕ್ಷಮಿಸಿ).
   - -시- → the respect plural for a third person (ಅಜ್ಜಿ ಮಲಗಿದ್ದಾರೆ), and **ತಾವು / ತಮ್ಮ** for the special honorific words aimed at the listener (성함 → ತಮ್ಮ ಹೆಸರು).
   - Tags appear only where the English has them: **(ಔಪಚಾರಿಕ) / (ವಿನಯ) / (ಸಲುಗೆ) / (ಗೌರವಸೂಚಕ)**.
3. **Gender.**
   - Kannada first- and second-person verbs carry **no gender** (ನಾನು ಹೋದೆ, ನೀನು ಹೋದೆ, for anyone; `en-kn.md` §2.3 [convention]). The Hindi / Marathi pair machinery is therefore not needed.
   - Two cases remain: nouns and adjectives that do mark gender (ಅಮೆರಿಕದವನು / ಅಮೆರಿಕದವಳು), and third persons. Both have rules in §2.4.
4. **The big bridge: case endings ↔ particles.**
   - -ಗೆ / -ಅಲ್ಲಿ / -ಇಂದ / -ಅನ್ನು / ಜೊತೆ ↔ 에 / 에서 / 을·를 / 하고.
   - "Also" -ಊ (ನಾನೂ = 저도), comparison -ಗಿಂತ = 보다, the conditional -ದರೆ = -(으)면, and the concessive -ದರೂ = -아/어도.
   - **ಅಲ್ಲ / ಇಲ್ಲ = 아니에요 / 없어요.**
   - Relative clauses come before the noun and do not agree (ನಿನ್ನೆ ನೋಡಿದ ಸಿನಿಮಾ = 어제 본 영화) (§4).
5. **The big breaks.**
   - ಇಲ್ಲ comes **after** the verb (ಹೋಗುವುದಿಲ್ಲ); Korean 안 comes **before** it.
   - Korean verbs never agree with anything.
   - Respect sits on the Korean verb ending, not on the pronoun.
   - One -ಅಲ್ಲಿ becomes two particles, 에 and 에서.
   - The non-past ಹೋಗುತ್ತೇನೆ covers both 가요 and 갈 거예요, so prompts need tense cues (§9.2).
6. **Sound.**
   - Aspiration is rare in native Kannada words and many speakers drop it [source: Wikipedia]. So ㅋ ㅌ ㅍ ㅊ are taught with a physical cue (air on the palm) first, and the letters ಖ ಥ ಫ ಛ second.
   - Everyday ಕ ತ ಪ ಚ sound like Korean **ㄲ ㄸ ㅃ ㅉ**; ಗ ದ ಬ ಜ are the safe start for ㄱ ㄷ ㅂ ㅈ [inference, by analogy with Hindi listener studies].
   - Kannada adds ಉ after a final consonant (ಬಸ್ಸು), so 밥 risks becoming "ಬಾಪು".
   - The Kannada script compares single sounds; it never respells a word (§6).
7. **Learners [source / inference].** In Bengaluru, mostly K-drama and K-pop fans, teenagers and young adults; earlier, mostly learners with professional reasons (Deccan Herald, 2022). Students and job seekers at Korean firms are [inference]. No study of Kannada (or any Dravidian) speakers learning Korean was found (§12).

## 2. Register, glosses, person

### 2.1 Voice and typography

- **Address.**
  - Use the polite command for instructions: ಓದಿ, ಕೇಳಿ, ಹೇಳಿ, ನೆನಪಿಡಿ, ಆರಿಸಿ, ಟೈಪ್ ಮಾಡಿ.
  - Impersonal frames are fine: ಗಮನಿಸಿ: …, ನೆನಪಿಡಬೇಕಾದದ್ದು: ….
  - Praise: ಭೇಷ್!, ಸರಿ!, ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ!.
- **Typography (NOTES §1, en-kn §2.8).**
  - Kannada script, NFC, and **no ZWNJ / ZWJ** anywhere (so loans write the conjunct: ವೆಬ್ಸೈಟ್).
  - ASCII punctuation (. ? ! , and straight quotes "…"); **no danda**; Western digits only, never Kannada digits.
  - Spaced em dash; ` / ` only for alternatives; `✗` / `✓`.
- **Loans before an ending** take -ಇ / -ಇನ or -ಉ (ಕಾರ್ಡಿಗೆ, ಡೆಕ್ಕಿನಲ್ಲಿ, ಕಾರ್ಡುಗಳು) (NOTES §1).
- **Script.**
  - Korean is written in Hangul and RR in Latin, exactly as in the English row.
  - Everything else is in Kannada script, brands included (ಕಾಕಾವೊಟಾಕ್, ವಾಟ್ಸಾಪ್, ಇನ್ಸ್ಟಾಗ್ರಾಮ್, ಟಿ-ಮನಿ).
  - Latin is allowed only for RR and its letters (*eo*, *kk*), `@@`, and the NOTES §2 closed list (XP, Lv, Aa, speakers A / B).
  - K- is **ಕೆ-** (ಕೆ-ಪಾಪ್, ಕೆ-ಡ್ರಾಮಾ), as the interface writes ಕೆ-ಡ್ರಾಮಾ.
- **Never glue a Kannada ending to Hangul, RR, `___` or `@@`.** Put the ending on a Kannada head noun instead: 요-ರೂಪದಲ್ಲಿ, 은/는 ಪಾರ್ಟಿಕಲ್ ನಂತರ, "*bap* ಎಂಬ ಪದ". The form of a Kannada ending depends on the last sound of its host (NOTES §1).
- **Course name** (`course.json`): `{"native":"kn","name":"ಕೊರಿಯನ್","brand":"한글"}`.
- **Lint.** A lesson body must never contain a space + *on* + letters + `=`. In Kannada text this can only happen inside RR, so put `:` after an RR word.

### 2.2 Written standard, not spoken: decision and forms

**Decision.** Every Kannada string in this course uses written standard verb forms. The spoken forms of `en-kn.md` (ಮಾಡ್ತೀನಿ, ಮಾಡಲ್ಲ) are not used. The reasons:
1. The interface uses written forms (NOTES §1). Lesson prose sits next to buttons, so one style should run through both.
2. Spoken Kannada has no fixed spelling: en-kn §2.2 lists four ways to write one form. Four writers would diverge.
3. Written forms read the same for learners from Bengaluru, Mysuru, Dharwad or Mangaluru. Spoken endings are regional.
4. Prompts must lead to exactly one Korean answer, and stable wording makes that easier.

**What this costs.** A 반말 gloss reads a little bookish (ನೀನು ಏನು ಮಾಡುತ್ತಿದ್ದೀಯೆ?). The ನೀನು / ನೀವು choice still carries the register, so the cost is acceptable.

**Closed list of spoken or colloquial words** (allowed only in glosses of 반말 lines, texting, and fixed phrases): ಆಯ್ತು (OK, done), ಹೂಂ (yeah), ಓಕೆ, ಸಖತ್, ಡನ್, ಅಯ್ಯೋ, ಗೊತ್ತಾ? (the interface uses it).

**Forms for writers** (ಮಾಡು "do"):

| Person | Non-past | Progressive | Past | Negative | Question | Command / let's |
|---|---|---|---|---|---|---|
| ನಾನು | ಮಾಡುತ್ತೇನೆ | ಮಾಡುತ್ತಿದ್ದೇನೆ | ಮಾಡಿದೆ | ಮಾಡುವುದಿಲ್ಲ · past ಮಾಡಲಿಲ್ಲ | — | — |
| ನೀನು | ಮಾಡುತ್ತೀಯೆ | ಮಾಡುತ್ತಿದ್ದೀಯೆ | ಮಾಡಿದೆ | ಮಾಡುವುದಿಲ್ಲ | ಮಾಡುತ್ತೀಯಾ? | ಮಾಡು · don't: ಮಾಡಬೇಡ |
| ನೀವು | ಮಾಡುತ್ತೀರಿ | ಮಾಡುತ್ತಿದ್ದೀರಿ | ಮಾಡಿದಿರಿ | ಮಾಡುವುದಿಲ್ಲ | ಮಾಡುತ್ತೀರಾ? | ಮಾಡಿ · don't: ಮಾಡಬೇಡಿ |
| ಅವನು · ಅವಳು · ಅವರು | ಮಾಡುತ್ತಾನೆ · -ಳೆ · -ರೆ | ಮಾಡುತ್ತಿದ್ದಾನೆ … | ಮಾಡಿದನು · -ಳು · -ರು | ಮಾಡುವುದಿಲ್ಲ | ಮಾಡುತ್ತಾರಾ? | — |
| ಅದು | ಮಾಡುತ್ತದೆ | ಮಾಡುತ್ತಿದೆ | ಮಾಡಿತು | ಮಾಡುವುದಿಲ್ಲ | ಮಾಡುತ್ತದೆಯೇ? | — |
| ನಾವು | ಮಾಡುತ್ತೇವೆ | ಮಾಡುತ್ತಿದ್ದೇವೆ | ಮಾಡಿದೆವು | ಮಾಡುವುದಿಲ್ಲ | — | let's: ಮಾಡೋಣ · shall we: ಮಾಡೋಣವೇ? |

- **The question clitic.**
  - **-ಆ** after a person ending: ಬರುತ್ತೀರಾ?, ಮಾಡುತ್ತೀಯಾ?.
  - **-ಏ** after a neuter form, a noun or ಬೇಕು: ಇದೆಯೇ?, ಬೇಕೇ?, ಬರುತ್ತದೆಯೇ?, ಪುಸ್ತಕವೇ?.
  - The interface does the same (ಆಗಿದ್ದೀರಾ?, ಬರುತ್ತದೆಯೇ?, ಮಾಡೋಣವೇ?).
- **One spelling per word:** ಧನ್ಯವಾದಗಳು, ನಮಸ್ಕಾರ, ಹೌದು, ಏನು, ಏಕೆ (never ಯಾಕೆ in prose), ಸ್ವಲ್ಪ, ತುಂಬಾ, ಪರವಾಗಿಲ್ಲ, ಗೊತ್ತಿಲ್ಲ, ಸ್ನೇಹಿತ, ಶಾಲೆ.

### 2.3 Korean speech levels and how to gloss them

| Korean | Kannada gloss | Example |
|---|---|---|
| 반말 | **ನೀನು**, bare command (ಬಾ, ತಿನ್ನು, ಹೇಳು) | 뭐 해? → ಏನು ಮಾಡುತ್ತಿದ್ದೀಯೆ? |
| 요-form | **ನೀವು**, -ಇ command (ಬನ್ನಿ, ಕುಳಿತುಕೊಳ್ಳಿ) | 앉으세요 → ಕುಳಿತುಕೊಳ್ಳಿ |
| -습니다 | ನೀವು + formal words | 감사합니다 → ಧನ್ಯವಾದಗಳು · 죄송합니다 → ಕ್ಷಮಿಸಿ |
| -시- to the listener | ನೀವು + the respectful verb (ಊಟ ಮಾಡಿ, ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ) | 맛있게 드세요 → ಚೆನ್ನಾಗಿ ಊಟ ಮಾಡಿ |
| -시- about a third person | **respect plural** (-ಅರು, -ಆರೆ) | 할머니가 주무세요 → ಅಜ್ಜಿ ಮಲಗಿದ್ದಾರೆ · 사장님 계세요? → ಮಾಲೀಕರು ಇದ್ದಾರೆಯೇ? |
| 성함 / 연세 / 말씀 | **ತಮ್ಮ** (honorific "your") | 성함이 어떻게 되세요? → ತಮ್ಮ ಹೆಸರು ಏನು? |
| 주세요 | **ಕೊಡಿ**, no ದಯವಿಟ್ಟು | 물 주세요 → ನೀರು ಕೊಡಿ |
| -아/어 주세요 | the -ಇ command, or -ಇ + ಕೊಡಿ | 천천히 말해 주세요 → ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ |
| 주시겠어요? | **…ಕೊಡುತ್ತೀರಾ?** | 사진 찍어 주시겠어요? → ಫೋಟೋ ತೆಗೆದು ಕೊಡುತ್ತೀರಾ? |

Rules:
- **Both directions.** A 요 / -습니다 / -시- line never gets ನೀನು, and a 반말 line never gets ನೀವು. Fixed phrases take no pronoun.
- **ತಾವು / ತಮ್ಮ is reserved** for 성함, 연세, 말씀, 계시다 and 드시다 aimed at the listener. Never use it for an ordinary 요 line, or "you" becomes a scale with three steps.
  - Watch the homograph: ತಮ್ಮ also means "younger brother". Write ತಮ್ಮ ಹೆಸರು only where the honorific reading is obvious.
- **ದಯವಿಟ್ಟು** only where the English says "please" *and* the line is -습니다 or written (sign, announcement, email).
- **ಹೌದು / ಇಲ್ಲ.**
  - 네 = ಹೌದು; 아니요 = ಇಲ್ಲ.
  - 응 = ಹೂಂ; 아니 = ಇಲ್ಲ, with (ಸಲುಗೆ) only where the English tags it.
  - Never add ಸರ್, ಅವರೇ or ರೀ where the Korean has no title.
- **Name + 씨 / 님** (§4.6).
  - Address: name + **ಅವರೇ** (ಮಿನ್ಸು ಅವರೇ).
  - Reference: name + **ಅವರು** (ಮಿನ್ಸು ಅವರು ಬಂದರು).
  - A title alone in address: ಸರ್ / ಮೇಡಂ.
  - Never ಅವರು after your own name.

### 2.4 Person and gender

**A. "I" and "you".**
- Verbs are neutral in both persons, so write them freely.
- Where a noun or an adjective would mark gender, reword. Take the first option that fits:
  1. **Dative frame:** ನನಗೆ ಹಸಿವಾಗಿದೆ (I'm hungry), ನನಗೆ ಸುಸ್ತಾಗಿದೆ (I'm tired), ನನಗೆ 28 ವರ್ಷ (I'm 28).
  2. **-ಆಗಿ + ಇದ್ದೇನೆ:** ನಾನು ಎತ್ತರವಾಗಿದ್ದೇನೆ, ನಾನು ಒಂಟಿಯಾಗಿದ್ದೇನೆ.
  3. **An invariant noun:** ನಾನು ವಿದ್ಯಾರ್ಥಿ (used generically; not ವಿದ್ಯಾರ್ಥಿನಿ), ಡಾಕ್ಟರ್, ಟೀಚರ್, ಕೊರಿಯನ್.
  4. **Origin as a verb, not a -ವನು / -ವಳು noun:** ನಾನು ಅಮೆರಿಕದಿಂದ ಬಂದಿದ್ದೇನೆ, never ಅಮೆರಿಕದವನು.
  5. **Nationality:** "<country>ದ ಪ್ರಜೆ" (ಕೊರಿಯಾದ ಪ್ರಜೆ), or an established invariant loan (ಕೊರಿಯನ್).
  6. **Last resort:** an unspaced pair, masculine first, on the one inflected word: ಒಬ್ಬನೇ/ಒಬ್ಬಳೇ. Never a spaced ` / `, because that is the dialogue separator.
- **The scene can decide.** 오빠 / 언니 in the speaker's mouth → female; 형 / 누나 → male. 민수 is male; 지은 and 리사 are female. An English he / she also decides.

**B. Third persons.**
- **Unmarked 친구 / 사람 = singular ಸ್ನೇಹಿತ / ವ್ಯಕ್ತಿ, with masculine agreement** (ನನ್ನ ಸ್ನೇಹಿತ ಶಾಲೆಯಲ್ಲಿದ್ದಾನೆ). Use ಸ್ನೇಹಿತೆ only where the Korean or the English marks a woman.
  - **Why not the respect plural** (te-ko's choice): ಸ್ನೇಹಿತರು reads as "friends", and isseoyo.13, verbs.13 and future.13 accept only 친구가 / 친구는. A learner who adds 들 would be marked wrong.
- **The respect plural** goes only where the Korean has -시- or 님 (ಅಜ್ಜಿ, ಶಿಕ್ಷಕರು, ಮಾಲೀಕರು, ಮ್ಯಾನೇಜರ್ ಅವರು).
- Animals and things take the neuter (ಬೆಕ್ಕು ಇದೆ). That is grammar, not a choice.

**C. 우리 / 저희.**
- Invitations (-자, -(으)ㄹ까요?, 같이) → ನಾವು / -ಓಣ.
- 우리 엄마 / 집 / 회사 → **ನಮ್ಮ** (Kannada also says "our mother": ನಮ್ಮ ಅಮ್ಮ, a strong bridge).
- 저희 → ನಾವು / ನಮ್ಮ (humble; Kannada has no separate form).
- **당신 ≠ ನೀವು.** Gloss name + 씨 as name + ಅವರೇ, never as ನೀವು alone (§4.6).

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list)

| Idea | Term | Source |
|---|---|---|
| Korean · Korea · Hangul · romanization · pronunciation | **ಕೊರಿಯನ್ · ಕೊರಿಯಾ · ಹಂಗುಲ್ · ರೋಮನ್ ಲಿಪಿ · ಉಚ್ಚಾರಣೆ**. The RR line is always ರೋಮನ್ ಲಿಪಿ | NOTES |
| Korean particle | **ಪಾರ್ಟಿಕಲ್** (invariant; avoid a plural with an ending). At first use in a lesson: "ಕನ್ನಡದ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯದಂತೆ ನಾಮಪದದ ನಂತರ ಅಂಟುವ ಚಿಕ್ಕ ಪದ" | [added] |
| 은/는 · 이/가 · 을/를 | **ವಿಷಯ ಪಾರ್ಟಿಕಲ್ · ಕರ್ತೃ ಪಾರ್ಟಿಕಲ್ · ಕರ್ಮ ಪಾರ್ಟಿಕಲ್** | [added] |
| Kannada -ಗೆ, -ಅಲ್ಲಿ, -ಇಂದ, -ಅನ್ನು | **ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ** (school term) | [convention] |
| Korean verb ending (-아요, -고, -지만) | **ಪ್ರತ್ಯಯ** | [added] |
| noun · pronoun · verb · adjective · adverb | ನಾಮಪದ · ಸರ್ವನಾಮ · ಕ್ರಿಯಾಪದ · ಗುಣವಾಚಕ · ಕ್ರಿಯಾವಿಶೇಷಣ | NOTES (adverb [added]) |
| 크다, 좋다 (describing verbs) | **ವರ್ಣನಾತ್ಮಕ ಕ್ರಿಯಾಪದ** | [added] |
| dictionary form · stem | **ನಿಘಂಟು ರೂಪ · ಧಾತು** | NOTES |
| 공부하다 type | **하다-ಕ್ರಿಯಾಪದ** | [added] |
| 요-form | **요-ರೂಪ** | NOTES |
| -습니다 · 요 · 반말 · -시- | **ಔಪಚಾರಿಕ · ವಿನಯ · ಸಲುಗೆ · ಗೌರವಸೂಚಕ**. Together: **ವಿನಯದ ಮಟ್ಟಗಳು** (one level = ಮಟ್ಟ) | NOTES; ಔಪಚಾರಿಕ [added] |
| 씨, 님, titles, kin address | **ಸಂಬೋಧನೆ** (as in the roadmap title) | roadmap |
| 개, 명, 잔 | **ಎಣಿಕೆ ಪದ** | NOTES |
| two number sets | **ಮೂಲ ಕೊರಿಯನ್ ಸಂಖ್ಯೆಗಳು · ಸಿನೋ-ಕೊರಿಯನ್ ಸಂಖ್ಯೆಗಳು** (never ಚೀನೀ ಸಂಖ್ಯೆ) | [added] |
| tenses | ವರ್ತಮಾನ · ಭೂತಕಾಲ · ಭವಿಷ್ಯತ್ಕಾಲ | NOTES |
| word order · question word · connector · softener | ಪದಕ್ರಮ · ಪ್ರಶ್ನಾರ್ಥಕ ಪದ · ಸಂಪರ್ಕ ಪದ · ಮೃದುಗೊಳಿಸುವ ಪದ | roadmap / NOTES; last two [added] |
| vowel · consonant · 받침 · block · syllable | ಸ್ವರ · ವ್ಯಂಜನ · **ಕೊನೆಯ ವ್ಯಂಜನ** · **ಬ್ಲಾಕ್** · ಅಕ್ಷರ ("ಒಂದು ಬ್ಲಾಕ್ = ಒಂದು ಅಕ್ಷರ") | NOTES |
| ㄱㄷㅂㅅㅈ · ㅋㅌㅍㅊ · ㄲㄸㅃㅆㅉ | **ಸರಳ · ಮಹಾಪ್ರಾಣ · ಬಿಗಿ ವ್ಯಂಜನ**. Not ಅಲ್ಪಪ್ರಾಣ for the plain set, because Kannada ಕ (ಅಲ್ಪಪ್ರಾಣ) sounds like ㄲ | [added] |
| sound change · 연음 · 비음화 | **ಧ್ವನಿ ಬದಲಾವಣೆ** · **ಜೋಡಿಸಿ ಓದುವುದು** · **ಅನುನಾಸಿಕ ಬದಲಾವಣೆ** | NOTES; last two [added] |
| irregular · pattern · grammar · conjugator | ಅನಿಯಮಿತ · ಮಾದರಿ · ವ್ಯಾಕರಣ · ಕ್ರಿಯಾಪದ ರೂಪಗಳು | NOTES |
| idiom · 사자성어 | ನುಡಿಗಟ್ಟು · ನಾಲ್ಕು ಅಕ್ಷರದ ನುಡಿಗಟ್ಟು | NOTES |
| loanword · stroke order | ಎರವಲು ಪದ · ಬರೆಯುವ ಕ್ರಮ | [added] |

### 3.2 Screen names (NOTES §3, exact)

- **Tabs:** ಇಂದು · ಪಾಠಗಳು · ಅಭ್ಯಾಸ · ರಿವ್ಯೂ · ಪ್ರಗತಿ. The advanced tab is ಓದು.
  - In running text, add ವಿಭಾಗ to carry the ending: ಪ್ರಗತಿ ವಿಭಾಗದಲ್ಲಿ, "ನೋಡಿ" ವಿಭಾಗದಲ್ಲಿ.
- **Buttons:** ಗೊತ್ತಿದೆ · ಮತ್ತೆ · ಪರಿಶೀಲಿಸಿ · ನೋಡಿ · ನನ್ನ ನುಡಿಗಟ್ಟುಗಳು · ಎಲ್ಲಾ ಬಾಕಿ.
- **Lesson check** = ಪರಿಶೀಲನೆ, never ಪರೀಕ್ಷೆ (that word is the Exam mode).
- **Cross-references:** ಪಾಠ N ("title").
- **Naming the Read tab and drills is allowed**, because w4 fills `wT.jsonl` and the trainers ship with this half.
  - `sound-changes` keeps its drill line: ಓದು ವಿಭಾಗದಲ್ಲಿ 🔀 ಧ್ವನಿ ಬದಲಾವಣೆ ಡ್ರಿಲ್ ಮಾಡಿ ನೋಡಿ. If `trainer.json` does not ship, the lead drops this line.
  - `hangul` keeps "Tap a letter to replay" as ಬರೆಯುವ ಕ್ರಮವನ್ನು ಮತ್ತೆ ನೋಡಲು ಅಕ್ಷರದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ. The stroke cells are always on (spec §10.4).

### 3.3 Labels (permanent progress keys: final once written)

**Deck labels (56, in `decks.jsonl` order):**

| # | id | label | # | id | label |
|---|---|---|---|---|---|
| 1 | hangul-vowels | ಹಂಗುಲ್ ಸ್ವರಗಳು | 29 | flirting | ಫ್ಲರ್ಟಿಂಗ್ |
| 2 | hangul-consonants | ಹಂಗುಲ್ ವ್ಯಂಜನಗಳು | 30 | casual-texting | ಸ್ನೇಹಿತರ ಜೊತೆ ಚಾಟ್ |
| 3 | hangul-advanced | ಹಂಗುಲ್: ಮುಂದಿನ ಹಂತ | 31 | hype-cool | ಹುರುಪು ಮತ್ತು ಸ್ಟೈಲ್ |
| 4 | pronunciation-tips | ಉಚ್ಚಾರಣೆಯ ಸಲಹೆಗಳು | 32 | hanging-out | ಜೊತೆ ಸುತ್ತಾಟ |
| 5 | survival-phrases | ಅಗತ್ಯದ ಮಾತುಗಳು | 33 | k-pop-fan-culture | ಕೆ-ಪಾಪ್ ಮತ್ತು ಫ್ಯಾನ್ ಸಂಸ್ಕೃತಿ |
| 6 | introductions | ಪರಿಚಯ | 34 | social-media-slang | ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್ |
| 7 | survival-phrases-2 | ಅಗತ್ಯದ ಮಾತುಗಳು 2 | 35 | dating-deeper | ಡೇಟಿಂಗ್: ಮುಂದಿನ ಹೆಜ್ಜೆ |
| 8 | asking-around | ವಿಚಾರಿಸುವುದು | 36 | work-office | ಕೆಲಸ ಮತ್ತು ಕಚೇರಿ |
| 9 | cafe-convenience-store | ಕೆಫೆ ಮತ್ತು ಕನ್ವೀನಿಯನ್ಸ್ ಸ್ಟೋರ್ | 37 | small-talk | ಹರಟೆ |
| 10 | numbers-in-the-wild | ದಿನನಿತ್ಯದ ಸಂಖ್ಯೆಗಳು | 38 | food-ordering | ಊಟ ಮತ್ತು ಆರ್ಡರ್ |
| 11 | counters | ಎಣಿಕೆ ಪದಗಳು | 39 | directions-transport | ದಾರಿ ಮತ್ತು ಸಾರಿಗೆ |
| 12 | weather-feelings | ಹವಾಮಾನ ಮತ್ತು ಭಾವನೆಗಳು | 40 | time-days | ಸಮಯ ಮತ್ತು ದಿನಗಳು |
| 13 | connectors | ಸಂಪರ್ಕ ಪದಗಳು | 41 | family-people | ಕುಟುಂಬ ಮತ್ತು ಜನರು |
| 14 | doctor-pharmacy | ಡಾಕ್ಟರ್ ಮತ್ತು ಔಷಧಿ ಅಂಗಡಿ | 42 | adjectives | ಗುಣವಾಚಕಗಳು |
| 15 | housing-errands | ಮನೆ ಮತ್ತು ದಿನದ ಕೆಲಸಗಳು | 43 | k-drama-phrases | ಕೆ-ಡ್ರಾಮಾ ಮಾತುಗಳು |
| 16 | honorifics | ಗೌರವಸೂಚಕ ರೂಪಗಳು | 44 | top-nouns | ಹೆಚ್ಚು ಬಳಸುವ ನಾಮಪದಗಳು |
| 17 | places-buildings | ಸ್ಥಳಗಳು ಮತ್ತು ಕಟ್ಟಡಗಳು | 45 | top-verbs | ಹೆಚ್ಚು ಬಳಸುವ ಕ್ರಿಯಾಪದಗಳು |
| 18 | hobbies | ಹವ್ಯಾಸಗಳು | 46 | top-adjectives | ಹೆಚ್ಚು ಬಳಸುವ ಗುಣವಾಚಕಗಳು |
| 19 | food-words | ಆಹಾರದ ಪದಗಳು | 47 | top-adverbs | ಹೆಚ್ಚು ಬಳಸುವ ಕ್ರಿಯಾವಿಶೇಷಣಗಳು |
| 20 | drinks | ಪಾನೀಯಗಳು | 48 | top-pronouns | ಹೆಚ್ಚು ಬಳಸುವ ಸರ್ವನಾಮಗಳು |
| 21 | activities | ದಿನನಿತ್ಯದ ಚಟುವಟಿಕೆಗಳು | 49 | top-particles | ಇನ್ನಷ್ಟು ಪಾರ್ಟಿಕಲ್ |
| 22 | tv-entertainment | ಟಿವಿ ಮತ್ತು ಮನರಂಜನೆ | 50 | top-connectors | ಹೆಚ್ಚು ಬಳಸುವ ಜೋಡಣೆ ರೂಪಗಳು |
| 23 | position-direction-words | ಸ್ಥಾನ ಮತ್ತು ದಿಕ್ಕು | 51 | top-interjections | ಉದ್ಗಾರಗಳು |
| 24 | core-verbs | ಮುಖ್ಯ ಕ್ರಿಯಾಪದಗಳು | 52 | top-words | ಹೆಚ್ಚು ಬಳಸುವ ಚಿಕ್ಕ ಪದಗಳು |
| 25 | particles | ಪಾರ್ಟಿಕಲ್ | 53 | top-counters | ಇನ್ನಷ್ಟು ಎಣಿಕೆ ಪದಗಳು |
| 26 | numbers | ಸಂಖ್ಯೆಗಳು | 54 | flirting-words | ಫ್ಲರ್ಟಿಂಗ್ ಪದಗಳು |
| 27 | sweet-talk | ಸಿಹಿ ಮಾತು | 55 | compliments | ಹೊಗಳಿಕೆಯ ಮಾತುಗಳು |
| 28 | cute-things-to-say | ಮುದ್ದಾದ ಮಾತುಗಳು | 56 | countries | ದೇಶಗಳು |

- Every label is unique. None is ನನ್ನ ನುಡಿಗಟ್ಟುಗಳು, and none ends in a full stop.
- The "Top" decks use **ಹೆಚ್ಚು ಬಳಸುವ**, or **ಇನ್ನಷ್ಟು** where the English description says "beyond the … deck" or "missing from".

**Groups (6):** foundations **ಮೂಲಭೂತ** (the interface tag) · everyday **ದಿನನಿತ್ಯ** · vocabulary **ಪದಸಂಪತ್ತು** · grammar **ವ್ಯಾಕರಣ** · social **ಸಾಮಾಜಿಕ** (the interface tag) · core-words **ಮೂಲ ಪದಗಳು**.

**`labels.jsonl` rows that the interface fixes (reuse exactly):**
- **Level titles:** t01 ಮೊಳಕೆ · t03 ವಿದ್ಯಾರ್ಥಿ · t05 ಹಿರಿಯ · t08 ಪ್ರೊ · t12 ನಿಪುಣ · t16 ಗುರು.
- **Greetings:** night ತಡವಾಯಿತು, ಒಳ್ಳೆಯ ಶ್ರಮ · morning ಶುಭೋದಯ · afternoon ಶುಭ ಮಧ್ಯಾಹ್ನ · evening ಶುಭ ಸಂಜೆ.
- **Goals and plans:** ಪ್ರವಾಸ ಮತ್ತು ಓಡಾಟ · ಡೇಟಿಂಗ್, ಸ್ನೇಹಿತರು ಮತ್ತು ರಾತ್ರಿ ಸುತ್ತಾಟ · ಕೆ-ಡ್ರಾಮಾ ಮತ್ತು ಸಂಗೀತ · ಕೆಲಸ ಮತ್ತು ಓದು · ಕೊರಿಯಾ ಪ್ರವಾಸ · ಸ್ನೇಹಿತರು ಮತ್ತು ಡೇಟಿಂಗ್ · 90 ದಿನದಲ್ಲಿ ಮಾತುಕತೆ.

**Rows the interface does not have** (coined here):
- **Pause-set names:** compliment **ಹೊಗಳಿಕೆ** · expression **ದಿನನಿತ್ಯದ ನುಡಿ** · polite **ವಿನಯದ ಮಾತು** · saying **ನುಡಿಮುತ್ತು**.
- **`ko.d.mydeck`:** ನೀವೇ ಸೇರಿಸಿದ್ದೆಲ್ಲವೂ.
- Pause items follow the fixed phrases (§7). Within one set, no two glosses may be the same: the zh and tl reviews had to fix duplicates there. Watch expression .04 / .18 (그럼요 / 물론이죠) and .05 / .19 (글쎄요 / 잘 모르겠어요): ಹೌದು ಮತ್ತೆ / ಖಂಡಿತ; ಹ್ಮ್… ಹೇಳುವುದು ಕಷ್ಟ / ನನಗೆ ಸರಿಯಾಗಿ ಗೊತ್ತಿಲ್ಲ.

### 3.4 Lesson titles (stored "N · title")

Each title keeps exactly the Hangul of its English title. Where `tools/i18n/kn/roadmap.json` has the same title, its Kannada is reused, **but not its Hangul**: the roadmap adds 보다 더, 이에요/예요 and -(스)ㅂ니다, and it reorders the joining endings.

1 · ಒಂದೇ ಬಾರಿಗೆ ಹಂಗುಲ್
2 · ವಿನಯದ ಮಟ್ಟಗಳು
3 · ಜನರನ್ನು ಭೇಟಿಯಾಗುವುದು
4 · ಧ್ವನಿ ಬದಲಾವಣೆ: 감사합니다 ಏಕೆ ಬೇರೆಯಾಗಿ ಕೇಳಿಸುತ್ತದೆ
5 · ನಾಮಪದಗಳು ಮತ್ತು 은/는
6 · 있어요 ಮತ್ತು 없어요
7 · ಸರ್ವನಾಮಗಳು ಮತ್ತು ಪ್ರಶ್ನಾರ್ಥಕ ಪದಗಳು
8 · ಕ್ರಿಯಾಪದಗಳು
9 · ವರ್ತಮಾನ: 요-ರೂಪ
10 · ಭೂತಕಾಲ: 았어요 / 었어요
11 · ಭವಿಷ್ಯತ್ಕಾಲ ಮತ್ತು ಯೋಜನೆಗಳು: -(으)ㄹ 거예요
12 · ಪದಕ್ರಮ ಮತ್ತು 을/를
13 · 에 ಮತ್ತು 에서, ಜೊತೆಗೆ ಪಾರ್ಟಿಕಲ್ ನಕ್ಷೆ
14 · ಇಲ್ಲ ಎನ್ನುವುದು: 안 ಮತ್ತು -지 않아요
15 · 도 ಮತ್ತು 만: ಕೂಡ ಮತ್ತು ಮಾತ್ರ
16 · ನಾಮಪದ ಮತ್ತು ಕ್ರಿಯಾಪದ ಸೇರಿಸಿ ವಾಕ್ಯ
17 · ಬಯಕೆ ಮತ್ತು ಇಷ್ಟ: -고 싶어요, 좋아해요
18 · ಎರಡು ಸಂಖ್ಯಾ ಪದ್ಧತಿಗಳು
19 · ಹೊರಗೆ ಊಟ
20 · ಓಡಾಟ ಮತ್ತು ಸಾರಿಗೆ
21 · ಸಂಬೋಧನೆ ಮತ್ತು ಗೌರವಸೂಚಕಗಳು
22 · ಯೋಜನೆ ಮಾಡುವುದು
23 · ಕೊರಿಯನ್ನರಂತೆ ಮೆಸೇಜ್ ಮಾಡುವುದು
24 · ಎಣಿಕೆ ಪದಗಳು
25 · ವಾಕ್ಯ ಜೋಡಣೆ: -고, -지만, -아/어서
26 · ಹಿಂದೆ ನಡೆದದ್ದನ್ನು ಹೇಳುವುದು
27 · ನಾಮಪದದ ವರ್ಣನೆ: 좋은 날씨, 큰 가방
28 · ಹೋಲಿಕೆ: 보다, 더, 제일
29 · ಆಗುವುದಿಲ್ಲ, ಆಗುತ್ತದೆ, ಗೊತ್ತಿಲ್ಲ
30 · ಮಾಡಲೇಬೇಕು: -아/어야 해요
31 · ಗೌರವಸೂಚಕ ಕ್ರಿಯಾಪದಗಳು
32 · ವಿನಯದಿಂದ ಕೇಳುವುದು
33 · ಕಚೇರಿ ಕೊರಿಯನ್

## 4. Grammar bridges and traps

The Kannada grammar here is school and reference knowledge [convention, not opened]. The Hangul in §4, §6 and §8 is for the writers' understanding. A field may use it only if its English has the same Hangul runs, or under `_waive`.

### 4.1 Order and the case-ending map

- **What holds.**
  - Verb last, and the same long frame: ಯಾರು · ಯಾವಾಗ · ಯಾರ ಜೊತೆ · ಎಲ್ಲಿ · ಏನು · ಕ್ರಿಯಾಪದ.
  - Question words stay in place, word for word: ಇದು ಏನು? = 이거 뭐예요?.
  - Endings are **glued to the noun** in both languages (ಮನೆಗೆ / 집에), so no spacing habit needs breaking.
  - A yes/no question is marked at the **end** in both: Kannada with -ಆ / -ಏ, Korean with the ending and a rising voice.
- **What breaks.**
  1. **The linking sound.** Kannada inserts it (ಮನೆ-ಯ-ಲ್ಲಿ, ಊರ-ಇನ-ಲ್ಲಿ, ಮರ-ಕ್ಕೆ). Korean never changes the noun: the particle has two shapes instead, chosen by the final sound (집을 / 차를). Kannada learners already choose by final sound, which is a bridge for 이/가, 은/는 and 을/를.
  2. **Pronouns.** Korean drops subjects and has no everyday "you". Kannada drops pronouns because the verb shows the person; Korean verbs show none.

| Kannada | Example | Korean | Note |
|---|---|---|---|
| — (subject) | ನಾನು ಹೋದೆ | 이/가, topic 은/는 | Kannada has no topic marker |
| -ಅನ್ನು | ಅವರನ್ನು ನೋಡಿದೆ | 을/를 | Kannada drops -ಅನ್ನು on indefinite things (ಕಾಫಿ ಕುಡಿಯುತ್ತೇನೆ); spoken Korean drops 을/를 too (커피 마셔요): a partial match |
| -ಗೆ / -ಕ್ಕೆ (place) | ಶಾಲೆಗೆ ಹೋಗುತ್ತೇನೆ | 에 | 학교에 가요: exact |
| -ಗೆ (time) | ಮೂರು ಗಂಟೆಗೆ | 시에 | 세 시에: exact |
| -ಗೆ (person) | ಸ್ನೇಹಿತನಿಗೆ ಕೊಟ್ಟೆ | 에게 / 한테 | |
| -ಅಲ್ಲಿ | ಮನೆಯಲ್ಲಿ ಇದ್ದೇನೆ · ಮನೆಯಲ್ಲಿ ಓದುತ್ತೇನೆ | 에 (be) · 에서 (do) | **one Kannada ending, two Korean particles**: the core trap of ಪಾಠ 13 |
| -ಅಲ್ಲಿ (day) | ಸೋಮವಾರ | 월요일에 | Kannada often uses no ending with a day |
| -ಇಂದ (place) | ಬೆಂಗಳೂರಿನಿಂದ ಬಂದೆ | 에서 | 벵갈루루에서 왔어요 |
| -ಇಂದ … -ವರೆಗೆ | ಸೋಮವಾರದಿಂದ ಶುಕ್ರವಾರದವರೆಗೆ | 부터 · 까지 | exact |
| -ಅಲ್ಲಿ / -ಇಂದ (means) | ಬಸ್ಸಿನಲ್ಲಿ ಹೋದೆ | (으)로 | 버스로 가요 |
| ಜೊತೆ | ಅಮ್ಮನ ಜೊತೆ | 하고 / 랑 / 와 | ಜೊತೆ is a separate word after the genitive; 하고 is glued |
| ಹತ್ತಿರ (having) | ನನ್ನ ಹತ್ತಿರ ಸಮಯ ಇದೆ | 이/가 있어요 | in both languages, the thing owned is the subject |
| -ಗಿಂತ | ಟ್ಯಾಕ್ಸಿಗಿಂತ ಅಗ್ಗ | 보다 | exact, same slot (§4.7) |
| -ಅ (of) | ನನ್ನ ಮನೆ | 의, usually dropped (제 집) | |

### 4.2 -ಊ, ಕೂಡ, ಮಾತ್ರ, -ಏ

- **도 ≈ -ಊ / ಕೂಡ.**
  - **Holds:** -ಊ is glued on like 도 (ನಾನೂ = 저도). It stacks after a case ending exactly as 도 stacks after 에 / 에서 (ಮನೆಯಲ್ಲೂ = 집에서도). "Me neither" = ನಾನೂ … ಇಲ್ಲ = 저도 안 ….
  - **Breaks:** 도 **replaces** 은/는, 이/가 and 을/를 (저는도 ✗), while -ಊ simply sits on the bare noun.
- **만 ≈ ಮಾತ್ರ:** ಇದು ಮಾತ್ರ ಕೊಡಿ = 이것만 주세요.
  - Breaks: ಮಾತ್ರ is a separate word; 만 is glued on.
  - The emphatic -ಏ (ಇದೇ, "this very one") is not 만. Do not teach it as one.
- **은/는:** Kannada has no topic marker. The nearest is contrast through word order and stress, or ಆದರೆ in the next clause (ನಾನು ಕಾಫಿ ಕುಡಿಯುವುದಿಲ್ಲ, ಆದರೆ … ≈ 저는 커피 안 마셔요). Teach 은/는 as "ಬಗ್ಗೆ ಹೇಳುವುದಾದರೆ" ("as for …"). Never write "은/는 = ಆದರೆ".

### 4.3 "Is": nothing, ಇದೆ, ಅಲ್ಲ, ಇಲ್ಲ

Kannada already splits "is" the way Korean does. This is the best bridge in the course.

| Kannada | Korean | Job |
|---|---|---|
| ನಾನು ವಿದ್ಯಾರ್ಥಿ (no verb) | 학생이에요 | A = B: Korean needs 이에요 / 예요 where Kannada needs nothing |
| ನಾನು ಮನೆಯಲ್ಲಿ ಇದ್ದೇನೆ | 집에 있어요 | location |
| ನನ್ನ ಹತ್ತಿರ ಸಮಯ ಇದೆ · ನನಗೆ ಒಬ್ಬ ತಮ್ಮ ಇದ್ದಾನೆ | 시간이 있어요 · 남동생이 있어요 | having |
| ಇಲ್ಲಿ ಒಂದು ಶಾಲೆ ಇದೆ | 여기에 학교가 있어요 | existing |
| ನಾನು ಡಾಕ್ಟರ್ ಅಲ್ಲ · ಸಮಯ ಇಲ್ಲ | 의사가 아니에요 · 시간이 없어요 | **ಅಲ್ಲ = 아니에요, ಇಲ್ಲ = 없어요**: same split |

- **Trap.** Kannada ಇಲ್ಲ also negates verbs (ಹೋಗುವುದಿಲ್ಲ), where Korean uses 안. So the learner must not carry 없어요 over to verbs.
- Predicted errors [inference]: 저는 고양이예요 for "I have a cat"; 학생 (no 이에요) for "I'm a student".

### 4.4 Verbs, tense, negation

- **Dictionary form and stem.** -ಉ / -ಅಲು ≈ -다 (ಹೋಗು ≈ 가다); the ಧಾತು ≈ the stem 가.
- **No agreement.**
  - Kannada verbs change for person, number and gender (ಹೋಗುತ್ತಾನೆ / ಹೋಗುತ್ತಾಳೆ / ಹೋಗುತ್ತಾರೆ / ಹೋಗುತ್ತದೆ).
  - Korean has none of this. Say so early, as good news.
- **Describing verbs.** ದೊಡ್ಡದು / ದೊಡ್ಡದಾಗಿದೆ is one Korean word, 커요 (크다이에요 ✗).
- **하다 ≈ ಮಾಡು.** ಅಭ್ಯಾಸ ಮಾಡು = 공부하다, with the same split: ಅಭ್ಯಾಸ ಮಾಡುವುದಿಲ್ಲ = 공부 안 해요.
- **Present.** 가요 = ಹೋಗುತ್ತೇನೆ + ಹೋಗುತ್ತಿದ್ದೇನೆ + a question by tone.
- **Future.** The Kannada non-past also covers the future; Korean adds -(으)ㄹ 거예요.
  - The "probably" use: ದುಬಾರಿ ಇರಬಹುದು = 비쌀 거예요 (exact).
  - The promise: ಹೋಗುತ್ತೇನೆ ≈ 갈게요.
- **Past.** One past, no agreement in Korean: ತಿಂದೆ / ತಿಂದಿದ್ದೇನೆ = 먹었어요. ಇನ್ನೂ ಹೋಗಿಲ್ಲ = 아직 안 갔어요 (past in Korean).
- **Negation: the big break.**
  - Kannada puts ಇಲ್ಲ **after** the verb (ಕುಡಿಯುವುದಿಲ್ಲ). Korean 안 goes **before** it (안 마셔요).
  - -지 않아요 has the Kannada order (마시지 않아요 ≈ ಕುಡಿಯುವುದಿಲ್ಲ), so use it as the bridge and drill 안 against it.
  - Predicted errors: 마셔요 안 ✗, 안 공부해요 ✗.
  - ಬೇಡ ≈ -지 마세요 and, in shops, 괜찮아요 / 됐어요.
- **Can, can't, won't.**
  - ನನಗೆ … ಬರುತ್ತದೆ (I know how) / ಆಗುತ್ತದೆ ≈ -(으)ㄹ 수 있어요.
  - **ಆಗುವುದಿಲ್ಲ (can't) = 못**, **ಮಾಡುವುದಿಲ್ಲ (won't, don't) = 안**: the same split as Korean.
  - ನನಗೆ ಗೊತ್ತಿಲ್ಲ = 몰라요.

### 4.5 ನನಗೆ ಇಷ್ಟ, ನನಗೆ ಬೇಕು

- **ನನಗೆ ಕಾಫಿ ಇಷ್ಟ** has the thing liked as its subject. That is exactly **커피가 좋아요**. 좋아해요 takes 을/를, like ನಾನು ಕಾಫಿಯನ್ನು ಇಷ್ಟಪಡುತ್ತೇನೆ.
  - Teach the triangle: «ನನಗೆ X ಇಷ್ಟ» = X가 좋아요 = X를 좋아해요.
  - Predicted errors: 커피가 좋아해요 ✗; 저에게 커피가 좋아요 ✗ (a copy of ನನಗೆ).
- **ಬೇಕು means both "want" and "must"** (ನನಗೆ ನೀರು ಬೇಕು · ನಾನು ಹೋಗಬೇಕು). Korean splits them: -고 싶어요 / 주세요 vs -아/어야 해요. Prompts therefore use the fixed frames of §9.2, never a bare ಬೇಕು.

### 4.6 Politeness and address

- **What holds** [inference].
  - ನೀವು / ನೀನು follows age and closeness, like 요 / 반말.
  - Moving to ನೀನು is a known step, like 말 놔도 돼요 (≈ "ನನ್ನನ್ನು ನೀನು ಎಂದು ಕರೆಯಬಹುದು").
  - Kannada has the respect plural for a third person (ಅಪ್ಪ ಬಂದರು) ≈ -시- (아버지가 오셨어요).
- **What breaks** (teach these four):
  1. Kannada marks respect on the pronoun, the verb ending and -ಅವರು. Korean marks it **only on the verb ending** and drops "you": 당신 ≠ ನೀವು. Use name + 씨, a title, or nothing.
  2. In India, ನೀನು to a young waiter or driver is common [inference]. In Korea, every adult stranger gets 요. Predicted error: 반말 to staff.
  3. **-습니다 is not "written Kannada".** Kannada learners know a written / spoken gap (ಮಾಡುತ್ತೇನೆ / ಮಾಡ್ತೀನಿ). Korean -습니다 is a *spoken* formal level, heard in shops and news, not a spelling style. Compare ಧನ್ಯವಾದಗಳು vs ಥ್ಯಾಂಕ್ಸ್.
  4. Korean has a humble "I" (저 vs 나); Kannada ನಾನು has no such pair.
- **Never use -시- for yourself** (저는 가세요 ✗).
- **Address terms.**
  - name + ಅವರು / ಅವರೇ ≈ name + 씨 / 님. Neither goes on your own name.
  - ಅಣ್ಣ / ಅಕ್ಕ ≈ 형·오빠 / 누나·언니. But the Korean word also depends on the **speaker's** gender: a man says 형 / 누나, a woman 오빠 / 언니.
  - Younger siblings: Kannada splits ತಮ್ಮ / ತಂಗಿ by gender; Korean 동생 does not (남동생 / 여동생 when needed).
  - Kannada speakers call drivers and shopkeepers ಅಣ್ಣ; Koreans say 저기요, 기사님 or 사장님.
  - ಸರ್ / ಮೇಡಂ with no name ≈ a title alone (과장님, 선생님).
  - The vocative: Kannada lengthens the last vowel (ಮಿನ್ಸೂ!); Korean adds 아 / 야 (민수야!). The job is the same.

### 4.7 Comparing, modifiers, joining, conditionals, numbers, counters

- **Comparing.** ಬಸ್ ಟ್ಯಾಕ್ಸಿಗಿಂತ ಅಗ್ಗ = 버스가 택시보다 싸요: the same order. ಇನ್ನೂ / ಹೆಚ್ಚು ≈ 더; ಎಲ್ಲಕ್ಕಿಂತ ≈ 제일.
- **Modifiers.**
  - Kannada relative participles already sit before the noun and do **not** agree: ನಾನು ನಿನ್ನೆ ನೋಡಿದ ಸಿನಿಮಾ = 어제 본 영화.
  - The past -ದ / -ಇದ ≈ -(으)ㄴ. The non-past -ಉವ ≈ both -는 and -(으)ㄹ.
  - Breaks: Kannada adjectives are fixed words (ದೊಡ್ಡ ಚೀಲ), but Korean adjectives are verbs that take an ending before the noun (크다 → 큰 가방, 맵다 → 매운).
  - Kannada has no relative pronoun either, so there is nothing to unlearn.
- **Joining.**
  - The -ಇ / -ದು form ≈ -아/어서 for a sequence (ಮನೆಗೆ ಹೋಗಿ ಮಲಗಿದೆ ≈ 집에 가서 잤어요). The Kannada form takes no tense, and neither does the Korean.
  - Reason first: ಬ್ಯುಸಿ ಇರುವುದರಿಂದ ಬರುವುದಿಲ್ಲ ≈ 바빠서 안 가요. ಏಕೆಂದರೆ puts the reason second, which -아/어서 cannot do.
  - -지만 ≈ "…, ಆದರೆ …" or -ಆದರೂ (ದುಬಾರಿಯಾದರೂ ರುಚಿಯಾಗಿದೆ ≈ 비싸지만 맛있어요).
  - Story words: ಮೊದಲು (먼저), ಮತ್ತು (그리고), ಆಮೇಲೆ (그다음에), ಅದಕ್ಕೇ (그래서), ಆದರೆ (그런데), ಕೊನೆಗೆ (마지막으로).
- **Conditional and concessive: exact matches.**
  - -ದರೆ = -(으)면: ಮಳೆ ಬಂದರೆ = 비가 오면.
  - -ದರೂ = -아/어도: ಹೋದರೂ = 가도.
  - Permission: ಕುಳಿತರೂ ಪರವಾಗಿಲ್ಲ = 앉아도 돼요.
  - No obligation: ಹೋಗದಿದ್ದರೂ ಪರವಾಗಿಲ್ಲ / ಹೋಗಬೇಕಾಗಿಲ್ಲ = 안 가도 돼요.
  - Asking: ಇಲ್ಲಿ ಕುಳಿತರೆ ತೊಂದರೆಯೇ? ≈ 여기 앉으면 안 돼요?.
- **Numbers.**
  - Kannada 1–100 must be memorised; Sino-Korean is ten words plus a rule.
  - Kannada groups in ಲಕ್ಷ / ಕೋಟಿ: 10만 = 1 ಲಕ್ಷ, 1000만 = 1 ಕೋಟಿ.
  - Hours take **native** Korean numbers (ಮೂರು ಗಂಟೆ = 세 시). Minutes, money, dates, floors and phone numbers take Sino-Korean.
  - ಮೂರುವರೆ = 세 시 반 (exact). ಕಾಲು / ಮುಕ್ಕಾಲು have no Korean word: use 분.
  - Age: ನನಗೆ ಇಪ್ಪತ್ತೆಂಟು ವರ್ಷ = 스물여덟 살이에요.
- **Counters.**
  - The Kannada human forms (ಒಬ್ಬರು, ಇಬ್ಬರು, ಮೂವರು) change the number word, like 하나 → 한 명, 둘 → 두 명.
  - Breaks: Kannada puts the number first (ಎರಡು ಕಪ್ ಕಾಫಿ); Korean puts it after the noun, with the counter (커피 두 잔). Expect 두 커피 ✗.
  - Café orders ("ಕಾಫಿ ಎರಡು") already put the number last [inference].

## 5. Error zones, ranked [inference unless tagged]

1. **Stops.**
   - ㄱ ㄷ ㅂ ㅈ said as ಕ ತ ಪ ಚ, which Koreans hear as ㄲ ㄸ ㅃ ㅉ. This is carried over from Hindi studies (Ahn 2009: unaspirated stops heard as fortis, 88%; hi-ko §5), as analogy only.
   - ㅋ ㅌ ㅍ ㅊ without air, because aspiration is weak or absent for many Kannada speakers [source: Wikipedia; Bhat, second-hand].
   - RR *k t p* read unaspirated, the Indian-English way, which also sounds tense.
2. **Final consonants.**
   - Kannada words end in a vowel, and loans gain -ಉ, often with doubling (ಬಸ್ಸು) [convention, en-kn §2.2]. So 밥 → "ಬಾಪು", 책 → "ಚೆಕ್ಕು".
   - Released finals.
   - Final ㄹ said as ಳ or ರ.
3. **RR vowels.**
   - *eo* read as "ಯೋ" / "ಒ"; *eu* as "ಯು"; *ae* as ಐ ("ಅಯ್").
   - A ವ glide before 오 at the start of a word, and a ಯ glide before 이 / 에: Kannada initial o / e get w- / y- onsets [source: Wikipedia].
4. **Particles.**
   - -ಅಲ್ಲಿ → 에 for actions (집에 쉬어요 ✗).
   - 저에게 for ನನಗೆ.
   - 커피가 좋아해요 ✗.
5. **Negation order:** 마셔요 안 ✗; 안 공부해요 ✗.
6. **Politeness:** 당신; 반말 to staff; -시- for yourself.
7. **Lesson-local.**
   - 그 vs 저: Kannada ಅದು covers both.
   - 들 everywhere, by analogy with -ಗಳು.
   - Counter order; 이에요 / 예요.
   - Retroflex ಟ / ಡ for RR *t d* (Indian English makes English t / d retroflex [convention]).

## 6. Reading guide

Voicing is never contrastive in Korean: there is no ಕ / ಗ pair, only plain / tense / aspirated.

**Policy: the Kannada script compares; it never reads.**
- Kannada letters are used for **one sound** (ㅏ ≈ ಆ), or for one syllable written with explicit signs and the virama (옷 ≈ "ಒತ್"). Always add **ಸುಮಾರು** or a mouth description.
- A wrong reading may be shown marked ✗ ("ಬಾಪು" ✗).
- Never respell a whole word, for these reasons:
  1. Kannada has no letter for ㅡ and none of its own for ㅓ;
  2. press spellings (ಸಿಯೋಲ್) teach a wrong "ಯೋ";
  3. a respelling invites the added final ಉ;
  4. Hangul is the goal.
- Name and loan labels in glosses (ಮಿನ್ಸು, ಕಿಮ್ಚಿ) are labels, not readings (§9.3).

### 6.1 Sound table (card notes ko.c0001–c0060, the `hangul` table, deck descriptions)

| Jamo (RR) | Comparison for a Kannada speaker | Trap |
|---|---|---|
| ㅏ a | ಆ, not long | not ಅ |
| ㅓ eo | near Kannada ಅ, but the jaw lower and the tongue further back; lips **not** rounded | not ಒ, not "ಯೋ" |
| ㅗ · ㅜ · ㅣ | ಒ / ಓ (rounded, tight) · ಉ / ಊ · ಇ / ಈ; length does not matter | no ವ before ㅗ, no ಯ before ㅣ at the start of a word |
| ㅡ eu | ಉ with the lips spread, as in a smile | no Kannada letter |
| ㅐ = ㅔ | ಎ / ಏ | **not ಐ** |
| ㅑ ㅛ ㅠ · ㅘ · ㅟ | ಯಾ ಯೋ ಯು · ವಾ · ವಿ | |
| ㅕ · ㅝ · ㅚ ㅙ ㅞ · ㅢ | ಯ + ㅓ · ವ + ㅓ · about ವೆ · ㅡ + ಇ | *yeo* ≠ ಯೋ; *wo* ≠ ವೊ |
| ㄱ ㄷ ㅂ ㅈ | soft ಗ ದ ಬ ಜ, a little air at the start of a word, low pitch | never ಕ ತ ಪ ಚ |
| ㅋ ㅌ ㅍ ㅊ | **a strong puff of air on the palm**; the letters ಖ ಥ ಫ ಛ help only if you really aspirate them | ㅍ = lips close, then air; not the teeth-on-lip sound |
| ㄲ ㄸ ㅃ ㅉ | everyday ಕ ತ ಪ ಚ: no air, tight throat, higher pitch | not long; ಅಕ್ಕ's ಕ್ಕ is a rough guide between vowels only [inference] |
| ㅅ / ㅆ | ಸ / a tight ಸ; before ㅣ about ಶ | |
| ㄷ ㅌ ㄸ | the ತ / ದ family, **never** ಟ / ಡ | Korean has no retroflex |
| final ㅇ | the ಙ of ಅಂಗಡಿ, without the ಗ | 강 ≠ "ಗಾಂಗ್" |
| ㄹ | a light ರ (tap) between vowels; ಲ at the end of a syllable; ㄹㄹ = the ಲ್ಲ of ಎಲ್ಲಿ | final ㄹ is not ರ and **not ಳ** |
| ㄴ ㅁ · ㅎ | ನ ಮ (a final ㄴ is a full ನ್, not an anusvara) · ಹ, often silent between vowels | |
| finals | ಕ್ ತ್ ಪ್ with the virama, unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → ತ್ (옷 ≈ "ಒತ್") | **no added ಉ**: 밥 ≠ "ಬಾಪು"; not "ಒಸ್" |

**Script bridge [inference].**
- One **ಬ್ಲಾಕ್** = one **ಅಕ್ಷರ**.
- Consonant + vowel in a block ≈ a consonant + its ಕಾಗುಣಿತ sign.
- Hangul draws mouth shapes, much as the Kannada ವರ್ಗ order follows the mouth (ಕ-ವರ್ಗ, ಚ-ವರ್ಗ …).
- A visual aid, labelled as one: 받침 sits **under** the block the way an ಒತ್ತಕ್ಷರ sits under its letter. **But** an ಒತ್ತಕ್ಷರ is read before the vowel and 받침 after it.
- Breaks:
  - Korean vowels are full letters, not signs;
  - ㅇ at the start of a block is a silent placeholder;
  - reading block by block kills linking (ಪಾಠ 4).

### 6.2 Guide in Kannada (lesson 1; needs `"_waive":["hangul"]` + `_note` on its title row; parts go into `sound-changes` and the three Hangul deck descriptions)

> **ರೋಮನ್ ಲಿಪಿಯನ್ನು ಹೇಗೆ ಓದುವುದು** — ಈ ರೋಮನ್ ಲಿಪಿಯನ್ನು ಇಂಗ್ಲಿಷ್ ಓದುವವರಿಗಾಗಿ ಮಾಡಲಾಗಿದೆ. ಆದ್ದರಿಂದ:
> - **a** ಯಾವಾಗಲೂ ಚಿಕ್ಕ "ಆ". ಕನ್ನಡದ "ಅ"ಗೆ ಹತ್ತಿರದ ಸ್ವರ **eo**: ದವಡೆ ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೆಳಗೆ, ತುಟಿ ದುಂಡಾಗಿಲ್ಲ. *seoul* ನಲ್ಲಿ "ಯೋ" ಇಲ್ಲ.
> - **eu**: ತುಟಿಯನ್ನು ನಗುವಂತೆ ಅಗಲಿಸಿ "ಉ" ಹೇಳಿ. **ae** ಮತ್ತು **e** ಎರಡೂ "ಎ" — "ಐ" ಅಲ್ಲ. **o** ಶುದ್ಧ "ಒ"; ಮೊದಲು "ವ" ಸೇರಿಸಬೇಡಿ. **wo** = ವ + eo.
> - **k, t, p, ch**: ಬಾಯಿಯ ಮುಂದೆ ಅಂಗೈ ಹಿಡಿದರೆ ಗಾಳಿ ತಾಗಬೇಕು. **p** ಎಂದರೆ ತುಟಿ ಮುಚ್ಚಿ ತೆರೆಯುವುದು; ಹಲ್ಲು ತುಟಿಗೆ ತಾಗುವುದಿಲ್ಲ.
> - **kk, tt, pp, jj** = ನಮ್ಮ ದಿನನಿತ್ಯದ ಕ, ತ, ಪ, ಚ — ಗಾಳಿ ಇಲ್ಲ, ಗಂಟಲು ಬಿಗಿ, ಧ್ವನಿ ಸ್ವಲ್ಪ ಎತ್ತರ; ಆದರೆ ಉದ್ದವಲ್ಲ.
> - **g, d, b, j** ಪದದ ಆರಂಭದಲ್ಲಿ ಮೃದುವಾದ ಗ, ದ, ಬ, ಜ — ಕ, ತ, ಪ, ಚ ಅಲ್ಲ. **t, d** ಯಾವಾಗಲೂ ತ / ದ — ಟ / ಡ ಅಲ್ಲ.
> - **r** ಎರಡು ಸ್ವರಗಳ ನಡುವೆ ಹಗುರವಾದ ರ; ಕೊನೆಯ **l** ಸ್ಪಷ್ಟ ಲ, ಳ ಅಲ್ಲ: *mul*. **ng** = "ಅಂಗಡಿ"ಯ ಙ, ನಂತರ ಗ ಇಲ್ಲ.
> - ಕೊನೆಯ **k, t, p**: ಬಾಯಿ ಮುಚ್ಚಿ ನಿಲ್ಲಿಸಿ — ಗಾಳಿ ಬಿಡಬೇಡಿ, ಕೊನೆಗೆ "ಉ" ಸೇರಿಸಬೇಡಿ: *bap* ✓, "ಬಾಪು" ✗. ಕೊನೆಯ ವ್ಯಂಜನ ಮುಂದಿನ ಸ್ವರಕ್ಕೆ ಸೇರುತ್ತದೆ: *hangugeo*.
> - ರೋಮನ್ ಲಿಪಿ ಆಸರೆಗೆ ಮಾತ್ರ; ಓದಬೇಕಾದದ್ದು ಹಂಗುಲ್: 감사합니다 = *gamsahamnida*.

## 7. Fixed phrases (one gloss everywhere, across all writers)

A card meaning may be shorter. A bracket says who the line is for. A card note may add the literal meaning.

| Korean | Kannada | Korean | Kannada |
|---|---|---|---|
| 안녕하세요 | ನಮಸ್ಕಾರ | 안녕 (반말) | ಹಾಯ್ / ಬಾಯ್ (by context) |
| 안녕히 가세요 | ಹೋಗಿ ಬನ್ನಿ (ಹೊರಡುವವರಿಗೆ) | 안녕히 계세요 | ಚೆನ್ನಾಗಿರಿ (ಹೊರಡುವವರು, ಉಳಿಯುವವರಿಗೆ) |
| 감사합니다 / 고맙습니다 | ಧನ್ಯವಾದಗಳು | 고마워요 · 고마워 | ಥ್ಯಾಂಕ್ಸ್ (+ the English tag) |
| 죄송합니다 | ಕ್ಷಮಿಸಿ | 미안해요 · 미안해 | ಸಾರಿ (+ the English tag) |
| 네 · 아니요 | ಹೌದು · ಇಲ್ಲ | 괜찮아요 | ಪರವಾಗಿಲ್ಲ; declining: ಬೇಡ, ಪರವಾಗಿಲ್ಲ |
| 저기요 | ಸ್ವಲ್ಪ ಕೇಳಿ (ಗಮನ ಸೆಳೆಯಲು) | 잠깐만요 | ಒಂದು ನಿಮಿಷ |
| 처음 뵙겠습니다 | ಮೊದಲ ಭೇಟಿ, ನಮಸ್ಕಾರ | 만나서 반갑습니다 / 반가워요 | ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು |
| 반가워 | ನಿನ್ನನ್ನು ನೋಡಿ ಖುಷಿಯಾಯಿತು | 잘 부탁드립니다 (meeting) | ನಿಮ್ಮ ಸಹಕಾರ ಇರಲಿ |
| 잘 부탁드립니다 (업무) | ನಿಮ್ಮ ಸಹಕಾರಕ್ಕೆ ಮುಂಚಿತವಾಗಿ ಧನ್ಯವಾದಗಳು | 잘 지냈어요? | ಹೇಗಿದ್ದೀರಿ? ಎಲ್ಲಾ ಚೆನ್ನಾಗಿದೆಯೇ? |
| 잘 먹겠습니다 | ಊಟಕ್ಕೆ ಧನ್ಯವಾದ (ತಿನ್ನುವ ಮೊದಲು) | 잘 먹었습니다 | ಊಟ ಚೆನ್ನಾಗಿತ್ತು, ಧನ್ಯವಾದ (ತಿಂದ ನಂತರ) |
| 맛있게 드세요 | ಚೆನ್ನಾಗಿ ಊಟ ಮಾಡಿ | 계산해 주세요 | ಬಿಲ್ ಕೊಡಿ |
| 수고하셨습니다 | ಇಂದಿನ ಶ್ರಮಕ್ಕೆ ಧನ್ಯವಾದಗಳು | 수고 많으셨어요 | ತುಂಬಾ ಶ್ರಮಪಟ್ಟಿರಿ, ಧನ್ಯವಾದ |
| 수고하세요 | ಕೆಲಸ ಚೆನ್ನಾಗಿ ಸಾಗಲಿ (ಹೊರಡುವವರು, ಕೆಲಸದಲ್ಲಿರುವವರಿಗೆ) | 수고했어 · 수고했어요 | ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡಿದೆ · ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡಿದಿರಿ |
| 고생했어 | ತುಂಬಾ ಕಷ್ಟಪಟ್ಟೆ | 좋은 하루 보내세요 | ನಿಮ್ಮ ದಿನ ಚೆನ್ನಾಗಿರಲಿ |
| 주세요 | ಕೊಡಿ | -아/어 주세요 | the -ಇ command (ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ) / -ಇ ಕೊಡಿ |
| 주시겠어요? | …ಕೊಡುತ್ತೀರಾ? | 좀 | **ಸ್ವಲ್ಪ** (the same softener: ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ) |
| 혹시 | …ಏನಾದರೂ …ಇದೆಯೇ? / ಒಂದು ವೇಳೆ | 알겠습니다 / 알겠어요 | ಸರಿ, ಗೊತ್ತಾಯಿತು |
| 넵, 확인했습니다 | ಸರಿ, ನೋಡಿದ್ದೇನೆ | 오케이 콜 · 콜! | ಓಕೆ, ಡನ್! · ಡನ್! |
| 대박 | ಸಖತ್! / ಅಬ್ಬಾ! | 진짜? | ನಿಜವಾಗಲೂ? |
| 아이고 | ಅಯ್ಯೋ | 화이팅 | ಆಲ್ ದಿ ಬೆಸ್ಟ್! |
| 축하해요 | ಅಭಿನಂದನೆಗಳು | 생일 축하해요 | ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು |
| 잘 자 / 안녕히 주무세요 | ಶುಭ ರಾತ್ರಿ (ಸಲುಗೆ) / ಶುಭ ರಾತ್ರಿ (ಗೌರವಸೂಚಕ) | 조심히 가세요 · 집에 잘 들어가세요 | ಜಾಗ್ರತೆಯಾಗಿ ಹೋಗಿ · ಮನೆಗೆ ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿ |
| 오랜만이에요 | ತುಂಬಾ ದಿನಗಳ ನಂತರ ಸಿಕ್ಕಿದಿರಿ | 말 놔도 돼요 | ನನ್ನನ್ನು ನೀನು ಎಂದು ಕರೆಯಬಹುದು |
| 어서 오세요 | ಬನ್ನಿ, ಸ್ವಾಗತ | 건배 · 짠 | ಚಿಯರ್ಸ್ (+ the English tag) |
| 선생님 | ಸರ್ / ಮೇಡಂ (ಶಿಕ್ಷಕರು) | 사장님 | ಮಾಲೀಕರು (address: ಸರ್) |
| 과장님 / 팀장님 | ಮ್ಯಾನೇಜರ್ / ಟೀಮ್ ಲೀಡರ್ | 오빠·형 / 언니·누나 | ಅಣ್ಣ / ಅಕ್ಕ (§4.6) |
| 기사님 | ಡ್ರೈವರ್ ಅಣ್ಣ | 씨 (민수 씨) | ಮಿನ್ಸು ಅವರೇ (address) / ಮಿನ್ಸು ಅವರು (reference) |

Notes:
- **The two goodbyes always say who is leaving.**
  - `meet` gets a real bridge here. Kannada has the same split: the one leaving says ಹೋಗಿ ಬರುತ್ತೇನೆ, and the one staying answers ಹೋಗಿ ಬನ್ನಿ (en-kn §2.4, from Penn's lessons [convention]).
  - So 안녕히 가세요 = ಹೋಗಿ ಬನ್ನಿ in the same mouth and the same slot.
  - 안녕히 계세요 is said by the leaver, but it wishes the stayer well ("stay well"). Gloss it ಚೆನ್ನಾಗಿರಿ, never ಹೋಗಿ ಬನ್ನಿ.
- **잘 먹겠습니다** is said before eating and **잘 먹었습니다** after. Never use one gloss for both.
- **수고하세요** is said by the one **leaving**, to someone still working.
- **아이고 / ಅಯ್ಯೋ** sound alike. Present that as a coincidence, never as a shared origin.
- **혹시 lines:** 혹시 영어 메뉴 있어요? → ಇಂಗ್ಲಿಷ್ ಮೆನು ಏನಾದರೂ ಇದೆಯೇ?
- **사장님, 계산해 주세요** → ಸರ್, ಬಿಲ್ ಕೊಡಿ.

## 8. Per-lesson notes

**B** = what to build on. **R** = an English-built passage to rewrite, not translate. Every entry is [inference] unless tagged.

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: ಬ್ಲಾಕ್ = ಅಕ್ಷರ; ಕಾಗುಣಿತ; the ಒತ್ತಕ್ಷರ visual aid; the guide in §6.2. R: the vowel-table sounds → §6.1; "Tap a letter" (§3.2). `_waive` on the title row (the guide adds 감사합니다) |
| 2 | `polite` | B: ನೀವು / ನೀನು ≈ 요 / 반말; ಧನ್ಯವಾದಗಳು / ಥ್ಯಾಂಕ್ಸ್; break 3 (-습니다 ≠ written Kannada). Headers: ಮಟ್ಟ · ಪ್ರತ್ಯಯ · ಯಾರ ಜೊತೆ; Say-it-3-ways: ಔಪಚಾರಿಕ · ವಿನಯ · ಸಲುಗೆ |
| 3 | `meet` | B: ನಮಸ್ಕಾರ at any hour; age sets address in both cultures; ಹೋಗಿ ಬರುತ್ತೇನೆ / ಹೋಗಿ ಬನ್ನಿ (§7). Column "Formal" → **ಔಪಚಾರಿಕ / ಗೌರವಸೂಚಕ** (it holds 성함이 어떻게 되세요?). The country tip may say "ದೇಶಗಳು ಡೆಕ್ಕಿನಲ್ಲಿ ಭಾರತವೂ ಇದೆ", with no Hangul. Keep ಮೈಕ್ / ಹುವಾನ್ |
| 4 | `sound-changes` | B: nasal assimilation is familiar from Kannada ಸಂಧಿ (the school rule where k + m → ಙ್ಮ, as in ವಾಕ್ + ಮಯ = ವಾಙ್ಮಯ, ≈ 한국말 → 한궁말) [convention, not opened]; ㄹㄹ = the ಲ್ಲ of ಎಲ್ಲಿ. Keep the drill line (§3.2) |
| 5 | `nouns` | B: no articles, no gender (three Kannada genders gone), the noun never changes. Traps: ಇದು / ಅದು two-way vs 이 / 그 / 저; 들 optional, unlike -ಗಳು. R: "easier than English" → "ಕನ್ನಡಕ್ಕಿಂತ ಸುಲಭ" |
| 6 | `isseoyo` | R: the "English 'is'" opening → §4.3 (ಅಲ್ಲ / ಇಲ್ಲ = 아니에요 / 없어요) |
| 7 | `pronouns-questions` | B: question words in place (ಇದು ಏನು? = 이거 뭐예요?); -ಆ / -ಏ at the end; ನಮ್ಮ ಅಮ್ಮ ≈ 우리 엄마; ನೀವು ≠ 당신 |
| 8 | `verbbasics` | B: ಧಾತು, no agreement, ವರ್ಣನಾತ್ಮಕ ಕ್ರಿಯಾಪದ, ಮಾಡು ≈ 하다. R: the "to …" framing and "English adjectives" |
| 9 | `verbs` | B: one 요-form = ಹೋಗುತ್ತೇನೆ + ಹೋಗುತ್ತಿದ್ದೇನೆ + a question; prompt frames (§9.2) |
| 10 | `past` | B: one past, no agreement; ಇನ್ನೂ ಹೋಗಿಲ್ಲ = 안 갔어요. R: "I ate / have eaten" → ತಿಂದೆ / ತಿಂದಿದ್ದೇನೆ |
| 11 | `future` | B: the non-past covers it in Kannada, so the cue matters; ಇರಬಹುದು = "probably". R: "kkeoyeyo" → "ಬಿಗಿ ಕ" |
| 12 | `sov` | B: verb last in both; -ಅನ್ನು vs 을/를; both drop the object marker in speech. R: every "English is SVO" line |
| 13 | `particles` | B: -ಗೆ = 에 (go, time); -ಇಂದ = 에서 "from". Tip: "ಕನ್ನಡದಲ್ಲಿ ಎರಡಕ್ಕೂ -ಅಲ್ಲಿ; ಕೊರಿಯನ್‌ನಲ್ಲಿ 에 (ಇರುವುದು) ಮತ್ತು 에서 (ಮಾಡುವುದು)" — write ಕೊರಿಯನ್ನಲ್ಲಿ, no ZWNJ. R: "English 'at'" |
| 14 | `negation` | B: -지 않아요 ≈ ಕುಡಿಯುವುದಿಲ್ಲ (same order); 안 goes **before**; ಅಭ್ಯಾಸ ಮಾಡುವುದಿಲ್ಲ = 공부 안 해요; ಅಲ್ಲ / ಇಲ್ಲ |
| 15 | `do-man` | B: -ಊ = 도, stacking after a case ending (ಮನೆಯಲ್ಲೂ); ಮಾತ್ರ = 만 |
| 16 | `sentences` | B: the same frame as Kannada; describing verbs need no ಇದೆ. R: the "English order" mistakes |
| 17 | `want-like` | B: §4.5; ನನಗೆ ಇಷ್ಟ = 가 좋아요; want = -ಲು ಬಯಸುತ್ತೇನೆ in every prompt |
| 18 | `numbers` | B: §4.7; ಲಕ್ಷ; ಮೂರುವರೆ = 세 시 반. R: "like English digits" → "ಹತ್ತು ಪದ ಮತ್ತು ಒಂದು ನಿಯಮ". Hours are native: fix the blurb if it says Sino-Korean is for time |
| 19 | `food` | B: ಎರಡು ಕಪ್ ಕಾಫಿ vs 차 두 잔; ಚೆನ್ನಾಗಿ ಊಟ ಮಾಡಿ = 맛있게 드세요. Prose tip, no Hangul: many dishes, kimchi too, contain fish or meat (matters for vegetarians) |
| 20 | `getting-around` | B: ನಮ್ಮ ಮೆಟ್ರೋ ≈ the Seoul subway; announcements in two languages in both; the metro card ≈ ಟಿ-ಮನಿ; numbered exits |
| 21 | `titles` | B: ಅವರು / ಅವರೇ ≈ 씨; ಅಣ್ಣ / ಅಕ್ಕ with the speaker-gender twist; vowel lengthening ≈ 아 / 야. R: "(you female / you male)" → "(ನೀವು ಹೆಣ್ಣಾಗಿದ್ದರೆ / ಗಂಡಾಗಿದ್ದರೆ)" |
| 22 | `plans` | B: ಹೋಗೋಣ ≈ 가자; ಹೋಗೋಣವೇ? ≈ 갈까요?; ಬರುತ್ತೀರಾ? ≈ -(으)ㄹ래요?. Column "Formal" → **ಹೆಚ್ಚು ಗೌರವಸೂಚಕ** (가시겠어요? and 있으세요? are -시- 요-forms, not -습니다) |
| 23 | `texting` | B: ㅋㅋ ≈ ಹಹ. **In KakaoTalk the "1" means NOT yet read**: it disappears when the person reads. 읽씹 = the 1 is gone and no reply comes ≈ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ (write ವಾಟ್ಸಾಪಿನಲ್ಲಿ) blue ticks with no reply. The English `src` has this backwards; write it correctly. Kannada chat uses spoken forms; prose may say so, but glosses stay written (§2.2) |
| 24 | `counters` | B: ಒಬ್ಬರು / ಇಬ್ಬರು ≈ 한 명 / 두 명; the number goes first in Kannada and after the noun in Korean |
| 25 | `joining` | B: the -ಇ form; reason first; ಆದರೆ / -ಆದರೂ = -지만. R: "and / but / so" → ಮತ್ತು / ಆದರೆ / ಅದಕ್ಕೇ |
| 26 | `story` | B: the story words (§4.7) |
| 27 | `noun-modifiers` | B: relative participles (ನೋಡಿದ ಸಿನಿಮಾ), no agreement; Korean adjectives take an ending. R: "no that / which" → "ಕನ್ನಡದಂತೆ ಕೊರಿಯನ್ನಲ್ಲೂ 'ಯಾವುದು … ಅದು' ಬೇಡ" |
| 28 | `compare` | B: -ಗಿಂತ = 보다 in the same slot; ಇನ್ನೂ / ಎಲ್ಲಕ್ಕಿಂತ |
| 29 | `cant` | B: ಆಗುವುದಿಲ್ಲ = 못, ಮಾಡುವುದಿಲ್ಲ = 안; ಗೊತ್ತಿಲ್ಲ = 몰라요; 모르겠어요 = "ಹೇಳಲು ಗೊತ್ತಾಗುತ್ತಿಲ್ಲ" |
| 30 | `have-to` | B: -ಲೇಬೇಕು; ಹೋಗಬೇಕಾಗಿಲ್ಲ / ಹೋಗದಿದ್ದರೂ ಪರವಾಗಿಲ್ಲ = 안 가도 돼요 (-ದರೂ = -아/어도). Cross-reference → ಪಾಠ 32 ("ವಿನಯದಿಂದ ಕೇಳುವುದು") |
| 31 | `honorific` | B: the respect plural = -시-; ತಮ್ಮ ಹೆಸರು = 성함; ಊಟ ಮಾಡಿ ≈ 드세요; never -시- for yourself |
| 32 | `requests` | B: ಸ್ವಲ್ಪ = 좀; ಏನಾದರೂ = 혹시; ಕೊಡುತ್ತೀರಾ? = 주시겠어요?; ಕುಳಿತರೆ ತೊಂದರೆಯೇ? ≈ -(으)면 안 돼요?; ಕುಳಿತರೂ ಪರವಾಗಿಲ್ಲವೇ? ≈ -아/어도 돼요? |
| 33 | `office` | B: a title alone ≈ ಸರ್ / ಮೇಡಂ; 회식 ≈ ಆಫೀಸ್ ಟೀಮ್ ಡಿನ್ನರ್; the 수고 family (§7); 운전해야 돼요 as the polite excuse for not drinking. Email sign-off: §9.3 |

## 9. Row conventions

### 9.1 Format (spec §4–6)

- **Hangul.** The Hangul runs must be set-equal to the English row's.
  - Exceptions need `"_waive":["hangul"]` + `_note`. For a lesson body, put them on its title row in `lessons.jsonl`.
  - Planned exception: `hangul` only.
- **Dialogues:** exactly one ` / ` per gloss.
- **Blanks:** `__` / `___` kept unchanged, with no ending glued on (§2.1):
  - c0073 저는 ___이에요 / 예요 → **ನಾನು ___**;
  - c0643 ___에서 왔어요 → **ನಾನು ___ ದೇಶದಿಂದ ಬಂದಿದ್ದೇನೆ**;
  - c0644 ___ 할 수 있어요? → **ನಿಮಗೆ ___ ಮಾತನಾಡಲು ಬರುತ್ತದೆಯೇ?**.
- **The country question:** 어디에서 왔어요? = **ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?** everywhere; 미국에서 왔어요 = ನಾನು ಅಮೆರಿಕದಿಂದ ಬಂದಿದ್ದೇನೆ.
- **Glosses:** no `{ }`.
- **Lengths:** `q p why hint` ≤ 400 characters; options ≤ 200 and never identical within an item.
- **Meanings:** distinct within each deck (compared case-insensitively), even for near-synonyms (ಸಖತ್! vs ಸೂಪರ್!).
- **Lesson bodies.**
  - Same `<h3>` / div / table structure; tokens unchanged and in order.
  - No English left in prose or table headers.
  - No `<img> <svg> <script> <style>`, no `javascript:`.

### 9.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) before writing each prompt.

**Fixed frames.** They are mutually exclusive, so each one points at a single Korean form:

| Korean answer | Kannada frame in prompts | Example |
|---|---|---|
| 요-present (가요) | the **progressive** -ಉತ್ತಿದ್ದೇನೆ, or the plain non-past with no cue | (ನಾನು) ಮನೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ |
| -(으)ㄹ 거예요 | non-past + **(ಭವಿಷ್ಯತ್ಕಾಲ)**, always | (ನಾನು) ನಾಳೆ ಹೋಗುತ್ತೇನೆ (ಭವಿಷ್ಯತ್ಕಾಲ) |
| past | the past form (unambiguous); add (ಭೂತಕಾಲ) where the English hint says *past* | (ನಾನು) ಮನೆಗೆ ಹೋದೆ |
| -고 싶어요 | **-ಲು ಬಯಸುತ್ತೇನೆ** (the interface's own "want": ಕಲಿಯಲು ಬಯಸುತ್ತೀರಿ) | (ನಾನು) ಮನೆಗೆ ಹೋಗಲು ಬಯಸುತ್ತೇನೆ |
| -아/어야 해요 | **-ಲೇಬೇಕು** (roadmap: ಮಾಡಲೇಬೇಕು) | (ನಾನು) ಮನೆಗೆ ಹೋಗಲೇಬೇಕು |
| 안 -아/어도 돼요 | -ಬೇಕಾಗಿಲ್ಲ | (ನೀವು) ಹೋಗಬೇಕಾಗಿಲ್ಲ |
| -(으)ㄹ 수 있어요 | ನನಗೆ … -ಲು ಬರುತ್ತದೆ | ನನಗೆ ಕೊರಿಯನ್ ಸ್ವಲ್ಪ ಮಾತನಾಡಲು ಬರುತ್ತದೆ |
| 못 | ನನಗೆ … -ಲು ಆಗುವುದಿಲ್ಲ | ಇಂದು ನನಗೆ ಹೋಗಲು ಆಗುವುದಿಲ್ಲ |
| 안 (choice) | -ಉವುದಿಲ್ಲ | ನಾನು ಮಾಂಸ ತಿನ್ನುವುದಿಲ್ಲ |
| 좋아해요 / 좋아요 | ನನಗೆ X ಇಷ್ಟ (both answers are accepted) | ನನಗೆ ಕಾಫಿ ಇಷ್ಟ |

- **Never use a bare ಬೇಕು in a want or must prompt.** ನನಗೆ ಮನೆಗೆ ಹೋಗಬೇಕು reads as both.
- **The future cue is required** on future.06–08 and future.12–14, and on any prompt whose answer is -(으)ㄹ 거예요. With the cue on every future prompt, an uncued non-past means the present: sentences.14, negation.12–13, verbs.12–14, verbbasics.12–13.
- **Past cues:** past.12 (its hint *past* → ಭೂತಕಾಲ). past.06, story.06 and story.14 need no cue, because their time word and past verb already exclude 와요 / 만나요 / 마셔요.
- **Level.**
  - ನೀನು forms for a 반말 answer; ನೀವು for a 요 / -습니다 / -시- answer.
  - Copy the English tags and scene cues: (ವಿನಯ), (ಔಪಚಾರಿಕ), (ಸಲುಗೆ), "ಸ್ನೇಹಿತರಿಗೆ ಮೆಸೇಜ್:", "ಹಿರಿಯರಿಗೆ:", "ಕೆಲಸ ಮುಗಿದ ನಂತರ ಟೀಮ್ ಲೀಡರಿಗೆ:".
  - A tag is required wherever `x` differs from the answer only in level: polite.12–14, texting.14, honorific.12–14, office.12.
- **Third persons:** ನನ್ನ ಸ್ನೇಹಿತ + masculine singular (§2.4 B): isseoyo.13, verbs.13, future.13.
- **Method cues stay as given:** (안 ಬಳಸಿ), (-(으)ㄹ까요 ಬಳಸಿ), (ಸಂಖ್ಯೆಯನ್ನು ಹಂಗುಲಿನಲ್ಲಿ ಬರೆಯಿರಿ).
- **"(I)"** → "(ನಾನು)". Instructions use the polite command.
- **Known pitfalls.**
  - verbs.12 → (ನಾನು) ಮನೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.
  - want-like.12 → ಹೋಗಲು ಬಯಸುತ್ತೇನೆ.
  - want-like.14 → ನೀವು ಏನು ತಿನ್ನಲು ಬಯಸುತ್ತೀರಿ?.
  - have-to.12 → ಹೋಗಲೇಬೇಕು.
  - cant.14 → ನಾನು ಮಾಂಸ ತಿನ್ನುವುದಿಲ್ಲ (ನನ್ನ ಇಷ್ಟದಿಂದ, 안 ಬಳಸಿ).
  - numbers.12 → ನನಗೆ 28 ವರ್ಷ.
  - isseoyo.12 → ನನ್ನ ಹತ್ತಿರ ಬೆಕ್ಕು ಇದೆ.

### 9.3 Names, places, the learner's name

- **People:** 민수 ಮಿನ್ಸು · 지은 ಜಿಯುನ್ · 리사 ಲಿಸಾ · Mike ಮೈಕ್ · Juan ಹುವಾನ್ · Kim Minsu ಕಿಮ್ ಮಿನ್ಸು.
- **Places:** ಕೊರಿಯಾ · ಸಿಯೋಲ್ (the interface form; a label, §6) · ಬುಸಾನ್ · ಮ್ಯೊಂಗ್ದೊಂಗ್ · ಹಾಂಗ್ಡೆ · ಗಂಗ್ನಮ್ · ಇಂಚಾನ್ [spellings unverified against the Kannada press].
- **Other names, dishes and fandom words.**
  - Use the established spelling where one exists (ಕಿಮ್ಚಿ, ಸೋಜು, ಬಿಬಿಂಬಾಪ್, ಕೆ-ಪಾಪ್).
  - Otherwise transcribe the RR letter by letter: g ಗ · k / kk ಕ · d ದ · t / tt ತ · b ಬ · p / pp ಪ · j / jj ಜ · ch ಚ · s / ss ಸ · h ಹ · n ನ · m ಮ · ng ಂಗ್ · r ರ · l ಲ (never ಳ) · a ಅ · eo / o ಒ · u ಉ · eu ಉ · i ಇ · ae / e ಎ; y- ಯ, w- ವ; finals with the virama.
  - These are labels, not pronunciation.
- **The learner's name `@@`.** Keep exactly as many as the English row has. Never glue an ending to it. Ready glosses for all six rows:

| id | Kannada |
|---|---|
| ko.s0297 | ನಮಸ್ಕಾರ. ನಾನು @@. |
| ko.g019 | ನಿಮ್ಮ ಹೆಸರು ಏನು? / ನಾನು @@. ನಿಮ್ಮ ಹೆಸರು? |
| ko.s0300 · office.08 (p) | ನಮಸ್ಕಾರ, ನಾನು ಮಾರ್ಕೆಟಿಂಗ್ ತಂಡದ @@ |
| ko.s0301 | ಧನ್ಯವಾದಗಳು. ಇಂತಿ, @@ |
| office.05 (q) | @@ ಎಂದು ಇಮೇಲಿಗೆ ಸಹಿ ಮಾಡುವಾಗ: |

  - ಇಂತಿ is the traditional Kannada letter closing before the sender's name, a close match for 드림 [inference; reviewer question 7].
- **Countries.**
  - Use the standard Kannada names (ಭಾರತ, ಅಮೆರಿಕ, ಜಪಾನ್).
  - 인도 (c1222) = ಭಾರತ (ಇಂಡಿಯಾ).
  - Gloss what the rows say. Never swap in India.
- **Local frame:** rupees, with no exchange rates; ವಾಟ್ಸಾಪ್ for the messaging app; ಯುಪಿಐ; ನಮ್ಮ ಮೆಟ್ರೋ / ಮೆಟ್ರೋ ಕಾರ್ಡ್ for the transit card; ಆಟೋ. Korean won = ವೋನ್.

## 10. Course `ui.json` and trainer notes (for the lead and w4)

- **No wording overrides are needed.** The kn interface was written for kn-ko, and its 14 `uiKeys` already say ಕೊರಿಯನ್ / ಹಂಗುಲ್ / ರೋಮನ್ ಲಿಪಿ (checked against `tools/i18n/kn/ui.json`).
- **But `ui.json` must not stay empty.** `validate.js` line 241 counts each `uiKey` as "words remaining" unless `native/kn/ko/ui.json` holds a value different from the key. So copy the 14 texts **verbatim** from `tools/i18n/kn/ui.json` `exact[key].t`. Nothing on screen changes.
- **One real override** (NOTES §5): `"No match. Try the English meaning."` → `"ಹೊಂದಿಕೆ ಇಲ್ಲ. ಕನ್ನಡ ಅರ್ಥದಲ್ಲಿ ಹುಡುಕಿ."`.
- **w4 (`wT.jsonl`).**
  - Use the §3.1 terms; keep rule glosses short, as in `native/es/ko/trainer.json`.
  - Keep `%n` slots and Hangul exactly as in `src`.
  - Sound-rule names: ಜೋಡಿಸಿ ಓದುವುದು, ಅನುನಾಸಿಕ ಬದಲಾವಣೆ, ಹ-ಬದಲಾವಣೆ, ಲ-ಬದಲಾವಣೆ, ಬಿಗಿ ಬದಲಾವಣೆ.
- **`hangul.alt`** is authored by the lead in `trainer.json`, not by the writers.
  - Candidate learner spellings [inference]: *aa* ㅏ, *ee* ㅣ, *oo* ㅜ.
  - Check them against spec §10.3 first.
  - Keep typed mode: Kannada users commonly type Latin [inference].

## 11. What not to do

- **No Korean beyond the source row without `_waive`.** Never edit `f`, `id`, `k`, `src` or any Korean field.
- **No English in Latin script.** Latin is allowed only for RR, its letters, `@@` and the NOTES closed list.
- **No spoken verb forms** outside the closed list (§2.2). No Hindi words (हाँ-style ಹಾಂ, ಅಚ್ಛಾ, -ಜೀ).
- **No invented etymologies.**
  - ವಾಙ್ಮಯ is a sound analogy, not a history; 아이고 / ಅಯ್ಯೋ is a coincidence.
  - Give no origin of a Korean word beyond what the English says.
  - No Sanskrit "cognates" for Sino-Korean words.
- **The script compares; it never reads.** No whole-word respellings (name labels excepted), and no comparisons with English sounds.
- **Address and gender.**
  - Never ನೀನು toward the learner.
  - ತಾವು only for 성함 / 연세 / 말씀 / 계시다 / 드시다.
  - No ದಯವಿಟ್ಟು with a plain 주세요.
  - No ಅವರು after your own name.
  - No respect plural for an unmarked 친구.
  - No silent gender choice; no spaced gender slash.
- **Particles.** Never write "은/는 = ಆದರೆ", "을/를 = -ಅನ್ನು" or "에 = -ಅಲ್ಲಿ".
- **No ending glued** to Hangul, RR, `___` or `@@`. No ZWNJ / ZWJ, no danda, no Kannada digits.

## 12. Review questions and unverified claims

**Ask a Kannada speaker** (answer "OK" or give the natural version):
1. Written standard for 반말 glosses (ನೀನು ಏನು ಮಾಡುತ್ತಿದ್ದೀಯೆ?): acceptable, or too stiff? And is -ಈಯೆ the right written 2nd-person singular?
2. Do the prompt frames feel natural and distinct: -ಲು ಬಯಸುತ್ತೇನೆ (want), -ಲೇಬೇಕು (must), (ಭವಿಷ್ಯತ್ಕಾಲ) on the non-past?
3. Goodbyes: is ಚೆನ್ನಾಗಿರಿ right for 안녕히 계세요 next to ಹೋಗಿ ಬನ್ನಿ for 가세요?
4. ತಮ್ಮ ಹೆಸರು for 성함 (any clash with ತಮ್ಮ "younger brother"?), and name + ಅವರೇ for 씨 in address.
5. Fixed phrases: ಸ್ವಲ್ಪ ಕೇಳಿ (저기요), ನಿಮ್ಮ ಸಹಕಾರ ಇರಲಿ (잘 부탁드립니다), ಕೆಲಸ ಚೆನ್ನಾಗಿ ಸಾಗಲಿ (수고하세요), ಡನ್! (콜), ಸಖತ್! (대박).
6. Terms: ಪಾರ್ಟಿಕಲ್; ವಿಷಯ / ಕರ್ತೃ / ಕರ್ಮ ಪಾರ್ಟಿಕಲ್; ಸರಳ / ಮಹಾಪ್ರಾಣ / ಬಿಗಿ ವ್ಯಂಜನ; ಔಪಚಾರಿಕ for -습니다.
7. ಇಂತಿ, @@ as the email sign-off for 드림.
8. Labels: ವಿಚಾರಿಸುವುದು, ಹುರುಪು ಮತ್ತು ಸ್ಟೈಲ್, ಜೊತೆ ಸುತ್ತಾಟ, ಹರಟೆ, the group ಮೂಲ ಪದಗಳು, and lesson title 1 ಒಂದೇ ಬಾರಿಗೆ ಹಂಗುಲ್.

**Unverified or inference only:**
- **No study of Kannada (or Tamil, Telugu, Malayalam) speakers learning Korean was found** (one search). The stop mapping rests on Hindi listener studies (hi-ko §5) as analogy.
- The aspiration claim combines the Wikipedia article (aspiration rare in native words, speaker-dependent) with a second-hand English outline of D. N. Shankara Bhat's reform booklet, which argues that aspiration is absent from spoken Kannada. Bhat's view is one linguist's position.
- ಅಕ್ಕ's ಕ್ಕ as a guide to ㄲ; the vowel glides; final ㄹ → ಳ.
- The ವಾಙ್ಮಯ sandhi example; café number order; Indian-English retroflex t / d.
- Kannada press spellings of Korean places; ವೋನ್.
- All Kannada example sentences.

**For the lead:**
- `ui.json`: the 14 verbatim keys + 1 override (§10);
- `_waive` on `hangul`;
- `course.json` name ಕೊರಿಯನ್.

## Sources (opened 2026-11-23)

- [Kannada phonology (Wikipedia)](https://en.wikipedia.org/wiki/Kannada_phonology): aspirates rare in native words, speaker-dependent; initial y- / w- glides; /f z/ only in recent loans.
- [Kannadakke mahaprana yake beda? (English outline of D. N. Shankara Bhat)](https://vwulf.github.io/ettuge/kannaDa/dnsbhat/08-kannaDakke-mahAprANa-yAke-bEDa/book/en/summary): the reform argument that spoken Kannada does not distinguish aspiration (second-hand).
- [Deccan Herald, "Thanks to K-pop, surge in takers for Korean courses"](https://www.deccanherald.com/india/karnataka/bengaluru/thanks-to-k-pop-surge-in-takers-for-korean-courses-1067943.html): Bengaluru learners and their motives.
- [Bilinguistics, Kannada speech and language development](https://bilinguistics.com/languages/kannada-speech-and-language-development/): retroflex series; no native /f z/.
- Searched without a usable result: studies of Dravidian-speaking learners of Korean.
- Local files: `docs/HALVES-SPEC.md`, `docs/profiles/{hi-ko,mr-ko,te-ko,en-kn}.md`, `docs/briefs/x-ko-{writer,topup}.md`, `tools/halves/native/{tl,zh}/ko/REVIEW.md`, `tools/halves/native/en/ko/` (lessons, decks, groups, labels, practice, bodies), `tools/halves/target/ko/`, `tools/i18n/kn/{NOTES.md,ui.json,roadmap.json}`, `tools/halves/validate.js`.

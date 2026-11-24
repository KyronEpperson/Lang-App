# Brief: write the pair profile for a `<l>` → Korean course

The launching message gives the language code `<l>`, its name, the closest finished profile to model on, and language-specific pointers. The course is a STANDARD course assembled from two halves: the reviewed Korean target half + a native half that four writers and a top-up writer will fill from your profile. Output exactly one new file: `/home/claude/docs/profiles/<l>-ko.md`. Touch nothing else (other agents are working in the repo); scratch files go in a new folder under `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/profile-<l>-ko/`.

Read first: `/home/claude/docs/HALVES-SPEC.md`; the model profile named in the launching message (follow its section structure; reuse only what truly transfers — never copy another language's wording); `/home/claude/docs/briefs/x-ko-writer.md` and `x-ko-topup.md` (what writers need from a profile, and the mistakes earlier halves made); `/home/claude/tools/halves/native/tl/ko/REVIEW.md` and `/home/claude/tools/halves/native/zh/ko/REVIEW.md` (decisions reviews had to settle — settle them up front); the English native half in `/home/claude/tools/halves/native/en/ko/` (`lessons.jsonl`, `decks.jsonl` with all 56 decks, `groups.jsonl`, `labels.jsonl`, and two or three lesson bodies) so the profile fits the real content; the app's existing house style for this language (`/home/claude/docs/profiles/en-<l>.md` if present); and the language's interface dictionary notes `/home/claude/tools/i18n/<l>/NOTES.md` — its glossary, tab names, level titles and register decisions BIND the course: reuse them exactly.

The profile must let writers work without asking questions:
1. Register and address (as the interface dictionary decided); a rule for gendered or person-marked verb forms when the speaker's gender is unknown (neutral rewording first); how to gloss Korean politeness levels — 요-form, -습니다, 반말, -시- — with the language's own respect system, and when a tag is used instead.
2. A closed glossary of fixed terms (grammar terms, names of the Korean speech levels, Hangul terms), consistent with the interface dictionary.
3. A reading guide: each Korean sound described for this speaker with comparisons in the learner's own script (plain / aspirated / tense stops against the language's own stop series; ㅓ, ㅡ, ㅐ/ㅔ; final consonants; ㄹ; linking; no tones or stress), the traps, the romanization letters this reader will misread, and the rule that native-script respellings are comparisons, never readings (unless you decide otherwise and say why). Include a ready-to-paste reading guide for lesson 1.
4. Grammar bridges and traps, each with one example: word order, particles vs the language's own postpositions / prepositions / case, existence vs copula, tense marking, negation, numbers (two systems) and counters, honorifics, kinship address, relative clauses, dropping pronouns.
5. All 33 lesson titles in the language (each keeping exactly the Hangul its English title has) with one or two lines of per-lesson notes; all 56 deck labels and the 6 group names (short, natural, unique: they are permanent progress keys).
6. A fixed-phrase table: greetings, the two goodbyes (saying who leaves), the 수고 family, 잘 부탁드립니다, 잘 먹겠습니다 / 잘 먹었습니다, the 주세요 patterns, 혹시, 저기요, 콜, 대박, 화이팅 and the other phrases that recur across cards, dialogues and lessons — one gloss each.
7. Conventions for glosses and practice prompts: tense and politeness cues so each type-in prompt leads to exactly one accepted answer; how names and places are written; the learner-name token `@@` (lines must work with any name); blanks `___`; local equivalents for Korean things (transit card, messaging app).
8. The course `ui.json` overrides needed: check the interface dictionary — if it was written for Korean, say none are needed.
9. What NOT to do: no Korean added beyond the source row without a waiver, no Latin-script English left in, no invented etymologies or character origins (state one only if certain), hours take native Korean numbers and minutes / money Sino-Korean, KakaoTalk's "1" means not yet read.

Aim for 30–45 KB. Use WebSearch / WebFetch where useful to verify claims about this language or its learners of Korean; mark anything unverified; say plainly that the author is not a native speaker and end with up to 8 questions for a native reviewer. Final report to the lead: 10 lines max — the key decisions and anything unverified.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind.** If you need to see what a finished file looks like, read the ONE this brief names. Not several courses.
- **Search, do not open.** For a single fact in a big file (a field name, a rule, a string), use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job, and do not read a file "for context" that the brief did not ask for.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- If something you truly need is not on your list, read the smallest part that answers it and say in your report which file and why, so the list can be fixed.

Writers and mechanical jobs follow this strictly. Reviewers and researchers may read more widely, but the first two bullets still hold.

# English speakers learning Japanese: course profile

Course `en-ja`: Japanese for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Japanese. Machine-readable twin: `tools/target/ja/profile.json`, written from the same data as §8 and §9, so the two agree. **There is no `respell.js` for this course:** the romaji is typed by hand in a strict format (§6), and the reason is given in §6.4.

(`docs/profiles/ja.md` belongs to the reverse course, English for Japanese speakers. This profile does not use or change it.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named. **(abstract only)** says only the abstract or a summary page was read. **(other L1)** says the learners were not English speakers.
- **[curriculum convention]**: what syllabuses, textbooks and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or app's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Japanese**. Every such claim a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant, voice, register:** Standard (Tokyo) Japanese, `ja-JP` voice. Polite です / ます style from the first sentence. Short (plain) forms are taught actively only in `short` (lesson 20), and casual speech is used only where a prompt says "(casual, to a friend)". "You" is the person's name + さん or nothing at all; あなた appears only in the Traps deck.
- **Biggest traps (§4):** particles (は / が, に / で, を with すき); long vowels and small っ; English word order (verb last in Japanese); polite endings (ませんでした, たかかったです); "you" and さん; い / な adjectives; yes and no to negative questions; katakana false friends.
- **Standing rule (§7):** every set re-tests **(a) particles** and **(b) polite endings**. The `why` lines carry fixed ASCII keywords such as "object particle" and "polite ending"; the keyword test was run on 44 sample lines.
- **Pronunciation aid (§6):** modified Hepburn romaji with macrons, all lowercase, words separated as in Hepburn practice: `watashi wa gakusei desu`, `tōkyō`, `kitte`, `shinbun`, `kin'yōbi`. Pitch is not marked. It is required on every card and example row, typed by hand in a format that `pronPattern` checks. It is hideable and should be blurred from lesson 4 on.
- **Script (§10):** kana first. Three script lessons (`hiragana`, `sounds`, `katakana`) and five letter decks that work as ordinary decks. Kana-only text with spaces between phrases (分かち書き) throughout A1; a closed list of 30 kanji words (one reading each), introduced in `kanji-first` (lesson 13) and never required in an answer.
- **Lessons (§8):** 28. All 27 roadmap items are kept. `sounds` moves before `katakana`, `kanji-first` moves to lesson 13, and `counters` stays in stage 3. One lesson is added: `numbers` (numbers, prices and clock time) as lesson 6.
- **Decks (§9):** 18 decks in 5 groups, including five letter decks, "First kanji", "Casual and polite" and "Traps for English speakers".
- **Engine (§10.7):** tiles and typing both need work before this course is fair to a typing learner. The top three of 15 requests are space-insensitive matching for Japanese, a per-course tiles default, and romaji-to-kana input in the answer box. Each request says what the course does without it, and the authoring rules work with today's engine.

## 2. Variant, register and voice

### 2.1 Variant: Standard (Tokyo) Japanese

- The roadmap names "Standard (Tokyo) Japanese", based on JLPT N5 grammar in Genki I lesson order [curriculum convention]. The build plan keeps it.
- **Voice:** `ttsLang: "ja-JP"`. Every device voice for `ja-JP` speaks the standard (Tokyo-based) variety [inference]. Kansai and other regional forms are not taught and not accepted; a card note may mention a famous one (おおきに, "thanks" in Kyoto and Osaka) at most twice in the whole course.
- **Roadmap items changed by this variant:** none. The changes in §8 come from the learners and the script, not the variant.

### 2.2 Register: polite style from the first lesson

**Taught register: です / ます (polite style, 丁寧語).** [curriculum convention: Genki I lessons 1 to 7 use only です / ます forms. Short forms first appear in lesson 8 ([Genki 3rd edition syllabus](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_syllabus_E.pdf)).] A US adult will first speak Japanese to strangers: staff, hosts, teachers and colleagues. The polite style is safe with all of them, while short forms with a stranger sound rude [practitioner opinion: [JapanChat](https://japanchat.pnyo.jp/magazine/japanese-grammar-mistakes-english-speakers), mistake 7].

**When short (plain) forms appear**

| Stage | What the learner sees | Typed or tiled in practice? |
|---|---|---|
| Lessons 1–19 | Polite style only. Fixed casual phrases appear in card notes only (おはよう next to おはようございます, ありがとう next to ありがとうございます). | No short forms in answers. |
| `short` (lesson 20) | Short forms of verbs, adjectives and nouns in the present (たべる, たべない, たかい, がくせいだ), and casual speech between friends (いく？ うん、いく). Deck "Casual and polite". | Yes, but only when the prompt says "(casual, to a friend)". |
| Lessons 21–28 | Short forms **inside** the structures that need them: …と おもいます, noun modifiers (きのう かった ほん), …つもりです, …ことが あります, …ほうが いいです, …んです, …ので. The sentence still ends politely. | Yes, as part of those structures. A whole casual sentence only with the "(casual)" cue. |

Past short forms (たべた, たべなかった) are introduced in `noun-mod` and `koto-aru`, where they are needed, not in `short`. This follows Genki, which teaches present short forms in lesson 8 and past short forms in lesson 9 [curriculum convention, syllabus above].

**Keigo** (honorific and humble verbs) is not taught. Fixed phrases that contain it are learned as whole phrases and glossed: いらっしゃいませ (shop greeting, recognition only), しつれいします, おねがいします, いただきます.

### 2.3 "You", "he" and "she"

- **Drop the pronoun.** Japanese leaves out "you" when the context is clear, and uses the person's name + さん when it must be said. あなた "has an unfriendly tone" and can make the listener feel looked down on ([Coto Academy](https://cotoacademy.com/common-japanese-mistake-anata/)) [practitioner opinion]. Teaching it as the word for "you" would be a trap, so it appears only in the Traps deck and in one tip in `desu`.
- **さん** goes after someone else's family name or given name (たなかさん, エミリーさん), **never after your own name**. せんせい replaces さん for a teacher (やまだせんせい).
- **"He" and "she":** かれ and かのじょ also mean "boyfriend" and "girlfriend" [inference]. The course uses the name + さん, or あの ひと ("that person"). かれ and かのじょ appear only in the Traps deck.
- **Rules for writers**
  - An English prompt with "you" is answered **without** a subject: "Are you a student?" → がくせいですか (accepted: たなかさんは がくせいですか only if the prompt names Mr. Tanaka).
  - An English prompt with "I" accepts the answer with and without わたしは where both are natural (list both). The model answer `a[0]` leaves わたしは out, except in `desu`, where the topic is the point.
  - "He / she" prompts name the person: "Is Ken a student?" → けんさんは がくせいですか.
  - Dialogue lines between strangers use names + さん. Between friends (only from `short` on) they may use the given name alone.

### 2.4 Honorific basics an A1 learner needs

| Item | What to teach | Lesson |
|---|---|---|
| さん, せんせい | After other people's names; never your own | `desu` |
| お / ご | Learned as part of fixed words, not as a rule: おなまえ, おしごと, おくに, ごかぞく, おちゃ, ごはん, おかね. A tip says that お / ご make a word polite and that you do not add them to your own things (わたしの なまえ, not わたしの おなまえ). | `desu`, `no-mo` |
| My family vs your family | はは / ちち / あに / あね about your own family; おかあさん / おとうさん / おにいさん / おねえさん about someone else's family, and when calling your own family members | `no-mo` |
| ください, おねがいします | Thing + を ください; thing + おねがいします (a little softer); verb て + ください | `kosoado`, `te-requests` |
| すみません | "Excuse me" (to get attention), "sorry", and "thank you for the trouble" | `desu`, deck "Greetings and introductions" |
| いただきます, ごちそうさまでした | Before and after eating | deck "Food and drink" |
| ちょっと… | The polite way to say no: trail off | `invite` |

### 2.5 Greetings

- こんにちは and こんばんは are spelled with は and said "wa": they are taught in `hiragana` as the first example of the particle spelling.
- おはようございます is the polite morning greeting; おはよう is casual (note only until `short`).
- さようなら is a real word but sounds final; people who will meet again say じゃあ、また or しつれいします at work [inference]. Card notes say so.
- `greet` in `profile.json`: おやすみなさい ("Good night"), おはようございます, こんにちは, こんばんは. おやすみなさい is said when someone goes to bed, so its gloss says so (§11).

### 2.6 Voice of the English text

- Plain, friendly US English with US spelling, as in en-es and en-vi. A `why` is one sentence.
- **Japanese inside English text:** in lesson bodies, put it in `<b>`. In plain-text fields (`why`, `hint`, notes) write it bare. Write it in the course's own script for that word (kana, or one of the 30 kanji words of §10.3 after `kanji-first`), never in romaji, except in the three script lessons (§6.6).
- Name grammar with the §3 terms, always the same way: "the object particle を", "the polite ending ませんでした".
- Sample voice lines:
  1. "は is the topic particle: it says what you are talking about, like 'as for me…'."
  2. "Japanese puts the verb last: すしを たべます is 'sushi (object) eat'."
  3. "Nice work! Review these cards tomorrow so they stick."

### 2.7 Japanese text conventions (every file)

- **Script:** hiragana for Japanese words, katakana for loanwords and foreign names (エミリー, アメリカ, コーヒー), and kanji only from the closed list in §10.3 and only where §10.3 allows them.
- **Spacing (分かち書き):** all Japanese in the course (card targets, example rows, dialogue lines, practice items) puts **one half-width space after each phrase**: a content word together with the particles, です, ます endings and か attached to it. Examples: わたしは がくせいです。 / これは なんですか。 / あした ともだちと きょうとに いきます。 / コーヒーを ください。 The full rule and the reason are in §10.4.
- **Punctuation:** full-width 。、？. **Card targets** never carry 。 or 、 (§9, §10.5); everywhere else a statement ends with 。; a question that ends in か ends with か。 (or か？ in casual dialogue lines); a casual question without か ends with ？. No space next to 。、？. No 「」 in practice items. The matcher strips 。、！？ and 「」 anyway.
- **Numbers** are written in kana in targets, examples and answers (さんびゃくえん, にじ), so that the voice, the romaji and the matcher all see the same thing. Digits may appear in English prompts and notes ("¥300").
- **Unicode:** NFC; the long-vowel mark is ー (U+30FC), never a dash; macrons in the romaji are precomposed (ā ī ū ē ō).

## 3. Glossary

These terms are [curriculum convention] in English-language Japanese courses: ru-verb / u-verb and い-adjective / な-adjective are Genki's terms ([Genki syllabus](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_syllabus_E.pdf) names "verb types", "て-form", "short forms"; the exact group names are from the author's knowledge of Genki, §11). Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| hiragana; katakana; kana (both); kanji | syllabary, characters (for kana) | "letter" is fine for one kana in script lessons |
| romaji | romanization, transliteration | the `pron` line |
| sound marks (゛ two dots, ゜ circle) | dakuten, handakuten, diacritics | Japanese names once, as a gloss, in `hiragana` |
| small letters (ゃ ゅ ょ; small っ) | yōon, sokuon, contracted sounds | "small っ" doubles the next consonant: "a short pause" |
| long vowel; long-vowel mark (ー) | chōonpu | |
| beat | mora | "mora" once, as a gloss, in `sounds`: きって has three beats |
| pitch (high and low) | tone, stress, accent | Japanese pitch is not English stress; mentioned in `sounds`, never graded |
| **topic particle** は | "subject marker" for は | **standing-rule keyword** |
| **subject particle** が | | keyword |
| **object particle** を | accusative | keyword |
| **destination particle** に / へ ("to") | | keyword; へ is also "direction particle" (keyword) |
| **time particle** に ("at" a clock time or day) | | keyword |
| **location particle** に (where something is, with あります / います) | | keyword |
| **place-of-action particle** で (where something happens) | | keyword; "means particle" で (by bus, in Japanese) is also a keyword |
| **linking particle** の (my, of, 's) | possessive marker, genitive | keyword |
| **also particle** も | | keyword |
| question particle か; sentence-ending particles ね, よ | | **not** keywords |
| polite style (です / ます) | formal, keigo | |
| **polite ending** (ます / ません / ました / ませんでした / ましょう / ませんか; です / でした / じゃないです / じゃなかったです; たかくないです / たかかったです) | conjugation (alone), suffix | **standing-rule keyword** "polite ending" |
| ます form (the verb with its polite ending) | masu-stem as a term | not a keyword; "stem" once in `masu` |
| dictionary form | plain form, base form | from `short` |
| short form (たべる, たべない, たべた) | plain form, casual form | Genki's term; "plain form" once, as a gloss |
| て form | gerund, conjunctive | |
| ru-verb; u-verb; irregular verb (する, くる) | ichidan, godan, group 1 / 2 | |
| い-adjective; な-adjective | adjectival noun, quasi-adjective | |
| です ("is / am / are", the polite "be") | copula | "copula" never |
| this / that words (これ, それ, あれ, どれ; この…; ここ…) | demonstratives, ko-so-a-do | "ko-so-a-do" once in `kosoado` |
| question word (なに, どこ, だれ, いつ, いくら) | interrogative | |
| counter (ひとつ, にまい, さんぼん) | classifier, measure word | |
| describing clause (きのう かった ほん) | relative clause | `noun-mod` |
| honorific prefix お / ご | | |
| loanword | gairaigo | |
| false friend | false cognate | katakana words that mean something else (マンション) |
| calque ("word-for-word copy from English") | | gloss at first use |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with learner data from English speakers come first.
2. Then items that occur in nearly every sentence and can be checked in typed or tiled practice.
3. Then lexical and lesson-local traps.

Error research on English-speaking learners of Japanese is scattered. The opened studies are on particles (abstracts only), vowel length, geminates and pitch. A corpus count of particle errors was found only for Slovene learners (§11).

1. **Particles**
   - Wrong → right:
     - レストランに たべます → レストランで たべます (where an action happens is で)
     - がっこうで います → がっこうに います (where someone *is* is に)
     - すしを すきです → すしが すきです (すき takes が)
     - わたしが エミリーです (as a self-introduction) → わたしは エミリーです
     - にほんごが はなします → にほんごを はなします
     - わたしはも がくせいです → わたしも がくせいです (も replaces は)
     - Particle left out: とうきょう いきます → とうきょうに いきます
   - [research-backed (abstract only)] Woods (2021), an ANU PhD thesis, tested 134 English-speaking learners from beginner to upper-advanced against 36 native speakers. The gap in choosing は or が came mainly from learners' weaker use of discourse information, and even upper-advanced learners still differed from native speakers ([ANU record](https://openresearch-repository.anu.edu.au/items/bf43bce4-cdba-4e51-89fc-09df977b6d3f)).
   - [research-backed (abstract only)] Noji (2014), a speaking-corpus study of Korean, English and Chinese learners, found high overall accuracy with nominative が. English-speaking learners, however, overgeneralised が to objects that take を ([*Second Language* 13](https://www.jstage.jst.go.jp/article/secondlanguage/13/0/13_39/_article/-char/en)).
   - [research-backed (abstract only)] Kanno (1997): English-speaking adults knew that the object particle may be dropped in speech but the subject particle may not ([*Cognitive Studies* 4(1)](https://www.jstage.jst.go.jp/article/jcss/4/1/4_1_1_9/_article/-char/en)). So a dropped particle is not always wrong in speech. §7 says when a particle-less answer must be listed.
   - [research-backed, other L1] Pavlovič (2020) analysed 142 beginner compositions by Slovene learners. Case particles were the largest error category (129 errors, 26.2%). が errors usually came from confusion with は, and で and に were often confused ([*Acta Linguistica Asiatica* 10(1)](https://dlib.si/stream/URN:NBN:SI:DOC-SLLUK0NF/06c11fe2-0eab-45ec-9117-7287eb1d973f/TEXT)). Slovene, like English, has prepositions and no topic marker, which is the transfer this profile assumes [inference].
   - [practitioner opinion] Anzai (1985, ANU sub-thesis, abstract) calls は / が "one of the hardest problems" for English speakers ([ANU record](https://openresearch-repository.anu.edu.au/items/678bdb14-04a1-49c1-85a6-64644b45c690)). JapanChat's list of English speakers' mistakes starts with は / が, に / で and dropped particles.
   - Design consequence: strand (a) of the standing rule (§7). Particles are separate tiles in order items (§10.5), so the learner must put each one **after** its noun.

2. **Long vowels and small っ (double consonants)**
   - Wrong → right:
     - おばさん (aunt) said or typed for おばあさん (grandmother)
     - きて (come) for きって (stamp)
     - ビル (building) for ビール (beer)
     - とうきょ → とうきょう; コーヒ → コーヒー
     - Reading the romaji *tsuukin* with a short u
   - [research-backed] Knight (2013), a University of Georgia dissertation, studied 34 American learners in years one to four. Vowel errors were most frequent in minimal pairs that differ only in vowel length, mostly long vowels shortened and short ones lengthened. Words presented in romaji gave 58% of the reading-aloud errors and an 8.0% error rate, against 5.4% for words in kana; first-year learners were worst. Loanwords with long vowels had the highest error rate of all categories, 11.1% ([dissertation PDF](https://getd.libs.uga.edu/pdfs/knight_kenneth_j_201312_phd.pdf)). The excerpt reporting significance was unclear (§11).
   - [research-backed (abstract only)] Hardison & Saigo (2010) tested 85 English-speaking learners at three levels on geminates. The /t/ and /k/ single-double contrast was hard for beginners and no longer a problem at advanced level; geminate /s/ before /u/ stayed hard at every level ([*Applied Psycholinguistics* 31(1)](https://www.cambridge.org/core/journals/applied-psycholinguistics/article/abs/development-of-perception-of-second-language-japanese-geminates-role-of-duration-sonority-and-segmentation-strategy/4283B936B72F84BB50378207083893A5)).
   - [research-backed (abstract only)] Hirata et al. (2006) trained English speakers to hear vowel length with fast sentences; the trained group improved only on slow speech ([Interspeech 2006](https://www.isca-archive.org/interspeech_2006/hirata06_interspeech.html)).
   - Design consequence: the `sounds` lesson, the Hiragana 3 deck, macrons in the romaji (§6), and long-vowel and っ minimal pairs as `mc` and `fi` distractors in every lesson where they occur.

3. **English word order: the verb comes last**
   - Wrong → right:
     - たべます すしを → すしを たべます
     - いきます とうきょうに → とうきょうに いきます
     - なにを たべますか: the question word stays where the answer goes (not moved to the front as in English: なにを わたしは…)
     - に とうきょう (a "preposition" before the noun) → とうきょうに
   - [practitioner opinion] JapanChat, mistake 4: "Learners often put the verb too early in long sentences."
   - [research-backed, other L1] Pavlovič (2020) lists word-position errors as a small category (no count given in the summary read).
   - Design consequence: order items in every set (TARGET-BRIEF's 3 per set); particles as separate tiles; verb-last is taught in `masu` and used in every later set, but it is not a standing-rule strand (§7 says why).

4. **Polite endings: tense, negative and adjective forms**
   - Wrong → right:
     - たべませんでしたか / たべましたじゃない → たべませんでした (did not eat)
     - たかいでした → たかかったです (was expensive)
     - たかいじゃないです → たかくないです (is not expensive)
     - きれいくないです → きれいじゃないです (きれい is a な-adjective)
     - たべますです → たべます
     - がくせいでしたじゃない → がくせいじゃなかったです
   - [inference] No study was opened. These are the standard errors that Genki's lesson 4 (past tense of です and verbs) and lesson 5 (adjective tenses) teach against [curriculum convention: syllabus].
   - Design consequence: strand (b) of the standing rule (§7).

5. **"You", "I" and さん**
   - Wrong → right:
     - あなたは がくせいですか → がくせいですか / たなかさんは がくせいですか
     - わたしは スミスさんです → わたしは スミスです
     - わたしは in every sentence → leave it out once the topic is clear (JapanChat, mistake 6)
     - かれ for a colleague → たなかさん / あの ひと
   - [practitioner opinion] Coto Academy on あなた; JapanChat on pronoun overuse.

6. **い-adjectives and な-adjectives**
   - Wrong → right:
     - きれい へや → きれいな へや
     - たかいな ほん → たかい ほん
     - ゆうめいくない → ゆうめいじゃない
     - いいかったです → よかったです (いい is irregular)
   - [curriculum convention] Genki lesson 5 teaches present, past and noun-modifying forms of both types together.

7. **Yes, no, and saying no politely**
   - Wrong → right:
     - "Don't you eat meat?" にく、たべませんか。— "No (I don't)." いいえ、たべません → はい、たべません (はい agrees with the question as asked)
     - いきませんか (Won't you come?) — いいえ (bare) → すみません、ちょっと… (polite refusal)
     - いいです to refuse an offer is ambiguous → けっこうです / だいじょうぶです
   - [inference] Standard teaching points; no source opened. In the Traps deck and the native-check list.

8. **Katakana words: sound and meaning**
   - Wrong → right:
     - マンション for "mansion" → it means an apartment or condo
     - スマート for "smart" → slim, stylish
     - バイキング → an all-you-can-eat buffet
     - コンセント → an electrical outlet
     - クレーム → a complaint
     - バイク → a motorbike
     - マクドナルド said "McDonald's" → said with Japanese beats: ma-ku-do-na-ru-do
   - [practitioner opinion] [LingoDeer's list of 20 false friends](https://blog.lingodeer.com/20-japanese-english-false-friends-you-need-to-know/).
   - [research-backed] Knight (2013): loanwords with long vowels had the highest vowel-error rate (item 2).

9. **Numbers and counting**
   - Wrong → right:
     - じゅうせん (ten thousand, counted the English way) → いちまん
     - さんひゃく → さんびゃく; ろくひゃく → ろっぴゃく; はちひゃく → はっぴゃく; さんせん → さんぜん
     - しじ (4 o'clock) → よじ; きゅうじ → くじ
     - りんご ふたつを ください → りんごを ふたつ ください (the number comes after the particle)
     - さんほん → さんぼん; いちほん → いっぽん
   - [inference] Standard teaching points (Genki lesson 1 numbers and time, lesson 5 counting, per the syllabus); no learner data.

10. **Reading kana as English letters**
    - Wrong → right (said): え read "ee" → "eh"; い read "eye" → "ee"; ラーメン read "ray-men" → "rah-men"; さ / ち, ぬ / め, わ / れ / ね, シ / ツ, ソ / ン confused in reading.
    - [research-backed] Knight (2013): romaji spellings such as "ii" and "ei" caused vowel errors in reading aloud.
    - [inference] The look-alike pairs are standard; no count opened.

11. **"And" between verbs and sentences**
    - Wrong → right: たべます と のみます → たべて、のみます; さむいです と あめです → さむくて、あめです
    - [practitioner opinion] JapanChat, mistake 5. Taught in `te`.

12. **Register mix-ups**
    - Wrong → right: いく？ to a shop clerk → いきますか; はは for a friend's mother → おかあさん; ありがとう to a teacher → ありがとうございます
    - [practitioner opinion] JapanChat, mistake 7.

13. **Pitch: English stress on Japanese words**
    - Wrong → right (said): はし with English stress on the first syllable for every meaning; あめ (rain, falling pitch) and あめ (candy, rising) said the same.
    - [research-backed] Shport studied 16 American third-year learners at the University of Oregon. They were at chance in production (56%) and perception (46%) and "tended to produce all words as accented". She concludes that pitch is not acquired "from input only, without explicit instructions", and notes that textbooks mostly leave it unmarked ([DIJ volume](https://www.dijtokyo.org/wp-content/uploads/2016/09/165-187_ACQUISITION-OF-JAPANESE-PITCH-ACCENT-BY-AMERICAN-LEARNERS_43-Heinrich_Sugita-11.pdf)).
    - [research-backed] Laméris & Graham compared 8 advanced English-speaking learners with 8 native speakers. Perception was native-like, production was not (about 59% vs 84%) ([PDF](https://core.ac.uk/download/334953769.pdf)).
    - [practitioner opinion] Schaefer & Darcy (2020) argue that pitch has an "intelligibility load" larger than its 14% share of minimal pairs suggests, and that explicit instruction with feedback helps ([NCOLCTL journal](https://psycholinguistics.indiana.edu/papers/SchaeferDarcy(2020)fried-persimmons-and-dried-oystersNCOLCTL.pdf)).
    - Design consequence: taught as listening awareness in `sounds` with three minimal pairs; not in the romaji and never graded (§6.3).

## 5. Learners: who, why, what first

**Who**
- [research-backed] The Japan Foundation's 2021 survey counted **161,402 learners of Japanese in the US** at 1,241 institutions, the seventh-largest number in the world: 19,163 in primary school, 71,440 in secondary school, about 60,200 in higher education and about 10,600 outside schools. Higher education fell 11.8%, attributed to COVID-19 and to dropped language requirements ([Japan Foundation, *Survey 2021: North America*](https://www.jpf.go.jp/e/project/japanese/survey/result/dl/survey2021/5_North_America.pdf)). App and self-study learners are not counted in these figures.
- [curriculum convention] Duolingo reports Japanese as its fifth most-studied language worldwide, "steady in fifth place since 2021" ([2024 Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)). No US rank was given.
- [inference] The groups, probably in this order of size: **pop-culture fans** (anime, manga, games, music), many of them teenagers and young adults who already know dozens of words (かわいい, すごい, せんぱい) and the sound of casual speech; **travellers** to Japan; **students** in high school or college classes who use the app beside a textbook, usually Genki; **people who work with Japanese companies or colleagues**; and **heritage learners and partners of Japanese speakers**. Almost all are true beginners in the script.

**Why they study**
- [research-backed] In North America, the top three reasons institutions gave for their learners were interest in anime, manga, J-POP and fashion (92.1%), interest in the Japanese language (82.2%) and interest in Japanese culture (81.9%) (Japan Foundation 2021, same source). No US-only figure was given.

**What they need first** [inference]
1. **Kana.** Nothing can be read without them, and romaji makes vowel errors worse (§4.2). Genki teaches hiragana in lesson 1 and katakana in lesson 2, and stops giving romaji after lesson 2 ([Genki 3rd edition, *A look at GENKI*](https://genki3.japantimes.co.jp/en/intro/)) [curriculum convention]. So three script lessons come first.
2. **Introducing yourself and being polite:** はじめまして, なまえ, ～じん, よろしく おねがいします, すみません, ありがとうございます. Fans who learned casual Japanese from anime need the polite style first, so the course starts there (§2.2).
3. **Numbers, prices and the time.** Travellers pay in yen from day one, and Genki puts numbers and time in lesson 1 and prices in lesson 2 [curriculum convention: syllabus]. The roadmap has numbers only in `counters` (stage 3), so `numbers` is added as lesson 6 (§8).
4. **Ordering and asking:** ～を ください, ～は どこですか, いくらですか, ～ませんか.
5. **Particles and the verb at the end**, practised in every set (§7).
6. **Not much grammar vocabulary.** The glossary (§3) is kept short, and each term is explained in plain English the first time.

**Check of the roadmap against Genki I** [curriculum convention: the syllabus PDF]
- Genki I lessons 1–12: 1 X は Y です, の, numbers, time; 2 これ / それ / あれ, この…, ここ…, だれの, も, じゃないです; 3 verbs and present tense, particles, ～ませんか, the topic particle; 4 あります / います, location words, past of です and verbs, も; 5 adjectives, すき / きらい, ～ましょう, counting; 6 て form, てください, てもいいです, てはいけません, から; 7 ている, describing people, verb stem + に いく, counting people; 8 short forms, と おもいます, と いっていました, ないでください, のが すき, が; 9 past short forms, describing nouns with verbs, もう / まだ; 10 comparing, つもり, なる, で for transport; 11 たい, たり, ことが ある; 12 んです, すぎる, ほうが いい, ので, なければ いけません.
- The roadmap follows this order closely. The changes in §8 are: the script order (`sounds` before `katakana`), `numbers` added early, `kanji-first` later (lesson 13), and `invite` linked to the Traps deck.

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [research-backed] Knight (2013, 34 American learners): words shown in romaji caused 58% of the reading-aloud vowel errors, with an error rate of 8.0% against 5.4% for words in kana, and first-year learners were worst. The dissertation also cites Okuyama (2007) and Hatasa (2002), who found no benefit of romaji for retention (second-hand, §11). So the aid is a crutch for the first weeks, and it is hidden after that.
- [curriculum convention] Genki gives romanized readings only in lessons 1 and 2, then stops ([Genki 3rd edition intro](https://genki3.japantimes.co.jp/en/intro/)).
- [curriculum convention] Modified Hepburn is "the most common form today", used by the Library of Congress (since 1989) and by Japanese road signs. Long vowels inside one morpheme take macrons (Tōkyō), long vowels written with ー take macrons too (takushī), は へ を are written wa e o, ん is n' before a vowel or y and n (not m) before b, m, p, and っ doubles the next consonant, with っち written tch ([Wikipedia, *Hepburn romanization*, IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Hepburn_romanization)).
- [practitioner opinion] Macrons are "a common scheme used in Japanese textbooks for English-speaking learners and on Wikipedia"; wāpuro (toukyou) follows the kana spelling and is popular online; doubling (tookyoo) is rare ([Nayuki, *Variations on Japanese romanization*](https://nayuki.io/page/variations-on-japanese-romanization)).

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) Modified Hepburn with macrons (tōkyō, obāsan, kōhī) | The system of place names, dictionaries and most English-language textbooks. A macron shows a long vowel as one marked letter, so it is hard to miss (§4.2). ō does not invite the English "ow" that *ou* does. | Writers must decide ō vs ou at a verb ending (omou). Macrons are not on a US keyboard, but nobody types the aid. |
| (b) Wāpuro (toukyou, obaasan, ko-hi-) | Mirrors the kana spelling and IME keystrokes one to one; a reverse check would be trivial. | *ou* and *ei* mislead English readers; Knight's learners misread doubled-vowel romaji (*tsuukin*, *oishii*). |
| (c) Doubled vowels (tookyoo, sensee) | Shows length in ASCII. | Different from both kana and every place name the learner already knows; rare. |
| (d) No aid, kana only | What Japanese teachers prefer after lesson 2 (Knight, citing teachers in Japan; Genki). | A learner on day one cannot read a card, and the deck quiz needs something to show before kana are learned. |

**Decision: (a), required on every card and example row, shown in stage 1 and blurred from lesson 4 (`desu`) on.** `pron: "required"`.
- **Hideable: yes.** Recommended engine default: shown in the three script lessons and their decks; blurred (tap to reveal) from `desu` on; the learner can switch it back on. Never in practice items (PRACTICE-SPEC), except as the English sound label in script-lesson prompts (§6.6).
- **Pitch is not marked.** Reasons: (1) no notation is both readable for beginners and checkable by a regex; (2) the accent of each word would need a dictionary source (NHK or OJAD) that was not opened, and writers could not supply it reliably; (3) the voice already carries pitch on every card; (4) Shport found that textbooks leave pitch unmarked, and that learners need explicit training, not marks, to learn it. `sounds` teaches pitch by ear with three minimal pairs (はし, あめ, かみ), and card notes may say "listen for the pitch" on those words. A native check is asked for in §11.
- **Not generated: typed by hand.** Japanese romaji cannot be generated reliably from the course's text without a full word list and grammar (§6.4). Writers type it in the exact format below; `pronPattern` rejects most format errors, the validator's existing check makes the same Japanese string carry the same `pron` everywhere, and §6.5 gives the lead a romaji-to-kana consistency check to add.

### 6.1 The key (exact format)

**Characters and layout**
- Lowercase ASCII letters, the five precomposed macron vowels **ā ī ū ē ō**, the apostrophe only in **n'**, a hyphen only before **san, sama, kun, chan**, and single spaces between words. Nothing else: no capitals (names too: `tanaka-san`, `tōkyō`), no punctuation, no digits.
- **One romaji word per Japanese word**, by the word rules below. The spaces in the romaji are finer than the phrase spaces in the Japanese (§2.7): particles and です stand alone in the romaji.

**Syllables** (modified Hepburn): あ a, い i, う u, え e, お o; し **shi**, ち **chi**, つ **tsu**, ふ **fu**, じ and ぢ **ji**, ず and づ **zu**; きゃ kya, しゃ sha, ちゃ cha, じゃ ja, にゃ nya, ひゃ hya, みゃ mya, りゃ rya, ぎゃ gya, びゃ bya, ぴゃ pya (and the -u, -o forms). Loanword sounds: ティ ti, ディ di, ファ fa, フィ fi, フェ fe, フォ fo, ウィ wi, ウェ we, シェ she, チェ che, ジェ je. Never si, zi, ti for ち, tu, hu, wo, ye, l, v, c alone.

**Particles:** は → **wa**, へ → **e**, を → **o**, written as separate words: `watashi wa`, `eki e`, `sushi o`. In the greetings こんにちは and こんばんは the は is part of the word: `konnichiwa`, `konbanwa`. On a letter card, は alone is `ha` and へ alone is `he` (the letter's own sound).

**Long vowels**
| Kana | Romaji | Example |
|---|---|---|
| ああ, かあ… | ā | おかあさん `okāsan`, じゃあ `jā` |
| いい | **ii** (never ī in hiragana) | おいしい `oishii`, おにいさん `oniisan` |
| うう, ゆう, くう… | ū | じゅう `jū`, ゆうめい `yūmei`, くうこう `kūkō` |
| ええ | ē | おねえさん `onēsan`, ええ `ē` |
| えい | **ei** (as spelled) | せんせい `sensei`, えいご `eigo`, きれい `kirei` |
| おう, おお | ō | とうきょう `tōkyō`, おおきい `ōkii`, ありがとう `arigatō` |
| Katakana + ー | the vowel with a macron (ī and ē too) | コーヒー `kōhī`, ケーキ `kēki`, ビール `bīru`, スーパー `sūpā` |
| う at the end of a verb after お or う (separate morphemes) | **ou**, **uu** | おもう `omou`, いう `iu`, すう `suu` (only from `short` on) |

The pattern rejects aa, ee, oo anywhere and ou / uu inside a word (`toukyou`, `tsuukin`); ou and uu are allowed only at the end of a word, and in ううん `uun` (casual "no"). Modified Hepburn writes ii for いい and ei for えい always, ē only for ええ inside one word, and doubled vowels across a word boundary ([IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Hepburn_romanization): Niigata, seifuku, onē-san, nureen). This course bans the doubled aa / ee / oo and mid-word ou / uu to catch wāpuro spellings, so words that need them (みずうみ `mizuumi`, the name いのうえ `inoue`) are not used.

**Small っ:** double the next consonant: きって `kitte`, ざっし `zasshi`, がっこう `gakkō`, ろっぴゃく `roppyaku`; before ち write **tch**: まっちゃ `matcha`, いっち `itchi`. Never at the end of a word (avoid あっ in targets).

**ん:** always **n**, also before b, m, p (しんぶん `shinbun`, せんぱい `senpai`, さんまい `sanmai`); **n'** before a vowel or y (きんようび `kin'yōbi`, ほんや `hon'ya`, せんえん `sen'en`, てんいん `ten'in`). `sounds` tells the learner that ん before b, m, p sounds like m.

**Word rules** (where the spaces go)
1. **Particles are separate words:** wa, ga, o, ni, de, e, no, mo, to, ya, ka, ne, yo, kara, made, yori.
2. **です and its forms are separate:** `desu`, `deshita`, `janai desu`, `janakatta desu`; `da` (from `short`).
3. **A verb is one word with its ending:** `tabemasu`, `tabemasen`, `tabemashita`, `tabemashō`, `tabetai`, `taberu`, `tabenai`, `tabeta`, `tabete`. ませんでした is two words: `tabemasen deshita`. ませんか: `tabemasen ka`.
4. **Words after a て form are separate:** `tabete kudasai`, `tabete imasu`, `tabete mo ii desu ka`, `tabete wa ikemasen`. Also `tabenakereba ikemasen`, `itta hō ga ii desu`, `tabeta koto ga arimasu`, `taberu tsumori desu`, `taberu n desu` (ん is its own word), `node`, `to omoimasu`, `to itte imashita`.
5. **An adjective is one word with its ending:** `takai`, `takakunai`, `takakatta`, `yokunai`; な is a separate word: `kirei na heya`, `kirei janai desu`.
6. **Nouns:** one word with suffixes and prefixes: `nihongo`, `amerikajin`, `daigakusei`, `ocha`, `gohan`, `onamae`; a number with its counter or unit: `hitotsu`, `sanbon`, `nimai`, `sanji`, `jūjihan`, `hyakuen`, `sen'en`, `ichiman'en`. する verbs: `benkyō shimasu`.
7. **Names:** given or family name + hyphen + honorific: `tanaka-san`, `emirī-san`, `yamada-sensei` is NOT allowed (sensei is a separate word: `yamada sensei`).
8. **Fixed phrases** (copy exactly): `konnichiwa`, `konbanwa`, `ohayō gozaimasu`, `ohayō`, `arigatō gozaimasu`, `arigatō`, `sumimasen`, `hajimemashite`, `yoroshiku onegaishimasu`, `onegaishimasu`, `itadakimasu`, `gochisōsama deshita`, `oyasuminasai`, `sayōnara`, `jā mata ne`, `irasshaimase`, `shitsurei shimasu`, `dōzo`, `dōmo`, `daijōbu desu`, `kekkō desu`.

### 6.2 `pronPattern`

Built from a list of every allowed syllable (338 of them, including the っ-doubled forms), plus moraic n with lookaheads, an optional honorific suffix, and two global bans. Shape:

```
^(?!.*(?:aa|ee|oo|[ou]u(?!n(?: |$))[a-zāīūēō']))WORD(?: WORD)*$
WORD = (?:SYLLABLE|n(?![aiueoāīūēōy'])|n'(?=[aiueoāīūēōy]))+(?:-(?:san|sama|kun|chan))?
```

The full pattern (2,645 characters) is in `profile.json`. It uses only literal characters, so it compiles the same **with or without** the `u` flag (both were tested; `repron.js` compiles without it).

What it enforces:
- Hepburn syllables only: no si, zi, tu, hu, wo, ye, no l, q, v, x, no c outside ch / tch;
- moraic n written n before a consonant (never m: `shimbun` fails) and n' before a vowel or y (`kinyōbi` passes the pattern but fails the §6.5 check, because it reads as きにょうび);
- macron long vowels: aa, ee, oo fail everywhere; ou and uu fail inside a word, except before a final n (ううん `uun`);
- lowercase, no punctuation, single spaces, hyphen only before san / sama / kun / chan.

What it cannot catch (the §6.5 check and the native reviewer must): wa vs ha and e vs he for particles (`watashi ha` passes); ō vs ou at a verb ending; ē for えい (`sensē` passes the pattern; §6.5 catches it); word spacing choices (`konnichi wa`, `tanaka san` pass); a romaji that is a real but different word.

### 6.3 Twenty worked examples (all pass `pronPattern` and the §6.5 check)

| # | Japanese | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | わたしは がくせいです。 | `watashi wa gakusei desu` | I'm a student. | は = wa, a separate word; えい = ei; です separate |
| 2 | こんにちは。 | `konnichiwa` | Hello. | fixed phrase; は inside it = wa |
| 3 | とうきょう | `tōkyō` | Tokyo | おう = ō (twice) |
| 4 | おばあさん | `obāsan` | grandmother | ああ = ā (おばさん `obasan` is aunt) |
| 5 | きって | `kitte` | postage stamp | small っ doubles the t |
| 6 | まっちゃ | `matcha` | matcha (green tea) | っち = tch |
| 7 | しんぶん | `shinbun` | newspaper | ん before b = n, not m |
| 8 | きんようび | `kin'yōbi` | Friday | n' before y |
| 9 | コーヒーを ください。 | `kōhī o kudasai` | Coffee, please. | ー = macron (ī in katakana); を = o |
| 10 | えきへ いきます。 | `eki e ikimasu` | I'm going to the station. | へ = e |
| 11 | がっこうに いきませんでした。 | `gakkō ni ikimasen deshita` | I didn't go to school. | っこう = kkō; ませんでした = two words |
| 12 | たなかさん | `tanaka-san` | Mr. / Ms. Tanaka | lowercase name, hyphen before san |
| 13 | せんせい | `sensei` | teacher | えい = ei, not ē |
| 14 | おいしいです。 | `oishii desu` | It's delicious. | いい = ii |
| 15 | いくらですか。 | `ikura desu ka` | How much is it? | か separate; no punctuation |
| 16 | せんえん | `sen'en` | 1,000 yen | n' before a vowel; number + unit one word |
| 17 | じゅうじはん | `jūjihan` | 10:30 | じゅう = jū; time is one word |
| 18 | パーティー | `pātī` | party | ティ = ti; ー on both vowels |
| 19 | ありがとうございます。 | `arigatō gozaimasu` | Thank you. | fixed phrase |
| 20 | すしを たべて ください。 | `sushi o tabete kudasai` | Please eat the sushi. | て form + ください, separate words |

Both the pattern and the reverse check were also run on the 90 sample cards in §9 and on ten extra rule cases (`omou`, `hokkaidō`, `kyūji`, `roppyaku`, `hon'ya`, `jeison`, `konbanwa`, `itte imashita`, `tabeta n desu`, `uun`): 120 of 120 pass. Negative tests: the pattern rejects `Tōkyō`, `toukyou`, `tookyoo`, `tsuukin`, `shimbun`, `sushi wo`, `si`, `hu`, `tu`, `zi`, `ye`, `obaasan`, `raamen`, `kin-yōbi`, `oishii desu.` and kana; the reverse check rejects `gakusē`, `obasan` for おばあさん, `kite` for きって, `tokyo`, `kohi` and `honya` for ほんや.

### 6.4 Why there is no generator

A generator would take the card's Japanese and print the romaji. A naive kana-to-Hepburn converter was run on test strings (scratch test, 2026-11-19):

| Input | Naive output | Should be | Why it cannot be fixed by a spelling rule |
|---|---|---|---|
| こんにちは | konnichiha | konnichiwa | は is wa only as a particle or in two set phrases |
| わたしはがくせいです | watashihagakuseidesu | watashi wa gakusei desu | word boundaries need a word list |
| はなは | hanaha | hana wa | first は is ha, second is wa |
| わたしはなにを | watashihananio | watashi wa nani o | はな (flower) is also a word: needs a parse |
| えきへいきます | ekiheikimasu | eki e ikimasu | へ as particle vs he in a word |
| おもう / とうきょう | omō / tōkyō | omou / tōkyō | おう is ou across a morpheme boundary only |
| きんようび, ほんや | kinyōbi, honya | kin'yōbi, hon'ya | fixable by rule (the only fixable row) |

The phrase spaces of §2.7 would help (a は at the end of a phrase is almost always the particle), but splitting がくせいです into `gakusei desu`, えいがを into `eiga o` (not `ei ga o`), and inflected verbs into `tabemasen deshita` still needs a lexicon of every content word and a grammar of endings: in effect a small morphological analyser. Its errors would be copied into every row by `repron.js` and would look authoritative. Hand-typed romaji, checked by the pattern and by §6.5, is safer. **So `tools/target/ja/respell.js` is not written, and the lead must not run `repron.js ja`** (it `require`s `respell.js`).

### 6.5 Pipeline request: the romaji-to-kana consistency check

For every card and example row, the validator should check that the romaji spells the Japanese. Algorithm (prototyped in the scratchpad and run on all 120 rows above with no false alarms):
1. **Fold the Japanese:** replace each kanji word by its reading from the closed word list of §10.3 (each word there has exactly one reading), convert katakana to hiragana (U+30A1–U+30F6 minus 0x60), keep ー, and remove spaces and 。、？！「」.
2. **Turn the romaji into a regular expression over hiragana:**
   - a whole word `wa` → `[わは]`, `e` → `[えへ]`, `o` → `[おを]`; remove the hyphen before san / sama / kun / chan;
   - `n'` → ん; `n` not followed by a vowel or y → ん;
   - a doubled consonant (or `tch`) → っ + the syllable;
   - each syllable → its kana (shi し, chi ち, tsu つ, fu ふ, kya きゃ, ti てぃ, fa ふぁ, je じぇ …), with じ → `[じぢ]`, ず → `[ずづ]`, and わ → `[わは]` (for こんにちは);
   - a macron vowel → the short syllable + `[あー]`, `[いー]`, `[うー]`, `[えー]` or `[うおー]` for ā ī ū ē ō.
3. **Match** the regex against the folded Japanese, anchored at both ends; report rows that fail.

It catches wrong length (`obasan` for おばあさん), a missing っ, ē for えい, `kinyōbi`, and any typo that changes a kana. It cannot catch wa / ha or e / he (both spellings pass), or ō vs ou. Until it exists, the cold reviewer reads every pron against §6.1.

The prototype (node, no dependencies; it also builds `pronPattern`, so the two stay in step). Use: `toRe(pron).test(fold(target))`.

```js
/* scratch: build the en-ja pronPattern and a romaji->kana consistency check, test on examples and sample cards */
const V = ['a','i','u','e','o','ā','ī','ū','ē','ō'];
const base = { 'ā':'a','ī':'i','ū':'u','ē':'e','ō':'o' };
const allow = (on, v) => {
  const b = base[v] || v;
  if (on === '') return true;
  if ('kgnbpmr'.includes(on) && on.length === 1) return true;
  if (on === 'h') return b !== 'u';
  if (on === 's' || on === 'z') return b !== 'i';
  if (on === 't' || on === 'd') return b !== 'u';
  if (on === 'w') return 'aie'.includes(b);
  if (on === 'f' || on === 'j' || on === 'sh' || on === 'ch') return true;
  if (on === 'y') return 'auo'.includes(b);
  if (on === 'ts') return b === 'u';
  if (/^[kgnhbpmr]y$/.test(on)) return 'auo'.includes(b);
  return false;
};
const ONS = ['', 'k','g','s','z','t','d','n','h','b','p','m','r','w','f','j','y','sh','ch','ts','ky','gy','ny','hy','by','py','my','ry'];
const GEM = { k:'kk', s:'ss', t:'tt', p:'pp', g:'gg', d:'dd', b:'bb', z:'zz', j:'jj', sh:'ssh', ch:'tch', ts:'tts', ky:'kky', py:'ppy' };
const syl = new Set();
for (const on of ONS) for (const v of V) if (allow(on, v)) { syl.add(on + v); if (GEM[on]) syl.add(GEM[on] + v); }
const SYL = [...syl].sort((a, b) => b.length - a.length || a.localeCompare(b));
const VY = 'aiueoāīūēōy';
const unit = `(?:${SYL.join('|')}|n(?![${VY}'])|n'(?=[${VY}]))`;
const word = `${unit}+(?:-(?:san|sama|kun|chan))?`;
const pronPattern = `^(?!.*(?:aa|ee|oo|[ou]u(?!n(?: |$))[a-zāīūēō']))${word}(?: ${word})*$`;
const PR = new RegExp(pronPattern, 'u'), PR0 = new RegExp(pronPattern);
/* romaji -> regex over hiragana (target folded: katakana->hiragana, spaces and punctuation removed, kanji via lexicon) */
const K = {}; const row = (c, ks) => ['a','i','u','e','o'].forEach((v, i) => { if (ks[i]) K[c + v] = ks[i]; });
row('', 'あいうえお'); row('k','かきくけこ'); row('g','がぎぐげご'); row('s',['さ',null,'す','せ','そ']); row('z',['ざ',null,'ず','ぜ','ぞ']);
row('t',['た','てぃ',null,'て','と']); row('d',['だ','でぃ',null,'で','ど']); row('n','なにぬねの'); row('h',['は','ひ',null,'へ','ほ']);
row('b','ばびぶべぼ'); row('p','ぱぴぷぺぽ'); row('m','まみむめも'); row('r','らりるれろ'); row('w',['わ','うぃ',null,'うぇ',null]);
row('f',['ふぁ','ふぃ','ふ','ふぇ','ふぉ']); row('j',['じゃ','じ','じゅ','じぇ','じょ']); row('y',['や',null,'ゆ',null,'よ']);
row('sh',['しゃ','し','しゅ','しぇ','しょ']); row('ch',['ちゃ','ち','ちゅ','ちぇ','ちょ']); K.tsu = 'つ';
for (const c of ['k','g','n','h','b','p','m','r']) { const i = { k:'き',g:'ぎ',n:'に',h:'ひ',b:'び',p:'ぴ',m:'み',r:'り' }[c]; K[c+'ya']=i+'ゃ'; K[c+'yu']=i+'ゅ'; K[c+'yo']=i+'ょ'; }
const ALT = { 'じ':'[じぢ]', 'ず':'[ずづ]', 'わ':'[わは]' };
const LONG = { a:'[あー]', i:'[いー]', u:'[うー]', e:'[えー]', o:'[うおー]' };
const LEX = { '一':'いち','二':'に','三':'さん','四':'よん','五':'ご','六':'ろく','七':'なな','八':'はち','九':'きゅう','十':'じゅう','百':'ひゃく','千':'せん','一万':'いちまん','円':'えん','月曜日':'げつようび','火曜日':'かようび','水曜日':'すいようび','木曜日':'もくようび','金曜日':'きんようび','土曜日':'どようび','日曜日':'にちようび','六時':'ろくじ','五分':'ごふん','一年':'いちねん','日本':'にほん','日本人':'にほんじん','人':'ひと','男の人':'おとこのひと','女の人':'おんなのひと','女の子':'おんなのこ' };
const fold = t => { let s = t; for (const k of Object.keys(LEX).sort((a,b)=>b.length-a.length)) s = s.split(k).join(LEX[k]);
  return s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60)).replace(/[\s。、？！?!「」]/g, ''); };
function toRe(p) {
  let out = '';
  for (const w of p.split(' ')) {
    if (w === 'wa') { out += '[わは]'; continue; } if (w === 'e') { out += '[えへ]'; continue; } if (w === 'o') { out += '[おを]'; continue; }
    let s = w.replace(/-(san|sama|kun|chan)$/, m => m.slice(1));
    while (s) {
      if (s.startsWith("n'")) { out += 'ん'; s = s.slice(2); continue; }
      if (s[0] === 'n' && !(s[1] && VY.includes(s[1]))) { out += 'ん'; s = s.slice(1); continue; }
      let gem = false; if (s.length > 1 && s[0] === s[1] && !'aiueonāīūēō'.includes(s[0])) { gem = true; s = s.slice(1); } else if (s.startsWith('tch')) { gem = true; s = s.slice(1); }
      const m = SYL.filter(x => !GEM_ANY(x)).find(x => s.startsWith(x)); if (!m) throw new Error('cannot parse ' + w + ' at ' + s);
      const b = m.replace(/[āīūēō]$/, c => base[c]); const kana = K[b]; if (!kana) throw new Error('no kana for ' + b);
      out += (gem ? 'っ' : '') + [...kana].map(c => ALT[c] || c).join('');
      if (base[m[m.length - 1]]) out += LONG[base[m[m.length - 1]]];
      s = s.slice(m.length);
    }
  }
  return new RegExp('^' + out + '$', 'u');
}
const GEM_ANY = x => /^(kk|ss|tt|pp|gg|dd|bb|zz|jj|ssh|tch|tts|kky|ppy)/.test(x);
module.exports = { pronPattern, PR, PR0, toRe, fold, SYL };
```

### 6.6 What the script lessons must teach, so the aid can be dropped

1. **`hiragana`:** the five vowels said as in Spanish or Italian (a "ah", i "ee", u "oo" with relaxed lips, e "eh", o "oh"), never as English letter names; the rows; shi, chi, tsu, fu, n; は / へ / を said wa / e / o as particles; the sound marks ゛ ゜.
2. **`sounds`:** a macron means "hold the vowel for two beats"; a doubled consonant means a short pause; ん is a beat of its own and n' separates it from a following vowel; small ゃ ゅ ょ make one beat; pitch is heard, not marked.
3. **`katakana`:** ー = macron; ティ, ファ and friends.
4. From `desu` on, the aid is blurred, and every lesson's tip reminds the learner to read the kana first.

**Romaji in practice items (ruling on the PRACTICE-SPEC rule "No romanization in practice items").** In `hiragana`, `sounds` and `katakana` only, romaji may appear on the **English side** of an item (`q`, `p`, `why`, `hint`) as a sound label in quotes ("Which letter is 'ka'?"). It is never an answer, an option, a tile or a fill. From `desu` on, practice items contain no romaji at all.

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things:
- **(a) Particles.** The right particle after the right word: は / が, を, に / へ, で, の, も, と, and later より, から, まで. In the three script lessons this includes the **spelling** of the particles は, を, へ (said wa, o, e).
- **(b) Polite endings.** The polite style's endings carry tense and negation: ます / ません / ました / ませんでした / ましょう / ませんか; です / でした / じゃないです / じゃなかったです; and the adjective forms たかくないです / たかかったです / きれいじゃないです.

**Why these two.**
- **Particles** are the error that every source puts first for English speakers: は / が is still non-native at upper-advanced level (Woods 2021), English speakers overuse が for を (Noji 2014), and case particles are the largest error category in the one beginner corpus opened (Pavlovič 2020, other L1) (§4.1). English has prepositions **before** nouns and no topic marker, so the error is everywhere [inference]. Particles occur in nearly every sentence from lesson 1, and their spelling (は, を, へ) is part of learning hiragana, so strand (a) can be met in all 28 sets, including the three script lessons, which matters because the JSON has no exemption field.
- **Polite endings** are where tense and negation live in Japanese, and the endings English speakers build wrongly are a closed list (§4.4: たかいでした, たべましたじゃない). Strand (b) gives the verb and adjective lessons a hinge about their own point instead of forcing particles into every item.
- **Not chosen:**
  - **Verb-final word order:** every `or` item already tests it, because the tiles must be put in Japanese order; but there is no mechanical way to make a distractor for "position", so it cannot be counted. It is the default content of the third `or` item in each set.
  - **Long vowels and small っ:** a real error (§4.2), but a learner on tiles cannot make it in production, so it is tested through `mc` and `fi` distractors (おばさん / おばあさん, きて / きって) wherever the lesson's words allow.
  - **"You" and さん:** a register choice, used as the preferred mixed neighbour in the last two items (§8).

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 of the 3 `or` items** and **2 of the 3 `ty` items** hinge on (a) or (b), and their `why` names it with a keyword.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** the particle is a **separate tile** in `a` (§10.5), and `x` holds a **wrong particle** from the safe list below, or the wrong spelling of the particle in the script lessons (わ for は, お for を, え for へ).
- **`or`, strand (b):** `a` contains a verb, adjective or です with a polite ending, and `x` holds the wrong form of that same word (たべました for たべませんでした; たかいでした for たかかったです; いかない for いきません).
- **`ty`, strand (a):** `a[0]` contains the particle, and `x` holds the **same phrase with a wrong particle** (`がっこうで` when `a[0]` has `がっこうに`). The engine builds the no-keyboard tiles from `a[0]` split at spaces plus `x` (§10.5), so `x` must be a whole phrase, not a bare particle.
- **`ty`, strand (b):** `a[0]` ends in the polite ending, and `x` holds the wrong form (`たべました` for `たべませんでした`).

**Safe particle distractors.** TARGET-BRIEF requires a distractor to be **wrong**, not merely less usual. Use only these contrasts:

| Contrast | Safe when | Example (wrong in brackets) |
|---|---|---|
| で vs に | an action verb (たべます, べんきょうします, かいます, まちます, あそびます) needs で; あります / います / すんでいます need に | レストランで (に) たべます; へやに (で) います |
| を vs が | an action verb with an object (たべます, のみます, みます, かいます, よみます) needs を; すき / きらい / じょうず / わかります / あります need が | すしを (が) たべます; ねこが (を) すきです |
| に / へ vs で or を | going or coming to a place (いきます, きます, かえります) | がっこうに (で) いきます |
| に vs で | a clock time or day with an action (さんじに, げつようびに) | さんじに (で) おきます |
| の vs nothing or が | between two nouns | わたしの (が) ほん |
| も vs は | **only** when the English prompt says "too" or "also" | わたしも (は) がくせいです ("I'm a student too") |
| と | "with a person", "and" between nouns; distractor に or を | ともだちと (を) いきます |
| より vs から | comparisons | おおさかより (から) おおきい |
| spelling | script lessons: わ / お / え for は / を / へ | これは (わ) |

**Never use as a distractor:** は vs が in "X は / が Y です" (both are grammatical with different emphasis); に vs へ with motion verbs (both right: list both in `a`); a missing を or は (natural in casual speech; Kanno 1997); に vs で with はたらきます (で is usual, but に is heard in some phrasings); が vs を with ～たい (both occur).

**Accepted answers.**
- Every `ty` model answer `a[0]` has **at least two phrases** (one space or more), because the no-keyboard tiles are `a[0]` split at spaces plus `x`; a one-phrase answer would become a two-way pick.
- List に and へ both after いきます / きます / かえります.
- List the answer with and without わたしは where both are natural (§2.3).
- List both readings where a number has two in that use (しちじ and ななじ for 7:00), but only one where only one is used (よじ for 4:00, くじ for 9:00).
- Never list a particle-less answer, except: time words that take no particle (まいにち, あした, きのう, いま, きょう) are always bare; in `short`, casual items may drop を, は and the destination particle, and then both forms are listed (うちで たべる？ | うちで たべるの？; すし たべる？ | すしを たべる？).

**Worked hinges for the lessons where the rule is hardest** (shorthand of `tools/target/lib.js`; tiles use ` | ` for Japanese):

```
hiragana   ['or', 'This is sushi.', 'これ | は | すし | です', 'わ', 'The topic particle は is written は but said wa.']
           ['or', 'I eat sushi.', 'すし | を | たべます', 'お', 'The object particle を is said o but written を.']
           ['ty', 'This is sushi.', 'これは すしです', 'これ · すし · です', 'これわ', 'Spell the topic particle は, although you say wa.']
           ['ty', 'I eat sushi.', 'すしを たべます|わたしは すしを たべます', 'すし · たべます', 'すしお', 'The object particle を is written を, not お.']
sounds     ['or', 'I go to Tokyo.', 'とうきょう | へ | いきます', 'え', 'The direction particle へ is said e but written へ.']
           ['or', 'Tea, please.', 'おちゃ | を | ください', 'お', 'The object particle を is said o but written を.']
           ['ty', 'I go to school.', 'がっこうに いきます|がっこうへ いきます|わたしは がっこうに いきます|わたしは がっこうへ いきます', 'がっこう · いきます', 'がっこうで', 'Going to a place takes the destination particle に or へ.']
           ['ty', 'I go to Tokyo.', 'とうきょうに いきます|とうきょうへ いきます|わたしは とうきょうに いきます|わたしは とうきょうへ いきます', 'とうきょう · いきます', 'とうきょうで', 'Going to a place takes the destination particle に or へ.']
katakana   ['or', 'Coffee, please.', 'コーヒー | を | ください', 'が', 'ください takes the object particle を.']
           ['or', "I'm Emily.", 'わたし | は | エミリー | です', 'わ', 'The topic particle は is written は, even after katakana.']
           ['ty', 'I drink coffee.', 'コーヒーを のみます|わたしは コーヒーを のみます', 'コーヒー · のみます', 'コーヒーが', 'The object particle を marks what you drink.']
           ['ty', 'Bread, please.', 'パンを ください|パンを おねがいします', 'パン · ください', 'パンが', 'ください takes the object particle を.']
desu       ['ty', "I'm not a student.", 'わたしは がくせいじゃないです|がくせいじゃないです|わたしは がくせいじゃありません|がくせいじゃありません', 'わたし · がくせい · not', 'がくせいです', 'The negative polite ending is じゃないです.']
numbers    ['ty', 'I get up at seven.', 'しちじに おきます|ななじに おきます|わたしは しちじに おきます|わたしは ななじに おきます', 'しちじ · おきます', 'しちじで', 'A clock time takes the time particle に.']
           ['ty', 'This was 300 yen.', 'これは さんびゃくえんでした', 'これ · さんびゃくえん · past', 'さんびゃくえんです', 'Past of です: the polite ending でした.']
kanji-first['or', 'Mr. Tanaka is Japanese.', 'たなかさん | は | 日本人 | です', 'を', 'The topic particle は follows the person you talk about.']
           ['or', 'Monday is my day off.', '月曜日 | は | やすみ | です', 'を', 'The topic particle は marks the day you talk about.']
           ['ty', 'I get up at six.', '六時に おきます|ろくじに おきます|わたしは 六時に おきます|わたしは ろくじに おきます', '六時 (ろくじ) · おきます', '六時で', 'A clock time takes the time particle に.']
           ['ty', 'Mr. Tanaka is Japanese.', 'たなかさんは 日本人です|たなかさんは にほんじんです', 'たなかさん · 日本人 (にほんじん)', 'たなかさんを', 'The topic particle は follows the person you talk about.']
short      ['or', 'I am not going tomorrow. (polite, to a teacher)', 'あした | いきません', 'いかない', 'To a teacher, use the polite ending ません, not the short form.']
           ['ty', 'Will you eat at home? (casual, to a friend)', 'うちで たべる|うちで たべるの', 'うち · たべる', 'うちに', 'Where you eat takes the place-of-action particle で.']
counters   ['or', 'Two apples, please.', 'りんご | を | ふたつ | ください', 'が', 'The object particle を comes first; the number goes right before the verb.']
compare    ['or', 'Tokyo is bigger than Osaka.', 'とうきょう | は | おおさか | より | おおきいです', 'から', 'より is the comparison particle: "than".']
to-omou    ['or', 'I think it is delicious.', 'おいしい | と | おもいます', 'を', 'Quote what you think with the particle と.']
noun-mod   ['or', 'I read the book I bought yesterday.', 'きのう | かった | ほん | を | よみました', 'が', 'The whole described noun takes the object particle を.']
```

**Validator keywords** (`standingRule.keywords`, flags `i`). The role-name branch and "polite ending" are ASCII; the middle branch matches the English word "particle" followed by the particle in kana. No `\b` touches a kana. Writers should prefer the role-name form:

```
\b(?:topic|subject|object|destination|direction|time|location|place-of-action|means|linking|also|comparison) particles?\b|\bparticles? (?:は|が|を|に|で|へ|の|も|と|や|から|まで|より)|\bpolite endings?\b
```

How to use them in a `why`:
- strand (a): a role name + "particle" ("the object particle を"), or "the particle" + the particle ("the particle と");
- strand (b): "polite ending".

Deliberately **not** keywords: bare "particle" (so "Particles come after the noun" and "the question particle か" do not count); "ます form" and "polite style" (so register lines do not count); "verb last"; "long vowel". Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 44 of 44 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| は is the topic particle: it is written は but said wa. | match | match |
| The object particle を is said o but written を. | match | match |
| Going to a place takes the destination particle に or へ. | match | match |
| The direction particle へ is said e. | match | match |
| Where an action happens takes the place-of-action particle で. | match | match |
| Where someone is takes the location particle に, not で. | match | match |
| Clock times take the time particle に: さんじに. | match | match |
| すき takes the subject particle が, not を. | match | match |
| The linking particle の goes between the two nouns: わたしの ほん. | match | match |
| The also particle も replaces は: わたしも. | match | match |
| By train is でんしゃで, with the means particle で. | match | match |
| より is the comparison particle: "than". | match | match |
| Use the particle と for "with a friend". | match | match |
| The particle から means "from" here. | match | match |
| Didn't eat: the polite ending is ませんでした. | match | match |
| Past of an い-adjective: the polite ending is かったです, not いでした. | match | match |
| Negative polite ending of a な-adjective: じゃないです. | match | match |
| The polite ending ましょう means "let's". | match | match |
| Polite endings, not short forms, when you speak to a teacher. | match | match |
| Topic particle は on the person, then the rest. | match | match |
| The particle を marks what you eat. | match | match |
| Use the particle に with あります. | match | match |
| か at the end makes it a question. | no match | no match |
| The question particle か goes at the very end. | no match | no match |
| ね asks for agreement: the sentence-ending particle ね. | no match | no match |
| The verb goes last in Japanese. | no match | no match |
| Use the ます form with strangers. | no match | no match |
| Leave out あなた: use the name and さん. | no match | no match |
| さん never goes after your own name. | no match | no match |
| この goes before a noun; これ stands alone. | no match | no match |
| ー makes the vowel before it long. | no match | no match |
| Small っ doubles the next consonant. | no match | no match |
| ひゃく becomes びゃく after さん. | no match | no match |
| Use the polite style with a shop clerk. | no match | no match |
| The number goes right before the verb. | no match | no match |
| きれい is a な-adjective, although it ends in い. | no match | no match |
| Use はい to agree with a negative question. | no match | no match |
| Time words like まいにち take no particle. | no match | no match |
| The て form joins two actions. | no match | no match |
| Japanese counts in ten-thousands: まん. | no match | no match |
| Use the dictionary form before つもり. | no match | no match |
| A short form is fine with a friend. | no match | no match |
| Say ちょっと… to refuse politely. | no match | no match |
| Particles come after the noun, never before it. | no match | no match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4, §5 and §10):
- **Kept: all 27 items.** Ids lose the `ja-` prefix, and each roadmap id appears exactly once in a `roadmap` field, so `link_roadmap.py` links all 27.
- **Reordered:**
  - `sounds` now comes **before** `katakana`. Katakana relies on the long-vowel and small-letter rules (ー, ッ, small ャ ュ ョ and ァ ィ), and learners write their own names in katakana, which almost always needs them (エミリー, マット) [inference].
  - `kanji-first` moves from lesson 4 to **lesson 13**, the end of stage 2. Its content is numbers, days and people, and those words are first learned in kana in `numbers`, `masu` and `past`; the kanji are then a new way to write known words, as in Genki, where kanji start in lesson 3 after both kana [curriculum convention: [Genki intro](https://genki3.japantimes.co.jp/en/intro/)]. Teaching 30 kanji before the learner knows any sentence would add load with nothing to attach it to.
  - `counters` stays in stage 3 (Genki lesson 5), because the basic numbers now come early in `numbers`.
- **Renamed:** titles name the forms in kana and give an English gloss, and kanji in roadmap titles are replaced by kana (好き → すき, 思います → おもいます, 言って → いって), because no kanji outside §10.3 appear in the course.
- **Widened:**
  - `hiragana` also teaches the sound marks ゛ ゜ (Genki lesson 1 covers them with the basic letters), so that です, が and べ can be read from the first lesson's practice.
  - `sounds` also teaches small ゃ ゅ ょ, ん and pitch by ear.
  - `desu` includes greetings and self-introduction (Genki lesson 1).
  - `short` teaches present short forms only; past short forms come in `noun-mod` and `koto-aru` (§2.2).
- **Added (1):** `numbers`, "Numbers, prices and the time", as lesson 6. Genki teaches numbers and time in lesson 1 and prices in lesson 2, travellers need them from day one, and the roadmap has no item for them before `counters` (§5). Its `roadmap` field is empty.
- **Not added:** a greetings lesson (covered by `desu` and its deck), a time-and-days lesson (covered by `numbers` and `past`), a casual-speech lesson (covered by `short` and its deck). The 28-lesson cap allows only one addition, since all 27 roadmap items are kept.
- **Stages:** the roadmap's four, unchanged in name. Stage 1 has 3 lessons, stage 2 has 10, stage 3 has 8, stage 4 has 7.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Script and sounds** | | | |
| 1 | `hiragana` | Hiragana: reading Japanese sounds | ja-hiragana | The 46 basic hiragana as a grid (5 vowels × rows), read right after hearing them; the vowels a i u e o said "ah ee oo eh oh"; shi, chi, tsu, fu, n; the sound marks ゛ (k→g, s→z, t→d, h→b) and ゜ (h→p); は, を, へ said wa, o, e as particles (こんにちは, これは, すしを); look-alikes さ / ち, ぬ / め, わ / れ / ね, る / ろ; how to read the romaji line and why it fades. Trap: English letter values (e = "ee", i = "eye"); writing わ for the particle は. Also points to the Hiragana 2 deck. | Hiragana 1: a, ka, sa, ta rows |
| 2 | `sounds` | Small letters, long vowels and pitch | ja-sounds | Small ゃ ゅ ょ (きゃ is one beat, きや two); small っ as a pause (きて / きって); long vowels (おばさん / おばあさん, え + い, お + う); ん as a beat of its own (n' in the romaji); counting beats, not syllables (とうきょう has four); pitch by ear: はし, あめ, かみ. Trap: shortening long vowels and dropping っ (Knight 2013; Hardison & Saigo 2010); English stress on every word (Shport). | Hiragana 3: marks and small letters |
| 3 | `katakana` | Katakana: loanwords and names | ja-katakana | The 46 katakana with the same rules; ー for long vowels (コーヒー); small ッ, ャ ュ ョ; extra combinations for loanwords (ティ, ファ, ウィ, ジェ); writing your name (エミリー, マイク); English words reshaped into Japanese beats (マクドナルド). Trap: expecting English pronunciation; シ / ツ, ソ / ン; leaving out ー. Also points to the Katakana 2 deck. | Katakana 1: a, ka, sa, ta rows |
| | | **Stage 2: First sentences** | | | |
| 4 | `desu` | X は Y です: introducing yourself | ja-desu | はじめまして, わたしは … です, よろしく おねがいします; country + じん, がくせい, かいしゃいん; じゃないです / じゃありません; questions with か; さん after other people's names; dropping わたしは and "you". Trap: は read as "is" (わたしはです); さん after your own name; あなた (§4.5). | Greetings and introductions |
| 5 | `kosoado` | これ・それ・あれ: this and that | ja-kosoado | これ / それ / あれ / どれ alone; この / その / あの / どの + noun; ここ / そこ / あそこ / どこ; だれの; ～を ください; いくらですか (preview of `numbers`). Trap: これ before a noun (これ ほん → この ほん); それ for "that over there". | Shopping and things |
| 6 | `numbers` | Numbers, prices and the time | (added) | 0 to 99,999: いち … じゅう, ひゃく, せん, まん, with the sound changes (さんびゃく, ろっぴゃく, はっぴゃく, さんぜん, はっせん); よん and なな preferred; ～えん, いくらですか; ～じ, ～ふん / ぷん, はん, なんじですか; よじ, くじ, しちじ; the time particle に with clock times. Trap: counting thousands the English way (じゅうせん for 10,000); しじ for 4:00 (§4.9). | Numbers, money and time |
| 7 | `no-mo` | の and も: my, your, and "too" | ja-no-mo | Noun の noun (わたしの ほん, にほんごの せんせい, とうきょうの だいがく); も replacing は, が and を (わたしも, すしも); my family vs your family (はは / おかあさん). Trap: English order "the book of me"; わたしはも (§4.1); はは for a friend's mother. | Family and people |
| 8 | `masu` | Verbs in the ます form | ja-masu | ます / ません; the verb goes last; ru-verbs, u-verbs and the two irregular verbs (する, くる) as words to learn, not yet to conjugate; time words with no particle (まいにち, あした) and with に (しちじに); よく, ときどき, あまり + ません. Trap: the verb in second place (たべます すしを); あまり with a positive verb (§4.3). | Daily routine |
| 9 | `particles` | Particles を・に・で・へ | ja-particles | を for the object; に / へ for where you go; に for a time; で for where something happens and for "by" (でんしゃで, にほんごで); particles go after the noun. Trap: に for every "at / in" (レストランに たべます); a "preposition" before the noun (§4.1, §4.3). | Places and getting around |
| 10 | `arimasu` | あります / います: there is | ja-arimasu | あります for things, います for people and animals; place に thing が あります; thing は place に あります; うえ, した, なか, となり, まえ, うしろ with の. Trap: あります for a person or a pet; で for where something is (§4.1). | Shopping and things |
| 11 | `past` | Past: でした・ました | ja-past | ました / ませんでした; でした / じゃなかったです; きのう, せんしゅう, きょねん; days of the week in kana (げつようび …). Trap: ませんでした built wrong (たべましたじゃない); たのしいでした (preview of `adjectives`) (§4.4). | Daily routine |
| 12 | `invite` | ませんか・ましょう: inviting | ja-invite | ～ませんか (won't you…?), ～ましょう (let's), ～ましょうか (shall we / shall I); いっしょに; accepting (いいですね) and refusing politely (すみません、ちょっと…); はい and いいえ to negative questions. Trap: a bare いいえ to an invitation; いいえ to agree with a negative question (§4.7). | Traps for English speakers |
| 13 | `kanji-first` | First kanji: numbers, days, people | ja-kanji-first | What kanji are and why the course uses so few; the 30 words of §10.3 (numbers, 円, the days of the week, 六時, 五分, 一年, 日本, 日本人, 人, 男の人, 女の人, 女の子); one kanji with several readings (日: に in 日本, び in げつようび, にち in にちようび; 人: ひと, じん); every word shown with its kana reading in the card note. Trap: expecting one reading per kanji; 日本 read "hi-hon". | First kanji |
| | | **Stage 3: Describing and connecting** | | | |
| 14 | `adjectives` | い and な adjectives | ja-adjectives | い-adjectives (たかい, たかくないです, たかかったです) and な-adjectives (きれいです, きれいじゃないです, きれいでした); before a noun (たかい ほん, きれいな へや); いい → よくないです, よかったです; とても, あまり. Trap: たかいでした; きれいくない; な left out (§4.4, §4.6). | Describing things |
| 15 | `suki` | すき・きらい: likes and dislikes | ja-suki | ～が すきです / きらいです / だいすきです; ～が じょうずです / へたです; どんな ～が すきですか. Trap: を with すき (Noji 2014, §4.1); すき used like the English verb "like" with a person as subject only. | Likes, plans and free time |
| 16 | `counters` | Counting things: ひとつ, にまい, さんぼん | ja-counters | ひとつ to とお; ～まい (flat things), ～ほん (long things), ～にん (people: ひとり, ふたり), ～さつ (books); sound changes (いっぽん, さんぼん, ろっぽん); position: noun を number verb (りんごを ふたつ ください). Trap: the number before the noun with の (ふたつの りんご for an order); さんほん; ふたりの ともだち vs ともだちが ふたり (§4.9). | Food and drink |
| 17 | `te` | The て form: and then | ja-te | Making the て form (ru-verbs, the u-verb sound groups, する → して, くる → きて, いく → いって); joining actions in order (おきて、たべて、いきます); joining adjectives (やすくて、おいしいです). Trap: と for "and" between verbs and sentences (§4.11); いきて for いって. | Daily routine |
| 18 | `te-requests` | てください・てもいいですか・てはいけません | ja-te-requests | ～て ください (please do); ～ても いいですか (may I?); ～ては いけません (you must not); すみません to start a request. Trap: ～ても いいですか to ask someone else to do something; ください after a noun vs after a て form (§2.4). | Polite requests and help |
| 19 | `teiru` | ている: doing now, and states | ja-teiru | ～て います for an action in progress (たべて います); for a state (けっこんして います, すんで います, しって います); しりません as the negative of しって います. Trap: けっこんします for "I am married" (= I will marry); しって いません. | Family and people |
| 20 | `short` | Short forms and casual speech | ja-short | Present short forms: たべる / たべない, いく / いかない, する / しない, くる / こない, ある / ない; たかい / たかくない; がくせいだ / がくせいじゃない; casual questions with rising voice (いく？), うん / ううん; when to use which style. Trap: short forms with strangers; あらない for "there isn't" → ない; だ at the end of a question (がくせいだ？ → がくせい？) (§4.12). | Casual and polite |
| 21 | `to-omou` | とおもいます・といっていました: opinions and reports | ja-to-omou | short form + と おもいます (I think); short form + と いって いました (said); "I don't think…" by making the quoted part negative (おいしくないと おもいます). Trap: おいしいだと おもいます → おいしいと おもいます (no だ after an い-adjective); おいしいと おもいません for "I don't think it's tasty" → おいしくないと おもいます (the negative goes on the quoted part). | Describing things |
| | | **Stage 4: Toward N5** | | | |
| 22 | `noun-mod` | Describing people and things with verbs | ja-noun-mod | Describing clause before the noun (きのう かった ほん, めがねを かけて いる ひと); past short forms (かった, みた, いった); が inside the clause. Trap: English order, clause after the noun (ほん きのう かった); は inside the clause. | Family and people |
| 23 | `compare` | Comparing: より・いちばん | ja-compare | A は B より ～です; A と B と どちらが ～ですか; ～の なかで ～が いちばん ～です. Trap: より before the wrong noun (A より B は); もっと for "more" in every comparison. | Describing things |
| 24 | `tsumori` | つもり・なる: plans and changes | ja-tsumori | dictionary form + つもりです (intend to); ～ない つもりです; い-adjective + く なります, noun / な-adjective + に なります. Trap: つもり with a ます form (いきます つもり); なります without く / に. | Likes, plans and free time |
| 25 | `tai` | たい: want to | ja-tai | ます stem + たいです, たくないです, たかったです; ～が / ～を たべたいです (both natural: list both); ほしいです for things; asking others: ～たいですか is direct, so offer with ～ませんか instead. Trap: たいです about other people (けんさんは いきたいです); I want to = たい, not ほしい + verb. | Places and getting around |
| 26 | `koto-aru` | たことがあります: experiences | ja-koto-aru | past short form + ことが あります / ありません; ～たことが ありますか; travel and food experiences. Trap: dictionary form before こと (いく ことが あります means "I sometimes go"). | Places and getting around |
| 27 | `n-desu` | んです・ので: explaining | ja-n-desu | short form + んです (explaining, asking for an explanation: どうしたんですか); な-adjective / noun + なんです; ～ので (because, softer than から); あたまが いたいんです. Trap: んです overused in every sentence; ので after a noun without な. | Polite requests and help |
| 28 | `must` | なければいけません・ほうがいい | ja-must | ～なければ いけません (must); ～なくても いいです (don't have to); past short form + ほうが いいです (had better); ～ない ほうが いいです. Trap: ～なければ いけません said to someone senior as advice; ほうが いい with the dictionary form for advice. | Polite requests and help |

Per-lesson notes for writers:
- Every set satisfies §7.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: a particle contrast from the §7 safe list, a polite ending, "you" left out or name + さん (§2.3), and a long-vowel or っ pair in an `mc` item.
- In the three script lessons, practice items test reading: `mc` "Which word is 'sushi'?" (options in kana), `or` tiles of whole words, `fi` with one missing kana (q: `す__`, a: `し`, o: `ち|さ|ひ`; no distractor may spell a real word), and `ty` items whose answers are short phrases in kana (the learner is on tiles by default).
- Vocabulary for the script lessons is limited to words the learner can read by then; `hiragana` may also use です, が and ください, which it teaches as sight words through the sound marks.
- No kanji in any practice answer or tile outside `kanji-first`. In `kanji-first`, every answer with a kanji also lists the all-kana form (§10.3).

## 9. Decks

**18 decks in 5 groups**, about 340 cards. The five letter decks have 20 to 30 cards and "First kanji" has exactly 30 (the validator allows 12 to 30); the other twelve decks have 16 to 18. Card shape: `target | pron | meaning | note`.
- `target`: Japanese in kana (kanji only in "First kanji"), with the phrase spacing of §2.7. **No 。 or 、 in card targets** (a phrase space replaces 、): today's deck typing check strips spaces and ？！ but not 。、 (§10.5). ？ and ！ are allowed.
- `pron`: romaji by §6.1, typed by hand.
- `meaning`: short American English, unique within the deck.
- `note`: one English line, or empty for at most a quarter of a deck. Register, traps and readings go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| Kana and first kanji | Hiragana 1: a, ka, sa, ta rows · Hiragana 2: na to n · Hiragana 3: marks and small letters · Katakana 1: a, ka, sa, ta rows · Katakana 2: na to n, plus long vowels · First kanji |
| First steps | Greetings and introductions · Family and people · Numbers, money and time |
| Everyday life | Food and drink · Shopping and things · Daily routine · Describing things · Likes, plans and free time |
| Out and about | Places and getting around · Polite requests and help |
| Watch out | Casual and polite · Traps for English speakers |

**Letter decks (the script stage without the letter-drill machine).** They are ordinary decks:
- One kana per card. `target` = the kana; `pron` = its romaji (`ha` for は and `he` for へ, as letters; `o` for を, `n` for ん).
- `meaning` = the sound label plus a word the learner knows, so that every meaning in the deck differs and the quiz ("pick the kana for…") works: "ka, as in karate", "a, as in アメリカ (America)". In the katakana decks the word is a loanword written in that katakana.
- `note` = the look-alike to watch, or the irregular sound ("Not si: the row is sa shi su se so").
- Small っ and ー cannot be cards on their own (no romaji). They are taught with whole words (きって, コーヒー).
- ぢ, づ, ゐ, ゑ are not cards; ぢ and づ are mentioned in a note on じ and ず. ヲ is a card (it completes the 46) with a note that it is rare in katakana.
- Card counts: Hiragana 1 = 20, Hiragana 2 = 26, Hiragana 3 = 28 (the 23 voiced kana other than ぢ and づ, plus 5 cards for small letters and long vowels), Katakana 1 = 20, Katakana 2 = 26 + 4 loanwords (コーヒー, パーティー, ファン, ウェブ) = 30.
- If the engine's letter-drill machine is generalised (§10.7), these same decks feed it unchanged.

**Deck rules for writers**
- Phrases with "you" leave it out; names + さん where a person is named (§2.3). Family cards say whose family in the meaning: "my mother" / "(someone's) mother".
- Verbs are cards in the ます form (たべます "to eat"); the dictionary form appears only in "Casual and polite" and as a note.
- Nouns that need a particle in use appear in a short phrase where that helps (みずを ください, ねこが すきです), so that strand (a) is visible in review.
- Localisation (§9.1) applies to every example and dialogue.
- **Traps for English speakers** (18 cards): about 7 katakana false friends (マンション, スマート, バイキング, コンセント, クレーム, バイク, サービス); about 6 grammar and calque traps (あなた, かれ / かのじょ, はい to a negative question, けっこうです, ちょっと…, いいです as an unclear "no thanks"); about 5 register traps (はは vs おかあさん, さん on your own name, すみません for "thank you", ありがとう vs ありがとうございます, おはよう). Everything in this deck is in the §11 native-check list.

**Five sample cards per deck** (all prons pass `pronPattern` and the §6.5 check; meanings are unique within each deck):

**1. Hiragana 1: a, ka, sa, ta rows.** あ い う え お, か…こ, さ…そ, た…と. Lesson: `hiragana`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| あ | `a` | a, as in "father" | Short and open, never "ay". |
| か | `ka` | ka, as in "karate" | |
| し | `shi` | shi, as in "sushi" | Not si: the row is sa shi su se so. |
| つ | `tsu` | tsu, as in "tsunami" | ts as in "cats", at the start of the word. |
| ち | `chi` | chi, as in "cheese" | Do not mix it up with さ (sa): the curve faces the other way. |

**2. Hiragana 2: na to n.** な…ん. Reached from the `hiragana` lesson body (no lesson links it; §10.7 request 7).

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| ぬ | `nu` | nu, as in "noodle" | Like め (me), with a small loop at the end. |
| は | `ha` | ha, as in "haiku" | As the topic particle it is said wa: わたしは. |
| ふ | `fu` | fu, as in "Mount Fuji" | A soft f, blown between the lips. |
| を | `o` | o, only for the object particle | Said like お; used only after the object: すしを. |
| ん | `n` | n, the letter with no vowel | Before b, m, p it sounds like m: しんぶん. |

**3. Hiragana 3: marks and small letters.** ゛ ゜, small ゃ ゅ ょ, small っ, long vowels. Lesson: `sounds`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| が | `ga` | ga: か with two dots | Two dots turn k into g, s into z, t into d, h into b. |
| ぱ | `pa` | pa: は with a circle | The circle turns h into p. |
| じ | `ji` | ji, as in "jeep" | ぢ is said the same and is rare. |
| きゃ | `kya` | kya, one beat | Small ゃ joins き into one beat: きゃ, not きや (ki-ya). |
| きって | `kitte` | postage stamp | Small っ is a short pause: kit-te. きて (kite) means "come". |

**4. Katakana 1: a, ka, sa, ta rows.** ア…ト, each with a loanword. Lesson: `katakana`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| ア | `a` | a, as in アメリカ (America) | |
| カ | `ka` | ka, as in カメラ (camera) | Looks like the hiragana か without the dot. |
| シ | `shi` | shi, as in タクシー (taxi) | The two short strokes sit on the left; the long one sweeps up. |
| ツ | `tsu` | tsu, as in ツアー (tour) | The two short strokes sit on top; the long one falls. |
| ソ | `so` | so, as in ソース (sauce) | Looks like ン (n): ソ's long stroke falls from the top. |

**5. Katakana 2: na to n, plus long vowels.** ナ…ン, ー, ティ, ファ. Reached from the `katakana` lesson body.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| メ | `me` | me, as in メニュー (menu) | |
| ラ | `ra` | ra, as in ラーメン (ramen) | Japanese r is a light tap, between r, l and d. |
| ン | `n` | n, as in パン (bread) | ン's long stroke rises from the bottom; compare ソ. |
| コーヒー | `kōhī` | coffee | ー makes the vowel before it long: ko-o-hi-i. |
| パーティー | `pātī` | party (the event) | ティ with a small ィ writes the English "ti" sound. |

**6. First kanji.** The 30 words of §10.3, one card each, reading at the start of the note. Lesson: `kanji-first`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| 日本 | `nihon` | Japan | Reading: にほん. 日 = sun, day; 本 = origin, book. |
| 人 | `hito` | person | Reading: ひと. After a country it is じん: アメリカじん. |
| 月曜日 | `getsuyōbi` | Monday | Reading: げつようび. 月 = moon, month. |
| 円 | `en` | yen | Reading: えん. The ¥ sign stands for this word. |
| 三 | `san` | three | Reading: さん. One line, two lines, three lines: 一 二 三. |

**7. Greetings and introductions.** Lesson: `desu`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| はじめまして | `hajimemashite` | Nice to meet you. | Said only the first time you meet someone. |
| よろしく おねがいします | `yoroshiku onegaishimasu` | I look forward to knowing you. | Ends every self-introduction; there is no exact English. |
| すみません | `sumimasen` | Excuse me. / Sorry. | Also a polite "thank you" when someone goes to trouble for you. |
| アメリカじんです | `amerikajin desu` | I'm American. | Country + じん = a person from that country. |
| おなまえは？ | `onamae wa` | What's your name? | お makes it polite. Never add お to your own name. |

**8. Family and people.** Lessons: `no-mo`, `teiru`, `noun-mod`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| はは | `haha` | my mother | Your own mother, when you talk to other people. |
| おかあさん | `okāsan` | (someone's) mother; Mom | Someone else's mother, or what you call your own. |
| きょうだい | `kyōdai` | brothers and sisters | |
| ともだち | `tomodachi` | friend | |
| あの ひと | `ano hito` | that person; he, she | Safer than かれ and かのじょ, which also mean boyfriend and girlfriend. |

**9. Numbers, money and time.** Lesson: `numbers`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| いちまん | `ichiman` | ten thousand | Japanese counts in ten-thousands: 20,000 is にまん. |
| さんびゃく | `sanbyaku` | three hundred | ひゃく becomes びゃく after さん. |
| せんえん | `sen'en` | 1,000 yen | A ¥1,000 bill; about the price of a bowl of ramen. |
| よじ | `yoji` | four o'clock | Not しじ or よんじ. |
| いくらですか | `ikura desu ka` | How much is it? | |

**10. Food and drink.** Lesson: `counters`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| いただきます | `itadakimasu` | (said before eating) | No English equivalent; say it before every meal. |
| おにぎり | `onigiri` | rice ball | |
| みずを ください | `mizu o kudasai` | Water, please. | |
| おいしいです | `oishii desu` | It's delicious. | |
| りんごを ふたつ ください | `ringo o futatsu kudasai` | Two apples, please. | The number goes after を, right before the verb. |

**11. Shopping and things.** Lessons: `kosoado`, `arimasu`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| これは いくらですか | `kore wa ikura desu ka` | How much is this? | |
| この かばん | `kono kaban` | this bag | この comes before a noun; これ stands alone. |
| あれ | `are` | that one (over there) | Far from both of you. それ is near the listener. |
| たかいです | `takai desu` | It's expensive. | |
| カードで いいですか | `kādo de ii desu ka` | Can I pay by card? | で marks how you pay. |

**12. Daily routine.** Lessons: `masu`, `past`, `te`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| おきます | `okimasu` | to get up | |
| まいにち | `mainichi` | every day | No particle after it. |
| ねます | `nemasu` | to go to bed; to sleep | |
| きのう | `kinō` | yesterday | |
| べんきょうします | `benkyō shimasu` | to study | |

**13. Describing things.** Lessons: `adjectives`, `to-omou`, `compare`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| おおきい | `ōkii` | big | |
| きれいな へや | `kirei na heya` | a clean room; a pretty room | きれい is a な-adjective, although it ends in い. |
| たかかったです | `takakatta desu` | It was expensive. | Not たかいでした. |
| ゆうめいな | `yūmei na` | famous | |
| むずかしい | `muzukashii` | difficult | |

**14. Likes, plans and free time.** Lessons: `suki`, `tsumori`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| ねこが すきです | `neko ga suki desu` | I like cats. | すき takes が, not を. |
| しゅみ | `shumi` | hobby | |
| えいがを みます | `eiga o mimasu` | to watch a movie | |
| やすみ | `yasumi` | day off; vacation | |
| いきたいです | `ikitai desu` | I want to go. | |

**15. Places and getting around.** Lessons: `particles`, `tai`, `koto-aru`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| えきは どこですか | `eki wa doko desu ka` | Where is the station? | |
| でんしゃで | `densha de` | by train | で marks how you travel. |
| みぎ | `migi` | right (direction) | |
| まっすぐ | `massugu` | straight ahead | |
| トイレ | `toire` | restroom | |

**16. Polite requests and help.** Lessons: `te-requests`, `n-desu`, `must`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| ちょっと まって ください | `chotto matte kudasai` | Please wait a moment. | |
| たすけて！ | `tasukete` | Help! | |
| あたまが いたいです | `atama ga itai desu` | I have a headache. | Word for word: "head is painful". |
| はいっても いいですか | `haitte mo ii desu ka` | May I come in? | |
| びょういん | `byōin` | hospital | びよういん (biyōin) is a hair salon. |

**17. Casual and polite.** Lesson: `short`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| うん | `un` | yeah (casual yes) | To friends only; はい to everyone else. |
| ありがとう | `arigatō` | thanks (casual) | Polite: ありがとうございます. |
| いく？ | `iku` | Are you going? (casual) | Dictionary form with a rising voice. Polite: いきますか。 |
| たべない | `tabenai` | don't eat (casual) | Polite: たべません. |
| じゃあ またね | `jā mata ne` | See you! | Between friends. |

**18. Traps for English speakers.** Lesson: `invite`.

| Japanese | `pron` | Meaning | Note |
|---|---|---|---|
| マンション | `manshon` | apartment building; condo | Not a mansion. |
| あなた | `anata` | you (avoid it) | Can sound cold or rude. Use the person's name + さん, or leave "you" out. |
| スマート | `sumāto` | slim, stylish | Not "intelligent". |
| はい たべません | `hai tabemasen` | That's right, I don't eat it. | はい agrees with a negative question: "You don't eat meat?" |
| けっこうです | `kekkō desu` | No, thank you. | A polite way to turn down an offer. |

### 9.1 Localisation

- **People:** Japanese names by family name + さん in polite scenes (たなかさん, すずきさん, さとうさん, やまださん); given names among friends (ゆき, けん, はると, さくら). The learner and other Americans in katakana: エミリー, マイク, ジェイソン, サラ. Teachers: やまだせんせい.
- **Places:** とうきょう, おおさか, きょうと, ほっかいどう, おきなわ, しぶや, しんじゅく (in kana); US cities in katakana: ニューヨーク, シカゴ, ロサンゼルス, シアトル. Places in town: えき, コンビニ, スーパー, こうえん, ぎんこう, ゆうびんきょく.
- **Food:** すし, ラーメン, おにぎり, てんぷら, そば, うどん, カレー, おちゃ, コーヒー, みず, ビール.
- **Money:** yen in kana (ひゃくごじゅうえん). Realistic prices [inference, §11]: おにぎり about ¥150, a train ride about ¥200, ramen about ¥1,000, a coffee about ¥400. US dollars only in English notes for comparison.
- **No anime or pop-culture names** in examples (no character, series or idol names), although many learners come from that world (§5). Generic words they know (せんぱい, かわいい, すごい) may appear in the right register.
- **Time and dates:** clock times in kana; days of the week in kana before `kanji-first`.

## 10. Typing and script

### 10.1 Script and `targetScript`

Japanese mixes three scripts with no spaces: hiragana (U+3041–3096), katakana (U+30A1–30FA, with ー U+30FC) and kanji (CJK Unified Ideographs, with 々 U+3005). This course uses hiragana and katakana throughout and 30 kanji words (§10.3).

`targetScript`: `[ぁ-ゖァ-ヺー々一-鿿]`. It covers hiragana, katakana, the long-vowel mark, the iteration mark and the CJK Unified Ideographs block (U+4E00–U+9FFF). Every Japanese string must contain one such character; no romaji string can match it, so a `pron` pasted into a target field fails the validator. Tested with the `u` flag on all 120 test rows of §6.3.

`accents: false` (Japanese has no Latin accent marks; the engine's accent "almost" path would do nothing useful) and `keys: ""` (no accent bar: a bar cannot hold the 71+ kana; see request 3 for real kana input).

### 10.2 The script stage

| Lesson | Letters taught | Linked deck | Other deck reached from the lesson |
|---|---|---|---|
| 1 `hiragana` | 46 basic hiragana + sound marks ゛ ゜ (as a rule) | Hiragana 1: a, ka, sa, ta rows (20) | Hiragana 2: na to n (26) |
| 2 `sounds` | small ゃ ゅ ょ, small っ, long vowels, ん, pitch | Hiragana 3: marks and small letters (28) | |
| 3 `katakana` | 46 katakana, ー, small ッ ャ ュ ョ ァ ィ ゥ ェ ォ, loanword combinations | Katakana 1: a, ka, sa, ta rows (20) | Katakana 2: na to n, plus long vowels (30) |

- **Three lessons, not more,** because the decks carry the drilling: the lessons explain the system (the grid, the marks, the small letters) and the decks give each letter its own card in spaced review. Genki likewise teaches all of hiragana in one lesson and all of katakana in the next [curriculum convention: [Genki intro](https://genki3.japantimes.co.jp/en/intro/)].
- **Order: hiragana → sounds → katakana** (§8).
- **It works with ordinary decks and lessons** (§9, letter decks): flip cards with audio, the meaning-to-kana quiz, and practice items that test reading through `mc`, `or` (whole-word tiles), `fi` (one missing kana, tap fallback) and short `ty` phrases on tiles. If the letter-drill machine is generalised (request 10), it reads the same five decks.
- **Romaji fades:** shown in stage 1, blurred from `desu` (§6). Practice in the script lessons may name a sound in the English prompt; never later (§6.6).

### 10.3 Kanji: a closed list of 30 words

The closed list is **word-level**: 30 words, each with exactly **one** reading, and these are the 30 cards of the "First kanji" deck. They use 30 different kanji. Any other word, including combinations of these kanji (三百円, 一人, 一本), stays in kana.

| Group | Words (reading) |
|---|---|
| Numbers and money (14) | 一 いち, 二 に, 三 さん, 四 よん, 五 ご, 六 ろく, 七 なな, 八 はち, 九 きゅう, 十 じゅう, 百 ひゃく, 千 せん, 一万 いちまん, 円 えん |
| Days and time (10) | 月曜日 げつようび, 火曜日 かようび, 水曜日 すいようび, 木曜日 もくようび, 金曜日 きんようび, 土曜日 どようび, 日曜日 にちようび, 六時 ろくじ, 五分 ごふん, 一年 いちねん |
| People and Japan (6) | 日本 にほん, 日本人 にほんじん, 人 ひと, 男の人 おとこのひと, 女の人 おんなのひと, 女の子 おんなのこ |

The kanji they use: 一 二 三 四 五 六 七 八 九 十 百 千 万 円 月 火 水 木 金 土 日 曜 時 分 年 本 人 男 女 子. The single-kanji numbers are cards for reading the numeral; in running text, numbers stay in kana (§2.7). This word list is also the lexicon for the §6.5 check. Metadata outside the course content (`self: "日本語"` in `profile.json`) is exempt.

- **Where kanji may appear:** the `kanji-first` lesson and its practice; the "First kanji" deck; and, from lesson 14 on, example rows (`{{ex:}}`) in lesson bodies, where a word from the list may be written in kanji (exactly as listed, with its one reading). Card targets in other decks, dialogue lines and all practice answers outside `kanji-first` stay in kana.
- **Every kanji answer also accepts the kana form:** `六時に おきます|ろくじに おきます`. Kanji are never required.
- **Card front, today:** "First kanji" cards show the kanji word; the kana reading goes at the start of the note ("Reading: にほん."), and the romaji line gives the sound. **What the engine lacks:** ruby / furigana (request 8). If it is built, the course can show kanji with kana above them on any card, and the list can grow in a later edition.
- **Why so few:** an A1 app course without furigana cannot show kanji to a learner who cannot read them; IME conversion makes typed kanji unpredictable (§10.5); and the course goal is speaking and reading kana. Genki I teaches 145 kanji over its 12 lessons [curriculum convention: Genki intro], so a learner who goes on to a textbook meets these again first. One reading per word keeps the romaji, the voice and the §6.5 check unambiguous (十分 was left out because it is also じゅうぶん, "enough").
- The validator cannot yet enforce the list (request 6). Until it can, the cold reviewer greps for `[一-鿿]` and checks each hit against the 30 words.

### 10.4 Spacing: phrases separated, as in beginner texts

**Rule:** all Japanese in the course puts one half-width space after each phrase (文節): a content word together with what is attached to it.
- **Attached (no space):** particles (わたしは, がっこうに, ともだちと), です and its forms (がくせいです, がくせいじゃないです), verb and adjective endings (たべます, たべませんでした, たかくないです, たかかったです, いきたいです), か, ね, よ, んです, ので, numbers with their counter (さんびゃくえん, ふたつ), お / ご and さん (おちゃ, たなかさん).
- **Separate:** each content word; the word after a て form (たべて ください, たべて います, たべても いいですか, たべては いけません); こと, つもり, ほう (たべた ことが あります, いく つもりです, いった ほうが いいです); おもいます and いって いました after と (おいしいと おもいます); いけません after なければ; な-adjective + な + noun (きれいな へや); この / その / あの before the noun (この ほん).
- **No space** before or after 。、？！ and none at the start or end of a string.

**Why**
- [curriculum convention] "Most beginner textbooks add spaces between words" in kana-heavy text (Nakano 2023, *The Reading Matrix* 23(2), describing the graded readers her study compared; [PDF](https://www.readingmatrix.com/files/31-eoaa50ms.pdf)). Her word-recognition test also showed learners mis-splitting kana strings in normal unspaced text.
- [inference] This course is written almost entirely in kana, where unspaced text is hard to read for anyone, and the author knows Japanese children's readers use the same phrase spacing (§11 asks for a check).
- **It works with today's engine:** the no-keyboard fallback for `ty` items splits `a[0]` at spaces into tiles, and so does the validator's rebuild check (§10.5). Unspaced answers would give a single tile.
- It also gives the voice clearer phrase boundaries [inference].
- The `hiragana` lesson says once that real Japanese is written without spaces and that the course adds them while it is written in kana.

### 10.5 Tiles, typing and the matcher

**What a typed answer is, by stage**

| Stage | Default answer mode | Typing, for learners who choose it |
|---|---|---|
| 1 (script lessons) | tiles and taps: `fi` becomes a 4-option tap, `ty` becomes phrase tiles | not expected; the learner has no Japanese keyboard yet |
| 2–4 | tiles | **kana**, typed with the device's Japanese keyboard (romaji or flick input) and **not converted to kanji**; or, if request 3 is built, romaji typed into the answer box and turned into kana as they type |

Romaji is **never** accepted as an answer (every answer must match `targetScript`), because the matcher would have to accept every romaji spelling of every answer, and because the goal is to read and write kana.

**What the matcher must do for Japanese** (and what it does today, read in `src/app.html`)

| Need | Today | Request |
|---|---|---|
| Ignore spaces: わたしは がくせいです = わたしはがくせいです | practice (`pracMatch`): only when the strings contain Hangul; deck typing and dialogue replies (`normT` → `normKo`): all whitespace is removed already | 1 (practice) |
| Strip 。、？！「」 and full-width ASCII | practice: done by `pracNorm` (with `fwFold` for U+FF01–FF5E). Deck typing: `normKo` strips ASCII ?!.,~… after `fwFold`, so ？！ go, but **。、「」 stay** | 1 (deck typing); until then card targets carry no 。、 (§9) |
| Half-width katakana (ｺｰﾋｰ) = コーヒー | not folded (`fwFold` stops at U+FF5E) | 4 (NFKC) |
| Hiragana for katakana (こーひー) as "almost" | wrong | 4 |
| Kana and kanji forms both accepted | only if the author lists both | authors list both (§10.3) |
| Long-vowel spellings: おかーさん, こおひい as "almost" | wrong | 4 (optional part) |
| Kanji produced by the learner's IME (学生 for がくせい) | wrong | 3 avoids it; the first typed item tells learners to type kana |

**How tiles are segmented** (the author supplies them; the engine never splits Japanese)
- **`or` items:** tiles separated by ` | ` (always, for Japanese). **Particles are separate tiles** (これ | は | すし | です), so the learner must put each particle after its noun, and a wrong particle can be the distractor (§7). です is a separate tile; a verb or adjective is one tile with its ending (たべませんでした). Up to 9 tiles; in sentences that would need more, phrase tiles are allowed (きのう | ともだちと | すしを | たべました).
- **`ty` items:** today's engine builds the fallback tiles by splitting `a[0]` at spaces, so the tiles are the **phrases** of §10.4 (すしを | たべます), and `x` holds **whole phrases** with the wrong particle or ending (すしが, たべました). The validator's rebuild check works the same way, so no change is needed for this to work.
- **`fi` items:** the gap is a particle, an ending, or one kana in the script lessons, written with the phrase spacing: `がっこう__ いきます`, a: `に|へ`, o: `で|を|が`.

**Punctuation:** written as in §2.7 in targets, examples and `a[0]`; ignored by the matcher. No ？ inside tiles; a final か is part of the last tile (ですか) or its own tile (か) at the writer's choice, consistently within one item.

### 10.6 Fonts and line height

- Mark every element that shows Japanese with `lang="ja"`: card faces, example rows, tiles, answer inputs, dialogue lines. Without it, some browsers draw kanji with Chinese glyph forms (Han unification) and pick a Chinese font [inference; standard web practice].
- Font stack for `:lang(ja)`: `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif`. No web font is needed: every target platform ships one of these [inference].
- Line height about 1.7 for Japanese text in lessons and on cards; kana on card fronts at least as large as the Korean course's Hangul.
- `word-break: keep-all` on Japanese strings, so lines break at the phrase spaces, not inside a word; `line-break: strict`, so a line never starts with ー, small kana or 。.
- The romaji line uses the app's monospace font; check that ā ī ū ē ō render in it.

### 10.7 What the lead needs to build, in priority order

The engine has run only Latin-script target courses. Japanese needs these changes. For each: what it is, and **what the course does if it is not built.**

1. **Space-insensitive matching for Japanese.** In `pracMatch`, extend the Hangul-only rule (`/[ㄱ-ㆎ가-힣]/` → also `぀-ヿ一-鿿`) so that spaces are removed before comparing when either string contains Japanese (the tile check, which joins tiles with spaces and calls `pracMatch`, then benefits too). In `normKo` (deck typing and dialogue replies), which already removes all spaces, also strip 。、「」.
   *If not built:* card targets carry no 。 or 、, so deck typing works today (§9). In practice, a typed answer must match the phrase spacing exactly, which no learner can know. Then `gen.js` should add the unspaced copy of every `a` variant for `ja` (a pipeline change, one line); if neither is done, typing is unusable and the course relies on tiles. Tiles are unaffected.
2. **Per-course tiles default.** `S.kbTiles` is one global flag, default off. Make it per course, or let an unset value fall back to a course default, with `en-ja` defaulting to tiles.
   *If not built:* en-ja learners meet input boxes first. The `hiragana` lesson's tip and the first typed item tell them to tap "No Japanese keyboard? Use tiles".
3. **Romaji-to-kana input in the answer box** (for example the WanaKana library, MIT licence, as a pinned npm version on jsDelivr): typing `sushi` shows すし live, uppercase or a toggle gives katakana, and it never produces kanji. Optional: a 50-sound kana pad for phones.
   *If not built:* typing needs the device's Japanese keyboard. The first typed item explains how to add it (iOS and Android both ship one) and says "type in kana and do not convert to kanji". Most learners will use tiles.
4. **Kana folding with an "almost" result:** NFKC normalisation (half-width katakana), hiragana typed for katakana or the reverse, and optionally ー typed for a hiragana long vowel (おかーさん), graded "almost" with the correct form shown, as accents are for es.
   *If not built:* those answers are wrong. Authors never list cross-script variants.
5. **Romaji consistency check in `validate.js`** (§6.5), plus warnings for the word `ha` or `he` next to a phrase that ends in は or へ, and for any `ou` / `uu` at a word end (verb forms only).
   *If not built:* `pronPattern` and the same-string check are the only machine checks. The cold reviewer reads every pron against §6.1, and the native-check list (§11) puts prons first.
6. **Kanji lint:** fail any CJK ideograph that is not in §10.3, and any practice answer list that contains a kanji answer without an all-kana variant.
   *If not built:* the reviewer greps for `[一-鿿]`.
7. **Fonts, `lang="ja"`, line height and line breaking** (§10.6). Build plan item 8.
   *If not built:* kanji may appear in Chinese glyph forms on some devices, and lines are cramped. The course still works.
8. **Ruby / furigana:** a syntax such as `{日本|にほん}` in targets, examples and lesson bodies, rendered as `<ruby>` with the reading above; the voice reads the base text; the matcher accepts the base or the reading; the validator allows `<ruby>` and `<rt>` in bodies.
   *If not built:* kanji stay inside the 30-kanji policy of §10.3, with readings in card notes.
9. **More than one deck per lesson** (for example `deck2`), so that `hiragana` and `katakana` link both of their letter decks.
   *If not built:* Hiragana 2 and Katakana 2 are linked from no lesson; each script lesson's final tip names the second deck, and the deck list shows them in order.
10. **Letter-drill machine generalised to kana:** see a kana, pick or type its romaji; hear it, pick the kana; per-row progress. Data: the five letter decks. The deck typing quiz for a letter deck should accept the romaji (the card's `pron`) instead of asking for the kana; `renderTypeQ` already accepts the `pron` for `zh`, so the same branch, with macrons and spaces folded, would serve `ja` in every deck. `isLetterDeck` today matches only Hangul decks.
    *If not built:* the letter decks work as ordinary decks (flip, audio, meaning-to-kana quiz). The deck typing quiz should be hidden for the five letter decks, because it would ask for kana that the learner cannot type yet.
11. **Pron visibility:** shown in the three script lessons and their decks, blurred (tap to reveal) from `desu` on, a setting to show it always, never in practice items.
    *If not built:* the romaji is always shown, and learners lean on it longer than is good for their vowels (§6, Knight 2013).
12. **Voice check:** confirm `ja-JP` voices on the test devices read single kana correctly (は as "ha" on a letter card, を as "o"), read the particle は as "wa" in phrases, and show the "no voice" message when none is installed.
    *If not built:* a misread is possible on short kana-only strings; the reviewer listens to the 18 decks' first cards.
13. **Author segmentation for `ty` fallback tiles:** allow ` | ` inside a `ty` model answer (stripped for display and matching), so the fallback tiles can split particles from nouns as `or` items do.
    *If not built:* the fallback tiles are phrases (§10.5), which already works.
14. **Model answer display for `or` items:** `pracModel` joins tiles with spaces (これ は すし です); for Japanese, join them with the phrase spacing or none.
    *If not built:* the model answer shows a space at every tile boundary (cosmetic).
15. **Do not run `repron.js ja`:** there is no `respell.js` (§6.4). `repron.js` would throw on the missing module.

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The romaji of every row** (§6.1), above all: ō vs ou, ē vs ei, word spacing, and the particle spellings wa / e / o. The format is policed by a pattern; the content is typed by hand, and only the §6.5 check (not yet built) would catch a romaji that spells different kana.
2. **The phrase spacing rule** (§10.4): where Japanese beginner texts and children's readers put the spaces, especially after て forms (たべて ください), before ことが / つもり / ほうが, and after と (おいしいと おもいます). Only one source was opened, and it says only that most beginner textbooks space words. The claim about children's readers is the author's knowledge.
3. **The register rules** (§2.2–2.4): whether short forms only from lesson 20 is right for learners who already hear casual speech in media; which お / ご words to teach; the family-word pairs; whether かれ / かのじょ are really best avoided at A1.
4. **The Traps deck and §4.7:** はい / いいえ to negative questions, けっこうです vs だいじょうぶです vs いいです as refusals, ちょっと… as a refusal, すみません as "thank you", and the false friends (マンション, スマート, バイキング, コンセント, クレーム, バイク, サービス), which come from a commercial blog.
5. **The `greet` strings:** おやすみなさい is said when going to bed, not as a greeting to someone who is up late. Is it acceptable in the app's late-night slot, or should it be こんばんは?
6. **The safe-distractor table** (§7): whether every "wrong" particle in it is really wrong in the example verbs (に vs で with すみます and はたらきます was deliberately excluded).
7. **The sample cards:** especially カードで いいですか, はいっても いいですか, あの ひと as a polite "he / she", びょういん / びよういん, the prices in §9.1, and the letter-card mnemonics ("chi, as in cheese").
8. **The kanji word list** (§10.3): whether these 30 words are the right first ones (曜 is hard to write; 五分 is also read ごぶ, "even"), and the readings chosen for 四 (よん) and 七 (なな).
9. **Pitch** (§6, §8 `sounds`): the three minimal pairs (はし, あめ, かみ) and how the voice says them.

**Evidence that could not be opened, or was read only in part**
- **Particle errors of English speakers:** no corpus count of English speakers' particle errors was opened. Woods (2021), Noji (2014) and Kanno (1997) were read as abstracts only; Anzai (1985) as a record page with no findings. The only error count (Pavlovič 2020) is of Slovene learners. Yagi (a Japan Foundation paper on particle errors) redirected to a download that was not fetched. The ranking in §4 is therefore partly [inference].
- **Verb-final order, polite endings, adjectives, yes / no, numbers:** no learner study opened; the errors are standard teaching points and the author's knowledge.
- **Romaji:** Knight (2013) was read in part; the excerpt reports a significance test with an unclear t-value, and Okuyama (2007) and Hatasa (2002) are cited second-hand from it. The current Wikipedia page on Hepburn romanization was blocked; an IPFS mirror was used.
- **Genki:** the syllabus PDF and the publisher's intro page were opened. Genki's own romaji style (macrons or doubled vowels), its use of spaces in early lessons, and the names "ru-verb / u-verb" were not checked on a page (the author's knowledge).
- **Learners:** the MLA's 2021 figure for Japanese enrolments in US higher education was not opened (only news reports on other languages were). The Japan Foundation gives North American, not US, figures for motivation. No survey of app learners' reasons was found.
- **Pitch:** the PMC article found in search was behind a browser check. Shport's chapter has no year on the page.
- **Fonts, IME and voice behaviour** (§10.5–10.6, request 12) are the author's knowledge, not tested on devices.

**The roadmap and the brief**
- The brief says to use "the `de` entry" of `packs/roadmaps.js`; the lead's instruction says to use the `ja` entry instead, which this profile does.
- `numbers` has an empty `roadmap` field; the roadmap preview will not show it.
- The brief allows up to three added lessons and 20–28 lessons. Keeping all 27 roadmap items leaves room for one addition; a greetings lesson and a separate hiragana-2 lesson were considered and not added (§8).
- Two letter decks (Hiragana 2, Katakana 2) are linked from no lesson, because a lesson has one deck (request 9).
- PRACTICE-SPEC says "No romanization in practice items". §6.6 allows romaji as a sound label in the English prompts of the three script lessons only; the lead should confirm.

**Engine and pipeline:** §10.7, requests 1–15. The most important are space-insensitive matching (1), a per-course tiles default (2), romaji-to-kana input (3), and the romaji consistency check (5).

**Not verified at all**
- How well US learners read macron romaji compared with doubled vowels; no study compares them.
- Whether phrase-spaced kana text helps or slows the move to normal unspaced Japanese.
- Whether device `ja-JP` voices read kana-only phrases with natural pitch.

## Sources

Web pages opened and used for this profile (2026-11-19):
- [The Japan Times: GENKI 3rd edition syllabus (PDF)](https://bookclub2.japantimes.co.jp/download/files/genki3/genki-3rd_syllabus_E.pdf)
- [The Japan Times: A look at GENKI 3rd edition (romaji only in lessons 1–2; hiragana lesson 1, katakana lesson 2, kanji after; 145 kanji in GENKI 1)](https://genki3.japantimes.co.jp/en/intro/)
- [Japan Foundation: Survey on Japanese-language education abroad 2021, North America (PDF)](https://www.jpf.go.jp/e/project/japanese/survey/result/dl/survey2021/5_North_America.pdf)
- [Duolingo: 2024 Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)
- [Woods, H. (2021). L2 acquisition of interface properties: Case of Japanese wa and ga. PhD thesis, ANU (record and abstract)](https://openresearch-repository.anu.edu.au/items/bf43bce4-cdba-4e51-89fc-09df977b6d3f)
- [Anzai, Y. (1985). Teaching WA and GA to English-speaking students. ANU sub-thesis (record and abstract)](https://openresearch-repository.anu.edu.au/items/678bdb14-04a1-49c1-85a6-64644b45c690)
- [Noji, M. (2014). The acquisition of nominative case marking in L2 Japanese: a corpus study. *Second Language* 13, 39–56 (abstract)](https://www.jstage.jst.go.jp/article/secondlanguage/13/0/13_39/_article/-char/en)
- [Kanno, K. (1997). Evidence for nativism from second language acquisition. *Cognitive Studies* 4(1) (abstract)](https://www.jstage.jst.go.jp/article/jcss/4/1/4_1_1_9/_article/-char/en)
- [Pavlovič, M. (2020). Grammar errors by Slovenian learners of Japanese. *Acta Linguistica Asiatica* 10(1)](https://dlib.si/stream/URN:NBN:SI:DOC-SLLUK0NF/06c11fe2-0eab-45ec-9117-7287eb1d973f/TEXT)
- [Knight, K. J. (2013). L1 English vocalic transfer in L2 Japanese. PhD dissertation, University of Georgia (read in part)](https://getd.libs.uga.edu/pdfs/knight_kenneth_j_201312_phd.pdf)
- [Hardison, D. M. & Motohashi Saigo, M. (2010). Development of perception of second language Japanese geminates. *Applied Psycholinguistics* 31(1) (abstract)](https://www.cambridge.org/core/journals/applied-psycholinguistics/article/abs/development-of-perception-of-second-language-japanese-geminates-role-of-duration-sonority-and-segmentation-strategy/4283B936B72F84BB50378207083893A5)
- [Hirata, Y. et al. (2006). Training native English speakers to identify Japanese vowel length with fast rate sentences. Interspeech 2006 (abstract)](https://www.isca-archive.org/interspeech_2006/hirata06_interspeech.html)
- [Shport, I. A. Acquisition of Japanese pitch accent by American learners (DIJ volume chapter)](https://www.dijtokyo.org/wp-content/uploads/2016/09/165-187_ACQUISITION-OF-JAPANESE-PITCH-ACCENT-BY-AMERICAN-LEARNERS_43-Heinrich_Sugita-11.pdf)
- [Laméris, T. J. & Graham, C. L2 perception and production of Japanese lexical pitch: a suprasegmental similarity account (PDF)](https://core.ac.uk/download/334953769.pdf)
- [Schaefer, V. & Darcy, I. (2020). Fried persimmons and dried oysters, or why teaching pitch accent matters. *Journal of the NCOLCTL* 26](https://psycholinguistics.indiana.edu/papers/SchaeferDarcy(2020)fried-persimmons-and-dried-oystersNCOLCTL.pdf)
- [Nakano, T. (2023). Exploring the possibility of incidental grammar learning through extensive reading. *The Reading Matrix* 23(2)](https://www.readingmatrix.com/files/31-eoaa50ms.pdf)
- [Wikipedia: Hepburn romanization (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Hepburn_romanization)
- [Nayuki: Variations on Japanese romanization](https://nayuki.io/page/variations-on-japanese-romanization)
- [Coto Academy: Common Japanese mistakes: using あなた (school blog)](https://cotoacademy.com/common-japanese-mistake-anata/)
- [JapanChat: Japanese grammar mistakes English speakers make (commercial blog)](https://japanchat.pnyo.jp/magazine/japanese-grammar-mistakes-english-speakers)
- [LingoDeer: 20 Japanese-English false friends (commercial blog)](https://blog.lingodeer.com/20-japanese-english-false-friends-you-need-to-know/)

Opened but not used: Ando, *The case particle ni and its acquisition* (DIJ volume; German-speaking learners, no ni / de findings); Hwang (2002, University of Hawaiʻi; Korean as a foreign language); a Language Magazine report on the MLA 2021 survey (no Japanese figures); *Japanese with Anime* on spaces (no rule for beginner texts).

Local project files read: `docs/briefs/target-profile-ja.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md`, `docs/TARGET-BRIEF.md`, `docs/profiles/en-vi.md` and `tools/target/vi/profile.json` (shape models), the headings of `docs/profiles/en-es.md` and `tools/target/es/profile.json`, the head and command line of `tools/target/es/respell.js`, `tools/target/lib.js`, `validate.js`, `repron.js` and `link_roadmap.py`, `packs/roadmaps.js` (entry `ja`), the head of `docs/profiles/ja.md` (reverse course), and the matchers and tile code in `src/app.html` (`fwFold`, `normT`, `accBar`, `pracNorm`, `foldAcc`, `pracMatch`, `pracMode`, the tile builder and `pracModel`).

# am-en digest: the rules writers need (read this INSTEAD of the full profile)

Authority: `docs/profiles/am.md` (open only the section your brief names). No native speaker will review before release: when unsure of an Amharic string, pick the plainer wording and list it in your report.

## Who and how
- Learners: Amharic readers in Ethiopia and the diaspora, often with another home language, schooled in British-style English, weak in listening and pronunciation. Explain English **by contrast with Amharic grammar**, never by translating the Korean argument.
- **Amharic:** Standard Amharic of Addis Ababa, fidel only, words split by spaces (never ፡), no combining marks, NFC.
- **Address the learner as እርስዎ with the polite, gender-free verb:** ይምረጡ, ይጻፉ, ያዳምጡ, ይድገሙ, እንደገና ይሞክሩ, ያረጋግጡ. Never አንተ/አንቺ to the learner, never ምረጥ/ምረጪ. Buttons: polite verb or noun (ቀጣይ, መልስ). Praise: ጎበዝ!, በጣም ጥሩ!, ትክክል!
- **In translations:** አንተ/አንቺ by the character's gender between friends and family; እርስዎ for strangers, shops, office, doctor, elders and for a generic *you* in a prompt. *I* sentences need no gender.
- **English:** American (en-US), identical to ko-en except the localisations below. British forms are never called wrong («በእንግሊዝ፦ lift»).

## Typography
- ። ends every Amharic sentence (also after an English word); ፣ comma, ፤ semicolon, ፦ before an example or list; ? and ! as in English; no space before them. Lines that are only English keep English punctuation. Nothing at the end of buttons, labels, tabs, deck names.
- «…» around Amharic phrases. English: `<b>` in lesson HTML, bare in `q`, `p`, `why`, `hint`, notes. Never attach an Amharic prefix or ending to a Latin word; rephrase («a የሚለው ቃል»).
- Western digits only. ✗ wrong, ✓ right, joined by «ትክክለኛው፦»; two-column tables in lessons.
- House spellings: ግስ, ዓረፍተ ነገር, እንግሊዝኛ, ኢትዮጵያ, ኢሜይል, ሥራ, ሰዓት, ትምህርት.

## Terms (one per concept, everywhere)
አርቲክል (a / an / the) · ውስን / ውስን ያልሆነ (definite / indefinite) · ስም · የሚቆጠር ስም / የማይቆጠር ስም · ነጠላ ቁጥር / ብዙ ቁጥር · ተውላጠ ስም · ባለቤት / ተሳቢ · ግስ · አጋዥ ግስ (helping verb) · be (am / is / are) = ነው · 1ኛ / 2ኛ / 3ኛ ቅርጽ (go / went / gone) · -ing ቅርጽ · ጊዜ (tense; names in English: Simple Present (የአሁን ጊዜ), Simple Past (ኃላፊ ጊዜ), Present Perfect …) · ሁኔታ የሚገልጽ ግስ (stative verb) · Passive (ተገብሮ) · መስተዋድድ (preposition) · መስተጻምር (conjunction) · ቅጽል / ተውሳከ ግስ · የጥያቄ ቃል · አሉታዊ / አዎንታዊ · ሐረጋዊ ግስ · ፈሊጥ · ኢትዮጵያዊ እንግሊዝኛ · አጠራር (pronunciation) · የአጠራር መርጃ (the aid) · ጫና (stress) · አናባቢ / ተነባቢ · ክፍለ ቃል · ፊደል / ፊደላት · ትልቅ / ትንሽ ፊደል. UI: ትምህርት, ልምምድ, ክለሳ, ስብስብ / ካርድ, ተከታታይ ቀናት, ፍንጭ, አጭር ፈተና, ትክክል / ስህተት, መልስ / ማብራሪያ, ደረጃ, እድገት, አስተያየት. Level titles: ጀማሪ, ተማሪ, ተጫዋች, መንገደኛ, ነዋሪ, ባለሙያ, ሊቅ.

## What to teach against (profile §4)
1 articles (Amharic has no a/an; "the" is an ending -ው/-ዋ/-ቱ): *I am student*, *He is best student* · 2 he/she/it -s · 3 plurals after numbers, uncountables (*furnitures*) · 4 *call to me, tell to him, let her to come* (object endings inside the Amharic verb) · 5 questions without helper or inversion (*Where you are going?*) · 6 continuous with states (*I am not understanding*) · 7 Present Perfect with past time, *since 8 years* · 8 negative concord (*Nobody didn't come*: Amharic ማንም አልመጣም) · 9 dropped subject, no dummy it/there · 10 one Amharic በ- for in/on/at; *go home* · 11 collocations (*make homework*, *passed to university*, *borrow me*) · 12 relative clause after the noun (Amharic የ- before) · 13 sounds · 14 Ethiopian time (7 a.m. = ጠዋት 1 ሰዓት) · 15 please/could carry what እርስዎ carries.

## Standing rule (every practice set)
`article-plural`: at least half of the order items and half of the type items hinge on a/an/the or plural -s, and their `why` contains one of **አርቲክል · ብዙ ቁጥር · የሚቆጠር · የማይቆጠር**.

## Pronunciation aid (`pron`, required)
- **Only from the tool:** paste from `tools/content/am/pron_lookup.json`, or write zh-style IPA and run `node tools/content/am/pron_am.js "/…/"`. Never type an aid. Practice items carry none. A string has the same aid in every file.
- Key: 1st order ʌ ə ɜː · 2nd ʊ (uː + ው) · 3rd ɪ (iː + ይ) · 4th æ ɑː (aɪ + ይ, aʊ + ው) · 5th e (eɪ + ይ) · 7th ɔː (oʊ + ው, ɔɪ + ይ) · **6th order = no vowel, always** · θ ሠ, ð ዸ, v ቨ, ŋ ን, h ሀ (ኸ with ʌ/ə), initial ʌ/ə ኧ · ˈ on words of 2+ syllables. Examples: think ሢንክ, this ዺስ, seat ሲይት / sit ሲት, boat ቦውት / bought ቦት, school ስኩውል, asked አስክት.
- Check: `node tools/content/am/pron_check.js all` → pattern 0, banned 0, diff 0, conflicts 0.

## Lessons
40 shared ids in order + `ethiopian-english` (after smalltalk, NEW English, deck 22), `stative-since` (after perfect-2, hi-en's English side), `articles-3` (after passive, ko-en's English side). Lesson 1 `alphabet` is the writing-system foundation (shared English, alphabet_check.js); lesson 2 `pron` teaches the aid's key. The lead's `tools/content/am/deviations.p.json` already records the three lessons, every deck localisation and every shared-item localisation: your fragment lists only changes the lead did not.

## Localisation (shared English items: exact list in deviations.p.json `items`)
Minji → Selam (woman), friend Dawit (man), Hana · Mr. Kim → Mr. Haile · Korea (home) → Ethiopia · Korea (abroad) → Kenya · Seoul → Addis Ababa (order tile: Adama) · Busan → Hawassa · Jeju → Lalibela · Daegu → Adama · kimchi → injera · won → birr · K-pop → football · BTS → Teddy Afro · Han Kang → Haddis Alemayehu · bias → favorite singer · Korean embassy → Ethiopian embassy · Korean (language) → Amharic (relative#12: Japanese). Amharic text spells them ሰላም, ዳዊት, አዲስ አበባ, ሀዋሳ, ላሊበላ, አዳማ, እንጀራ, ብር.

## Deck names
Verbatim from `tools/content/am/DECKNAMES.md` (22 rows; 21 = «የእንግሊዝኛ ፊደላት», 22 = «ኢትዮጵያዊ እንግሊዝኛ፦ እዚህና ውጭ»).

## Interface (writer I)
Counts: label + ፦ + number, one wording for 1 and many («ካርዶች፦ {1}»). Language-name slots after ፦. Tabs ≤ 8 characters: ዛሬ, ልምምድ, ክለሳ, ትምህርቶች, ንባብ, ስልጠና, እድገት, አስተያየት. Weekdays: ሰኞ ማክ ረቡ ሐሙ ዓር ቅዳ እሑ. Toasts impersonal (ተቀምጧል).

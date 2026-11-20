# chr research notes (session 2026-11-20)

## Access
- WebFetch only fetches URLs that appeared in WebSearch results. Not fetchable: webapps.cherokee.org/wordlist (CN word list search), language.cherokee.gov/media/4emjgbyy/2019consortium_wordlist.pdf (Consortium word list PDF), cherokeedictionary.net/first500.
- language.cherokee.gov/word-list/ opened: "ᎧᏁᎢᏍᏗ ᏕᎦᏅᏛᎢ Word List", over 7,000 words, a lexicon not dictionary, updated Aug 13 2026; entries only via webapps search tool.
- cherokeedictionary.net home opened: search form (phonetic/syllabary/English); sample: ᎬᎾ Turkey; ᏎᎷ ᎦᏚ Cornbread; ᎠᏑᏍᏗ Gravy; sources incl. Cherokee Dictionary (Feeling), CNT, Bushyhead; Durbin Feeling spellings accepted. Links: /syllabary, /first500, /transliteration, /grammar.

## Joyner PDF (src id J) https://www.cherokeelessons.com/pdf-downloads/Cherokee-Language-Lessons-Volume-I-embedded-cover.pdf
- Licence: (c) 2016 Michael Joyner; CC BY-SA 3.0 (licence line garbled in extraction; "you are free to copy, share, and update this material").
- Fetch tool limits verbatim quotes to 125 chars; vocab lists obtained as index lines (raw_joyner_*.txt). Lesson 1-3 no vocab; vocab from L4.
- Dialects p3: Elati 'r' for 'l', extinct ~1900; Otali = Oklahoma + Snowbird NC, book primarily Otali-based; Kituhwa = Eastern, Qualla Boundary NC. No word-level examples except r/l and s/ts variants (pp5-6).
- Pron guide pp5-8: g "either the 'g' in 'gaff' or the 'k' in 'kite'. When in doubt, use the 'g' sound." (p5); s,d,t middle of tongue not tip (p7); "In Otali Cherokee the 'j' and 'ch' soundings are more common." (p5); tl/hl "When in doubt, use the 'hl' sound." (p6); intrusive h: "Except for the special Cherokee letters Ꮏ, 'hna', and Ꮐ, 'nah', this sound is not written." (p8); ɂ "A dotless question mark indicates a brief pause in speaking." (p6); vowels usually long, short when not followed by tone mark or at word end; underdot always short (p6); tones ² normal/low, ³ high, ¹ extra low fall, ⁴ extra high rise, final unmarked ⁴³ high fall (pp6-7); "the 'v' and 'ṿ' vowels are always nasalized" (p7); syllables "at an equal volume" (p7).
- Syllabary chart lists Ꭶ ga and Ꭷ ka separately (pp13-14). Book does NOT say syllabary omits tone/length/glottal.
- Learner remarks: "Simply learning phrases so you can speak 'pidgin' Cherokee is not learning Cherokee." (Preface p1); "Cherokee appears to work opposite to the way English does" (pp1-2); "Whenever you see an English translation of 'he', you can usually substitute 'she' or 'it'." (p8); avoid we/us, use "he and I"; "you" = one person unless marked (p8).
- No -s/-sgo question ending, no Tla yigoliga in Joyner (first 100k chars).
- Lesson topics: L4 set expressions, L5 numbers 1-7 + how many, L6 sees (he/they) + woman/man/animals, L7 I/you see + here/there, L8 pronouns, L9 animals/nouns, L10 ani- plural people, greetings tohitsu / dvgvgohi, L11 girl/boy, numbers 8-100, L12 names (dagwadoa), nationalities, English names, L13 si, tla.. no longer, something, L14-15 colours (+ animate/inanimate plural), L16 (no list), L17 have (solid/alive), L18 negation with Ꮭ + yi-/ya-/yu-, he sees me/you, L19 they see me/you; have them; L20 copula igi/iga/gesvgi..., L21 want; who; table/chair, L22 ka, hurry, count, all, colour.

## Cherokee Nation materials (src CN)
- teaching-materials page https://language.cherokee.gov/learning-materials/teaching-materials/ lists: 2024 Consortium Word List PDF; Cherokee Reader (Feeling); Handbook of the Cherokee Verb (Feeling, Kopris, Lachler, van Tuyl); Learning to use the Cherokee Verb (Feeling); OU Dictionary (Englutan/Utana); See, Say, Write textbook + MP3 zip (101 MB); Set A & Set B poster; syllabary charts. "free to download"; NO licence/terms stated. None of the PDFs fetchable (allowlist: only search-result URLs; www.cherokee.gov/media/... refused). Classroom posters page lists PDFs: Colors, Days and Months, Days of the Week, Dollars and Cents, Farm Animals, Fruits... (English titles only visible). We Are Learning Cherokee not on page 1.
- Set A/B poster found at languagetech.cherokee.org/media/fadc4zn5/grammar_a_b.pdf -> redirects to www.cherokee.gov (refused).

## DAILP greetings (src DG) https://wp.dailp.northeastern.edu/greetings  Patrick Del Percio; no licence/date/dialect stated
- ᏙᎯᏧ tohitsu; ᎣᏏᏧ ositsu (how are you); Osiyo, short siyo; tohi = peace/balance root; osi = good root; -tsu question suffix; replies osiquu / tohiquu; nihina "how about you?" (nihi you + -na); ᏗᏣᎳᎩ ditsalagi syllabary; ᏲᏁᎦ yonega English; learners confuse -quv and -quu suffixes (page remark). ᎣᏏᏲ used at end of letters (older letters).
- kaikki.org (Wiktionary extract): ᎣᏍᏓ osda adj good, nice; fine.

## r12a (src R12A) https://r12a.github.io/scripts/cher/chr  Richard Ishida, updated 27 Apr 2026
- "85 characters plus Ꮝ"? page says syllabary has 85 characters plus Ꮝ for s; Ᏽ/ᏽ "One syllable is archaic and not used."
- Unicode 17: 2 blocks, 172 chars; lowercase added Unicode 8.0; "Cherokee case folds to the previously encoded uppercase letters"; uppercase default and best supported in fonts.
- Syllabary omits tones, vowel length, glottal stop; syllable-final h and ʔ generally not written; most syllable-initial aspiration not written; aspiration distinguished for only six letter pairs; Cherokee does not contrast voiced/voiceless stops.
- Latin orthographies differ (d/t vs t/th).
- Fonts named: Noto Sans Cherokee, Galvji, Gadugi; lowercase glyphs hard to find in fonts.
- Punctuation: Latin/ASCII marks, ASCII digits; words separated by spaces; LTR.
- Ꮝ: cluster start (ᏍᎪᎯ) and syllable-final s (ᎯᏴᏫᏯᏍ). Ꮐ nah vs Ꮎ na: syllable ending in h.
- Unicode names (Python unicodedata 15.1): U+13A0..13F4 = 85 letters A..YV; U+13F5 MV; U+13F8..13FD small ye..mv; U+AB70..ABBF small a..ya. Names: QUA..QUV row, TSA..TSV, DLA, TLA..TLV, NAH, HNA, S, KA (only k-letter).

## Fonts / keyboards
- CN fonts page https://language.cherokee.gov/fonts-and-keyboards/cherokee-fonts/ : third-party Noto Sans Cherokee ("open-source font developed by Google"), Aboriginal Sans/Serif, Digohweli, Everson Mono, Code 2000, Marin; CN's own fonts Anowelisgv, Donisiladv, Tsulehisanvhi ("freely available to download, share and modify not-for-profit"). Page does not say which OS ship fonts.
- CN keyboards page https://language.cherokee.gov/fonts-and-keyboards/cherokee-keyboards/ : Win10 pre-installed keyboard (activate); macOS CN layout installed by default, phonetic download; iOS/iPadOS "can access a Cherokee keyboard and a Cherokee font" (activation instructions); Android download keyboard; Chromebook Google Input Tools.
- Fontsource https://fontsource.org/fonts/noto-sans-cherokee/about : OFL-1.1, (c) 2022 The Noto Project Authors, variable wght 100-900, 186 chars (Cherokee, Cherokee Supplement, combining marks), v2.001.
- Android source tree has external/noto-fonts/notosanscherokee (METADATA v2.000, 2022-01-27, OFL) https://android.googlesource.com/platform/external/noto-fonts/+/1406d5f70c020e4ab13932071a2da43c97069dc2/notosanscherokee/METADATA ; does not prove it ships on devices.
- Microsoft Gadugi https://learn.microsoft.com/pt-br/typography/font-list/gadugi : supports 'Cher'; Windows 8, 8.1, 10, 11.
- W3C Cherokee Gap Analysis 2024 https://www.w3.org/TR/2024/DNOTE-cher-gap-20240704/ : macOS 10.15 fonts all except Plantagenet Cherokee support lowercase; Windows 10 Gadugi default, supports lowercase, Plantagenet Cherokee doesn't; lowercase issue 'advanced'. No iOS/Android coverage.
- Apple developer system fonts page: truncated; Cherokee row not seen.

## cherokeedictionary.net about (src CED) https://cherokeedictionary.net/about
- CED-Online team (Nuttle, Orr, Whitlock, Orndorff); built on Feeling 1975 + Consortium Word List, Noquisi, Raven Rock, Bushyhead, Holmes & Smith 1997, Montgomery-Anderson 2008, Kirk 2012, Uchihara 2013, CNT, CN and KPEP materials; every entry cites source. "made freely available to all in the spirit of openness"; definitions not copyrighted; CED example sentences "used here with permission"; no reuse licence for entries/recordings; contact cherokeedictionarynet AT gmail. Audio not stated on about page (search form has "Has Audio" checkbox).
- Individual entry/search pages not fetchable (allowlist).

## Wiktionary (cross-check only)
- ᏣᎳᎩ tsalagi noun Cherokee (kiwix mirror of en.wiktionary 2023-04) https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E1%8F%A3%E1%8E%B3%E1%8E%A9
- ᎣᏍᏓ osda adj good, nice; fine (kaikki) https://kaikki.org/dictionary/Cherokee/meaning/%E1%8E%A3/%E1%8E%A3%E1%8F%8D/%E1%8E%A3%E1%8F%8D%E1%8F%93.html

## Native History Association tutor (src NHA) CC BY 4.0, romanised only (no syllabary)
- L1 https://nativehistoryassociation.org/tutor_tsalagi1_study.php : Osiyo. Dtohitsu? Osda. Gado detsadoa? Hatlv hinela? Gadogi hadia? Usganoli hiwonihi. Tla yigoliga. Holigatsv? Wado.
- L6 https://nativehistoryassociation.org/tutor_tsalagi6_study.php : Unadodaquonvi Mon; Taline iga Tue; Tsoine iga Wed; Nvgine iga Thu; Tsungilosdi Fri; Unadodawidena Sat; Unododaquasgvi Sun; Iga day; Gohi iga today; Svnalei tomorrow.
## CLDR chr via DateTime::Locale (src CLDR) https://man.archlinux.org/man/DateTime::Locale::chr.3pm.en  syllabary only
- Mon ᎤᎾᏙᏓᏉᏅᎯ Tue ᏔᎵᏁᎢᎦ Wed ᏦᎢᏁᎢᎦ Thu ᏅᎩᏁᎢᎦ Fri ᏧᎾᎩᎶᏍᏗ Sat ᎤᎾᏙᏓᏈᏕᎾ Sun ᎤᎾᏙᏓᏆᏍᎬ
- months ᎤᏃᎸᏔᏅ ᎧᎦᎵ ᎠᏅᏱ ᎧᏬᏂ ᎠᏂᏍᎬᏘ ᏕᎭᎷᏱ ᎫᏰᏉᏂ ᎦᎶᏂ ᏚᎵᏍᏗ ᏚᏂᏅᏗ ᏅᏓᏕᏆ ᎥᏍᎩᏱ
- Pairing NHA+CLDR by table: Tue/Wed/Thu pass; Fri passes with vowel drop (tsu-na-gi -> tsungi); Mon fails (hi dropped), Sat fails (qui vs wi), Sun fails (na vs no, extra i).

## PROGRESS (2026-11-20)
- DONE: tools/target/chr/HOLD, lexicon.txt (built by build/mklex.py from raw_joyner_*.txt; 308 keys incl phrases + 4 SUF), respell.js (--check, --test pass).
- 12 of 85 signs never in a lexicon word: lu mi mo mu nah quv te dla tle tlo tlv wv (+ Ᏽ mv obsolete).
- PLAN: sign cards for the 4 syllabary decks via signValue (Unicode name, qu->gw); 18 decks; 20/27 roadmap lessons supported; cut classroom, family, food, time, feelings; places merged into pronouns (here/there).
- NEXT: match.js prototype + tests; data.js -> profile.json; en-chr.md sections; guard script (every Cherokee token in md/json is a lexicon key or sign).
- md §1-5 written; guard.js passes. NEXT §6-7, then §8-9 (lessons.md / decks.md generated), §10-11, Sources.
- §1-9 written, guard OK. NEXT §10, §11, Sources; add NOSUF to §6.4.
- ALL SECTIONS DONE; final checks pass.

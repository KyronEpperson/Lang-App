# Core words, Flirting and Compliments (en-ja): sources, order, skips

Writer CORE-JA, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (ten core decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments), this file, `POS-COVERAGE.md`, and twelve deck entries appended to `profile.json`.

## 1. Frequency source actually opened

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| `2_cejc_frequencylist_suw_token.tsv` from the GitHub repository [forsakeninfinity/CEJC_yomichan_freq_dict](https://github.com/forsakeninfinity/CEJC_yomichan_freq_dict), cloned on 2026-11-23 | The NINJAL **Corpus of Everyday Japanese Conversation (CEJC)**. The repo's README describes it as "a vocabulary and word count table based on 200 hours of recorded data". It is lemmatised in UniDic short units (SUW) and tagged for part of speech: 29,534 lemmas, each with an overall rank and its frequency. | **None stated.** The repository has no licence file, and the table is NINJAL's data. NINJAL's own pages could not be opened from this session (see below), so their terms were not read. Only ranks were used. Nothing was copied apart from the order. | **The order of every core deck.** Each card was matched to a CEJC lemma by its reading and part of speech (for example あつい "hot" = 暑い rank 525, not 熱い 692; かえる "go home" = rank 189, not 変える 433). Each deck was then sorted by that rank by script. |

Because this is a corpus of real conversation, the order is spoken-Japanese order. That suits a speaking course: うん, だ, ね, よ, そう and もう come out on top, and written words such as しかし, または and および come out low.

**Tried, but could not be read** (2026-11-23):
- en.wiktionary.org `Wiktionary:Frequency_lists/Japanese`: "not found" from the fetch tool. The en.wiktionary.com mirror opened, but the page only links to other lists (Japanese Wikipedia 2013/2015/2022, Leeds, NINJAL, OpenSubtitles) and has no words on it.
- NINJAL BCCWJ frequency-list page (clrd.ninjal.ac.jp/bccwj/en/freq-list.html): opened, and it says the list is "free for use for research or educational purposes". The downloads themselves (clrd.ninjal.ac.jp, repository.ninjal.ac.jp, doi.org) were refused by this session's network proxy (403).
- raw.githubusercontent.com (hermitdave FrequencyWords, OpenSubtitles): refused by the proxy.
- The hingston/japanese "Leeds" list: only a mirror page with no words could be opened.

Meanings, notes, examples and dialogues are all written by the writer. Example sentences use the course's own vocabulary. In about 25 verb and adjective examples, the card's word appears in an inflected form (かく → かいて ください, たのしい → たのしかったです), not the exact dictionary form, because polite sentences need the ます or て form. es does the same (ser → es).

## 2. Which cards are in source order, and which by judgement

Every card whose lemma is in CEJC sits at its CEJC rank. **Chunk cards** (the noun + particle cards in Top particles; おきて, いけば, やすいし and すみませんが in Top connectors; the counter cards) sit at the CEJC rank of the particle, ending or counter they show, not of the whole chunk. The rest are of three kinds:
- **Base rank:** a word plus a particle or ending that CEJC splits into short units. It is placed at the rank of its base word, which is in CEJC.
- **Source rank, looked up by hand:** these are still CEJC ranks.
- **Judgement:** the word is not a single CEJC lemma. It is placed by the writer's judgement of everyday use.

| Deck | Cards | At a CEJC rank | Base rank (rank of) | Placed by judgement |
|---|---|---|---|---|
| Top nouns | 99 | 98 | none | にほんご (CEJC lists 日本 and 語 separately; placed at 語, rank 363) |
| Top verbs | 85 | 85 | none | none |
| Top adjectives | 86 | 86 | none | none |
| Top adverbs | 57 | 53 | ほんとうに (本当 72), あとで (後 93), いっしょに (一緒 198) | いつも |
| Top pronouns | 35 | 21 | わたしの (わたし 73), だれの (だれ 182) | わたしたち, こっち, どっち, そっち, あっち, なにか, なにも, だれか, どこか, だれも, いつか, みなさん (UniDic splits these into a word plus たち, か or も, or tags them differently) |
| Top particles | 28 | 25 | none | かな, よね, までに (made of two particles each) |
| Top connectors | 25 | 14 | それで (connector で 32), たら (particle たら 741) | じゃあ, でも, ので, まえに, だから, それから, のに, それに, または (UniDic splits these into short units, e.g. だ + から, で + も) |
| Top interjections | 32 | 23 | まあ (adverb まあ 45), ほんとうですか (本当 72), まじで (まじ 304), がんばって (がんばる 359) | あのう, いえいえ, おめでとう, よかった, しまった |
| Top words | 46 | 40 | none | なんで, どうして, どうも, いくつ, どのくらい, こんばん |
| Top counters | 14 | 14 | none | none |

Hand-looked-up CEJC ranks: かえる 189, あう 317, すむ 500, きる 529, ふる 696, つく 737, あつい 525, からい 635, つらい 801, いちだい 686, つまり 1902, もし 329, なるほど 162, さいこう 1382, さいあく 1213, なぜ 874, さん 53, ちゃん 83, くん 191, さま 307, せんしゅう 1607, こんしゅう 1684, はる 1844, おととい 2422, けさ 2523, あさって 3026, はたち 3322, しゅうまつ 3837.

**Where to stop.** Each deck ends where the next CEJC word would be rare for a beginner, or is a regional, slang or written word.

**Flirting and Compliments** are not in frequency order. Flirting follows the brief's three layers (words, phrases, moves and replies). Compliments is grouped by topic (food, skill, character, things, home, learner, replies).

## 3. Class slots fitted to Japanese (brief rule 2)

- **`Top prepositions` → `Top particles`.** Japanese marks a noun's role with particles after it, and these do the work of English prepositions. The single-kana particles (は, が, を, に, で, へ, と, も, の, か, ね, よ, や) are already card targets in the Hiragana decks, as letters, and a second card with the same text would fail the release check. So each one is a **short noun + particle chunk**, chosen to show the particle's main job: わたしは, だれが, すしを, えきに, えきで, にほんへ, ともだちと, わたしも, ともだちの, これですか, そうですね, おいしいですよ, ペンや ノート, コーヒーか おちゃ. The meaning column names the particle's job in English, and the note names the particle. Longer particles stand alone: から, まで, より, だけ, しか, ぐらい, って, ずつ, ばかり, ほど, など, かな, よね, までに. The relational nouns that English expresses as prepositions (うえ, した, なか, まえ, よこ, となり, うしろ) are nouns in Japanese, so they are in Top nouns, with "noun + の + …" in the note.
- **`Top conjunctions` → `Top connectors`.** Japanese joins sentences with sentence-initial words (でも, だから, それから …) and, even more, with clause endings (〜て, 〜けど, 〜から, 〜ので, 〜たら, 〜ば, 〜し, 〜ながら). Both kinds are in this one deck. Clause endings that are a single kana (て, ば, し, が) are shown on a short form that carries them: おきて, いけば, やすいし, すみませんが. から is in Top particles, with "because" in its meaning, since one card cannot be in two decks.
- **Added `Top counters`.** It holds only counters the course does not teach yet. Each card is the form for 1 (or 2), so the sound change shows: いっこ, いっかい, いちじかん, いちにち, ふつか, いっしゅうかん, いっかげつ, いちだい, いっぴき, にはい, いちど, いっぱく, なんめいさま, にばい.
- **Verbs:** dictionary form. The note gives the ます form and the group in the course's own terms (ru-verb, u-verb, irregular), and flags look-alikes (はいる, はしる and かえる are u-verbs).
- **Adjectives:** い-adjectives in their base form, with the negative where it helps. な-adjectives are written with な, as the course already writes しずかな and ゆうめいな, and the pron gives `na` as its own word. おなじ and ふつう are noted as exceptions (no な / the noun-like の).
- **Pronouns:** the notes warn that Japanese uses the person's name + さん where English says "you". きみ, おまえ, おれ and かのじょ carry warnings. **Departure from profile §2.3:** the profile keeps あなた, かれ and かのじょ to the Traps deck. あなた and かれ stay there. かのじょ was added to Top pronouns because the brief asks for the whole useful set, and its note says it usually means "girlfriend". さん, くん, ちゃん and さま are in Top words.

## 4. Pron

There is no `respell.js` for ja (profile §6.4 decided against one), so `node tools/target/repron.js ja` stops with "Cannot find module …/ja/respell.js" and rewrites nothing. The prons were **not typed by hand**. A scratch converter (kana → modified Hepburn, by the §6.1 key) generated them from a word-split copy of each target: particles and です as separate words, and a morpheme mark so that おもう gives `omou`, not `omō`. The converter reproduces all 103 single-word prons already in decks-a/b (the three exceptions are the fixed spellings こんにちは, こんばんは and ううん, none of which is used here). Every new pron passes `pronPattern` and the §6.5 romaji-to-kana check. The particle wa/e/o cases and every multi-word pron were also read by eye.

The converter is not in the course folder, on purpose. A `respell.js` there would let `repron.js` rewrite the hand-typed prons of the live decks. No word was left out for pron reasons. One phrase was changed: すてきな おうちですね needs `ouchi`, which `pronPattern` bans mid-word (§6.1), so the Compliments card is すてきな いえですね.

## 5. Words skipped because the course already has them

Rule used for every deck: a word is skipped when its exact text is already a card, when the course has it as a kanji card (人, 日本, 一年 …), or when the course card is the same word + です with the same meaning (おいしいです, たかいです, やすいです, がくせいです). Dictionary forms of verbs that the course teaches only as ます cards are **added** (おきる next to おきます), because the dictionary form is what this deck teaches. いい is kept, because the course card いいです teaches the "no thanks" trap, not the word "good".

**Top nouns:** ひと, にほん, おとこ / おんな (First kanji: 人, 日本, 男の人, 女の人); ともだち, こども, せんせい, かぞく (Family and people); しゃしん (Hiragana 3); コーヒー, パーティー (Katakana 2); やさい, てんぷら, おちゃ, おにぎり, あさごはん (Food and drink); かさ, さいふ, スマホ, レシート (Shopping and things); しゅみ, やすみ (Likes, plans and free time); トイレ, こうえん, ちかてつ, きっぷ, みぎ, ひだり (Places and getting around); びょういん, けいさつ (Polite requests and help); がくせい (がくせいです in Greetings). Not possible as cards, because the same text is a letter card in the Hiragana decks: め (eye), て (hand), き (mind; tree), こ (child), ひ (day), え (picture), は (tooth). Moved to Flirting so that no card is in two decks: こえ (voice), えがお. **31 skipped**, plus the 7 one-kana words.

**Top verbs:** たべる, する, くる (Casual and polite); いく (いく？ in Casual and polite). **4 skipped.**

**Top adjectives:** おおきい, ちいさい, あたらしい, ふるい, むずかしい, おもしろい, さむい, しずかな, ゆうめいな (Describing things); たかい, やすい (たかいです, やすいです in Shopping and things); おいしい (おいしいです in Food and drink); ない (Casual and polite); だいじょうぶ (だいじょうぶ？ in Casual and polite). Moved to Flirting: かわいい, きれいな, やさしい, すてきな. **14 skipped**, plus 4 moved.

**Top adverbs:** まいにち, きょう, あした, きのう, ときどき (Daily routine); まっすぐ (Places and getting around). **6 skipped.**

**Top pronouns:** これ, それ, あれ (Shopping and things); あなた, かれ (Traps for English speakers); なに (なに？ in Casual and polite; the deck has なん instead). **6 skipped.**

**Top particles:** none skipped as words, but 14 single-kana particles take the chunk form for the reason in §3.

**Top connectors:** none.

**Top interjections:** うん, ううん, ありがとう, ごめん (Casual and polite); すみません (Greetings); あれ ("huh?", same text as あれ "that one" in Shopping); えっ and あっ (they end in small っ, which the pron key cannot write at the end of a word, §6.1); すごい！ and いたい！ (same text as the adjectives). **10 skipped.**

**Top words:** いくら (いくらですか); the days of the week (First kanji, and どようび in Daily routine); numbers one to ten (First kanji; in kana, に, ご and く are letter cards); ごぜん, ごご (Numbers, money and time). **20 skipped** (いくら, 7 days, 10 numbers, ごぜん, ごご).

**Top counters:** the つ set, まい, ほん, さつ, にん / ひとり / ふたり (lesson `counters`); えん, じ, ふん (lesson `numbers`); さい (なんさいですか); ねん (一年). **10 counters skipped.**

**Near-collision kept:** さん (Mr. / Ms.) in Top words reads the same as the kanji card 三 (three) in First kanji. The texts differ, the validator passes, and they are different words, so the card is kept. If the release check ever folds kanji to kana, rename it to 〜さん or drop it.

**Flirting / Compliments:** nothing in the course matched. Inside the two decks, すてきですね, やさしいですね and おしゃれですね are in Compliments, so Flirting uses other phrases built on the same words (ふんいきが すてきですね, やさしい ひとが すきです, いつも おしゃれですね).

## 6. Flirting and Compliments

- **Flirting** (65 cards) follows `docs/plans/compliments-ja.md` Deck 2 and extends it: 20 words, 27 phrases built from them, and 18 moves and replies. Everything is in the polite です/ます style, as the plan recommends. The notes mark each card mild / warm / bold and say who says it to whom. The deck reflects how Japanese people really flirt, which is indirect: noticing a haircut, はなしやすいですね, ふたりで のみに いきませんか, the standard こくはく (すきです → つきあって ください). Replies include two playful deflections and four kind refusals, from clear (ごめんなさい、ともだちで いたいです; いまは れんあいは かんがえて いないんです) to the indirect ちょっと いそがしくて, whose note says it means no.
- **Compliments** (32 cards) is the plan's Deck 1, extended with: とても おいしかったです, うたが じょうずですね, しごとが はやいですね, たすかりました, すごく よかったです, おしゃれですね, おへやが きれいですね, おかげさまで, ほめすぎですよ. The plan's おうち card became すてきな いえですね (see §4).
- **Group:** the course had no social or conversation group, so Compliments and Flirting are in a new group, `Conversation`, as in en-es.

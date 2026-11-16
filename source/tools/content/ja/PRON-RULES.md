# ja-en katakana reading rules (settled)

Binding for every `pron` in decks.js, extra.js (IDIOMS), lessons.js and more/*.js, and for every reading quoted in prose. Base: profile ja.md §6. Where §6 is silent or self-contradictory, the rule below follows what the en-US audio actually says. Every reading must match profile.json `pronPattern`. Check with `node <scratch>/tools/prons.js` and `align.js` (see REVIEW.md).

## A. Sounds (one reading per word)
1. **Initial R** → small ゥ on every word-initial /r/, inside a linked group too: right ゥライト, write it ゥライリット. No ゥ for /r/ in a cluster or between vowels. /l/ is plain ラ行.
2. **V / TH / SI / F**, as in §6: very ヴェリー, think スィンク, this ズィス, see スィー, she シー, fan ファン. Never ト/ド for TH.
3. **TR / DR clusters** → トゥ / ドゥ + ラ行: tree トゥリー, train トゥレイン, street ストゥリート, drink ドゥリンク, hundred ハンドゥレッド.
4. **Flapped t (American).** A /t/ between vowels (an r-coloured vowel counts) before an unstressed vowel becomes ラ行: water ワーラー, later レイラー, meeting ミーリング, pretty プリリー, little リルル, started スターリッド. Across words this happens only where the words are linked (rule C): get a ゲラ, what a ワラ, not at all ナラロール. A t before a stressed vowel stays タ行: hotel ホウテル, attach アタッチ. /d/ is **not** respelled (decided ディサイディッド). **nt + unstressed vowel** drops the t only in the lexicon words: twenty トゥウェニー, internet イナーネット, want to ワナ. (Supersedes §6 rule 6's example city スィティ, which was there to show スィ; city would be スィリー.)
5. **Word-final unstressed -y / -ie / -ey / -ee** → long ー: very ヴェリー, busy ビズィー, study スタディー, spicy スパイスィー, every エヴリー, usually ユージュアリー (§6's own examples ヴェリー, ゥリーリー). Inside a longer word nothing changes: everything エヴリスィング.
6. **Diphthongs** オウ / エイ, never オー / エー: cold コウルド, name ネイム, no ノウ (§6 rule 9).
7. **US vowels.**
   - LOT (hot, not, stop, job, coffee) → アー in an open syllable or before a voiced final consonant: coffee カーフィー, copy カーピー, sorry サーリー, soccer サーカー, wallet ワーレット, dog ダーグ, job ジャーブ. It is ア, with ッ before a final voiceless stop, in a closed syllable: not ナット, hot ハット, stop スタップ, watch ワッチ, doctor ダクター, problem プラブレム, box バックス.
   - THOUGHT → オー: called コールド, walk ウォーク, bought ボート, long ローング, lost ロースト, off オーフ. on is オン.
   - TRAP → ア, with キャ / ギャ after k / g: can キャン, cash キャッシュ, banana バナナ.
   - r-coloured vowels: ア ー (work ワーク, first ファースト), オー (for フォー), ア (door ドア, here ヒア).
8. **Final consonants** take the shortest kana. ッ only after a short vowel before a stop (cut カット, bag バッグ). -ed is ト after voiceless sounds, ド after voiced ones, and イッド after t / d (ニーディッド, スターリッド).

## B. Weak forms and fixed readings (lexicon)
| word / chunk | reading | note |
|---|---|---|
| a / an / the | ア / アン / ザ (ズィ before a vowel sound) | |
| to | タ before a consonant, トゥ before a vowel or at the end | to the ＝ タ ザ |
| and | アン (アンド before a vowel: and a アンダ) | |
| do (auxiliary) / do (main verb) | ドゥ / ドゥー | What do you do? ワット ドゥ ユー ドゥー? |
| we / be / been | ウィ / ビー / ビン | |
| today / tomorrow | トゥデイ / タマーロウ | today as in §6's example |
| want to / have to / has to / need to / going to | ワナ / ハフタ / ハスタ / ニード タ / ゴウイング タ | gonna is explained in prose only |
| it'll | イルル | flap + l, same as little リルル |
| would have / should have | ウッダヴ / シュッダヴ | |
| twenty / twelve / twice / twist | トゥウェニー / トゥウェルヴ / トゥワイス / トゥウィスト | tw ＝ トゥ + ワ行 |
| fifty / ninety | フィフティー / ナインティー | the t is not flapped after f / n |
| Tokyo / Osaka / Fukuoka | トウキオウ / オウサーカ / フクオウカ | the way en-US audio says them |
| natto / Haruki Murakami | ナートウ / ハルーキ ムラカーミ | |
| How are you? | ハワ ユー? | |
| What's up? | ワッツァップ? | fixed chunk |

## C. Linking (one kana group, no space): written ONLY in these cases
1. A word ending in a consonant (r-coloured vowels included) + **a / an / it / of**, or + **are** after what / where: have a ハヴァ, it's a イッツァ, for a フォーラ, get it ゲリット, piece of ピーサヴ, what are ワラ.
2. **an** + a vowel-initial word, when nothing before it links: an apple アナプル, an old アノウルド (but get an iced ゲラン アイスト, because an has already linked backward).
3. A word ending in t / d / n / k / p / v / f / l + **you** (not your / you're): can you キャニュー, could you クジュー, meet you ミーチュー, call you コーリュー, help you ヘルピュー, have you ハヴュー, if you イフュー. Not after s / z / th: miss you ミス ユー, with you ウィズ ユー.
4. **Can / Could / Should / Did / Would + I**: キャナイ, クダイ, シュダイ.
5. **Phrasal verb + particle** (up, out, off, on, in, after, along) when the verb or the pronoun before the particle ends in a consonant: pick up ピカップ, turn on ターノン, turn it on ターニロン, try this on トゥライ ズィソン, check in チェッキン, hold on a ホウルドナ. A pronoun ending in a vowel stays apart: pick you up ピッキュー アップ.
6. **there / where / here + a vowel-initial word** → linking r: there's a ゼアザ, is there a ゼアラ, where is ウェアリズ, here on ヒアロン.
7. **Identical consonants** across a boundary are said once: next to ネクス タ, just a second ジャスタ.

Nothing else is joined. Content words stay apart: dog is ダーグ イズ, work at ワーク アット, this in English ズィス イン イングリッシュ (§6's own example I have a dog. The dog is so cute. ＝ アイ ハヴァ ダーグ. ザ ダーグ イズ ソウ キュート).

## D. Format
Full-width katakana, ー, half-width spaces between word groups, and a final `?` / `!` kept. A `.` goes between two sentences and `,` where the English has one. The final period is dropped. `/` separates alternatives. Minimal-pair tags `(th) (s) (r) (l) (v) (b) (f) (h) (sh)` appear only in the 発音注意 deck and in the pron lesson rows. Stress is never marked.

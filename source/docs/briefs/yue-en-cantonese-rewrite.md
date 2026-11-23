# yue-en: rewrite into written Cantonese (owner's decision, 2026-11-23)

The owner ruled: a course for Cantonese speakers is written in **written Cantonese** (書面粵語, Hong Kong, Traditional
characters), not standard written Chinese. This overrides docs/profiles/yue.md §2 and "ONE written register" in
docs/briefs/yue-lead.md.

## Your job
Rewrite every Chinese string in the file(s) assigned to you, in place, under /home/claude/tools/content/yue/.
Touch nothing else. Other agents are rewriting the other files at the same time.

## Register
- Natural, educated Hong Kong written Cantonese, as in a friendly Hong Kong app or a tutor's notes: 嘅 係 唔 冇 呢 嗰 喺 咗 緊
  啲 咁 點解 乜嘢/咩 邊個 幾時 同 都 仲 先 畀 嚟 佢 佢哋 我哋 你哋 而家 尋日 聽日 今日 鍾意 識 講 睇 食 飲 返 瞓 搵 攞 諗 …
- Not slangy, no profanity, no heavy particles on every line (啦 喎 㗎 only where a speaker really would use them: dialogue
  glosses, yes; grammar explanations, sparingly).
- Grammar terms stay the Hong Kong school terms (眾數, 第三身, 現在式, 過去式, 冠詞, 串字 …). Explanations are Cantonese:
  「英文嘅動詞會變，廣東話唔會」.
- Meanings of English cards and sentences: give what a Cantonese speaker would SAY: "I'm tired" → 我好攰; "Where is the
  toilet?" → 洗手間喺邊度？; "I don't know" → 我唔知. Single-word glosses that are the same in both registers stay (書, 貓, 學校).
- Address 你 only. No Simplified characters. Hong Kong character forms and vocabulary (巴士, 的士, 士多啤梨, 雪櫃, 升降機/𨋢, 港鐵).
- Characters: use the common Hong Kong forms 嘅 咗 喺 啲 嚟 哋 嗰 嘢 咩 噉/咁 (咁 = so, 噉 = like this; if unsure use 咁 for both,
  consistently), 畀 (not 俾), 攰, 瞓, 搵, 攞, 諗, 鍾意 (not 中意), 而家 (not 依家), 返 (not 番 for "return").
- Where the text QUOTES spoken Cantonese in 「」 to explain a Hong Kong English mistake, the quote stays; the surrounding
  explanation now is Cantonese too, so the contrast "spoken vs written" in the wording may need rephrasing.

## Do not change
- Any English text, IPA, ids, keys, file structure, field order, punctuation conventions, `___` blanks, HTML tags, the JS
  syntax. One-line code must not contain `//` comments.
- The number or order of items. Answer lists (English) are not yours to edit, EXCEPT as listed under "Also fix".

## Also fix while you are there (from the pre-merge review; only items in your files)
- 很 prompts whose only accepted answer lacks "very": in Cantonese write the prompt so it pins the answer: 今日好熱 accepts
  "It's hot today" — 好 is the neutral linker in Cantonese, so this mostly resolves itself; where the answer has "very"
  write 好…/非常… deliberately.
- Typed-answer prompts must pin the accepted English: add a short cue in brackets in the prompt, e.g. （用 will）,
  （正在）,（have to）, where Cantonese does not mark what English needs.
- Deck 閒談 "Me neither.": 我都唔（係／會）. "I live in an apartment.": 單位. "sink": 洗手盆（鋅盆）/ 沉. `alphabet` example:
  用大楷 T 開頭. "turn off": add 「閂」 beside 「熄」. Dialogue "Could you speak more slowly?": 搭港島綫去中環. Use 綫 for MTR lines.
- `hk-english` table: 望一望 look at row — fix the slip so the Cantonese side is Cantonese.
- Leave Korean-setting leftovers (Seoul, Busan, kimchi, won…) alone: a later pass replaces them on the English side. Just
  translate what is there.

## Checks before you finish
- `cd /home/claude && node tools/content/gen.js yue && node tools/content/validate.js yue && node tools/content/parity.js yue && node tools/content/alphabet_check.js yue && node tools/content/lint.js yue`
  must pass (other agents are editing sibling files; if a failure is in a file that is not yours, re-run once after a
  minute, then report it rather than fixing it).
- Count in your files, outside 「」 quotes and outside set phrases: 的 / 是 / 不 / 沒有 / 這 / 那 / 他 / 們 / 嗎 / 什麼 / 怎麼
  should be near zero (的 stays in 的士, 目的; 是 in 是但, 但是→但係; 不 in 不過, 不如, 不停). List what remains and why.
- Report: files done, counts before / after, 10 before → after samples, anything you were unsure about (flag for a native
  speaker). You are not a native speaker: say so, and prefer the plain common wording over anything clever.

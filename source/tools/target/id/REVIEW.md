# en-id cold review (EN-ID-REVIEWER, 2026-11-19)

Read in full: decks-a.js, decks-b.js, extra-a.js, extra-b.js, lessons-1.js, lessons-2.js, lessons-3.js, respell.js; profile §1–§11, TARGET-BRIEF, PRACTICE-SPEC, PHASE2-BRIEF last section.

## Batch 0: pronunciation (respell.js)

Listed every distinct word with an e in all Indonesian strings (309 tokens incl. English words in bodies; script in scratchpad `p3/words.js`).

- Tool-unsure words from the lead's list, all checked: every one has only the weak e, which is what the tool already gave. Added to LEX_WORDS to silence them: bangət (KBBI ba·nget, no é: checked), bərkənalan, səpərəmpat, tərsəsat, dipəsan, dibəli, məngərjakan, mənyələsaikan, tərus (KBBI te·rus, no é: checked), plus səring, bəbərapa (also warned). bagaimana added (ai = one syllable, ba·gai·ma·na) to silence the ai warning.
- **gue** came out `GOO-eh` (two syllables): wrong, it is one syllable /gwe/. Added EXC `gue: gweh`.
- `node tools/target/repron.js id`: 548 prons read, 1 rewritten (gue), no warnings left.
- Looked up in KBBI (kbbi.web.id): banget (no é), terus (no é), tiket (/tikét/): all match the tool. Judged, not looked up: telepon, hotel, pesta, dompet, dosen, alergi, apotek, minimarket (-két), ojek, kereta, Amerika, Indonesia (strong, as LEX says; telepon, dompet, kereta were KBBI-checked by the profile author). termos, terapi, memori do not occur in the course.
- Script check after all edits: respell(target) === stored pron for all 548 deck and {{ex:}} rows, 0 mismatches.
- Also checked: final k = q (tidak, anak, kakek, nenek, kok, Mbak); bank/banknya keeps a released k (correct for the loan); ai/au (baik, naik, main, lain, air, haus, jauh = two syllables; pantai, sampai, pakai, mau, kalau, atau, beliau = one); ng/ngg (bunga, dengan vs tinggal, mangga, Inggris, panggil, tunggu); ny, sy, kh; c = ch; Jumat. No other error found.
- Prons quoted in notes/bodies (MAHNG-gah, BOO-ngah, SAH-teh, BAH-eeq, KAH-kehq, NEH-nehq, ah-eer, PAH-ghee): all match the tool.

## Batch 1: decks-a.js, decks-b.js

| File | wrong language | wrong teaching | practice | pron | wording |
|---|---|---|---|---|---|
| decks-a.js | 0 | 0 | 0 | 0 | 1 |
| decks-b.js | 0 | 1 | 0 | 1 | 4 |

- decks-b `gue`: pron GOO-eh → gweh (via EXC).
- decks-b `kaus oblong` note was confused ("everyday speech often just says kaus" on a card whose target already says kaus); now: "Also spelled kaos. People often just say kaus or kaos." (the profile's "old-fashioned" claim is unverified, so left out).
- decks-b `melihat jadwal`: "check the schedule" → "look at the schedule" (melihat = see / look at).
- decks-b `Kenapa sih?` note said "Standard: Mengapa?", but kenapa is taught as the everyday standard word elsewhere; now "Without it: Kenapa? (careful: Mengapa?)".
- decks-b `Bilangin ke dia, ya.` gloss: "Tell him" → "Tell him (or her)" (dia).
- decks-b `Saya mahasiswa.` note "No word for 'a'" → "no 'a' needed" (seorang exists; see no-be).
- decks-a `nomor telepon saya` note now matches the numbers lesson: zero is nol, often said kosong.

## Batch 2: extra-a.js, extra-b.js

| File | wrong language | wrong teaching | practice | pron | wording |
|---|---|---|---|---|---|
| extra-a.js | 0 | 0 | 0 | 0 | 0 |
| extra-b.js | 2 | 0 | 0 | 0 | 0 |

- extra-b `Saya kehilangan dompet.` reply *Di mana terakhir Ibu lihat?* (stilted order) → *Terakhir Ibu lihat di mana?*
- extra-b `rumah besar` reply *Tidak. Saya mau rumah besar dengan kebun.* (did not follow from the question) → *Tidak, kecil. Tapi saya mau rumah besar dengan kebun.* / "No, it's small. But I'd like a big house with a garden."

## Batch 3: lessons-1.js (sounds … questions)

| File | wrong language | wrong teaching | practice | pron | wording |
|---|---|---|---|---|---|
| lessons-1.js | 0 | 3 | 7 | 0 | 1 |

- no-be body "Indonesian has no word for 'a'" and the why of *Saya seorang guru* (an accepted answer that contains a word for "a"): false rule → "needs no word for 'a'"; why → "No word for 'am', and no 'a' needed". Same fix in ini-itu body.
- noun-adj mc "very hot": distractor *panas sangat* is Malay-like and heard in some speech, so not safely wrong → *adalah panas*. fill *Baju ini bagus __*: wrong option *sangat* (same doubt) → *yang*.
- intro order "I live in Jakarta.": *Di Jakarta saya tinggal* is also a possible order → prompt cue "(start with saya)".
- pronouns example *Selamat siang, Mbak.* glossed "Good afternoon", while the deck card glosses Selamat siang as "Good day (around midday)" and teaches sore for the afternoon → "Good day. (to a young woman, around midday)".
- Repeated items (identical order / type pairs) replaced with new taught phrases, hinge kept: pronouns ty "their friend" → "his friend (use dia)" *teman dia / temannya*; ty "our friend" → "our house" *rumah kita*; ini-itu ty "this shirt" → "that bag" *tas itu*; intro ty "I'm from America." → "My friend is from America.".
- Checked and kept: *mobil saya yang baru* (correct, natural), *Tas ini punya siapa?* (correct, colloquial), *Saya seorang guru* (correct), *Saya ada lapar* (wrong: a good distractor), *Dari mana?* as a street greeting (true), the eastern-Indonesia *saya punya buku* note (true of eastern Malay varieties; kept in brackets).

## Batch 4: lessons-2.js (negation … me) — writer was cut off; read with extra care

| File | wrong language | wrong teaching | practice | pron | wording |
|---|---|---|---|---|---|
| lessons-2.js | 0 | 0 | 8 | 0 | 0 |

- Nothing unfinished found: all 9 bodies are full, 14 items each in order, no placeholders, whys match their items, every lesson teaches its profile row.
- But the same sentence was recycled across mc → order → type (this happens in all three lesson files, including lessons-1, so it is partly the writers' design; the lead may judge). Fixed the triples and the identical order/type pairs: ada mc *Tidak ada air panas* → *Tidak ada gula*; time-words mc *Saya sudah makan* → *Saya sudah mandi*, ty *Dia masih di kantor* → *Ibu saya masih di pasar* (owner hinge); numbers mc *tiga buku baru* → *dua kopi panas*; prepositions ty "in my room" → "at my house"; me ty "I'm reading a new book" → "I'm looking for a cheap hotel" *Saya mencari hotel murah*. mc → order pairs on the same sentence remain in many sets.
- numbers order "The price is fifty thousand rupiah": *Lima puluh ribu rupiah harganya* also possible → cue "(start with the price)".
- prepositions order "I'm going to the market": fronted *Ke pasar saya pergi* possible → cue "(start with saya)".

## Batch 5: lessons-3.js (modals … casual) — writer was cut off; read with extra care

| File | wrong language | wrong teaching | practice | pron | wording |
|---|---|---|---|---|---|
| lessons-3.js | 0 | 1 | 4 | 0 | 0 |

- Nothing unfinished found: all 9 bodies full, sets complete, no placeholders.
- Triples fixed: modals mc *Boleh saya duduk di sini?* → *Boleh saya bertanya?*; daily mc *Saya ambil yang ini* → *Saya ambil yang merah*.
- daily order "Yesterday I got up at seven (start with kemarin)": *Kemarin jam tujuh saya bangun* also possible → cue "(start with kemarin, clock time last)".
- daily order why "tidak mandi would mean you never shower" (overstated) → "you don't shower at all".
- passive order "The food is eaten at home": fronted *Di rumah makanannya dimakan* possible → cue "(start with the food)".
- Casual forms checked and kept: *Bilangin ke dia, ya.*, *Kok mahal?*, *Ya udah deh.*, *Lagi apa?*, *Nanti aku bilangin dia.* — all natural Jakarta speech.

## Writers' doubt list: verdicts
- *Selamat tinggal* (said by the one leaving) vs *Selamat jalan* (to the one leaving): correct as taught everywhere.
- Selamat siang ≈ 11–3, sore ≈ 3–dusk: consistent across deck, lesson, check items.
- *Minta bon, Mbak.*, *Boleh dicoba?*, *Kalau Anda?*, *harga pas*, *ngantuk*, *Ada uang kecil?*, *Pakai argo, Pak?*: natural, kept.
- *pusing* = dizzy, also a light headache: kept.
- *kaus oblong*: note fixed (above).

## Totals (edits)
decks-a 1 · decks-b 6 · extra-a 0 · extra-b 2 · lessons-1 11 · lessons-2 8 · lessons-3 5 · respell.js 2 (LEX line, EXC gue)

## Ten things a native speaker should check first
1. *Saya bisa bahasa Indonesia sedikit.* (deck, intro lesson, examples) vs the more usual *Saya bisa sedikit bahasa Indonesia*.
2. *gue* respelled `gweh` (one syllable).
3. *Saya di sini untuk liburan.* (About me deck): natural, or prefer *Saya ke sini untuk berlibur*?
4. *Senang berkenalan.* alone (without *dengan Anda*) as "Nice to meet you".
5. Order items: is each tile order really the only acceptable one (Indonesian fronts place and time phrases freely)? Cues were added to three; check the rest, e.g. *Tas itu mahal*, *Dia di rumah*, *Makanannya dimakan di rumah*.
6. *Saya ada mobil* accepted as casual "I own a car" in the ada lesson fill.
7. *Teman saya tidak di rumah* accepted beside *tidak ada di rumah*.
8. The eastern-Indonesia note *saya punya buku* = "my book" (possession lesson).
9. *Kenapa* presented as "casual" for *mengapa* in the casual table while the rest of the course treats it as the everyday standard word.
10. Strong / weak e of the LEX loans used: *minimarket* (-két), *dosen* (-sén), *alergi* (-lér-), *pesta*; and *Ibu kota Indonesia adalah Jakarta* (no-be, ada): still the fact the course should state in 2026, given the move to Nusantara?

## Final
`node tools/target/gen.js id` → 27/27 lessons, 18 decks, 321 cards. `node tools/target/validate.js id` → PASS: all checks OK. `node --check` passes on every file.

## Compliments deck (added later)
Files: decks-c.js (14 cards), extra-c.js (9 dialogues, 5 examples, 2 patterns). Pron from respell.js, no warnings. Address: Ibu/Bapak for hosts and older people, kamu for friends; each note gives the other form.
Native check first:
1. *Wah, kamu jago!*: is *jago* fine in polite everyday speech, or too casual for this deck?
2. *Terima kasih atas pujiannya.*: natural in speech, or too stiff? (Kept as the polite option; *Ah, biasa saja.* is taught as the usual modest reply.)
3. *Ah, biasa saja.* and *Belum lancar, masih belajar.* as the culturally expected replies (modest deflection).
4. *Kamu cocok pakai batik.* as "Batik looks great on you".
5. *Kamu lucu sekali!* as "You're so funny" to an adult (lucu also means cute).
6. *Bahasa Indonesianya lancar sekali!*: -nya as the polite "your"; stress capital `een-doh-neh-see-AH-nyah` follows the count-from-the-end rule.
7. *Rumah Ibu nyaman sekali.* as the guest's "I love your home".
8. *Ide bagus!* vs *Ide yang bagus!*: is the short form the more natural one?

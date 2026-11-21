# English speakers learning Indonesian: course profile

Course `en-id`: Indonesian for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Indonesian. Machine-readable twin: `tools/target/id/profile.json`, generated from the same data as §6 to §9, so the two files agree. Pronunciation generator: `tools/target/id/respell.js` (§6).

(`docs/profiles/id.md` and `docs/profiles/id.profile.json` belong to the reverse course, English for Indonesian speakers. This profile does not use or change them. The brief named the `de` entry of `packs/roadmaps.js`; that is a slip, since the lesson ids must come from the `id-` items. This profile uses the `id` entry.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile. The study is named and its sample given. **(abstract only)** says only the abstract was read.
- **[curriculum convention]**: what syllabuses, textbooks, dictionaries and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Indonesian**. Every claim of that kind that a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant and voice:** standard Indonesian as spoken politely in Jakarta and nationally, `id-ID` voice. Answers are standard (*saya, tidak, sudah, bagaimana*); casual Jakarta forms are taught for recognition in notes and one added lesson (`casual`).
- **"You":** said first with a title (*Bapak / Pak, Ibu / Bu*; *Mas, Mbak* for young adults) or a name, and *kamu* with friends and children. *Anda* is taught as the neutral "you" of forms, signs and formal talk, not as the everyday default.
- **Biggest traps (§4):** word order inside the noun phrase (*rumah besar, buku saya, buku ini*); adding "to be" or tense (*Saya adalah lapar*); *tidak / bukan / belum / jangan*; the wrong "you"; *c*, the two *e*s, final *k* and *h*; *meN-* forms; over-repeating plurals; *di / ke*.
- **Standing rule (§7):** every practice set re-tests **the noun comes first** (describers, owners, *ini / itu* after; numbers before) and **no "to be", no tense on the verb**. Fixed English keywords, tested on 52 sample lines.
- **Pronunciation aid (§6):** generated English-letter respelling, required on every card and example: `suh-LAH-maht PAH-ghee`, `TEE-dahq`, `buh-SAHR`. `respell.js` handles *c, ng, ngg, ny, sy*, final *k* (`q`) and *h*, *ai / au*, reduplication, and the two *e*s from rules plus a word list, warning on stderr when it guesses. No silent error in 395 everyday words; European loans are its blind spot.
- **Lessons (§8):** 27. All 24 roadmap items kept; `noun-adj` and `possession` move up; `pronouns` gains the titles. Added: `time` (split from numbers), `requests` (*tolong, minta, jangan*), `casual`.
- **Decks (§9):** 18 in 5 groups, including "Traps for English speakers" and "Everyday spoken Indonesian".
- **Typing (§10):** `accents: false`, empty accent bar. The hyphen in *anak-anak* is spelling; the lead needs a rule for a space or "2" in its place. *di* + place apart, *di-* verbs joined.

## 2. Variant, register and voice

### 2.1 Variant: standard Indonesian

- The roadmap names "Standard Indonesian", basis BIPA 1–2 (*Bahasa Indonesia bagi Penutur Asing*), and the build plan keeps it [curriculum convention].
- **Voice:** `ttsLang: "id-ID"`. Spelling follows current standard spelling (EYD / PUEBI: *Jumat* not *Jum'at*, *apotek*, *telepon*).
- **Target register:** the polite everyday standard heard in Jakarta offices, shops, hotels, TV news interviews and between strangers. It is not the stiff written register of official letters (*Dengan hormat*, *adalah* in every sentence), and not Jakarta slang (*gue, lo, nggak, udah*).
- **Pronunciation varies by region** [research-backed]. Soderberg & Olson (2008), the IPA illustration of Indonesian ([*JIPA* 38(2)](https://core-prod.cambridgecore.org/core/services/aop-cambridge-core/content/view/AE405481B94A4E0B7234A8BBE9C6F5FD/S0025100308003320a.pdf/indonesian.pdf)), describe one speaker and note that:
  - final *k* is a glottal stop, but not in some loans (*fakta*) or regional variants;
  - */h/* may drop between unlike vowels (*lihat ~ liat*) and at the end of a word (*sudah ~ suda*) in some regions;
  - the stress rule (next-to-last, last if the next-to-last has schwa) "depends on dialect";
  - */f/* may be said [p], and loan *v* is voiceless.
  Consequence: the aid follows the careful standard (*h* kept, *v* = `f`), and card notes may mention the common variants.
- **Vocabulary rule** [inference]: use the everyday national word; put alternatives in the card `note`.

| Use | Note on the card | Avoid as the taught form |
|---|---|---|
| *mobil* (car) | | *kereta* (Malaysian sense) |
| *telepon / HP* (phone) | HP = mobile phone, said "hah-peh" | *telefon* |
| *kamar mandi* (bathroom) | in signs: *toilet*, *WC* | |
| *capek* (tired) | in writing: *lelah* | |
| *bisa* (can) | *dapat* in writing | |
| *tapi* in speech, *tetapi* in writing | both accepted | |
| *kenapa* (why) | careful: *mengapa* | |
| *uang* (money) | | *duit* (slang) |

### 2.2 Standard and everyday speech: how the course handles the gap

The gap is large, and US learners will hear casual forms from day one in Jakarta, Bali and on social media [inference]. The course's rule:

1. **Model answers, card targets and examples are standard:** *saya, tidak, sudah, bagaimana, saja, mengapa / kenapa*.
2. **Yes / no questions:** the model answer uses rising intonation only (*Kamu lapar?*), the most common spoken form [inference]. *Apakah* (formal, written) and a leading *apa* are accepted variants and are taught in `questions`.
3. ***Adalah*** is taught as the careful link between two noun phrases (*Ibu kota Indonesia adalah Jakarta*). It is accepted, never required, before a noun predicate (*Dia guru / Dia adalah guru*), and always wrong before an adjective or a place (§4.2).
4. **Casual forms** (*nggak / enggak, udah, aja, gimana, aku, -in, dong, sih, kok*) appear only in card notes ("Casual: *nggak*") until the added lesson `casual` and its deck. In `casual`, items that want a casual form say "(casual)" in the prompt.
5. ***Gue / lo*** (Jakarta "I / you") are recognition only, with a warning: use them only with Jakarta friends of your own age [practitioner opinion: IndonesianPod101 says *gue / lu* are the Jakarta informal forms and *aku / kamu* are "mostly reserved for lovers" there, which overstates it ([IndonesianPod101](https://indonesianpod101.com/blog/2020/12/11/common-indonesian-mistakes)); Kaiwa gives *aku / kamu* "with peers" ([Kaiwa](https://trykaiwa.com/blog/indonesian-vs-english-surprising-differences-2026))].
6. **Typed answers accept the standard forms only**, except in items marked "(casual)". A learner who types *nggak* for *tidak* elsewhere is marked wrong today; §10 asks the lead for an "almost" path for the common casual / standard pairs.

### 2.3 Roadmap items changed by this variant

None of the variant's own. The changes in §8 come from the learners (§4, §5): titles join `pronouns`, `time` splits from `numbers`, and `requests` and `casual` are added.

### 2.4 Forms of "you": who is addressed, and when

**Taught first: a title or a name, and *kamu*.**
- [practitioner opinion] With an older person, a teacher, a business contact or a stranger, Indonesians use *Bapak* or *Ibu*, often with the name, and "NEVER use *kamu*" with older people ([ielanguages, *Addressing People in Indonesian*](https://www.ielanguages.com/indonesian-address.html)). IndonesianPod101 likewise says to address middle-aged men as *pak / Bapak* and women as *bu / Ibu* ([IndonesianPod101](https://indonesianpod101.com/blog/2020/12/11/common-indonesian-mistakes)).
- [practitioner opinion] Djenar (2021), a University of Sydney linguist, argues that textbooks reduce "you" to *kamu* vs *Anda*. Her points ([Melbourne Asia Review](https://melbourneasiareview.edu.au/learning-how-to-say-you-in-indonesian-why-its-time-to-embrace-its-complexity/)):
  - *Anda* was coined in the 1950s as a neutral term and has an "impersonal character";
  - presenting *Anda* as the form for strangers of a similar age is "misguided", and learners use it where a kin term is needed (*Bu*, not *Anda*, in "Thank you, Miss");
  - *Bapak / Ibu* also serve between adults who know each other, not only for "older people".
  She gives no learner data.
- ielanguages says Indonesians "seldom" address anyone with *Anda*. IndonesianPod101 calls it safe at a first formal meeting but distant afterwards ([lesson notes](https://www.indonesianpod101.com/lesson/all-about-14-top-five-tips-for-avoiding-common-mistakes-in-indonesian)).

**Decision.**
- `greetings` adds the titles to greetings (*Selamat pagi, Pak*). `pronouns` teaches "you" as: *Bapak / Ibu* (*Pak / Bu* in direct address) for any adult older than you or in a formal role; *Mas / Mbak* for young adults and service staff in Jakarta and Java; the person's name; *kamu* for friends, peers and children.
- ***Anda*** is taught in `pronouns` as the "you" of forms, signs, announcements, adverts and formal neutral speech, and as a fallback with a stranger when no title fits. It appears in prompts marked "(formal)" and in *Siapa nama Anda?*.
- ***Mas / Mbak*** are flagged as Javanese in origin and heard nationally in cities [inference]; *Kak* (to a young person, common in shops and online) gets one recognition note.
- ***Saya*** is the taught "I" everywhere; *aku* appears in dialogues between friends and in `casual`.
- ***Kami / kita*** both come in `pronouns`: *kami* leaves the listener out, *kita* includes them.

**How examples address people.**
- Staff address customers as *Bapak / Ibu* (*Mau pesan apa, Bu?*). Customers address young staff as *Mas / Mbak*, older ones as *Pak / Bu*. Friends use names and *kamu*.
- **Every English prompt that contains "you" carries a cue**, so one answer form is natural: "(to an older man)" → *Bapak / Pak*; "(to a woman)" or "(to an older woman)" → *Ibu / Bu*; "(to a friend)" → *kamu*; "(formal)" → *Anda*; "(to a waiter)" → *Mas* or *Mbak*. Accepted answers then list that form, with and without the pronoun where dropping it is natural.
- Card notes say which form a phrase uses when it matters ("to a friend: *kamu*").

### 2.5 Voice of the English text

- Plain, friendly US English with US spelling. A `why` is one sentence.
- Indonesian inside English text: in lesson bodies, Indonesian goes in `<b>`. In plain-text fields (`why`, `hint`, card notes), write Indonesian bare. Never add English endings to Indonesian words: write "the word *buku*", not "bukus".
- Sample voice lines:
  1. "Indonesian puts the noun first: *rumah besar*, literally 'house big'."
  2. "There's no word for 'am' here: *Saya lapar* is the whole sentence."
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

These follow the plain names used in English-language Indonesian guides [practitioner opinion: Kaiwa uses "time markers", "passive", "word-building (affixes)"; Speak Indo "negates verbs and adjectives"; IndonesianPod101 "nasal prefix", "reduplication"], made plainer where an adult with no grammar would stumble [inference]. One term per idea, always the same:

| Term to use | Do not use | Note |
|---|---|---|
| noun, verb, adjective, adverb, preposition | | |
| describing word (adjective) | modifier | "describing word" in lesson bodies, "adjective" allowed in `why` |
| noun phrase; "the noun comes first" | head-initial | **standing-rule keywords** (§7) |
| owner (*saya* in *buku saya*) | possessor | **standing-rule keyword** "the owner" |
| possessive ending (-ku, -mu, -nya) | possessive suffix, clitic | |
| *ini / itu* ("this / that") | demonstrative | "demonstrative" once, as a gloss |
| root (word) (*baca* in *membaca*) | base, stem | |
| prefix (ber-, meN-, di-); ending (-kan, -i, -an) | affix (except once as a gloss) | |
| the *ber-* prefix, a *ber-* verb | intransitive | |
| the *meN-* prefix, a *meN-* verb (written me-, mem-, men-, meng-, meny-) | active voice marker | Say "the nasal changes to fit the first sound of the root". |
| the *di-* passive, a *di-* verb | passive voice (alone) | |
| time word (*sudah, sedang, akan, belum, pernah, masih*) | aspect marker, tense marker | **standing-rule keyword** "time word" |
| "no word for 'is' / 'am' / 'are'"; "no 'to be'" | zero copula | **standing-rule keywords** |
| *adalah* ("is", only between two noun phrases) | copula | |
| *ada* ("there is", "have") | existential | |
| negative word: *tidak, bukan, belum, jangan* | negator, negative particle | |
| question word (*apa, siapa, di mana…*) | interrogative | |
| title (*Bapak, Ibu, Mas, Mbak*) | honorific, term of address | "title" also for *Pak Budi* |
| *kami* (we, not you) / *kita* (we, including you) | exclusive / inclusive | gloss the technical pair once in `pronouns` |
| repeating a word; repeated word (*anak-anak*) | reduplication (except once as a gloss) | |
| counting word (*seorang, sebuah*) | classifier | recognition only at A1 |
| *yang* ("who / which / that", "the … one") | relative pronoun, linker | |
| the strong e (é, `eh`) / the weak e (schwa, `uh`) | e taling / e pepet (except once as a gloss) | |
| catch (the glottal stop of a final *k*) | glottal stop (except once as a gloss) | |
| standard Indonesian / everyday (casual) Indonesian | formal / slang | |
| false friend | false cognate | |
| calque ("word-for-word copy from English") | | gloss at first use |
| loanword | | |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items that occur in nearly every sentence and can be checked in typed practice, and that every source opened names.
2. Then items with fetched learner data (pronunciation).
3. Then lesson-local and lexical traps.

**The evidence is thin.** No error study of English-L1 learners' Indonesian grammar was found. The grammar error studies opened are of other L1s and tiny: one Swiss learner (Shabrina et al. 2026: 28 of 36 errors were affixation), Mandarin-speaking learners (Sapanti 2019: noun-phrase misordering such as *pertama hari → hari pertama*), and five Darmasiswa students of unreported nationality (Fauzi et al.: *Nawwal 20 tahun → Nawwal berumur 20 tahun*). They show that affixes and word order trouble foreign learners in general, not what English speakers do. The grammar ranking below is therefore [inference] built on practitioner lists. Pronunciation has two small studies of US and Australian learners.

1. **Word order inside the noun phrase**
   - Wrong → right:
     - *besar rumah* → *rumah besar* (a big house)
     - *saya buku* → *buku saya* (my book)
     - *Budi mobil* → *mobil Budi* (Budi's car)
     - *ini buku* meant as "this book" → *buku ini* (*Ini buku* = "This is a book")
     - *pesawat tiket* → *tiket pesawat* (plane ticket)
     - *Siapa mobil ini?* → *Mobil siapa ini?* (Whose car is this?)
   - Why: English puts describers, owners and "this / that" before the noun; Indonesian puts them after. Numbers and quantity words stay before (*dua kopi, banyak orang*), as in English, which makes the rule look inconsistent.
   - [practitioner opinion] IndonesianPod101 gives *Mobil siapa ini?* as the order English speakers miss ([blog](https://indonesianpod101.com/blog/2020/12/11/common-indonesian-mistakes)). [research-backed, other L1] Sapanti (2019), 19 Mandarin-speaking learners, found head–modifier reversals (*pertama hari → hari pertama*) ([ILEAL 4(2)](https://jurnal.syekhnurjati.ac.id/jurnal/index.php/jeill/article/download/2138/2296)).
   - Design consequence: strand (a) of the standing rule (§7). `noun-adj` and `possession` move up to lessons 7 and 8.

2. **Adding "to be", and putting tense on the verb**
   - Wrong → right:
     - *Saya adalah lapar* → *Saya lapar* (I'm hungry)
     - *Dia adalah di kantor* → *Dia di kantor* (She's at the office)
     - *Saya adalah dari Amerika* → *Saya dari Amerika*
     - *Saya makan* for "I've eaten" when it matters → *Saya sudah makan*
     - *Saya akan makan kemarin* (tense words mixed) → *Saya makan kemarin*
   - [practitioner opinion] Kaiwa: "English speakers often try to conjugate and then forget the time markers"; use *sudah, sedang, akan* when context does not show time ([Kaiwa](https://trykaiwa.com/blog/indonesian-vs-english-surprising-differences-2026)). IndonesianPod101: *Saya makan* is "I eat" or "I ate"; add *tadi* (earlier) for the past ([lesson notes](https://www.indonesianpod101.com/lesson/all-about-14-top-five-tips-for-avoiding-common-mistakes-in-indonesian)). *Saya adalah lapar* is [inference]: no source opened names it, though it is the standard teacher example.
   - Design consequence: strand (b) of the standing rule.

3. **Choosing the negative word: *tidak, bukan, belum, jangan***
   - Wrong → right:
     - *Saya tidak guru* → *Saya bukan guru* (I'm not a teacher)
     - *Dia bukan lapar* → *Dia tidak lapar* (He's not hungry)
     - *Tidak pergi!* → *Jangan pergi!* (Don't go!)
     - *Sudah menikah? — Tidak.* → *Belum.* (Are you married? — Not yet.)
     - *Sudah ke Bali? — Tidak.* → *Belum.*
   - [practitioner opinion] Speak Indo: *tidak* for verbs and adjectives, *bukan* for nouns and pronouns, *belum* "where English speakers would say no", *jangan* for commands ([Speak Indo](https://speak-indo.pages.dev/blog/tidak-vs-bukan)).
   - Design consequence: not the standing rule, because it cannot be tested before lesson 10 (`negation`); it is the preferred "mixed neighbour" in the last two items of every set from `negation` on (§8).

4. **The wrong "you" (and "we")**
   - Wrong → right:
     - *Terima kasih, kamu* (to an older shopkeeper) → *Terima kasih, Bu*
     - *Anda mau ke mana?* (to a driver you chat with daily) → *Mas mau ke mana?*
     - *Kita dari Amerika* (to an Indonesian, meaning "my friends and I") → *Kami dari Amerika*
     - *saya* repeated in every clause → once, then dropped (IndonesianPod101)
   - [practitioner opinion] Djenar 2021, ielanguages, IndonesianPod101 (§2.4).

5. **Pronunciation: c, the two e's, final consonants, t, vowels, ng, r**
   - Wrong → right: *cantik* said "kantik" → `CHAHN-teeq`; *enak* said with the weak e → `EH-nahq`; *murah* said "mura" → `MOO-rahh`; *tidak* with a popped k → `TEE-dahq`; *tentang* with "ch" for t; *ngantuk* said "nantuk".
   - [research-backed] Astuti, Indrayani & Mahmud (2025) analysed 153 utterances by 20 American BIPA learners at Universitas Negeri Malang ([*Semantik* 14(1)](https://e-journal.stkipsiliwangi.ac.id/index.php/semantik/article/view/5602/2148)). Consonant errors found:
     - final consonant deletion (*murah* → [mura], *alat* → [ala]);
     - [t] → [tʃ] (*tentang, hantu*), [t] → [d], [p] → [b], [k] → [g], [dʒ] → [tʃ];
     - an added glide (*cerita* → [tʃjərita]).
   - [research-backed, abstract only] The same group's vowel study of seven American learners found realisation problems in /a, i, e, o, ə, ʊ, u/: additions, deletions and changes ([*Ranah* 14(1)](https://ojs.badanbahasa.kemdikbud.go.id/jurnal/index.php/jurnal_ranah/article/view/8021)).
   - [research-backed, abstract only] Sundusiah & Fauzia (2021), Year 12 (VCE) learners in Victoria, Australia: [t] → [tʃ] was the most frequent error, with errors also on [o], [ə], [e], [ɛ], [h], [ʔ] and [g] → [j] ([ICOLLITE 2021](https://www.atlantis-press.com/proceedings/icollite-21/125963485)). No learner count in the abstract.
   - [practitioner opinion] IndonesianPod101: English speakers turn pure vowels into diphthongs, and fail at *ng* at the start of a word (*ngerti, ngirim*).
   - Design consequence: the aid shows *ch, uh / eh, q*, final *h*, word-initial *ng* (§6). The [t] → [tʃ] finding is not something the aid can show; `sounds` warns that *t* is never "ch", and the US-learner data say it is common.

6. **Prefix forms: *meN-*, *ber-*, *di-***
   - Wrong → right:
     - *mengbaca* → *membaca*; *mempakai* → *memakai*; *mentulis* → *menulis*; *mengkirim* → *mengirim*
     - *berkerja* → *bekerja*
     - *Saya baca buku* in careful speech → *Saya membaca buku* (fine in casual speech)
     - *di makan* → *dimakan*; *dirumah* → *di rumah*
   - [practitioner opinion] IndonesianPod101 gives *mengbaca → membaca*. [research-backed, other L1, one learner] Shabrina et al. (2026) found *berkerja* among 17 prefix errors ([*Litteratura* 5(1)](https://journal.uinjkt.ac.id/index.php/litteratura/article/download/52439/19707/170413)). The *di* spacing pair is a well-known native spelling error too [inference].
   - Design consequence: `me` drills the nasal changes; §10 makes spacing count.

7. **Over-repeating plurals**
   - Wrong → right: *tiga buku-buku* → *tiga buku*; *banyak orang-orang* → *banyak orang*; *buku-buku* for every plural → *buku* when context shows number.
   - [practitioner opinion] Kaiwa gives both wrong forms; IndonesianPod101 warns against overusing reduplication.

8. ***di, ke, dari* and the question words built on them**
   - Wrong → right: *Saya pergi di Bali* → *Saya pergi ke Bali*; *Di mana kamu pergi?* → *Ke mana kamu pergi?*; *Saya dari di Amerika* → *Saya dari Amerika*.
   - [inference] English "where" covers all three; Indonesian splits *di mana / ke mana / dari mana*.

9. **Calques**
   - Wrong → right:
     - *Apa nama Anda?* → *Siapa nama Anda?* (names are asked with "who")
     - *Saya punya 25 tahun* → *Umur saya 25 tahun* or *Saya berumur 25 tahun* (*Saya 25 tahun* is heard in casual speech [inference]: teach *Umur saya…*, but never use *Saya 25 tahun* as a distractor)
     - *Bagaimana kamu?* for "How are you?" → *Apa kabar?*
     - *Saya mau untuk pergi* → *Saya mau pergi*
     - *Sama-sama* for "Same to you" → *Selamat … juga*
   - [research-backed, other L1] Fauzi et al. corrected *Nawwal 20 tahun* to *Nawwal berumur 20 tahun* ([Unisma](https://jim.unisma.ac.id/index.php/jp3/article/download/26722/20199)); Shabrina et al. found *sama-sama* misused in four contexts. The rest is [inference].

10. **Time of day**
    - Wrong → right: *setengah tiga* read as 3:30 → 2:30; *tiga jam* for "three o'clock" → *jam tiga*; *Selamat malam* at 4 p.m. → *Selamat sore*.
    - [inference] English "half past" counts up; *setengah* counts toward the next hour. Greeting times are [curriculum convention] (Sahabatku Indonesia unit 1 teaches time-of-day greetings: [Rahma & Suwandi 2021](https://ejournal.upi.edu/index.php/BS_JPBSP/article/download/36654/pdf)), with the hour boundaries [inference].

11. **False friends and look-alikes**
    - Sourced pairs [practitioner opinion, IndonesianPod101 [false friends lesson](https://www.indonesianpod101.com/lesson/indonesian-teachers-answer-your-questions-5-what-are-some-indonesianenglish-false-friends)]: *air* = water; *gang* = alley; *kos* = rented room; *kelas* = classroom, grade; *oblong* = T-shirt; *brokat* = lace.
    - Sound-alike pairs [practitioner opinion, IndonesianPod101]: *kepala* (head) / *kelapa* (coconut); *semangat* (spirit, "go!") / *semangka* (watermelon); *Pak* / *bak* (water tub); *boleh* (may) / *bule* (slang for a white foreigner) / *bola* (ball).
    - Further pairs this profile adds, [inference] for a native check: *rok* = skirt; *jas* = suit jacket; *sop* = soup; *bensin* = gasoline; *polisi* = police (policy = *kebijakan*); *lama* = long (time), old (things); *pusing* = dizzy, a headache.
    - Design consequence: the "Traps" deck takes the sourced pairs first; the added pairs go in only after a native check (§11).

12. **Requests that sound blunt**
    - [research-backed, abstract only] Hassall (2012) compared request role plays by Australian learners and Indonesian native speakers ([ANU repository](https://openresearch-repository.anu.edu.au/items/6e085245-cdad-418a-bb1f-aacbb9465be2/full)). Learners used Want statements (*Saya mau…*) and hints more often, and elided imperatives (the short *Minta…*, *Tolong…*) less often, than native speakers. The abstract gives no counts.
    - Wrong → right (to a waiter): *Saya mau nasi goreng* (fine, but blunt in a series) → *Minta nasi goreng satu, Mas*; *Kamu bisa bantu saya?* → *Bisa tolong bantu saya, Pak?*
    - Design consequence: the added lesson `requests`.

## 5. Learners: who, why, what first

**Who**
- [curriculum convention] Indonesian in the US was taught first for military needs in World War II, then for academic area studies; the Indonesian Embassy now runs online BIPA classes (Widianto, Weix & Cullinane 2026, abstract only: [*JSAAEA* 21(1)](https://umimpact.umt.edu/en/publications/the-history-of-teaching-indonesian-in-the-united-states-and-its-p/)).
- US enrolment counts were not found (§11). Australia is the largest English-speaking market: AIYA (2013) reported shrinking school and university numbers and community classes in Perth "fully booked", with Bali travel a named motive ([AIYA](https://aiya.org.au/?p=1408)).
- [practitioner opinion] Babbel names travel and digital-nomad living, Indonesian food, and ease of learning (Latin script, no gender, no conjugation) as reasons ([Babbel](https://es.babbel.com/en/magazine/why-learn-indonesian)). Djenar cites the FSI estimate of about 900 hours to professional working proficiency, against about 2,200 for Mandarin or Japanese.
- [inference] So the course's US learners are mainly: **travellers** (Bali, Lombok, Yogyakarta, Jakarta); **remote workers and expats**; **partners and in-laws of Indonesians**, and Indonesian-American second generation; **students and government or NGO staff**. Nearly all are true beginners.

**Why they study** [inference]: travel and living there first, then family, then work and study. No survey of US learners' motives was found.

**What they need first** [inference]
1. **Greetings by time of day, thanks and the right "you"** (titles), because every exchange starts there: `greetings` and `pronouns` in the first three lessons.
2. **Numbers and prices in rupiah**, which run into thousands and millions (*dua puluh lima ribu*), for markets, taxis and warungs, plus bargaining (*Bisa kurang?*). So `numbers` stays in stage 2, and the shopping deck includes bargaining.
3. **Ordering food and drink politely** (*Minta…, tidak pakai…*): the added `requests` lesson and the food deck.
4. **Getting around**: *di / ke / dari*, *ada*, directions, *ojek*.
5. **Saying who they are**, with no "to be": name, country, job, age.
6. **Understanding casual speech**, which they will hear from the first day.
7. **Very little grammar terminology**: Indonesian's grammar is light at A1; the real work is word order, prefixes and vocabulary.

**Check of the roadmap against a beginner syllabus** [curriculum convention]
- Rahma & Suwandi (2021) list the ten units of *Sahabatku Indonesia* BIPA 1, the government A1 book: greetings (with time-of-day greetings and second-person pronouns), introductions, family (with possessives, *siapa*, *apa / apakah*), birthdays (time words, *berapa*, *kapan*), holidays (*ber-* verbs, shopping), daily activities (*me-* verbs, time), hobbies, a friend's traits (adjectives), directions and location, and experiences (S-P-O sentences, *ber-* = "have").
- The roadmap matches this in outline: greetings and pronouns first, *ber-* before *me-*, directions and daily life in stage 3. The study also notes the book omits formal vs informal "you" and bargaining, which this profile adds back (§2.4, deck 8).
- Changes for US adult learners:
  - `noun-adj` and `possession` move from mid-stage 2 to straight after `ini-itu`, so the standing rule is taught before it is drilled.
  - `pronouns` becomes "Pronouns and titles", because titles are the everyday "you".
  - `numbers` keeps numbers and prices; `time` is split out, because *jam tiga / tiga jam* and *setengah tiga* are separate traps.
  - `requests` is added after `modals`, and `casual` at the end.

## 6. Pronunciation aid (`pron`)

**Evidence.**
- No study comparing respelling, IPA and no aid for English-speaking learners of Indonesian was found. The choice is [inference], as in the earlier courses.
- [research-backed] US learners delete final consonants and turn *t* into "ch" (Astuti et al. 2025, §4.5). The first the aid can show (final `h`, `q`); the second it cannot.
- [research-backed] **The spelling does not show which *e* is which** (Soderberg & Olson 2008: both /e/ and /ə/ are written *e*). [practitioner opinion] A teaching site puts the strong e at "fewer than 30%" of cases with no rule to predict it ([Indonesian Online](https://indonesian-online.com/?p=21166)); another gives rough rules (prefix *e* weak, word-final *e* strong, European loans strong) "roughly 90% accurate" ([init-id](https://init-id.pages.dev/rail/a/1/indonesian-e-sound/)). That page also calls *beli* strong, which KBBI contradicts (below), so it is not used as a source for words.
- [research-backed] **Word stress is weak or absent.** van Zanten & Goedemans (2009) found no consistent duration or intensity cue for next-to-last stress in a Javanese speaker, and Javanese listeners accepted prominence on either of the last two syllables; they conclude "there is no reason whatsoever to assume that there is such a thing as word-based stress in Indonesian", only prominence at the right edge of the phrase ([*Wacana* 11(2)](https://media.neliti.com/media/publications/180705-EN-prominence-in-indonesian-stress-phrases.pdf)). [curriculum convention] Textbooks still teach next-to-last stress, moved to the last syllable when the next-to-last has the weak e; Soderberg & Olson give the same rule "depending on dialect".

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling, generated | Readable on day one; same format as the other en-* courses, so engine, lint, validator and `repron.js` need nothing new. Shows *c* = `ch`, the two e's (`uh`, `eh`), final *k* (`q`) and *h*, *ng* at the start of a word, *ai / au*. | The e's need a word list. Cannot show unaspirated *p t k*, the trill, or that *t* is never "ch". Stress capitals overstate a light prominence. |
| (b) IPA | Exact. | US adult self-learners cannot read it [inference]. |
| (c) No aid after `sounds` | Indonesian spelling is very regular apart from *e* [inference]. | Leaves the e's to guesswork on every new word, and day-one learners misread *c, ng, ny, sy*. |
| (d) Aid only in stage 1 (`pron: "optional"` later) | Less clutter. | The e problem lasts for every new word, so the aid keeps earning its line. |

**Decision: (a), `pron: "required"`.**
- The aid is **generated by `tools/target/id/respell.js`**, never hand-written: `node tools/target/id/respell.js "<text>"` prints `<text> -> <pron>`, and the module exports `respell`. The same Indonesian always gives the same `pron`.
- **Stress:** CAPITALS mark the syllable textbooks call stressed: the next-to-last, or the last when the next-to-last has the weak e. This is [curriculum convention], kept because it is the prominence most often heard at the end of a phrase and because the pipeline needs one capital syllable per word (`repron.js` uses it to recognise a pron column). `sounds` must say: "the capital syllable gets a slight lift; keep every vowel full, never swallow the others as English does".
- **The two e's** come from, in this order:
  1. the word list `LEX` in `respell.js` (about 320 forms, é and ə marked), also for a listed word plus *-nya, -ku, -mu, -lah, -kah, -pun* (*keretanya* from *keréta*);
  2. rules: an *e* at the end of a word is strong (*sore, sate, kue*); an *e* in a last syllable closed by *k* or *h* is strong (*nenek, boleh, teh, capek*);
  3. otherwise the weak e. This default is silent only in a word-initial prefix syllable (*be ber me mem men meng meny pe per pem pen peng peny te ter se ke*) of a word of three or more syllables, or a word-initial *ber / ter / per / ker* (*terbang, kerja*), and never in a word that looks like a loan (*v f z x*, or *eo io iu ea eu*). Anywhere else the generator writes "check e" on stderr, with the word in « ».
- **ai / au / oi / ei:** one syllable at the end of a word (*pantai, pulau, Mei*); two before a final consonant (*baik, laut, main, air*); anywhere else (*saudara, pakaian*) one syllable with a warning unless listed.
- **k:** a word-final *k*, and a *k* before *-nya -ku -mu -lah -kah -pun*, is the catch `q`. A *k* before another consonant is released (*dokter, taksi*); native exceptions such as *rakyat* are listed with `q`.
- **How reliable it is.** Two test lists of everyday words were frozen before tuning. Expected values are the author's judgment [inference], except 20 words checked against KBBI (below).
  - **List 1**, 285 words (76 already in `LEX` when the list was written): 270 came out right by the author's expected values. **0 were wrong without a warning.** 15 were wrong and flagged (*beda, daerah, hemat, hewan, kamera, karet, pena, perak, peta, menelepon, persen, resepsionis, teknologi, bebas, elektronik*, all strong-e words). 38 correct words were flagged needlessly. On the 209 words not in `LEX`: 194 right (93%), every error flagged. A further 45 words and phrases were checked by hand in full (syllables, stress, consonants, *q*, *h*, *ai / au*, hyphens): all matched once one typo in an expected value was corrected.
  - The 15 errors went into `LEX`, and a rule was added (an initial syllable closed by *r* is weak, silently; later narrowed, below).
  - **List 2**, 112 further words written after that tuning (106 not in `LEX`): 102 right, **0 silent errors**, 10 wrong and flagged (*jaket, tembok, mesin, internet, museum, bersepeda, repot, mewah, bengkel, pasien*), 24 needless flags. Those 10 are now in `LEX`.
  - **Probe of the silent cases.** Both lists missed the one place the generator is silent by design: a strong e in an exempt first syllable. A third probe of 30 loans and names aimed there (*Jerman, versi, servis, sertifikat, termos, semester, teori, terapi, metode, medali, memori, periode, seminar, terminal, serius, senior…*), seven of them checked in KBBI, found **silent errors**: *teori, metode, versi* (rule) and *terminal, serius* (two wrong `LEX` entries); *medali* and *seminar* were right. By the author's judgment another nine were probably silent errors too. Fixes: the five KBBI words went into `LEX`, and the silent exemption was narrowed (only *ber- ter- per- ker-* for r-closed syllables, and never in a word with *v f z x* or *eo io iu ea eu*). After that, *servis, sertifikat, periode, Herman, Jerman, senior* warn; ***termos, terapi, memori* are still silent and probably wrong** (unverified). That is the generator's known blind spot: **a European loan with the strong e in a prefix-like first syllable.**
  - **What this means.** On unlisted everyday native words about 91–93% come out right first time, and in the 395 distinct words of lists 1 and 2 no error was silent. Loans are weaker: in the probe, five of seven KBBI-checked words were wrong, all five without a warning (three by rule, two from wrong `LEX` entries). The price of the warnings is noise: about a quarter of unlisted words with an *e* get a warning that turns out to be needless. Writers should treat every European loan with an *e* as "check in KBBI" even when no warning appears.
  - **External check:** [curriculum convention] KBBI (the national dictionary) marks the strong e as é in its pronunciation field; an entry with no é has only the weak e. Twenty entries were opened on a KBBI mirror. The first thirteen (*kereta, jelek, karena, mentega, lebar, keren, beli, dompet, ganteng, pepaya, telepon, semangka, sendok*): twelve agreed with `LEX` or the rules, *pepaya* did not (KBBI: weak e). The seven probe words (*teori, metode, versi, terminal, serius, medali, seminar*): two agreed, five did not. All six misses are fixed. KBBI also shows that one expected value in list 1 was wrong (*serius*, which the author marked weak), so the list scores above slightly overstate the author's own accuracy.
  - These figures cover the author's lists, judged by the author. The lint cannot catch a wrong but consistent e; only a native read or KBBI can (§11).
- **Warnings go to stderr**, so stdout keeps the `<text> -> <pron>` shape and `repron.js` can collect the words in « ». The writer reports each flagged word; the lead checks it (KBBI) and adds it to `LEX`. A writer never edits a `pron` by hand.
- **Recommended engine default** (as in es): shown in the first stage, then blurred (tap to reveal) after `sounds` plus three lessons; the learner can turn it back on. No aid in practice items (PRACTICE-SPEC).

**What the respelling does not show, on purpose** (each goes in `sounds` and card notes):
- the lowered vowels in a closed last syllable (*i, e, o, u* → [ɪ ɛ ɔ ʊ], Soderberg & Olson): `ee`, `eh`, `oh`, `oo` are kept, and the voice shows the rest;
- the catch between two like vowels (*maaf* = `MAH-ahf`, said with a catch);
- unaspirated *p t k*, and that *t* is never "ch" or "d" (the US-learner errors, §4.5);
- tap vs trill *r* (`r` for both);
- regional *h* dropping and *f* → *p*.

**What lesson 1 (`sounds`) must teach, so the aid can be read:**
1. Six vowels, short and pure: `ah ee oo oh` and two e's, `eh` (strong, as in "bed") and `uh` (weak, as in "about"). The spelling writes both e's as *e*; the aid tells them apart.
2. CAPITALS: a slight lift, not an English stress. Say every syllable evenly and keep every vowel full.
3. *c* = `ch` (*cantik*), *j* as in "jam", *g* always hard (`gh` in the aid before `ee` and `eh`), *sy* = `sh`, *kh* = a breathy k.
4. *ng* = the "ng" of "singer", also at the start of a word (*ngantuk*); *ngg* = "ng" + g (*mangga*, `MAHNG-gah`); *ny* = "ny" of "canyon", also at the start (*nyanyi*).
5. A final *k* is a catch (`q`, like the break in "uh-oh"); a final *h* is breathed out (`ahh`, `eeh`, `ooh`, `ehh`); *r* is rolled or tapped.
6. *ai, au* at the end of a word are one sound (`ai` as in "Thai", `ow` as in "how"); elsewhere the vowels are separate (*baik* `BAH-eeq`).
7. Listen first. The aid is a crutch; turn it off once the spelling and the e's of common words are known.

### 6.1 The key (exact format)

**Format**
- Lowercase ASCII letters. Words are separated by single spaces; syllables inside a word by hyphens.
- In every word of two or more syllables, exactly one syllable is in CAPITALS. One-syllable words are lowercase (*ke* → `kuh`, *teh* → `tehh`).
- No punctuation, no accent marks, no apostrophes, no digits. Write numbers as words.
- **A hyphenated word is two words in the aid:** *anak-anak* → `AH-nahq AH-nahq`, *sama-sama* → `SAH-mah SAH-mah`.

**Vowels**

| Indonesian | Aid | Example |
|---|---|---|
| a | ah | *apa* → `AH-pah` |
| i | ee | *ini* → `EE-nee` |
| u | oo | *buku* → `BOO-koo` |
| o | oh | *toko* → `TOH-koh` |
| e, strong (é) | eh | *enak* → `EH-nahq`; *sore* → `SOH-reh` |
| e, weak (schwa) | uh | *besar* → `buh-SAHR`; *empat* → `uhm-PAHT` |
| ai at the end of a word | ai | *pantai* → `PAHN-tai` |
| au at the end of a word | ow | *pulau* → `POO-low`; *mau* → `mow` |
| oi / ei at the end of a word | oy / ay | *Mei* → `may` |
| ai, au before a final consonant; any other two vowels | separate syllables | *baik* → `BAH-eeq`; *laut* → `LAH-oot`; *dua* → `DOO-ah`; *siapa* → `see-AH-pah` |

**Consonants** (only those that differ; all others as written: b d f h j l m n p r s t w y z)

| Indonesian | Aid | Example |
|---|---|---|
| c | ch | *cantik* → `CHAHN-teeq` |
| g | g; gh before ee / eh | *gula* → `GOO-lah`; *pergi* → `puhr-GHEE` |
| ng | ng (also at the start of a word) | *bangun* → `BAH-ngoon`; *ngantuk* → `NGAHN-tooq` |
| ngg | ng-g, split across the hyphen | *mangga* → `MAHNG-gah`; *tinggal* → `TEENG-gahl` |
| ny | ny (also at the start of a word) | *nyanyi* → `NYAH-nyee` |
| sy | sh | *masyarakat* → `mah-shah-RAH-kaht` |
| kh | kh | *khusus* → `KHOO-soos` |
| v | f | *visa* → `FEE-sah` |
| x | ks | (loans only) |
| k at the end of a word, or before -nya -ku -mu -lah -kah -pun | q (a catch) | *tidak* → `TEE-dahq`; *anaknya* → `ah-NAHQ-nyah` |
| k before another consonant | k | *dokter* → `DOHK-tuhr`; *taksi* → `TAHK-see` |
| h at the end of a syllable | h after the vowel's spelling | *rumah* → `ROO-mahh`; *putih* → `POO-teeh`; *boleh* → `BOH-lehh` |
| mb, nd at the start of a word | as written | *Mbak* → `mbahq` |

**Syllable breaks**
- One consonant goes with the next vowel; *ng, ny, sy, kh* count as one consonant (*bangun* `BAH-ngoon`).
- Two consonants split, except *pr br tr dr kr gr fr pl bl kl gl fl*, which stay together (*Inggris* → `EENG-grees`).
- With three or more, the last two stay together if they form one of those pairs; otherwise only the last goes right.
- Consonants before the first vowel all stay in the first syllable (*Mbak, struk*).

**Names and English words** inside Indonesian sentences: avoid them where possible. Indonesian names are fine (§9). *Emma* is listed (`EHM-mah`); other English names stay in English prompts.

### 6.2 `pronPattern`

```
^(?!.*[cC](?![hH]))(?!.*(?<![aA])[iI])(?!.*[aA](?![hHiIyY]))(?!.*(?<![eE])[eE](?![hHeE]))(?!.*(?<![oO])[oO](?![hHoOyYwW]))(?!.*[uU](?![hH]))(?!.*[qQ](?=[a-zA-Z]))(?:[abcdefghijklmnopqrstuwyz]+|(?:[abcdefghijklmnopqrstuwyz]+-)+[ABCDEFGHIJKLMNOPQRSTUWYZ]+(?:-[abcdefghijklmnopqrstuwyz]+)*|[ABCDEFGHIJKLMNOPQRSTUWYZ]+(?:-[abcdefghijklmnopqrstuwyz]+)+)(?: (?:[abcdefghijklmnopqrstuwyz]+|(?:[abcdefghijklmnopqrstuwyz]+-)+[ABCDEFGHIJKLMNOPQRSTUWYZ]+(?:-[abcdefghijklmnopqrstuwyz]+)*|[ABCDEFGHIJKLMNOPQRSTUWYZ]+(?:-[abcdefghijklmnopqrstuwyz]+)+))*$
```

It is the Spanish pilot's pattern with the letter set changed: *j, q, u, z* are allowed, *v, x* are not, and two look-aheads are added. What it enforces:
- Only the letters the key uses: no *v, x*, no accented letters, no apostrophes, no digits.
- *c* only inside *ch*; *i* only after *a* (in *ai*); *u* only in *uh*; *q* only at the end of a syllable.
- *a* only as *ah / ai / ay*; *e* only as *eh / ee*; *o* only as *oh / oo / oy / ow*.
- Every multi-syllable word has exactly one CAPITAL syllable; one-syllable words are lowercase.
- No punctuation, and single spaces only.

It is compiled with the `u` flag. Tested: it accepts all 22 worked examples below and all 90 sample cards in §9, and rejects the raw Indonesian of 110 of those 112 strings. Two short words pass as they stand, *baik* and *air*, because raw Indonesian *ai* is also the aid's *ai*; so the pattern alone cannot prove a `pron` was generated. It cannot catch a wrong but well-formed respelling; the generator and the lint do.

### 6.3 Worked examples (all pass `pronPattern` and equal the generator's output)

| # | Indonesian | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Selamat pagi. | `suh-LAH-maht PAH-ghee` | Good morning. | weak e in a prefix syllable; g before ee written gh |
| 2 | Terima kasih. | `tuh-REE-mah KAH-seeh` | Thank you. | weak e (uh) in a prefix-like first syllable; final h breathed |
| 3 | Apa kabar? | `AH-pah KAH-bahr` | How are you? | punctuation dropped; stress on the next-to-last syllable |
| 4 | Nama saya Emma. | `NAH-mah SAH-yah EHM-mah` | My name is Emma. | y between vowels; the name Emma from LEX |
| 5 | Saya dari Amerika. | `SAH-yah DAH-ree ah-meh-REE-kah` | I'm from the US. | strong e in Amerika, from LEX |
| 6 | cantik | `CHAHN-teeq` | pretty | c = ch; final k = q |
| 7 | enak | `EH-nahq` | delicious | strong e (eh), from LEX |
| 8 | besar | `buh-SAHR` | big | weak e: the lift moves to the last syllable |
| 9 | rumah | `ROO-mahh` | house | final h breathed: ahh |
| 10 | sore | `SOH-reh` | late afternoon | an e at the end of a word is strong |
| 11 | nyanyi | `NYAH-nyee` | to sing | ny, also at the start of a word |
| 12 | mangga | `MAHNG-gah` | mango | ngg = ng + g, split across the hyphen |
| 13 | bangun | `BAH-ngoon` | to wake up | ng between vowels starts the next syllable |
| 14 | masyarakat | `mah-shah-RAH-kaht` | society | sy = sh; four syllables, lift on the next-to-last |
| 15 | pantai | `PAHN-tai` | beach | ai at the end of a word: one syllable |
| 16 | baik | `BAH-eeq` | good; fine | ai before a final consonant: two syllables |
| 17 | anak-anak | `AH-nahq AH-nahq` | children | a hyphenated word is two words in the aid |
| 18 | anaknya | `ah-NAHQ-nyah` | his or her child | k before -nya is a catch too |
| 19 | sepeda | `suh-PEH-dah` | bicycle | weak e then strong e, from LEX |
| 20 | pergi | `puhr-GHEE` | to go | g before ee written gh |
| 21 | Berapa harganya? | `buh-RAH-pah hahr-GAH-nyah` | How much is it? | -nya counts as a syllable, so the lift moves to ga |
| 22 | Mbak | `mbahq` | you (to a young woman) | mb at the start of a word; one syllable, lowercase |

### 6.4 The generator

`tools/target/id/respell.js` (about 220 lines, no dependencies).
- **Usage:** `node tools/target/id/respell.js "Berapa harganya?"` → `Berapa harganya? -> buh-RAH-pah hahr-GAH-nyah`. Several arguments give several lines. `require('./respell.js').respell(text)` returns the string; `annotated(form)` respells a `LEX`-style form directly (used for testing).
- **Words with no vowel or with digits** throw an error. Write numbers as words.
- **A final k after a consonant** (*bank*) is written `k` and reported.
- **Fixing an e, a catch or a diphthong:** add the word to `LEX_WORDS` at the top of the file with every *e* marked (é strong, ə weak), `q` for a glottal *k* the rules miss, ï / ü for a vowel that is its own syllable. Every form needs its own entry, except a listed word plus *-nya / -ku / -mu / -lah / -kah / -pun*. Then run `node tools/target/repron.js id`: it rewrites every stored `pron` from the generator.

## 7. Standing practice rule

**Rule: the noun comes first, and nothing stands for "to be".** Every lesson's practice set keeps re-testing two strands:
- **(a) Noun-phrase order.** Describers, owners, *ini / itu* and *yang* phrases follow the noun (*rumah besar, buku saya, mobil Budi, buku ini, orang yang tinggi*); noun + noun keeps the main noun first (*tiket pesawat, kamar mandi*); numbers and quantity words stay before (*dua kopi, banyak orang*); *jam* before the number is "o'clock" (*jam tiga*, but *tiga jam* = three hours).
- **(b) No "to be", no tense on the verb.** Adjective, place and noun predicates take no verb (*Saya lapar, Dia di rumah, Saya guru*); *adalah* only links two noun phrases and never comes before an adjective or a place; the verb never changes, and time words or time expressions carry time (*sudah, sedang, akan, belum, kemarin*).

**Why these two.**
- [inference, from practitioner lists] They are §4.1 and §4.2: every source opened names them, and both occur in essentially every Indonesian sentence from lesson 1 (*nama saya, kopi panas, Saya dari Amerika*), which matters because the JSON has no exemption field.
- **Against:** no learner-error data for English speakers backs the ranking (§4, §11). The negative words (§4.3) were the other candidate; they lose because they cannot be tested before lesson 10, and in `sounds` and `greetings` they would be artificial. They are the preferred mixed neighbour instead.

**Count** (`minOrder: 2`, `minType: 2`): in every lesson's set, at least **2 `order` items** and **2 `type` items** hinge on the rule, and their `why` names it with a keyword. A 14-item set has 3 of each (TARGET-BRIEF), so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`order`** hinges if the `why` matches the keywords and **either**:
  - the English prompt has a describer, owner, "this / that" or noun modifier **before** a noun that the answer puts **after** it (*big house → rumah besar*; *my name → nama saya*; *this book → buku ini*; *plane ticket → tiket pesawat*), or a number that the answer keeps before the noun next to a describer after it (*two hot coffees → dua kopi panas*), or *jam* + number for a clock time;
  - **or** the prompt has "is / am / are" before an adjective or a place and `x` holds *adalah*, or the prompt has a past time and `x` holds *akan* (*Saya makan kemarin*, x: *akan*). Never use *adalah* as a distractor before a noun predicate (*Nama saya adalah Emma* is correct, if stiff, §2.2), and never use *sudah* as a distractor in a past sentence (*Saya sudah makan* is a correct "I ate").
  - Example: `['or', "My friend's house is big", 'Rumah teman saya besar', 'adalah', 'The owner comes after the noun, and there is no word for "is" before an adjective: rumah teman saya besar.']`
- **`type`** hinges if the `why` matches the keywords and **either**:
  - the first accepted answer contains such a noun phrase (describer, owner, *ini / itu*, *yang* or noun modifier after the noun; number before);
  - **or** the English has "is / am / are" before an adjective, a place or a noun, and the answer has no verb there (fallback word *adalah* only before an adjective or a place, where it is wrong);
  - **or** the English has a past, perfect, progressive or future verb and the answer carries time with a time word or time expression, not a changed verb.
  - Example: `['ty', 'My older sister is very busy', 'Kakak perempuan saya sangat sibuk|Kakak perempuan saya sibuk sekali|Kakak perempuan saya sibuk', 'kakak perempuan · sibuk', 'adalah', 'The owner goes after the noun, and there is no word for "is" before an adjective: kakak perempuan saya sibuk.']` (checked against `validate.js`'s rule: no fallback word can rebuild an accepted answer).
- **Accepted answers, more rules:**
  - "I": list the *saya* form; add the *aku* form when the prompt says "(to a friend)" or "(casual)".
  - A bare English plural with no number or quantity word: list both the plain and the repeated noun (*buku* and *buku-buku*). After a number or quantity word, only the plain noun is accepted, and the repeated form is a good distractor.
- **Accepted answers** list the variants with and without the subject pronoun where dropping it is natural, *adalah* as a variant only before a noun predicate, *apakah* as a variant of a yes / no question, and both *dua es teh* and *es teh dua* when ordering food (the number after the dish is the normal ordering form, [inference]).

**Lessons where the rule is hardest, with two hinges each** (order / type):
- `sounds`: deck words come in noun-first phrases.
  - order: "fried rice" → *nasi goreng*; "hot coffee" → *kopi panas*
  - type: "sweet tea" → *teh manis*; "my name" → *nama saya*
  - why: "manis comes after the noun: teh manis."
- `greetings`:
  - order: "My name is Emma" → *Nama saya Emma* (x: *punya*); "my friend" → *teman saya* (x: *punya*)
  - type: "My name is Jack" → *Nama saya Jack*; "This is my friend" → *Ini teman saya* (hint gives *ini*)
  - why: "The owner comes after the noun: teman saya."
- `numbers`:
  - order: "two big houses" → *dua rumah besar*; "my phone number" → *nomor telepon saya*
  - type: "the price of this shirt" → *harga baju ini*; "three new books" → *tiga buku baru* (x: *buku-buku*)
  - why: "Numbers go before the noun, describing words after it: tiga buku baru."
- `time`:
  - order: "three o'clock" → *jam tiga* (x: *setengah*); "seven in the morning" → *jam tujuh pagi*
  - type: "at five in the afternoon" → *jam lima sore*; "It's two o'clock" → *Jam dua* / *Sekarang jam dua* (x: *setengah*)
  - why: "jam before the number means o'clock: the noun comes first."
- `questions`:
  - order: "Whose car is this?" → *Mobil siapa ini?*; "What is your name? (formal)" → *Siapa nama Anda?*
  - type: "Where is your house? (to a friend)" → *Rumah kamu di mana?|Di mana rumah kamu?|Rumahmu di mana?|Di mana rumahmu?*
  - why: "The owner comes after the thing: mobil siapa."
- `negation`:
  - order: "This is not my house" → *Ini bukan rumah saya*; "I'm not hungry" → *Saya tidak lapar* (x: *adalah*)
  - type: "My room is not big" → *Kamar saya tidak besar*
  - why: "No word for 'am': tidak goes straight before lapar."
- `prepositions`: "in my room" → *di kamar saya*; "to my friend's house" → *ke rumah teman saya*. why: "The owner comes after the noun: rumah teman saya."
- `time-words`: "I have already eaten" → *Saya sudah makan*; "She is still at the office" → *Dia masih di kantor*. why: "The verb never changes; sudah is the time word."
- `plural`: "two children" → *dua anak* (x: *anak-anak*). why: "Numbers go before the noun, and the noun is not repeated."
- `casual`: "My house is far (casual)" → *Rumah aku jauh|Rumahku jauh*. why: "No word for 'is', even in casual speech; the owner comes after the noun."

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\bafter (?:the|its) (?:noun|thing|person|place|word)\b|\bbefore the noun\b|\bnoun (?:comes )?first\b|\bnoun phrase\b|\bthe owner\b|\bowner (?:comes|goes)\b|\bno (?:verb|word) for ['‘"]?(?:is|am|are|to be)\b|\bno ['‘"]?to be\b|\bwithout adalah\b|\bno adalah\b|\badalah only\b|\btime word|\bverb (?:never|doesn't|does not) change
```

Use them like this:
- Strand (a): "after the noun / thing / person / place / word", "before the noun" (numbers), "noun first" / "noun comes first", "noun phrase", "the owner", "owner comes / goes".
- Strand (b): "no word for 'is' / 'am' / 'are' / 'to be'", "no verb for …", "no 'to be'", "without adalah", "no adalah", "adalah only …", "time word", "the verb never changes / doesn't change".

These are deliberately **not** keywords: bare "order", "word order", "first", "after", "before" (question-word and adverb lines would count by accident), "plural", "tense", and bare "adalah" or "ada". Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 52 of 52 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| panas comes after the noun: kopi panas. | match | should match |
| The describing word goes after the noun: rumah besar. | match | should match |
| The owner comes after the thing: nama saya. | match | should match |
| Owner goes last: mobil Budi, not Budi mobil. | match | should match |
| ini after the noun means 'this': buku ini. | match | should match |
| Numbers go before the noun: dua kopi. | match | should match |
| jam before the number means o'clock; the noun comes first. | match | should match |
| Noun first, then what describes it: nasi goreng. | match | should match |
| In a noun phrase the noun leads: tiket pesawat. | match | should match |
| No word for 'is': Saya lapar. | match | should match |
| No verb for 'am' in Indonesian: Saya guru. | match | should match |
| No 'to be' before an adjective: Dia sakit. | match | should match |
| Without adalah: Saya dari Amerika. | match | should match |
| adalah only links two nouns, never an adjective. | match | should match |
| sudah is the time word for 'already done'. | match | should match |
| The verb never changes; belum is the time word here. | match | should match |
| The verb doesn't change for the past: kemarin does the work. | match | should match |
| yang ini: yang links this to the thing, after the noun. | match | should match |
| The owner, saya, follows kamar. | match | should match |
| Use the -nya ending after the noun: harganya. | match | should match |
| Question words can stay where the answer goes. | no match | should not match |
| tidak goes before verbs and adjectives. | no match | should not match |
| bukan goes before nouns. | no match | should not match |
| Use jangan for 'don't' in a command. | no match | should not match |
| c sounds like ch. | no match | should not match |
| The final k is a catch, not a popped k. | no match | should not match |
| Use Bapak with an older man. | no match | should not match |
| kamu is only for friends and children. | no match | should not match |
| ke means to a place; di means at. | no match | should not match |
| di + place is written as two words. | no match | should not match |
| The di- verb is written as one word. | no match | should not match |
| meN- becomes mem- before b. | no match | should not match |
| p drops after mem-: memakai. | no match | should not match |
| Selamat pagi until about 11 a.m. | no match | should not match |
| se- means one: seratus. | no match | should not match |
| setengah tiga is half past two. | no match | should not match |
| Names are asked with siapa, not apa. | no match | should not match |
| kita includes the listener; kami does not. | no match | should not match |
| bisa means can; boleh means may. | no match | should not match |
| minta is the polite way to ask for a thing. | no match | should not match |
| Do not repeat the noun after a number. | no match | should not match |
| lebih means more. | no match | should not match |
| paling means most. | no match | should not match |
| nggak is the casual form of tidak. | no match | should not match |
| Sama-sama answers terima kasih. | no match | should not match |
| Plural is usually not marked. | no match | should not match |
| The hyphen is part of the spelling: anak-anak. | no match | should not match |
| Use the polite title before the name: Pak Budi. | no match | should not match |
| Belum is the polite answer to Sudah menikah? | no match | should not match |
| This is a book: Ini buku. | no match | should not match |
| ada means there is. | no match | should not match |
| Indonesian has no word for 'the'; -nya can do the job. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 24 items.** Their ids lose the `id-` prefix, and each appears exactly once in a `roadmap` field.
- **Reordered:**
  - `noun-adj` (roadmap: 5th of stage 2) and `possession` (6th) move to straight after `ini-itu`, so the noun-first rule (§7a) is taught in lessons 6 to 8 before it is drilled everywhere. *Ini buku / buku ini* already shows the order, so the three lessons build on one idea.
  - Everything else keeps the roadmap's order within its stage.
- **Renamed:** `pronouns` becomes "Pronouns and titles: saya, kamu, Anda, Bapak, Ibu" (titles are the everyday "you", §2.4); `numbers` becomes "Numbers and prices"; `noun-adj` and `possession` get example titles (*rumah besar*, *buku saya, bukuku, bukunya*).
- **Added (3):**
  - `time` "Telling the time: jam, pukul, setengah", split from the roadmap's "Numbers, prices and time". *Jam tiga / tiga jam* and *setengah tiga* = 2:30 are separate traps (§4.10), and one lesson cannot carry big prices and clock time at A1 pace. `numbers` keeps `roadmap: id-numbers`; `time` has an empty `roadmap` field.
  - `requests` "Asking and telling: tolong, minta, silakan, jangan": ordering and polite requests (Hassall 2012, §4.12), and the home of *jangan* (§4.3).
  - `casual` "Everyday spoken Indonesian": the casual forms learners hear daily (§2.2).
- **Stages:** the roadmap's three, unchanged in name. Stage 2 grows from 8 to 9 lessons, stage 3 from 11 to 13.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | | |
| 1 | `sounds` | Sounds and spelling | id-sounds | The six vowels kept short and pure; c = ch; the two values of e (the weak e in besar, the strong e in enak), which the spelling does not show; final k as a catch (tidak), final h breathed (rumah); ng at the start of a word, ngg, ny, sy; the rolled r; light stress and how to read the aid (§6). Deck nouns come in short noun-first phrases (kopi panas, nasi goreng). Trap: c read as k (cantik), every e read the same, a released final k or a dropped final h, English stress with reduced vowels. | Sounds and spelling |
| 2 | `greetings` | Greetings by time of day | id-greetings | Selamat pagi / siang / sore / malam by the clock; Apa kabar? Baik; terima kasih / sama-sama; permisi vs maaf; selamat tinggal / selamat jalan; Nama saya…; adding Pak / Bu / Mas / Mbak to a greeting. Trap: selamat malam at 4 p.m.; sama-sama used for "same to you"; a bare greeting with no title to an older stranger. | Greetings and courtesy |
| 3 | `pronouns` | Pronouns and titles: saya, kamu, Anda, Bapak, Ibu | id-pronouns | saya / aku, kamu, Anda, dia, kami vs kita, mereka; dia for he and she; "you" said with a title (Bapak, Ibu, Mas, Mbak) or a name, and kamu only with friends and children; Anda for forms, signs and formal neutral talk. Trap: kamu to an older stranger; Anda as the everyday "you"; kita for "we" that leaves the listener out. | People and family |
| 4 | `intro` | Introducing yourself | id-intro | Nama saya…, Saya dari Amerika, Saya tinggal di…, Saya orang Amerika, Umur saya… tahun, Saya bisa bahasa Indonesia sedikit, Saya bekerja sebagai…; asking back (Siapa nama Anda? Dari mana?). Trap: Apa nama Anda? (names take siapa), Saya punya 25 tahun for age. | About me |
| 5 | `no-be` | A is B, with no 'to be' | id-no-be | Noun, adjective and place predicates with no verb: Saya guru, Saya lapar, Dia di rumah; adalah only to link two noun phrases in careful speech and writing (Ibu kota Indonesia adalah Jakarta); the verb never changes for time. Trap: Saya adalah lapar, Dia adalah di kantor (§4.2). | Feelings and free time |
| | | **Stage 2: First sentences** | | | |
| 6 | `ini-itu` | ini, itu: this and that | id-ini-itu | Ini buku (This is a book) vs buku ini (this book); itu for that / the; yang ini, yang itu (this one, that one). Trap: putting ini / itu before the noun as in English (ini buku for "this book"), which turns the phrase into a sentence. | Shopping and bargaining |
| 7 | `noun-adj` | Noun + adjective: rumah besar | id-noun-adj | The describing word follows the noun (rumah besar, kopi panas); noun + noun (tiket pesawat, kamar mandi); sangat before, sekali after (sangat besar / besar sekali); Rumah itu besar (a sentence) vs rumah besar itu (a phrase). Trap: besar rumah; the English order of several modifiers. | Describing people and things |
| 8 | `possession` | Possession: buku saya, bukuku, bukunya | id-possession | The owner follows the thing: buku saya, mobil Budi, rumah teman saya; the endings -ku, -mu, -nya; -nya also as "the" (harganya, the price); punya for "have". Trap: saya buku, Budi mobil, and the English apostrophe-s order (§4.1). | Home and routine |
| 9 | `questions` | apa, siapa, di mana, kapan, berapa | id-questions | Yes / no questions by rising intonation, or with apakah (formal) or apa; apa, siapa, di mana / ke mana / dari mana, kapan, berapa, bagaimana, mengapa / kenapa; the question word can stay where the answer goes (Kamu tinggal di mana?); whose = noun + siapa (Mobil siapa ini?). Trap: Apa nama Anda?; Di mana kamu pergi? for "Where are you going?". | Questions and connectors |
| 10 | `negation` | tidak and bukan | id-negation | tidak before verbs and adjectives (Saya tidak lapar), bukan before nouns and pronouns (Saya bukan guru); answering Tidak or Bukan to match the question; a first look at belum (not yet, §8 time-words) and jangan (don't, §8 requests). Trap: Saya tidak guru, Dia bukan lapar (§4.3). | Traps for English speakers |
| 11 | `numbers` | Numbers and prices | id-numbers | 0 to a million: belas, puluh, ratus, ribu, juta; se- for "one" (sebelas, seratus, seribu); prices in rupiah (Rp25.000 said dua puluh lima ribu rupiah); Berapa harganya? Numbers and quantity words go BEFORE the noun (dua kopi, banyak orang) while describers go after. Trap: kopi dua for "two coffees" in a sentence, the dot as thousands separator, satu ratus for seratus. | Numbers and money |
| 12 | `time` | Telling the time: jam, pukul, setengah | (added) | Jam berapa? jam tiga (three o'clock) vs tiga jam (three hours); pukul in formal times; setengah tiga = 2:30 (half way to three), lewat, kurang, seperempat; pagi / siang / sore / malam after the hour; days (hari Senin) and dates (tanggal 17 Agustus). Trap: setengah tiga read as 3:30; tiga jam for three o'clock. | Time, days and dates |
| 13 | `ada` | ada: there is, have | id-ada | Ada apotek di dekat sini? (Is there…?), Tidak ada (There isn't any); ada for "have" in speech (Ada kamar kosong?); ada before a place is optional (Dia ada di rumah = Dia di rumah). Trap: adalah where ada is meant (Adalah apotek? for Ada apotek?), and ada where nothing is needed. | Around town and directions |
| 14 | `prepositions` | di, ke, dari | id-prepositions | di = at or in (place), ke = to (motion), dari = from; di mana / ke mana / dari mana; di + place is written apart (di rumah), unlike the di- passive (dimakan); di atas, di bawah, di depan, di belakang, di sebelah. Trap: Saya pergi di Bali for ke Bali; dirumah written as one word. | Transport and travel |
| | | **Stage 3: Doing things** | | | |
| 15 | `family` | Family and personal details | id-family | ayah / bapak, ibu, kakak, adik, suami, istri, anak, orang tua, kakek, nenek; kakak and adik name age, not sex (adik perempuan = younger sister); Sudah menikah? Belum.; family titles used as "you". Trap: Indonesian has no word that means only "brother"; answering Tidak to Sudah menikah? (belum is expected). | People and family |
| 16 | `time-words` | sudah, sedang, akan, belum | id-time-words | The verb never changes; time words carry tense: sudah (done, already), sedang (in progress), akan (will), belum (not yet), pernah (ever), masih (still), plus kemarin, besok, tadi, nanti. Trap: Saya makan for "I have eaten" with no sudah where it matters; Belum vs Tidak; tense pressed onto the verb (§4.2). | Home and routine |
| 17 | `ber` | The ber- prefix | id-ber | ber- verbs that take no object: bekerja, belajar, berenang, bermain, berbicara, bertanya, berjalan; ber- + noun = have, wear or use (bernama "be named", bersepeda "ride a bike"); be- before r and some words (bekerja, berenang). Trap: ber- and meN- swapped (bermasak for memasak); ber- dropped in careful speech (Saya kerja for Saya bekerja, fine only in casual speech). | Feelings and free time |
| 18 | `me` | The me- prefix | id-me | meN- verbs with an object (membaca buku, menulis surat, memasak nasi); the nasal fits the root: me- (melihat), mem- (membaca, memakai), men- (menulis, mencari), meng- (mengirim, mengerti), meny- (menyanyi); p t k s at the start of the root drop (pakai → memakai, tulis → menulis, kirim → mengirim, sewa → menyewa). Root forms in casual speech for recognition. Trap: mengbaca, mempakai, mentulis (§4.6). | Work and study |
| 19 | `modals` | mau, bisa, harus, boleh | id-modals | mau / ingin (want), bisa (can, also "I speak": Bisa bahasa Inggris?), harus (must), boleh (may), perlu (need); straight before the verb with nothing between; Boleh saya…? Bisa tolong…? Trap: Saya mau untuk pergi (no "to"), bisa vs boleh for permission. | Health and help |
| 20 | `requests` | Asking and telling: tolong, minta, silakan, jangan | (added) | tolong + verb (please do), minta + thing (may I have), silakan (please, go ahead), coba (try), ayo (let's), jangan (don't); polite softeners -lah, ya; ordering food: Minta nasi goreng satu, Tidak pakai sambal. Trap: tidak for "don't" in a command (Tidak pergi! → Jangan pergi!), and a bare verb or "Saya mau…" to a waiter where minta is the polite form. | Food and drink |
| 21 | `yang` | yang: which, who | id-yang | yang links a noun to a describing phrase (orang yang tinggi, buku yang saya beli); yang + adjective alone as "the … one" (yang merah, yang besar); yang where English uses "who / which / that". Trap: leaving yang out after a long describer, or using it after every one-word adjective. | Describing people and things |
| 22 | `passive` | The di- passive | id-passive | di- + root for "is done / was done": Kamar sudah dipesan, Tiketnya dibeli di stasiun; oleh for "by"; the di- verb is written as one word (dimakan), unlike di + place (di rumah); Indonesian uses the passive far more than English. Trap: avoiding the passive; di makan / dirumah spelling. | Transport and travel |
| 23 | `compare` | lebih, paling: comparing | id-compare | lebih + adjective (+ dari / daripada): lebih murah dari; paling + adjective (paling enak); sama + adjective + -nya (sama besarnya) and se- (sebesar); kurang (less); terlalu (too). Trap: lebih left out (Ini murah dari itu); sangat used for "most"; English -er and -est copied onto the adjective. | Shopping and bargaining |
| 24 | `directions` | Directions: junctions and places | id-directions | belok kiri / kanan, lurus, terus, perempatan, pertigaan, lampu merah, di depan, di seberang, dekat, jauh; asking Permisi, … di mana? Trap: kiri and kanan mixed up; jalan used for both "street" and "walk". | Around town and directions |
| 25 | `daily` | Daily activities and shopping | id-daily | A day in sequence: bangun, mandi, sarapan, berangkat, pulang, tidur, with jam and time words; then shopping at a warung or market: Berapa?, bisa kurang?, Saya ambil yang ini. Trap: mandi as "take a bath" only (it is the everyday shower); bargaining in a shop with fixed prices. | Home and routine |
| 26 | `plural` | Plurals by repeating: buku-buku | id-plural | Plural is usually unmarked (buku = book or books); repeating with a hyphen (anak-anak, buku-buku) when "many, various" matters; never after a number or a quantity word (tiga buku, banyak orang); repeated words that are not plurals (kupu-kupu, hati-hati, jalan-jalan). Trap: tiga buku-buku, banyak orang-orang; "anak anak" typed without the hyphen. | People and family |
| 27 | `casual` | Everyday spoken Indonesian | (added) | What learners hear in Jakarta and on social media: nggak / enggak, udah, aja, gimana, kenapa, aku / kamu, gue / lo (recognition only), the -in ending for -kan / -i (bilangin), dong, sih, kok, deh as tone words; when to switch. Trap: gue / lo with strangers or elders; writing casual forms in a formal message. | Everyday spoken Indonesian |

Per-lesson notes for writers:
- Every lesson's practice set satisfies §7.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: *tidak / bukan* (from `negation` on), *di / ke* (from `prepositions` on), *sudah / belum* (from `time-words` on), and the "you" title (*Pak / Bu / Mas / Mbak*).
- `me`: typed items give the root in the hint (*hint: baca · buku*) and the model answer has the full *meN-* form; the casual root form (*Saya baca buku*) is not accepted, except in `casual`.
- `passive`: accepted answers use the *di-* verb written as one word; a spaced *di makan* is wrong (§10).
- `time`: prompts say "o'clock" or give the time in digits in the English ("at 2:30") so that *setengah tiga* is the only natural answer.
- `casual`: prompts that want a casual form say "(casual)"; the same prompt without the cue wants the standard form.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards in total). Card shape: `target | pron | meaning | note`.
- `target`: Indonesian. Nouns often in short phrases that show the noun-first order (*kopi panas, kamar saya*), which keeps the standing rule visible in review.
- `pron`: generated (§6).
- `meaning`: short American English.
- `note`: one English line, or empty. Strong-e reminders, the right "you", casual / standard pairs and false-friend warnings go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| First steps | Sounds and spelling · Greetings and courtesy · About me · People and family |
| Everyday words | Numbers and money · Time, days and dates · Food and drink · Shopping and bargaining · Home and routine |
| Out and about | Around town and directions · Transport and travel · Health and help · Work and study |
| Conversation | Describing people and things · Feelings and free time · Questions and connectors |
| Watch out | Traps for English speakers · Everyday spoken Indonesian |

**Deck rules for writers**
- Use a title where a traveller meets staff or strangers (shop, warung, directions, health), and say so in the note ("to an older man: Pak").
- Write prices as words in Indonesian strings (*dua puluh lima ribu rupiah*); the note may show the written form (*Rp25.000*).
- **Traps for English speakers** (about 17 cards):
  - the 6 sourced false friends (§4.11: *air, gang, kos, kelas, oblong, brokat*; *oblong* with a note that it is old-fashioned, *kaos* being the everyday word [inference]);
  - 4 sound-alike pairs as single cards (*kepala / kelapa, semangat / semangka*, one per card);
  - 4 negative-word cards (*bukan* with a noun, *tidak* with an adjective, *belum*, *jangan*);
  - 3 calques (*Siapa nama Anda?*, *Umur saya…*, *Apa kabar?*).
  - The added pairs of §4.11 (*rok, jas, sop, bensin, polisi, lama, pusing*) only after a native check.
- **Everyday spoken Indonesian** (about 16 cards): *nggak, udah, aja, gimana, aku, kenapa, banget, dong, sih, kok, nih, deh, bilangin, gue, lo, makasih*, each with the standard form in the note. *Gue / lo* cards say "Jakarta, with friends your age only".

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Sounds and spelling** (First steps). Words that show each spelling rule: c, the two e sounds, final k and h, ng, ny, sy and the rolled r. Lessons: `sounds`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| cantik | `CHAHN-teeq` | pretty | c always sounds like ch in "church": never "kantik". |
| enak | `EH-nahq` | delicious | The strong e (eh). The spelling does not show it: learn it with the word. |
| besar | `buh-SAHR` | big | The weak e (uh). It is never the stressed syllable, so the lift moves to sar. |
| tidak | `TEE-dahq` | not; no | A final k is a catch in the throat, as in "uh-oh". Do not pop the k. |
| nyanyi | `NYAH-nyee` | to sing | ny as in "canyon", even at the start of a word. |

**2. Greetings and courtesy** (First steps). Greetings by time of day, thanks, sorry, excuse me, and goodbyes. Lessons: `greetings`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Selamat pagi. | `suh-LAH-maht PAH-ghee` | Good morning. | Until about 11 a.m. Then selamat siang. |
| Selamat sore. | `suh-LAH-maht SOH-reh` | Good afternoon. | From about 3 p.m. until dark. After dark: selamat malam. |
| Terima kasih. | `tuh-REE-mah KAH-seeh` | Thank you. | The reply is Sama-sama (You're welcome). |
| Permisi. | `puhr-MEE-see` | Excuse me. | To pass someone or get attention. To say sorry: Maaf. |
| Apa kabar? | `AH-pah KAH-bahr` | How are you? | Literally "what news?". Answer: Baik, terima kasih. |

**3. About me** (First steps). Name, where you are from, age, languages and where you live. Lessons: `intro`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Nama saya Emma. | `NAH-mah SAH-yah EHM-mah` | My name is Emma. | Literally "name my Emma": the owner comes after the noun, and there is no word for "is". |
| Saya dari Amerika. | `SAH-yah DAH-ree ah-meh-REE-kah` | I'm from the US. | No word for "am". Amerika usually means the United States. |
| Saya tinggal di Jakarta. | `SAH-yah TEENG-gahl dee jah-KAHR-tah` | I live in Jakarta. | di = in or at a place. |
| Saya bisa bahasa Indonesia sedikit. | `SAH-yah BEE-sah bah-HAH-sah een-doh-neh-SEE-ah suh-DEE-keet` | I speak a little Indonesian. | bisa (can) + a language = speak it. |
| Umur saya tiga puluh tahun. | `OO-moor SAH-yah TEE-gah POO-looh TAH-hoon` | I'm thirty years old. | Literally "my age thirty years". Not Saya punya tiga puluh tahun. |

**4. People and family** (First steps). Family words and the titles Indonesians use for "you": Bapak, Ibu, Mas, Mbak. Lessons: `pronouns`, `family`, `plural`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Bapak | `BAH-pahq` | sir; Mr.; father | The polite "you" for a man older than you or in a formal role. Short form: Pak. |
| Ibu | `EE-boo` | ma'am; Mrs.; mother | The polite "you" for a woman older than you or in a formal role. Short form: Bu. |
| Mas | `mahs` | you (to a young man) | Everyday in Jakarta and Java for a waiter, a driver or a young man. It also means older brother. |
| Mbak | `mbahq` | you (to a young woman) | Everyday in Jakarta and Java for a shop assistant or a young woman. It also means older sister. |
| adik saya | `AH-deeq SAH-yah` | my younger brother or sister | adik names the age, not the sex: adik laki-laki = younger brother. |

**5. Numbers and money** (Everyday words). Numbers to a million and prices in rupiah. Lessons: `numbers`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| lima ribu rupiah | `LEE-mah REE-boo roo-PEE-ahh` | 5,000 rupiah | ribu = thousand. Written Rp5.000: a dot, not a comma, for thousands. |
| dua puluh lima | `DOO-ah POO-looh LEE-mah` | twenty-five | puluh = ten(s): dua puluh = 20. |
| sebelas | `suh-buh-LAHS` | eleven | se- means one: sebelas 11, seratus 100, seribu 1,000. |
| Berapa harganya? | `buh-RAH-pah hahr-GAH-nyah` | How much is it? | harga = price; -nya = "its" or "the". |
| satu juta | `SAH-too JOO-tah` | one million | Prices run into the millions: Rp1.000.000. |

**6. Time, days and dates** (Everyday words). Telling the time, days, months and dates, yesterday and tomorrow. Lessons: `time`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| jam tiga | `jahm TEE-gah` | three o'clock | jam before the number = o'clock. tiga jam = three hours. |
| setengah tiga | `suh-tuh-NGAHH TEE-gah` | half past two | Literally "half three": half way to three. Not 3:30. |
| hari Senin | `HAH-ree suh-NEEN` | Monday | Days usually take hari (day) in front. |
| kemarin | `kuh-MAH-reen` | yesterday | besok = tomorrow; hari ini = today. |
| tanggal tujuh belas Agustus | `TAHNG-gahl TOO-jooh buh-LAHS ah-GOOS-toos` | August 17 | Day before month. August 17 is Independence Day. |

**7. Food and drink** (Everyday words). Ordering at a warung or restaurant, and everyday dishes and drinks. Lessons: `requests`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| nasi goreng | `NAH-see GOH-rehng` | fried rice | The noun comes first: nasi (rice), then goreng (fried). |
| es teh manis | `ehs tehh MAH-nees` | sweet iced tea | es teh (iced tea), then manis (sweet). Without sugar: es teh tawar. |
| Minta air putih. | `MEEN-tah AH-eer POO-teeh` | Some drinking water, please. | air putih = drinking water (literally "white water"). minta = may I have. |
| Tidak pakai sambal. | `TEE-dahq PAH-kai SAHM-bahl` | No chili sauce, please. | pakai = with, using. Not spicy: tidak pedas. |
| enak sekali | `EH-nahq suh-KAH-lee` | really delicious | sekali after the adjective = very. |

**8. Shopping and bargaining** (Everyday words). Asking prices, choosing this one or that one, and bargaining politely. Lessons: `ini-itu`, `compare`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Berapa ini? | `buh-RAH-pah EE-nee` | How much is this? | At a market or a warung. |
| Yang ini. | `yahng EE-nee` | This one. | yang ini = "the one that is this". |
| Bisa kurang? | `BEE-sah KOO-rahng` | Can you lower the price? | The everyday way to bargain at a market. Not in shops with price tags. |
| Terlalu mahal. | `tuhr-LAH-loo MAH-hahl` | It's too expensive. | terlalu = too. No word for "it is". |
| baju merah | `BAH-joo MEH-rahh` | red top; red shirt | Colors come after the noun. |

**9. Home and routine** (Everyday words). Rooms and things at home, and a daily routine with time words. Lessons: `possession`, `time-words`, `daily`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| kamar saya | `KAH-mahr SAH-yah` | my room | The owner comes after the noun: kamar (room) saya (my). |
| Saya sudah mandi. | `SAH-yah SOO-dahh MAHN-dee` | I've already showered. | mandi = wash yourself, shower. sudah = already. |
| Saya bangun jam enam. | `SAH-yah BAH-ngoon jahm uh-NAHM` | I get up at six. | No word for "at" before a time in everyday speech. |
| kamar mandi | `KAH-mahr MAHN-dee` | bathroom | Literally "bathing room". |
| Saya sedang memasak. | `SAH-yah suh-DAHNG muh-MAH-sahq` | I'm cooking (right now). | sedang = in the middle of. The verb itself never changes. |

**10. Around town and directions** (Out and about). Places in town, asking where things are, and following directions. Lessons: `ada`, `directions`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Di mana stasiun? | `dee MAH-nah stah-SEE-oon` | Where is the station? | Literally "at where station?". No word for "is". |
| Ada apotek di dekat sini? | `AH-dah ah-POH-tehq dee duh-KAHT SEE-nee` | Is there a pharmacy near here? | ada = there is. A yes / no question needs only a rising voice. |
| belok kiri | `BEH-lohq KEE-ree` | turn left | kanan = right. belok has the strong e. |
| lurus saja | `LOO-roos SAH-jah` | go straight | saja = just. |
| perempatan | `puh-ruhm-PAH-tahn` | intersection | Literally "four-way". A T-junction: pertigaan. |

**11. Transport and travel** (Out and about). Ojek, taxis, trains and planes, tickets and hotel basics. Lessons: `prepositions`, `passive`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Saya mau ke Bali. | `SAH-yah mow kuh BAH-lee` | I want to go to Bali. | ke = to a place. After mau, no word for "go" is needed. |
| naik ojek | `NAH-eeq OH-jehq` | take a motorbike taxi | naik = ride, get on. Booked by app or found on the street. |
| tiket pesawat | `TEE-keht puh-SAH-waht` | plane ticket | The main noun first: tiket (ticket), then pesawat (plane). |
| Jam berapa keretanya berangkat? | `jahm buh-RAH-pah kuh-reh-TAH-nyah buh-RAHNG-kaht` | What time does the train leave? | keretanya = the train. berangkat = leave, depart. |
| bandara | `bahn-DAH-rah` | airport | Short for bandar udara. |

**12. Health and help** (Out and about). Saying what hurts, the pharmacy, the doctor and asking for help. Lessons: `modals`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Saya sakit. | `SAH-yah SAH-keet` | I'm sick. | No word for "am". |
| Kepala saya sakit. | `kuh-PAH-lah SAH-yah SAH-keet` | I have a headache. | Literally "my head (is) sick". |
| Tolong! | `TOH-lohng` | Help! | Also "please" before a verb: Tolong bantu saya. |
| Saya harus ke dokter. | `SAH-yah HAH-roos kuh DOHK-tuhr` | I have to go to the doctor. | harus = must. ke + place, with no verb for "go". |
| apotek | `ah-POH-tehq` | pharmacy | The e is strong (eh). |

**13. Work and study** (Out and about). Jobs, the office, classes and everyday me- verbs. Lessons: `me`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Saya bekerja di kantor. | `SAH-yah buh-kuhr-JAH dee KAHN-tohr` | I work in an office. | bekerja is a ber- verb (be- before k-er). |
| Saya mahasiswa. | `SAH-yah mah-hah-SEES-wah` | I'm a college student. | No word for "am" or "a". A school pupil: murid or pelajar. |
| teman kantor | `tuh-MAHN KAHN-tohr` | coworker | Literally "office friend". |
| Saya sedang belajar bahasa Indonesia. | `SAH-yah suh-DAHNG buh-LAH-jahr bah-HAH-sah een-doh-neh-SEE-ah` | I'm learning Indonesian. | belajar = study, learn. |
| rapat | `RAH-paht` | meeting | At work. A date or a casual meetup: ketemuan. |

**14. Describing people and things** (Conversation). Size, color, looks and character, always after the noun. Lessons: `noun-adj`, `yang`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| rumah besar | `ROO-mahh buh-SAHR` | a big house | The describing word comes after the noun. |
| Rumah saya besar. | `ROO-mahh SAH-yah buh-SAHR` | My house is big. | Owner after the noun, adjective at the end, no word for "is". |
| orang yang tinggi | `OH-rahng yahng TEENG-ghee` | the tall person | yang = "who is / which is". |
| mobil baru | `MOH-beel BAH-roo` | a new car | Not baru mobil. |
| sangat cantik | `SAH-ngaht CHAHN-teeq` | very pretty | sangat before the adjective; sekali after it: cantik sekali. |

**15. Feelings and free time** (Conversation). How you feel, with no word for "to be", and hobbies with ber- verbs. Lessons: `no-be`, `ber`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Saya lapar. | `SAH-yah LAH-pahr` | I'm hungry. | Not Saya adalah lapar: adjectives take no verb. |
| Saya capek. | `SAH-yah CHAH-pehq` | I'm tired. | Everyday word. In writing: lelah. |
| Saya senang. | `SAH-yah suh-NAHNG` | I'm happy. | Also: glad, pleased. |
| Saya suka berenang. | `SAH-yah SOO-kah buh-ruh-NAHNG` | I like swimming. | berenang is a ber- verb: swim. |
| main bola | `MAH-een BOH-lah` | play soccer | Everyday speech. Careful form: bermain sepak bola. |

**16. Questions and connectors** (Conversation). Question words and the small words that join sentences. Lessons: `questions`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| Siapa nama Anda? | `see-AH-pah NAH-mah AHN-dah` | What's your name? | siapa (who), not apa (what): names are asked with "who". |
| Dari mana? | `DAH-ree MAH-nah` | Where are you from? | Literally "from where?". Also: where are you coming from? |
| Kapan? | `KAH-pahn` | When? |  |
| karena | `kah-ruh-NAH` | because | The e is weak (uh). |
| tetapi | `tuh-TAH-pee` | but | Everyday: tapi. |

**17. Traps for English speakers** (Watch out). False friends, calques, and the four words for "not". Lessons: `negation`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| air | `AH-eer` | water | Two syllables, ah-eer. The air you breathe is udara. |
| gang | `gahng` | alley; narrow lane | Not a gang of people. |
| kelas | `kuh-LAHS` | classroom; grade | Also class. Kelas tiga = third grade. |
| Saya bukan guru. | `SAH-yah BOO-kahn GOO-roo` | I'm not a teacher. | bukan before a noun. Before a verb or adjective: tidak. |
| Belum. | `buh-LOOM` | Not yet. | The polite answer to Sudah menikah? (Are you married?), not Tidak. |

**18. Everyday spoken Indonesian** (Watch out). Casual forms you will hear every day, with the standard form beside each. Lessons: `casual`.

| Indonesian | `pron` | Meaning | Note |
|---|---|---|---|
| nggak | `nggahq` | no; not (casual) | Standard: tidak. Also spelled enggak. |
| udah | `OO-dahh` | already (casual) | Standard: sudah. |
| gimana | `ghee-MAH-nah` | how (casual) | Standard: bagaimana. |
| aja | `AH-jah` | just; only (casual) | Standard: saja. |
| aku | `AH-koo` | I; me (casual) | With friends and family. Standard: saya. |


**Localisation** (examples, dialogues, practice). Every item below was run through `respell.js` and gives no warning; *online* is a whole-word exception (`EXC`), because English loans do not follow the spelling rules. Any other name or loan needs a run through the generator first.
- **Names:**
  - Indonesian: Budi, Siti, Rina, Agus, Putri, Andi, Sari, Rudi, Indah, Fajar, Ayu, Yusuf, Joko; Dewi and Eko (listed); Balinese birth-order names Wayan, Made, Nyoman, Ketut (listed), with a note the first time; Hendra and Lestari (listed).
  - English-speaking learner characters: Emma (listed), Jack, Ryan, Megan. They appear in English prompts and in *Nama saya Emma*.
  - No celebrities.
- **Places:** Jakarta, Bali, Denpasar, Ubud, Kuta, Lombok, Yogyakarta, Bandung, Surabaya, Medan, Makassar, Malang, Semarang; islands Jawa, Sumatra, Kalimantan, Sulawesi, Papua. US places only in English prompts, or as *Saya dari Amerika*.
- **Food and drink:** nasi goreng, mi goreng, nasi campur, sate ayam, gado-gado, soto, bakso, rendang, tempe, tahu, sambal, kerupuk, pisang goreng, martabak, es teh manis, kopi, jus alpukat, air putih, kelapa muda.
- **Money:** rupiah, in words in Indonesian strings; realistic prices [inference]: *es teh* about five thousand rupiah at a warung, *nasi goreng* twenty to thirty thousand, a short *ojek* ride ten to twenty thousand. Thousands are written with a dot (*Rp25.000*) in notes.
- **Measures and dates:** day before month (*tanggal tujuh belas Agustus*); kilometres, kilograms and degrees Celsius; *jam* + number, with *pagi / siang / sore / malam* rather than a.m. / p.m.
- **Settings:** a warung, a market, a minimarket, an *ojek* or taxi ride, a train station, a hotel front desk, a pharmacy, a beach in Bali, a family meal with in-laws, an office in Jakarta, a *kos* (rented room). No brand names in Indonesian strings (*ojek online*, not an app name).

## 10. Typing and script

**Script.** Plain Latin letters. Standard spelling uses no accent marks; *é* appears only in dictionaries and some teaching texts. `targetScript`: `[A-Za-zÉé]`. Every Indonesian string must contain at least one character from it. **It also matches any English string**, so it cannot catch an English answer in an Indonesian field; the lead should know this check is empty for Latin-script targets without special letters.

**Accent bar** (`keys`): empty. There is nothing to type that a US keyboard lacks.

**`accents: false`.** Indonesian answers never contain accent marks, so there is no "almost" path for accents. In the app's matcher (`pracMatch` in `src/app.html`), `accents: false` means no accent folding at all: a learner whose phone inserts *é* would be marked wrong. That is very unlikely, but **the lead may prefer to fold accents for `id` anyway** (treat *é* as *e*).

**The hyphen is spelling.** Repeated words are written with a hyphen: *anak-anak, buku-buku, sama-sama, hati-hati, jalan-jalan, kupu-kupu*.
- The app's matcher (`pracNorm`) keeps the hyphen, and so does the validator's `pn`. So *anak anak* (space) and *anak2* (the very common texting form with "2") are both marked **wrong** against *anak-anak*.
- **Request to the lead:** grade a space in place of the hyphen, and a "2" written straight after a word (*anak2*), as "almost" with the hyphenated form shown. Until then, writers list only the hyphenated form and never list *anak anak* or *anak2* as accepted.
- In `order` items a hyphenated word is one tile (tiles split on spaces), so it is never split.
- In the flashcard review matcher (`normT`), hyphens and spaces are stripped, so cards are not affected.

**Spacing of *di*** (taught in `prepositions` and `passive`): *di* + place is two words (*di rumah, di mana*); the *di-* passive is one word (*dimakan, dibeli*). A typed answer with the wrong spacing is wrong, never "almost": the spacing is the point of two lessons, and natives are corrected on it too [inference]. Same for *ke* + place (*ke Bali*, never *kebali*) and the prefix *ke-* in words such as *kemarin*.

**Apostrophes:** standard spelling has none (*Jumat*, not *Jum'at*). The matcher strips apostrophes at word edges; no item depends on them.

**Punctuation.** Indonesian has no ¿ ¡. The engine strips `. , ! ? ~` and quotes. Authors still write the final punctuation in `a[0]`, card targets and examples.

**Case.** Not checked. Authors capitalise the first word of a sentence, *Anda*, titles used in address (*Pak Budi, Bu Sari, Mas, Mbak*), names, and place names; language and nationality words follow standard spelling (*bahasa Indonesia, orang Amerika*). Days and months are capitalised in Indonesian (*Senin, Agustus*).

**What a typed answer must include**
- Every word Indonesian requires: the right negative word, *ke* or *di*, *yang* where the describer is a phrase, the *meN-* or *ber-* form taught in the lesson, *jam* for clock times.
- The noun-first order and no extra "to be" (the standing rule).
- Hyphens in repeated words; the right *di* spacing.

**What it need not include**
- Subject pronouns where dropping them is natural (authors list both).
- *Apakah* in yes / no questions; *adalah* before a noun predicate.
- *Sudah* in a past sentence that already has a time word (*Saya makan kemarin*); authors list both with and without where both are natural.
- Final punctuation, capital letters.

**Casual forms in a standard item.** Today *nggak* typed for *tidak* (or *udah* for *sudah*, *aja* for *saja*, *gimana* for *bagaimana*, *aku* for *saya*) is simply wrong. **Request to the lead:** grade these pairs as "almost" with the note "standard form: …", because the learner has said real Indonesian. Until then, writers do not list casual forms outside `casual`, and `why` lines never call them mistakes.

**`fill` and tile fallbacks.** The three wrong options `o` should be standing-rule or negative-word twins wherever possible: the English order (*besar rumah*), *adalah*, *ke / di / dari*, *tidak / bukan / belum / jangan*, the wrong *meN-* form (*mengbaca, mempakai*). A distractor must be wrong, not merely casual: never use *nggak* or *udah* as a "wrong" option, because they are correct casual Indonesian.

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The e's in `respell.js`**: the ~320 `LEX` forms and the rule that a word-final *e* and an *e* before a final *k / h* are strong. They come from the author's knowledge; 20 words were checked against KBBI and 6 were wrong (now fixed), so the unchecked `LEX` entries need the same check. **European loans are the weak spot**: *termos, terapi, memori* still come out with the weak e and no warning, and are probably wrong. A native, or KBBI's pronunciation field for every `LEX` word, should check the rest, and a sample of writers' rows.
2. **Stress**: CAPITALS follow the textbook rule, but van Zanten & Goedemans (2009) find no word stress. How suffixes and *-nya* shift the capital (*harganya* → `hahr-GAH-nyah`, *makanan* → `mah-KAH-nahn`) follows the "count from the end of the written word" reading; the 2009 paper reports listeners accepting other positions. Neither choice is wrong in speech, but a native should say whether the capitals mislead.
3. **Register advice**: *Mas / Mbak* as national city usage, *Kak*, *aku / kamu* among adult friends, when *Anda* is natural, and the claim that *saya* is right everywhere. Sources disagree (§2.2, §2.4).
4. **The added false friends** (*rok, jas, sop, bensin, polisi, lama, pusing*) and the claim that *oblong* is old-fashioned.
5. **Sample sentences**: *Saya bisa bahasa Indonesia sedikit*, *Kepala saya sakit*, *Tidak pakai sambal*, *Bisa kurang?*, *Minta air putih*, *Saya bangun jam enam* (no *pada*), *es teh dua* as the ordering form, and prices in §9.
6. **Greeting hours**: *pagi* until about 11, *siang* about 11 to 3, *sore* about 3 to dusk, *malam* after dark. The app's greeting slots are fixed by the clock (`src/app.html`: before 5 or from 22 → late night, 5–12 morning, 12–18 afternoon, 18–22 evening), so `greet` uses *Selamat siang* for the whole 12–18 slot, although *Selamat sore* is the right greeting after about 3 p.m. [inference]. *Selamat malam* serves both late night ("you're up late") and evening.
7. **`brand: "Bahasa Indonesia"`**: two words where the other courses have one; "Bahasa" alone would be wrong (it means "language").

**Evidence that could not be found, or was read only in part**
- **No error study of English-L1 learners' Indonesian grammar** was found. §4's grammar ranking is [inference] built on practitioner lists (IndonesianPod101, Kaiwa, Speak Indo) plus three tiny studies of other L1s (Shabrina et al. 2026, one Swiss learner; Sapanti 2019, Mandarin speakers; Fauzi et al., five learners of unreported nationality). An English-L1 learner corpus, or the Australian school data (VCE), should be checked.
- **Pronunciation studies:** Astuti et al. 2025 (20 US learners) was read in full through a summary. Their vowel study (seven learners) and Sundusiah & Fauzia 2021 were read as abstracts only, with no counts.
- **Hassall 2012** (requests) was read as an abstract only, with no counts or sample size.
- **Widianto, Weix & Cullinane 2026** (history of Indonesian teaching in the US) was read as an abstract only.
- **US numbers:** no US enrolment figure (MLA census) for Indonesian and no count of US residents who speak Indonesian at home (ACS) were opened. Australia's figures are from a 2013 AIYA page.
- **Learner motives:** no survey; §5 rests on Babbel, AIYA and inference.
- **The *Sahabatku Indonesia* syllabus** was read through one evaluation article (Rahma & Suwandi 2021), not the book.
- **Word-final *e* and *e* before final *k / h*** as strong: one practitioner page gives the first rule ("almost always"); the second is the author's. In the 395 test words neither rule misfired, but loans such as *tante* (weak final e) are known exceptions and are listed.

**Engine and pipeline** (for the lead)
- Hyphen: a space or "2" in place of the hyphen should be "almost" (§10). Today both are wrong.
- Casual / standard pairs (*nggak / tidak*, *udah / sudah*…) typed in a standard item should be "almost" (§10). Today they are wrong.
- `accents: false` turns off all folding; consider folding *é* anyway (§10).
- `targetScript` matches English text too (§10).
- `respell.js` writes warnings to stderr with the word in « »; `repron.js` collects them. About a quarter of unlisted *e* words will warn; most warnings are needless, so the lead should check them against KBBI in batches.
- `time`, `requests` and `casual` have an empty `roadmap` field. `link_roadmap.py` will mark all 24 `id-*` items covered; `id-numbers` points to `numbers`.
- `pronPattern` accepts the raw words *baik* and *air* (§6.2).
- `greet`: *Selamat siang* covers the afternoon slot (gap 6).

**Not verified at all**
- How well a learner reads the respelling, and whether `q` for the catch helps or confuses. No study compares aid types for this pair.
- Whether `id-ID` TTS voices on the target devices say the strong and weak e the way `LEX` assumes, and whether they keep final *h*.

## Sources

Web pages opened and used for this profile (2026-11-18):
- [Soderberg, C. D. & Olson, K. S. (2008). Illustrations of the IPA: Indonesian. *Journal of the International Phonetic Association* 38(2)](https://core-prod.cambridgecore.org/core/services/aop-cambridge-core/content/view/AE405481B94A4E0B7234A8BBE9C6F5FD/S0025100308003320a.pdf/indonesian.pdf)
- [van Zanten, E. & Goedemans, R. (2009). Prominence in Indonesian: Stress, phrases, and boundaries. *Wacana* 11(2), 197–225](https://media.neliti.com/media/publications/180705-EN-prominence-in-indonesian-stress-phrases.pdf)
- [Astuti, D. W., Indrayani, L. M. & Mahmud, E. Z. (2025). Consonant realisation by American BIPA learners. *Semantik* 14(1), 83–100](https://e-journal.stkipsiliwangi.ac.id/index.php/semantik/article/view/5602/2148)
- [Astuti, D. W., Indrayani, L. M. & Mahmud, E. Z. Challenges in Pronouncing Indonesian Vowels: Phoneme Realization Among American BIPA Learners. *Ranah* 14(1) (abstract only)](https://ojs.badanbahasa.kemdikbud.go.id/jurnal/index.php/jurnal_ranah/article/view/8021)
- [Sundusiah, S. & Fauzia, A. S. (2021). Phonological Error Analysis in Speaking Skill of VCE BIPA Learners in Victoria, Australia. ICOLLITE 2021 (abstract only)](https://www.atlantis-press.com/proceedings/icollite-21/125963485)
- [Hassall, T. (2012). Request modification by Australian learners of Indonesian. In *Interlanguage Request Modification*, John Benjamins (abstract only)](https://openresearch-repository.anu.edu.au/items/6e085245-cdad-418a-bb1f-aacbb9465be2/full)
- [Shabrina, H., Setiawan, H. & Nuraini, C. (2026). Word-formation errors among foreign speakers in the "Akun Rakidarei" database. *Litteratura* 5(1), 93–108](https://journal.uinjkt.ac.id/index.php/litteratura/article/download/52439/19707/170413)
- [Sapanti, I. R. (2019). Phrase-structure errors in Indonesian essays by Chinese learners. *ILEAL* 4(2), 144–157](https://jurnal.syekhnurjati.ac.id/jurnal/index.php/jeill/article/download/2138/2296)
- [Fauzi, M. I. F., Rani, A. & Maharany, E. R. Language errors of Darmasiswa BIPA learners (Universitas Islam Malang; year and journal not shown)](https://jim.unisma.ac.id/index.php/jp3/article/download/26722/20199)
- [Rahma, S. S. & Suwandi, S. (2021). Content and cultural feasibility of BIPA textbooks (*Sahabatku Indonesia* BIPA 1). *Jurnal Pendidikan Bahasa dan Sastra* 21(1), 13–24](https://ejournal.upi.edu/index.php/BS_JPBSP/article/download/36654/pdf)
- [Widianto, E., Weix, G. G. & Cullinane, M. (2026). The history of teaching Indonesian in the United States. *Journal of Southeast Asian American Education and Advancement* 21(1) (abstract only)](https://umimpact.umt.edu/en/publications/the-history-of-teaching-indonesian-in-the-united-states-and-its-p/)
- [Djenar, D. N. (2021). Learning how to say 'you' in Indonesian: why it's time to embrace its complexity. *Melbourne Asia Review* 7](https://melbourneasiareview.edu.au/learning-how-to-say-you-in-indonesian-why-its-time-to-embrace-its-complexity/)
- [ielanguages: Addressing People in Indonesian](https://www.ielanguages.com/indonesian-address.html)
- [IndonesianPod101: Watch Out for These Common Mistakes in Indonesian (2020)](https://indonesianpod101.com/blog/2020/12/11/common-indonesian-mistakes)
- [IndonesianPod101: Top Five Tips for Avoiding Common Mistakes in Indonesian (lesson notes)](https://www.indonesianpod101.com/lesson/all-about-14-top-five-tips-for-avoiding-common-mistakes-in-indonesian)
- [IndonesianPod101: What are some Indonesian–English false friends? (lesson)](https://www.indonesianpod101.com/lesson/indonesian-teachers-answer-your-questions-5-what-are-some-indonesianenglish-false-friends)
- [Kaiwa: Indonesian vs English, surprising differences (2026, commercial blog)](https://trykaiwa.com/blog/indonesian-vs-english-surprising-differences-2026)
- [Speak Indo: Tidak vs bukan (commercial blog)](https://speak-indo.pages.dev/blog/tidak-vs-bukan)
- [Indonesian Online: The weak e](https://indonesian-online.com/?p=21166)
- [init-id: Pepet vs. Taling, the two sounds of "e" in Indonesian (used for its rules only; one word claim contradicted by KBBI)](https://init-id.pages.dev/rail/a/1/indonesian-e-sound/)
- [AIYA: Indonesian enrolments, what's the story? (c. 2013)](https://aiya.org.au/?p=1408)
- [Babbel: Why learn Indonesian](https://es.babbel.com/en/magazine/why-learn-indonesian)
- KBBI (*Kamus Besar Bahasa Indonesia*) entries on the kbbi.web.id mirror, for the strong e: [teori](https://kbbi.web.id/teori), [metode](https://kbbi.web.id/metode), [versi](https://kbbi.web.id/versi), [terminal](https://kbbi.web.id/terminal), [serius](https://www.kbbi.web.id/serius), [medali](https://kbbi.web.id/medali), [seminar](https://kbbi.web.id/seminar), [kereta](https://kbbi.web.id/kereta), [jelek](https://kbbi.web.id/jelek), [karena](https://kbbi.web.id/karena), [mentega](https://kbbi.web.id/mentega), [lebar](https://kbbi.web.id/lebar), [keren](https://kbbi.web.id/keren), [beli](https://kbbi.web.id/beli), [dompet](https://kbbi.web.id/dompet), [ganteng](https://kbbi.web.id/ganteng), [pepaya](https://kbbi.web.id/pepaya), [telepon](https://kbbi.web.id/telepon), [semangka](https://kbbi.web.id/semangka), [sendok](https://kbbi.web.id/sendok); also [typoonline: kereta](https://typoonline.com/kbbi/kereta)

Local project files read: `docs/briefs/target-profile-id.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-es.md` (§1, §6) and `tools/target/es/profile.json`, `docs/profiles/en-it.md` and `tools/target/it/profile.json` (shape models), `tools/target/pt/respell.js` and `tools/target/es/respell.js` (generator shape), `packs/roadmaps.js` (entry `id`), `tools/target/validate.js`, `tools/target/gen.js`, `tools/target/lib.js`, `tools/target/repron.js`, `tools/target/link_roadmap.py`, and the matcher and greeting code in `src/app.html`. `docs/profiles/id.md` was skimmed only to confirm it is the reverse course.

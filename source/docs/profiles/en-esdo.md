# English speakers learning Dominican Spanish: course profile

Course `en-esdo`: the Spanish of the Dominican Republic for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Spanish, in standard spelling. The course is a **dialect layer** over `en-es` (`docs/DIALECTS-PLAN.md`): 92% of the base cards and most of the lesson text are inherited, and this profile lists only what changes. Where it says nothing, `docs/profiles/en-es.md` rules (glossary, error zones, standing rule, typing). Nothing is built yet; the machine-readable twin will be `tools/dialects/esdo/base.json` and the generated `tools/target/esdo/profile.json`.

**Evidence tags** (as in `en-es.md`).
- **[research-backed]**: a study opened for this profile, named, with its sample and its limits.
- **[curriculum convention]**: what textbooks and courses do.
- **[practitioner opinion]**: a teacher's, blog's, cook's or forum's view, no data behind it.
- **[tertiary]**: an encyclopedia page or a university course page that summarises the literature.
- **[inference]**: this profile's own step from tagged items.
- **[unsourced]**: in no page opened for this profile. Every such item is in the owner's review list (§13) or in Gaps (§14), and none is taught as a fact until a Dominican speaker confirms it.

Untagged rules in §6 to §12 are design decisions.

## 1. Summary

- **Variant:** the everyday speech of educated people in **Santo Domingo**, informal register: how a teacher, a nurse or an office worker talks with friends and family. Popular and rural features (deleting plural *s* everywhere, *r* → *l*, Cibao *r/l* → *i*, *ello hay*, *pa'* written down) are taught **for recognition only**.
- **Voice:** `ttsLang` `es-DO`, recorded voices from native Santo Domingo speakers (§11). No `voiceMatch`, so a device without an `es-DO` voice falls back to any Spanish voice.
- **Register:** *tú* first, as in `en-es`, and used more widely; *usted* for elders, customers, strangers in service situations. *Ustedes* is the only plural "you".
- **What changes from `en-es`:**
  - **Sound and the pron line (§6):** the pron line shows natural Dominican pronunciation through three generated rules: a syllable-final *s* is a breath (`h`), a final *n* before a pause or a vowel is `ng`, and stressed *-ado* loses its *d*. The card text keeps standard spelling. Until recorded Dominican clips exist, the generator runs in "careful" mode (identical to `en-es`).
  - **Grammar (§4):** subject pronouns are normal, not "heavy" (*yo quiero, tú sabes*); questions with *tú* or *usted* before the verb (*¿Qué tú quieres?*) are taught and accepted in typed answers; double *no* and *ello* are recognised, not produced.
  - **Vocabulary (§10):** 153 Dominican words and phrases. Most are **added** (about 92) or recognition-only (about 48); only 4 replace a word the base teaches as a card (*guagua, habichuelas, pica pollo, pasteles en hoja*), and 22 base card slots are localised (§9.1). Four false friends with Mexican Spanish get their own deck (*guapo, ahorita, coger, chimichurri*, plus *china* and *plátano*).
- **Lessons (§8):** 31. Of the 26 `en-es` lessons, 25 are inherited (20 with Dominican overrides, nearly all city, food and transport names; 5 unchanged) and `caribbean` is dropped. 6 new Dominican lessons.
- **Decks (§9):** 34. Of the 29 `en-es` decks, 28 are inherited (22 with overrides, mostly notes; 6 unchanged) and "Caribbean and Dominican Spanish" is dropped. 6 new decks, 98 cards. About 1,006 cards in all.
- **Standing rule (§7):** unchanged: agreement (gender and number; the verb ending matches the subject). It matters more here: when the *s* is a breath, the article and the verb are what show plural and person.
- **Typing (§12):** standard spelling only. *Cansao*, *'tá*, *pa'* are never accepted as typed answers; *¿Qué tú quieres?* always is.

## 2. Variant, register and voice

### 2.1 What Dominican Spanish is, for this course

**The model: educated Santo Domingo speech, informal.**
- [tertiary] Dominican Spanish shares the Caribbean and Andalusian-Canarian traits: *seseo*, *yeísmo*, and a syllable-final *s* that may weaken to a breathy [h], fade or disappear, in all regions ([Wikipedia, *Dominican Spanish*, IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish)).
- [tertiary] The country splits on syllable-final *r*: in the Cibao (north) *r* becomes an *i* sound (*correr* "correi", *perdón* "peidón"); in the east and the capital it becomes *l* ("correl", "peldón") (same page).
- [practitioner opinion: a dialectologist's newspaper essay] Orlando Alba describes the Cibao *i* (*alto* [ái̭to], *comer* [koméi̭]) as the most emblematic feature of popular Cibao speech; in his account it occurs mainly in the speech of people with little schooling, is stigmatised and avoided in formal or educated speech, and still carries covert prestige as a regional marker; "no todos los cibaeños hablan con la /i/" ([Alba, *Acento*, 2025](https://acento.com.do/cultura/los-cibaenos-hablan-con-la-i-observaciones-sobre-la-vocalizacion-9540218.html)).
- [inference] So the course models the capital, not the Cibao, and not the most popular end of either. A learner who says *ehh-TOY kahn-SAH-oh* sounds Dominican and educated; a learner who says *poique* or *peldón* in a job interview does not. The capital also has the airport, the diaspora's family ties and most media.

**How far into popular and rural speech** (decided):

| Feature | Taught for | Where |
|---|---|---|
| Syllable-final *s* as a breath (*ehh-TOY*) | **production** (pron line, voice) | everywhere (§6) |
| Final *n* as *ng* before a pause or vowel | **production** | everywhere (§6) |
| Stressed *-ado* → *-ao* (*cansao*) | **production** in speech; **standard spelling** in writing | everywhere (§6, §12) |
| *s* deleted completely (*lo niño*), plural shown only by the article | recognition | `do-sounds`, "Dominican sounds" deck |
| *r* → *l* in the capital (*polque*, *peldón*) | recognition | `do-sounds` |
| Cibao *r / l* → *i* (*poique*, *comei*) | recognition, labelled regional and rural | `do-sounds` (one section) |
| Clipped forms (*pa'*, *pa'l*, *'tá*, *to'*, *voá*) | recognition; *pa'* allowed in dialogue lines written as speech | `do-sounds`, `do-greetings` |
| Hypercorrect added *s* (*asministración*) | not taught (joke register, [tertiary] Wikipedia mirror) | — |
| *ello* expletive (*Ello hay maíz*) | recognition, one line | `do-questions` |
| Double negation (*Yo no sé no*) | recognition and listening | `do-questions` |

### 2.2 Vocabulary rule

1. Where Dominicans have their own everyday word and a learner in the DR needs it, the **Dominican word is the card target** and the base word goes in the note as "Mexico: …" or "Elsewhere: …" (*la guagua*, note "Mexico: el camión; elsewhere: el autobús").
2. Where the base word is also the normal Dominican word (*carro, celular, computadora, jugo, apartamento*), the card is inherited unchanged. *Autobús* stays in inherited lessons as the general word (it is understood everywhere); the Dominican decks and lessons use *guagua*. The Wikipedia mirror's dialect table lists *carro, celular, computadora* as the Dominican forms [tertiary].
3. Where Dominicans have a word and also use the general one, the general word stays the target and the Dominican word is **added** in a Dominican deck.
4. Slang is taught as slang: its note says who says it to whom ("to friends your age"). Words a source marks as derogatory (*carajito*, which FluentU calls semi-derogatory; *sanky-panky*) are recognition-only or left out ([FluentU](https://www.fluentu.com/blog/spanish/dominican-slang/), [practitioner opinion]).
5. No vulgar words as cards. *Coño* is common and strong ([Lingopie](https://lingopie.com/blog/dominican-slang/) lists it as a strong, somewhat vulgar exclamation); it is named once, in the `do-greetings` body, as "you will hear it; don't start with it".

### 2.3 Forms of "you"

- *Tú* is the default, as in `en-es`. [unsourced] Dominicans are said to use *tú* very widely, including with new acquaintances of similar age; this needs the owner's check (§13, q. 8).
- *Usted*: elders, customers and staff, police, a stranger you ask for help. [tertiary] The Wikipedia mirror says *usted* is used with "formal or unfamiliar speakers".
- *Ustedes* only; no *vosotros* (no change from `en-es`). [tertiary] Caribbean Spanish has no voseo ([Newcastle, *Caribbean Spanish*](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm)).
- Terms of address that come up in dialogues: *mi amor*, *mami / papi* to adults (affectionate), *mi pana*, *mano / mana* (bro / sis, [BaseLang](https://baselang.com/blog/vocabulary/29-dominican-republic-slang-words-to-know-before-visiting-the-caribbean/)). Card notes say these are informal; *mami / papi* to strangers is [unsourced] and goes to the owner (q. 9).

### 2.4 Voice of the English text

As `en-es` §2.4, with two changes:
- The `en-es` note prefix "Regional (Dominican):" is dropped: Dominican is the norm here. Notes name the other variety instead: "Mexico: …", "Elsewhere: …", "Spain: …".
- Recognition-only items carry "You'll hear:" at the start of the note, so writers and learners can see at once what not to produce.

## 3. Glossary additions

All `en-es` §3 terms apply. Added:

| Term to use | Do not use | Note |
|---|---|---|
| breath *s* ("the s turns into a breath") | aspiration, debuccalisation | gloss once in `do-sounds`: "like a soft English h" |
| dropped *s* | elided, deleted | for complete loss |
| *ng* sound (final *n*) | velar n | "the ng of English *song*" |
| pronoun before the verb (*¿Qué tú quieres?*) | non-inverted question, SV order | title of `do-questions` |
| Dominican / Mexican / elsewhere | dialect, slang (as a label for a variety) | "slang" only for slang words |
| "You'll hear:" | — | starts every recognition-only note |

## 4. Grammar that differs from the `en-es` course

Ranked by how often a learner meets it [inference].

**4.1 Subject pronouns are used more (*yo quiero, tú sabes*).**
- [research-backed] In a New York corpus, Dominican newcomers to the city used overt subject pronouns at an average rate of **42%**, the highest in the corpus ("The Dominicans in our study arrive in the City with an average pronoun rate of forty-two percent"); Cuban newcomers 33%; the text says Caribbean varieties have higher pronoun rates than Mainland Latin American varieties ([Shin & Otheguy 2013, *Language in Society* 42.4](https://www.cambridge.org/core/journals/language-in-society/article/social-class-and-gender-impacting-change-in-bilingual-settings-spanish-subject-pronoun-use-in-new-york/28E9550A7A38C4589CBBECD6CA3414BA)). This is NYC newcomers, not residents of the DR, and the Mainland averages were in an unreadable table.
- [tertiary] Redundant subject pronouns are listed for the DR, Puerto Rico and coastal Venezuela; in vernacular Dominican they can also refer back to things: *Cómpralas, que ellas son bonitas* ([Newcastle](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm)).
- **Design:** override the base advice that "saying *yo* every time sounds heavy" (`ser` §"Drop the pronoun", `present` §"You can drop the subject pronoun"): in this course, both are right, and Dominicans keep the pronoun much more than Mexicans. Typed answers already accept both (`en-es` §7). Dialogues written for this course use the pronoun at a natural Dominican rate (roughly every second or third verb) [inference]. Pronouns for things (*ellas son bonitas*) are recognition only.

**4.2 Pronoun before the verb in questions (*¿Qué tú quieres? ¿Cómo tú estás?*).**
- [tertiary] Given for Dominican Spanish as "¿Cómo tú estás?" ([Wikipedia mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish)). The Newcastle page gives *¿Qué tú quieres?*, limits the pattern to **pronoun subjects**, and says it is unacceptable when the pronoun is not next to the verb; shared with Canarian Spanish ([Newcastle](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm)).
- [research-backed, historical corpus] Zimmermann's quantitative study of 1927 Dominican folk tales (206 wh-questions, 46 speakers) found *tú* before the verb in 17 of 33 argument questions (51.5%) and *usted* in 3 of 11 (27.3%); preverbal subjects were only *tú* and *usted*; full noun subjects came after the verb (*¿Qué hiso Juan Bobo?*); examples include *¿Qué tú buca po aquí?* and *¿Poi qué tú yora?* ([Zimmermann 2019, *Isogloss* 5, PDF](https://core.ac.uk/download/328841678.pdf); [abstract](https://revistes.uab.cat/isogloss/article/view/v5-zimmermann)). These are rates from almost a century ago; no current rate was opened. A present-day *usted* example appears in Toribio's essay: *¿Que usted es?* ([Toribio 2023, *Isogloss* 9](https://ddd.uab.cat/pub/isogloss/isogloss_a2023v9n2/isogloss_a2023v9n2a11.pdf)).
- **Design:**
  - Taught actively in `do-questions` with *tú* and *usted* only, pronoun directly before the verb: *¿Qué tú quieres? ¿Dónde tú vives? ¿Cómo usted se llama?*
  - Both orders are always accepted in typed answers (*¿Qué quieres? / ¿Qué tú quieres? / ¿Qué quieres tú?*). The model answer `a[0]` uses the Dominican order in the six Dominican lessons and the standard order elsewhere.
  - Never taught or accepted: a full noun before the verb (*¿Qué Juan quiere?*), *ustedes / ellos* before the verb, or a word between the pronoun and the verb.
  - The base `questions` tip "*¿Dónde usted vive?* → *¿Dónde vive usted?*" is wrong for this course and is replaced (§8).

**4.3 *Ustedes* only.** No change (§2.3).

**4.4 *Tú* vs *usted*.** §2.3. No grammar change; the `greetings` lesson gets a Dominican paragraph.

**4.5 Double negation (*Yo no sé no*, *Nosotros no vamos no*).**
- [tertiary] Post-verbal *no* repeated is listed for **vernacular** Dominican Spanish (and Palenquero): *Nosotros no vamos no* (Newcastle).
- **Design:** recognition and listening only (`do-questions`, one section; "Dominican sounds" deck one card "Yo no sé no." with a "You'll hear:" note). Not produced in typed answers; if typed, accepted (the matcher cannot easily refuse an extra *no*, and it is not wrong Dominican).

**4.6 *Ello* as a dummy subject (*Ello hay maíz*).**
- [tertiary] Listed for vernacular Dominican Spanish: *Ello hay maíz* "there is corn" (Newcastle).
- **Design:** one line in `do-questions` for recognition, labelled rural and old-fashioned [unsourced: how current it is; owner q. 20]. Never a card target.

**4.7 Diminutive *-ico* (*momentico, chiquitico*).**
- [unsourced] The *-ico* ending after *t* (*momentico*) is widely described for the Caribbean, but no page opened for this profile states it for the DR. Owner check (q. 14). Until then, one card (*un momentico*) in the slang deck with the note "also un momentito"; no lesson section.

**4.8 Present perfect vs preterite.**
- [unsourced] No page opened compares Dominican and Mexican use. The base teaches the preterite for "what you did today" (`en-es` §2.2), which fits the Caribbean too as far as is known [inference]. No change; owner check (q. 19).

**4.9 *Dique* "supposedly, so they say".**
- [practitioner opinion] *Dique* = "supposedly", with doubt or sarcasm: *Dique él va a llegar temprano* ([Lingopie](https://lingopie.com/blog/dominican-slang/)); "yeah right" or "supposedly" ([BaseLang](https://baselang.com/blog/vocabulary/29-dominican-republic-slang-words-to-know-before-visiting-the-caribbean/)). It is the Dominican form of general *dizque* [inference].
- **Design:** card and a section in `do-greetings` ("passing on what people say").

**4.10 *Vaina*.**
- [tertiary] "stuff, thing": *¿Qué vaina es esa?* (Wikipedia mirror). [practitioner opinion] FluentU lists six uses, including *Me va a dar una vaina* (I'm coming down with something), *De vaina la conocí* (I met her by chance), *Él siempre me echa vaina* (he's always teasing me), and says to use it only in informal settings; spelling *baina* is not accepted ([FluentU](https://www.fluentu.com/blog/spanish/dominican-slang/)).
- **Design:** `do-greetings` teaches *esa vaina* = "that thing" and *¡Qué vaina!* = "what a pain" [the second: unsourced, owner q. 12]; the rest are recognition cards.

**4.11 *Para* → *pa'*.**
- [tertiary] Strong contractions: "vuá" for *voy a*, "¿p'ónde va'?" for *¿para adónde vas?*, "David 'tá 'co'ta'o" for *David está acostado* (Wikipedia mirror).
- **Design:** recognition (`do-sounds`). Typed answers need *para*. Dialogue lines may write *pa'* only inside the six Dominican lessons, and only in the "heard as" part of a note, never in a card target (the generator and the matcher read standard spelling).

## 5. Learners

- Who: the app's owner (an English speaker studying Dominican Spanish, project context) and the group he stands for: English speakers with Dominican partners, in-laws, friends, neighbours and coworkers, mostly in the US Northeast, plus travellers to Punta Cana and Santo Domingo [inference]. `en-es` §5 gives the Pew count of US Hispanics of Dominican origin (not re-opened here).
- What they need first [inference]:
  1. To **understand** fast Dominican speech: the breath *s*, dropped *d*, *ng*, *pa'* (`do-sounds` comes second, right after `sounds`).
  2. To greet and chat with family and friends the Dominican way (`do-greetings` third).
  3. Food, the colmado, getting around (`do-food`, `do-daily`).
  4. Everything else from the base course, unchanged in grammar.
- Placement: a learner who finished `en-es` can import progress (DIALECTS-PLAN §2.3) and start at the six Dominican lessons.

## 6. Pronunciation aid (`pron`)

### 6.1 Decision

**The pron line shows natural Dominican pronunciation; the card text keeps standard spelling.** Rationale:
- The card text is what learners type and read; it must be standard (§12).
- The pron line is the only place a learner can *see* the Dominican sound. A course whose pron says `ehs-TOY` is the Mexican course again.
- Three rules only, the ones that are frequent in educated Santo Domingo speech and easy to read: the breath *s*, final *ng*, stressed *-ado* → *-ao*. Everything stigmatised or rural (deleting every *s*, *r* → *l*, the Cibao *i*) stays out of the pron and goes to recognition (§2.1).
- Evidence and its limits:
  - [tertiary] *s* weakening is general in the DR; *-ado* → *-ao* is "general" (*casado* "casao", *lado* "lao") (Wikipedia mirror). Velar *n* is given for Caribbean Spanish, word-final or syllable-final and more common at the end of a breath group or before a vowel: *balcón* [balˈkoŋ] (Newcastle). R2 follows that description.
  - [research-backed] In five Dominican women in New York, word-final *s* before a vowel was longer (81 ms) than before a consonant (56 ms) and longest before a pause (129 ms) ([Erker 2010, *IJSL*, title not recorded](https://blogs.bu.edu/danerker/files/2020/10/Erker-2010_Subsegmental-Coda-s_IJSL.pdf)). That supports keeping *s* where a vowel follows (R1's linking exception) only weakly: five speakers, and the paper gives no rates of aspiration or deletion.
  - No page opened gives rates of *s* weakening in Santo Domingo educated speech (§14).

**The `en-es` reason for a standard pron** was that the `es-MX` voice cannot drop *s* (`en-es` §6.1). That reason now applies to the voice, so the decision is **gated on the voice**:
- **Mode `natural`** (the target): used once recorded Dominican clips (`audio/esdo/f`, `audio/esdo/m`) cover all card and example text, and the chosen voices pass the test script (§11): breath *s* before consonants, *ng* before pauses, *-ao* in *cansado*.
- **Mode `careful`** (until then, and the fallback): the generator output equals `en-es` exactly (tested on the 30 examples below). A device voice reading the course then matches the pron line.
- Switching mode is one setting in `respell.js` plus `node tools/target/dialect.js esdo`, which regenerates every card pron and every `{{ex:}}` pron. Respellings written into prose are not regenerated: the base `sounds` body quotes 10 (`KAH-sah`, `ah-DYOHS`, `ohs-pee-TAHL`…; two of them change in natural mode) and 3 card notes quote one each (`KAH-yeh`, `wah-HAH-kah`, `hos-pi-TAL`, none of which changes). The `sounds` override (§8) rewrites its body prose for the mode in use, and `dialect.js` should warn on any pron-shaped string in prose.
- Lesson `do-sounds` teaches the three rules in both modes, so the learner knows what the natural pron means even while the line is careful.

### 6.2 Rules a Dominican `respell.js` needs (exact)

The base generator `tools/target/es/respell.js` works word by word. The Dominican generator wraps it and adds phrase context:

- **R0 (pauses).** Split the text on spaces. A token that ends in `, . ; : ? ! …` is followed by a pause: the word has no "next word". Opening `¿ ¡` and quotes are dropped. (The base drops all punctuation first, which would lose pauses.)
- **"Vowel next"** means the next word starts with a vowel (*a e i o u*, accented or not), silent *h* + vowel (*hermanos, hay*), or is the word *y* ("and"). *Hie-* and *hue-* (*hielo, huevo*) start with a glide and count as consonants.
- **R1 (breath s).** In the base output, every syllable that ends in `s` (spelled *s* or *z*) ends in `h` instead, **except** a word-final `s` when a vowel is next (the *s* links: *los amigos* `lohs ah-MEE-gohh`). Syllables ending in `ks` (from *x*) are left alone.
- **R2 (final n).** A word-final `n` becomes `ng` when a pause or a vowel is next (*están aquí*, *el pan.*). Before a consonant it stays `n` (*un chin*, *en concho*). Word-internal *n* is never changed.
- **R3 (-ado).** A word ending in *-ado / -ados* whose *-a-* is **stressed** (the syllable before `doh` is in capitals) loses the `d`: `kahn-SAH-doh` → `kahn-SAH-oh`. Unstressed *-ado* (*sábado, hígado*) keeps it. Not applied to *-ada, -ido, -edo, nada, todo* (heard, but less general; recognition only).
- **Mode switch** `natural | careful`; `careful` returns the base output unchanged.
- **Not changed** from `en-es`: the vowel and consonant key, stress capitals, syllable breaks, *seseo* (*z, ce, ci* = `s`), *yeísmo* (*ll, y* = `y`), *j / ge / gi* = `h` (which already suits the soft Caribbean *j*, [tertiary] Newcastle: "/x/ → [h]"), the Mexico *x* list (harmless here).

**`pronPattern`: unchanged** from `en-es`. Every natural output above and in §9 passes it (tested): `ahh`, `ehh`, `ohh`, `eeh`, `ooh` and a final `ng` / `NG` are already legal strings in the key's letter set.

**What R1 looks like to a reader.** The vowel spellings already end in *h* (`ah eh oh`), so a breath *s* shows as a doubled *h*: `ehh-TOY`, `trehh`, `BWEH-nohh`. Lesson `do-sounds` says: "a double h means a soft breath where Mexicans say s; if you say nothing there, you still sound Dominican" [inference].

### 6.3 Thirty worked examples (generator output; all pass `pronPattern`)

| # | Spanish (card text) | en-es pron (careful) | en-esdo pron (natural) | Meaning | Rule shown |
|---|---|---|---|---|---|
| 1 | ¿Cómo tú estás? | `KOH-moh too ehs-TAHS` | `KOH-moh too ehh-TAHH` | How are you? | R1 final s before a pause; tú before the verb |
| 2 | Estoy cansado. | `ehs-TOY kahn-SAH-doh` | `ehh-TOY kahn-SAH-oh` | I'm tired. | R3 stressed -ado; R1 s before t |
| 3 | Los niños están aquí. | `lohs NEE-nyohs ehs-TAHN ah-KEE` | `lohh NEE-nyohs ehh-TAHNG ah-KEE` | The kids are here. | final s before a vowel links (niños); R2 n before a vowel |
| 4 | ¿Qué tú quieres? | `keh too KYEH-rehs` | `keh too KYEH-rehh` | What do you want? | R1; question order unchanged in the pron |
| 5 | Dame un chin. | `DAH-meh oon cheen` | `DAH-meh oon cheeng` | Give me a little. | R2 before a pause; un before a consonant keeps n |
| 6 | el colmado | `ehl kohl-MAH-doh` | `ehl kohl-MAH-oh` | the corner store | R3 |
| 7 | Buenos días. | `BWEH-nohs DEE-ahs` | `BWEH-nohh DEE-ahh` | Good morning. | R1 twice |
| 8 | Voy en concho. | `boy ehn KOHN-choh` | `boy ehn KOHN-choh` | I'm going by shared taxi. | en before a consonant keeps n |
| 9 | tres pesos | `trehs PEH-sohs` | `trehh PEH-sohh` | three pesos | R1 twice |
| 10 | el zafacón | `ehl sah-fah-KOHN` | `ehl sah-fah-KOHNG` | the trash can | R2 |
| 11 | Se fue la luz. | `seh fweh lah loos` | `seh fweh lah looh` | The power went out. | R1 on z (said s) |
| 12 | Estamos cansados. | `ehs-TAH-mohs kahn-SAH-dohs` | `ehh-TAH-mohh kahn-SAH-ohh` | We're tired. | R3 with plural; R1 |
| 13 | doscientos pesos dominicanos | `dohs-SYEHN-tohs PEH-sohs doh-mee-nee-KAH-nohs` | `dohh-SYEHN-tohh PEH-sohh doh-mee-nee-KAH-nohh` | two hundred Dominican pesos | R1 five times |
| 14 | después | `dehs-PWEHS` | `dehh-PWEHH` | after; later | R1 inside and at the end |
| 15 | un frío frío | `oon FREE-oh FREE-oh` | `oon FREE-oh FREE-oh` | a shaved-ice cone | un before a consonant keeps n |
| 16 | Yo no sé no. | `yoh noh seh noh` | `yoh noh seh noh` | I really don't know. | nothing changes: grammar, not sound |
| 17 | Están en el colmado. | `ehs-TAHN ehn ehl kohl-MAH-doh` | `ehh-TAHNG ehng ehl kohl-MAH-oh` | They're at the corner store. | R2 twice before vowels; R3 |
| 18 | Él está guapo. | `ehl ehs-TAH GWAH-poh` | `ehl ehh-TAH GWAH-poh` | He's angry. | R1; false friend |
| 19 | ¿Dónde tú vives? | `DOHN-deh too BEE-behs` | `DOHN-deh too BEE-behh` | Where do you live? | R1; v = b as in en-es |
| 20 | un momentico | `oon moh-mehn-TEE-koh` | `oon moh-mehn-TEE-koh` | just a moment | n before m keeps n |
| 21 | Dique va a llover. | `DEE-keh bah ah yoh-BEHR` | `DEE-keh bah ah yoh-BEHR` | Supposedly it's going to rain. | nothing changes |
| 22 | ¿Tú quieres un chin de café? | `too KYEH-rehs oon cheen deh kah-FEH` | `too KYEH-rehs oon cheen deh kah-FEH` | Do you want a little coffee? | quieres links to un: s kept |
| 23 | Vamos en guagua. | `BAH-mohs ehn GWAH-gwah` | `BAH-mohs ehn GWAH-gwah` | Let's go by bus. | vamos links: s kept |
| 24 | Está jevi. | `ehs-TAH HEH-bee` | `ehh-TAH HEH-bee` | It's cool. | R1; j = h, v = b |
| 25 | mis panas | `mees PAH-nahs` | `meeh PAH-nahh` | my buddies | R1 twice |
| 26 | mis hermanos y yo | `mees ehr-MAH-nohs ee yoh` | `mees ehr-MAH-nohs ee yoh` | my brothers and I | links before silent h and before y |
| 27 | el sábado | `ehl SAH-bah-doh` | `ehl SAH-bah-doh` | Saturday | unstressed -ado keeps its d |
| 28 | Se fue la luz otra vez. | `seh fweh lah loos OH-trah behs` | `seh fweh lah loos OH-trah behh` | The power went out again. | luz links to otra; vez before a pause: h |
| 29 | ¿Qué lo que? | `keh loh keh` | `keh loh keh` | What's up? | nothing changes |
| 30 | Bien, gracias, ¿y tú? | `byehn GRAH-syahs ee too` | `byehng GRAH-syahh ee too` | Fine, thanks, and you? | R0: the comma is a pause, so gracias does not link to y |

Mode `careful` reproduces the en-es column for all 30 (tested).

### 6.4 Reference generator

To become `tools/dialects/esdo/respell.js` (the path of the base generator is relative there). Tested with Node on the strings in §6.3 and §9.

```js
/* en-esdo pron: the en-es respelling (tools/target/es/respell.js) plus three Dominican rules.
   MODE 'natural' (default): educated Santo Domingo speech at conversational speed. MODE 'careful': identical to en-es. */
const ES = require('../../target/es/respell.js');
const MODE = process.env.DO_MODE || 'natural';
/* next word starts with a vowel sound: a vowel, silent h + vowel, or the word y ("and"); hie-/hue- start with a glide, so they count as consonants */
const vstart = w => !!w && (/^y$/i.test(w) || (/^h?[aeiouáéíóú]/i.test(w) && !/^h[iu][aeiouáéíóú]/i.test(w)));
function word(w, next) {
  const r = ES.respell(w);
  if (MODE === 'careful') return r;
  const lw = w.toLowerCase(), syl = r.split('-'), L = syl.length - 1;
  /* R3: stressed -ado / -ados (cansado, colmado, pescado; not sábado, hígado): the d is dropped */
  if (/ados?$/.test(lw) && L >= 1 && /^(doh|dohs)$/.test(syl[L]) && /^[A-Z]+$/.test(syl[L - 1])) syl[L] = syl[L].slice(1);
  for (let i = 0; i <= L; i++) {
    /* R1: s at the end of a syllable is a breath, written h. A word-final s before a vowel sound links to it and stays s (los amigos) */
    if (/s$/i.test(syl[i]) && !/ks$/i.test(syl[i]) && !(i === L && vstart(next))) syl[i] = syl[i].replace(/s$/, 'h').replace(/S$/, 'H');
    /* R2: word-final n before a pause or a vowel is velar, written ng (están, pan, en eso); before a consonant it stays n */
    if (i === L && /n$/i.test(syl[i]) && (!next || vstart(next))) syl[i] = syl[i].replace(/n$/, 'ng').replace(/N$/, 'NG');
  }
  return syl.join('-');
}
function respell(text) {
  /* R0: a comma, stop, question or exclamation mark is a pause: the word before it has no "next word" */
  const toks = text.replace(/[¿¡"«»()]/g, ' ').trim().split(/\s+/).filter(Boolean);
  const ws = toks.map(t => t.replace(/[?!.,;:…]+$/, '')).filter(Boolean);
  const pause = toks.filter(t => t.replace(/[?!.,;:…]+$/, '')).map(t => /[?!.,;:…]$/.test(t));
  return ws.map((w, i) => word(w, pause[i] ? null : ws[i + 1])).join(' ');
}
module.exports = { respell };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
```

**Full-course run** (*measured*, natural mode, every distinct card target and lesson example sentence in `tools/target/es/`): 1,088 strings, **433 change (39.8%)**, 0 throw, 0 fail `pronPattern`. R3 fires on 18 words in the base: *cansado, casado, cerrado, colmado, constipado, cuidado, demasiado, enojado, estado, estados, grados, lado, mercado, nublado, ocupado, pasado, pesado, trabajado*. Owner check (§13 q. 5): whether *Estados Unidos* (`ehh-TAH-ohs oo-NEE-dohh`), *demasiado* and *grados* should be exceptions.

Known limits: the mode should come from `base.json` rather than an environment variable once built; an apostrophe in a target (*pa'*) makes the base generator throw, which is one more reason targets never contain clipped forms.

### 6.5 What `do-sounds` must teach

1. Everything in `en-es` §6 still holds; Dominican speech changes the ends of syllables, not the vowels.
2. The breath *s*: `ehh-TOY`. Dropping it entirely (*lo niño*) is common; plural still shows in the article and the verb.
3. Final *n* as in *song* before a pause or a vowel: `ehh-TAHNG`.
4. *-ado* → *-ao*: `kahn-SAH-oh`. Write *cansado*.
5. Recognition: *pa'*, *'tá*, *to'*; *r* → *l* in the capital (*polque*); *r / l* → *i* in the Cibao (*poique*), labelled rural.
6. Spelling stays standard; the pron line is a guide to the sound, and the audio is the model.

## 7. Standing practice rule

Unchanged from `en-es` §7: **agreement**, same keywords, same `minOrder: 2`, `minType: 2`, same hinge definitions. Two Dominican points for writers:
- When *s* is a breath or dropped, the article and the verb carry the plural. Every Dominican lesson's `why` lines can say so: "You may not hear the s, but los and están show the plural."
- The pronoun-before-verb order never changes the verb: *¿Qué tú quieres?* is the *tú* form. That is a strand (b) hinge ("the verb ending matches the subject").

One hinge per new lesson (order / type), each with a distractor that is an agreement twin:

| Lesson | order hinge | type hinge |
|---|---|---|
| `do-sounds` | *Los niños están aquí* (x: *está*) | "We're tired" → *Estamos cansados / Nosotros estamos cansados* (x: *cansado*) |
| `do-greetings` | *¿Cómo tú estás?* (x: *está*) | "Are you guys OK?" → *¿Ustedes están bien? / ¿Están bien?* (x: *está*) |
| `do-questions` | *¿Qué tú quieres?* (x: *quiere*) | "What would you like? (to a customer)" → *¿Qué usted desea? / ¿Qué desea usted? / ¿Qué desea?* (x: *deseas*) |
| `do-food` | *Me gustan los tostones* (x: *gusta*) | "the red beans" → *las habichuelas rojas* (x: *rojos*) |
| `do-daily` | *La guagua está llena* (x: *lleno*) | "The shared taxis are full" → *Los conchos están llenos* (x: *llenas*) |
| `do-music` | *Fuimos a bailar bachata* (x: *fue*) | "Bachata is romantic" → *La bachata es romántica* (x: *romántico*) |

## 8. Lessons (final order)

**31 lessons.** Status: **as is** = inherited unchanged; **override** = inherited with the passages named; **new** = written for this course; **dropped**.

| # | id | Title | Status | What changes |
|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | |
| 1 | `sounds` | Sounds, spelling and stress | override | One section added: "the pron line in this course" (breath *h*, *ng*, *-ao*) pointing to lesson 2; 2 practice items on reading the line |
| 2 | `do-sounds` | Dominican sounds: the breath s, ng and -ao | **new** | §6.5. Deck: Dominican sounds |
| 3 | `greetings` | Greetings: tú and usted | override | Paragraph on Dominican *tú / usted*; *¿Cómo tú estás?* accepted in the 2 type items that ask "how are you" |
| 4 | `do-greetings` | ¿Qué lo que? Greetings and talk among friends | **new** | Deck: Dominican greetings and slang |
| 5 | `gender` | Gender and number of nouns | as is | |
| 6 | `articles` | el / la, un / una | override | Food: tacos, tortillas, quesadillas, taquería, agua de jamaica → mangú, tostones, habichuelas, colmado, jugo de chinola (46 Mexican food mentions *measured*) |
| | | **Stage 2: First sentences** | | |
| 7 | `ser` | Subject pronouns and ser | override | Cities (Puebla, Monterrey, Guadalajara, México → Santo Domingo, Santiago, La Romana, Nueva York); section "Drop the pronoun" rewritten (§4.1); check question 2 ("Why can you say *Soy de Chicago* without *yo*?") kept, its `why` softened |
| 8 | `adjectives` | Adjectives: agreement and position | as is | |
| 9 | `estar` | estar: where and how | override | Cities (Monterrey, México, Cancún → Santiago, Santo Domingo, Punta Cana) |
| 10 | `ser-estar` | ser vs estar | override | Cities and the name Lupita |
| 11 | `hay` | hay: there is, there are | override | One city |
| 12 | `present` | Present tense: -ar, -er, -ir | override | One city, one food; section "You can drop the subject pronoun" rewritten (§4.1) |
| 13 | `questions` | Questions and question words | override | New section "¿Qué tú quieres?" (short; pointer to lesson 14); the tip *¿Dónde usted vive? → ¿Dónde vive usted?* replaced by a tip on the full-noun case (*¿Dónde vive tu mamá?*, never *¿Dónde tu mamá vive?*); 3 type items accept the Dominican order |
| 14 | `do-questions` | ¿Qué tú quieres? Pronouns and questions, Dominican style | **new** | §4.1, §4.2, §4.5, §4.6. Deck: Dominican greetings and slang |
| 15 | `numbers` | Numbers, time and prices | override | Tacos → tostones; prices in pesos dominicanos (RD$) |
| 16 | `possessives` | Possessives and demonstratives | override | Cities |
| | | **Stage 3: Everyday life** | | |
| 17 | `irregular` | Irregular present: tener, ir, hacer | as is | |
| 18 | `stem-change` | Stem-changing verbs: quiero, puedo, pido | override | One food item |
| 19 | `gustar` | gustar: me gusta, me gustan | override | Tacos, tamales, quesadillas → tostones, habichuelas con dulce, pastelitos (4 practice items, 2 example rows: DIALECTS-PLAN §1.2 shows the real rows) |
| 20 | `do-food` | Mangú, la bandera and morir soñando: eating Dominican | **new** | Deck: Dominican food and drink |
| 21 | `reflexive` | Reflexive verbs and daily routine | as is | |
| 22 | `prepositions` | a, de, en, con, por, para | override | The *camión* note; one line "you'll hear *pa'*" |
| 23 | `muy-mucho` | muy and mucho: very cold is mucho frío | override | One city |
| 24 | `connectors` | y, o, pero, porque | override | Food and cities |
| 25 | `directions` | Directions and places in town | override | One city; *a dos cuadras* note (q. 15) |
| 26 | `do-daily` | Colmado, concho and guagua: getting things done | **new** | Deck: Colmado, concho and guagua |
| 27 | `ir-a` | ir a + infinitive: plans | override | Cities (México, Cancún → Santo Domingo, Punta Cana) |
| 28 | `lo-la` | Object pronouns: lo, la, los, las | as is | |
| 29 | `preterite` | The preterite: what you did | override | Food, taquería, cities |
| 30 | `se` | Impersonal se: se habla español | override | Tortillas, México |
| | | **Stage 4: Dominican life** | | |
| 31 | `do-music` | Merengue, bachata and a night out | **new** | Deck: Music and going out |
| — | `caribbean` | Hearing Caribbean Spanish | **dropped** | Its content is spread over `do-sounds`, `do-greetings` and `do-questions` |

*Measured* in the base: 38 practice items and 17 lesson example rows with Mexican content sit in the 20 overridden lessons; about 8 more practice items change for Dominican grammar (accepted answers in `greetings`, `questions`, and the pronoun `why` lines). The 5 "as is" lessons contain no Mexican place, food or slang.

**New lessons** (3 lines each):

1. **`do-sounds` — Dominican sounds: the breath s, ng and -ao.** Train the ear first: the breath *s* (*ehh-TOY*), final *ng*, *cansao*, and the clipped *pa'*, *'tá*, *to'*. Plural without a heard *s*: read it from *los* and *están*. Recognition only: *r* → *l* in the capital, the Cibao *i*.
2. **`do-greetings` — ¿Qué lo que? Greetings and talk among friends.** *¿Qué lo que?*, *Dime a ver*, *¿Cómo tú estás?*, *Tato*, *mi pana*, *mano / mana*, *jevi*, *nítido*, *dique*, *vaina*. Who says what to whom: slang to friends your age, *¿Cómo está usted?* to your partner's grandmother. *Coño* named once as "you'll hear it".
3. **`do-questions` — ¿Qué tú quieres? Pronouns and questions, Dominican style.** *Tú* or *usted* right before the verb in questions; pronouns kept in statements (*yo quiero, tú sabes*). Never a full noun before the verb. Recognition: *Yo no sé no*, rural *ello hay*.
4. **`do-food` — Mangú, la bandera and morir soñando: eating Dominican.** Breakfast (*mangú con los tres golpes*), lunch (*la bandera*), Sunday (*sancocho*), street food (*pica pollo, chimi, yaniqueque*), fruit (*chinola, lechosa, guineo* vs *plátano*). Ordering at a *comedor* and a *colmado*.
5. **`do-daily` — Colmado, concho and guagua: getting things done.** The colmado (credit, delivery, phone top-up), *concho*, *motoconcho*, *guagua*, *pasola*, *yipeta*; *Se fue la luz* and *el apagón*; paying in *pesos*; *ahorita* means later.
6. **`do-music` — Merengue, bachata and a night out.** *Merengue, bachata, dembow*; *el colmadón*, *una fría*, *la Zona Colonial*, *el Malecón*; inviting, accepting, saying no kindly. Respect rule: name the genres and talk about them; no dembow lyrics, no sexual or drug slang, no class labels used as insults (*wawawa*).

## 9. Decks

**34 decks**: 28 inherited, 6 new (98 cards). About **1,006 cards** (925 base − 16 Caribbean − 1 dropped interjection + 98 new).

### 9.1 Inherited decks (*measured* counts of rows the layer touches)

| Deck | Cards | Status | What changes |
|---|---|---|---|
| Sounds and spelling | 17 | 2 notes | *la llave*, *la cerveza*: "in the DR too" |
| Greetings and courtesy | 18 | as is | |
| About me | 17 | as is | (US cities stay: the learner is American) |
| People and family | 18 | 1 target, 1 note | *Mi abuela es de Oaxaca.* → *…de Santiago.*; *mis papás* note |
| Numbers, time and prices | 18 | 1 target | *¿Cuánto cuestan los tacos?* → *…los tostones?* |
| Days, dates and weather | 18 | 2 notes | *mañana* ("mañana en la mañana (Mexico)"), *Hace veinte grados* |
| Food and drink | 18 | 6 targets, 2 notes | taco → *un pica pollo*; tamales → *unos pasteles en hoja*; tortillas → *los tostones*; frijoles → *las habichuelas*; agua de jamaica → *un jugo de chinola*; quesadilla → *Para mí, un sancocho.* |
| Shopping and clothes | 18 | 1 note | *la chaqueta gris* (drop "chamarra") |
| Home and routine | 18 | 4 notes | *la cama*, *el refrigerador* (q. 16), *apartamento*, *Hay dos cuartos* (add "You'll hear: el aposento") |
| Around town and directions | 18 | 1 target, 2 notes | *la parada de autobús* → *la parada de la guagua*; *Gire…* note; *a dos cuadras* |
| Travel and transport | 17 | 4 targets, 2 notes | Cancún → Punta Cana; *Tomo el autobús.* → *Tomo la guagua.*; *la estación de tren* → *la estación del metro* ([unsourced] that Santo Domingo's metro is the right everyday reference; owner check); *¿A qué hora sale el tren?* → *¿A qué hora sale la guagua?*; *el carro*, *boleto* notes |
| Health and emergencies | 17 | 1 target | *Tengo gripa.* → *Tengo gripe.* (q. 17) |
| Work and school | 17 | 1 target | *Mi jefa es de Puebla.* → *…de La Romana.* |
| Feelings and states | 17 | as is | |
| Likes and free time | 17 | 1 target | *Me gustan los tacos.* → *…los tostones.* |
| Questions and connectors | 18 | as is | |
| Traps for English speakers | 19 | 1 target | *Actualmente vivo en Puebla.* → *…en Santo Domingo.* |
| Caribbean and Dominican Spanish | 16 | **dropped** | Cards move to the new decks |
| Compliments | 14 | 2 notes | *chistoso*, *trabajador* (Mexico notes removed) |
| Flirting | 68 | 3 notes | *chula*, *¡Qué chula te ves!* (FluentU: *chulo/chula* = cute or cool in the DR), *Me la pasé muy bien contigo.* |
| Top nouns | 112 | 8 notes | *el dinero* (DR: *los cuartos*), *la comida*, *el barrio*, *el pan*, *la mujer*, *la madre*, *la escuela*, *la música* |
| Top verbs | 106 | 2 notes | *tomar* ("never coger in Mexico" → "in the DR coger is normal: coger la guagua"), *mandar* |
| Top adjectives | 77 | 1 note | *pequeño* |
| Top adverbs | 44 | 1 note | *ahorita*: "in the DR: later, in a while; right now = ahora mismo" (false friend) |
| Top pronouns, Top conjunctions | 38, 22 | as is | |
| Top prepositions | 32 | 1 note | *contra* ("México contra Brasil") |
| Top interjections | 25 | 5 targets, 1 dropped | *¡Órale!* → *¡Tato!*; *¡Ándale!* → *¡Dale!* (q. 13); *¡Híjole!* → *¡Mi madre!*; *¡Aguas!* → *¡Diablo!*; *¡Sale!* → *¡Te la comiste!*; *¡Guácala!* dropped |
| Top words | 71 | 1 note | *¿Cómo?* (drop "Mexico: ¿Mande?") |

Totals (*measured*): **22 card targets replaced, 1 card dropped, 35 notes changed**, 851 cards inherited unchanged. Re-keyed rows: 8 DIALOG and 3 EXAMPLES keyed by replaced targets; 12 of 111 dialogues, 13 of 253 examples and 2 of 27 patterns carry Mexican content and are rewritten. Every pron is regenerated.

### 9.2 New decks (group "Dominican", five sample cards each; prons from §6.4, natural mode)

**1. Dominican sounds** (16 cards). Phrases that show the breath *s*, *ng*, *-ao*, and the heard forms; notes give the heard form in words. Lesson `do-sounds`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Estoy cansado. | `ehh-TOY kahn-SAH-oh` | I'm tired. | Said cansao; written cansado. A woman: cansada. |
| los muchachos | `lohh moo-CHAH-chohh` | the guys; the kids | You may not hear either s: los still tells you it's plural. |
| ¿Para dónde vas? | `PAH-rah DOHN-deh bahh` | Where are you going? | You'll hear: ¿Pa' dónde va'? |
| Está bien. | `ehh-TAH byehng` | It's fine. | You'll hear: 'tá bien. |
| el pan | `ehl pahng` | the bread | Final n like the ng in song. |

**2. Dominican greetings and slang** (18). Greetings, friends' talk, reactions. Lessons `do-greetings`, `do-questions`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| ¿Qué lo que? | `keh loh keh` | What's up? | Very informal, to friends your age. |
| Dime a ver. | `DEE-meh ah behr` | What's up? (tell me) | Friendly opener between people who know each other. |
| ¿Cómo tú estás? | `KOH-moh too ehh-TAHH` | How are you? | tú before the verb; ¿Cómo estás? is just as right. |
| Tato. | `TAH-toh` | All good. | From está todo (bien). |
| mi pana | `mee PAH-nah` | my buddy | Mexico: mi cuate. Plural: mis panas. |

**3. Colmado, concho and guagua** (18). Shops, transport, power cuts, money. Lesson `do-daily`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| el colmado | `ehl kohl-MAH-oh` | the corner store | Mexico: la tienda de la esquina. |
| la guagua | `lah GWAH-gwah` | the bus | Feminine. Mexico: el camión; elsewhere: el autobús. |
| el concho | `ehl KOHN-choh` | the shared taxi | A car on a fixed route, shared with strangers. |
| el motoconcho | `ehl moh-toh-KOHN-choh` | the motorcycle taxi | Elsewhere: el mototaxi. |
| el zafacón | `ehl sah-fah-KOHNG` | the trash can | Mexico: el bote de basura. |

**4. Dominican food and drink** (18). Lesson `do-food`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| el mangú | `ehl mahn-GOO` | mashed green plantains | Breakfast, often with los tres golpes (fried egg, salami, cheese). |
| la bandera | `lah bahn-DEH-rah` | rice, beans and stewed meat | The everyday lunch, named after the flag. |
| el sancocho | `ehl sahn-KOH-choh` | meat and root-vegetable stew | The Sunday and party dish; sancocho de siete carnes is the grand version. |
| un morir soñando | `oon moh-REER soh-NYAHN-doh` | a milk and orange juice drink | Literally: to die dreaming. |
| el guineo | `ehl ghee-NEH-oh` | the banana | el plátano is the plantain, which is cooked. |

**5. Music and going out** (14). Lesson `do-music`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| el merengue | `ehl meh-REHN-gheh` | merengue (music and dance) | Bailar merengue = to dance merengue. |
| la bachata | `lah bah-CHAH-tah` | bachata | Guitar music about love and heartbreak. |
| Vamos a bailar. | `BAH-mohs ah bai-LAHR` | Let's go dancing. | Also: "Shall we dance?" |
| el colmadón | `ehl kohl-mah-DOHNG` | a big colmado with music and drinks | (q. 22) |
| una fría | `OO-nah FREE-ah` | a cold beer | Short for una cerveza bien fría. |

**6. Mexico or the DR? Word traps** (14). Same word, different meaning or weight. No lesson; linked from `do-daily`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Está guapo. | `ehh-TAH GWAH-poh` | He's angry. | In the DR guapo = angry. Mexico and Spain: good-looking. |
| ahorita | `ah-oh-REE-tah` | in a while; later | Not "right now". Right now: ahora mismo. |
| la china | `lah CHEE-nah` | the (sweet) orange | Regional: south of the Cibao. Everywhere: la naranja. |
| coger la guagua | `koh-HEHR lah GWAH-gwah` | to take the bus | coger is normal in the DR and vulgar in Mexico: use tomar there. |
| el chimichurri | `ehl chee-mee-CHOO-rree` | a Dominican street burger | Not the Argentine sauce. Short: el chimi. |

All 30 sample prons pass `pronPattern` (tested). Sources for the samples: §10.

### 9.3 Localisation

- **Names:** Dominican first names for Dominican characters: Yanelis, Rafael, Wilson, Yokasta (from `en-es`), plus Yesenia, Ramón, Juan Carlos, Altagracia, Miguel, Yudelka [unsourced as "typical"; owner q. 24]. Learner characters as in `en-es` (Emma, Jack, Ryan, Megan). No celebrities, including musicians.
- **Places:** Santo Domingo (la Zona Colonial, el Malecón), Santiago (de los Caballeros), La Romana, Puerto Plata, Punta Cana, Samaná, Higüey; US: Nueva York (el Bronx, Washington Heights), Lawrence, Providence, Miami [inference from the learner group]. Mexico appears only in notes.
- **Money:** pesos dominicanos, written *pesos* in text; *RD$* only in lesson tables. No dollars except in US scenes. Prices in examples should be plausible to the owner (q. 25).
- **Food:** mangú, los tres golpes, la bandera, sancocho, tostones, pica pollo, chimi, yaniqueque, pasteles en hoja, habichuelas con dulce, morir soñando, jugo de chinola, lechosa, guineo, aguacate ([Dominican Cooking](https://www.dominicancooking.com/famous-dominican-dishes); fruit names from [Dominican Cooking, fruits](https://www.dominicancooking.com/dominican-fruits)). No tacos, tortillas, quesadillas or tamales outside notes (the build's forbidden-term list, DIALECTS-PLAN §1.2).
- **Settings:** a colmado, a concho, a guagua, a family Sunday lunch, a power cut, the Malecón at night, a colmadón, a visit to the abuela in Santiago.
- **Dates and measures:** as `en-es` (day–month). Temperature in Celsius notes is [unsourced] for the DR (q. 18).

## 10. Vocabulary: about 150 Dominican words and phrases, ranked

**Rank** = how soon a learner in the DR or in a Dominican family needs the word [inference]. **Tag:** **REPLACES** the base course's word in this course; **ADDED** (taught, card target); **RECOG** (recognition only: card with "You'll hear:", or lesson mention). **FF** = false friend with Mexican Spanish. **Src:** W = [Wikipedia mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish); N = [Newcastle](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm); L = [Lingopie](https://lingopie.com/blog/dominican-slang/); B = [BaseLang](https://baselang.com/blog/vocabulary/29-dominican-republic-slang-words-to-know-before-visiting-the-caribbean/); F = [FluentU](https://www.fluentu.com/blog/spanish/dominican-slang/); DA = [Dominican Abroad](https://www.dominicanabroad.com/dominican-slang/); DC = Dominican Cooking ([dishes](https://www.dominicancooking.com/famous-dominican-dishes), [fruits](https://www.dominicancooking.com/dominican-fruits), [chinas](https://www.dominicancooking.com/1314/dominicans-call-oranges-chinas), [morir soñando](https://dominicancooking.com/morir-sonando)); X = [expat.com forum](https://www.expat.com/en/forum/central-america/dominican-republic/1116254-the-day-ahorita-almost-ruined-my-life-dr-spanish.html); **—** = no page opened (owner check before it ships). Blog and forum sources are [practitioner opinion]; W and N are [tertiary].

| # | Dominican | Meaning | Base / neutral (what `en-es` teaches) | Tag | Src |
|---|---|---|---|---|---|
| 1 | la guagua | bus | el autobús (Mex. el camión) | REPLACES in 3 card slots; *autobús* stays in inherited lessons as the general word | W, L, DA |
| 2 | un chin | a little bit | un poco, un poquito | ADDED | W, F, L |
| 3 | ¿Qué lo que? | what's up? | ¿Qué tal? | ADDED | L, B |
| 4 | ¿Cómo tú estás? | how are you? | ¿Cómo estás? | ADDED (both accepted) | W |
| 5 | ¿Qué tú quieres? | what do you want? | ¿Qué quieres? | ADDED (both accepted) | N |
| 6 | el colmado | corner store | la tienda (de la esquina) | ADDED | W, B |
| 7 | la vaina | thing, stuff; a pain | la cosa | ADDED | W, F |
| 8 | mi pana | my buddy | mi amigo (Mex. mi cuate) | ADDED | F, B |
| 9 | Tato. / Ta' to'. | all good | Está bien. | ADDED (card: Tato.) | W, L |
| 10 | Dime a ver. | what's up? tell me | ¿Qué tal? | ADDED | F |
| 11 | las habichuelas | beans | los frijoles | REPLACES | W |
| 12 | el guineo | banana | — (base has none; Mex. plátano) | ADDED, FF with plátano | W, DC |
| 13 | el plátano | plantain (cooked) | — | ADDED, FF | DC (by contrast with guineo) |
| 14 | el mangú | mashed green plantains | — | ADDED | DC |
| 15 | la bandera | rice, beans and meat lunch | — | ADDED | DC |
| 16 | el concho | shared taxi | el taxi | ADDED | L, B, F |
| 17 | el motoconcho | motorcycle taxi | el mototaxi | ADDED | W |
| 18 | ahorita | later, in a while | ahorita (Mex. now / soon) | FF, note change | X |
| 19 | ahora mismo | right now | ahora mismo | ADDED | — |
| 20 | guapo / guapa | angry | guapo = good-looking | ADDED, FF | W, DA |
| 21 | jevi | cool | — | ADDED | L, F |
| 22 | nítido | great, cool | muy bien | ADDED | F |
| 23 | chévere | great | — | ADDED | DA ("like chevere or jevi") |
| 24 | dique | supposedly, so they say | dizque | ADDED | L, B |
| 25 | el zafacón | trash can | el bote de basura | ADDED | W, B, DA |
| 26 | la chinola | passion fruit | — (base: only in the dropped deck's note) | ADDED | W, DC |
| 27 | la lechosa | papaya | — (base: only in the dropped deck's note) | ADDED | W, DC |
| 28 | los tostones | fried green plantains | — | ADDED | DC |
| 29 | el sancocho | meat and root-vegetable stew | — | ADDED | DC |
| 30 | el pica pollo | fried chicken | el pollo frito | REPLACES (taco card slot) | DC, L |
| 31 | Se fue la luz. | the power went out | — | ADDED | — |
| 32 | el apagón | power cut | el apagón | ADDED | — |
| 33 | la yipeta | SUV | la camioneta | ADDED | W, F |
| 34 | la pasola | scooter | la motoneta | ADDED | W |
| 35 | coger (la guagua) | to take (the bus) | tomar; coger vulgar in Mex. | FF, note change | L |
| 36 | los cuartos | money | el dinero (Mex. la lana) | ADDED | W |
| 37 | jevo / jeva | boyfriend / girlfriend | el novio / la novia | ADDED | F |
| 38 | mano / mana | bro / sis | — | ADDED | B |
| 39 | tíguere | street-smart guy, hustler | — | ADDED (with care) | L, F |
| 40 | pariguayo / pariguaya | lame, socially clueless | — | ADDED | L, DA |
| 41 | ¡Mi madre! | oh my gosh | ¡Dios mío! | ADDED | L |
| 42 | ¿Tú ves? | you see? | ¿Ves? | ADDED | L |
| 43 | un morir soñando | milk and orange juice drink | — | ADDED | DC |
| 44 | la china | sweet orange | la naranja | ADDED (regional), FF | DC |
| 45 | un jugo de china | orange juice | un jugo de naranja | ADDED (regional) | DC |
| 46 | la naranja agria | sour orange | — | RECOG | DC |
| 47 | los tres golpes | fried egg, salami and cheese | — | ADDED | DC |
| 48 | el salami | Dominican salami | — | ADDED | DC |
| 49 | el queso frito | fried cheese | — | ADDED | DC |
| 50 | los pasteles en hoja | Dominican tamales | los tamales | REPLACES | DC |
| 51 | el chimi / el chimichurri | street burger | — | ADDED, FF (Argentine sauce) | DC |
| 52 | el yaniqueque | fried dough snack | — | ADDED | DC (named only) |
| 53 | las habichuelas con dulce | sweet bean dessert (Lent) | — | ADDED | DC |
| 54 | el locrio | rice cooked with meat | — | ADDED | DC (named only) |
| 55 | el moro | rice cooked with beans | — | ADDED | DC (named only) |
| 56 | el pescado frito | fried fish | — | inherited words | DC |
| 57 | el bizcocho | cake | el pastel | ADDED | DC |
| 58 | una fría | a cold beer | una cerveza | ADDED | B |
| 59 | el frío frío | shaved ice with syrup | el raspado (Mex.) | ADDED | — |
| 60 | el pote | jar, bottle | el frasco | ADDED | — |
| 61 | la guanábana | soursop | — | ADDED | W, DC |
| 62 | la batata | sweet potato | el camote (Mex.) | ADDED | W |
| 63 | la yuca | cassava | — | ADDED | W |
| 64 | la auyama | squash (pumpkin) | la calabaza | ADDED | DC |
| 65 | el maní | peanut | el cacahuate (Mex.) | ADDED | W |
| 66 | el ají | bell or chili pepper | el chile (Mex.) | RECOG | W |
| 67 | el refresco | soda | el refresco | inherited | W |
| 68 | el calimete | drinking straw | el popote (Mex.) | ADDED | W |
| 69 | la cocaleca | popcorn | las palomitas | RECOG | B |
| 70 | el conflé | breakfast cereal | el cereal | RECOG | W, F |
| 71 | el esquimalito | popsicle | la paleta (Mex.) | RECOG | F |
| 72 | el cajuil | cashew fruit | — | RECOG | DC |
| 73 | el limoncillo | Spanish lime (quenepa) | — | RECOG | DC |
| 74 | la cereza dominicana | acerola | — | RECOG | DC |
| 75 | el colmadón | big colmado with music | — | ADDED | — |
| 76 | el merengue | merengue | — | ADDED | — |
| 77 | la bachata | bachata | — | ADDED | — |
| 78 | el dembow | dembow (urban music) | — | ADDED | — |
| 79 | el perico ripiao | accordion folk merengue | — | RECOG | — |
| 80 | el coro | party, a night out with friends | la fiesta | ADDED | B |
| 81 | el corito (sano) | small, relaxed get-together | la reunión | RECOG | B |
| 82 | la chercha | fun, partying; chatter | la fiesta; la plática (Mex.) | ADDED | F, DA |
| 83 | la Zona (Colonial) | the colonial old town | — | ADDED | DA |
| 84 | el Malecón | seafront avenue | — | ADDED | — |
| 85 | dar muela | to sweet-talk, flirt | coquetear | ADDED | L, DA |
| 86 | Te la comiste. | you nailed it | ¡Muy bien! | ADDED | DA |
| 87 | ¡Diablo! | wow / damn (mild) | ¡Caramba! | ADDED | DA |
| 88 | ¡Dale! | go on, OK | ¡Ándale! (Mex.) | ADDED | — |
| 89 | Tírame por WhatsApp. | message me on WhatsApp | Escríbeme por WhatsApp. | ADDED | DA |
| 90 | Dame dato. | tell me the story | Cuéntame. | RECOG | B, F |
| 91 | Dímelo cantando. | spill it, tell me | Cuéntame. | RECOG | B |
| 92 | tranqui | chill, relaxed | tranquilo | ADDED | B |
| 93 | Yala. | OK, alright | Está bien. | RECOG | F |
| 94 | Pa' que lo sepas. | just so you know | Para que lo sepas. | RECOG | L |
| 95 | Dame banda. | leave me alone | Déjame en paz. | RECOG | DA |
| 96 | en olla | broke | sin dinero | ADDED | B, DA |
| 97 | jarto / harto | stuffed; fed up | lleno; harto | ADDED | L, F |
| 98 | la jartura | being too full | — | RECOG | F |
| 99 | ajumao / jumo | drunk; a drinking bout | borracho | RECOG | L, B |
| 100 | deguabinao | worn out | agotado | RECOG | B |
| 101 | quillao | annoyed | molesto | RECOG | DA |
| 102 | el pique | annoyance, anger | el coraje (Mex.) | RECOG | B |
| 103 | fuñir | to annoy, bug | molestar | ADDED | L |
| 104 | ¡No me fuñas! | stop bugging me | ¡No me molestes! | ADDED | L |
| 105 | bregar | to deal with; to work hard | trabajar, lidiar | ADDED | — |
| 106 | acotejarse | to settle in, get comfortable | acomodarse | RECOG | F |
| 107 | abombarse | to go bad (food, water) | echarse a perder | RECOG | F |
| 108 | barajar | to call off; drop the topic | cancelar | RECOG | DA |
| 109 | dar bola | to give a ride | dar un aventón (Mex.) | ADDED | B |
| 110 | el lío | trouble, mess | el lío | inherited | L |
| 111 | el disparate | nonsense | la tontería | ADDED | B |
| 112 | la plepla | nonsense talk | — | RECOG | DA |
| 113 | el boche | a telling-off | el regaño | ADDED | W |
| 114 | Me echaron un boche. | I got told off | Me regañaron. | ADDED | W |
| 115 | la vaguada | heavy rain, storm | la tormenta | ADDED | W |
| 116 | la ñapa | a little extra | el pilón (Mex.) | ADDED | B |
| 117 | un tro' de | loads of | un montón de | RECOG | DA |
| 118 | el motete | bundle of stuff | las cosas | RECOG | DA |
| 119 | el rebú | commotion, rowdy crowd | el alboroto | RECOG | DA |
| 120 | la piña | a fight | la pelea | RECOG | B |
| 121 | hablador / habladora | talkative; a gossip | | ADDED | B |
| 122 | lengua larga | gossip | chismoso | RECOG | F |
| 123 | bultero | show-off | presumido | RECOG | B |
| 124 | palomo | naive, gullible | ingenuo | RECOG | L |
| 125 | manganzón | lazy grown man | flojo | RECOG | DA |
| 126 | aficiao | smitten | enamorado | RECOG | DA |
| 127 | popi / wawawa | posh / from the barrio | | RECOG (class labels: never as insults) | L, DA |
| 128 | carajito / carajita | kid (rude) | el niño | RECOG (semi-derogatory) | F, B |
| 129 | el pajón | big natural curly hair | | RECOG (talk about hair with care) | L |
| 130 | el aposento | bedroom | el cuarto | RECOG | W |
| 131 | la mata | tree, plant | el árbol | ADDED | W |
| 132 | el conuco | small farm plot | | RECOG | W |
| 133 | la finca | farm | la granja | ADDED | W |
| 134 | la pulpería | old-style corner shop | la tienda | RECOG | W |
| 135 | el guachimán | security guard | el guardia | ADDED | DA |
| 136 | el poloché | polo shirt | la playera (Mex.) | ADDED | W, F |
| 137 | el tíchel / tícher | sports jersey | la camiseta | RECOG | W, F |
| 138 | la media | sock | el calcetín | ADDED | W |
| 139 | el panti | panties | | RECOG | W |
| 140 | el yilé | razor | el rastrillo (Mex.) | RECOG | W |
| 141 | el Pamper | disposable diaper | el pañal | RECOG | W |
| 142 | el Vaporú | menthol rub | | RECOG | W |
| 143 | un momentico | just a moment | un momentito | ADDED | — |
| 144 | chin chin | a tiny bit | un poquito | ADDED | W |
| 145 | chulo / chula | cute, cool | lindo (Mex. chulo, also) | note change | F |
| 146 | 'More | love (mi amor) | mi amor | RECOG | DA |
| 147 | mai / pai | mom / dad (affectionate) | mamá / papá | RECOG | F |
| 148 | la fría / el romo | beer / rum | | ADDED (romo: —) | B (fría) |
| 149 | el bicho | (avoid: meaning and weight unchecked) | el bicho = bug (Mex.) | FF? owner check, not a card | — |
| 150 | el chichí | baby (reported) | (vulgar sense elsewhere reported) | FF? owner check, not a card | — |
| 151 | ¡Coño! | strong exclamation | | named once, never a card | L |
| 152 | ello hay | there is (rural) | hay | RECOG | N |
| 153 | Yo no sé no. | I really don't know | No sé. | RECOG | N |

Counts (153 rows): 4 REPLACES (the other localised card slots are in §9.1), about 92 ADDED, about 48 RECOG, a few inherited or note-only; 8 flagged false friends (*ahorita, guapo, coger, china, plátano / guineo, chimichurri, bicho?, chichí?*). Rows with **—** in Src: 16.

**False friends with Mexican Spanish, as the traps deck states them:**
- ***ahorita***: Mexico "right now" or "in a bit"; DR "later, in a while" ([X], one forum thread: "Turns out 'ahorita' in DR isn't a time, it's a vibe"). Taught: *ahora mismo* for "right now".
- ***guapo***: DR "angry" (W; DA glosses it as mad or angry, not handsome as elsewhere in Latin America). Mexico and Spain: good-looking.
- ***coger***: neutral in the DR (L uses *Voy a coger la guagua*), vulgar in Mexico; the base says "never coger". Single source: owner check (q. 6).
- ***china***: DR (south of the Cibao) and Puerto Rico "sweet orange" (DC); Mexico: a Chinese woman, or curly (*pelo chino*) [unsourced for Mexico].
- ***plátano***: DR plantain (cooked), *guineo* banana (W, DC); Mexico *plátano* = banana.
- ***chimichurri***: DR street burger (DC); Argentina and Uruguay: herb sauce.
- ***bicho*** and ***chichí***: [unsourced]. Both are said to carry a vulgar sense in some Caribbean or Mexican usage. Not taught; owner questions 10 and 11.

## 11. Voices

**What the Dominican voice pair should sound like.** Two native speakers from Santo Domingo, one woman and one man, about 25 to 45, educated everyday speech, warm, at a relaxed conversational pace (the app plays at 0.85 by default). In connected speech they should:
1. breathe or soften syllable-final *s* before consonants (*e[h]toy*, *do[h]cientos*), while still linking a final *s* to a following vowel (*lo[s] amigos*);
2. say final *n* as *ng* before a pause (*pa[ŋ]*, *están[ŋ]*);
3. drop the *d* of stressed *-ado* in casual sentences (*cansa[o]*);
4. keep *r* as *r* (no *peldón*) and *l* as *l* (no *poique*) in careful reading;
5. use Dominican question intonation, including *¿Qué tú quieres?*;
6. not sound Mexican (strong hissed final *s*, alveolar final *n*) or Spanish (θ).

Azure lists `es-DO-RamonaNeural` and `es-DO-EmilioNeural` (third-party listing, §14). ElevenLabs: ask for, or search the voice library for, voices described as native Dominican from Santo Domingo; test on the model in `tools/audio/voices.json` and on `eleven_multilingual_v2` (DIALECTS-PLAN §2.2).

**Test script** (generate each candidate voice with `gen_elevenlabs.js --out=<scratch dir> --keys=…` or the Azure equivalent; listen at 0.85 and 1.0):

| # | Sentence | Listen for |
|---|---|---|
| 1 | Los muchachos están en el colmado. | breath *s* in *muchachos*; *s* links in *los*?; *ng* in *están* before *en*; *colmao* |
| 2 | ¿Qué tú quieres comer hoy? | natural Dominican question tune with *tú* before the verb |
| 3 | Estoy cansado, pero vamos a la playa. | *ehtoy*; *cansao*; *vamos a* linking |
| 4 | Se fue la luz otra vez en el barrio. | *luz* linking to *otra*; *vez* breathed |
| 5 | Dame un chin de café, por favor. | *chin* at normal speed; *favor* ends in *r*, not *l* |
| 6 | ¿Dónde tú vives? Yo vivo en Santo Domingo. | pronouns natural, not stressed; *Domingo* not over-careful |
| 7 | Mis panas y yo cogimos la guagua para Santiago. | *mis* breathed; *y yo* (yeísmo); *para* not clipped to *pa'* in a reading voice (either is acceptable) |
| 8 | Eso está nítido. ¡Tato! | slang said naturally, not as a foreign word |
| 9 | Son doscientos cincuenta pesos dominicanos. | five coda *s*: breathed, not hissed, not all deleted |
| 10 | Perdón, ¿usted sabe a qué hora sale la guagua? | *perdón*: *r* kept, final *ng*; polite *usted* tone |

**Scoring:** score a criterion (0–2) only on the sentences whose "Listen for" names that feature: criterion 1 (breath *s*) on 1, 3, 4, 7, 9; criterion 2 (*ng*) on 1, 5, 10; criterion 3 (*-ao*) on 1, 3; criterion 4 (*r* kept) on 5, 10; criteria 5 and 6 on all. The course switches the pron line to `natural` only for a voice pair that scores at least 1 on **criteria 1, 2, 3 and 4** in at least 80% of the sentences that test them; otherwise it stays `careful` (§6.1). The owner listens and decides (§13, q. 1).

## 12. Typing and script

As `en-es` §10 (script, accent bar `á é í ó ú ñ ü ¿ ¡`, strict items, *ñ* never folded, ¿ ¡ ignored), plus:
- **Standard spelling only.** Never accepted as a typed answer: *cansao, colmao, 'tá, ta, pa', to', lo niño* (for *los niños*), *polque, poique*. Writers do not list them; if the matcher's "almost" logic would accept *cansao* for *cansado* (one letter missing), the item is marked strict where the *d* is the point.
- **Question order:** both orders accepted wherever a *tú* or *usted* wh-question is the answer (§4.2). Writers list both (*¿Qué tú quieres?|¿Qué quieres?|¿Qué quieres tú?*).
- **Pronouns:** variants with and without the subject pronoun, as in `en-es`.
- **Slang in answers:** a typed answer may require a Dominican word only when the prompt names it ("(Dominican word)") or the item is in a Dominican lesson; the standard word is then also accepted unless the item tests the Dominican word itself.

## 13. Review plan: the owner's first 25 checks

Quick questions, in this order (the first 5 decide the build):

1. **Voice:** of the candidate voices (Azure Ramona / Emilio, ElevenLabs picks), which sound Dominican to you on the 10-sentence script (§11)?
2. **Pron line:** `ehh-TOY kahn-SAH-oh` for *Estoy cansado*: helpful, or would you rather see the careful `ehs-TOY kahn-SAH-doh`?
3. Is `ng` for a final *n* before a pause right for Santo Domingo speech (*el pan* `pahng`), and should it also show before consonants (*un chin*)?
4. *¿Qué tú quieres?*, *¿Dónde tú vives?*, *¿Cómo usted se llama?*: all natural? Is *¿Qué usted desea?* natural from a shop assistant?
5. Is anything in the "production" column of §2.1 too popular for a learner to say (e.g. *cansao* in front of your partner's parents)? Should the *-ao* rule skip *Estados Unidos*, *demasiado* or *grados* (§6.4 lists all 18 words it changes)?
6. *Coger la guagua*: normal for everyone, or do some people avoid *coger*?
7. *Ahorita* = "later / in a while" in the DR: right? What do people say for "right now": *ahora mismo*, *ya*?
8. *Tú* with a stranger your age (a cashier, a concho driver): normal, or *usted*?
9. *Mami / papi* to an adult stranger (a vendor calling you): common? Should a learner ever say it?
10. *Bicho*: does it mean "bug" in the DR, or is it vulgar there? Teach it, warn about it, or leave it out?
11. *Chichí* for "baby": common? Should the course teach it?
12. *¡Qué vaina!* = "what a pain": right? Which other *vaina* uses would you teach first?
13. *¡Dale!* for "go on / OK": common in the DR?
14. *Momentico, chiquitico*: do Dominicans use *-ico*, or *-ito*?
15. *A dos cuadras* for "two blocks away": or *a dos esquinas*?
16. *El refrigerador* or *la nevera* in the DR?
17. *Tengo gripe* (not *gripa*): right? Or *tengo catarro*?
18. Temperatures: Celsius or Fahrenheit in everyday DR talk?
19. "I ate already today": *Ya comí* or *Ya he comido*? (preterite vs perfect)
20. *Ello hay…*: still heard, or only from very old rural speakers?
21. *Jevi, nítido, chévere, bacano, apero*: which are current for people in their 20s–40s, and which sound dated?
22. *El colmadón*: right word and description?
23. *¿Qué lo que?*: fine with friends only, or also with a coworker you know well? And the usual reply?
24. Dominican first names for characters (§9.3): do they sound right? Any that would read as a stereotype?
25. Prices: what does a *morir soñando*, a *concho* ride and a *pica pollo* cost now, so example prices are plausible?

## 14. Gaps and unverified claims

**Evidence**
- **No rates for Santo Domingo.** No page opened gives how often educated Santo Domingo speakers breathe, keep or drop syllable-final *s*, velarise *n* or drop *-ado*'s *d*. The three pron rules rest on tertiary summaries (Wikipedia mirror, Newcastle) and on [inference]. Erker 2010 (5 speakers, New York) gives durations, not rates.
- **Pronoun rates** (42%) are for Dominican newcomers in New York (Shin & Otheguy 2013), not residents of the DR, and the Mainland comparison figures were in an unreadable table.
- **Question order rates** come from 1927 folk tales (Zimmermann 2019); no current rate was opened. The restriction to pronouns adjacent to the verb is from the Newcastle page.
- **Cibao vocalisation** stigma is from one dialectologist's newspaper essay (Alba 2025), not a survey.
- **Not in any page opened:** *-ico* diminutives, Dominican perfect vs preterite use, *tú* with strangers, *mami / papi* address, *bicho*, *chichí*, *bregar*, *apagón* as everyday DR vocabulary, *frío frío*, *pote*, *colmadón*, *ahora mismo*, music genre terms, *nevera*, *gripe*, *cuadras*, Celsius use. All are in §13 or marked "—" in §10.
- **Slang sources are commercial blogs** (Lingopie, BaseLang, FluentU, Dominican Abroad) and one forum thread; meanings overlap and sometimes disagree (*bobo* "problem" in Lingopie only, left out). Every slang card needs the owner's or another Dominican speaker's check.
- ***China*** "orange" is regional ("typically south of Cibao", DC) and the Wikipedia mirror lists *naranja* as the Dominican word: taught as regional, *naranja* stays the general word.
- **The University of Michigan STIRRS page** for a Dominican slang guide was opened but held only a link, so it is not used.
- The en.wikipedia.org page was not reachable; the IPFS mirror (older copy) was used.

**Voices and engine**
- Azure `es-DO` TTS voices are confirmed only by a third-party catalogue; Microsoft's page, as fetched, showed `es-DO` in speech-to-text only. Whether they breathe *s* or velarise *n* is unknown.
- No ElevenLabs voice was found labelled Dominican; the voice library was not searchable from here.
- Phones rarely have an `es-DO` voice; the device fallback will be a Mexican, US or Spain voice, which contradicts the natural pron line (hence the mode gate, §6.1).
- Engine items (LANGS `esdo`, `hLang`, target flag, progress import) are in DIALECTS-PLAN §2.1 and §2.3; none is built.

**Design not yet tested**
- The reference generator was run on the 60 strings in this profile, not on the whole course. The base course has 925 cards and 253 example rows; a full run may expose cases (numbers written as words, names, *x*) that need exceptions.
- The override counts in §8 and §9 are *measured* against a planned override list, not a built layer; real writing may touch more rows.
- Whether the matcher's "almost" treats *cansao* as close to *cansado* was not checked.

## Sources

Web pages opened and used for this profile (2026-11-23):
- [Wikipedia: Dominican Spanish (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish)
- [Mackenzie, I. *Caribbean Spanish* (Newcastle University course page)](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm)
- [Alba, O. (2025). Los cibaeños hablan con la /i/: observaciones sobre la vocalización. *Acento*](https://acento.com.do/cultura/los-cibaenos-hablan-con-la-i-observaciones-sobre-la-vocalizacion-9540218.html)
- [Zimmermann, M. (2019/2020). Reconsidering the syntax of interrogatives in Caribbean Spanish. With especial reference to Dominican Spanish. *Isogloss* 5 (abstract page)](https://revistes.uab.cat/isogloss/article/view/v5-zimmermann) and [full text (CORE PDF)](https://core.ac.uk/download/328841678.pdf)
- [Toribio, A. J. (2023). "Doing" Romance Linguistics. *Isogloss* 9(2)/11](https://ddd.uab.cat/pub/isogloss/isogloss_a2023v9n2/isogloss_a2023v9n2a11.pdf)
- [Erker, D. (2010). Paper on subsegmental coda /s/ in Dominican Spanish, *International Journal of the Sociology of Language* (exact title not recorded)](https://blogs.bu.edu/danerker/files/2020/10/Erker-2010_Subsegmental-Coda-s_IJSL.pdf)
- [Shin, N. L. & Otheguy, R. (2013). Social class and gender impacting change in bilingual settings: Spanish subject pronoun use in New York. *Language in Society* 42(4)](https://www.cambridge.org/core/journals/language-in-society/article/social-class-and-gender-impacting-change-in-bilingual-settings-spanish-subject-pronoun-use-in-new-york/28E9550A7A38C4589CBBECD6CA3414BA)
- [json2video: Spanish (Dominican Republic) voices](https://json2video.com/ai-voices/languages/spanish/dominican-republic/) and [Emilio (es-DO-EmilioNeural)](https://json2video.com/ai-voices/azure/voices/es-do-emilioneural/)
- [Microsoft Learn: Language and voice support for the Speech service](https://learn.microsoft.com/azure/ai-services/speech-service/language-support?tabs=tts) (only the speech-to-text table was readable)
- [Lingopie: 25 Dominican slang terms](https://lingopie.com/blog/dominican-slang/)
- [BaseLang: 29 Dominican Republic slang words](https://baselang.com/blog/vocabulary/29-dominican-republic-slang-words-to-know-before-visiting-the-caribbean/)
- [FluentU: 31 unique Dominican slang terms](https://www.fluentu.com/blog/spanish/dominican-slang/)
- [Dominican Abroad: Dominican slang](https://www.dominicanabroad.com/dominican-slang/)
- [Dominican Cooking: why Dominicans call oranges chinas](https://www.dominicancooking.com/1314/dominicans-call-oranges-chinas)
- [Dominican Cooking: Dominican fruits](https://www.dominicancooking.com/dominican-fruits)
- [Dominican Cooking: famous Dominican dishes](https://www.dominicancooking.com/famous-dominican-dishes)
- [Dominican Cooking: morir soñando](https://dominicancooking.com/morir-sonando)
- [expat.com forum: "The day ahorita almost ruined my life (DR Spanish)"](https://www.expat.com/en/forum/central-america/dominican-republic/1116254-the-day-ahorita-almost-ruined-my-life-dr-spanish.html)

Local project files read: `docs/MASTER-PLAN.md` (§0.5), `docs/TARGET-BRIEF.md`, `docs/profiles/en-es.md`, `docs/profiles/en-ptpt.md` (header), `docs/profiles/en-ar.md`, `en-fr.md`, `en-de.md`, `en-bn.md`, `en-pa.md` (variant sections), `docs/AUDIO-VOICES.md`, `tools/target/es/` (profile.json, respell.js, all decks, extras and lessons via `lib.js`), `tools/target/ptpt/REVIEW.md`, `tools/target/lib.js`, `gen.js`, `validate.js`, `repron.js`, `tools/audio/voices.json`, `tools/audio/gen_elevenlabs.js` (header), `src/app.html` (LANGS, `validCourse`, `stateKey`, `ck`, `pickVoice`, `hLang`, audio folder logic; read only).

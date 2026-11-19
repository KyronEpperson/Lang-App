# en-ceb cold review (EN-CEB-REVIEWER, 2026-11-19)

Read in full: docs/TARGET-REVIEW.md, docs/TARGET-BRIEF.md, docs/PRACTICE-SPEC.md, the last section of docs/PHASE2-BRIEF.md, docs/profiles/en-ceb.md, profile.json, respell.js, the brief's MEASURED FACTS / ENGINE FACTS / PRON / WRITERS' OPEN POINTS, and every line of decks-a, decks-b, extra-a, extra-b, lessons-1, lessons-2, lessons-3. STRESS-AUDIT.md read in its summary, conflict and source sections; its per-group tables scanned.

## Batch 0: stress sources (tool)

Live lookups (WebSearch + WebFetch; direct curl to kaikki.org is refused by the proxy, Wolff's Gutenberg text files are refused by the allowlist, as in the earlier audit):
- **anak**: kaikki "anak sa gawas" (phrase entry): /ʔaˌnak sa ɡaˈwas/, canonical form "anák sa gawás" → `anák` (final stress). gawás agrees with the existing LEX entry.
- **isda**: kaikki "bulad isda" (phrase entry): /buˌlad ˈʔisdaʔ/, canonical "bulád isdà" → `isdà` (next-to-last stress, final catch).
- **saging**: kaikki "All languages combined: saging", Cebuano entry: /ˈsaɡiŋ/, canonical "ságing" → `ságing`.
- **tuo** (right): neonvagabond Wiktionary mirror (2024-05) gives both /tuˈʔo/ and /ˈtuʔo/ for the noun "right (direction)" → conflict, stays out of LEX.
- **kaila**: kaikki entry has no IPA and no marked headword → stays out.
- gusto: the kaikki All-languages page has no Cebuano entry. kape: no page found.

About twenty calls produced three words, so the lookup stopped there.

Tool changes (respell.js): LEX gains `anák isdà ságing` (new block with its source note). HOMO gains *usa*: the aid still shows usá "one", and now warns that the particle usa "first, for a moment" (*Lingkod usa*) is unchecked. No pron changes from the HOMO entry. `repron.js ceb` rewrote 18 prons; every one contains anak, isda or saging. STRESS-AUDIT.md now has the evidence rows, the counts (160 / 204, LEX 175) and conflict entries for tuo and kaila. The profile (docs/profiles/en-ceb.md §6.4, "172 forms") is outside this folder and was not edited; the lead should update it.

## Batch 1: decks-a.js (wording 1)
- *Lingkod usa.* note: "pron line" → "pronunciation line" (learner-facing text).
- Checked and kept: *Pasensya na* (an everyday Cebuano word, spelled the Cebuano way; KWF may write *pasensiya*); *Unsa inyong naa?* (a profile "as a phrase" item, listed for the native check); *Hugasan nako ang plato* (the Home deck also serves lesson `an`, and the card note says to learn it whole; kept); *Akong libro kini* (kept; the profile says to accept *Kini akong libro* only after a native confirms it); *Duha akong anak* and *ala una* (note "not alas una"): listed for the native check.

## Batch 2: extra-a.js (wrong language 1)
- Dialogue *Pasensya na*: reply *Wala ra na.* (unsure it is natural as "no worries") → *Sige lang.* ("It's okay"), an existing card.

## Batch 3: decks-b.js (consistency 1, wording 2)
- Short forms: *Naay tawo?* ("Anybody home?") nearly repeated the Home deck's *Naa bay tawo?* ("Is anyone home?"). Replaced with *Naay saging?* "Any bananas?", the same naa + y pattern at a stall (pron from the tool: `nah-ai SAH-gheeng`).
- *Liko sa tuo.* / *Liko sa wala.* notes: dropped "(native check pending)" and "pron line" from learner text. The notes no longer claim that "the stress differs", only that the left-hand *wala* is a different word and may be said differently.
- Near-duplicates kept on purpose: *Sige.* (OK / go ahead / bye) and *Sige lang.* (It's okay / never mind) have different meanings; so do *unya* (later today) and *Unya na lang.* (Later, then).

## Batch 4: extra-b.js (consistency 1)
- The dialogue for the renamed card now reads *Naay saging, Nang? / Wala na.*
- Checked: *Gusto ka og kape?* (dialogue for *Dili, salamat.*). The course models *ka* with *gusto* + og. *Gusto mo og kape?* is also heard and is never marked wrong anywhere. Listed for the native check.
- Checked: *Niadto ka sa simbahan gahapon? / Wala ko moadto.* Standard: past form in the question, mo- after wala.

## Batch 5: lessons-1.js (practice 6)
- Decision on *kaayo* before the word: the course teaches only *X kaayo*. Options with *kaayo* in front (*kaayo maayo*, *kaayong maayo*, *maayong kaayo*, *kaayo lami*, *laming kaayo*, *lami nga kaayo*) were flagged by the writers as possibly acceptable in some speech, so they are no longer used as wrong answers. Instead the wrong options are wrong by meaning (*maayo lang / ba / diay*, *lami lang / ba / sab*). Applied to the `nga` check 3 and the `nga` mc "very tasty".
- `nga` mc "The coffee is hot": distractor *Kape init.* (possibly acceptable as a clipped utterance) → *Init si kape.* (si before a non-name: clearly wrong).
- Policy on dropping *ang* before an akong-set owner: the cards model it (*Masakit akong ulo*, *Duha akong anak*, *Tagpila imong saging*), so typed answers now accept it too. Added *Bag-o akong balay* (`nga`) and *Unsa imong ngalan* (`intro`).
- `greetings` ty "Good afternoon, ma'am": now also accepts the title first (*Nang, maayong hapon.*), as the item above it already did.
- Settled open points: *Maayo sab ko* / *Maayo ko sab* and *Amerikano ka ba* / *Amerikano ba ka* are both accepted, and no explanation calls either order wrong. *Kini ang akong kape* and *Akong kape kini* are both accepted. *Kini akong kape* (no ang) is not accepted, because the profile reserves it for the native check.

## Batch 6: lessons-2.js (practice 2, wording 1)
- `feelings` mc "It's really hot": distractor *Kaayo init.* → *Init lang.* (the kaayo decision above). Check 2 now asks where kaayo "usually" goes.
- `time` mc "one o'clock": distractor *alas uno* (flagged as possibly heard) → *alas dos* (wrong by value).
- Settled open points: no item anywhere uses *ni-* after *wala* as a distractor. The `negation` body teaches *Wala ko moadto* and says the *ni-* form is heard in quick speech. *matag buntag* (every morning) is standard and kept.

## Batch 7: lessons-3.js (wrong teaching 2, practice 5)
- `requests` body said a command is "just the root", while the deck (*Palihug tabangi ko*) and lesson `an` (-i) teach an ending. Added one sentence: some verbs that act on a person or thing take an ending instead (*Palihug tabangi ko*). Body is now 293 words.
- `directions`: the mc that scored "spelled the same but said differently" as correct (an unconfirmed claim) → a meaning item, "In *Liko sa wala*, wala means… left". The body now says the two wala are different words that dictionaries mark differently (Wiktionary lists *walâ* and *walà*), so they "may not sound alike". It no longer flatly states how Cebuanos say them.
- `requests` ty "May I ask something?": fallback tile *nako* (the same doubt as *nako* after *gusto*) → *akong*.
- Dropping *ang* before an owner, now accepted (same policy as batch 5): *Mas dako akong balay*, *Mas lami imong mangga* (`compare`); *Lami kaayo akong sabaw*, *Lami gyud akong sabaw* (`food`); *Didto akong balay*, *Naa didto akong balay* (`places`).
- Settled open points: *nako* after *gusto* / *kinahanglan* is accepted in every typed item (`gusto`, `food`) and used in no wrong option. *ayaw* + verb (*Ayaw kabalaka*) is fine. Requests teach *lang*, *sa* and *unta*; *ba* appears only in *Pwede ba?*. *kaysa sa* + noun is the standard form and is taught that way. *Nakakaon na ka* / *Nakakaon ka na* are both accepted (`maka`). Order items accept a single sequence; *Busog na ko* and *Naa ba moy isda* each combine two short words and are listed for the native check.

## Batch 8: consistency across files (wording 7, practice 1)
- The same phrase is now glossed the same way on its card and in its lesson row: *Nagtuon ko og Bisaya* "I'm studying Cebuano" (decks-a and its extra-a example); *Masakit akong ulo* "My head hurts" (decks-b); *Unsay imong gusto?* "What would you like?" (decks-b and extra-b); *Asa ni moagi?* "What route does this take?" and *Lugar lang* "I'm getting off here" (lessons-3 rows).
- `time` ty "I'll go home later today": the prompt now says "(use uli)". Without it, *Mopauli…* from the Home deck would be a natural answer that is not accepted.
- Verdicts on the remaining open points: *Maestra ni Ana* is a different meaning ("Ana's teacher"), so it stays as a wrong option. *Asa nagtrabaho ka?* and *Dili moadto ko ugma* stay as the profile's own error type and go on the native list. *nakaila* is matched to *ila* but prints lowercase either way, so it has no pron effect. *sais* and *litson* go on the native list.

## Final state
`node tools/target/repron.js ceb` → 560 prons read, 0 rewritten. `node tools/target/gen.js ceb` wrote /tmp/course-en-ceb.hold.js (28 lessons, 18 decks, 319 cards). `node tools/target/validate.js ceb` → PASS: all checks OK. `node --check` passes on every JS file. HOLD is kept; packs/ and src/ are untouched.

## Ten things a native speaker should check first
1. *Unsa inyong naa?* (What do you have?, carinderia): natural, or *Unsay naa ninyo?*
2. Short-word order: *Busog na ko* / *Nikaon na ko* / *Nakaadto na ka* against *ko na* / *ka na*. Order items accept one sequence only.
3. *Gusto ka og kape?* against *Gusto mo og kape?*, and *Gusto nako* / *Kinahanglan nako* (both accepted).
4. *wala* "left" against *wala* "none": how each is said. The aid shows walâ for both.
5. *usa* in *Lingkod usa* ("first, for a moment"): same stress as *usá* "one"?
6. *Palihug ko og tubig* as an everyday request, and *Nang, pangutana lang* against *mangutana lang ko*.
7. Dropping *ang* before an owner (*Masakit akong ulo*, *Bag-o akong balay*, *Unsa imong ngalan*), now accepted in typed answers. And *Kini akong libro* (still not accepted).
8. *kaayo* before a describing word (*kaayo maayo*): wrong, or regional? It is no longer a wrong mc option. The `feelings` check still says kaayo "usually" goes after, and the order items accept only *X kaayo*.
9. *ala una* (and the note "not alas una"), *sais* (sah-ees?), *litson* (lee-chohn or leet-sohn?).
Also on the list: *Naay saging? / Wala na.* (new card and dialogue written by this review), and the distractors *Asa nagtrabaho ka?* and *Dili moadto ko ugma* (kept as the profile's §4.2 error type, short pronoun not in second place; confirm they are really wrong).
10. *Nalipay ko nga nakaila nimo*, *Duha akong anak*, *Pila mo kabuok?*, *Asa ni moagi?*, *Lugar lang*: the profile's "as a phrase" items.

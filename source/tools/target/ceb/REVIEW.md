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

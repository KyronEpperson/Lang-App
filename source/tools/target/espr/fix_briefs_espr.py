"""Lead-only. Rewrites the role parts of the briefs tools/target/mk_briefs.py writes for en-espr, which assume five writers writing a
course from scratch. en-espr is a byte copy of en-es (docs/briefs/pr-decisions.md §3): writers add four Puerto Rico lessons and decks
and localise inherited rows in place.
usage (from /home/claude): python3 tools/target/mk_briefs.py espr "Spanish (Puerto Rico)" && python3 tools/target/espr/fix_briefs_espr.py"""
import os, re
R = os.environ.get('LANGAPP_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..'))
B = os.path.join(R, 'docs', 'briefs')
S = '/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p3'

RULES = f"""
ESPR RULES (all roles)
1. BASE. `tools/target/espr/` is a byte copy of `tools/target/es/` (the live course for English speakers learning Latin American Spanish). Inherited rows stay byte-identical unless `docs/profiles/en-espr.md` §8/§9 or `node tools/target/espr/scan.js` names them. `diff tools/target/es/<file> tools/target/espr/<file>` must show only your intended changes. Smallest correct change: do not polish, reword or "improve" inherited rows the profile does not name; list anything wrong you notice in en-es in your report instead (it is wrong in the live course too).
2. NEVER STRING-SUBSTITUTE. *las tortillas → los tostones*, *el autobús → la guagua* change gender or number: re-check every article, adjective, tile, distractor, accepted answer and `why` around a replaced noun by hand. A replaced practice item keeps its type, position, grammar point and difficulty; the standing-rule hits per set (validate.js `[order/type]` line) must not drop below 2/2.
3. WORDS. Use Puerto Rican words only from profile §10 (with the note the profile gives). An [unsourced] word appears only where §8/§9 allow it and with its hedge. Do not present any other regionalism as Puerto Rican. If you want one that is not listed and you can search the web, add it only with a source URL in your report; otherwise leave it out. Nothing vulgar. No Mexican or Dominican setting outside notes that compare varieties (profile §9.3 FORBID list; scan.js).
4. SPELLING AND PRON. Standard spelling in every target, example, answer and tile (*cansado*, never *cansao*; *para*, never *pa'*). Heard forms appear only in prose and "You'll hear:" notes (profile §6.2). Every `pron` comes from `node tools/target/espr/respell.js "<text>"`, unchanged.
5. TYPED ANSWERS. List every natural answer: with and without the subject pronoun; *¿Qué tú quieres?* next to *¿Qué quieres?* wherever a *tú* question is asked (profile §4.2); *usted* forms where the prompt does not say who is addressed and the base accepts them. Cue the English prompt ("(to a friend)", "(use guagua)") when only some answers fit.
6. POLITICS. Never call Puerto Rico a country, state, colony or territory. *la isla*, *Puerto Rico*, *los Estados Unidos* for the mainland.
7. DO NOT TOUCH `profile.json`, `HOLD`, `BASE.sha1`, `respell.js`, `scan.js`, other writers' files, `tools/target/es/`, packs/, src/. Do not run build.sh; do not commit.
8. CHECK (S = `{S}/espr-<your role>`; create it): `node tools/target/gen.js espr $S/c.js && node tools/target/validate.js espr $S/c.js --partial` (fix every line about your files; a "card … is in two decks" warning about your card is an error for you), `node tools/target/espr/scan.js` (0 FORBID lines in your files when you finish; read the "check" lines for your files), `node --check` on each file you edited. If gen fails on another writer's half-written file, wait a minute and retry.
9. REPORT (concise): counts (rows changed / added per file), validator and scan lines about your files (or "none"), every place you departed from the profile and why, and the Spanish strings a Puerto Rican speaker should check first.
"""

ROLE = {
 'A': ("decks-pr.js and extra-pr.js", "the four new Puerto Rico decks",
       """YOU OWN two NEW files: `tools/target/espr/decks-pr.js` and `tools/target/espr/extra-pr.js` (same shapes as `tools/target/es/decks-a.js` / `extra-a.js`; file header comment `/* en-espr Puerto Rico decks (writer EN-ESPR-A) … */`). Create them; touch no other file.

JOB: the four decks of profile §9.2, in this order: «Puerto Rican sounds», «Boricua greetings and slang», «Everyday Puerto Rico», «Food, music and places» (names exactly as in profile.json). 16–18 cards each, including the profile's sample rows. The «Puerto Rican sounds» deck is recognition: the target is in standard spelling, the note starts "You'll hear:" and gives the heard form (profile §6.3). Vocabulary from profile §10. Single-word cards carry their article (*la guagua*, *los mahones*). Not yours: *¡Wepa!*, *¡Ay bendito!*, *¡Acho!*, *¡Dale!* (writer B puts them in «Top interjections»). Before you finish, check that none of your targets is already a card in another deck (`node -e "const L=require('./tools/target/lib.js');const {DECKS}=L.load('espr');const m={};for(const[d,c]of Object.entries(DECKS))c.forEach(x=>(m[x[0]]=m[x[0]]||[]).push(d));for(const[k,v]of Object.entries(m))if(v.length>1)console.log(k,v)"`) and that no two cards in one deck share a meaning.
EXTRA (extra-pr.js): at least 3 dialogues and 2 examples per deck, keyed by your card targets exactly, and 4 patterns. Dialogues may use the pronoun-first question (*¿Qué tú quieres?*) and Puerto Rican names and places (profile §9.3). Size: about 68 cards, 12+ dialogues, 8+ examples, 4 patterns."""),
 'B': ("the inherited deck and extra files", "localising the 28 inherited decks",
       """YOU OWN the inherited deck and extra files: `tools/target/espr/decks-a.js`, `decks-b.js`, `decks-c.js`, `decks-f.js`, `decks-t1.js`, `decks-t2.js`, `extra-a.js`, `extra-b.js`, `extra-c.js`, `extra-f.js`, `extra-t1.js`, `extra-t2.js`. They are copies of en-es: edit in place.

JOB: apply the deck-by-deck map of profile §9.1 and every row `node tools/target/espr/scan.js --all` lists in your files: about 73 cards (many need only a note change), 14 dialogues, 19 examples and 2 patterns at stage 1. For each row: island word as target where §2.2 rule 1 applies (*la guagua*, *la china*, *las habichuelas*); Puerto Rican place, food or price in sentences (dollars, not pesos, in model sentences; profile §9.3); notes that only made sense in Mexico removed or rewritten ("Elsewhere: …", "Mexico: …" is fine when it helps). «Top interjections»: replace *¡Órale!, ¡Ándale!, ¡Híjole!, ¡Aguas!, ¡Sale!, ¡Guácala!* with *¡Wepa!, ¡Ay bendito!, ¡Acho!, ¡Dale!* (note: owner check pending, profile §13 q4), *¡Cuidado!*, *¡Qué asco!*, unless one of those is already a card elsewhere (then pick another general interjection). A card whose target changes is RE-KEYED: replace its DIALOG and EXAMPLES rows (same file pair) so every key is a current card target. Update the file header comments from "en-es" to "en-espr (copied from en-es; Puerto Rico rows localised by EN-ESPR-B)". Do not add or remove cards except as replacements (deck sizes stay); the new Puerto Rico decks are writer A's."""),
 '1': ("lessons-pr.js", "the four new Puerto Rico lessons",
       """YOU OWN one NEW file: `tools/target/espr/lessons-pr.js` (`module.exports = [ … ]`, same shape as `tools/target/es/lessons-1.js`). Create it; touch no other file.

JOB: the four new lessons of profile §8, ids and titles exactly as in profile.json: `pr-sounds` (deck «Puerto Rican sounds»; profile §6.3: all recognition, standard spelling in every answer), `pr-greetings` («Boricua greetings and slang»), `pr-daily` («Everyday Puerto Rico»; includes English loanwords and code-switching, profile §4.6, taught respectfully with the general word alongside), `pr-culture` («Food, music and places»; holidays, music, places, the diaspora; keep dish descriptions factual and short). Each: 250–450 words, at least 6 `{{ex:}}` rows, a closing tip with a wrong → right pair, 3 checks, 14 practice items (5 mc, 3 or, 3 fi, 3 ty). The standing rule (agreement) must hold in every set: profile §7 lists the hooks (article and number of island nouns, adjective agreement, the *tú* ending). Cards for these words are being written at the same time by writer A in decks-pr.js; you do not need them, but use only words from profile §10 and earlier lessons. In `pr-sounds` the heard form may appear in a prompt ("You hear 'loh ah-MEE-goh'. Write it.") but never in an answer or a tile. Size: 4 lessons, 56 practice items, 12 checks."""),
 '2': ("lessons-1.js and lessons-2.js", "Puerto Rico overrides in lessons 1–18",
       """YOU OWN `tools/target/espr/lessons-1.js` and `tools/target/espr/lessons-2.js` (copies of en-es; edit in place).

JOB: the "I+ (2)" rows of profile §8: `sounds`, `greetings`, `gender`, `articles`, `ser`, `estar`, `ser-estar`, `hay`, `present`, `questions`, `numbers`, `possessives`, `irregular`, `stem-change`, `gustar`, `prepositions` (and `adjectives`, `reflexive` only if scan.js lists a row). Two are content changes, not just setting: `ser` and `present` replace the "drop the pronoun / sounds heavy" advice with "keep it or drop it; Puerto Ricans often keep it" (§4.1; no comparison with Mexico, no percentage); `questions` gets a short section "In Puerto Rico: ¿Qué tú quieres?" (recognition, §4.2), a new closing tip in place of «¿Dónde usted vive? → ¿Dónde vive usted?», and pronoun-first answers added wherever a `ty` item asks a *tú* question. `numbers`: prices in dollars and a box on *pesos* (dollars) and *chavos* (§10). `articles` is the largest job (tacos, tortillas, quesadillas, tamales → Puerto Rican food: re-do every article and agreement by hand). Size: about 60 body passages and about 25 practice and check items at stage 1 (scan.js)."""),
 '3': ("lessons-3.js", "Puerto Rico overrides in lessons 21–28",
       """YOU OWN `tools/target/espr/lessons-3.js` (a copy of en-es minus the dropped `caribbean` lesson; edit in place).

JOB: the "I+ (3)" rows of profile §8: `muy-mucho`, `connectors`, `directions`, `ir-a`, `preterite`, `se` (and `lo-la` only if scan.js lists a row). Mexican food, places and trips become Puerto Rican (profile §9.3); *el autobús* becomes *la guagua* where the island bus is meant (gender!); in `se` the last item (*¿Dónde se compran tortillas?*) gets an island food that keeps the plural agreement point. Size: about 25 body passages and about 15 practice and check items at stage 1 (scan.js). If you finish early, read the whole of your six lessons once more for anything Mexican that scan.js cannot see (a name, a habit, a time of day, a meal name)."""),
}

for r, (files, scope, body) in ROLE.items():
    p = os.path.join(B, 'en-espr-%s.md' % r); s = open(p, encoding='utf8').read()
    s = s.replace('one of five writers of the Lang App course', 'one of five writers working on the Lang App course')
    s = re.sub(r"— as a finished model of the SHAPE and level only, not to translate — the matching file of the Spanish pilot in `/home/claude/tools/target/es/` \([^)]*\)\.",
               "`/home/claude/docs/briefs/pr-decisions.md` §3 (why this course is a copy of en-es). The base course `/home/claude/tools/target/es/` is the model of shape and level.", s)
    i = s.index('YOU OWN:'); j = s.index('PRON:')
    s = s[:i] + body + '\n\n' + s[j:]
    k = s.index('\nDECKS:') if '\nDECKS:' in s else s.index('\nLESSONS:')
    s = s[:k] + '\n' + RULES + '\nThen check and report as ESPR RULES 8–9 and TARGET-BRIEF say.\n'
    assert 'Create the file(s); touch no other file.\n\nPRON' not in s
    open(p, 'w', encoding='utf8').write(s)

p = os.path.join(B, 'en-espr-R.md'); s = open(p, encoding='utf8').read()
s += f"""
SCOPE FOR THIS COURSE (it is a copy of en-es, docs/briefs/pr-decisions.md §3; read `docs/profiles/en-espr.md` in full):
- READ IN FULL: the new files `decks-pr.js`, `extra-pr.js`, `lessons-pr.js`; every row that differs from en-es (`for f in decks-a decks-b decks-c decks-f decks-t1 decks-t2 extra-a extra-b extra-c extra-f extra-t1 extra-t2 lessons-1 lessons-2 lessons-3; do diff tools/target/es/$f.js tools/target/espr/$f.js; done`); and the whole of every inherited lesson that has a diff.
- The untouched rest was reviewed as en-es (tools/target/es/REVIEW.md): scan it only for Mexican or Dominican setting (`node tools/target/espr/scan.js --all`: 0 FORBID outside comparing notes) and for advice that contradicts this profile (pronoun dropping, question order).
- Puerto Rican claims: every island word must be in profile §10 or carry a source you opened; an unsourced word presented as Puerto Rican is a WRONG-LANGUAGE finding. Standard spelling only in targets, answers and tiles. Politics neutral (ESPR RULES 6 in the writer briefs).
- Gender and agreement around every replaced noun (the copy's main risk), and the standing-rule line per set.
- Append to `tools/target/espr/REVIEW.md` (new file). Also run `node tools/target/espr/scan.js`; it must exit 0.
"""
open(p, 'w', encoding='utf8').write(s)
print('en-espr briefs fixed: A B 1 2 3 R')

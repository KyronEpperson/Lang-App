# Flirty compliments deck — a second extra deck for every live course

Kii's follow-up: "let's also add flirtatious compliments." This is a SEPARATE deck from `Compliments`, named exactly `Flirty compliments`.
Everything in `docs/briefs/compliments.md` still applies (what to read, formats, pron rules, no duplicate card text or dialog keys anywhere in the course — now including your own decks-c.js / extra-c.js — the load check, the report, the REVIEW.md section). Differences:

## You own, per course
- `tools/target/<t>/decks-d.js` — `module.exports = { "Flirty compliments": \`…\` };`
- `tools/target/<t>/extra-d.js` — DIALOG / EXAMPLES / PATTERNS, same formats.
- lexicon additions, where the course uses a lexicon: `tools/target/<t>/lexicon-add-D.txt`.

## The deck: 14 cards (12–16)
For adults who are dating or would like to. Warm, light and respectful: charming, never crude. Nothing sexual, no comments on body parts, no pick-up lines that only work as jokes in English.
- looks, said kindly (3): "You look beautiful/handsome tonight", "You have a lovely smile", "That colour suits you"
- the person (3): "I love talking with you", "You make me laugh", "You're really charming"
- interest (3): "I'd like to see you again", "Can I buy you a coffee?", "I was hoping you'd be here"
- sweet and a little bold (2): "I can't stop thinking about you", "You're my type" — the natural local equivalent, not a literal translation
- replies (3): accepting warmly ("You're sweet", "You too"), a playful deflection ("You say that to everyone"), and a kind, clear no ("Thank you, but I'm not interested" / "I have a partner"). The learner must be able to say no and to recognise one.
Rules:
- Use what people in that culture really say when flirting politely; where open flirting is unusual or indirect in that culture, write the indirect forms people actually use and say so in the note.
- Notes carry: who says it to whom, gender forms (show the other form), how forward it sounds (mild / warm / bold), and any setting where it would be rude.
- Register: the friendly-informal form two adults who are getting to know each other would use, as the course's profile allows; say in the note when a card switches from the course's usual polite form.
- extra-d.js: DIALOG for at least 8 cards (include at least one exchange ending in a gracious "no" and one in a "yes"), EXAMPLES for at least 3 others, PATTERNS optional.

## Check (per course)
```
node -e "const t='<t>';const L=require('./tools/target/lib.js');const C=L.load(t);console.log(t,C.DECKS['Compliments'].length,C.DECKS['Flirty compliments'].length,Object.keys(C.DIALOG).length);"
```

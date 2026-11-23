/* Practice sets for the kn-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Kannada; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "ಯಾವ ಅಕ್ಷರದ ಹೆಸರು see (ನೋಡು) ಪದದ ಹಾಗೆಯೇ ಕೇಳಿಸುತ್ತದೆ?", o: ["C", "S", "Z", "K"], why: "C ಹೆಸರು ಸೀ; see ಪದದ ಉಚ್ಚಾರಣೆಯೂ ಅದೇ. S ಹೆಸರು ಎಸ್, Z ಹೆಸರು zee, K ಹೆಸರು ಕೇ." },
    { t: "mc", q: "Q ನಂತರ ಬರುವ ಅಕ್ಷರ ಯಾವುದು?", o: ["R", "P", "S", "O"], why: "ಕ್ರಮ ಹೀಗಿದೆ: …O, P, Q, R, S… ಹಾಗಾಗಿ Q ನಂತರ R." },
    { t: "mc", q: "ಯಾವುದು ಸರಿ?", o: ["an M", "a M", "an B", "an U"], why: "M ಹೆಸರು (ಎಮ್) ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an. B (ಬೀ) ಜೊತೆ a B. U (ಯೂ) \"ಯ\" ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ a U." },
    { t: "mc", q: "ಇವುಗಳಲ್ಲಿ ಸ್ವರಾಕ್ಷರ ಯಾವುದು?", o: ["U", "R", "S", "W"], why: "ಇಂಗ್ಲಿಷ್‌ನ ಸ್ವರಾಕ್ಷರಗಳು ಐದು: A, E, I, O, U. R, S, W ವ್ಯಂಜನಗಳು." },
    { t: "mc", q: "W ಅಕ್ಷರದ ಇಂಗ್ಲಿಷ್ ಹೆಸರು ಏನು?", o: ["double u", "double v", "u u", "v v"], why: "ನೋಡಲು ಎರಡು V ಸೇರಿದ ಹಾಗಿದ್ದರೂ ಹೆಸರು double u, ಅಂದರೆ \"ಎರಡು U\"." },

    { t: "order", p: "ಅದರ ಸ್ಪೆಲ್ಲಿಂಗ್ ಏನು?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell ಕ್ರಿಯಾಪದ ಬಳಸಿ ಪ್ರಶ್ನೆ ಕೇಳುವಾಗ ಮೊದಲಿಗೆ do ಬರುತ್ತದೆ. ಕರ್ತೃ you, ಹಾಗಾಗಿ does ಅಲ್ಲ; spell V1 ರೂಪದಲ್ಲೇ ಇರುತ್ತದೆ." },
    { t: "order", p: "ನನ್ನ ಹೆಸರು S ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುತ್ತದೆ", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S ಹೆಸರು (ಎಸ್) ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an. ಕರ್ತೃ my name ಒಂದೇ, ಹಾಗಾಗಿ starts." },
    { t: "order", p: "hello ಪದದಲ್ಲಿ ಎರಡು L ಇವೆ", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "L ಎರಡು ಇವೆ, ಹಾಗಾಗಿ ಬಹುವಚನ Ls; ಬಹುವಚನದ ಜೊತೆ is ಅಲ್ಲ, are." },

    { t: "fill", q: "How do you __ your name?", p: "ನಿಮ್ಮ ಹೆಸರಿನ ಸ್ಪೆಲ್ಲಿಂಗ್ ಏನು?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "do ನಂತರ V1 ಬರುತ್ತದೆ: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "ಅದು B ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುತ್ತದೆ", a: ["with"], o: ["by", "for", "in"], why: "\"ಇಂಥ ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವುದು\" = start with." },
    { t: "fill", q: "That's M __ in Mary.", p: "ಅದು Mary ಪದದಲ್ಲಿರುವ M", a: ["as"], o: ["so", "than", "of"], why: "ಅಕ್ಷರವನ್ನು ಒಂದು ಪದದ ಮೂಲಕ ಖಚಿತಪಡಿಸುವಾಗ as in ಬಳಸುತ್ತಾರೆ: M as in Mary." },

    { t: "type", p: "(ಆರ್ಟಿಕಲ್ ಸೇರಿಸಿ) ಅದು A ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುತ್ತದೆ", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A ಹೆಸರು ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ", x: ["the", "start"], why: "A ಹೆಸರು (ಏ) ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an. ಕರ್ತೃ it ಜೊತೆ starts." },
    { t: "type", p: "(you ಮತ್ತು spell ಬಳಸಿ) ನಿಮ್ಮ ಹೆಸರಿನ ಸ್ಪೆಲ್ಲಿಂಗ್ ಏನು?", a: ["How do you spell your name"], hint: "spell · your name — do ಬಳಸಿ ಕೇಳಿ", x: ["spelling", "does"], why: "spell ಕ್ರಿಯಾಪದ ಬಳಸಿ ಪ್ರಶ್ನೆ ಕೇಳುವಾಗ do ಬೇಕು. ಕರ್ತೃ you ಜೊತೆ does ಬರುವುದಿಲ್ಲ." },
    { t: "type", p: "(It ಪದದಿಂದ ಶುರು ಮಾಡಿ) ಅದರಲ್ಲಿ ಎರಡು T ಇವೆ", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — ಎರಡು ಇದ್ದರೆ ಬಹುವಚನ", x: ["T", "have"], why: "T ಎರಡು ಇವೆ, ಹಾಗಾಗಿ ಬಹುವಚನ Ts. ಕರ್ತೃ it ಜೊತೆ have ಅಲ್ಲ, has." }
  ],

  pron: [
    { t: "mc", q: "\"ಅಕ್ಕಿ, ಅನ್ನ\" ಎಂಬ ಅರ್ಥದ ಪದ ಯಾವುದು?", o: ["rice", "lice", "rise", "nice"], why: "R ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ rice ಎಂದರೆ ಅಕ್ಕಿ. L ಹೇಳಿದರೆ ಅದು lice (ಹೇನುಗಳು) ಆಗುತ್ತದೆ." },
    { t: "mc", q: "\"ಗಾಳಿ ಬೀಸುವ ಫ್ಯಾನ್\" ಎಂಬ ಅರ್ಥದ ಪದ ಯಾವುದು?", o: ["fan", "pan", "van", "ban"], why: "F ಹೇಳುವಾಗ ಮೇಲಿನ ಹಲ್ಲು ಕೆಳತುಟಿಗೆ ತಾಗಿ ಗಾಳಿ ಮಾತ್ರ ಬರುತ್ತದೆ. ಎರಡೂ ತುಟಿ ಮುಚ್ಚಿ P ಹೇಳಿದರೆ ಅದು pan (ಬಾಣಲೆ)." },
    { t: "mc", q: "\"ಯೋಚಿಸು\" ಎಂಬ ಅರ್ಥದ ಪದ ಯಾವುದು?", o: ["think", "sink", "thing", "pink"], why: "TH ಹೇಳುವಾಗ ನಾಲಿಗೆಯ ತುದಿ ಹಲ್ಲುಗಳ ನಡುವೆ ಸ್ವಲ್ಪ ಹೊರಗೆ ಬರುತ್ತದೆ. s ಹೇಳಿದರೆ ಅದು sink (ಪಾತ್ರೆ ತೊಳೆಯುವ ಸಿಂಕ್) ಆಗುತ್ತದೆ." },
    { t: "mc", q: "\"ಮತ ಹಾಕು\" ಎಂಬ ಅರ್ಥದ ಪದ ಯಾವುದು?", o: ["vote", "boat", "goat", "bought"], why: "V ಹೇಳುವಾಗ F ಹೇಳುವ ಆಕಾರಕ್ಕೆ ಗಂಟಲಿನ ಧ್ವನಿ ಸೇರುತ್ತದೆ. ಎರಡೂ ತುಟಿ ಮುಚ್ಚಿ B ಹೇಳಿದರೆ ಅದು boat (ದೋಣಿ)." },
    { t: "mc", q: "\"ಬಲಗಡೆ\" ಎಂಬ ಅರ್ಥದ ಪದ ಯಾವುದು?", o: ["right", "light", "fight", "bright"], why: "R ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ right ಎಂದರೆ ಬಲಗಡೆ. L ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ light ಎಂದರೆ ಬೆಳಕು." },

    { t: "order", p: "ಇದು ಬಾಳೆಹಣ್ಣು", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana ವ್ಯಂಜನ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a. this ಪದದ ಮೊದಲಿಗೆ TH ಇದೆ, D ಅಲ್ಲ." },
    { t: "order", p: "ಮೂರು ಮರಗಳು", a: ["three", "trees"], x: ["tree", "free"], why: "ಮೂರು ಇವೆ, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರಿ trees. three ಪದದ ಮೊದಲಿಗೆ TH, tree ಪದದ ಮೊದಲಿಗೆ TR." },
    { t: "order", p: "ನನಗೆ ಕಾಫಿ ಇಷ್ಟ", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee ಪದದಲ್ಲಿರುವುದು ಮೇಲಿನ ಹಲ್ಲು ಕೆಳತುಟಿಗೆ ತಾಗುವ F. P ಬರೆದರೆ ಅದು copy (ನಕಲು) ಆಗುತ್ತದೆ." },

    { t: "fill", q: "I eat __ice every day.", p: "ನಾನು ದಿನಾ ಅನ್ನ ತಿನ್ನುತ್ತೇನೆ", a: ["r"], o: ["l", "n", "w"], why: "ಅನ್ನ = R ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ rice. L ಬರೆದರೆ ಅದು lice (ಹೇನುಗಳು)." },
    { t: "fill", q: "I __ink so.", p: "ನನಗೆ ಹಾಗೆ ಅನಿಸುತ್ತದೆ", a: ["th"], o: ["s", "t", "p"], why: "think ಪದದ ಮೊದಲಿಗೆ TH. s ಬರೆದರೆ ಅದು sink (ಪಾತ್ರೆ ತೊಳೆಯುವ ಸಿಂಕ್)." },
    { t: "fill", q: "This is my __.", p: "ಇದು ನನ್ನ ಬ್ಯಾಗ್", a: ["bag"], o: ["back", "bug", "beg"], why: "ಬ್ಯಾಗ್ = g ಧ್ವನಿಯಲ್ಲಿ ಮುಗಿಯುವ bag. k ಧ್ವನಿಯಲ್ಲಿ ಮುಗಿದರೆ ಅದು back (ಬೆನ್ನು)." },

    { t: "type", p: "ಮೂರು ಮರಗಳು", a: ["three trees"], hint: "three · tree — ಮೂರು ಇದ್ದರೆ ಬಹುವಚನ", x: ["tree"], why: "three ಪದದ ಮೊದಲಿಗೆ TH, tree ಪದದ ಮೊದಲಿಗೆ TR; ಮೂರು ಇವೆ, ಹಾಗಾಗಿ ಬಹುವಚನ -s." },
    { t: "type", p: "ಎರಡು ದೋಣಿಗಳು", a: ["two boats"], hint: "two · boat — ಎರಡು ಇದ್ದರೆ ಬಹುವಚನ", x: ["boat", "votes"], why: "ದೋಣಿ = B ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ boat; ಎರಡು ಇವೆ, ಹಾಗಾಗಿ ಬಹುವಚನ -s. V ಬರೆದರೆ ಅದು vote (ಮತ)." },
    { t: "type", p: "(very ಬಳಸಿ) ತುಂಬಾ ಹಗುರ", a: ["very light"], hint: "very · light — ಮೊದಲ ಅಕ್ಷರಗಳು V ಮತ್ತು L", x: ["berry"], why: "very ಪದದ ಮೊದಲಿಗೆ V (ಮೇಲಿನ ಹಲ್ಲು ಕೆಳತುಟಿಗೆ), light ಪದದ ಮೊದಲಿಗೆ L (ನಾಲಿಗೆಯ ತುದಿ ವಸಡಿಗೆ)." }
  ],

  articles: [
    { t: "mc", q: "\"ನಾನು ವಿದ್ಯಾರ್ಥಿ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "ವೃತ್ತಿ ಅಥವಾ ಸ್ಥಾನದ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ a ಬೇಕೇ ಬೇಕು. ಕನ್ನಡದಲ್ಲಿ ಅಲ್ಲಿ ಏನೂ ಇಲ್ಲ, ಹಾಗಾಗಿ ಅದು ಬಿಟ್ಟುಹೋಗುತ್ತದೆ." },
    { t: "mc", q: "\"ನನ್ನ ಹತ್ತಿರ ಒಂದು ಐಡಿಯಾ ಇದೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an." },
    { t: "mc", q: "\"ಒಂದು ಗಂಟೆ\" (ಅವಧಿ) ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour ಪದದ h ಹೇಳುವುದಿಲ್ಲ. ಪದ ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an." },
    { t: "mc", q: "\"ನನಗೆ ನಾಯಿಗಳೆಂದರೆ ತುಂಬಾ ಇಷ್ಟ\" (ನಾಯಿ ಎಂಬ ಪ್ರಾಣಿ, ಒಟ್ಟಾಗಿ)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "ಒಂದು ಬಗೆಯನ್ನು ಒಟ್ಟಾಗಿ ಹೇಳುವಾಗ ಆರ್ಟಿಕಲ್ ಇಲ್ಲದ ಬಹುವಚನ." },
    { t: "mc", q: "\"ನನ್ನ ಹತ್ತಿರ ಒಂದು ನಾಯಿ ಇದೆ. ಆ ನಾಯಿ ತುಂಬಾ ಮುದ್ದಾಗಿದೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "ಮೊದಲ ಸಲ ಹೇಳುವಾಗ ಆರ್ಟಿಕಲ್ a; ಅದನ್ನೇ ಮತ್ತೆ ಹೇಳುವಾಗ the." },

    { t: "order", p: "ನಾನು ಶಿಕ್ಷಕ", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "ವೃತ್ತಿಯ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ a ಬೇಕು. teacher ವ್ಯಂಜನ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ an ಅಲ್ಲ." },
    { t: "order", p: "(ಈ ಕೋಣೆಯ) ಬಾಗಿಲು ಮುಚ್ಚುತ್ತೀಯಾ?", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "ಯಾವ ಬಾಗಿಲು ಎಂದು ಇಬ್ಬರಿಗೂ ಗೊತ್ತು, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "order", p: "ನಾನು ಕಾಫಿ ಕುಡಿಯುವುದಿಲ್ಲ", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "ಕಾಫಿಯನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಹೇಳುವಾಗ ಆರ್ಟಿಕಲ್ ಬರುವುದಿಲ್ಲ." },

    { t: "fill", q: "I'm __ university student.", p: "ನಾನು ಯೂನಿವರ್ಸಿಟಿ ವಿದ್ಯಾರ್ಥಿ", a: ["a"], o: ["an", "the", "two"], why: "university \"ಯೂ\" ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a. ನೋಡಬೇಕಾದದ್ದು ಸ್ಪೆಲ್ಲಿಂಗ್ ಅಲ್ಲ, ಧ್ವನಿ." },
    { t: "fill", q: "I have __ older sister.", p: "ನನಗೆ ಒಬ್ಬಳು ಅಕ್ಕ ಇದ್ದಾಳೆ", a: ["an"], o: ["a", "the", "two"], why: "older ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an." },
    { t: "fill", q: "I don't like __.", p: "ನನಗೆ ಬೆಕ್ಕುಗಳೆಂದರೆ ಇಷ್ಟ ಇಲ್ಲ (ಬೆಕ್ಕು ಎಂಬ ಪ್ರಾಣಿ, ಒಟ್ಟಾಗಿ)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "ಒಂದು ಬಗೆಯನ್ನು ಒಟ್ಟಾಗಿ ಹೇಳುವಾಗ ಆರ್ಟಿಕಲ್ ಇಲ್ಲದ ಬಹುವಚನ: cats." },

    { t: "type", p: "ನನ್ನ ಹತ್ತಿರ ಒಂದು ಐಡಿಯಾ ಇದೆ", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — ಸ್ವರ ಧ್ವನಿಯ ಮೊದಲು ಬರುವ ಆರ್ಟಿಕಲ್", x: ["a"], why: "idea ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an." },
    { t: "type", p: "ನನಗೆ ನಾಯಿಗಳೆಂದರೆ ಇಷ್ಟ (ನಾಯಿ ಎಂಬ ಪ್ರಾಣಿ, ಒಟ್ಟಾಗಿ)", a: ["I like dogs", "I love dogs"], hint: "like · dog — ಒಟ್ಟಾಗಿ ಹೇಳುವಾಗ ಬಹುವಚನ", x: ["dog", "a"], why: "ಒಂದು ಬಗೆಯನ್ನು ಒಟ್ಟಾಗಿ ಹೇಳುವಾಗ ಆರ್ಟಿಕಲ್ ಇಲ್ಲದ ಬಹುವಚನ: dogs." },
    { t: "type", p: "(ಒಟ್ಟಿಗೆ) ಮಧ್ಯಾಹ್ನದ ಊಟ ಮಾಡೋಣ", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — ಊಟದ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ ಬೇಕೇ?", x: ["a", "the"], why: "ಊಟದ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ ಬರುವುದಿಲ್ಲ." }
  ],

  be: [
    { t: "mc", q: "\"ನನಗೆ ಸುಸ್ತಾಗಿದೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "ಹೇಗಿದ್ದೇನೆ ಎಂದು ಹೇಳುವಾಗ be ಬೇಕೇ ಬೇಕು: I am tired = I'm tired. be ಬಿಟ್ಟರೆ (I tired) ತಪ್ಪು; ಇಲ್ಲಿ do ಕೂಡ ಬರುವುದಿಲ್ಲ." },
    { t: "mc", q: "\"ಅವನು ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುತ್ತಾನೆಯೇ?\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he ಜೊತೆ does; does ನಂತರ ಕ್ರಿಯಾಪದ -s ಇಲ್ಲದ V1 ರೂಪದಲ್ಲಿ ಇರುತ್ತದೆ." },
    { t: "mc", q: "\"ಅವಳು ಆಫೀಸ್‌ನಲ್ಲಿ ಇದ್ದಾಳೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "ಎಲ್ಲಿದ್ದಾಳೆ ಎಂದು ಹೇಳುವಾಗ be; she ಜೊತೆ is." },
    { t: "mc", q: "Do you like coffee? ಪ್ರಶ್ನೆಗೆ \"ಹೌದು\" ಎಂಬ ಉತ್ತರ ಯಾವುದು?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "do ಬಳಸಿ ಕೇಳಿದ ಪ್ರಶ್ನೆಗೆ do ಬಳಸಿಯೇ ಉತ್ತರ." },
    { t: "mc", q: "\"ಅವಳು ಮಾಂಸ ತಿನ್ನುವುದಿಲ್ಲ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she ಜೊತೆ ನಿಷೇಧಕ್ಕೆ doesn't + -s ಇಲ್ಲದ V1 ರೂಪ." },

    { t: "order", p: "ನನ್ನ ಅಣ್ಣ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಾನೆ", a: ["My", "brother", "works", "in", "Bengaluru"], x: ["work", "is"], why: "ಕರ್ತೃ ಒಬ್ಬ ವ್ಯಕ್ತಿ (he), ಹಾಗಾಗಿ ಕ್ರಿಯಾಪದಕ್ಕೆ -s ಸೇರಿ works. ಇಲ್ಲಿ be ಬರುವುದಿಲ್ಲ." },
    { t: "order", p: "ನಾನು ವಿದ್ಯಾರ್ಥಿ ಅಲ್ಲ", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be ಜೊತೆ ನಿಷೇಧಕ್ಕೆ not; ಸ್ಥಾನದ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ a." },
    { t: "order", p: "ಅವಳ ಹತ್ತಿರ ಎರಡು ನಾಯಿಗಳಿವೆ", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she ಜೊತೆ has; ಎರಡು ಇವೆ, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರಿ dogs." },

    { t: "fill", q: "My brother __ in Bengaluru.", p: "ನನ್ನ ಅಣ್ಣ ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸವಾಗಿದ್ದಾನೆ", a: ["lives"], o: ["live", "is live", "living"], why: "ಕರ್ತೃ he, ಹಾಗಾಗಿ ಕ್ರಿಯಾಪದಕ್ಕೆ -s ಸೇರುತ್ತದೆ: lives." },
    { t: "fill", q: "__ you tired?", p: "ನಿನಗೆ ಸುಸ್ತಾಗಿದೆಯೇ?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired ಒಂದು ಸ್ಥಿತಿ, ಹಾಗಾಗಿ be ಬಳಸಿ ಕೇಳಬೇಕು; you ಜೊತೆ are." },
    { t: "fill", q: "We __ hungry.", p: "ನಮಗೆ ಹಸಿವಾಗಿದೆ", a: ["are"], o: ["is", "am", "do"], why: "hungry ಒಂದು ಸ್ಥಿತಿ, ಹಾಗಾಗಿ be; we ಜೊತೆ are." },

    { t: "type", p: "ಅವನು ಶಿಕ್ಷಕ", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be + ವೃತ್ತಿಯ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್", x: ["the"], why: "ಯಾರು ಎಂದು ಹೇಳುವಾಗ be; ವೃತ್ತಿಯ ಹೆಸರಿನ ಮೊದಲು ಆರ್ಟಿಕಲ್ a." },
    { t: "type", p: "ನನಗೆ ಕಾಫಿ ಇಷ್ಟ ಇಲ್ಲ", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — like ಜೊತೆ ನಿಷೇಧ", x: ["am"], why: "like ಜೊತೆ ನಿಷೇಧಕ್ಕೆ don't (I'm not like ✗)." },
    { t: "type", p: "(does ಬಳಸಿ) ಅವಳ ಹತ್ತಿರ ಒಂದು ಬೆಕ್ಕು ಇದೆಯೇ?", a: ["Does she have a cat"], hint: "does · have · cat — ಒಂದು ಬೆಕ್ಕು: ಯಾವ ಆರ್ಟಿಕಲ್?", x: ["has"], why: "does ಬಂದರೆ ಕ್ರಿಯಾಪದ V1 ರೂಪದಲ್ಲಿ: have. ಬೆಕ್ಕು ಒಂದೇ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." }
  ],

  polite: [
    { t: "mc", q: "ಕೆಫೆಯಲ್ಲಿ ಒಂದು ಲಾಟೆ ಆರ್ಡರ್ ಮಾಡುವಾಗ ಅತ್ಯಂತ ಸಹಜವಾದ ಮಾತು ಯಾವುದು?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "ಅಂಗಡಿ, ಕೆಫೆಯಲ್ಲಿ Can I get ~? ಸಹಜ. ಲಾಟೆ ಒಂದೇ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a ಕೂಡ ಬೇಕು." },
    { t: "mc", q: "ಅಪರಿಚಿತರ ಹತ್ತಿರ ಸಹಾಯ ಕೇಳುವಾಗ ಅತ್ಯಂತ ವಿನಯದ ಮಾತು ಯಾವುದು?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~? ಎಂಬುದು ಅಪರಿಚಿತರನ್ನು ಕೇಳುವಾಗ ಬಳಸುವ ವಿನಯದ ರೂಪ." },
    { t: "mc", q: "ಎದುರಿನವರ ಮಾತು ಅರ್ಥವಾಗದಿದ್ದಾಗ ವಿನಯದಿಂದ ಮತ್ತೆ ಕೇಳುವ ಮಾತು ಯಾವುದು?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? ಎಂಬುದು ವಿನಯದಿಂದ ಮತ್ತೆ ಕೇಳುವ ರೀತಿ." },
    { t: "mc", q: "ತುಂಬಾ ವಿನಯದಿಂದ: \"ನಮ್ಮದೊಂದು ಫೋಟೋ ತೆಗೆದುಕೊಡುತ್ತೀರಾ?\"", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind ನಂತರ -ing ರೂಪ ಬರುತ್ತದೆ: taking." },
    { t: "mc", q: "ವಿಮಾನದಲ್ಲಿ: \"ನನಗೆ ಕಿಟಕಿ ಪಕ್ಕದ ಸೀಟ್ ಬೇಕು\"", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ ವಿನಯದ ಕೋರಿಕೆ. ಸೀಟ್ ಒಂದೇ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." },

    { t: "order", p: "ಒಂದು ಲಾಟೆ ಕೊಡುತ್ತೀರಾ?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "ಮೊದಲ ಸಲ ಆರ್ಡರ್ ಮಾಡುತ್ತಿರುವ ಒಂದು ಲಾಟೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." },
    { t: "order", p: "(ಈ ಕೋಣೆಯ) ಕಿಟಕಿ ತೆರೆಯುತ್ತೀರಾ? (ತುಂಬಾ ವಿನಯದಿಂದ)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind ನಂತರ -ing ರೂಪ; ಯಾವ ಕಿಟಕಿ ಎಂದು ಇಬ್ಬರಿಗೂ ಗೊತ್ತು, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "order", p: "ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಮಾತನಾಡುತ್ತೀರಾ?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you ~? ಬಳಸಿ ವಿನಯದಿಂದ ಕೇಳಿ. \"ನಿಧಾನವಾಗಿ\" = slowly; \"ಇನ್ನೂ ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ\" = more slowly." },

    { t: "fill", q: "Would you mind __ the door?", p: "ಬಾಗಿಲು ಮುಚ್ಚುತ್ತೀರಾ? (ನಿಮಗೆ ತೊಂದರೆ ಇಲ್ಲದಿದ್ದರೆ)", a: ["closing"], o: ["close", "to close", "closed"], why: "mind ನಂತರ -ing ರೂಪ ಬರುತ್ತದೆ." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "ಒಂದು ಐಸ್ಡ್ ಕಾಫಿ ಕೊಡುತ್ತೀರಾ?", a: ["an"], o: ["a", "two", "many"], why: "iced ಸ್ವರ ಧ್ವನಿಯಿಂದ (ಐ) ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an." },
    { t: "fill", q: "No, not at __.", p: "(Would you mind ~? ಪ್ರಶ್ನೆಗೆ ಉತ್ತರ) ಖಂಡಿತ, ಏನೂ ತೊಂದರೆ ಇಲ್ಲ", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all = \"ಏನೂ ತೊಂದರೆ ಇಲ್ಲ\", ಅಂದರೆ \"ಆಗಲಿ, ಮಾಡುತ್ತೇನೆ\"." },

    { t: "type", p: "(Could you ಬಳಸಿ, ವಿನಯದಿಂದ) ನನಗೆ ಸ್ವಲ್ಪ ಸಹಾಯ ಮಾಡುತ್ತೀರಾ?", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — ವಿನಯದ ಕೋರಿಕೆ", x: ["can"], why: "ಅಪರಿಚಿತರನ್ನು ಕೇಳುವಾಗ Could you ~? ಬಳಸಿ." },
    { t: "type", p: "(I'd like ಬಳಸಿ) ನನಗೆ ಕಿಟಕಿ ಪಕ್ಕದ ಸೀಟ್ ಬೇಕು", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — ಒಂದು ಸೀಟ್: ಯಾವ ಆರ್ಟಿಕಲ್?", x: ["the"], why: "ಒಂದು ಸೀಟ್ ಅನ್ನು ಮೊದಲ ಸಲ ಹೇಳುತ್ತಿದ್ದೀರಿ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a: a window seat." },
    { t: "type", p: "(ಕೆಫೆಯಲ್ಲಿ, Can I get ಬಳಸಿ) ಎರಡು ಕಾಫಿ ಕೊಡುತ್ತೀರಾ?", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — ಎರಡು ಇದ್ದರೆ ಬಹುವಚನ", x: ["coffee"], why: "ಆರ್ಡರ್ ಮಾಡುವಾಗ ಕಾಫಿಯನ್ನು ಕಪ್ ಲೆಕ್ಕದಲ್ಲಿ ಹೇಳುತ್ತಾರೆ, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರಿ two coffees." }
  ],

  tense: [
    { t: "mc", q: "\"ಈಗ ಕಾಫಿ ಕುಡಿಯುತ್ತಿದ್ದೇನೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "ಈಗ ನಡೆಯುತ್ತಿರುವ ಕೆಲಸಕ್ಕೆ be + -ing." },
    { t: "mc", q: "\"ಕಳೆದ ವಾರಾಂತ್ಯ ಬೀಚ್‌ಗೆ ಹೋಗಿದ್ದೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go ಕ್ರಿಯಾಪದದ V2 ರೂಪ went. ಬೀಚ್ ಎನ್ನುವಾಗ ಆರ್ಟಿಕಲ್ the ಸೇರಿಸಿ the beach ಎನ್ನುತ್ತಾರೆ." },
    { t: "mc", q: "ಮುಂದಿನ ತಿಂಗಳ ಪ್ಲಾನ್ ಹೇಳುವಾಗ: \"ಕೊಡಗಿಗೆ ಹೋಗಲಿದ್ದೇನೆ\"", o: ["I'm going to visit Coorg next month.", "I visit Coorg next month.", "I visited Coorg next month.", "I'm going visit Coorg next month."], why: "ಮೊದಲೇ ಮಾಡಿಕೊಂಡ ಪ್ಲಾನ್‌ಗೆ be going to + V1." },
    { t: "mc", q: "ಕಾಲಿಂಗ್ ಬೆಲ್ ಬಾರಿಸುತ್ತಿದೆ. ಆ ಕ್ಷಣದಲ್ಲೇ: \"ನಾನು ಬಾಗಿಲು ತೆರೆಯುತ್ತೇನೆ!\"", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "ಮಾತನಾಡುವ ಕ್ಷಣದಲ್ಲೇ ಮಾಡಿದ ನಿರ್ಧಾರಕ್ಕೆ will." },
    { t: "mc", q: "see ಕ್ರಿಯಾಪದದ V2 (Simple Past ರೂಪ) ಯಾವುದು?", o: ["saw", "seed", "seen", "sawed"], why: "see ಅನಿಯಮಿತ ಕ್ರಿಯಾಪದ: see - saw - seen." },

    { t: "order", p: "ನಾನು ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ (ಯಾವಾಗಲೂ)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "ಯಾವಾಗಲೂ ಮಾಡುವ ಕೆಲಸಕ್ಕೆ Simple Present; ಒಂದು ಬ್ಯಾಂಕ್ ಅನ್ನು ಮೊದಲ ಸಲ ಹೇಳುತ್ತಿದ್ದೀರಿ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." },
    { t: "order", p: "ಆಮೇಲೆ ನಿನಗೆ ಫೋನ್ ಮಾಡುತ್ತೇನೆ", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "ಮಾತನಾಡುವ ಕ್ಷಣದಲ್ಲಿ ಕೊಡುವ ಮಾತಿಗೆ will." },
    { t: "order", p: "ನಾನು ಎರಡು ಸಿನಿಮಾ ನೋಡಿದೆ", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see ಕ್ರಿಯಾಪದದ V2 ರೂಪ saw; ಎರಡು ಸಿನಿಮಾ, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರಿ movies. ಕನ್ನಡದಲ್ಲಿ \"ಎರಡು ಸಿನಿಮಾ\" ಎನ್ನಬಹುದು; ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ -s ಬೇಕೇ ಬೇಕು." },

    { t: "fill", q: "I __ pizza last night.", p: "ನಿನ್ನೆ ರಾತ್ರಿ ಪಿಜ್ಜಾ ತಿಂದೆ", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "eat ಕ್ರಿಯಾಪದದ V2 ರೂಪ ate (have ಬಳಸಿದರೆ had)." },
    { t: "fill", q: "__ you have fun?", p: "ಮಜಾ ಮಾಡಿದೆಯಾ?", a: ["Did"], o: ["Does", "Are", "Were"], why: "ಮುಗಿದುಹೋದ ಸಂಗತಿಯ ಬಗ್ಗೆ ಕೇಳುವಾಗ Did + V1." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "ನಾನು ಅಪ್ಪ ಅಮ್ಮನನ್ನು ನೋಡಲು ಹೋಗಲಿದ್ದೇನೆ", a: ["to"], o: ["for", "at", "on"], why: "ಪ್ಲಾನ್ ಹೇಳಲು be going to + V1." },

    { t: "type", p: "ಇವತ್ತು ಮನೆಯಿಂದಲೇ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೆ", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — ಈಗ ನಡೆಯುತ್ತಿರುವ ಕೆಲಸ", x: ["work"], why: "ಇವತ್ತು ನಡೆಯುತ್ತಿರುವ ಕೆಲಸಕ್ಕೆ be + -ing." },
    { t: "type", p: "ಕಳೆದ ವಾರಾಂತ್ಯ ಬೀಚ್‌ಗೆ ಹೋಗಿದ್ದೆ", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — V2 ರೂಪ ಮತ್ತು ಆರ್ಟಿಕಲ್", x: ["a"], why: "go ಕ್ರಿಯಾಪದದ V2 ರೂಪ went; ಬೀಚ್ ಎನ್ನುವಾಗ ಆರ್ಟಿಕಲ್ the ಸೇರಿಸಿ the beach ಎನ್ನುತ್ತಾರೆ." },
    { t: "type", p: "(take ಬಳಸಿ) ನಾನು ಒಂದು ಅಡುಗೆ ಕ್ಲಾಸ್‌ಗೆ ಸೇರಲಿದ್ದೇನೆ (ಮೊದಲೇ ಮಾಡಿಕೊಂಡ ಪ್ಲಾನ್)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — ಒಂದು ಕ್ಲಾಸ್: ಯಾವ ಆರ್ಟಿಕಲ್?", x: ["the"], why: "ಮೊದಲೇ ಮಾಡಿಕೊಂಡ ಪ್ಲಾನ್‌ಗೆ going to; ಒಂದು ಕ್ಲಾಸ್ ಅನ್ನು ಮೊದಲ ಸಲ ಹೇಳುತ್ತಿದ್ದೀರಿ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." }
  ],

  prep: [
    { t: "mc", q: "\"ಮೇ ತಿಂಗಳಲ್ಲಿ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["in May", "on May", "at May", "to May"], why: "ತಿಂಗಳ ಹೆಸರಿನ ಮೊದಲು in." },
    { t: "mc", q: "\"ಮೇ 3 ರಂದು\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "ತಾರೀಕಿನ ಮೊದಲು on." },
    { t: "mc", q: "\"(ಈಗ) ನಾನು ಬಸ್‌ನಲ್ಲಿ ಇದ್ದೇನೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "ಬಸ್, ರೈಲು ಇಂಥ ವಾಹನಗಳಿಗೆ on; ಈಗ ನೀವು ಇರುವ ಬಸ್, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the ಕೂಡ ಬೇಕು." },
    { t: "mc", q: "\"ರಾತ್ರಿ ಹೊತ್ತಿನಲ್ಲಿ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["at night", "on night", "in night", "at the night"], why: "night ಒಂದು ಅಪವಾದ: ಆರ್ಟಿಕಲ್ ಇಲ್ಲದೆ at night." },
    { t: "mc", q: "ಯಾವ ವಾಕ್ಯ ಸರಿ?", o: ["I live in Bengaluru.", "I live at Bengaluru.", "I live on Bengaluru.", "I live in the Bengaluru."], why: "ಊರಿನ ಹೆಸರಿನ ಮೊದಲು in; ಊರಿನ ಹೆಸರಿಗೆ ಆರ್ಟಿಕಲ್ the ಸೇರುವುದಿಲ್ಲ." },

    { t: "order", p: "(ನಮಗೆ ಗೊತ್ತಿರುವ ಆ) ಸ್ಟೇಷನ್‌ನಲ್ಲಿ ಸಿಗೋಣ", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "ಒಂದು ಬಿಂದುವಿಗೆ at; ಯಾವ ಸ್ಟೇಷನ್ ಎಂದು ಇಬ್ಬರಿಗೂ ಗೊತ್ತು, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "order", p: "ನನ್ನ ಫೋನ್ (ಆ) ಟೇಬಲ್ ಮೇಲೆ ಇದೆ", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "ಮೇಲ್ಮೈ ಮೇಲೆ ಇದ್ದರೆ on; ಕಣ್ಣೆದುರಿಗೆ ಇರುವ ಟೇಬಲ್, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "order", p: "ಮುಂದಿನ ವಾರ ಸಿಗೋಣ", a: ["See", "you", "next", "week"], x: ["on"], why: "next ಮೊದಲು preposition ಬರುವುದಿಲ್ಲ." },

    { t: "fill", q: "The meeting is __ three.", p: "ಮೀಟಿಂಗ್ ಮೂರು ಗಂಟೆಗೆ ಇದೆ", a: ["at"], o: ["on", "to", "of"], why: "ನಿಖರ ಸಮಯದ ಮೊದಲು at." },
    { t: "fill", q: "I was born __ 1998.", p: "ನಾನು ಹುಟ್ಟಿದ್ದು 1998 ರಲ್ಲಿ", a: ["in"], o: ["on", "at", "to"], why: "ವರ್ಷದ ಮೊದಲು in." },
    { t: "fill", q: "See you __ Friday.", p: "ಶುಕ್ರವಾರ ಸಿಗೋಣ", a: ["on"], o: ["in", "at", "to"], why: "ವಾರದ ದಿನದ ಮೊದಲು on. ಕನ್ನಡದಲ್ಲಿ ಪ್ರತ್ಯಯ ಇಲ್ಲದಿದ್ದರೂ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ on ಬೇಕು." },

    { t: "type", p: "(in ಬಳಸಿ) ನಾನು ಬೆಳಿಗ್ಗೆ ಕಾಫಿ ಕುಡಿಯುತ್ತೇನೆ", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + ಆರ್ಟಿಕಲ್", x: ["at"], why: "ದಿನದ ಭಾಗಕ್ಕೆ in; in the morning ಎನ್ನುವಾಗ ಆರ್ಟಿಕಲ್ the ಬೇಕೇ ಬೇಕು." },
    { t: "type", p: "ನಾನು ಈಗ ಮನೆಯಲ್ಲಿ ಇದ್ದೇನೆ", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — ಆರ್ಟಿಕಲ್ ಇಲ್ಲದೆ", x: ["the"], why: "at home ಎನ್ನುವಾಗ ಆರ್ಟಿಕಲ್ the ಬರುವುದಿಲ್ಲ." },
    { t: "type", p: "(See you ಬಳಸಿ) ಮುಂದಿನ ವಾರಾಂತ್ಯ ಸಿಗೋಣ", a: ["See you next weekend"], hint: "see · next weekend — next ಮೊದಲು preposition ಬೇಕೇ?", x: ["on"], why: "next ಮೊದಲು preposition ಬರುವುದಿಲ್ಲ." }
  ],

  smalltalk: [
    { t: "mc", q: "ಸಹೋದ್ಯೋಗಿ How was your weekend? ಎಂದು ಕೇಳಿದಾಗ ಯಾವ ಉತ್ತರ ಸರಿ?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "ಮುಗಿದುಹೋದ ವಾರಾಂತ್ಯದ ಬಗ್ಗೆ ಕೇಳಿದ್ದಾರೆ, ಹಾಗಾಗಿ Simple Past; ಜೊತೆಗೆ ಇನ್ನೊಂದು ಮಾಹಿತಿ ಸೇರಿಸಿ." },
    { t: "mc", q: "I don't drink coffee. ಎಂಬ ಮಾತಿಗೆ \"ನಾನೂ ಕುಡಿಯುವುದಿಲ್ಲ\" ಎನ್ನಲು", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "ನಿಷೇಧ ವಾಕ್ಯಕ್ಕೆ ಒಪ್ಪಿಗೆ ಸೂಚಿಸಲು Me neither." },
    { t: "mc", q: "ಮಾತುಕತೆಯನ್ನು ಸಹಜವಾಗಿ ಮುಗಿಸಲು ಯಾವುದು ಸರಿ?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going ಎಂಬುದು ಮೃದುವಾಗಿ ಹೊರಡುವ ಮಾತು." },
    { t: "mc", q: "ಮೊದಲ ಸಲ ಭೇಟಿಯಾದವರ ಜೊತೆ ಮಾತು ಶುರು ಮಾಡಲು ಯಾವುದು ಒಳ್ಳೆಯದು?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "ಹವಾಮಾನ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ವಿಷಯ. ಸಂಬಳ, ಮದುವೆ, ತೂಕ ಮೊದಲ ಭೇಟಿಯಲ್ಲಿ ಬೇಡ." },
    { t: "mc", q: "I went to Mysuru last weekend. ಎಂಬ ಮಾತಿಗೆ ಆಸಕ್ತಿ ತೋರಿಸುವ ಪ್ರತಿಕ್ರಿಯೆ ಯಾವುದು?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? ಮತ್ತು That sounds fun! ಆಸಕ್ತಿ ತೋರಿಸುವ ಮಾತುಗಳು." },

    { t: "order", p: "ವಾರಾಂತ್ಯಕ್ಕೆ ಏನಾದರೂ ಪ್ಲಾನ್ ಇದೆಯೇ?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "ಪ್ಲಾನ್ ಕೇಳುವ ಈ ಮಾತಿನಲ್ಲಿ ಬಹುವಚನ plans ಬರುತ್ತದೆ; ಈ ವಾರಾಂತ್ಯ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "order", p: "ನಿಮ್ಮ ಜೊತೆ ಮಾತನಾಡಿ ಖುಷಿಯಾಯಿತು", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "ಮಾತುಕತೆ ಮುಗಿಸುವಾಗ ಹೇಳುವ ಮಾತು. nice ನಂತರ talking ಬರುತ್ತದೆ." },
    { t: "order", p: "ನನಗೆ ಹಾರರ್ ಸಿನಿಮಾಗಳು ಇಷ್ಟ ಇಲ್ಲ", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "ಸಿನಿಮಾಗಳನ್ನು ಒಟ್ಟಾಗಿ ಹೇಳುತ್ತಿದ್ದೀರಿ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ ಇಲ್ಲದ ಬಹುವಚನ movies." },

    { t: "fill", q: "Pretty good! How __ you?", p: "ಚೆನ್ನಾಗಿದ್ದೇನೆ! ನೀನು?", a: ["about"], o: ["for", "with", "of"], why: "ಚಿಕ್ಕದಾಗಿ ಉತ್ತರಿಸಿ How about you? ಎಂದು ತಿರುಗಿ ಕೇಳುವುದು ರೂಢಿ." },
    { t: "fill", q: "I know, __?", p: "ಅಲ್ವಾ! / ನಾನೂ ಅದನ್ನೇ ಹೇಳುತ್ತಿದ್ದೆ!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? ಎಂಬುದು ಬಲವಾಗಿ ಒಪ್ಪುವ ಮಾತು. ಮೊದಲ ಅಕ್ಷರ R." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "ಇತ್ತೀಚೆಗೆ ಯಾವುದಾದರೂ ಒಳ್ಳೆಯ ಶೋ ಅಥವಾ ಸಿನಿಮಾ ನೋಡಿದ್ದೀರಾ?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "ಹೀಗೆ any ನಂತರ ಎಣಿಸಬಹುದಾದ ನಾಮಪದದ ಬಗ್ಗೆ ಕೇಳುವಾಗ ಬಹುವಚನ ಬರುತ್ತದೆ." },

    { t: "type", p: "ನಿಮ್ಮ ವಾರಾಂತ್ಯ ಹೇಗಿತ್ತು?", a: ["How was your weekend"], hint: "how · weekend — Simple Past ಬಳಸಿ", x: ["is"], why: "ಮುಗಿದುಹೋದ ವಾರಾಂತ್ಯ, ಹಾಗಾಗಿ was ಬಳಸಿ ಕೇಳಿ." },
    { t: "type", p: "(nice ಮತ್ತು weather ಬಳಸಿ, ಚಿಕ್ಕದಾಗಿ) ಇವತ್ತು ಹವಾಮಾನ ಚೆನ್ನಾಗಿದೆ", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — ಆರ್ಟಿಕಲ್ a ಬೇಕೇ?", x: ["a"], why: "weather ಎಣಿಸಲಾಗದ ನಾಮಪದ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a ಬರುವುದಿಲ್ಲ (a nice weather ✗)." },
    { t: "type", p: "(like ಮತ್ತು watch ಬಳಸಿ) ನನಗೆ ಸಿನಿಮಾ ನೋಡುವುದು ಇಷ್ಟ", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — ಒಟ್ಟಾಗಿ ಹೇಳುವಾಗ ಬಹುವಚನ", x: ["movie"], why: "ಸಿನಿಮಾಗಳನ್ನು ಒಟ್ಟಾಗಿ ಹೇಳುತ್ತಿದ್ದೀರಿ, ಹಾಗಾಗಿ ಬಹುವಚನ movies." }
  ],

  phrasal: [
    { t: "mc", q: "\"ಅದನ್ನು ಆನ್ ಮಾಡು\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "ಸರ್ವನಾಮ it ಫ್ರೇಸಲ್ ವರ್ಬ್‌ನ ನಡುವೆ ಬರುತ್ತದೆ: turn it on." },
    { t: "mc", q: "\"ಹಾಲು ಖಾಲಿಯಾಗಿದೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = ಖಾಲಿಯಾಗು. of ಬಿಡಬೇಡಿ." },
    { t: "mc", q: "\"ನಾನು ಬೆಳೆದದ್ದು ಹುಬ್ಬಳ್ಳಿಯಲ್ಲಿ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I grew up in Hubballi.", "I grew in Hubballi up.", "I growed up in Hubballi.", "I grew out in Hubballi."], why: "grow up = ಬೆಳೆದು ದೊಡ್ಡವರಾಗು; V2 ರೂಪ grew up." },
    { t: "mc", q: "\"ನನ್ನ ಬೆಕ್ಕನ್ನು ಸ್ವಲ್ಪ ನೋಡಿಕೊಳ್ಳುತ್ತೀಯಾ?\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = ನೋಡಿಕೊ. ಇದನ್ನು ಬೇರೆ ಮಾಡಲಾಗದು (look for = ಹುಡುಕು)." },
    { t: "mc", q: "\"ಏಳು ಗಂಟೆಗೆ ನಿನ್ನನ್ನು ಕರೆದುಕೊಂಡು ಹೋಗಲು ಬರುತ್ತೇನೆ\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "ಸರ್ವನಾಮ you ಬರುವುದು pick ಮತ್ತು up ನಡುವೆ." },

    { t: "order", p: "ನಾನು ನನ್ನ ಕನ್ನಡಕ ಹುಡುಕುತ್ತಿದ್ದೇನೆ", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "ಕನ್ನಡಕ ಯಾವಾಗಲೂ ಬಹುವಚನ: glasses (glass = ಗಾಜಿನ ಲೋಟ). \"ಹುಡುಕು\" = look for." },
    { t: "order", p: "ಒಂದು ಪ್ಲಾನ್ ಯೋಚಿಸೋಣ", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = ಯೋಚಿಸಿ ಹೊಸದನ್ನು ಮುಂದಿಡು. ಇನ್ನೂ ಇಲ್ಲದ ಒಂದು ಪ್ಲಾನ್, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." },
    { t: "order", p: "ನಾನು ನಿನ್ನನ್ನು ಕರೆದುಕೊಂಡು ಹೋಗಲು ಬರುತ್ತೇನೆ", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "ಸರ್ವನಾಮ you ಬರುವುದು pick ಮತ್ತು up ನಡುವೆ." },

    { t: "fill", q: "Can you turn it __?", p: "ಅದನ್ನು ಆಫ್ ಮಾಡುತ್ತೀಯಾ?", a: ["off"], o: ["of", "on", "out"], why: "ಆಫ್ ಮಾಡು = turn off. of ಜೊತೆ ಸ್ಪೆಲ್ಲಿಂಗ್ ಗೊಂದಲ ಬೇಡ." },
    { t: "fill", q: "I work __ every morning.", p: "ನಾನು ದಿನಾ ಬೆಳಿಗ್ಗೆ ವ್ಯಾಯಾಮ ಮಾಡುತ್ತೇನೆ", a: ["out"], o: ["up", "off", "on"], why: "work out = ವ್ಯಾಯಾಮ ಮಾಡು." },
    { t: "fill", q: "We ran out of __.", p: "ಮೊಟ್ಟೆಗಳು ಖಾಲಿಯಾಗಿವೆ", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "ಮೊಟ್ಟೆಯ ಹಾಗೆ ಎಣಿಸಬಹುದಾದ ವಸ್ತು ಖಾಲಿಯಾದಾಗ ಬಹುವಚನ: eggs." },

    { t: "type", p: "(turn ಬಳಸಿ) ಅದನ್ನು ಆಫ್ ಮಾಡಿ", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — ಸರ್ವನಾಮ ನಡುವೆ", x: ["on"], why: "ಸರ್ವನಾಮ it ಬರುವುದು turn ಮತ್ತು off ನಡುವೆ." },
    { t: "type", p: "ನಾನು ಎರಡು ಬೆಕ್ಕುಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತೇನೆ", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — ಎರಡು ಇದ್ದರೆ ಬಹುವಚನ", x: ["cat"], why: "look after = ನೋಡಿಕೊ. ಎರಡು ಬೆಕ್ಕು, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರಿ cats." },
    { t: "type", p: "(run out of ಬಳಸಿ) ನಮ್ಮ ಮನೆಯಲ್ಲಿ ಹಾಲು ಖಾಲಿಯಾಗಿದೆ", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk"], hint: "run out of · milk — ಆರ್ಟಿಕಲ್ a ಬೇಕೇ?", x: ["a"], why: "milk ಎಣಿಸಲಾಗದ ನಾಮಪದ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a ಬರುವುದಿಲ್ಲ." }
  ],

  numbers: [
    { t: "mc", q: "10,000 (ಹತ್ತು ಸಾವಿರ) ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "ಮೂರು ಮೂರು ಅಂಕಿ: 10 + thousand. ಸಂಖ್ಯೆಯ ನಂತರ ಬರುವ thousand ಪದಕ್ಕೆ ಬಹುವಚನ -s ಸೇರುವುದಿಲ್ಲ." },
    { t: "mc", q: "10,00,000 (ಹತ್ತು ಲಕ್ಷ) ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "ಹತ್ತು ಲಕ್ಷ = 1,000,000; ಎರಡು ಅಲ್ಪವಿರಾಮ ಇದ್ದರೆ million. ಸಂಖ್ಯೆಯ ನಂತರ ಬರುವ million ಪದಕ್ಕೆ ಬಹುವಚನ -s ಸೇರುವುದಿಲ್ಲ." },
    { t: "mc", q: "9:05 ಓದುವುದು ಹೇಗೆ?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1–9 ನಿಮಿಷಗಳ ಮೊದಲು oh ಸೇರಿಸುತ್ತಾರೆ." },
    { t: "mc", q: "$4.99 ಅನ್ನು ಸಹಜವಾಗಿ ಓದುವುದು ಹೇಗೆ?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "ಬೆಲೆಯನ್ನು ಎರಡು ಸಂಖ್ಯೆಗಳಾಗಿ ಓದುತ್ತಾರೆ: four ninety-nine." },
    { t: "mc", q: "2026 ನೇ ಇಸವಿಯನ್ನು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಓದುವುದು ಹೇಗೆ?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "ವರ್ಷವನ್ನು ಎರಡೆರಡು ಅಂಕಿಯಾಗಿ ಓದುತ್ತಾರೆ." },

    { t: "order", p: "ಈಗ ಏಳು ಹದಿನೈದು (7:15)", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 = fifteen (ಒತ್ತು ಕೊನೆಯ ಭಾಗಕ್ಕೆ), 50 = fifty (ಒತ್ತು ಮೊದಲ ಭಾಗಕ್ಕೆ)." },
    { t: "order", p: "ಅದಕ್ಕೆ ಹದಿನೈದು ಡಾಲರ್", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "ಒಂದು ಡಾಲರ್‌ಗಿಂತ ಹೆಚ್ಚಾದರೆ ಬಹುವಚನ -s ಸೇರಿ dollars." },
    { t: "order", p: "ವಾರಕ್ಕೆ ಎರಡು ಸಲ", a: ["twice", "a", "week"], x: ["the", "one"], why: "\"ವಾರಕ್ಕೆ ಇಷ್ಟು ಸಲ\" ಎನ್ನುವಾಗ ಆರ್ಟಿಕಲ್ a: twice a week." },

    { t: "fill", q: "It's __ quarter past ten.", p: "ಈಗ ಹತ್ತೂ ಕಾಲು (10:15)", a: ["a"], o: ["the", "one", "an"], why: "quarter (ಕಾಲು ಗಂಟೆ) ಮೊದಲು ಆರ್ಟಿಕಲ್ a ಬರುತ್ತದೆ; one ಅಲ್ಲ." },
    { t: "fill", q: "That's fifty __ rupees.", p: "ಅದಕ್ಕೆ ಐವತ್ತು ಸಾವಿರ ರೂಪಾಯಿ", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 = fifty thousand. ಸಂಖ್ಯೆಯ ನಂತರ ಬರುವ thousand ಪದಕ್ಕೆ ಬಹುವಚನ -s ಸೇರುವುದಿಲ್ಲ." },
    { t: "fill", q: "I'll be there in ten __.", p: "ಹತ್ತು ನಿಮಿಷದಲ್ಲಿ ಬರುತ್ತೇನೆ", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "ಹತ್ತು ನಿಮಿಷ, ಹಾಗಾಗಿ ಬಹುವಚನ: minutes. ಕನ್ನಡದಲ್ಲಿ \"ಹತ್ತು ನಿಮಿಷ\" ಸಾಕು; ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ -s ಬೇಕು." },

    { t: "type", p: "ಈಗ ಮೂರೂವರೆ (3:30)", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — ಗಂಟೆ ಮತ್ತು ನಿಮಿಷವನ್ನು ಹಾಗೆಯೇ", x: ["thirteen"], why: "ಗಂಟೆ ಮತ್ತು ನಿಮಿಷವನ್ನು ಹಾಗೆಯೇ ಓದಿ: three thirty. 13 (thirteen) ಜೊತೆ ಗೊಂದಲ ಬೇಡ." },
    { t: "type", p: "(It's ಪದದಿಂದ ಶುರು ಮಾಡಿ) ಅದಕ್ಕೆ ಇಪ್ಪತ್ತು ಡಾಲರ್", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — ಎರಡು ಅಥವಾ ಹೆಚ್ಚಾದರೆ ಬಹುವಚನ", x: ["dollar"], why: "ಎರಡು ಡಾಲರ್ ಅಥವಾ ಹೆಚ್ಚು, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರಿ dollars." },
    { t: "type", p: "(twice ಬಳಸಿ) ನಾನು ವಾರಕ್ಕೆ ಎರಡು ಸಲ ವ್ಯಾಯಾಮ ಮಾಡುತ್ತೇನೆ", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — \"ವಾರಕ್ಕೆ\" ಎನ್ನಲು ಯಾವ ಆರ್ಟಿಕಲ್?", x: ["the"], why: "\"ವಾರಕ್ಕೆ\" ಎನ್ನಲು ಆರ್ಟಿಕಲ್ a ಬಳಸಿ a week ಎನ್ನುತ್ತಾರೆ (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Dear ಬಳಸಿ ಶುರು ಮಾಡುವಾಗ ಅತ್ಯಂತ ಸಹಜವಾದ ಸಂಬೋಧನೆ ಯಾವುದು?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear ನಂತರ ಹುದ್ದೆಯ ಹೆಸರು ಮಾತ್ರ ಬರೆಯಬೇಡಿ; ವ್ಯಕ್ತಿಯ ಹೆಸರು ಬರೆಯಿರಿ: Mr. / Ms. + ಸರ್‌ನೇಮ್." },
    { t: "mc", q: "ವರದಿ ಲಗತ್ತಿಸಿದ್ದೇನೆ ಎಂದು ತಿಳಿಸಲು ಯಾವುದು ಸರಿ?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "ಓದುವವರಿಗೆ ಸಿಗಲಿರುವ ಅದೇ ವರದಿ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "mc", q: "\"ಗಡುವು ಯಾವಾಗ?\" ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "ಈ ಕೆಲಸದ ಗಡುವು — ಯಾವುದು ಎಂದು ಇಬ್ಬರಿಗೂ ಗೊತ್ತು, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "mc", q: "ಉತ್ತರ ತಡವಾದಾಗ ಕ್ಷಮೆ ಕೇಳುವ ಬದಲು ಬಳಸಬಹುದಾದ ಸಕಾರಾತ್ಮಕ ಮಾತು ಯಾವುದು?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience ಕ್ಷಮೆ ಕೇಳದೆಯೂ ವಿನಯವಾಗಿ ಕೇಳಿಸುತ್ತದೆ. patients (ರೋಗಿಗಳು) ಜೊತೆ ಸ್ಪೆಲ್ಲಿಂಗ್ ಗೊಂದಲ ಬೇಡ." },
    { t: "mc", q: "ಶುಕ್ರವಾರದ ಇಮೇಲ್ ಕೊನೆಗೆ ಬರೆಯಲು ಯಾವುದು ಸರಿ?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "ಒಂದು ವಾರಾಂತ್ಯ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a ಬೇಕು; weekend ಏಕವಚನದಲ್ಲಿ ಇರುತ್ತದೆ." },

    { t: "order", p: "ವರದಿ ಲಗತ್ತಿಸಿದ್ದೇನೆ", a: ["I've", "attached", "the", "report"], x: ["a"], why: "ಓದುವವರಿಗೆ ಸಿಗಲಿರುವ ಅದೇ ವರದಿ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "order", p: "ಒಂದು ಮೀಟಿಂಗ್ ನಿಗದಿ ಮಾಡೋಣ", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "ಇನ್ನೂ ನಿಗದಿಯಾಗದ ಒಂದು ಮೀಟಿಂಗ್, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a." },
    { t: "order", p: "ನೋಡಿ ನಿಮಗೆ ಮತ್ತೆ ತಿಳಿಸುತ್ತೇನೆ", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = ಮತ್ತೆ ಸಂಪರ್ಕಿಸಿ ತಿಳಿಸು. ಇಲ್ಲಿ to ಬರುತ್ತದೆ." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "ಶುಕ್ರವಾರದೊಳಗೆ ಫೈಲ್ ಕಳುಹಿಸುತ್ತೀರಾ?", a: ["by"], o: ["until", "in", "at"], why: "ಗಡುವು (ಇಂಥ ದಿನದೊಳಗೆ) ಹೇಳಲು by + ದಿನ. until ಎಂದರೆ \"ಅಲ್ಲಿಯವರೆಗೂ ಮಾಡುತ್ತಲೇ ಇರುವುದು\"." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "ವೇಳಾಪಟ್ಟಿಯ ಬಗ್ಗೆ ಕೇಳಲು ಬರೆಯುತ್ತಿದ್ದೇನೆ", a: ["to"], o: ["for", "about", "at"], why: "ಉದ್ದೇಶ ಹೇಳಲು I'm writing to + V1." },
    { t: "fill", q: "Thanks for all your hard __!", p: "ನಿಮ್ಮ ಎಲ್ಲ ಶ್ರಮಕ್ಕೆ ಧನ್ಯವಾದ!", a: ["work"], o: ["works", "working", "job"], why: "work (ಕೆಲಸ, ಶ್ರಮ) ಎಣಿಸಲಾಗದ ನಾಮಪದ, ಹಾಗಾಗಿ ಬಹುವಚನ -s ಸೇರುವುದಿಲ್ಲ." },

    { t: "type", p: "(off ಬಳಸಿ) ನಾಳೆ ನನಗೆ ರಜೆ, ಕೆಲಸಕ್ಕೆ ಬರುವುದಿಲ್ಲ", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be + off ಬಳಸಿ", x: ["do"], why: "ಕೆಲಸಕ್ಕೆ ರಜೆ ಇರುವ ದಿನದ ಬಗ್ಗೆ ಹೇಳಲು be off ಬಳಸುತ್ತಾರೆ." },
    { t: "type", p: "ಫೈಲ್ ಲಗತ್ತಿಸಿದ್ದೇನೆ", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — ಅದೇ ಫೈಲ್: ಯಾವ ಆರ್ಟಿಕಲ್?", x: ["a"], why: "ಓದುವವರಿಗೆ ಸಿಗಲಿರುವ ಅದೇ ಫೈಲ್, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ the." },
    { t: "type", p: "(Have ಬಳಸಿ) ವಾರಾಂತ್ಯ ಚೆನ್ನಾಗಿ ಕಳೆಯಿರಿ!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — ಒಂದು ವಾರಾಂತ್ಯ: ಯಾವ ಆರ್ಟಿಕಲ್?", x: ["the"], why: "ಒಂದು ವಾರಾಂತ್ಯ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ a ಬೇಕು: a great weekend." }
  ],

  idioms: [
    { t: "mc", q: "\"ಅದು ತುಂಬಾ ಸುಲಭ\" ಎಂಬ ಅರ್ಥದ ನುಡಿಗಟ್ಟು ಯಾವುದು?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "ನುಡಿಗಟ್ಟನ್ನು ಇಡಿಯಾಗಿ ಕಲಿಯಿರಿ: ಆರ್ಟಿಕಲ್ a ಇರಬೇಕು, cake ಏಕವಚನದಲ್ಲಿ ಇರಬೇಕು." },
    { t: "mc", q: "\"ಅದು ವಿಪರೀತ ದುಬಾರಿ\" ಎಂಬ ಅರ್ಥದ ನುಡಿಗಟ್ಟು ಯಾವುದು?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm ಸ್ವರ ಧ್ವನಿಯಿಂದ ಶುರುವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಆರ್ಟಿಕಲ್ an; leg ವ್ಯಂಜನ ಧ್ವನಿಯಿಂದ, ಹಾಗಾಗಿ a." },
    { t: "mc", q: "\"ಇವತ್ತಿಗೆ ಇಷ್ಟು ಸಾಕು\" (ಮೀಟಿಂಗ್‌ನಲ್ಲೂ ಹೇಳಬಹುದು)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day — ಆರ್ಟಿಕಲ್ a ಸಹಿತ ಇಡಿಯಾಗಿ ಕಲಿಯಬೇಕಾದ ನುಡಿಗಟ್ಟು." },
    { t: "mc", q: "\"ನನಗೆ ಆಕಾಶದಲ್ಲಿ ತೇಲಿದಷ್ಟು ಖುಷಿಯಾಗಿದೆ\" ಎಂಬ ಅರ್ಥದ ನುಡಿಗಟ್ಟು ಯಾವುದು?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine: ಇಲ್ಲಿ ಆರ್ಟಿಕಲ್ ಇಲ್ಲ, ಬಹುವಚನ -s ಕೂಡ ಇಲ್ಲ." },
    { t: "mc", q: "ಗೆಳೆಯರ ನಡುವೆ ಮಾತ್ರ ಬಳಸುವ ಸ್ಲ್ಯಾಂಗ್ ಯಾವುದು?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap ಎಂದರೆ \"ನಿಜವಾಗಿಯೂ\"; ಇದು ಯುವಜನರ ಸ್ಲ್ಯಾಂಗ್. ಉಳಿದವು ಆಫೀಸ್‌ನಲ್ಲೂ ಬಳಸುವ ನುಡಿಗಟ್ಟುಗಳು." },

    { t: "order", p: "ಗಮನವಿಟ್ಟು ಕೇಳುತ್ತಿದ್ದೇನೆ", a: ["I'm", "all", "ears"], x: ["ear"], why: "\"ಮೈಯೆಲ್ಲಾ ಕಿವಿ\" ಎಂಬ ಅರ್ಥದ ಮಾತು, ಹಾಗಾಗಿ ಬಹುವಚನ ears." },
    { t: "order", p: "ನಾನು ಕುಳಿತು ಚೆನ್ನಾಗಿ ಓದಬೇಕು", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books — ಆರ್ಟಿಕಲ್ the ಮತ್ತು ಬಹುವಚನ books ಹಾಗೆಯೇ ಇರಬೇಕು." },
    { t: "order", p: "ಅದು ನನ್ನ ಅಭಿರುಚಿಗೆ ಹೊಂದುವುದಿಲ್ಲ", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea ಎಂಬುದನ್ನು ಇಡಿಯಾಗಿ ಕಲಿಯಿರಿ. my ಇರುವ ಜಾಗದಲ್ಲಿ ಆರ್ಟಿಕಲ್ ಬರುವುದಿಲ್ಲ." },

    { t: "fill", q: "Kill two __ with one stone.", p: "ಒಂದೇ ಕಲ್ಲಿಗೆ ಎರಡು ಹಕ್ಕಿ", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "ಎರಡು ಹಕ್ಕಿ, ಹಾಗಾಗಿ ಬಹುವಚನ: birds." },
    { t: "fill", q: "Speak of the __!", p: "ನಿನಗೆ ನೂರು ವರ್ಷ ಆಯಸ್ಸು! (ಈಗ ತಾನೇ ನಿನ್ನ ಬಗ್ಗೆ ಮಾತನಾಡುತ್ತಿದ್ದೆವು)", a: ["devil"], o: ["ghost", "angel", "bird"], why: "ನೆನೆದವರೇ ಎದುರಿಗೆ ಬಂದಾಗ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ devil (ದೆವ್ವ) ಎನ್ನುತ್ತಾರೆ: Speak of the devil!" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "ನನಗೆ ಸ್ವಲ್ಪ ಹುಷಾರಿಲ್ಲ", a: ["the"], o: ["a", "an", "my"], why: "under the weather — ಆರ್ಟಿಕಲ್ the ಹಾಗೆಯೇ ಇರಬೇಕು." },

    { t: "type", p: "ಅದು ತುಂಬಾ ಸುಲಭ (cake ಇರುವ ನುಡಿಗಟ್ಟು)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — ಆರ್ಟಿಕಲ್ ಮರೆಯಬೇಡಿ", x: ["the"], why: "a piece of cake — ಆರ್ಟಿಕಲ್ a ಬೇಕೇ ಬೇಕು." },
    { t: "type", p: "ನಿನಗೆ ಒಳ್ಳೆಯದಾಗಲಿ ಎಂದು ಹಾರೈಸುತ್ತೇನೆ (I'll keep ಎಂದು ಶುರು ಮಾಡಿ; fingers ಇರುವ ನುಡಿಗಟ್ಟು)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — ಬೆರಳು ಎಷ್ಟು?", x: ["finger"], why: "ಎರಡು ಬೆರಳುಗಳನ್ನು ಒಂದರ ಮೇಲೊಂದು ಇಡುತ್ತಾರೆ, ಹಾಗಾಗಿ ಬಹುವಚನ fingers." },
    { t: "type", p: "ಇವತ್ತಿಗೆ ಇಷ್ಟು ಸಾಕು (call ಇರುವ ನುಡಿಗಟ್ಟು)", a: ["Let's call it a day"], hint: "call it · day — the ಅಲ್ಲ", x: ["the"], why: "call it a day — ಆರ್ಟಿಕಲ್ the ಅಲ್ಲ, a." }
  ]
};

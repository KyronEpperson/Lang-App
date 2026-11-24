# Third-party code and numbers

What the app carries that somebody else published, and under which licence. Add a section here whenever something new comes in.

## FSRS (the card memory judge)

- **What:** the forgetting curve, the rules for how a memory grows after a right answer and shrinks after a wrong one, and their 17 default weights (`MJ_W`, `MJ_F`, `MJ_C` in `src/app.html`, between `MEM-JUDGE-START` and `MEM-JUDGE-END`). These are FSRS-5 with its published default parameters. The code is the app's own; the formulas and the numbers are theirs.
- **From:** Open Spaced Repetition, the `fsrs` package 4.1.2 on PyPI (py-fsrs, https://github.com/open-spaced-repetition/py-fsrs). The same numbers are in ts-fsrs (MIT) and fsrs-rs (BSD-3-Clause).
- **Checked:** 2026-11-24. The package was downloaded from PyPI and its 19 default parameters compared with the app's: the first 17 are identical (the last two, for same-day reviews, are not used; the app has its own same-day rule). `DECAY = -0.5` and `FACTOR = 0.9 ** (1 / DECAY) - 1` (19/81) match too.
- **Licence:** MIT. The notice is also in the comment at the top of the judge block in `src/app.html`, so it travels with the built app.

```
MIT License

Copyright (c) 2022 Open Spaced Repetition

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

What is the app's own in the judge, and so not covered by the above: the three question types and their weights, the correction for a lucky pick, the limit of four times per answer, the day-based slips, the two personal numbers, the judgements (new, learning, memorized, needs practice) and the conversion of older saved progress.

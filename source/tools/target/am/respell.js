/* Amharic fidel -> learner romanisation. STOPPED. Do not require this on cards.
   Exports respell and pronPattern so the pipeline shape exists. respell refuses to emit a pron.
   Why: the fidel does not write phonemic gemination, and it does not show whether a sixth-order
   vowel is pronounced. A spelling-only romanisation would be systematically wrong. See
   docs/profiles/en-am.md section 6. pron in profile.json is "none".
   CLI: node respell.js "<text>"  exits 1 and writes the refusal. It does not print "<text> -> <pron>". */
'use strict';

const REASON = 'refusing a pron: the fidel does not write gemination (phonemic; አለ and ገና each have two readings), and it does not show whether a sixth-order vowel is said (ልብ, ስልክ, ሽፍታ). No generated romanisation is reliable enough to require.';

function respell() {
  throw new Error(REASON);
}

/* Empty: there is no accepted pron alphabet, because this tool emits no pron. */
function pronPattern() {
  return '';
}

module.exports = { respell, pronPattern };

if (require.main === module) {
  const text = process.argv.slice(2).join(' ');
  process.stderr.write((text ? text + ': ' : '') + REASON + '\n');
  process.exit(1);
}

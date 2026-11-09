# Lang App — runbook

## Where things live
| Thing | Where |
|---|---|
| Live site | https://lang-app.io (fallback https://lang-app-3qdw.vercel.app) |
| Code | github.com/KyronEpperson/Lang-App → `main` auto-deploys on Vercel |
| Database / auth | Supabase project `ddhxqolevqbaabssupvb` |
| Feedback | Supabase → Table Editor → `feedback` (or the Feedback tab while signed in as admin) |
| Crash reports | Supabase → Table Editor → `app_errors` |
| Visitors | Vercel → project → Analytics (toggle must be enabled) |

## Deploy
1. Edit the app, run the build (it regenerates index.html, sw.js, vercel.json and runs `verify_build.py`).
2. Commit **index.html and vercel.json together** (the CSP hash in vercel.json must match the script).
3. Push to `main` → Vercel deploys in ~30s. Installed apps show "New version ready · Reload".

## Check a deploy
- Open the site in a private window: welcome screen appears, no blank page.
- If blank: Vercel → Deployments → previous deployment → **Instant Rollback**, then fix and redeploy.

## Rollback
Vercel → Deployments → pick the last good one → ⋯ → **Promote / Instant Rollback**. Takes seconds; no data is affected (data lives in Supabase and on devices).

## Moderating the board
Sign in on the site with your admin email → Feedback tab → ❤️ / ✅ / 🙈 Hide. Hidden posts disappear for everyone else.

## Supabase SQL files (run in this order, each once; all are safe to re-run)
1. `supabase.sql` — progress sync table
2. `supabase-feedback.sql` — feedback table
3. `supabase-feedback-board.sql` — replies, public read, admin tools
4. `supabase/golive.sql` — delete-account, crash reports, abuse limits, size caps

## Email
Templates: `supabase/email-templates.md`. Before sharing widely, set up custom SMTP (Resend/Brevo) — the built-in sender is rate-limited.

## Adding a new language later
The engine (SRS, quizzes, learn-5 loop, sync, feedback, welcome) is language-agnostic. A new language = new DECKS / LESSONS / alphabet-drill tables + its own speech voice code (e.g. zh-CN). Keep one app with a language picker, or one deployment per language.

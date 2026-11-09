# Lang App — Supabase email templates
Supabase → Authentication → Emails → Templates. Paste each block into the matching template's **Message body** (switch to "Source"), set the subject, Save.
Both templates need `{{ .Token }}` (the 6-digit code) — that's what lets the iPhone home-screen app sign in.

## Confirm signup  (first-time users)
Subject: `Your Lang App code: {{ .Token }}`
```html
<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:440px;margin:0 auto;padding:24px;color:#1d1f24">
  <div style="font-size:28px;font-weight:700">한글 <span style="font-size:16px;font-weight:500;color:#6b6f76">Lang App</span></div>
  <p style="font-size:16px;line-height:1.5">Here's your sign-in code. Type it into the app:</p>
  <div style="font:700 34px/1 ui-monospace,Menlo,monospace;letter-spacing:8px;background:#f3efe6;border-radius:12px;padding:18px;text-align:center">{{ .Token }}</div>
  <p style="font-size:15px;line-height:1.5">Or tap to sign in on this device:</p>
  <p><a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#c2402f;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:600">Sign in to Lang App</a></p>
  <p style="font-size:13px;color:#6b6f76;line-height:1.5">The code expires in 1 hour. If you didn't ask for this, ignore this email — nobody can sign in without the code.</p>
</div>
```

## Magic Link  (returning users)
Subject: `Your Lang App code: {{ .Token }}`
Use the same HTML as above (it already uses `{{ .ConfirmationURL }}` and `{{ .Token }}`).

## Also in Authentication settings
- **Emails → SMTP**: the built-in sender is capped at a few emails per hour. Before sharing widely, plug in a free SMTP (Resend, Brevo) so sign-in emails don't get rate-limited.
- **Providers → Email**: keep "Confirm email" ON. OTP expiry 3600s is fine.

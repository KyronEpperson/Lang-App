# Lang App — native shell (iOS)

A Capacitor 8 project that packages the website into an App Store app. The web app is not rewritten: the files at the repo root are copied into the app, so it opens instantly and works with no connection.

Nothing here affects lang-app.io. `native/` and `.github/` are listed in `.vercelignore`.

## What is in here

| File | What it does |
|---|---|
| `capacitor.config.json` | App name and bundle ID (`io.langapp.app`) |
| `scripts/prepare-web.mjs` | Copies the site into `www/`, drops the Vercel Analytics tag, checks every course pack is present |
| `scripts/configure-ios.mjs` | Puts the icon, launch screen and Info.plist settings into the generated Xcode project |
| `web/native.js` | Study reminders. Added to the bundled copy only; the website never loads it |
| `assets/` | 1024px app icon, light and dark launch images (rendered from `source/tools/brand/logo.py`) |
| `../.github/workflows/ios.yml` | Builds on a GitHub Mac; optional TestFlight upload |

`www/`, `ios/` and `node_modules/` are generated and not committed.

## Build

No Mac needed. GitHub → Actions → **iOS app** → Run workflow.

- Default run: compiles for the iOS Simulator and attaches the build as an artifact.
- Tick **Upload to TestFlight**: signs and uploads to App Store Connect.

The app version comes from `APP_VERSION` in `index.html`; the build number is the workflow run number.

## Before the first TestFlight upload

1. Enroll in the Apple Developer Program ($99/yr, individual).
2. developer.apple.com → Identifiers → register `io.langapp.app`.
3. App Store Connect → Apps → New App, using that bundle ID.
4. App Store Connect → Users and Access → Integrations → App Store Connect API → create a key with the **Admin** role and download the `.p8` file.
5. GitHub repo → Settings → Secrets and variables → Actions, add:

| Secret | Value |
|---|---|
| `ASC_KEY_ID` | Key ID shown next to the API key |
| `ASC_ISSUER_ID` | Issuer ID at the top of the API keys page |
| `ASC_KEY_P8` | Full text of the `.p8` file |
| `APPLE_TEAM_ID` | 10-character Team ID (developer.apple.com → Membership) |

## How the app differs from the website

- **Updates** ship through App Store releases. The website's self-updating service worker does not run inside the app.
- **Audio** uses the phone's built-in voices, the same as Safari.
- **Sign-in** works the same (6-digit email code).
- **Visitor logs and Vercel Analytics** only count lang-app.io, so app usage is not counted yet.

## Study reminders

Progress page → **Study reminder**: an on/off switch and a time of day. It is off until the learner turns it on, and the permission prompt appears at that moment.

- One local notification a day, planned 14 days ahead and re-planned whenever the app is opened or put away.
- No reminder on a day that already has study time.
- Reminders stop by themselves if the app is not opened for 14 days.
- Local only: no push server, no device token, nothing sent anywhere. The setting is stored on the device (`la-remind`).
- Wording is English or Korean; other interface languages fall back to English until the strings are added to the i18n packs.

## Not done yet

- Android. The Capacitor Android WebView has no built-in speech, so audio would be silent there without a native speech plugin. The simpler Android route is the Trusted Web Activity in `../STORES.md`, which runs the live site in Chrome.

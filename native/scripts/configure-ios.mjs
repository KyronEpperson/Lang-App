#!/usr/bin/env node
// Applies Lang App's icon, launch screen and Info.plist settings to the iOS project
// that `npx cap add ios` generates. Safe to run again after every `cap sync`.
// macOS only (uses PlistBuddy), which is where iOS builds happen anyway.
import { copyFileSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const native = resolve(here, '..');
const app = join(native, 'ios', 'App', 'App');
const assets = join(native, 'assets');
const xc = join(app, 'Assets.xcassets');

function need(p) { if (!existsSync(p)) { console.error('not found: ' + p + '\nRun `npx cap add ios` first.'); process.exit(1); } }
need(app); need(xc);

// App icon: one 1024px image, no transparency, square corners (iOS rounds it).
const iconSet = join(xc, 'AppIcon.appiconset');
need(iconSet);
for (const f of readdirSync(iconSet)) if (f.endsWith('.png')) rmSync(join(iconSet, f));
copyFileSync(join(assets, 'icon-1024.png'), join(iconSet, 'AppIcon-1024.png'));
writeFileSync(join(iconSet, 'Contents.json'), JSON.stringify({
  images: [{ filename: 'AppIcon-1024.png', idiom: 'universal', platform: 'ios', size: '1024x1024' }],
  info: { author: 'xcode', version: 1 }
}, null, 2) + '\n');

// Launch screen image, light and dark.
const splashSet = join(xc, 'Splash.imageset');
need(splashSet);
for (const f of readdirSync(splashSet)) if (f.endsWith('.png')) rmSync(join(splashSet, f));
copyFileSync(join(assets, 'splash.png'), join(splashSet, 'splash.png'));
copyFileSync(join(assets, 'splash-dark.png'), join(splashSet, 'splash-dark.png'));
const dark = [{ appearance: 'luminosity', value: 'dark' }];
writeFileSync(join(splashSet, 'Contents.json'), JSON.stringify({
  images: [
    { idiom: 'universal', filename: 'splash.png', scale: '1x' },
    { idiom: 'universal', scale: '2x' },
    { idiom: 'universal', scale: '3x' },
    { idiom: 'universal', filename: 'splash-dark.png', scale: '1x', appearances: dark },
    { idiom: 'universal', scale: '2x', appearances: dark },
    { idiom: 'universal', scale: '3x', appearances: dark }
  ],
  info: { author: 'xcode', version: 1 }
}, null, 2) + '\n');

// Info.plist
const plist = join(app, 'Info.plist');
need(plist);
function setPlist(key, type, value) {
  try { execFileSync('/usr/libexec/PlistBuddy', ['-c', `Set :${key} ${value}`, plist], { stdio: 'pipe' }); }
  catch { execFileSync('/usr/libexec/PlistBuddy', ['-c', `Add :${key} ${type} ${value}`, plist], { stdio: 'pipe' }); }
}
// The app only uses standard HTTPS, so it is exempt from export paperwork; this skips the question on every upload.
setPlist('ITSAppUsesNonExemptEncryption', 'bool', 'false');
// English is the base language; the interface itself switches language inside the app.
setPlist('CFBundleDevelopmentRegion', 'string', 'en');

const cfg = JSON.parse(readFileSync(join(native, 'capacitor.config.json'), 'utf8'));
console.log(`iOS project configured: ${cfg.appName} (${cfg.appId}), icon + launch screen + Info.plist`);

/* Lang App — native-only additions. Loaded only inside the iOS/Android app (prepare-web.mjs adds the tag);
   the website never loads this file.

   Study reminders
   - A "Study reminder" panel on the Progress page: on/off and a time of day. Off until the learner turns it on;
     the system permission prompt appears at that moment, never at launch.
   - One local notification a day at the chosen time, planned 14 days ahead and re-planned every time the app
     is opened or put away. Today's reminder is dropped once today's studying is done.
   - If the app is not opened for 14 days the reminders stop by themselves.
   - Nothing leaves the phone: these are local notifications, no push server and no token.
   The setting is kept per device in localStorage under 'la-remind'. */
(function () {
  'use strict';
  var Cap = window.Capacitor;
  if (!Cap || typeof Cap.isNativePlatform !== 'function' || !Cap.isNativePlatform()) return;
  var LN = Cap.Plugins && Cap.Plugins.LocalNotifications;
  if (!LN) return;

  var KEY = 'la-remind', BASE_ID = 7100, DAYS = 14;

  function load() {
    var c = null;
    try { c = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    if (!c || typeof c !== 'object') c = {};
    var h = +c.h, m = +c.m;
    return { on: c.on === true, h: h >= 0 && h <= 23 ? Math.floor(h) : 19, m: m >= 0 && m <= 59 ? Math.floor(m) : 0 };
  }
  function store(c) { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {} }

  /* The app's own helpers, used when present so this file keeps working if one is renamed. */
  function L(en, ko) { try { if (typeof LL === 'function') return LL(en, ko); } catch (e) {} return en; }
  function say(msg) { try { if (typeof toast === 'function') toast(msg); } catch (e) {} }
  function target() { try { if (typeof tgtName === 'function') return tgtName() || ''; } catch (e) {} return ''; }
  function studiedToday() { try { return !!(S && S.days && S.days[dkey()] > 0); } catch (e) { return false; } }
  function streakNow() { try { return typeof streak === 'function' ? (+streak() || 0) : 0; } catch (e) { return 0; } }

  function messages() {
    var t = target(), n = streakNow(), list = [];
    list.push(t ? L('5 minutes of ' + t + ' today?', '오늘 ' + t + ' 5분 어때요?') : L('5 minutes of practice today?', '오늘 5분 연습 어때요?'));
    list.push(L('Your cards are ready for review.', '복습할 카드가 준비됐어요.'));
    list.push(L('A short session keeps it fresh.', '짧게라도 하면 기억에 남아요.'));
    var first = n > 0
      ? L('Keep your ' + n + '-day streak going: 5 minutes today.', n + '일 연속 기록을 이어가요. 오늘 5분!')
      : list[0];
    var last = L('Your deck is here whenever you are ready.', '준비되면 언제든 다시 시작해요.');
    return { first: first, list: list, last: last };
  }

  function ids() { var a = []; for (var i = 0; i < DAYS; i++) a.push({ id: BASE_ID + i }); return a; }
  function clearAll() { return Promise.resolve(LN.cancel({ notifications: ids() })).catch(function () {}); }

  var busy = null, again = false;
  /* Cancel everything of ours, then plan the next DAYS reminders from the current setting. Calls are queued. */
  function plan() {
    if (busy) { again = true; return busy; }
    busy = clearAll().then(function () {
      var c = load();
      if (!c.on) return;
      return Promise.resolve(LN.checkPermissions()).then(function (p) {
        if (!p || p.display !== 'granted') return;
        var now = Date.now(), msg = messages(), out = [];
        for (var i = 0; i < DAYS; i++) {
          var at = new Date(); at.setDate(at.getDate() + i); at.setHours(c.h, c.m, 0, 0);
          if (at.getTime() <= now + 60000) continue;       /* already past today */
          if (i === 0 && studiedToday()) continue;         /* done for today */
          var body = i === DAYS - 1 ? msg.last : (i === 0 ? msg.first : msg.list[i % msg.list.length]);
          out.push({ id: BASE_ID + i, title: 'Lang App', body: body, schedule: { at: at, allowWhileIdle: true } });
        }
        if (out.length) return LN.schedule({ notifications: out });
      });
    }).catch(function () {}).then(function () {
      busy = null;
      if (again) { again = false; return plan(); }
    });
    return busy;
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function build() {
    var view = document.getElementById('v-progress');
    if (!view || document.getElementById('remindPanel')) return;
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'remindPanel';
    p.innerHTML =
      '<div class="row"><h3 style="margin:0" id="remindTitle"></h3>' +
      '<input type="time" id="remindTime" style="font:inherit;padding:6px 8px;border:1px solid var(--line);border-radius:10px;background:var(--paper);color:inherit;min-height:40px"></div>' +
      '<label class="auto" style="margin-top:6px"><input type="checkbox" id="remindOn"> <span id="remindLabel"></span></label>' +
      '<p class="stat" id="remindNote" style="margin:6px 0 0"></p>';
    var tiles = view.querySelector('.tiles');
    if (tiles && tiles.nextSibling) view.insertBefore(p, tiles.nextSibling); else view.appendChild(p);

    var on = document.getElementById('remindOn'), time = document.getElementById('remindTime');
    on.addEventListener('change', function () {
      var c = load();
      if (!on.checked) { c.on = false; store(c); paint(); plan(); return; }
      Promise.resolve(LN.requestPermissions()).then(function (r) {
        if (r && r.display === 'granted') { c.on = true; store(c); paint(); plan(); }
        else { c.on = false; store(c); paint(); say(L('Notifications are turned off for Lang App. Turn them on in your phone\'s Settings.', '알림이 꺼져 있어요. 휴대폰 설정에서 Lang App 알림을 켜 주세요.')); }
      }).catch(function () { c.on = false; store(c); paint(); });
    });
    time.addEventListener('change', function () {
      var m = /^(\d{1,2}):(\d{2})/.exec(time.value || '');
      if (!m) { paint(); return; }
      var c = load(); c.h = +m[1]; c.m = +m[2]; store(c); paint(); plan();
    });
    paint();
  }

  function paint() {
    var c = load(), on = document.getElementById('remindOn');
    if (!on) return;
    document.getElementById('remindTitle').textContent = L('Study reminder', '공부 알림');
    document.getElementById('remindLabel').textContent = L('Remind me every day', '매일 알려 주기');
    document.getElementById('remindNote').textContent = c.on
      ? L('No reminder on days you have already studied.', '이미 공부한 날에는 알림이 오지 않아요.')
      : L('One notification a day at the time you choose.', '정한 시간에 하루 한 번 알려 드려요.');
    on.checked = c.on;
    var time = document.getElementById('remindTime');
    time.value = pad(c.h) + ':' + pad(c.m);
    time.disabled = !c.on;
    time.style.opacity = c.on ? '1' : '.5';
  }

  function start() {
    build();
    /* Refresh the wording when the Progress page is drawn again (the interface language can change). */
    try {
      if (typeof window.renderProgress === 'function') {
        var orig = window.renderProgress;
        window.renderProgress = function () { var r = orig.apply(this, arguments); try { build(); paint(); } catch (e) {} return r; };
      }
    } catch (e) {}
    window.addEventListener('hashchange', function () { try { build(); paint(); } catch (e) {} });
    document.addEventListener('visibilitychange', plan);   /* opening and putting away the app both re-plan */
    window.addEventListener('pagehide', plan);
    plan();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

  window.LangAppReminders = { plan: plan, load: load };   /* for testing */
})();

-- Lang App: our own visitor log (kept as long as you like; Vercel only keeps 30 days).
-- Run once in Supabase → SQL Editor. Safe to re-run. Needs supabase-feedback-board.sql (is_admin) to be in place.
-- The app only ever INSERTS rows with the publishable key. Nobody can read rows through the API;
-- admins read totals through visit_stats().

create table if not exists public.app_events (
  id     bigint generated always as identity primary key,
  at     timestamptz not null default now(),
  vid    text not null check (char_length(vid) between 8 and 40),   -- random id made on the device; not an account, email or IP
  kind   text not null check (kind in ('visit','view')),
  page   text check (char_length(page) <= 40),
  course text check (char_length(course) <= 12),
  v      text check (char_length(v) <= 30),
  ref    text check (char_length(ref) <= 80),                         -- referring site's host name only
  lang   text check (char_length(lang) <= 12),
  dev    text check (dev in ('phone','tablet','desktop')),
  app    boolean not null default false,                              -- opened as an installed app
  is_new boolean not null default false                               -- first time this device was seen
);
create index if not exists app_events_at_idx  on public.app_events (at);
create index if not exists app_events_vid_idx on public.app_events (vid);

alter table public.app_events enable row level security;
drop policy if exists "app can log" on public.app_events;
create policy "app can log" on public.app_events for insert to anon, authenticated with check (true);
revoke select, update, delete on public.app_events from anon, authenticated;
grant insert on public.app_events to anon, authenticated;

-- Flood guard: at most 600 rows a minute overall.
create or replace function public.app_events_limit() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.app_events where at > now() - interval '1 minute') >= 600 then
    raise exception 'Too many events, slow down.' using errcode = 'P0001';
  end if;
  return new;
end $$;
drop trigger if exists app_events_limit on public.app_events;
create trigger app_events_limit before insert on public.app_events for each row execute function public.app_events_limit();

-- Totals for the admin panel (Progress page). Admins only.
create or replace function public.visit_stats(p_days int default 30, p_tz text default 'UTC')
returns json language plpgsql stable security definer set search_path = public as $$
declare since timestamptz; res json;
begin
  if not public.is_admin() then raise exception 'admins only' using errcode = '42501'; end if;
  p_days := greatest(1, least(coalesce(p_days,30), 3650));
  since := (date_trunc('day', now() at time zone p_tz) - make_interval(days => p_days - 1)) at time zone p_tz;
  with e as (select *, (at at time zone p_tz)::date as d from public.app_events where at >= since)
  select json_build_object(
    'days', p_days,
    'people', (select count(distinct vid) from e),
    'visits', (select count(*) from e where kind = 'visit'),
    'new_people', (select count(distinct vid) from e where is_new),
    'returning', (select count(*) from (select vid from e group by vid having count(distinct d) >= 2) x),
    'all_people', (select count(distinct vid) from public.app_events),
    'first_day', (select min((at at time zone p_tz)::date) from public.app_events),
    'daily', coalesce((select json_agg(row_to_json(t) order by t.d) from (
        select d, count(distinct vid) as people, count(*) filter (where kind = 'visit') as visits,
               count(distinct vid) filter (where is_new) as new_people from e group by d) t), '[]'::json),
    'pages', coalesce((select json_agg(row_to_json(t)) from (
        select page as k, count(distinct vid) as n from e where kind = 'view' and page is not null group by page order by 2 desc limit 20) t), '[]'::json),
    'courses', coalesce((select json_agg(row_to_json(t)) from (
        select course as k, count(distinct vid) as n from e where course is not null and course <> '' group by course order by 2 desc limit 40) t), '[]'::json),
    'refs', coalesce((select json_agg(row_to_json(t)) from (
        select coalesce(nullif(ref,''),'(direct)') as k, count(distinct vid) as n from e where kind = 'visit' group by 1 order by 2 desc limit 15) t), '[]'::json),
    'devs', coalesce((select json_agg(row_to_json(t)) from (
        select coalesce(dev,'?') || case when app then ' · installed' else '' end as k, count(distinct vid) as n from e where kind = 'visit' group by 1 order by 2 desc) t), '[]'::json),
    'langs', coalesce((select json_agg(row_to_json(t)) from (
        select coalesce(nullif(lang,''),'?') as k, count(distinct vid) as n from e where kind = 'visit' group by 1 order by 2 desc limit 15) t), '[]'::json)
  ) into res;
  return res;
end $$;
revoke all on function public.visit_stats(int, text) from public;
grant execute on function public.visit_stats(int, text) to authenticated;

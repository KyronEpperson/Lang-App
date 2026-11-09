-- Lang App go-live SQL. Run once in Supabase → SQL Editor (safe to re-run).

-- 1) Delete my account: removes the signed-in user; progress cascades; feedback is unlinked (user_id → null, name kept only if they chose to show it)
create or replace function public.delete_my_account() returns void
  language plpgsql security definer set search_path = public, auth
as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from public.progress where user_id = auth.uid();
  update public.feedback set user_id = null where user_id = auth.uid();
  delete from auth.users where id = auth.uid();
end $$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;

-- 2) Crash reports (insert-only from the app; you read them in Table Editor → app_errors)
create table if not exists public.app_errors (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  kind text check (kind in ('error','promise')),
  message text check (char_length(message) <= 300),
  source text check (char_length(source) <= 120),
  line int,
  route text check (char_length(route) <= 40),
  app_version text check (char_length(app_version) <= 60),
  ua text check (char_length(ua) <= 160)
);
alter table public.app_errors enable row level security;
drop policy if exists "app can report" on public.app_errors;
create policy "app can report" on public.app_errors for insert to anon, authenticated with check (true);
revoke select, update, delete on public.app_errors from anon, authenticated;

-- 3) Abuse limits (anti-spam / anti-flood). Raise the numbers if the app gets popular.
create or replace function public.limit_feedback() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.feedback where created_at > now() - interval '1 minute') >= 30 then
    raise exception 'Too many posts right now — try again in a minute' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.feedback where message = new.message and created_at > now() - interval '10 minutes') then
    raise exception 'Duplicate post' using errcode = 'P0001';
  end if;
  return new;
end $$;
drop trigger if exists feedback_limit on public.feedback;
create trigger feedback_limit before insert on public.feedback for each row execute function public.limit_feedback();

create or replace function public.limit_errors() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.app_errors where created_at > now() - interval '1 minute') >= 60 then
    return null;  -- silently drop floods
  end if;
  return new;
end $$;
drop trigger if exists app_errors_limit on public.app_errors;
create trigger app_errors_limit before insert on public.app_errors for each row execute function public.limit_errors();

-- keep the error table small: delete reports older than 30 days whenever new ones arrive (cheap, no cron needed)
create or replace function public.prune_errors() returns trigger language plpgsql security definer set search_path = public as $$
begin delete from public.app_errors where created_at < now() - interval '30 days'; return null; end $$;
drop trigger if exists app_errors_prune on public.app_errors;
create trigger app_errors_prune after insert on public.app_errors for each statement execute function public.prune_errors();

-- 4) Progress row size cap (stops someone stuffing megabytes into their own row)
alter table public.progress drop constraint if exists progress_state_size;
alter table public.progress add constraint progress_state_size check (pg_column_size(state) < 2000000);

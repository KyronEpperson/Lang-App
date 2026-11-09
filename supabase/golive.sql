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

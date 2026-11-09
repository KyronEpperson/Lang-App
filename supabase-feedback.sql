-- Run once in Supabase → SQL Editor. Anyone can submit feedback; nobody can read it through the API
-- (you read it in the dashboard: Table Editor → feedback).
create table if not exists public.feedback (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  kind text not null default 'idea' check (kind in ('idea','bug','content','love')),
  message text not null check (char_length(message) between 1 and 2000),
  name text check (name is null or char_length(name) <= 120),
  user_id uuid references auth.users(id) on delete set null,
  route text,
  app_version text,
  ua text
);
alter table public.feedback enable row level security;
drop policy if exists "anyone can submit" on public.feedback;
create policy "anyone can submit" on public.feedback for insert to anon, authenticated
  with check (user_id is null or user_id = auth.uid());
-- no select/update/delete policies → submissions are write-only from the app

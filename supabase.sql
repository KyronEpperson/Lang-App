-- Run once in Supabase → SQL Editor. One row per signed-in user; RLS keeps rows private.
create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;
drop policy if exists "own row read"   on public.progress;
drop policy if exists "own row insert" on public.progress;
drop policy if exists "own row update" on public.progress;
create policy "own row read"   on public.progress for select using (auth.uid() = user_id);
create policy "own row insert" on public.progress for insert with check (auth.uid() = user_id);
create policy "own row update" on public.progress for update using (auth.uid() = user_id);

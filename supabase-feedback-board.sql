-- Run once in Supabase → SQL Editor (after supabase-feedback.sql).
-- Makes feedback a public board with replies; only admins can heart / complete / hide.

alter table public.feedback add column if not exists parent_id bigint references public.feedback(id) on delete cascade;
alter table public.feedback add column if not exists hearted  boolean not null default false;
alter table public.feedback add column if not exists done     boolean not null default false;
alter table public.feedback add column if not exists hidden   boolean not null default false;
alter table public.feedback add column if not exists by_admin boolean not null default false;

-- Admin list (invisible through the API) + a helper the app can call
create table if not exists public.admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.admins enable row level security;
create or replace function public.is_admin() returns boolean
  language sql stable security definer set search_path = public
  as $$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;
grant execute on function public.is_admin() to anon, authenticated;

-- You become admin (you must have signed in to the app once with this email)
insert into public.admins (user_id)
  select id from auth.users where email = 'epperson.kyron@gmail.com'
  on conflict do nothing;

-- Public read: only safe columns (no user_id / user agent), hidden posts only visible to admins
revoke select on public.feedback from anon, authenticated;
grant select (id, created_at, kind, message, name, parent_id, hearted, done, hidden, by_admin) on public.feedback to anon, authenticated;
drop policy if exists "public read" on public.feedback;
create policy "public read" on public.feedback for select to anon, authenticated
  using (not hidden or public.is_admin());

-- Posting: anyone; can't pre-set admin flags or impersonate
drop policy if exists "anyone can submit" on public.feedback;
create policy "anyone can submit" on public.feedback for insert to anon, authenticated
  with check ((user_id is null or user_id = auth.uid())
              and not hearted and not done and not hidden
              and (not by_admin or public.is_admin()));

-- Moderation: admins only, and only these three columns
revoke update on public.feedback from anon, authenticated;
grant update (hearted, done, hidden) on public.feedback to authenticated;
drop policy if exists "admin moderate" on public.feedback;
create policy "admin moderate" on public.feedback for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

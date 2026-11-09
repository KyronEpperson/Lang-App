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

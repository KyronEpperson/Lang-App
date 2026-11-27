-- Card memory judge: real answer totals, for tuning the starting numbers (docs/HANDOFF.md, "Card memory judge"; iterations.md, entry MEM-3).
-- Read-only, totals only: no names, no emails, no single learner's rows. Run through the Supabase connector (execute_sql) on the Lang-App project.
-- An answer-log row is [time, box before, right, ms to answer, hour, question type (0 picked, 1 typed, 2 "Got it", 3 recall), days since the last answer,
-- forecast, judgement before, weight by speed in %]. Rows with 9 fields or more carry a forecast; rows with 10 timed their question (2.138.0 and later).
-- Tune only when "after_gap" is in the thousands and comes from dozens of learners: on 2026-11-24 it was 0 of 25 answers, on 2026-11-27 7 of 144 (2 learners).
with logs as (
  select user_id, r from public.progress, jsonb_array_elements(case when jsonb_typeof(state->'rlog')='array' then state->'rlog' else '[]'::jsonb end) r
  union all
  select user_id, r from public.progress, jsonb_each(case when jsonb_typeof(state->'_courses')='object' then state->'_courses' else '{}'::jsonb end) c(k,v),
       jsonb_array_elements(case when jsonb_typeof(v->'rlog')='array' then v->'rlog' else '[]'::jsonb end) r
)
select count(*) answers, count(distinct user_id) learners,
  count(*) filter (where jsonb_array_length(r)>8) judged_rows,
  count(*) filter (where jsonb_array_length(r)>8 and (r->>6)::numeric>=0.5) after_gap,
  round(avg((r->>7)::numeric) filter (where jsonb_array_length(r)>8 and (r->>6)::numeric>=0.5),3) mean_forecast,
  round(avg((r->>2)::numeric) filter (where jsonb_array_length(r)>8 and (r->>6)::numeric>=0.5),3) share_right,
  count(*) filter (where jsonb_array_length(r)>8 and (r->>6)::numeric<0) first_answers,
  round(avg((r->>2)::numeric) filter (where jsonb_array_length(r)>8 and (r->>6)::numeric<0),3) first_right,
  count(*) filter (where jsonb_array_length(r)>9) timed_rows,
  count(*) filter (where jsonb_array_length(r)>9 and (r->>9)::numeric<100) counted_slow,
  count(*) filter (where jsonb_array_length(r)>8 and (r->>5)::int=3) recall_questions,
  round(avg((r->>2)::numeric) filter (where jsonb_array_length(r)>8 and (r->>5)::int=3),3) recall_right
from logs;
-- mean_forecast against share_right is the check: within a few points, the starting numbers fit; share_right clearly lower, memories are shorter than assumed
-- (lower MJ_TYPES.*.s0 or start S.mem.q below 1); clearly higher, longer. Move them in src/app.html, then the pinned numbers in tools/tests/memjudge.js on purpose.

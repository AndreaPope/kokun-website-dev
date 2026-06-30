/*
  # Create survey_responses_with_session view

  ## Summary
  The admin download page needs survey_responses joined with its matching
  survey_sessions row (session metadata like last_slide_seen, completion
  status, traffic source). PostgREST can't run raw SQL joins, so this view
  does the join server-side and is queried the same way survey_responses
  already is.

  ## Notes
  - LEFT JOIN, not inner — responses with no matching session row (or a
    null session_id) must still appear in the export.
  - survey_sessions columns that share a name with survey_responses
    (started_at, timezone, browser, device_type, os) are prefixed with
    `session_` to avoid colliding in the JSON/CSV output. utm_source and
    referrer are unique to survey_sessions so they're passed through as-is.
  - Both underlying tables already grant anon SELECT with USING (true)
    (see 20260622_add_select_policy_for_dashboard.sql), so the view needs
    only a SELECT grant to be reachable via the anon key.
*/

CREATE OR REPLACE VIEW survey_responses_with_session AS
SELECT
  sr.*,
  ss.started_at AS session_started_at,
  ss.last_slide_seen AS session_last_slide_seen,
  ss.last_slide_at AS session_last_slide_at,
  ss.timezone AS session_timezone,
  ss.browser AS session_browser,
  ss.device_type AS session_device_type,
  ss.os AS session_os,
  ss.completed AS session_completed,
  ss.utm_source,
  ss.referrer
FROM survey_responses sr
LEFT JOIN survey_sessions ss ON sr.session_id = ss.session_id;

GRANT SELECT ON survey_responses_with_session TO anon;

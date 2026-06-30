/*
  # Add traffic source columns to survey_sessions

  ## Summary
  Captures where a respondent came from when they first arrived at the survey.
  Both fields are recorded once at session creation and never updated.

  ## New Columns (survey_sessions)
  - `utm_source` (text) — value of the ?utm_source= query parameter, if present
    (e.g. "instagram", "whatsapp", "email"). Empty string if no UTM tag in the URL.
  - `referrer` (text) — value of document.referrer at page load.
    Empty string for direct visits, dark social (WhatsApp, iMessage), or
    any source that strips the referrer header.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_sessions' AND column_name = 'utm_source'
  ) THEN
    ALTER TABLE survey_sessions ADD COLUMN utm_source text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_sessions' AND column_name = 'referrer'
  ) THEN
    ALTER TABLE survey_sessions ADD COLUMN referrer text DEFAULT '';
  END IF;
END $$;

/*
  # Add missing survey_responses columns and clean up legacy fields

  ## Summary
  Syncs the database schema to match the current application's surveyData object.

  ## Changes

  ### New Columns
  - `challenges_in_care_other` (text) — Free-text "other" input for the challenges in care
    multi-select question. Was collected in surveyData but had no corresponding DB column.

  ### Notes
  - `work_type` and `work_other` are legacy columns from an earlier single-select
    employment question, now superseded by `work_situation` (text[]) and `work_type_multi`
    (text[]). They are left in place to preserve any historical data.
  - All other columns already exist and are correctly typed.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'challenges_in_care_other'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN challenges_in_care_other text DEFAULT '';
  END IF;
END $$;

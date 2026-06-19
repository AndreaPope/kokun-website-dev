/*
  # Add missing surveyData columns to survey_responses

  ## Summary
  Syncs the database schema to match the current surveyData object in app.js.
  These columns were present in surveyData but missing from the table, causing
  the initial INSERT (in autoSaveProgress) to fail with a 400 error and
  preventing any responses from being recorded.

  ## New Columns
  - `city` (text) — city field from Q2.4
  - `work_situation_other` (text) — free-text "other" for Q2.6a work situation
  - `work_type_multi_other` (text) — free-text "other" for Q2.6b occupation type
  - `comorbidities` (jsonb) — comorbidity selections from Q4
  - `treatments_not_working` (text[]) — treatments that did not work, from Q5b
  - `treatment_not_working_details` (jsonb) — free-text details for Q5b treatments
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'city'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN city text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'work_situation_other'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN work_situation_other text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'work_type_multi_other'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN work_type_multi_other text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'comorbidities'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN comorbidities jsonb DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'treatments_not_working'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN treatments_not_working text[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'treatment_not_working_details'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN treatment_not_working_details jsonb DEFAULT '{}';
  END IF;
END $$;

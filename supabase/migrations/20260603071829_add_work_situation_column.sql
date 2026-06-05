/*
  # Add work_situation column to survey_responses

  ## Summary
  Adds a new column to store responses for the new Q2.6a question:
  "What is your current work or employment situation?" (multi-select).

  ## Changes
  - `survey_responses`
    - New column: `work_situation` (text[]) — stores one or more selected employment
      situation labels from a fixed list (e.g. "Working full-time", "Student", etc.)

  ## Notes
  - No existing columns are modified or removed
  - Defaults to an empty array so existing rows are unaffected
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'work_situation'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN work_situation text[] DEFAULT '{}';
  END IF;
END $$;

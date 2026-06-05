/*
  # Add work_type_multi column to survey_responses

  ## Summary
  The work type question (Q2.6b) has been updated from a single-select to a
  multi-select question with a new set of occupation categories. This migration
  adds a new text array column to store the multi-select responses without
  altering the existing `work_type` text column (preserving historical data).

  ## Changes
  - `survey_responses`
    - New column: `work_type_multi` (text[]) — stores one or more selected
      occupation category labels from the updated Q2.6b question

  ## Notes
  - The existing `work_type` column is left untouched
  - Defaults to an empty array so existing rows are unaffected
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'work_type_multi'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN work_type_multi text[] DEFAULT '{}';
  END IF;
END $$;

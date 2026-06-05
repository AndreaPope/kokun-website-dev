/*
  # Add ethnic background structured fields to survey_responses

  ## Summary
  Adds columns to store the structured multi-select ethnic background response
  introduced in Q2.3a, alongside the existing free-text ethnic_background column
  (now collected in Q2.3b).

  ## New Columns
  - `ethnic_background_categories` (text[]) — Array of selected categories from Q2.3a
  - `ethnic_background_another` (text) — Free-text value when "Another background or identity" is selected
  - `ethnic_background_selfdesc` (text) — Free-text value when "Prefer to self-describe" is selected

  ## Notes
  - No existing data is modified
  - All new columns are nullable with empty defaults
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'ethnic_background_categories'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN ethnic_background_categories text[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'ethnic_background_another'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN ethnic_background_another text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'ethnic_background_selfdesc'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN ethnic_background_selfdesc text DEFAULT '';
  END IF;
END $$;

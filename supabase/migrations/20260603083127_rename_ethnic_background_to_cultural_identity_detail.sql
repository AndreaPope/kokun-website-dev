/*
  # Rename ethnic_background to cultural_identity_detail

  ## Summary
  Renames the `ethnic_background` column in `survey_responses` to `cultural_identity_detail`
  to better reflect the question it captures — an optional free-text follow-up asking
  respondents for more specific detail about their background, ancestry, or cultural identity.

  ## Changes
  - `survey_responses.ethnic_background` → `survey_responses.cultural_identity_detail`
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'ethnic_background'
  ) THEN
    ALTER TABLE survey_responses RENAME COLUMN ethnic_background TO cultural_identity_detail;
  END IF;
END $$;

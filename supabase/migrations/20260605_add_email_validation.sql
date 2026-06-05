/*
  # Add email validation

  ## Summary
  The regex ^[^@\s]+@[^@\s]+\.[^@\s]+$ checks:

  At least one character before @
  Exactly one @
  At least one character after @, a ., and a TLD
  No whitespace anywhere
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'survey_responses_email_check'
  ) THEN
    ALTER TABLE survey_responses
      ADD CONSTRAINT survey_responses_email_check
      CHECK (email IS NULL OR email = '' OR email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$');
  END IF;
END $$;
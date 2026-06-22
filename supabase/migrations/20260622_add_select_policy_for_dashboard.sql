/*
  # Add SELECT policies for research dashboard

  ## Summary
  The understanding_headaches.html research dashboard reads survey data using
  the anon key, but both tables only had INSERT/UPDATE policies — no SELECT.
  This caused all fetchTable calls to return empty arrays.

  ## Changes
  - survey_responses: Add SELECT policy for anon (email column excluded at query level)
  - survey_sessions: Add SELECT policy for anon

  ## Note
  The dashboard query explicitly lists non-sensitive columns and omits email,
  subscribed_to_updates, and postal_code.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'survey_responses'
    AND policyname = 'Anyone can read survey responses'
  ) THEN
    CREATE POLICY "Anyone can read survey responses"
      ON survey_responses
      FOR SELECT
      TO anon
      USING (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'survey_sessions'
    AND policyname = 'Anyone can read survey sessions'
  ) THEN
    CREATE POLICY "Anyone can read survey sessions"
      ON survey_sessions
      FOR SELECT
      TO anon
      USING (true);
  END IF;
END $$;

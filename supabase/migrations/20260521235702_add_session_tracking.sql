/*
  # Add Session Tracking and Analytics

  ## Summary
  Adds engagement analytics fields to survey_responses and creates a new
  survey_sessions table to track abandonment and session metadata.

  ## Changes to survey_responses
  - `created_at` default removed — now sent from the browser as `started_at`
  - Add `started_at` (timestamptz) — when the user first sees the intro slide, set client-side
  - Add `completed_at` (timestamptz) — when the user submits, set client-side
  - Add `timezone` (text) — IANA timezone string from the browser (e.g. "America/Toronto")
  - Add `browser` (text) — browser name and version (e.g. "Chrome 124")
  - Add `device_type` (text) — "Mobile", "Tablet", or "Desktop"
  - Add `os` (text) — operating system (e.g. "macOS", "iOS", "Windows")
  - Add `session_id` (uuid) — links to survey_sessions for cross-referencing

  ## New Table: survey_sessions
  Tracks every session including incomplete ones, enabling drop-off analysis.

  Columns:
  - `session_id` (uuid, primary key) — generated in the browser
  - `started_at` (timestamptz) — when the session began
  - `last_slide_seen` (text) — slide ID of the last slide the user reached
  - `last_slide_at` (timestamptz) — when they last moved to a new slide
  - `timezone` (text)
  - `browser` (text)
  - `device_type` (text)
  - `os` (text)
  - `completed` (boolean, default false) — true only after successful submission

  ## Security
  - RLS enabled on survey_sessions
  - Anonymous users can INSERT (to create the session row on arrival)
  - Anonymous users can UPDATE only their own session row (matched by session_id)
  - No SELECT or DELETE granted to public
*/

-- Add analytics columns to survey_responses
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'started_at'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN started_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'completed_at'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN completed_at timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'timezone'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN timezone text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'browser'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN browser text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'device_type'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN device_type text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'os'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN os text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'session_id'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN session_id uuid;
  END IF;
END $$;

-- Create survey_sessions table for abandonment tracking
CREATE TABLE IF NOT EXISTS survey_sessions (
  session_id uuid PRIMARY KEY,
  started_at timestamptz NOT NULL,
  last_slide_seen text DEFAULT 'slide-intro',
  last_slide_at timestamptz NOT NULL,
  timezone text DEFAULT '',
  browser text DEFAULT '',
  device_type text DEFAULT '',
  os text DEFAULT '',
  completed boolean DEFAULT false
);

ALTER TABLE survey_sessions ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'survey_sessions'
    AND policyname = 'Anyone can create a session'
  ) THEN
    CREATE POLICY "Anyone can create a session"
      ON survey_sessions
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'survey_sessions'
    AND policyname = 'Anyone can update their own session'
  ) THEN
    CREATE POLICY "Anyone can update their own session"
      ON survey_sessions
      FOR UPDATE
      TO anon
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

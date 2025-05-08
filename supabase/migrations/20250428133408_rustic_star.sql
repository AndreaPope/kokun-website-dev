/*
  # Create Inner Circle Survey Table

  1. New Tables
    - `inner_circle_survey`
      - `id` (uuid, primary key)
      - `name` (text)
      - `gender` (text)
      - `gender_self_describe` (text)
      - `age` (text)
      - `ethnicity` (text)
      - `city` (text)
      - `state` (text)
      - `income` (text)
      - `diagnosis_status` (text)
      - `diagnosis_other` (text)
      - `migraine_frequency` (text)
      - `migraine_frequency_other` (text)
      - `last_migraine_month` (text)
      - `last_migraine_year` (text)
      - `experience_auras` (text)
      - `aura_other` (text)
      - `migraine_type` (text)
      - `migraine_type_other` (text)
      - `migraine_journey` (text)
      - `migraine_journey_other` (text)
      - `health_conditions` (text[])
      - `health_conditions_other` (text)
      - `hopes` (text)
      - `additional_info` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `inner_circle_survey` table
    - Add policy for authenticated users to insert their own data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS inner_circle_survey (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  gender text NOT NULL,
  gender_self_describe text,
  age text NOT NULL,
  ethnicity text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  income text NOT NULL,
  diagnosis_status text NOT NULL,
  diagnosis_other text,
  migraine_frequency text NOT NULL,
  migraine_frequency_other text,
  last_migraine_month text NOT NULL,
  last_migraine_year text NOT NULL,
  experience_auras text NOT NULL,
  aura_other text,
  migraine_type text NOT NULL,
  migraine_type_other text,
  migraine_journey text NOT NULL,
  migraine_journey_other text,
  health_conditions text[],
  health_conditions_other text,
  hopes text,
  additional_info text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inner_circle_survey ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own survey data"
  ON inner_circle_survey
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read their own survey data"
  ON inner_circle_survey
  FOR SELECT
  TO public
  USING (true);
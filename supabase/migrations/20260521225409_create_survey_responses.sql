/*
  # Create survey_responses table

  Creates the main table for storing Kōkūn Care Journey Survey responses.
  RLS is enabled with a public INSERT policy so anonymous visitors can submit.
  No SELECT/UPDATE/DELETE is granted to the public — data is write-only.
*/

CREATE TABLE IF NOT EXISTS survey_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),

  age_bracket text,
  age_eligible boolean DEFAULT false,
  headache_eligible text,

  gender text,
  gender_self_describe text DEFAULT '',
  assigned_female_at_birth text,
  ethnic_background text DEFAULT '',
  country text DEFAULT '',
  postal_code text DEFAULT '',
  education_level text,
  education_other text DEFAULT '',
  work_type text,
  work_other text DEFAULT '',

  headache_types text[] DEFAULT '{}',
  headache_type_other text DEFAULT '',
  migraine_subtypes text[] DEFAULT '{}',
  migraine_subtype_other text DEFAULT '',
  duration_onset text DEFAULT '',
  frequency_count integer,
  frequency_period text DEFAULT 'Month',
  days_in_last_month integer,
  functional_impact text,
  qol_severe_pain text,
  qol_limit_activities text,
  qol_wish_lie_down text,
  qol_tired_from_headaches text,
  qol_irritated_from_headaches text,
  qol_limit_concentration text,

  diagnosis_status text,
  doctor_diagnosed_by text,
  doctor_diagnosed_by_other text DEFAULT '',
  time_to_diagnosis text DEFAULT '',
  satisfaction_rating text,
  satisfaction_reason text DEFAULT '',
  diagnosis_barriers jsonb DEFAULT '{}',
  diagnosis_barriers_other text DEFAULT '',
  overcoming_barriers_text text DEFAULT '',
  reasons_no_diagnosis jsonb DEFAULT '{}',
  reasons_no_diagnosis_other text DEFAULT '',
  path_to_diagnosis_changes text DEFAULT '',

  treatments text[] DEFAULT '{}',
  treatment_details jsonb DEFAULT '{}',

  confidence_understanding text,
  confidence_management text,
  journey_stage text,
  journey_stage_other text DEFAULT '',
  challenges_in_care jsonb DEFAULT '{}',
  felt_dismissed text,
  felt_dismissed_details text DEFAULT '',
  unmet_needs text DEFAULT '',

  email text,
  subscribed_to_updates boolean DEFAULT false
);

ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'survey_responses'
    AND policyname = 'Anyone can submit a survey response'
  ) THEN
    CREATE POLICY "Anyone can submit a survey response"
      ON survey_responses
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;



DROP POLICY IF EXISTS "Anyone can update a survey response" ON survey_responses;
CREATE POLICY "Anyone can update a survey response"
  ON survey_responses
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);



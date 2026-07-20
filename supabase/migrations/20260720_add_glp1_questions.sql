/*
  # Add GLP-1 medication questions (Q5c/Q5d) to survey_responses

  ## Summary
  Adds columns for two new treatment-section questions:
  - Q5c: whether the respondent is currently using a GLP-1-based medication
  - Q5d: their reasons for using it (shown only when Q5c = "Yes")

  ## New Columns
  - `glp1_usage` (text) — answer to Q5c ("Yes" / "No" / "I'm not sure" / "Prefer not to answer")
  - `glp1_reasons` (text[]) — selected reasons from Q5d
  - `glp1_reasons_other_condition` (text) — free-text for "manage another health condition" option
  - `glp1_reasons_other_goal` (text) — free-text for "another personal health or wellness goal" option

  ## Changes
  - `save_survey_progress` RPC recreated to include the new columns
*/

-- Add the new columns
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'glp1_usage'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN glp1_usage text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'glp1_reasons'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN glp1_reasons text[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'glp1_reasons_other_condition'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN glp1_reasons_other_condition text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'glp1_reasons_other_goal'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN glp1_reasons_other_goal text DEFAULT '';
  END IF;
END $$;

-- Recreate save_survey_progress to include the new columns.
-- This function is SECURITY DEFINER so it can UPDATE rows without a SELECT policy.
CREATE OR REPLACE FUNCTION save_survey_progress(p_session_id uuid, p_data jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE survey_responses SET
    age_bracket                  = p_data->>'age_bracket',
    age_eligible                 = (p_data->>'age_eligible')::boolean,
    headache_eligible            = p_data->>'headache_eligible',

    gender                       = p_data->>'gender',
    gender_self_describe         = COALESCE(p_data->>'gender_self_describe', ''),
    assigned_female_at_birth     = p_data->>'assigned_female_at_birth',
    ethnic_background_categories = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'ethnic_background_categories', '[]'::jsonb))),
    ethnic_background_another    = COALESCE(p_data->>'ethnic_background_another', ''),
    ethnic_background_selfdesc   = COALESCE(p_data->>'ethnic_background_selfdesc', ''),
    cultural_identity_detail     = COALESCE(p_data->>'cultural_identity_detail', ''),

    country                      = COALESCE(p_data->>'country', ''),
    city                         = COALESCE(p_data->>'city', ''),
    postal_code                  = COALESCE(p_data->>'postal_code', ''),
    education_level              = p_data->>'education_level',
    education_other              = COALESCE(p_data->>'education_other', ''),

    work_situation               = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'work_situation', '[]'::jsonb))),
    work_situation_other         = COALESCE(p_data->>'work_situation_other', ''),
    work_type_multi              = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'work_type_multi', '[]'::jsonb))),
    work_type_multi_other        = COALESCE(p_data->>'work_type_multi_other', ''),
    identity_other_text          = COALESCE(p_data->>'identity_other_text', ''),

    headache_types               = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'headache_types', '[]'::jsonb))),
    headache_type_other          = COALESCE(p_data->>'headache_type_other', ''),
    migraine_subtypes            = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'migraine_subtypes', '[]'::jsonb))),
    migraine_subtype_other       = COALESCE(p_data->>'migraine_subtype_other', ''),
    duration_onset               = COALESCE(p_data->>'duration_onset', ''),
    frequency_count              = NULLIF(p_data->>'frequency_count', '')::integer,
    frequency_period             = COALESCE(p_data->>'frequency_period', 'Month'),
    days_in_last_month           = NULLIF(p_data->>'days_in_last_month', '')::integer,
    functional_impact            = p_data->>'functional_impact',

    qol_severe_pain              = p_data->>'qol_severe_pain',
    qol_limit_activities         = p_data->>'qol_limit_activities',
    qol_wish_lie_down            = p_data->>'qol_wish_lie_down',
    qol_tired_from_headaches     = p_data->>'qol_tired_from_headaches',
    qol_irritated_from_headaches = p_data->>'qol_irritated_from_headaches',
    qol_limit_concentration      = p_data->>'qol_limit_concentration',

    diagnosis_status             = p_data->>'diagnosis_status',
    doctor_diagnosed_by          = p_data->>'doctor_diagnosed_by',
    doctor_diagnosed_by_other    = COALESCE(p_data->>'doctor_diagnosed_by_other', ''),
    time_to_diagnosis            = COALESCE(p_data->>'time_to_diagnosis', ''),
    satisfaction_rating          = p_data->>'satisfaction_rating',
    satisfaction_reason          = COALESCE(p_data->>'satisfaction_reason', ''),
    diagnosis_barriers           = COALESCE(p_data->'diagnosis_barriers', '{}'::jsonb),
    diagnosis_barriers_other     = COALESCE(p_data->>'diagnosis_barriers_other', ''),
    overcoming_barriers_text     = COALESCE(p_data->>'overcoming_barriers_text', ''),
    reasons_no_diagnosis         = COALESCE(p_data->'reasons_no_diagnosis', '{}'::jsonb),
    reasons_no_diagnosis_other   = COALESCE(p_data->>'reasons_no_diagnosis_other', ''),
    comorbidities                = COALESCE(p_data->'comorbidities', '{}'::jsonb),
    path_to_diagnosis_changes    = COALESCE(p_data->>'path_to_diagnosis_changes', ''),

    treatments                   = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'treatments', '[]'::jsonb))),
    treatment_details            = COALESCE(p_data->'treatment_details', '{}'::jsonb),
    treatments_not_working       = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'treatments_not_working', '[]'::jsonb))),
    treatment_not_working_details = COALESCE(p_data->'treatment_not_working_details', '{}'::jsonb),

    glp1_usage                    = p_data->>'glp1_usage',
    glp1_reasons                  = ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_data->'glp1_reasons', '[]'::jsonb))),
    glp1_reasons_other_condition  = COALESCE(p_data->>'glp1_reasons_other_condition', ''),
    glp1_reasons_other_goal       = COALESCE(p_data->>'glp1_reasons_other_goal', ''),

    confidence_understanding     = p_data->>'confidence_understanding',
    confidence_management        = p_data->>'confidence_management',
    journey_stage                = p_data->>'journey_stage',
    journey_stage_other          = COALESCE(p_data->>'journey_stage_other', ''),
    challenges_in_care           = COALESCE(p_data->'challenges_in_care', '{}'::jsonb),
    challenges_in_care_other     = COALESCE(p_data->>'challenges_in_care_other', ''),
    felt_dismissed               = p_data->>'felt_dismissed',
    felt_dismissed_details       = COALESCE(p_data->>'felt_dismissed_details', ''),
    unmet_needs                  = COALESCE(p_data->>'unmet_needs', ''),

    started_at                   = NULLIF(p_data->>'started_at', '')::timestamptz,
    completed_at                 = NULLIF(p_data->>'completed_at', '')::timestamptz,
    timezone                     = COALESCE(p_data->>'timezone', ''),
    browser                      = COALESCE(p_data->>'browser', ''),
    device_type                  = COALESCE(p_data->>'device_type', ''),
    os                            = COALESCE(p_data->>'os', '')
  WHERE session_id = p_session_id;
END;
$$;

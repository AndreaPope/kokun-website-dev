/*
  # Drop unused work columns

  ## Summary
  Removes two columns that were replaced when the work question was split into two:
  - `work_type` — replaced by `work_situation` (multi-select array)
  - `work_other` — replaced by `work_type_multi` (multi-select array)

  Both new columns already exist; these old ones are no longer written to.
*/

ALTER TABLE survey_responses DROP COLUMN IF EXISTS work_type;
ALTER TABLE survey_responses DROP COLUMN IF EXISTS work_other;

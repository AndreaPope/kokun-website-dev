/*
  # Add unique constraint on session_id in survey_responses

  Allows upsert (insert or update) on session_id so partial survey data
  can be saved progressively after each slide, then updated on completion.
*/
ALTER TABLE survey_responses
  ADD CONSTRAINT survey_responses_session_id_key UNIQUE (session_id);

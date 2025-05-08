/*
  # Add email field to inner circle survey

  1. Changes
    - Add email column to inner_circle_survey table
    - Make email required and unique
    - Handle existing records appropriately

  2. Notes
    - Ensures no duplicate empty values
    - Maintains data integrity
*/

DO $$ 
BEGIN
  -- First add the column without constraints
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'inner_circle_survey' 
    AND column_name = 'email'
  ) THEN
    ALTER TABLE inner_circle_survey 
    ADD COLUMN email text;
  END IF;
END $$;

-- Update any existing rows with a unique placeholder email
UPDATE inner_circle_survey 
SET email = 'user_' || id || '@placeholder.com' 
WHERE email IS NULL OR email = '';

-- Now make it NOT NULL
ALTER TABLE inner_circle_survey 
ALTER COLUMN email SET NOT NULL;

-- Add the unique constraint
ALTER TABLE inner_circle_survey 
ADD CONSTRAINT inner_circle_survey_email_unique UNIQUE (email);
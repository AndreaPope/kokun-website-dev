/*
  # Update RLS policies for website_input table

  1. Changes
    - Drop existing policies
    - Create new policies that allow public access for inserts
    - Maintain authenticated user access for select operations

  2. Security
    - Enable public inserts without authentication
    - Maintain read access for authenticated users only
*/

-- First drop existing policies
DROP POLICY IF EXISTS "Allow select on website_input" ON website_input;
DROP POLICY IF EXISTS "Allow insert on website_input" ON website_input;
DROP POLICY IF EXISTS "Users can insert their own data" ON website_input;

-- Create new policies
CREATE POLICY "Enable public insert"
  ON website_input
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users"
  ON website_input
  FOR SELECT
  TO authenticated
  USING (true);
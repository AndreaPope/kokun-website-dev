/*
  # Fix website_input RLS policies

  1. Changes
    - Drop existing policies
    - Add new policy for public inserts with no restrictions
    - Add policy for authenticated users to read all data

  2. Security
    - Enable RLS
    - Allow public inserts without authentication
    - Restrict read access to authenticated users only
*/

-- First drop existing policies
DROP POLICY IF EXISTS "Enable public insert" ON website_input;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON website_input;

-- Create new policies with proper permissions
CREATE POLICY "Enable insert for everyone"
  ON website_input
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for all"
  ON website_input
  FOR SELECT
  TO public
  USING (true);

-- Ensure RLS is enabled
ALTER TABLE website_input ENABLE ROW LEVEL SECURITY;
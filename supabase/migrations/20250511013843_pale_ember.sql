/*
  # Create website input table

  1. New Tables
    - `website_input`
      - `id` (serial, primary key)
      - `email` (varchar, unique)
      - `join_us` (boolean)
      - `pledge` (boolean)
      - `receive_newsletter` (boolean)
      - `pledge_amt` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `website_input` table
    - Add policy for public users to insert data
    - Add policy for authenticated users to read data
*/

DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Allow select on website_input" ON website_input;
  DROP POLICY IF EXISTS "Users can insert their own data" ON website_input;
END $$;

CREATE TABLE IF NOT EXISTS website_input (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  join_us BOOLEAN DEFAULT false,
  pledge BOOLEAN DEFAULT false,
  receive_newsletter BOOLEAN DEFAULT false,
  pledge_amt NUMERIC,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE website_input ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own data"
  ON website_input
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow select on website_input"
  ON website_input
  FOR SELECT
  TO authenticated
  USING (true);
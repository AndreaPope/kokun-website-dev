/*
  # Create Website Input Table

  1. New Tables
    - `website_input`
      - `id` (integer, primary key)
      - `email` (varchar, unique)
      - `join_us` (boolean)
      - `pledge` (boolean)
      - `receive_newsletter` (boolean)
      - `pledge_amt` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `website_input` table
    - Add policy for public users to insert their own data
    - Add policy for authenticated users to read data
*/

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
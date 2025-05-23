/*
  # Fix website_input table and policies

  1. Changes
    - Drop existing policies to avoid conflicts
    - Recreate table with proper constraints
    - Add new policies with proper permissions
    - Enable RLS

  2. Security
    - Enable public insert access
    - Enable authenticated user read access
*/

-- First drop existing policies
DROP POLICY IF EXISTS "Enable public insert" ON website_input;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON website_input;
DROP POLICY IF EXISTS "Users can insert their own data" ON website_input;
DROP POLICY IF EXISTS "Allow select on website_input" ON website_input;

-- Drop and recreate the table
DROP TABLE IF EXISTS website_input;

CREATE TABLE website_input (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  join_us BOOLEAN DEFAULT false,
  pledge BOOLEAN DEFAULT false,
  receive_newsletter BOOLEAN DEFAULT false,
  pledge_amt NUMERIC,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Add unique constraint separately to handle existing data
ALTER TABLE website_input ADD CONSTRAINT website_input_email_unique UNIQUE (email);

-- Enable RLS
ALTER TABLE website_input ENABLE ROW LEVEL SECURITY;

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
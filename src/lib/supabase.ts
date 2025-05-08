import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export type Database = {
  public: {
    Tables: {
      website_input: {
        Row: {
          id: number;
          email: string;
          join_us: boolean;
          pledge: boolean;
          receive_newsletter: boolean;
          pledge_amt: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          email: string;
          join_us?: boolean;
          pledge?: boolean;
          receive_newsletter?: boolean;
          pledge_amt?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          email?: string;
          join_us?: boolean;
          pledge?: boolean;
          receive_newsletter?: boolean;
          pledge_amt?: number | null;
          created_at?: string;
        };
      };
      inner_circle_survey: {
        Row: {
          id: string;
          name: string;
          email: string;
          gender: string;
          gender_self_describe: string | null;
          age: string;
          ethnicity: string;
          city: string;
          state: string;
          income: string;
          diagnosis_status: string;
          diagnosis_other: string | null;
          migraine_frequency: string;
          migraine_frequency_other: string | null;
          last_migraine_month: string;
          last_migraine_year: string;
          experience_auras: string;
          aura_other: string | null;
          migraine_type: string;
          migraine_type_other: string | null;
          migraine_journey: string;
          migraine_journey_other: string | null;
          health_conditions: string[] | null;
          health_conditions_other: string | null;
          hopes: string | null;
          additional_info: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          gender: string;
          gender_self_describe?: string | null;
          age: string;
          ethnicity: string;
          city: string;
          state: string;
          income: string;
          diagnosis_status: string;
          diagnosis_other?: string | null;
          migraine_frequency: string;
          migraine_frequency_other?: string | null;
          last_migraine_month: string;
          last_migraine_year: string;
          experience_auras: string;
          aura_other?: string | null;
          migraine_type: string;
          migraine_type_other?: string | null;
          migraine_journey: string;
          migraine_journey_other?: string | null;
          health_conditions?: string[] | null;
          health_conditions_other?: string | null;
          hopes?: string | null;
          additional_info?: string | null;
          created_at?: string;
        };
      };
    };
  };
};

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export interface WebsiteInput {
  id?: number;
  email: string;
  join_us: boolean;
  pledge: boolean;
  receive_newsletter: boolean;
  pledge_amt?: number;
  created_at?: string;
}

export async function submitWebsiteInput(input: WebsiteInput) {
  const { data, error } = await supabase
    .from('website_input')
    .insert([{
      email: input.email,
      join_us: input.join_us,
      pledge: input.pledge,
      receive_newsletter: input.receive_newsletter,
      pledge_amt: input.pledge_amt,
    }])
    .select();

  if (error) {
    console.error('Error submitting to Supabase:', error);
    throw error;
  }

  return data;
}

export async function submitInnerCircleSurvey(input: Database['public']['Tables']['inner_circle_survey']['Insert']) {
  const { data, error } = await supabase
    .from('inner_circle_survey')
    .insert([input])
    .select();

  if (error) {
    console.error('Error submitting survey to Supabase:', error);
    throw error;
  }

  return data;
}

// Test connection function
export async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('inner_circle_survey')
      .select('id')
      .limit(1);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Supabase connection test failed:', error);
    return false;
  }
}
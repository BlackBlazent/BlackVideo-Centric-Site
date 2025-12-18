// src/lib/supabaseClient.ts 
import { createClient } from '@supabase/supabase-js';

// Get environment variables 
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key not found in environment variables.');
}

// Initialize and EXPORT the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// DELETE all other code that was mistakenly included here.
// src/dev/utils/joinWaitlist.ts

// CORRECT: Only IMPORT the client from the dedicated file.
import { supabase } from '../../lib/supabaseClient'; 

/**
 * Inserts a new email into the waitlist_entries table.
 * @param email The email address to join the waitlist.
 * @returns true on success, false on failure (e.g., duplicate email, database error).
 */
export async function joinWaitlist(email: string): Promise<boolean> {
  const { error } = await supabase
    .from('waitlist_entries')
    .insert([{ email: email.toLowerCase() }]);

  if (error) {
    console.error('Waitlist submission failed:', error.message);
    
    if (error.code === '23505') { // PostgreSQL code for unique violation
        console.warn('Email already exists in waitlist.');
        return true; 
    }

    return false;
  }

  return true;
}

// DELETE the conflicting client initialization code that was here:
/*
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 
*/
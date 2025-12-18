// src/utils/subscribe.ts
// Ensure the path to supabaseClient is correct based on your project structure
import { supabase } from '../../lib/supabaseClient'; 

/**
 * Inserts a new email into the newsletter_subscribers table.
 * @param email The email address to subscribe.
 * @returns true on success, false on failure (e.g., duplicate email, database error).
 */
export async function subscribeToNewsletter(email: string): Promise<boolean> {
  // Basic validation (can be enhanced with regex)
  if (!email || !email.includes('@')) {
    console.error('Invalid email provided for subscription.');
    return false;
  }
    
  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email: email.toLowerCase() }]);

  if (error) {
    console.error('Subscription submission failed:', error.message);
    
    // Handle specific errors like duplicate key (if user already subscribed)
    if (error.code === '23505') { // PostgreSQL code for unique violation
        console.warn(`Email ${email} is already subscribed.`);
        // For UX, treat duplicate insertion as a success since the user is subscribed.
        return true; 
    }

    return false;
  }

  return true;
}
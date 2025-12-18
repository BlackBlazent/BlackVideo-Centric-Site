// Import the existing initialized client from your lib folder
import { supabase } from '../../lib/supabaseClient'; 

export interface SupportData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Submits a support ticket to the Supabase 'support_tickets' table.
 * Uses the pre-configured supabaseClient.
 */
export async function submitSupportTicket(data: SupportData) {
  const { error } = await supabase
    .from('support_tickets')
    .insert([
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }
    ]);

  if (error) {
    console.error('Supabase Insertion Error:', error.message);
    throw error;
  }
  
  return { success: true };
}
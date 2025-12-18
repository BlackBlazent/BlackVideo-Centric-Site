// ./utils/visitCounter.ts

import { supabase } from '../../lib/supabaseClient'; // Assuming path: src/lib/supabaseClient.ts

// Get the excluded IP from environment variables
const excludedIp = import.meta.env.VITE_EXCLUDED_IP;

/**
 * Gets the user's current public IP address.
 * Uses a free public service (ipify.org) to determine the IP.
 * @returns {Promise<string | null>} The IP address or null if fetching fails.
 */
async function getClientIp(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) throw new Error('Failed to fetch IP');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error getting client IP:", error);
    return null;
  }
}

/**
 * Updates the visitor count in the database based on the client's IP.
 * Checks if the IP is excluded or already exists.
 * @returns {Promise<boolean>} True if the visit was processed (new or repeat), False if there was an error.
 */
async function processVisit(clientIp: string): Promise<boolean> {
  if (clientIp === excludedIp) {
    console.log("Visit excluded: Matches developer IP.");
    return true; // Still return true, successfully processed the exclusion
  }

  // 1. Check if the visitor already exists
  const { data: existingVisitor, error: fetchError } = await supabase
    .from('visitors')
    .select('visit_count')
    .eq('ip_address', clientIp)
    .single();

  if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 means "No rows found"
    console.error('Error checking existing visitor:', fetchError.message);
    return false;
  }

  if (existingVisitor) {
    // 2. Visitor exists: Update last_visited and increment count
    const { error: updateError } = await supabase
      .from('visitors')
      .update({ last_visited: new Date().toISOString() })
      .eq('ip_address', clientIp);
      // NOTE: We rely on Supabase to handle the counting in this simple setup.
      // If we wanted to count 'page views' vs 'unique visitors', we'd use RPC.

    if (updateError) {
      console.error('Error updating existing visitor:', updateError.message);
      return false;
    }
    console.log("Returning visitor updated.");
  } else {
    // 3. New visitor: Insert new entry
    const { error: insertError } = await supabase
      .from('visitors')
      .insert([{ ip_address: clientIp }]);

    if (insertError) {
      console.error('Error inserting new visitor:', insertError.message);
      // Handle unique constraint violation just in case of race condition
      if (insertError.code === '23505') { 
        return true; 
      }
      return false;
    }
    console.log("New unique visitor counted.");
  }
  return true;
}

/**
 * Fetches the total count of unique visitors.
 * @returns {Promise<number>} The total unique visitor count.
 */
export async function getLiveVisitCount(): Promise<number> {
  const { count, error } = await supabase
    .from('visitors')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error('Error fetching visitor count:', error.message);
    return 0;
  }

  // Subtract 1 if the developer IP is the excluded IP and is present in the database.
  // This is a simple client-side exclusion for transparency.
  let finalCount = count || 0;
  if (excludedIp) {
    const { count: excludedCount } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true })
      .eq('ip_address', excludedIp);
    
    if (excludedCount && excludedCount > 0) {
      finalCount -= 1;
    }
  }
  
  return Math.max(0, finalCount);
}

/**
 * The main function to call when the component loads.
 * @returns {Promise<void>}
 */
export async function initializeVisitCounter(): Promise<void> {
  const ip = await getClientIp();
  if (ip) {
    await processVisit(ip);
  }
}
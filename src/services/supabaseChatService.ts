// src/services/supabaseChatService.ts
import { supabase } from '../lib/supabaseClient'; // Ensure this path is correct
import { ChatMessage } from '../../types'; // Assuming your ChatMessage type is available

// Defines the structure of the data in the Supabase table
interface DBSavedMessage {
    user_id: string; // The user ID retrieved from auth.uid()
    role: 'user' | 'model';
    content: string;
}

/**
 * Loads the chat history for the current authenticated user.
 * @param userId The ID of the authenticated user.
 * @returns An array of ChatMessage objects.
 */
export async function loadChatHistory(userId: string): Promise<ChatMessage[]> {
    if (!userId) return [];

    const { data, error } = await supabase
        .from('ai_chat_history')
        .select('role, content, created_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error loading chat history:', error);
        return [];
    }

    // Map DB data to your application's ChatMessage format
    return data.map((msg: any, index: number) => ({
        id: `db-${index}-${msg.created_at}`,
        role: msg.role,
        text: msg.content,
        timestamp: new Date(msg.created_at)
    }));
}

/**
 * Saves a new message (both user and model) to the Supabase database.
 * @param userId The ID of the authenticated user.
 * @param role The role of the sender ('user' or 'model').
 * @param text The message content.
 */
export async function saveMessage(userId: string, role: 'user' | 'model', text: string): Promise<void> {
    if (!userId) return;

    const message: DBSavedMessage = {
        user_id: userId,
        role: role,
        content: text,
    };

    const { error } = await supabase
        .from('ai_chat_history')
        .insert([message]);

    if (error) {
        console.error('Error saving message:', error);
    }
}
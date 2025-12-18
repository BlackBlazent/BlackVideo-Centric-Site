// src/services/geminiService.ts

import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { 
    BLACKVIDEO_KNOWLEDGE_BASE, 
    ZEPHYRA_SYSTEM_INSTRUCTION 
} from '../lib/dataAppModule'; 
import { HistoryContent } from '../../types'; 

// 1. Declare aiClient instance outside of function
let aiClientInstance: GoogleGenAI | null = null;

/**
 * Public function to set the initialized AI client. Called from index.tsx.
 * @param {GoogleGenAI} client The initialized GoogleGenAI client.
 */
export const initializeAIClient = (client: GoogleGenAI | null) => {
    aiClientInstance = client;
    console.log(`AI Client initialized: ${client !== null}`);
};


export const streamChatResponse = async (
  message: string, 
  history: HistoryContent[], 
  onChunk: (text: string) => void
): Promise<string> => {
    // 2. Check the globally set instance
    if (!aiClientInstance) {
        onChunk("Error: AI client is not configured or initialized.");
        return "";
    }
  
    // Combine the core instruction with the product knowledge base
    const finalSystemInstruction = 
        ZEPHYRA_SYSTEM_INSTRUCTION + "\n\n" + BLACKVIDEO_KNOWLEDGE_BASE;

    try {
        const chat: Chat = aiClientInstance.chats.create({ // <-- Use aiClientInstance here
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: finalSystemInstruction, 
            },
            history: history
        });

        const result = await chat.sendMessageStream({ message });
        
        let fullText = "";
        for await (const chunk of result) {
            const c = chunk as GenerateContentResponse;
            if (c.text) {
                fullText += c.text;
                onChunk(c.text);
            }
        }
        return fullText;

    } catch (error) {
        console.error("Gemini API Error:", error);
        onChunk("\n[Connection Error: Unable to reach Zephyra AI core]");
        return "";
    }
};
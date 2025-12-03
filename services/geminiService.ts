import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Fallback for dev, but strictly from env in prod

let aiClient: GoogleGenAI | null = null;

// Initialize the client only if the key exists
if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

export const streamChatResponse = async (
  message: string, 
  history: { role: 'user' | 'model', parts: [{ text: string }] }[],
  onChunk: (text: string) => void
): Promise<string> => {
  if (!aiClient) {
    onChunk("Error: API Key not configured.");
    return "";
  }

  try {
    const chat: Chat = aiClient.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: "You are Zephyra, the AI assistant for BlackVideo. You are helpful, futuristic, and concise. You help users with video playback issues, extension recommendations, and FFmpeg commands.",
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

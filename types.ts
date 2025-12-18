import { LucideIcon } from 'lucide-react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

// types.ts (or wherever you define your types)

// This represents a standard message part structure for the Gemini API
export type ContentPart = {
    text: string;
    // Add other properties like inlineData if needed later
};

// This represents the history structure expected by the API
export type HistoryContent = {
    role: 'user' | 'model';
    parts: ContentPart[]; // <-- Crucial: make this a standard array (ContentPart[])
};

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: 'Greetings. I am Zephyra. How can I assist you with BlackVideo today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const tempId = Date.now().toString() + '-temp';
    setMessages(prev => [...prev, { id: tempId, role: 'model', text: '', timestamp: new Date() }]);

    let responseText = '';
    
    await streamChatResponse(userMsg.text, history, (chunk) => {
        responseText += chunk;
        setMessages(prev => prev.map(m => m.id === tempId ? { ...m, text: responseText } : m));
    });

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="mb-4 w-[350px] h-[500px] glass-panel rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-cyan-500/20 animate-float"
          style={{ animation: 'none' }} // Override global float
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-black/40 flex justify-between items-center backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-neon-cyan" />
              <span className="font-mono text-sm font-bold text-neon-cyan">ZEPHYRA AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-white text-gray-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-neon-cyan/10 border border-neon-cyan/20 text-cyan-100' 
                    : 'bg-white/5 border border-white/10 text-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.text === '' && (
                <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <Loader2 className="w-4 h-4 animate-spin text-neon-cyan" />
                    </div>
                </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/40 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about features, extensions..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan/50 placeholder-gray-500"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="p-2 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan rounded-lg transition-colors border border-neon-cyan/20 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-black border border-neon-cyan/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center text-neon-cyan hover:scale-110 transition-transform duration-300 group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default AIChatWidget;
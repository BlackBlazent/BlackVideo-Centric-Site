import React from 'react';
import { LifeBuoy, MessageSquare, Book, Mail } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-mono font-bold text-white mb-8">SUPPORT CENTER</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
         {/* Main Support Options */}
         <div className="glass-panel p-8 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="bg-neon-cyan/20 p-3 rounded-lg text-neon-cyan">
               <Book className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
               <p className="text-gray-400">Comprehensive guides for setup, configuration, and advanced scripting.</p>
            </div>
         </div>

         <div className="glass-panel p-8 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="bg-neon-purple/20 p-3 rounded-lg text-neon-purple">
               <MessageSquare className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-xl font-bold text-white mb-2">Community Forums</h3>
               <p className="text-gray-400">Join the discussion on Discord or Reddit. Share themes and get help.</p>
            </div>
         </div>
      </div>
      <div style={{marginBottom: '10px'}} className="bg-white/5 p-8 rounded-xl border border-white/10">
       <h3 className="font-bold mb-4">Contact Us</h3>
       <form className="space-y-4">
          <input type="email" placeholder="Your Email" className="w-full bg-black border border-white/10 p-3 rounded-lg text-sm text-white focus:border-cyan-500 outline-none" />
          <textarea placeholder="How can we help?" rows={4} className="w-full bg-black border border-white/10 p-3 rounded-lg text-sm text-white focus:border-cyan-500 outline-none"></textarea>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200">Send Message</button>
       </form>
    </div>
      <div className="glass-panel p-10 rounded-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />
         
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
               <h2 className="text-3xl font-bold text-white mb-4">Talk to Zephyra AI</h2>
               <p className="text-gray-300 mb-6">
                 Need instant help? Our custom Gemini-powered AI agent is trained on the entire documentation and codebase of BlackVideo.
                 Click the chat bubble in the bottom right corner or ask here directly.
               </p>
               <button className="px-6 py-3 bg-neon-cyan text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                 Open Assistant
               </button>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-black/50 rounded-xl border border-white/10 flex items-center justify-center">
               <span className="text-gray-500 font-mono text-sm">[ AI Visualizer Placeholder ]</span>
            </div>
         </div>
      </div>

      <div className="mt-12 text-center border-t border-white/10 pt-8">
         <p className="text-gray-500 mb-4">Still need human assistance?</p>
         <a href="mailto:support@blackvideo.io" className="inline-flex items-center gap-2 text-white hover:text-neon-cyan transition-colors">
            <Mail className="w-4 h-4" /> support@blackvideo.io
         </a>
      </div>
    </div>
  );
};

export default Support;
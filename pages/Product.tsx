import React from 'react';
import { Terminal, Command, Film, Layers, Key, Globe, Lock } from 'lucide-react';

const Product: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="space-y-4">
         <h1 className="text-5xl font-bold font-mono text-neon-cyan">CORE TECHNOLOGY</h1>
         <p className="text-xl text-gray-400">Under the hood of Zephyra.</p>
      </div>

      {/* FFmpeg Engine */}
      <section className="glass-panel rounded-2xl p-10 flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Film className="text-neon-purple" /> 
              Powered by FFmpeg 6.0
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We've integrated a custom-compiled version of FFmpeg directly into the playback engine. 
              This allows for real-time transcoding, filter application, and format conversion without touching the command line.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2 items-center"><span className="w-2 h-2 bg-neon-purple rounded-full"/> 10-bit HDR Tone Mapping</li>
              <li className="flex gap-2 items-center"><span className="w-2 h-2 bg-neon-purple rounded-full"/> Frame-perfect seeking</li>
              <li className="flex gap-2 items-center"><span className="w-2 h-2 bg-neon-purple rounded-full"/> Hardware decoding (NVDEC/QuickSync)</li>
            </ul>
         </div>
         <div className="flex-1 w-full bg-black/50 rounded-lg border border-white/10 p-4 font-mono text-sm text-green-400 shadow-2xl">
            <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p>$ zephyra --hwaccel cuda -i movie.mkv</p>
            <p className="text-gray-500"> Initializing CUDA context...</p>
            <p className="text-gray-500"> Mapping video stream #0:0 - #0:0 (hevc - h264)</p>
            <p className="text-gray-500"> Playback started. Latency: 2ms</p>
            <span className="animate-pulse">_</span>
         </div>
      </section>

      {/* AI Tools */}
      <section className="grid md:grid-cols-2 gap-8">
         <div className="glass-panel p-8 rounded-xl border-l-4 border-neon-cyan">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Command className="text-neon-cyan"/> AI Ask
            </h3>
            <p className="text-gray-400 mb-6">
              Context-aware assistant built into the player. Ask "Who is this actor?" or "What song is playing?" and get instant answers powered by Gemini or Ollama.
            </p>
            <div className="flex gap-2">
               <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Gemini 1.5</span>
               <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Ollama</span>
               <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Local LLM</span>
            </div>
         </div>
         <div className="glass-panel p-8 rounded-xl border-l-4 border-neon-purple">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="text-neon-purple"/> Multi-Account Auth
            </h3>
            <p className="text-gray-400 mb-6">
              Connect your streaming accounts once. Browse YouTube, Vimeo, TikTok, and Facebook feeds directly within Zephyra without ads or tracking scripts.
            </p>
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs">
                    {i === 1 && 'Y'}
                    {i === 2 && 'V'}
                    {i === 3 && 'T'}
                    {i === 4 && 'F'}
                 </div>
               ))}
            </div>
         </div>
         {/* Dev Tools */}
  {/* Built-in Terminal */}
  <div className="glass-panel p-8 rounded-xl border-l-4 border-green-500">
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <Terminal className="text-green-500" /> Built-in Terminal
    </h3>
    <p className="text-gray-400 mb-6">
      Control FFmpeg flags directly. Script automation tasks using Lua or JS.
    </p>
    <div className="flex gap-2 flex-wrap">
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">FFmpeg</span>
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Lua</span>
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">JavaScript</span>
    </div>
  </div>

  {/* Network Streamer */}
  <div className="glass-panel p-8 rounded-xl border-l-4 border-blue-500">
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <Globe className="text-blue-500" /> Network Streamer
    </h3>
    <p className="text-gray-400 mb-6">
      Cast local files to DLNA/UPnP devices or stream to friends securely.
    </p>
    <div className="flex gap-2 flex-wrap">
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">DLNA</span>
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">UPnP</span>
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Secure Stream</span>
    </div>
  </div>

  {/* Encrypted Vault */}
  <div className="glass-panel p-8 rounded-xl border-l-4 border-red-500">
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <Lock className="text-red-500" /> Encrypted Vault
    </h3>
    <p className="text-gray-400 mb-6">
      Password-protect folders. AES-256 encryption for sensitive libraries.
    </p>
    <div className="flex gap-2 flex-wrap">
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">AES-256</span>
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Password Lock</span>
      <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs">Secure Storage</span>
    </div>
  </div>

      </section>

      {/* Integrations */}
      <section className="glass-panel p-10 rounded-2xl text-center">
         <Key className="w-12 h-12 text-white mx-auto mb-6" />
         <h2 className="text-3xl font-bold mb-4">API First Architecture</h2>
         <p className="text-gray-400 max-w-2xl mx-auto mb-8">
           Developers can tap into Zephyra's core via the local WebSocket API. Control playback, query metadata, or inject overlays from your own scripts.
         </p>
         <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors">
           Read Developer Docs
         </button>
      </section>

    </div>
  );
};

export default Product;
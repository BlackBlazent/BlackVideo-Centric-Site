import React, { useState } from 'react';
import { Search, Filter, Star, DownloadCloud, Plus } from 'lucide-react';
import { Extension } from '../types';

const mockExtensions: Extension[] = [
  { id: '1', name: 'Neon Glow Theme', developer: 'PixelArt', rating: 4.8, downloads: '12k', category: 'Theme', image: 'https://picsum.photos/400/200?random=1' },
  { id: '2', name: 'Auto-Translate Pro', developer: 'LinguaSoft', rating: 4.5, downloads: '8k', category: 'Plugin', image: 'https://picsum.photos/400/200?random=2' },
  { id: '3', name: 'Cinema Mode', developer: 'ViewMaster', rating: 4.9, downloads: '25k', category: 'Extension', image: 'https://picsum.photos/400/200?random=3' },
  { id: '4', name: 'Spotify Connect', developer: 'MusicLover', rating: 4.2, downloads: '5k', category: 'Tool', image: 'https://picsum.photos/400/200?random=4' },
  { id: '5', name: 'Retro VHS Effect', developer: 'Nostalgia', rating: 4.7, downloads: '3k', category: 'Theme', image: 'https://picsum.photos/400/200?random=5' },
  { id: '6', name: 'Discord Presence', developer: 'GamerX', rating: 4.6, downloads: '50k', category: 'Tool', image: 'https://picsum.photos/400/200?random=6' },
];

const Marketplace: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? mockExtensions : mockExtensions.filter(e => e.category === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-mono font-bold text-white mb-2">EXTENSIONS</h1>
          <p className="text-gray-400">Customize Zephyra to your exact needs.</p>
        </div>
        
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                Documentation
              </button>
           <button className="bg-neon-cyan text-black px-4 py-2 rounded font-bold text-sm hover:bg-cyan-400">
             Create Extension
           </button>
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-bold hover:bg-cyan-500 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Submit Extension
              </button>
           <button className="glass-panel px-4 py-2 rounded text-sm hover:bg-white/10">
             My Library
           </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="glass-panel p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4">
         <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search extensions, themes, plugins..." 
              className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-neon-cyan/50"
            />
         </div>
         <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Theme', 'Extension', 'Plugin', 'Tool'].map(cat => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${filter === cat ? 'bg-white text-black font-bold' : 'bg-white/5 text-gray-400 hover:text-white'}`}
               >
                 {cat}
               </button>
            ))}
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(ext => (
          <div key={ext.id} className="glass-panel rounded-xl overflow-hidden group hover:border-neon-cyan/30 transition-all">
             <div className="h-40 overflow-hidden relative">
                <img src={ext.image} alt={ext.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white">
                  {ext.category}
                </div>
             </div>
             <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                   <div>
                     <h3 className="font-bold text-lg text-white group-hover:text-neon-cyan transition-colors">{ext.name}</h3>
                     <p className="text-xs text-gray-500">by {ext.developer}</p>
                   </div>
                   <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Star className="w-3 h-3 fill-yellow-400" /> {ext.rating}
                   </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5">
                   <div className="text-xs text-gray-400 flex items-center gap-1">
                      <DownloadCloud className="w-3 h-3" /> {ext.downloads}
                   </div>
                   <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors text-white">
                      Install
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
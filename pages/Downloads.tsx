import React, { useState, useEffect } from 'react';
import { Download, Monitor, Smartphone, Command, Terminal, Activity } from 'lucide-react';
import { DownloadOption } from '../types';

const downloads: DownloadOption[] = [
  { os: 'Windows', version: '2.0.4', size: '145 MB', hash: 'SHA-256: 8a...9f', count: 850120, icon: Monitor },
  { os: 'macOS', version: '2.0.4', size: '132 MB', hash: 'SHA-256: 3b...2c', count: 320400, icon: Command },
  { os: 'Linux', version: '2.0.4', size: '98 MB', hash: 'SHA-256: 1f...5a', count: 150200, icon: Terminal },
  { os: 'Android', version: '2.0.4', size: '45 MB', hash: 'SHA-256: 9e...1d', count: 50200, icon: Smartphone },
];

const Downloads: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Initialize counts
    const initialCounts: { [key: string]: number } = {};
    downloads.forEach(d => initialCounts[d.os] = d.count);
    setCounts(initialCounts);

    let timeoutId: ReturnType<typeof setTimeout>;

    const simulateDownloads = () => {
      setCounts(prev => {
        const next = { ...prev };
        downloads.forEach(d => {
          // Increment by random amount between 1 and 5
          const increment = Math.floor(Math.random() * 5) + 1;
          next[d.os] = (next[d.os] || d.count) + increment;
        });
        return next;
      });

      // Schedule next update between 1s (1000ms) and 3s (3000ms)
      const delay = Math.floor(Math.random() * 2000) + 1000;
      timeoutId = setTimeout(simulateDownloads, delay);
    };

    // Start simulation
    timeoutId = setTimeout(simulateDownloads, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
       <div className="mb-12">
         <h1 className="text-4xl font-mono font-bold text-white mb-2">GET ZEPHYRA</h1>
         <p className="text-gray-400">Choose your platform. All versions include the full feature set.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((item) => (
            <div key={item.os} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all group relative overflow-hidden flex flex-col">
               <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <item.icon className="w-24 h-24" />
               </div>
               
               <div className="relative z-10 flex-1">
                 <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-4 text-neon-cyan">
                   <item.icon className="w-6 h-6" />
                 </div>
                 
                 <h3 className="text-xl font-bold text-white">{item.os}</h3>
                 <div className="text-sm text-gray-500 mb-6">v{item.version} • {item.size}</div>
                 
                 <div className="space-y-4">
                    <button className="w-full py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" /> Download
                    </button>
                    
                    <div className="text-[10px] text-gray-600 font-mono break-all bg-black/20 p-2 rounded">
                       {item.hash}
                    </div>
                 </div>
               </div>

               <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-neon-purple animate-pulse" />
                    Total Downloads
                  </span>
                  <span className="font-mono font-bold text-neon-cyan transition-all duration-300">
                    {(counts[item.os] || item.count).toLocaleString()}
                  </span>
               </div>
            </div>
          ))}
       </div>

       <div className="mt-12 p-6 rounded-xl border border-dashed border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Looking for legacy versions or nightly builds? <a href="#" className="text-neon-cyan underline">Visit the Archive</a>.
          </p>
       </div>
    </div>
  );
};

export default Downloads;
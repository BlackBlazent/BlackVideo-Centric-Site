import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Shield, Grid, Cpu, Globe, Download } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  { id: '1', title: 'Advanced Playback', description: 'Supports AV1, HEVC, VP9 natively with 0 frame drops.', icon: Play },
  { id: '2', title: 'Lightning Fast', description: 'Built on Rust + GPU acceleration for instant startup.', icon: Zap },
  { id: '3', title: 'Privacy First', description: 'No telemetry. Local-only metadata processing.', icon: Shield },
  { id: '4', title: 'Extension Core', description: 'Write plugins in JS/WASM. Infinite extensibility.', icon: Grid },
  { id: '5', title: 'AI Enhanced', description: 'Real-time upscaling and subtitle generation.', icon: Cpu },
  { id: '6', title: 'Global Sync', description: 'Watch together with friends, p2p encrypted.', icon: Globe },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Abstract gradient blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-mono tracking-widest mb-4">
                v2.0 EARLY ACCESS LIVE
             </span>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-2 font-mono">
                BLACKVIDEO
             </h1>
             <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                Black: Versatile Integrated Demi Empowerment Optimum.
                <br/>The last video player you'll ever need.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Zephyra
            </button>
            <button className="px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5 mt-12">
            <div>
               <div className="text-3xl font-mono font-bold text-white">1.2M+</div>
               <div className="text-sm text-gray-500 uppercase tracking-wider">Downloads</div>
            </div>
            <div>
               <div className="text-3xl font-mono font-bold text-neon-purple">450+</div>
               <div className="text-sm text-gray-500 uppercase tracking-wider">Extensions</div>
            </div>
            <div>
               <div className="text-3xl font-mono font-bold text-neon-cyan">4.9/5</div>
               <div className="text-sm text-gray-500 uppercase tracking-wider">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold font-mono mb-4">POWERFUL FEATURES</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need for the ultimate video playback experience, wrapped in a beautiful frosted glass interface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-xl hover:border-neon-cyan/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-gray-300 group-hover:text-neon-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center">COMMUNITY LOVE</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl relative">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600" />
                   <div>
                     <div className="text-white font-bold">User #{1092 + i}</div>
                     <div className="text-xs text-neon-cyan">Verified User</div>
                   </div>
                </div>
                <p className="text-gray-300 italic">"Zephyra completely changed how I consume media. The AI subtitles are eerily accurate and the performance is unmatched."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 text-center relative z-10">
         <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />
         <h2 className="text-5xl font-bold text-white mb-8 font-mono">Ready to upgrade?</h2>
         <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors">
           Join Early Access
         </button>
      </section>
    </div>
  );
};

export default Home;
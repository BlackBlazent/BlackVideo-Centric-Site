import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ParticleBackground from './components/ParticleBackground';
import AIChatWidget from './components/AIChatWidget';
import Home from './pages/Home';
import Product from './pages/Product';
import Downloads from './pages/Downloads';
import Marketplace from './pages/Marketplace';
import Support from './pages/Support';
import { Check, Menu } from 'lucide-react';

import './src/App.css'
import { PricingTier } from './types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex min-h-screen font-sans text-slate-200">
      <ParticleBackground />
      
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col relative z-10 min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 glass-panel border-b border-white/10 flex items-center px-4 sticky top-0 z-30">
           <button onClick={() => setSidebarOpen(true)} className="p-2 text-white">
             <Menu className="w-6 h-6" />
           </button>
           <span className="ml-4 font-mono font-bold text-white">ZEPHYRA</span>
        </header>

        <main className="flex-1 pb-20">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                &copy; 2024 BlackBlazent. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                 <a href="#" className="hover:text-white">Privacy Policy</a>
                 <a href="#" className="hover:text-white">Terms of Service</a>
                 <a href="#" className="hover:text-white">Open Source</a>
              </div>
           </div>
        </footer>
      </div>

      <AIChatWidget />
    </div>
  );
};

// Pricing tiers data
const pricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/month',
    highlighted: false,
    features: [
      'Basic video playback',
      'Standard definition (720p)',
      'Community support',
      'Basic analytics'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    highlighted: true,
    features: [
      'HD video (1080p)',
      'No ads',
      'Priority support',
      'Advanced analytics',
      'Custom branding',
      'API access'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlighted: false,
    features: [
      '4K & HDR support',
      'Dedicated account manager',
      'SLA & 24/7 support',
      'Custom integrations',
      'White-label solution',
      'Advanced security'
    ]
  }
];

const Pricing = () => (
  <div className="space-y-12 max-w-6xl mx-auto text-center p-4">
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
      <p className="text-gray-400">Core features are free forever. Pro supports development.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingTiers.map((tier) => (
        <div key={tier.id} className={`relative p-8 rounded-2xl border flex flex-col ${tier.highlighted ? 'bg-cyan-900/10 border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-900/20' : 'bg-white/5 border-white/10'}`}>
          {tier.highlighted && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>}
          <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
          <div className="text-4xl font-bold mb-1">{tier.price}<span className="text-sm font-normal text-gray-500">{tier.period}</span></div>
          <p className="text-sm text-gray-500 mb-8">Best for {tier.name.toLowerCase()} users</p>
          <ul className="space-y-4 mb-8 flex-1 text-left">
            {tier.features.map((f, i) => (
              <li key={`${tier.id}-feature-${i}`} className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-4 h-4 text-cyan-500" />
                {f}
              </li>
            ))}
          </ul>
          <button className={`w-full py-3 rounded-lg font-bold transition-all ${tier.highlighted ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'bg-white/10 text-white hover:bg-white/20'}`}>
            Choose {tier.name}
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Changelog = () => (
  <div className="p-8 max-w-3xl mx-auto">
     <h1 className="text-4xl font-bold text-white mb-8">Release Notes</h1>
     <div className="space-y-8">
        <div className="glass-panel p-6 rounded-xl">
           <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold text-neon-cyan">v2.0.4 - Zephyra</h2><span className="text-sm text-gray-500">Oct 24, 2023</span></div>
           <ul className="list-disc list-inside space-y-2 text-gray-300">
             <li>Added AI Subtitles generator using Gemini Flash.</li>
             <li>Fixed HEVC decoding on Linux Wayland.</li>
             <li>New frosted glass theme engine.</li>
           </ul>
        </div>
     </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
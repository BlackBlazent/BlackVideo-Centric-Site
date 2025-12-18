import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { 
  Sparkles, 
  Bug, 
  Zap, 
  Shield,
  Calendar,
  ChevronDown,
  RefreshCw,
  Trash2,
  AlertCircle
} from 'lucide-react';

const releases = [
  {
    version: 'v1.1.01.001.0001',
    date: 'February 15, 2026',
    type: 'minor',
    changes: [
      { type: 'feature', text: 'Multi-layered playback control system with modular accessories and extensions' },
{ type: 'feature', text: 'Extension-driven playback enhancements and accessory integration' },
{ type: 'feature', text: 'Built-in AI Chat assistant for contextual playback assistance' },
{ type: 'feature', text: 'Screen capture and video recording directly from the player' },
{ type: 'feature', text: 'Link-based video player supporting direct media URLs' },
{ type: 'feature', text: 'OCR-powered video text recognition for on-screen content' },
{ type: 'feature', text: 'Playback heatmap graph showing engagement and seek activity' },
{ type: 'feature', text: 'Advanced streaming engine with adaptive buffering' },
{ type: 'feature', text: 'Platform authorization system for fetching and playing online videos' },
{ type: 'feature', text: 'Supported platforms include YouTube, Facebook, TikTok, Vimeo, and more' },
{ type: 'feature', text: 'Secure platform-based authentication and content handling' },
{ type: 'feature', text: 'Sprite-based preview thumbnails for timeline scrubbing' },
{ type: 'feature', text: 'Layered fullscreen modes with enhanced playback controls' },
{ type: 'feature', text: 'In-app fullscreen mode with advanced playback UI' },
{ type: 'feature', text: 'Native system fullscreen support' },
{ type: 'feature', text: 'Built-in terminal for advanced commands and debugging' },
{ type: 'feature', text: 'Integrated folder manager for organizing video libraries' },
{ type: 'feature', text: 'Picture-in-Picture (PiP) mode across all supported platforms' },
{ type: 'feature', text: 'Fully customizable keyboard shortcuts with profile support' },
{ type: 'feature', text: 'Smart resume playback from last watched position' },
{ type: 'feature', text: 'Advanced subtitle support with multiple tracks, styling, and synchronization' },
{ type: 'feature', text: 'Playback speed presets with fine-grained speed control' },
{ type: 'feature', text: 'Audio track switching with channel normalization' },
{ type: 'feature', text: 'Mini-player mode for multitasking and background viewing' },

      { type: 'fix', text: 'Fixed intermittent flickering in fullscreen mode' },
      { type: 'improvement', text: 'Optimized memory usage during 4K playback' },
      { type: 'bug', text: 'Resolved crashing issue on low-end devices' },
      { type: 'remove', text: 'Legacy flash-based fallback support removed' },
    ],
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'feature': return <Sparkles className="w-4 h-4 text-green-500" />;
    case 'improvement': return <Zap className="w-4 h-4 text-blue-500" />;
    case 'fix': case 'bug': return <Bug className="w-4 h-4 text-orange-500" />;
    case 'security': return <Shield className="w-4 h-4 text-red-500" />;
    case 'change': return <RefreshCw className="w-4 h-4 text-purple-500" />;
    case 'remove': return <Trash2 className="w-4 h-4 text-gray-500" />;
    default: return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
  }
};

const ReleaseCard = ({ release }: { release: typeof releases[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Group changes by type
  const groupedChanges = release.changes.reduce((acc, change) => {
    if (!acc[change.type]) acc[change.type] = [];
    acc[change.type].push(change);
    return acc;
  }, {} as Record<string, typeof release.changes>);

  return (
    <div className="glass-card relative overflow-hidden transition-all duration-500">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h2 className="font-display text-2xl font-bold">{release.version}</h2>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">
          {release.type.toUpperCase()}
        </span>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <Calendar className="w-4 h-4" />
        <span>{release.date}</span>
      </div>

      {/* Collapsible Area */}
      <div 
        className={`relative transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[2000px]' : 'max-h-[320px] overflow-hidden'
        }`}
      >
        <div className="space-y-8">
          {Object.entries(groupedChanges).map(([type, items]) => (
            <div key={type} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1 mb-3">
                {type}s
              </h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {getTypeIcon(item.type)}
                    <span className="text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gradient Fade Overlay when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 py-2 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border-t border-border/50"
      >
        {isExpanded ? 'Show Less' : `Show All ${release.changes.length} Changes`}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

const Changelog = () => {
  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-title mb-4">
              Release <span className="gradient-text">Notes</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Latest features, improvements, and fixes from our development team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {releases.map((release, index) => (
              <div key={release.version} className="relative pl-8 pb-12 last:pb-0">
                {index !== releases.length - 1 && (
                  <div className="absolute left-[11px] top-8 w-0.5 h-full bg-border" />
                )}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <ReleaseCard release={release} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
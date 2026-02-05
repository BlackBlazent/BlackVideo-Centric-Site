import React from 'react';

const PHASES = [
  {
    id: "01",
    label: "Version: 1.1.01.001.0001",
    months: "Jan - Feb",
    title: "Phase One: Foundation",
    description: "Initial build and core video player architecture. Focusing on BlackVideo System implementation.",
    status: "Active",
    builds: ["Roadmap Architecture", "Daily Discipline System", "Core Player Engine"]
  },
  {
    id: "02",
    label: "Codename: Zephyra",
    months: "Mar - Apr",
    title: "Phase Two: Execution",
    description: "Deep integration of the SoloFounder Execution Board. Stress testing the media pipeline and high-load scenarios.",
    status: "Queue",
    builds: ["Execution Board Sync", "Gantt Chart Automation", "Media Pipeline Stress"]
  },
  {
    id: "03",
    label: "Video Platform: BlackVideo",
    months: "May - Jun",
    title: "Phase Three: Release",
    description: "Initial release in May followed by the Official Public Launch in June. Finalizing the Product Roadmap 2026.",
    status: "Planned",
    builds: ["Initial Release (May)", "Official Launch (June)", "Public Scale-Up"]
  }
];

const COUNTRIES = [
  { name: "United States", code: "us" },
  { name: "Japan", code: "jp" },
  { name: "Germany", code: "de" },
  { name: "South Korea", code: "kr" },
  { name: "Netherlands", code: "nl" },
  { name: "Sweden", code: "se" },
  { name: "Finland", code: "fi" },
  { name: "Canada", code: "ca" },
  { name: "Singapore", code: "sg" },
  { name: "Estonia", code: "ee" },
];

export default function ExclusiveLaunchTemplate() {
  return (
    <section className="w-full py-24 bg-transparent text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Technical Style */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center space-x-2 text-primary font-mono text-xs tracking-widest uppercase">
            <span className="h-[1px] w-8"></span> {/*bg-primary*/}
            <span></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
            EXCLUSIVE RELEASE
          </h2>
          <p style={{ textAlign: 'center' }} className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-6 italic md:text-2xl"> {/*max-w-xl*/}
            Targeting innovation-friendly regions to establish a high-signal feedback loop. 
            We prioritize capability and technical depth over mass-market simplicity.
          </p>
        </div>

        {/* Marquee - Fixed Flag Rendering */}
        <div className="relative flex overflow-x-hidden border-y border-border/50 py-12 mb-24">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...COUNTRIES, ...COUNTRIES].map((country, i) => (
              <div key={i} className="flex items-center mx-12 space-x-6 group cursor-crosshair min-w-max">
                <div className="relative w-24 h-14 bg-muted/20 flex-shrink-0">
                  <img 
                    src={`https://flagcdn.com/${country.code}.svg`} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9] border border-border transition-all group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter"></span>
                  <span className="text-sm font-bold tracking-tight uppercase">{country.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Grid - Data Centric */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
      {PHASES.map((phase, index) => (
        <div 
          key={phase.id} 
          className="feature-card glass-card group cursor-pointer transition-all duration-500 p-8 relative 
                     hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border border-border rounded-2xl bg-card/30 backdrop-blur-sm flex flex-col"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Stacked Header Metadata to prevent text breaking */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span style={{display: 'none'}} className={`h-2.5 w-2.5 rounded-full ${phase.status === 'Active' ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`} />
              <span className="text-base font-mono font-medium text-primary uppercase tracking-tight">
                {phase.label}
              </span>
            </div>
            <div>
              <span className={`text-[10px] font-mono border px-3 py-1 uppercase tracking-[0.2em] rounded-full inline-block ${
                phase.status === 'Active' ? 'border-primary/50 text-primary bg-primary/5' : 'border-border text-muted-foreground'
              }`}>
                {phase.months}
              </span>
            </div>
          </div>

          {/* Typography: Standard font-display & semi-bold */}
          <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-primary transition-colors tracking-tight text-foreground">
            {phase.title}
          </h3>
          <p className="text-muted-foreground mb-8 text-[15px] leading-relaxed font-normal min-h-[80px]">
            {phase.description}
          </p>

          {/* Build Status List (Standard Text Style) */}
          <div className="space-y-3 mb-10 flex-grow">
            <div className="flex flex-col gap-2">
              {phase.builds.map((build) => (
                <div 
                  key={build} 
                  className="text-sm bg-muted/20 px-4 py-3 border border-border/40 flex justify-between items-center rounded-lg group-hover:border-primary/20 transition-all"
                >
                  <span className="text-foreground/80 font-medium">{build}</span>
                  <span className="text-[10px] font-mono opacity-30">#{phase.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hover Interaction */}
          <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 mt-auto">
            <span className="uppercase tracking-widest">Explore Phase</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 group-hover:translate-x-1 transition-transform">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>

          {/* Background ID (Clean & Large) */}
          <span className="absolute bottom-6 right-8 font-display text-8xl font-bold opacity-[0.02] group-hover:opacity-[0.05] pointer-events-none select-none transition-opacity">
            {phase.id}
          </span>
        </div>
      ))}
    </div>

        {/* Platform Verification */}
        <div style={{ display: 'none' }} className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-border pt-8 space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {['Windows', 'macOS', 'Linux'].map((os) => (
              <div key={os} className="flex items-center space-x-2">
                <div className="h-1 w-1 bg-primary rounded-full shadow-[0_0_4px_var(--glow-primary)]"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest">{os}</span>
              </div>
            ))}
          </div>
          <span className="text-[10px] font-mono text-muted-foreground uppercase italic tracking-wider">
            *Mobile builds (Android) excluded from initial validation phase
          </span>
        </div>

      </div>
    </section>
  );
}
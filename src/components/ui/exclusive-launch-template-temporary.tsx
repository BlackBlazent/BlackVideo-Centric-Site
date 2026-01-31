import React from 'react';

const PHASES = [
  {
    id: "01",
    title: "Closed Beta Validation",
    months: "Month 1–2",
    description: "Low-noise feedback loop focusing on core performance and workflow stability in developer-centric regions.",
    countries: ["Estonia", "Finland", "Netherlands"],
    status: "Active"
  },
  {
    id: "02",
    title: "Engineering Stress Test",
    months: "Month 3–4",
    description: "Testing deep media pipeline capabilities and high-load scenarios within robust technical markets.",
    countries: ["Germany", "Japan", "Sweden"],
    status: "Queue"
  },
  {
    id: "03",
    title: "Market Scale-Up",
    months: "Month 5+",
    description: "Phased deployment to high-visibility creative hubs and professional power-user communities.",
    countries: ["USA", "Canada", "S. Korea", "Singapore"],
    status: "Planned"
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
            <span className="h-[1px] w-8 bg-primary"></span>
            <span>Deployment Event v1.0.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
            EXCLUSIVE RELEASE
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed border-l border-border pl-6 italic">
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
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">Loc_ID</span>
                  <span className="text-sm font-bold tracking-tight uppercase">{country.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Grid - Data Centric */}
        <div className="grid lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden">
          {PHASES.map((phase) => (
            <div key={phase.id} className="bg-background p-8 group hover:bg-card/50 transition-colors relative">
              <div className="flex justify-between items-center mb-10">
                <span className="font-mono text-3xl opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all leading-none">
                  {phase.id}
                </span>
                <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase tracking-widest">
                  [{phase.months}]
                </span>
              </div>
              
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{phase.title}</h3>
              <p className="text-sm text-muted-foreground mb-8 min-h-[60px] leading-relaxed">
                {phase.description}
              </p>

              <div className="space-y-3">
                <p className="text-[10px] font-mono uppercase text-primary tracking-widest">Active_Regions</p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.countries.map((c) => (
                    <span key={c} className="text-[10px] font-mono bg-muted/50 px-2 py-1 border border-border">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Verification */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-border pt-8 space-y-4 md:space-y-0">
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
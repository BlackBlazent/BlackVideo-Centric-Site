import React from 'react';

export default function EmbedHosted() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      {/* Perspective Wrapper */}
      <div className="relative [perspective:2000px] group">
        
        {/* Technical Label - Top Right */}
        <div className="absolute -top-10 right-0 flex items-center space-x-4 opacity-40 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Auth_Session: 882-KV</span>
          <div className="h-[1px] w-12 bg-primary"></div>
        </div>

        {/* The Embed Container with 3D Tilt Effect */}
        <div className="relative w-full aspect-video rounded-[var(--radius)] 
                        bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))] 
                        shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]
                        transition-all duration-700 ease-out
                        group-hover:[transform:rotateX(2deg)_rotateY(-1deg)]
                        group-hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.2)]
                        group-hover:border-primary/40">
          
          {/* Internal Border (Visual Depth) */}
          <div className="absolute inset-2 border border-border/30 rounded-[calc(var(--radius)-4px)] pointer-events-none z-10" />

          {/* Canva Iframe */}
          <iframe
            loading="lazy"
            title="BlackVideo Design System"
            className="absolute inset-0 w-full h-full border-none rounded-[var(--radius)] grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
            src="https://www.canva.com/design/DAG91iOorVs/O1sty6MuocTfNvKLGMi6Xw/view?embed"
            allowFullScreen
            allow="fullscreen"
          />

          {/* HUD Overlay - Only visible when not hovering iframe */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
             <div className="flex justify-between items-start">
                <span className="text-[8px] font-mono text-primary bg-primary/10 px-1 border border-primary/20">SYS_VIEW_PORT</span>
                <span className="text-[8px] font-mono text-primary bg-primary/10 px-1 border border-primary/20">ENC_V2</span>
             </div>
          </div>
        </div>

        {/* Footer Navigation Logic */}
        <div className="mt-8 grid grid-cols-2 items-end border-t border-border/40 pt-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full shadow-[0_0_8px_var(--glow-primary)]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">
                Live_Design_Buffer
              </span>
            </div>
            <p className="text-[9px] text-muted-foreground font-mono italic">
              Validated Technical Prototype // Revision_04
            </p>
          </div>
          
          <div className="text-right">
             <a 
              href="https://www.canva.com/design/DAG91iOorVs/O1sty6MuocTfNvKLGMi6Xw/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center text-[10px] font-mono uppercase tracking-[0.2em] text-primary"
            >
              <span className="mr-2">Inspect_Full_System</span>
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
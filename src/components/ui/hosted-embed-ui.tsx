import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

{/*Core: Architecture*/}
{/*Logic: Multi-Tool*/}
{/*Performance: Ultra*/}
{/*Library: Smart*/}
{/*AI: Context*/}
{/*Stage: Primary*/}
{/*API: Open*/}
{/*Market: Community*/}
{/*Platform: Sync*/}
const FEATURES = [
  { id: "01", label: "", category: "Introduction", title: "The Next-Gen Video OS", description: "AI-powered playback meets developer-grade control. Designed for 10-bit color accuracy.", image: "/assets/mockups/temp.banner.png" }, 
  { id: "02", label: "", category: "Summary", title: "All-in-One Powerhouse", description: "Seamless integration of AI chat, playback utilities, extensions, and a built-in terminal.", image: "/assets/mockups/temp.banner.png" }, 
  { id: "03", label: "", category: "Lightweight", title: "Lightning Fast Playback", description: "Zero-bloat architecture optimized for instant 4K and 8K streaming without buffering.", image: "/assets/mockups/temp.banner.png" }, 
  { id: "04", label: "", category: "Codecs", title: "Native Support", description: "H.265, AV1, and HDR content play natively. No additional codec packs required.", image: "/assets/mockups/temp.banner.png" }, 
  { id: "05", label: "", category: "Management", title: "Intelligent Organization", description: "Automated media tagging and history synchronization across all your connected devices.", image: "/assets/mockups/temp.banner.png" },
  { id: "06", label: "", category: "Assisted", title: "Ask Zephyra AI", description: "An integrated assistant that understands your content and provides instant insights.", image: "/assets/mockups/temp.banner.png" },
  { id: "07", label: "", category: "Playground", title: "Main Theater Stage", description: "The core viewing environment with customizable skins and advanced hardware acceleration.", image: "/assets/mockups/temp.banner.png" },
  { id: "08", label: "", category: "Extensions", title: "Modular System", description: "Extend your experience with custom playback accessories and unique user-built tools.", image: "/assets/mockups/temp.banner.png" },
  { id: "09", label: "", category: "Marketplace", title: "Extension Marketplace", description: "Discover and install community-driven themes and power-user utilities with one click.", image: "/assets/mockups/temp.banner.png" },
  { id: "10", label: "", category: "Cross-Platform", title: "Native Everywhere", description: "Experience consistent performance on Windows, macOS, Linux, and mobile platforms.", image: "/assets/mockups/temp.banner.png" },
  { 
  id: "11", 
  label: "", 
  category: "MCP AI Integration", 
  title: "Model Context Protocol", 
  description: "Connect BlackVideo to MCP servers to enable deep filesystem search, automated metadata fetching, and AI-driven library management.", 
  image: "/assets/mockups/temp.banner.png" 
}
];

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax for the large image
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="feature-card glass-card group cursor-pointer transition-all duration-500 p-8 relative 
                 hover:shadow-2xl border border-border rounded-2xl bg-card/30 backdrop-blur-sm flex flex-col mb-24 max-w-6xl mx-auto"
    >
      {/* 1. Header Metadata (Using your Phase Grid style) */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span style={{display: 'none'}} className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-base font-mono font-medium text-primary uppercase tracking-tight">
            {feature.label}
          </span>
        </div>
        <div>
          <span className="text-[30px] font-mono border border-primary/50 text-primary bg-primary/5 px-3 py-1 uppercase tracking-[0.2em] rounded-full inline-block">
            {feature.category}
          </span>
        </div>
      </div>

      {/* 2. Standard Typography */}
      <h3 className="font-display text-4xl font-semibold mb-4 group-hover:text-primary transition-colors tracking-tight text-foreground">
        {feature.title}
      </h3>
      <p className="text-muted-foreground mb-10 text-lg leading-relaxed font-normal"> {/*max-w-3xl*/}
        {feature.description}
      </p>

      {/* 3. Big Image Container (Fixed responsive breaking) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border shadow-inner bg-background">
        <motion.div style={{ y }} className="relative h-[120%] w-full">
          <img
          style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%'}} 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 transition-transform duration-500 ease-in-out hover:scale-125 transform"
          />
        </motion.div>
        
        {/* Subtle Internal Overlay (HUD style but clean) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* 4. Background ID (Large & Clean) */}
      <span className="absolute top-8 right-12 font-display text-9xl font-bold opacity-[0.02] group-hover:opacity-[0.05] pointer-events-none select-none transition-opacity">
        {feature.id}
      </span>
    </motion.div>
  );
}

export default function FeaturesShowcase() {
  return (
    <div className="w-full py-20 px-6"> {/*bg-background*/}
      {/* Section Introduction */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-mono text-primary tracking-[0.3em] text-[20px] uppercase">System_Capabilities</h2>
          <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter">Experience the Platform.</h1>
        </div>
      </div>

      <div className="space-y-12">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}
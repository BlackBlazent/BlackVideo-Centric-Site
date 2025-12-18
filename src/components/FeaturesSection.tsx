import { useEffect, useRef, useState } from 'react';
import { 
  Play, 
  Zap, 
  Settings, 
  Puzzle, 
  Shield, 
  Sparkles,
  ChevronRight 
} from 'lucide-react';

const features = [
  {
    icon: Play,
    title: 'Advanced Playback',
    description: 'Smooth playback with full codec and format support. Experience crystal-clear video quality.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for instant loading and seamless streaming. No buffering, no waiting.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Settings,
    title: 'Customizable Controls',
    description: 'Fully personalized player interface. Make it yours with themes, layouts, and shortcuts.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Puzzle,
    title: 'Extension System',
    description: 'Modular ecosystem for limitless expansion. Install extensions from the marketplace.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Built-in encryption and zero-tracking policy. Your data stays with you.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Auto-subtitles, smart recommendations, and AI utilities. The future of video playback.',
    gradient: 'from-indigo-500 to-violet-500',
  },
];

const FeaturesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need for the ultimate video playback experience. Built for power users, loved by everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`feature-card glass-card group cursor-pointer transition-all duration-500 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

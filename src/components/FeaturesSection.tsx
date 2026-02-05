import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const features = [
  {
    icon: 'https://cdn-icons-png.freepik.com/256/11491/11491762.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Theater Stage Playback',
    description: 'Central video player with custom hover utilities, ambient mode, and video flipping capabilities.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/15947/15947030.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: '12 Playground Modes',
    description: 'Specialized modes: Theater, Movie, Performance, Smooth, Audio, Music Video, Worship, Preach, Live, Study, and Custom.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/10812/10812728.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Advanced Controls',
    description: 'Precise playback speed, frame rate sync, bitrate adjustment, resolution switching, and aspect ratio controls.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/1055/1055675.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Interactive Heatmap',
    description: 'YouTube-style engagement graph showing watch patterns, replay zones, and video analytics on timeline.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/17600/17600703.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Custom Playback Utilities',
    description: 'Skip intro/outro, sleep timer, ambient mode, video flip, screen cast, and save/share functionality.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/226/226902.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Accessories System',
    description: 'AI Chat Assistant, Magnifying Glass, Frame Capture, Video Recorder, OCR text extraction, and link player.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/13891/13891886.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Extensions Framework',
    description: 'VS Code-inspired extension system with marketplace support for limitless playback customization.',
    gradient: 'from-indigo-500 to-cyan-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/10473/10473283.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Playback Controls Suite',
    description: 'Timeline scrubbing, closed captions, skip elements, picture-in-picture, and dual fullscreen modes.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/16453/16453852.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Smart Navigation',
    description: 'Previous/next controls, playback looping, volume controls with visual feedback, and restart functionality.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/740/740845.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Performance Modes',
    description: 'Optimized for smooth playback, reduced resource usage, and high-frame-rate content support.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/17963/17963033.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Display Management',
    description: 'Native and in-app fullscreen modes, picture-in-picture support, and aspect ratio adjustments.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: 'https://cdn-icons-png.freepik.com/256/16937/16937211.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_hybrid',
    title: 'Intelligent Playback',
    description: 'AI-powered auto-subtitles, smart recommendations, and contextual playback enhancements.',
    gradient: 'from-green-500 to-blue-500',
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
            Advanced <span className="gradient-text">Playback Features</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need for professional video playback: specialized modes, precise controls, AI enhancements, and extensible tools.
          </p>
        </div>

        {/* Features Grid - Updated to 4 columns for better display of 12 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`feature-card glass-card group cursor-pointer transition-all duration-500 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <img src={feature.icon} alt={feature.title} className="w-6 h-6 object-contain transition-colors" />
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
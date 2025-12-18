import { Link } from 'react-router-dom';
import { Play, Download, ChevronRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Early Access Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Early Access Available</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Main Headline */}
          <h1
            className={`section-title mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block">Black</span>
            <span className="gradient-text glow-text">Video</span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-2xl md:text-3xl font-display font-light text-muted-foreground mb-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Next-Gen Video Player
          </p>

          {/* Description */}
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-foreground font-medium">B</span>lack:{' '}
            <span className="text-foreground font-medium">V</span>ersatile{' '}
            <span className="text-foreground font-medium">I</span>ntegrated{' '}
            <span className="text-foreground font-medium">D</span>emi{' '}
            <span className="text-foreground font-medium">E</span>mpowerment{' '}
            <span className="text-foreground font-medium">O</span>ptimum — Player.
            <br />
            Experience advanced playback tools, intelligent utilities, and a powerful modular extension system.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link to="/download" className="btn-neon flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Now
            </Link>
            <button className="btn-ghost-glow flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Hero Visual */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden gradient-border">
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-card rounded-xl overflow-hidden relative">
                {/* Mock Video Player UI */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 cursor-pointer hover:scale-110 hover:bg-primary/30 transition-all group">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Mock Player Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">2:34 / 7:21</span>
                  </div>
                </div>
                
                {/* Mock Sidebar */}
                <div className="absolute top-4 right-4 glass rounded-lg p-3 space-y-2">
                  <div className="w-6 h-6 rounded bg-primary/20" />
                  <div className="w-6 h-6 rounded bg-muted" />
                  <div className="w-6 h-6 rounded bg-muted" />
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

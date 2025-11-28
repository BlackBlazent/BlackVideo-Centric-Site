import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Codename: Zephyra</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">BlackVideo</span>
            <br />
            <span className="text-foreground">Next-Gen Video Player</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Black: Versatile Integrated Demi Empowerment Optimum—Player. 
            Experience advanced playback tools, intelligent utilities, and a modular extension system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 hover-glow group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/20 hover:bg-white/10">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            {[
              { value: "1M+", label: "Downloads" },
              { value: "500+", label: "Extensions" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Play, Zap, Settings, Puzzle, Shield, Sparkles } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Play,
      title: "Advanced Playback",
      description: "Smooth playback with support for all major video formats and codecs",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for instant loading and seamless streaming",
    },
    {
      icon: Settings,
      title: "Customizable Controls",
      description: "Tailor your viewing experience with fully customizable player controls",
    },
    {
      icon: Puzzle,
      title: "Extension System",
      description: "Enhance functionality with a powerful modular extension ecosystem",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays yours with built-in privacy protection and encryption",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Intelligent features like auto-subtitles and smart recommendations",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate video playback experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300 hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <feature.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { 
  Play, 
  Cpu, 
  Sparkles, 
  Terminal, 
  Youtube, 
  Film,
  MessageSquare,
  Subtitles,
  Lightbulb,
  Link2,
  Users,
  Globe
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Cpu,
    title: 'Powered by FFmpeg',
    description: 'Industry-standard media processing engine for universal format support and professional-grade playback.',
  },
  {
    icon: Terminal,
    title: 'Built-in Terminal',
    description: 'Advanced command-line interface for power users. Execute custom scripts and automate workflows.',
  },
  {
    icon: Globe,
    title: 'Multi-Platform Streaming',
    description: 'Native integration with major streaming platforms for seamless content access.',
  },
];

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Ask',
    description: 'Connect via custom API key or Ollama for intelligent video analysis and Q&A.',
  },
  {
    icon: Subtitles,
    title: 'AI Subtitles',
    description: 'Automatic subtitle generation with multi-language support and speaker detection.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Recommendations',
    description: 'AI-powered content suggestions based on your viewing preferences and history.',
  },
];

const platforms = [
  { name: 'YouTube', icon: Youtube },
  { name: 'Vimeo', icon: Film },
  { name: 'TikTok', icon: Play },
  { name: 'Facebook', icon: Users },
  { name: 'VK', icon: Link2 },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-6">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Powered by FFmpeg</span>
            </div>
            <h1 className="section-title mb-4">
              Professional <span className="gradient-text">Video Tools</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Experience the most advanced video player with AI-powered features, 
              streaming integrations, and a modular extension system.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {mainFeatures.map((feature) => (
              <div key={feature.title} className="glass-card group">
                <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* AI Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">AI-Powered</span> Intelligence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leverage cutting-edge AI for enhanced video experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 mb-4">
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                        <feature.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Integrations */}
          <div className="glass-card">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">
                Multi-Account Authorization
              </h2>
              <p className="text-muted-foreground">
                Connect your streaming accounts for unified access
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-muted/50 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all cursor-pointer"
                >
                  <platform.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Categories */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <h3 className="font-display text-xl font-bold mb-4">Playback Features</h3>
              <ul className="space-y-3">
                {[
                  'Universal format support via FFmpeg',
                  '4K HDR playback with HDR10+',
                  'Variable speed playback (0.25x - 4x)',
                  'Frame-by-frame navigation',
                  'A-B loop for sections',
                  'Picture-in-Picture mode',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-display text-xl font-bold mb-4">Extension Ecosystem</h3>
              <ul className="space-y-3">
                {[
                  'Themes and visual customization',
                  'Audio visualizers and effects',
                  'Subtitle enhancement tools',
                  'Streaming service plugins',
                  'Automation and macros',
                  'Developer APIs and SDKs',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;

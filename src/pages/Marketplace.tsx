import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { 
  Search, 
  Star, 
  Download, 
  Palette, 
  Puzzle, 
  Plug, 
  Package,
  Code2,
  Filter,
  ChevronDown,
  Plus
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', icon: Package },
  { id: 'themes', name: 'Themes', icon: Palette },
  { id: 'extensions', name: 'Extensions', icon: Puzzle },
  { id: 'plugins', name: 'Plugins', icon: Plug },
  { id: 'addons', name: 'Add-ons', icon: Plus },
  { id: 'devtools', name: 'Dev Tools', icon: Code2 },
];

const extensions = [
  {
    id: 1,
    name: 'Neon Dreams Theme',
    developer: 'ThemeCraft',
    category: 'themes',
    rating: 4.9,
    reviews: 1250,
    downloads: '45K+',
    description: 'A stunning cyberpunk-inspired dark theme with neon accents.',
    featured: true,
  },
  {
    id: 2,
    name: 'Audio Visualizer Pro',
    developer: 'VisualFX',
    category: 'extensions',
    rating: 4.8,
    reviews: 890,
    downloads: '32K+',
    description: 'Beautiful real-time audio visualizations for your videos.',
    featured: true,
  },
  {
    id: 3,
    name: 'Subtitle Enhancer',
    developer: 'SubLab',
    category: 'plugins',
    rating: 4.7,
    reviews: 2100,
    downloads: '78K+',
    description: 'Advanced subtitle styling and positioning controls.',
    featured: true,
  },
  {
    id: 4,
    name: 'Stream Downloader',
    developer: 'MediaTools',
    category: 'addons',
    rating: 4.6,
    reviews: 3200,
    downloads: '120K+',
    description: 'Download videos from supported streaming platforms.',
    featured: false,
  },
  {
    id: 5,
    name: 'Extension DevKit',
    developer: 'BlackVideo',
    category: 'devtools',
    rating: 4.9,
    reviews: 450,
    downloads: '12K+',
    description: 'Official development toolkit for creating extensions.',
    featured: false,
  },
  {
    id: 6,
    name: 'Minimal Dark',
    developer: 'CleanUI',
    category: 'themes',
    rating: 4.8,
    reviews: 780,
    downloads: '28K+',
    description: 'Clean and minimal dark theme for focused viewing.',
    featured: false,
  },
];

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExtensions = extensions.filter((ext) => {
    const matchesCategory = activeCategory === 'all' || ext.category === activeCategory;
    const matchesSearch = ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ext.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredExtensions = extensions.filter((ext) => ext.featured);

  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="section-title mb-4">
              Extension <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Discover themes, extensions, and tools to enhance your BlackVideo experience.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search extensions, themes, plugins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl glass border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 hover:bg-muted text-foreground'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Section */}
          {activeCategory === 'all' && !searchQuery && (
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-6">Featured</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredExtensions.map((ext) => (
                  <div
                    key={ext.id}
                    className="glass-card group hover:border-primary/50 transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Featured
                    </div>
                    
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4" />
                    
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {ext.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      by {ext.developer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {ext.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{ext.rating}</span>
                        <span className="text-muted-foreground text-sm">
                          ({ext.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Download className="w-4 h-4" />
                        {ext.downloads}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Extensions Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold">
                {activeCategory === 'all' ? 'All Extensions' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Filter className="w-4 h-4" />
                Sort by
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExtensions.map((ext) => (
                <div
                  key={ext.id}
                  className="glass-card group hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/50 to-secondary/50 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold truncate">
                        {ext.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {ext.developer}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 mb-4 line-clamp-2">
                    {ext.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{ext.rating}</span>
                    </div>
                    <button className="btn-ghost-glow text-sm px-4 py-1.5">
                      Install
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer CTA */}
          <div className="mt-20 glass-card text-center max-w-3xl mx-auto">
            <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold mb-2">
              Build Your Own Extensions
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join our developer community and create extensions for millions of BlackVideo users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon">Create Extension</button>
              <button className="btn-ghost-glow">View Documentation</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;

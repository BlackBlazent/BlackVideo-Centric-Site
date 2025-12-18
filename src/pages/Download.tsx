import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { trackDownload, getOfficialLink, streamStats } from '../dev/utils/downloads.live';
import { Download as DownloadIcon, Shield, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const platforms = [
  { name: 'Windows', icon: 'https://cdn-icons-png.freepik.com/512/732/732225.png', version: 'v1.1.0', size: '64.2 MB', sha: 'e3b0c442...', requirements: 'Windows 10/11 (64-bit)', primary: true },
  { name: 'macOS', icon: 'https://cdn-icons-png.freepik.com/512/11745/11745627.png', version: 'v1.1.0', size: '58.7 MB', sha: 'a4d55a3b...', requirements: 'macOS 11+ (Intel & Apple)', primary: true },
  { name: 'Linux', icon: 'https://cdn-icons-png.freepik.com/512/6124/6124995.png', version: 'v1.1.0', size: '61.4 MB', sha: 'b2c3d4e5...', requirements: 'Ubuntu, Fedora, Arch', primary: true },
  { name: 'iOS', icon: 'https://cdn-icons-png.freepik.com/512/831/831278.png', version: 'v1.1.0', size: '42.1 MB', primary: false },
  { name: 'Android', icon: 'https://cdn-icons-png.freepik.com/512/214/214490.png', version: 'v1.1.0', size: '38.9 MB', primary: false },
];

const DownloadPage = () => {
  const [showHash, setShowHash] = useState<string | null>(null);
  const [btnState, setBtnState] = useState<{ [key: string]: string }>({});
  const [liveData, setLiveData] = useState<any>(null);

  useEffect(() => {
    const sub = streamStats((data) => setLiveData(data));
    return () => { supabase.removeChannel(sub); };
  }, []);

  const handleDownload = async (platformName: string) => {
    if (btnState[platformName]) return;

    setBtnState(prev => ({ ...prev, [platformName]: 'Downloading...' }));

    // 1. Start DB Tracking
    trackDownload(platformName);

    // 2. Simulate Progress UI
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setBtnState(prev => ({ ...prev, [platformName]: `${progress}%` }));

      if (progress >= 100) {
        clearInterval(interval);
        setBtnState(prev => ({ ...prev, [platformName]: 'Done!' }));

        // 3. Trigger actual file download
        window.location.href = getOfficialLink();

        setTimeout(() => setBtnState(prev => ({ ...prev, [platformName]: '' })), 3000);
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-title mb-4">
              Download <span className="gradient-text">BlackVideo</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Available for all major platforms. Free forever with optional Pro features.
            </p>
          </div>

          {/* Primary Platforms */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {platforms.filter(p => p.primary).map((platform) => {
              // Variables must be declared inside the map function block { }
              const countKey = `downloads_${platform.name.toLowerCase()}`;
              const platformCount = liveData ? liveData[countKey] : 0;

              return (
                <div
                  key={platform.name}
                  className="glass-card group hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="feature-icon group-hover:scale-110 transition-transform">
                      <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.requirements}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="overflow-hidden h-8 mx-auto" style={{ maxWidth: '90px' }}>
                        <p className="version-animated-text text-2xl font-bold gradient-text">{platform.version}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Version</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{platform.size}</p>
                      <p className="text-xs text-muted-foreground">Size</p>
                    </div>
                    <div>
                      <p id="downloadLiveCounter" className="text-2xl font-bold">{platformCount || 0}</p>
                      <p className="text-xs text-muted-foreground">Downloads</p>
                    </div>
                  </div>

                  <button onClick={() => handleDownload(platform.name)} className="btn-neon w-full flex items-center justify-center gap-2 mb-4">
                    <DownloadIcon className="w-5 h-5" />
                    {btnState[platform.name] || `Download for ${platform.name}`}
                  </button>

                  <button
                    onClick={() => setShowHash(showHash === platform.name ? null : platform.name)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full justify-center"
                  >
                    <Shield className="w-4 h-4" />
                    {showHash === platform.name ? 'Hide' : 'Show'} SHA-256 Hash
                  </button>

                  {showHash === platform.name && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <code className="text-xs break-all text-muted-foreground">
                        {platform.sha}
                      </code>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Platforms */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            {platforms.filter(p => !p.primary).map((platform) => {
              const countKey = `downloads_${platform.name.toLowerCase()}`;
              const platformCount = liveData ? liveData[countKey] : 0;
              
              return (
                <div
                  key={platform.name}
                  className="glass-card flex items-center gap-4"
                >
                  <div className="feature-icon">
                    <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.version} • {platform.size} • {platformCount} DLs</p>
                  </div>
                  <button 
                    onClick={() => handleDownload(platform.name)} 
                    className="btn-ghost-glow text-sm px-4 py-2"
                  >
                    {btnState[platform.name] || 'Get App'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Features List */}
          <div className="glass-card max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">
              What's Included
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Full codec and format support',
                'AI-powered subtitles',
                'Hardware acceleration',
                'Extension marketplace access',
                'Custom themes and skins',
                'Multi-platform sync',
                'Privacy-first design',
                'Regular updates',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Monitor, Download } from "lucide-react";
import { useState } from "react";

export const DownloadSection = () => {
  const [downloads, setDownloads] = useState({
    windows: 45230,
    linux: 12450,
    macos: 28900,
    android: 67800,
    ios: 34100,
  });

  const platforms = [
    {
      id: "windows",
      name: "Windows",
      icon: Monitor,
      description: "Windows 10 or later",
    },
    {
      id: "linux",
      name: "Linux",
      icon: Monitor,
      description: "Ubuntu, Debian, Fedora",
    },
    {
      id: "macos",
      name: "macOS",
      icon: Apple,
      description: "macOS 11 or later",
    },
    {
      id: "android",
      name: "Android",
      icon: Smartphone,
      description: "Android 8.0+",
    },
    {
      id: "ios",
      name: "iOS",
      icon: Apple,
      description: "iOS 14.0+",
    },
  ];

  const handleDownload = (platformId: string) => {
    setDownloads((prev) => ({
      ...prev,
      [platformId]: prev[platformId as keyof typeof prev] + 1,
    }));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-gradient">BlackVideo</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Available for all your devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={platform.id}
              className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300 hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <platform.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
              <Button
                onClick={() => handleDownload(platform.id)}
                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:opacity-90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <div className="text-xs text-muted-foreground text-center mt-3">
                {downloads[platform.id as keyof typeof downloads].toLocaleString()} downloads
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

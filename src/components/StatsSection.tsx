import { useEffect, useState, useRef } from 'react';
import { Download, Puzzle, Star, HardDriveDownload, Users } from 'lucide-react';
import { streamStats } from '../dev/utils/downloads.live';
import { supabase } from '@/lib/supabaseClient';

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(stepValue * currentStep, value));
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    return num.toFixed(num % 1 !== 0 ? 1 : 0);
  };

  return <div ref={ref} className="stat-number">{formatNumber(count)}{suffix}</div>;
};

const StatsSection = () => {
  const [liveData, setLiveData] = useState({
    downloads: 0,
    installs: 0,
    extensions: 0,
    user_rating: 0,
    active_users: 0
  });

  useEffect(() => {
    const sub = streamStats((data) => setLiveData(data));
    return () => { supabase.removeChannel(sub); };
  }, []);

  const stats = [
    { icon: Download, value: liveData.downloads, label: 'Downloads', suffix: '+' },
    { icon: HardDriveDownload, value: liveData.installs, label: 'Installs', suffix: '+' },
    { icon: Puzzle, value: liveData.extensions, label: 'Extensions', suffix: '+' },
    { icon: Star, value: Number(liveData.user_rating), label: 'User Rating', suffix: '' },
    { icon: Users, value: liveData.active_users, label: 'Active Users', suffix: '+' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="glass-card text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
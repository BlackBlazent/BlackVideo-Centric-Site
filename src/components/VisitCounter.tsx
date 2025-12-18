// visitCounter.tsx

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { initializeVisitCounter, getLiveVisitCount } from '../dev/utils/visitCounter'; // Adjust path as needed

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);
  const [isLive, setIsLive] = useState(false);

  // 1. Initial Setup and Tracking
  useEffect(() => {
    const setupCounter = async () => {
      // Step A: Initialize the tracking (fetches IP, checks uniqueness, and updates DB)
      await initializeVisitCounter();
      
      // Step B: Fetch the initial count
      const initialCount = await getLiveVisitCount();
      setVisits(initialCount);
      setIsLive(true);
    };

    setupCounter();
  }, []);

  // 2. Live Update Polling
  useEffect(() => {
    if (!isLive) return;

    // Simulate live updates by polling the database every 10 seconds
    const interval = setInterval(async () => {
      const newCount = await getLiveVisitCount();
      setVisits(newCount);
    }, 10000); // Poll every 10 seconds (adjust frequency as needed)

    return () => clearInterval(interval);
  }, [isLive]); // Only run polling once the initial count is set

  return (
    <div className="fixed bottom-6 right-6 z-40 glass-card py-2 px-4 flex items-center gap-2 text-sm">
      <div className="relative">
        <Eye className="w-4 h-4 text-primary" />
        {/* Live indicator only shows if data has been fetched */}
        {isLive && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        )}
      </div>
      <span className="text-muted-foreground">
        <span className="font-semibold text-foreground">{visits.toLocaleString()}</span> visits
      </span>
    </div>
  );
};

export default VisitCounter;
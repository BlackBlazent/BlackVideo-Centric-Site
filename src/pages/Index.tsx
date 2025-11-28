import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DownloadSection } from "@/components/DownloadSection";
import { MarketplaceSidebar } from "@/components/MarketplaceSidebar";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Index = () => {
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Floating Marketplace Button */}
      <Button
        onClick={() => setIsMarketplaceOpen(true)}
        className="fixed top-24 right-6 z-30 bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 hover-glow shadow-lg"
        size="lg"
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        Marketplace
      </Button>

      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
      </main>

      <Footer />
      
      <MarketplaceSidebar 
        isOpen={isMarketplaceOpen} 
        onClose={() => setIsMarketplaceOpen(false)} 
      />
    </div>
  );
};

export default Index;

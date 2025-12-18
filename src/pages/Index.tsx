import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import VisitCounter from '@/components/VisitCounter';
import AIChatWidget from '@/components/AIChatWidget';
import { initializeAIClient } from '@/services/geminiService';
import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
const Index = () => {
  const [isAIInitialized, setIsAIInitialized] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
        // 1. Retrieve the API Key
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            const errorMsg = "FATAL: VITE_GEMINI_API_KEY is not configured in environment variables.";
            console.error(errorMsg);
            setInitError(errorMsg);
            initializeAIClient(null); // Explicitly set client to null
            return;
        }

        try {
            // 2. Initialize the client once
            const client = new GoogleGenAI({ apiKey });
            
            // 3. Pass the client instance to the service file
            initializeAIClient(client);
            setIsAIInitialized(true);
            
        } catch (error) {
            const errorMsg = "Error initializing GoogleGenAI client. Check key validity.";
            console.error(errorMsg, error);
            setInitError(errorMsg);
            initializeAIClient(null);
        }
    }, []); 

    // Optional: Render a loading/error state if initialization fails
    if (initError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-900 text-white p-8">
                <h1>Application Error:</h1>
                <p>{initError}</p>
                <p>The site cannot run AI features due to this error.</p>
            </div>
        );
    }

  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
      <AIChatWidget />
      <VisitCounter />
    </div>
  );
};

export default Index;

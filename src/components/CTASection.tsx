// src/components/CTASection.tsx
import { useState, useRef, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { joinWaitlist } from '../dev/utils/joinWaitlist'; // <-- Import the function

// Define possible states for the button's animation/text
type ButtonState = 'idle' | 'joining' | 'waitlisted' | 'error';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [buttonState, setButtonState] = useState<ButtonState>('idle');
  const emailInputRef = useRef<HTMLInputElement>(null);

  const getButtonText = (state: ButtonState): string => {
    switch (state) {
      case 'joining':
        return 'Joining...';
      case 'waitlisted':
        return 'Waitlisted';
      case 'error':
        return 'Try Again';
      case 'idle':
      default:
        return 'Join Waitlist';
    }
  };

  const getButtonClassName = (state: ButtonState): string => {
    const baseClass = 'btn-neon whitespace-nowrap';
    
    if (state === 'joining') {
      return `${baseClass} animate-pulse bg-primary/70`; // Subtle pulse animation
    }
    if (state === 'waitlisted') {
      return `${baseClass} bg-green-600 hover:bg-green-700 transition-colors`;
    }
    if (state === 'error') {
        return `${baseClass} bg-red-600 hover:bg-red-700 transition-colors`;
    }
    
    return baseClass;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (buttonState === 'joining' || !email.trim()) return;

    setButtonState('joining');

    const success = await joinWaitlist(email);

    if (success) {
      setButtonState('waitlisted');
      // Reset input field and state after a short delay
      setTimeout(() => {
        setButtonState('idle');
        setEmail('');
      }, 3000); 
    } else {
      setButtonState('error');
      // Revert to idle after a short delay on error
      setTimeout(() => {
        setButtonState('idle');
      }, 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects (No change) */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-16 text-center relative overflow-hidden gradient-border">
            {/* Decorative grid (No change) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

            <div className="relative z-10">
              {/*Ready to Experience the*/}
              <h2 className="section-title mb-4">
                Be the First to Experinece BlackVideo - Coming
                <span className="gradient-text block mt-2">June 12, 2026!</span>
                {/*Future of Video?*/}
              </h2>

              {/*Download BlackVideo today and join millions of users who've already upgraded their video playback experience.*/}
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                We are developing a workflow-first video environment designed for technical depth and high-performance playback. BlackVideo is built for power users who require precision control and a serious toolset over standard video players.
              </p>

              <div id="temp-waitlist-mockup" className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/download" className="btn-neon flex items-center justify-center gap-2 text-lg px-10 py-4">
                  <Download className="w-5 h-5" />
                  Download Free
                </Link>
                <Link to="/pricing" className="btn-ghost-glow flex items-center justify-center gap-2 text-lg px-10 py-4">
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Waitlist Form */}
              <div className="max-w-md mx-auto">
                {/*Or join the waitlist for exclusive early access to new features*/}
                <p className="text-sm text-muted-foreground mb-4">
                  Join the priority waitlist to receive access credentials and development updates ahead of the June 12 release.
                </p>

                {/* FORM MODIFIED TO USE REACT STATE AND HANDLER */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2"> {/*flex gap-2*/}
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      ref={emailInputRef}
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={buttonState === 'joining' || buttonState === 'waitlisted'}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  {/* BUTTON MODIFIED TO USE STATE FOR TEXT AND CLASSNAME */}
                  <button 
                    type="submit" 
                    className={getButtonClassName(buttonState)}
                    disabled={buttonState === 'joining' || buttonState === 'waitlisted'}
                  >
                    {getButtonText(buttonState)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import { Link } from 'react-router-dom';
import { Play, Github, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { subscribeToNewsletter } from '../dev/utils/subscribe'; // <-- Import the new function

// Define possible states for the button's animation/text
type ButtonState = 'idle' | 'subscribing' | 'subscribed' | 'error';

const footerLinks = {
  product: [
    { name: 'Features', path: '/product' },
    { name: 'Download', path: '/download' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Release Notes', path: '/changelog' },
  ],
  support: [
    { name: 'Documentation', path: '/support' },
    { name: 'Community', path: '/support#community' },
    { name: 'Contact Us', path: '/support#contact' },
    { name: 'FAQ', path: '/support#faq' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Licenses', path: '/licenses' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/BlackBlazent', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/BlackBlazent', label: 'X' },
  { icon: Youtube, href: 'https://youtube.com/@BlackBlazent', label: 'YouTube' },
  { icon: MessageCircle, href: 'https://discord.gg/y8D6cSVV', label: 'Discord' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [buttonState, setButtonState] = useState<ButtonState>('idle');
  const getButtonText = (state: ButtonState): string => {
    switch (state) {
      case 'subscribing':
        return 'Subscribing...';
      case 'subscribed':
        return 'Subscribed!';
      case 'error':
        return 'Failed (Retry)';
      case 'idle':
      default:
        return 'Subscribe';
    }
  };

  const getButtonClassName = (state: ButtonState): string => {
    const baseClass = 'btn-neon whitespace-nowrap';
    
    if (state === 'subscribing') {
      return `${baseClass} animate-pulse opacity-70`; // Subtly animated and dimmed
    }
    if (state === 'subscribed') {
      return `${baseClass} bg-green-600 hover:bg-green-700 transition-colors`;
    }
    if (state === 'error') {
        return `${baseClass} bg-red-600 hover:bg-red-700 transition-colors`;
    }
    
    return baseClass;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (buttonState === 'subscribing' || !email.trim()) return;

    setButtonState('subscribing');

    const success = await subscribeToNewsletter(email);

    if (success) {
      setButtonState('subscribed');
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
    <footer className="relative border-t border-border bg-card/50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Your Stay Updated Section */}
      <div className="glass-card max-w-2xl mx-auto text-center mb-16">
        <h3 className="font-display text-2xl font-bold mb-2">
          Stay Updated
        </h3>
        <p className="text-muted-foreground mb-6">
          Get the latest updates, features, and news delivered to your inbox.
        </p>
        
        {/* FORM MODIFIED to include handleSubmit, value, and onChange */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={buttonState === 'subscribing' || buttonState === 'subscribed'}
            className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          />
          <button 
            type="submit" 
            className={getButtonClassName(buttonState)}
            disabled={buttonState === 'subscribing' || buttonState === 'subscribed'}
          >
            {getButtonText(buttonState)}
          </button>
        </form>
      </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                {/*<Play className="w-5 h-5 text-primary fill-primary" />*/}
                <img className="blackvideoLogoIcon" src="/assets/BlackVideo.svg" alt="BlackVideo Icon" />
              </div>
              <span className="font-display text-xl font-bold">
                Black<span className="text-primary">Video</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Next-generation video player with advanced playback tools and AI-powered utilities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>BlackVideo</span>
            <span className="font-semibold text-foreground">Inc.</span>
            <span className="text-border">•</span>
            <span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlackBlazent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

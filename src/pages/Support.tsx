import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { submitSupportTicket, SupportData } from '../dev/utils/support.client';
import { 
  Book, 
  Users, 
  Mail, 
  HelpCircle,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  FileText,
  Video
} from 'lucide-react';

const supportCategories = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    link: '#docs',
    linkText: 'Browse Docs',
  },
  {
    icon: Users,
    title: 'Community Forums',
    description: 'Connect with other users and share tips',
    link: '#community',
    linkText: 'Join Community',
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Get in touch with our support team',
    link: '#contact',
    linkText: 'Send Message',
  },
];

const faqs = [
  {
    question: 'How do I install BlackVideo?',
    answer: 'Download the installer for your platform from our download page, run the installer, and follow the on-screen instructions. BlackVideo will be ready to use in under a minute.',
  },
  {
    question: 'What video formats are supported?',
    answer: 'BlackVideo supports virtually all video formats including MP4, MKV, AVI, MOV, WebM, FLV, and more. Powered by FFmpeg, we provide industry-leading codec support.',
  },
  {
    question: 'How do I enable AI subtitles?',
    answer: 'Go to Settings > AI Features > Subtitles and enable automatic subtitle generation. You can choose your preferred language and customize appearance.',
  },
  {
    question: 'Can I use BlackVideo offline?',
    answer: 'Yes! BlackVideo works fully offline. Only AI features and streaming platform integrations require an internet connection.',
  },
  {
    question: 'How do I create extensions?',
    answer: 'Check out our Developer documentation for the Extension SDK. You\'ll need a Developer plan to publish extensions to the marketplace.',
  },
  {
    question: 'Is my data private?',
    answer: 'Absolutely. BlackVideo follows a privacy-first approach with no tracking or data collection. All processing happens locally on your device.',
  },
];

const resources = [
  { icon: FileText, title: 'Getting Started Guide', type: 'Article' },
  { icon: Video, title: 'BlackVideo 101 Tutorial', type: 'Video' },
  { icon: FileText, title: 'Extension Development', type: 'Article' },
  { icon: Video, title: 'AI Features Walkthrough', type: 'Video' },
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- NEW LOGIC START ---
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState<SupportData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitSupportTicket(formData);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); 
      
      // Reset button text after 3 seconds
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // --- NEW LOGIC END ---

  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-title mb-4">
              How Can We <span className="gradient-text">Help?</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Find answers, connect with the community, or reach out to our team.
            </p>
          </div>

          {/* Support Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {supportCategories.map((category) => (
              <a
                key={category.title}
                href={category.link}
                className="glass-card group hover:border-primary/50 transition-all"
              >
                <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <span className="flex items-center gap-2 text-primary font-medium">
                  {category.linkText}
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>

          {/* FAQ Section */}
          <div id="faq" className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-card cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openFaq === index && (
                    <p className="mt-4 text-muted-foreground">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-2xl font-bold mb-6 text-center">
              Popular Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href="#"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">{resource.type}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact" className="max-w-2xl mx-auto">
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl font-bold">Contact Support</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          required
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          type="text"
          placeholder="How can we help?"
          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your issue or question..."
          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading || sent}
        className={`btn-neon w-full py-3 rounded-xl font-bold transition-all duration-300 ${
            sent ? 'bg-green-500 border-green-400 text-white' : ''
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-pulse">Sending...</span>
          </span>
        ) : sent ? (
          "Message Sent"
        ) : (
          "Send Message"
        )}
      </button>
    </form>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;

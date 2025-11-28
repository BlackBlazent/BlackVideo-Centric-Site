import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Book, Mail } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "How do I install BlackVideo?",
      answer: "Download the installer for your platform from our download page, run it, and follow the on-screen instructions. Installation typically takes less than 2 minutes.",
    },
    {
      question: "What video formats are supported?",
      answer: "BlackVideo supports all major video formats including MP4, MKV, AVI, MOV, WebM, and many more. We use advanced codec libraries to ensure compatibility.",
    },
    {
      question: "How do I install extensions?",
      answer: "Open the Marketplace from the main menu, browse available extensions, and click Install. Extensions are automatically configured and ready to use.",
    },
    {
      question: "Is BlackVideo free to use?",
      answer: "Yes! BlackVideo is completely free for personal use. We also offer a Pro version with additional features for power users and creators.",
    },
    {
      question: "How do I report bugs or request features?",
      answer: "Visit our GitHub repository or use the feedback form in the app. We actively monitor and respond to user feedback.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support & <span className="text-gradient">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers, guides, and resources to help you get the most out of BlackVideo
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass p-8 rounded-xl text-center hover-glow hover:scale-105 transition-all">
              <Book className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">Comprehensive guides and tutorials</p>
              <Button variant="outline" className="glass border-white/20">
                View Docs
              </Button>
            </div>

            <div className="glass p-8 rounded-xl text-center hover-glow hover:scale-105 transition-all">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground mb-4">Join our active community forum</p>
              <Button variant="outline" className="glass border-white/20">
                Join Forum
              </Button>
            </div>

            <div className="glass p-8 rounded-xl text-center hover-glow hover:scale-105 transition-all">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground mb-4">Get in touch with our team</p>
              <Button variant="outline" className="glass border-white/20">
                Send Email
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;

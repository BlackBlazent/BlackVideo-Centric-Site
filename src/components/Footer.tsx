import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const Footer = () => {
  const footerSections = [
    {
      title: "About",
      content: "BlackVideo is a next-generation video player with advanced playback tools and intelligent utilities.",
    },
    {
      title: "Products",
      links: ["Features", "Marketplace", "Plugins", "Extensions"],
    },
    {
      title: "Support",
      links: ["Documentation", "FAQs", "Contact Us", "Community"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="glass-strong border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              {section.content ? (
                <p className="text-muted-foreground text-sm">{section.content}</p>
              ) : (
                <ul className="space-y-2">
                  {section.links?.map((link) => (
                    <li key={link}>
                      <NavLink
                        to="#"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>Email: contact@blackvideo.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div>Address: 123 Tech Street, San Francisco, CA</div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <NavLink to="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </NavLink>
            <span>•</span>
            <NavLink to="#" className="hover:text-primary transition-colors">
              Terms of Service
            </NavLink>
            <span>•</span>
            <span>Visitors: 12,345</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 BlackVideo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

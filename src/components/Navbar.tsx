import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/support", label: "Support" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="rounded-lg flex items-center justify-center"> {/*w-9 h-9 bg-gradient-to-br from-primary to-blue-500*/}
              {/*<span className="text-xl font-bold text-background">B</span>*/}
              <img src="./public/BlackVideo.png" alt="BlackVideo Logo" style={{width: '60px', height: '60px'}} />
            </div>
            <span className="text-xl font-bold text-gradient">BlackVideo</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-medium"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search videos, extensions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass border-white/10"
              />
            </div>
          </div>

          {/* Download Button */}
          <Button className="hidden md:flex bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 hover-glow">
            Download
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass border-white/10"
              />
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-blue-500 hover:opacity-90">
              Download
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

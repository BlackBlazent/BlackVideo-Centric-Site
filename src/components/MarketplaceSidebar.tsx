import { useState } from "react";
import { X, Package, Palette, Puzzle, Plus, Upload, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarketplaceSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketplaceSidebar = ({ isOpen, onClose }: MarketplaceSidebarProps) => {
  const categories = [
    {
      icon: Palette,
      title: "Themes",
      count: 120,
      description: "Customize your player's appearance",
    },
    {
      icon: Package,
      title: "Extensions",
      count: 340,
      description: "Add new functionality",
    },
    {
      icon: Puzzle,
      title: "Plugins",
      count: 180,
      description: "Enhance core features",
    },
    {
      icon: Plus,
      title: "Add-ons",
      count: 95,
      description: "Extra tools and utilities",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 glass-strong border-l border-white/10 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-gradient">Marketplace</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close marketplace"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ScrollArea className="h-[calc(100vh-88px)]">
          <div className="p-6 space-y-6">
            {/* Categories */}
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="glass p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">{category.title}</h3>
                        <span className="text-sm text-muted-foreground">{category.count}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {/* Create & Publish Section */}
            <div className="glass p-6 rounded-xl border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">For Developers</h3>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 justify-between group">
                  <span>Create Extension</span>
                  <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full glass border-white/20 hover:bg-white/10 justify-between group">
                  <span>Publish Extension</span>
                  <Upload className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Build and share your extensions with the BlackVideo community
              </p>
            </div>

            {/* Featured Extensions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Featured Extensions</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-500" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Extension Name {i}</h4>
                        <p className="text-xs text-muted-foreground">By Developer Name</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-xs">
                        Install
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

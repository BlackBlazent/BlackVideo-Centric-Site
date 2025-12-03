import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NavItem } from '../types';
import { 
  Home, Box, LifeBuoy, CreditCard, 
  Download, ShoppingBag, FileText, 
  Play
} from 'lucide-react';

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', path: '/', icon: Home, section: 'main' },
  { id: 'product', label: 'Product', path: '/product', icon: Box, section: 'main' },
  { id: 'support', label: 'Support', path: '/support', icon: LifeBuoy, section: 'main' },
  { id: 'pricing', label: 'Pricing', path: '/pricing', icon: CreditCard, section: 'main' },
  
  { id: 'downloads', label: 'Downloads', path: '/downloads', icon: Download, section: 'utility' },
  { id: 'marketplace', label: 'Marketplace', path: '/marketplace', icon: ShoppingBag, section: 'utility' },
  { id: 'changelog', label: 'Release Notes', path: '/changelog', icon: FileText, section: 'utility' },
];

const Sidebar: React.FC<{ isOpen: boolean, setIsOpen: (val: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 glass-panel border-r border-white/10 z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Brand */}
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="w-10 h-10 flex items-center justify-center"> {/* rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan shadow-lg shadow-neon-cyan/20  */}
            {/*<Play className="text-white fill-white w-5 h-5" />*/}
            <img className="logo-bvdo" src="/assets/BlackVideo.png"/>
          </div>
          <div>
            <h1 className="font-mono font-bold text-lg tracking-wider text-white">ZEPHYRA</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">BlackVideo</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-hide">
          
          {/* Main Section */}
          <div>
            <h3 className="text-xs font-mono text-gray-500 mb-3 px-3 uppercase tracking-wider">Menu</h3>
            <div className="space-y-1">
              {navItems.filter(i => i.section === 'main').map(item => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-neon-cyan/10 text-neon-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)] border border-neon-cyan/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Utility Section */}
          <div>
            <h3 className="text-xs font-mono text-gray-500 mb-3 px-3 uppercase tracking-wider">Utilities</h3>
            <div className="space-y-1">
              {navItems.filter(i => i.section === 'utility').map(item => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-neon-purple/10 text-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.1)] border border-neon-purple/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

        </nav>

        {/* Footer Info */}
        {/*<div className="p-4 border-t border-white/5">
          <div className="glass-panel p-3 rounded-lg text-center">
             <span className="block text-xs text-gray-400 mb-1">Live Users</span>
             <span className="text-lg font-mono font-bold text-neon-cyan animate-pulse">
               {Math.floor(Math.random() * (4000 - 2000) + 2000).toLocaleString()}
             </span>
          </div>
        </div>*/}
        <div className="p-6 border-t border-white/5">
               <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Download className="w-12 h-12 text-cyan-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">Early Access</h3>
                  <p className="text-xs text-gray-400 mb-3">v2.4.0 Beta Available</p>
                  <button onClick={() => onNavigate('/downloads')} className="w-full py-2 bg-white/10 hover:bg-cyan-500 hover:text-black text-white text-xs font-bold rounded transition-all">
                    Update Now
                  </button>
               </div>
            </div>

      </aside>
    </>
  );
};

export default Sidebar;
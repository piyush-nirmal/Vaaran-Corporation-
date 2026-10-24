import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { VrnLogo } from './VrnLogo';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { track } from '../services/analytics';
import { companyConfig } from '../data/content';
import { useContent } from '../context/ContentContext';

interface NavbarProps {
  onOpenPortal?: () => void;
}

export interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/operations', label: 'Service Sectors' },
  { path: '/projects', label: 'Projects' },
  { path: '/careers', label: 'Careers' },
];

export const Navbar: FC<NavbarProps> = () => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Progress Bar at very top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Frosted glass trigger
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape to close mobile menu & lock body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleRequestBidClick = () => {
    track('cta_click', { location: 'navbar_request_bid', target: '/rfp-portal' });
    navigate('/rfp-portal');
  };

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-vrnOrange origin-left z-50 pointer-events-none"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#F8FAFD]/95 backdrop-blur-md border-b border-[#E2EAF8] ${
          isScrolled
            ? 'py-2.5 shadow-[0_12px_32px_-6px_rgba(37,99,235,0.08),0_4px_12px_-2px_rgba(15,23,42,0.05),0_1px_2px_0_rgba(15,23,42,0.03)]'
            : 'py-3.5 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.06),0_2px_6px_-1px_rgba(15,23,42,0.03)]'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between relative z-10">
          
          {/* Logo & Wordmark (Redirects to Home) */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 sm:gap-3 text-left bg-transparent border-none cursor-pointer group p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864F0]"
          >
            <div className="relative">
              <VrnLogo size={34} className="shrink-0 transition-transform duration-300 group-hover:scale-105 sm:hidden" />
              <VrnLogo size={42} className="shrink-0 transition-transform duration-300 group-hover:scale-105 hidden sm:block" />
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight uppercase block font-heading leading-tight truncate text-[#15315B] transition-colors group-hover:text-[#2864F0]">
                Varan Corporation
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider block font-body text-[#2864F0] transition-colors">
                Infrastructure Group
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links: Clean Modern Minimalist Links with Animated Bottom Glowing Indicator */}
          <nav 
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[14.5px] font-medium font-sans relative py-1"
          >
            {navItems.map((link) => {
              const isActive = isLinkActive(link.path);
              const isHovered = hoveredPath === link.path;

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={`group relative px-3.5 py-2 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864F0] rounded-lg ${
                    isActive
                      ? 'text-[#2864F0] font-semibold'
                      : 'text-[#202A38] hover:text-[#2864F0]'
                  }`}
                >
                  {/* Subtle translucent hover background bloom */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navHoverBackdrop"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute inset-0 rounded-lg pointer-events-none bg-[#EAF1FF]/70"
                    />
                  )}

                  {/* Nav Label Text */}
                  <span className="relative z-10 tracking-[0.01em] transition-transform duration-200 group-hover:-translate-y-0.5">
                    {link.label}
                  </span>

                  {/* Active Bottom Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute -bottom-1 h-[2.5px] w-5/6 rounded-full bg-[#2864F0] shadow-[0_1px_6px_rgba(40,100,240,0.4)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Mobile Direct Call CTA - Sleek Modern Tactile Button */}
            <a
              href={`tel:${currentCompany.phoneRaw}`}
              className="md:hidden relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 group"
              aria-label="Direct Engineering Call"
              title="Call Direct Desk"
            >
              <Phone className="w-[18px] h-[18px] text-white shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200" />
            </a>

            {/* Click-to-call phone with tactile emerald hover (Tablet & Desktop) */}
            <a
              href={`tel:${currentCompany.phoneRaw}`}
              className="group hidden md:inline-flex items-center gap-2 text-xs font-mono font-semibold transition-all duration-300 py-2 px-3.5 rounded-full border text-slate-800 bg-slate-50/80 border-slate-200 hover:border-emerald-300 hover:text-emerald-800 hover:bg-emerald-50/80 shadow-2xs"
              title="Direct Engineering Desk"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
              <span>{currentCompany.phone}</span>
            </a>

            {/* Primary Action Button in High-End Gradient with Sheen Hover */}
            <button 
              type="button"
              onClick={handleRequestBidClick}
              className="group hidden sm:inline-flex relative items-center gap-2 px-5 sm:px-6 h-[42px] min-h-[42px] rounded-full text-[13px] font-bold uppercase tracking-[0.05em] text-white bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] hover:from-[#1D4ED8] hover:to-[#172554] shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] border-t border-white/30 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-in-out pointer-events-none" />
              <span className="relative z-10">Request Bid</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>

            {/* Mobile Hamburger Toggle (40x40 min touch target) */}
            <button 
              type="button"
              className="lg:hidden w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer rounded-full text-slate-700 hover:text-[#2563EB] hover:bg-slate-100 border border-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu: Elegant Right-Aligned Slide-Over Drawer with Crisp Visibility */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            {/* Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-out Drawer from Top-Right */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-w-sm sm:max-w-md h-full bg-white text-[#20242D] shadow-2xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto border-l border-slate-200 z-10"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <VrnLogo size={36} />
                  <div>
                    <span className="text-base font-bold uppercase tracking-tight text-[#20242D] font-heading block leading-tight">
                      Varan Corporation
                    </span>
                    <span className="text-[10px] font-semibold text-[#2563EB] uppercase tracking-wider block font-body">
                      Infrastructure Group
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors rounded-full active:scale-95 cursor-pointer shadow-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Crisp Modern Cards */}
              <div className="space-y-2 py-6 my-auto">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 mb-2">
                  Navigation
                </div>
                {navItems.map((link, idx) => {
                  const isActive = isLinkActive(link.path);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-sm sm:text-base font-bold uppercase tracking-wide font-heading flex items-center justify-between w-full py-3.5 px-4 rounded-xl transition-all shadow-xs ${
                          isActive 
                            ? 'text-white bg-[#2563EB] shadow-md shadow-blue-600/25' 
                            : 'text-slate-800 bg-slate-50 hover:bg-slate-100/80 hover:text-[#2563EB] border border-slate-200/60'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white translate-x-0.5' : 'text-slate-400'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* High-Visibility Action Buttons */}
              <div className="space-y-3 pt-5 border-t border-slate-200">
                {/* Direct Call Button */}
                <a
                  href={`tel:${currentCompany.phoneRaw}`}
                  className="w-full py-3.5 bg-emerald-50 hover:bg-emerald-100 active:scale-[0.99] text-emerald-700 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2.5 font-heading transition-all border border-emerald-300 shadow-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <Phone className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <span>Direct Desk: {currentCompany.phone}</span>
                </a>

                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => { setIsMobileMenuOpen(false); handleRequestBidClick(); }}
                  className="w-full py-4 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] active:scale-[0.99] text-white rounded-xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 font-heading transition-all border-t border-white/25 cursor-pointer"
                >
                  <span>Request Technical Bid</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <div className="pt-2 text-center text-[10px] font-mono text-slate-400">
                  Mumbai Headquarters · Est. 1997 · "Work is Worship"
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

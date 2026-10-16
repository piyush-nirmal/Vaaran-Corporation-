import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { VrnLogo } from './VrnLogo';
import { Menu, X, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { track } from '../services/analytics';
import { companyConfig } from '../data/content';

interface NavbarProps {
  onOpenPortal?: () => void;
}

export interface NavDropdownItem {
  label: string;
  path: string;
  desc?: string;
}

export interface NavItem {
  path: string;
  label: string;
  dropdown?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { 
    path: '/about', 
    label: 'About Us',
    dropdown: [
      { label: 'Mission, Vision', path: '/about#mission' },
      { label: 'Board Members', path: '/about#board' },
      { label: 'Our Esteemed Clients', path: '/about#clients' },
      { label: 'Financials', path: '/about#financials' },
      { label: 'Infrastructure', path: '/about#infrastructure' },
      { label: 'Machinery & Equipment', path: '/about#machinery' },
      { label: 'SPVs', path: '/about#spvs' },
      { label: 'Corporate Policy & Accreditation', path: '/about#policy' },
    ]
  },
  { 
    path: '/operations', 
    label: 'Service Sectors',
    dropdown: [
      { label: 'Highways & Expressways', path: '/operations', desc: 'Turnkey roadway and corridor execution' },
      { label: 'Bridges & Marine Structures', path: '/operations', desc: 'River barrages and substructure works' },
      { label: 'Tunnels & Rail Viaducts', path: '/operations', desc: 'Mountain portals and elevated transit' },
      { label: 'Structural Steel & Gantries', path: '/operations', desc: 'Overhead highway signage and trusses' },
      { label: 'Heavy Machinery & Fleet', path: '/fleet', desc: '40+ specialized mobilized units' },
    ]
  },
  { 
    path: '/projects', 
    label: 'Projects',
    dropdown: [
      { label: 'National Expressways', path: '/projects', desc: '142+ km corridor execution' },
      { label: 'Elevated Transit Viaducts', path: '/projects', desc: 'Metro corridors and rail spans' },
      { label: 'Highway Gantries & Steel', path: '/projects', desc: 'Heavy overhead gantry fabrication' },
      { label: 'All Documented Projects', path: '/projects', desc: '120+ landmark infrastructure deliveries' },
    ]
  },
  { path: '/operations', label: 'Sustainability' },
  { path: '/contact', label: 'Life @ Varan' },
  { path: '/contact', label: 'Careers' },
];

export const Navbar: FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
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
      const currentScrollY = window.scrollY;
      
      // Frosted glass trigger
      setIsScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setIsVisible(false); // scrolling down
        } else if (lastScrollY - currentScrollY > 6) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Escape to close mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-vrnOrange origin-left z-50 pointer-events-none"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isTransparent
            ? 'bg-transparent py-3 border-b border-white/10'
            : isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md shadow-navy-sm py-0 border-b border-white/15'
            : 'bg-white/95 backdrop-blur-md py-2 border-b border-slate-200/80 shadow-2xs'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Wordmark (Redirects to Home) */}
          <Link 
            to="/" 
            className="flex items-center gap-3 text-left bg-transparent border-none cursor-pointer group p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange"
          >
            <VrnLogo size={40} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className={`text-lg font-semibold tracking-tight uppercase block font-heading leading-tight transition-colors ${
                isTransparent || (isHomePage && isScrolled) ? 'text-white' : 'text-vrnNavy'
              }`}>
                Varan Corporation
              </span>
              <span className={`text-[11px] font-medium uppercase tracking-wider block font-body transition-colors ${
                isTransparent || (isHomePage && isScrolled) ? 'text-slate-300' : 'text-slate-500'
              }`}>
                Infrastructure Group
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links matching user reference */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium font-sans relative">
            {navItems.map((link) => {
              const isActive = isLinkActive(link.path);
              const textDarkTheme = isTransparent || (isHomePage && isScrolled);
              const hasDropdown = Boolean(link.dropdown);
              const isDropdownOpen = activeDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange ${
                      textDarkTheme
                        ? isActive 
                          ? 'text-white font-semibold' 
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                        : isActive 
                          ? 'text-vrnNavy font-semibold' 
                          : 'text-slate-600 hover:text-vrnNavy hover:bg-slate-50'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-vrnOrange' : 'opacity-70'
                      }`} />
                    )}

                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-vrnOrange rounded-full"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-vrnOrange rounded-xl shadow-2xl overflow-hidden border border-orange-400/30 text-white min-w-[270px]">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.label}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-5 py-3 text-white font-bold text-xs tracking-wide hover:bg-vrnOrange-hover hover:pl-6 transition-all border-b border-white/20 last:border-b-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Click-to-call phone */}
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className={`hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-medium transition-colors py-1.5 px-2.5 rounded-lg ${
                isTransparent || (isHomePage && isScrolled)
                  ? 'text-slate-200 hover:text-white hover:bg-white/10'
                  : 'text-slate-700 hover:text-vrnNavy hover:bg-slate-100/80'
              }`}
              title="Direct Engineering Desk"
            >
              <Phone className="w-3.5 h-3.5 text-vrnOrange shrink-0" />
              <span>{companyConfig.phone}</span>
            </a>



            {/* Primary Action Button */}
            <button 
              type="button"
              onClick={handleRequestBidClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-[0.04em] text-slate-950 bg-vrnOrange hover:bg-vrnOrange-hover shadow-sm transition-all hover:shadow-md cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange"
            >
              <span>Request Bid</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button"
              className={`lg:hidden p-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange ${
                isTransparent || (isHomePage && isScrolled)
                  ? 'text-white hover:text-amber-300'
                  : 'text-vrnNavy hover:text-vrnNavy-light'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl text-white lg:hidden flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Top Bar inside overlay */}
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <VrnLogo size={36} />
                <span className="text-xl font-bold uppercase tracking-[-0.01em] text-white font-heading">
                  Varan Corporation
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Staggered Links */}
            <div className="space-y-3 my-auto py-6">
              {navItems.map((link, idx) => {
                const isActive = isLinkActive(link.path);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl sm:text-2xl font-bold uppercase tracking-tight font-heading flex items-center justify-between w-full py-2 transition-colors ${
                        isActive ? 'text-vrnOrange' : 'text-slate-200 hover:text-vrnOrange'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons in Mobile Menu */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold uppercase text-xs tracking-[0.04em] flex items-center justify-center gap-2 font-heading"
              >
                <Phone className="w-4 h-4 text-vrnOrange" />
                <span>Call Direct: {companyConfig.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => { setIsMobileMenuOpen(false); handleRequestBidClick(); }}
                className="w-full py-4 bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 rounded-xl font-bold uppercase text-xs tracking-[0.04em] flex items-center justify-center gap-2 shadow-lg font-heading"
              >
                <span>Request Technical Bid</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

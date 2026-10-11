import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { VrnLogo } from './VrnLogo';
import { Menu, X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { track } from '../services/analytics';
import { companyConfig } from '../data/content';

interface NavbarProps {
  onOpenPortal?: () => void;
}

export interface NavRoute {
  path: string;
  label: string;
}

// Exactly the pages specified by the user in the reference navigation bar
export const navRoutes: NavRoute[] = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT US' },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/careers', label: 'CAREERS' },
  { path: '/gallery', label: 'PHOTO GALLERY' },
  { path: '/sitemap', label: 'SITE MAP' },
  { path: '/contact', label: 'CONTACT US' },
];

export const Navbar: FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsScrolled(window.scrollY > 35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape to close mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleEnquiryClick = () => {
    track('cta_click', { location: 'navbar_enquiry', target: '/rfp-portal' });
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
      {/* Scroll Progress Bar at very top with luminous glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-vrnNavy via-[#00AEEF] to-[#F58220] origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(0,174,239,0.55)]"
      />

      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col w-full shadow-md">
        
        {/* Tier 1: Brand Top Bar (Clean White / Frosted Glass) */}
        <div className={`w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 ${
          isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-14 sm:h-16 py-2 opacity-100'
        }`}>
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            {/* Logo & Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 text-left bg-transparent border-none cursor-pointer group p-0 focus-visible:outline-none"
            >
              <VrnLogo size={32} className="shrink-0 transition-transform duration-300 group-hover:scale-105 text-[#0F2942]" />
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-950 uppercase block font-heading leading-tight">
                  Varan Corporation
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider block font-body">
                  Infrastructure Group · Since 2000
                </span>
              </div>
            </Link>

            {/* Quick Contact & Credentials on Desktop */}
            <div className="hidden md:flex items-center gap-6 text-xs text-slate-600 font-medium font-body">
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="flex items-center gap-1.5 text-slate-800 hover:text-[#0F2942] font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F2942]" />
                <span className="font-mono">{companyConfig.phone}</span>
              </a>
              <a
                href="mailto:contracts@varancorp.com"
                className="hidden lg:flex items-center gap-1.5 text-slate-700 hover:text-slate-950 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>contracts@varancorp.com</span>
              </a>
              <div className="hidden xl:flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 12944 Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Dedicated Navigation Strip (Exact User Reference Design in Brand Navy) */}
        <div className="w-full bg-[#0F2942] text-white border-b border-black/20 shadow-lg">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            
            {/* Mobile: Logo mini show if scrolled */}
            <div className="flex items-center lg:hidden">
              <Link to="/" className="flex items-center gap-2 text-white font-bold font-heading text-sm uppercase tracking-wider">
                <VrnLogo size={24} className="text-[#8ACFF8]" />
                <span>Varan Corp</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-bold tracking-wider uppercase font-heading">
              {navRoutes.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-3.5 transition-colors cursor-pointer focus-visible:outline-none ${
                      isActive
                        ? 'text-[#8ACFF8] font-black'
                        : 'text-white hover:text-[#8ACFF8] font-bold'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicatorBrand"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8ACFF8] rounded-t-sm"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Brand Orange "Enquiry" CTA Button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleEnquiryClick}
                className="bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-sm shadow-md transition-all active:scale-95 cursor-pointer font-heading"
              >
                <span>Enquiry</span>
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="lg:hidden p-2 text-white hover:text-[#8ACFF8] focus:outline-none cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

      </header>

      {/* Full-Screen Mobile Drawer with the Exact 7 Pages */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0F2942] text-white lg:hidden flex flex-col justify-between p-6 sm:p-10 pt-20 overflow-y-auto"
          >
            {/* Top Close Bar inside overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <VrnLogo size={32} className="text-[#8ACFF8]" />
                <span className="text-lg font-bold uppercase tracking-tight text-white font-heading">
                  Varan Corporation
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Exact 7 Navigation Links */}
            <div className="space-y-4 my-auto py-8">
              {navRoutes.map((link, idx) => {
                const isActive = isLinkActive(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl sm:text-2xl font-bold uppercase tracking-wider font-heading flex items-center justify-between w-full py-2.5 transition-colors ${
                        isActive ? 'text-[#8ACFF8] font-black' : 'text-slate-200 hover:text-[#8ACFF8]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`w-5 h-5 ${isActive ? 'text-[#8ACFF8]' : 'text-slate-500'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleEnquiryClick();
                }}
                className="w-full py-3.5 bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 rounded-lg font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 font-heading shadow-md"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 font-heading"
              >
                <Phone className="w-4 h-4 text-[#8ACFF8]" />
                <span>Call Desk: {companyConfig.phone}</span>
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

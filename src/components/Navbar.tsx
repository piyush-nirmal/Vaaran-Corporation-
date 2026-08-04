import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import varanLogo from '../assets/varan logo.png';
import {
  Building,
  Menu,
  X,
  ChevronDown,
  ClipboardList,
  Phone,
  MessageCircle,
  Users,
  Award,
  CheckCircle2,
  Clock,
  Image as ImageIcon,
  Newspaper,
  Briefcase
} from 'lucide-react';



export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isScrolledStyle = isScrolled || !isHomePage;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const navLinks = [
    { name: 'Home', href: '/', active: window.location.pathname === '/' },
    {
      name: 'Company',
      dropdown: [
        { name: 'About Us', description: 'Discover our legacy of engineering excellence and industrial execution.', href: '/about', icon: Building },
        { name: 'Clients', description: 'Trusted by major public and private sector enterprises.', href: '/#', icon: Users },
        { name: 'Certifications', description: 'ISO certified quality and safety standards.', href: '/#', icon: Award },
      ],
    },
    {
      name: 'Services',
      href: '/services',
      active: window.location.pathname === '/services',
    },
    {
      name: 'Projects',
      dropdown: [
        { name: 'Completed Projects', description: 'Portfolio of our successfully delivered projects.', href: '#', icon: CheckCircle2 },
        { name: 'Ongoing Projects', description: 'Current active worksites and developments.', href: '#', icon: Clock },
        { name: 'Gallery', description: 'Visual showcase of our operations and equipment.', href: '#', icon: ImageIcon },
      ],
    },
    {
      name: 'Resources',
      dropdown: [
        { name: 'News & Updates', description: 'Latest company announcements and industry insights.', href: '#', icon: Newspaper },
        { name: 'Careers', description: 'Join our team of engineering and coating professionals.', href: '#', icon: Briefcase },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolledStyle
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-white/90 lg:bg-transparent lg:text-white py-5'
          }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo Section */}
            <div className="flex items-center gap-3.5 cursor-pointer group">
              {/* Image Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={varanLogo}
                  alt="Varan Corporation Logo"
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`text-base sm:text-lg font-black tracking-tighter block leading-none transition-colors duration-500 ease-out ${isScrolledStyle ? 'text-apcoRed' : 'text-apcoRed lg:text-white'
                  }`}>
                  VARAN CORPORATION
                </span>
                <span className={`text-[8px] font-black uppercase tracking-[0.35em] block mt-0.5 transition-colors duration-500 ease-out ${isScrolledStyle ? 'text-slate-400' : 'text-slate-400 lg:text-white/60'
                  }`}>
                  ESTABLISHED 1997
                </span>
              </div>
            </div>

            {/* Right Side: Navigation & Actions */}
            <div className="hidden lg:flex items-center gap-12">
              {/* Desktop Navigation */}
              <ul className={`flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ease-out ${isScrolledStyle ? 'text-apcoMuted' : 'text-white/90'
                }`}>
                {navLinks.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.dropdown ? (
                      <div className="flex items-center gap-1.5 cursor-pointer hover:text-apcoRed transition-colors py-4 relative after:absolute after:bottom-[10px] after:left-0 after:w-full after:h-[1px] after:bg-apcoRed after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />

                        {/* Mega-Menu Dropdown */}
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 w-max min-w-[300px] max-w-[600px] bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-gray-50/50 before:pointer-events-none">
                          <div className={`p-3 grid ${item.dropdown.length > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 relative z-10`}>
                            {item.dropdown.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group/item border border-transparent hover:border-gray-100 hover:shadow-sm"
                                >
                                  <div className="bg-blue-50/50 text-apcoBlue p-2.5 rounded-lg group-hover/item:bg-apcoBlue group-hover/item:text-white transition-colors duration-300">
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4 className="text-[13px] font-bold text-slate-800 group-hover/item:text-apcoRed transition-colors mb-1">
                                      {subItem.name}
                                    </h4>
                                    <p className="text-[11px] font-normal text-slate-500 normal-case tracking-normal leading-relaxed">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href || '#'}
                        className={`block py-4 transition-colors relative hover:text-apcoRed after:absolute after:bottom-[10px] after:left-0 after:w-full after:h-[1px] after:bg-apcoRed after:transition-transform after:duration-300 after:origin-left ${item.active
                          ? 'text-apcoRed after:scale-x-100'
                          : 'after:scale-x-0 group-hover:after:scale-x-100'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-apcoRed text-white hover:bg-[#c81920] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 flex items-center gap-2 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(227,30,36,0.5)]">
                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12"></span>
                <ClipboardList className="w-3.5 h-3.5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Contact</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-apcoRed text-white px-3 py-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Contact
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors z-[60] relative ${isScrolledStyle || isMobileMenuOpen ? 'text-apcoBlue hover:text-apcoRed' : 'text-apcoBlue lg:text-white'
                  }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[55] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full h-[100dvh] pt-24 pb-8 px-6 overflow-y-auto">
          <div className="space-y-4 flex-grow">
            {navLinks.map((item, index) => (
              <div
                key={item.name}
                className="border-b border-gray-100 pb-2"
                style={{
                  transitionDelay: `${isMobileMenuOpen ? index * 50 : 0}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)'
                }}
              >
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.name)}
                      className="w-full flex items-center justify-between py-4 text-xl font-black text-slate-800 tracking-wide"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-6 h-6 text-apcoRed transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeAccordion === item.name ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeAccordion === item.name ? 'max-h-[800px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="space-y-4 pl-4 pt-2 border-l-2 border-gray-100">
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-4 py-2 group/mob"
                            >
                              <div className="bg-gray-50 text-apcoBlue p-2.5 rounded-xl">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-[15px] font-bold text-slate-700">
                                  {subItem.name}
                                </h4>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href || '#'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 text-xl font-black tracking-wide ${item.active ? 'text-apcoRed' : 'text-slate-800'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 pt-4 border-t border-gray-100">
            <a href="tel:+18001234567" className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              <div className="bg-apcoBlue text-white p-3 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-500 block mb-1">Call for inquiries</span>
                <span className="text-lg font-black text-slate-800">+1 (800) 123-4567</span>
              </div>
            </a>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-apcoRed text-white py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 rounded-2xl shadow-lg shadow-red-500/20 active:scale-[0.98] transition-transform">
              <ClipboardList className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/18001234567"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 group flex items-center gap-0 overflow-hidden"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-bold pl-0 group-hover:pl-3">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] bg-apcoRed origin-left pointer-events-none"
        style={{ scaleX }}
      />
    </>
  );
};

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ServiceTabs } from './components/ServiceTabs';
import { Hero } from './components/Hero';
import { QuoteRequest } from './components/QuoteRequest';
import { EquipmentGrid } from './components/EquipmentGrid';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { VrnLogo } from './components/VrnLogo';
import { HardHat, Menu, X, ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 selection:bg-vrnOrange selection:text-white">
      
      {/* Universal Top Bar: Zone 1 (Logo + Wordmark) · Zone 2 (Clean Nav Links) · Zone 3 (Actions) */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 sticky top-0 z-50 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Official Logo + Wordmark */}
          <button 
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3 text-left bg-transparent border-none cursor-pointer group"
          >
            <VrnLogo size={40} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="text-lg font-black tracking-tight text-vrnNavy uppercase block font-display leading-tight">
                Varan Corporation
              </span>
              <span className="text-[10px] font-bold text-vrnOrange uppercase tracking-widest block font-mono">
                Infrastructure Group
              </span>
            </div>
          </button>
          
          {/* Zone 2: Clean Typography Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
            <button 
              type="button"
              onClick={() => scrollTo('operations')} 
              className="hover:text-vrnOrange transition-colors bg-transparent border-none cursor-pointer py-1"
            >
              Operations
            </button>
            <button 
              type="button"
              onClick={() => scrollTo('fleet')} 
              className="hover:text-vrnOrange transition-colors bg-transparent border-none cursor-pointer py-1"
            >
              Fleet & Machinery
            </button>
            <button 
              type="button"
              onClick={() => scrollTo('projects')} 
              className="hover:text-vrnOrange transition-colors bg-transparent border-none cursor-pointer py-1"
            >
              Projects Desk
            </button>
            <button 
              type="button"
              onClick={() => scrollTo('rfp-quote')} 
              className="hover:text-vrnOrange transition-colors bg-transparent border-none cursor-pointer py-1"
            >
              RFP Portal
            </button>
            <button 
              type="button"
              onClick={() => scrollTo('contact')} 
              className="hover:text-vrnOrange transition-colors bg-transparent border-none cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={() => setIsPortalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-vrnNavy bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer font-display"
            >
              <HardHat className="w-3.5 h-3.5 text-vrnOrange" />
              <span>Client Portal</span>
            </button>

            <button 
              type="button"
              onClick={() => scrollTo('rfp-quote')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-vrnOrange hover:bg-vrnOrange-hover shadow-xs transition-all hover:shadow-md hover:shadow-orange-500/20 cursor-pointer font-display"
            >
              <span>Request Bid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button"
              className="lg:hidden p-2 text-vrnNavy hover:text-vrnOrange transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
            <div className="px-5 pt-3 pb-6 space-y-2">
              <button 
                type="button"
                onClick={() => scrollTo('operations')} 
                className="w-full text-left py-2.5 text-sm font-bold text-slate-800 hover:text-vrnOrange uppercase tracking-wider font-display"
              >
                Operations
              </button>
              <button 
                type="button"
                onClick={() => scrollTo('fleet')} 
                className="w-full text-left py-2.5 text-sm font-bold text-slate-800 hover:text-vrnOrange uppercase tracking-wider font-display"
              >
                Fleet & Machinery
              </button>
              <button 
                type="button"
                onClick={() => scrollTo('projects')} 
                className="w-full text-left py-2.5 text-sm font-bold text-slate-800 hover:text-vrnOrange uppercase tracking-wider font-display"
              >
                Projects Desk
              </button>
              <button 
                type="button"
                onClick={() => scrollTo('rfp-quote')} 
                className="w-full text-left py-2.5 text-sm font-bold text-slate-800 hover:text-vrnOrange uppercase tracking-wider font-display"
              >
                RFP Portal
              </button>
              <button 
                type="button"
                onClick={() => scrollTo('contact')} 
                className="w-full text-left py-2.5 text-sm font-bold text-slate-800 hover:text-vrnOrange uppercase tracking-wider font-display"
              >
                Contact
              </button>

              <div className="pt-4 flex flex-col gap-2">
                <button 
                  type="button"
                  onClick={() => { setIsMobileMenuOpen(false); setIsPortalOpen(true); }}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-vrnNavy rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 font-display"
                >
                  <HardHat className="w-4 h-4 text-vrnOrange" />
                  <span>Client Portal Gateway</span>
                </button>
                <button 
                  type="button"
                  onClick={() => scrollTo('rfp-quote')}
                  className="w-full py-3 bg-vrnOrange hover:bg-vrnOrange-hover text-white rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-xs font-display"
                >
                  <span>Request Technical RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Client Portal Modal (Light Theme) */}
      {isPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden text-slate-900">
            <div className="bg-slate-50 p-6 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-3">
                <VrnLogo size={32} />
                <div>
                  <h3 className="font-extrabold uppercase tracking-wide text-sm text-vrnNavy font-display">Client Portal Gateway</h3>
                  <p className="text-[10px] text-slate-500 font-mono">Secured Contractor Extranet · Zone 04B</p>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setIsPortalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Active Worksite Clearance</span>
                  <h4 className="font-bold text-vrnNavy text-sm mt-0.5 font-display">Mumbai Metro Line 3 Corridor</h4>
                  <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1 mt-1 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>HSE Safety Audit: Approved Sa 2.5 Protocol</span>
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-vrnNavy bg-vrnNavy-tint border border-vrnNavy/30 px-2.5 py-1 rounded-md">
                  ZONE-04B
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                  <FileText className="w-5 h-5 text-vrnOrange mb-2" />
                  <h5 className="font-bold text-xs uppercase text-vrnNavy font-display">Daily Log Summary</h5>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">Shift 02 complete: 1,450 m² viaduct primer verified.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                  <h5 className="font-bold text-xs uppercase text-vrnNavy font-display">Workforce Passport</h5>
                  <p className="text-[11px] text-slate-600 mt-1 font-sans">100% labor force certified with biometric attendance.</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl text-xs text-slate-600 border border-slate-200 font-mono">
                Site Superintendent Hotline: <span className="text-vrnNavy font-bold">+91 (22) 4567 8900</span>
              </div>

              <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPortalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer font-display"
                >
                  Dismiss
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPortalOpen(false);
                    scrollTo('rfp-quote');
                  }}
                  className="px-5 py-2.5 bg-vrnNavy hover:bg-vrnNavy-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer font-display"
                >
                  Configure New Work Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Main Core Content Container in Light Theme */}
      <main className="w-full flex-grow flex flex-col space-y-0 bg-white">
        
        {/* Section 1: Operational Portfolios & Capabilities (Light White Track) */}
        <section id="operations" className="py-16 sm:py-20 bg-white w-full border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-vrnOrange font-bold">
                Capability Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
                Operational Portfolios & Coating Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
                Explore divisions, dry-film thickness simulations, and ISO 12944 performance benchmarks.
              </p>
            </div>
            
            <ServiceTabs />
          </div>
        </section>

        {/* Section 2: Certified Machinery & Fleet (Light Slate Track) */}
        <section id="fleet" className="py-16 sm:py-20 bg-slate-50 w-full border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EquipmentGrid />
          </div>
        </section>

        {/* Section 3: Documented Projects Portfolio (Light White Track) */}
        <section id="projects" className="py-16 sm:py-20 bg-white w-full border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsPortfolio />
          </div>
        </section>

        {/* Section 4: Technical RFP Configurator (Light Slate Track) */}
        <section className="py-16 sm:py-20 bg-slate-50 w-full border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteRequest />
          </div>
        </section>

        {/* Section 5: Corporate Communications */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

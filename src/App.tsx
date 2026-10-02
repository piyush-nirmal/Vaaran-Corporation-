import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ServiceTabs } from './components/ServiceTabs';
import { Hero } from './components/Hero';
import { QuoteRequest } from './components/QuoteRequest';
import { EquipmentGrid } from './components/EquipmentGrid';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Building, HardHat, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Premium Corporate Navbar */}
      <nav className="bg-white border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-apcoBlue p-2 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-sm font-extrabold text-apcoBlue uppercase tracking-wider block">
                Varan Corporation
              </span>
              <span className="text-[10px] font-bold text-apcoRed uppercase tracking-widest block -mt-1">
                Infrastructure Group
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-apcoMuted">
              <span className="hover:text-apcoRed cursor-pointer transition-colors">Operations</span>
              <span className="hover:text-apcoRed cursor-pointer transition-colors">Projects Desk</span>
              <span className="hover:text-apcoRed cursor-pointer transition-colors">Compliance</span>
            </div>
            <button 
              className="hidden md:flex bg-apcoBlue text-white hover:bg-apcoRed hover:-translate-y-0.5 hover:shadow-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 items-center gap-1.5 rounded-lg shadow-sm"
            >
              <HardHat className="w-3.5 h-3.5" />
              <span>Client Portal</span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-apcoBlue hover:text-apcoRed transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <span className="block px-3 py-2 text-sm font-bold text-apcoMuted hover:text-apcoRed hover:bg-gray-50 rounded-lg uppercase tracking-wider cursor-pointer transition-colors">Operations</span>
              <span className="block px-3 py-2 text-sm font-bold text-apcoMuted hover:text-apcoRed hover:bg-gray-50 rounded-lg uppercase tracking-wider cursor-pointer transition-colors">Projects Desk</span>
              <span className="block px-3 py-2 text-sm font-bold text-apcoMuted hover:text-apcoRed hover:bg-gray-50 rounded-lg uppercase tracking-wider cursor-pointer transition-colors">Compliance</span>
              <button 
                className="mt-4 w-full bg-apcoBlue text-white hover:bg-apcoRed px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded-lg shadow-sm"
              >
                <HardHat className="w-4 h-4" />
                <span>Client Portal</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Heavy-Duty Hero Banner */}
      <Hero />

      {/* Main Core Content Container - Full Bleed */}
      <main className="w-full flex-grow flex flex-col space-y-0 bg-[#F4F6F9]">
        
        {/* Section 1: Operational Portfolios (Light Gray Track) */}
        <section className="py-12 bg-[#F4F6F9] w-full border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="border-l-8 border-apcoRed pl-5 py-1">
              <h2 className="text-2xl font-black uppercase text-apcoBlue tracking-tight">
                Operational Portfolios
              </h2>
              <p className="text-xs text-apcoMuted uppercase tracking-wider font-semibold mt-1">
                Explore capabilities, deliverables, and performance benchmarks across our core divisions.
              </p>
            </div>
          </div>
          <ServiceTabs />
        </section>

        {/* Section 2: RFQ / RFP Enterprise Form (Dark Track) */}
        <section className="py-12 bg-slate-950 w-full border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteRequest />
          </div>
        </section>

        {/* Section 3: Machinery & Fleet Section (Dark Track) */}
        <section className="py-12 bg-slate-950 w-full border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-8 border-apcoRed pl-5 py-1 mb-8">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight">
                Machinery & Fleet
              </h2>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                High-capacity operational equipment deployed on core infrastructural sites.
              </p>
            </div>
            <EquipmentGrid />
          </div>
        </section>

        {/* Section 4: Projects Portfolio Section (Light Gray Track) */}
        <section className="py-12 bg-[#F4F6F9] w-full border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-8 border-apcoRed pl-5 py-1 mb-8">
              <h2 className="text-2xl font-black uppercase text-apcoBlue tracking-tight">
                Projects Portfolio
              </h2>
              <p className="text-xs text-apcoMuted uppercase tracking-wider font-semibold mt-1">
                Recent infrastructure developments and commercial installations.
              </p>
            </div>
            <ProjectsPortfolio />
          </div>
        </section>

        {/* Corporate Contact & Inquiry (Self-contained section) */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;


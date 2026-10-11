import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppProvider } from './context/WhatsAppContext';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ScrollToTop } from './components/ScrollToTop';
import { GlassScrollTop } from './components/ui/GlassScrollTop';
import { AmbientGlassBackground } from './components/ui/AmbientGlassBackground';
import { track } from './services/analytics';

// Lazy-load pages for optimal performance and instant route transitions
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const OperationsPage = lazy(() => import('./pages/OperationsPage').then(m => ({ default: m.OperationsPage })));
const FleetPage = lazy(() => import('./pages/FleetPage').then(m => ({ default: m.FleetPage })));
const RfpPage = lazy(() => import('./pages/RfpPage').then(m => ({ default: m.RfpPage })));

// Modals
const CapabilityProfileModal = lazy(() => import('./components/CapabilityProfileModal').then(m => ({ default: m.CapabilityProfileModal })));
const ClientPortalModal = lazy(() => import('./components/ClientPortalModal').then(m => ({ default: m.ClientPortalModal })));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 text-xs font-mono text-slate-500 space-y-3">
      <div className="w-8 h-8 border-2 border-vrnNavy border-t-vrnOrange rounded-full animate-spin" />
      <span>Loading engineering module...</span>
    </div>
  );
}

function MainApp() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isCapabilityModalOpen, setIsCapabilityModalOpen] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
      infinite: false,
    });

    (window as unknown as { __lenis?: typeof lenis }).__lenis = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: typeof lenis }).__lenis;
    };
  }, []);

  const handleOpenPortal = () => {
    track('cta_click', { location: 'navbar_portal', target: 'client_portal_modal' });
    setIsPortalOpen(true);
  };

  const handleOpenCapabilityProfile = () => {
    track('cta_click', { location: 'lead_magnet_button', target: 'capability_profile_modal' });
    setIsCapabilityModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-800 selection:bg-vrnNavy selection:text-white overflow-x-hidden relative">
      
      {/* Ambient glass luminous gradient mesh */}
      <AmbientGlassBackground />

      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Global Persistent Header with Navigation */}
      <Navbar onOpenPortal={handleOpenPortal} />

      {/* Multi-Page Routes */}
      <main className="w-full flex-grow flex flex-col bg-transparent">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Exactly the 7 pages from User's Navigation Bar Reference */}
            <Route 
              path="/" 
              element={<HomePage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
            />
            <Route 
              path="/about-us" 
              element={<AboutPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
            />
            <Route 
              path="/careers" 
              element={<CareersPage />} 
            />
            <Route 
              path="/gallery" 
              element={<GalleryPage />} 
            />
            <Route 
              path="/photo-gallery" 
              element={<GalleryPage />} 
            />
            <Route 
              path="/sitemap" 
              element={<SitemapPage />} 
            />
            <Route 
              path="/site-map" 
              element={<SitemapPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/contact-us" 
              element={<ContactPage />} 
            />

            {/* Action / Enquiry / Operations Routes */}
            <Route 
              path="/enquiry" 
              element={<RfpPage />} 
            />
            <Route 
              path="/rfp-portal" 
              element={<RfpPage />} 
            />
            <Route 
              path="/operations" 
              element={<OperationsPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
            />
            <Route 
              path="/fleet" 
              element={<FleetPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
            />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Persistent Footer */}
      <Footer onOpenCapabilityModal={handleOpenCapabilityProfile} />

      {/* Smooth Scroll Floating Glass Back-to-Top Button */}
      <GlassScrollTop />

      {/* Floating Contextual WhatsApp Button (All pages) */}
      <WhatsAppFloatingButton />

      {/* Mobile Sticky Bar ("Call" and "Request Bid") */}
      <MobileStickyBar />

      {/* Capability Profile Download Modal (Lead Magnet) */}
      <Suspense fallback={null}>
        <CapabilityProfileModal
          isOpen={isCapabilityModalOpen}
          onClose={() => setIsCapabilityModalOpen(false)}
        />
      </Suspense>

      {/* Client Portal (Coming Soon) Modal */}
      <Suspense fallback={null}>
        <ClientPortalModal
          isOpen={isPortalOpen}
          onClose={() => setIsPortalOpen(false)}
        />
      </Suspense>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <WhatsAppProvider>
        <MainApp />
      </WhatsAppProvider>
    </BrowserRouter>
  );
}

export default App;

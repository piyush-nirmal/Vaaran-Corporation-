import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppProvider } from './context/WhatsAppContext';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ScrollToTop } from './components/ScrollToTop';
import { track } from './services/analytics';

// Lazy-load pages for optimal performance and instant route transitions
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const OperationsPage = lazy(() => import('./pages/OperationsPage').then(m => ({ default: m.OperationsPage })));
const FleetPage = lazy(() => import('./pages/FleetPage').then(m => ({ default: m.FleetPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const RfpPage = lazy(() => import('./pages/RfpPage').then(m => ({ default: m.RfpPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then(m => ({ default: m.AdminPage })));

import { ContentProvider } from './context/ContentContext';
import { useAdminShortcut } from './hooks/useAdminShortcut';

// Modals
const CapabilityProfileModal = lazy(() => import('./components/CapabilityProfileModal').then(m => ({ default: m.CapabilityProfileModal })));
const ClientPortalModal = lazy(() => import('./components/ClientPortalModal').then(m => ({ default: m.ClientPortalModal })));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 text-xs font-mono text-[#687386] space-y-3">
      <div className="w-8 h-8 border-2 border-[#3F73F5] border-t-transparent rounded-full animate-spin" />
      <span>Loading engineering module...</span>
    </div>
  );
}

function MainApp() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isCapabilityModalOpen, setIsCapabilityModalOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  useAdminShortcut();

  useEffect(() => {
    // Respect prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
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
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#20242D] selection:bg-[#3F73F5] selection:text-white overflow-x-hidden">
      


      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Global Persistent Header with Navigation (Hidden on /admin) */}
      {!isAdminRoute && <Navbar onOpenPortal={handleOpenPortal} />}

      {/* Multi-Page Routes with Smooth Page Transitions */}
      <main className="w-full flex-grow flex flex-col bg-white">
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex-grow flex flex-col"
            >
              <Routes location={location} key={location.pathname}>
                <Route 
                  path="/" 
                  element={<HomePage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
                />
                <Route 
                  path="/operations" 
                  element={<OperationsPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
                />
                <Route 
                  path="/fleet" 
                  element={<FleetPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
                />
                <Route 
                  path="/projects" 
                  element={<ProjectsPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
                />
                <Route 
                  path="/rfp-portal" 
                  element={<RfpPage />} 
                />
                <Route 
                  path="/contact" 
                  element={<ContactPage />} 
                />
                <Route 
                  path="/about" 
                  element={<AboutPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
                />
                <Route 
                  path="/about-us" 
                  element={<Navigate to="/about" replace />} 
                />
                <Route 
                  path="/careers" 
                  element={<CareersPage onOpenCapabilityModal={handleOpenCapabilityProfile} />} 
                />
                <Route 
                  path="/admin" 
                  element={<AdminPage />} 
                />
                {/* Fallback to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Global Persistent Footer (Hidden on /admin) */}
      {!isAdminRoute && <Footer onOpenCapabilityModal={handleOpenCapabilityProfile} />}

      {/* Floating Contextual WhatsApp Button (Hidden on /admin) */}
      {!isAdminRoute && <WhatsAppFloatingButton />}

      {/* Mobile Sticky Bar ("Call" and "Request Bid") (Hidden on /admin) */}
      {!isAdminRoute && <MobileStickyBar />}

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
      <ContentProvider>
        <WhatsAppProvider>
          <MainApp />
        </WhatsAppProvider>
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;

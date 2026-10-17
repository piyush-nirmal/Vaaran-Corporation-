import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { companyConfig } from '../data/content';
import { track } from '../services/analytics';

export const MobileStickyBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If on a subpage (About, Operations, etc.), show the bar immediately
    if (location.pathname !== '/') {
      setIsVisible(true);
      return;
    }

    // On Home page, only show the bar after scrolling past the Hero section
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 280);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleCall = () => {
    track('call_click', { location: 'mobile_sticky_bar' });
    window.location.href = `tel:${companyConfig.phoneRaw}`;
  };

  const handleRequestBid = () => {
    track('cta_click', { location: 'mobile_sticky_bar', target: '/rfp-portal' });
    navigate('/rfp-portal');
  };

  return (
    <aside
      aria-label="Quick contact actions"
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-lg shadow-slate-900/10 transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Call CTA */}
        <button
          type="button"
          onClick={handleCall}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-vrnNavy font-bold text-xs uppercase tracking-wider transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy cursor-pointer btn-smooth"
        >
          <Phone className="w-4 h-4 text-vrnOrange shrink-0" />
          <span>Call Desk</span>
        </button>

        {/* Request Bid Primary CTA */}
        <button
          type="button"
          onClick={handleRequestBid}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange cursor-pointer btn-smooth"
        >
          <span>Request Bid</span>
          <ArrowRight className="w-4 h-4 shrink-0 text-slate-950" />
        </button>
      </div>
    </aside>
  );
};

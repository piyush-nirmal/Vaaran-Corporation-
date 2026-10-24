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
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E2E9F4] px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call CTA - Standard 46px height, equal proportions */}
        <button
          type="button"
          onClick={handleCall}
          className="flex items-center justify-center gap-2 h-[46px] min-h-[46px] px-3 rounded-xl bg-[#EAF2FF] hover:bg-[#dbe9ff] text-[#2454C6] border border-[#BFDBFE] font-bold text-[13px] tracking-wide transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
          <span className="truncate">Call Desk</span>
        </button>

        {/* Request Bid Primary CTA - Standard 46px height, matching typography */}
        <button
          type="button"
          onClick={handleRequestBid}
          className="flex items-center justify-center gap-2 h-[46px] min-h-[46px] px-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[13px] tracking-wide transition-all shadow-md shadow-blue-600/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] cursor-pointer"
        >
          <span className="truncate">Request Bid</span>
          <ArrowRight className="w-4 h-4 shrink-0 text-white" />
        </button>
      </div>
    </aside>
  );
};

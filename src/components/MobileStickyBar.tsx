import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { companyConfig } from '../data/content';
import { track } from '../services/analytics';

export const MobileStickyBar: FC = () => {
  const navigate = useNavigate();

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
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-lg shadow-slate-900/10"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Call CTA */}
        <button
          type="button"
          onClick={handleCall}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-vrnNavy font-bold text-xs uppercase tracking-wider transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy cursor-pointer"
        >
          <Phone className="w-4 h-4 text-vrnOrange shrink-0" />
          <span>Call Desk</span>
        </button>

        {/* Request Bid Primary CTA */}
        <button
          type="button"
          onClick={handleRequestBid}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange cursor-pointer"
        >
          <span>Request Bid</span>
          <ArrowRight className="w-4 h-4 shrink-0 text-slate-950" />
        </button>
      </div>
    </aside>
  );
};

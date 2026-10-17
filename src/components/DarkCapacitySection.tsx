import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { darkBandContent } from '../data/content';
import { CountUp } from './ui/CountUp';
import { track } from '../services/analytics';

export const DarkCapacitySection: FC = () => {
  const navigate = useNavigate();

  const handleRequestBid = () => {
    track('cta_click', { location: 'dark_capacity_band', target: '/rfp-portal' });
    navigate('/rfp-portal');
  };

  return (
    <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden border-y border-white/10">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-vrnOrange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vrnNavy/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-wider text-vrnOrange uppercase">
              Execution Scale
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Nationwide Mobilization
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              ₹30+ Crore projects delivered with 150+ permanent personnel across Maharashtra, Goa, Delhi & Bangalore.
            </p>
          </div>

          <button
            type="button"
            onClick={handleRequestBid}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-orange-500/20 shrink-0"
          >
            <span>Request a Bid</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* 4 Clean Scale Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-white/10">
          {darkBandContent.stats.map((stat, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs space-y-1 hover:bg-white/10 transition-colors">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-none tabular-nums">
                <CountUp value={stat.value} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono pt-2">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

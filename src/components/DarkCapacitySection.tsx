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
    <section className="relative bg-[#F1F6FE] text-[#20242D] py-12 sm:py-20 lg:py-24 overflow-hidden border-y border-[#DCE8F8]">
      
      {/* Subtle blue ambient decorative lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DCE8F8]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DCE8F8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#2563EB] uppercase bg-[#E0ECFD] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md border border-[#D0E2FC]">
              Execution Scale
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#0F172A] font-heading mt-1 sm:mt-2 leading-tight">
              Nationwide Mobilization
            </h2>
            <p className="text-xs sm:text-base lg:text-[16px] text-[#64748B] font-normal leading-relaxed">
              ₹30+ Crore projects delivered with 150+ permanent personnel across Maharashtra, Goa, Delhi & Bangalore.
            </p>
          </div>

          <button
            type="button"
            onClick={handleRequestBid}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-[46px] lg:h-[48px] rounded-xl sm:rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-98 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-blue-600/25 hover:shadow-lg shrink-0"
          >
            <span>Request a Bid</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* 4 Clean Scale Stats in Soft Ice-Blue Tinted Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-[#DCE8F8]">
          {darkBandContent.stats.map((stat, i) => (
            <div key={i} className="p-4 sm:p-6 lg:p-7 bg-white/95 border border-[#DCE8F8] rounded-2xl shadow-xs hover:shadow-md transition-all space-y-1.5 sm:space-y-2 hover-card-smooth">
              <div className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2563EB] font-heading tracking-tight leading-none tabular-nums">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0F172A] font-mono pt-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#64748B] leading-normal font-body">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

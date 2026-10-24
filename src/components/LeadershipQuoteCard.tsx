import type { FC } from 'react';
import { Quote } from 'lucide-react';
import { leadershipQuote } from '../data/content';

export const LeadershipQuoteCard: FC = () => {
  return (
    <div className="bg-[#F8FAFF] border border-[#E2E9F4] rounded-3xl p-6 sm:p-10 text-[#20242D] shadow-xs relative overflow-hidden">
      {/* Decorative quotes watermark */}
      <div className="absolute top-4 right-6 text-[#3F73F5]/10 pointer-events-none select-none" aria-hidden="true">
        <Quote className="w-20 h-20 opacity-30 text-[#3F73F5]" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Photo placeholder with explicit dimensions */}
        <div className="shrink-0 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#3F73F5]/30 bg-[#EAF2FF] shadow-sm">
            <img
              src={leadershipQuote.imagePlaceholder}
              alt={`Portrait of ${leadershipQuote.author}, ${leadershipQuote.role}`}
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-[#3F73F5] text-white text-[12px] font-body font-bold uppercase tracking-[0.04em] px-2 py-0.5 rounded shadow-xs">
            LEADERSHIP
          </span>
        </div>

        {/* Text */}
        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="text-[11px] sm:text-xs font-body font-semibold uppercase tracking-wider text-[#3F73F5]">
            Executive Governance Directive
          </div>
          
          <blockquote className="text-base sm:text-lg font-normal text-[#20242D] leading-relaxed font-body">
            &ldquo;{leadershipQuote.quote}&rdquo;
          </blockquote>

          <div className="pt-2 border-t border-[#E2E9F4] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-base font-bold text-[#20242D] font-heading">
                {leadershipQuote.author}
              </div>
              <div className="text-xs text-[#687386] font-body">
                {leadershipQuote.role} · {leadershipQuote.credentials}
              </div>
            </div>

            <div className="text-[11px] sm:text-xs font-body font-medium tracking-wider text-[#687386] bg-white border border-[#E2E9F4] px-3 py-1 rounded-lg self-center sm:self-auto">
              Statutory Board Sign-Off
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

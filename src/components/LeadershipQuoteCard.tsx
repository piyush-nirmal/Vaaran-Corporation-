import type { FC } from 'react';
import { Quote } from 'lucide-react';
import { leadershipQuote } from '../data/content';

export const LeadershipQuoteCard: FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 text-slate-900 shadow-xs relative overflow-hidden">
      {/* Decorative quotes watermark */}
      <div className="absolute top-4 right-6 text-slate-200 pointer-events-none select-none" aria-hidden="true">
        <Quote className="w-20 h-20 opacity-40 text-slate-300" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Photo placeholder with explicit dimensions */}
        <div className="shrink-0 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-vrnNavy/20 bg-slate-200 shadow-md">
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
          <span className="absolute -bottom-2 -right-2 bg-vrnNavy text-white text-[12px] font-body font-medium uppercase tracking-[0.04em] px-2 py-0.5 rounded shadow-xs">
            LEADERSHIP
          </span>
        </div>

        {/* Text */}
        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="text-[11px] sm:text-xs font-body font-medium uppercase tracking-wider text-slate-500">
            Executive Governance Directive
          </div>
          
          <blockquote className="text-base sm:text-lg font-normal text-slate-700 leading-relaxed font-body">
            &ldquo;{leadershipQuote.quote}&rdquo;
          </blockquote>

          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-base font-semibold text-vrnNavy font-heading">
                {leadershipQuote.author}
              </div>
              <div className="text-xs text-slate-500 font-body">
                {leadershipQuote.role} · {leadershipQuote.credentials}
              </div>
            </div>

            <div className="text-[11px] sm:text-xs font-body font-medium tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-lg self-center sm:self-auto">
              Statutory Board Sign-Off
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

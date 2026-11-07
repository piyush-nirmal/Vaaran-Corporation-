import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { leadershipQuote } from '../data/content';

export const LeadershipQuoteCard: FC = () => {
  const boardPreviews = [
    {
      name: 'Mr. Anil Kumar Singh',
      role: 'MANAGING DIRECTOR',
      focus: 'Strategic Direction & Infrastructure Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85',
    },
    {
      name: 'Mr. Vinod Kumar Singh',
      role: 'JOINT MANAGING DIRECTOR',
      focus: 'Project Execution Framework & Field Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85',
    },
    {
      name: 'Mr. R. P. Singh',
      role: 'DIRECTOR',
      focus: 'Corporate Governance, Compliance & SPVs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=85',
    },
  ];

  return (
    <div className="bg-[#F8FAFF] border border-[#E2E9F4] rounded-3xl p-6 sm:p-10 text-[#20242D] shadow-xs relative overflow-hidden space-y-8">
      {/* Decorative quotes watermark */}
      <div className="absolute top-4 right-6 text-[#3F73F5]/10 pointer-events-none select-none" aria-hidden="true">
        <Quote className="w-24 h-24 opacity-25 text-[#3F73F5]" />
      </div>

      {/* Top Header Row: Directive & Link */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E9F4] pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] px-2.5 py-1 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXECUTIVE GOVERNANCE DIRECTIVE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#15315B] font-heading">
            Leadership That Builds at Scale
          </h3>
        </div>

        <Link
          to="/board-members"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1D4ED8] text-xs font-bold uppercase tracking-wider font-heading transition-colors shadow-sm shadow-blue-600/25 shrink-0 self-start sm:self-auto"
        >
          <span>View Dedicated Board Members Page</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </Link>
      </div>

      {/* Board Executive Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {boardPreviews.map((director) => (
          <div
            key={director.name}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E9F4] shadow-2xs space-y-3.5 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 border-[#E2E9F4] group-hover:border-[#2563EB]/40 bg-slate-100 shrink-0 shadow-2xs">
                <img
                  src={director.image}
                  alt={director.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="inline-block text-[10px] font-mono font-bold text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#DBEAFE] uppercase">
                  {director.role}
                </span>
                <h4 className="font-bold text-[#20242D] text-sm sm:text-base font-heading group-hover:text-[#2563EB] transition-colors truncate">
                  {director.name}
                </h4>
                <p className="text-[11px] text-[#687386] font-body line-clamp-2 leading-relaxed">
                  {director.focus}
                </p>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#F0F4FA] flex items-center justify-between text-[11px] font-mono text-[#2563EB]">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Statutory Board Member</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Banner */}
      <div className="relative z-10 pt-4 border-t border-[#E2E9F4] flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
        <blockquote className="text-sm sm:text-base font-normal text-[#20242D] leading-relaxed font-body flex-1 text-center md:text-left">
          &ldquo;{leadershipQuote.quote}&rdquo;
        </blockquote>

        <div className="shrink-0 text-center md:text-right space-y-0.5">
          <div className="text-sm font-bold text-[#20242D] font-heading">
            {leadershipQuote.author}
          </div>
          <div className="text-xs text-[#687386] font-body">
            {leadershipQuote.credentials}
          </div>
        </div>
      </div>
    </div>
  );
};

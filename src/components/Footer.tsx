import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Download, Phone, Mail } from 'lucide-react';
import { VrnLogo } from './VrnLogo';
import { companyConfig } from '../data/content';
import { useContent } from '../context/ContentContext';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onOpenCapabilityModal: () => void;
}

export const Footer: FC<FooterProps> = ({ onOpenCapabilityModal }) => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;

  return (
    <footer className="bg-gradient-to-b from-[#F0F5FF] via-[#EAF2FF] to-[#E4EEFF] pt-12 sm:pt-16 lg:pt-20 pb-28 sm:pb-28 lg:pb-12 border-t border-[#D6E4F7] text-[#687386] relative overflow-hidden">

      {/* Blueprint Grid Watermark in Footer */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-35 pointer-events-none" aria-hidden="true" />

      {/* Subtle Light Blue Ambient Glows */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#65B5FF]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#3F73F5]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Brand & Proposition (Col span 4) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group inline-flex text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
            >
              <VrnLogo size={36} />
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#20242D] uppercase block font-heading">
                  Varan Corporation
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold font-body text-[#3F73F5] uppercase tracking-wider block -mt-0.5">
                  Infrastructure Group
                </span>
              </div>
            </Link>

            <p className="text-[#687386] text-xs sm:text-sm leading-relaxed max-w-sm font-body">
              Trusted civil construction, commercial painting, and specialized structural fabrication services across India. Founded in 1997 on the ethos of &ldquo;Work is Worship&rdquo; (कर्म ही पूजा है).
            </p>

            {/* Lead Magnet Download Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenCapabilityModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#E2E9F4] hover:border-[#3F73F5]/40 bg-white hover:bg-[#EAF2FF]/50 text-[#3F73F5] text-xs font-semibold font-heading uppercase tracking-[0.04em] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] shadow-xs hover:shadow-sm min-h-[44px]"
              >
                <Download className="w-4 h-4 shrink-0 text-[#3F73F5]" />
                <span>Download Capability Profile (PDF)</span>
              </button>
            </div>
          </div>

          {/* Quick Operations Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Operations</h4>
            <ul className="space-y-2.5 text-xs text-[#687386] font-body">
              {[
                { to: '/operations', label: 'All Capabilities' },
                { to: '/operations', label: 'Civil Repairing' },
                { to: '/operations', label: 'Beautification & Maintenance' },
                { to: '/operations', label: 'Construction Work' },
                { to: '/operations', label: 'Protective Coatings' },
                { to: '/operations', label: 'Gantry Fabrication' },
                { to: '/fleet', label: 'Machinery & Fleet Deck' },
                { to: '/operations', label: 'Coating Simulator' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="relative group text-[#687386] hover:text-[#3F73F5] transition-colors text-left cursor-pointer inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#3F73F5] transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure Navigation (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-[#687386] font-body">
              {[
                { to: '/', label: 'Overview & Highlights' },
                { to: '/operations', label: 'Service Sectors' },
                { to: '/projects', label: 'Projects Portfolio' },
                { to: '/sustainability', label: 'Sustainability & ESG' },
                { to: '/rfp-portal', label: 'Technical RFP Portal' },
                { to: '/contact', label: 'Executive Tender Desk' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="relative group text-[#687386] hover:text-[#3F73F5] transition-colors text-left cursor-pointer inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#3F73F5] transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Inquiries (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Direct Contact</h4>
            <div className="space-y-3.5 text-xs text-[#687386] font-body">
              <div>
                <span className="text-[11px] font-medium text-[#687386] block uppercase tracking-wider">Direct Phone Lines</span>
                <div className="flex flex-col gap-1.5 mt-1.5 font-mono font-semibold">
                  <a
                    href="tel:+918104158309"
                    className="text-[#3F73F5] hover:text-[#2454C6] flex items-center gap-2 hover:underline transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#3F73F5] shrink-0" />
                    <span>+91 81041 58309</span>
                  </a>
                  <a
                    href="tel:+919324841946"
                    className="text-[#3F73F5] hover:text-[#2454C6] flex items-center gap-2 hover:underline transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#3F73F5] shrink-0" />
                    <span>+91 93248 41946</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-medium text-[#687386] block uppercase tracking-wider">Tender Inquiries</span>
                <a
                  href={`mailto:${currentCompany.email}`}
                  className="text-[#3F73F5] hover:text-[#2454C6] flex items-center gap-2 hover:underline font-mono font-semibold mt-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#3F73F5] shrink-0" />
                  <span>{currentCompany.email}</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#687386] border-t border-[#D6E4F7]/70 space-y-0.5">
                <span className="block font-medium text-[#20242D]">Headquarters</span>
                <span>Mumbai, Maharashtra, India</span>
                <span className="block text-[10px] text-[#8692A6] pt-0.5">{currentCompany.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D6E4F7] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-[13px] text-[#687386] font-body text-center sm:text-left">
          <p>
            &copy; <span className="font-mono">{CURRENT_YEAR}</span> Varan Corporation Infrastructure Group. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="hover:text-[#3F73F5] transition-colors cursor-pointer">Procurement Terms</Link>
            <Link to="/operations" className="hover:text-[#3F73F5] transition-colors cursor-pointer">HSE Policy</Link>
            <Link to="/" className="hover:text-[#3F73F5] transition-colors cursor-pointer">Sitemap</Link>
            <Link
              to="/admin"
              className="text-[#687386] hover:text-[#3F73F5] transition-colors cursor-pointer text-[10px] sm:text-[11px] font-mono opacity-60 hover:opacity-100"
              title="Admin Portal (Secret: 3 Shift presses or Shift-Click)"
            >
              Portal [Shift×3]
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

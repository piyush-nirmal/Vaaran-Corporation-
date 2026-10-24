import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check, Download, Loader2, ArrowRight } from 'lucide-react';
import { VrnLogo } from './VrnLogo';
import { submitLead, validateEmail } from '../services/leadService';
import { track } from '../services/analytics';
import { companyConfig } from '../data/content';
import { useContent } from '../context/ContentContext';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onOpenCapabilityModal: () => void;
}

export const Footer: FC<FooterProps> = ({ onOpenCapabilityModal }) => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const emailErr = validateEmail(email);
    if (emailErr) {
      setError(emailErr);
      return;
    }

    setLoading(true);

    try {
      const res = await submitLead({
        name: 'Newsletter Subscriber',
        company: 'Pending Tender / Bulletin',
        email,
        phone: 'Not provided',
        sourceSection: 'newsletter',
        specialDirectives: 'Requested monthly procurement and transit milestone bulletin',
      });

      if (res.success) {
        setSubscribed(true);
        track('cta_click', { location: 'footer_newsletter', email });
      } else {
        setError(res.error || 'Subscription failed. Please retry.');
      }
    } catch {
      setError('Connection interrupted. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

            <div className="text-xs font-body text-[#687386] pt-0.5">
              Registered Contractor ID: <span className="text-[#3F73F5] font-semibold font-mono text-xs">VRN-IND-9001</span>
            </div>

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

          {/* Quick Operations Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Operations</h4>
            <ul className="space-y-3 text-xs text-[#687386] font-body">
              {[
                { to: '/operations', label: 'All Capabilities' },
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

          {/* Infrastructure Governance & Tenders (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Navigation</h4>
            <ul className="space-y-3 text-xs text-[#687386] font-body">
              {[
                { to: '/', label: 'Overview & Highlights' },
                { to: '/projects', label: 'Projects Portfolio' },
                { to: '/rfp-portal', label: 'Technical RFP Portal' },
                { to: '/contact', label: 'Executive Tender Desk' },
                { to: '/operations', label: 'HSE & ISO Audits' },
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

          {/* Newsletter / Bulletin using submitLead (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Tender & Milestone Bulletin</h4>
            <p className="text-xs text-[#687386] leading-relaxed font-body">
              Receive quarterly technical bulletins on protective coating specifications, transit deployment schedules, and plant mobilization alerts.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 font-body font-medium animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subscription confirmed. Quarterly technical updates will be sent to your email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    aria-label="Corporate Email for Tender Bulletin"
                    className="flex-1 bg-white border border-[#E2E9F4] rounded-xl px-3.5 py-2.5 min-h-[44px] text-xs text-[#20242D] placeholder:text-[#687386] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] focus:border-[#3F73F5] font-body shadow-xs"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 min-h-[44px] bg-[#3F73F5] hover:bg-[#2454C6] text-white rounded-xl text-xs font-semibold font-heading uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shrink-0 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] active:scale-[0.99]"
                  >
                    {loading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <>
                        <span>Join</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-[11px] text-red-600 font-body">{error}</p>
                )}
                <span className="text-[10px] sm:text-[11px] text-[#687386] block font-body">
                  Strictly confidential. No spam. You may opt out anytime.
                </span>
              </form>
            )}

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs font-body text-[#687386] space-y-1">
              <div>Tender Inquiries: <a href={`mailto:${currentCompany.email}`} className="text-[#3F73F5] hover:underline font-semibold font-mono text-xs">{currentCompany.email}</a></div>
              <div>Direct Desk: <a href={`tel:${currentCompany.phoneRaw}`} className="text-[#3F73F5] hover:underline font-semibold font-mono text-xs">{currentCompany.phone}</a></div>
            </div>
          </div>

        </div>

        {/* Corporate Trust Matrix in Pure White Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-white p-4 sm:p-6 lg:p-8 border border-[#E2E9F4] rounded-xl sm:rounded-2xl shadow-sm">
          <div className="flex items-start gap-3 sm:gap-3.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EAF2FF] flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Statutory Labor Compliance</h5>
              <p className="text-xs text-[#687386] mt-0.5 sm:mt-1 leading-relaxed font-body">
                100% compliance with PASARA, DGR, ESIC, and PF regulatory labor code audits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-3.5 border-t border-[#E2E9F4] pt-3.5 md:border-t-0 md:pt-0 md:border-x md:border-[#E2E9F4] md:px-6">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EAF2FF] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">ISO 12944 Certified Standards</h5>
              <p className="text-xs text-[#687386] mt-0.5 sm:mt-1 leading-relaxed font-body">
                Sa 2.5 near-white blast profiles and high-durability C5-I corrosive environments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-3.5 border-t border-[#E2E9F4] pt-3.5 md:border-t-0 md:pt-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EAF2FF] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
            </div>
            <div>
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Scale & Continuous Mobilization</h5>
              <p className="text-xs text-[#687386] mt-0.5 sm:mt-1 leading-relaxed font-body">
                Delivered ₹30+ Crore projects with 150+ permanent personnel across Maharashtra, Goa, Delhi & Bangalore.
              </p>
            </div>
          </div>
        </div> */}

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

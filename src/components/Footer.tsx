import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle2, Check, Download, Loader2, ArrowRight } from 'lucide-react';
import { VrnLogo } from './VrnLogo';
import { submitLead, validateEmail } from '../services/leadService';
import { track } from '../services/analytics';
import { companyConfig } from '../data/content';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onOpenCapabilityModal: () => void;
}

export const Footer: FC<FooterProps> = ({ onOpenCapabilityModal }) => {
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
    <footer className="bg-slate-50 pt-20 pb-12 border-t border-slate-200 text-slate-700 relative overflow-hidden">
      
      {/* Blueprint Grid Watermark in Footer */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Proposition (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link 
              to="/"
              className="flex items-center gap-3 cursor-pointer group inline-flex text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
            >
              <VrnLogo size={42} />
              <div>
                <span className="text-xl font-black tracking-tight text-vrnNavy uppercase block font-display">
                  Varan Corporation
                </span>
                <span className="text-[10px] font-bold text-vrnNavy uppercase tracking-widest block -mt-1 font-mono">
                  Infrastructure Group
                </span>
              </div>
            </Link>
            
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Certified infrastructure contractor delivering heavy industrial coating, structural gantry fabrication, and transit workforce logistics across high-density corridors.
            </p>

            <div className="text-xs font-mono text-slate-600 pt-1">
              Registered Contractor ID: <span className="text-vrnNavy font-bold">VRN-IND-9001</span>
            </div>

            {/* Lead Magnet Download Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenCapabilityModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-vrnNavy text-vrnNavy hover:bg-vrnNavy hover:text-white text-xs font-bold font-display uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy shadow-2xs"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Download Capability Profile (PDF)</span>
              </button>
            </div>
          </div>

          {/* Quick Operations Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-vrnNavy">Operations</h4>
            <ul className="space-y-3 text-xs text-slate-700 font-sans">
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
                    className="relative group text-slate-700 hover:text-vrnNavy transition-colors text-left cursor-pointer inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-vrnNavy transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure Governance & Tenders (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-vrnNavy">Navigation</h4>
            <ul className="space-y-3 text-xs text-slate-700 font-sans">
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
                    className="relative group text-slate-700 hover:text-vrnNavy transition-colors text-left cursor-pointer inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-vrnNavy transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Bulletin using submitLead (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-vrnNavy">Tender & Milestone Bulletin</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Receive quarterly technical bulletins on protective coating specifications, transit deployment schedules, and plant mobilization alerts.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 font-sans font-medium animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subscription confirmed. Quarterly technical updates will be sent to your email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    aria-label="Corporate Email for Tender Bulletin"
                    className="flex-1 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-vrnNavy focus:border-vrnNavy"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2.5 bg-vrnNavy hover:bg-vrnNavy-dark text-white rounded-xl text-xs font-bold font-display uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shrink-0 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
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
                  <p className="text-[11px] text-red-600 font-sans">{error}</p>
                )}
                <span className="text-[10px] text-slate-600 block font-mono">
                  Strictly confidential. No spam. You may opt out anytime.
                </span>
              </form>
            )}

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs font-mono text-slate-600 space-y-1">
              <div>Tender Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-vrnNavy hover:underline font-bold">{companyConfig.email}</a></div>
              <div>Direct Desk: <a href={`tel:${companyConfig.phoneRaw}`} className="text-vrnNavy hover:underline font-bold">{companyConfig.phone}</a></div>
            </div>
          </div>

        </div>

        {/* Corporate Trust Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 sm:p-8 border border-slate-200 rounded-3xl shadow-navy-sm">
          <div className="flex items-start gap-3.5">
            <Shield className="w-6 h-6 text-vrnNavy shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Statutory Labor Compliance</h5>
              <p className="text-[11px] text-slate-700 mt-0.5 leading-relaxed font-sans">
                100% compliance with PASARA, DGR, ESIC, and PF regulatory labor code audits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4 md:border-t-0 md:pt-0 md:border-x md:border-slate-200 md:px-6">
            <Award className="w-6 h-6 text-vrnNavy shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">ISO 12944 Certified Standards</h5>
              <p className="text-[11px] text-slate-700 mt-0.5 leading-relaxed font-sans">
                Sa 2.5 near-white blast profiles and high-durability C5-I corrosive environments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4 md:border-t-0 md:pt-0">
            <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Scale & Continuous Mobilization</h5>
              <p className="text-[11px] text-slate-700 mt-0.5 leading-relaxed font-sans">
                Managing 1,200+ certified personnel across 2M+ sq.ft. of municipal infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Oversized Engineered Wordmark Treatment */}
        <div className="pt-6 border-t border-slate-200 text-center select-none overflow-hidden">
          <span className="text-[clamp(2.5rem,9vw,7.5rem)] font-black text-slate-200/70 tracking-tighter uppercase font-display block leading-none">
            VARAN CORPORATION
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
          <p>
            &copy; {CURRENT_YEAR} Varan Corporation Infrastructure Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-vrnNavy transition-colors cursor-pointer">Procurement Terms</Link>
            <Link to="/operations" className="hover:text-vrnNavy transition-colors cursor-pointer">HSE Policy</Link>
            <Link to="/" className="hover:text-vrnNavy transition-colors cursor-pointer">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

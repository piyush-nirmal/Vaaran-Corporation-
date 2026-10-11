import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check, Download, Loader2, ArrowRight } from 'lucide-react';
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
    <footer className="bg-gradient-to-br from-[#8ACFF8] to-sky-400 pt-20 pb-12 text-slate-900 relative overflow-hidden border-t border-[#8ACFF8]/50">
      
      {/* Subtle Engineered Texture */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none mix-blend-multiply" aria-hidden="true" />
      
      {/* Premium Glass Orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-white/30 rounded-full blur-3xl pointer-events-none opacity-60" aria-hidden="true" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-white/20 rounded-full blur-3xl pointer-events-none opacity-50" aria-hidden="true" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Proposition (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link 
              to="/" 
              className="flex items-center gap-3 cursor-pointer group inline-flex text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <div className="bg-slate-900 p-1.5 rounded-xl shadow-md border border-slate-800">
                <VrnLogo size={32} className="text-[#8ACFF8]" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-slate-900 uppercase block font-heading leading-tight drop-shadow-sm">
                  Varan Corporation
                </span>
                <span className="text-[10px] font-semibold font-body text-slate-800 uppercase tracking-widest block mt-0.5">
                  Infrastructure Group
                </span>
              </div>
            </Link>
            
            <p className="text-slate-900/80 text-[13px] sm:text-sm leading-relaxed max-w-sm font-body font-medium">
              Certified infrastructure contractor delivering heavy industrial coating, structural gantry fabrication, and transit workforce logistics across high-density corridors.
            </p>

            <div className="text-xs font-body text-slate-800 pt-1 font-medium">
              Registered Contractor ID: <span className="text-slate-900 font-bold font-mono text-xs">VRN-IND-9001</span>
            </div>

            {/* Lead Magnet Download Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCapabilityModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/40 bg-white/90 backdrop-blur-md hover:bg-white text-slate-900 text-xs font-bold font-heading uppercase tracking-[0.04em] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 shrink-0 text-[#8ACFF8]" />
                <span>Download Capability Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">Quick Links</h4>
            <ul className="space-y-3 text-xs text-slate-700 font-body font-medium">
              {[
                { to: '/', label: 'HOME' },
                { to: '/about', label: 'ABOUT US' },
                { to: '/projects', label: 'PROJECTS' },
                { to: '/careers', label: 'CAREERS' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="relative group text-slate-700 hover:text-[#0F2942] font-semibold transition-colors text-left cursor-pointer inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#8ACFF8] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">Explore</h4>
            <ul className="space-y-3 text-xs text-slate-700 font-body font-medium">
              {[
                { to: '/gallery', label: 'PHOTO GALLERY' },
                { to: '/sitemap', label: 'SITE MAP' },
                { to: '/contact', label: 'CONTACT US' },
                { to: '/rfp-portal', label: 'ENQUIRY DESK' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="relative group text-slate-700 hover:text-[#0F2942] font-semibold transition-colors text-left cursor-pointer inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#8ACFF8] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Bulletin using submitLead (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">Tender & Milestone Bulletin</h4>
            <p className="text-[13px] text-slate-900/80 leading-relaxed font-body font-medium">
              Receive quarterly technical bulletins on protective coating specifications, transit deployment schedules, and plant mobilization alerts.
            </p>

            {subscribed ? (
              <div className="p-4 bg-emerald-50/90 backdrop-blur-md border border-emerald-200/50 rounded-xl flex items-center gap-3 text-xs text-emerald-800 font-body font-bold animate-fadeIn shadow-md">
                <div className="bg-emerald-100 p-1.5 rounded-full">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                </div>
                <span>Subscription confirmed. Technical updates will be sent to your email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    aria-label="Corporate Email for Tender Bulletin"
                    className="flex-1 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl px-4 py-3 text-[13px] text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent font-body shadow-sm transition-all hover:bg-white"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold font-heading uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50 shrink-0 shadow-md shadow-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Join</span>
                        <ArrowRight className="w-4 h-4 text-[#8ACFF8]" />
                      </>
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-[11px] text-red-600 font-body font-medium px-1">{error}</p>
                )}
                <span className="text-[11px] text-slate-900/70 block font-body px-1 font-medium">
                  Strictly confidential. No spam. You may opt out anytime.
                </span>
              </form>
            )}

            {/* Quick Contact Line */}
            <div className="pt-4 text-[13px] font-body text-slate-900/80 space-y-1.5 px-1">
              <div>Tender Inquiries: <a href={`mailto:${companyConfig.email}`} className="text-slate-900 hover:text-white hover:underline font-bold font-mono text-xs transition-colors drop-shadow-sm">{companyConfig.email}</a></div>
              <div>Direct Desk: <a href={`tel:${companyConfig.phoneRaw}`} className="text-slate-900 hover:text-white hover:underline font-bold font-mono text-xs transition-colors drop-shadow-sm">{companyConfig.phone}</a></div>
            </div>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-slate-900/40 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-slate-900/80 font-body font-medium">
          <p>
            &copy; <span className="font-mono">{CURRENT_YEAR}</span> Varan Corporation Infrastructure Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 font-medium">
            <Link to="/contact" className="hover:text-slate-900 transition-colors cursor-pointer">Procurement Terms</Link>
            <Link to="/operations" className="hover:text-slate-900 transition-colors cursor-pointer">HSE Policy</Link>
            <Link to="/" className="hover:text-slate-900 transition-colors cursor-pointer">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

import { useState } from 'react';
import type { FC } from 'react';
import { Shield, Award, CheckCircle2, Check } from 'lucide-react';
import { VrnLogo } from './VrnLogo';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 pt-16 pb-12 border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand & Proposition (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              className="flex items-center gap-3 cursor-pointer group inline-flex"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <VrnLogo size={36} />
              <div>
                <span className="text-lg font-black tracking-tight text-vrnNavy uppercase block font-display">
                  Varan Corporation
                </span>
                <span className="text-[10px] font-bold text-vrnOrange uppercase tracking-widest block -mt-1 font-mono">
                  Infrastructure Group
                </span>
              </div>
            </div>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Certified infrastructure contractor delivering heavy industrial coating, structural gantry fabrication, and transit workforce logistics across high-density corridors.
            </p>

            <div className="text-xs font-mono text-slate-500 pt-1">
              Registered Contractor ID: <span className="text-vrnNavy font-bold">VRN-IND-9001</span>
            </div>
          </div>

          {/* Quick Operations Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-vrnNavy">Operations</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
              <li><button type="button" onClick={() => scrollTo('operations')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">Protective Coatings</button></li>
              <li><button type="button" onClick={() => scrollTo('operations')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">Gantry Fabrication</button></li>
              <li><button type="button" onClick={() => scrollTo('operations')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">Surface Blasting</button></li>
              <li><button type="button" onClick={() => scrollTo('fleet')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">Machinery Deck</button></li>
            </ul>
          </div>

          {/* Infrastructure Desk (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-vrnNavy">Governance</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
              <li><button type="button" onClick={() => scrollTo('projects')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">Projects Portfolio</button></li>
              <li><button type="button" onClick={() => scrollTo('rfp-quote')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">RFP Portal</button></li>
              <li><button type="button" onClick={() => scrollTo('operations')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">HSE & ISO Audits</button></li>
              <li><button type="button" onClick={() => scrollTo('contact')} className="hover:text-vrnNavy transition-colors text-left cursor-pointer">Executive Desk</button></li>
            </ul>
          </div>

          {/* Newsletter / Bulletin (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-vrnNavy">Tender & Milestone Bulletin</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Quarterly operational briefings on major municipal transit and corridor executions.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center gap-2 font-mono">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quarterly notification channel connected.</span>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                <input
                  required
                  type="email"
                  placeholder="Official Email"
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                />
                <button
                  type="submit"
                  className="bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer font-display"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Corporate Trust Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 sm:p-7 border border-slate-200 rounded-2xl mb-12 shadow-xs">
          <div className="flex items-start gap-3.5">
            <Shield className="w-6 h-6 text-vrnOrange shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Statutory Labor Compliance</h5>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed font-sans">
                100% compliance with PASARA, DGR, ESIC, and PF regulatory labor code audits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4 md:border-t-0 md:pt-0 md:border-x md:border-slate-200 md:px-6">
            <Award className="w-6 h-6 text-vrnCyan-dark shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">ISO 12944 Certified Standards</h5>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed font-sans">
                Sa 2.5 near-white blast profiles and high-durability C5-I corrosive environments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4 md:border-t-0 md:pt-0">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Scale & Continuous Mobilization</h5>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed font-sans">
                Managing 1,200+ certified personnel across 2M+ sq.ft. of municipal infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {CURRENT_YEAR} Varan Corporation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-vrnNavy transition-colors cursor-pointer">Procurement Terms</span>
            <span className="hover:text-vrnNavy transition-colors cursor-pointer">HSE Policy</span>
            <span className="hover:text-vrnNavy transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

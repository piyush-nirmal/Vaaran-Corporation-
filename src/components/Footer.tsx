import type { FC } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer className="bg-apcoBlue pt-24 pb-12 border-t border-white/5 mt-auto font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & Description */}
          <div className="space-y-8 lg:col-span-1">
            <div className="flex flex-col">
              <span className="text-[15px] sm:text-[17px] font-black text-white tracking-[0.2em] uppercase leading-none">
                Varan Corporation
              </span>
              <span className="text-[9px] font-bold text-apcoRed uppercase tracking-[0.35em] mt-2">
                Established 1997
              </span>
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed font-medium pr-4">
              Building Infrastructure, Enhancing Horizons. Over 25+ years of excellence executing ₹30+ Crores across civil construction, marine protective painting, and structural fabrication in India.
            </p>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              "Work is Worship" (कर्म ही पूजा है)
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-8">Divisions</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services/commercial-industrial-painting" className="text-[13px] font-medium text-slate-300 hover:text-white transition-colors block">
                  Industrial & Marine Painting
                </Link>
              </li>
              <li>
                <Link to="/services/civil-works-construction" className="text-[13px] font-medium text-slate-300 hover:text-white transition-colors block">
                  Civil Works & Construction
                </Link>
              </li>
              <li>
                <Link to="/services/structural-fabrication-safety" className="text-[13px] font-medium text-slate-300 hover:text-white transition-colors block">
                  Structural Steel & Safety Nets
                </Link>
              </li>
              <li>
                <Link to="/services/urban-roadway-beautification" className="text-[13px] font-medium text-slate-300 hover:text-white transition-colors block">
                  Urban Beautification
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-8">Major Works</h4>
            <ul className="space-y-4">
              <li className="text-[13px] font-medium text-slate-300">Bandra–Worli Sea Link Coating</li>
              <li className="text-[13px] font-medium text-slate-300">L&T Vashi Flyover Protection</li>
              <li className="text-[13px] font-medium text-slate-300">TATA Metro Rail Corridor</li>
              <li className="text-[13px] font-medium text-slate-300">MEP Delhi Toll Infrastructure</li>
            </ul>
          </div>

          {/* Official Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-8">Direct Contact</h4>
            <div className="space-y-5">
              <a href="tel:+918104158309" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-apcoRed transition-colors">
                  <Phone className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[13px] font-bold text-slate-300 group-hover:text-white transition-colors tracking-wide">+91 8104158309</span>
              </a>
              <a href="mailto:varancorporation@gmail.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-apcoRed transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[13px] font-bold text-slate-300 group-hover:text-white transition-colors tracking-wide">varancorporation@gmail.com</span>
              </a>
              <p className="text-[11px] font-medium text-slate-500 pt-2 leading-relaxed">
                Operations across Maharashtra, Goa, Delhi & Bangalore.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Varan Corporation. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
            <span>Work is Worship (कर्म ही पूजा है)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

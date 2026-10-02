import type { FC } from 'react';
import { Building, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t-8 border-apcoRed mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="bg-apcoBlue p-2 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-white uppercase tracking-wider block">
                  Varan Corporation
                </span>
                <span className="text-[10px] font-bold text-apcoRed uppercase tracking-widest block -mt-1">
                  Infrastructure Group
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering structural integrity and workforce logistics across the nation's most demanding infrastructure projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-apcoBlue hover:bg-apcoBlue transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-apcoBlue hover:bg-apcoBlue transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Operations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Industrial Painting</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Manpower Logistics</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Structural Fabrication</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Machinery Fleet</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Project Portfolio</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Compliance & Safety</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-apcoRed transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Contact Information</a></li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Corporate Bulletin</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to receive quarterly updates on infrastructural milestones.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-apcoBlue transition-colors" />
              <button className="w-full bg-apcoBlue hover:bg-apcoRed text-white font-bold uppercase tracking-wider text-xs px-4 py-3 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Corporate Trust Matrix (Repurposed from App.tsx) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-900 text-white p-8 border border-white/5 rounded-2xl mb-12">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-apcoRed flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Secure Operations</h4>
              <p className="text-[11px] text-gray-400 mt-1">100% compliance with PASARA, DGR, ESIC, and PF labor regulatory audits.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-white/5 pt-4 md:border-t-0 md:pt-0 md:border-x md:border-x-white/5 md:px-6">
            <Award className="w-8 h-8 text-apcoRed flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quality Assurance</h4>
              <p className="text-[11px] text-gray-400 mt-1">Certified execution using industrial-grade Sa 2.5 blast profiles and ISO 12944.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-white/5 pt-4 md:border-t-0 md:pt-0">
            <CheckCircle className="w-8 h-8 text-apcoRed flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Scale & Precision</h4>
              <p className="text-[11px] text-gray-400 mt-1">Managing 1,200+ personnel across 2M+ sq.ft. of corporate assets.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-semibold tracking-wider">
            &copy; {new Date().getFullYear()} Varan Corporation. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500 font-semibold tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

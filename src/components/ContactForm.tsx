import type { FC } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactForm: FC = () => {
  return (
    <div className="space-y-16 pl-0 lg:pl-16 lg:border-l border-slate-200/60">
      <div>
        <h3 className="text-2xl font-light tracking-tight text-slate-800 mb-3">Corporate Comms</h3>
        <p className="text-sm text-slate-500 font-light max-w-sm leading-relaxed">Direct lines to our executive project management and site supervisors.</p>
      </div>

      <div className="space-y-10">
        <div className="group flex items-start gap-6 cursor-pointer">
          <div className="p-4 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-md group-hover:scale-110 transition-all duration-500 text-slate-400 group-hover:text-apcoRed border border-slate-100/50">
            <MapPin className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Operations Hub</h4>
            <p className="text-sm font-light text-slate-700 leading-relaxed">
              Active Projects Across:<br/>Maharashtra, Goa, Delhi & Bangalore
            </p>
          </div>
        </div>
        
        <div className="group flex items-start gap-6 cursor-pointer">
          <div className="p-4 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-md group-hover:scale-110 transition-all duration-500 text-slate-400 group-hover:text-apcoRed border border-slate-100/50">
            <Phone className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Direct Line</h4>
            <p className="text-lg font-light text-slate-900 tracking-tight">
              +91 8104158309
            </p>
            <p className="text-[11px] text-slate-500 mt-1">Mon-Sat, 08:00 - 19:00 IST</p>
          </div>
        </div>

        <div className="group flex items-start gap-6 cursor-pointer">
          <div className="p-4 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-md group-hover:scale-110 transition-all duration-500 text-slate-400 group-hover:text-apcoRed border border-slate-100/50">
            <Mail className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Official Email</h4>
            <p className="text-lg font-light text-slate-900 tracking-tight">
              varancorporation@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Mini Quick-contact Form */}
      <div className="pt-10 border-t border-slate-200/60">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Quick Message</h4>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your Email Address *" className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400" />
          <textarea rows={2} placeholder="Brief Message..." className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400 resize-none"></textarea>
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 hover:text-apcoRed transition-colors flex items-center gap-2 group">
            Send Message <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>

    </div>
  );
};

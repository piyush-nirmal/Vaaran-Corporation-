import type { FC } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const ContactPage: FC = () => {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-outfit font-light text-slate-800 mb-4">
              Corporate Comms
            </h1>
            <p className="text-slate-500 text-sm mb-12 max-w-md leading-relaxed">
              Direct lines to our executive project management and site supervisors.
            </p>

            <div className="space-y-8">
              {/* Operations Hub */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex-shrink-0">
                  <MapPin className="w-6 h-6 text-apcoRed" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Operations Hub
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Active Projects Across:<br />
                    Maharashtra, Goa, Delhi & Bangalore
                  </p>
                </div>
              </div>

              {/* Direct Line */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex-shrink-0">
                  <Phone className="w-6 h-6 text-apcoRed" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Direct Line
                  </h4>
                  <p className="text-lg font-outfit text-slate-800 mb-1">
                    +91 8104158309
                  </p>
                  <p className="text-xs text-slate-500">
                    Mon-Sat, 08:00 - 19:00 IST
                  </p>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex-shrink-0">
                  <Mail className="w-6 h-6 text-apcoRed" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Official Email
                  </h4>
                  <p className="text-lg font-outfit text-slate-800">
                    varancorporation@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">
              Quick Message
            </h3>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="Your Email Address *" 
                  className="w-full bg-transparent border-b border-gray-200 pb-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-apcoBlue transition-colors"
                />
              </div>

              <div className="relative">
                <textarea 
                  required
                  placeholder="Brief Message..." 
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-200 pb-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-apcoBlue transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 hover:text-apcoBlue transition-colors pt-4"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

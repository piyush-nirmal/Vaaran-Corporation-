import type { FC } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactForm: FC = () => {
  return (
    <section className="py-12 bg-slate-950 text-white border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border-l-8 border-apcoRed pl-5 py-1">
              <h2 className="text-2xl font-black uppercase text-white tracking-tight">
                Corporate Communications
              </h2>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-2">
                Direct lines to our operational hubs and executive project management.
              </p>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Whether you require heavy-duty industrial execution, commercial infrastructure support, or large-scale workforce logistics, our team is ready to deliver precision at scale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Headquarters</h4>
                  <p className="text-sm text-slate-300 mt-1">124 Industrial Corridor, Sector 7<br/>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Direct Line</h4>
                  <p className="text-sm text-slate-300 mt-1">+91 (22) 4567 8900<br/><span className="text-xs text-slate-400">Mon-Sat, 08:00 - 18:00</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">Electronic Mail</h4>
                  <p className="text-sm text-slate-300 mt-1">projects@vaarancoop.com<br/>compliance@vaarancoop.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl shadow-slate-950/20 border border-slate-800">
            <h3 className="text-xl font-black uppercase text-white mb-6 tracking-tight">Initiate Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder-slate-600" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder-slate-600" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Corporate Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder-slate-600" placeholder="john.doe@company.com" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Subject Matter</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all">
                  <option className="bg-slate-950 text-white">Industrial Painting</option>
                  <option className="bg-slate-950 text-white">Manpower Logistics</option>
                  <option className="bg-slate-950 text-white">Structural Fabrication</option>
                  <option className="bg-slate-950 text-white">Compliance Audit</option>
                  <option className="bg-slate-950 text-white">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all resize-none placeholder-slate-600" placeholder="Provide details about your operational requirements..."></textarea>
              </div>

              <button className="w-full bg-[#E31E24] hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2 mt-4 shadow-md">
                <span>Dispatch Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

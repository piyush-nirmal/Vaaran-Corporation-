import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const subjects = [
  'Protective Coating RFP',
  'Gantry Fabrication',
  'Site Safety Audit',
  'Workforce Logistics',
  'General Corporate Inquiry'
];

export const ContactForm: FC = () => {
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200/90 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Channels */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-vrnOrange font-bold">
                Executive Desk
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
                Corporate Communications
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                Direct channels to our regional operational headquarters and senior project managers.
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-3.5">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-vrnNavy/30 transition-colors">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-vrnOrange shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Central Operations Hub</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                    124 Industrial Corridor, Sector 7<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-vrnNavy/30 transition-colors">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-vrnCyan-dark shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Engineering Dispatch Wire</h4>
                  <p className="text-xs text-slate-800 font-mono font-bold mt-1">+91 (22) 4567 8900</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Mon–Sat · 08:00 – 19:00 IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-vrnNavy/30 transition-colors">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-emerald-600 shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Official Correspondence</h4>
                  <p className="text-xs text-slate-800 font-mono font-bold mt-1">projects@vaarancoop.com</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Encrypted tender & compliance desk</p>
                </div>
              </div>

            </div>

            {/* Compliance Guarantee */}
            <div className="p-4 bg-vrnNavy-tint border border-vrnNavy/20 rounded-xl flex items-center gap-3 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-vrnOrange shrink-0" />
              <span>All communications handled under strict non-disclosure and municipal procurement compliance.</span>
            </div>

          </div>

          {/* Right Column: Sleek Inquiry Console */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-vrnNavy mb-1 font-display">Initiate Operational Inquiry</h3>
            <p className="text-xs text-slate-600 mb-6 font-sans">
              Select inquiry classification to route directly to the designated project superintendent.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-vrnNavy font-display">Transmission Acknowledged</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-sans">
                  Your inquiry regarding <strong className="text-slate-900">{activeSubject}</strong> has been assigned to our senior operations desk. Expect review within 4 business hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-white hover:bg-slate-100 text-vrnNavy font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-slate-200 shadow-xs font-display"
                  >
                    Send Additional Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Topic Pills */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Classification</label>
                  <div className="flex flex-wrap gap-1.5">
                    {subjects.map((sub) => {
                      const isSel = sub === activeSubject;
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setActiveSubject(sub)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-display ${
                            isSel
                              ? 'bg-vrnNavy text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-600 hover:text-vrnNavy hover:bg-slate-100'
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">First Name *</label>
                    <input
                      required
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Vikram"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Last Name *</label>
                    <input
                      required
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Mehta"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Corporate Email *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="v.mehta@enterprise.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Operational Directive / Scope Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide corridor details, estimated square footage, or fabrication milestones..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer mt-2 font-display"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4 text-vrnOrange" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

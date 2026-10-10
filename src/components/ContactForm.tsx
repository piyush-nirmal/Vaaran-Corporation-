import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { contactSubjects, companyConfig } from '../data/content';
import { submitLead, validateEmail, validatePhone, validateRequired } from '../services/leadService';
import { track } from '../services/analytics';

export const ContactForm: FC = () => {
  const [activeSubject, setActiveSubject] = useState(contactSubjects[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const fieldErrors: Record<string, string> = {};
    const fnErr = validateRequired(firstName, 'First name');
    if (fnErr) fieldErrors.firstName = fnErr;

    const emailErr = validateEmail(email);
    if (emailErr) fieldErrors.email = emailErr;

    const phoneErr = validatePhone(phone);
    if (phoneErr) fieldErrors.phone = phoneErr;

    const msgErr = validateRequired(message, 'Message / operational directive');
    if (msgErr) fieldErrors.message = msgErr;

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const fullName = `${firstName} ${lastName}`.trim();
      const res = await submitLead({
        name: fullName,
        company: 'Corporate Inquiry',
        email,
        phone,
        sector: activeSubject,
        specialDirectives: message,
        honeypot,
        sourceSection: 'contact_form',
      });

      if (res.success) {
        setSubmitted(true);
        track('cta_click', { location: 'contact_form_inquiry', subject: activeSubject });
      } else {
        setServerError(res.error || 'Failed to dispatch inquiry. Please retry.');
      }
    } catch {
      setServerError('Network timeout occurred. Please retry your inquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setServerError(null);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 border-t border-slate-200/90 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Channels */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-vrnNavy font-bold">
                Executive Desk
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
                Corporate Communications Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-sans">
                Direct channels to regional headquarters and senior project managers.
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-3.5">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-vrnNavy/30 transition-colors">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-vrnNavy shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Central Operations Hub</h4>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed font-sans">
                    {companyConfig.headquarters.address}<br />
                    {companyConfig.headquarters.city}, {companyConfig.headquarters.state} {companyConfig.headquarters.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-vrnNavy/30 transition-colors">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-vrnNavy shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Engineering Dispatch Wire</h4>
                  <p className="text-xs text-slate-900 font-mono font-bold mt-1">{companyConfig.phone}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{companyConfig.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-vrnNavy/30 transition-colors">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-emerald-700 shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vrnNavy font-display">Official Tender Email</h4>
                  <p className="text-xs text-slate-900 font-mono font-bold mt-1">{companyConfig.email}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Encrypted tender & compliance desk</p>
                </div>
              </div>

            </div>

            {/* Compliance Guarantee */}
            <div className="p-4 bg-vrnNavy-tint border border-vrnNavy/20 rounded-xl flex items-center gap-3 text-xs text-slate-800">
              <ShieldCheck className="w-5 h-5 text-vrnNavy shrink-0" />
              <span>All communications handled under strict non-disclosure and municipal procurement compliance.</span>
            </div>

          </div>

          {/* Right Column: Inquiry Console */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-vrnNavy mb-1 font-display">Initiate Operational Inquiry</h3>
            <p className="text-xs text-slate-700 mb-6 font-sans">
              Route directly to the designated project superintendent.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-vrnNavy font-display">Transmission Acknowledged</h4>
                <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed font-sans">
                  Your inquiry regarding <strong className="text-slate-900">{activeSubject}</strong> has been assigned to our senior operations desk.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-white hover:bg-slate-100 text-vrnNavy font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-slate-300 shadow-xs font-display"
                  >
                    Send Additional Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="contact_honeypot"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                {serverError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-800">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Topic Pills */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">Classification</label>
                  <div className="flex flex-wrap gap-1.5">
                    {contactSubjects.map((sub) => {
                      const isSel = sub === activeSubject;
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setActiveSubject(sub)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                            isSel
                              ? 'bg-vrnNavy text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-700 hover:text-vrnNavy hover:bg-slate-100'
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <label className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">First Name *</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (errors.firstName) setErrors({ ...errors, firstName: '' });
                      }}
                      placeholder="Vikram"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                        errors.firstName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.firstName && <p className="text-[10px] text-rose-600 font-medium">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Mehta"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">Corporate Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="v.mehta@enterprise.com"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-600 font-medium">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">Direct Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-rose-600 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">Operational Directive / Scope Details *</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Provide corridor details, estimated square footage, or fabrication milestones..."
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors resize-none ${
                      errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-600 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4 text-amber-400" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

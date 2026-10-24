import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { contactSubjects, companyConfig } from '../data/content';
import { useContent } from '../context/ContentContext';
import { submitLead, validateEmail, validatePhone, validateRequired } from '../services/leadService';
import { track } from '../services/analytics';

export const ContactForm: FC = () => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;
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
    <section className="py-6 sm:py-10 lg:py-12 bg-white text-[#20242D] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Corporate Channels */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#3F73F5] font-bold">
                Executive Desk
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#20242D] tracking-tight mt-1 font-heading">
                Corporate Communications Desk
              </h2>
              <p className="text-xs sm:text-sm text-[#687386] mt-1.5 leading-relaxed font-body">
                Direct channels to regional headquarters and senior project managers.
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-2.5 sm:space-y-3.5">
              
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] hover:border-[#3F73F5]/30 hover-card-smooth transition-colors">
                <div className="p-2 sm:p-2.5 bg-white border border-[#E2E9F4] rounded-lg text-[#3F73F5] shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Office Address</h4>
                  <p className="text-xs text-[#687386] mt-0.5 sm:mt-1 leading-relaxed font-body">
                    {currentCompany.headquarters.address || 'Mumbai, Maharashtra, India'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] hover:border-[#3F73F5]/30 hover-card-smooth transition-colors">
                <div className="p-2 sm:p-2.5 bg-white border border-[#E2E9F4] rounded-lg text-[#3F73F5] shrink-0 shadow-xs">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Engineering Dispatch Wire</h4>
                  <p className="text-xs text-[#20242D] font-mono font-bold mt-0.5 sm:mt-1">{currentCompany.phone}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#687386] mt-0.5">{currentCompany.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] hover:border-[#3F73F5]/30 hover-card-smooth transition-colors">
                <div className="p-2 sm:p-2.5 bg-white border border-[#E2E9F4] rounded-lg text-[#3F73F5] shrink-0 shadow-xs">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#20242D] font-heading">Official Tender Email</h4>
                  <p className="text-xs text-[#20242D] font-mono font-bold mt-0.5 sm:mt-1">{currentCompany.email}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#687386] mt-0.5">Encrypted tender & compliance desk</p>
                </div>
              </div>

            </div>

            {/* Compliance Guarantee */}
            <div className="p-3 sm:p-4 bg-[#EAF2FF] border border-[#3F73F5]/20 rounded-xl flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-[#20242D]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5] shrink-0" />
              <span>All communications handled under strict non-disclosure and municipal procurement compliance.</span>
            </div>

          </div>

          {/* Right Column: Inquiry Console */}
          <div className="lg:col-span-7 bg-[#F8FAFF] border border-[#E2E9F4] rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#20242D] mb-1 font-heading">Initiate Operational Inquiry</h3>
            <p className="text-xs text-[#687386] mb-4 sm:mb-6 font-body">
              Route directly to the designated project superintendent.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-[#EAF2FF] border border-[#3F73F5]/30 text-[#3F73F5] rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7 text-[#3F73F5]" />
                </div>
                <h4 className="text-xl font-bold text-[#20242D] font-heading">Transmission Acknowledged</h4>
                <p className="text-xs text-[#687386] max-w-sm mx-auto leading-relaxed font-body">
                  Your inquiry regarding <strong className="text-[#20242D]">{activeSubject}</strong> has been assigned to our senior operations desk.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-white hover:bg-[#F8FAFF] text-[#3F73F5] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-[#E2E9F4] shadow-xs font-heading"
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
                  <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">Classification</label>
                  <div className="flex flex-wrap gap-1.5">
                    {contactSubjects.map((sub) => {
                      const isSel = sub === activeSubject;
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setActiveSubject(sub)}
                          className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] ${
                            isSel
                              ? 'bg-[#3F73F5] text-white shadow-xs'
                              : 'bg-white border border-[#E2E9F4] text-[#20242D] hover:text-[#3F73F5] hover:bg-[#EAF2FF]/50'
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">First Name *</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (errors.firstName) setErrors({ ...errors, firstName: '' });
                      }}
                      placeholder="Vikram"
                      className={`w-full bg-white border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                        errors.firstName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                      }`}
                    />
                    {errors.firstName && <p className="text-[10px] text-rose-600 font-medium">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Mehta"
                      className="w-full bg-white border border-[#E2E9F4] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">Corporate Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="v.mehta@enterprise.com"
                      className={`w-full bg-white border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-600 font-medium">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">Direct Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full bg-white border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-rose-600 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">Operational Directive / Scope Details *</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Provide corridor details, estimated square footage, or fabrication milestones..."
                    className={`w-full bg-white border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors resize-none ${
                      errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-600 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full min-h-[48px] bg-[#3F73F5] hover:bg-[#2454C6] text-white font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 px-6 rounded-xl shadow-md shadow-[#3F73F5]/25 flex items-center justify-center gap-2 cursor-pointer mt-2 font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] active:scale-[0.99] disabled:opacity-60 transition-all"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4 text-white" />
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

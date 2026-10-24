import { useState, useEffect, useRef } from 'react';
import type { FC, FormEvent } from 'react';
import { X, FileText, Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitLead, validateEmail, validatePhone, validateRequired } from '../services/leadService';
import { track } from '../services/analytics';

interface CapabilityProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityProfileModal: FC<CapabilityProfileModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trapping and Escape key support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => firstInputRef.current?.focus(), 50);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate fields inline
    const newErrors: Record<string, string> = {};
    const nameErr = validateRequired(name, 'Full name');
    if (nameErr) newErrors.name = nameErr;

    const compErr = validateRequired(company, 'Company / Organization name');
    if (compErr) newErrors.company = compErr;

    const emailErr = validateEmail(email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(phone);
    if (phoneErr) newErrors.phone = phoneErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await submitLead({
        name,
        company,
        email,
        phone,
        sourceSection: 'capability_profile_lead_magnet',
        honeypot,
      });

      if (res.success) {
        setIsSuccess(true);
        track('profile_download', { company, email });
      } else {
        setServerError(res.error || 'Failed to authorize download.');
      }
    } catch {
      setServerError('Network timeout. Please retry authorization.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="capability-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20242D]/50 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white border border-[#E2E9F4] rounded-2xl max-w-lg w-full text-[#20242D] overflow-hidden shadow-2xl space-y-0 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#E2E9F4] flex items-start justify-between bg-[#F8FAFF] shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 bg-[#EAF2FF] text-[#3F73F5] rounded-xl border border-[#E2E9F4] shadow-xs">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#3F73F5]" />
            </div>
            <div>
              <span className="text-[11px] sm:text-[12px] font-body font-semibold uppercase tracking-[0.04em] text-[#3F73F5] block">
                Technical Contractor Dossier
              </span>
              <h3 id="capability-modal-title" className="text-base sm:text-lg font-black text-[#20242D] font-display">
                Download Capability Profile
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#687386] hover:text-[#20242D] hover:bg-[#EAF2FF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-4 sm:py-6 space-y-3.5 sm:space-y-4 animate-fadeIn">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-black text-[#20242D] font-display">Authorization Verified</h4>
                <p className="text-xs text-[#687386] max-w-sm mx-auto mt-1">
                  Thank you, <strong>{name}</strong>. Your copy of the 2026 Varan Infrastructure Capability Profile is ready.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="/capability-profile.pdf"
                  download="Varan-Corporation-Capability-Profile-2026.pdf"
                  onClick={() => track('profile_download', { action: 'file_downloaded' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#3F73F5]/25 cursor-pointer font-display min-h-[44px]"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download PDF Dossier (4.2 MB)</span>
                </a>
              </div>

              <p className="text-[11px] sm:text-[12px] text-[#687386] font-body">
                Direct link also logged for enterprise domain: <span className="font-semibold text-[#20242D]">{company}</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <p className="text-xs text-[#687386] leading-relaxed font-sans">
                Access equipment fleet tolerances, Sa 2.5 protective blast procedures, past viaduct milestones, and HSE statutory certificates.
              </p>

              {/* Honeypot field (hidden from screen, fills by bots only) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_profile_hp"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {serverError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                  Full Name *
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Vikram Sharma"
                  className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-[#F8FAFF] focus:bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-rose-600 font-medium">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    if (errors.company) setErrors({ ...errors, company: '' });
                  }}
                  placeholder="e.g. Larsen & Toubro / Metro Authority"
                  className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-[#F8FAFF] focus:bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                    errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                  }`}
                />
                {errors.company && <p className="text-[10px] text-rose-600 font-medium">{errors.company}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@organization.com"
                    className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-[#F8FAFF] focus:bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-600 font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-[#F8FAFF] focus:bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-rose-600 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#3F73F5]/25 flex items-center justify-center gap-2 cursor-pointer font-display active:scale-[0.99] disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Authorizing Access...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-white" />
                      <span>Instant Access to Capability Profile</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] sm:text-[12px] text-[#687386] text-center font-body">
                Zero spam promise. Strictly for formal procurement and tender verification.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect, useRef } from 'react';
import type { FC, FormEvent } from 'react';
import { X, HardHat, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { VrnLogo } from './VrnLogo';
import { submitLead, validateEmail } from '../services/leadService';
import { track } from '../services/analytics';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => emailInputRef.current?.focus(), 50);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const emailErr = validateEmail(email);
    if (emailErr) {
      setErrorMsg(emailErr);
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitLead({
        name: 'Portal Waitlist Client',
        company: company || 'Corporate Client',
        email,
        phone: '0000000000',
        sourceSection: 'client_portal_waitlist',
        honeypot,
      });

      if (res.success) {
        setIsSuccess(true);
        track('cta_click', { location: 'client_portal_waitlist', email, company });
      } else {
        setErrorMsg(res.error || 'Submission failed. Please try again.');
      }
    } catch {
      setErrorMsg('Network timeout. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20242D]/50 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-lg w-full border border-[#E2E9F4] shadow-2xl overflow-hidden text-[#20242D] max-h-[90vh] flex flex-col"
      >
        <div className="bg-[#F8FAFF] p-4 sm:p-6 flex items-center justify-between border-b border-[#E2E9F4] shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <VrnLogo size={28} />
            <div>
              <h3 id="portal-modal-title" className="font-extrabold uppercase tracking-wide text-xs sm:text-sm text-[#20242D] font-display">
                Client Portal (Coming Soon)
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#687386] font-body">Secured Contractor Extranet · In Development</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close portal modal"
            className="text-[#687386] hover:text-[#20242D] p-1.5 rounded-lg hover:bg-[#EAF2FF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] min-w-[36px] min-h-[36px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-4 sm:py-6 space-y-3.5 sm:space-y-4 animate-fadeIn">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-black text-[#20242D] font-display">Priority Access Registered</h4>
              <p className="text-xs text-[#687386] max-w-sm mx-auto leading-relaxed">
                Thank you. We have registered <strong>{email}</strong> for encrypted client extranet onboarding once portal verification is live.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-[#3F73F5] hover:bg-[#2454C6] text-white rounded-xl text-xs font-bold uppercase tracking-wider font-display cursor-pointer shadow-md shadow-[#3F73F5]/25 min-h-[44px]"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Deployment notice */}
              <div className="bg-[#EAF2FF]/60 border border-[#E2E9F4] rounded-xl p-3.5 sm:p-4 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-bold text-[#3F73F5] font-body uppercase tracking-[0.04em]">
                  <HardHat className="w-4 h-4 text-[#3F73F5] shrink-0" />
                  <span>Deployment Notice</span>
                </div>
                <p className="text-xs text-[#20242D] leading-relaxed font-sans">
                  The Varan Contractor Extranet is currently undergoing security hardening and single-sign-on integration for EPC partners. Once live, authorized contractors will access daily telemetry logs, coating dry-film verification certificates, and biometric workforce clearance.
                </p>
              </div>

              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="portal_waitlist_hp"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-800">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-3">
                <span className="text-xs font-bold text-[#20242D] block">
                  Notify me when portal launches:
                </span>
                
                <div className="space-y-1">
                  <label htmlFor="portal-email" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                    Corporate Email *
                  </label>
                  <input
                    ref={emailInputRef}
                    id="portal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@contractor.com"
                    className="w-full p-2.5 sm:p-3 min-h-[44px] bg-[#F8FAFF] focus:bg-white border border-[#E2E9F4] rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="portal-company" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                    Enterprise / EPC Authority (Optional)
                  </label>
                  <input
                    id="portal-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. State Highway Development Corp"
                    className="w-full p-2.5 sm:p-3 min-h-[44px] bg-[#F8FAFF] focus:bg-white border border-[#E2E9F4] rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 min-h-[44px] bg-[#EAF2FF] hover:bg-[#EAF2FF]/80 text-[#3F73F5] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer font-display text-center"
                >
                  Dismiss
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-2.5 min-h-[44px] bg-[#3F73F5] hover:bg-[#2454C6] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#3F73F5]/25 cursor-pointer font-display flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

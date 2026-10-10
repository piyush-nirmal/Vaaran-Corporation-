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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden text-slate-900"
      >
        <div className="bg-slate-50 p-6 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <VrnLogo size={32} />
            <div>
              <h3 id="portal-modal-title" className="font-extrabold uppercase tracking-wide text-sm text-vrnNavy font-display">
                Client Portal (Coming Soon)
              </h3>
              <p className="text-[12px] text-slate-500 font-body">Secured Contractor Extranet · In Development</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close portal modal"
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-vrnNavy font-display">Priority Access Registered</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you. We have registered <strong>{email}</strong> for encrypted client extranet onboarding once portal verification is live.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-vrnNavy hover:bg-vrnNavy-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider font-display cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Task 5: Notice with no fake worksite or safety data */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-[12px] font-bold text-vrnNavy font-body uppercase tracking-[0.04em]">
                  <HardHat className="w-4 h-4 text-vrnNavy" />
                  <span>Deployment Notice</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
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
                <span className="text-xs font-bold text-slate-800 block">
                  Notify me when portal launches:
                </span>
                
                <div className="space-y-1">
                  <label htmlFor="portal-email" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                    Corporate Email *
                  </label>
                  <input
                    ref={emailInputRef}
                    id="portal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@contractor.com"
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="portal-company" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                    Enterprise / EPC Authority (Optional)
                  </label>
                  <input
                    id="portal-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. State Highway Development Corp"
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer font-display"
                >
                  Dismiss
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-2.5 bg-vrnNavy hover:bg-vrnNavy-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer font-display flex items-center gap-2 disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
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

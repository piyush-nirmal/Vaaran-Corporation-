import { useState, useEffect } from 'react';
import type { FC, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Paintbrush, 
  Layers, 
  Hammer, 
  Users, 
  RotateCcw, 
  ShieldCheck, 
  AlertCircle, 
  Loader2,
  Award,
  MessageSquare
} from 'lucide-react';
import { 
  rfpScopeOptions, 
  certificationBadges, 
  type RFPScopeOption 
} from '../data/content';
import { 
  submitLead, 
  validateEmail, 
  validatePhone, 
  validateRequired 
} from '../services/leadService';
import { track } from '../services/analytics';
import { useWhatsApp } from '../context/WhatsAppContext';
import { SectionLabel } from './ui/SectionLabel';

const iconMap = {
  'industrial-coating': Paintbrush,
  'gantry-fabrication': Layers,
  'civil-structures': Hammer,
  'manpower-logistics': Users,
};

export const QuoteRequest: FC = () => {
  const [selectedScope, setSelectedScope] = useState<RFPScopeOption>(rfpScopeOptions[0]);
  const [scaleValue, setScaleValue] = useState<number>(rfpScopeOptions[0].defaultScale);
  const [targetTimeline, setTargetTimeline] = useState<number>(rfpScopeOptions[0].defaultDays);
  
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialDirectives, setSpecialDirectives] = useState('');
  const [honeypot, setHoneypot] = useState('');

  // Form states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Typewriter effect state for reference token
  const [displayedToken, setDisplayedToken] = useState('');

  const { setContextMessage, openWhatsApp } = useWhatsApp();

  useEffect(() => {
    track('rfp_step_view', { step: 1, sector: selectedScope.name });
    setContextMessage(
      `Hi Varan Corporation, I am looking for a B2B technical bid for ${selectedScope.name} (${scaleValue.toLocaleString()} ${selectedScope.unit}).`
    );
  }, [selectedScope, scaleValue, setContextMessage]);

  // Typewriter reveal when submittedRef is set
  useEffect(() => {
    if (!submittedRef) return;
    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= submittedRef.length) {
        setDisplayedToken(submittedRef.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [submittedRef]);

  const handleScopeChange = (option: RFPScopeOption) => {
    setSelectedScope(option);
    setScaleValue(option.defaultScale);
    setTargetTimeline(option.defaultDays);
    track('filter_change', { type: 'rfp_scope', scope: option.name });
  };

  const handleFocusStep2 = () => {
    track('rfp_step_view', { step: 2, sector: selectedScope.name, scale: scaleValue });
  };

  const handleFocusStep3 = () => {
    track('rfp_step_view', { step: 3, sector: selectedScope.name });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    const fieldErrors: Record<string, string> = {};
    const compErr = validateRequired(companyName, 'Company / Organization');
    if (compErr) fieldErrors.company = compErr;

    const personErr = validateRequired(contactPerson, 'Designated contact name');
    if (personErr) fieldErrors.contactPerson = personErr;

    const emailErr = validateEmail(email);
    if (emailErr) fieldErrors.email = emailErr;

    const phoneErr = validatePhone(phone);
    if (phoneErr) fieldErrors.phone = phoneErr;

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const result = await submitLead({
        name: contactPerson,
        company: companyName,
        phone,
        email,
        sector: selectedScope.name,
        scale: `${scaleValue} ${selectedScope.unit}`,
        timeline: `${targetTimeline} Calendar Days`,
        specialDirectives,
        honeypot,
        sourceSection: 'rfp_configurator',
      });

      if (result.success && result.referenceToken) {
        setSubmittedRef(result.referenceToken);
      } else {
        setSubmissionError(result.error || 'Bid submission failed. Please verify connection and retry.');
      }
    } catch {
      setSubmissionError('Network error occurred during bid packet dispatch. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setDisplayedToken('');
    setSubmissionError(null);
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setSpecialDirectives('');
    setErrors({});
  };

  const handleWhatsAppWithScope = () => {
    openWhatsApp(
      `Hi Varan Corporation, I want to discuss a formal bid for ${selectedScope.name} (${scaleValue.toLocaleString()} ${selectedScope.unit}, ${targetTimeline} days).`,
      'rfp_section'
    );
  };

  // Progress computation
  const isStep1Done = Boolean(selectedScope);
  const isStep2Done = Boolean(scaleValue && targetTimeline);
  const isStep3Done = Boolean(companyName && contactPerson && email && phone);
  const progressPercent = isStep3Done ? 100 : isStep2Done ? 66 : 33;

  return (
    <div id="rfp-quote" className="w-full space-y-4">
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 text-slate-900 shadow-navy-md overflow-hidden relative">
        
        {/* Subtle Ambient Brand Tint */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-vrnNavy/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Section Heading & Trust Chip */}
        <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <SectionLabel number="04" name="RFP PORTAL" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight font-display">
              Configure Technical Bid Packet
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
              Instant scope calculator for municipal infrastructure, highway alignments, and corporate tenders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppWithScope}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-vrnNavy text-xs font-bold font-display transition-colors cursor-pointer border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Chat on WhatsApp</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-vrnNavy bg-vrnNavy-tint border border-vrnNavy/20 px-3.5 py-1.5 rounded-lg shrink-0">
              <ShieldCheck className="w-4 h-4 text-vrnNavy" />
              <span>24h Engineering Review SLA</span>
            </div>
          </div>
        </div>

        {/* Stepper Progress Bar (Task 5) */}
        {!submittedRef && (
          <div className="mb-8 space-y-2">
            <div className="flex items-center justify-between text-[12px] sm:text-[13px] font-body font-medium tracking-[0.04em] text-slate-600">
              <span className={isStep1Done ? 'text-vrnNavy' : ''}>1. Division Scope</span>
              <span className={isStep2Done ? 'text-vrnNavy' : ''}>2. Volume & Mobilization</span>
              <span className={isStep3Done ? 'text-vrnNavy' : ''}>3. Enterprise Lead</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
              <motion.div
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-vrnNavy via-vrnOrange to-vrnCyan"
              />
            </div>
          </div>
        )}

        {/* Statutory Certification Badges as small icon chips */}
        <div className="mb-8 p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-500 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-vrnNavy" />
              <span>Audited Statutory & Engineering Standards</span>
            </span>
            <span className="text-[12px] text-slate-500 hidden sm:inline font-body">
              Valid for State & Central Tenders
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {certificationBadges.map((badge) => (
              <div 
                key={badge.id}
                title={`${badge.authority}: ${badge.scope}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[12px] font-body font-medium shadow-2xs hover:border-vrnNavy/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-slate-900 font-bold">{badge.name}</span>
                <span className="text-slate-400 text-[11px] hidden md:inline">({badge.authority})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success State with Checkmark Draw Animation & Typewriter Token Reveal (Task 5) */}
        {submittedRef ? (
          <div className="bg-slate-50 border border-emerald-300 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-navy-sm animate-fadeIn">
            {/* Animated SVG Checkmark Drawing */}
            <div className="w-20 h-20 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-md">
              <svg className="w-10 h-10 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                  d="M20 6L9 17l-5-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
                />
              </svg>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 block font-bold">
                Bid Submission Dispatched
              </span>
              <h3 className="text-2xl font-black text-vrnNavy mt-1 font-display">
                Technical RFP Dossier Logged
              </h3>
              
              {/* Typewriter Token Reveal */}
              <div className="mt-3">
                <span className="text-xs text-slate-500 font-mono block mb-1">Verified Reference Token:</span>
                <span className="inline-block font-mono font-black text-lg text-vrnNavy bg-white border border-slate-300 px-4 py-1.5 rounded-xl shadow-xs tracking-wider">
                  {displayedToken || '...'}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl text-left text-xs space-y-2 font-mono shadow-2xs">
              <div className="flex justify-between text-slate-700">
                <span>Enterprise:</span>
                <span className="font-bold text-slate-900">{companyName}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Selected Scope:</span>
                <span className="text-vrnNavy font-bold">{selectedScope.name}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Estimated Target Volume:</span>
                <span className="text-vrnNavy font-bold">{scaleValue.toLocaleString()} {selectedScope.unit}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Target Timeline:</span>
                <span className="text-slate-900 font-bold">{targetTimeline} Calendar Days</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed font-sans">
              Our Chief Estimation Engineer is conducting preliminary specification review for <strong className="text-slate-900">{contactPerson}</strong>. Official commercial rates and mobilization schedule will be sent to <strong>{email}</strong>.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition-all shadow-md cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Configure Another RFP</span>
            </button>
          </div>
        ) : (
          /* Interactive 3-Step Bid Builder Form */
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Honeypot field */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="rfp_lead_honey_check"
                tabIndex={-1}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
              />
            </div>

            {/* Server Error with Retry Button */}
            {submissionError && (
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-rose-800 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{submissionError}</span>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold uppercase text-[11px] tracking-wider shrink-0 cursor-pointer"
                >
                  Retry Submission
                </button>
              </div>
            )}

            {/* Step 1: Select Operational Sector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-slate-800">
                  Step 1: Select Targeted Engineering Sector
                </span>
                <span className="text-vrnNavy font-semibold">Pick division</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" role="radiogroup" aria-label="Targeted Sector">
                {rfpScopeOptions.map((opt) => {
                  const Icon = iconMap[opt.id as keyof typeof iconMap] || Paintbrush;
                  const isChosen = opt.id === selectedScope.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={isChosen}
                      onClick={() => handleScopeChange(opt)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[96px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                        isChosen
                          ? 'bg-vrnNavy text-white border-vrnNavy shadow-navy-sm'
                          : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isChosen ? 'text-amber-400' : 'text-slate-400'}`} />
                      <div>
                        <div className={`font-bold text-xs leading-tight mt-2 font-display ${isChosen ? 'text-white' : 'text-slate-900'}`}>
                          {opt.name}
                        </div>
                        <div className={`text-[10px] font-mono mt-0.5 ${isChosen ? 'text-slate-300' : 'text-slate-500'}`}>
                          {opt.unit}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dynamic Scale & Timeline Sliders */}
            <div 
              onFocus={handleFocusStep2}
              className="p-6 sm:p-7 bg-slate-50 border border-slate-200/90 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              
              {/* Scale Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="rfp-scale-slider" className="font-bold text-slate-700">Target Project Scale</label>
                  <span className="font-mono font-bold text-vrnNavy text-sm bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {scaleValue.toLocaleString()} {selectedScope.unit}
                  </span>
                </div>
                <input
                  id="rfp-scale-slider"
                  type="range"
                  min={selectedScope.minScale}
                  max={selectedScope.maxScale}
                  step={selectedScope.step}
                  value={scaleValue}
                  aria-label={`Target scale in ${selectedScope.unit}`}
                  aria-valuemin={selectedScope.minScale}
                  aria-valuemax={selectedScope.maxScale}
                  aria-valuenow={scaleValue}
                  onChange={(e) => setScaleValue(Number(e.target.value))}
                  className="w-full accent-vrnNavy h-2 bg-slate-200 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Min: {selectedScope.minScale.toLocaleString()}</span>
                  <span>Max: {selectedScope.maxScale.toLocaleString()}</span>
                </div>
              </div>

              {/* Timeline Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="rfp-timeline-slider" className="font-bold text-slate-700">Mobilization & Target Window</label>
                  <span className="font-mono font-bold text-vrnNavy text-sm bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {targetTimeline} Calendar Days
                  </span>
                </div>
                <input
                  id="rfp-timeline-slider"
                  type="range"
                  min={30}
                  max={180}
                  step={15}
                  value={targetTimeline}
                  aria-label="Target mobilization timeline in days"
                  aria-valuemin={30}
                  aria-valuemax={180}
                  aria-valuenow={targetTimeline}
                  onChange={(e) => setTargetTimeline(Number(e.target.value))}
                  className="w-full accent-vrnNavy h-2 bg-slate-200 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>30 Days (Fast-Track)</span>
                  <span>90 Days (Standard)</span>
                  <span>180 Days (Phased)</span>
                </div>
              </div>

            </div>

            {/* Step 3: Enterprise Contact & Details */}
            <div 
              onFocus={handleFocusStep3}
              className="space-y-4"
            >
              <span className="font-bold uppercase tracking-wider text-xs text-slate-800 block font-heading">
                Step 3: Enterprise Point of Contact
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label htmlFor="rfp-company" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                    Enterprise / EPC *
                  </label>
                  <input
                    id="rfp-company"
                    type="text"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (errors.company) setErrors({ ...errors, company: '' });
                    }}
                    placeholder="e.g. Metro Rail Authority"
                    className={`w-full p-3 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                      errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.company && <p className="text-[10px] text-rose-600 font-medium">{errors.company}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="rfp-contact-person" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                    Designated Lead *
                  </label>
                  <input
                    id="rfp-contact-person"
                    type="text"
                    value={contactPerson}
                    onChange={(e) => {
                      setContactPerson(e.target.value);
                      if (errors.contactPerson) setErrors({ ...errors, contactPerson: '' });
                    }}
                    placeholder="e.g. Chief Engineer Sharma"
                    className={`w-full p-3 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                      errors.contactPerson ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.contactPerson && <p className="text-[10px] text-rose-600 font-medium">{errors.contactPerson}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="rfp-email" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                    Corporate Email *
                  </label>
                  <input
                    id="rfp-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="lead@organization.gov.in"
                    className={`w-full p-3 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-600 font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="rfp-phone" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                    Direct Phone *
                  </label>
                  <input
                    id="rfp-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full p-3 bg-white border rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-rose-600 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="rfp-directives" className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-600 block">
                  Site Directives or Blast Criteria (Optional)
                </label>
                <input
                  id="rfp-directives"
                  type="text"
                  value={specialDirectives}
                  onChange={(e) => setSpecialDirectives(e.target.value)}
                  placeholder="e.g. Night shift operations mandatory between 01:00 and 05:00 hrs..."
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy transition-colors"
                />
              </div>
            </div>

            {/* Submission CTA Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="text-[12px] text-slate-600 font-body">
                Mandates adherence to standard ISO 9001 and PASARA labor codes.
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-black text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer shrink-0 font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Dispatching Bid Packet...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Technical Bid Packet</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

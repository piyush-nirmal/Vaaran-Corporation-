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
      <div className="bg-white border border-[#E2E9F4] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 text-[#20242D] shadow-xs overflow-hidden relative">
        
        {/* Subtle Ambient Brand Tint */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#3F73F5]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Section Heading & Trust Chip */}
        <div className="border-b border-[#E2E9F4] pb-5 sm:pb-6 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <SectionLabel number="04" name="RFP PORTAL" className="mb-1.5 sm:mb-2" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#20242D] tracking-[-0.02em] font-heading">
              Configure Technical Bid Packet
            </h2>
            <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-xl font-body leading-relaxed">
              Instant scope calculator for municipal infrastructure, highway alignments, and corporate tenders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleWhatsAppWithScope}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:py-1.5 min-h-[40px] sm:min-h-0 rounded-xl bg-white hover:bg-[#F8FAFF] text-[#20242D] text-xs font-semibold font-heading transition-colors cursor-pointer border border-[#E2E9F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Chat on WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono font-medium text-[#3F73F5] bg-[#EAF2FF] border border-[#3F73F5]/25 px-3 py-1.5 rounded-lg shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#3F73F5] shrink-0" />
              <span>24h Engineering Review SLA</span>
            </div>
          </div>
        </div>

        {/* Stepper Progress Bar */}
        {!submittedRef && (
          <div className="mb-6 sm:mb-8 space-y-2">
            <div className="flex items-center justify-between text-[11px] sm:text-[13px] font-body font-medium tracking-[0.02em] sm:tracking-[0.04em] text-[#687386]">
              <span className={isStep1Done ? 'text-[#3F73F5] font-bold' : ''}>1. Scope</span>
              <span className={isStep2Done ? 'text-[#3F73F5] font-bold' : ''}>2. Volume & Timeline</span>
              <span className={isStep3Done ? 'text-[#3F73F5] font-bold' : ''}>3. Lead Info</span>
            </div>
            <div className="w-full h-1.5 bg-[#EAF2FF] rounded-full overflow-hidden border border-[#E2E9F4]">
              <motion.div
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-[#3F73F5] via-[#65B5FF] to-[#3F73F5]"
              />
            </div>
          </div>
        )}

        {/* Statutory Certification Badges as small icon chips */}
        <div className="mb-6 sm:mb-8 p-3 sm:p-3.5 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#3F73F5] shrink-0" />
              <span>Audited Statutory & Engineering Standards</span>
            </span>
            <span className="text-[11px] sm:text-[12px] text-[#687386] hidden sm:inline font-body">
              Valid for State & Central Tenders
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {certificationBadges.map((badge) => (
              <div 
                key={badge.id}
                title={`${badge.authority}: ${badge.scope}`}
                className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white border border-[#E2E9F4] text-[#20242D] text-[11px] sm:text-[12px] font-body font-medium shadow-2xs hover:border-[#3F73F5]/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3F73F5] shrink-0" />
                <span className="text-[#20242D] font-bold">{badge.name}</span>
                <span className="text-[#687386] text-[10px] sm:text-[11px] hidden md:inline">({badge.authority})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success State */}
        {submittedRef ? (
          <div className="bg-[#F8FAFF] border border-[#3F73F5]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto shadow-xs animate-fadeIn">
            {/* Animated SVG Checkmark Drawing */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#EAF2FF] border border-[#3F73F5]/30 text-[#3F73F5] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#3F73F5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                  d="M20 6L9 17l-5-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
                />
              </svg>
            </div>

            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#3F73F5] block font-bold">
                Bid Submission Dispatched
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#20242D] mt-1 font-heading">
                Technical RFP Dossier Logged
              </h3>
              
              {/* Typewriter Token Reveal */}
              <div className="mt-2.5 sm:mt-3">
                <span className="text-[11px] sm:text-xs text-[#687386] font-mono block mb-1">Verified Reference Token:</span>
                <span className="inline-block font-mono font-bold text-base sm:text-lg text-[#3F73F5] bg-white border border-[#E2E9F4] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-xl shadow-xs tracking-wider">
                  {displayedToken || '...'}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 bg-white border border-[#E2E9F4] rounded-xl sm:rounded-2xl text-left text-xs space-y-2 font-mono shadow-xs">
              <div className="flex justify-between text-[#687386]">
                <span>Enterprise:</span>
                <span className="font-bold text-[#20242D]">{companyName}</span>
              </div>
              <div className="flex justify-between text-[#687386]">
                <span>Selected Scope:</span>
                <span className="text-[#3F73F5] font-bold">{selectedScope.name}</span>
              </div>
              <div className="flex justify-between text-[#687386]">
                <span>Estimated Target Volume:</span>
                <span className="text-[#3F73F5] font-bold">{scaleValue.toLocaleString()} {selectedScope.unit}</span>
              </div>
              <div className="flex justify-between text-[#687386]">
                <span>Target Timeline:</span>
                <span className="text-[#20242D] font-bold">{targetTimeline} Calendar Days</span>
              </div>
            </div>

            <p className="text-xs text-[#687386] max-w-md mx-auto leading-relaxed font-body">
              Our Chief Estimation Engineer is conducting preliminary specification review for <strong className="text-[#20242D]">{contactPerson}</strong>. Official commercial rates and mobilization schedule will be sent to <strong>{email}</strong>.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3F73F5] hover:bg-[#2454C6] text-white font-bold text-xs uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all shadow-md shadow-[#3F73F5]/25 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
            >
              <RotateCcw className="w-4 h-4 text-white" />
              <span>Configure Another RFP</span>
            </button>
          </div>
        ) : (
          /* Interactive 3-Step Bid Builder Form */
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
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
              <div className="p-3.5 sm:p-4 bg-rose-50 border border-rose-200 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-rose-800 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{submissionError}</span>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold uppercase text-[11px] tracking-wider shrink-0 cursor-pointer text-center"
                >
                  Retry Submission
                </button>
              </div>
            )}

            {/* Step 1: Select Operational Sector */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-[#20242D] text-[11px] sm:text-xs">
                  Step 1: Select Targeted Engineering Sector
                </span>
                <span className="text-[#3F73F5] font-semibold text-[11px] sm:text-xs">Pick division</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3" role="radiogroup" aria-label="Targeted Sector">
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
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[82px] sm:min-h-[96px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] ${
                        isChosen
                          ? 'bg-[#3F73F5] text-white border-[#3F73F5] shadow-xs'
                          : 'bg-[#F8FAFF] border-[#E2E9F4] text-[#20242D] hover:text-[#3F73F5] hover:bg-white hover:border-[#3F73F5]/40'
                      }`}
                    >
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isChosen ? 'text-white' : 'text-[#3F73F5]'}`} />
                      <div>
                        <div className={`font-bold text-xs leading-tight mt-1.5 sm:mt-2 font-heading ${isChosen ? 'text-white' : 'text-[#20242D]'}`}>
                          {opt.name}
                        </div>
                        <div className={`text-[10px] font-mono mt-0.5 ${isChosen ? 'text-white/80' : 'text-[#687386]'}`}>
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
              className="p-4 sm:p-6 lg:p-7 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl sm:rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-center"
            >
              
              {/* Scale Slider */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="rfp-scale-slider" className="font-bold text-[#20242D]">Target Project Scale</label>
                  <span className="font-mono font-bold text-[#3F73F5] text-xs sm:text-sm bg-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-[#E2E9F4] shadow-xs">
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
                  className="w-full accent-[#3F73F5] h-2.5 sm:h-2 bg-[#E2E9F4] rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#687386]">
                  <span>Min: {selectedScope.minScale.toLocaleString()}</span>
                  <span>Max: {selectedScope.maxScale.toLocaleString()}</span>
                </div>
              </div>

              {/* Timeline Slider */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="rfp-timeline-slider" className="font-bold text-[#20242D]">Mobilization & Target Window</label>
                  <span className="font-mono font-bold text-[#3F73F5] text-xs sm:text-sm bg-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-[#E2E9F4] shadow-xs">
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
                  className="w-full accent-[#3F73F5] h-2.5 sm:h-2 bg-[#E2E9F4] rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#687386]">
                  <span>30d (Fast-Track)</span>
                  <span>90d (Standard)</span>
                  <span>180d (Phased)</span>
                </div>
              </div>

            </div>

            {/* Step 3: Enterprise Contact & Details */}
            <div 
              onFocus={handleFocusStep3}
              className="space-y-3.5 sm:space-y-4"
            >
              <span className="font-bold uppercase tracking-wider text-xs text-[#20242D] block font-heading">
                Step 3: Enterprise Point of Contact
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label htmlFor="rfp-company" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
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
                    className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                      errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.company && <p className="text-[10px] text-rose-600 font-medium">{errors.company}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="rfp-contact-person" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
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
                    className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                      errors.contactPerson ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.contactPerson && <p className="text-[10px] text-rose-600 font-medium">{errors.contactPerson}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="rfp-email" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
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
                    className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-600 font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="rfp-phone" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
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
                    className={`w-full p-2.5 sm:p-3 min-h-[44px] bg-white border rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#E2E9F4]'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-rose-600 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="rfp-directives" className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                  Site Directives or Blast Criteria (Optional)
                </label>
                <input
                  id="rfp-directives"
                  type="text"
                  value={specialDirectives}
                  onChange={(e) => setSpecialDirectives(e.target.value)}
                  placeholder="e.g. Night shift operations mandatory between 01:00 and 05:00 hrs..."
                  className="w-full p-2.5 sm:p-3 min-h-[44px] bg-white border border-[#E2E9F4] rounded-xl text-xs text-[#20242D] focus:outline-none focus:ring-2 focus:ring-[#3F73F5] transition-colors"
                />
              </div>
            </div>

            {/* Submission CTA Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-[#E2E9F4]">
              <div className="text-[11px] sm:text-[12px] text-[#687386] font-body text-center sm:text-left">
                Mandates adherence to standard ISO 9001 and PASARA labor codes.
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto min-h-[48px] bg-[#3F73F5] hover:bg-[#2454C6] text-white font-semibold text-xs uppercase tracking-[0.04em] py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-md shadow-[#3F73F5]/25 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0 font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] active:scale-[0.99] disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Dispatching Bid Packet...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Technical Bid Packet</span>
                    <Send className="w-4 h-4 text-white" />
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

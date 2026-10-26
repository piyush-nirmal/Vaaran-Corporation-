import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  HardHat, 
  Send, 
  Loader2, 
  Award,
  Building2,
  Anchor,
  Paintbrush,
  Briefcase
} from 'lucide-react';
import { companyConfig, workforceData } from '../data/content';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { submitLead, validateEmail, validatePhone, validateRequired } from '../services/leadService';
import { track } from '../services/analytics';
import teamWorkplaceImg from '../assets/images/hero_transit_tunnel_viaduct_1791896269073.jpg';
import civilEngImg from '../assets/images/careers/civil_engineers.jpg';
import highAltImg from '../assets/images/careers/high_altitude_rigging.jpg';
import skilledAppImg from '../assets/images/careers/skilled_applicators.jpg';

interface CareersPageProps {
  onOpenCapabilityModal?: () => void;
}

export const CareersPage: FC<CareersPageProps> = () => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;

  // Direct Application / Career Inquiry state
  const [selectedRole, setSelectedRole] = useState(workforceData.categories[0].role);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const fieldErrors: Record<string, string> = {};
    const nErr = validateRequired(name, 'Full name');
    if (nErr) fieldErrors.name = nErr;

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
      const res = await submitLead({
        name,
        company: 'Career Application',
        email,
        phone,
        sector: `Career Application: ${selectedRole} (${experience || 'Standard experience'})`,
        specialDirectives: message || `Applicant applying for ${selectedRole}. Experience notes: ${experience}`,
        sourceSection: 'contact_form',
      });

      if (res.success) {
        setSubmitted(true);
        track('cta_click', { location: 'careers_application_submit', role: selectedRole });
      } else {
        setServerError(res.error || 'Failed to dispatch application. Please retry.');
      }
    } catch {
      setServerError('Network timeout occurred. Please retry your submission.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Careers & Workforce Opportunities | Varan Corporation"
        description="Join Varan Corporation's nationwide workforce of 150+ permanent professionals. Explore engineering opportunities in civil construction, high-altitude rigging, and industrial protective coatings."
        keywords="Varan Corporation careers, civil engineer jobs Mumbai, industrial painter jobs, high altitude rigging technician, infrastructure engineering careers India, ESIC PF compliant employer"
      />

      {/* ------------------------------------------------------------- */}
      {/* 1. CAREERS OPENING HERO — PEOPLE, CULTURE & OPPORTUNITIES */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* 1. CAREERS OPENING HERO — PEOPLE, CULTURE & OPPORTUNITIES */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFF] border-b border-[#E2E9F4] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-16 overflow-hidden">
        {/* Engineering Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" aria-hidden="true" />
        
        {/* Soft Radial Ambient Accents */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#65B5FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#3F73F5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#F8FAFF]" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Culture Ethos & Actions */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* High-Impact Human-Centric Headline */}
              <div className="space-y-2 sm:space-y-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] text-xs font-semibold text-[#2864F0] font-heading w-fit">
                  Workforce & Career Pathways
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#15315B] font-heading leading-[1.2]">
                  Build Critical Infrastructure. <br className="hidden sm:inline" />
                  <span className="text-[#2864F0]">Advance Your Career.</span>
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[#2864F0] tracking-normal leading-relaxed">
                  &ldquo;Work is Worship&rdquo; (कर्म ही पूजा है) · 150+ Permanent Infrastructure Personnel
                </p>
              </div>

              {/* Compelling Introduction (Concise 2-3 lines) */}
              <p className="text-sm sm:text-base text-[#66748A] max-w-xl font-normal leading-relaxed font-body">
                A dedicated team of 150+ permanent employees comprising experienced civil engineers, high-altitude safety technicians, and skilled site personnel ensuring zero-incident delivery across India.
              </p>

              {/* Discipline Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {workforceData.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DCE4EF] text-[11px] sm:text-xs font-semibold text-[#15315B] font-body shadow-2xs hover:border-[#2864F0]/40 transition-colors"
                  >
                    <HardHat className="w-3.5 h-3.5 text-[#2864F0] shrink-0" />
                    {cat.role}
                  </span>
                ))}
              </div>

              {/* Standardized Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <a
                  href="#application-desk"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[46px] min-h-[46px] rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-sm font-heading shadow-xs transition-colors w-full sm:w-auto shrink-0"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <a
                  href={`tel:${currentCompany.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 h-[46px] min-h-[46px] rounded-xl bg-white hover:bg-[#EAF1FF]/60 text-[#202A38] border border-[#DCE4EF] font-semibold text-sm font-heading shadow-2xs transition-colors w-full sm:w-auto shrink-0"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">HR Desk: {currentCompany.phone}</span>
                </a>
              </div>

              {/* Statutory Labor Assurances Strip */}
              <div className="pt-4 border-t border-[#DCE4EF] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs font-medium text-[#66748A]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>100% ESIC & PF Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>PASARA Certified Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>Zero-Incident Safety Standard</span>
                </div>
              </div>
            </div>

            {/* Right Column: Workforce Pedigree & Field Reliability Showcase */}
            <div className="lg:col-span-5">
              {/* Structured Workforce Credential Box */}
              <div className="rounded-2xl bg-white border border-[#DCE4EF] p-5 sm:p-6 shadow-xs space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAF1FF]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#66748A] uppercase">
                      Direct Employment Model
                    </span>
                    <div className="text-xl font-bold font-heading text-[#15315B]">
                      150+ Permanent Staff
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAF1FF] text-[#2864F0] border border-[#DCE4EF]">
                    100% Compliant
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <span className="text-[11px] font-mono text-[#66748A] uppercase tracking-wider block">
                      Labor Code
                    </span>
                    <div className="text-2xl font-bold font-heading text-[#2864F0] mt-1">
                      100%
                    </div>
                    <div className="text-xs text-[#202A38] font-medium mt-0.5">
                      Statutory ESIC & PF
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <span className="text-[11px] font-mono text-[#66748A] uppercase tracking-wider block">
                      Safety Protocol
                    </span>
                    <div className="text-2xl font-bold font-heading text-[#2864F0] mt-1">
                      0.00
                    </div>
                    <div className="text-xs text-[#202A38] font-medium mt-0.5">
                      Zero Incident Record
                    </div>
                  </div>
                </div>

                {/* Authentic Infrastructure Delivery Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/8] border border-[#DCE4EF]">
                  <img
                    src={teamWorkplaceImg}
                    alt="Varan Corporation infrastructure field engineers and transit viaduct delivery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium">
                    National highway & transit rail project delivery pan-India
                  </div>
                </div>

                {/* Zero-Casualization Workforce Banner */}
                <div className="p-3 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2864F0] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#15315B] font-heading">
                      Zero-Casualization Workforce Model
                    </div>
                    <div className="text-[11px] text-[#66748A]">
                      All field operatives receive certified personal protective equipment and ongoing skill training.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CORE WORKFORCE DISCIPLINES BREAKDOWN */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFF] relative overflow-hidden border-b border-[#E2E9F4]">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-heading font-semibold text-blue-600">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>DISCIPLINE PROFILES · FIELD OPERATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-[#15315B] tracking-tight leading-tight">
                Active Operational Divisions
              </h2>
              <p className="text-sm sm:text-base text-[#66748A] font-body leading-relaxed">
                Direct permanent employment with 100% statutory ESIC & PF compliance, safety certification, and nationwide infrastructure mobility.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#DCE4EF] shadow-2xs text-xs font-heading font-semibold text-[#15315B] shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>150+ Full-Time Field Personnel</span>
            </div>
          </div>

          {/* 3 High-Impact Division Cards with Authentic Background Photography & Light Borders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
            
            {/* Division 1: Civil & Project Engineers */}
            <div className="group relative bg-slate-950 border border-slate-200/50 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden isolate shadow-lg">
              {/* Background Photography */}
              <img
                src={civilEngImg}
                alt="Varan Corporation Civil Engineers"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 pointer-events-none -z-20"
              />
              {/* Translucent Dark Fog Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30 pointer-events-none -z-10" />
              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/25 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="space-y-4 relative z-10">
                {/* Header Badge & Spec Pill */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-heading font-semibold bg-blue-950/80 backdrop-blur-md text-blue-300 border border-blue-400/40 px-3 py-1 rounded-md shadow-sm">
                    ₹30+ Cr Execution
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-blue-400 block drop-shadow-xs">
                    Site Execution & QA/QC
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Civil Engineers
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Lead on-site concrete foundation works, total station topography, structural QA/QC, and technical approvals with NHAI & state authorities.
                </p>

                {/* Specialization Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Structural QA/QC', 'Total Station & GPS', 'RCC Foundations', 'Client Authority Liaison'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[10.5px] font-medium bg-white/10 backdrop-blur-md border border-white/20 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-5 mt-6 border-t border-white/20 flex items-center justify-between relative z-10">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-heading">Active Team</div>
                  <div className="text-sm font-bold text-white font-heading">25+ Engineers</div>
                </div>
                <a
                  href="#application-desk"
                  onClick={() => setSelectedRole('Civil Engineers')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-semibold text-xs transition-all shadow-md shadow-blue-900/40 hover:translate-x-0.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Division 2: High-Altitude Safety Technicians */}
            <div className="group relative bg-slate-950 border border-slate-200/50 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(217,119,6,0.35)] rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden isolate shadow-lg">
              {/* Background Photography */}
              <img
                src={highAltImg}
                alt="High-Altitude Safety Rigging Technicians"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 pointer-events-none -z-20"
              />
              {/* Translucent Dark Fog Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30 pointer-events-none -z-10" />
              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/25 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="space-y-4 relative z-10">
                {/* Header Badge & Spec Pill */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-600/30 group-hover:scale-105 transition-transform">
                    <Anchor className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-heading font-semibold bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-400/40 px-3 py-1 rounded-md shadow-sm">
                    100 Ft Elevation Ready
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-amber-400 block drop-shadow-xs">
                    Rigging & Marine Netting
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    High-Altitude Safety Technicians
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Specialized rope-access technicians deploying fall-arrest systems, marine bridge safety netting, and cable-stayed rigging under zero-incident standards.
                </p>

                {/* Specialization Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Rope Access (IRATA)', 'Marine Net Rigging', 'Fall-Arrest Protocols', 'Zero-Incident Standard'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[10.5px] font-medium bg-white/10 backdrop-blur-md border border-white/20 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-5 mt-6 border-t border-white/20 flex items-center justify-between relative z-10">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-heading">Working Range</div>
                  <div className="text-sm font-bold text-white font-heading">Up to 100 Ft</div>
                </div>
                <a
                  href="#application-desk"
                  onClick={() => setSelectedRole('High-Altitude Safety Technicians')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-heading font-semibold text-xs transition-all shadow-md shadow-amber-900/40 hover:translate-x-0.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Division 3: Skilled Site Personnel */}
            <div className="group relative bg-slate-950 border border-slate-200/50 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(5,150,105,0.35)] rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden isolate shadow-lg">
              {/* Background Photography */}
              <img
                src={skilledAppImg}
                alt="Skilled Applicators and Protective Coating Personnel"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 pointer-events-none -z-20"
              />
              {/* Translucent Dark Fog Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30 pointer-events-none -z-10" />
              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/25 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="space-y-4 relative z-10">
                {/* Header Badge & Spec Pill */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                    <Paintbrush className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-heading font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-400/40 px-3 py-1 rounded-md shadow-sm">
                    Master Applicators
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-emerald-400 block drop-shadow-xs">
                    Airless Coatings & Fabrication
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Skilled Site Personnel
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Master industrial spray painters, abrasive grit blasters, structural welders, and heavy machinery operators handling critical transport corridors.
                </p>

                {/* Specialization Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Airless Spray Systems', 'Grit Blasting (SA 2.5)', 'DFT Micrometer Gauge', 'AWS D1.1 Welding'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[10.5px] font-medium bg-white/10 backdrop-blur-md border border-white/20 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-5 mt-6 border-t border-white/20 flex items-center justify-between relative z-10">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-heading">Permanent Crew</div>
                  <div className="text-sm font-bold text-white font-heading">80+ Tradesmen</div>
                </div>
                <a
                  href="#application-desk"
                  onClick={() => setSelectedRole('Skilled Site Personnel')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs transition-all shadow-md shadow-emerald-900/40 hover:translate-x-0.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Benefits & Working Standards Bento Grid */}
          <div className="pt-4 space-y-4">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-xs font-heading font-semibold text-blue-600 uppercase tracking-wider">
                Working Standards & Commitments
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#15315B]">
                Why Build Your Career at Varan Corporation
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              
              {/* Card 1: Statutory ESIC & PF */}
              <div className="group relative p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-sky-300 to-indigo-500 hover:from-blue-600 hover:via-sky-400 hover:to-indigo-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/15 hover:-translate-y-1">
                <div className="relative h-full p-5 sm:p-6 rounded-[14px] sm:rounded-[22px] bg-gradient-to-b from-white via-[#FCFDFF] to-blue-50/30 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-500/15 group-hover:bg-blue-500/25 blur-xl pointer-events-none transition-all duration-300" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50/80 text-blue-700 border border-blue-200/80 font-body backdrop-blur-xs">
                        Day 1 Enrolled
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600/90 font-body block">
                        01 / Social Security
                      </span>
                      <h4 className="font-bold text-slate-900 font-heading text-base group-hover:text-blue-600 transition-colors">
                        100% Statutory ESIC & PF
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        All personnel are formally registered with Provident Fund (EPFO) and Employee State Insurance from Day 1 of deployment.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100/80 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Direct biometric PF tracking</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Permanent Employment */}
              <div className="group relative p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-300 to-green-500 hover:from-emerald-600 hover:via-teal-400 hover:to-green-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 hover:-translate-y-1">
                <div className="relative h-full p-5 sm:p-6 rounded-[14px] sm:rounded-[22px] bg-gradient-to-b from-white via-[#FCFDFF] to-emerald-50/30 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-emerald-500/15 group-hover:bg-emerald-500/25 blur-xl pointer-events-none transition-all duration-300" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50/80 text-emerald-700 border border-emerald-200/80 font-body backdrop-blur-xs">
                        Zero Casualization
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600/90 font-body block">
                        02 / Job Stability
                      </span>
                      <h4 className="font-bold text-slate-900 font-heading text-base group-hover:text-emerald-600 transition-colors">
                        Permanent Employment
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        Long-term contracts, structured promotion ladders, skill grade uplifts, and seniority loyalty bonuses across multi-year project lifecycles.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100/80 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Annual appraisals & career tiers</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Certified PPE & Gear */}
              <div className="group relative p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-500 via-orange-300 to-amber-600 hover:from-amber-600 hover:via-orange-400 hover:to-amber-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1">
                <div className="relative h-full p-5 sm:p-6 rounded-[14px] sm:rounded-[22px] bg-gradient-to-b from-white via-[#FCFDFF] to-amber-50/30 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-amber-500/15 group-hover:bg-amber-500/25 blur-xl pointer-events-none transition-all duration-300" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform">
                        <Anchor className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50/80 text-amber-700 border border-amber-200/80 font-body backdrop-blur-xs">
                        EN/CE Rated
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600/90 font-body block">
                        03 / Workforce Safety
                      </span>
                      <h4 className="font-bold text-slate-900 font-heading text-base group-hover:text-amber-600 transition-colors">
                        Certified PPE & Gear
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        Full-body shock-absorbing harnesses, organic vapor air respirators, high-altitude risk stipends, and mandatory periodic medical diagnostics.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100/80 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Zero compromise on safety gear</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Landmark Portfolios */}
              <div className="group relative p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 via-violet-300 to-indigo-500 hover:from-purple-600 hover:via-violet-400 hover:to-indigo-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/15 hover:-translate-y-1">
                <div className="relative h-full p-5 sm:p-6 rounded-[14px] sm:rounded-[22px] bg-gradient-to-b from-white via-[#FCFDFF] to-purple-50/30 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-purple-500/15 group-hover:bg-purple-500/25 blur-xl pointer-events-none transition-all duration-300" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/30 group-hover:scale-105 transition-transform">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-50/80 text-purple-700 border border-purple-200/80 font-body backdrop-blur-xs">
                        Tier-1 Portfolios
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-600/90 font-body block">
                        04 / Experience
                      </span>
                      <h4 className="font-bold text-slate-900 font-heading text-base group-hover:text-purple-600 transition-colors">
                        Landmark Portfolios
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        Build your portfolio executing prestigious civil feats: Bandra-Worli Sea Link, Mumbai Metro viaducts, and major NHAI river bridges.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100/80 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>Nationally recognized work records</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. DIRECT APPLICATION & RESUME DESK */}
      {/* ------------------------------------------------------------- */}
      <section id="application-desk" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-[#F8FAFF]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: HR Contacts & Hiring Process */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#3F73F5]">
                Direct Recruitment Channel
              </span>
              <h2 className="text-xl sm:text-3xl font-bold font-heading text-[#20242D]">
                Submit Your Engineering Credentials
              </h2>
              <p className="text-xs sm:text-sm text-[#687386] font-body leading-relaxed">
                Whether you are a licensed civil engineer, a certified high-altitude rigging expert, or a master industrial painter, we welcome your inquiry. Applications are reviewed directly by our project operations directorate.
              </p>

              <div className="p-[1.5px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-300/60 via-slate-200 to-indigo-300/60 shadow-xs">
                <div className="p-4 sm:p-6 rounded-[10.5px] sm:rounded-[14.5px] bg-white space-y-3 sm:space-y-4">
                  <div className="text-[11px] sm:text-xs font-bold text-[#20242D] uppercase font-mono tracking-wider">
                    Direct Human Resources Desk
                  </div>
                  <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-3 text-[#20242D]">
                      <Phone className="w-4 h-4 text-[#3F73F5] shrink-0" />
                      <a href={`tel:${currentCompany.phoneRaw}`} className="font-semibold hover:text-[#3F73F5]">
                        {currentCompany.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-[#20242D]">
                      <Mail className="w-4 h-4 text-[#3F73F5] shrink-0" />
                      <a href={`mailto:${currentCompany.email}`} className="font-semibold hover:text-[#3F73F5]">
                        {currentCompany.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-[#687386] text-[11px] sm:text-xs">
                      <Users className="w-4 h-4 text-[#3F73F5] shrink-0" />
                      <span>Headquarters: Mumbai, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <div className="p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-300/70 via-slate-200/80 to-indigo-300/70 shadow-lg">
                <div className="p-4 sm:p-8 lg:p-10 rounded-[14px] sm:rounded-[22px] bg-white">
                {submitted ? (
                  <div className="text-center py-8 sm:py-12 space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF2FF] text-[#3F73F5] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#20242D]">
                      Application Successfully Submitted
                    </h3>
                    <p className="text-xs sm:text-sm text-[#687386] max-w-md mx-auto">
                      Thank you for submitting your credentials. Our operations team will review your application and reach out within 2 business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#3F73F5] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] sm:text-xs font-semibold text-[#20242D] uppercase font-mono tracking-wider">
                        Select Target Discipline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2">
                        {workforceData.categories.map((cat, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setSelectedRole(cat.role)}
                            className={`p-2.5 sm:p-3 rounded-xl border text-left text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                              selectedRole === cat.role
                                ? 'bg-[#3F73F5] text-white border-[#3F73F5] shadow-xs'
                                : 'bg-[#F8FAFF] text-[#20242D] border-[#E2E9F4] hover:border-[#3F73F5]'
                            }`}
                          >
                            {cat.role}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-[#20242D] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your complete name"
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-xl border border-[#E2E9F4] bg-[#F8FAFF] focus:bg-white focus:border-[#3F73F5] focus:outline-none text-xs sm:text-sm transition-all"
                        />
                        {errors.name && <p className="text-[10px] text-rose-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-[#20242D] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-xl border border-[#E2E9F4] bg-[#F8FAFF] focus:bg-white focus:border-[#3F73F5] focus:outline-none text-xs sm:text-sm transition-all"
                        />
                        {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-[#20242D] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="corporate or personal email"
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-xl border border-[#E2E9F4] bg-[#F8FAFF] focus:bg-white focus:border-[#3F73F5] focus:outline-none text-xs sm:text-sm transition-all"
                        />
                        {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-[#20242D] mb-1">
                          Years of Experience
                        </label>
                        <input
                          type="text"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          placeholder="e.g. 5+ years in civil flyovers"
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-xl border border-[#E2E9F4] bg-[#F8FAFF] focus:bg-white focus:border-[#3F73F5] focus:outline-none text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-[#20242D] mb-1">
                        Experience Summary & Certifications
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mention your relevant project experience, key certifications (e.g. NACE/FROSIO, AWS, PASARA), or willingness to relocate pan-India..."
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E2E9F4] bg-[#F8FAFF] focus:bg-white focus:border-[#3F73F5] focus:outline-none text-xs sm:text-sm transition-all resize-none"
                      />
                    </div>

                    {serverError && (
                      <p className="text-xs text-rose-500 bg-rose-50 border border-rose-200 p-3 rounded-xl">
                        {serverError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full min-h-[48px] py-3.5 sm:py-4 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-white font-semibold text-xs uppercase tracking-wider font-heading shadow-md shadow-[#3F73F5]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Credentials...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application to HR Desk</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

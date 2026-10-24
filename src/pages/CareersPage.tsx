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
  Award
} from 'lucide-react';
import { companyConfig, workforceData } from '../data/content';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { submitLead, validateEmail, validatePhone, validateRequired } from '../services/leadService';
import { track } from '../services/analytics';
import teamWorkplaceImg from '../assets/images/hero_transit_tunnel_viaduct_1791896269073.jpg';

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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          <div className="max-w-2xl space-y-1.5 sm:space-y-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#3F73F5]">
              Discipline Profiles
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold font-heading text-[#20242D]">
              Active Operational Divisions
            </h2>
            <p className="text-xs sm:text-base text-[#687386] font-body leading-relaxed">
              Varan Corporation deploys cross-functional engineering teams across civil works, high-altitude rigging, and industrial protective coatings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {workforceData.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFF] border border-[#E2E9F4] hover:border-[#3F73F5]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-[#E2E9F4] flex items-center justify-center text-[#3F73F5] shadow-2xs">
                    <HardHat className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#20242D] font-heading">
                      {cat.role}
                    </h3>
                    <p className="text-xs text-[#687386] font-body mt-1.5 sm:mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E2E9F4] flex items-center justify-between text-xs">
                  <span className="text-[#3F73F5] font-semibold text-[11px] sm:text-xs">Active Inquiries</span>
                  <a
                    href="#application-desk"
                    onClick={() => setSelectedRole(cat.role)}
                    className="font-bold text-[#20242D] hover:text-[#3F73F5] flex items-center gap-1 transition-colors min-h-[36px] items-center"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
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

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#E2E9F4] space-y-3 sm:space-y-4 shadow-xs">
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

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E2E9F4] shadow-md">
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
      </section>
    </div>
  );
};

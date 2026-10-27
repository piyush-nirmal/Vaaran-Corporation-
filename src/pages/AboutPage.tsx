import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Building2, 
  TrendingUp, 
  Factory, 
  Wrench, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Phone, 
  Download,
  HardHat,
  Truck,
  Gauge,
  Flame,
  MapPin
} from 'lucide-react';
import { companyConfig, clientsByCategory, workforceData } from '../data/content';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { ScrollCardReveal } from '../components/ui/ScrollCardReveal';
import { LeadershipQuoteCard } from '../components/LeadershipQuoteCard';
import { getClientLogoComponent } from '../components/ClientLogos';
import { CompanyJourneyStepper } from '../components/CompanyJourneyStepper';
import { TiltCard } from '../components/ui/TiltCard';
import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import metroTransitImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import civilEngImg from '../assets/images/careers/civil_engineers.jpg';
import highAltImg from '../assets/images/careers/high_altitude_rigging.jpg';
import skilledAppImg from '../assets/images/careers/skilled_applicators.jpg';
import fabYardImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import depotExpresswayImg from '../assets/images/hero_apco_expressway_dam_1791896243948.jpg';
import labInspectionImg from '../assets/images/process/step4_inspection.jpg';
interface AboutPageProps {
  onOpenCapabilityModal?: () => void;
}

const workforceCards = [
  {
    role: 'Civil Engineers',
    division: 'Division 01',
    desc: 'Site execution, quality assurance & structural calculations with daily safety protocols.',
    badge: 'QA / QC Certified',
    metric: 'Site Supervision',
    image: civilEngImg,
    icon: HardHat,
  },
  {
    role: 'High-Altitude Safety Technicians',
    division: 'Division 02',
    desc: 'Marine net rigging, safety cabling & suspended cradle works up to 100 ft above water.',
    badge: '100 Ft Rigging Certified',
    metric: 'Zero-Incident Safety',
    image: highAltImg,
    icon: ShieldCheck,
  },
  {
    role: 'Skilled Site Personnel',
    division: 'Division 03',
    desc: 'Precision industrial coating, structural steel fabrication, and mechanized spray blasting.',
    badge: 'Certified Applicators',
    metric: 'Mechanized Precision',
    image: skilledAppImg,
    icon: Wrench,
  },
];

export const AboutPage: FC<AboutPageProps> = ({ onOpenCapabilityModal }) => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('story');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'story',
      'journey',
      'clients',
      'workforce',
      'board',
      'financials',
      'infrastructure',
      'machinery',
      'spvs',
      'policy',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to anchor if URL has hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="About Us | Excellence Built Over Decades | Varan Corporation"
        description="Founded in 1997, Varan Corporation has delivered ₹30+ Crore landmark infrastructure projects including the Bandra-Worli Sea Link, Goa bridge painting, Delhi toll, and 29 flyovers."
        keywords="About Varan Corporation, history, 1997, civil engineering contractor, commercial painting India, MSRDC, L&T, TATA, MEP Infrastructure, workforce, Mumbai, Goa, Delhi, Bangalore"
      />
      
      {/* ------------------------------------------------------------- */}
      {/* 1. ABOUT US OPENING SECTION — CORPORATE IDENTITY & TRUST */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFF] border-b border-[#E2E9F4] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-16 overflow-hidden">
        {/* Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" aria-hidden="true" />
        
        {/* Soft Radial Ambient Accents */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#65B5FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#3F73F5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#F8FAFF]" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Corporate Identity, Headline, Narrative & Direct Actions */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* High-Impact Headline with Intentional Hierarchy */}
              <div className="space-y-2 sm:space-y-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] text-xs font-semibold text-[#2864F0] font-heading w-fit">
                  Established 1997 · Mumbai Headquarters
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#15315B] font-heading leading-[1.2]">
                  About Varan <span className="text-[#2864F0]">Corporation</span>
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[#2864F0] tracking-normal leading-relaxed">
                  &ldquo;Work is Worship&rdquo; (कर्म ही पूजा है) — Infrastructure Engineering Group
                </p>
              </div>

              {/* Well-Composed Description (Concise 2-3 lines) */}
              <p className="text-sm sm:text-base text-[#66748A] max-w-xl font-normal leading-relaxed font-body">
                Trusted civil construction, industrial protective coating, and specialized structural fabrication services across India for state authorities and tier-1 EPC infrastructure developers.
              </p>

              {/* Core Discipline Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {[
                  'Civil Infrastructure',
                  'Protective Coatings',
                  'Structural Steel Fabrication',
                  'Pan-India Execution'
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DCE4EF] text-[11px] sm:text-xs font-semibold text-[#15315B] font-body shadow-2xs hover:border-[#2864F0]/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2864F0]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Standardized Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <Link
                  to="/rfp-portal"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[46px] min-h-[46px] rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-sm font-heading shadow-xs transition-colors w-full sm:w-auto shrink-0"
                >
                  <span>Request a Bid</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <a
                  href={`tel:${currentCompany.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 h-[46px] min-h-[46px] rounded-xl bg-white hover:bg-[#EAF1FF]/60 text-[#202A38] border border-[#DCE4EF] font-semibold text-sm font-heading shadow-2xs transition-colors w-full sm:w-auto shrink-0"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Desk: {currentCompany.phone}</span>
                </a>

                {onOpenCapabilityModal && (
                  <button
                    type="button"
                    onClick={onOpenCapabilityModal}
                    className="inline-flex items-center justify-center gap-2 px-5 h-[46px] min-h-[46px] rounded-xl bg-[#15315B] hover:bg-[#202A38] text-white font-semibold text-sm font-heading shadow-xs transition-colors cursor-pointer w-full sm:w-auto shrink-0"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Capability Profile</span>
                  </button>
                )}
              </div>

              {/* Trust Credentials Strip - Restrained & Consistent */}
              <div className="pt-4 border-t border-[#DCE4EF] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs font-medium text-[#66748A]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>MCA & CIN Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>100% Labor Code ESIC & PF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>ISO 12944 Protective Coating</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Corporate Credibility & Institutional Pedigree */}
            <div className="lg:col-span-5">
              <TiltCard maxTilt={7} className="rounded-3xl overflow-hidden shadow-xl shadow-blue-900/10 border border-[#DCE4EF]">
                
                <div className="relative h-[390px] sm:h-[430px] w-full overflow-hidden flex flex-col justify-between p-5 sm:p-6 group">
                  {/* Real Landmark Project Photo */}
                  <img
                    src={metroTransitImg}
                    alt="Varan Corporation Landmark Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Cinematic Dark Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/45 to-[#0A1128]/55 pointer-events-none" />

                  {/* Top Bar: Registered Contractor Badge & Founding Pill */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-mono font-medium shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="truncate">VRN-IND-9001 · Active Govt Contractor</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-xl bg-[#2864F0]/90 backdrop-blur-md text-white font-mono text-[11px] sm:text-xs font-bold border border-white/20 shadow-xs shrink-0">
                      Est. 1997
                    </span>
                  </div>

                  {/* Middle / Center Highlight Label */}
                  <div className="relative z-10 space-y-1.5 my-auto pt-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300 font-semibold block">
                      Pan-India Delivery
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-tight">
                      Landmark Bridges, Flyovers & Marine Coatings
                    </h3>
                  </div>

                  {/* Bottom: Floating Glassmorphism Stats Strip */}
                  <div className="relative z-10 space-y-2.5 pt-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                        <div className="text-lg sm:text-xl font-bold font-heading text-white">
                          ₹30+<span className="text-xs font-normal text-blue-200"> Cr</span>
                        </div>
                        <div className="text-[10px] text-white/80 font-body leading-tight mt-0.5">
                          Delivered Works
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                        <div className="text-lg sm:text-xl font-bold font-heading text-white">
                          27+<span className="text-xs font-normal text-blue-200"> Yrs</span>
                        </div>
                        <div className="text-[10px] text-white/80 font-body leading-tight mt-0.5">
                          Field Track Record
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                        <div className="text-lg sm:text-xl font-bold font-heading text-white">
                          150+
                        </div>
                        <div className="text-[10px] text-white/80 font-body leading-tight mt-0.5">
                          Permanent Crew
                        </div>
                      </div>
                    </div>

                    {/* Location Footprint Footer */}
                    <div className="flex items-center gap-2 text-[11px] text-white/85 font-mono bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                      <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">Mumbai HQ · Maharashtra · Goa · Delhi · Karnataka</span>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* Quick In-Page Sticky Navigation Bar - Refined Corporate Minimalist Header */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#DFE6F0] shadow-xs">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-3 text-[13px] sm:text-[14px] font-medium"
            aria-label="About page section navigation"
          >
            {[
              { id: 'story', label: 'Excellence Over Decades', href: '#story' },
              { id: 'journey', label: 'Company Journey', href: '#journey' },
              { id: 'clients', label: 'Esteemed Clients', href: '#clients' },
              { id: 'workforce', label: 'Workforce', href: '#workforce' },
              { id: 'board', label: 'Board Members', href: '#board' },
              { id: 'financials', label: 'Financials', href: '#financials' },
              { id: 'infrastructure', label: 'Infrastructure', href: '#infrastructure' },
              { id: 'machinery', label: 'Machinery & Fleet', href: '#machinery' },
              { id: 'policy', label: 'Accreditation', href: '#policy' },
            ].map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setActiveSection(tab.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#2563EB] font-bold' 
                      : 'text-[#68758A] hover:text-[#242B38]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2563EB] rounded-full -mb-3" 
                      aria-hidden="true" 
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. EXCELLENCE BUILT OVER DECADES — CLEAN VISUAL SHOWCASE */}
      {/* ========================================================= */}
      <section id="story" className="scroll-mt-28 sm:scroll-mt-36 py-10 sm:py-16 lg:py-20 bg-white border-b border-[#E2E9F4] w-full relative">
        {/* Subtle Background Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none -z-10" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Column (5 cols) - Concise & Simple English */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider bg-[#EDF3FF] px-2.5 py-1 rounded-md border border-[#D9E6FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>01 · Who We Are</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#20242D] font-heading leading-tight tracking-tight">
                  Excellence Built Over Decades
                </h2>
                
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-body">
                  Started in 1997 with commercial vehicle painting. Over 27 years, we have grown into a trusted contractor for highways, bridges, and industrial structures across India.
                </p>
              </div>

              {/* Simple Philosophy Card */}
              <div className="rounded-2xl bg-[#F8FAFF] border border-[#DFE6F0] p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                    Our Philosophy
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#20242D] font-heading">
                    &ldquo;Work is Worship&rdquo;{' '}
                    <span className="text-[#2563EB] font-serif font-normal italic text-xs sm:text-sm">
                      (कर्म ही पूजा है)
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] font-body">
                    Devoted to quality work, worker safety, and on-time project completion.
                  </p>
                </div>
              </div>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] text-center">
                  <div className="text-lg sm:text-xl font-bold text-[#2563EB] font-heading">27+</div>
                  <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Years Active</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] text-center">
                  <div className="text-lg sm:text-xl font-bold text-[#2563EB] font-heading">₹30+ Cr</div>
                  <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Delivered</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] text-center">
                  <div className="text-lg sm:text-xl font-bold text-[#2563EB] font-heading">150+</div>
                  <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Direct Crew</div>
                </div>
              </div>

            </div>

            {/* Right Visual Bento Showcase (7 cols) - Clean & Image-Rich */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Large Featured Photo Card */}
                <div className="sm:col-span-2 relative rounded-2xl overflow-hidden border border-[#DCE4EF] h-60 sm:h-72 group shadow-2xs">
                  <img
                    src={heroViaductImg}
                    alt="Landmark Viaduct & Flyover Coating"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/30 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#15315B] font-mono text-[11px] font-bold border border-white/40 shadow-xs">
                      Quarter-Century Track Record
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#2563EB] text-white font-mono text-[11px] font-bold shadow-xs">
                      1997 → Present
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <div className="text-xs font-mono text-blue-300 font-medium">
                      Landmark Infrastructure Delivery
                    </div>
                    <div className="text-base sm:text-lg font-bold font-heading">
                      Specialized Protective Coatings for Bridges & Flyovers Across India
                    </div>
                  </div>
                </div>

                {/* Capability Showcase Card 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E9F4] hover:border-[#2563EB]/40 hover:bg-white transition-all shadow-2xs space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="text-sm font-bold text-[#20242D] font-heading">
                    100% Certified Crew & Safety
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Every site technician is fully covered with ESIC, Provident Fund, and certified safety harness gear.
                  </p>
                </div>

                {/* Capability Showcase Card 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E9F4] hover:border-[#2563EB]/40 hover:bg-white transition-all shadow-2xs space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="text-sm font-bold text-[#20242D] font-heading">
                    High-Risk & Marine Grade
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Proven execution up to 100 ft above the sea on the Bandra–Worli Sea Link and major state bridges.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. COMPANY JOURNEY — SOFT BLUE-GRAY SECTION BAND (#F8FAFF) */}
      {/* ========================================================= */}
      <section id="journey" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-[#F8FAFF] border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
                02 · Strategic Evolution
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading tracking-tight mt-0.5">
                Company Journey & Historic Milestones
              </h2>
              <p className="text-xs sm:text-sm text-[#687386] font-body">
                From commercial hand painting in 1997 to delivering ₹30+ Crore specialized infrastructure projects nationwide.
              </p>
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-[#2563EB] px-3 py-1.5 rounded-lg bg-white border border-[#E2E9F4] shadow-2xs w-fit">
              1997 → Present
            </span>
          </div>

          {/* React Bits Interactive Timeline Stepper */}
          <CompanyJourneyStepper />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR ESTEEMED CLIENTS — AUTHENTIC CORPORATE SECTION */}
      {/* ========================================================= */}
      <section id="clients" className="scroll-mt-24 sm:scroll-mt-36 py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E6E6E1] w-full">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          
          {/* Main Heading & Strategic Positioning */}
          <div className="space-y-2.5 sm:space-y-3.5 max-w-3xl">
            <span className="text-[12px] font-semibold text-[#285A9F] uppercase tracking-[0.08em] font-heading block">
              Our Clients & Authorities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#292D32] font-heading tracking-tight leading-[1.2]">
              Our Esteemed Clients & Public Authorities
            </h2>
            <p className="text-[#6B7077] text-[15px] sm:text-base font-body leading-relaxed">
              Proud to execute high-stakes infrastructure works for government bodies, premier infrastructure corporations, and leading corporate enterprises.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            
            {/* ----------------------------------------------------------- */}
            {/* Tier 1 — Government & Statutory Authorities */}
            {/* ----------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#E2E9F4] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" aria-hidden="true" />
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#20242D] font-heading uppercase tracking-wider">
                    Tier 1 — Government & Statutory Authorities
                  </h3>
                </div>
                <span className="text-[12px] text-[#687386] font-body">
                  State corporations, public departments & highway concessions
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {clientsByCategory.government.map((client) => {
                  const Logo = getClientLogoComponent(client.name);
                  return (
                    <div
                      key={client.name}
                      className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Subtle Background Watermark */}
                      {Logo && (
                        <div
                          className="absolute -right-2 -bottom-2 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none select-none opacity-[0.06] group-hover:opacity-[0.14] grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105 p-2 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Logo className="w-full h-full" />
                        </div>
                      )}

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:border-[#2563EB]/40 group-hover:bg-white transition-all p-2.5">
                            {Logo ? (
                              <Logo className="w-full h-full" />
                            ) : (
                              <Building2 className="w-7 h-7 text-[#2563EB]" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-[#20242D] text-[15px] sm:text-[16px] font-heading leading-snug group-hover:text-[#2563EB] transition-colors">
                              {client.name}
                            </h4>
                            <p className="text-[12px] sm:text-[12.5px] text-[#687386] font-body mt-1 leading-relaxed">
                              {client.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                      {client.highlight && (
                        <div className="relative z-10 mt-4 pt-3 border-t border-[#F0F4FA] flex items-center gap-2 text-[12px] font-body">
                          <span className="text-[#2563EB] font-mono text-[11px] font-bold uppercase tracking-wider shrink-0 bg-[#EFF6FF] px-2 py-0.5 rounded">
                            Key Delivery
                          </span>
                          <span className="font-semibold text-[#20242D] truncate">{client.highlight}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* Tier 2 — National Infrastructure & EPC Concessionaires */}
            {/* ----------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#E2E9F4] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#20242D] font-heading uppercase tracking-wider">
                    Tier 2 — National Infrastructure & EPC Concessionaires
                  </h3>
                </div>
                <span className="text-[12px] text-[#687386] font-body hidden sm:inline">
                  Prime contractors, national EPCs & concession partners
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
                {clientsByCategory.infrastructure.map((client) => {
                  const Logo = getClientLogoComponent(client.name);
                  return (
                    <div
                      key={client.name}
                      className="group relative p-5 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Subtle Background Watermark */}
                      {Logo && (
                        <div
                          className="absolute right-0 bottom-0 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none select-none opacity-[0.06] group-hover:opacity-[0.14] grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105 translate-x-1 translate-y-1 p-1 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Logo className="w-full h-full" />
                        </div>
                      )}

                      <div className="relative z-10 space-y-3 flex-1 flex flex-col justify-start">
                        {/* Prominent Authentic Brand Logo Badge */}
                        <div className="h-12 px-3.5 min-w-[64px] rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] inline-flex items-center justify-center p-2 shadow-2xs group-hover:border-[#2563EB]/40 group-hover:bg-white transition-all w-fit">
                          {Logo ? (
                            <Logo className="h-8 w-auto max-w-[120px]" />
                          ) : (
                            <Building2 className="w-5 h-5 text-[#2563EB]" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#20242D] text-[14.5px] sm:text-[15px] font-heading leading-snug group-hover:text-[#2563EB] transition-colors">
                            {client.name}
                          </h4>
                          <p className="text-[12px] sm:text-[12.5px] text-[#687386] font-body mt-1 leading-relaxed">
                            {client.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Anchored Consistent Footer */}
                      <div className="relative z-10 mt-3.5 pt-2.5 border-t border-[#F0F4FA] flex items-center gap-1.5 text-[11.5px] text-emerald-700 font-body font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Verified EPC Partner</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* Tier 3 — Corporate & Industrial Enterprise Clients */}
            {/* ----------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#E2E9F4] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" aria-hidden="true" />
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#20242D] font-heading uppercase tracking-wider">
                    Tier 3 — Corporate & Industrial Enterprise Clients
                  </h3>
                </div>
                <span className="text-[12px] text-[#687386] font-body hidden sm:inline">
                  Commercial conglomerates, facility operations & industrial clients
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {clientsByCategory.corporate.map((client) => {
                  const Logo = getClientLogoComponent(client.name);
                  return (
                    <div
                      key={client.name}
                      className="group relative p-4.5 sm:p-5 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Subtle Background Watermark */}
                      {Logo && (
                        <div
                          className="absolute right-0 bottom-0 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none select-none opacity-[0.06] group-hover:opacity-[0.14] grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105 translate-x-1 translate-y-1 p-1 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Logo className="w-full h-full" />
                        </div>
                      )}

                      <div className="relative z-10 space-y-2.5 flex-1 flex flex-col justify-start">
                        {/* Prominent Authentic Brand Logo Badge */}
                        <div className="h-11 px-3 min-w-[56px] rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] inline-flex items-center justify-center p-2 shadow-2xs group-hover:border-[#2563EB]/40 group-hover:bg-white transition-all w-fit mb-0.5">
                          {Logo ? (
                            <Logo className="h-7 w-auto max-w-[100px]" />
                          ) : (
                            <Building2 className="w-4 h-4 text-[#2563EB]" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#20242D] text-[13.5px] sm:text-[14px] font-heading leading-snug group-hover:text-[#2563EB] transition-colors">
                            {client.name}
                          </h4>
                          <p className="text-[11.5px] text-[#687386] font-body mt-1 leading-relaxed">
                            {client.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Anchored Consistent Footer */}
                      <div className="relative z-10 mt-3 pt-2.5 border-t border-[#F0F4FA] flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-[#2563EB] font-body font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>Corporate Client</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WORKFORCE & GOVERNANCE — SOFT BLUE-GRAY SECTION BAND (#F8FAFF) */}
      {/* ========================================================= */}
      <section id="workforce" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-[#F8FAFF] border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
            {/* Left Executive Workforce Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
                  04 · Human Capital & Operations
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading leading-tight tracking-tight mt-0.5">
                  Permanent Workforce
                </h2>
              </div>
              <p className="text-[#687386] text-xs sm:text-sm leading-relaxed font-body">
                {workforceData.description}
              </p>
              
              <ScrollCardReveal
                delay={0}
                yOffset={24}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D6E4F7] shadow-sm space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#DBEAFE]">
                    100% Statutory Compliance
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#20242D] font-heading tracking-tight">
                    150+ Direct Staff
                  </div>
                  <div className="text-xs text-[#2563EB] font-medium mt-0.5">
                    Permanent On-Roll Team · Zero Subcontracted Risk
                  </div>
                </div>

                <p className="text-xs text-[#687386] leading-relaxed">
                  Every site operative is enrolled in ESIC, Provident Fund (PF), and workmen compensation insurance with certified safety induction.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E2E9F4]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#20242D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>ESIC Registered</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#20242D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>PF Enrolled</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#20242D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Safety Inducted</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#20242D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero-LTI Record</span>
                  </div>
                </div>
              </ScrollCardReveal>
            </div>

            {/* Right Specialized Disciplines Visual Cards Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {workforceCards.map((item, i) => (
                <ScrollCardReveal
                  key={item.role}
                  delay={0.08 + i * 0.09}
                  yOffset={28}
                  className="group rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                >
                  {/* Visual Image Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-white/95 backdrop-blur-md text-[#2563EB] shadow-xs">
                        {item.division}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-blue-300" />
                      </div>
                    </div>

                    {/* Bottom Tag over Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-white/95 drop-shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {item.metric}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading group-hover:text-[#2563EB] transition-colors leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs text-[#687386] leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer Proof Badge */}
                    <div className="pt-3 border-t border-[#F0F4FA] flex items-center justify-between text-[11px] font-mono font-medium text-[#2563EB]">
                      <div className="flex items-center gap-1.5 bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#DBEAFE] w-full justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>{item.badge}</span>
                      </div>
                    </div>
                  </div>
                </ScrollCardReveal>
              ))}
            </div>
          </div>

          {/* Board Governance Card */}
          <div id="board" className="scroll-mt-28">
            <LeadershipQuoteCard />
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FINANCIAL STABILITY — WHITE SECTION BAND */}
      {/* ========================================================= */}
      <section id="financials" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
                05 · Balance Sheet Strength
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading tracking-tight mt-0.5">
                Financial Stability & Solvency
              </h2>
              <p className="text-xs sm:text-sm text-[#687386] font-body">
                Robust balance sheet, high bonding capacity, and clean banking relationships enabling smooth execution of mega projects.
              </p>
            </div>
            <div className="text-[11px] sm:text-xs font-mono font-semibold text-[#2454C6] px-3 py-1.5 rounded-lg bg-[#F8FAFF] border border-[#E2E9F4] shadow-2xs w-fit">
              Consortium Lines: SBI · HDFC · ICICI
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
            {[
              { label: 'Active Order Book', value: '₹850+ Cr', desc: 'Secured national transit and highway contracts' },
              { label: 'Credit Rating', value: 'A+ Stable', desc: 'Investment-grade solvency rating from premier agencies' },
              { label: 'Bank Guarantee Lines', value: '₹150+ Cr', desc: 'Consortium backing from SBI, HDFC, and ICICI Bank' },
              { label: 'Revenue Growth', value: '28% YoY', desc: 'Consistent 5-year compound annual expansion' },
            ].map((fin, i) => (
              <ScrollCardReveal
                key={fin.label}
                delay={0.06 + i * 0.08}
                yOffset={28}
                className="p-4 sm:p-6 rounded-2xl bg-[#F8FAFF] border border-[#E2E9F4] shadow-xs space-y-2.5 sm:space-y-3 hover:border-[#2563EB] hover:bg-white transition-all"
              >
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-[#2563EB] font-semibold uppercase truncate">
                  <TrendingUp className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
                  <span className="truncate">{fin.label}</span>
                </div>
                <div className="text-xl sm:text-3xl font-extrabold text-[#20242D] font-heading tabular-nums">
                  {fin.value}
                </div>
                <p className="text-[11px] sm:text-xs text-[#687386] leading-relaxed font-body line-clamp-2">
                  {fin.desc}
                </p>
              </ScrollCardReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INFRASTRUCTURE & FACILITIES — SOFT BLUE-GRAY SECTION BAND (#F8FAFF) */}
      {/* ========================================================= */}
      <section id="infrastructure" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-[#F8FAFF] border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
              06 · Regional Footprint & Yards
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading tracking-tight mt-0.5">
              Engineering Yards & Facilities
            </h2>
            <p className="text-[#687386] text-xs sm:text-sm lg:text-base font-body">
              Strategically positioned operations hubs equipped with heavy fabrication, automated blasting, and QA/QC testing centers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Flagship: 15-Acre Heavy Fabrication Plant (7 cols) */}
            <ScrollCardReveal
              delay={0.06}
              yOffset={28}
              className="lg:col-span-7 rounded-3xl bg-white border border-[#D6E4F7] shadow-xs hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Visual Yard Banner */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={fabYardImg}
                  alt="Central Yard and Fabrication Plant"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold tracking-wider bg-white/95 backdrop-blur-md text-[#2563EB] shadow-xs">
                    Primary Heavy Hub
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white">
                    15-Acre Industrial Plant
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/95 drop-shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Fabrication & Assembly Lines</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 hidden sm:inline-block">
                    Maharashtra Hub
                  </span>
                </div>
              </div>

              {/* Yard Details */}
              <div className="p-5 sm:p-7 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold">
                      <Factory className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#20242D] font-heading group-hover:text-[#2563EB] transition-colors">
                      Central Yard & Fabrication Plant
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#687386] leading-relaxed font-body">
                    Our central manufacturing installation engineered for high-throughput structural gantry fabrication, automated surface preparation, and heavy assemblies.
                  </p>
                </div>

                {/* 3 Upgraded Capability Modules */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-[#E2E9F4]">
                  <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] space-y-1 hover:border-[#2563EB] transition-colors">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#20242D]">
                      <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>CNC Plate Cutting</span>
                    </div>
                    <p className="text-[11px] text-[#687386] leading-tight">
                      Automated high-precision profiling & beveling
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] space-y-1 hover:border-[#2563EB] transition-colors">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#20242D]">
                      <Wrench className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>MIG/TIG Lines</span>
                    </div>
                    <p className="text-[11px] text-[#687386] leading-tight">
                      High-throughput structural gantry assembly
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4] space-y-1 hover:border-[#2563EB] transition-colors">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#20242D]">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>20T Gantry Cranes</span>
                    </div>
                    <p className="text-[11px] text-[#687386] leading-tight">
                      Heavy overhead lifts & rapid corridor loading
                    </p>
                  </div>
                </div>
              </div>
            </ScrollCardReveal>

            {/* Complementary Facilities (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              {/* Regional Depots */}
              <ScrollCardReveal
                delay={0.16}
                yOffset={24}
                className="rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5"
              >
                {/* Visual Image Header */}
                <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-900">
                  <img
                    src={depotExpresswayImg}
                    alt="Expressway Mobilization Network"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-2.5 sm:top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-white/95 backdrop-blur-md text-[#2563EB] shadow-xs">
                      72h SLA Dispatch
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                      <Truck className="w-3.5 h-3.5 text-blue-300" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 sm:bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                    <span className="flex items-center gap-1.5 drop-shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      4 Primary Transit Hubs
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading group-hover:text-[#2563EB] transition-colors">
                      Regional Mobilization Depots
                    </h3>

                    {/* City Hub Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {['Mumbai', 'Delhi-NCR', 'Ahmedabad', 'Hyderabad'].map((city) => (
                        <span key={city} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#EFF6FF] border border-[#DBEAFE] text-[#1E40AF] font-mono text-[10px] font-semibold">
                          <MapPin className="w-2.5 h-2.5 text-[#2563EB]" />
                          {city}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-[#687386] leading-relaxed">
                      Pre-staged equipment bays and parts inventory along key expressway corridors ensuring fast deployment within 72 hours.
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#F0F4FA] text-[11px] font-mono text-[#2563EB] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Immediate Corridor Dispatch Ready</span>
                  </div>
                </div>
              </ScrollCardReveal>

              {/* In-House Testing Lab */}
              <ScrollCardReveal
                delay={0.24}
                yOffset={24}
                className="rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5"
              >
                {/* Visual Image Header */}
                <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-900">
                  <img
                    src={labInspectionImg}
                    alt="QA/QC Inspection and Calibration"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-2.5 sm:top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-white/95 backdrop-blur-md text-[#2563EB] shadow-xs">
                      QA/QC Audited
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                      <Gauge className="w-3.5 h-3.5 text-blue-300" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 sm:bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                    <span className="flex items-center gap-1.5 drop-shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Zero-Defect Verification
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading group-hover:text-[#2563EB] transition-colors">
                      In-House Testing & Calibration Lab
                    </h3>

                    <p className="text-xs text-[#687386] leading-relaxed">
                      On-site lab verifying paint thickness (DFT), salt titration, and weld strength before site handover.
                    </p>

                    <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                      <div className="text-center p-1 rounded-md bg-[#F8FAFF] border border-[#E2E9F4] text-[10px] font-mono text-[#334155] font-semibold">
                        Digital DFT
                      </div>
                      <div className="text-center p-1 rounded-md bg-[#F8FAFF] border border-[#E2E9F4] text-[10px] font-mono text-[#334155] font-semibold">
                        Ultrasonic NDT
                      </div>
                      <div className="text-center p-1 rounded-md bg-[#F8FAFF] border border-[#E2E9F4] text-[10px] font-mono text-[#334155] font-semibold">
                        Salt Titration
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-[#F0F4FA] text-[11px] font-mono text-[#2563EB] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Audited Quality Verification</span>
                  </div>
                </div>
              </ScrollCardReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. MACHINERY & FLEET ROSTER — WHITE SECTION BAND */}
      {/* ========================================================= */}
      <section id="machinery" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
                07 · Mechanized Contractor Scale
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading tracking-tight mt-0.5">
                Machinery & Equipment Assets
              </h2>
              <p className="text-xs sm:text-sm text-[#687386] font-body">
                Over 40+ specialized contractor machines maintained in company yards to eliminate project site mobilization delays.
              </p>
            </div>

            <Link
              to="/fleet"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:h-[48px] rounded-xl bg-[#2563EB] text-white hover:bg-[#1D4ED8] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm shadow-blue-600/25 w-full sm:w-auto"
            >
              <span>View Complete Fleet</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              { name: 'Airless Spray Plants', count: '4 Units', desc: 'Heavy high-volume coating systems' },
              { name: 'Mobile Blasting Rigs', count: '2 Heavy Rigs', desc: 'Sa 2.5 profile surface preparation' },
              { name: 'MIG/TIG Inverter Stations', count: '8 Stations', desc: 'AWS D1.1 certified structural welding' },
              { name: 'Aluminum Scaffolding', count: '2,500 m²', desc: 'High-altitude viaduct access decking' },
            ].map((eq, i) => (
              <ScrollCardReveal
                key={eq.name}
                delay={0.06 + i * 0.08}
                yOffset={26}
                className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E9F4] space-y-2 hover:border-[#2563EB] hover:bg-white transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#2563EB]">{eq.count}</span>
                  <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
                </div>
                <h4 className="font-bold text-[#20242D] text-xs sm:text-sm font-heading">{eq.name}</h4>
                <p className="text-[11px] sm:text-xs text-[#687386] line-clamp-2">{eq.desc}</p>
              </ScrollCardReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SPECIAL PURPOSE VEHICLES (SPVs) — SOFT BLUE-GRAY SECTION BAND (#F8FAFF) */}
      {/* ========================================================= */}
      <section id="spvs" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-[#F8FAFF] border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
              08 · Project Governance & SPVs
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading tracking-tight mt-0.5">
              Special Purpose Vehicles (SPVs)
            </h2>
            <p className="text-[#687386] text-xs sm:text-sm lg:text-base font-body">
              Dedicated project companies incorporated for concession agreements, HAM models, and ring-fenced public infrastructure delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {[
              {
                name: 'Varan Expressway Infra SPV',
                model: 'HAM & Concession Packages',
                focus: 'Dedicated execution entity for national high-speed expressway alignments and river crossing bridges.',
                status: 'Active Concession'
              },
              {
                name: 'Varan Transit Viaducts JV',
                model: 'Metro Rail EPC Consortium',
                focus: 'Joint venture entity dedicated to urban elevated viaducts, transit portals, and specialized coating programs.',
                status: 'Active EPC'
              },
              {
                name: 'Varan Structural Steelworks SPV',
                model: 'Turnkey Fabrication & Erection',
                focus: 'Specialized vehicle for heavy toll plaza canopies, highway overhead gantries, and CNC fabricated trusses.',
                status: 'Active Delivery'
              },
            ].map((spv, i) => (
              <ScrollCardReveal
                key={spv.name}
                delay={0.08 + i * 0.1}
                yOffset={28}
                className="p-5 sm:p-7 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs space-y-3 sm:space-y-4 flex flex-col justify-between hover-card-smooth"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-[#EAF2FF] text-[#2454C6] font-semibold">
                      {spv.model}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-[#2563EB] font-semibold">
                      ● {spv.status}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading">
                    {spv.name}
                  </h3>
                  <p className="text-xs text-[#687386] leading-relaxed font-body">
                    {spv.focus}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#E2E9F4] flex items-center gap-1.5 text-[11px] sm:text-xs text-[#687386] font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Ring-Fenced Governance & Escrow Controlled</span>
                </div>
              </ScrollCardReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. CORPORATE POLICY & ACCREDITATION — WHITE SECTION BAND */}
      {/* ========================================================= */}
      <section id="policy" className="scroll-mt-24 sm:scroll-mt-36 py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E2E9F4] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block bg-[#EAF2FF] px-2.5 py-0.5 rounded-md w-fit">
              09 · Compliance & Standards
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] font-heading tracking-tight mt-0.5">
              Corporate Policy & Accreditation
            </h2>
            <p className="text-xs sm:text-sm text-[#687386] font-body">
              Certified quality benchmarks, statutory labor compliance, and comprehensive health & safety governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            {[
              {
                title: 'ISO 9001:2015 Quality Management',
                scope: 'Turnkey civil contracting, surface preparation, and structural gantry erection.',
                badge: 'Quality Standard'
              },
              {
                title: 'ISO 12944 (C5-I) Marine Protection',
                scope: 'Certified high-build protective coating application for extreme corrosive environments.',
                badge: 'Corrosion Standard'
              },
              {
                title: 'ISO 45001:2018 Health & Safety',
                scope: 'Zero-harm policy, automated tool box talks, and audited site safety supervisor protocols.',
                badge: 'Safety Standard'
              },
              {
                title: 'PASARA Statutory License',
                scope: 'Certified and audited personnel access control for critical infrastructure portals.',
                badge: 'Security License'
              },
              {
                title: '100% Labor Code Compliance',
                scope: 'ESIC, Provident Fund (PF), and comprehensive workmen compensation insurance coverage.',
                badge: 'Labor Code'
              },
              {
                title: 'Environmental & Sustainability Policy',
                scope: 'Low-VOC formulations, responsible abrasive disposal, and water recycling systems.',
                badge: 'Eco Policy'
              },
            ].map((pol, i) => (
              <ScrollCardReveal
                key={pol.title}
                delay={0.05 + i * 0.06}
                yOffset={24}
                className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2E9F4] space-y-2 shadow-2xs hover:border-[#2563EB] hover:bg-white transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#2563EB] font-semibold text-[10px] sm:text-xs">{pol.badge}</span>
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#20242D] font-heading">{pol.title}</h4>
                <p className="text-[11px] sm:text-xs text-[#687386] leading-relaxed font-body">{pol.scope}</p>
              </ScrollCardReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. CALLOUT BANNER IN PRIMARY BLUE GRADIENT (SAME AS HOMEPAGE) */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-20 bg-white w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white relative overflow-hidden shadow-xl shadow-blue-600/20 border border-blue-400/30 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 sm:space-y-2.5 max-w-2xl relative z-10 text-center md:text-left">
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-sky-200 uppercase tracking-wider bg-white/15 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md">
                Tender Qualification Dossier
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold font-heading text-white">
                Need Verified Credentials or Tender Documents?
              </h2>
              <p className="text-xs sm:text-base text-white/90 font-normal">
                Our engineering governance team provides audited qualification dossiers within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
              <Link
                to="/rfp-portal"
                className="w-full sm:w-auto py-3.5 px-8 lg:h-[48px] rounded-xl sm:rounded-full bg-white hover:bg-[#F8FAFF] active:scale-98 text-[#2563EB] hover:text-[#1D4ED8] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all btn-smooth"
              >
                <span>Request a Bid</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB]" />
              </Link>
              <a
                href={`tel:${currentCompany.phoneRaw}`}
                className="w-full sm:w-auto py-3.5 px-6 lg:h-[48px] rounded-xl sm:rounded-full border border-white/40 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

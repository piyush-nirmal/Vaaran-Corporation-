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
  Users,
  Download
} from 'lucide-react';
import { companyConfig, companyJourney, clientsByCategory, workforceData, aboutUsContent } from '../data/content';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { ScrollCardReveal } from '../components/ui/ScrollCardReveal';
import { LeadershipQuoteCard } from '../components/LeadershipQuoteCard';

const getClientMonogram = (name: string): string => {
  const customMap: Record<string, string> = {
    'Larsen & Toubro (L&T)': 'L&T',
    'HCC': 'HCC',
    'NCC Limited': 'NCC',
    'HMM Infra Limited': 'HMM',
    'MEP Infrastructure': 'MEP',
    'Roadway Solutions': 'RS',
    'Pragati Infra': 'PI',
    'Apco Infratech': 'APCO',
    'TATA Group': 'TATA',
    'Godrej': 'GODREJ',
    'Amul (GCMMF)': 'AMUL',
    'ASHMI': 'ASHMI',
    'Sai Enterprises': 'SAI',
  };
  if (customMap[name]) return customMap[name];
  return name
    .replace(/[^a-zA-Z\s&]/g, '')
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
};

interface AboutPageProps {
  onOpenCapabilityModal?: () => void;
}

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
              <div className="rounded-2xl bg-white border border-[#DCE4EF] p-5 sm:p-6 shadow-xs space-y-4 sm:space-y-5">
                
                {/* Founding & Corporate Ethos Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAF1FF]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#66748A] uppercase">
                      Establishment Record
                    </span>
                    <div className="text-xl font-bold font-heading text-[#15315B]">
                      Founded 1997
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAF1FF] text-[#2864F0] border border-[#DCE4EF]">
                    27+ Years Execution
                  </span>
                </div>

                {/* Structured Metrics Grid: Editorial 3-Column Strip */}
                <div className="grid grid-cols-3 gap-3 pt-0.5">
                  <div className="p-3 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <div className="text-xl sm:text-2xl font-bold text-[#2864F0] font-heading tracking-tight">
                      25+
                    </div>
                    <div className="text-xs font-bold text-[#202A38] mt-0.5 font-heading">
                      Years Field Exec
                    </div>
                    <div className="text-[10px] text-[#66748A] mt-0.5 leading-tight">
                      Infrastructure contracts
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <div className="text-xl sm:text-2xl font-bold text-[#2864F0] font-heading tracking-tight">
                      ₹30+ <span className="text-[10px] font-mono font-normal text-[#66748A]">Cr</span>
                    </div>
                    <div className="text-xs font-bold text-[#202A38] mt-0.5 font-heading">
                      Completed Works
                    </div>
                    <div className="text-[10px] text-[#66748A] mt-0.5 leading-tight">
                      State & EPC packages
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <div className="text-xl sm:text-2xl font-bold text-[#2864F0] font-heading tracking-tight">
                      150+
                    </div>
                    <div className="text-xs font-bold text-[#202A38] mt-0.5 font-heading">
                      Workforce
                    </div>
                    <div className="text-[10px] text-[#66748A] mt-0.5 leading-tight">
                      Permanent staff
                    </div>
                  </div>
                </div>

                {/* Institutional Registered Details & Operations Footprint */}
                <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#15315B] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-[#15315B] font-heading">
                      Registered Contractor ID: VRN-IND-9001
                    </div>
                    <p className="text-[11px] text-[#66748A] leading-relaxed mt-0.5">
                      Headquarters in Mumbai with staging yards in Navi Mumbai, and active project locations across Maharashtra, Goa, Delhi, and Karnataka.
                    </p>
                  </div>
                </div>

              </div>
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
      {/* 1. EXCELLENCE BUILT OVER DECADES — WHITE SECTION BAND */}
      {/* ========================================================= */}
      <section id="story" className="scroll-mt-28 sm:scroll-mt-36 py-10 sm:py-16 lg:py-20 bg-white border-b border-[#E2E9F4] w-full relative">
        {/* Subtle Background Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none -z-10" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Editorial Narrative Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 relative">
              
              {/* Outlined 1997 Watermark */}
              <div 
                className="absolute -top-4 right-2 text-7xl sm:text-8xl lg:text-9xl font-black font-heading text-[#3267E9]/[0.04] pointer-events-none select-none tracking-tighter"
                aria-hidden="true"
              >
                1997
              </div>

              {/* Eyebrow and Headline */}
              <div className="space-y-2.5 relative z-10">
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider bg-[#EDF3FF] px-2.5 py-1 rounded-md border border-[#D9E6FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>01 · Corporate Evolution</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#242B38] font-heading leading-[1.15] tracking-tight">
                  {aboutUsContent.heading}
                </h2>
              </div>
              
              <p className="text-[#68758A] text-sm sm:text-base leading-relaxed font-body relative z-10">
                Founded in 1997, Varan Corporation began with commercial transport painting, evolving over 27 years into a multi-disciplinary infrastructure contractor.
              </p>

              {/* Compact Ethos & Philosophy Panel */}
              <div className="relative rounded-2xl bg-[#F5F8FD] border border-[#DFE6F0] p-4 sm:p-5 overflow-hidden transition-all hover:border-[#3267E9]/30">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2563EB]" aria-hidden="true" />

                <div className="space-y-1.5 pl-1.5 sm:pl-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
                    Core Philosophy
                  </span>

                  <div className="text-sm sm:text-base font-bold text-[#242B38] font-heading">
                    &ldquo;Work is Worship&rdquo;{' '}
                    <span className="text-[#2563EB] font-serif font-normal italic text-xs sm:text-sm">
                      (कर्म ही पूजा है)
                    </span>
                  </div>

                  <p className="text-xs text-[#68758A] leading-normal font-body">
                    Devotion to quality, workforce safety, and precision execution on every structure.
                  </p>
                </div>
              </div>

              {/* Verified Landmark Highlight Strip */}
              <div className="flex items-center gap-2.5 text-xs text-[#68758A] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Quarter-Century Track Record · 1997 to Present</span>
              </div>

            </div>

            {/* Right Column: Connected Timeline (7 cols) */}
            <div className="lg:col-span-7 pt-1 lg:pt-2">
              <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-7">
                
                {/* Connecting Vertical Line */}
                <div 
                  className="absolute left-[13px] sm:left-[17px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#2563EB] via-[#D9E6FF] to-[#DFE6F0]" 
                  aria-hidden="true" 
                />

                {/* Milestone 1: Outdoor Advertising */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#EDF3FF] border-2 border-[#2563EB] text-[#2563EB] font-mono text-xs sm:text-sm font-bold flex items-center justify-center shadow-xs">
                    01
                  </div>

                  <div className="bg-[#FFFFFF] border border-[#DFE6F0] rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:border-[#3267E9]/40 hover:shadow-xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-3">
                      <h3 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#242B38] font-heading">
                        Outdoor Advertising & Commercial Signage
                      </h3>
                      <span className="text-[10.5px] font-mono font-semibold text-[#68758A] uppercase tracking-wider">
                        Phase 01 · Inception
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#68758A] leading-normal font-body">
                      Nationwide highway signboards, acrylic panels, and 3D architectural signage fabrication.
                    </p>

                    <div className="pt-2 border-t border-[#DFE6F0] flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-[#242B38]">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>Highway Display Boards</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>Acrylic & 3D Letters</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Milestone 2: Infrastructure Diversification */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#EDF3FF] border-2 border-[#2563EB] text-[#2563EB] font-mono text-xs sm:text-sm font-bold flex items-center justify-center shadow-xs">
                    02
                  </div>

                  <div className="bg-[#FFFFFF] border border-[#DFE6F0] rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:border-[#3267E9]/40 hover:shadow-xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-3">
                      <h3 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#242B38] font-heading">
                        Heavy Infrastructure Diversification
                      </h3>
                      <span className="text-[10.5px] font-mono font-semibold text-[#68758A] uppercase tracking-wider">
                        Phase 02 · Strategic Pivot
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#68758A] leading-normal font-body">
                      Expanded into ISO 12944 protective coatings, toll plazas, steel fabrication, and high-altitude safety netting.
                    </p>

                    <div className="pt-2 border-t border-[#DFE6F0] flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-[#242B38]">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>Toll Plazas & Civil Works</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>Protective Coating</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>Steel Fabrication</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Milestone 3: Scale & Landmark Deliveries */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#2563EB] border-2 border-white text-white font-mono text-xs sm:text-sm font-bold flex items-center justify-center shadow-md">
                    03
                  </div>

                  <div className="bg-gradient-to-br from-[#FFFFFF] via-[#F5F8FD] to-[#EDF3FF] border border-[#2563EB]/35 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
                          Phase 03 · National Deliveries
                        </span>
                        <h3 className="text-sm sm:text-base lg:text-[18px] font-bold text-[#242B38] font-heading mt-0.5">
                          Scale & Landmark Deliveries
                        </h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EDF3FF] border border-[#D9E6FF] text-[#2563EB] font-mono text-[11px] font-bold w-fit shadow-2xs">
                        ₹30+ Cr Executed
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#68758A] leading-normal font-body">
                      Signature public infrastructure delivered with ISO-certified coating durability across state and municipal bodies.
                    </p>

                    <div className="pt-2 border-t border-[#DFE6F0] space-y-1.5">
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#68758A] block">
                        Signature Infrastructure Portfolio
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {aboutUsContent.majorWorks.map((work, i) => (
                          <div 
                            key={i} 
                            className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/90 border border-[#DFE6F0] text-xs font-semibold text-[#242B38]"
                          >
                            <div className="w-4 h-4 rounded-md bg-[#EDF3FF] text-[#2563EB] flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                            </div>
                            <span className="truncate">{work}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

          {/* Connected Horizontal Timeline Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative">
            {companyJourney.map((step, idx) => (
              <div
                key={step.era}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-md transition-all flex flex-col justify-between space-y-3 sm:space-y-4 h-full relative group hover-card-smooth"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#2563EB] text-white font-mono text-[11px] sm:text-xs font-bold shadow-xs">
                      {step.era}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#687386]/60">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#20242D] font-heading leading-snug">
                    {step.title}
                  </h4>
                </div>

                <ul className="space-y-1.5 pt-2.5 sm:pt-3 border-t border-[#E2E9F4] text-[11px] sm:text-xs text-[#687386] leading-snug font-body">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-blue-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" aria-hidden="true" />
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#1D4ED8] font-heading uppercase tracking-wider">
                    Tier 1 — Government & Statutory Authorities
                  </h3>
                </div>
                <span className="text-[12px] text-[#6B7077] font-body">
                  State corporations, public departments & highway concessions
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {clientsByCategory.government.map((client) => (
                  <div
                    key={client.name}
                    className="p-5 sm:p-5.5 rounded-xl bg-gradient-to-br from-[#EFF6FF] via-[#E4EFFE] to-[#D4E6FD] border border-[#BDD8FD] hover:border-[#93C5FD] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-white/90 border border-[#BDD8FD] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5 shadow-2xs">
                          <Building2 className="w-5 h-5 text-[#2563EB]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-[#1E3A8A] text-[15px] sm:text-[16px] font-heading leading-snug">
                            {client.name}
                          </h4>
                          <p className="text-[12.5px] sm:text-[13px] text-[#3B5478] font-body mt-1 leading-relaxed">
                            {client.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                    {client.highlight && (
                      <div className="mt-4 pt-3 border-t border-[#CEE0FC] flex items-center gap-2 text-[12px] sm:text-[12.5px] font-body">
                        <span className="text-[#2563EB] font-medium shrink-0">Key Delivery:</span>
                        <span className="font-semibold text-[#1E3A8A] truncate">{client.highlight}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* Tier 2 — National Infrastructure & EPC Concessionaires */}
            {/* ----------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-emerald-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" aria-hidden="true" />
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#047857] font-heading uppercase tracking-wider">
                    Tier 2 — National Infrastructure & EPC Concessionaires
                  </h3>
                </div>
                <span className="text-[12px] text-[#6B7077] font-body hidden sm:inline">
                  Prime contractors, national EPCs & concession partners
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
                {clientsByCategory.infrastructure.map((client) => {
                  const monogram = getClientMonogram(client.name);
                  return (
                    <div
                      key={client.name}
                      className="p-4.5 sm:p-5 rounded-xl bg-gradient-to-br from-[#EEF9F2] via-[#E0F5E7] to-[#CEEFDB] border border-[#A4E7BE] hover:border-[#6EE7B7] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="h-7 px-2.5 min-w-[32px] rounded-md bg-white/90 border border-[#A4E7BE] text-[#047857] font-heading font-bold text-[11px] tracking-wider inline-flex items-center justify-center w-fit shrink-0 shadow-2xs">
                          {monogram}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#064E3B] text-[14.5px] sm:text-[15px] font-heading leading-snug">
                            {client.name}
                          </h4>
                          <p className="text-[12px] sm:text-[12.5px] text-[#37604D] font-body mt-1 leading-relaxed">
                            {client.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3.5 pt-2.5 border-t border-[#B7ECCB] flex items-center gap-1.5 text-[12px] text-[#065F46] font-body font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
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
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-amber-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" aria-hidden="true" />
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#B45309] font-heading uppercase tracking-wider">
                    Tier 3 — Corporate & Industrial Enterprise Clients
                  </h3>
                </div>
                <span className="text-[12px] text-[#6B7077] font-body hidden sm:inline">
                  Commercial conglomerates, facility operations & industrial clients
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {clientsByCategory.corporate.map((client) => {
                  const monogram = getClientMonogram(client.name);
                  return (
                    <div
                      key={client.name}
                      className="p-4 sm:p-4.5 rounded-xl bg-gradient-to-br from-[#FFF5EC] via-[#FEE8D6] to-[#FEDCC2] border border-[#FED0A7] hover:border-[#FDBA74] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-7 px-2.5 min-w-[32px] rounded-md bg-white/90 border border-[#FED0A7] text-[#C2410C] font-heading font-bold text-[11px] tracking-wider inline-flex items-center justify-center w-fit shrink-0 mb-3 shadow-2xs">
                          {monogram}
                        </div>
                        <h4 className="font-bold text-[#833116] text-[13.5px] sm:text-[14.5px] font-heading leading-snug">
                          {client.name}
                        </h4>
                        <p className="text-[11.5px] sm:text-[12px] text-[#664D3E] font-body mt-1 leading-relaxed">
                          {client.subtitle}
                        </p>
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
                className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#EAF2FF] to-white border border-[#D6E4F7] space-y-2 sm:space-y-3"
              >
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#2454C6] uppercase tracking-wider">
                  100% Statutory Compliance
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#20242D] font-heading">
                  150+ Direct Staff
                </div>
                <p className="text-[11px] sm:text-xs text-[#687386] leading-relaxed">
                  Every site operative is enrolled in ESIC, Provident Fund (PF), and workmen compensation insurance with certified safety induction.
                </p>
              </ScrollCardReveal>
            </div>

            {/* Right Specialized Disciplines Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
              {workforceData.categories.map((cat, i) => (
                <ScrollCardReveal
                  key={cat.role}
                  delay={0.08 + i * 0.09}
                  yOffset={28}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs hover:border-[#2563EB] hover:shadow-md transition-all flex flex-col justify-between space-y-3 sm:space-y-4 h-full hover-card-smooth"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center font-bold">
                      <Users className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#2563EB] font-semibold">
                      Division 0{i + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading">
                      {cat.role}
                    </h3>
                    <p className="text-xs text-[#687386] leading-relaxed font-body">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 border-t border-[#E2E9F4] text-[10px] sm:text-[11px] font-mono text-[#2454C6] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Certified Operatives</span>
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
              className="lg:col-span-7 p-5 sm:p-8 rounded-3xl bg-white border border-[#D6E4F7] shadow-xs flex flex-col justify-between space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2563EB] text-white flex items-center justify-center font-bold shadow-xs">
                    <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#EAF2FF] text-[#2454C6] font-mono text-[11px] sm:text-xs font-bold">
                    Primary Heavy Hub
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#20242D] font-heading">
                    Central Yard & Fabrication Plant
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#2563EB] font-mono font-semibold mt-0.5 sm:mt-1">
                    15-Acre Heavy Industrial Hub · Maharashtra
                  </p>
                </div>
                <p className="text-xs text-[#687386] leading-relaxed font-body">
                  Our central manufacturing installation engineered for high-throughput structural gantry fabrication, automated surface preparation, and heavy structural assemblies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[#E2E9F4] text-xs font-semibold text-[#20242D]">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4]">
                  Automated CNC steel plate cutting
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4]">
                  MIG/TIG structural gantry assembly lines
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFF] border border-[#E2E9F4]">
                  Overhead 20T heavy gantry cranes
                </div>
              </div>
            </ScrollCardReveal>

            {/* Complementary Facilities (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              {/* Regional Depots */}
              <ScrollCardReveal
                delay={0.16}
                yOffset={24}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading">Regional Mobilization Depots</h3>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#2563EB] font-bold">72h SLA</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#2563EB] font-mono mt-0.5">Mumbai · Delhi-NCR · Ahmedabad · Hyderabad</p>
                  <p className="text-xs text-[#687386] mt-1.5 sm:mt-2 leading-relaxed">
                    Fast-track 72-hour corridor dispatch, equipment maintenance bays, parts inventory, and workforce transit staging.
                  </p>
                </div>
                <div className="pt-2.5 sm:pt-3 border-t border-[#E2E9F4] text-[10px] sm:text-[11px] font-mono text-[#2454C6] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Immediate Regional Dispatch Ready</span>
                </div>
              </ScrollCardReveal>

              {/* In-House Testing Lab */}
              <ScrollCardReveal
                delay={0.24}
                yOffset={24}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E2E9F4] shadow-xs space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading">In-House Testing & Calibration Lab</h3>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#2563EB] font-bold">QA/QC</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#2563EB] font-mono mt-0.5">Central QA/QC Testing Center</p>
                  <p className="text-xs text-[#687386] mt-1.5 sm:mt-2 leading-relaxed">
                    Chloride & soluble salt titration, ultrasonic non-destructive testing (NDT), adhesion pull-off, and DFT calibration gauges.
                  </p>
                </div>
                <div className="pt-2.5 sm:pt-3 border-t border-[#E2E9F4] text-[10px] sm:text-[11px] font-mono text-[#2454C6] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Audited Quality Verification</span>
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

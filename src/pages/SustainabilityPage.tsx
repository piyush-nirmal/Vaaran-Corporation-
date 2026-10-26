import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ChevronRight
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SectionLabel } from '../components/ui/SectionLabel';
import { CountUp } from '../components/ui/CountUp';
import damImg from '../assets/images/hero_apco_expressway_dam_1791896243948.jpg';
import viaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import tunnelImg from '../assets/images/hero_transit_tunnel_viaduct_1791896269073.jpg';

interface SustainabilityPageProps {
  onOpenCapabilityModal?: () => void;
}

export const SustainabilityPage: FC<SustainabilityPageProps> = ({ onOpenCapabilityModal }) => {
  const [activePillar, setActivePillar] = useState<'environment' | 'safety' | 'community' | 'governance'>('environment');

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Sustainability & ESG Commitment | Building Responsibly | Varan Corporation"
        description="Learn how Varan Corporation integrates sustainability into every phase of infrastructure planning, execution, and delivery through resource efficiency, Zero Harm safety, and green highway initiatives."
        keywords="sustainability in infrastructure, green highway construction, zero harm safety, ISO 14001 environmental compliance, low VOC coatings, anti-carbonation longevity, Varan Corporation ESG, civil engineering sustainability, MoEFCC, CPCB"
      />

      {/* ------------------------------------------------------------- */}
      {/* 1. BREADCRUMBS & HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFD] border-b border-[#E2EAF8] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Subtle Engineering Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" aria-hidden="true" />

        {/* Ambient Glows */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#3F73F5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#687386]">
            <Link to="/" className="hover:text-[#2864F0] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
            <span className="text-[#15315B] font-semibold">Sustainability &amp; ESG</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Executive Summary */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] text-xs font-semibold text-[#2864F0] font-heading w-fit">
                  <Leaf className="w-3.5 h-3.5 text-[#2864F0]" />
                  <span>Responsible Infrastructure Execution &bull; MoEFCC &amp; CPCB Aligned</span>
                </span>
                
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#15315B] font-heading leading-[1.18]">
                  Building Infrastructure, <br className="hidden sm:inline" />
                  <span className="text-[#2864F0]">Responsibly &amp; Sustainably</span>
                </h1>
                
                <p className="text-sm sm:text-base font-semibold text-[#2864F0] tracking-normal leading-relaxed">
                  Integrating Environmental Stewardship, Safety, and Social Value into Every Phase of Infrastructure Delivery.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#66748A] max-w-2xl font-normal leading-relaxed font-body">
                Infrastructure plays a defining role in shaping economies, cities, and communities across India. As an established civil construction and protective engineering partner founded in 1997, Varan Corporation integrates environmental sustainability into every stage—from low-VOC formulations and closed-loop abrasive blasting to zero-harm safety and 25+ year structural asset life extension.
              </p>

              {/* Stat Highlights Bar with CountUp */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-2xl font-bold font-heading text-emerald-600">Zero</div>
                  <div className="text-[11px] font-medium text-[#66748A] mt-0.5">Lost Time Incidents</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-2xl font-bold font-heading text-[#2864F0]">
                    <CountUp value="100" suffix="%" />
                  </div>
                  <div className="text-[11px] font-medium text-[#66748A] mt-0.5">Statutory Compliance</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-2xl font-bold font-heading text-[#15315B]">
                    <CountUp value="25" suffix="+ Yrs" />
                  </div>
                  <div className="text-[11px] font-medium text-[#66748A] mt-0.5">Asset Life Extension</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-2xl font-bold font-heading text-emerald-600">Low-VOC</div>
                  <div className="text-[11px] font-medium text-[#66748A] mt-0.5">Eco Formulations</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[46px] rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-sm font-heading shadow-xs transition-colors"
                >
                  <span>Our Sustainability Approach</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                {onOpenCapabilityModal && (
                  <button
                    type="button"
                    onClick={onOpenCapabilityModal}
                    className="inline-flex items-center justify-center gap-2 px-5 h-[46px] rounded-xl bg-white hover:bg-[#F0F5FF] text-[#15315B] border border-[#DCE4EF] font-semibold text-sm font-heading shadow-2xs transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#2864F0]" />
                    <span>Download ESG Charter</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#E2EAF8] p-5 sm:p-6 shadow-sm space-y-4">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-[#E2EAF8]">
                  <img
                    src={damImg}
                    alt="Eco-responsible infrastructure project site executed by Varan Corporation"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase bg-[#2864F0] px-2 py-0.5 rounded text-white font-semibold tracking-wider">
                      Verified Green Site
                    </span>
                    <div className="text-sm font-bold font-heading mt-1">
                      Sustainable Highway &amp; Waterway Engineering
                    </div>
                    <p className="text-[11px] text-white/80 line-clamp-1">
                      Minimizing environmental impact while delivering high-performance infrastructure at scale.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#15315B]">
                    <span>Environmental Stewardship Index</span>
                    <span className="text-emerald-700">98.4% Rating</span>
                  </div>
                  <div className="w-full bg-[#EAF2FF] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[98.4%]" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF1FF] text-[#2864F0] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0]" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-[#15315B] block font-heading">
                      Strict ISO 14001:2015 &amp; ISO 45001 Alignment
                    </span>
                    <span className="text-[#66748A] block">
                      Rigorous audits ensure active compliance across Maharashtra, Delhi NCR, Goa, and Karnataka.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. OUR APPROACH TO SUSTAINABILITY (Inspired by APCO Blueprint) */}
      {/* ------------------------------------------------------------- */}
      <section id="approach" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <SectionLabel number="01" name="CORE PHILOSOPHY" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
              Our Approach to Sustainability
            </h2>
            <p className="text-sm sm:text-base text-[#66748A] font-body leading-relaxed">
              Varan Corporation follows a holistic approach to sustainability that aligns engineering excellence with environmental responsibility and lasting social impact.
            </p>
          </div>

          {/* Integrated / Responsible / Future-Focused Architecture */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#F8FAFD] border border-[#E2EAF8] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#15315B] font-heading">
                    Integrated. Responsible. Future-Focused.
                  </h3>
                  <p className="text-sm text-[#66748A] mt-2 font-body leading-relaxed">
                    Rather than treating sustainability as a secondary checklist, we embed statutory environmental protocols and workforce welfare directly into our daily construction, abrasive surface preparation, and structural steel fabrication pipelines.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#15315B] font-heading">
                    Varan Corporation follows a sustainability-driven approach through:
                  </h4>

                  {/* Clean Engineering Tab Switches - NO EMOJI BOXES */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    
                    <button
                      type="button"
                      onClick={() => setActivePillar('environment')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                        activePillar === 'environment'
                          ? 'bg-white border-[#2864F0] shadow-sm ring-1 ring-[#2864F0]'
                          : 'bg-white/80 border-[#E2EAF8] hover:border-[#2864F0]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-[#2864F0] tracking-wider">
                          PILLAR 01
                        </span>
                        <span className={`w-2 h-2 rounded-full ${activePillar === 'environment' ? 'bg-[#2864F0]' : 'bg-[#DCE4EF]'}`} />
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#15315B] font-heading">
                        Environmental Responsibility
                      </div>
                      <div className="text-[11px] text-[#66748A] mt-1 leading-snug">
                        Resource optimization &amp; zero-waste circularity
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActivePillar('safety')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                        activePillar === 'safety'
                          ? 'bg-white border-[#2864F0] shadow-sm ring-1 ring-[#2864F0]'
                          : 'bg-white/80 border-[#E2EAF8] hover:border-[#2864F0]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-[#2864F0] tracking-wider">
                          PILLAR 02
                        </span>
                        <span className={`w-2 h-2 rounded-full ${activePillar === 'safety' ? 'bg-[#2864F0]' : 'bg-[#DCE4EF]'}`} />
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#15315B] font-heading">
                        Health &amp; Safety
                      </div>
                      <div className="text-[11px] text-[#66748A] mt-1 leading-snug">
                        Zero Harm culture &amp; 100% certified fall arrest
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActivePillar('community')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                        activePillar === 'community'
                          ? 'bg-white border-[#2864F0] shadow-sm ring-1 ring-[#2864F0]'
                          : 'bg-white/80 border-[#E2EAF8] hover:border-[#2864F0]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] font-bold text-[#2864F0] tracking-wider">
                          PILLAR 03
                        </span>
                        <span className={`w-2 h-2 rounded-full ${activePillar === 'community' ? 'bg-[#2864F0]' : 'bg-[#DCE4EF]'}`} />
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#15315B] font-heading">
                        Community Engagement
                      </div>
                      <div className="text-[11px] text-[#66748A] mt-1 leading-snug">
                        Regional skilling &amp; local employment impact
                      </div>
                    </button>

                  </div>
                </div>

                {/* Pillar Dynamic Content Brief */}
                <div className="p-4 rounded-xl bg-white border border-[#E2EAF8] text-xs space-y-2">
                  <div className="font-bold text-[#15315B] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2864F0]" />
                    <span>
                      {activePillar === 'environment' && 'Environmental Focus: Circularity & Low Carbon Footprint'}
                      {activePillar === 'safety' && 'Safety Focus: Empowered Stop-Work Authority & Daily TBT'}
                      {activePillar === 'community' && 'Community Focus: Dignified Livelihoods & Regional Value'}
                      {activePillar === 'governance' && 'Governance Focus: Ethical Tendering & ISO Certifications'}
                    </span>
                  </div>
                  <p className="text-[#66748A] leading-relaxed">
                    {activePillar === 'environment' && 'By utilizing low-VOC anti-carbonation coatings and recovering 100% of scrap steel from fabrication yards, we significantly lower embodied carbon across highway and bridge projects.'}
                    {activePillar === 'safety' && 'Every technician deployed up to 100 ft is safeguarded with double-lanyard harnesses, inertia reels, and comprehensive site hazard logs inspected by dedicated Safety Officers.'}
                    {activePillar === 'community' && 'We recruit and train local trade apprentices across jobsite regions in Maharashtra, Goa, Delhi NCR, and Karnataka, elevating local earning potential and technical capability.'}
                    {activePillar === 'governance' && 'Adhering to strict statutory compliance, anti-corruption policies, and transparent technical reporting across all state and central authority projects.'}
                  </p>
                </div>

              </div>

              {/* Right: Featured Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E2EAF8] shadow-sm">
                  <img
                    src={viaductImg}
                    alt="Sustainable elevated viaduct protective coating project"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded text-white font-medium">
                      29 Flyovers Coated &bull; Longevity Standard
                    </span>
                    <div className="text-sm font-bold font-heading mt-1">
                      Anti-Carbonation Barrier Defense
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. ENVIRONMENTAL RESPONSIBILITY DEEP DIVE (TECHNICAL INDEX CARDS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFD] border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <SectionLabel number="02" name="ENVIRONMENTAL FOCUS" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
                Environmental Responsibility
              </h2>
              <p className="text-sm sm:text-base text-[#66748A] font-body leading-relaxed">
                Minimizing Impact. Maximizing Efficiency. Sustainability begins with responsible execution across all construction services and infrastructure projects.
              </p>
            </div>
            <div className="text-xs font-mono text-[#2864F0] font-semibold bg-[#EAF1FF] px-3.5 py-2 rounded-lg border border-[#DCE4EF] shrink-0">
              ISO 14001:2015 Compliant Protocols
            </div>
          </div>

          {/* 4 Professional Engineering Focus Cards (Clean indices, NO EMOJI BOXES) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Efficient Resource Utilization */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] hover:border-[#2864F0]/40 transition-all duration-300 shadow-2xs hover:shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAF1FF]">
                  <span className="font-mono text-xs font-bold text-[#2864F0] tracking-wider">
                    SEC-ENV // 01
                  </span>
                  <span className="text-[10px] font-mono text-[#66748A] bg-[#F8FAFD] px-2 py-0.5 rounded border border-[#E2EAF8]">
                    Solar &bull; Water
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#15315B] font-heading">
                  Efficient Resource Utilization
                </h3>
                <p className="text-xs text-[#66748A] leading-relaxed font-body">
                  Efficient use of materials, energy, and water across construction projects. Optimization of steel cutting patterns reduces structural scrap to under 2%.
                </p>
              </div>
              <ul className="pt-3 border-t border-[#EAF2FF] space-y-1.5 text-[11px] text-[#202A38] font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Solar-assisted site power units</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Closed-loop water recycling</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Waste Management */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] hover:border-[#2864F0]/40 transition-all duration-300 shadow-2xs hover:shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAF1FF]">
                  <span className="font-mono text-xs font-bold text-[#2864F0] tracking-wider">
                    SEC-ENV // 02
                  </span>
                  <span className="text-[10px] font-mono text-[#66748A] bg-[#F8FAFD] px-2 py-0.5 rounded border border-[#E2EAF8]">
                    100% Recycled
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#15315B] font-heading">
                  Waste Management &amp; Recycling
                </h3>
                <p className="text-xs text-[#66748A] leading-relaxed font-body">
                  Structured waste management, recycling, and responsible disposal systems. 100% of metallic scrap is repurposed through certified smelting channels.
                </p>
              </div>
              <ul className="pt-3 border-t border-[#EAF2FF] space-y-1.5 text-[11px] text-[#202A38] font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Abrasive blast media recovery</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Segregated hazardous disposal</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Environmental Compliance */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] hover:border-[#2864F0]/40 transition-all duration-300 shadow-2xs hover:shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAF1FF]">
                  <span className="font-mono text-xs font-bold text-[#2864F0] tracking-wider">
                    SEC-ENV // 03
                  </span>
                  <span className="text-[10px] font-mono text-[#66748A] bg-[#F8FAFD] px-2 py-0.5 rounded border border-[#E2EAF8]">
                    MoEFCC &bull; CPCB
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#15315B] font-heading">
                  Environmental Compliance
                </h3>
                <p className="text-xs text-[#66748A] leading-relaxed font-body">
                  Full compliance with Central (CPCB) and State Pollution Control Boards, MoEFCC directives, and statutory highway environmental mandates.
                </p>
              </div>
              <ul className="pt-3 border-t border-[#EAF2FF] space-y-1.5 text-[11px] text-[#202A38] font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero-discharge washdown bays</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Air quality &amp; particulate filtration</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Sustainable Construction Practices */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] hover:border-[#2864F0]/40 transition-all duration-300 shadow-2xs hover:shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAF1FF]">
                  <span className="font-mono text-xs font-bold text-[#2864F0] tracking-wider">
                    SEC-ENV // 04
                  </span>
                  <span className="text-[10px] font-mono text-[#66748A] bg-[#F8FAFD] px-2 py-0.5 rounded border border-[#E2EAF8]">
                    25+ Yrs Longevity
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#15315B] font-heading">
                  Sustainable Practices
                </h3>
                <p className="text-xs text-[#66748A] leading-relaxed font-body">
                  Adoption of eco-friendly low-VOC paints and water-based sealers that protect structures for 25+ years without hazardous atmospheric outgassing.
                </p>
              </div>
              <ul className="pt-3 border-t border-[#EAF2FF] space-y-1.5 text-[11px] text-[#202A38] font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Low-VOC protective coatings</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Extended asset life lifecycle</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. HEALTH, SAFETY & WORKFORCE WELLBEING */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <SectionLabel number="03" name="HUMAN CAPITAL & SAFETY" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
              Health, Safety &amp; Workforce Wellbeing
            </h2>
            <p className="text-sm sm:text-base text-[#66748A] font-body leading-relaxed">
              Safety as a Core Priority. The wellbeing of our permanent field teams, rigging crews, and engineers remains central to every project—from 100 ft sea bridge painting to high-speed expressway toll civil works.
            </p>
          </div>

          {/* Clean Safety Cards - NO EMOJI BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-3">
              <div className="font-mono text-xs font-bold text-[#2864F0] tracking-wider pb-2 border-b border-[#E2EAF8]">
                PROTOCOL 01
              </div>
              <h3 className="text-base font-bold text-[#15315B] font-heading">
                Strict Safety Protocols
              </h3>
              <p className="text-xs text-[#66748A] leading-relaxed font-body">
                Engineered safety systems, dual-lanyard full-body harnesses, and mandatory daily Permit-To-Work (PTW) checklists at all project sites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-3">
              <div className="font-mono text-xs font-bold text-[#2864F0] tracking-wider pb-2 border-b border-[#E2EAF8]">
                PROTOCOL 02
              </div>
              <h3 className="text-base font-bold text-[#15315B] font-heading">
                Continuous Monitoring
              </h3>
              <p className="text-xs text-[#66748A] leading-relaxed font-body">
                Dedicated on-site EHS inspectors conducting unannounced audits, scaffolding tag verifications, and gas detection in enclosed bridge chambers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-3">
              <div className="font-mono text-xs font-bold text-[#2864F0] tracking-wider pb-2 border-b border-[#E2EAF8]">
                PROTOCOL 03
              </div>
              <h3 className="text-base font-bold text-[#15315B] font-heading">
                Training &amp; Awareness
              </h3>
              <p className="text-xs text-[#66748A] leading-relaxed font-body">
                Comprehensive training programs covering working-at-height certifications, mock rescue simulations, and emergency medical response drills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-3">
              <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider pb-2 border-b border-[#E2EAF8]">
                PROTOCOL 04
              </div>
              <h3 className="text-base font-bold text-[#15315B] font-heading">
                Zero Harm Approach
              </h3>
              <p className="text-xs text-[#66748A] leading-relaxed font-body">
                Targeting zero accidents and zero environmental incidents. Every technician is vested with absolute Stop-Work authority on any identified hazard.
              </p>
            </div>

          </div>

          {/* 4 Non-Negotiable Site Safety Rules */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2EAF8] shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EAF1FF]">
              <div>
                <span className="text-[11px] font-mono text-[#2864F0] font-bold uppercase tracking-wider">
                  Operational Safety Standards
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#15315B]">
                  The 4 Non-Negotiable Jobsite Rules
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 w-fit">
                100% Zero-Harm Mandate
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-2">
                <div className="text-xs font-mono font-bold text-[#2864F0]">01 / PRE-SHIFT TBT</div>
                <div className="text-sm font-bold text-[#15315B]">Daily Tool-Box Talk</div>
                <p className="text-xs text-[#66748A] leading-relaxed">
                  Every morning shift begins with hazard briefings, wind speed checks, and equipment verification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-2">
                <div className="text-xs font-mono font-bold text-[#2864F0]">02 / 100% TIE-OFF</div>
                <div className="text-sm font-bold text-[#15315B]">Dual Lanyard Harnesses</div>
                <p className="text-xs text-[#66748A] leading-relaxed">
                  Working above 2 meters mandates EN-361 full-body harnesses anchored to certified static lifelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-2">
                <div className="text-xs font-mono font-bold text-[#2864F0]">03 / SCAFFOLD TAGGING</div>
                <div className="text-sm font-bold text-[#15315B]">Daily Green-Tag Audits</div>
                <p className="text-xs text-[#66748A] leading-relaxed">
                  No operative mounts staging without a signed Green Inspection Tag by an appointed Competent Scaffold Inspector.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-700">04 / STOP-WORK RIGHT</div>
                <div className="text-sm font-bold text-[#15315B]">Empowered Worker Right</div>
                <p className="text-xs text-[#66748A] leading-relaxed">
                  Any technician can immediately halt jobsite operations without penalty upon sighting an unsafe condition.
                </p>
              </div>
            </div>
          </div>

          {/* Site Safety Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#15315B] to-[#202A38] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-xs font-mono uppercase tracking-wider text-[#65B5FF] font-semibold">
                Occupational Health &amp; Safety Standard
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading">
                100% Certified Personal Protective Equipment (PPE)
              </div>
              <p className="text-xs sm:text-sm text-[#A0AEC0] max-w-xl">
                Every operative on site is equipped with EN/ANSI certified fall arresters, impact helmets, respirators, and high-visibility reflective apparel.
              </p>
            </div>
            <Link
              to="/careers"
              className="px-5 py-3 rounded-xl bg-[#2864F0] hover:bg-[#3F73F5] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors shrink-0"
            >
              <span>View Safety Culture in Careers</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. STATUTORY COMPLIANCE & ESG SCORECARD (AUTHENTIC INDIAN CONTEXT) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFD] border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-2">
            <SectionLabel number="04" name="STATUTORY & GOVERNANCE" />
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#15315B] tracking-tight">
              Statutory Alignment &amp; Environmental Governance Matrix
            </h2>
            <p className="text-sm text-[#66748A] font-body leading-relaxed">
              We hold our projects accountable to India&apos;s leading environmental protection bodies, statutory labour laws, and highway technical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAF1FF]">
                <span className="font-mono text-xs font-bold text-[#15315B]">MoEFCC</span>
                <span className="text-[10px] font-mono text-[#2864F0] bg-[#F0F5FF] px-2 py-0.5 rounded">Govt of India</span>
              </div>
              <div className="text-sm font-bold text-[#15315B] font-heading">
                Ministry of Environment &amp; Forests
              </div>
              <p className="text-xs text-[#66748A] leading-relaxed">
                Full adherence to eco-sensitive zone (ESZ) site clearances, particulate air emission thresholds, and zero-runoff containment protocols.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-700 font-semibold">
                Audit Clearance: 100% Compliant
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAF1FF]">
                <span className="font-mono text-xs font-bold text-[#15315B]">CPCB / SPCB</span>
                <span className="text-[10px] font-mono text-[#2864F0] bg-[#F0F5FF] px-2 py-0.5 rounded">Pollution Control</span>
              </div>
              <div className="text-sm font-bold text-[#15315B] font-heading">
                Central Pollution Control Board
              </div>
              <p className="text-xs text-[#66748A] leading-relaxed">
                Closed-circuit abrasive recovery systems under the Hazardous and Other Wastes (Management &amp; Transboundary Movement) Rules.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-700 font-semibold">
                Disposal: Closed-Loop Smelting
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2EAF8] shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAF1FF]">
                <span className="font-mono text-xs font-bold text-[#15315B]">NGHM</span>
                <span className="text-[10px] font-mono text-[#2864F0] bg-[#F0F5FF] px-2 py-0.5 rounded">Green Highway</span>
              </div>
              <div className="text-sm font-bold text-[#15315B] font-heading">
                National Green Highway Mission
              </div>
              <p className="text-xs text-[#66748A] leading-relaxed">
                Median plantation of indigenous drought-resistant species paired with automated micro-drip networks, lowering ambient roadway temperatures.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-700 font-semibold">
                Flora: 100% Native Hardwood
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. COMMUNITY ENGAGEMENT & URBAN GREENERY */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <SectionLabel number="05" name="SOCIAL & COMMUNITY IMPACT" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
                Community Engagement &amp; Green Highway Development
              </h2>
              <p className="text-sm sm:text-base text-[#66748A] font-body leading-relaxed">
                Infrastructure must uplift the societies it connects. Varan Corporation partners with local communities along highway corridors and municipal zones to foster local employment, trade apprenticeships, and green roadside ecosystems.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-1">
                  <div className="font-mono text-[11px] font-bold text-[#2864F0]">
                    INITIATIVE 01 // WATER CONSERVATION
                  </div>
                  <h4 className="text-xs font-bold text-[#15315B] font-heading">
                    Highway Median Landscaping &amp; Drip Irrigation
                  </h4>
                  <p className="text-xs text-[#66748A]">
                    Installation of water-saving drip networks and indigenous shrub plantations that reduce vehicle headlight glare and absorb carbon emissions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-1">
                  <div className="font-mono text-[11px] font-bold text-[#2864F0]">
                    INITIATIVE 02 // WORKFORCE ADVANCEMENT
                  </div>
                  <h4 className="text-xs font-bold text-[#15315B] font-heading">
                    Local Workforce Empowerment &amp; Trade Upskilling
                  </h4>
                  <p className="text-xs text-[#66748A]">
                    Prioritizing local hiring for civil works and providing accredited technical training in specialized spray equipment and steel welding.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] space-y-1">
                  <div className="font-mono text-[11px] font-bold text-[#2864F0]">
                    INITIATIVE 03 // CIVIC BEAUTIFICATION
                  </div>
                  <h4 className="text-xs font-bold text-[#15315B] font-heading">
                    Urban Aesthetics &amp; Flyover Murals
                  </h4>
                  <p className="text-xs text-[#66748A]">
                    Transforming dull concrete piers into vibrant public art reflecting regional cultural heritage, making cities cleaner and visually inviting.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E2EAF8] shadow-sm">
                <img
                  src={tunnelImg}
                  alt="Modern transportation infrastructure completed by Varan Corporation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase bg-[#2864F0] px-2 py-0.5 rounded text-white font-semibold tracking-wider">
                    Urban Infrastructure
                  </span>
                  <div className="text-base font-bold font-heading mt-1">
                    Safe, Efficient, and Clean Transit Corridors
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 mt-0.5">
                    Engineered with anti-carbonation barriers that prevent concrete spalling and extend tunnel and bridge structural integrity.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. NEXT STEP CALLOUT (Matching Project Design Theme) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#F8FAFD] py-12 sm:py-16">
        <AnimatedSection direction="up" delay={0.15}>
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#15315B] font-heading">
                Building Tomorrow&apos;s Infrastructure Together
              </h3>
              <p className="text-xs sm:text-sm text-[#66748A] font-body">
                Collaborate with Varan Corporation on infrastructure projects that prioritize durability, safety, and sustainable execution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/rfp-portal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-bold text-xs uppercase tracking-[0.04em] font-heading shadow-xs transition-colors w-full sm:w-auto"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              {onOpenCapabilityModal && (
                <button
                  type="button"
                  onClick={onOpenCapabilityModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#EAF2FF] text-[#15315B] border border-[#DCE4EF] font-bold text-xs uppercase tracking-[0.04em] font-heading transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 text-[#2864F0]" />
                  <span>Download ESG Profile</span>
                </button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
};

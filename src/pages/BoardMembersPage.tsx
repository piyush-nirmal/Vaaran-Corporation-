import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ChevronRight, 
  Building2, 
  Award, 
  Scale, 
  TrendingUp
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface BoardMembersPageProps {
  onOpenCapabilityModal?: () => void;
}

interface BoardMember {
  id: string;
  name: string;
  designation: string;
  subRole: string;
  credentials: string;
  image: string;
  bio: string;
  highlights: string[];
  keyBadges: string[];
}

const BOARD_MEMBERS: BoardMember[] = [
  {
    id: 'anil-singh',
    name: 'Mr. Anil Kumar Singh',
    designation: 'MANAGING DIRECTOR',
    subRole: 'Strategic Direction & Nationwide Infrastructure Operations',
    credentials: '25+ Years Infrastructure Leadership',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
    bio: 'Mr. Anil Kumar Singh plays a key role in guiding Varan Corporation’s overall business direction and infrastructure operations. His leadership contributes to strengthening the company’s execution capabilities across sectors, ensuring that projects are delivered with consistency, quality, and efficiency. With a deep understanding of the infrastructure landscape, he supports strategic decision-making and operational alignment across the organization. His involvement across various aspects of the business helps drive disciplined execution and sustainable growth, reinforcing Varan’s position as a reliable EPC player contributing to large-scale infrastructure development across the country.',
    highlights: [
      'Over 25+ years pioneering specialized commercial painting, structural steel, and civil execution',
      'Architect of Varan’s strategic evolution into national highway and marine infrastructure projects',
      'Direct executive oversight on large-scale concessions and government authority contracts',
      'Champion of zero-harm safety culture and institutional client trust across India'
    ],
    keyBadges: ['Strategic Leadership', 'MoRTH & NHAI Liaison', 'Statutory Governance']
  },
  {
    id: 'vinod-singh',
    name: 'Mr. Vinod Kumar Singh',
    designation: 'JOINT MANAGING DIRECTOR',
    subRole: 'Project Execution Frameworks & Operational Coordination',
    credentials: '20+ Years Field Engineering & Project Management',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
    bio: 'Mr. Vinod Kumar Singh is actively involved in supporting Varan’s project execution framework, contributing to the efficient delivery of infrastructure projects across multiple sectors. His role focuses on strengthening operational coordination, ensuring that project activities are aligned with timelines, quality standards, and execution processes. With a practical understanding of construction and infrastructure development, he plays a key role in maintaining consistency across ongoing projects. His contribution enhances Varan’s ability to manage large-scale infrastructure works while maintaining a structured and disciplined approach to execution and delivery.',
    highlights: [
      'Comprehensive oversight of 40+ specialized plant equipment assets and field mobilization yards',
      'Spearheads high-altitude rigging and marine bridge protective coating up to 100 ft elevation',
      'Standardized automated surface preparation and Sa 2.5 abrasive blasting quality systems',
      'Maintains 99.8% on-time project handover record across live traffic expressway corridors'
    ],
    keyBadges: ['Operational Coordination', 'Plant & Fleet Management', 'Live-Traffic Safety']
  },
  {
    id: 'rp-singh',
    name: 'Mr. R. P. Singh',
    designation: 'DIRECTOR',
    subRole: 'Corporate Governance, Statutory Compliance & SPV Oversight',
    credentials: 'Senior Infrastructure Governance & Institutional Finance Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=85',
    bio: 'Mr. R. P. Singh brings valuable experience to Varan’s leadership, contributing to governance, oversight, and organizational direction. His role supports the company in maintaining strong operational frameworks and ensuring adherence to established standards and practices. He provides strategic inputs that help strengthen decision-making processes and organizational stability. Through his involvement, Varan continues to reinforce its focus on structured growth, operational discipline, and long-term sustainability, supporting the company’s ability to deliver infrastructure projects effectively across diverse sectors.',
    highlights: [
      'Leads enterprise risk management and statutory compliance across ISO 9001, ISO 12944, and PASARA',
      'Directs 100% labor code compliance, ESIC/PF governance, and comprehensive workmen welfare',
      'Oversees Special Purpose Vehicles (SPVs) and escrow-controlled project joint ventures',
      'Steers financial prudence and capital allocation for heavy mechanized plant acquisition'
    ],
    keyBadges: ['Statutory Compliance', 'Risk Management', 'SPV Governance']
  }
];

export const BoardMembersPage: FC<BoardMembersPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Board Members & Corporate Governance | Varan Corporation"
        description="Meet the Board of Directors of Varan Corporation: Mr. Anil Kumar Singh (Managing Director), Mr. Vinod Kumar Singh (Joint Managing Director), and Mr. R. P. Singh (Director) — leadership that builds at scale."
        keywords="Board Members, Board of Directors, Varan Corporation leadership, Anil Kumar Singh, Vinod Kumar Singh, R. P. Singh, corporate governance, infrastructure leaders India"
      />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO & BREADCRUMB SECTION (APCO-STYLE ARCHITECTURE) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFD] border-b border-[#E2EAF8] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Engineering Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" aria-hidden="true" />
        
        {/* Soft Radial Ambient Accents */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#2864F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#15315B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#F8FAFD]" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#687386]">
            <Link to="/" className="hover:text-[#2864F0] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
            <Link to="/about" className="hover:text-[#2864F0] transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
            <span className="text-[#15315B] font-semibold">Board Members</span>
          </nav>

          <div className="max-w-4xl space-y-4 sm:space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] text-xs font-semibold text-[#2864F0] font-heading w-fit">
              <span className="w-2 h-2 rounded-full bg-[#2864F0]" />
              <span>EXECUTIVE GOVERNANCE // BOARD OF DIRECTORS</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15315B] font-heading leading-[1.15]">
              Leadership That <span className="text-[#2864F0]">Builds at Scale</span>
            </h1>

            <p className="text-sm sm:text-base text-[#66748A] font-body leading-relaxed max-w-3xl">
              Behind every landmark infrastructure project stands leadership that understands scale, complexity, and precision in execution.
            </p>

            <p className="text-xs sm:text-sm text-[#4A5568] font-body leading-relaxed max-w-3xl">
              Varan Corporation’s Board of Directors brings together multi-disciplinary expertise across civil engineering, infrastructure development, specialized protective coatings, finance, and strategic management, guiding the organization as a trusted infrastructure contractor across India.
            </p>
          </div>

          {/* Quick Leadership Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 max-w-4xl">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
              <div className="text-xl sm:text-2xl font-bold font-heading text-[#15315B]">1997</div>
              <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Foundational Origin</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
              <div className="text-xl sm:text-2xl font-bold font-heading text-[#2864F0]">₹30+ Cr</div>
              <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Executed Nationwide</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
              <div className="text-xl sm:text-2xl font-bold font-heading text-emerald-600">100%</div>
              <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Statutory Compliance</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
              <div className="text-xl sm:text-2xl font-bold font-heading text-[#15315B]">25+ Yrs</div>
              <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Proven Asset Durability</div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CORE BOARD MEMBERS SHOWCASE (APCO-INSPIRED PROFILE CARDS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold font-mono tracking-wider text-[#2864F0] uppercase">
              EXECUTIVE BOARD
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
              Board of Directors
            </h2>
            <p className="text-xs sm:text-sm text-[#66748A] font-body leading-relaxed">
              Guiding strategic direction, statutory oversight, and engineering execution across all infrastructure divisions.
            </p>
          </div>

          {/* Vertical Detailed Member Cards (Apco Infra Reference Style) */}
          <div className="space-y-8 sm:space-y-12">
            {BOARD_MEMBERS.map((member, idx) => (
              <AnimatedSection key={member.id} direction="up" delay={0.08 * (idx + 1)}>
                <div className="rounded-3xl bg-[#F8FAFD] border border-[#E2EAF8] hover:border-[#2864F0]/40 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10 items-start">
                    
                    {/* Left Column: Portrait & Title Information (4 cols) */}
                    <div className="lg:col-span-4 space-y-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100 shrink-0">
                        <img
                          src={member.image}
                          alt={`Portrait of ${member.name}, ${member.designation}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/50 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-xs py-1 px-2 rounded text-center">
                          Varan Executive Board
                        </span>
                      </div>

                      <div className="space-y-1.5 w-full">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider bg-[#2864F0] text-white uppercase shadow-2xs">
                          {member.designation}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#15315B]">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#2864F0] font-body">
                          {member.subRole}
                        </p>
                        <p className="text-[11px] text-[#66748A] font-mono">
                          {member.credentials}
                        </p>
                      </div>

                      {/* Key Badges */}
                      <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                        {member.keyBadges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2.5 py-1 rounded-md bg-white border border-[#DCE4EF] text-[10.5px] font-medium text-[#15315B]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Bio Narrative & Strategic Highlights (8 cols) */}
                    <div className="lg:col-span-8 space-y-6 pt-2 lg:pt-0">
                      
                      {/* Main Leadership Bio (Exact Apco Depth & Tone) */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#66748A] font-mono">
                          Executive Profile &amp; Responsibilities
                        </h4>
                        <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-body text-justify">
                          {member.bio}
                        </p>
                      </div>

                      {/* Strategic Operational Highlights */}
                      <div className="space-y-3 pt-4 border-t border-[#E2EAF8]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#15315B] font-heading flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#2864F0]" />
                          <span>Core Execution Oversight &amp; Strategic Value:</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#20242D]">
                          {member.highlights.map((item, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#E2EAF8]/80 shadow-2xs"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2864F0] shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Endorsement */}
                      <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#66748A]">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Statutory Corporate Governance · Clean Track Record</span>
                        </div>
                        <span className="text-[#2864F0] font-semibold">Varan Corporation (Est. 1997)</span>
                      </div>

                    </div>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. GOVERNANCE & EXECUTION FRAMEWORKS (APCO-STYLE TWIN PANELS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold font-mono tracking-wider text-[#2864F0] uppercase">
              INSTITUTIONAL FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
              Corporate Governance &amp; Execution Framework
            </h2>
            <p className="text-xs sm:text-sm text-[#66748A] font-body leading-relaxed">
              Operating with disciplined corporate governance, transparent stakeholder trust, and uncompromised site safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Panel 1: Strong Governance. Sustainable Growth. */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2EAF8] shadow-xs space-y-5 flex flex-col justify-between hover:border-[#2864F0]/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#2864F0] flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#15315B]">
                    Strong Governance. Sustainable Growth.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
                    The Board ensures disciplined and responsible growth across Varan Corporation’s nationwide operations as a trusted infrastructure contractor in India.
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-xs sm:text-[13px] text-[#20242D]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Strategic decision-making</strong> across large civil contracting, highway viaduct, and protective coating projects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Strong governance &amp; compliance frameworks</strong> across ISO 9001:2015, ISO 12944 (C5-M), and PASARA statutory security</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Proactive risk management</strong> with audited tool-box talks and certified site safety supervisor protocols</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Long-term infrastructure planning</strong> and asset longevity guaranteed up to 25+ years</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E2EAF8] flex items-center justify-between text-[11px] font-mono text-[#66748A]">
                <span>Framework: ISO &amp; Statutory Labor</span>
                <span className="text-emerald-600 font-bold">100% Audited</span>
              </div>
            </div>

            {/* Panel 2: Experience Meets Execution */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2EAF8] shadow-xs space-y-5 flex flex-col justify-between hover:border-[#2864F0]/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF1FF] text-[#2864F0] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#15315B]">
                    Experience Meets Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
                    Varan’s leadership philosophy is built on clarity of vision and strength of execution, shaped by:
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-xs sm:text-[13px] text-[#20242D]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Long-term commitment</strong> to infrastructure development with 25+ years of continuous execution since 1997</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Deeply rooted stakeholder trust</strong> and seamless public sector collaboration (PWD, MSRDC, NHAI)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Focus on operational efficiency</strong> and delivery excellence with self-owned airless spray plants &amp; blasting rigs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0 mt-0.5" />
                    <span><strong>Multi-disciplinary foundation</strong> in painting, civil repair, beautification, construction, and road sign engineering</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E2EAF8] flex items-center justify-between text-[11px] font-mono text-[#66748A]">
                <span>Philosophy: Work is Worship</span>
                <span className="text-[#2864F0] font-bold">Zero-Defect Handover</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. CLOSING LEADERSHIP PLEDGE BANNER (APCO STYLE) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-18 bg-[#15315B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2864F0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-xs font-mono text-blue-200 border border-white/15">
            <Building2 className="w-3.5 h-3.5" />
            <span>NATIONWIDE EXECUTION EXCELLENCE</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading leading-relaxed max-w-4xl mx-auto text-white/95">
            &ldquo;With strong leadership at its foundation, Varan Corporation continues to strengthen its position among trusted infrastructure contractors in India, expanding capabilities across specialized painting, civil repairs, highway beautification, turnkey construction, and road sign engineering—driving progress with purpose, precision, and safety.&rdquo;
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2864F0] hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider font-heading transition-colors shadow-lg shadow-blue-900/30 w-full sm:w-auto"
            >
              <span>Connect with Leadership Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            {onOpenCapabilityModal && (
              <button
                type="button"
                onClick={onOpenCapabilityModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider font-heading transition-colors border border-white/20 cursor-pointer w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-blue-300" />
                <span>Download Capability Profile</span>
              </button>
            )}

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-medium text-xs tracking-wider transition-colors w-full sm:w-auto"
            >
              <span>Return to About Overview</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

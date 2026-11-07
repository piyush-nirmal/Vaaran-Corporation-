import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  X
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { CountUp } from '../components/ui/CountUp';
import { ServiceTabs } from '../components/ServiceTabs';

// Images for sectors
import viaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';
import metroImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import damImg from '../assets/images/hero_apco_expressway_dam_1791896243948.jpg';
import signboardImg from '../assets/images/road_signage_highway.jpg';

interface OperationsPageProps {
  onOpenCapabilityModal: () => void;
}

interface SectorItem {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  category: string;
  specCode: string;
  statutoryBadge: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  targetAuthorities: string[];
}

const SECTOR_DATA: SectorItem[] = [
  {
    id: 'painting',
    tag: 'DIVISION 01 // PAINTING & PROTECTIVE COATINGS',
    title: 'Painting',
    shortDesc: 'Commercial, industrial, bridge, and marine painting with high-build anti-carbonation and weather-resistant protective coatings.',
    fullDesc: 'Specialized painting operations covering flyover concrete viaducts, marine bridges up to 100 ft above water, industrial plant flooring epoxies, and high-visibility road median/kerb coatings that prevent rust, chemical degradation, and weather wear.',
    image: viaductImg,
    category: 'Painting',
    specCode: 'MoRTH Section 1500 & 1600 / ISO 12944 (C5-I/M)',
    statutoryBadge: 'Anti-Carbonation & Salt Spray Certified',
    deliverables: [
      'Anti-carbonation protective paint for flyovers & viaducts',
      'Marine-grade epoxy & polyurethane coatings (100 ft rigging)',
      'High-reflective divider, kerb & median painting',
      'Heavy-duty floor epoxy for industrial plants & warehouses'
    ],
    metrics: [
      { label: 'Flyovers Coated', value: '29 Completed' },
      { label: 'Corrosion Shield', value: '25+ Years' },
      { label: 'Rigging Height', value: '100ft+ Certified' }
    ],
    targetAuthorities: ['National Highways (NHAI)', 'State PWDs & MSRDC', 'Port Authorities', 'Metro Rail Corporations']
  },
  {
    id: 'civil-repair',
    tag: 'DIVISION 02 // CIVIL REPAIR & STRUCTURAL UPKEEP',
    title: 'Civil Repair',
    shortDesc: 'Structural rehabilitation, concrete crack injection, expansion joint refurbishment, pothole repairs, and curb restoration under live traffic.',
    fullDesc: 'Rapid civil repair and restoration for damaged highway pavements, distressed bridge piers, stormwater channels, culverts, and municipal infrastructure—minimizing traffic disruption with rapid-cure materials.',
    image: metroImg,
    category: 'Civil Repair',
    specCode: 'IRC:SP:40 / IRC:SP:84 Civil Maintenance Codes',
    statutoryBadge: 'Structural Integrity Tested',
    deliverables: [
      'Concrete spall repair, crack sealing & pressure grouting',
      'Bridge expansion joint refurbishment & elastomeric sealants',
      'Highway pavement patching & rapid pothole restoration',
      'Stormwater drain clearing, culvert repairs & curb realignment'
    ],
    metrics: [
      { label: 'Turnaround', value: '24hr Fast Track' },
      { label: 'Road Uptime', value: '99.8%' },
      { label: 'Safety Standard', value: '100% Zero Harm' }
    ],
    targetAuthorities: ['State PWDs & MSRDC', 'Municipal Corporations', 'Highway Concessionaires']
  },
  {
    id: 'beautification-maintenance',
    tag: 'DIVISION 03 // BEAUTIFICATION & MAINTENANCE',
    title: 'Beautification & Maintenance',
    shortDesc: 'Highway median landscaping, automated solar drip irrigation, decorative cultural flyover murals, and civic corridor maintenance.',
    fullDesc: 'Transforming transport corridors and city public spaces into vibrant, clean, and sustainable green corridors through median plantings, solar drip networks, anti-glare hedges, and ongoing routine corridor maintenance.',
    image: damImg,
    category: 'Beautification & Maintenance',
    specCode: 'MoRTH Green Highway Policy 2015 / NGHM Policy',
    statutoryBadge: 'Zero-Runoff Drip Network',
    deliverables: [
      'Median greenery with automated solar drip irrigation',
      'Aesthetic flyover murals & cultural pier artwork',
      'Reflective kerb & median painting with routine touch-ups',
      'Roadside verge clearing, garden upkeep & debris management'
    ],
    metrics: [
      { label: 'Corridor Care', value: '365 Days Upkeep' },
      { label: 'Irrigation', value: 'Solar Drip Eco' },
      { label: 'Trusted By', value: 'MSRDC & Smart Cities' }
    ],
    targetAuthorities: ['MSRDC & State Highways', 'Smart City Missions', 'Urban Development Authorities']
  },
  {
    id: 'construction-work',
    tag: 'DIVISION 04 // CIVIL & INFRASTRUCTURE CONSTRUCTION',
    title: 'Construction Work',
    shortDesc: 'Turnkey civil construction of multi-lane toll plazas, toll booths, reinforced concrete approach slabs, foundations, and boundary structures.',
    fullDesc: 'End-to-end civil contracting from excavation and steel reinforcement to heavy PQC concrete pavements, building structural frameworks, boundary retaining walls, and underground utility conduits.',
    image: facilityImg,
    category: 'Construction Work',
    specCode: 'MoRTH Section 600 & 1000 / IS 456 RCC Grade M40',
    statutoryBadge: 'Heavy Rigid Pavement Certified',
    deliverables: [
      'Turnkey toll plaza booths, canopy footings & admin buildings',
      'Heavy-duty concrete pavement slabs (PQC) & approach aprons',
      'Reinforced concrete (RCC) foundations, retaining & boundary walls',
      'Underground stormwater drainage networks & utility culverts'
    ],
    metrics: [
      { label: 'Projects Delivered', value: '₹30+ Crore' },
      { label: 'Concrete Spec', value: 'M40 PQC Grade' },
      { label: 'Contract Mode', value: 'Turnkey EPC' }
    ],
    targetAuthorities: ['Highway Developers', 'Toll Concessionaires', 'National Highways (NHAI)', 'Industrial EPCs']
  },
  {
    id: 'board-sign-work',
    tag: 'DIVISION 05 // SIGNAGE & ROAD SAFETY BOARDS',
    title: 'Board Sign Work',
    shortDesc: 'Traffic, regulatory, cautionary & informatory road signboards (No Parking, Stop / Don’t Stop, Diversion Boards) and overhead gantries.',
    fullDesc: 'Certified fabrication and erection of traffic signboards, regulatory signs (No Parking, Stop / Don’t Stop, Speed Limit), warning/diversion boards for detours & road works, and heavy overhead highway gantries compliant with IRC:67-2022 specifications.',
    image: signboardImg,
    category: 'Board Sign Work',
    specCode: 'IRC:67-2022 Code of Practice for Road Signs / MoRTH Section 800',
    statutoryBadge: 'Class IV / XI Microprismatic Retroreflective',
    deliverables: [
      'Regulatory signboards (No Parking, Stop / Don’t Stop, Speed Limits)',
      'Warning & diversion boards for lane changes, road works & detours',
      'Overhead highway directional gantries & cantilever sign trusses',
      'Reflective blue highway guide boards & bilingual destination signage'
    ],
    metrics: [
      { label: 'Sign Standard', value: 'IRC:67-2022' },
      { label: 'Reflectivity', value: 'Microprismatic' },
      { label: 'Wind Resistance', value: 'Up to 180 km/h' }
    ],
    targetAuthorities: ['National Highways (NHAI)', 'State PWDs & MSRDC', 'Traffic Police Departments', 'Smart City Missions']
  }
];

export const OperationsPage: FC<OperationsPageProps> = ({ onOpenCapabilityModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalSector, setActiveModalSector] = useState<SectorItem | null>(null);

  const categories = ['All', 'Painting', 'Civil Repair', 'Beautification & Maintenance', 'Construction Work', 'Board Sign Work'];

  const filteredSectors = selectedFilter === 'All' 
    ? SECTOR_DATA 
    : SECTOR_DATA.filter(s => s.category === selectedFilter);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Service Sectors & Engineering Disciplines | Varan Corporation"
        description="Explore Varan Corporation's core service sectors: Painting, Civil Repair, Beautification & Maintenance, Construction Work, and Board Sign Work."
        keywords="painting, civil repair, beautification and maintenance, construction work, board sign work, road signs, no parking signboards, diversion boards, Varan Corporation"
      />

      {/* ------------------------------------------------------------- */}
      {/* 1. BREADCRUMBS & HERO SECTION (APCO-INSPIRED ARCHITECTURE) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFD] border-b border-[#E2EAF8] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-16 overflow-hidden">
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
            <span className="text-[#15315B] font-semibold">Service Sectors</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title & Proposition */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              <div className="space-y-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] text-xs font-semibold text-[#2864F0] font-heading w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#2864F0]" />
                  <span>Service Sectors &amp; Disciplines</span>
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-[#15315B] font-heading leading-[1.18]">
                  Delivering Across Sectors with <br className="hidden sm:inline" />
                  <span className="text-[#2864F0]">Execution Excellence</span>
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[#2864F0] tracking-normal leading-relaxed">
                  Integrating painting, civil repair, beautification &amp; maintenance, construction work, and board sign operations.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#66748A] max-w-2xl font-normal leading-relaxed font-body">
                Varan Corporation delivers trusted execution across commercial &amp; industrial painting, civil repairs, highway beautification, turnkey construction, and IRC-compliant board sign works across India.
              </p>

              {/* 4 Core Quick Highlights with Animated Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-xl font-bold font-heading text-[#15315B]">
                    <CountUp value="100" suffix=" Ft" />
                  </div>
                  <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Work-at-Height</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-xl font-bold font-heading text-[#2864F0]">
                    <CountUp value="25" suffix="+ Yrs" />
                  </div>
                  <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Asset Longevity</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-xl font-bold font-heading text-[#15315B]">
                    <CountUp value="29" suffix="+" />
                  </div>
                  <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Flyovers Coated</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAF8] shadow-2xs">
                  <div className="text-xl font-bold font-heading text-emerald-600">Zero</div>
                  <div className="text-[11px] text-[#66748A] font-medium mt-0.5">Lost Time Incidents</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <Link
                  to="/rfp-portal"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[46px] rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-sm font-heading shadow-xs transition-colors shrink-0"
                >
                  <span>Request a Project Quote</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenCapabilityModal}
                  className="inline-flex items-center justify-center gap-2 px-5 h-[46px] rounded-xl bg-[#15315B] hover:bg-[#202A38] text-white font-semibold text-sm font-heading shadow-xs transition-colors cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Company Profile</span>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Showcase Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#E2EAF8] p-5 sm:p-6 shadow-xs space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#EAF1FF]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#66748A] uppercase">
                      Turnkey Operations
                    </span>
                    <div className="text-lg font-bold font-heading text-[#15315B]">
                      National Execution Capability
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAF1FF] text-[#2864F0] border border-[#DCE4EF]">
                    ISO Certified
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E2EAF8]">
                  <img
                    src={steelFabImg}
                    alt="Varan Corporation structural steel fabrication and protective coating yard"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium flex items-center justify-between">
                    <span>Heavy steel fabrication &amp; protective coatings</span>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs">Verified Yard</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8] flex items-start gap-3">
                  <div className="mt-0.5 text-[#2864F0] shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#2864F0]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#15315B] font-heading flex items-center gap-2">
                      <span>Fast Pan-India Mobilization</span>
                      <span className="text-[10px] font-mono text-[#2864F0] bg-[#EAF1FF] px-1.5 py-0.5 rounded border border-[#DCE4EF]">DISPATCH // 24H</span>
                    </div>
                    <div className="text-[11px] text-[#66748A] mt-0.5 leading-relaxed">
                      Rapid dispatch of airless spray plants, mobile cranes, and certified crew fleets to project corridors across India.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. APCO-STYLE SECTOR GRID SHOWCASE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold font-mono tracking-wider text-[#2864F0] uppercase">
                PORTFOLIO DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#15315B] tracking-tight">
                Explore Our Core Service Sectors
              </h2>
              <p className="text-sm text-[#66748A] max-w-xl font-body leading-relaxed">
                Click any sector card or arrow to inspect technical deliverables, engineering specifications, and client sectors.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedFilter === cat
                      ? 'bg-[#2864F0] text-white shadow-2xs'
                      : 'bg-[#F0F5FF] text-[#15315B] hover:bg-[#E2EAF8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column / 2-Column Responsive Sector Grid with Layout Animation */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredSectors.map((sector) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  key={sector.id}
                  onClick={() => setActiveModalSector(sector)}
                  className="group relative rounded-2xl bg-white border border-[#E2EAF8] hover:border-[#2864F0]/50 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Sector Image with Hover Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/75 via-transparent to-transparent" />
                    
                    {/* Tag Pill */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-mono font-semibold bg-white/95 text-[#15315B] px-2.5 py-1 rounded-md shadow-xs backdrop-blur-xs">
                        {sector.tag}
                      </span>
                    </div>

                    {/* Technical Code Badge on Image Bottom */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] text-white/90 font-mono">
                      <span className="bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20">
                        {sector.statutoryBadge}
                      </span>
                    </div>
                  </div>

                  {/* Content & Action Bar */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono font-medium text-[#2864F0] tracking-wide">
                        {sector.specCode}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-[#15315B] group-hover:text-[#2864F0] transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-[#66748A] leading-relaxed line-clamp-2 font-body">
                        {sector.shortDesc}
                      </p>
                    </div>

                    {/* Metrics preview */}
                    <div className="pt-3 border-t border-[#EAF2FF] flex items-center justify-between">
                      <div className="text-[11px] font-mono text-[#2864F0] font-semibold">
                        {sector.metrics[0].label}: {sector.metrics[0].value}
                      </div>

                      {/* APCO-Inspired Signature Rotated Circular Arrow */}
                      <div className="w-9 h-9 rounded-full bg-[#F0F5FF] group-hover:bg-[#2864F0] text-[#2864F0] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. DEEP DIVE WORKBENCH & METHODOLOGY (ServiceTabs) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD] border-b border-[#E2EAF8]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs font-bold font-mono tracking-wider text-[#2864F0] uppercase">
              TECHNICAL METHODOLOGY &amp; WORKBENCH
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-[#15315B]">
              Detailed Capabilities &amp; Interactive Sandbox
            </h2>
            <p className="text-xs sm:text-sm text-[#66748A]">
              Explore technical specifications, surface prep methods, and coating simulation tools.
            </p>
          </div>
          
          <ServiceTabs />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. NEXT STEP CALLOUT */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-white py-12 sm:py-16">
        <AnimatedSection direction="up" delay={0.15}>
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#15315B] font-heading">
                Have an Upcoming Infrastructure Project?
              </h3>
              <p className="text-xs sm:text-sm text-[#66748A] font-body">
                Contact our estimation desk for a prompt technical proposal, site evaluation, or engineering consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/rfp-portal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-bold text-xs uppercase tracking-[0.04em] font-heading shadow-xs transition-colors w-full sm:w-auto"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <button
                type="button"
                onClick={onOpenCapabilityModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F0F5FF] hover:bg-[#E2EAF8] text-[#15315B] font-bold text-xs uppercase tracking-[0.04em] font-heading transition-colors cursor-pointer w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-[#2864F0]" />
                <span>Download Profile</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTOR DETAIL MODAL (Opens on card click) */}
      {/* ------------------------------------------------------------- */}
      {activeModalSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E2EAF8] overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={activeModalSector.image}
                alt={activeModalSector.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15315B] via-[#15315B]/40 to-transparent" />
              
              <button
                type="button"
                onClick={() => setActiveModalSector(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono uppercase bg-[#2864F0] px-2.5 py-0.5 rounded font-semibold">
                    {activeModalSector.tag}
                  </span>
                  <span className="text-[10px] font-mono bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20">
                    {activeModalSector.specCode}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  {activeModalSector.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-[#20242D]">
              <p className="text-xs sm:text-sm text-[#66748A] leading-relaxed">
                {activeModalSector.fullDesc}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2EAF8]">
                {activeModalSector.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-bold font-heading text-[#2864F0]">{m.value}</div>
                    <div className="text-[10px] text-[#66748A] font-medium mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#15315B] font-heading">
                  Key Engineering Deliverables:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#20242D]">
                  {activeModalSector.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Authorities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#15315B] font-heading">
                  Target Clients &amp; Authorities:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalSector.targetAuthorities.map((auth, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#F0F5FF] text-[11px] font-medium text-[#15315B] border border-[#DCE4EF]">
                      {auth}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#F8FAFD] border-t border-[#E2EAF8] flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActiveModalSector(null);
                  onOpenCapabilityModal();
                }}
                className="text-xs font-semibold text-[#2864F0] hover:underline cursor-pointer"
              >
                Download Full Profile Specs
              </button>
              <Link
                to="/rfp-portal"
                onClick={() => setActiveModalSector(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-xs transition-colors"
              >
                <span>Request Bid for this Sector</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

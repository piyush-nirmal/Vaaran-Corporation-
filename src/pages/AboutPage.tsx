import { useEffect } from 'react';
import type { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Target, 
  Building2, 
  TrendingUp, 
  Factory, 
  Wrench, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Phone
} from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { companyConfig } from '../data/content';

interface AboutPageProps {
  onOpenCapabilityModal?: () => void;
}

export const AboutPage: FC<AboutPageProps> = () => {
  const location = useLocation();

  // Smooth scroll to anchor if URL has hash (e.g. #mission, #board, #clients)
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
      
      {/* ------------------------------------------------------------- */}
      {/* PAGE HEADER */}
      {/* ------------------------------------------------------------- */}
      <PageHeader
        badgeNumber="01"
        badgeName="CORPORATE OVERVIEW"
        title="About Varan"
        highlightWord="Corporation"
        description="A premier civil and infrastructure contracting group delivering high-speed expressways, river bridges, transit viaducts, and heavy structural engineering across India."
        breadcrumbs={[
          { label: 'About Us' }
        ]}
        metrics={[
          { label: 'Founded & Active', value: '2018', unit: 'Est.' },
          { label: 'Delivered Projects', value: '120+', unit: 'Sites' },
          { label: 'Skilled Workforce', value: '1,200+', unit: 'Personnel' },
          { label: 'Safety Record', value: '100%', unit: 'Zero LTI' },
        ]}
      />

      {/* Quick In-Page Sticky Navigation Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-2xs">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-semibold">
          {[
            { label: 'Mission & Vision', href: '#mission' },
            { label: 'Board Members', href: '#board' },
            { label: 'Esteemed Clients', href: '#clients' },
            { label: 'Financials', href: '#financials' },
            { label: 'Infrastructure', href: '#infrastructure' },
            { label: 'Machinery & Equipment', href: '#machinery' },
            { label: 'SPVs', href: '#spvs' },
            { label: 'Policies & Accreditation', href: '#policy' },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-vrnOrange hover:text-slate-950 text-slate-700 whitespace-nowrap transition-colors"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 space-y-24">
        
        {/* ========================================================= */}
        {/* 1. MISSION, VISION & VALUES */}
        {/* ========================================================= */}
        <section id="mission" className="scroll-mt-36 space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              01 · PURPOSE & DIRECTION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Mission & Vision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Committed to building resilient, future-ready infrastructure with uncompromising engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-vrnOrange/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-vrnNavy text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-vrnOrange" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To engineer and deliver India’s most critical infrastructure corridors—safely, sustainably, and ahead of schedule—using modern mechanized equipment and rigorous quality standards.
              </p>
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-3 text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> On-Time Execution</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Incident Safety</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent SLA</span>
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Our Vision</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To be the preferred EPC and specialized infrastructure group for national highways, high-speed transit networks, and river bridges, setting benchmarks in speed and technical excellence.
              </p>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-vrnOrange" /> Nationwide Scalability</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-vrnOrange" /> Mechanized Speed</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-vrnOrange" /> Enduring Quality</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. BOARD MEMBERS */}
        {/* ========================================================= */}
        <section id="board" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              02 · LEADERSHIP & GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Board of Directors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Distinguished infrastructure leaders with decades of hands-on experience across major national public works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'R. V. Nirmal',
                role: 'Managing Director & Chairman',
                experience: '30+ Years Experience',
                desc: 'Pioneered large-scale mechanized infrastructure execution across expressway and transit corridors.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Anand Verma',
                role: 'Executive Director – Projects',
                experience: '24+ Years Experience',
                desc: 'Former senior highway EPC director overseeing turnkey road alignments and river barrages.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Dr. S. K. Kulkarni',
                role: 'Director – Technical & QA/QC',
                experience: '28+ Years Experience',
                desc: 'PhD in Structural Engineering; authority on NDT inspection and heavy corrosion barriers.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Meera Iyer',
                role: 'Director – Finance & Corporate',
                experience: '20+ Years Experience',
                desc: 'Chartered Accountant overseeing financial governance, treasury, and large SPV consortium funding.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
              },
            ].map((member) => (
              <div 
                key={member.name}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <span className="text-[11px] font-mono text-vrnOrange font-semibold uppercase tracking-wider block">
                      {member.experience}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-vrnNavy">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OUR ESTEEMED CLIENTS */}
        {/* ========================================================= */}
        <section id="clients" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              03 · TRUSTED PARTNERSHIPS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Our Esteemed Clients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Serving central government bodies, state highway corporations, metro rail authorities, and premier EPC contractors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'NHAI', desc: 'National Highway Corridors' },
              { name: 'MMRDA', desc: 'Metropolitan Urban Transit' },
              { name: 'DMRC & Metro EPC', desc: 'Elevated Rail Viaducts' },
              { name: 'Indian Railways / DFCCIL', desc: 'Dedicated Freight Corridors' },
              { name: 'State PWDs', desc: 'Highways & River Bridges' },
              { name: 'Tier-1 EPC Concessionaires', desc: 'Consortium Project Delivery' },
            ].map((client) => (
              <div 
                key={client.name}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center flex flex-col justify-center items-center hover:border-vrnNavy transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-vrnNavy font-bold text-sm mb-2">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-heading">{client.name}</h4>
                <p className="text-[11px] text-slate-500 mt-1">{client.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FINANCIALS */}
        {/* ========================================================= */}
        <section id="financials" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              04 · FINANCIAL STRENGTH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Financial Stability & Solvency
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Robust balance sheet, high bonding capacity, and clean banking relationships enabling smooth execution of mega projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Order Book', value: '₹850+ Cr', desc: 'Secured national transit and highway contracts' },
              { label: 'Credit Rating', value: 'A+ Stable', desc: 'Investment-grade solvency rating from premier agencies' },
              { label: 'Bank Guarantee Lines', value: '₹150+ Cr', desc: 'Consortium backing from SBI, HDFC, and ICICI Bank' },
              { label: 'Revenue Growth', value: '28% YoY', desc: 'Consistent 5-year compound annual expansion' },
            ].map((fin) => (
              <div 
                key={fin.label}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-vrnOrange font-semibold uppercase">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{fin.label}</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 font-heading tabular-nums">
                  {fin.value}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {fin.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. INFRASTRUCTURE & FACILITIES */}
        {/* ========================================================= */}
        <section id="infrastructure" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              05 · REGIONAL FOOTPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Engineering Yards & Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Strategically positioned operations hubs equipped with heavy fabrication, automated blasting, and QA/QC testing centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Central Yard & Fabrication Plant',
                location: '15-Acre Heavy Industrial Hub · Maharashtra',
                points: ['Automated CNC steel plate cutting', 'MIG/TIG structural gantry assembly lines', 'Overhead 20T gantry cranes'],
              },
              {
                title: 'Regional Mobilization Depots',
                location: 'Mumbai · Delhi-NCR · Ahmedabad · Hyderabad',
                points: ['Fast-track 72-hour corridor dispatch', 'Equipment maintenance bays & parts inventory', 'Workforce staging and transit facilities'],
              },
              {
                title: 'In-House Testing & Calibration Lab',
                location: 'Central QA/QC Testing Center',
                points: ['Chloride & soluble salt titration', 'Ultrasonic non-destructive testing (NDT)', 'Adhesion pull-off & DFT calibration gauges'],
              },
            ].map((infra) => (
              <div 
                key={infra.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-vrnNavy/10 text-vrnNavy flex items-center justify-center font-bold">
                  <Factory className="w-5 h-5 text-vrnNavy" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{infra.title}</h3>
                  <p className="text-xs text-vrnOrange font-mono mt-0.5">{infra.location}</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {infra.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-vrnOrange shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. MACHINERY & EQUIPMENT */}
        {/* ========================================================= */}
        <section id="machinery" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                06 · MECHANIZED SCALE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                Machinery & Equipment
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Over 40+ specialized contractor machines maintained to eliminate site delays.
              </p>
            </div>

            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-vrnNavy text-white hover:bg-vrnNavy-dark text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>View Complete Fleet</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Airless Spray Plants', count: '4 Units', desc: 'Heavy high-volume coating systems' },
              { name: 'Mobile Blasting Rigs', count: '2 Heavy Rigs', desc: 'Sa 2.5 profile surface preparation' },
              { name: 'MIG/TIG Inverter Stations', count: '8 Stations', desc: 'AWS D1.1 certified structural welding' },
              { name: 'Aluminum Scaffolding', count: '2,500 m²', desc: 'High-altitude viaduct access decking' },
            ].map((eq) => (
              <div 
                key={eq.name}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-vrnNavy">
                  <Wrench className="w-4 h-4 text-vrnOrange" />
                </div>
                <span className="text-[11px] font-mono font-bold text-vrnNavy block">{eq.count}</span>
                <h4 className="font-bold text-slate-900 text-sm font-heading">{eq.name}</h4>
                <p className="text-xs text-slate-500">{eq.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. SPECIAL PURPOSE VEHICLES (SPVs) */}
        {/* ========================================================= */}
        <section id="spvs" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              07 · PROJECT STRUCTURES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Special Purpose Vehicles (SPVs)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dedicated project companies incorporated for concession agreements, HAM models, and ring-fenced public infrastructure delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            ].map((spv) => (
              <div 
                key={spv.name}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-vrnNavy/10 text-vrnNavy font-semibold">
                      {spv.model}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 font-medium">
                      ● {spv.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {spv.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {spv.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-vrnOrange" />
                  <span>Ring-Fenced Governance & Escrow Controlled</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. CORPORATE POLICY & ACCREDITATION */}
        {/* ========================================================= */}
        <section id="policy" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
              08 · COMPLIANCE & STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
              Corporate Policy & Accreditation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Certified quality benchmarks, statutory labor compliance, and comprehensive health & safety governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((pol) => (
              <div 
                key={pol.title}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-white hover:border-vrnNavy transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-vrnOrange font-semibold">{pol.badge}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">{pol.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pol.scope}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Contact Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Need Verified Credentials or Tender Documents?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering governance team provides audited qualification dossiers within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/rfp-portal"
              className="px-6 py-3 rounded-full bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Request a Bid
            </Link>
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-vrnOrange" />
              <span>Call Desk</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

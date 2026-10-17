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
  Phone,
  Users,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { companyConfig, companyJourney, clientsByCategory, workforceData, aboutUsContent } from '../data/content';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

interface AboutPageProps {
  onOpenCapabilityModal?: () => void;
}

export const AboutPage: FC<AboutPageProps> = () => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;
  const location = useLocation();

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
      {/* PAGE HEADER */}
      {/* ------------------------------------------------------------- */}
      <PageHeader
        badgeNumber="01"
        badgeName="CORPORATE OVERVIEW"
        title="About Varan"
        highlightWord="Corporation"
        description="Trusted civil construction, commercial painting, and specialized structural fabrication services across India. Founded in 1997 on the ethos of 'Work is Worship' (कर्म ही पूजा है)."
        breadcrumbs={[
          { label: 'About Us' }
        ]}
        metrics={[
          { label: 'Founded', value: '1997', unit: 'Est.' },
          { label: 'Experience', value: '25+', unit: 'Years' },
          { label: 'Projects Executed', value: '₹30+', unit: 'Crore' },
          { label: 'Permanent Staff', value: '150+', unit: 'Employees' },
        ]}
      />

      {/* Quick In-Page Sticky Navigation Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-2xs">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-semibold">
          {[
            { label: 'Excellence Over Decades', href: '#story' },
            { label: 'Company Journey', href: '#journey' },
            { label: 'Esteemed Clients', href: '#clients' },
            { label: 'Workforce', href: '#workforce' },
            { label: 'Board Members', href: '#board' },
            { label: 'Financials', href: '#financials' },
            { label: 'Infrastructure', href: '#infrastructure' },
            { label: 'Machinery & Equipment', href: '#machinery' },
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
        {/* 1. EXCELLENCE BUILT OVER DECADES (ABOUT US) */}
        {/* ========================================================= */}
        <section id="story" className="scroll-mt-36 space-y-10">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                01 · OUR STORY & LEGACY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                {aboutUsContent.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                {aboutUsContent.foundation}
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Advertising Phase Expansion */}
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-vrnNavy/40 transition-colors flex flex-col justify-between hover-card-smooth h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-vrnNavy text-white flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-vrnOrange" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Outdoor Advertising & Signage</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    The company later expanded into outdoor advertising and commercial signage, manufacturing specialized visual identity products.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Traditional Blue Signboards</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Acrylic Boards</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 3D Letter Signage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Custom Display Panels</li>
                </ul>
              </div>
            </StaggerItem>

            {/* Strategic Diversification */}
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-vrnNavy/40 transition-colors flex flex-col justify-between hover-card-smooth h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-vrnNavy text-white flex items-center justify-center">
                    <Target className="w-6 h-6 text-vrnOrange" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Infrastructure Diversification</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    After government regulations changed, the company diversified strategically into heavy infrastructure disciplines.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Civil Infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Commercial & Industrial Painting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Structural Fabrication</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Safety Netting Systems</li>
                </ul>
              </div>
            </StaggerItem>

            {/* Scale & Landmark Deliveries */}
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-vrnNavy/40 transition-colors flex flex-col justify-between hover-card-smooth h-full">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-vrnNavy text-white flex items-center justify-center">
                    <Award className="w-6 h-6 text-vrnOrange" />
                  </div>
                  <div className="text-xs font-mono text-vrnOrange font-semibold uppercase">₹30+ Crores Executed</div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Major Landmark Works</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Driven by precision, adaptability, and quality, building infrastructure across India.
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                  {aboutUsContent.majorWorks.map((work, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 2. COMPANY JOURNEY */}
        {/* ========================================================= */}
        <section id="journey" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                02 · HISTORIC MILESTONES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                Company Journey
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From commercial hand painting in 1997 to delivering ₹30+ Crore specialized infrastructure projects nationwide.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {companyJourney.map((step, idx) => (
              <StaggerItem key={step.era}>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-vrnNavy hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-4 hover-card-smooth h-full">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-vrnNavy text-white font-mono text-xs font-bold">
                        {step.era}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading pt-1">
                      {step.title}
                    </h4>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-slate-200/80 text-xs text-slate-600 leading-snug">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-vrnOrange shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 3. OUR ESTEEMED CLIENTS (CATEGORIZED) */}
        {/* ========================================================= */}
        <section id="clients" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                03 · TRUSTED PARTNERSHIPS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                Our Esteemed Clients
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Proud to execute high-stakes infrastructure works for government bodies, premier infrastructure corporations, and leading corporate enterprises.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Government */}
            <AnimatedSection direction="up" delay={0.15}>
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-vrnNavy font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-vrnOrange" />
                  <span>Government Authority</span>
                </div>
                <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {clientsByCategory.government.map((client) => (
                    <StaggerItem key={client.name}>
                      <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-vrnNavy hover-card-smooth transition-colors flex items-center gap-3.5 h-full">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-vrnNavy shrink-0 font-bold">
                          <Building2 className="w-5 h-5 text-vrnNavy" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm font-heading">{client.name}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">{client.subtitle}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>

            {/* Infrastructure */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-vrnNavy font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-vrnOrange" />
                  <span>Infrastructure & EPC Giants</span>
                </div>
                <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {clientsByCategory.infrastructure.map((client) => (
                    <StaggerItem key={client.name}>
                      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-vrnNavy hover-card-smooth transition-colors flex flex-col justify-between h-full">
                        <div>
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-heading">{client.name}</h4>
                          <p className="text-[11px] text-slate-500 mt-1">{client.subtitle}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>

            {/* Corporate */}
            <AnimatedSection direction="up" delay={0.25}>
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-vrnNavy font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-vrnOrange" />
                  <span>Corporate Enterprise Clients</span>
                </div>
                <StaggerContainer staggerDelay={0.04} className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {clientsByCategory.corporate.map((client) => (
                    <StaggerItem key={client.name}>
                      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-vrnNavy hover-card-smooth transition-colors text-center flex flex-col justify-center items-center h-full">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-heading">{client.name}</h4>
                        <p className="text-[11px] text-slate-500 mt-1">{client.subtitle}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. WORKFORCE */}
        {/* ========================================================= */}
        <section id="workforce" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                04 · OUR PEOPLE & EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                Workforce
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                {workforceData.description}
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {workforceData.categories.map((cat) => (
              <StaggerItem key={cat.role}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-vrnNavy hover-card-smooth transition-colors space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-vrnNavy text-white flex items-center justify-center font-bold">
                    <Users className="w-5 h-5 text-vrnOrange" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {cat.role}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>100% Certified Personnel</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 5. FINANCIALS */}
        {/* ========================================================= */}
        <section id="financials" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                05 · FINANCIAL STRENGTH
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                Financial Stability & Solvency
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Robust balance sheet, high bonding capacity, and clean banking relationships enabling smooth execution of mega projects.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Order Book', value: '₹850+ Cr', desc: 'Secured national transit and highway contracts' },
              { label: 'Credit Rating', value: 'A+ Stable', desc: 'Investment-grade solvency rating from premier agencies' },
              { label: 'Bank Guarantee Lines', value: '₹150+ Cr', desc: 'Consortium backing from SBI, HDFC, and ICICI Bank' },
              { label: 'Revenue Growth', value: '28% YoY', desc: 'Consistent 5-year compound annual expansion' },
            ].map((fin) => (
              <StaggerItem key={fin.label}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover-card-smooth h-full">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 6. INFRASTRUCTURE & FACILITIES */}
        {/* ========================================================= */}
        <section id="infrastructure" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-vrnOrange uppercase tracking-wider">
                06 · REGIONAL FOOTPRINT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading">
                Engineering Yards & Facilities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Strategically positioned operations hubs equipped with heavy fabrication, automated blasting, and QA/QC testing centers.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <StaggerItem key={infra.title}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover-card-smooth h-full">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 6. MACHINERY & EQUIPMENT */}
        {/* ========================================================= */}
        <section id="machinery" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-vrnNavy text-white hover:bg-vrnNavy-dark text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 btn-smooth"
              >
                <span>View Complete Fleet</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Airless Spray Plants', count: '4 Units', desc: 'Heavy high-volume coating systems' },
              { name: 'Mobile Blasting Rigs', count: '2 Heavy Rigs', desc: 'Sa 2.5 profile surface preparation' },
              { name: 'MIG/TIG Inverter Stations', count: '8 Stations', desc: 'AWS D1.1 certified structural welding' },
              { name: 'Aluminum Scaffolding', count: '2,500 m²', desc: 'High-altitude viaduct access decking' },
            ].map((eq) => (
              <StaggerItem key={eq.name}>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover-card-smooth h-full">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-vrnNavy">
                    <Wrench className="w-4 h-4 text-vrnOrange" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-vrnNavy block">{eq.count}</span>
                  <h4 className="font-bold text-slate-900 text-sm font-heading">{eq.name}</h4>
                  <p className="text-xs text-slate-500">{eq.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 7. SPECIAL PURPOSE VEHICLES (SPVs) */}
        {/* ========================================================= */}
        <section id="spvs" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
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
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <StaggerItem key={spv.name}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between hover-card-smooth h-full">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ========================================================= */}
        {/* 8. CORPORATE POLICY & ACCREDITATION */}
        {/* ========================================================= */}
        <section id="policy" className="scroll-mt-36 space-y-10 pt-6 border-t border-slate-100">
          <AnimatedSection direction="up" delay={0.1}>
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
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <StaggerItem key={pol.title}>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-white hover:border-vrnNavy hover-card-smooth transition-colors h-full">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-vrnOrange font-semibold">{pol.badge}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">{pol.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pol.scope}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
              href={`tel:${currentCompany.phoneRaw}`}
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

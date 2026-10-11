import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';

interface AboutPageProps {
  onOpenCapabilityModal?: () => void;
}

export const AboutPage: FC<AboutPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#091535] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src={facilityImg} alt="Varan Facility" className="w-full h-full object-cover" />
        </div>
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#8ACFF8] font-mono text-xs uppercase tracking-wider">
            <span>ABOUT US</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-3xl leading-tight">
            Building Infrastructure with <span className="text-[#8ACFF8]">Engineering Rigor</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-body leading-relaxed">
            Varan Corporation is a premier infrastructure contractor delivering high-volume industrial coatings, steel fabrication, and site execution across high-density transit corridors.
          </p>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '24+', label: 'Years of Excellence', sub: 'Established 2000' },
              { val: '120+', label: 'Major Corridors', sub: 'Completed on schedule' },
              { val: '100%', label: 'Safety Compliance', sub: 'Zero-harm HSE track' },
              { val: '42+', label: 'Heavy Fleet Units', sub: 'Mobilized in-house' },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-[#091535]">{stat.val}</div>
                <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel number="01" name="WHO WE ARE" />
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 font-heading leading-tight">
              Trusted Partner for Public Transit & Industrial Giants
            </h2>
            <p className="text-slate-600 leading-relaxed font-body">
              Founded with the objective of bringing world-class protective coating and structural engineering to highway and railway corridors, Varan Corporation operates specialized yards with certified inspection protocols.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'ISO 9001:2015 & ISO 12944 Certified Protective Coatings',
                'NACE & SSPC Certified Inspection Engineers on site',
                'Fully equipped in-house heavy machinery and airless spray fleet',
                'Proven mobilization for time-critical mega infrastructure projects',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg bg-[#0F2942] hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider font-heading inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {onOpenCapabilityModal && (
                <button
                  type="button"
                  onClick={onOpenCapabilityModal}
                  className="px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-bold text-xs uppercase tracking-wider font-heading"
                >
                  Download Profile PDF
                </button>
              )}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <img src={steelFabImg} alt="Varan Engineering" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#8ACFF8]">Structural Quality</div>
                  <div className="text-xl font-bold font-heading">High-Tolerance Gantry Fabrication & Surface Treatment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <SectionLabel number="02" name="PILLARS OF EXECUTION" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">Our Core Operating Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#091535] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">Safety & HSE Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero-tolerance safety policies with mandatory toolbox talks, working-at-height certifications, and daily safety audits.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">Certified Quality Control</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                NACE-compliant DFT checks, surface profile testing, and digital logbook documentation handed over to client authorities.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">Skilled Workforce</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 350 skilled spray painters, certified welders, scaffolders, and project managers deployed across project sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

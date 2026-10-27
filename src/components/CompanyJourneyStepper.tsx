import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  MapPin
} from 'lucide-react';
import Stepper, { Step } from './ui/Stepper';

// High-resolution real showcase imagery from repository assets
import step3CoatingImg from '../assets/images/process/step3_coating.jpg';
import steelFabricationImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import industrialHubImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';
import viaductFlyoverImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import metroTransitImg from '../assets/images/metro_transit_coating_1791032395039.jpg';

interface MilestoneData {
  era: string;
  phaseLabel: string;
  stepTitle: string;
  title: string;
  tagline: string;
  story: string;
  statValue: string;
  statLabel: string;
  location: string;
  image: string;
  imageBadge: string;
  highlights: string[];
}

const milestones: MilestoneData[] = [
  {
    era: '1997',
    phaseLabel: 'Phase 01 · Inception',
    stepTitle: '1997 Inception',
    title: 'Hand Painting Buses & Trains',
    tagline: 'Where our craft began 27+ years ago',
    story:
      'We started in 1997 by hand-painting public buses, railway coaches, and transport trucks. This gave our team deep experience in surface cleaning, rust prevention, and durable paints that last in harsh weather.',
    statValue: '1997',
    statLabel: 'Foundation Year (27+ Yrs Track Record)',
    location: 'Mumbai & Western Maharashtra',
    image: step3CoatingImg,
    imageBadge: 'Fleet & Transit Painting',
    highlights: [
      'Commercial buses, trains & transit fleets',
      'Surface cleaning & rust removal by hand',
      'Long-lasting all-weather enamel paint'
    ]
  },
  {
    era: 'Advertising Phase',
    phaseLabel: 'Phase 02 · Expansion',
    stepTitle: 'Road Signboards',
    title: 'Highway Boards & Signage',
    tagline: 'Expanding into road signage & fabrication',
    story:
      'As national highways expanded, we grew into building large blue road signboards and 3D display letters. We set up an in-house metal and acrylic workshop to fabricate strong, weather-proof signs.',
    statValue: '1,000+',
    statLabel: 'Highway & City Signboards Installed',
    location: 'NHAI Corridors & City Roads',
    image: steelFabricationImg,
    imageBadge: 'Steel Workshop & Signage',
    highlights: [
      'Large blue highway information boards',
      'Reflective sheeting for clear night visibility',
      'In-house metal cutting & acrylic fabrication'
    ]
  },
  {
    era: 'Infrastructure Transition',
    phaseLabel: 'Phase 03 · Strategic Pivot',
    stepTitle: 'Civil & Factories',
    title: 'Civil Works & Factory Painting',
    tagline: 'Moving into heavy construction & industrial coating',
    story:
      'When billboard regulations changed, we pivoted into heavy civil construction and factory painting. We put our steel fabrication and coating expertise to work on major industrial facilities.',
    statValue: '100%',
    statLabel: 'Certified Labor & Safety Compliant',
    location: 'Industrial Hubs & Plants',
    image: industrialHubImg,
    imageBadge: 'Industrial Plants & Civil Works',
    highlights: [
      'Protective painting for warehouses & factories',
      'Heavy structural steel fabrication & setup',
      'Full safety gear & certified site teams'
    ]
  },
  {
    era: 'Growth Phase',
    phaseLabel: 'Phase 04 · Scale Up',
    stepTitle: 'Flyovers & Bridges',
    title: 'Flyovers & Highway Bridges',
    tagline: 'Protecting bridges and expressways from weather wear',
    story:
      'We scaled up to work on major expressways and urban flyovers. Using heavy airless spray rigs, we applied anti-carbonation coatings that shield concrete from rain, sun, and vehicle exhaust.',
    statValue: '50+',
    statLabel: 'Major Flyovers & Bridges Protected',
    location: 'State Expressways & Elevated Roads',
    image: viaductFlyoverImg,
    imageBadge: 'Flyover & Viaduct Protection',
    highlights: [
      'Elastomeric protective paint for flyovers',
      'Stops concrete cracking, rust & rain damage',
      'Rapid, safe work on active high-speed roads'
    ]
  },
  {
    era: 'Present',
    phaseLabel: 'Phase 05 · Today',
    stepTitle: 'Present (₹30+ Cr)',
    title: 'Pan-India Infrastructure Delivery',
    tagline: 'Delivering landmark projects worth ₹30+ Crores',
    story:
      'Today, we execute high-stakes infrastructure across India. Our milestone projects include painting the Bandra–Worli Sea Link 100 feet above the ocean, metro rail bridges, and national highway corridors.',
    statValue: '₹30+ Cr',
    statLabel: 'Completed Projects Portfolio Across India',
    location: 'Pan-India Project Sites',
    image: metroTransitImg,
    imageBadge: 'Marine Coating & Metro Corridors',
    highlights: [
      'High-altitude marine coating (100 ft above sea)',
      'Metro transit stations & highway bridges',
      '150+ full-time certified permanent workers'
    ]
  }
];

export const CompanyJourneyStepper: FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleRestart = () => {
    setCurrentStep(1);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* React Bits Stepper Card Container */}
      <div className="rounded-3xl bg-white border border-[#DFE6F0] p-3 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-shadow">
        <Stepper
          step={currentStep}
          onStepChange={(step) => setCurrentStep(step)}
          onFinalStepCompleted={() => setCurrentStep(milestones.length + 1)}
          theme="light"
          accentColor="#2563EB"
          width="100%"
          radius={18}
          frame={false}
          linear={false}
          transition="slide"
          backButtonText="Previous Era"
          nextButtonText="Next Era"
          completeButtonText="Finish Review"
          className="w-full"
          completedContent={
            <div className="py-8 sm:py-12 px-4 sm:px-8 text-center space-y-5 max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF2FF] border border-[#D9E6FF] text-[#2563EB] flex items-center justify-center mx-auto shadow-2xs">
                <Sparkles className="w-7 h-7 text-[#2563EB]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF2FF] px-3 py-1 rounded-full">
                  All Milestones Explored
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#20242D] font-heading">
                  27+ Years of Built Trust
                </h3>
                <p className="text-sm text-[#687386] font-body leading-relaxed">
                  From commercial hand painting in 1997 to delivering ₹30+ Crore infrastructure projects nationwide.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  to="/rfp-portal"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-10.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm font-heading shadow-xs transition-colors"
                >
                  <span>Request a Bid / RFP</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 h-10.5 rounded-xl bg-[#F8FAFF] hover:bg-[#EAF2FF] text-[#2563EB] border border-[#D9E6FF] font-semibold text-sm font-heading transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#2563EB]" />
                  <span>Restart Journey</span>
                </button>
              </div>
            </div>
          }
        >
          {milestones.map((m) => (
            <Step key={m.era} title={m.stepTitle}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch pt-2 pb-1">
                {/* Left Column: Simple Punchy Text, Highlights & Stat (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  {/* Header & Title */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#2563EB] text-white font-mono text-[11px] sm:text-xs font-bold shadow-2xs">
                        {m.era}
                      </span>
                      <span className="text-xs font-mono font-medium text-[#687386]">
                        {m.phaseLabel}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#20242D] font-heading tracking-tight leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#2563EB] font-body">
                      {m.tagline}
                    </p>
                  </div>

                  {/* Simple 2-Sentence Story */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-body bg-[#F8FAFF] p-3.5 rounded-xl border border-[#E2E9F4]">
                    {m.story}
                  </p>

                  {/* Key Things We Did — Simple Clean Bullets */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#687386]">
                      What We Delivered
                    </div>
                    <div className="space-y-1.5">
                      {m.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs font-medium text-[#20242D]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Big Impact Number Box */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFF] border border-[#BFDBFE] flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-[#1D4ED8] font-heading leading-tight">
                        {m.statValue}
                      </div>
                      <div className="text-[11px] text-[#475569] font-body leading-tight mt-0.5">
                        {m.statLabel}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#2563EB] bg-white px-2.5 py-1 rounded-lg border border-[#BFDBFE] shrink-0 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span className="hidden sm:inline">{m.location}</span>
                      <span className="sm:hidden">Active Sites</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Visual Showcase Image Card (5 cols) */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DCE4EF] min-h-[220px] sm:min-h-[280px] group shadow-2xs flex flex-col justify-end">
                  {/* Photo */}
                  <img
                    src={m.image}
                    alt={m.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/25 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white font-mono text-[10.5px] sm:text-[11px] font-semibold border border-white/20 shadow-xs">
                      {m.imageBadge}
                    </span>
                  </div>

                  {/* Bottom Image Caption Bar */}
                  <div className="relative z-10 p-3.5 sm:p-4 text-white space-y-0.5">
                    <div className="text-xs font-mono font-medium text-white/80 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{m.location}</span>
                    </div>
                    <div className="text-sm font-bold font-heading text-white tracking-tight">
                      {m.title}
                    </div>
                  </div>
                </div>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default CompanyJourneyStepper;

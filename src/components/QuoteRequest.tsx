import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Send, Paintbrush, Layers, Hammer, Users, CheckCircle, RotateCcw, ShieldCheck } from 'lucide-react';

interface ScopeOption {
  id: string;
  name: string;
  icon: typeof Paintbrush;
  unit: string;
  defaultScale: number;
  minScale: number;
  maxScale: number;
  step: number;
  defaultDays: number;
}

const scopeOptions: ScopeOption[] = [
  {
    id: 'industrial-coating',
    name: 'Industrial & Infra Coating',
    icon: Paintbrush,
    unit: 'm² Surface Area',
    defaultScale: 25000,
    minScale: 5000,
    maxScale: 100000,
    step: 5000,
    defaultDays: 60,
  },
  {
    id: 'gantry-fabrication',
    name: 'Structural Gantry Fabrication',
    icon: Layers,
    unit: 'Metric Tonnes (MT)',
    defaultScale: 12000,
    minScale: 1000,
    maxScale: 50000,
    step: 1000,
    defaultDays: 90,
  },
  {
    id: 'civil-structures',
    name: 'Civil Works & Barriers',
    icon: Hammer,
    unit: 'Cubic Meters (m³)',
    defaultScale: 8500,
    minScale: 1000,
    maxScale: 30000,
    step: 1000,
    defaultDays: 75,
  },
  {
    id: 'manpower-logistics',
    name: 'Enterprise Technical Manpower',
    icon: Users,
    unit: 'Certified Personnel',
    defaultScale: 150,
    minScale: 25,
    maxScale: 500,
    step: 25,
    defaultDays: 180,
  },
];

export const QuoteRequest: FC = () => {
  const [selectedScope, setSelectedScope] = useState<ScopeOption>(scopeOptions[0]);
  const [scaleValue, setScaleValue] = useState<number>(scopeOptions[0].defaultScale);
  const [targetTimeline, setTargetTimeline] = useState<number>(scopeOptions[0].defaultDays);
  
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialDirectives, setSpecialDirectives] = useState('');
  
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleScopeChange = (option: ScopeOption) => {
    setSelectedScope(option);
    setScaleValue(option.defaultScale);
    setTargetTimeline(option.defaultDays);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const token = `VRN-RFP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(token);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setSpecialDirectives('');
  };

  return (
    <div id="rfp-quote" className="w-full">
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 text-slate-900 shadow-sm overflow-hidden relative">
        
        {/* Subtle Ambient Brand Tint */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-vrnOrange/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Heading */}
        <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-vrnOrange font-bold">
              Engineering RFP Portal
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
              Configure Technical Bid & RFP Packet
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
              Dynamic scope calculator for municipal infrastructure, highway alignments, and corporate contracts.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-vrnNavy bg-vrnNavy-tint border border-vrnNavy/20 px-3.5 py-1.5 rounded-lg shrink-0">
            <ShieldCheck className="w-4 h-4 text-vrnOrange" />
            <span>24h Engineering Review SLA</span>
          </div>
        </div>

        {submittedRef ? (
          /* Submission Receipt */
          <div className="bg-slate-50 border border-emerald-300 rounded-2xl p-8 sm:p-10 text-center space-y-6 max-w-2xl mx-auto shadow-sm animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 block font-bold">
                Bid Submission Dispatched
              </span>
              <h3 className="text-2xl font-black text-vrnNavy mt-1 font-display">
                Technical RFP Dossier Logged
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Reference Token: <span className="font-bold text-vrnNavy bg-white border border-slate-200 px-2.5 py-0.5 rounded shadow-xs">{submittedRef}</span>
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between text-slate-600">
                <span>Enterprise:</span>
                <span className="font-bold text-slate-900">{companyName || 'Corporate Client'}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Selected Scope:</span>
                <span className="text-vrnOrange font-bold">{selectedScope.name}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Target Volume:</span>
                <span className="text-vrnNavy font-bold">{scaleValue.toLocaleString()} {selectedScope.unit}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Target Timeline:</span>
                <span className="text-slate-900 font-bold">{targetTimeline} Calendar Days</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
              Our Chief Estimation Engineer is conducting preliminary specification review for <strong className="text-slate-900">{contactPerson || 'your representative'}</strong>. Official commercial rates will be transmitted via encrypted email.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer font-display"
            >
              <RotateCcw className="w-4 h-4 text-vrnOrange" />
              <span>Configure Another RFP</span>
            </button>
          </div>
        ) : (
          /* Interactive 3-Step Bid Builder Form */
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Select Operational Sector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-slate-700">
                  Step 1: Select Targeted Engineering Sector
                </span>
                <span className="text-vrnOrange font-medium">Pick division</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {scopeOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isChosen = opt.id === selectedScope.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleScopeChange(opt)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[90px] ${
                        isChosen
                          ? 'bg-vrnNavy text-white border-vrnNavy shadow-xs'
                          : 'bg-slate-50 border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isChosen ? 'text-vrnOrange' : 'text-slate-400'}`} />
                      <div>
                        <div className={`font-bold text-xs leading-tight mt-2 font-display ${isChosen ? 'text-white' : 'text-slate-900'}`}>
                          {opt.name}
                        </div>
                        <div className={`text-[10px] font-mono mt-0.5 ${isChosen ? 'text-slate-300' : 'text-slate-500'}`}>
                          {opt.unit}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dynamic Scale & Timeline Sliders */}
            <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Scale Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Target Project Scale</span>
                  <span className="font-mono font-bold text-vrnOrange text-sm">
                    {scaleValue.toLocaleString()} {selectedScope.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedScope.minScale}
                  max={selectedScope.maxScale}
                  step={selectedScope.step}
                  value={scaleValue}
                  onChange={(e) => setScaleValue(Number(e.target.value))}
                  className="w-full accent-vrnOrange h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Min: {selectedScope.minScale.toLocaleString()}</span>
                  <span>Max: {selectedScope.maxScale.toLocaleString()}</span>
                </div>
              </div>

              {/* Timeline Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Mobilization & Target Window</span>
                  <span className="font-mono font-bold text-vrnNavy text-sm">
                    {targetTimeline} Calendar Days
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={180}
                  step={15}
                  value={targetTimeline}
                  onChange={(e) => setTargetTimeline(Number(e.target.value))}
                  className="w-full accent-vrnNavy h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>30 Days (Fast-Track)</span>
                  <span>90 Days (Standard)</span>
                  <span>180 Days (Phased)</span>
                </div>
              </div>

            </div>

            {/* Step 3: Enterprise Contact & Details */}
            <div className="space-y-4">
              <span className="font-bold uppercase tracking-wider text-xs text-slate-700 block font-mono">
                Step 3: Enterprise Point of Contact
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Enterprise Name *</label>
                  <input
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Mumbai Transit Authority"
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Designated Lead *</label>
                  <input
                    required
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Chief Engineer Sharma"
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Corporate Email *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="lead@organization.gov.in"
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Direct Phone *</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Special Site Directives or Blast Criteria (Optional)</label>
                <input
                  type="text"
                  value={specialDirectives}
                  onChange={(e) => setSpecialDirectives(e.target.value)}
                  placeholder="e.g. Night shift operations mandatory between 01:00 and 05:00 hrs..."
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-vrnNavy transition-colors"
                />
              </div>
            </div>

            {/* Submission CTA Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 font-mono">
                Mandates adherence to standard ISO 9001 and PASARA labor codes.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-vrnOrange hover:bg-vrnOrange-hover text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer shrink-0 font-display"
              >
                <span>Dispatch Technical Bid Packet</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Send, Building2, Layers } from 'lucide-react';

interface RFPFormState {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  division: string;
  estimatedBudget: string;
  projectTimeline: string;
  scopeDescription: string;
  safetyRequirements: boolean;
}

export const QuoteRequest: FC = () => {
  const [form, setForm] = useState<RFPFormState>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    division: '',
    estimatedBudget: '',
    projectTimeline: '',
    scopeDescription: '',
    safetyRequirements: true,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('RFP Submission Packet Logged:', form);
    alert('Technical Bid/RFP Packet Submitted Successfully.');
  };

  return (
    <div className="space-y-12 pr-0 lg:pr-8">
      <div>
        <h3 className="text-2xl font-light tracking-tight text-slate-800 mb-3">Request Proposal</h3>
        <p className="text-sm text-slate-500 font-light max-w-sm leading-relaxed">Submit formal project specifications for a detailed technical evaluation.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Section 1 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Building2 className="w-4 h-4 text-apcoRed" />
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Corporate Identity</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <input 
              type="text" required placeholder="Company Name *"
              className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400"
              value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})}
            />
            <input 
              type="text" required placeholder="Contact Person *"
              className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400"
              value={form.contactPerson} onChange={e => setForm({...form, contactPerson: e.target.value})}
            />
            <input 
              type="email" required placeholder="Official Email *"
              className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400"
              value={form.email} onChange={e => setForm({...form, email: e.target.value})}
            />
            <input 
              type="tel" required placeholder="Phone Number *"
              className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400"
              value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Layers className="w-4 h-4 text-apcoRed" />
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Project Scope</h4>
          </div>
          <select 
            required
            className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800"
            value={form.division} onChange={e => setForm({...form, division: e.target.value})}
          >
            <option value="" disabled className="text-slate-400">Select Target Division *</option>
            <option value="commercial-industrial-painting">Industrial & Infra Painting</option>
            <option value="structural-fabrication-safety">Display Fabrication</option>
            <option value="civil-works-construction">Civil Structures</option>
            <option value="urban-roadway-beautification">Enterprise Manpower</option>
          </select>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <input 
              type="text" placeholder="Estimated Budget"
              className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400"
              value={form.estimatedBudget} onChange={e => setForm({...form, estimatedBudget: e.target.value})}
            />
            <input 
              type="text" placeholder="Target Timeline"
              className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400"
              value={form.projectTimeline} onChange={e => setForm({...form, projectTimeline: e.target.value})}
            />
          </div>
          
          <textarea 
            required rows={4} placeholder="Detailed Technical Scope Description *"
            className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-apcoBlue transition-colors text-slate-800 placeholder-slate-400 resize-none"
            value={form.scopeDescription} onChange={e => setForm({...form, scopeDescription: e.target.value})}
          />
        </div>

        {/* Section 3 */}
        <div className="flex items-start gap-4 pt-4">
          <input 
            type="checkbox" id="safety" required
            className="mt-1 accent-apcoRed w-4 h-4 cursor-pointer"
            checked={form.safetyRequirements} onChange={e => setForm({...form, safetyRequirements: e.target.checked})}
          />
          <label htmlFor="safety" className="text-xs text-slate-500 leading-relaxed font-light cursor-pointer">
            <strong className="font-medium text-slate-700">Mandatory Compliance:</strong> Confirming alignment with corporate safety protocols and insurance mandates required by Varan Corporation.
          </label>
        </div>

        <button type="submit" className="group flex items-center justify-between w-full bg-slate-900 hover:bg-apcoBlue text-white px-8 py-5 rounded-full transition-all duration-700 shadow-xl shadow-slate-900/10 mt-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Submit RFP Packet</span>
          <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
        </button>
      </form>
    </div>
  );
};

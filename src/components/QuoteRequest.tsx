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
    // High-performance form processing logic
    console.log('RFP Submission Packet Logged:', form);
    alert('Technical Bid/RFP Packet Submitted Successfully.');
  };

  return (
    <section className="py-12 bg-[#F4F6F9] px-6 md:px-12 border border-gray-300/60 rounded-2xl shadow-xl shadow-slate-950/10 text-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="border-l-8 border-[#E31E24] pl-4 mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#0F2E5A]">
            Request for Proposal (RFP)
          </h2>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">
            Submit formal project specifications for technical evaluation
          </p>
        </div>

        {/* Corporate Form Interface */}
        <form onSubmit={handleSubmit} className="space-y-8 text-sm">
          
          {/* Section 1: Corporate Identity */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-black text-[#0F2E5A] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#E31E24]" /> 1. Company & Contact Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Company / Enterprise Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  placeholder="e.g., Mumbai Transit"
                  value={form.companyName}
                  onChange={e => setForm({...form, companyName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Contact Person Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  placeholder="e.g., Rajesh Kumar"
                  value={form.contactPerson}
                  onChange={e => setForm({...form, contactPerson: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Contact Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Official Corporate Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Technical Parameters */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-black text-[#0F2E5A] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#E31E24]" /> 2. Project Class & Scope Alignment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Target Operational Division *</label>
                <select 
                  required
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  value={form.division}
                  onChange={e => setForm({...form, division: e.target.value})}
                >
                  <option value="">Select Division...</option>
                  <option value="industrial-infra-painting">Industrial & Infra Painting</option>
                  <option value="display-fabrication">Display Fabrication</option>
                  <option value="civil-structures">Civil Structures</option>
                  <option value="enterprise-manpower">Enterprise Manpower</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Estimated Budget Scale</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  placeholder="e.g., INR 25 Lakhs"
                  value={form.estimatedBudget}
                  onChange={e => setForm({...form, estimatedBudget: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Target Timeline / Deadline</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350"
                  placeholder="e.g., 90 Days From Allocation"
                  value={form.projectTimeline}
                  onChange={e => setForm({...form, projectTimeline: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Detailed Technical Scope Description *</label>
              <textarea 
                required
                rows={5}
                className="w-full p-3 bg-white border border-gray-300 focus:border-[#0F2E5A] focus:bg-slate-50 focus:ring-2 focus:ring-[#0F2E5A]/10 focus:outline-none text-gray-900 rounded-lg shadow-sm transition-all duration-350 resize-none"
                placeholder="Outline dimensions, structural elements, safety criteria, or asset lists here..."
                value={form.scopeDescription}
                onChange={e => setForm({...form, scopeDescription: e.target.value})}
              />
            </div>
          </div>

          {/* Section 3: Compliance Mandates */}
          <div className="bg-white p-4 border border-gray-300/60 rounded-xl flex items-start space-x-3 shadow-sm">
            <input 
              type="checkbox" 
              id="safety"
              className="mt-1 accent-[#0F2E5A] h-4 w-4 border-gray-300 rounded"
              checked={form.safetyRequirements}
              onChange={e => setForm({...form, safetyRequirements: e.target.checked})}
            />
            <label htmlFor="safety" className="text-xs text-gray-600 leading-relaxed">
              <strong>Mandatory Compliance Clause:</strong> By checking this, you mandate that all execution profiles conform to standard corporate safety measures, site check clearances, and insurance guidelines maintained by Varan Corporation.
            </label>
          </div>

          {/* Submission CTA */}
          <button 
            type="submit"
            className="bg-[#0F2E5A] hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg text-white font-bold uppercase tracking-wider text-xs px-8 py-4 transition-all duration-300 flex items-center justify-center space-x-2 rounded-lg w-full md:w-auto shadow-md"
          >
            <span>Submit Formal Bid Packet</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </section>
  );
};

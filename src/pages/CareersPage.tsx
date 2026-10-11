import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { MapPin, Clock, ArrowRight, Send, Check } from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel';

const jobOpenings = [
  {
    id: 'c1',
    title: 'Senior Coating Inspector (NACE / SSPC Level II)',
    division: 'Quality Assurance',
    location: 'Mumbai / Pan-India Sites',
    type: 'Full-time',
    experience: '5-8 Years',
    description: 'Responsible for surface inspection, DFT verification, ambient checks, and QA/QC documentation on metro viaducts.',
  },
  {
    id: 'c2',
    title: 'Site Project Engineer - Structural Steel',
    division: 'Civil & Structural',
    location: 'Delhi NCR / Expressway Projects',
    type: 'Full-time',
    experience: '3-6 Years',
    description: 'Lead gantry erection crews, coordinate crane logistics, and supervise on-site alignment and torque testing.',
  },
  {
    id: 'c3',
    title: 'HSE Safety Officer (NEBOSH / IOSH Certified)',
    division: 'Health & Safety',
    location: 'Regional Transit Sites',
    type: 'Full-time',
    experience: '4-7 Years',
    description: 'Conduct daily toolbox talks, enforce working-at-height PPE regulations, and maintain zero-incident compliance logs.',
  },
  {
    id: 'c4',
    title: 'Airless Spray Coating Supervisor',
    division: 'Operations',
    location: 'Field Operations',
    type: 'Full-time',
    experience: '3-5 Years',
    description: 'Supervise airless spray teams on high-pressure rigs, paint batch mixing, and surface preparation standards.',
  },
];

export const CareersPage: FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', role: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Careers Hero */}
      <section className="pt-32 pb-16 bg-[#0F2942] text-white relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#8ACFF8] font-mono text-xs uppercase tracking-wider">
            <span>CAREERS AT VARAN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-3xl leading-tight">
            Build India's Megastructures with a <span className="text-[#8ACFF8]">Winning Team</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-body leading-relaxed">
            Join our dedicated team of engineers, technical specialists, and site professionals executing landmark transit and highway corridors.
          </p>
        </div>
      </section>

      {/* Perks & Culture */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Zero Harm HSE Culture', desc: 'World-class safety gear and rigorous on-site protocols.' },
              { title: 'Mega-Infrastructure Exposure', desc: 'Work directly on national highways, viaducts, and rapid rail.' },
              { title: 'Continuous Certification', desc: 'Sponsorship for NACE, SSPC, NEBOSH, and welding accreditations.' },
              { title: 'Competitive Packages', desc: 'Attractive compensations, site allowances, and health coverage.' },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0F2942] font-bold font-mono text-sm flex items-center justify-center mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-slate-900 font-heading text-base">{p.title}</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel number="01" name="CURRENT OPENINGS" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mt-2">
                Available Positions Across Corridors
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Send your resume directly to <a href="mailto:careers@varancorp.com" className="text-[#0F2942] font-bold underline">careers@varancorp.com</a> or apply online below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#0F2942]/50 bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded bg-[#0F2942] text-white uppercase tracking-wider text-[11px]">
                      {job.division}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-snug">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.type}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-body">
                    {job.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJob(job.title);
                      setFormData(prev => ({ ...prev, role: job.title }));
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#0F2942] hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider font-heading inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-slate-400">Ref: #{job.id.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Application Modal / Form */}
          {selectedJob && (
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-300 shadow-md max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500">Fast Track Application</div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">{selectedJob}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase"
                >
                  Cancel
                </button>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-800 rounded-xl flex items-center gap-3 font-semibold text-sm">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your application has been logged. Our HR team will reach out within 48 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#091535]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#091535]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#091535]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Years of Experience</label>
                      <input
                        type="text"
                        placeholder="e.g. 5 Years"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#091535]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cover Note / Certifications</label>
                    <textarea
                      rows={3}
                      placeholder="Mention your NACE/SSPC certifications, previous metro projects, or current location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#091535]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold uppercase text-xs tracking-wider font-heading flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

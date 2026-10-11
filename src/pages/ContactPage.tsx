import type { FC } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail } from 'lucide-react';
import { companyConfig } from '../data/content';

export const ContactPage: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Engineered Page Header */}
      <PageHeader
        badgeNumber="05"
        badgeName="CORPORATE COMMUNICATIONS & TENDERS"
        title="Direct Engineering Tender & Site"
        highlightWord="Desk"
        description="Connect directly with our senior project managers, estimation directors, and safety compliance officers. Inquiries received during business hours are acknowledged within 2 hours."
        breadcrumbs={[
          { label: 'Contact' }
        ]}
        metrics={[
          { label: 'Response Window', value: '< 2h', unit: 'Business Hours' },
          { label: 'Registered CIN', value: companyConfig.cinNumber.slice(0, 10), unit: 'Active' },
          { label: 'Tender Desk', value: 'Direct', unit: 'Landline' },
          { label: 'Workforce Hub', value: 'Mumbai', unit: 'HQ' },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-md shadow-orange-500/15 hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call Direct: {companyConfig.phone}</span>
            </a>
            <a
              href={`mailto:${companyConfig.email}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-2xs transition-colors"
            >
              <Mail className="w-4 h-4 text-vrnNavy" />
              <span>{companyConfig.email}</span>
            </a>
          </div>
        }
      />

      {/* Main Corporate Contact & Channels Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <ContactForm />
      </div>
    </div>
  );
};

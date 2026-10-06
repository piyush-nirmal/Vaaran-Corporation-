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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider font-display shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-vrnOrange" />
              <span>Call Direct: {companyConfig.phone}</span>
            </a>
            <a
              href={`mailto:${companyConfig.email}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-bold text-xs uppercase tracking-wider font-display transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-vrnNavy" />
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

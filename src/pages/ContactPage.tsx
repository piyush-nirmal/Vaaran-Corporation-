import type { FC } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail } from 'lucide-react';
import { companyConfig } from '../data/content';
import { SeoHead } from '../components/SeoHead';

export const ContactPage: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Contact Us & Tender Inquiries | Varan Corporation"
        description="Direct contact desk for Varan Corporation. Phone: 8104158309, Email: varancorporation@gmail.com. Reach out for corporate communications, tender inquiries, and project specifications."
        keywords="Contact Varan Corporation, phone 8104158309, email varancorporation@gmail.com, tender desk, civil contractor contact, Mumbai headquarters"
      />
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
          { label: 'Registered CIN', value: 'Active', unit: 'MCA Verified' },
          { label: 'Tender Desk', value: 'Direct', unit: 'Landline' },
          { label: 'Workforce Hub', value: 'Mumbai', unit: 'HQ' },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-vrnOrange" />
              <span>Call Direct: {companyConfig.phone}</span>
            </a>
            <a
              href={`mailto:${companyConfig.email}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading transition-colors"
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

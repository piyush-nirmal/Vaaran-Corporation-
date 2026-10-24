import type { FC } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail } from 'lucide-react';
import { companyConfig } from '../data/content';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';

export const ContactPage: FC = () => {
  const { company } = useContent();
  const currentCompany = company || companyConfig;
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href={`tel:${currentCompany.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-sm shadow-[#3F73F5]/25 transition-all min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Call Direct: {currentCompany.phone}</span>
            </a>
            <a
              href={`mailto:${currentCompany.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#E2E9F4] bg-white hover:bg-[#EAF2FF]/50 text-[#20242D] font-semibold text-xs uppercase tracking-[0.04em] font-heading transition-colors min-h-[44px]"
            >
              <Mail className="w-3.5 h-3.5 text-[#3F73F5] shrink-0" />
              <span>{currentCompany.email}</span>
            </a>
          </div>
        }
      />

      {/* Main Corporate Contact & Channels Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
        <ContactForm />
      </div>
    </div>
  );
};

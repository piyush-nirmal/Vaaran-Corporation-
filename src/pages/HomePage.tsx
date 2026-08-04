import { Hero } from '../components/Hero';
import { StatsBanner } from '../components/StatsBanner';
import { EquipmentGrid } from '../components/EquipmentGrid';
import { ProjectsPortfolio } from '../components/ProjectsPortfolio';
import { QuoteRequest } from '../components/QuoteRequest';
import { ContactForm } from '../components/ContactForm';
import { useScroll, useTransform, motion } from 'framer-motion';

export const HomePage = () => {
  const { scrollY } = useScroll();
  
  // Hero fades out and loses pointer events as we scroll down
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroPointerEvents = useTransform(scrollY, (y) => y > 100 ? "none" as const : "auto" as const);
  
  // Next section comes up and fades in
  const contentY = useTransform(scrollY, [0, 400], [80, 0]);
  const contentOpacity = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <div className="bg-[#FAFAFA] text-slate-800 min-h-screen relative overflow-hidden font-sans antialiased selection:bg-apcoBlue/20 selection:text-apcoBlue">
      {/* 1. Hero Section (First Slide) - Fixed Background */}
      <motion.div 
        style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }}
        className="fixed top-0 left-0 w-full h-screen z-0"
      >
        <Hero />
      </motion.div>

      {/* Spacer to push content down below the fixed hero */}
      <div className="h-screen w-full"></div>

      {/* Ambient background glows for luxury feel */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-apcoRed/5 rounded-full blur-3xl opacity-50 mix-blend-multiply transition-all duration-1000"></div>
        <div className="absolute top-[40%] -left-40 w-[40rem] h-[40rem] bg-apcoBlue/5 rounded-full blur-3xl opacity-50 mix-blend-multiply transition-all duration-1000"></div>
      </div>

      {/* The rest of the page content, animated in */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 bg-[#FAFAFA] pb-20"
      >
        {/* 2. Key Metrics & Certifications Banner */}
        <div className="relative z-20 pt-8">
          <StatsBanner />
        </div>

        <main className="max-w-[85rem] mx-auto py-32 px-4 sm:px-6 lg:px-8 space-y-40 w-full flex-grow relative z-10">
        
        {/* 3. Machinery & Fleet Bento Grid */}
        <section className="group">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-apcoRed mb-4 opacity-80">
              Operational Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase transition-all duration-700">
              Machinery & Fleet
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-5 max-w-2xl leading-relaxed">
              High-capacity operational equipment deployed on core infrastructural sites, designed for precision and absolute reliability.
            </p>
          </div>
          <EquipmentGrid />
        </section>

        {/* 4. Projects Portfolio */}
        <section className="group">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-apcoRed mb-4 opacity-80">
              Execution Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase transition-all duration-700">
              Projects Portfolio
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-5 max-w-2xl leading-relaxed">
              Recent infrastructure developments, commercial installations, and structural marvels spanning across the nation.
            </p>
          </div>
          <ProjectsPortfolio />
        </section>

        {/* 5. Operational Command Center (RFP & Direct Communications Hub) */}
        <section id="contact" className="group">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-apcoRed mb-4 opacity-80">
              Global Access
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase transition-all duration-700">
              Command Center
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-5 max-w-2xl leading-relaxed">
              Submit formal technical proposals or initiate direct corporate communications with our executive team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <QuoteRequest />
            <ContactForm />
          </div>
        </section>

        </main>
      </motion.div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useServices } from '../hooks/useServices';

const divisionImages: Record<string, string> = {
  'commercial-industrial-painting': 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
  'structural-fabrication-safety': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
  'civil-works-construction': 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
  'urban-roadway-beautification': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
};

export const ServiceCategoryPage: FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { services: servicesData } = useServices();
  
  const activeCategory = servicesData.find(cat => cat.id === categoryId);
  const [activeServiceId, setActiveServiceId] = useState<string>('');

  useEffect(() => {
    if (activeCategory && !activeServiceId) {
      setActiveServiceId(activeCategory.services[0].id);
    }
  }, [activeCategory, activeServiceId]);

  if (!activeCategory) {
    return <Navigate to="/services" replace />;
  }

  const activeService = activeCategory.services.find(ser => ser.id === activeServiceId) || activeCategory.services[0];

  return (
    <main className="max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 space-y-12 w-full flex-grow font-sans">
      
      {/* Back Button */}
      <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to All Services
      </Link>

      <div className="border-b border-gray-200 pb-12 mb-12">
        <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900">
          {activeCategory.title}
        </h1>
        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-4 max-w-2xl leading-relaxed">
          {activeCategory.description}
        </p>
      </div>

      {/* Main Layout Grid (12 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Column 1: Sub-Services (Capabilities) - lg:col-span-3 */}
        <div className="lg:col-span-3 flex flex-col space-y-2">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-gray-100 pb-4">
            Capabilities
          </h3>
          <div className="flex flex-col gap-2">
            {activeCategory.services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group flex items-center justify-between text-left p-4 rounded-none transition-all duration-300 border ${
                    isActive 
                      ? 'bg-slate-50 border-gray-200 shadow-sm' 
                      : 'bg-transparent border-transparent hover:bg-slate-50/50'
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                    {service.title}
                  </span>
                  {isActive && <ArrowRight className="w-4 h-4 text-slate-900" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Column 2 & 3 wrapper for smooth animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeServiceId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-9 grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16"
          >
            {/* Column 2: Main Content - xl:col-span-7 */}
            <div className="xl:col-span-7 flex flex-col">
              
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  {activeService.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {activeService.description}
                </p>
              </div>

              {/* Deliverables & Sectors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-gray-200 pt-12 mt-auto">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-4">
                    {activeService.keyDeliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-slate-900 mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-xs font-medium text-slate-700 leading-relaxed uppercase tracking-wider">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                    Target Sectors
                  </h4>
                  <div className="flex flex-col gap-3">
                    {activeService.targetSectors.map((sector, index) => (
                      <div key={index} className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-gray-100 pb-3">
                        {sector}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  REF ID: {activeService.id.split('-')[0].toUpperCase()}-{activeService.id.split('-')[1]?.toUpperCase() || 'SVC'}
                </div>
                <button
                  onClick={() => alert(`Requesting deployment specs for: ${activeService.title}`)}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-apcoBlue transition-colors"
                >
                  Request Blueprint
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>

            {/* Column 3: Media & Metrics - xl:col-span-5 */}
            <div className="xl:col-span-5 flex flex-col gap-8">
              
              {/* Crisp Cinematic Image */}
              <div className="w-full aspect-[4/3] bg-slate-100 relative group overflow-hidden">
                <img
                  src={divisionImages[activeCategory.id] || divisionImages['commercial-industrial-painting']}
                  alt={activeCategory.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Minimal Metric Boxes */}
              <div className="grid grid-cols-2 gap-4">
                {activeService.metrics.map((metric, index) => (
                  <div key={index} className="border border-gray-200 p-6 flex flex-col justify-center bg-white group hover:border-slate-400 transition-colors duration-300">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 group-hover:text-slate-600 transition-colors">
                      {metric.label}
                    </span>
                    <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter leading-none">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </main>
  );
};

import { useState } from 'react';
import type { ComponentType, FC } from 'react';
import { Paintbrush, Layers, Hammer, Users, Check, TrendingUp, Shield, Target, Search } from 'lucide-react';
import { servicesData } from '../data/services';

// Lucide icon mapping to render icons dynamically
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Paintbrush: Paintbrush,
  Layers: Layers,
  Hammer: Hammer,
  Users: Users,
};

// Contextual images for active division preview
const divisionImages: Record<string, string> = {
  'industrial-infra-painting': 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80', // Automated spray coating / industrial spray painting
  'display-fabrication': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80', // Heavy industrial metal laser cutting / fabrication workshop
  'civil-structures': 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80', // Concrete construction / steel foundation site
  'enterprise-manpower': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', // Technicians / engineers with hard hats
};

export const ServiceTabs: FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(servicesData[0].id);
  
  // Find current active category
  const activeCategory = servicesData.find(cat => cat.id === activeCategoryId) || servicesData[0];
  
  // Track active service within the active category
  const [activeServiceId, setActiveServiceId] = useState<string>(activeCategory.services[0].id);
  
  // If category changes, make sure the active service exists in the new category
  const activeService = activeCategory.services.find(ser => ser.id === activeServiceId) || activeCategory.services[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const newCategory = servicesData.find(cat => cat.id === categoryId) || servicesData[0];
    setActiveServiceId(newCategory.services[0].id);
  };

  return (
    <div className="w-full max-w-none bg-white border-y border-gray-200/60 shadow-xl overflow-hidden">
      {/* Top Banner / Corporate Header */}
      <div className="bg-apcoBlue text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10">
        <div>
          <span className="text-apcoRed font-bold tracking-widest text-xs uppercase block mb-1">
            Varan Corporation
          </span>
          <h2 className="text-2xl font-bold tracking-tight uppercase font-sans">
            Core Infrastructure & Support Divisions
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-apcoRed pl-4 md:pl-0 md:pr-4">
          <p className="text-xs uppercase text-gray-300 font-semibold tracking-wider">Operational Mode</p>
          <p className="text-sm font-bold tracking-widest text-white">ELITE ENTERPRISE</p>
        </div>
      </div>

      {/* Main Grid Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        {/* Left Side: Division Navigation (Col Span 4) */}
        <div className="lg:col-span-4 bg-slate-50/50 p-4 border-r border-gray-200/60 flex flex-col justify-between gap-4">
          <div className="flex flex-col space-y-4">
            <div className="p-3 bg-slate-100/50 rounded-lg border border-gray-200/40">
              <span className="text-xs font-bold tracking-widest text-apcoMuted uppercase">
                Select Operational Division
              </span>
            </div>
            
            <nav className="flex flex-col gap-3">
              {servicesData.map((category) => {
                const IconComponent = iconMap[category.icon] || Paintbrush;
                const isActive = category.id === activeCategoryId;

                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`text-left p-4 transition-all duration-300 flex items-start gap-4 border relative ${
                      isActive 
                        ? 'bg-apcoBlue text-white border-transparent shadow-lg shadow-slate-950/10' 
                        : 'bg-slate-50/70 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] text-apcoDark hover:bg-slate-100/90 border-gray-200/60 shadow-sm'
                    } rounded-xl`}
                  >
                    <div className={`p-2.5 rounded-lg flex-shrink-0 transition-colors ${isActive ? 'bg-apcoRed text-white shadow-sm' : 'bg-gray-100 text-apcoBlue'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-wide text-xs">
                        {category.title}
                      </h3>
                      <p className={`text-[11px] mt-1 line-clamp-2 ${isActive ? 'text-gray-300' : 'text-apcoMuted'}`}>
                        {category.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
          
          {/* Bottom Info Block */}
          <div className="p-4 border border-gray-200/40 bg-slate-100/50 rounded-xl hidden lg:block">
            <div className="flex items-center gap-2 text-apcoBlue">
              <Shield className="w-4 h-4 text-apcoRed" />
              <span className="text-xs font-bold uppercase tracking-wider">ISO 9001:2015 Standards</span>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed View (Col Span 8) */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-white border-l border-gray-200/60">
          <div>
            {/* Division Banner Statement */}
            <div className="p-6 md:p-8 pb-5 border-b border-gray-200/60">
              <h3 className="text-xs font-bold tracking-widest text-apcoRed uppercase mb-1">
                Active Division Summary
              </h3>
              <h2 className="text-xl font-bold uppercase text-apcoBlue tracking-wide">
                {activeCategory.title}
              </h2>
              <p className="text-sm text-apcoMuted mt-2 leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* Service Selection Tabs (Horizontal Sub-Nav) */}
            <div className="px-6 md:px-8 py-4 border-b border-gray-200/60">
              <span className="text-xs font-bold tracking-widest text-apcoMuted uppercase block mb-3">
                Select Specific Capability
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCategory.services.map((service) => {
                  const isServiceActive = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveServiceId(service.id)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 border rounded-lg ${
                        isServiceActive
                          ? 'bg-apcoRed text-white border-transparent shadow-md shadow-red-500/10'
                          : 'bg-white text-apcoMuted hover:text-apcoBlue hover:bg-gray-50 border-gray-200/60 shadow-sm'
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Service Core Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Column 1: Scope & Sectors */}
              <div className="lg:col-span-4 p-6 md:p-8 border-r border-gray-200/60 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-apcoBlue uppercase mb-2">
                    Scope of Operations
                  </h4>
                  <p className="text-sm text-apcoDark leading-relaxed mb-6">
                    {activeService.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-apcoBlue uppercase mb-2.5 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-apcoRed" />
                    Target Sectors
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.targetSectors.map((sector, index) => (
                      <span 
                        key={index} 
                        className="border border-apcoBlue/20 text-apcoBlue bg-apcoBlue/5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Deliverables & Metrics */}
              <div className="lg:col-span-4 p-6 md:p-8 border-r border-gray-200/60 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-apcoBlue uppercase mb-3">
                    Key Project Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {activeService.keyDeliverables.map((item, index) => (
                      <li key={index} className="flex items-start text-xs text-apcoDark font-medium">
                        <div className="w-5 h-5 bg-apcoRed/10 border border-apcoRed/30 rounded flex items-center justify-center mr-3 mt-[2px] flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-apcoRed stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold tracking-widest text-apcoBlue uppercase mb-3 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-apcoRed" />
                    Operational Metrics
                  </h4>
                  <div className="space-y-2">
                    {activeService.metrics.map((metric, index) => (
                      <div 
                        key={index} 
                        className="bg-slate-50 border border-gray-200/60 border-l-4 border-l-apcoBlue p-2 flex flex-col justify-between rounded-r-lg shadow-sm"
                      >
                        <div className="flex justify-between items-baseline">
                          <span className="text-[9px] text-apcoMuted font-bold uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="text-xs font-bold text-apcoBlue tracking-tight">
                            {metric.value}
                          </span>
                        </div>
                        {metric.description && (
                          <span className="text-[8px] text-apcoMuted mt-0.5">
                            {metric.description}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Context Image Card with zero margins */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="group relative overflow-hidden bg-gray-100 flex-1 min-h-[300px] w-full flex flex-col justify-between">
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={divisionImages[activeCategoryId]} 
                      alt={`${activeCategory.title} operations`}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Glassmorphic Magnifying Glass Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                    <div className="p-3 bg-white/20 border border-white/30 rounded-full transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none">
                    <span className="text-[10px] uppercase font-bold text-white tracking-widest bg-apcoRed px-2 py-0.5 rounded">
                      {activeCategory.title} Operations
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Interactive Actions */}
          <div className="px-6 md:px-8 py-5 border-t border-gray-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50/50">
            <div className="text-[11px] text-apcoMuted font-semibold uppercase tracking-wider">
              Selected Service ID: <span className="font-mono text-apcoRed">{activeService.id}</span>
            </div>
            <button 
              className="bg-apcoRed text-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-apcoBlue transition-all duration-300 flex items-center justify-center gap-2 border border-transparent active:border-apcoRed rounded-lg shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => alert(`Requesting deployment specs for service category: ${activeCategory.title} (${activeService.title})`)}
            >
              Request Operational Blueprint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

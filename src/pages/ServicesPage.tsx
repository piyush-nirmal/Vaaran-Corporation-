import { Link } from 'react-router-dom';
import { type LucideProps, Paintbrush, Layers, Hammer, Users, ArrowRight } from 'lucide-react';
import { useServices } from '../hooks/useServices';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Paintbrush: Paintbrush,
  Layers: Layers,
  Hammer: Hammer,
  Users: Users,
};

export const ServicesPage = () => {
  const { services: servicesData } = useServices();

  return (
    <main className="min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pt-32 pb-32 px-4 sm:px-6 lg:px-8 font-sans relative">
      
      {/* Header matching the screenshot vibe */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <h1 className="text-4xl lg:text-5xl font-outfit font-light uppercase tracking-[0.3em] text-apcoBlue mb-6 drop-shadow-sm">
          What We Offer
        </h1>
        <p className="text-[11px] sm:text-[13px] text-apcoRed uppercase tracking-[0.25em] font-bold">
          Every detail perfected to exceed your expectations
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-[75rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
        {servicesData.map((category) => {
          const IconComponent = iconMap[category.icon] || Paintbrush;

          return (
            <Link 
              key={category.id} 
              to={`/services/${category.id}`}
              className="group bg-white rounded-2xl p-10 sm:p-12 flex flex-col items-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(15,46,90,0.08)] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-apcoBlue rounded-full flex items-center justify-center mb-8 shadow-[0_4px_20px_rgba(15,46,90,0.15)] transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative">
                 <div className="absolute inset-0 rounded-full border border-apcoBlue/20 scale-[1.15] group-hover:scale-[1.3] transition-transform duration-700"></div>
                <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h2 className="text-[14px] sm:text-[16px] font-black uppercase tracking-[0.2em] text-apcoBlue mb-5 text-center leading-relaxed">
                {category.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] text-slate-500 text-center mb-10 leading-relaxed font-medium flex-grow px-2">
                {category.description}
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-apcoRed/20 mb-8 group-hover:bg-apcoRed group-hover:w-24 transition-all duration-500 rounded-full"></div>

              {/* Explore Link */}
              <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-apcoRed tracking-[0.2em] uppercase group-hover:text-apcoBlue transition-colors">
                Explore Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

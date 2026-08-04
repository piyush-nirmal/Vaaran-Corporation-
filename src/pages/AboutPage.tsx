import { StatsBanner } from '../components/StatsBanner';
import { Building2, Paintbrush, ShieldCheck, MapPin } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="bg-[#FAFAFA] text-slate-800 min-h-screen relative overflow-hidden font-sans antialiased selection:bg-apcoBlue/20 selection:text-apcoBlue">
      {/* Ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-apcoRed/5 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute top-[40%] -left-40 w-[40rem] h-[40rem] bg-apcoBlue/5 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888086225-ee59085ac1de?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-[85rem] mx-auto relative z-10 flex flex-col items-center text-center py-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-apcoRed mb-6 opacity-90">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
            Excellence Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-apcoRed to-red-400">Over Decades</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium max-w-2xl leading-relaxed">
            Founded in 1997, Varan Corporation began its journey with commercial hand painting, specializing in buses, trains, and transport vehicles.
          </p>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
              <Paintbrush className="w-4 h-4 text-apcoBlue" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Phase I: Signage & Advertising</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-slate-900">
              Commercial <span className="text-transparent bg-clip-text bg-gradient-to-r from-apcoBlue to-blue-400">Signage</span>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We expanded into outdoor advertising and commercial signage, manufacturing high-quality visual infrastructure.
            </p>
            <ul className="space-y-3 pt-4 border-t border-slate-200">
              {['Traditional Blue Signboards', 'Acrylic Boards', '3D Letter Signage', 'Custom Display Panels'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-apcoRed" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-2 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1563200049-74d6c1b3c8f3?auto=format&fit=crop&w=800&q=80" alt="Signage" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-apcoBlue/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
              <Building2 className="w-4 h-4 text-apcoRed" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Phase II: Industrial Scale</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-slate-900">
              Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-apcoRed to-red-400">Diversification</span>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Adapting to changing government regulations, the company successfully diversified into heavy industrial operations.
            </p>
            <ul className="space-y-3 pt-4 border-t border-slate-200">
              {['Civil Infrastructure', 'Commercial & Industrial Painting', 'Structural Fabrication'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-apcoRed" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:order-1 bg-white p-2 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1541888086225-ee59085ac1de?auto=format&fit=crop&w=800&q=80" alt="Infrastructure" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-apcoRed/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Works Showcase */}
      <section className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-apcoRed mb-4 opacity-80">
            National Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-900 transition-all duration-700">
            Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-apcoBlue to-apcoRed">Works</span>
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-5 max-w-2xl leading-relaxed">
            Driven by precision, adaptability, and quality, the company continues building infrastructure across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Bandra–Worli Sea Link', desc: 'Marine Coating', img: 'https://images.unsplash.com/photo-1513568856983-93666f7f32ff?auto=format&fit=crop&w=600&q=80' },
            { title: 'Goa Bridge', desc: 'Structural Painting', img: 'https://images.unsplash.com/photo-1542475452-f47ff6981881?auto=format&fit=crop&w=600&q=80' },
            { title: 'Delhi Toll', desc: 'Infrastructure', img: 'https://images.unsplash.com/photo-1601004128532-601e828d6c70?auto=format&fit=crop&w=600&q=80' },
            { title: 'Bangalore Commercial', desc: 'Commercial Painting', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
          ].map((work, idx) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-slate-900 cursor-default shadow-xl shadow-slate-200/50">
              <img src={work.img} alt={work.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <MapPin className="w-5 h-5 text-apcoRed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                <h4 className="text-xl font-outfit font-bold tracking-tight text-white mb-1">{work.title}</h4>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-300">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Highlights Banner */}
      <section className="relative z-20 pt-10 pb-32">
        <StatsBanner />
      </section>

    </div>
  );
};

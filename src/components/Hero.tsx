import { useState } from 'react';
import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: FC = () => {
  const [activePanel, setActivePanel] = useState(1);

  return (
    <div className="relative min-h-[100vh] bg-[#020617] text-white overflow-hidden flex items-center pt-40 lg:pt-32 pb-12">
      
      {/* Creative Liquid Paint Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
        {/* Animated Conic Gradient */}
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-50"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #020617, #0F2E5A, #E31E24, #020617, #0F2E5A)'
          }}
        />
        {/* Heavy glass blur */}
        <div className="absolute inset-0 backdrop-blur-[150px]"></div>
        
        {/* Faint industrial texture overlay */}
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover' }}></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 mt-12 lg:mt-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Corporate Tagline */}
              <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-white tracking-[0.2em] uppercase cursor-default">
                <span>WORK IS WORSHIP</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 font-medium normal-case tracking-wide">कर्म ही पूजा है</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] text-white drop-shadow-2xl">
                Building Infrastructure<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-apcoRed to-red-400 drop-shadow-lg">Enhancing Horizons</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-xl font-medium leading-loose border-l-2 border-apcoRed/50 pl-4 py-1">
                Trusted Civil Construction, Commercial Painting, and Specialized Structural Fabrication Services Across India.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-12 sm:pt-20 lg:pt-[18rem]"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-apcoRed to-[#ff3b42] hover:from-[#ff3b42] hover:to-apcoRed text-white font-bold uppercase tracking-widest text-[10px] px-7 py-4 transition-all duration-300 flex items-center justify-center space-x-2 rounded-xl shadow-[0_10px_30px_-10px_rgba(227,30,36,0.6)] group hover:-translate-y-1">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md font-bold uppercase tracking-widest text-[10px] px-7 py-4 transition-all duration-300 flex items-center justify-center space-x-2 rounded-xl shadow-lg hover:-translate-y-1">
                <span>View Our Projects</span>
              </button>
            </motion.div>



          </div>

          {/* Right Showcase - Interactive Expanding Accordion */}
          <div className="lg:col-span-6 relative mt-16 lg:mt-0 h-[450px] sm:h-[500px] w-full flex gap-3">
            
            {[
              { id: 1, title: 'Civil Infra', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
              { id: 2, title: 'Painting', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80' },
              { id: 3, title: 'Fabrication', image: 'https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?auto=format&fit=crop&w=800&q=80' },
            ].map((panel, idx) => (
              <motion.div 
                key={panel.id}
                onMouseEnter={() => setActivePanel(panel.id)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ flex: activePanel === panel.id ? 2.5 : 1 }}
              >
                <img 
                  src={panel.image} 
                  alt={panel.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out ${activePanel === panel.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${activePanel === panel.id ? 'opacity-90' : 'opacity-80'}`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Vertical Text */}
                  <div className={`transform -rotate-90 origin-bottom-left absolute bottom-10 left-[60%] whitespace-nowrap transition-opacity duration-300 ${activePanel === panel.id ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs">{panel.title}</span>
                  </div>
                  
                  {/* Horizontal Text */}
                  <div className={`transition-all duration-500 delay-100 transform w-48 ${activePanel === panel.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="text-apcoRed font-bold text-[9px] uppercase tracking-[0.2em] block mb-1">Division 0{panel.id}</span>
                    <span className="text-white font-black text-2xl tracking-tighter leading-none block">{panel.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            
          </div>

        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Shield, ArrowRight, HardHat } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  metricLabel: string;
  metricValue: string;
  status: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    title: 'Metro Viaduct Structural Coating',
    metricLabel: 'Coating Area',
    metricValue: '45,000 sq.m.',
    status: '100% Safety Rated',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'High-Speed Expressway Gantry Alignment',
    metricLabel: 'Corridor Length',
    metricValue: '12.4 km',
    status: 'In Alignment Phase',
  },
  {
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80',
    title: 'Industrial Manufacturing & Civil Assets',
    metricLabel: 'Fabrication Volume',
    metricValue: '18,500 MT',
    status: 'Quality Certified',
  },
];

const BlueprintPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
        <path d="M 0 20 L 40 20" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
        <path d="M 20 0 L 20 40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <circle cx="80%" cy="20%" r="150" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="5,5" />
    <circle cx="80%" cy="20%" r="80" fill="none" stroke="white" strokeWidth="1" />
    <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="10,5" />
    <line x1="30%" y1="0" x2="30%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="10,5" />
    <path d="M 10% 90% L 30% 70% L 60% 85% L 90% 55%" fill="none" stroke="white" strokeWidth="1.5" />
    <path d="M 28% 70% L 32% 70% M 30% 68% L 30% 72%" stroke="white" strokeWidth="2" />
    <path d="M 58% 85% L 62% 85% M 60% 83% L 60% 87%" stroke="white" strokeWidth="2" />
    <path d="M 88% 55% L 92% 55% M 90% 53% L 90% 57%" stroke="white" strokeWidth="2" />
  </svg>
);

export const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#0F2E5A] text-white overflow-hidden border-b-8 border-[#E31E24] w-full">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 min-h-[600px] items-stretch relative z-10 mx-0 px-0">
        
        {/* Left Column: Authority & Directives */}
        <div className="hero-clip-path lg:col-span-7 flex flex-col justify-center px-6 py-16 md:px-16 lg:pl-24 lg:pr-16 bg-[#0F2E5A] space-y-8 relative z-20">
          <BlueprintPattern />
          
          <div className="relative z-10 space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/60 p-2.5 self-start rounded-lg shadow-sm">
              <Shield className="w-4 h-4 text-[#E31E24]" />
              <span className="text-xs uppercase tracking-widest font-bold text-slate-300">
                ISO 9001:2015 Certified Contractor
              </span>
            </div>

            {/* Heavy Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
                Industrial Execution. <br />
                <span className="text-[#E31E24]">Structural Precision.</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Varan Corporation delivers elite engineering support, heavy-duty industrial painting, structural fabrication, and commercial manpower logistics for large-scale infrastructure and transit systems across Mumbai.
              </p>
            </div>

            {/* Action Hub */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E31E24] hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center space-x-2 rounded-lg shadow-md">
                <span>Request Project Quote / RFP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-slate-500/60 hover:bg-slate-800/50 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center space-x-2 rounded-lg shadow-md">
                <HardHat className="w-4 h-4 text-slate-400" />
                <span>Explore Fleet & Machinery</span>
              </button>
            </div>

            {/* High-Contrast Industrial Feature Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-700/50">
              <div className="flex flex-col items-center justify-center p-3 border border-slate-700/60 bg-slate-800/40 rounded-lg text-center shadow-sm">
                <span className="text-[#E31E24] font-black text-sm block">100%</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">Compliance</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 border border-slate-700/60 bg-slate-800/40 rounded-lg text-center shadow-sm">
                <span className="text-green-400 font-black text-sm block">HSE</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">Safety Certified</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 border border-slate-700/60 bg-slate-800/40 rounded-lg text-center shadow-sm">
                <span className="text-blue-400 font-black text-sm block">GOVT</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">Approved Layouts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Cinematic Industrial Showcase Carousel */}
        <div className="lg:col-span-5 relative bg-slate-900 min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden lg:-ml-32 lg:pl-32 z-10">
          {/* Slide Images */}
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide.image} 
              alt={slide.title} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10"></div>
          
          {/* Glassmorphic Metrics Card */}
          <div className="absolute bottom-8 left-8 right-8 z-20 bg-slate-900/65 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl shadow-slate-950/30 transition-all duration-500">
            <div className="border-l-4 border-[#E31E24] pl-4 space-y-1 mb-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Featured Operational Site</span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white leading-snug min-h-[2.5rem] flex items-center">
                {slides[currentSlide].title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px]">
                  {slides[currentSlide].metricLabel}
                </span>
                <span className="font-bold text-white text-sm">
                  {slides[currentSlide].metricValue}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Execution Status</span>
                <span className="font-bold text-green-400 text-sm">
                  {slides[currentSlide].status}
                </span>
              </div>
            </div>
            {/* Slide indicators */}
            <div className="flex space-x-1.5 mt-4 justify-end">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-[#E31E24] w-4' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

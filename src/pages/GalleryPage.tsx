import { useState } from 'react';
import type { FC } from 'react';
import { Camera, X, ZoomIn, MapPin } from 'lucide-react';

import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import transitCoatingImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import sprayRigImg from '../assets/images/machinery_airless_spray_1791032370111.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  src: string;
  spec: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Elevated Rapid Transit Viaduct Protective System',
    category: 'Metro & Transit',
    location: 'Mumbai Line 2B Corridor',
    src: heroViaductImg,
    spec: 'Aliphatic Polyurethane topcoat over Zinc Silicate primer, 320μm DFT.',
  },
  {
    id: 'g2',
    title: 'High-Pressure Airless Spray Coating Deployment',
    category: 'Protective Coatings',
    location: 'Regional Rapid Transit System (RRTS)',
    src: transitCoatingImg,
    spec: 'Dual-gun Graco 70:1 high-build epoxy application on structural steel.',
  },
  {
    id: 'g3',
    title: 'Heavy Structural Steel Gantry Pre-Assembly',
    category: 'Steel Gantries',
    location: 'Central Fabrication Yard',
    src: steelFabImg,
    spec: 'Submerged arc welding with full ultrasonic inspection compliance.',
  },
  {
    id: 'g4',
    title: 'Automated Machinery & Blast Cleaning Rigs',
    category: 'Plant & Fleet',
    location: 'Expressway Flyover Corridor',
    src: sprayRigImg,
    spec: 'Sa 2.5 blast profiling with mobile dust-free recovery units.',
  },
  {
    id: 'g5',
    title: 'Central Yard Mobilization & Storage Hub',
    category: 'Plant & Fleet',
    location: 'Western Logistics Hub',
    src: facilityImg,
    spec: 'Controlled climate storage for epoxy & polyurethane barrels.',
  },
  {
    id: 'g6',
    title: 'Substructure Anti-Carbonation Barrier Application',
    category: 'Protective Coatings',
    location: 'Coastal Road Interchanges',
    src: heroViaductImg,
    spec: 'Elastomeric pure acrylic coating preventing chloride penetration.',
  },
];

const categories = ['All Photos', 'Metro & Transit', 'Steel Gantries', 'Protective Coatings', 'Plant & Fleet'];

export const GalleryPage: FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All Photos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Gallery Hero */}
      <section className="pt-32 pb-16 bg-[#0F2942] text-white relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#8ACFF8] font-mono text-xs uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>PHOTO GALLERY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-3xl leading-tight">
            High-Definition Field <span className="text-[#8ACFF8]">Execution Archive</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-body leading-relaxed">
            Visual documentation of ongoing and completed protective coatings, structural gantry fabrication, and site machinery across project sites.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-20 z-20 backdrop-blur-md bg-slate-50/95">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-heading ${
                  activeCategory === cat
                    ? 'bg-[#0F2942] text-[#8ACFF8] shadow-sm'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-bold text-slate-900 border border-slate-200">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 bg-white space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-vrnOrange" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-bold text-slate-950 font-heading text-base group-hover:text-[#0F2942] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-body line-clamp-2 leading-relaxed">
                    {item.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-vrnNavy bg-sky-50 px-2.5 py-1 rounded">
                  {selectedPhoto.category} · {selectedPhoto.location}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">{selectedPhoto.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{selectedPhoto.spec}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

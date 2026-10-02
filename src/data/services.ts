import type { ServiceCategory } from '../types/domain';

export const servicesData: ServiceCategory[] = [
  {
    id: 'industrial-infra-painting',
    title: 'Industrial & Infra Painting',
    icon: 'Paintbrush',
    description: 'Heavy-duty protective coatings and aesthetic finishings engineered for public utility assets and high-stress industrial environments.',
    services: [
      {
        id: 'metro-painting',
        title: 'Metro Infrastructure Painting',
        description: 'Specialized, high-durability coatings for metro tracks, corridors, stations, and support columns. Resistant to heavy weathering and environmental pollutants.',
        keyDeliverables: [
          'Anti-carbonation protective coatings',
          'Polyurethane (PU) finishes for high-traffic corridors',
          'Structural steel fire-retardant painting',
          'Safety lane marking and architectural accents'
        ],
        targetSectors: ['Metro Rail Corporations', 'Urban Transit Authorities', 'Public Works Departments'],
        metrics: [
          { label: 'Stations Completed', value: '24+' },
          { label: 'Lifespan Rating', value: '10 Years' },
          { label: 'Formulation Standard', value: 'ISO 12944 C5-I' }
        ]
      },
      {
        id: 'bridge-painting',
        title: 'Bridge & Highway Structures',
        description: 'Corrosion prevention systems and structural paint coatings for massive steel bridge structures, concrete girders, and highway infrastructure.',
        keyDeliverables: [
          'Abrasive cleaning and primer application',
          'Epoxy intermediate protective layers',
          'UV-resistant topcoats',
          'Expansion joint sealing and painting'
        ],
        targetSectors: ['National Highway Authorities', 'Railway Infrastructure Contractors', 'State Road Boards'],
        metrics: [
          { label: 'Total Bridge Span', value: '12,000m+' },
          { label: 'Corrosion Resistance', value: '2,500 Hrs Salt Spray' }
        ]
      },
      {
        id: 'sand-blasting',
        title: 'Industrial Sand Blasting',
        description: 'High-pressure abrasive blasting for deep surface preparation of steel structures, removing mill scale, old paint, and rust to achieve the ideal profile for coating adhesion.',
        keyDeliverables: [
          'Grit and sand blasting (Sa 2.5 & Sa 3 standards)',
          'Surface profiling and roughness testing',
          'Dust-free vacuum blasting for confined spaces',
          'Immediate rust-inhibitive primer application'
        ],
        targetSectors: ['Heavy Engineering Plants', 'Oil & Gas Terminals', 'Maritime and Shipyards'],
        metrics: [
          { label: 'Surface Cleanliness', value: 'Sa 2.5 standard' },
          { label: 'Blast Capacity', value: '450 sq.ft./hour' }
        ]
      },
      {
        id: 'flyovers-underpasses',
        title: 'Flyovers & Elevated Corridors',
        description: 'Protective, waterproof, and decorative painting of city flyovers, interchanges, underpasses, and retaining walls, designed to enhance urban aesthetics and concrete longevity.',
        keyDeliverables: [
          'Algae and fungus-resistant concrete paint',
          'High-visibility warning stripes and reflectors',
          'Hydrophobic clear sealing coatings',
          'Crack injection and cosmetic plastering'
        ],
        targetSectors: ['Municipal Corporations', 'Smart City Projects', 'Urban Infrastructure Developers'],
        metrics: [
          { label: 'Urban Projects', value: '40+' },
          { label: 'Hydrophobic Rating', value: 'Class A' }
        ]
      }
    ]
  },
  {
    id: 'display-fabrication',
    title: 'Display Fabrication',
    icon: 'Layers',
    description: 'Precision visual signage, corporate identity elements, and structural display installations engineered for high readability and exterior durability.',
    services: [
      {
        id: 'acp-acrylic',
        title: 'ACP Cladding & Acrylic Letters',
        description: 'Design, fabrication, and installation of Aluminium Composite Panel (ACP) external facades integrated with illuminated 3D acrylic letters and signage.',
        keyDeliverables: [
          'CNC routed acrylic letters with Samsung LED modules',
          'Structural steel support framing design',
          'Weather-sealed ACP panel facade installation',
          'Intelligent automated timer integration'
        ],
        targetSectors: ['Corporate HQ Offices', 'Automobile Showrooms', 'Retail Chains & Banks'],
        metrics: [
          { label: 'Facades Erected', value: '150+' },
          { label: 'LED Lifespan', value: '50k Hours' },
          { label: 'Warranty Period', value: '5 Years' }
        ]
      },
      {
        id: 'board-banners',
        title: 'Enterprise Board Banners',
        description: 'Large-scale advertising board structures, flex banners, backlit/frontlit banners, and wall wraps for major brand campaigns and site markings.',
        keyDeliverables: [
          'Heavy gauge structural steel boards',
          'High-definition solvent and UV printing',
          'Backlit LED profile illumination',
          'On-site structural safety certificates'
        ],
        targetSectors: ['Real Estate Developers', 'FMCG Brands', 'Infrastructure Project Sites'],
        metrics: [
          { label: 'Printing Capacity', value: '50,000 sq.ft./mo' },
          { label: 'Max Width Capability', value: '20 feet seamless' }
        ]
      },
      {
        id: 'gantry-signages',
        title: 'Overhead Gantry Fabrication',
        description: 'Robust, structural-steel gantries installed across highways, toll lanes, and industrial gates, customized with high-visibility sign boards and reflective vinyl overlays.',
        keyDeliverables: [
          'Structural engineering load calculations',
          'Heavy foundation civil works',
          'Hot-dip galvanized steel framing',
          'Retro-reflective Class-A signboard sheets'
        ],
        targetSectors: ['Toll Road Operators', 'National Highways', 'Industrial Parks & Ports'],
        metrics: [
          { label: 'Gantries Deployed', value: '35+' },
          { label: 'Wind Tolerance', value: '180 km/h' }
        ]
      }
    ]
  },
  {
    id: 'civil-structures',
    title: 'Civil Structures',
    icon: 'Hammer',
    description: 'General civil construction works, heavy structural steel fabrication, and physical perimeter protection barriers designed for heavy enterprise and logistics infrastructure.',
    services: [
      {
        id: 'general-civil',
        title: 'General Civil Engineering',
        description: 'Reinforced concrete foundation works, retaining structures, equipment bases, drainage trenches, and pathway installations for factory and warehouse campuses.',
        keyDeliverables: [
          'Excavation and soil stabilization works',
          'PCC and RCC reinforcement foundations',
          'Heavy vehicle grade concrete roads',
          'Stormwater management trenches'
        ],
        targetSectors: ['Logistics Parks', 'Manufacturing Facilities', 'Substations & Utility Sites'],
        metrics: [
          { label: 'Concrete Poured', value: '8,500 m³+' },
          { label: 'Average Concrete Grade', value: 'M30 - M40' }
        ]
      },
      {
        id: 'steel-fabrication',
        title: 'Heavy Metal & Steel Fabrication',
        description: 'Fabrication of steel structures, industrial trusses, sheds, warehouse structural framing, security barriers, and pipe supports.',
        keyDeliverables: [
          'MIG/ARC welding as per AWS standards',
          'Structural steel column and truss fabrication',
          'Corrugated profile sheet roofing systems',
          'Anti-rust red oxide and final coat painting'
        ],
        targetSectors: ['Warehousing Firms', 'Chemical & Power Plants', 'Infrastructure Projects'],
        metrics: [
          { label: 'Steel Processed', value: '1,200 Tons' },
          { label: 'Welding Standards', value: 'AWS D1.1 Certified' }
        ]
      },
      {
        id: 'gates-barriers',
        title: 'Gates & Perimeter Barriers',
        description: 'Custom heavy-duty manual and automated gates, perimeter fencing, sliding gates, and safety crash barriers for warehouses and industrial boundaries.',
        keyDeliverables: [
          'Cantilever automated sliding gates',
          'High-security concertina wire fencing',
          'W-beam highway crash barriers',
          'Heavy steel bollards and entry turnstiles'
        ],
        targetSectors: ['Defense Establishments', 'Industrial Parks', 'Secure Storage Depots'],
        metrics: [
          { label: 'Gates Installed', value: '500+' },
          { label: 'Crash Rating Standard', value: 'K4/K8 Ready' }
        ]
      }
    ]
  },
  {
    id: 'enterprise-manpower',
    title: 'Enterprise Manpower',
    icon: 'Users',
    description: 'Deployment of specialized, compliant technical personnel, security forces, and mechanized deep cleaning staff to sustain large-scale continuous facility operations.',
    services: [
      {
        id: 'manpower-supply',
        title: 'Technical & Skilled Manpower',
        description: 'Provision of certified and trained technicians, fitters, certified structural welders, warehouse loaders, and ground supervisors.',
        keyDeliverables: [
          'ESIC, PF, and complete labor law compliance',
          'Safety induction and basic PPE training',
          'Shift rotation and replacement management',
          'Biometric attendance and payroll management'
        ],
        targetSectors: ['Automobile Plants', 'Distribution Hubs', 'Contracting Giants'],
        metrics: [
          { label: 'Active Personnel', value: '1,200+' },
          { label: 'Compliance Rating', value: '100% Audit Passed' }
        ]
      },
      {
        id: 'security-services',
        title: 'Industrial & Asset Security',
        description: 'Trained security personnel, guard posts, and access control patrols safeguarding physical assets, materials, and corporate headquarters.',
        keyDeliverables: [
          'Fully vetted and licensed security guards (DGR/PASARA)',
          'Gate entry log systems and bag checks',
          'Fire safety and emergency evacuation drills',
          'Night patrol teams and quick response coordination'
        ],
        targetSectors: ['Corporate Parks', 'Commercial Office Hubs', 'Vast Storage Yards'],
        metrics: [
          { label: 'Assets Guarded', value: '₹500Cr+' },
          { label: 'Emergency Response', value: '< 3 Minutes' }
        ]
      },
      {
        id: 'corporate-cleaning',
        title: 'Corporate Cleaning & Maintenance',
        description: 'Mechanized deep cleaning of offices and warehouses, facade glass cleaning, waste management, and ongoing sanitary maintenance.',
        keyDeliverables: [
          'High-pressure facade glass and ACP cleaning',
          'Mechanized scrubber-dryer floor cleaning',
          'Disinfection and sanitization protocols',
          'Eco-friendly waste disposal management'
        ],
        targetSectors: ['Corporate HQs', 'Multi-specialty Hospitals', 'Manufacturing Facilities'],
        metrics: [
          { label: 'Area Maintained', value: '2M+ sq.ft.' },
          { label: 'Mechanized Fleet', value: '45+ Units' }
        ]
      }
    ]
  }
];

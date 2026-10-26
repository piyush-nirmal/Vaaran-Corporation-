import type { ServiceCategory } from '../types/domain';

export const servicesData: ServiceCategory[] = [
  {
    id: 'commercial-industrial-painting',
    title: 'Industrial & Specialized Painting',
    icon: 'Paintbrush',
    description: 'Long-lasting protective paints and coatings for bridges, flyovers, highways, and industrial facilities that stop rust and weather damage.',
    services: [
      {
        id: 'marine-offshore-coating',
        title: 'Bridge & Coastal Protective Coating',
        description: 'Tough protective coatings for sea links, coastal bridges, and tall structures exposed to harsh salt air, humidity, and weather.',
        keyDeliverables: [
          'Rust & salt-resistant protective coating',
          'Safe execution up to 100 ft above water',
          'Corrosion protection primers & sealers',
          'Trained safety crew with certified gear'
        ],
        targetSectors: ['Sea Links & Coastal Bridges', 'Port Authorities', 'Highway Concessions'],
        metrics: [
          { label: 'Work Height', value: 'Up to 100 Ft' },
          { label: 'Quality', value: 'Marine Grade' },
          { label: 'Protection', value: '25+ Years' }
        ]
      },
      {
        id: 'bridge-flyover-coating',
        title: 'Flyover & Concrete Protective Painting',
        description: 'Protective coatings that seal concrete and steel on flyovers and bridges, preventing cracks, water damage, and chemical wear.',
        keyDeliverables: [
          'Anti-carbonation protective paint for concrete',
          'Rust prevention for steel beams & piers',
          'Waterproof sealants for bridge joints',
          'Durable finish that withstands heavy traffic'
        ],
        targetSectors: ['National Highways (NHAI)', 'State PWDs & MSRDC', 'Metro Rail Projects'],
        metrics: [
          { label: 'Flyovers Coated', value: '29 Flyovers' },
          { label: 'Protection', value: 'Heavy Duty' },
          { label: 'Durability', value: '10+ Years' }
        ]
      },
      {
        id: 'highway-divider-commercial-painting',
        title: 'Highway Dividers & Building Painting',
        description: 'High-visibility painting for road dividers and medians, plus full exterior and interior painting for commercial buildings and factories.',
        keyDeliverables: [
          'Reflective paints for road medians & kerbs',
          'Exterior & interior painting for commercial complexes',
          'Heavy-duty floor epoxy for warehouses & plants',
          'All-weather protective outdoor coatings'
        ],
        targetSectors: ['Highway Boards', 'Commercial Real Estate', 'Industrial Facilities'],
        metrics: [
          { label: 'Coverage', value: 'Pan-India' },
          { label: 'Visibility', value: 'High Reflective' },
          { label: 'Finish', value: 'Weather Proof' }
        ]
      }
    ]
  },
  {
    id: 'civil-works-infrastructure',
    title: 'Civil Works & Road Construction',
    icon: 'Hammer',
    description: 'Complete civil construction—from toll plazas and arterial roads to reinforced concrete foundations and boundary walls.',
    services: [
      {
        id: 'toll-plaza-highway-civil',
        title: 'Toll Plaza & Highway Civil Works',
        description: 'Complete construction of multi-lane toll plazas, toll booths, heavy concrete approach slabs, and highway drainage systems.',
        keyDeliverables: [
          'Toll plaza booths & canopy foundations',
          'Heavy-duty concrete pavement slabs',
          'Highway lane leveling & culvert work',
          'Underground utility channels & rainwater drainage'
        ],
        targetSectors: ['Highway Developers', 'Toll Operators', 'National Highways'],
        metrics: [
          { label: 'Sites Delivered', value: 'Delhi & Expressways' },
          { label: 'Concrete', value: 'High Strength' },
          { label: 'Delivery', value: 'Turnkey Contract' }
        ]
      },
      {
        id: 'rcc-structural-concrete',
        title: 'Reinforced Concrete & Foundations',
        description: 'Strong reinforced concrete works, support columns, foundation footings, and solid boundary walls built to last decades.',
        keyDeliverables: [
          'Reinforced concrete (RCC) casting & framework',
          'Heavy machine foundation bases',
          'Strong perimeter boundary & retaining walls',
          'Full strength and quality testing on site'
        ],
        targetSectors: ['Metro Rail', 'Industrial Parks', 'Municipal Corporations'],
        metrics: [
          { label: 'Projects Done', value: '₹30+ Crore' },
          { label: 'Standards', value: 'IS / IRC Codes' },
          { label: 'Quality Test', value: '100% Passed' }
        ]
      },
      {
        id: 'road-construction-pavers',
        title: 'Road Paving, Repairs & Interlocking Pavers',
        description: 'Building new roads, fixing potholes and cracks, laying smooth asphalt, and installing heavy-duty interlocking paver blocks.',
        keyDeliverables: [
          'New road construction & asphalt paving',
          'Pothole repairs, crack sealing & maintenance',
          'Heavy interlocking paver blocks for heavy vehicles',
          'Smooth surface plastering & kerb alignment'
        ],
        targetSectors: ['Smart Cities', 'Industrial Areas', 'Public Works'],
        metrics: [
          { label: 'Paver Load', value: 'Heavy Duty 80-100mm' },
          { label: 'Road Uptime', value: '99.8%' },
          { label: 'Delivery', value: 'Zero Rework' }
        ]
      }
    ]
  },
  {
    id: 'structural-fabrication-safety',
    title: 'Steel Fabrication & Safety Netting',
    icon: 'Layers',
    description: 'Heavy steel structures, bridge safety nets, perimeter fencing, and protective metal enclosures built with certified welding.',
    services: [
      {
        id: 'heavy-structural-steel',
        title: 'Heavy Structural Steel Work',
        description: 'Custom steel fabrication of overhead highway gantries, toll plaza frames, industrial factory sheds, and heavy support trusses.',
        keyDeliverables: [
          'Steel cutting, shaping & precision assembly',
          'Certified high-strength welding',
          'Overhead highway sign gantries & frames',
          'Rust-proof galvanized & primer finish'
        ],
        targetSectors: ['Expressways', 'Manufacturing Plants', 'Metro Depots'],
        metrics: [
          { label: 'Welding', value: 'Certified Grade' },
          { label: 'Steel Type', value: 'High Strength IS' },
          { label: 'Wind Resistance', value: '180 km/h' }
        ]
      },
      {
        id: 'marine-high-altitude-netting',
        title: 'Bridge & High-Altitude Safety Nets',
        description: 'Tested safety netting systems installed under marine bridges and high-rise construction to protect workers and catch debris.',
        keyDeliverables: [
          'Heavy-duty safety nets built for high winds',
          'Installed securely by trained height technicians',
          'Tested anchor points & load-bearing cables',
          'Quick setup to keep work moving safely'
        ],
        targetSectors: ['Sea Links & Bridges', 'Tall Construction', 'Transit Corridors'],
        metrics: [
          { label: 'Safety Record', value: 'Zero Incidents' },
          { label: 'Standard', value: 'OSHA / EN Safety' },
          { label: 'Riggers', value: 'Certified Experts' }
        ]
      },
      {
        id: 'fencing-grills-enclosures',
        title: 'Protective Fencing & Safety Grills',
        description: 'Strong boundary fencing, security grills, and metal barriers to secure highways, railway lines, and industrial facilities.',
        keyDeliverables: [
          'Strong perimeter boundary fencing',
          'Heavy-duty metal grills & equipment enclosures',
          'Highway divider anti-glare & safety screens',
          'Rust-proof powder-coated & galvanized finish'
        ],
        targetSectors: ['Highways & Railways', 'Power Stations', 'Corporate Campuses'],
        metrics: [
          { label: 'Perimeter', value: 'Full Boundary' },
          { label: 'Coating', value: 'Galvanized' },
          { label: 'Strength', value: 'Industrial Spec' }
        ]
      }
    ]
  },
  {
    id: 'urban-roadway-beautification',
    title: 'Road & Urban Beautification',
    icon: 'Layers',
    description: 'Making roads, medians, and public areas cleaner and greener through reflective painting, garden development, and tree planting.',
    services: [
      {
        id: 'highway-divider-beautification',
        title: 'Highway & City Divider Beautification',
        description: 'Improving road appearance with reflective kerb painting, decorative planter boxes, and green medians that make driving safer.',
        keyDeliverables: [
          'Reflective kerb and divider painting',
          'Attractive road medians with green plants',
          'Durable paint that stays bright in rain & sun',
          'Ongoing cleaning and touch-up maintenance'
        ],
        targetSectors: ['State Road Corporations (MSRDC)', 'City Municipalities', 'Smart City Projects'],
        metrics: [
          { label: 'Trusted Client', value: 'MSRDC Verified' },
          { label: 'Locations', value: 'Busy Highways' },
          { label: 'Look', value: 'Clean & Modern' }
        ]
      },
      {
        id: 'garden-park-development',
        title: 'Public Parks & Garden Landscaping',
        description: 'End-to-end development of public parks, walking tracks, garden seating, flower beds, and green public open spaces.',
        keyDeliverables: [
          'Park planning, smooth walking tracks & seating',
          'Tree planting, green lawns & flowering plants',
          'Underground watering lines & pathway pavers',
          'Clean, sustainable community green spaces'
        ],
        targetSectors: ['City Municipalities', 'Township Builders', 'Public Parks'],
        metrics: [
          { label: 'Service', value: 'Start-to-Finish' },
          { label: 'Walkways', value: 'Durable Pavers' },
          { label: 'Environment', value: 'Eco-Friendly' }
        ]
      },
      {
        id: 'roadside-restoration',
        title: 'Roadside Cleanup & Maintenance',
        description: 'Restoring damaged roadside verges, clearing rainwater gutters, repairing curbs, and keeping road corridors neat and safe.',
        keyDeliverables: [
          'Fixing damaged roadside edges & slopes',
          'Cleaning and repairing rainwater drainage curbs',
          'Long-term road upkeep & maintenance contracts',
          'Fast-response repair teams on call'
        ],
        targetSectors: ['Highway Authorities', 'State PWDs', 'Toll Road Operators'],
        metrics: [
          { label: 'Response', value: 'Under 24 Hours' },
          { label: 'Durability', value: 'All Seasons' },
          { label: 'Care', value: 'Year-Round' }
        ]
      }
    ]
  }
];

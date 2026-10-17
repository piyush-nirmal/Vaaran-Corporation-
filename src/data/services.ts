import type { ServiceCategory } from '../types/domain';

export const servicesData: ServiceCategory[] = [
  {
    id: 'commercial-industrial-painting',
    title: 'Commercial, Industrial & Specialized Painting',
    icon: 'Paintbrush',
    description: 'High-performance protective coatings, marine-grade systems, anti-carbonation barriers, and specialized commercial painting across critical transit corridors and industrial assets.',
    services: [
      {
        id: 'marine-offshore-coating',
        title: 'Marine & Offshore High-Risk Coating',
        description: 'Specialized protective coating engineered for extreme marine salinity, high-humidity offshore zones, and high-altitude structures up to 100 ft above sea level.',
        keyDeliverables: [
          'High-salinity barrier coating systems (ISO 12944 C5-M)',
          '100 Ft above sea level marine execution',
          'Offshore corrosion inhibitors & zinc primers',
          'High-risk access rigging & certified safety protocols'
        ],
        targetSectors: ['Sea Links & Maritime Authorities', 'Port Trusts', 'Coastal Infrastructure'],
        metrics: [
          { label: 'Elevation', value: '100 Ft Above Sea' },
          { label: 'Standard', value: 'ISO 12944 C5' },
          { label: 'Corrosion Shield', value: '25+ Years' }
        ]
      },
      {
        id: 'bridge-flyover-coating',
        title: 'Bridge Protective / Anti-Carbonation & Flyover Coating',
        description: 'Heavy protective coatings and anti-carbonation concrete sealants preventing chemical ingress, moisture damage, and rebar oxidation across bridges, flyovers, and elevated corridors.',
        keyDeliverables: [
          'Anti-carbonation protective coatings for RCC structures',
          'Bridge protective / anti-corrosive painting',
          'Flyover protective coating & elastomeric waterproofing',
          'Expansion joint sealing and weather-resistant elastomeric topcoats'
        ],
        targetSectors: ['National Highway Authorities', 'MSRDC & State PWDs', 'Metro Rail Corporations'],
        metrics: [
          { label: 'Flyovers Coated', value: '29 Flyovers' },
          { label: 'Barrier Rating', value: 'Class A' },
          { label: 'Durability', value: '10+ Years' }
        ]
      },
      {
        id: 'highway-divider-commercial-painting',
        title: 'Highway Divider & Commercial Building Painting',
        description: 'Precision painting of highway dividers, medians, commercial complexes, and industrial workspaces with high-visibility, anti-abrasive, and weather-resistant coatings.',
        keyDeliverables: [
          'Highway divider & median reflective painting',
          'Commercial building exterior & interior painting',
          'Industrial space coating & protective epoxy flooring',
          'Outdoor structural painting for weather-exposed frameworks'
        ],
        targetSectors: ['State Highway Boards', 'Commercial Real Estate', 'Industrial Facilities'],
        metrics: [
          { label: 'Coverage', value: 'Pan-India' },
          { label: 'Finish Standard', value: 'Heavy Duty' },
          { label: 'Reflectivity', value: 'High Vis' }
        ]
      }
    ]
  },
  {
    id: 'civil-works-infrastructure',
    title: 'Civil Works & Infrastructure Construction',
    icon: 'Hammer',
    description: 'Turnkey civil engineering and construction capabilities covering toll plazas, highway works, reinforced concrete structures, roads, plastering, and perimeter foundations.',
    services: [
      {
        id: 'toll-plaza-highway-civil',
        title: 'Toll Plaza Construction & Highway Civil Works',
        description: 'Comprehensive civil construction of multi-lane highway toll plazas, toll concourse slabs, administrative buildings, and heavy arterial highway civil packages.',
        keyDeliverables: [
          'Toll plaza construction & canopy civil foundations',
          'Highway civil works, lane grading & culvert works',
          'Heavy-duty concrete pavement slabs (M40 grade)',
          'Integrated drainage channels and utility ducting'
        ],
        targetSectors: ['Highway Concessionaires', 'NHAI Contractors', 'Toll Infrastructure Operators'],
        metrics: [
          { label: 'Delivered Sites', value: 'Delhi Toll & Corridors' },
          { label: 'Concrete Grade', value: 'M35 - M40' },
          { label: 'Execution', value: 'Turnkey' }
        ]
      },
      {
        id: 'rcc-structural-concrete',
        title: 'RCC Works & Structural Concrete Work',
        description: 'Engineered reinforced cement concrete (RCC) works, structural columns, foundation footings, and load-bearing concrete assemblies for critical transit and civic infrastructure.',
        keyDeliverables: [
          'Reinforced cement concrete (RCC) framework & pouring',
          'Structural concrete work for transit and industrial bases',
          'Boundary wall construction & perimeter retaining structures',
          'Vibration-resistant foundation pads and equipment bases'
        ],
        targetSectors: ['Metro Rail Infrastructure', 'Industrial Parks', 'Municipal Corporations'],
        metrics: [
          { label: 'Projects Executed', value: '₹30+ Cr' },
          { label: 'Compliance', value: 'IS 456 / IRC' },
          { label: 'QA/QC Audit', value: '100% Passed' }
        ]
      },
      {
        id: 'road-construction-pavers',
        title: 'Road Construction, Maintenance & Paver Blocks',
        description: 'Full-spectrum roadway construction, periodic highway resurfacing and maintenance, specialized structural plastering, and heavy interlocking paver block installation.',
        keyDeliverables: [
          'Road construction & arterial road paving',
          'Periodic road maintenance, patch repair & crack sealing',
          'High-density interlocking paver block installation',
          'High-grade plastering & cosmetic masonry finishing'
        ],
        targetSectors: ['Smart Cities', 'Industrial Corridors', 'Public Works Departments'],
        metrics: [
          { label: 'Paver Load', value: 'Heavy Duty 80-100mm' },
          { label: 'Corridor Uptime', value: '99.8%' },
          { label: 'Quality', value: 'Zero Rework' }
        ]
      }
    ]
  },
  {
    id: 'structural-fabrication-safety',
    title: 'Structural Fabrication & Safety Netting',
    icon: 'Layers',
    description: 'Heavy structural steel fabrication, high-altitude and marine safety net installations, perimeter fencing, safety grills, and customized metal enclosures.',
    services: [
      {
        id: 'heavy-structural-steel',
        title: 'Heavy Structural Steel Fabrication',
        description: 'Precision structural steel fabrication of highway trusses, toll plaza frames, industrial sheds, and support structures built in accordance with AWS and BIS standards.',
        keyDeliverables: [
          'Heavy structural steel fabrication & precision assembly',
          'Certified MIG/ARC welding as per AWS D1.1 standards',
          'Overhead gantry framing and cantilever structures',
          'Hot-dip galvanized and anti-rust primer finish'
        ],
        targetSectors: ['National Expressways', 'Heavy Manufacturing Plants', 'Metro Depots'],
        metrics: [
          { label: 'Welding Standard', value: 'AWS D1.1 Certified' },
          { label: 'Structural Steel', value: 'IS 2062 Grade' },
          { label: 'Wind Tolerance', value: '180 km/h' }
        ]
      },
      {
        id: 'marine-high-altitude-netting',
        title: 'Marine & High-Altitude Safety Net Systems',
        description: 'Certified fall-prevention and safety netting systems deployed on marine bridges, elevated transit viaducts, and high-altitude civil construction sites.',
        keyDeliverables: [
          'Marine safety net systems engineered for coastal wind shear',
          'High-altitude safety net installation & anchor load testing',
          'Fall-arrest debris nets complying with EN 1263-1',
          'Rapid mobilization by certified high-altitude technicians'
        ],
        targetSectors: ['Sea Links & Coastal Bridges', 'High-Rise Infrastructure', 'Transit Corridors'],
        metrics: [
          { label: 'Safety Record', value: 'Zero LTI' },
          { label: 'Standard', value: 'EN 1263 / OSHA' },
          { label: 'Technicians', value: 'High-Altitude Certified' }
        ]
      },
      {
        id: 'fencing-grills-enclosures',
        title: 'Safety Grills, Protective Fencing & Metal Enclosures',
        description: 'Fabrication and on-site erection of heavy-duty safety grills, perimeter fencing, protective metal enclosures, and anti-intrusion physical security barriers.',
        keyDeliverables: [
          'Perimeter fabrication & security boundary fencing',
          'Custom heavy-duty safety grills and metal enclosures',
          'Protective fencing for highways, railways, and utility sites',
          'Anti-corrosive powder-coated and galvanized barrier finishes'
        ],
        targetSectors: ['Highway Corridors', 'Utility Substations', 'Corporate Campuses'],
        metrics: [
          { label: 'Installation', value: 'Perimeter Wide' },
          { label: 'Corrosion Shield', value: 'Galvanized' },
          { label: 'Security Grade', value: 'Industrial Spec' }
        ]
      }
    ]
  },
  {
    id: 'urban-roadway-beautification',
    title: 'Urban & Roadway Beautification',
    icon: 'Sparkles',
    description: 'Transforming public roadways, city dividers, gardens, and roadside corridors through integrated landscaping, divider beautification, and civic restoration.',
    services: [
      {
        id: 'highway-divider-beautification',
        title: 'Highway & City Divider Beautification',
        description: 'Aesthetic enhancement of major highway corridors and urban dividers through reflective median painting, landscaping, and architectural median treatments.',
        keyDeliverables: [
          'Highway beautification & median curb stone painting',
          'City divider beautification with durable reflective finishes',
          'Decorative planter installations and green median integration',
          'Ongoing infrastructure maintenance and periodic upkeep'
        ],
        targetSectors: ['MSRDC', 'Municipal Corporations', 'Smart City Projects'],
        metrics: [
          { label: 'Key Client', value: 'MSRDC Verified' },
          { label: 'Corridors', value: 'High-Density Routes' },
          { label: 'Aesthetics', value: 'Modern Civic Finish' }
        ]
      },
      {
        id: 'garden-park-development',
        title: 'Garden Infrastructure & Park Development',
        description: 'End-to-end development of public parks, garden infrastructure, pedestrian walking tracks, civil garden structures, and urban green spaces.',
        keyDeliverables: [
          'Garden infrastructure planning, civil pathways & seating',
          'Park development, boundary civil works & illuminated features',
          'Irrigation trenches, paver walkways & recreational hardscaping',
          'Sustainable civic landscape engineering'
        ],
        targetSectors: ['Urban Local Bodies', 'Township Developers', 'Public Parks Authorities'],
        metrics: [
          { label: 'Development', value: 'End-to-End' },
          { label: 'Civil Hardscaping', value: 'Grade-A Pavers' },
          { label: 'Green Index', value: 'Eco-Compliant' }
        ]
      },
      {
        id: 'roadside-restoration',
        title: 'Roadside Restoration & Civic Infrastructure Maintenance',
        description: 'Comprehensive restoration of roadside verges, slope stabilization, stormwater curb upkeep, and aesthetic rehabilitation along national and state routes.',
        keyDeliverables: [
          'Roadside restoration and soil stabilization civil works',
          'Stormwater curb rehabilitation and cosmetic repair',
          'Long-term corridor maintenance & beautification contracts',
          'Rapid response repair teams for damaged dividers and kerbs'
        ],
        targetSectors: ['National Highway Authorities', 'State PWDs', 'Toll Operators'],
        metrics: [
          { label: 'Response', value: '< 24 Hours' },
          { label: 'Durability', value: 'Multi-Season' },
          { label: 'Compliance', value: 'IRC Standards' }
        ]
      }
    ]
  }
];

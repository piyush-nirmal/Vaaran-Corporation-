import type { ServiceCategory } from '../types/domain';

export const servicesData: ServiceCategory[] = [
  {
    id: 'commercial-industrial-painting',
    title: 'Commercial, Industrial & Specialized Painting',
    icon: 'Paintbrush',
    description: 'High-risk protective coatings, anti-carbonation treatments, and industrial finishing engineered for high-altitude, marine, and high-stress transport corridors.',
    services: [
      {
        id: 'marine-offshore-coating',
        title: 'Marine & Offshore High-Risk Coating',
        description: 'Specialized protective coating applied up to 100 ft above sea level on marine structures, sea links, and offshore installations.',
        keyDeliverables: [
          'High-elevation marine protective coatings',
          'Saltwater spray anti-corrosion barrier',
          'Epoxy & polyurethane multi-coat systems',
          'MSRDC & Sea Link certified application'
        ],
        targetSectors: ['Sea Link Infrastructures', 'Marine Authorities', 'Offshore Terminals'],
        metrics: [
          { label: 'Max Elevation', value: '100 Ft Above Sea' },
          { label: 'Saltwater Rating', value: 'Class C5-M' }
        ]
      },
      {
        id: 'bridge-protective-painting',
        title: 'Bridge Protective / Anti-Carbonation Painting',
        description: 'Advanced anti-carbonation and protective concrete painting for major river bridges, railway bridges, and highway viaducts.',
        keyDeliverables: [
          'Anti-carbonation protective sealants',
          'Concrete breathability & crack bridging',
          'UV-stable colorfast topcoats',
          'Surface profiling and grit preparation'
        ],
        targetSectors: ['Highway Authorities', 'Bridge Contractors', 'Public Works Departments'],
        metrics: [
          { label: 'Major Bridges', value: 'Goa & Sea Link' },
          { label: 'Protection Lifespan', value: '10+ Years' }
        ]
      },
      {
        id: 'flyover-protective-coating',
        title: 'Flyover Protective Coating',
        description: 'Heavy-duty protective coating executed across 29+ urban flyovers and elevated road corridors to prevent chemical ingress and weathering.',
        keyDeliverables: [
          'Algae and fungus resistant finishes',
          'High-visibility hazard stripe painting',
          'Concrete hydro-phobic sealing',
          'L&T Vashi Flyover standard execution'
        ],
        targetSectors: ['Municipal Corporations', 'Transit Authorities', 'EPC Contractors'],
        metrics: [
          { label: 'Flyovers Coated', value: '29+ Completed' },
          { label: 'Key Client', value: 'L&T & MSRDC' }
        ]
      },
      {
        id: 'highway-divider-painting',
        title: 'Highway Divider & Median Painting',
        description: 'High-visibility retro-reflective median and kerb painting for national expressways and urban arterial roads.',
        keyDeliverables: [
          'Thermoplastic & reflective paint application',
          'Divider barrier cleaning & prep',
          'Night-visibility compliant kerb coding',
          'Expressway median maintenance'
        ],
        targetSectors: ['Expressway Authorities', 'Highway Operators'],
        metrics: [
          { label: 'Corridors Covered', value: '100s of KM' },
          { label: 'Visibility Rating', value: 'Class A' }
        ]
      },
      {
        id: 'commercial-industrial-building',
        title: 'Commercial Building & Industrial Space Coating',
        description: 'Complete internal and exterior protective painting for high-rise commercial headquarters, industrial complexes, and manufacturing facilities.',
        keyDeliverables: [
          'High-durability weather-proof exterior coats',
          'Industrial epoxy floor coatings',
          'Fire-retardant structural steel paint',
          'High-rise boom lift & cradle painting'
        ],
        targetSectors: ['TATA Group', 'Godrej', 'Amul Corporate Yards'],
        metrics: [
          { label: 'Commercial Space', value: 'Millions sq.ft.' },
          { label: 'Corporate Clients', value: 'TATA & Godrej' }
        ]
      }
    ]
  },
  {
    id: 'civil-works-construction',
    title: 'Civil Works & Infrastructure Construction',
    icon: 'Hammer',
    description: 'Comprehensive civil engineering execution specializing in toll plazas, highway developments, boundary barriers, and heavy RCC concrete structures.',
    services: [
      {
        id: 'toll-plaza-construction',
        title: 'Toll Plaza Construction & Civil Works',
        description: 'Complete civil construction of highway toll plazas, canopy foundations, toll lanes, and administrative buildings for major infrastructure operators.',
        keyDeliverables: [
          'Toll lane rigid concrete pavement (PQC)',
          'Toll booth civil foundations & islands',
          'MEP Infrastructure compliant specs',
          'Heavy vehicle grade reinforced slabs'
        ],
        targetSectors: ['MEP Infrastructure', 'Highway Operators', 'National Toll Corridors'],
        metrics: [
          { label: 'Key Project', value: 'Delhi Toll Infra' },
          { label: 'Concrete Grade', value: 'M40 High-Strength' }
        ]
      },
      {
        id: 'highway-civil-works',
        title: 'Highway Civil Works & Road Maintenance',
        description: 'Execution of highway earthworks, roadside stormwater drainage, culvert construction, and asphalt/concrete pavement maintenance.',
        keyDeliverables: [
          'RCC stormwater drain construction',
          'Retaining wall & slope stabilization',
          'Paver block installation & kerb casting',
          'Highway surface restoration'
        ],
        targetSectors: ['Apco Infratech', 'Roadway Solutions', 'Pragati Infra'],
        metrics: [
          { label: 'Project Portfolio', value: '₹30+ Crore' },
          { label: 'Compliance', value: 'NHAI Approved' }
        ]
      },
      {
        id: 'boundary-wall-rcc',
        title: 'Boundary Wall & Structural Concrete Work',
        description: 'Precast and cast-in-situ pre-stressed RCC boundary walls, perimeter retention structures, and industrial facility foundations.',
        keyDeliverables: [
          'Precast RCC panel boundary wall setup',
          'Cast-in-situ reinforced concrete walls',
          'Structural concrete beam & column casting',
          'Plastering & structural curing'
        ],
        targetSectors: ['Industrial Parks', 'Commercial Yards', 'Government Terminals'],
        metrics: [
          { label: 'Perimeter Built', value: '50,000+ Meters' },
          { label: 'Safety Compliance', value: 'OSHA Standard' }
        ]
      }
    ]
  },
  {
    id: 'structural-fabrication-safety',
    title: 'Structural Fabrication & Safety Netting',
    icon: 'Layers',
    description: 'Heavy structural steel fabrication, high-elevation gantry erection, and specialized marine & high-altitude safety net installations.',
    services: [
      {
        id: 'heavy-steel-fabrication',
        title: 'Heavy Structural Steel Fabrication',
        description: 'Design, cutting, welding, and erection of structural steel frames, gantries, overhead sign supports, and industrial sheds.',
        keyDeliverables: [
          'AWS certified structural MIG/TIG welding',
          'Overhead highway sign gantry fabrication',
          'Hot-dip galvanized anti-rust finishing',
          'Load-bearing structural steel trusses'
        ],
        targetSectors: ['HCC', 'NCC Limited', 'HMM Infra Limited'],
        metrics: [
          { label: 'Steel Processed', value: 'Thousands of Tons' },
          { label: 'Weld Certification', value: '100% X-Ray Passed' }
        ]
      },
      {
        id: 'marine-safety-nets',
        title: 'Marine & High-Altitude Safety Net Systems',
        description: 'Engineering and deployment of high-capacity safety netting systems for marine bridges, sea links, and high-altitude elevated works.',
        keyDeliverables: [
          'High-tensile marine grade safety netting',
          'High-altitude safety technician installation',
          'Debris catch nets & personnel protection',
          'Sea Link high-wind certified rigs'
        ],
        targetSectors: ['Sea Link Authorities', 'High-Rise Construction Contractors'],
        metrics: [
          { label: 'Max Work Elevation', value: '180 Ft Elevation' },
          { label: 'Safety Record', value: 'Zero Hazard Log' }
        ]
      },
      {
        id: 'safety-grills-fencing',
        title: 'Safety Grills, Fencing & Perimeter Enclosures',
        description: 'Fabrication of heavy security grills, crash barriers, metal enclosures, and perimeter security fencing for transit and commercial sites.',
        keyDeliverables: [
          'Heavy gauge steel security grills',
          'Anti-climb perimeter mesh fencing',
          'Metal protective enclosures & gates',
          'Custom architectural metal fabrication'
        ],
        targetSectors: ['Metro Rail Corridors', 'Substations', 'Corporate HQs'],
        metrics: [
          { label: 'Enclosures Installed', value: '500+ Units' },
          { label: 'Material Standard', value: 'IS 2062 Grade Steel' }
        ]
      }
    ]
  },
  {
    id: 'urban-roadway-beautification',
    title: 'Urban & Roadway Beautification',
    icon: 'Users',
    description: 'Transforming city infrastructure through highway beautification, median enhancement, garden development, and urban restoration.',
    services: [
      {
        id: 'highway-divider-beautification',
        title: 'Highway & City Divider Beautification',
        description: 'Comprehensive greening and aesthetic upgrading of central medians, city dividers, and traffic islands across major metropolitan corridors.',
        keyDeliverables: [
          'Architectural planter & curb design',
          'Landscape planting & automatic drip setup',
          'Decorative stone & paver integration',
          'Ongoing municipal horticulture care'
        ],
        targetSectors: ['MSRDC', 'Municipal Corporations', 'Smart City Missions'],
        metrics: [
          { label: 'Key Client', value: 'MSRDC' },
          { label: 'Corridors Transformed', value: '25+ Locations' }
        ]
      },
      {
        id: 'park-garden-restoration',
        title: 'Garden Infrastructure & Park Development',
        description: 'Civil and structural development of roadside gardens, public parks, recreational spaces, and urban green zones.',
        keyDeliverables: [
          'Park boundary fencing & decorative gates',
          'Walkway paver blocks & lighting pedestals',
          'Garden retaining walls & seating setups',
          'Urban restoration & maintenance'
        ],
        targetSectors: ['Urban Planning Boards', 'Civic Bodies'],
        metrics: [
          { label: 'Public Parks Built', value: '15+ Projects' },
          { label: 'Area Covered', value: '100k+ sq.m.' }
        ]
      }
    ]
  }
];

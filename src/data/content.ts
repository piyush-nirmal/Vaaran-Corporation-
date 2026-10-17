// Central verified content, stats, specs, and configuration for Varan Corporation
// Work is Worship (कर्म ही पूजा है) - Founded 1997

import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import transitCoatingImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import sprayRigImg from '../assets/images/machinery_airless_spray_1791032370111.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';
import expresswayDamImg from '../assets/images/hero_apco_expressway_dam_1791896243948.jpg';
import tunnelViaductImg from '../assets/images/hero_transit_tunnel_viaduct_1791896269073.jpg';

export interface ClientPartner {
  id: string;
  name: string;
  category: 'Government' | 'Infrastructure' | 'Corporate';
  placeholderText: string;
}

export interface LeadershipQuote {
  quote: string;
  author: string;
  role: string;
  credentials: string;
  imagePlaceholder: string;
}

export interface MetricProof {
  label: string;
  value: string;
  unit: string;
  subtext: string;
}

export interface CertificationChip {
  id: string;
  name: string;
  authority: string;
  scope: string;
}

export interface DivisionHighlight {
  id: string;
  title: string;
  summary: string;
  highlightMetric: string;
  isFlagship?: boolean;
}

export interface HeroMilestone {
  id: string;
  name: string;
  corridor: string;
  coatingSpec: string;
  metricLabel: string;
  metricValue: string;
  safetyStatus: string;
  image: string;
  stage: string;
  isVerified?: boolean;
  photoCaption: string;
  client?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'coating' | 'blasting' | 'welding' | 'access';
  capacity: string;
  application: string;
  availability: 'Active Deployment' | 'Ready in Yard' | 'Scheduled';
  pressureRating: string;
  flowOutput: string;
  certifications: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  sector: 'Specialized Painting' | 'Civil Infrastructure' | 'Structural Fabrication' | 'Urban Beautification';
  metric: string;
  metricLabel: string;
  image: string;
  location: string;
  specification: string;
  timeline: string;
  substrate: string;
  safetyStatus: string;
  client?: string;
}

export interface RFPScopeOption {
  id: string;
  name: string;
  unit: string;
  defaultScale: number;
  minScale: number;
  maxScale: number;
  step: number;
  defaultDays: number;
}

export interface JourneyMilestone {
  era: string;
  year?: string;
  title: string;
  items: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  specStandard: string;
}

// -------------------------------------------------------------
// 1. HERO SECTION & CORPORATE CONFIGURATION
// -------------------------------------------------------------
export const companyConfig = {
  name: 'Varan Corporation',
  legalName: 'Varan Corporation',
  headline: 'Building Infrastructure, Enhancing Horizons.',
  subHeadline: 'Trusted Civil Construction, Commercial Painting, and Specialized Structural Fabrication Services Across India.',
  tagline: '"Work is Worship" (कर्म ही पूजा है)',
  taglineEnglish: 'Work is Worship',
  taglineHindi: 'कर्म ही पूजा है',
  foundedYear: '1997',
  cinNumber: 'U45200MH1997PTC000000',
  headquarters: {
    address: '(To be provided)',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '',
    country: 'India',
  },
  phone: '8104158309',
  phoneFormatted: '+91 81041 58309',
  phoneRaw: '+918104158309',
  email: 'varancorporation@gmail.com',
  whatsappNumber: '918104158309',
  hours: 'Mon–Sat · 08:00 – 19:00 IST',
};

// -------------------------------------------------------------
// 2. ABOUT US NARRATIVE & HISTORY
// -------------------------------------------------------------
export const aboutUsContent = {
  heading: 'Excellence Built Over Decades',
  foundation: 'Founded in 1997, Varan Corporation began its journey with commercial hand painting, specializing in buses, trains, and transport vehicles.',
  advertisingExpansion: 'The company later expanded into outdoor advertising and commercial signage, manufacturing traditional blue signboards, acrylic boards, 3D letter signage, and custom display panels.',
  diversification: 'After government regulations changed, the company diversified into civil infrastructure, commercial & industrial painting, and structural fabrication.',
  achievement: 'Today, Varan Corporation has successfully executed projects worth ₹30+ Crores across painting, civil engineering, and structural fabrication.',
  majorWorks: [
    'Bandra–Worli Sea Link Marine Coating',
    'Goa Bridge Painting',
    'Delhi Toll Infrastructure',
    'Bangalore Commercial Painting',
  ],
  conclusion: 'Driven by precision, adaptability, and quality, the company continues building infrastructure across India.',
};

// -------------------------------------------------------------
// 3. COMPANY HIGHLIGHTS (HERO & CAPACITY METRICS)
// -------------------------------------------------------------
export const heroMetrics: MetricProof[] = [
  { label: 'Industry Experience', value: '25+', unit: 'Years', subtext: 'Established in 1997' },
  { label: 'Projects Executed', value: '₹30+', unit: 'Crore', subtext: 'Civil, Painting & Fabrication' },
  { label: 'Marine Coating', value: '100', unit: 'Ft Sea', subtext: 'High-Risk Offshore Barrier' },
  { label: 'Pan-India Operations', value: '4+', unit: 'Regions', subtext: 'Maharashtra, Goa, Delhi & Bangalore' },
];

// -------------------------------------------------------------
// 5. COMPANY JOURNEY TIMELINE
// -------------------------------------------------------------
export const companyJourney: JourneyMilestone[] = [
  {
    era: '1997',
    year: '1997',
    title: 'Foundational Hand Painting',
    items: [
      'Started with commercial hand painting of buses, trains, and transport vehicles.',
    ],
  },
  {
    era: 'Advertising Phase',
    title: 'Outdoor Advertising & Signage',
    items: [
      'Traditional Blue Signboards',
      'Acrylic Boards',
      '3D Letter Signage',
      'Custom Display Panels',
    ],
  },
  {
    era: 'Infrastructure Transition',
    title: 'Diversification Post-Regulation',
    items: [
      'Civil Infrastructure',
      'Commercial & Industrial Painting',
      'Structural Fabrication',
    ],
  },
  {
    era: 'Growth Phase',
    title: 'Highways & Flyover Scale',
    items: [
      'Flyover Protective Coating',
      'Highway Infrastructure',
      'Urban & Roadway Beautification',
    ],
  },
  {
    era: 'Present',
    title: 'Pan-India Infrastructure Delivery',
    items: [
      'Civil Engineering',
      'Heavy Fabrication',
      '100 Ft Above Sea Marine Coating',
      'Infrastructure Painting',
      'Pan-India Project Execution',
    ],
  },
];

// -------------------------------------------------------------
// 4. FOUR CORE ENGINEERING DIVISIONS
// -------------------------------------------------------------
export const divisionHighlights: DivisionHighlight[] = [
  {
    id: 'commercial-industrial-painting',
    title: 'Commercial, Industrial & Specialized Painting',
    summary: 'Marine & offshore high-risk coating, bridge anti-carbonation, flyovers, medians, and industrial facilities.',
    highlightMetric: '100 Ft Marine Coating',
    isFlagship: true,
  },
  {
    id: 'civil-works-infrastructure',
    title: 'Civil Works & Infrastructure Construction',
    summary: 'Toll plaza construction, highway civil works, boundary walls, RCC structures, road building & paver blocks.',
    highlightMetric: '₹30+ Cr Delivered',
  },
  {
    id: 'structural-fabrication-safety',
    title: 'Structural Fabrication & Safety Netting',
    summary: 'Heavy structural steel fabrication, marine safety nets, high-altitude netting, safety grills & protective fencing.',
    highlightMetric: 'High-Altitude Certified',
  },
  {
    id: 'urban-roadway-beautification',
    title: 'Urban & Roadway Beautification',
    summary: 'Highway beautification, city divider enhancement, garden infrastructure, park development & roadside restoration.',
    highlightMetric: 'Pan-India Footprint',
  },
];

// -------------------------------------------------------------
// 6. FEATURED PROJECTS PORTFOLIO
// -------------------------------------------------------------
export const projectSectorCategories = [
  'All Sectors',
  'Specialized Painting',
  'Civil Infrastructure',
  'Structural Fabrication',
  'Urban Beautification',
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: 'bandra-worli-sea-link',
    title: 'Bandra–Worli Sea Link Marine Protective Coating',
    sector: 'Specialized Painting',
    metric: '100 Ft',
    metricLabel: 'Above Sea Level',
    image: expresswayDamImg,
    location: 'Mumbai Coastal Corridor, Maharashtra',
    specification: 'Marine Protective Coating · Anti-Carbonation Coating · Offshore High-Salinity Barrier',
    timeline: 'Executed with Zero Incident',
    substrate: 'Marine High-Performance Concrete Pylons & Cable Anchors',
    safetyStatus: '100% Zero-Incident Logged',
    client: 'MSRDC',
  },
  {
    id: 'goa-bridge-infrastructure',
    title: 'Goa Infrastructure Bridge Painting',
    sector: 'Specialized Painting',
    metric: 'Bridge Span',
    metricLabel: 'Protective Painting',
    image: heroViaductImg,
    location: 'Goa Coastal Highway Network',
    specification: 'High-Durability Bridge Protective Painting · Corrosion Inhibitors · UV Topcoat',
    timeline: 'On-Schedule Completion',
    substrate: 'Structural Steel Girders & Concrete Pier Columns',
    safetyStatus: 'Marine Access Certified',
    client: 'State Infrastructure',
  },
  {
    id: 'delhi-toll-infrastructure',
    title: 'Delhi Toll Infrastructure Civil Construction',
    sector: 'Civil Infrastructure',
    metric: 'Turnkey',
    metricLabel: 'Civil Construction',
    image: steelFabImg,
    location: 'Delhi-NCR Expressway Corridor',
    specification: 'Toll Plaza Civil Works · Reinforced Foundation Concrete · Highway Drainage & Barriers',
    timeline: 'Delivered On Schedule',
    substrate: 'M40 Heavy Concrete Pavements & Structural Canopy Bases',
    safetyStatus: 'Statutory Safety Cleared',
    client: 'MEP Infrastructure',
  },
  {
    id: 'bangalore-commercial-project',
    title: 'Bangalore Commercial & Structural Painting',
    sector: 'Specialized Painting',
    metric: 'Multi-Storey',
    metricLabel: 'Commercial Painting',
    image: facilityImg,
    location: 'Bangalore Tech Corridor, Karnataka',
    specification: 'Commercial Building Painting · Industrial Space Coating · Heavy-Duty Epoxies',
    timeline: 'Fast-Track Handover',
    substrate: 'Commercial Concrete Facades & Interior Industrial Slabs',
    safetyStatus: 'HSE Quality Approved',
    client: 'Commercial Developers',
  },
  {
    id: 'urban-roadway-beautification',
    title: 'Urban & Roadway Beautification Program',
    sector: 'Urban Beautification',
    metric: 'Pan-Corridor',
    metricLabel: 'Highway Beautification',
    image: expresswayDamImg,
    location: 'Maharashtra Highway Corridors',
    specification: 'Highway Beautification · City Divider Landscaping · Kerb Painting & Maintenance',
    timeline: 'Active Long-Term Upkeep',
    substrate: 'Highway Medians, Dividers & Civic Garden Infrastructure',
    safetyStatus: 'Environmental Compliance Verified',
    client: 'MSRDC',
  },
  {
    id: 'twenty-nine-flyovers',
    title: '29 Flyovers Anti-Carbonation Protective Coating',
    sector: 'Specialized Painting',
    metric: '29 Sites',
    metricLabel: 'Flyover Network',
    image: transitCoatingImg,
    location: 'Metropolitan High-Traffic Arteries',
    specification: 'Comprehensive Anti-Carbonation Concrete Protection · Weatherproof Sealing',
    timeline: 'Systematic Phased Delivery',
    substrate: 'RCC Elevated Viaducts, Piers & Retaining Walls',
    safetyStatus: 'Zero LTI Certified',
    client: 'Municipal & State Authorities',
  },
  {
    id: 'vashi-flyover',
    title: 'Vashi Flyover Protective Coating',
    sector: 'Specialized Painting',
    metric: 'Heavy Corrosive',
    metricLabel: 'Creek Crossing',
    image: heroViaductImg,
    location: 'Vashi / Navi Mumbai Corridor',
    specification: 'Specialized Concrete Protective Coating · Moisture & Salt Aerosol Barrier',
    timeline: 'Delivered Ahead of Deadline',
    substrate: 'Reinforced Concrete Girders & Substructures',
    safetyStatus: 'L&T Audited & Approved',
    client: 'Larsen & Toubro (L&T)',
  },
  {
    id: 'bandra-versova-infrastructure',
    title: 'Bandra–Versova Infrastructure Painting Works',
    sector: 'Specialized Painting',
    metric: 'Coastal Line',
    metricLabel: 'Painting Works',
    image: tunnelViaductImg,
    location: 'Western Sea Coast, Mumbai',
    specification: 'High-Durability Marine Grade Coating · Severe Atmospheric Exposure Protection',
    timeline: 'Phased Milestone Execution',
    substrate: 'Coastal Marine Concrete & Structural Steel',
    safetyStatus: 'Offshore Safety Standard',
    client: 'Apco Infratech',
  },
  {
    id: 'metro-rail-corridor',
    title: 'Metro Rail Corridor (Vikhroli–Ghatkopar & BKC)',
    sector: 'Civil Infrastructure',
    metric: 'Metro Spans',
    metricLabel: 'Transit Corridor',
    image: transitCoatingImg,
    location: 'Mumbai Metro Network',
    specification: 'Elevated Transit Viaduct Civil Works · Protective Coating · Structural Finishing',
    timeline: 'Key Transit Milestone Cleared',
    substrate: 'Pre-stressed Concrete Viaducts & Rail Girders',
    safetyStatus: 'TATA Projects HSE Certified',
    client: 'TATA',
  },
  {
    id: 'commercial-civil-mega-projects',
    title: 'Commercial & Civil Infrastructure Enterprise Works',
    sector: 'Civil Infrastructure',
    metric: '₹30+ Cr',
    metricLabel: 'Delivered Portfolio',
    image: steelFabImg,
    location: 'Maharashtra, Goa, Delhi & Bangalore',
    specification: 'Heavy Structural Steel Fabrication · Safety Netting · RCC Works · Commercial Painting',
    timeline: '25+ Years of Proven Delivery',
    substrate: 'Structural Steel, Heavy Concrete Foundations & Metal Framing',
    safetyStatus: '100% Client Audited & Cleared',
    client: 'NCC, HCC, HMM Infra Limited, Godrej',
  },
];

// Showcase milestones for Hero/Home preview
export const heroMilestones: HeroMilestone[] = [
  {
    id: 'bandra-worli-sea-link',
    name: 'Bandra–Worli Sea Link Marine Coating',
    corridor: 'Coastal Marine Corridor',
    coatingSpec: 'Marine Protective & Anti-Carbonation Coating',
    metricLabel: 'Elevation',
    metricValue: '100 Ft Sea',
    safetyStatus: 'Zero-Incident Certified',
    image: expresswayDamImg,
    stage: 'Completed Delivery',
    isVerified: true,
    photoCaption: 'Marine protective coating executed 100 ft above sea level for MSRDC',
    client: 'MSRDC',
  },
  {
    id: 'delhi-toll-infrastructure',
    name: 'Delhi Toll Plaza Infrastructure',
    corridor: 'National Highway Alignment',
    coatingSpec: 'Turnkey Toll Plaza Civil Works & Concrete Pavements',
    metricLabel: 'Turnkey Package',
    metricValue: 'Civil Works',
    safetyStatus: 'Certified Handover',
    image: steelFabImg,
    stage: 'Completed Delivery',
    isVerified: true,
    photoCaption: 'Toll plaza construction and heavy highway civil execution for MEP Infrastructure',
    client: 'MEP Infrastructure',
  },
  {
    id: 'twenty-nine-flyovers',
    name: '29 Flyovers & Vashi Flyover Coating',
    corridor: 'Urban Highway Corridors',
    coatingSpec: 'Anti-Carbonation Concrete Protection & Weatherproofing',
    metricLabel: 'Network Span',
    metricValue: '29 Flyovers',
    safetyStatus: 'L&T Safety Audited',
    image: transitCoatingImg,
    stage: 'Completed Delivery',
    isVerified: true,
    photoCaption: 'Protective coatings for flyovers and viaducts in collaboration with Larsen & Toubro',
    client: 'Larsen & Toubro (L&T)',
  },
  {
    id: 'metro-rail-corridor',
    name: 'Metro Rail Corridor (Vikhroli–Ghatkopar & BKC)',
    corridor: 'Urban Transit Network',
    coatingSpec: 'Transit Infrastructure Civil Works & Specialized Systems',
    metricLabel: 'Corridor',
    metricValue: 'Metro Spans',
    safetyStatus: 'TATA HSE Cleared',
    image: heroViaductImg,
    stage: 'Completed Delivery',
    isVerified: true,
    photoCaption: 'Metro rail elevated viaduct civil works and protective finishing for TATA',
    client: 'TATA',
  },
];

// -------------------------------------------------------------
// 7. ESTEEMED CLIENTS (CATEGORIZED & SORTED)
// -------------------------------------------------------------
export const clientPartners: ClientPartner[] = [
  // Government
  { id: 'client-msrdc', name: 'MSRDC', category: 'Government', placeholderText: 'MSRDC' },
  // Infrastructure
  { id: 'client-lt', name: 'Larsen & Toubro (L&T)', category: 'Infrastructure', placeholderText: 'L&T' },
  { id: 'client-hcc', name: 'HCC', category: 'Infrastructure', placeholderText: 'HCC' },
  { id: 'client-ncc', name: 'NCC Limited', category: 'Infrastructure', placeholderText: 'NCC LIMITED' },
  { id: 'client-hmm', name: 'HMM Infra Limited', category: 'Infrastructure', placeholderText: 'HMM INFRA' },
  { id: 'client-mep', name: 'MEP Infrastructure', category: 'Infrastructure', placeholderText: 'MEP INFRA' },
  { id: 'client-roadway', name: 'Roadway Solutions', category: 'Infrastructure', placeholderText: 'ROADWAY SOLUTIONS' },
  { id: 'client-pragati', name: 'Pragati Infra', category: 'Infrastructure', placeholderText: 'PRAGATI INFRA' },
  { id: 'client-apco', name: 'Apco Infratech', category: 'Infrastructure', placeholderText: 'APCO INFRATECH' },
  // Corporate
  { id: 'client-tata', name: 'TATA Group', category: 'Corporate', placeholderText: 'TATA GROUP' },
  { id: 'client-godrej', name: 'Godrej', category: 'Corporate', placeholderText: 'GODREJ' },
  { id: 'client-amul', name: 'Amul (GCMMF)', category: 'Corporate', placeholderText: 'AMUL (GCMMF)' },
  { id: 'client-ashmi', name: 'ASHMI', category: 'Corporate', placeholderText: 'ASHMI' },
  { id: 'client-sai', name: 'Sai Enterprises', category: 'Corporate', placeholderText: 'SAI ENTERPRISES' },
];

export const clientsByCategory = {
  government: [
    { name: 'MSRDC', subtitle: 'Maharashtra State Road Development Corporation' },
  ],
  infrastructure: [
    { name: 'Larsen & Toubro (L&T)', subtitle: 'Vashi Flyover Protective Coating' },
    { name: 'HCC', subtitle: 'Hindustan Construction Company' },
    { name: 'NCC Limited', subtitle: 'National Infrastructure Projects' },
    { name: 'HMM Infra Limited', subtitle: 'Heavy Structural & Highway Packages' },
    { name: 'MEP Infrastructure', subtitle: 'Delhi Toll Civil Construction' },
    { name: 'Roadway Solutions', subtitle: 'Highway Infrastructure' },
    { name: 'Pragati Infra', subtitle: 'Civil & Structural Packages' },
    { name: 'Apco Infratech', subtitle: 'Bandra–Versova Infrastructure' },
  ],
  corporate: [
    { name: 'TATA Group', subtitle: 'Metro Rail Corridor (Vikhroli–Ghatkopar & BKC)' },
    { name: 'Godrej', subtitle: 'Commercial & Civil Facilities' },
    { name: 'Amul (GCMMF)', subtitle: 'Industrial & Facility Operations' },
    { name: 'ASHMI', subtitle: 'Corporate & Structural Works' },
    { name: 'Sai Enterprises', subtitle: 'Infrastructure Services' },
  ],
};

// -------------------------------------------------------------
// 8. WORKFORCE
// -------------------------------------------------------------
export const workforceData = {
  total: '150+',
  totalFormatted: '150+ Permanent Employees',
  categories: [
    { role: 'Civil Engineers', desc: 'Site execution, quality assurance & structural calculations' },
    { role: 'High-Altitude Safety Technicians', desc: 'Rigging, marine net installation & high-risk elevated operations' },
    { role: 'Skilled Site Personnel', desc: 'Precision industrial coating, fabrication & heavy machinery operation' },
  ],
  description: 'A dedicated team of 150+ permanent employees comprising experienced civil engineers, high-altitude safety technicians, and skilled site personnel ensuring zero-incident delivery across India.',
};

// -------------------------------------------------------------
// Executive Leadership Quote
// -------------------------------------------------------------
export const leadershipQuote: LeadershipQuote = {
  quote: 'Work is Worship (कर्म ही पूजा है). Since 1997, our journey has been driven by precision, adaptability, and unwavering commitment to quality in building India’s critical infrastructure.',
  author: 'Varan Leadership',
  role: 'Varan Corporation',
  credentials: '25+ Years Infrastructure Engineering Experience',
  imagePlaceholder: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
};

// -------------------------------------------------------------
// Statutory & Technical Certifications
// -------------------------------------------------------------
export const certificationBadges: CertificationChip[] = [
  { id: 'iso-12944', name: 'ISO 12944', authority: 'Protective Coatings', scope: 'Industrial & Marine Standard' },
  { id: 'iso-9001', name: 'ISO 9001:2015', authority: 'Quality Management', scope: 'Certified Quality Operations' },
  { id: 'pasara', name: 'PASARA Certified', authority: 'Statutory License', scope: 'Verified Site Security' },
  { id: 'dgr', name: 'DGR Registered', authority: 'Labor Compliant', scope: 'Ex-Servicemen Deployment Ready' },
  { id: 'esic-pf', name: '100% Compliant', authority: 'Statutory Labor Code', scope: 'Workforce Insurance & Benefits' },
  { id: 'aws-d1', name: 'AWS D1.1 Certified', authority: 'Welding Society', scope: 'Structural Steel Fusion Welding' },
];

// -------------------------------------------------------------
// Machinery & Fleet Assets
// -------------------------------------------------------------
export const equipmentData: EquipmentItem[] = [
  {
    id: 'airless-spray',
    name: 'Heavy Industrial Airless Spray Plants',
    category: 'coating',
    capacity: '4 Mobile Units',
    application: 'High-volume infrastructure & viaduct coating',
    availability: 'Active Deployment',
    pressureRating: '3,300 PSI (227 Bar)',
    flowOutput: '8.3 Liters / Min Continuous',
    certifications: 'ATEX Zone 1 Explosion Proof',
    image: sprayRigImg,
  },
  {
    id: 'sand-blasting',
    name: 'Mobile Pressurized Sand Blasting Rigs',
    category: 'blasting',
    capacity: '2 Heavy Rigs',
    application: 'Sa 2.5 and Sa 3.0 surface profile preparation',
    availability: 'Ready in Yard',
    pressureRating: '175 CFM @ 125 PSI',
    flowOutput: '450 sq.ft. / Hour',
    certifications: 'ASME Section VIII Pressure Vessel',
    image: facilityImg,
  },
  {
    id: 'mig-tig-welding',
    name: 'Structural MIG / TIG Inverter Stations',
    category: 'welding',
    capacity: '8 Heavy Stations',
    application: 'Highway frames, trusses, and structural joint fabrication',
    availability: 'Active Deployment',
    pressureRating: '400 Amp @ 60% Duty Cycle',
    flowOutput: '0.8mm – 1.6mm Wire Feed',
    certifications: 'AWS D1.1 Structural Certified',
    image: steelFabImg,
  },
  {
    id: 'aluminum-scaffolding',
    name: 'Modular High-Altitude Access Systems',
    category: 'access',
    capacity: '2,500 m² Decking',
    application: 'Elevated viaducts, bridge girders & safety net installation',
    availability: 'Ready in Yard',
    pressureRating: 'Safe Working Load 200 kg/m²',
    flowOutput: 'Up to 24m Elevation Reach',
    certifications: 'EN 1004 & OSHA Compliant',
    image: transitCoatingImg,
  },
];

export const equipmentCategoryLabels: Record<string, string> = {
  all: 'All Fleet Assets',
  coating: 'Coating Plants',
  blasting: 'Abrasive Blasting',
  welding: 'Welding Stations',
  access: 'Access Systems',
};

// -------------------------------------------------------------
// Technical RFP Scope Options
// -------------------------------------------------------------
export const rfpScopeOptions: RFPScopeOption[] = [
  {
    id: 'specialized-coating',
    name: 'Commercial & Specialized Painting',
    unit: 'm² Surface Area',
    defaultScale: 25000,
    minScale: 5000,
    maxScale: 100000,
    step: 5000,
    defaultDays: 60,
  },
  {
    id: 'civil-construction',
    name: 'Civil Works & Toll Infrastructure',
    unit: 'Cubic Meters (m³)',
    defaultScale: 8500,
    minScale: 1000,
    maxScale: 30000,
    step: 1000,
    defaultDays: 75,
  },
  {
    id: 'structural-fabrication',
    name: 'Structural Fabrication & Safety Netting',
    unit: 'Metric Tonnes (MT)',
    defaultScale: 12000,
    minScale: 1000,
    maxScale: 50000,
    step: 1000,
    defaultDays: 90,
  },
  {
    id: 'urban-beautification',
    name: 'Urban & Roadway Beautification',
    unit: 'Corridor Kilometers (km)',
    defaultScale: 50,
    minScale: 10,
    maxScale: 200,
    step: 5,
    defaultDays: 120,
  },
];

// -------------------------------------------------------------
// Contact Inquiries Subjects
// -------------------------------------------------------------
export const contactSubjects = [
  'Commercial & Specialized Painting Tender',
  'Civil Works & Toll Plaza Construction',
  'Structural Steel Fabrication & Safety Netting',
  'Urban & Roadway Beautification RFP',
  'General Corporate Inquiry',
];

// -------------------------------------------------------------
// 5-Stage Engineering Process Timeline
// -------------------------------------------------------------
export const processTimelineSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Site Survey & Substrate Profiling',
    subtitle: 'NACE / SSPC Assessment',
    description: 'Chloride salts titration, ultrasonic steel thickness gauges, and micro-climate environmental checks.',
    specStandard: 'ISO 8502-6 Soluble Salts',
  },
  {
    step: '02',
    title: 'Mechanized Abrasive Blasting',
    subtitle: 'Sa 2.5 Near-White Metal',
    description: 'Mobile pressurized garnet/copper slag blast rigs achieving 50–75 µm angular peak-to-valley profile.',
    specStandard: 'ISO 8501-1 Sa 2.5',
  },
  {
    step: '03',
    title: 'High-Build Coating Application',
    subtitle: 'Multi-Tier Barrier System',
    description: 'Zinc-rich epoxy primer followed by polyamide adduct intermediate and aliphatic polyurethane topcoat.',
    specStandard: 'ISO 12944 Part 5 C5',
  },
  {
    step: '04',
    title: 'NDT Inspection & DFT Audit',
    subtitle: 'Calibrated Gauge Verification',
    description: 'Magnetic dry-film thickness measurements, cross-hatch adhesion pulls, and 100% pinhole spark testing.',
    specStandard: 'SSPC-PA 2 Compliance',
  },
  {
    step: '05',
    title: 'Handover & Warranty Dossier',
    subtitle: 'Contractor Milestone Signoff',
    description: 'Digital QA/QC inspection binder, statutory labor compliance sign-off, and multi-year maintenance warranty.',
    specStandard: 'ISO 9001:2015 Approved',
  },
];

// -------------------------------------------------------------
// Dark High-Contrast Section Content
// -------------------------------------------------------------
export const darkBandContent = {
  sectionLabel: 'SCALE & EXECUTION',
  headline: 'Nationwide Mobilization Across Critical Infrastructure',
  subtext: 'Proven execution of ₹30+ Crore projects with 150+ permanent employees across Maharashtra, Goa, Delhi & Bangalore.',
  stats: [
    { value: '25+', label: 'Years Experience', sublabel: 'Founded in 1997' },
    { value: '₹30+', label: 'Crore Delivered', sublabel: 'Civil, Painting & Fabrication' },
    { value: '100', label: 'Ft Sea Coating', sublabel: 'High-Altitude Marine Barrier' },
    { value: '150+', label: 'Permanent Staff', sublabel: 'Engineers & Safety Technicians' },
  ],
};

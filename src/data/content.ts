// Central verified content, stats, specs, and configuration for Varan Corporation (VRN)
// All data points are extracted into this single file for honesty and compliance.
// TODO: Replace placeholder values with verified contractor credentials, fleet specs, and client data.

import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import transitCoatingImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import sprayRigImg from '../assets/images/machinery_airless_spray_1791032370111.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
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
  sector: 'Transit Infrastructure' | 'Commercial & Industrial' | 'Civil Highways';
  metric: string;
  metricLabel: string;
  image: string;
  location: string;
  specification: string;
  timeline: string;
  substrate: string;
  safetyStatus: string;
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

// -------------------------------------------------------------
// Corporate Profile & Contact Info
// -------------------------------------------------------------
export const companyConfig = {
  name: 'Varan Corporation',
  legalName: 'Varan Corporation Infrastructure Private Limited', // TODO: replace with verified registered entity name
  cinNumber: 'U45200MH2018PTC000000', // TODO: replace with verified CIN
  headquarters: {
    address: '124 Industrial Corridor, Sector 7',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400001',
    country: 'India',
  },
  phone: '+91 (22) 4567 8900', // TODO: replace with verified corporate landline
  phoneRaw: '+912245678900',
  email: 'projects@vaarancoop.com', // TODO: replace with verified tender email
  whatsappNumber: '919876543210', // TODO: replace with verified WhatsApp business number
  hours: 'Mon–Sat · 08:00 – 19:00 IST',
};

// -------------------------------------------------------------
// Client Partner strip (Grayscale, color on hover)
// TODO: Replace with verified client / contractor roster
// -------------------------------------------------------------
export const clientPartners: ClientPartner[] = [
  { id: 'epc-infra-01', name: 'National Metro Corridor EPC', category: 'Transit Rail', placeholderText: 'METRO EPC' },
  { id: 'epc-infra-02', name: 'State Highway Development Consortium', category: 'Highways', placeholderText: 'STATE HIGHWAYS' },
  { id: 'epc-infra-03', name: 'Industrial Ports & Maritime Authority', category: 'Maritime', placeholderText: 'PORT INFRA' },
  { id: 'epc-infra-04', name: 'Heavy Structural Steelworks Alliance', category: 'Steelworks', placeholderText: 'STRUCTURAL STEEL' },
  { id: 'epc-infra-05', name: 'Urban Flyovers & Expressways Corp', category: 'Municipal', placeholderText: 'URBAN FLYOVERS' },
  { id: 'epc-infra-06', name: 'Freight Logistics Hub Corporation', category: 'Freight Hub', placeholderText: 'FREIGHT TERMINALS' },
];

// -------------------------------------------------------------
// Executive Leadership Quote
// TODO: Replace with verified Chairman / Managing Director quote and portrait
// -------------------------------------------------------------
export const leadershipQuote: LeadershipQuote = {
  quote: 'Public utility infrastructure demands absolute execution discipline. We engineer every square meter of surface coating and structural gantry to endure decades of extreme environmental stress.',
  author: 'R. V. Nirmal',
  role: 'Managing Director',
  credentials: '30+ Years Infrastructure Engineering Experience',
  imagePlaceholder: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // TODO: replace with verified photo
};

// -------------------------------------------------------------
// Hero Quantitative Metrics Proof
// TODO: Replace with audited completion numbers
// -------------------------------------------------------------
export const heroMetrics: MetricProof[] = [
  { label: 'Surface Coated', value: '45,000', unit: 'm²', subtext: 'Metro Viaducts & Bridges' },
  { label: 'Steel Erected', value: '18,500', unit: 'MT', subtext: 'Expressway Gantries & Trusses' },
  { label: 'Projects Delivered', value: '120+', unit: 'Sites', subtext: 'Transit & Highways Delivered' },
  { label: 'Zero LTI Record', value: '100%', unit: 'Safety', subtext: 'Zero Incident Safety Record' },
];

// -------------------------------------------------------------
// Statutory & Technical Certifications
// TODO: Replace with verified certificate registration IDs
// -------------------------------------------------------------
export const certificationBadges: CertificationChip[] = [
  { id: 'iso-12944', name: 'ISO 12944 (C5-I)', authority: 'Protective Coatings', scope: 'Corrosive Industrial & Marine Standard' },
  { id: 'iso-9001', name: 'ISO 9001:2015', authority: 'Quality Management', scope: 'Certified Contractor Operations' },
  { id: 'pasara', name: 'PASARA Certified', authority: 'Statutory License', scope: 'Audited Personnel Security' },
  { id: 'dgr', name: 'DGR Registered', authority: 'Labor Compliant', scope: 'Ex-Servicemen Deployment Ready' },
  { id: 'esic-pf', name: 'ESIC & PF 100%', authority: 'Statutory Labor Code', scope: 'Workforce Insurance & Benefits' },
  { id: 'aws-d1', name: 'AWS D1.1 Certified', authority: 'American Welding Society', scope: 'Structural Steel Fusion Welding' },
];

// -------------------------------------------------------------
// Four Divisions (Hero Segmented Architecture)
// Flagship: Industrial & Infra Painting
// -------------------------------------------------------------
export const divisionHighlights: DivisionHighlight[] = [
  {
    id: 'industrial-infra-painting',
    title: 'Industrial & Infra Painting',
    summary: 'High-volume protective coatings for metro tracks, bridge girders, and chemical corridors.',
    highlightMetric: '45,000 m² Completed',
    isFlagship: true,
  },
  {
    id: 'display-fabrication',
    title: 'Display & Gantry Fabrication',
    summary: 'Overhead highway gantries, toll signage structures, and CNC-cut exterior brand installations.',
    highlightMetric: '180 km/h Wind Tolerance',
  },
  {
    id: 'civil-structures',
    title: 'Civil Structures & Barriers',
    summary: 'Reinforced concrete foundations, high-security perimeter fencing, and W-beam crash barriers.',
    highlightMetric: '1,200 Tons Processed',
  },
  {
    id: 'enterprise-manpower',
    title: 'Enterprise Technical Manpower',
    summary: 'Certified riggers, industrial painters, and licensed site supervisory personnel.',
    highlightMetric: '1,200+ Active Personnel',
  },
];

// -------------------------------------------------------------
// Hero Showcase Milestones
// TODO: Replace with verified project execution milestones
// -------------------------------------------------------------
export const heroMilestones: HeroMilestone[] = [
  {
    id: 'metro-line-3',
    name: 'Mumbai Metro Line 3 Corridor',
    corridor: 'Elevated Viaduct Span 14–28',
    coatingSpec: 'Sa 2.5 Near-White Blast · 180µm Polyurethane',
    metricLabel: 'Coating Area',
    metricValue: '45,000 m²',
    safetyStatus: '100% Zero-Incident Logged',
    image: heroViaductImg,
    stage: 'Phase IV Active',
    isVerified: false, // Flagged false: badges hidden until verified by site team
    // TODO: Replace with confirmed site photography caption
    photoCaption: 'Representative high-build protective coating application on elevated transit viaduct',
  },
  {
    id: 'highway-gantry',
    name: 'Western Expressway High-Speed Gantries',
    corridor: 'KM 18.2 Toll Plaza Alignment',
    coatingSpec: 'AWS D1.1 Certified Welds · Epoxy MIO Barrier',
    metricLabel: 'Steel Tonnage',
    metricValue: '18,500 MT',
    safetyStatus: 'HSE Safety Cleared',
    image: steelFabImg,
    stage: 'Fabrication Verified',
    isVerified: false, // Flagged false: badges hidden until verified by site team
    // TODO: Replace with confirmed site photography caption
    photoCaption: 'Representative structural steel gantry fabrication and anti-corrosive primer coating',
  },
  {
    id: 'bkc-transit',
    name: 'BKC Intermodal Corporate Terminal',
    corridor: 'Sky-Gantry Elevation 180 ft',
    coatingSpec: 'Dual-Coat Fluoropolymer · Wind-Load Rated',
    metricLabel: 'Curtain Truss',
    metricValue: '12.4 km Line',
    safetyStatus: 'Structural Signoff Logged',
    image: transitCoatingImg,
    stage: 'Site Mobilization',
    isVerified: false, // Flagged false: badges hidden until verified by site team
    // TODO: Replace with confirmed site photography caption
    photoCaption: 'Representative high-altitude commercial facade access and architectural coating system',
  },
];

// -------------------------------------------------------------
// Machinery & Fleet Assets
// TODO: Replace with verified contractor fleet serials & specs
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
    application: 'Display gantries, trusses, and structural joint fabrication',
    availability: 'Active Deployment',
    pressureRating: '400 Amp @ 60% Duty Cycle',
    flowOutput: '0.8mm – 1.6mm Wire Feed',
    certifications: 'AWS D1.1 Structural Certified',
    image: steelFabImg,
  },
  {
    id: 'aluminum-scaffolding',
    name: 'Modular Aluminum High-Altitude Systems',
    category: 'access',
    capacity: '2,500 m² Decking',
    application: 'Elevated transit viaducts and sky-gantry work',
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
// Documented Projects Portfolio
// TODO: Replace with verified project execution case studies
// -------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: 'metro-viaduct',
    title: 'Metro Line 3 Viaduct Structural Protective Coating',
    sector: 'Transit Infrastructure',
    metric: '45,000 m²',
    metricLabel: 'Surface Treated',
    image: transitCoatingImg,
    location: 'Mumbai Metro Line 3 Corridor',
    specification: 'Sa 2.5 Blast · 180µm Polyurethane Topcoat · ISO 12944 C5',
    timeline: 'Completed in 90 Days',
    substrate: 'Pre-stressed Reinforced Concrete (RCC) & Steel Brackets',
    safetyStatus: '100% Zero-Incident Logged',
  },
  {
    id: 'highway-gantry',
    title: 'High-Speed Expressway Gantry Alignment & Fabrication',
    sector: 'Civil Highways',
    metric: '18,500 MT',
    metricLabel: 'Structural Steel',
    image: steelFabImg,
    location: 'Western Express Highway Toll Concourse',
    specification: 'AWS D1.1 Full Penetration Welds · Hot-Dip Galvanized Base',
    timeline: '60-Day Turnaround',
    substrate: 'High-Strength Structural Hollow Sections (SHS)',
    safetyStatus: 'Structural Certification Logged',
  },
  {
    id: 'bkc-intermodal',
    title: 'BKC Intermodal Corporate Terminal & Sky-Sign Architecture',
    sector: 'Commercial & Industrial',
    metric: '180 ft',
    metricLabel: 'Elevation Reached',
    image: heroViaductImg,
    location: 'Bandra-Kurla Complex Corporate Park',
    specification: 'Modular Scaffolding Access · Wind Shear Tested (180 km/h)',
    timeline: 'Delivered 2 Weeks Ahead',
    substrate: 'Aluminium Composite Facades & Structural Trusses',
    safetyStatus: 'High-Altitude Safety Clearance',
  },
  {
    id: 'industrial-staging',
    title: 'Central Logistics Staging & Fleet Maintenance Hangar',
    sector: 'Commercial & Industrial',
    metric: '12,000 m²',
    metricLabel: 'Epoxy Decking',
    image: facilityImg,
    location: 'Bhiwandi Freight & Distribution Hub',
    specification: 'Self-Leveling Heavy Traffic Polyurethane Screed',
    timeline: '45 Days Full Execution',
    substrate: 'M35 Heavy Vehicle Industrial Flooring',
    safetyStatus: 'HSE Safety Audit Approved',
  },
];

export const projectSectorCategories = [
  'All Sectors',
  'Transit Infrastructure',
  'Civil Highways',
  'Commercial & Industrial',
] as const;

// -------------------------------------------------------------
// Technical RFP Scope Options
// TODO: Replace with verified minimum & maximum tender thresholds
// -------------------------------------------------------------
export const rfpScopeOptions: RFPScopeOption[] = [
  {
    id: 'industrial-coating',
    name: 'Industrial & Infra Coating',
    unit: 'm² Surface Area',
    defaultScale: 25000,
    minScale: 5000,
    maxScale: 100000,
    step: 5000,
    defaultDays: 60,
  },
  {
    id: 'gantry-fabrication',
    name: 'Structural Gantry Fabrication',
    unit: 'Metric Tonnes (MT)',
    defaultScale: 12000,
    minScale: 1000,
    maxScale: 50000,
    step: 1000,
    defaultDays: 90,
  },
  {
    id: 'civil-structures',
    name: 'Civil Works & Barriers',
    unit: 'Cubic Meters (m³)',
    defaultScale: 8500,
    minScale: 1000,
    maxScale: 30000,
    step: 1000,
    defaultDays: 75,
  },
  {
    id: 'manpower-logistics',
    name: 'Enterprise Technical Manpower',
    unit: 'Certified Personnel',
    defaultScale: 150,
    minScale: 25,
    maxScale: 500,
    step: 25,
    defaultDays: 180,
  },
];

// -------------------------------------------------------------
// Contact Inquiries Subjects
// -------------------------------------------------------------
export const contactSubjects = [
  'Protective Coating RFP',
  'Gantry Fabrication',
  'Site Safety Audit',
  'Workforce Logistics',
  'General Corporate Inquiry',
];

// -------------------------------------------------------------
// 5-Stage Engineering Process Timeline
// TODO: Replace with verified contractor standard operating procedures
// -------------------------------------------------------------
export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  specStandard: string;
}

export const processTimelineSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Site Survey & Substrate Profiling',
    subtitle: 'NACE / SSPC Assessment',
    description: 'Chloride salts titration, ultrasonic steel thickness gauges, and micro-climate environmental checks.',
    specStandard: 'ISO 8502-6 Soluble Salts'
  },
  {
    step: '02',
    title: 'Mechanized Abrasive Blasting',
    subtitle: 'Sa 2.5 Near-White Metal',
    description: 'Mobile pressurized garnet/copper slag blast rigs achieving 50–75 µm angular peak-to-valley profile.',
    specStandard: 'ISO 8501-1 Sa 2.5'
  },
  {
    step: '03',
    title: 'High-Build Coating Application',
    subtitle: 'Multi-Tier Barrier System',
    description: 'Zinc-rich epoxy primer followed by polyamide adduct intermediate and aliphatic polyurethane topcoat.',
    specStandard: 'ISO 12944 Part 5 C5'
  },
  {
    step: '04',
    title: 'NDT Inspection & DFT Audit',
    subtitle: 'Calibrated Gauge Verification',
    description: 'Magnetic dry-film thickness measurements, cross-hatch adhesion pulls, and 100% pinhole spark testing.',
    specStandard: 'SSPC-PA 2 Compliance'
  },
  {
    step: '05',
    title: 'Handover & Warranty Dossier',
    subtitle: 'Contractor Milestone Signoff',
    description: 'Digital QA/QC inspection binder, statutory labor compliance sign-off, and multi-year maintenance warranty.',
    specStandard: 'ISO 9001:2015 Approved'
  }
];

// -------------------------------------------------------------
// Dark High-Contrast Section Content (Breaking Light Theme)
// TODO: Replace with verified mobilization SLAs
// -------------------------------------------------------------
export const darkBandContent = {
  sectionLabel: 'CAPACITY / SPEED',
  headline: 'Mobilization Scale for Critical Corridors',
  subtext: 'Turnkey industrial capability with certified equipment fleets and multi-shift engineering crews deployed within 72 hours of site clearance.',
  stats: [
    { value: '72 Hrs', label: 'Site Mobilization SLA', sublabel: 'Across Pan-India Transit Hubs' },
    { value: '1,200+', label: 'Active Riggers & Painters', sublabel: '100% ESIC, PF & PASARA Cleared' },
    { value: '0.00', label: 'Lost Time Incident Rate', sublabel: 'Zero Safety Violations in 2025-26' },
    { value: '100 MT', label: 'Daily Gantry Throughput', sublabel: 'Automated MIG/TIG Production' }
  ]
};


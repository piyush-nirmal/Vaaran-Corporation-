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
  quote: 'Infrastructure demands execution discipline. We engineer to endure.',
  author: 'R. V. Nirmal',
  role: 'Managing Director',
  credentials: '30+ Yrs Exp.',
  imagePlaceholder: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // TODO: replace with verified photo
};

// -------------------------------------------------------------
// Hero Quantitative Metrics Proof
// TODO: Replace with audited completion numbers
// -------------------------------------------------------------
export const heroMetrics: MetricProof[] = [
  { label: 'Surface Coated', value: '45,000', unit: 'm²', subtext: 'Metro & Bridges' },
  { label: 'Steel Erected', value: '18,500', unit: 'MT', subtext: 'Expressway Gantries' },
  { label: 'Projects Delivered', value: '120+', unit: 'Sites', subtext: 'Transit & Highways' },
  { label: 'Zero LTI Record', value: '100%', unit: 'Safety', subtext: 'Zero Incidents' },
];

// -------------------------------------------------------------
// Statutory & Technical Certifications
// TODO: Replace with verified certificate registration IDs
// -------------------------------------------------------------
export const certificationBadges: CertificationChip[] = [
  { id: 'iso-12944', name: 'ISO 12944 (C5-I)', authority: 'Protective Coatings', scope: 'Corrosive Standard' },
  { id: 'iso-9001', name: 'ISO 9001:2015', authority: 'Quality Management', scope: 'Certified Operations' },
  { id: 'pasara', name: 'PASARA Certified', authority: 'Statutory License', scope: 'Audited Security' },
  { id: 'dgr', name: 'DGR Registered', authority: 'Labor Compliant', scope: 'Ex-Servicemen Ready' },
  { id: 'esic-pf', name: 'ESIC & PF 100%', authority: 'Statutory Labor Code', scope: 'Workforce Benefits' },
  { id: 'aws-d1', name: 'AWS D1.1', authority: 'American Welding Society', scope: 'Fusion Welding' },
];

// -------------------------------------------------------------
// Four Divisions (Hero Segmented Architecture)
// Flagship: Industrial & Infra Painting
// -------------------------------------------------------------
export const divisionHighlights: DivisionHighlight[] = [
  {
    id: 'industrial-infra-painting',
    title: 'Industrial & Infra Painting',
    summary: 'High-volume coatings for metro tracks and bridges.',
    highlightMetric: '45,000 m² Completed',
    isFlagship: true,
  },
  {
    id: 'display-fabrication',
    title: 'Display & Gantry Fabrication',
    summary: 'Overhead gantries and structural signage.',
    highlightMetric: '180 km/h Wind Tolerance',
  },
  {
    id: 'civil-structures',
    title: 'Civil Structures & Barriers',
    summary: 'Concrete foundations and perimeter fencing.',
    highlightMetric: '1,200 Tons Processed',
  },
  {
    id: 'enterprise-manpower',
    title: 'Enterprise Technical Manpower',
    summary: 'Certified riggers and industrial painters.',
    highlightMetric: '1,200+ Personnel',
  },
];

// -------------------------------------------------------------
// Hero Showcase Milestones
// TODO: Replace with verified project execution milestones
// -------------------------------------------------------------
export const heroMilestones: HeroMilestone[] = [
  {
    id: 'metro-line-3',
    name: 'Mumbai Metro Line 3',
    corridor: 'Elevated Viaduct Span 14–28',
    coatingSpec: 'Sa 2.5 Blast · 180µm Polyurethane',
    metricLabel: 'Coating Area',
    metricValue: '45,000 m²',
    safetyStatus: '100% Zero-Incident',
    image: heroViaductImg,
    stage: 'Phase IV',
    isVerified: false,
    photoCaption: 'Protective coating on transit viaduct',
  },
  {
    id: 'highway-gantry',
    name: 'Western Expressway Gantries',
    corridor: 'KM 18.2 Toll Plaza',
    coatingSpec: 'AWS D1.1 Welds · Epoxy MIO',
    metricLabel: 'Steel Tonnage',
    metricValue: '18,500 MT',
    safetyStatus: 'HSE Cleared',
    image: steelFabImg,
    stage: 'Fabrication',
    isVerified: false,
    photoCaption: 'Structural steel gantry fabrication',
  },
  {
    id: 'bkc-transit',
    name: 'BKC Intermodal Terminal',
    corridor: 'Sky-Gantry Elevation 180 ft',
    coatingSpec: 'Dual-Coat Fluoropolymer',
    metricLabel: 'Curtain Truss',
    metricValue: '12.4 km',
    safetyStatus: 'Structural Signoff',
    image: transitCoatingImg,
    stage: 'Mobilization',
    isVerified: false,
    photoCaption: 'Commercial facade access & coating',
  },
];

// -------------------------------------------------------------
// Machinery & Fleet Assets
// TODO: Replace with verified contractor fleet serials & specs
// -------------------------------------------------------------
export const equipmentData: EquipmentItem[] = [
  {
    id: 'airless-spray',
    name: 'Airless Spray Plants',
    category: 'coating',
    capacity: '4 Units',
    application: 'High-volume coating',
    availability: 'Active Deployment',
    pressureRating: '3,300 PSI',
    flowOutput: '8.3 L/Min',
    certifications: 'ATEX Zone 1',
    image: sprayRigImg,
  },
  {
    id: 'sand-blasting',
    name: 'Pressurized Blasting Rigs',
    category: 'blasting',
    capacity: '2 Heavy Rigs',
    application: 'Sa 2.5 / Sa 3.0 profiling',
    availability: 'Ready in Yard',
    pressureRating: '175 CFM @ 125 PSI',
    flowOutput: '450 sq.ft./Hr',
    certifications: 'ASME Sec VIII',
    image: facilityImg,
  },
  {
    id: 'mig-tig-welding',
    name: 'MIG/TIG Inverter Stations',
    category: 'welding',
    capacity: '8 Stations',
    application: 'Structural joint fabrication',
    availability: 'Active Deployment',
    pressureRating: '400A @ 60%',
    flowOutput: '0.8–1.6mm Wire',
    certifications: 'AWS D1.1',
    image: steelFabImg,
  },
  {
    id: 'aluminum-scaffolding',
    name: 'Modular Scaffolding Systems',
    category: 'access',
    capacity: '2,500 m² Decking',
    application: 'Elevated sky-gantry work',
    availability: 'Ready in Yard',
    pressureRating: 'SWL 200 kg/m²',
    flowOutput: '24m Elevation',
    certifications: 'EN 1004 & OSHA',
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
    title: 'Metro Line 3 Viaduct Coating',
    sector: 'Transit Infrastructure',
    metric: '45,000 m²',
    metricLabel: 'Surface Treated',
    image: transitCoatingImg,
    location: 'Mumbai Metro Line 3',
    specification: 'Sa 2.5 Blast · 180µm PU',
    timeline: '90 Days',
    substrate: 'RCC & Steel',
    safetyStatus: '100% Zero-Incident',
  },
  {
    id: 'highway-gantry',
    title: 'High-Speed Expressway Gantries',
    sector: 'Civil Highways',
    metric: '18,500 MT',
    metricLabel: 'Structural Steel',
    image: steelFabImg,
    location: 'WEH Toll Concourse',
    specification: 'AWS D1.1 · Hot-Dip Galvanized',
    timeline: '60 Days',
    substrate: 'Steel Hollow Sections',
    safetyStatus: 'Certified',
  },
  {
    id: 'bkc-intermodal',
    title: 'BKC Intermodal Sky-Sign Architecture',
    sector: 'Commercial & Industrial',
    metric: '180 ft',
    metricLabel: 'Elevation',
    image: heroViaductImg,
    location: 'BKC Corporate Park',
    specification: 'Modular Scaffolding · Wind Tested',
    timeline: '2 Weeks Ahead',
    substrate: 'Aluminium Facades',
    safetyStatus: 'Cleared',
  },
  {
    id: 'industrial-staging',
    title: 'Logistics Staging & Fleet Hangar',
    sector: 'Commercial & Industrial',
    metric: '12,000 m²',
    metricLabel: 'Epoxy Decking',
    image: facilityImg,
    location: 'Bhiwandi Hub',
    specification: 'Self-Leveling PU Screed',
    timeline: '45 Days',
    substrate: 'M35 Flooring',
    safetyStatus: 'HSE Approved',
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
    title: 'Site Survey',
    subtitle: 'NACE / SSPC',
    description: 'Chlorides, thickness, and micro-climate checks.',
    specStandard: 'ISO 8502-6'
  },
  {
    step: '02',
    title: 'Abrasive Blasting',
    subtitle: 'Sa 2.5 Profile',
    description: 'Pressurized blast rigs achieving 50–75 µm profile.',
    specStandard: 'ISO 8501-1'
  },
  {
    step: '03',
    title: 'Coating Application',
    subtitle: 'Barrier System',
    description: 'Zinc-rich primer, intermediate, and topcoat.',
    specStandard: 'ISO 12944'
  },
  {
    step: '04',
    title: 'NDT & DFT Audit',
    subtitle: 'Gauge Verification',
    description: 'Thickness, adhesion, and pinhole testing.',
    specStandard: 'SSPC-PA 2'
  },
  {
    step: '05',
    title: 'Handover',
    subtitle: 'Signoff',
    description: 'QA/QC binder and maintenance warranty.',
    specStandard: 'ISO 9001'
  }
];

// -------------------------------------------------------------
// Dark High-Contrast Section Content (Breaking Light Theme)
// TODO: Replace with verified mobilization SLAs
// -------------------------------------------------------------
export const darkBandContent = {
  sectionLabel: 'CAPACITY / SPEED',
  headline: 'Rapid Mobilization',
  subtext: 'Turnkey fleets and crews deployed within 72 hours.',
  stats: [
    { value: '72 Hrs', label: 'Site SLA', sublabel: 'Pan-India Transit' },
    { value: '1,200+', label: 'Active Riggers', sublabel: '100% Cleared' },
    { value: '0.00', label: 'LTI Rate', sublabel: 'Zero Safety Violations' },
    { value: '100 MT', label: 'Daily Gantry', sublabel: 'Automated MIG/TIG' }
  ]
};


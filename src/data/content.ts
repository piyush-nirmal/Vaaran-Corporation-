// Central verified content, stats, specs, and configuration for Varan Corporation (VRN)
// All data points are extracted into this single file for honesty and compliance.
// TODO: Replace placeholder values with verified contractor credentials, fleet specs, and client data.

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
  { label: 'Projects Delivered', value: '120+', unit: 'Sites', subtext: 'Transit & Highways Nationwide' },
  { label: 'Surface Coated', value: '45,000', unit: 'm²', subtext: 'Metro Viaducts & Bridges' },
  { label: 'Steel Erected', value: '18,500', unit: 'MT', subtext: 'Expressway Gantries & Bridges' },
  { label: 'Safety Record', value: '100%', unit: 'Zero LTI', subtext: 'Certified Incident-Free' },
];

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
// Four Divisions (Core Capabilities)
// -------------------------------------------------------------
export const divisionHighlights: DivisionHighlight[] = [
  {
    id: 'highways-expressways',
    title: 'Highways & Expressways',
    summary: 'Turnkey roadway execution, pavement protection, and high-speed economic corridor development.',
    highlightMetric: '142+ km Line',
    isFlagship: true,
  },
  {
    id: 'bridges-marine',
    title: 'Bridges & Waterways',
    summary: 'River barrages, bridge substructures, and durable marine protective systems.',
    highlightMetric: '45,000 m² Protected',
  },
  {
    id: 'tunnels-viaducts',
    title: 'Tunnels & Rail Viaducts',
    summary: 'Mountain tunnel portals, elevated rail viaducts, and high-speed transit infrastructure.',
    highlightMetric: '8 Portals Delivered',
  },
  {
    id: 'structural-steel',
    title: 'Structural Steel & Gantries',
    summary: 'Overhead highway signage gantries, heavy steel trusses, and toll plaza fabrication.',
    highlightMetric: '18,500 MT Erected',
  },
];

// -------------------------------------------------------------
// Hero Showcase Milestones
// -------------------------------------------------------------
export const heroMilestones: HeroMilestone[] = [
  {
    id: 'highways-expressways',
    name: 'National Expressways & River Barrages',
    corridor: 'Economic Highway Corridors',
    coatingSpec: 'Substructure Waterproofing & Heavy Pavement Protection',
    metricLabel: 'Corridor Span',
    metricValue: '142+ km Line',
    safetyStatus: 'Zero-Incident Certified',
    image: expresswayDamImg,
    stage: 'Active Execution',
    isVerified: true,
    photoCaption: 'Expressway corridors with integrated river barrages and modern roadway interchanges',
  },
  {
    id: 'metro-tunnels',
    name: 'Mountain Pass Tunnels & Rail Viaducts',
    corridor: 'High-Altitude Transit Portals',
    coatingSpec: 'High-Durability Environmental Protective Systems',
    metricLabel: 'Tunnel Portals',
    metricValue: '8 Major Spans',
    safetyStatus: 'Safety Cleared',
    image: tunnelViaductImg,
    stage: 'Active Operations',
    isVerified: true,
    photoCaption: 'Mountain tunnel passages and connected elevated rail viaduct corridors',
  },
  {
    id: 'metro-line-3',
    name: 'Metro Rail & Elevated Corridors',
    corridor: 'Urban Transit Network',
    coatingSpec: 'Specialized High-Build Protective Coating',
    metricLabel: 'Coating Area',
    metricValue: '45,000 m²',
    safetyStatus: 'Zero-Incident Certified',
    image: heroViaductImg,
    stage: 'Active Execution',
    isVerified: true,
    photoCaption: 'Protective coatings and civil works for elevated urban transit viaducts',
  },
  {
    id: 'highway-gantry',
    name: 'Structural Steel & Highway Gantries',
    corridor: 'Expressway Toll Alignment',
    coatingSpec: 'Precision Structural Steel & Protective Primers',
    metricLabel: 'Steel Tonnage',
    metricValue: '18,500 MT',
    safetyStatus: 'Safety Cleared',
    image: steelFabImg,
    stage: 'Fabrication Verified',
    isVerified: true,
    photoCaption: 'Overhead highway signage gantries and high-strength structural steel trusses',
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
  sectionLabel: 'SCALE & EXECUTION',
  headline: 'Nationwide Mobilization for Critical Infrastructure',
  subtext: 'Specialized equipment fleets and certified engineering teams ready for rapid deployment across India within 72 hours.',
  stats: [
    { value: '72 Hrs', label: 'Rapid Mobilization', sublabel: 'Fast-Track Site Deployment' },
    { value: '1,200+', label: 'Skilled Workforce', sublabel: '100% Certified Field Teams' },
    { value: '120+', label: 'Delivered Projects', sublabel: 'On-Time Corridor Milestones' },
    { value: '100%', label: 'Safety Compliance', sublabel: 'Zero-Incident Operations' }
  ]
};


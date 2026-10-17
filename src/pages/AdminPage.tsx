import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  BarChart3, 
  FolderKanban, 
  Inbox, 
  Settings, 
  Save, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  ExternalLink, 
  RefreshCw, 
  Lock, 
  KeyRound,
  Download,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  Database,
  Loader2,
  Upload,
  Image as ImageIcon,
  Link2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { fetchLeads, updateLeadStatus, resetContentToDefaults, type LeadRecord } from '../services/contentCmsService';
import { firebaseConfig } from '../services/firebase';
import type { ProjectItem, MetricProof } from '../data/content';

// Preset infrastructure images
import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import transitCoatingImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import sprayRigImg from '../assets/images/machinery_airless_spray_1791032370111.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';
import expresswayDamImg from '../assets/images/hero_apco_expressway_dam_1791896243948.jpg';
import tunnelViaductImg from '../assets/images/hero_transit_tunnel_viaduct_1791896269073.jpg';

const PRESET_PROJECT_IMAGES = [
  { name: 'Marine Sea Link / Offshore', url: expresswayDamImg },
  { name: 'Highway Viaduct Bridge', url: heroViaductImg },
  { name: 'Structural Steel Fab', url: steelFabImg },
  { name: 'Metro Transit Viaduct', url: transitCoatingImg },
  { name: 'Industrial Hub & Yards', url: facilityImg },
  { name: 'Expressway Tunnel Viaduct', url: tunnelViaductImg },
  { name: 'Airless Coating Rig', url: sprayRigImg },
];

export function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('vrn_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'company' | 'metrics' | 'projects' | 'leads' | 'settings'>('company');

  // Content Context
  const { 
    company, 
    heroMetrics, 
    projects, 
    updateCompany, 
    updateHeroMetrics, 
    saveProjectItem, 
    deleteProjectItem, 
    refreshContent 
  } = useContent();

  // Local Form States
  const [companyForm, setCompanyForm] = useState(company);
  const [metricsForm, setMetricsForm] = useState<MetricProof[]>(heroMetrics);
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [leadFilter, setLeadFilter] = useState<'all' | 'new' | 'contacted' | 'reviewed'>('all');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [isSavingCompany, setIsSavingCompany] = useState(false);
  const [isSavingMetrics, setIsSavingMetrics] = useState(false);
  const [isSavingProject, setIsSavingProject] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Project Modal State
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Sync initial form values once context loads
  useEffect(() => {
    setCompanyForm(company);
  }, [company]);

  useEffect(() => {
    setMetricsForm(heroMetrics);
  }, [heroMetrics]);

  // Load leads when tab is active
  useEffect(() => {
    if (activeTab === 'leads' && isAuthenticated) {
      loadLeads();
    }
  }, [activeTab, isAuthenticated]);

  const loadLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const data = await fetchLeads();
      setLeads(data);
    } catch (e) {
      console.error('Error loading leads:', e);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master passcodes for Varan Corporation Admin
    if (passcode === 'varan1997' || passcode === 'admin1997' || passcode === 'varan@2026') {
      sessionStorage.setItem('vrn_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid administrator credentials. Hint: default passcode is varan1997');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('vrn_admin_auth');
    setIsAuthenticated(false);
  };

  const handleSaveCompany = async () => {
    setIsSavingCompany(true);
    setSaveStatus('Saving company profile to Firebase...');
    const res = await updateCompany(companyForm);
    setIsSavingCompany(false);
    if (res.success) {
      setSaveStatus('✓ Company profile saved to Firebase and live website updated!');
    } else {
      setSaveStatus(res.error || 'Saved locally.');
    }
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const handleSaveMetrics = async () => {
    setIsSavingMetrics(true);
    setSaveStatus('Saving hero metrics to Firebase...');
    const res = await updateHeroMetrics(metricsForm);
    setIsSavingMetrics(false);
    if (res.success) {
      setSaveStatus('✓ Hero metrics updated in Firebase & live on site!');
    } else {
      setSaveStatus(res.error || 'Saved locally.');
    }
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const handleSaveProjectForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    setIsSavingProject(true);
    setSaveStatus(`Saving project "${editingProject.title}"...`);
    const res = await saveProjectItem(editingProject);
    setIsSavingProject(false);
    setIsProjectModalOpen(false);
    setEditingProject(null);
    if (res.success) {
      setSaveStatus('✓ Project saved to Firebase & portfolio updated!');
    } else {
      setSaveStatus(res.error || 'Saved locally.');
    }
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const doDeleteProject = async (id: string, title: string) => {
    setConfirmDeleteId(null);
    setSaveStatus(`Deleting project "${title}"...`);
    await deleteProjectItem(id);
    setSaveStatus(`✓ Project "${title}" deleted from Firebase & portfolio.`);
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingProject) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Selected image is large (>5MB). A compressed image is recommended.');
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setEditingProject({
          ...editingProject,
          image: result,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleLeadStatusChange = async (id: string, status: LeadRecord['status']) => {
    await updateLeadStatus(id, status);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const exportLeadsToCsv = () => {
    if (leads.length === 0) {
      alert('No leads available to export.');
      return;
    }
    const headers = ['Token', 'Timestamp', 'Name', 'Company', 'Phone', 'Email', 'Sector', 'Status'];
    const rows = leads.map((l) => [
      l.referenceToken || l.id || '',
      l.timestamp,
      `"${l.name || ''}"`,
      `"${l.company || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.sector || l.sourceSection || ''}"`,
      l.status || 'new'
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `varan_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -------------------------------------------------------------
  // LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-3 sm:p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full p-5 sm:p-8 border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-vrnNavy text-white flex items-center justify-center shadow-md shrink-0">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-vrnOrange" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">Admin Control Portal</h1>
              <p className="text-[11px] sm:text-xs text-slate-500 font-mono">Varan Corporation CMS · Secret Portal</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 mb-5 sm:mb-6 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <span className="leading-relaxed">
              <strong>Secret Shortcut Triggered:</strong> You accessed this console via the 3-Shift Shortcut. Enter administrator credentials to proceed.
            </span>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Admin Passcode
              </label>
              <div className="relative">
                <input 
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (e.g. varan1997)"
                  className="w-full px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-vrnNavy"
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            {authError && (
              <p className="text-xs text-rose-600 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-vrnNavy hover:bg-slate-800 text-white font-semibold rounded-lg text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Unlock Admin Portal
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center">
              <Link to="/" className="text-xs text-slate-500 hover:text-slate-800 underline">
                Return to Public Website
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-vrnNavy border border-white/20 flex items-center justify-center text-vrnOrange font-bold text-base sm:text-lg shrink-0">
              V
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight truncate">Varan Corp</span>
                <span className="bg-vrnOrange/20 text-vrnOrange text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-vrnOrange/30 shrink-0">
                  ADMIN
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block truncate">
                Work is Worship · Project ID: <code className="text-amber-400">{firebaseConfig.projectId}</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Firebase Active
            </span>

            <Link
              to="/"
              target="_blank"
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1 border border-slate-700 transition-colors"
              title="View Public Website"
            >
              <span className="hidden sm:inline">View Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-400 text-xs flex items-center gap-1 border border-slate-700 transition-colors cursor-pointer"
              title="Logout from Admin Portal"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 w-full flex-grow">
        
        {/* Navigation Tabs (Smooth Swipeable Pills on Phone) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-200 no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
          <button
            onClick={() => setActiveTab('company')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'company'
                ? 'bg-vrnNavy text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vrnOrange shrink-0" />
            Company & Contact
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'bg-vrnNavy text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vrnOrange shrink-0" />
            Hero Metrics
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-vrnNavy text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vrnOrange shrink-0" />
            Projects ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-vrnNavy text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Inbox className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vrnOrange shrink-0" />
            Leads & Inquiries
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-vrnNavy text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vrnOrange shrink-0" />
            Firebase Config
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: COMPANY & CONTACT INFO */}
        {/* ========================================================= */}
        {activeTab === 'company' && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">Company Profile & Contact Information</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Update phone numbers, official email, headline, and addresses displayed across the public site.
                </p>
              </div>
              <button
                onClick={handleSaveCompany}
                disabled={isSavingCompany}
                className="w-full sm:w-auto px-5 py-2.5 bg-vrnNavy hover:bg-slate-800 disabled:opacity-75 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
              >
                {isSavingCompany ? (
                  <>
                    <Loader2 className="w-4 h-4 text-vrnOrange animate-spin" />
                    <span>Saving to Firebase...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-vrnOrange" />
                    <span>Save Changes to Firebase</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company Display Name</label>
                <input
                  type="text"
                  value={companyForm.name}
                  onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Legal Registered Entity Name</label>
                <input
                  type="text"
                  value={companyForm.legalName}
                  onChange={(e) => setCompanyForm({ ...companyForm, legalName: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Hero Section Main Headline</label>
                <input
                  type="text"
                  value={companyForm.headline}
                  onChange={(e) => setCompanyForm({ ...companyForm, headline: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Hero Sub-Headline</label>
                <textarea
                  rows={2}
                  value={companyForm.subHeadline}
                  onChange={(e) => setCompanyForm({ ...companyForm, subHeadline: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Hindi Tagline</label>
                <input
                  type="text"
                  value={companyForm.taglineHindi}
                  onChange={(e) => setCompanyForm({ ...companyForm, taglineHindi: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">English Tagline</label>
                <input
                  type="text"
                  value={companyForm.taglineEnglish}
                  onChange={(e) => setCompanyForm({ ...companyForm, taglineEnglish: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Primary Contact Phone</label>
                <input
                  type="text"
                  value={companyForm.phone}
                  onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value, phoneRaw: `+91${e.target.value}` })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Corporate Email Address</label>
                <input
                  type="email"
                  value={companyForm.email}
                  onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">WhatsApp Hotline Number (with country code)</label>
                <input
                  type="text"
                  value={companyForm.whatsappNumber}
                  onChange={(e) => setCompanyForm({ ...companyForm, whatsappNumber: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Operating Hours</label>
                <input
                  type="text"
                  value={companyForm.hours}
                  onChange={(e) => setCompanyForm({ ...companyForm, hours: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Headquarters City & State</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    value={companyForm.headquarters.city}
                    placeholder="City"
                    onChange={(e) => setCompanyForm({ 
                      ...companyForm, 
                      headquarters: { ...companyForm.headquarters, city: e.target.value } 
                    })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    value={companyForm.headquarters.state}
                    placeholder="State"
                    onChange={(e) => setCompanyForm({ 
                      ...companyForm, 
                      headquarters: { ...companyForm.headquarters, state: e.target.value } 
                    })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-stretch sm:justify-end">
              <button
                onClick={handleSaveCompany}
                disabled={isSavingCompany}
                className="w-full sm:w-auto px-6 py-2.5 bg-vrnNavy hover:bg-slate-800 disabled:opacity-75 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow cursor-pointer transition-all"
              >
                {isSavingCompany ? (
                  <>
                    <Loader2 className="w-4 h-4 text-vrnOrange animate-spin" />
                    <span>Saving to Firebase...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-vrnOrange" />
                    <span>Save Changes to Firebase</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: HERO METRICS */}
        {/* ========================================================= */}
        {activeTab === 'metrics' && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">Hero Section Highlight Metrics</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage the 4 core verified stats displayed on the homepage banner.
                </p>
              </div>
              <button
                onClick={handleSaveMetrics}
                disabled={isSavingMetrics}
                className="w-full sm:w-auto px-5 py-2.5 bg-vrnNavy hover:bg-slate-800 disabled:opacity-75 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
              >
                {isSavingMetrics ? (
                  <>
                    <Loader2 className="w-4 h-4 text-vrnOrange animate-spin" />
                    <span>Saving to Firebase...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-vrnOrange" />
                    <span>Save Metrics to Firebase</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {metricsForm.map((metric, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Stat Metric #{idx + 1}</span>
                    <span className="text-vrnOrange font-mono font-semibold">{metric.value} {metric.unit}</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Metric Title / Label</label>
                    <input
                      type="text"
                      value={metric.label}
                      onChange={(e) => {
                        const copy = [...metricsForm];
                        copy[idx] = { ...copy[idx], label: e.target.value };
                        setMetricsForm(copy);
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Value (e.g. 25+, ₹30+)</label>
                      <input
                        type="text"
                        value={metric.value}
                        onChange={(e) => {
                          const copy = [...metricsForm];
                          copy[idx] = { ...copy[idx], value: e.target.value };
                          setMetricsForm(copy);
                        }}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-vrnNavy"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Unit (e.g. Years, Crore)</label>
                      <input
                        type="text"
                        value={metric.unit}
                        onChange={(e) => {
                          const copy = [...metricsForm];
                          copy[idx] = { ...copy[idx], unit: e.target.value };
                          setMetricsForm(copy);
                        }}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subtext / Verification</label>
                    <input
                      type="text"
                      value={metric.subtext}
                      onChange={(e) => {
                        const copy = [...metricsForm];
                        copy[idx] = { ...copy[idx], subtext: e.target.value };
                        setMetricsForm(copy);
                      }}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-stretch sm:justify-end">
              <button
                onClick={handleSaveMetrics}
                disabled={isSavingMetrics}
                className="w-full sm:w-auto px-6 py-2.5 bg-vrnNavy hover:bg-slate-800 disabled:opacity-75 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow cursor-pointer transition-all"
              >
                {isSavingMetrics ? (
                  <>
                    <Loader2 className="w-4 h-4 text-vrnOrange animate-spin" />
                    <span>Saving to Firebase...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-vrnOrange" />
                    <span>Save Metrics to Firebase</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PROJECTS MANAGER */}
        {/* ========================================================= */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">Project Portfolio Management</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage engineering projects, specifications, clients, and metrics shown on the Projects page.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingProject({
                    id: `project-${Date.now()}`,
                    title: '',
                    sector: 'Specialized Painting',
                    metric: '',
                    metricLabel: '',
                    image: '',
                    location: '',
                    specification: '',
                    timeline: 'Delivered On Schedule',
                    substrate: '',
                    safetyStatus: '100% Zero-Incident Logged',
                    client: '',
                  });
                  setIsProjectModalOpen(true);
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-vrnOrange hover:bg-amber-600 text-slate-900 text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add New Project
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  {project.image ? (
                    <div className="w-full h-40 sm:h-36 bg-slate-900 overflow-hidden relative border-b border-slate-200">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/85 text-white backdrop-blur-xs">
                        {project.sector}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-24 bg-slate-200 border-b border-slate-200 flex items-center justify-center text-slate-400 text-xs gap-1.5 font-mono">
                      <ImageIcon className="w-4 h-4 text-slate-400" />
                      <span>No image set</span>
                    </div>
                  )}

                  <div className="p-3.5 sm:p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-vrnNavy text-white">
                        {project.sector}
                      </span>
                      <span className="text-xs font-bold text-vrnOrange">
                        {project.metric} {project.metricLabel}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-1">
                      📍 {project.location || 'Location specified'}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 bg-white p-2 rounded border border-slate-200">
                      {project.specification}
                    </p>

                    {project.client && (
                      <p className="text-[11px] text-slate-500 font-mono">
                        Client: <strong className="text-slate-800">{project.client}</strong>
                      </p>
                    )}
                  </div>

                  <div className="bg-slate-100 p-2.5 sm:p-3 border-t border-slate-200 flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingProject(project);
                        setIsProjectModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded border border-slate-300 flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-vrnNavy" />
                      Edit
                    </button>
                    {confirmDeleteId === project.id ? (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => doDeleteProject(project.id, project.title)}
                          className="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold rounded shadow transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          Confirm Delete?
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(null)}
                          className="px-2 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-[11px] rounded font-medium transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(project.id)}
                        className="px-2.5 py-1.5 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold rounded border border-rose-200 flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: LEADS & INQUIRIES INBOX */}
        {/* ========================================================= */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">Procurement Leads & Contact Inquiries</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Incoming submissions from Contact Form, RFP Configurator, and Capability Download.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={loadLeads}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeads ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
                <button
                  onClick={exportLeadsToCsv}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export CSV
                </button>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar text-xs -mx-1 px-1">
              {(['all', 'new', 'contacted', 'reviewed'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setLeadFilter(filter)}
                  className={`px-3 py-1.5 rounded-full font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    leadFilter === filter
                      ? 'bg-vrnNavy text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Leads Content */}
            {isLoadingLeads ? (
              <div className="py-12 text-center text-xs text-slate-500">
                <div className="w-6 h-6 border-2 border-vrnNavy border-t-vrnOrange rounded-full animate-spin mx-auto mb-2" />
                Loading leads from Firebase Firestore...
              </div>
            ) : leads.length === 0 ? (
              <div className="py-12 px-4 text-center text-xs text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                No inquiries recorded yet. Submissions through the contact form and RFP configurator will automatically appear here.
              </div>
            ) : (
              <>
                {/* 1. MOBILE CARDS VIEW (block on phone, hidden on md+) */}
                <div className="block md:hidden space-y-3">
                  {leads
                    .filter((l) => leadFilter === 'all' || l.status === leadFilter)
                    .map((lead) => (
                      <div
                        key={lead.id || lead.referenceToken}
                        className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 shadow-xs"
                      >
                        {/* Header: Status and Timestamp */}
                        <div className="flex items-center justify-between gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            lead.status === 'contacted'
                              ? 'bg-emerald-100 text-emerald-800'
                              : lead.status === 'reviewed'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {lead.status || 'new'}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500">
                            {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : 'N/A'}
                          </span>
                        </div>

                        {/* Client details */}
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 leading-snug">
                            {lead.name || 'Anonymous User'}
                          </h4>
                          <p className="text-xs text-slate-500">
                            {lead.company || 'Direct Client'}
                          </p>
                          {lead.referenceToken && (
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                              ID: {lead.referenceToken}
                            </p>
                          )}
                        </div>

                        {/* Quick 1-tap Contact Action Buttons on Phone */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {lead.phone ? (
                            <a
                              href={`tel:${lead.phone}`}
                              className="px-2.5 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">Call</span>
                            </a>
                          ) : (
                            <span className="px-2.5 py-2 bg-slate-100 text-slate-400 rounded-lg text-xs flex items-center justify-center gap-1">
                              <Phone className="w-3.5 h-3.5" /> No Phone
                            </span>
                          )}

                          {lead.email ? (
                            <a
                              href={`mailto:${lead.email}`}
                              className="px-2.5 py-2 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">Email</span>
                            </a>
                          ) : (
                            <span className="px-2.5 py-2 bg-slate-100 text-slate-400 rounded-lg text-xs flex items-center justify-center gap-1">
                              <Mail className="w-3.5 h-3.5" /> No Email
                            </span>
                          )}
                        </div>

                        {/* Sector info */}
                        <div className="flex items-center justify-between text-[11px] bg-white p-2 rounded border border-slate-200">
                          <span className="font-medium text-slate-700 truncate">{lead.sector || 'General Inquiry'}</span>
                          <span className="text-slate-400 text-[10px] shrink-0 font-mono">{lead.sourceSection}</span>
                        </div>

                        {/* Status Change Buttons on phone */}
                        <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                          {lead.status !== 'contacted' && (
                            <button
                              onClick={() => handleLeadStatusChange(lead.id || lead.referenceToken || '', 'contacted')}
                              className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition-colors cursor-pointer text-center"
                            >
                              Mark Contacted
                            </button>
                          )}
                          {lead.status !== 'reviewed' && lead.status !== 'contacted' && (
                            <button
                              onClick={() => handleLeadStatusChange(lead.id || lead.referenceToken || '', 'reviewed')}
                              className="flex-1 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded text-xs font-semibold transition-colors cursor-pointer text-center"
                            >
                              Mark Reviewed
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                {/* 2. DESKTOP TABLE VIEW (hidden on phone, visible on md+) */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                        <th className="py-3 px-3">Status</th>
                        <th className="py-3 px-3">Date</th>
                        <th className="py-3 px-3">Client / Contact</th>
                        <th className="py-3 px-3">Phone & Email</th>
                        <th className="py-3 px-3">Source & Sector</th>
                        <th className="py-3 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {leads
                        .filter((l) => leadFilter === 'all' || l.status === leadFilter)
                        .map((lead) => (
                          <tr key={lead.id || lead.referenceToken} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                lead.status === 'contacted'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : lead.status === 'reviewed'
                                  ? 'bg-sky-100 text-sky-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}>
                                {lead.status || 'new'}
                              </span>
                            </td>
                            <td className="py-3 px-3 font-mono text-slate-500">
                              {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : 'N/A'}
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-bold text-slate-900">{lead.name || 'Anonymous User'}</div>
                              <div className="text-slate-500">{lead.company || 'Direct Client'}</div>
                              {lead.referenceToken && (
                                <div className="text-[10px] text-slate-400 font-mono">{lead.referenceToken}</div>
                              )}
                            </td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-1 text-slate-700">
                                <Phone className="w-3 h-3 text-slate-400" />
                                <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone || 'N/A'}</a>
                              </div>
                              <div className="flex items-center gap-1 text-slate-500">
                                <Mail className="w-3 h-3 text-slate-400" />
                                <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email || 'N/A'}</a>
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-medium text-slate-800">{lead.sector || 'General Inquiry'}</div>
                              <div className="text-slate-400 text-[10px]">{lead.sourceSection}</div>
                            </td>
                            <td className="py-3 px-3 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {lead.status !== 'contacted' && (
                                  <button
                                    onClick={() => handleLeadStatusChange(lead.id || lead.referenceToken || '', 'contacted')}
                                    className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded border border-emerald-200 text-[11px] font-medium cursor-pointer"
                                  >
                                    Mark Contacted
                                  </button>
                                )}
                                {lead.status !== 'reviewed' && lead.status !== 'contacted' && (
                                  <button
                                    onClick={() => handleLeadStatusChange(lead.id || lead.referenceToken || '', 'reviewed')}
                                    className="px-2 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded border border-sky-200 text-[11px] font-medium cursor-pointer"
                                  >
                                    Mark Reviewed
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: FIREBASE SETTINGS */}
        {/* ========================================================= */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Firebase & System Environment</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Connected configuration parameters and reset controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Database className="w-4 h-4 text-vrnNavy" />
                  Firebase Project
                </div>
                <div className="text-xs font-mono text-slate-600 bg-white p-2.5 rounded border border-slate-200 break-all leading-relaxed">
                  <strong>Project ID:</strong> {firebaseConfig.projectId}<br />
                  <strong>Auth Domain:</strong> {firebaseConfig.authDomain}<br />
                  <strong>Storage:</strong> {firebaseConfig.storageBucket}<br />
                  <strong>Measurement ID:</strong> {firebaseConfig.measurementId}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Shortcut Triggers Configured
                </div>
                <div className="text-xs text-slate-600 bg-white p-2.5 rounded border border-slate-200 space-y-1.5 leading-relaxed">
                  <div>• <strong>Three Shift Presses:</strong> Tap Shift 3 times rapidly.</div>
                  <div>• <strong>Three Shift Clicks:</strong> Hold Shift and click 3 times.</div>
                  <div>• <strong>Direct URL:</strong> <code>/admin</code></div>
                  <div>• <strong>HotKey:</strong> <code>Ctrl + Shift + A</code></div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-3">
              <div className="text-sm font-bold text-rose-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                Factory Content Reset
              </div>
              <p className="text-xs text-rose-700 leading-relaxed">
                If needed, clear local modifications and revert back to the original verified corporate content from 1997.
              </p>
              <button
                onClick={() => {
                  if (window.confirm('Reset all content back to factory defaults?')) {
                    resetContentToDefaults();
                    refreshContent();
                    alert('Content reset to factory defaults.');
                  }
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg shadow transition-colors cursor-pointer text-center"
              >
                Reset Content to Default
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* EDIT / CREATE PROJECT MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isProjectModalOpen && editingProject && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 border border-slate-200 my-auto sm:my-8 max-h-[92vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate pr-2">
                  {editingProject.title ? `Edit Project: ${editingProject.title}` : 'Add New Engineering Project'}
                </h3>
                <button
                  onClick={() => setIsProjectModalOpen(false)}
                  className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 text-xs font-bold cursor-pointer shrink-0"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveProjectForm} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    placeholder="e.g. Bandra-Worli Sea Link Marine Protective Coating"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Sector Division</label>
                    <select
                      value={editingProject.sector}
                      onChange={(e) => setEditingProject({ ...editingProject, sector: e.target.value as ProjectItem['sector'] })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white"
                    >
                      <option value="Specialized Painting">Specialized Painting</option>
                      <option value="Civil Infrastructure">Civil Infrastructure</option>
                      <option value="Structural Fabrication">Structural Fabrication</option>
                      <option value="Urban Beautification">Urban Beautification</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Client Authority</label>
                    <input
                      type="text"
                      value={editingProject.client || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, client: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                      placeholder="e.g. MSRDC / State PWD"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Highlight Metric (e.g. 100 Ft, Turnkey)</label>
                    <input
                      type="text"
                      value={editingProject.metric}
                      onChange={(e) => setEditingProject({ ...editingProject, metric: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Metric Label (e.g. Above Sea Level)</label>
                    <input
                      type="text"
                      value={editingProject.metricLabel}
                      onChange={(e) => setEditingProject({ ...editingProject, metricLabel: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Location Corridor</label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    placeholder="e.g. Mumbai Coastal Corridor, Maharashtra"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Technical Specification</label>
                  <textarea
                    rows={2}
                    value={editingProject.specification}
                    onChange={(e) => setEditingProject({ ...editingProject, specification: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    placeholder="e.g. Marine Protective Coating · Anti-Carbonation Coating · Offshore High-Salinity Barrier"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Substrate & Engineering Scope</label>
                  <input
                    type="text"
                    value={editingProject.substrate}
                    onChange={(e) => setEditingProject({ ...editingProject, substrate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    placeholder="e.g. Marine High-Performance Concrete Pylons & Cable Anchors"
                  />
                </div>

                {/* PROJECT IMAGE SECTION */}
                <div className="p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-vrnNavy" />
                      Project Photo / Cover Image
                    </label>
                    {editingProject.image && (
                      <button
                        type="button"
                        onClick={() => setEditingProject({ ...editingProject, image: '' })}
                        className="text-[11px] text-rose-600 hover:underline font-medium cursor-pointer"
                      >
                        Remove Image
                      </button>
                    )}
                  </div>

                  {/* Image Preview */}
                  {editingProject.image ? (
                    <div className="relative w-full h-36 sm:h-44 bg-slate-900 rounded-lg overflow-hidden border border-slate-300 shadow-inner">
                      <img src={editingProject.image} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white rounded text-[10px] font-mono font-bold">
                        Active Project Cover
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-20 sm:h-24 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-400 text-xs bg-white">
                      <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-slate-300" />
                      <span>No cover image selected yet</span>
                    </div>
                  )}

                  {/* 1. File Upload */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5 text-vrnOrange" />
                      Option A: Upload Image from Computer / Phone:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileUpload}
                      className="block w-full text-xs text-slate-600 file:mr-2 sm:file:mr-3 file:py-1 file:px-2.5 sm:file:py-1.5 sm:file:px-3 file:rounded file:border-0 file:text-[11px] sm:file:text-xs file:font-semibold file:bg-vrnNavy file:text-white hover:file:bg-slate-800 cursor-pointer bg-white p-1 rounded-lg border border-slate-200"
                    />
                  </div>

                  {/* 2. Web URL */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Link2 className="w-3.5 h-3.5 text-vrnNavy" />
                      Option B: Or Paste Image Web URL:
                    </label>
                    <input
                      type="url"
                      value={editingProject.image}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      placeholder="https://images.unsplash.com/... or https://..."
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-vrnNavy focus:outline-none"
                    />
                  </div>

                  {/* 3. Preset Gallery */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                      Option C: Or Select from Pre-Verified Infrastructure Photos:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {PRESET_PROJECT_IMAGES.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setEditingProject({ ...editingProject, image: preset.url })}
                          className={`relative rounded-lg overflow-hidden border p-1 text-left transition-all cursor-pointer ${
                            editingProject.image === preset.url
                              ? 'border-vrnOrange ring-2 ring-vrnOrange bg-orange-50/50'
                              : 'border-slate-200 bg-white hover:border-slate-400'
                          }`}
                        >
                          <img src={preset.url} alt={preset.name} className="w-full h-12 object-cover rounded" />
                          <div className="text-[10px] font-medium text-slate-700 truncate mt-1">
                            {preset.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="w-full sm:w-auto px-4 py-2.5 sm:py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingProject}
                    className="w-full sm:w-auto px-5 py-2.5 sm:py-2 bg-vrnNavy hover:bg-slate-800 disabled:opacity-75 text-white text-xs font-semibold rounded-lg shadow flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    {isSavingProject ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 text-vrnOrange animate-spin" />
                        <span>Saving Project...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-3.5 h-3.5 text-vrnOrange" />
                        <span>Save Project</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Save Status Notification */}
      <AnimatePresence>
        {saveStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[100] max-w-[92vw] bg-slate-900 text-white border-2 border-emerald-500 shadow-2xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold font-mono"
          >
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 animate-pulse" />
            <span className="truncate">{saveStatus}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default AdminPage;

// Content Management Service for Varan Corporation Admin Portal
// Seamless Firestore synchronization with local fallback & auto-seeding

import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { 
  companyConfig as defaultCompanyConfig, 
  heroMetrics as defaultHeroMetrics, 
  projectsData as defaultProjectsData,
  type ProjectItem,
  type MetricProof 
} from '../data/content';

export type CompanyConfigData = typeof defaultCompanyConfig;

export interface LeadRecord {
  id?: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  sector?: string;
  scale?: number | string;
  timeline?: number | string;
  sourceSection?: string;
  specialDirectives?: string;
  referenceToken?: string;
  timestamp: string;
  status?: 'new' | 'reviewed' | 'contacted' | 'archived';
  notes?: string;
}

const STORAGE_KEYS = {
  COMPANY: 'vrn_cms_company_config',
  HERO_METRICS: 'vrn_cms_hero_metrics',
  PROJECTS: 'vrn_cms_projects',
  LEADS: 'vrn_lead_queue',
};

// Sanitize helper to remove `undefined` fields that cause Firestore setDoc to throw
function sanitizeForFirestore<T>(data: T): T {
  if (data === null || data === undefined) {
    return '' as unknown as T;
  }
  if (Array.isArray(data)) {
    return data.map(item => sanitizeForFirestore(item)) as unknown as T;
  }
  if (typeof data === 'object') {
    const clean: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(data as Record<string, unknown>)) {
      if (val === undefined) {
        clean[key] = '';
      } else if (val !== null && typeof val === 'object') {
        clean[key] = sanitizeForFirestore(val);
      } else {
        clean[key] = val;
      }
    }
    return clean as unknown as T;
  }
  return data;
}

// -------------------------------------------------------------
// 1. COMPANY CONFIGURATION CRUD
// -------------------------------------------------------------

export async function fetchCompanyConfig(): Promise<CompanyConfigData> {
  // First check localStorage for instant response
  const local = localStorage.getItem(STORAGE_KEYS.COMPANY);
  let localData: CompanyConfigData | null = null;
  if (local) {
    try {
      localData = JSON.parse(local);
    } catch {
      // ignore
    }
  }

  try {
    const docRef = doc(db, 'settings', 'company');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as CompanyConfigData;
      const merged = { ...defaultCompanyConfig, ...data };
      localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(merged));
      return merged;
    } else if (localData) {
      // Save localData to Firestore so it exists in cloud
      setDoc(docRef, sanitizeForFirestore({ ...localData, updatedAt: serverTimestamp() }), { merge: true }).catch(() => {});
    }
  } catch (err) {
    console.warn('[CMS] Firestore fetch company config fallback:', err);
  }

  return localData ? { ...defaultCompanyConfig, ...localData } : defaultCompanyConfig;
}

export async function saveCompanyConfig(config: CompanyConfigData): Promise<{ success: boolean; error?: string }> {
  // Update localStorage immediately
  try {
    localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(config));
    window.dispatchEvent(new CustomEvent('vrn_content_updated', { detail: { type: 'company', data: config } }));
  } catch (e) {
    console.warn('[CMS] LocalStorage save error:', e);
  }

  try {
    const docRef = doc(db, 'settings', 'company');
    const cleanData = sanitizeForFirestore({ ...config, updatedAt: serverTimestamp() });
    await setDoc(docRef, cleanData, { merge: true });
    return { success: true };
  } catch (err: unknown) {
    console.warn('[CMS] Firestore save company config fallback:', err);
    return { 
      success: true, 
      error: err instanceof Error ? `Saved locally (${err.message})` : undefined 
    };
  }
}

// -------------------------------------------------------------
// 2. HERO METRICS CRUD
// -------------------------------------------------------------

export async function fetchHeroMetrics(): Promise<MetricProof[]> {
  const local = localStorage.getItem(STORAGE_KEYS.HERO_METRICS);
  let localData: MetricProof[] | null = null;
  if (local) {
    try {
      localData = JSON.parse(local);
    } catch {
      // ignore
    }
  }

  try {
    const docRef = doc(db, 'settings', 'heroMetrics');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data()?.metrics) {
      const metrics = docSnap.data().metrics as MetricProof[];
      localStorage.setItem(STORAGE_KEYS.HERO_METRICS, JSON.stringify(metrics));
      return metrics;
    }
  } catch (err) {
    console.warn('[CMS] Firestore fetch hero metrics fallback:', err);
  }

  return localData || defaultHeroMetrics;
}

export async function saveHeroMetrics(metrics: MetricProof[]): Promise<{ success: boolean; error?: string }> {
  try {
    localStorage.setItem(STORAGE_KEYS.HERO_METRICS, JSON.stringify(metrics));
    window.dispatchEvent(new CustomEvent('vrn_content_updated', { detail: { type: 'metrics', data: metrics } }));
  } catch (e) {
    console.warn('[CMS] LocalStorage save error:', e);
  }

  try {
    const docRef = doc(db, 'settings', 'heroMetrics');
    const cleanData = sanitizeForFirestore({ metrics, updatedAt: serverTimestamp() });
    await setDoc(docRef, cleanData, { merge: true });
    return { success: true };
  } catch (err: unknown) {
    return { 
      success: true, 
      error: err instanceof Error ? `Saved locally (${err.message})` : undefined 
    };
  }
}

// -------------------------------------------------------------
// 3. PROJECTS CRUD (WITH AUTOMATIC FIRESTORE SEEDING)
// -------------------------------------------------------------

// Helper to seed default projects into Firestore if empty
async function seedDefaultProjects(): Promise<void> {
  try {
    for (const project of defaultProjectsData) {
      const docRef = doc(db, 'projects', project.id);
      await setDoc(docRef, sanitizeForFirestore({ ...project, createdAt: serverTimestamp() }), { merge: true });
    }
  } catch (e) {
    console.warn('[CMS] Could not seed default projects to Firestore:', e);
  }
}

export async function fetchProjects(): Promise<ProjectItem[]> {
  // Check local cache first
  const local = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  let localData: ProjectItem[] | null = null;
  if (local) {
    try {
      localData = JSON.parse(local);
    } catch {
      // ignore
    }
  }

  try {
    const projectsCol = collection(db, 'projects');
    const snap = await getDocs(projectsCol);
    if (!snap.empty) {
      const projects: ProjectItem[] = [];
      snap.forEach((d) => {
        projects.push({ ...(d.data() as ProjectItem), id: d.id });
      });
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
      return projects;
    } else {
      // If Firestore is empty, seed defaults in the background!
      seedDefaultProjects().catch(() => {});
    }
  } catch (err) {
    console.warn('[CMS] Firestore fetch projects fallback:', err);
  }

  return localData || defaultProjectsData;
}

export async function saveProject(project: ProjectItem): Promise<{ success: boolean; error?: string }> {
  // 1. Immediately update localStorage & dispatch event
  const current = (await fetchProjects()) || defaultProjectsData;
  const index = current.findIndex((p) => p.id === project.id);
  let updated: ProjectItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = project;
  } else {
    updated = [project, ...current];
  }
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('vrn_content_updated', { detail: { type: 'projects', data: updated } }));

  // 2. Persist to Firestore
  try {
    const docRef = doc(db, 'projects', project.id);
    const cleanData = sanitizeForFirestore({ ...project, updatedAt: serverTimestamp() });
    await setDoc(docRef, cleanData, { merge: true });
    return { success: true };
  } catch (err: unknown) {
    console.warn('[CMS] Firestore saveProject error:', err);
    return { 
      success: true, 
      error: err instanceof Error ? `Saved locally (${err.message})` : undefined 
    };
  }
}

export async function deleteProject(projectId: string): Promise<{ success: boolean; error?: string }> {
  // 1. Immediately remove from localStorage & dispatch event
  const current = (await fetchProjects()) || defaultProjectsData;
  const updated = current.filter((p) => p.id !== projectId);
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('vrn_content_updated', { detail: { type: 'projects', data: updated } }));

  // 2. Delete from Firestore
  try {
    const docRef = doc(db, 'projects', projectId);
    await deleteDoc(docRef);
    return { success: true };
  } catch (err: unknown) {
    console.warn('[CMS] Firestore deleteProject error:', err);
    return { 
      success: true, 
      error: err instanceof Error ? `Deleted locally (${err.message})` : undefined 
    };
  }
}

// -------------------------------------------------------------
// 4. LEADS & INQUIRIES MANAGEMENT
// -------------------------------------------------------------

export async function fetchLeads(): Promise<LeadRecord[]> {
  try {
    const leadsCol = collection(db, 'leads');
    const q = query(leadsCol, orderBy('timestamp', 'desc'));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const leads: LeadRecord[] = [];
      snap.forEach((d) => {
        leads.push({ ...(d.data() as LeadRecord), id: d.id });
      });
      return leads;
    }
  } catch (err) {
    console.warn('[CMS] Firestore fetch leads fallback to local:', err);
  }

  // Fallback to localStorage queue
  try {
    const local = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (local) {
      const items = JSON.parse(local) as LeadRecord[];
      return items.map((item, idx) => ({
        ...item,
        id: item.referenceToken || `lead-${idx}`,
        status: item.status || 'new',
      }));
    }
  } catch {
    // ignore
  }

  return [];
}

export async function recordLeadToFirestore(lead: LeadRecord): Promise<void> {
  try {
    const docId = lead.referenceToken || `lead-${Date.now()}`;
    const docRef = doc(db, 'leads', docId);
    const cleanLead = sanitizeForFirestore({
      ...lead,
      createdAt: serverTimestamp(),
      status: 'new',
    });
    await setDoc(docRef, cleanLead, { merge: true });
  } catch (err) {
    console.warn('[CMS] Failed to save lead to Firestore (saved locally in queue):', err);
  }
}

export async function updateLeadStatus(id: string, status: LeadRecord['status'], notes?: string): Promise<boolean> {
  // Update in localStorage
  try {
    const local = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (local) {
      const items = JSON.parse(local) as LeadRecord[];
      const updated = items.map((item) => {
        if (item.referenceToken === id || item.id === id) {
          return { ...item, status, ...(notes ? { notes } : {}) };
        }
        return item;
      });
      localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
    }
  } catch {
    // ignore
  }

  // Update in Firestore
  try {
    const docRef = doc(db, 'leads', id);
    const updateData = sanitizeForFirestore({
      status,
      ...(notes ? { notes } : {}),
      updatedAt: serverTimestamp(),
    });
    await setDoc(docRef, updateData, { merge: true });
  } catch (err) {
    console.warn('[CMS] Updating lead in Firestore fallback:', err);
  }

  return true;
}

// -------------------------------------------------------------
// 5. RESET / INITIALIZE ALL DATA
// -------------------------------------------------------------
export async function resetContentToDefaults(): Promise<void> {
  localStorage.removeItem(STORAGE_KEYS.COMPANY);
  localStorage.removeItem(STORAGE_KEYS.HERO_METRICS);
  localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  window.dispatchEvent(new CustomEvent('vrn_content_updated', { detail: { type: 'reset' } }));
}

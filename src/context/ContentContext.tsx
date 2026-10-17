// ContentContext: Provides live CMS content (Company config, Hero metrics, Projects)
// Syncs in real time with Firestore / localStorage changes

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  fetchCompanyConfig, 
  saveCompanyConfig, 
  fetchHeroMetrics, 
  saveHeroMetrics, 
  fetchProjects, 
  saveProject, 
  deleteProject, 
  type CompanyConfigData 
} from '../services/contentCmsService';
import { 
  companyConfig as defaultCompany, 
  heroMetrics as defaultHero, 
  projectsData as defaultProjects,
  type MetricProof,
  type ProjectItem 
} from '../data/content';

interface ContentContextType {
  company: CompanyConfigData;
  heroMetrics: MetricProof[];
  projects: ProjectItem[];
  isLoaded: boolean;
  updateCompany: (config: CompanyConfigData) => Promise<{ success: boolean; error?: string }>;
  updateHeroMetrics: (metrics: MetricProof[]) => Promise<{ success: boolean; error?: string }>;
  saveProjectItem: (project: ProjectItem) => Promise<{ success: boolean; error?: string }>;
  deleteProjectItem: (id: string) => Promise<{ success: boolean; error?: string }>;
  refreshContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState<CompanyConfigData>(defaultCompany);
  const [heroMetrics, setHeroMetrics] = useState<MetricProof[]>(defaultHero);
  const [projects, setProjects] = useState<ProjectItem[]>(defaultProjects);
  const [isLoaded, setIsLoaded] = useState(false);

  const refreshContent = useCallback(async () => {
    try {
      const [comp, metrics, projs] = await Promise.all([
        fetchCompanyConfig(),
        fetchHeroMetrics(),
        fetchProjects()
      ]);
      setCompany(comp);
      setHeroMetrics(metrics);
      setProjects(projs);
    } catch (err) {
      console.warn('[ContentProvider] Error fetching content:', err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    refreshContent();

    const handleExternalUpdate = (e: Event) => {
      const custom = e as CustomEvent<{ type: string; data: any }>;
      if (custom.detail?.type === 'company') {
        setCompany(custom.detail.data);
      } else if (custom.detail?.type === 'metrics') {
        setHeroMetrics(custom.detail.data);
      } else if (custom.detail?.type === 'projects') {
        setProjects(custom.detail.data);
      } else if (custom.detail?.type === 'reset') {
        refreshContent();
      }
    };

    window.addEventListener('vrn_content_updated', handleExternalUpdate);
    return () => window.removeEventListener('vrn_content_updated', handleExternalUpdate);
  }, [refreshContent]);

  const updateCompany = async (newConfig: CompanyConfigData) => {
    setCompany(newConfig);
    const result = await saveCompanyConfig(newConfig);
    return result;
  };

  const updateHeroMetrics = async (newMetrics: MetricProof[]) => {
    setHeroMetrics(newMetrics);
    const result = await saveHeroMetrics(newMetrics);
    return result;
  };

  const saveProjectItem = async (project: ProjectItem) => {
    const existingIndex = projects.findIndex((p) => p.id === project.id);
    let updated: ProjectItem[];
    if (existingIndex >= 0) {
      updated = [...projects];
      updated[existingIndex] = project;
    } else {
      updated = [project, ...projects];
    }
    setProjects(updated);
    const result = await saveProject(project);
    return result;
  };

  const deleteProjectItem = async (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    const result = await deleteProject(id);
    return result;
  };

  return (
    <ContentContext.Provider
      value={{
        company,
        heroMetrics,
        projects,
        isLoaded,
        updateCompany,
        updateHeroMetrics,
        saveProjectItem,
        deleteProjectItem,
        refreshContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    // Graceful fallback outside provider
    return {
      company: defaultCompany,
      heroMetrics: defaultHero,
      projects: defaultProjects,
      isLoaded: true,
      updateCompany: async () => ({ success: true, error: undefined }),
      updateHeroMetrics: async () => ({ success: true, error: undefined }),
      saveProjectItem: async () => ({ success: true, error: undefined }),
      deleteProjectItem: async () => ({ success: true, error: undefined }),
      refreshContent: async () => {},
    } as ContentContextType;
  }
  return ctx;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  keyDeliverables: string[];
  targetSectors: string[];
  metrics: Metric[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string; // The Lucide icon name, to be mapped dynamically
  description: string;
  services: ServiceDetail[];
}

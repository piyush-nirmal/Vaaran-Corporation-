import { useState, useEffect } from 'react';
import { servicesData as initialServicesData } from '../data/services';
import type { ServiceCategory } from '../types/domain';

const STORAGE_KEY = 'varan_coop_services';

export const useServices = () => {
  const [services, setServices] = useState<ServiceCategory[]>(initialServicesData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadServices = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setServices(JSON.parse(stored));
        } else {
          setServices(initialServicesData);
        }
      } catch (error) {
        console.error('Failed to load services from localStorage:', error);
        setServices(initialServicesData);
      }
      setIsLoaded(true);
    };

    loadServices();

    // Listen for custom event to update state across components if needed
    const handleStorageChange = () => {
      loadServices();
    };
    
    window.addEventListener('services-updated', handleStorageChange);
    return () => window.removeEventListener('services-updated', handleStorageChange);
  }, []);

  const saveServices = (newServices: ServiceCategory[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newServices));
      setServices(newServices);
      // Dispatch event to notify other components (like ServiceTabs)
      window.dispatchEvent(new Event('services-updated'));
    } catch (error) {
      console.error('Failed to save services to localStorage:', error);
    }
  };

  return { services, saveServices, isLoaded };
};

import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { track } from '../services/analytics';
import { companyConfig } from '../data/content';

interface WhatsAppContextType {
  contextMessage: string;
  setContextMessage: (message: string) => void;
  openWhatsApp: (overrideText?: string, location?: string) => void;
  whatsAppNumber: string;
}

const WhatsAppContext = createContext<WhatsAppContextType | null>(null);

export const WhatsAppProvider = ({ children }: { children: ReactNode }) => {
  const [contextMessage, setContextMessage] = useState<string>(
    'Hi Varan Corporation, I am looking for a B2B technical bid for an infrastructure project.'
  );

  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || companyConfig.whatsappNumber || '919876543210';
  const cleanNumber = rawNumber.replace(/\D/g, '') || '919876543210';

  const openWhatsApp = useCallback((overrideText?: string, location: string = 'floating_button') => {
    const textToEncode = overrideText || contextMessage;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToEncode)}`;

    track('whatsapp_click', {
      location,
      message_preview: textToEncode.substring(0, 50),
    });

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, [cleanNumber, contextMessage]);

  const value = useMemo(
    () => ({
      contextMessage,
      setContextMessage,
      openWhatsApp,
      whatsAppNumber: cleanNumber,
    }),
    [contextMessage, cleanNumber, openWhatsApp]
  );

  return <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>;
};

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
};

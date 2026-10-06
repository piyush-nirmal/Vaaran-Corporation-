import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWhatsApp } from '../context/WhatsAppContext';

export const WhatsAppFloatingButton: FC = () => {
  const { openWhatsApp } = useWhatsApp();
  const [isExpanded, setIsExpanded] = useState(true);

  // Requirement 10: Label WhatsApp button "Chat with us" for the first 5 seconds, then collapse to icon only
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex items-center group">
      {/* Tooltip on hover (when collapsed) */}
      {!isExpanded && (
        <div className="hidden sm:block mr-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-sans">
          Chat with us
        </div>
      )}

      <button
        type="button"
        onClick={() => openWhatsApp(undefined, 'floating_widget')}
        className={`relative rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer overflow-hidden ${
          isExpanded ? 'px-4 py-3 gap-2.5 h-14' : 'w-14 h-14 justify-center'
        }`}
        aria-label="Chat on WhatsApp with Varan Corporation"
      >
        {/* WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 fill-current shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Collapsible Text Label */}
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-xs font-bold tracking-wide whitespace-nowrap font-display text-white pr-1"
            >
              Chat with us
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse status indicator */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-300 border-2 border-white rounded-full animate-pulse" />
      </button>
    </div>
  );
};

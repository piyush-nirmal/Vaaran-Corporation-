// Lightweight analytics and event tracking helper
// Safely supports Google Analytics (gtag), Google Tag Manager (dataLayer), and development logging

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsEvent =
  | 'cta_click'
  | 'rfp_step_view'
  | 'rfp_submit_success'
  | 'rfp_submit_error'
  | 'whatsapp_click'
  | 'call_click'
  | 'profile_download'
  | 'simulator_apply_to_rfp'
  | 'project_modal_open'
  | 'machine_modal_open'
  | 'filter_change';

export interface EventParams {
  location?: string;
  step?: number | string;
  sector?: string;
  action?: string;
  source?: string;
  value?: number | string;
  label?: string;
  referenceToken?: string;
  error?: string;
  [key: string]: unknown;
}

export function track(eventName: AnalyticsEvent, params: EventParams = {}): void {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // 1. Development log
  if (import.meta.env.DEV) {
    console.log(`[VRN Analytics] ${eventName}:`, payload);
  }

  // 2. Google Analytics (gtag.js)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (e) {
      console.warn('Analytics gtag error:', e);
    }
  }

  // 3. Google Tag Manager (dataLayer)
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    try {
      window.dataLayer.push(payload);
    } catch (e) {
      console.warn('Analytics dataLayer error:', e);
    }
  }
}

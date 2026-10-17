/**
 * Centralized Configuration & Environment Keys for Varan Corporation
 * 
 * Import this file whenever you need access to Firebase credentials,
 * Admin security passcodes, WhatsApp hotline, or API endpoints.
 * 
 * Usage example:
 *   import { KEYS } from '../config/keys';
 *   // or
 *   import { FIREBASE_KEYS, ADMIN_KEYS } from '../config/keys';
 */

export const FIREBASE_KEYS = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAAAIDUoLioOO-0e7itEBDgCwS07clSebA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "varan-corp.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "varan-corp",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "varan-corp.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "912276716647",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:912276716647:web:9b13005626edcbc4e828c2",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-W4LSZRWT97",
} as const;

export const ADMIN_KEYS = {
  // Master admin passcode configured in Vercel / .env (fallback: 'varan1997')
  passcode: import.meta.env.VITE_ADMIN_PASSCODE || "varan1997",
  // Standard emergency administrator fallback passwords
  allowedPasscodes: [
    import.meta.env.VITE_ADMIN_PASSCODE,
    "varan1997",
    "admin1997",
    "varan@2026"
  ].filter(Boolean) as string[],
} as const;

export const CONTACT_KEYS = {
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210",
  leadEndpoint: import.meta.env.VITE_LEAD_ENDPOINT || "",
} as const;

export const APP_ENV = {
  isDev: Boolean(import.meta.env.DEV),
  isProd: Boolean(import.meta.env.PROD),
  mode: import.meta.env.MODE || "production",
} as const;

// Unified Master Object
export const KEYS = {
  firebase: FIREBASE_KEYS,
  admin: ADMIN_KEYS,
  contact: CONTACT_KEYS,
  app: APP_ENV,
} as const;

export default KEYS;

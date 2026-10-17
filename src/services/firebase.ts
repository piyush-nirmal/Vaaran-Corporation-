// Firebase configuration and initialization for Varan Corporation
// Imported and initialized with official project config

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAAAIDUoLioOO-0e7itEBDgCwS07clSebA",
  authDomain: "varan-corp.firebaseapp.com",
  projectId: "varan-corp",
  storageBucket: "varan-corp.firebasestorage.app",
  messagingSenderId: "912276716647",
  appId: "1:912276716647:web:9b13005626edcbc4e828c2",
  measurementId: "G-W4LSZRWT97"
};

// Initialize Firebase App safely (singleton pattern)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Analytics conditionally (safely handles SSR or non-browser/restricted environments)
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics not supported in current environment
  });
}

export default app;

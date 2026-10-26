import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }): UserConfig => ({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }
            return 'vendor-core';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
    // Disable source maps in production to prevent source code exposure
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        // Strip console.log and console.debug in production (keep warn/error for diagnostics)
        drop_console: mode === 'production',
        drop_debugger: true,
      },
    },
  },
}))

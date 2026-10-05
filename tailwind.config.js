/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-Contrast Pure Black & White Architecture
        noir: {
          950: '#000000',
          900: '#070707',
          850: '#0D0D0D',
          800: '#141414',
          700: '#222222',
          600: '#333333',
          500: '#555555',
        },
        alabaster: {
          DEFAULT: '#FFFFFF',
          pure: '#FFFFFF',
          50: '#FBFBFB',
          100: '#F5F5F7',
          200: '#EAEAEF',
          300: '#D5D5DC',
        },
        // Warm Titanium Gold / Champagne Accent (Single Luxury Accent - No muddy transitions)
        champagne: {
          DEFAULT: '#C5A880',
          light: '#E5C39E',
          soft: '#F4EAE0',
          dark: '#9F8360',
        },
        titanium: {
          DEFAULT: '#E2E8F0',
          muted: '#94A3B8',
          dark: '#334155',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-champagne': '0 0 40px -5px rgba(197, 168, 128, 0.35)',
        'glass-dark': '0 20px 50px 0 rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'editorial-light': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'editorial-hover': '0 25px 60px -15px rgba(0, 0, 0, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}

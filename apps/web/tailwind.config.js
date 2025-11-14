import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmos: { bg: '#0B0A12', bg2: '#0F1022', surface: '#15142A', surface2: '#1B1A32', border: '#27264A', text: '#E7E6F9', muted: '#B7B2D6' },
        primary: { 500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9' },
        accent: { cyan: '#22D3EE', rose: '#F472B6' }
      },
      boxShadow: { glow: '0 0 40px rgba(124,58,237,0.25)' },
      borderRadius: { xl2: '1.25rem' }
    },
  },
  plugins: [],
}
export default config

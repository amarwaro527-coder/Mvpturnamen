import type { Config } from 'tailwindcss';

export default {
  content: ['./frontend/index.html', './frontend/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#22D3EE',
        glass: 'rgba(255, 255, 255, 0.12)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(124,58,237,0.6)' },
          '50%': { boxShadow: '0 0 24px rgba(124,58,237,0.8)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

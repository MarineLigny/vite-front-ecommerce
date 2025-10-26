import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'text-primary',
    'border-primary',
    'hover:bg-primary',
  ],
} satisfies Config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maple: '#E8752A',
        'maple-text': '#A84A12',
        ginkgo: '#F2B33D',
        persimmon: '#C0442B',
        'bg-0': '#FDF6E9',
        'bg-1': '#F8EFDF',
        'bg-2': '#F2E5D0',
        'bg-3': '#E9D7BC',
        'fg-1': '#3B2A1E',
        'fg-2': '#56402F',
        'fg-3': '#7D6650',
        'fg-4': '#AB9077',
      },
      fontFamily: {
        display: ['Archivo Black', 'Black Han Sans', 'Pretendard Variable', 'sans-serif'],
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SF Mono',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};

export default config;

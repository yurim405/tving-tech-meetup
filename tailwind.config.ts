import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lime-bru': '#C6F73B',
        'bg-0': '#0B0B0B',
        'bg-1': '#121212',
        'bg-2': '#1A1A1A',
        'bg-3': '#232323',
        'fg-1': '#ffffff',
        'fg-2': '#E5E5E5',
        'fg-3': '#A0A0A0',
        'fg-4': '#6A6A6A',
      },
      fontFamily: {
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

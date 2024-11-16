import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // in case you have a `pages` directory
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#6A1B9A', // Purple
        gradientEnd: '#F57C00',    // Orange
      },
    },
  },
  plugins: [],
};

export default config;
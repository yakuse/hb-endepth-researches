/** @type {import('tailwindcss').Config} */
const { maxScreenWidth } = require('./src/theme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Inter, system-ui',
      },
      lineHeight: {
        tight: '1.25rem',
        snug: '1.375rem',
        normal: '1.5rem',
        relaxed: '1.625rem',
        loose: '2rem',
      },
      maxWidth: {
        '3xl': `${maxScreenWidth}px`,
      },
    },
  },
  safelist: [],
  plugins: [],
};

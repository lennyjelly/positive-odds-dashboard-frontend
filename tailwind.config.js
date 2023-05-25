/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['14px', { lineHeight: '120%', letterSpacing: '-0.005em' }],
      lg: ['20px', { lineHeight: '120%', letterSpacing: '-0.005em' }],
      xl: ['25px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
      '2xl': ['31px', { lineHeight: '120%', letterSpacing: '-0.015em' }],
      '4xl': ['65px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
    },
    extend: {
      colors: {
        'main-bg-gray': '#1E2222',
        'secondary-bg-gray': '#333A3A',
        'main-white': '#F7FAF6',
        'card-bg': '#2D3333',
      },
      width: {
        'desktop-card-w': '504px',
        'desktop-inner-w': '350px',
      },
      height: {
        'desktop-card-h': '718px',
        'desktop-inner-h': '136px',
      },
    },
  },
  plugins: [],
};

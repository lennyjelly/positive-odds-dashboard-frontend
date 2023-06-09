/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
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
        'main-gray-text': '#B5BCB5',
        'main-white': '#F7FAF6',
        'secondary-white': '#ECF3E8',
        'card-bg': '#2D3333',
        'main-green': '#5AC561',
        'main-dark-green': '#2A3635',
        'main-bg-black': '#151615',
      },
      width: {
        'desktop-card-w-live': '504px',
        'desktop-inner-w-live': '350px',
        'desktop-card-w-sched': '325px',
      },
      height: {
        'desktop-card-h-live': '718px',
        'desktop-inner-h-live': '136px',
      },
    },
  },
  plugins: [require('preline/plugin')],
};

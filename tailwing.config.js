/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'gray-950': '#0d0d0f', // A very dark gray
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Or your preferred font
    },
    animation: {
      'fade-in': 'fadeIn 0.8s ease-out forwards',
      'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      'slide-up': 'slideUp 0.6s ease-out forwards',
      'slide-down': 'slideDown 0.5s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      fadeInUp: {
        from: { opacity: '0', transform: 'translateY(20px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      slideUp: {
        from: { opacity: '0', transform: 'translateY(20px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      slideDown: {
        from: { opacity: '0', transform: 'translateY(-20px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
    }
  },
};
export const plugins = [];
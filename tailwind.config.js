/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'gradient-xy':'gradient-xy 15s ease infinite',
        'color-change':'color-change 8s infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'color-change': {
          '0%': { backgroundColor: '#3B82F6' },
          '33%': { backgroundColor: '#10B981' },
          '66%': { backgroundColor: '#EC4899' },
          '100%': { backgroundColor: '#3B82F6' },
        }
      }
    },
  },
  plugins: [],
}


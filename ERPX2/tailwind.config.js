/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('tailwindcss-textshadow');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add your shadow styles here
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      colors: {
        primary: '#004085', // Define your primary color
        secondary: '#0056b3', // Define your secondary color
        accent: '#007bff', // Define your accent color
        background: '#f1f3f5', // Define your background color
        white: '#ffffff', // Define white color
        gray: {
          100: '#f1f3f5', // Define light gray color
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-in-out', // Add the slideInLeft animation
      },
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)', // Start position (offscreen right)
          },
          '100%': {
            transform: 'translateX(0)', // End position (onscreen)
          },
        },
        fadeSlide: {
          '0%': { opacity: '0.5', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(1)' },
        },
      },
      animation: {
        'fade-slide': 'fadeSlide 0.4s ease-in-out',
      },

    },
  },
  plugins: [
    textShadowPlugin
  ],
}


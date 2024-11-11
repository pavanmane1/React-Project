/** @type {import('tailwindcss').Config} */
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
      keyframes: {
        fadeSlide: {
          '0%': { opacity: '0.5', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(1)' },
        },
      },
      animation: {
        'fade-slide': 'fadeSlide 0.3s ease-in-out',
      },

    },
  },
  plugins: [],
}


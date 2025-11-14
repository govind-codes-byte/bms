/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar': '#1C2434',
        'background': '#F5F7FA',
        'primary': '#4F46E5',
        'primary-hover': '#4338CA',
        'card': '#FFFFFF',
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

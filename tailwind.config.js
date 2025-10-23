// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: Enable class-based dark mode
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define colors for the NEW Neon Theme
      colors: {
        // NEW ACCENT COLORS: Magenta/Fuchsia and Cyan
        'neon-accent': '#ff00ffe2', // Bright Fuchsia/Magenta
        'neon-secondary': '#00FFFF', // Bright Cyan/Aqua
        
        'dark-bg': '#000000', // Deep Black
        'dark-card': '#080808', // Slightly lighter card background
        
        // Light Theme Colors (Invert for contrast)
        'light-bg': '#F7F7F7',
        'light-card': '#FFFFFF',
        'light-text': '#222222',
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
 
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        
        'neon-accent': '#ff00ffe2', 
        'neon-secondary': '#00FFFF', 
        
        'dark-bg': '#000000', 
        'dark-card': '#080808', 
        
        
        'light-bg': '#F7F7F7',
        'light-card': '#FFFFFF',
        'light-text': '#222222',
      },
    },
  },
  plugins: [],
}
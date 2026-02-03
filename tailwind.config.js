/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-pink': '#ff1493',
        'accent-purple': '#a855f7',
        'accent-light-pink': '#ff69b4',
        'dark-bg': '#0f0a1a',
        'dark-card': 'rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f0a1a 0%, #1a0d2e 50%, #0d0410 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff69b4, #a855f7)',
      },
    },
  },
  plugins: [],
}

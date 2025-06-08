/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00ff00',
        'cyber-blue': '#00ffff',
        'neon-pink': '#ff00ff',
        'dark-terminal': '#1a1a1a',
      },
      fontFamily: {
        'terminal': ['VT323', 'monospace'],
        'cyber': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'terminal-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
} 
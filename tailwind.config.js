/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-violet': '#7000ff',
        'neon-cyan': '#00f0ff',
        'neon-gold': '#ffd700',
        'deep-space': '#050816',
      },
    },
  },
  plugins: [],
}

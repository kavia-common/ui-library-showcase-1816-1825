/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        surface: "#ffffff",
        oceanBg: "#f9fafb",
        oceanText: "#111827",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.04)"
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(249,250,251,1) 100%)'
      }
    },
  },
  plugins: [],
};

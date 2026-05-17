import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":          "#16a34a",
        "primary-dark":     "#15803d",
        "secondary":        "#ea580c",
        "background-light": "#FFFFFF",
        "background-alt":   "#f0fdf4",
        "background-dark":  "#0f172a",
      },
      fontFamily: {
        "sans": ["Manrope", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(110%)" },
        }
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        scan: "scan 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}

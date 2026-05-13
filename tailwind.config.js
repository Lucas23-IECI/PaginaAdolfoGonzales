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
        "primary":          "#0f5a3b",
        "primary-dark":     "#093d28",
        "secondary":        "#16a34a",
        "background-light": "#FFFFFF",
        "background-alt":   "#f0fdf4",
        "background-dark":  "#0d1f17",
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({

        'hero-pattern':
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../assets/building.jpg')",
      }),
      boxShadow: {
        'custom': '0 4px 12px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require("daisyui")],
}


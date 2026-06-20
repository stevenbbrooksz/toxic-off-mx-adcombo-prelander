/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)",
      },
      colors: {
        ink: "#172126",
        cream: "#f6f1e8",
        fern: {
          50: "#edf8ef",
          100: "#d9efdd",
          700: "#287247",
          800: "#1f5b39",
          900: "#173c2b",
        },
        clay: "#b85f32",
      },
    },
  },
  plugins: [],
};

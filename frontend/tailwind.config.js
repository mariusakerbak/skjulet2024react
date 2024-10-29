/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        charcoal: "#2D404E",
        lion: "#C49C7A",
        umber: "#624F48",
        seasalt: "#FAFBFC",
        blue: "#5A95B7",
      }
    },
  },
  plugins: [],
}


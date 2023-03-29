/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-react": "0 0 2em #61dafbaa",
      },

      keyframes: {
        "logo-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "logo-spin": "logo-spin infinite 20s linear",
      },
    },
  },
  plugins: [],
};

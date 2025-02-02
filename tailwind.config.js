/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: " #42a5f5",
          500: "#2196f3",
          900: "#0d47a1",
          1111:"#6C7A89"
        },
        grey: {
          50: "#f8fafc",
          300: "#cbd5e1",
          500: "#64748b",
          900: "#0f172a",
        },

        bg_secondary_color: "#f8fafc",
        text_color: "#0f172a",
        text_secondary_color: "#64748b",

        d_bg_secondary_color: " #3f3f3f",
        d_text_color: "#f0f0f0",
        d_text__secondary_color: "#cbd5e1",
      },
    },
  },
  plugins: [require("daisyui")],
};

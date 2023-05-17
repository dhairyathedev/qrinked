// const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#072AC8",
        secondary: "#6EB7F4",
        textSecondary: "#A1A1A1",
        textPrimary: "#606060",
        bgSecondary: "#F4F4F4",
        qrYellow: "#fcf300"
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin"), require('@tailwindcss/forms'),],
}

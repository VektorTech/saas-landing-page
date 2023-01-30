const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      midnight: "#121313",
      primary: {
        DEFAULT: "#3734A9",
        bland: "#4F46BA",
        dark: "#1B1C31"
      },
      accent: {
        DEFAULT: "#FF7F5",
        bland: "#F9896B"
      },
      neutral: {
        100: "#FAFBFF",
        200: "#C4C4C4",
        300: "#EBECE8",
        700: "#404444",
      },
    },
    fontFamily: {
      sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      sm: "1.142rem",
      base: ["1rem", {
        lineHeight: "1.625rem",
        letterSpacing: "-2%",
        fontWeight: "500"
      }],
      lg: ["1.125rem", {
        lineHeight: "1.625rem",
        letterSpacing: "-2%",
        fontWeight: "500"
      }],
      xl: ["1.25rem", {
        lineHeight: "1.875rem",
        letterSpacing: "-2%",
        fontWeight: "600"
      }],
      "2xl": ["1.375rem"],
      "5xl": ["3.125rem", {
        lineHeight: "3.5rem",
        letterSpacing: "-3%",
        fontWeight: "700"
      }],
      "6xl": ["3.75rem", {
        fontWeight: "800"
      }]
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#22D497"
        },
        yellow: {
          350: "#F7FA62"
        },
        blue: {
          250: "#A0B3E9"
        },
      }
    }
  },
  plugins: [],
}
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem"
      }
    },
    colors: {
      inherit: "inherit",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      midnight: "#121313",
      primary: {
        DEFAULT: "#3734A9",
        dark: "#1B1C31"
      },
      accent: {
        DEFAULT: "#FF7F5C",
        bland: "#F9896B",
        dark: "#E77B5A",
        light: "#FC997E"
      },
      neutral: {
        ...colors.neutral,
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
      sm: ["0.875rem", {
        lineHeight: "1.625rem",
        letterSpacing: "0rem",
        fontWeight: "400"
      }],
      base: ["1rem", {
        lineHeight: "1.625rem",
        letterSpacing: "0rem",
        fontWeight: "400"
      }],
      lg: ["1.125rem", {
        lineHeight: "1.625rem",
        letterSpacing: "0rem",
        fontWeight: "400"
      }],
      xl: ["1.25rem", {
        lineHeight: "1.875rem",
        letterSpacing: "0rem",
        fontWeight: "400"
      }],
      "2xl": ["1.375rem"],
      "5xl": ["3.125rem", {
        lineHeight: "3.5rem",
        letterSpacing: "-0.025rem",
        fontWeight: "700"
      }],
      "6xl": ["3.75rem", {
        letterSpacing: "-0.025rem",
        fontWeight: "800",
        lineHeight: "5rem"
      }]
    },
    screens: {
      sm: '36rem',
      md: '48rem',
      lg: '62rem',
      xl: "75rem"
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
        purple: {
          350: "#4F46BA",
          450: "#443BAC"
        }
      },
      spacing: {
        15: "3.75rem"
      },
      borderRadius: {
        lg: "0.625rem"
      }
    }
  },
  plugins: [],
}
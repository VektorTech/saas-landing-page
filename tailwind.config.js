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
        DEFAULT: "0.94rem"
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
        dark: "#1B1C31",
        dim: "#2C2A95"
      },
      accent: {
        DEFAULT: "#FF7F5C",
        bland: "#F9896B",
        dark: "#E77B5A",
        light: "#FC997E"
      },
      neutral: {
        ...colors.neutral,
        100: "var(--bg-color)",
        200: "#C4C4C4",
        300: "#EBECE8",
        700: "#404444",
      },
    },
    fontFamily: {
      sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: ["0.75rem", {
        lineHeight: "1.625rem",
        letterSpacing: "0rem",
        fontWeight: "300"
      }],
      sm: ["0.875rem", {
        lineHeight: "1.625rem",
        letterSpacing: "0rem",
        fontWeight: "300"
      }],
      base: ["1rem", {
        lineHeight: "1.625rem",
        letterSpacing: "0rem",
        fontWeight: "300"
      }],
      lg: ["1.125rem", {
        lineHeight: "1.625rem",
        letterSpacing: "-0.02rem",
        fontWeight: "500"
      }],
      xl: ["1.23rem", {
        lineHeight: "1.875rem",
        letterSpacing: "-0.04rem",
        fontWeight: "500"
      }],
      "2xl": ["1.375rem", {
        lineHeight: "1.875rem",
        letterSpacing: "-0.05rem",
        fontWeight: "600"
      }],
      "3xl": ["1.625rem", {
        lineHeight: "1.875rem",
        letterSpacing: "-0.05rem",
        fontWeight: "600"
      }],
      "4xl": ["calc(1rem + 2vw)", {
        lineHeight: "2.7rem",
        letterSpacing: "-0.05rem",
        fontWeight: "600"
      }],
      "5xl": ["calc(2rem + 0.9vw)", {
        lineHeight: "3.4rem",
        letterSpacing: "-0.1rem",
        fontWeight: "800"
      }],
      "6xl": ["calc(2.3rem + 1.2vw)", {
        letterSpacing: "-0.1rem",
        fontWeight: "700",
        lineHeight: "calc(2.2rem + 2.3vw)"
      }],
      "blog-heading": ["1.84rem", {
        letterSpacing: "-0.05em",
        fontWeight: "800",
        lineHeight: "2.25rem"
      }]
    },
    screens: {
      sm: '36rem',
      md: '48rem',
      lg: '64rem',
      xl: "78rem"
    },
    extend: {
      animation: {
        shake: "shake 1s cubic-bezier(.36,.07,.19,.97) both",
        slide: "slide 0.7s",
        "slide-out": "slide-out 0.5s",
        "fade-in": "fade-in 0.7s",
        "fast-fade-in": "fade-in 0.3s",
        "slide-intro": "slide-intro 0.5s forwards"
      },
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
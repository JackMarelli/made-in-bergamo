/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      "crimson-text": ["'Crimson Text'", "serif"],
      "crimson-pro": ["'Crimson Pro'", "serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    container: {
      padding: {
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        mib: {
          beige: {
            light: "#F2F1F0",
            medium: "#E3E1DE",
            dark: "#DBD7D2",
          },
          brown: {
            light: "#C7B09B",
            dark: "#1B1816",
          },
          green: {
            DEFAULT: "#303026",
          }
        },
      },
    },
  },
  plugins: [],
}


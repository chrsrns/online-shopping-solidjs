/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "100%": {
            left: 0,
            opacity: 1,
          },
        },
        "infinite-scroll": {
          "100%": {
            // Hardcoded value based on size of image used
            "background-position": "left 353px",
          },
        },
        "fadeInTranslucent": {
          "0%" : {
            opacity: "0"
          },
          "100%" : {
            opacity: "0.2"
          }
        }
      },
      backgroundImage: {
        "about-hero-image": "url(/src/assets/infini.png)",
      },
      // Coolors Preview: https://coolors.co/dadad6-3c3934-2a2926-58534e-6d695f
      colors: {
        timberwolf: {
          DEFAULT: "#dadad6",
          100: "#2e2e29",
          200: "#5b5b52",
          300: "#88887c",
          400: "#b1b1a9",
          500: "#dadad6",
          600: "#e2e2df",
          700: "#e9e9e7",
          800: "#f0f0ef",
          900: "#f8f8f7",
        },
        black_olive: {
          DEFAULT: "#3c3934",
          100: "#0c0b0a",
          200: "#181715",
          300: "#24221f",
          400: "#302e2a",
          500: "#3c3934",
          600: "#676259",
          700: "#908a7f",
          800: "#b5b1aa",
          900: "#dad8d4",
        },
        jet: {
          DEFAULT: "#2a2926",
          100: "#090808",
          200: "#111110",
          300: "#1a1917",
          400: "#22211f",
          500: "#2a2926",
          600: "#58564f",
          700: "#858278",
          800: "#aeaba5",
          900: "#d6d5d2",
        },
        walnut_brown: {
          DEFAULT: "#58534e",
          100: "#121110",
          200: "#242220",
          300: "#36322f",
          400: "#47433f",
          500: "#58534e",
          600: "#7d766f",
          700: "#9f9892",
          800: "#bfbbb7",
          900: "#dfdddb",
        },
        dim_gray: {
          DEFAULT: "#6d695f",
          100: "#161513",
          200: "#2c2a26",
          300: "#413f39",
          400: "#57544c",
          500: "#6d695f",
          600: "#8d887c",
          700: "#aaa69d",
          800: "#c6c4be",
          900: "#e3e1de",
        },
      },
    },
  },
  plugins: [],
};

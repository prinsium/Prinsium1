/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        shrinkToNormal: "shrinkToNormal 1s ease-in-out forwards",
        marqueeOne: "marqueeOne 25s linear infinite",
        marqueeTwo: "marqueeTwo 25s linear infinite",
      },
      keyframes: {
        shrinkToNormal: {
          "0%": {
            transform: "scale(1)",
            opacity: ".3",
            border: "2px solid red",
            // backgroundColor: "transparent",
          },
          "100%": {
            transform: "scale(0.5)",
            opacity: "1",
            border: "2px solid transparent",
            // backgroundColor: "red",
          },
        },
        marqueeOne: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
        marqueeTwo: {
          from: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

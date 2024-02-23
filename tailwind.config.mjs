/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2eb7eb",
        secondary: "#017bc4",
        back: "#045084",
      },
    },
  },
  plugins: [],
};
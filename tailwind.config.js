/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        background: "var(--color-background)",
        "background-element": "var(--color-background-element)",
        "background-selected": "var(--color-background-selected)",
        "text-secondary": "var(--color-text-secondary)",
        "link-primary": "var(--color-link-primary)",
      },
    },
  },
  plugins: [],
};

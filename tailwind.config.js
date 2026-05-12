/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8006F", // Rosa principal
        dark: "#0D0D0D",    // Preto
        accent: "#FFD600",  // Amarelo CTA
        muted: "#1a1a1a",   // Fundo secundário
        creme: "#FFF5F0",   // Fundo receitas
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

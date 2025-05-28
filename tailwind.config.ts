import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00a3ff",
        secondary: "#0a57b2",
        light: "#e8f7ff",
        dark: "#0a1f3d",
        hover: "#ffaa35",
        action: "#fbbf6d",
        text: "#f7feff"
      },
      backgroundImage: {
        "gradient-background":
          "linear-gradient(135deg, #00a3ff 0%, #0a57b2 100%)",
        "hero-background": "url('/assets/images/fotos_500/uniao.jpg')",
        "hero-about": "url('/assets/images/foto_funeraria/funeraria_ppanema.jpeg')",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        montserrat: ["var(--font-montserrat)"],
      },
      keyframes:{
        "move-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        }
      },
      animation: {
        "gradient-background": "move-gradient 15s ease infinite",
      },
      backgroundSize: {
        "200": "200% 200%"
      },
    },
  },
  plugins: [],
} satisfies Config;

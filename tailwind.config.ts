import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#f44235',
        'fondo': '#eae7e7',
      },
      backgroundColor:{
        'overlay': 'rgba(0, 0, 0, 0.6)',
      },
      backgroundImage:{
        'register': 'url(/imgs/fondo.png)'
      },
      fontFamily: {
        funnel_sans: ['var(--font-funnel_sans)']
      },
      boxShadow: {
        'form': '0px 0px 23px 0px rgba(0, 0, 0, 0.75)',
      },
      screens:{
        'desktop': '800px'
      },
      gridTemplateRows:{
        'custom': '30px auto 50px',
      },
    },
  },
  plugins: [],
} satisfies Config;

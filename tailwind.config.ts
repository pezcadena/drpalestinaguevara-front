import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'h1-bold-desktop': ['60px', {
          fontWeight: '700',
          lineHeight: '1'
        }],
        'h2-bold-desktop': ['40px', {
          fontWeight: '700',
          lineHeight: '1.2'
        }],
        'h2-bold': ['24px', {
          fontWeight: '700',
          lineHeight: '1'
        }],
        'h3-bold-desktop': ['30px', {
          fontWeight: '700',
          lineHeight: '1'
        }],
      },
      fontFamily:{
        serif: ['var(--font-quattrocento)']
      },
      colors:{
        'primary':"#319853",
        'secondary':"#4F8ABB",
        'white':'#FFFAF9',
        'light': '#EDE8E8'
      },
      spacing:{
        'gap':'1rem',
        'mitad-gap': '0.5rem',
        'padding' : '2rem',
      },
      borderRadius:{
        DEFAULT: '1rem',
        'sm': '0.5rem'
      }
    },
  },
  plugins: [],
};
export default config;

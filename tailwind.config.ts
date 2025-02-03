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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100% 100%',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
      // fontSize: {
      //   'xs': ['0.75rem',],
      //   'sm': ['0.875rem',],
      //   'base': ['1rem',],
      //   'lg': ['1.125rem',],
      //   'xl': ['1.25rem',],
      //   '2xl': ['1.5rem',],
      //   '3xl': ['1.875rem',],
      //   '4xl': ['2.25rem',],
      //   '4.5xl': ['2.75rem',],
      //   '5xl': ['3rem',],
      //   '6xl': ['3.75rem',],
      //   '6.5xl': ['4rem',],
      //   '7xl': ['4.5rem',],
      //   '8xl': ['6rem',],
      //   '9xl': ['8rem',],
      // },
    },
  },
  plugins: [],
} satisfies Config;

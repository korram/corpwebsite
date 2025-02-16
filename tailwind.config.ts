import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   heading: ['var(--font-publico)'], // h1-h5
      //   display: ['var(--font-source-sans)'], // display-1 ถึง display-5
      // },
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
        'sm': '480px',
        // => @media (min-width: 640px) { ... }

        'md': '1279px',
        // => @media (min-width: 768px) { ... }

        'lg': '1280px',
        // => @media (min-width: 1024px) { ... }

        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }

        // '2xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        'h1-en': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h2-en': ['20px', { lineHeight: '28x', fontWeight: '700' }],
        'h3-en': ['14px', { lineHeight: '18px', fontWeight: '600' }],
        'h4-en': ['14px', { lineHeight: '18px', fontWeight: '400' }],
        'h5-en': ['14px', { lineHeight: '16px', fontWeight: '400' }],

        'h1-th': ['32px', { lineHeight: '32px', fontWeight: '700' }],
        'h2-th': ['24px', { lineHeight: '28x', fontWeight: '700' }],
        'h3-th': ['18px', { lineHeight: '18px', fontWeight: '500' }],
        'h4-th': ['18px', { lineHeight: '18px', fontWeight: '400' }],
        'h5-th': ['16px', { lineHeight: '16px', fontWeight: '400' }],

        'display2-md-en': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'display3-md-en': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'display4-md-en': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'display6-md-en': ['24px', { lineHeight: '32px', fontWeight: '700' }],

        'display2-lg-en': ['64px', { lineHeight: '72px', fontWeight: '700' }],
        'display3-lg-en': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'display4-lg-en': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'display6-lg-en': ['24px', { lineHeight: '32px', fontWeight: '700' }],

        'display2-md-th': ['56px', { lineHeight: '48px', fontWeight: '700' }],
        'display3-md-th': ['48px', { lineHeight: '40px', fontWeight: '700' }],
        'display4-md-th': ['36px', { lineHeight: '36px', fontWeight: '700' }],
        'display6-md-th': ['32px', { lineHeight: '32px', fontWeight: '700' }],

        'display2-lg-th': ['96px', { lineHeight: '72px', fontWeight: '700' }],
        'display3-lg-th': ['72px', { lineHeight: '56px', fontWeight: '700' }],
        'display4-lg-th': ['48px', { lineHeight: '48px', fontWeight: '700' }],
        'display6-lg-th': ['32px', { lineHeight: '32px', fontWeight: '700' }],

        'lead-paragraph-en': ['20px', { lineHeight: '28px', fontWeight: '400' }],
        'paragraph-en': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'small-paragraph-en': ['12px', { lineHeight: '16px', fontWeight: '400' }],

        'lead-paragraph-th': ['28px', { lineHeight: '28px', fontWeight: '400' }],
        'paragraph-th': ['24px', { lineHeight: '24px', fontWeight: '400' }],
        'small-paragraph-th': ['16px', { lineHeight: '16px', fontWeight: '400' }],

        'button-en': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'button-th': ['16px', { lineHeight: '16px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config;

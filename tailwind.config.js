/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      //Font Size 12 / Line Height 24
      sm: [
        '0.75rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
      ],
      //Font Size 14 / Line Height 28
      base: [
        '0.875rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '400',
        },
      ],
      //Font Size 16 / Line Height 26
      lg: [
        '1rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '400',
        },
      ],

      //18
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      // 40/38

      //Font Size h1 40px Line Height 38px
      h1: [
        '2.5rem',
        {
          lineHeight: '2.375rem',
          fontWeight: '400',
        },
      ],
      //Font Size h1 32px Line Height 38px
      h2: [
        '2rem',
        {
          lineHeight: '2.375rem',
          fontWeight: '400',
        },
      ],
      //Font Size h1 24px Line Height 38px
      h3: [
        '1.5rem',
        {
          lineHeight: '2.375rem',
          fontWeight: '500',
        },
      ],
      //Font Size h1 20px Line Height 38px
      h4: [
        '1.25rem',
        {
          lineHeight: '2.375rem',
          fontWeight: '500',
        },
      ],
    },
    extend: {
      colors: {
        shadow: "var(--box-shadow)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        ['crimson']: ['var(--heading-font-crimson)'],
        ['roboto']: ['var(--font-roboto)'],
        ['jost']: ['var(--font-jost)'],
        ['tangerine']: ['var(--logo-font-tangerine)'],
        ['hind']: ['var(--engrave-font-hind)'],
        ['lora']: ['var(--engrave-font-lora)'],
        ['kalam']: ['var(--engrave-font-kalam)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        secondary: ['Embed', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1a4c53',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#297573',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: '#d1a537',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        textStrokeWidth: {
          DEFAULT: '1px',
          sm: '0.5px',
          lg: '2px',
        },
        textStrokeColor: {
          DEFAULT: 'black',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'from-bottom': {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'from-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'from-right': {
          '0%': { opacity: '0', transform: 'translateX(50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'scale-x': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
      },
      animation: {
        'from-bottom': 'from-bottom 0.5s ease-out',
        'from-left': 'from-left 0.5s ease-out',
        'from-right': 'from-right 0.5s ease-out',
        'scale-x': 'scale-x 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};

export default config;

import Color from 'color'

const lighten = (clr, val) => Color(clr).mix(Color('white'), val).rgb().string()
const darken = (clr, val) => Color(clr).mix(Color('black'), val).rgb().string()

const generateContrasts = (variant, palette) => ({
  [variant]: palette,
})

const palette = {
  primary: '#7367f0',
  secondary: '#a8aaae',
  success: '#28c76f',
  danger: '#ea5455',
  warning: '#ff9f43',
  info: '#00cfe8',
  gray: '#a5a2ad',
  light: '#DFDFE3',
  dark: '#010C23',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/rizzui/dist/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: Object.keys(palette).reduce(
        (colors, variant) => ({
          ...colors,
          ...generateContrasts(variant, {
            DEFAULT: palette[variant],
            100: lighten(palette[variant], 0.8),
            200: lighten(palette[variant], 0.6),
            300: lighten(palette[variant], 0.4),
            400: lighten(palette[variant], 0.2),
            500: palette[variant],
            600: darken(palette[variant], 0.1),
            700: darken(palette[variant], 0.15),
            800: darken(palette[variant], 0.2),
            900: darken(palette[variant], 0.25),
          }),
        }),
        {
          'sub-heading': '#D2CAE3',
          'green-400': '#63DF95',
          heading: '#FEFDFF',
        }
      ),
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: {
        home: "url('/src/assets/images/home.png')",
        dashboard: "url('/src/assets/images/dashboard.png')",
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

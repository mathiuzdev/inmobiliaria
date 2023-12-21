/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custom_orange: 'rgb(239,204,172)',
        whatsapp: 'rgb(59,192,77)'
        },
        fontFamily: {
          sans: ['"Roboto"']
        },
        width: {
          propiedad: 'calc(50% - 16px)',
          propiedad1: 'calc(33% - 12.5px)',
          propiedad2: 'calc(100% - 12.5px)',
          propiedad3: 'calc(50% - 8px)'
        }
    },
  },
  plugins: [],
}


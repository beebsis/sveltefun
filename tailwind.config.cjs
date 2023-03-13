/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      cp1: '#F0ECE3',
      main: '#1c1f2e',
      secondary:'#2b2d42',
      third:'#e41d60',
      fourth:'#841de4',
      fifth:'#e41d98',
      darkTransparent: '#13131d80',
      dd:'#a01443',
      ddx:'#6315ac',
      ddxx:'#ab1572',
      socials: {
        linkedin: '#0077b5',
        twitter: '#1DA1F2',
        code: '#171515',
        github: '#171515',
        paypal: '#009cde',
        spotify: '#1DB954',
        discord: '#5865F2',
      },
    },
    extend: {},
  },
  plugins: [],
}

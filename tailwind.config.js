/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    backgroundImage: {
      'banner-img' : "url('/img/bannerbg.png')",
      'img-2' : "url('/img/bg2.png')",
      'img-3' : "url('/img/bg3.png')",
      'img-4' : "url('/img/gradiyen.png')",
      'vaccine': "url('/img/vaccine.png')",
      'footer-img' : "url('/img/footer.png')"
    },
    fontFamily: {
      'montserrat' : ["Montserrat", 'sans-serif']
    }
  },
  plugins: [],
}
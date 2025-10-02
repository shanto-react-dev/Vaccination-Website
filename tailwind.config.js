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
      'banner-img' : "url('public/img/bannerbg.png')",
      'img-2' : "url('public/img/bg2.png')",
      'img-3' : "url('public/img/bg3.png')",
      'img-4' : "url('public/img/gradiyen.png')",
      'vaccine': "url('public/img/vaccine.png')",
      'footer-img' : "url('public/img/footer.png')"
    },
    fontFamily: {
      'montserrat' : ["Montserrat", 'sans-serif']
    }
  },
  plugins: [],
}
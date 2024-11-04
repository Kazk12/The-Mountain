/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        
        neutral:{
          'off-white': 'hsl(36, 100%, 99%)',
          'blue-color' : "hsl(180, 57, 49)",
      },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        'hero-img': "url('../images/bg_header.jpg')",
        'nuage-img': "url('../images/bg_nuage.jpg')",
        'photo-img' :  "url('../images/bg_appareil_photo.jpg')",
        'new-img' :  "url('../images/bg_newsletter.jpg')",
      },
    },
  },
  plugins: [],
};
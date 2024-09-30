/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {

      colors: {
        customRed: 'rgba(253, 89, 86, 1)',
        
          customBeige: 'rgba(250, 243, 234, 1)', 
          customLightblue: 'rgba(244, 245, 247, 1)',
        customLightbrown: 'rgba(184, 142, 47, 1)',
        lightGrey: "rgba(159, 159, 159, 1)",
        customOrange:"rgba(255, 243, 227, 1)",
        lighterOrange:"rgba(252, 248, 243, 1)"
      },
      fontFamily: {
        poppines: ['Poppins', 'sans-serif'],
      },

      width: {
        '285': '285px', // Custom width class
      },

      height: {
        '301': '301px'},
      fontFamily:{
        poppines: "Poppins", 
      },
      
  
  plugins: [],
}
}
}



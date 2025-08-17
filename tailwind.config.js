/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
  			sma: {
  				max: '429px'
  			},
  			mda: {
  				min: '430px',
  				max: '767px'
  			},
  			mdaa: {
  				min: '768px',
  				max: '820px'
  			}
  		},
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}


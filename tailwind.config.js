/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        sm: '480px',
        md: '768px',
        mi: '786px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'Green/60': '#CAFF33',
        'Green/65': '#D1FF4D',
        'Main': '#1A1A1A',
        'Secondary':"#262626",
        'Grey/11': '#1C1C1C',
        'TextColor': '#B3B3B3',
        'Privacy': '#a3a3a3',
        'bgColor': "radial-gradient(103.26% 114.79% at 103.26% 0%, #1c1c1c 20.29%, rgba(202, 255, 51, 0.3) 34.91%, #1c1c1c 60.69%);",
        'LabelColor' : "#bdbdbd",
        'InputBg' : "#1818184d"
    }
    }
  },
  plugins: [],
}


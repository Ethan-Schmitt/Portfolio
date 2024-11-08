/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      "colors": {
  "Blanc": "#ffffff",
  "Noir": "#000000",
  "top-deg": "#0c132d",
  "mid-deg": " #102d4d",
  "bot-deg": " #24aae3",
  "left-btn": " #763af5",
  "right-btn": " #a604f2"
 },
 "fontSize": {
  "sm": "0.875rem",
  "base": "1rem",
  "lg": "1.5rem",
  "xl": "2rem",
  "2xl": "2.125rem",
  "3xl": "2.25rem",
  "4xl": "2.5rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "4.375rem",
  "8xl": "6rem",
  "9xl": "6.875rem"
 },
 "fontFamily": {
  "titre": "Hylia Serif Beta",
  "text": "Inter"
 },
 "borderRadius": {
  "rounded-0": "NaNrem",
  "rounded-1": "NaNrem",
  "rounded-2": "NaNrem",
  "rounded-3": "NaNrem",
  "rounded-4": "NaNrem",
  "rounded-5": "NaNrem",
  "rounded-6": "NaNrem"
 },
 width: {
  '60': '60px',
},
height: {
  '49': '49px',
},
}
},
  plugins: []
}

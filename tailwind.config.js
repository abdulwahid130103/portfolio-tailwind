module.exports = {
  content: ["index.html"],
  darkMode:'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    screens: {
      'es': '420px',
      // => @media (min-width: 420px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        primary: '#3b82f6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

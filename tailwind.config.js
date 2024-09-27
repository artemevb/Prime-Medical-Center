module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 360px) { ... }

      'md': '360px',
      // => @media (min-width: 400px) { ... }

      'mdx': '460px',
      // => @media (min-width: 650px) { ... }

      'mdl': '550px',
      // => @media (min-width: 750px) { ... }

      'slg': '750px',
      // => @media (min-width: 900px) { ...

      'lg': '900px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1000px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1100px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '4xl': '1600px',
      '5xl': '2000px',
    },
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        marcellus: ['Marcellus', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 0px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 0 25px 35px rgba(255, 255, 255, 1)',
      },
      colors: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),

  ],
};

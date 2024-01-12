/** @type {import('tailwindcss').Config} */

const basePath =
  process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? '/next-transition' : '';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: `url("${basePath}/image-1.jpeg")`,
      },
      colors: {
        primary: '#896d66',
        secondary: '#bc8992',
        beige: '#f8f9fa',
        black: '#111',
      },
      fontFamily: {
        serif: ['var(--font-poppins)'],
      },
      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)',
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)',
      },
    },
  },
  plugins: [],
};

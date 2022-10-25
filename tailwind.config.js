/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts}',
    './src/content/posts/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'SansSerif'],
      },
    },
  },
  plugins: [],
};

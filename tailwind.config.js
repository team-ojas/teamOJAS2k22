module.exports = {
  content: ["./src/**/*.jsx",
  "./node_modules/flowbite/**/*.js"],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), require('daisyui')
],
};

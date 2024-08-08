/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',             // Include your main HTML file
    './src/**/*.jsx',           // Include all JSX files in the src folder
    './src/**/*.js',            // Include all JS files in the src folder
    './src/**/*.tsx',           // Include all TSX files in the src folder
    './src/**/*.ts',            // Include all TS files in the src folder
    './src/**/*.vue',           // Include all Vue files in the src folder
    '/src/entry-client.jsx',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


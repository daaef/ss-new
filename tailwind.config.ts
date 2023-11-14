import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'primary': '#F24055',
    'secondary': '#1E4F88',
  },
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

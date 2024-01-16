import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {},
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config

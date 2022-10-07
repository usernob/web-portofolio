/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                'lg': '7rem'
            }
        },
        fontFamily: {
            sans: ["Poppins", "Open Sans", "Segoe UI", "ui-sans-serif","system-ui","sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
        },
        screens: {
            'vs': '200px',
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,tx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "#18A1DC",
                    yellow: "#F9E749",
                    gold: "#F5C232",
                    coral: "#D64D49"
                }
            }
        },
    },
    plugins:[],
}
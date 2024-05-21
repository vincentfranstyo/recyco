/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            width: {
                '38': '150px',
                '69': '275px',
            },
            height: {
                '38': '150px',
            },
            inset: {
                '49': '198px',
                '43': '172px',
                '30': '120px',
            },
        },
    },
    plugins: [],
};


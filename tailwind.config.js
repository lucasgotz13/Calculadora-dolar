/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#264653",
                secondary: "#2a9d8f",
                background: "#02010f",
            },
        },
    },
    plugins: [],
};

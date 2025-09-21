/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                fredoka: ["Fredoka", "sans-serif"],
                "pokemon-hollow": ["Pokemon Hollow", "sans-serif"],
                "pokemon-solid": ["Pokemon Solid", "sans-serif"],
            },
        },
    },
    plugins: [],
};

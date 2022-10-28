/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito, sans-serif",
      },
      colors: {
        blue: {
          500: "#3294F8",
        },
        title: {
          500: "#E7EDF4",
        },
        subtitle: {
          500: "#C4D4E3",
        },
        text: {
          500: "#AFC2D4",
          700: "#7B96B2",
          900: "#3A536B",
        },
        border: {
          500: "#1C2F41",
        },
        post: {
          500: "#112131",
        },
        profile: {
          500: "#0B1B2B",
        },
        background: {
          500: "#071422",
        },
        input: {
          500: "#040F1A",
        },
      },
      backgroundImage: {
        "bg-cover": "url(./src/assets/Cover.jpg)",
      },
    },
  },
  plugins: [],
};

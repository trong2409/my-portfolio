module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-magenta": "#191820",
        "pastel-pink": "#DEA3A3",
        "pink-red": "#cc7c82",
        skill: "#7e79a84d",
        box: "rgba(217, 118, 118, 0.25)",
        "white-300": "#ffffff4d",
      },
      boxShadow: {
        avatar: "0 1px 0 0 #fff",
        tooltip: "0 4px 8px 0 #00000040",
        primary: "0 4px 8px 0 #ffffff4d",
      },
      backgroundImage: {
        home: "linear-gradient( to right top, #7e79a8, #736f9e, #686694, #5d5c8b, #525381, #544f7f, #574c7d, #5a487a, #6c487c, #7e487b, #8e4778, #9e4773)",
        heading: "linear-gradient(65deg, #f093fb, #f5576c)",
      },
      animation: {
        "head-shake": "head-shake 1.5s ease-out 0s both",
        "fade-in": "fade-in 1s ease-in-out",
        "base": "zoom-in 1.25s ease-out 0s both",
        jelly: "jelly 1s ease-in-out",
      },
    },
    fontFamily: {
      khand: ["Khand", "sans-serif"],
      "yanone-kaffeesatz": ["Yanone Kaffeesatz", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
    },
  },
  plugins: [],
};

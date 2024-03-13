module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 500: "#999999", 700: "#676767", 800: "#353940" },
        black: { 900: "#010101" },
        blue_gray: { 900: "#343434" },
        green: { "50_99": "#e6f6eb99", "50_7f": "#e6f6eb7f" },
        white: { A700: "#ffffff" },
        light_blue: { "900_02": "#005e8d" },
        cyan: { 50: "#e2f6fb" },
      },
      boxShadow: { xs: "0px 18px  58px 16px #0000000f", sm: "4px 4px  58px 0px #0000001e" },
      fontFamily: { metropolis: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

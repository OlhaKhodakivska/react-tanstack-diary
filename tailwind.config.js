module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mindfulNude: {
          primary: "#8FA68A",
          secondary: "#E6D36F",
          accent: "#C9CCD3",
          "base-100": "#E3E3DF",
          "base-200": "#D3D3CE",
          neutral: "#3F4650",
        },
      },
    ],
  },
}

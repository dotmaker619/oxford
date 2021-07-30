const { colors, fontSize } = require("tailwindcss/defaultTheme")

module.exports = {
  corePlugins: {
    container: false,
  },
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "900": "#18214B",
        },
        orange: {
          ...colors.orange,
          "500": "#FF6E39",
        },
        yellow: {
          ...colors.yellow,
          "100": "#EFEEDB",
        },
      },
      fontFamily: {
        sans: ["AkzidenzGrotesk", "sans-serif"],
        heading: ["DIN-Bold", "sans-serif"],
      },
      fontSize: {
        ...fontSize,
        xxs: ".7rem",
      },
      height: {
        "screen-75": "75vh",
        "screen-50": "50vh",
      },
      inset: {
        "24": "6rem",
      },
      minHeight: {
        "screen-75": "75vh",
        "screen-50": "50vh",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "32rem",
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.blue.900"),
          },
        },
        navy: {
          css: {
            color: theme("colors.blue.900"),
          },
        },
        white: {
          css: {
            color: "#fff",
            a: { color: "#fff" },
          },
        },
      }),
      // customForms: theme => ({
      // default: { select: { border: theme("border.1") } },
      // }),
    },
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      borderWidth: ["last", "first"],
      opacity: ["disabled"],
      margin: ["first"],
      translate: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    colors: {},
    textColor: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      colorPop2: "var(--color-text-colorPop2)",
      "default-soft": "var(--color-text-default-soft)",
      inverse: "var(--color-text-inverse)",
      "inverse-soft": "var(--color-text-inverse-soft)",
      comment: "var(--color-text-comment)",
      explorer1: "var(--color-text-explorer)",
      white: "var(--color-text-white)",
    },
    backgroundColor: {
      green: "var(--color-bg-green)",
      yellow: "var(--color-bg-yellow)",
      red: "var(--color-bg-red)",
      background: "var(--color-bg-background)",
      foreground: "var(--color-bg-foreground)",
      primary: "var(--color-bg-primary)",
      secondary: "var(--color-bg-secondary)",
      default: "var(--color-bg-default)",
      inverse: "var(--color-bg-inverse)",
      header: "var(--color-bg-header)",
      explorer: "var(--color-bg-explorer)",
      colorPop1: "var(--color-bg-colorPop1)",
      colorPop2: "var(--color-bg-colorPop2)",
      colorPop3: "var(--color-bg-colorPop3)"
    },
    borderColor: {
      primary: "var(--color-border-primary)",
      secondary: "var(--color-border-secondary)",
    },
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)",
      custom: ['Roboto Mono', 'sans-serif'],
    },
    fontWeights: {
      normal: "var(--font-weight-normal)",
      display: "var(--font-weight-display)",
      btn: "var(--font-weight-btn)",
    },
  },
  variants: {},
  plugins: [],
};

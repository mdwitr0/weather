const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/assets/scss/variables.scss"),
        path.resolve(__dirname, "./src/assets/scss/functions.scss"),
        path.resolve(__dirname, "./src/assets/scss/mixins.scss"),
      ],
    },
  },

  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
    config.plugin("html").tap((args) => {
      args[0].title = "Погода";
      args[0].description = "Прогноз погоды";
      args[0].url = "https://weather-tan-alpha.vercel.app/";
      return args;
    });
  },
};

const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/assets/scss/variables.scss"),
        path.resolve(__dirname, "./src/assets/scss/functions.scss")
      ],
    },
  },
};
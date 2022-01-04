const webpack = require("@nativescript/webpack");
const { ContextExclusionPlugin } = require("webpack");
const { join } = require("path");

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  webpack.chainWebpack((config) => {
    if (env.unitTesting) {
      // include plugin src for coverage reports
      config.module
        .rule("istanbul-loader")
        .include.add(
          join(
            webpack.Utils.project.getProjectRootPath(),
            "..",
            "nativescript-internal-plugin"
          )
        );
    }
  });

  return webpack.resolveConfig();
};

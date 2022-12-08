const path = require("node:path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  core: {
    builder: "webpack5"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve("src")
    ];
    config.module.rules.push({
      test: /\\.svg$/,
      use: ["@svgr/webpack", "url-loader"]
    });

    return config;
  }
};

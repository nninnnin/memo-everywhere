const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  webpack: {
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
};

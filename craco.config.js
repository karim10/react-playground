const CracoLessPlugin = require("craco-less");
const { theme } = require("./src/theme");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": theme.primary },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

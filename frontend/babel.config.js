module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-transform-export-namespace-from"],
    ],
  };
};

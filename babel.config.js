module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "mobx"],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
    ],
  };
};

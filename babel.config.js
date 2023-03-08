module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            types: "./types",
            "@app": "./src/app",
            "@components": "./src/components",
            "@features": "./src/features",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@assets": "./assets",
          },
        },
      ],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
    ],
  };
};

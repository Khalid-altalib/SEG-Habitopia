const { NODE_ENV } = process.env;

const isTesting = NODE_ENV === "testing";

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
      isTesting && ["@babel/plugin-proposal-private-methods", { loose: true }],
    ].filter(Boolean), // This removes falsy values if something isn't enabled
  };
};
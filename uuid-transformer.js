// uuid-transformer.js

const { createTransformer } = require("babel-jest");
const babelOptions = {
  presets: ["@babel/preset-env"],
};

module.exports = createTransformer(babelOptions);

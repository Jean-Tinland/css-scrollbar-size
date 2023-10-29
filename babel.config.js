module.exports = {
  presets: ["@babel/preset-typescript", "@babel/preset-env"],
  env: {
    minify: {
      presets: ["@babel/preset-env", ["babel-preset-minify"]],
    },
  },
};

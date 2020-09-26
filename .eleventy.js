// const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  // const sassPluginOptions = {watch: "['**/*.{scss,sass}', '!node_modules/**']", outputDir: "_site/css"}

  // eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "html",
    "jpg",
    "doc",
    "png",
    "gif",
    "ico",
    "svg",
    "otf",
    "eot",
    "ttf",
    "woff",
    "woff2",
    "njk",
  ]);

  return {
    dir: {
      input: "./src",
      output: "_site", // Equivalent to Jekyll's destination property
    },
  };
};

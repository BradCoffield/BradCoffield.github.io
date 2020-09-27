const striptags = require("striptags");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPlugin(syntaxHighlight);
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

//Be able to excerpt blog posts - https://dev.to/jonoyeong/excerpts-with-eleventy-4od8?signin=true
function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  excerpt = striptags(content)
    .substring(0, 200) // Cap at 200 characters
    .replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "")
    .trim()
    .concat("...");
  return excerpt;
}

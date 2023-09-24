const SimpleCard = require('./src/_includes/components/SimpleCard');
const elementsData = require('./src/includes/components/ElementsData');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addShortcode("Card", SimpleCard);
  eleventyConfig.addShortcode("ElementsData", elementsData);

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "public",
      includes: '_includes',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
  
}
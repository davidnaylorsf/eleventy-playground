const SimpleCard = require('./src/_includes/components/SimpleCard');
const SectionData = require('./src/_includes/components/SectionData');
const SubSectionData = require('./src/_includes/components/SubSectionData');
const RecordMetaData = require('./src/_includes/components/RecordMetaData');

const CompoundsData = require('./src/_includes/components/CompoundsData');

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addShortcode("Card", SimpleCard);
  eleventyConfig.addShortcode("ElemSection", SectionData.SectionData);
  eleventyConfig.addShortcode("ElemSubSection", SubSectionData.SubSection);
  eleventyConfig.addShortcode("ElemSubSectionMeta", SubSectionData.SubSectionMeta);
  eleventyConfig.addShortcode("ElemRecordMeta", RecordMetaData.RecordMetaData);

  eleventyConfig.addShortcode("Compound", CompoundsData.Compound);  


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
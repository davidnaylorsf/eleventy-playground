const SimpleCard = require('./src/_includes/components/SimpleCard');
const SectionData = require('./src/_includes/components/SectionData');
const SubSectionData = require('./src/_includes/components/SubSectionData');
const RecordMetaData = require('./src/_includes/components/RecordMetaData');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addShortcode("Card", SimpleCard);
  eleventyConfig.addShortcode("ElemSection", SectionData.SectionData);
  eleventyConfig.addShortcode("ElemSubSection", SubSectionData.SubSection);
  eleventyConfig.addShortcode("ElemRecordMeta", RecordMetaData.RecordMetaData);


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
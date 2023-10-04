const {html} = require('common-tags');
// const elementsData = require("../../_data/ELEMENTS_v2.json");
const references_data = require("../../_data/References_v1.json");
const sections_data = require("../../_data/Sections_v1.json");
const subInformations_data = require("../../_data/SubInformations_v1.json");
const subSections_data = require("../../_data/SubSections_v1.json");



function ElementsData(RecordNumber, SectionName) {
  
  const references = references_data.find((ITEM) => ITEM.RecordNumber === RecordNumber);
  const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  const section = sections.filter(
    (ITEM) => ITEM.Section.TOCHeading === SectionName);
  const subSections = subSections_data.filter(
    (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);
  const subInformations = subInformations_data.filter(
    (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);


  ref1 = references.References[0];
  ref2 = references.References[1];


  return html`
    <div>
      <h3>${section[0].RecordTitle}</h3>

      

    </div>
  `;
}

module.exports = ElementsData;

ht1 = ElementsData(1, 'History');
ht2 = ElementsData(2, 'Properties');
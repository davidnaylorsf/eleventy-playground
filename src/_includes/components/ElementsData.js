const {html} = require('common-tags');
// const elementsData = require("../../_data/ELEMENTS_v2.json");
const references_data = require("../../_data/References_v1.json");
const sections_data = require("../../_data/Sections_v2.json");
//const subInformations_data = require("../../_data/SubInformations_v1.json");
const subSections_data = require("../../_data/SubSections_v2.json");


function RecordTitle(RecordNumber) {
  const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  const section = sections.filter(
    (ITEM) => ITEM.Section.TOCHeading === 'Identifiers')[0];  

    return html`
      <span>${section.RecordTitle}</span>
  `;
}


function Section(RecordNumber, SectionName) {
  
  const references = references_data.find((ITEM) => ITEM.RecordNumber === RecordNumber);
  const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  const section = sections.filter(
    (ITEM) => ITEM.Section.TOCHeading === SectionName)[0];
  const subSections = subSections_data.filter(
    (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);

  const SectionInfo = section.Info;
  

  infoStrings = Array.from(SectionInfo, x => x.htmlString);

  // testSection1 = section[0];
  // testSection2 = section[1];


  return html`
    <div>
      ${infoStrings.map(infoStrings => `<p>${infoStrings}</p>`)}
    </div>
  `;
}

module.exports.Section = Section;
module.exports.RecordTitle = RecordTitle;

ht1 = Section(1, 'History');
// ht2 = Section(2, 'Properties');
rt1 = RecordTitle(1);
rt2 = RecordTitle(2);
rt3 = RecordTitle(3);
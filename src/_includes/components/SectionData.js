const {html} = require('common-tags');

const references_data = require("../../_data/References_v1.json");
const sections_data = require("../../_data/Sections_v2.json");


function SectionData(RecordNumber, SectionName) {
  
  // const references = references_data.find((ITEM) => ITEM.RecordNumber === RecordNumber);
  const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  const section = sections.filter(
    (ITEM) => ITEM.Section.TOCHeading === SectionName)[0];
  // const subSections = subSections_data.filter(
  //  (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);

  if ( ( typeof section !== 'undefined' ) && ('Info' in section)) {
    SectionInfo = section.Info;
    infoStrings = Array.from(SectionInfo, x => x.htmlString);
  } else {
    SectionInfo = [];
    infoStrings = [];
  }
    
  

  return html`
    <div>
      ${infoStrings.map(infoStrings => `<p>${infoStrings}</p>`)}
    </div>
  `;
}

module.exports.SectionData = SectionData;

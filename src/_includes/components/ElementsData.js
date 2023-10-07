const {html} = require('common-tags');
// const elementsData = require("../../_data/ELEMENTS_v2.json");
const references_data = require("../../_data/References_v1.json");
const sections_data = require("../../_data/Sections_v2.json");
//const subInformations_data = require("../../_data/SubInformations_v1.json");
const subSections_data = require("../../_data/SubSections_v2.json");


function RecordMeta(RecordNumber, MetaType) {
  // Allowed values of MetaType: 'RecordNumber'; and 'RecordTitle'
  // Of course when MetaType = 'RecordNumber', the value of recordMeta returned 
  // will be the same as the value of RecordNumber in the function call, 
  // so nothing is learnt by making the call. It only provides a consistency check on the data.
  const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  const section = sections.filter(
    (ITEM) => ITEM.Section.TOCHeading === 'Identifiers')[0];  

  if ( MetaType in section ) {
    recordMeta = section[MetaType]
  } else {
    recordMeta = ""
  }
    
    return html`
      <span>${recordMeta}</span>
  `;
}


function Section(RecordNumber, SectionName) {
  
  const references = references_data.find((ITEM) => ITEM.RecordNumber === RecordNumber);
  const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  const section = sections.filter(
    (ITEM) => ITEM.Section.TOCHeading === SectionName)[0];
  const subSections = subSections_data.filter(
    (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);

  if ( ( typeof section !== 'undefined' ) && ('Info' in section)) {
    SectionInfo = section.Info;
    infoStrings = Array.from(SectionInfo, x => x.htmlString);
  } else {
    SectionInfo = [];
    infoStrings = [];
  }
    
  

  

  // testSection1 = section[0];
  // testSection2 = section[1];


  return html`
    <div>
      ${infoStrings.map(infoStrings => `<p>${infoStrings}</p>`)}
    </div>
  `;
}

module.exports.Section = Section;
module.exports.RecordMeta = RecordMeta;

ht1 = Section(1, 'Description');
uses1 = Section(4, 'Uses');

// ht2 = Section(2, 'Properties');
rt1 = RecordMeta(1, 'RecordTitle');
rt2 = RecordMeta(1, 'RecordNumber');
rt3 = RecordMeta(3, 'RecordTitle');
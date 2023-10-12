const {html} = require('common-tags');

const references_data = require("../../_data/References_v1.json");
// const sections_data = require("../../_data/Sections_v2.json");
const subSections_data = require("../../_data/SubSections_v2.json");

function SubSectionMeta(RecordNumber, SectionName, SubSectionNumber, MetaType) {
  const subSections = subSections_data.filter(
    (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);
  const subSection = subSections[SubSectionNumber - 1]

  requestedData = ""
  hasDisplayControls = false;
  subSectionName = subSection.TOCHeading;
  if ('DisplayControls' in subSection) {
    hasDisplayControls = true;
  } else {
    hasDisplayControls = false;
  }

  if (MetaType == 'subSectionName' ) {
    requestedData = subSectionName;
  } else if (MetaType == 'hasDisplayControls') {
    // not sure yet if this is helpful, and if so, how to use the boolean returned value in requestedData.
    requestedData = hasDisplayControls;
  }

  return requestedData;
}

function SubSection(RecordNumber, SectionName, SubSectionNumber) {

  const references = references_data.find((ITEM) => ITEM.RecordNumber === RecordNumber);
  // const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);
  // const section = sections.filter(
  //  (ITEM) => ITEM.Section.TOCHeading === SectionName)[0];
  const subSections = subSections_data.filter(
    (ITEM) => ITEM.RecordNumber === RecordNumber && ITEM.SectionName === SectionName);
  const subSection = subSections[SubSectionNumber - 1]

  
  isTable = false;
  numberOfColumns = 0;
  columnNames = [];
  useNamesAsColumnHeadings = false;
  infoStrings = [];

  if ( ( typeof subSection !== 'undefined' ) && ('DisplayControls' in subSection)) {
    if ('CreateTable' in subSection.DisplayControls ) {
      CreateTable = subSection.DisplayControls.CreateTable;
      isTable = true;
      if ('ColumnsFromNamedLists' in CreateTable) {
        columns = CreateTable.ColumnsFromNamedLists;
        numberOfColumns = CreateTable.NumberOfColumns;
        fromInformationIn = CreateTable.FromInformationIn;
        if (fromInformationIn != 'ThisSection') {
          console.log("WARNING: Need to CreateTable from Information in :" + fromInformationIn);
        }
        columnNames = columns.Name;
        useNamesAsColumnHeadings = columns.UseNamesAsColumnsHeadings;
      }
    }
  }

  if ( ( typeof subSection !== 'undefined' ) && ('Info' in subSection)) {
    subSectionInfo = subSection.Info;
    infoStrings = Array.from(subSectionInfo, x => x.htmlString);
  } else {
    subSectionInfo = [];
    infoStrings = [];
  }

  infoTemplate =  html`<div>
${infoStrings.map(infoStrings => `<p>${infoStrings}</p>`)}
</div>`;

  headerTemplate = html`<tr>
  ${columnNames.map(columnNames => `<th>${columnNames}</th>`)}
</tr>`

tableTemplate = html`<table>
${headerTemplate}
</table>`;







// return templateString;
return tableTemplate;

}

module.exports.SubSection = SubSection;
module.exports.SubSectionMeta = SubSectionMeta;

sub1 = SubSection(8, 'History', 1)
meta1 = SubSectionMeta(8, 'History', 1, 'subSectionName')
meta2 = SubSectionMeta(8, 'History', 1, 'hasDisplayControls')
repeat = meta1;
const {html} = require('common-tags');

const sections_data = require("../../_data/Sections_v2.json");


function RecordMetaData(RecordNumber, MetaType) {
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

module.exports.RecordMetaData = RecordMetaData;

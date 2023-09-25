const {html} = require('common-tags');
const elementsData = require("../../_data/ELEMENTS_v2.json");

function ElementsData(RecordNumber) {
  const record = elementsData.find((ITEM) => ITEM.Record.RecordNumber === RecordNumber);
  identifiers = record.Record.Section[0];
  props = record.Record.Section[1];
  description = record.Record.Section[3];
  compounds = record.Record.Section[5];
  seca=0;
  secb=2;
  secc=3;
  secd=5;
  sece=6;
  secf=9;
  secg=10;

  return html`
    <div>
      <h3>${identifiers.Section[0].Information[0].Name}: ${identifiers.Section[0].Information[0].Value.StringWithMarkup[0].String}</h3>
      <p>${props.Section[seca].Information[0].Name}: ${props.Section[seca].Information[0].Value.StringWithMarkup[0].String}, [ref:${props.Section[seca].Information[0].ReferenceNumber}]</p>
      <p>${props.Section[secb].TOCHeading}: ${props.Section[secb].Information[0].Value.StringWithMarkup[0].String} [ref:${props.Section[secb].Information[0].ReferenceNumber}]</p>
      <p>${props.Section[secc].TOCHeading}: ${props.Section[secc].Information[0].Value.StringWithMarkup[0].String} [ref:${props.Section[secc].Information[0].ReferenceNumber}]</p>
      
      
      
      <p>${description.TOCHeading}: ${description.Information[0].Value.StringWithMarkup[0].String} [ref:${description.Information[0].ReferenceNumber}]</p>
      <p>${compounds.TOCHeading}: ${compounds.Information[0].Value.StringWithMarkup[0].String} [ref:${compounds.Information[0].ReferenceNumber}]</p>
    </div>
  `;
}

module.exports = ElementsData;

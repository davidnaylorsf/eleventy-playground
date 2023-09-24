const {html} = require('common-tags');
const elementsData = require("../../_data/ELEMENTS_v2.json");

function ElementsData(RecordNumber) {
  const record = elementsData.find((ITEM) => ITEM.Record.RecordNumber === RecordNumber);
  identifiers = record.Record.Section[0];
  props = record.Record.Section[1];
  seca=0;
  secb=2;
  secc=3;

  return html`
    <div>
      <h3>${identifiers.Section[0].Information[0].Name}: ${identifiers.Section[0].Information[0].Value.StringWithMarkup[0].String}</h3>    
      <p>${props.Section[seca].Information[0].Name}: ${props.Section[seca].Information[0].Value.StringWithMarkup[0].String}</p>
      <p>Source Ref: ${props.Section[seca].Information[0].ReferenceNumber}</p>
      <p>${props.Section[secb].TOCHeading}: ${props.Section[secb].Information[0].Value.StringWithMarkup[0].String}</p>
      <p>Source Ref: ${props.Section[secb].Information[0].ReferenceNumber}</p>
      <p>${props.Section[secc].TOCHeading}: ${props.Section[secc].Information[0].Value.StringWithMarkup[0].String}</p>
      <p>Source Ref: ${props.Section[secc].Information[0].ReferenceNumber}</p>
    </div>
  `;
}

module.exports = ElementsData;

const {html} = require('common-tags');
const elementsData = require("../../_data/ELEMENTS_v2.json");

const resp = ElementsData(3);
console.log(resp);
/* const record = elementsData.find((ITEM) => ITEM.Record.RecordNumber === 4);
const props = record.Record.Section[1];
const ids = record.Record.Section[0];
const description = record.Record.Section[3];
const response = {}; */

/* response.properties = props;
response.ids = ids;
response.description = description; */



function ElementsData(RecordNumber) {
  const record = elementsData.find((ITEM) => ITEM.Record.RecordNumber === RecordNumber);
  props = record.Record.Section[1];
  propName = props.Section[0].Information[0].Name;
  return html`
    <div>
      <h3>${props.Section[0].Information[0].Name}: ${props.Section[0].Information[0].Value.StringWithMarkup[0].String}</h3>
      <h4>Source Ref: ${props.Section[0].Information[0].ReferenceNumber}</h4>
    </div>
  `;
}

module.exports = ElementsData;

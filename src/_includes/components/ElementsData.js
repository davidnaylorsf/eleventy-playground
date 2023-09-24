const {html} = require('common-tags');
const elementsData = require("../../_data/ELEMENTS_v2.json");

const record = elementsData.find((ITEM) => ITEM.Record.RecordNumber === 4);
const props = record.Record.Section[1];
const ids = record.Record.Section[0];
const description = record.Record.Section[3];
const response = {};

response.properties = props;
response.ids = ids;
response.description = description;

const displayed = props.Section[0].Information[0].Name

function ElementsData() {
  return html`
    <div>
      <h3>${props.Section[0].Information[0].Name}: ${props.Section[0].Information[0].Value.StringWithMarkup[0].String}</h3>
      <h4>Source Ref: ${props.Section[0].Information[0].ReferenceNumber}</h4>
    </div>
  `;
}

module.exports = ElementsData;

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

function ElementsData() {
  return html`
    <div>
      <h2>${props}</h2>
    </div>
  `
}

module.exports = ElementsData;
// return response;

const {html} = require('common-tags');
const compoundsData = require("../../_data/Compounds_v1.json")

function Compound(Cid) {

  const compound = compoundsData.filter((ITEM) => ITEM.Cid === Cid);
  Compound_title = compound[0].Title
  description = compound[0].Description

  return html`
  <h4>${Compound_title} </h4>
  <div>
    ${description}
  </div>
`;

}
module.exports.Compound = Compound;

comp1 = Compound(101);
comp2 = comp1;
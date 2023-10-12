const {html} = require('common-tags');
const compoundsData = require("../../_data/Compounds_v1.json")

function Compound(Cid) {

  const compound = compoundsData.filter((ITEM) => ITEM.Cid === Cid);
  title = compound[0].Title

  return html`
  <div>
    ${title}
  </div>
`;

}
module.exports.Compound = Compound;

comp1 = Compound(101);
comp2 = comp1;
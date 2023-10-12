const {html} = require('common-tags');
const compoundsData = require("../../_data/Compounds_v1.json")



// const sections = sections_data.filter((ITEM) => ITEM.RecordNumber === RecordNumber);

function Compound(Cid) {

  const compound = compoundsData.filter((ITEM) => ITEM.Cid === Cid);

  title = compound[0].Title
  copy = compound

  return html`
  <div>
    ${title}
  </div>
`;

}



module.exports.Compound = Compound;

comp1 = Compound(101);
comp2 = comp1;
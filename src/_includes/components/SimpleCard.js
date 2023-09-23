const {html} = require('common-tags');

function SimpleCard({title, link, linkText, raised}) {
  return html`
  <div>
    <h2 class="card__title">${title}</h2>
    <a class="card__link" href="${link}">${linkText}</a>
  </div>
  `;
}

module.exports = SimpleCard;
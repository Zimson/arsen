module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const width = options.hash.width;
  const height = options.hash.height;
  const link = options.hash.link ? JSON.parse(options.hash.link) : null;
  const icon = options.hash.icon ? JSON.parse(options.hash.icon) : null;
  const count = options.hash.count;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'info-box';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' info-box--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderCheckIcon() {

  }


  function renderIcon(icon) {
    let svg = ``;

    switch (icon.name) {
      case 'security':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="38" height="48">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#security">
              </svg>`
        break;
      default:
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="37" height="37">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#check">
              </svg>`;
    }

    return svg;
  }

  function renderLink(link) {
    return `<div class="info-box__link">
        <a ${link.href ? `href="${link.href}"` : ``} class="link link--${link.color}" ${link.dataModal ? `data-modal="${link.dataModal}"` : ``}>${link.text}</a>
        <svg class="icon icon--${link.color}" width="6" height="9">
           <use xlink:href="${root}assets/img/symbol/sprite.svg#arrow-right">
        </svg>
    </div>`
  }

  const block = `<article class="${cssClass}" ${count ? `data-count="${count}"` : ``}>
                    ${icon ? renderIcon(icon) : ``}
                    <h1 class="info-box__title">${title}</h1>
                    <p class="info-box__text">${text}</p>
                   ${link ? renderLink(link) : ``}
                 </article>`;

  return block;

}

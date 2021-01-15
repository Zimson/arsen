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
  let cssClass = 'info-block';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' info-block--' + modsList[i].trim();
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
        svg = `<svg viewBox="0 0 33 33" class="icon ${icon.color ? `icon--${icon.color}` : ``}" height="33" width="33" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><mask id="a" fill="#fff"><path d="m16.5 0c9.113 0 16.5 7.387 16.5 16.5s-7.387 16.5-16.5 16.5-16.5-7.387-16.5-16.5 7.387-16.5 16.5-16.5zm0 2c-8.008 0-14.5 6.492-14.5 14.5s6.492 14.5 14.5 14.5 14.5-6.492 14.5-14.5-6.492-14.5-14.5-14.5zm7.425 9.318c.585.586.585 1.536 0 2.121l-9.546 9.546-5.304-5.303c-.585-.586-.585-1.536 0-2.121.586-.586 1.536-.586 2.122 0l3.182 3.182 7.424-7.425c.586-.586 1.536-.586 2.122 0z" fill="#fff" fill-rule="evenodd"/></mask><g fill="none" fill-rule="evenodd"><path d="m16.5 0c9.113 0 16.5 7.387 16.5 16.5s-7.387 16.5-16.5 16.5-16.5-7.387-16.5-16.5 7.387-16.5 16.5-16.5zm0 2c-8.008 0-14.5 6.492-14.5 14.5s6.492 14.5 14.5 14.5 14.5-6.492 14.5-14.5-6.492-14.5-14.5-14.5zm7.425 9.318c.585.586.585 1.536 0 2.121l-9.546 9.546-5.304-5.303c-.585-.586-.585-1.536 0-2.121.586-.586 1.536-.586 2.122 0l3.182 3.182 7.424-7.425c.586-.586 1.536-.586 2.122 0z"/><g fill="#50bd5c" fill-rule="nonzero" mask="url(#a)"><path d="m0 0h37v37h-37z" transform="translate(-2 -2)"/></g></g></svg>`;
    }

    return svg;
  }

  function renderLink(link) {
    return `<a href="${link.href}" class="info-block__link info-block__link--${link.color}">
        <span>${link.text}</span>
        <svg class="icon icon--${link.color}" width="6" height="9">
           <use xlink:href="${root}assets/img/symbol/sprite.svg#arrow-right">
        </svg>
    </a>`
  }

  const block = `<article class="${cssClass}" ${count ? `data-count="${count}"` : ``}>
                    ${icon ? renderIcon(icon) : ``}
                    <h1 class="info-block__title">${title}</h1>
                    <p class="info-block__text">${text}</p>
                   ${link ? renderLink(link) : ``}
                 </article>`;

  return block;

}

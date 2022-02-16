module.exports = function(options) {
  const items = options.hash.items ? JSON.parse(options.hash.items) : null;
  const iconsColor = options.hash.iconsColor;
  const textColor = options.hash.textColor;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'list';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' list--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const list = `
    <ul class="${cssClass}">
        ${items && items.map((item) => {
          return `<li class="list__item ${textColor ? 'list__item--' + textColor : ''}">
              <svg class="icon ${iconsColor ? 'icon--' + iconsColor : ''}" width="48px" height="38px">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#${item.icon || 'check-list'}" />
              </svg>            
              ${item.text}
          </li>`  
        }).join(``)}
    </ul>
  `

  return list;
}

module.exports = function(options) {
  const items = options.hash.items ? JSON.parse(options.hash.items) : null;
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
          return `<li class="list__item">
              <svg class="icon ${item.color ? 'icon--' + item.color : ''}" width="48px" height="38px">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#${item.icon || 'check-list'}" />
              </svg>            
              ${item.text}
          </li>`  
        }).join(``)}
    </ul>
  `

  return list;
}

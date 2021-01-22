module.exports = function(options) {
  const items = options.hash.items ? JSON.parse(options.hash.items) : null;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'check-list';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' check-list--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const svg = `
    <ul class="${cssClass}">
        ${items && items.map((item) => {
          return `<li class="check-list__item">         
              ${item}
          </li>`  
        }).join(``)}
    </ul>
  `

  return svg;
}

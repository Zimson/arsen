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

  const svg = `
    <ul class="${cssClass}">
        ${items && items.map((item) => {
          return `<li class="list__item">
            <svg height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><mask id="a" fill="#fff"><path d="m4.886 7.448 7-7c.273-.274.716-.274.99 0 .273.273.273.716 0 .99l-7.99 7.99-3.748-3.748c-.273-.273-.273-.716 0-.99.273-.273.716-.273.99 0z" fill="#fff" fill-rule="evenodd"/></mask><g fill="none" fill-rule="evenodd"><path d="m4.886 7.448 7-7c.273-.274.716-.274.99 0 .273.273.273.716 0 .99l-7.99 7.99-3.748-3.748c-.273-.273-.273-.716 0-.99.273-.273.716-.273.99 0z" fill="none"/><g fill="#b063f5" fill-rule="nonzero" mask="url(#a)"><path d="m0 0h48v38h-48z" transform="translate(-17 -14)"/></g></g></svg> 
            ${item}
          </li>`  
        }).join(``)}
    </ul>
  `

  return svg;
}

module.exports = function(options) {
  const name = options.hash.name;
  const logo = options.hash.logo ?  JSON.parse(options.hash.logo) : null;
  const links = options.hash.links ? JSON.parse(options.hash.links) : null;
  const href = options.hash.href;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'links-box';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' links-box--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderLogo(logo) {
    return `<svg class="${cssClass}" ${logo.width ? `width="${logo.width}"` : ``} ${logo.height ? `height="${logo.height}"` : ``}>
               <use xlink:href="${root}assets/img/symbol/sprite.svg#${logo.name}">
            </svg>`
  }

  if (links) {
    return `<label class="${cssClass}">
            <input type="radio" name="${name}" />
            <div class="links-box__toggle">
                ${logo ? renderLogo(logo) : ``}
            </div>    
            <ul class="links-box__list">
                ${links.map((link) => `<li>
                    <a href="${link.href}" class="link">${link.text}</a>
                    <svg class="icon" width="17" height="13">
                       <use xlink:href="${root}assets/img/symbol/sprite.svg#forward-arrow">
                    </svg>
                </li>`)}
            </ul>
        </label>`
  } else {
    return `<a href="${href}" class="${cssClass}">
            <div class="links-box__body">
                ${logo ? renderLogo(logo) : ``}
            </div>    
        </a>`
  }
}

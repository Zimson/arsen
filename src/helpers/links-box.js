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

  function renderToggleArrow() {
    return `<svg class="links-box__toggle-arrow" width="48" height="38">
               <use xlink:href="${root}assets/img/symbol/sprite.svg#caret" />
            </svg>`
  }

  function renderLogo(logo) {
    return `<svg ${logo.width ? `width="${logo.width}"` : ``} ${logo.height ? `height="${logo.height}"` : ``}>
               <use xlink:href="${root}assets/img/symbol/sprite.svg#${logo.name}" />
            </svg>`
  }

  if (links) {
    return `<label class="${cssClass}">
            <input type="checkbox" class="links-box__input" name="${name}" hidden />
            <span class="links-box__body">
                ${logo ? renderLogo(logo) : ``}
                ${renderToggleArrow()}
            </span>    
            <ul class="links-box__list">
                ${links.map((link) => `<li class="links-box__item">
                    <a href="${link.href}" class="links-box__link" target="_blank">
                        <span>${link.text}</span>
                    </a>
                </li>`).join(``)}
            </ul>
        </label>`
  } else {
    return `<a href="${href}" class="${cssClass}" target="_blank">
            <span class="links-box__body">
                ${logo ? renderLogo(logo) : ``}
                ${renderToggleArrow()}
            </span>   
        </a>`
  }
}

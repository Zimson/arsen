module.exports = function(options) {
  const text = options.hash.text;
  const style = options.hash.style;
  const mods = options.hash.mods;
  const icon = options.hash.icon ? JSON.parse(options.hash.icon) : null;
  const root = options.data.root.root;

  function setMods(cls, mods) {
    let cssClass = cls;
    let allMods = '';

    if (mods !== 'undefined' && mods ) {
      const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ` ${cls}--` + modsList[i].trim();
      }
    }

    cssClass+= allMods;

    return cssClass;
  }

  const alertClass = setMods('alert', mods);

  const alert = `<article class="${alertClass}" ${style ? `style="${style}"` : ``}>
                  <svg  class="icon" width="48" height="38">
                    <use xlink:href="${root}assets/img/symbol/sprite.svg#alert-success" />
                  </svg>
                  <span class="alert__text">${text}</span>
                </article>`;

  return alert;
}

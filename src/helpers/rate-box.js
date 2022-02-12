module.exports = function(options) {
  const count = options.hash.count;
  const prefix = options.hash.prefix;
  const text = options.hash.text;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'rate-box';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' rate-box--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const block = `
       <div class="${cssClass}">
       <span class="rate-box__head">
        <b class="rate-box__count" ${prefix ? `data-prefix="${prefix}"` : ``}>${count}</b>
        <sub>%</sub>
       </span>
       <div class="rate-box__text">${text}</div>
    </div>
  `;

  return block;

}

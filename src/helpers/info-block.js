module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const width = options.hash.width;
  const height = options.hash.height;
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

  // const svg = `<svg class="${cssClass}" ${width ? `width="${width}"` : ``} ${height ? `height="${height}"` : ``}>
  //                <use xlink:href="${root}assets/img/symbol/sprite.svg#${name}">
  //             </svg>`
  //
  // return svg;

  const block = `<article class="${cssClass}" ${count ? `data-count="${count}"` : ``}>
                    <h1 class="info-block__title">${title}</h1>
                    <p class="info-block__text">${text}</p>
                 </article>`;

  return block;

}

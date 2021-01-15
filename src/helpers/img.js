module.exports = function(options) {
  const name = options.hash.name;
  const width = options.hash.width;
  const height = options.hash.height;
  const alt = options.hash.alt;
  const ext = options.hash.ext || 'png';
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'img';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + '' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  return `<picture>
    <source media="(min-width: 600px)" srcset="${root}assets/img/content/${name}--lg.${ext} 1x, ${root}assets/img/content/${name}--lg@2x.${ext} 2x, ${root}assets/img/content/${name}--lg@3x.${ext} 3x">
    <img src="${root}assets/img/content/${name}--sm.png" srcset="${root}assets/img/content/${name}--sm@2x.${ext} 2x, ${root}assets/img/content/${name}--sm@3x.${ext} 3x" ${width ? `width="${width}"` : ``} ${height ? `height="${height}"` : ``} alt="${alt}">
  </picture>`
}




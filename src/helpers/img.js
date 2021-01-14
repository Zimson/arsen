module.exports = function(options) {
  const name = options.hash.name;
  const width = options.hash.width;
  const height = options.hash.height;
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

  const img = `<img ${width ? `width="${width}"` : ``} ${height ? `height="${height}"` : ``}
             src="${root}assets/img/content/${name}.png"
             srcset="${root}assets/img/content/${name}@2x.png 2x, ${root}assets/img/content/${name}@3x.png 3x">`

  return img;
}

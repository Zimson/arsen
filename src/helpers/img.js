module.exports = function(options) {
  const name = options.hash.name;
  const width = options.hash.width;
  const height = options.hash.height;
  const alt = options.hash.alt;
  const breakpoints = options.hash.breakpoints ? JSON.parse(options.hash.breakpoints) : {};
  const ext = options.hash.ext || 'png';
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'img';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' img--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  return `<picture>
    ${breakpoints.xxl ? `<source media="(min-width: 1440px)" srcset="${root}assets/img/content/${name}--xxl.${ext} 1x, ${root}assets/img/content/${name}--xxl@2x.${ext} 2x, ${root}assets/img/content/${name}--xxl@3x.${ext} 3x">` : ``}
    ${breakpoints.xl ? `<source media="(min-width: 1280px)" srcset="${root}assets/img/content/${name}--xl.${ext} 1x, ${root}assets/img/content/${name}--xl@2x.${ext} 2x, ${root}assets/img/content/${name}--xl@3x.${ext} 3x">` : ``}
    ${breakpoints.lg ? `<source media="(min-width: 900px)" srcset="${root}assets/img/content/${name}--lg.${ext} 1x, ${root}assets/img/content/${name}--lg@2x.${ext} 2x, ${root}assets/img/content/${name}--lg@3x.${ext} 3x">` : ``}
    ${breakpoints.md ? `<source media="(min-width: 768px)" srcset="${root}assets/img/content/${name}--md.${ext} 1x, ${root}assets/img/content/${name}--md@2x.${ext} 2x, ${root}assets/img/content/${name}--md@3x.${ext} 3x">` : ``}
    ${breakpoints.sm ? `<source media="(min-width: 600px)" srcset="${root}assets/img/content/${name}--sm.${ext} 1x, ${root}assets/img/content/${name}--sm@2x.${ext} 2x, ${root}assets/img/content/${name}--sm@3x.${ext} 3x">` : ``}
    <img  class="${cssClass}" src="${root}assets/img/content/${name}--xs.${ext}" srcset="${root}assets/img/content/${name}--xs@2x.${ext} 2x, ${root}assets/img/content/${name}--xs@3x.${ext} 3x" ${width ? `width="${width}"` : ``} ${height ? `height="${height}"` : ``} alt="${alt}">
  </picture>`
}




module.exports = function(options) {
  const name = options.hash.name;
  const title = options.hash.title;
  const text = options.hash.text;
  const img = options.hash.img ?  JSON.parse(options.hash.img) : null;
  const link = options.hash.link ?  JSON.parse(options.hash.link) : null;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'card';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' card--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderLink(link) {
    return `<a ${link.href ? `href="${link.href}"` : ``} class="link link--more link--blue"><span>${link.text}</span></a>`
  }

  const card = `<article class="${cssClass}">
           <img class="card__img" src="${root}assets/img/content/${img.name}.png" srcset="${root}assets/img/content/${img.name}@2x.png 2x, ${root}assets/img/content/${img.name}@3x.png 3x" width="80" height="80" alt="${img.alt}">
           <span class="card__name">${name}</span>
           <b class="card__title">${title}</b>
           <p class="card__text">${text}</p>
           ${link ? renderLink(link) : ''}
    </article>`;

  return card;
}

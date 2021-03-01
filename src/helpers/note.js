module.exports = function(options) {
  const text = options.hash.text ?  JSON.parse(options.hash.text) : null;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'note';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' note--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const note = `<article class="${cssClass}">
                  ${text.map((p) => `<p>${p}</p>`).join(``)}
          </article>`

  return note;
}

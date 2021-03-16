module.exports = function(options) {
  const text = options.hash.text ?  JSON.parse(options.hash.text) : null;
  const mods = options.hash.mods;
  const textMods = options.hash.textMods;
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

  const noteClass = setMods('note', mods);
  const textClass = setMods('note__text', textMods);

  const note = `<article class="${noteClass}">
                  ${text.map((p) => `<p class="${textClass}">${p}</p>`).join(``)}
          </article>`

  return note;
}

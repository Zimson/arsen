module.exports = function(options) {
  const name = options.hash.name;
  const width = options.hash.width;
  const height = options.hash.height;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'social';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' social--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const block = `
    <div class="${cssClass}">
        <span class="social__label">Мы в соцсетях</span>
        <a href="https://t.me/arsenalpay" class="social__item">
            <img src="${root}assets/img/svg/telegram.svg" width="48" height="38" alt="Telegram">
        </a>
        <a href="https://vk.com/arsenal_pay" class="social__item" target="_blank">
            <img src="${root}assets/img/svg/vk.svg" width="48" height="38" alt="Facebook">
        </a>
        <a href="https://vm.tiktok.com/ZSdYwgyuU/" class="social__item" target="_blank">
            <img src="${root}assets/img/svg/tiktok.svg" width="48" height="38" alt="Instagram*">
        </a>
  </div>`;

  return block;
}

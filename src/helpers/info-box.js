module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const label = options.hash.label;
  const width = options.hash.width;
  const height = options.hash.height;
  const titleMod = options.hash.titleMod;
  const textMod = options.hash.textMod;
  const link = options.hash.link ? JSON.parse(options.hash.link) : null;
  const icon = options.hash.icon ? JSON.parse(options.hash.icon) : null;
  const count = options.hash.count;
  const mods = options.hash.mods;
  const titleMods = options.hash.titleMods;
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

  const boxClass = setMods('info-box', mods);
  const titleClass = setMods('info-box__title', titleMods);
  const textClass = setMods('info-box__text', textMods);

  function renderLabel(label) {
    return `<span class="info-box__label">${label}</span>`
  }

  function renderIcon(icon) {
    let svg = ``;

    switch (icon.name) {
      case 'number-1':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="37" height="37">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#number-1" />
              </svg>`
        break;
      case 'number-2':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="37" height="37">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#number-2" />
              </svg>`
        break;
      case 'number-3':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="37" height="37">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#number-3" />
              </svg>`
        break;
      case 'security':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="38" height="48">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#security" />
              </svg>`
        break;
      case 'check':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="37" height="37">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#check" />
              </svg>`;
        break;
      case 'check-medium':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="48" height="42">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#check-medium" />
              </svg>`;
        break;
      case 'check-circle-medium':
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="48" height="38">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#check-circle-medium" />
              </svg>`;
        break;
      default:
        svg = `<svg  class="icon ${icon.color ? `icon--${icon.color}` : ``}" width="${width}" height="${height}">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#${icon.name}" />
              </svg>`
    }

    return svg;
  }

  function renderLink(link) {
    let box = ``;

    switch (link.type) {
      case 'button':
        box = `<div class="info-box__btn">
           <a ${link.href ? `href="${link.href}"` : ``} class="btn ${link.color ? `btn--${link.color} btn--full-width-sm btn--align-left` : ``}" ${link.dataModal ? `data-modal="${link.dataModal}"` : ``}>
              ${link.icon ? 
                `<svg  class="icon ${link.color ? `icon--${link.color}` : ``}" width="48" height="38" style="margin-left: 2px;">
                    <use xlink:href="${root}assets/img/symbol/sprite.svg#${link.icon}" />
                </svg>` : ``}  
              <span>${link.text}</span>
           </a>
        </div>`;
        break;
      default:
        box = `<div class="info-box__link">
           <a ${link.href ? `href="${link.href}"` : ``} class="link link--more link--${link.color}" ${link.dataModal ? `data-modal="${link.dataModal}"` : ``}><span>${link.text}</span></a>
        </div>`;
    }

    return box;
  }

  const block = `<article class="${boxClass}" ${count ? `data-count="${count}"` : ``}>
                    ${icon ? renderIcon(icon) : ``}
                    ${label ? renderLabel(label) : ``}
                    <h3 class="${titleClass}">${title}</h3>
                    <p class="${textClass}" >${text}</p>
                   ${link ? renderLink(link) : ``}
                 </article>`;

  return block;
}

module.exports = function(options) {
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'icon';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' icon--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const svg = `<svg width="7px" height="10px" viewBox="0 0 7 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
    <title>Clipped</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <path d="M4.071,5.036 L1.243,2.207 C0.853,1.817 0.853,1.183 1.243,0.793 C1.633,0.403 2.266,0.403 2.657,0.793 L6.899,5.036 L2.657,9.278 C2.267,9.668 1.633,9.668 1.243,9.278 C0.853,8.888 0.853,8.254 1.243,7.864 L4.07,5.036 L4.071,5.036 Z" id="path-1"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="arrow-right">
            <g id="Clipped">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <g id="prefix__a"></g>
                <g id="Group" mask="url(#mask-2)" fill="#268EFF" fill-rule="nonzero">
                    <g transform="translate(-6.000000, -14.000000)" id="Shape">
                        <polygon points="0 0 48 0 48 38 0 38"></polygon>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`

  return svg;
}

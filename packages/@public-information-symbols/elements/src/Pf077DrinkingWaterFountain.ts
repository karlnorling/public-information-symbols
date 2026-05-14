// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M61.816 121.869h52.917v52.917H61.816z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-61.816 -121.87)"/><path d="M92.301 129.28a3.748 3.748 0 1 0 0 7.496 3.748 3.748 0 0 0 0-7.496m-7.267 4.25c-.614.016-1.275.178-1.961.548l-8.348 4.82a3.82 3.82 0 0 0-1.908 3.53q-.007.097-.007.197v21.9a2.844 2.844 0 0 0 2.85 2.85 2.844 2.844 0 0 0 2.85-2.85v-18.982l.04-.022 6.562-3.789v2.743c-.015.606.124 1.371.496 1.8l3.9 4.351a1.83 1.83 0 0 0 2.593.142 1.83 1.83 0 0 0 .142-2.593l-3.43-3.827v-7.349c.035-1.547-1.585-3.53-3.779-3.47zm13.342 2.591a.365.365 0 1 0 .028.002zm-1.431.044a.365.365 0 1 0 .027.002zm-1.181.481a.347.347 0 1 0 .025.002zm3.961.006a.45.45 0 1 0 .034.003zm-2.212.813a.347.347 0 1 0 .026.001l-.026-.002zm-2.812.213a.347.347 0 1 0-.013.694.347.347 0 0 0 .013-.694m6.159.075a.49.49 0 1 0 .037.002zm-2.07.047a.45.45 0 1 0 .034.001l-.034-.002zm-2.495.14a.347.347 0 1 0-.013.694.347.347 0 0 0 .013-.694m3.45.972a.49.49 0 1 0-.02.98.49.49 0 0 0 .02-.98m-5.367.115a.328.328 0 1 0 .025.002zm1.241.138a.328.328 0 1 0 .025.001l-.025-.002zm-1.337 1.3a.294.294 0 1 0 0 .588.294.294 0 0 0 0-.588m1.269 0a.294.294 0 1 0 0 .588.294.294 0 0 0 0-.588m-5.373 2.921c0 .472.201.92.552 1.235l7.258 8.13h5.75v-11.027H91.691c-.919-.012-1.513.744-1.513 1.662" style="fill:#000;stroke:none;stroke-width:2.858" transform="translate(-61.816 -121.87)"/>`;
const _DefaultDesc = `Drinking water fountain`;
const _DefaultTitle = 'Drinking water fountain';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf077DrinkingWaterFountain extends HTMLElement {
  static readonly tagName = 'pi-pf-077-drinking-water-fountain';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-077-drinking-water-fountain`;
    const titleId = `pi-title-pf-077-drinking-water-fountain`;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;
    this.style.display = 'contents';
    this.innerHTML = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  }
}

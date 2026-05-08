// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M71.968 104.662h52.917v52.917H71.968z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-71.968 -104.662)"/><path d="m112.444 113.426-3.261 5.08h1.505l-2.54 3.889h1.38l-2.604 3.951h4.234v3.482h2.571v-3.482h4.234l-2.603-3.951h1.38l-2.54-3.89h1.505zm-31.232 17.751c-1.287 0-2.323 1.132-2.323 2.538v10.282c0 1.406 1.036 2.538 2.323 2.538h8.566l-.005-.065a3.334 3.334 0 0 1 3.334-3.333 3.334 3.334 0 0 1 3.334 3.333l-.002.065h12.434c1.246 0 2.57-1.1 2.35-2.41h6.323v-1.589h-6.706l-2.153-8.82c-.333-1.367-1.34-2.539-2.627-2.539zm.232 2.807h3.692c.35 0 .633.282.633.633v8.893c0 .35-.282.633-.633.633h-3.692a.63.63 0 0 1-.633-.633v-8.893c0-.351.282-.633.633-.633m8.16.03h3.92a.64.64 0 0 1 .64.64v1.643a.64.64 0 0 1-.64.641h-3.92a.64.64 0 0 1-.64-.64v-1.643a.64.64 0 0 1 .64-.64m10.19.091h3.799a.64.64 0 0 1 .64.64v3.647a.64.64 0 0 1-.64.64h-3.798a.64.64 0 0 1-.642-.64v-3.646a.64.64 0 0 1 .642-.64m-6.687 10.02a2.345 2.345 0 0 0-2.344 2.345 2.345 2.345 0 0 0 2.344 2.345 2.345 2.345 0 0 0 2.345-2.345 2.345 2.345 0 0 0-2.345-2.344" style="display:inline;stroke-width:1.7" transform="translate(-71.968 -104.662)"/>`;
const _DefaultDesc = `Caravan park or Caravans`;
const _DefaultTitle = 'Caravan park or Caravans';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tc003CaravanParkOrCaravans extends HTMLElement {
  static readonly tagName = 'pi-tc-003-caravan-park-or-caravans';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tc-003-caravan-park-or-caravans`;
    const titleId = `pi-title-tc-003-caravan-park-or-caravans`;
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

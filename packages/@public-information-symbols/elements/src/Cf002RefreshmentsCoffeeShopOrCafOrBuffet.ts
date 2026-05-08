// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M-39.536-17.166h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(39.536 17.166)"/><path d="M-23.897-2.012v14.858c.006.556 1.093 2.808 3.504 2.817h14.238c2.298.003 3.496-1.897 3.504-2.817V8.658h1.431a5.343 5.343 0 0 0 5.336-5.334A5.344 5.344 0 0 0-1.22-2.012h-1.43zm21.246 1.8h1.431a3.51 3.51 0 0 1 3.535 3.536A3.51 3.51 0 0 1-1.22 6.859h-1.43V4.752Zm-28.218 17.39c.027 1.033 2.756 3.45 5.614 3.418H-.9c2.858.031 5.588-2.385 5.615-3.419h-21.987z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(39.536 17.166)"/>`;
const _DefaultDesc = `Refreshments, coffee shop or café or buffet`;
const _DefaultTitle = "Refreshments, coffee shop or café or buffet";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Cf002RefreshmentsCoffeeShopOrCafOrBuffet extends HTMLElement {
  static readonly tagName = "pi-cf-002-refreshments-coffee-shop-or-caf-or-buffet";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-cf-002-refreshments-coffee-shop-or-caf-or-buffet`;
    const titleId = `pi-title-cf-002-refreshments-coffee-shop-or-caf-or-buffet`;
    const _w = this.hasAttribute("width") ? _h(this.getAttribute("width")!) : _DefaultWidth;
    const _ht = this.hasAttribute("height") ? _h(this.getAttribute("height")!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute("title") ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute("description") ?? _DefaultDesc;
    this.style.display = "contents";
    this.innerHTML = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  }
}

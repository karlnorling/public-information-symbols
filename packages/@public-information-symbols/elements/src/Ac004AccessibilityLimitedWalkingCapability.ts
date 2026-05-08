// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M205.484 121.759h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-205.484 -121.759)"/><path d="M232.167 127.51a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8m-3.616 6.585a2.97 2.97 0 0 0-2.673 1.7c-1.745 4.2-4.306 8.522-6.053 12.524a33 33 0 0 0-.5 1.792l-2.78 16.402a1.93 1.93 0 0 0 1.586 2.232 1.93 1.93 0 0 0 2.232-1.585l2.723-16.07c.199-1.063.373-1.146 1.14-.076l2.755 3.913-1.988 11.737a1.93 1.93 0 0 0 1.585 2.232 1.93 1.93 0 0 0 2.232-1.585l1.947-11.897c.167-1.268.062-1.712-.755-2.76l-3.326-4.68 1.076-2.261 2.15 2.2a1.175 1.175 0 0 0 1.663.02h5.126l3.227 7.141h-3.83c-.98 3.413-1.056 3.534-2.138 7.38a.7.7 0 0 0 1.357.24c.62-2.05 1.224-4.15 1.83-6.22h3.414l2.783 6.16a.7.7 0 1 0 1.274-.576l-7.015-15.524h-5.812a1.2 1.2 0 0 0-.196-.267l-2.549-2.608a1.2 1.2 0 0 0-.223-.179l2.44-5.127a2.97 2.97 0 0 0-1.41-3.966c-.418-.2-.86-.293-1.292-.292m5.366 29.805a2.475 2.475 0 1 0 0 4.95 2.475 2.475 0 0 0 0-4.95m10.975 0a2.475 2.475 0 1 0 .001 4.95 2.475 2.475 0 0 0 0-4.95" style="stroke-width:1.4" transform="translate(-205.484 -121.759)"/>`;
const _DefaultDesc = `Accessibility, limited walking capability`;
const _DefaultTitle = "Accessibility, limited walking capability";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Ac004AccessibilityLimitedWalkingCapability extends HTMLElement {
  static readonly tagName = "pi-ac-004-accessibility-limited-walking-capability";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-ac-004-accessibility-limited-walking-capability`;
    const titleId = `pi-title-ac-004-accessibility-limited-walking-capability`;
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

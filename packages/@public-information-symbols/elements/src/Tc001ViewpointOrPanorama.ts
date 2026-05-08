// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M98.467 141.83h52.917v52.917H98.467z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-98.467 -141.83)"/><path d="M128.826 150.113a3.011 3.011 0 1 0 0 6.023 3.011 3.011 0 0 0 0-6.023m-17.036 2.925v3.098l11.616-1.076v-.774h1.247v-1.248zm18.074 3.245c-1.097.11-1.688.462-2.51 1.522l-2.949 3.651-1.918-3.56a1.04 1.04 0 0 0-1.408-.439 1.04 1.04 0 0 0-.41 1.418l3.024 5.614c.388.72 1.125.651 1.6.03l2.282-3.027c1.772 2.664 4.42 6.788 6.024 9.19l.518 14.34c.029.799.643 1.442 1.441 1.442.799 0 1.426-.643 1.441-1.441l.29-14.828c1.083-1.009.918-2.706.178-4.097-1.512-2.844-1.873-5.27-4.004-7.717-1.035-1.383-2.363-2.128-3.599-2.098m-12.349.304-.53 5.385v24.487h10.1v-2.373h-7.726v-22.114l-.53-5.385z" style="stroke-width:1.7" transform="translate(-98.467 -141.83)"/>`;
const _DefaultDesc = `Viewpoint or panorama`;
const _DefaultTitle = "Viewpoint or panorama";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tc001ViewpointOrPanorama extends HTMLElement {
  static readonly tagName = "pi-tc-001-viewpoint-or-panorama";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tc-001-viewpoint-or-panorama`;
    const titleId = `pi-title-tc-001-viewpoint-or-panorama`;
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

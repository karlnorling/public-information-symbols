// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M126.85 87.816h52.917v52.917H126.85z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-126.85 -87.816)"/><path d="M148.016 95.708a2.722 2.722 0 1 0 0 5.445 2.722 2.722 0 0 0 0-5.445m-.45 6.358a3.37 3.37 0 0 0-1.668.44c-1.815 1.323-3.565 3.19-5.263 4.772l-3.124 6.951a1.376 1.376 0 0 0 .692 1.823c.697.313 1.52.01 1.823-.692l2.815-6.253c.03-.073.164-.196.334-.339.632-.487 1.014-.829 1.014.076v3.423q0 .296.05.576l-.958 8.483-3.78 8.142a1.686 1.686 0 0 0 .725 2.275 1.685 1.685 0 0 0 2.275-.725l4.35-8.19.992-3.975c.177-.687.283-.703.625.01l1.81 3.577.9 8.1c.08 2.346 3.528 2.522 3.375.1l-.875-9.15-2.645-8.006c-.122-.391-.087-.854-.09-1.217v-1.717c-.021-.972.448-1.009.953-.18l4.42 5.72c.325.436.86.616 1.358.508l11.155 16.242.4-.15-10.794-16.563a1.336 1.336 0 0 0 .03-1.641l-7.248-9.875c-1.18-1.389-1.367-2.45-3.651-2.545" style="stroke-width:1.7;stroke-linecap:round" transform="translate(-126.85 -87.816)"/>`;
const _DefaultDesc = `Accessibility, blind or low vision`;
const _DefaultTitle = "Accessibility, blind or low vision";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Ac009AccessibilityBlindOrLowVision extends HTMLElement {
  static readonly tagName = "pi-ac-009-accessibility-blind-or-low-vision";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-ac-009-accessibility-blind-or-low-vision`;
    const titleId = `pi-title-ac-009-accessibility-blind-or-low-vision`;
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

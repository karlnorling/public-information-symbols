// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M90.782 69.064h52.917v52.917H90.782z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-90.782 -69.064)"/><path d="M112.35 77.466c-1.78 0-3.228 1.427-3.228 3.203 0 1.756 1.448 3.203 3.228 3.203 1.795 0 3.234-1.447 3.234-3.203 0-1.776-1.439-3.203-3.234-3.203m.444 7.143a3 3 0 0 0-.414.02c-1.491.169-2.577 1.322-2.434 2.586l1.224 10.84c.621 1.736 1.666 2.105 3.228 2.086h8.096l3.848 8.844c.441 1.013 1.535 1.507 2.452 1.107l.166-.072c.918-.4 1.301-1.536.86-2.549l-4.215-9.686c-.542-1.054-.991-1.314-2.127-1.361h-7.04l-.363-3.216h6.015c.697 0 1.259-.562 1.259-1.26 0-.697-.562-1.258-1.26-1.258h-6.298l-.461-4.082c-.13-1.146-1.223-1.978-2.536-1.999m-3.209 7.735c-3.08 2.093-5.108 5.624-5.108 9.616 0 6.401 5.217 11.619 11.619 11.619 3.75 0 7.092-1.79 9.218-4.56l-1.226-2.817a9.02 9.02 0 0 1-7.992 4.8 9.024 9.024 0 0 1-9.043-9.042 9.02 9.02 0 0 1 2.81-6.562z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:.0797928" transform="translate(-90.782 -69.064)"/>`;
const _DefaultDesc = `Full accessibility or toilets - accessible`;
const _DefaultTitle = "Full accessibility or toilets - accessible";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Ac001FullAccessibilityOrToiletsAccessible extends HTMLElement {
  static readonly tagName = "pi-ac-001-full-accessibility-or-toilets-accessible";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-ac-001-full-accessibility-or-toilets-accessible`;
    const titleId = `pi-title-ac-001-full-accessibility-or-toilets-accessible`;
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

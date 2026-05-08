// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.199 79.896h52.917v52.917H78.199z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.199 -79.896)"/><path d="M95.016 94.776a.782.782 0 0 0-.137 1.555l9.767 1.624 4.336.775 4.34-.764 9.767-1.625a.782.782 0 0 0-.137-1.555q-.06.001-.12.01l-10.47 1.742a.78.78 0 0 0-.535 1.191l-2.815.512-2.872-.522a.784.784 0 0 0-.533-1.191l-10.472-1.741a1 1 0 0 0-.119-.011m-8.36.82c-.191-.002-.403.203-.745.622-.549.675-.329.993-.07 1.768l2.616 5.02c.448.84 1.142.815 1.909 1.062.353.07 4.083.96 5.763 1.36 1.13.278 1.874 1.054 2.487 2.044l2.948 4.763c.797 1.312 1.631 1.367 2.793 1.367h2.783l1.535 3.33h-6.92v1h19.125a2.07 2.07 0 0 0 1.406-.55c.353-.322.594-.72.808-1.115a.5.5 0 0 0-.199-.68.5.5 0 0 0-.68.201c-.195.36-.393.664-.603.856a.98.98 0 0 1-.732.288h-5.65l-1.536-3.33h5.75c4.742-.262 4.13-11.592-2.985-11.868h-5.717a1.663 1.863 0 0 0-1.661-1.804 1.663 1.863 0 0 0-1.661 1.804H90.154l-2.829-5.445c-.279-.445-.456-.679-.651-.693zm15.012 7.075h11.288v5.7c0-.1-6.338 0-6.338 0-4.39-.073-4.99-2.38-4.95-5.7m12.069 0h2.05c3.308.027 5.37 2.276 5.375 5.7h-7.425zm-5.495 10.931h4.352l1.535 3.33h-4.352z" style="display:inline;fill:#000;stroke-width:.7" transform="translate(-78.199 -79.896)"/>`;
const _DefaultDesc = `Heliport, or Helicopters`;
const _DefaultTitle = "Heliport, or Helicopters";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tf005HeliportOrHelicopters extends HTMLElement {
  static readonly tagName = "pi-tf-005-heliport-or-helicopters";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tf-005-heliport-or-helicopters`;
    const titleId = `pi-title-tf-005-heliport-or-helicopters`;
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

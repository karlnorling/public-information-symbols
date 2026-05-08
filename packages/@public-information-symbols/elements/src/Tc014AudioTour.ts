// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M60.611 106.727h52.917v52.917H60.611z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-60.611 -106.727)"/><path d="M87.01 116.03a13.687 13.687 0 0 0-13.469 15.746 4.8 4.8 0 0 0-.97 4.646 4.8 4.8 0 0 0 4.65 3.327l-2.377-9.014-.052.032a12.322 12.322 0 1 1 24.556-.003l-.054-.03-2.376 9.015a4.8 4.8 0 0 0 4.65-3.327 4.8 4.8 0 0 0-.97-4.647 13.69 13.69 0 0 0-5.646-13.247 13.67 13.67 0 0 0-7.69-2.496zm.056 12.485a1.67 1.67 0 1 0 0 3.339 1.67 1.67 0 0 0 0-3.34m-9.42 1.734-1.457.384 2.37 8.991 1.456-.383zm18.848 0-2.37 8.992 1.455.383 2.37-8.99zm-11.372 2.045c-.568.074-.69.412-.845.79l-2.042 6.466c-.124.392.058.795.407.906.35.11.73-.117.854-.508l1.689-5.348v3.717l-1.598 10.954a.93.93 0 0 0 .788 1.057l.023.003a.93.93 0 0 0 1.057-.788l1.218-8.354c.008-.268.775-.278.794.008l1.217 8.346a.93.93 0 0 0 1.057.788l.022-.003a.93.93 0 0 0 .789-1.057l-1.598-10.955V134.6l1.69 5.349c.123.391.503.618.852.507.35-.11.532-.514.408-.905l-2.042-6.467c-.153-.435-.457-.78-.846-.789h-3.163z" style="stroke-width:.609185" transform="translate(-60.611 -106.727)"/>`;
const _DefaultDesc = `Audio tour`;
const _DefaultTitle = "Audio tour";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tc014AudioTour extends HTMLElement {
  static readonly tagName = "pi-tc-014-audio-tour";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tc-014-audio-tour`;
    const titleId = `pi-title-tc-014-audio-tour`;
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

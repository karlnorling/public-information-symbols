// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M179.462 95.17h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-179.462 -95.17)"/><path d="m193.193 101.321-.091.064c-4.388 3.154-4.758 8.861-4.696 11.245v22.591h6.972a.873.873 0 0 0 .86 1.031h7.53c.774-.001.646.882.196.901h-6.5a.3.3 0 0 1-.173-.05h-.237a.873.873 0 0 0-.875.875c0 .485.39.875.875.875h7.735c.637-.02.566.836.174.85h-5.434a.873.873 0 0 0-.875.875c0 .485.39.875.875.875h7.816c2.836 1.109 6.434.106 8.594-.975h7.5v-7.65h-7.35c-.486 0-1.622-3.895-5.55-3.9l-6.567-.001q-.119.001-.216.02V124.3h4.425q.223.035.454.035c1.652 0 3.052-1.384 4.03-3.455.98-2.072 1.571-4.89 1.571-7.998 0-3.11-.592-5.925-1.57-7.997-.979-2.07-2.379-3.455-4.031-3.455q-.533.002-1.028.185v-.294zm.254.7h13.382c-.873.593-1.626 1.6-2.224 2.864-.86 1.822-1.421 4.22-1.544 6.885h-.004v.097a24 24 0 0 0 0 2.03v20.625h-13.951v-21.338h.5v-.7h-.502c-.041-2.33.412-7.573 4.344-10.464zm15.188.128c1.24 0 2.463 1.1 3.38 3.043.919 1.944 1.5 4.673 1.5 7.69s-.581 5.746-1.5 7.69c-.917 1.943-2.14 3.042-3.38 3.042-1.241 0-2.46-1.1-3.379-3.043-.918-1.943-1.5-4.672-1.5-7.69 0-3.016.582-5.745 1.5-7.689s2.138-3.043 3.379-3.043m0 6.841a1.839 3.892 0 0 0-1.838 3.892 1.839 3.892 0 0 0 1.839 3.892 1.839 3.892 0 0 0 1.838-3.892 1.839 3.892 0 0 0-1.838-3.892m-17.93 3.493v.702h2.051v-.702zm3.076 0v.702h1.9v-.702zm3.125 0v.702h1.975v-.702zm2.975 0v.702h2.125v-.702zm3.875 6.065c.234.85.52 1.633.85 2.332.55 1.165 1.233 2.112 2.02 2.718h-2.87zm0 11.774q.04.029.082.055c.692.42 1.373.748 2.14.762.944.029 2.641.02 3.586.042.534.032.502.671-.015.671h-5.793zm0 3.28h.11c.665.003.618.89-.044.9h-.066z" style="color:#000;fill:#000;-inkscape-stroke:none" transform="translate(-179.462 -95.17)"/>`;
const _DefaultDesc = `Toilet paper`;
const _DefaultTitle = "Toilet paper";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Pf076ToiletPaper extends HTMLElement {
  static readonly tagName = "pi-pf-076-toilet-paper";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-pf-076-toilet-paper`;
    const titleId = `pi-title-pf-076-toilet-paper`;
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

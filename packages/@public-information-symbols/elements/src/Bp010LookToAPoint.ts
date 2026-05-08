// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M44.092 117.051h52.917v52.917H44.092z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-44.092 -117.051)"/><path d="M51.648 124.094a.3.3 0 0 0-.081.59c2.978.727 4.561 1.781 7.08 3.477 3.587 2.88 5.08 10 6.596 16.644.158.796.31 1.657.185 2.242-.062.293-.176.508-.382.665-.205.156-.525.265-1.033.265h-1.606l.014.002c-.07-.003-.124-.009-.188-.008s-.157.002-.261.078a.42.42 0 0 0-.157.271c-.01.074-.01.132-.01.204v3.48c-.01 1.824-1.944 4.228-5.2 4.369-.146-.006-.278-.027-.442.086a.47.47 0 0 0-.17.244.7.7 0 0 0-.02.221v2.678c.025.548-.168 1.261-.527 1.808-.358.547-.85.916-1.457.916h-2.502a.3.3 0 0 0 0 .6h2.502c.852 0 1.527-.526 1.96-1.186.432-.66.655-1.465.624-2.166v-2.605c.02-.002-.008.003.023.004h.024c3.546-.148 5.775-2.734 5.785-4.969v-3.425h1.608c.595 0 1.06-.134 1.396-.39.337-.257.523-.625.606-1.016.165-.782-.025-1.686-.184-2.484v-.004l-.002-.004c-1.515-6.638-2.915-13.866-6.81-16.99l-.01-.008-.01-.008c-2.532-1.705-4.222-2.823-7.291-3.573a.2.2 0 0 0-.06-.007zm27.753 12.962-.301.52 4.049 2.337h-3.496v.602h3.498l-4.051 2.338.3.52c1.932-1.127 3.754-2.153 5.45-3.15a1440 1440 0 0 0-5.45-3.167m8.662 1.14a1.85 1.85 0 0 0-1.85 1.85 1.85 1.85 0 0 0 1.85 1.85 1.85 1.85 0 0 0 1.85-1.85 1.85 1.85 0 0 0-1.85-1.85m-29.683.213a1.575 1.575 0 1 0 0 3.15 1.575 1.575 0 0 0 0-3.15m8.71 1.504v.602h1.742v-.602zm3.356 0v.602h2.883v-.602zm4.668 0v.602h3.011v-.602z" style="color:#000;fill:#000;stroke-linecap:round" transform="translate(-44.092 -117.051)"/>`;
const _DefaultDesc = `Look to a point`;
const _DefaultTitle = "Look to a point";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Bp010LookToAPoint extends HTMLElement {
  static readonly tagName = "pi-bp-010-look-to-a-point";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-bp-010-look-to-a-point`;
    const titleId = `pi-title-bp-010-look-to-a-point`;
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

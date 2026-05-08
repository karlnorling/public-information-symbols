// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M169.412 177.929h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-169.412 -177.929)"/><path d="M199.154 187.9a1.5 1.5 0 0 0-.369.051l-18.359 4.92a1.47 1.47 0 0 0-1.042 1.805l.138.515.016.054.303 1.132a.31.31 0 0 0 .384.221l.312-.083.679 2.533a.31.31 0 0 0 .383.22l.092-.023a.31.31 0 0 0 .221-.384l-.678-2.533 1.436-.385.678 2.533a.313.313 0 0 0 .384.222l.092-.025a.31.31 0 0 0 .22-.383l-.678-2.534 1.436-.385.68 2.534a.31.31 0 0 0 .382.221l.092-.024a.31.31 0 0 0 .221-.384l-.678-2.533 1.436-.385.679 2.534a.31.31 0 0 0 .383.22l.092-.024a.31.31 0 0 0 .221-.383l-.679-2.534 1.437-.384.679 2.533a.31.31 0 0 0 .383.221l.092-.024a.31.31 0 0 0 .22-.383l-.678-2.534 1.436-.385.679 2.534a.313.313 0 0 0 .384.22l.091-.024a.31.31 0 0 0 .222-.383l-.68-2.533 1.437-.385.68 2.533a.31.31 0 0 0 .382.222l.092-.025a.31.31 0 0 0 .22-.384l-.678-2.533 1.437-.385.678 2.533a.313.313 0 0 0 .384.222l.091-.024a.313.313 0 0 0 .222-.384l-.679-2.533 1.437-.385.679 2.533a.31.31 0 0 0 .383.222l.092-.025a.31.31 0 0 0 .22-.383l-.678-2.533 1.436-.385.679 2.533a.313.313 0 0 0 .383.222l.092-.025a.31.31 0 0 0 .221-.384l-.679-2.533.397-.106a.31.31 0 0 0 .221-.383l-.303-1.132-.012-.056-.138-.514a1.47 1.47 0 0 0-1.437-1.094zm-.229 20.387-7.375 4.386-9.381 2.882c-1.627.41-2.98 1.232-3.325 2.311l-.91 3.01h18.678c2.35-1.46 4.82-2.506 7.512-2.43l.022 2.43h7.953c.657-3.496 3.381-9.095.409-11.838-4.667 1.729-9.67 4.519-13.583-.751z" style="fill:#000;stroke:#000;stroke-width:.352777" transform="translate(-169.412 -177.929)"/>`;
const _DefaultDesc = `Shoeshine`;
const _DefaultTitle = "Shoeshine";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Cf019Shoeshine extends HTMLElement {
  static readonly tagName = "pi-cf-019-shoeshine";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-cf-019-shoeshine`;
    const titleId = `pi-title-cf-019-shoeshine`;
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

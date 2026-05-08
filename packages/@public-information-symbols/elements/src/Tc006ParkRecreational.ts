// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M124.703 190.703h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-124.703 -190.703)"/><path d="M145.017 200.982c-5.705 0-8.678 4.24-8.678 8.987q.003.132.01.262c-1.759 1.182-2.779 2.976-2.78 5.095a6.36 6.36 0 0 0 6.363 6.362c1.28 0 2.518-.428 3.558-1.152l-.913 12.805h4.744c-.45-5.088-1.003-10.132-.935-15.212q.182-.029.363-.066a5.2 5.2 0 0 0 9.445-2.996c0-1.871-1.05-3.381-2.678-4.305q.05-.448.053-.898c0-4.748-2.914-8.882-8.551-8.882zm12.99 20.826-1.591 5.695h-3.448l-1.596 5.838h1.368l1.24-4.539h2.94l1.241 4.539h1.368l-1.24-4.539h3.66l-1.24 4.539h1.368l1.241-4.539h2.826l1.24 4.539h1.369l-1.653-6.046 1.534-5.487h-9.349zm.277 3.58h8.073l-.592 2.115h-8.072z" style="display:inline;fill:#1f0000;stroke-width:1.54932;stroke-linecap:round" transform="translate(-124.703 -190.703)"/>`;
const _DefaultDesc = `Park, recreational`;
const _DefaultTitle = "Park, recreational";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tc006ParkRecreational extends HTMLElement {
  static readonly tagName = "pi-tc-006-park-recreational";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tc-006-park-recreational`;
    const titleId = `pi-title-tc-006-park-recreational`;
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

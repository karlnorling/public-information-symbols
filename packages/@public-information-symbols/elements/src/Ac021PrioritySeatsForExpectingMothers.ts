// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M103.63 139.077h52.917v52.917H103.63z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-103.63 -139.077)"/><path d="M124.023 148.92a2.829 2.829 0 1 0 0 5.657 2.829 2.829 0 0 0 0-5.658m-.614 6.75q-.217 0-.433.044c-1.719.355-2.628 1.28-2.259 3.62l2.298 8.602c.354 1.902 1.416 3.03 3.563 3.014l6.987.03.326 9.55c.072.967.9 1.688 1.857 1.617a1.737 1.737 0 0 0 1.598-1.873l.223-9.481h1.177c.797.009 1.01-.74.567-1.384l-5.312-8.715c-1.782-2.305-4.625-2.132-6.915-.805-.952-2.84-2.313-4.212-3.677-4.219m-2.272 16.493v2.004h11.176v-2.004z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.2;stroke-linecap:round" transform="translate(-103.63 -139.077)"/>`;
const _DefaultDesc = `Priority seats for expecting mothers`;
const _DefaultTitle = "Priority seats for expecting mothers";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Ac021PrioritySeatsForExpectingMothers extends HTMLElement {
  static readonly tagName = "pi-ac-021-priority-seats-for-expecting-mothers";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-ac-021-priority-seats-for-expecting-mothers`;
    const titleId = `pi-title-ac-021-priority-seats-for-expecting-mothers`;
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

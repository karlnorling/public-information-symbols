// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M126.85 105.353h52.917v52.917H126.85z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-126.85 -105.353)"/><path d="M151.877 114.111c-1.323 0-3.32 1.327-4.18 2.247l.066.627 1.44-.026a2.63 2.63 0 0 0 2.603 3.039 2.634 2.634 0 0 0 2.586-3.135l.735-.014c-.074-1.415-1.575-2.738-3.25-2.738m2.56 5.552c-2.949 2.39-6 4.967-9.007 7.443a.88.88 0 0 0-.354.728h-2.11a.879.879 0 1 0 0 1.758h3.173l-2.624 5.734a7.2 7.2 0 0 0-2.157-.328c-3.997 0-7.258 3.26-7.258 7.258 0 3.997 3.261 7.256 7.258 7.256 3.998 0 7.256-3.259 7.256-7.256a7.27 7.27 0 0 0-3.497-6.204l3.763-8.218h-1.48l6.023-4.46 2.867 5.954h-5.566c-1.736.012-2.868 1.512-1.524 3.318l3.714 4.866c.057.039.09 8.545.09 8.545a1.579 1.579 0 0 0 3.157 0v-7.623l4.055-4.77 1.16 2.467a7.26 7.26 0 0 0-3.373 6.125c0 3.997 3.259 7.256 7.256 7.256s7.258-3.259 7.258-7.256-3.261-7.258-7.258-7.258c-.802 0-1.574.134-2.296.376l-1.497-3.18c1.138-1.044.698-2.282.125-3.496-1.43-2.865-2.999-5.954-4.4-8.774-.651-1.096-1.668-1.068-2.753-.261m-.97 12.893h3.182l-1.718 2.45zm-12.109 4.2q.738.002 1.418.184l-2.217 4.843a.879.879 0 1 0 1.598.732l2.225-4.858a5.49 5.49 0 0 1 2.474 4.599 5.484 5.484 0 0 1-5.498 5.498 5.484 5.484 0 0 1-5.497-5.498c0-3.047 2.45-5.5 5.497-5.5m23.9 0a5.486 5.486 0 0 1 5.499 5.5 5.484 5.484 0 0 1-5.498 5.498 5.484 5.484 0 0 1-5.498-5.498c0-1.882.936-3.536 2.368-4.527l2.265 4.812a.879.879 0 1 0 1.59-.748l-2.268-4.818a5.5 5.5 0 0 1 1.543-.219" style="color:#000;fill:#000;-inkscape-stroke:none" transform="translate(-126.85 -105.353)"/>`;
const _DefaultDesc = `Bicycle, or Cycle facility`;
const _DefaultTitle = "Bicycle, or Cycle facility";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tf010BicycleOrCycleFacility extends HTMLElement {
  static readonly tagName = "pi-tf-010-bicycle-or-cycle-facility";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tf-010-bicycle-or-cycle-facility`;
    const titleId = `pi-title-tf-010-bicycle-or-cycle-facility`;
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

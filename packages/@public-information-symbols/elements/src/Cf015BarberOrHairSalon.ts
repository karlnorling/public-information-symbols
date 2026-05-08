// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M37.767 229.735h52.917v52.917H37.767z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-37.767 -229.735)"/><path d="M59.252 239.237c-1.658-.002-2.28 11.77-2.267 13.666-.029 3.43.013 6.859.055 10.289a3.748 3.748 0 1 0 1.801 3.038l-.104-8.605c0-.56.285-.658.547-.668a.4.4 0 0 1 .31.11c.08.077.178.216.18.581l.006 8.647h.003q-.004.072-.005.146a3.75 3.75 0 0 0 2.844 3.635v.717c.004 1.413 1.129 2.337 2.204 2.357a.783.783 0 1 0 .029-1.565c-.272-.005-.665-.15-.668-.794v-.661a3.748 3.748 0 0 0-.66-7.437c-.702 0-1.389.198-1.983.57.12-3.454.066-6.906.002-10.36-.002-2.153-.524-13.675-2.293-13.666zm9.398.324a.72.72 0 0 0-.721.721c0 .4.322.722.721.722h5.417l-.004.076v.8H68.65a.72.72 0 0 0-.721.722c0 .4.321.721.721.721h5.413v.876H68.65a.72.72 0 0 0-.721.722c0 .4.321.721.721.721h5.413v.877H68.65a.72.72 0 0 0-.721.721c0 .4.321.72.721.72h5.413v.877H68.65a.72.72 0 0 0-.721.722c0 .4.321.721.721.721h5.413v.877H68.65a.72.72 0 0 0-.721.721c0 .4.321.721.721.721h5.413v.877H68.65a.72.72 0 0 0-.721.721c0 .4.321.722.721.722h5.413v.876H68.65a.72.72 0 0 0-.721.721c0 .4.321.722.721.722h5.413v.876H68.65a.72.72 0 0 0-.721.722c0 .4.321.721.721.721h5.413v11.884c0 .842.678 1.52 1.52 1.52.841 0 1.519-.678 1.519-1.52v-30.36c0-.842-.678-1.52-1.52-1.52l-.068.004h-.002l-.072-.004zm-13.552 24.995a1.84 1.84 0 1 1 0 3.681 1.84 1.84 0 0 1 0-3.681m8.427.044a1.84 1.84 0 1 1 0 3.682 1.84 1.84 0 0 1 0-3.682" style="fill:#000;stroke-width:1.8" transform="translate(-37.767 -229.735)"/>`;
const _DefaultDesc = `Barber or Hair salon`;
const _DefaultTitle = "Barber or Hair salon";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Cf015BarberOrHairSalon extends HTMLElement {
  static readonly tagName = "pi-cf-015-barber-or-hair-salon";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-cf-015-barber-or-hair-salon`;
    const titleId = `pi-title-cf-015-barber-or-hair-salon`;
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

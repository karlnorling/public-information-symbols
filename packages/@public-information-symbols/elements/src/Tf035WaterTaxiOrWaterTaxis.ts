// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M135.703 52.316h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-135.703 -52.316)"/><path d="M156.822 62.313a.65.65 0 0 0-.654.654v3.324c0 .362.292.654.654.654H167.5a.653.653 0 0 0 .654-.654v-3.324a.65.65 0 0 0-.654-.654zm.379.748h2.665v.555h-.993v2.728h-.677v-2.728h-.995zm3.72 0h.717l1.343 3.283h-.738l-.292-.746h-1.34l-.278.746h-.719zm2.186 0h.79l.673 1.055.66-1.055h.785l-1.044 1.594 1.147 1.689h-.817l-.744-1.135-.746 1.135H163l1.146-1.713zm3.338 0h.677v3.283h-.677zm-5.174.766-.453 1.218h.916zm-9.285 5.165a235 235 0 0 1-2.243 8.492q-1.227.401-2.452.82c.062 2.963.915 5.639 1.896 8.337a11.6 11.6 0 0 1 3.41-.727c2.704-.185 4.337.494 5.877 1.135 1.114.463 2.174.904 3.56.887 1.658-.02 3.096-.6 4.46-1.151 1.366-.552 2.664-1.075 4.162-1.088 1.795-.014 3.122.503 4.43 1.014l.021.008c.993-2.725 1.862-5.423 1.925-8.415q-1.424-.488-2.852-.95l-2.243-8.362c-6.732-.642-13.457-.51-19.951 0m18.692 1.582 1.65 6.195c-3.534-.997-7.006-2.087-10.176-2.37-3.711.375-7.549 1.564-10.652 2.524l1.73-6.349c5.875-.498 11.858-.52 17.448 0m.25 17.376c-1.498.012-2.797.536-4.163 1.088-1.363.55-2.801 1.13-4.46 1.15-1.385.018-2.445-.424-3.56-.887-1.54-.64-3.172-1.32-5.876-1.134-2.113.144-3.387.692-4.532 1.183-1.286.553-2.384 1.024-4.595.539l-.442-.114c.097.746.095 1.646 1.022 1.774 2.116.29 3.301-.218 4.661-.802 1.02-.438 2.154-.925 3.997-1.051 2.318-.159 3.77.445 5.138 1.014 1.268.527 2.474 1.029 4.206 1.008 1.975-.024 3.554-.661 5.05-1.265 1.225-.494 2.389-.964 3.567-.974 1.475-.012 2.66.45 3.828.906 1.606.627 3.185 1.243 5.474.867.604-.15.712-.895.78-1.737l-.449.106c-2.188.525-3.687-.06-5.215-.657-1.31-.511-2.637-1.029-4.431-1.014m0 3.516c-1.498.013-2.797.537-4.163 1.088-1.363.55-2.801 1.132-4.46 1.152-1.385.016-2.445-.425-3.56-.888-1.54-.64-3.172-1.319-5.876-1.134-2.113.145-3.387.691-4.532 1.183-1.286.552-2.384 1.023-4.595.538l-.442-.114c.097.746.095 1.646 1.022 1.774 2.116.291 3.301-.218 4.661-.801 1.02-.438 2.154-.925 3.997-1.051 2.318-.16 3.77.445 5.138 1.014 1.268.527 2.474 1.028 4.206 1.008 1.975-.024 3.554-.662 5.05-1.266 1.225-.494 2.389-.964 3.567-.974 1.475-.012 2.66.45 3.828.906 1.606.627 3.185 1.244 5.474.868.604-.151.712-.896.78-1.738l-.449.106c-2.188.525-3.687-.06-5.215-.656-1.31-.511-2.637-1.03-4.431-1.015" style="display:inline;fill:#000;stroke-width:1.8" transform="translate(-135.703 -52.316)"/>`;
const _DefaultDesc = `Water taxi, or Water taxis`;
const _DefaultTitle = "Water taxi, or Water taxis";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tf035WaterTaxiOrWaterTaxis extends HTMLElement {
  static readonly tagName = "pi-tf-035-water-taxi-or-water-taxis";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tf-035-water-taxi-or-water-taxis`;
    const titleId = `pi-title-tf-035-water-taxi-or-water-taxis`;
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

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M45.124 81.26h52.917v52.917H45.124z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-45.124 -81.26)"/><path d="M57.846 88.057c-.536.001-1.072.283-1.184.634l-4.027 8.905-.325.322.313.308 12.671 12.604 7.909-8.174.008-.008c.272-.313.41-.736.36-1.148-.051-.412-.306-.831-.665-1.157l-10.57-10.618c-.384-.366-1.049-.314-1.667.036q-.18.105-.354.244l-1.688-1.688c-.22-.184-.5-.26-.781-.26m20.383.284 1.11 2.418h6.632l.228-1.17zm-16.664 2.032c.13-.003.232.042.356.154L72.33 100.99c.318.335.432.782.15 1.16l-6.193 6.402 3.426-7.653c.275-.614.16-1.358-.28-1.778l-8.491-8.49c.186-.13.358-.207.482-.24a1 1 0 0 1 .142-.018m17.967 1.31-1.272 1.38h.995a3.363 3.363 0 0 0 3.338 3.748c1.716-.001 3.365-1.498 3.363-3.363v-1.765zm-1.727 6.233a2.855 2.855 0 0 0-2.861 2.86c.003 3.46.006 6.906.006 10.372h2.799v-7.578a.27.27 0 0 1 .272-.271h.545c.15 0 .272.12.272.271v7.578h8.207v-7.578a.27.27 0 0 1 .272-.271h.544c.151 0 .273.12.273.271v7.578h2.8c-.005-3.461.005-6.919.005-10.371a2.855 2.855 0 0 0-3.352-2.819 1.4 1.4 0 0 0-.196-.012h-2.984l-1.43 3.74h-.016l-1.661-3.77h-3.332v.005a3 3 0 0 0-.163-.005m-24.277 15.14c-.721 0-1.301.58-1.301 1.301 0 .72.58 1.301 1.3 1.301H89.64c.72 0 1.3-.58 1.3-1.3s-.58-1.301-1.3-1.301zm9.508 5.745 3.125 3.126h-5.765v2.327h5.765l-3.125 3.126h2.691l4.29-4.29-4.29-4.289z" style="display:inline;fill:#000;stroke-width:3.94633" transform="translate(-45.124 -81.26)"/>`;
const _DefaultDesc = `Manual passport control`;
const _DefaultTitle = "Manual passport control";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Bp011ManualPassportControl extends HTMLElement {
  static readonly tagName = "pi-bp-011-manual-passport-control";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-bp-011-manual-passport-control`;
    const titleId = `pi-title-bp-011-manual-passport-control`;
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
